import { getSession, signOut } from "next-auth/react";
import Moralis from "moralis";
import { useState } from "react";
import axios from "axios";
import { useSendTransaction } from "wagmi";

const CONTRACTS = {
  "BNB": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
  "DAI": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
}

const CHAIN_IDS = {
  BEP20: 56,
}

const chainId = CHAIN_IDS.BEP20

function User({ user, balance }) {
  const [fromToken, setFromToken] = useState(CONTRACTS["BNB"]);
  const [toToken, setToToken] = useState(Object.values(CONTRACTS)[0]);

  const [value, setValue] = useState("1000000000000000000");
  const [valueExchanged, setValueExchanged] = useState("");
  const [valueExchangedDecimals, setValueExchangedDecimals] = useState(1e18);
  const [to, setTo] = useState("");
  const [txData, setTxData] = useState("");


  const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
      request: {
          from: user.address,
          to: String(to),
          data: String(txData),
          value: String(value),
      },
  })


  function changeToToken(e){
    setToToken(e.target.value);
    setValueExchanged("");
  }

  function changeFromToken(e){
    setFromToken(e.target.value);
    setValueExchanged("");
  }

  function changeValue(e){
    setValue(e.target.value * 1E18);
    setValueExchanged("");
  }

  async function get1inchSwap(){
    console.log("getting swap...");
    const tx = await axios.get(`https://api.1inch.io/v4.0/${chainId}/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${value}&fromAddress=${user.address}&slippage=20`);    
    console.log("get1inchSwap ~ tx", tx);

    setTo(tx.data.tx.to);
    setTxData(tx.data.tx.data);
    setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`));
    setValueExchanged(tx.data.toTokenAmount);
  }

  return (
    <div>
      <div>User: {user.address}</div>
      <div>Your Balance: {(balance.balance / 1e18).toFixed(3)}</div>
      <select name="fromToken" value={fromToken} onChange={(e) => changeFromToken(e)}>
        {Object.keys(CONTRACTS).map(key => <option key={"from" + key} value={CONTRACTS[key]}>{key}</option>)}
      </select>
      <input
        onChange={(e) => changeValue(e)}
        value={value / 1e18}
        type="number"
        min={0}
        max={balance.balance / 1e18}
      ></input>
      <br />
      <br />
      <select name="toToken" value={toToken} onChange={(e) => changeToToken(e)}>
        {Object.keys(CONTRACTS).map(key => <option key={"to" + key} value={CONTRACTS[key]}>{key}</option>)}
      </select>
      <input
        value={
          !valueExchanged
            ? ""
            : (valueExchanged / valueExchangedDecimals).toFixed(5)
        }
        disabled={true}
      ></input>
      <br />
      <br />
      <button onClick={get1inchSwap}>Get Conversion</button>
      <button disabled={!valueExchanged} onClick={sendTransaction}>Swap Tokens</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      <br />
      <br />
      <button onClick={() => signOut({ redirect: "/signin" })}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const response = await Moralis.EvmApi.account.getNativeBalance({
    address: session.user.address,
    chain: 0x89,
  });

  return {
    props: { user: session.user, balance: response.raw },
  };
}

export default User;

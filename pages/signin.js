import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import axios from "axios";

function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (wal) => {
    if (isConnected) {
      await disconnectAsync();
    }

    const userData = { network: "evm" };

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector({}),
    });
    userData.address = account;
    userData.chain = chain.id;

    console.log("Sending ACC data to Moralis Auth API");

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "content-type": "application/json",
      },
    });

    console.log("Received signature request");

    const message = data.message;

    const signature = await signMessageAsync({ message });

    console.log("redirect user to /user");

    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });

    push(url);
  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>
        Authenticate via Metamask
      </button>
    </div>
  );
}

export default SignIn;

"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst CONTRACTS = {\n    \"BNB\": \"0xB8c77482e45F1F44dE1745F52C74426C631bDD52\",\n    \"BUSD\": \"0x4fabb145d64652a948d72533023f6e7a623c7c53\",\n    \"DAI\": \"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3\"\n};\nconst CHAIN_IDS = {\n    BEP20: 56\n};\nconst chainId = CHAIN_IDS.BEP20;\nfunction User({ user , balance  }) {\n    const { 0: fromToken , 1: setFromToken  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(CONTRACTS[\"BNB\"]);\n    const { 0: toToken , 1: setToToken  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object.values(CONTRACTS)[0]);\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000000\");\n    const { 0: valueExchanged , 1: setValueExchanged  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: valueExchangedDecimals , 1: setValueExchangedDecimals  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18);\n    const { 0: to , 1: setTo  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { 0: txData , 1: setTxData  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { data , isLoading , isSuccess , sendTransaction  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    });\n    function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    }\n    function changeFromToken(e) {\n        setFromToken(e.target.value);\n        setValueExchanged(\"\");\n    }\n    function changeValue(e) {\n        setValue(e.target.value * 1E18);\n        setValueExchanged(\"\");\n    }\n    async function get1inchSwap() {\n        console.log(\"getting swap...\");\n        const tx = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`https://api.1inch.io/v4.0/${chainId}/swap?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${value}&fromAddress=${user.address}&slippage=20`);\n        console.log(\"get1inchSwap ~ tx\", tx);\n        setTo(tx.data.tx.to);\n        setTxData(tx.data.tx.data);\n        setValueExchangedDecimals(Number(`1E${tx.data.toToken.decimals}`));\n        setValueExchanged(tx.data.toTokenAmount);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Balance: \",\n                    (balance.balance / 1e18).toFixed(3)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"fromToken\",\n                value: fromToken,\n                onChange: (e)=>changeFromToken(e),\n                children: Object.keys(CONTRACTS).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"from\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 71,\n                        columnNumber: 44\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>changeValue(e),\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: (e)=>changeToToken(e),\n                children: Object.keys(CONTRACTS).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"to\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 83,\n                        columnNumber: 44\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(5),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 97,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 98,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n                        redirect: \"/signin\"\n                    }),\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/signin\",\n                permanent: false\n            }\n        };\n    }\n    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const response = await moralis__WEBPACK_IMPORTED_MODULE_2___default().EvmApi.account.getNativeBalance({\n        address: session.user.address,\n        chain: 0x89\n    });\n    return {\n        props: {\n            user: session.user,\n            balance: response.raw\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly93ZWIzYXV0aC8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTW9yYWxpcyBmcm9tIFwibW9yYWxpc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVNlbmRUcmFuc2FjdGlvbiB9IGZyb20gXCJ3YWdtaVwiO1xyXG5cclxuY29uc3QgQ09OVFJBQ1RTID0ge1xyXG4gIFwiQk5CXCI6IFwiMHhCOGM3NzQ4MmU0NUYxRjQ0ZEUxNzQ1RjUyQzc0NDI2QzYzMWJERDUyXCIsXHJcbiAgXCJCVVNEXCI6IFwiMHg0ZmFiYjE0NWQ2NDY1MmE5NDhkNzI1MzMwMjNmNmU3YTYyM2M3YzUzXCIsXHJcbiAgXCJEQUlcIjogXCIweDFhZjNmMzI5ZThiZTE1NDA3NGQ4NzY5ZDFmZmE0ZWUwNThiMWRiYzNcIixcclxufVxyXG5cclxuY29uc3QgQ0hBSU5fSURTID0ge1xyXG4gIEJFUDIwOiA1NixcclxufVxyXG5cclxuY29uc3QgY2hhaW5JZCA9IENIQUlOX0lEUy5CRVAyMFxyXG5cclxuZnVuY3Rpb24gVXNlcih7IHVzZXIsIGJhbGFuY2UgfSkge1xyXG4gIGNvbnN0IFtmcm9tVG9rZW4sIHNldEZyb21Ub2tlbl0gPSB1c2VTdGF0ZShDT05UUkFDVFNbXCJCTkJcIl0pO1xyXG4gIGNvbnN0IFt0b1Rva2VuLCBzZXRUb1Rva2VuXSA9IHVzZVN0YXRlKE9iamVjdC52YWx1ZXMoQ09OVFJBQ1RTKVswXSk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDAwMDAwMDAwMDAwMDAwMDAwXCIpO1xyXG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZCwgc2V0VmFsdWVFeGNoYW5nZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMsIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHNdID0gdXNlU3RhdGUoMWUxOCk7XHJcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHhEYXRhLCBzZXRUeERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVNlbmRUcmFuc2FjdGlvbih7XHJcbiAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgIGZyb206IHVzZXIuYWRkcmVzcyxcclxuICAgICAgICAgIHRvOiBTdHJpbmcodG8pLFxyXG4gICAgICAgICAgZGF0YTogU3RyaW5nKHR4RGF0YSksXHJcbiAgICAgICAgICB2YWx1ZTogU3RyaW5nKHZhbHVlKSxcclxuICAgICAgfSxcclxuICB9KVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlVG9Ub2tlbihlKXtcclxuICAgIHNldFRvVG9rZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VGcm9tVG9rZW4oZSl7XHJcbiAgICBzZXRGcm9tVG9rZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShlKXtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlICogMUUxOCk7XHJcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldDFpbmNoU3dhcCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHN3YXAuLi5cIik7XHJcbiAgICBjb25zdCB0eCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuMWluY2guaW8vdjQuMC8ke2NoYWluSWR9L3N3YXA/ZnJvbVRva2VuQWRkcmVzcz0ke2Zyb21Ub2tlbn0mdG9Ub2tlbkFkZHJlc3M9JHt0b1Rva2VufSZhbW91bnQ9JHt2YWx1ZX0mZnJvbUFkZHJlc3M9JHt1c2VyLmFkZHJlc3N9JnNsaXBwYWdlPTIwYCk7ICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJnZXQxaW5jaFN3YXAgfiB0eFwiLCB0eCk7XHJcblxyXG4gICAgc2V0VG8odHguZGF0YS50eC50byk7XHJcbiAgICBzZXRUeERhdGEodHguZGF0YS50eC5kYXRhKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkKHR4LmRhdGEudG9Ub2tlbkFtb3VudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICA8ZGl2PllvdXIgQmFsYW5jZTogeyhiYWxhbmNlLmJhbGFuY2UgLyAxZTE4KS50b0ZpeGVkKDMpfTwvZGl2PlxyXG4gICAgICA8c2VsZWN0IG5hbWU9XCJmcm9tVG9rZW5cIiB2YWx1ZT17ZnJvbVRva2VufSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUZyb21Ub2tlbihlKX0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKENPTlRSQUNUUykubWFwKGtleSA9PiA8b3B0aW9uIGtleT17XCJmcm9tXCIgKyBrZXl9IHZhbHVlPXtDT05UUkFDVFNba2V5XX0+e2tleX08L29wdGlvbj4pfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlKX1cclxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG1pbj17MH1cclxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzZWxlY3QgbmFtZT1cInRvVG9rZW5cIiB2YWx1ZT17dG9Ub2tlbn0gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VUb1Rva2VuKGUpfT5cclxuICAgICAgICB7T2JqZWN0LmtleXMoQ09OVFJBQ1RTKS5tYXAoa2V5ID0+IDxvcHRpb24ga2V5PXtcInRvXCIgKyBrZXl9IHZhbHVlPXtDT05UUkFDVFNba2V5XX0+e2tleX08L29wdGlvbj4pfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgIXZhbHVlRXhjaGFuZ2VkXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6ICh2YWx1ZUV4Y2hhbmdlZCAvIHZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMpLnRvRml4ZWQoNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0MWluY2hTd2FwfT5HZXQgQ29udmVyc2lvbjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshdmFsdWVFeGNoYW5nZWR9IG9uQ2xpY2s9e3NlbmRUcmFuc2FjdGlvbn0+U3dhcCBUb2tlbnM8L2J1dHRvbj5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkNoZWNrIFdhbGxldDwvZGl2Pn1cclxuICAgICAge2lzU3VjY2VzcyAmJiA8ZGl2PlRyYW5zYWN0aW9uOiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+fVxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCh7IHJlZGlyZWN0OiBcIi9zaWduaW5cIiB9KX0+U2lnbiBvdXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IE1vcmFsaXMuRXZtQXBpLmFjY291bnQuZ2V0TmF0aXZlQmFsYW5jZSh7XHJcbiAgICBhZGRyZXNzOiBzZXNzaW9uLnVzZXIuYWRkcmVzcyxcclxuICAgIGNoYWluOiAweDg5LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyLCBiYWxhbmNlOiByZXNwb25zZS5yYXcgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInNpZ25PdXQiLCJNb3JhbGlzIiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbmRUcmFuc2FjdGlvbiIsIkNPTlRSQUNUUyIsIkNIQUlOX0lEUyIsIkJFUDIwIiwiY2hhaW5JZCIsIlVzZXIiLCJ1c2VyIiwiYmFsYW5jZSIsImZyb21Ub2tlbiIsInNldEZyb21Ub2tlbiIsInRvVG9rZW4iLCJzZXRUb1Rva2VuIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInZhbHVlRXhjaGFuZ2VkIiwic2V0VmFsdWVFeGNoYW5nZWQiLCJ2YWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwic2V0VmFsdWVFeGNoYW5nZWREZWNpbWFscyIsInRvIiwic2V0VG8iLCJ0eERhdGEiLCJzZXRUeERhdGEiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNTdWNjZXNzIiwic2VuZFRyYW5zYWN0aW9uIiwicmVxdWVzdCIsImZyb20iLCJhZGRyZXNzIiwiU3RyaW5nIiwiY2hhbmdlVG9Ub2tlbiIsImUiLCJ0YXJnZXQiLCJjaGFuZ2VGcm9tVG9rZW4iLCJjaGFuZ2VWYWx1ZSIsImdldDFpbmNoU3dhcCIsImNvbnNvbGUiLCJsb2ciLCJ0eCIsImdldCIsIk51bWJlciIsImRlY2ltYWxzIiwidG9Ub2tlbkFtb3VudCIsImRpdiIsInRvRml4ZWQiLCJzZWxlY3QiLCJuYW1lIiwib25DaGFuZ2UiLCJrZXlzIiwibWFwIiwia2V5Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwibWluIiwibWF4IiwiYnIiLCJkaXNhYmxlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJKU09OIiwic3RyaW5naWZ5IiwicmVkaXJlY3QiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50Iiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwicmVzcG9uc2UiLCJFdm1BcGkiLCJhY2NvdW50IiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwicHJvcHMiLCJyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user.js"));
module.exports = __webpack_exports__;

})();
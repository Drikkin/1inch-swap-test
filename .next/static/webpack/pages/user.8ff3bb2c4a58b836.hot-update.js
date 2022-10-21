"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar CONTRACTS = {\n    \"TUSD\": \"0xdAC17F958D2ee523a2206206994597C13D831ec7\",\n    \"MATIC\": \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n    \"DAI\": \"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3\",\n    \"1INCH\": \"0x111111111117dc0aa78b770fa6a738034120c302\",\n    \"BETH\": \"0x2170Ed0880ac9A755fd29B2688956BD959F933F8\",\n    \"BNB\": \"0xB8c77482e45F1F44dE1745F52C74426C631bDD52\",\n    \"BUSD\": \"0x4fabb145d64652a948d72533023f6e7a623c7c53\",\n    \"BSC-USD\": \"0x55d398326f99059fF775485246999027B3197955\"\n};\nvar CHAIN_IDS = {\n    BEP20: 56,\n    ETH2: 137,\n    ETH: 1\n};\nvar chainId = CHAIN_IDS.ETH2;\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var _this = this;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeFromToken = function changeFromToken(e) {\n        setFromToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1E18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object.values(CONTRACTS)[1]), fromToken = ref[0], setFromToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object.values(CONTRACTS)[0]), toToken = ref1[0], setToToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000000\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref3[0], setValueExchanged = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref4[0], setValueExchangedDecimals = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref5[0], setTo = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref6[0], setTxData = ref6[1];\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref7.data, isLoading = ref7.isLoading, isSuccess = ref7.isSuccess, sendTransaction = ref7.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/\".concat(chainId, \"/swap?fromTokenAddress=\").concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=20\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(\"get1inchSwap ~ tx\", tx);\n                        console.log(\"get1inchSwap ~ tx.data\", tx.data);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                        console.log(\"TO:\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Matic Balance: \",\n                    (balance.balance / 1e18).toFixed(3)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"fromToken\",\n                value: fromToken,\n                onChange: function(e) {\n                    return changeFromToken(e);\n                },\n                children: Object.keys(CONTRACTS).map(function(key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"from\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 79,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: Object.keys(CONTRACTS).map(function(key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"to\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 91,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(5),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 106,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"taMuOrCl8hYd7uNBGX802K0E0VI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGFBQVc7Ozs7O29CQUFTO1lBQ2hGRixTQUFTLGtCQUFJLDhEQUFDVyxLQUFHOzBCQUFDLGNBQVk7Ozs7O29CQUFNO1lBQ3BDVixTQUFTLGtCQUFJLDhEQUFDVSxLQUFHOztvQkFBQyxlQUFhO29CQUFDaUIsSUFBSSxDQUFDQyxTQUFTLENBQUM5QixJQUFJLENBQUM7Ozs7OztvQkFBTzswQkFDNUQsOERBQUN5QixJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQSxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDRSxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1sRSx3REFBTyxDQUFDO3dCQUFFcUUsUUFBUSxFQUFFLFNBQVM7cUJBQUUsQ0FBQztpQkFBQTswQkFBRSxVQUFROzs7OztvQkFBUzs7Ozs7O1lBQ3RFLENBQ047Q0FDSDtHQXRGUTNELElBQUk7O1FBVzZDUCxxREFBa0I7OztBQVhuRU8sS0FBQUEsSUFBSTs7QUFnSGIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyLmpzP2FhM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IE1vcmFsaXMgZnJvbSBcIm1vcmFsaXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTZW5kVHJhbnNhY3Rpb24gfSBmcm9tIFwid2FnbWlcIjtcclxuXHJcbmNvbnN0IENPTlRSQUNUUyA9IHtcclxuICBcIlRVU0RcIjogXCIweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzdcIixcclxuICBcIk1BVElDXCI6IFwiMHhFZWVlZUVlZWVFZUVlZUVlRWVFZWVFRUVlZWVlRWVlZWVlZWVFRWVFXCIsXHJcbiAgXCJEQUlcIjogXCIweDFhZjNmMzI5ZThiZTE1NDA3NGQ4NzY5ZDFmZmE0ZWUwNThiMWRiYzNcIixcclxuICBcIjFJTkNIXCI6IFwiMHgxMTExMTExMTExMTdkYzBhYTc4Yjc3MGZhNmE3MzgwMzQxMjBjMzAyXCIsXHJcbiAgXCJCRVRIXCI6IFwiMHgyMTcwRWQwODgwYWM5QTc1NWZkMjlCMjY4ODk1NkJEOTU5RjkzM0Y4XCIsXHJcbiAgXCJCTkJcIjogXCIweEI4Yzc3NDgyZTQ1RjFGNDRkRTE3NDVGNTJDNzQ0MjZDNjMxYkRENTJcIixcclxuICBcIkJVU0RcIjogXCIweDRmYWJiMTQ1ZDY0NjUyYTk0OGQ3MjUzMzAyM2Y2ZTdhNjIzYzdjNTNcIixcclxuICBcIkJTQy1VU0RcIjogXCIweDU1ZDM5ODMyNmY5OTA1OWZGNzc1NDg1MjQ2OTk5MDI3QjMxOTc5NTVcIixcclxufVxyXG5cclxuY29uc3QgQ0hBSU5fSURTID0ge1xyXG4gIEJFUDIwOiA1NixcclxuICBFVEgyOiAxMzcsXHJcbiAgRVRIOiAxXHJcbn1cclxuXHJcbmNvbnN0IGNoYWluSWQgPSBDSEFJTl9JRFMuRVRIMlxyXG5cclxuZnVuY3Rpb24gVXNlcih7IHVzZXIsIGJhbGFuY2UgfSkge1xyXG4gIGNvbnN0IFtmcm9tVG9rZW4sIHNldEZyb21Ub2tlbl0gPSB1c2VTdGF0ZShPYmplY3QudmFsdWVzKENPTlRSQUNUUylbMV0pO1xyXG4gIGNvbnN0IFt0b1Rva2VuLCBzZXRUb1Rva2VuXSA9IHVzZVN0YXRlKE9iamVjdC52YWx1ZXMoQ09OVFJBQ1RTKVswXSk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIxMDAwMDAwMDAwMDAwMDAwMDAwXCIpO1xyXG4gIGNvbnN0IFt2YWx1ZUV4Y2hhbmdlZCwgc2V0VmFsdWVFeGNoYW5nZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMsIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHNdID0gdXNlU3RhdGUoMWUxOCk7XHJcbiAgY29uc3QgW3RvLCBzZXRUb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHhEYXRhLCBzZXRUeERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBjb25zdCB7IGRhdGEsIGlzTG9hZGluZywgaXNTdWNjZXNzLCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVNlbmRUcmFuc2FjdGlvbih7XHJcbiAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgIGZyb206IHVzZXIuYWRkcmVzcyxcclxuICAgICAgICAgIHRvOiBTdHJpbmcodG8pLFxyXG4gICAgICAgICAgZGF0YTogU3RyaW5nKHR4RGF0YSksXHJcbiAgICAgICAgICB2YWx1ZTogU3RyaW5nKHZhbHVlKSxcclxuICAgICAgfSxcclxuICB9KVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlVG9Ub2tlbihlKXtcclxuICAgIHNldFRvVG9rZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VGcm9tVG9rZW4oZSl7XHJcbiAgICBzZXRGcm9tVG9rZW4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VmFsdWVFeGNoYW5nZWQoXCJcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZShlKXtcclxuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlICogMUUxOCk7XHJcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldDFpbmNoU3dhcCgpe1xyXG4gICAgY29uc3QgdHggPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLjFpbmNoLmlvL3Y0LjAvJHtjaGFpbklkfS9zd2FwP2Zyb21Ub2tlbkFkZHJlc3M9JHtmcm9tVG9rZW59JnRvVG9rZW5BZGRyZXNzPSR7dG9Ub2tlbn0mYW1vdW50PSR7dmFsdWV9JmZyb21BZGRyZXNzPSR7dXNlci5hZGRyZXNzfSZzbGlwcGFnZT0yMGApOyAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiZ2V0MWluY2hTd2FwIH4gdHhcIiwgdHgpO1xyXG4gICAgY29uc29sZS5sb2coXCJnZXQxaW5jaFN3YXAgfiB0eC5kYXRhXCIsIHR4LmRhdGEpO1xyXG4gICAgc2V0VG8odHguZGF0YS50eC50byk7XHJcbiAgICBzZXRUeERhdGEodHguZGF0YS50eC5kYXRhKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkKHR4LmRhdGEudG9Ub2tlbkFtb3VudCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUTzpcIilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlVzZXI6IHt1c2VyLmFkZHJlc3N9PC9kaXY+XHJcbiAgICAgIDxkaXY+WW91ciBNYXRpYyBCYWxhbmNlOiB7KGJhbGFuY2UuYmFsYW5jZSAvIDFlMTgpLnRvRml4ZWQoMyl9PC9kaXY+XHJcbiAgICAgIDxzZWxlY3QgbmFtZT1cImZyb21Ub2tlblwiIHZhbHVlPXtmcm9tVG9rZW59IG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlRnJvbVRva2VuKGUpfT5cclxuICAgICAgICB7T2JqZWN0LmtleXMoQ09OVFJBQ1RTKS5tYXAoa2V5ID0+IDxvcHRpb24ga2V5PXtcImZyb21cIiArIGtleX0gdmFsdWU9e0NPTlRSQUNUU1trZXldfT57a2V5fTwvb3B0aW9uPil9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVZhbHVlKGUpfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZSAvIDFlMTh9XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgbWluPXswfVxyXG4gICAgICAgIG1heD17YmFsYW5jZS5iYWxhbmNlIC8gMWUxOH1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHNlbGVjdCBuYW1lPVwidG9Ub2tlblwiIHZhbHVlPXt0b1Rva2VufSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVRvVG9rZW4oZSl9PlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhDT05UUkFDVFMpLm1hcChrZXkgPT4gPG9wdGlvbiBrZXk9e1widG9cIiArIGtleX0gdmFsdWU9e0NPTlRSQUNUU1trZXldfT57a2V5fTwvb3B0aW9uPil9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAhdmFsdWVFeGNoYW5nZWRcclxuICAgICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICAgIDogKHZhbHVlRXhjaGFuZ2VkIC8gdmFsdWVFeGNoYW5nZWREZWNpbWFscykudG9GaXhlZCg1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXQxaW5jaFN3YXB9PkdldCBDb252ZXJzaW9uPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9eyF2YWx1ZUV4Y2hhbmdlZH0gb25DbGljaz17c2VuZFRyYW5zYWN0aW9ufT5Td2FwIFRva2VuczwvYnV0dG9uPlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+Q2hlY2sgV2FsbGV0PC9kaXY+fVxyXG4gICAgICB7aXNTdWNjZXNzICYmIDxkaXY+VHJhbnNhY3Rpb246IHtKU09OLnN0cmluZ2lmeShkYXRhKX08L2Rpdj59XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KHsgcmVkaXJlY3Q6IFwiL3NpZ25pblwiIH0pfT5TaWduIG91dDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dCk7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvc2lnbmluXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYWNjb3VudC5nZXROYXRpdmVCYWxhbmNlKHtcclxuICAgIGFkZHJlc3M6IHNlc3Npb24udXNlci5hZGRyZXNzLFxyXG4gICAgY2hhaW46IDB4ODksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyB1c2VyOiBzZXNzaW9uLnVzZXIsIGJhbGFuY2U6IHJlc3BvbnNlLnJhdyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJzaWduT3V0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbmRUcmFuc2FjdGlvbiIsIkNPTlRSQUNUUyIsIkNIQUlOX0lEUyIsIkJFUDIwIiwiRVRIMiIsIkVUSCIsImNoYWluSWQiLCJVc2VyIiwidXNlciIsImJhbGFuY2UiLCJjaGFuZ2VUb1Rva2VuIiwiZSIsInNldFRvVG9rZW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFZhbHVlRXhjaGFuZ2VkIiwiY2hhbmdlRnJvbVRva2VuIiwic2V0RnJvbVRva2VuIiwiY2hhbmdlVmFsdWUiLCJzZXRWYWx1ZSIsIk9iamVjdCIsInZhbHVlcyIsImZyb21Ub2tlbiIsInRvVG9rZW4iLCJ2YWx1ZUV4Y2hhbmdlZCIsInZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMiLCJzZXRWYWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwidG8iLCJzZXRUbyIsInR4RGF0YSIsInNldFR4RGF0YSIsInJlcXVlc3QiLCJmcm9tIiwiYWRkcmVzcyIsIlN0cmluZyIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJzZW5kVHJhbnNhY3Rpb24iLCJnZXQxaW5jaFN3YXAiLCJ0eCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJkZWNpbWFscyIsInRvVG9rZW5BbW91bnQiLCJkaXYiLCJ0b0ZpeGVkIiwic2VsZWN0IiwibmFtZSIsIm9uQ2hhbmdlIiwia2V5cyIsIm1hcCIsImtleSIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsImJyIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});
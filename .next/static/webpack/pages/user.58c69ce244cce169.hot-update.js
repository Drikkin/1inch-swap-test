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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar CONTRACTS = {\n    \"BNB\": \"0xB8c77482e45F1F44dE1745F52C74426C631bDD52\",\n    \"BUSD\": \"0x4fabb145d64652a948d72533023f6e7a623c7c53\",\n    \"DAI\": \"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3\",\n    \"BSC-USD\": \"0x55d398326f99059fF775485246999027B3197955\",\n    \"1INCH\": \"0x111111111117dc0aa78b770fa6a738034120c302\",\n    \"TUSD\": \"0xdAC17F958D2ee523a2206206994597C13D831ec7\",\n    \"MATIC\": \"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE\",\n    \"BETH\": \"0x2170Ed0880ac9A755fd29B2688956BD959F933F8\"\n};\nvar CHAIN_IDS = {\n    BEP20: 56\n};\nvar chainId = CHAIN_IDS.BEP20;\nfunction User(param) {\n    var user = param.user, balance = param.balance;\n    var _this = this;\n    var changeToToken = function changeToToken(e) {\n        setToToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeFromToken = function changeFromToken(e) {\n        setFromToken(e.target.value);\n        setValueExchanged(\"\");\n    };\n    var changeValue = function changeValue(e) {\n        setValue(e.target.value * 1E18);\n        setValueExchanged(\"\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(CONTRACTS[\"BNB\"]), fromToken = ref[0], setFromToken = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(Object.values(CONTRACTS)[0]), toToken = ref1[0], setToToken = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"1000000000000000000\"), value = ref2[0], setValue = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), valueExchanged = ref3[0], setValueExchanged = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1e18), valueExchangedDecimals = ref4[0], setValueExchangedDecimals = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), to = ref5[0], setTo = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), txData = ref6[0], setTxData = ref6[1];\n    var ref7 = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction)({\n        request: {\n            from: user.address,\n            to: String(to),\n            data: String(txData),\n            value: String(value)\n        }\n    }), data = ref7.data, isLoading = ref7.isLoading, isSuccess = ref7.isSuccess, sendTransaction = ref7.sendTransaction;\n    function get1inchSwap() {\n        return _get1inchSwap.apply(this, arguments);\n    }\n    function _get1inchSwap() {\n        _get1inchSwap = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var tx;\n            return F_React_mine_SimpleSwap_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"https://api.1inch.io/v4.0/\".concat(chainId, \"/swap?fromTokenAddress=\").concat(fromToken, \"&toTokenAddress=\").concat(toToken, \"&amount=\").concat(value, \"&fromAddress=\").concat(user.address, \"&slippage=20\"));\n                    case 2:\n                        tx = _ctx.sent;\n                        console.log(\"get1inchSwap ~ tx\", tx);\n                        setTo(tx.data.tx.to);\n                        setTxData(tx.data.tx.data);\n                        setValueExchangedDecimals(Number(\"1E\".concat(tx.data.toToken.decimals)));\n                        setValueExchanged(tx.data.toTokenAmount);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _get1inchSwap.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"User: \",\n                    user.address\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Your Matic Balance: \",\n                    (balance.balance / 1e18).toFixed(3)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"fromToken\",\n                value: fromToken,\n                onChange: function(e) {\n                    return changeFromToken(e);\n                },\n                children: Object.keys(CONTRACTS).map(function(key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"from\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 75,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                onChange: function(e) {\n                    return changeValue(e);\n                },\n                value: value / 1e18,\n                type: \"number\",\n                min: 0,\n                max: balance.balance / 1e18\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                name: \"toToken\",\n                value: toToken,\n                onChange: function(e) {\n                    return changeToToken(e);\n                },\n                children: Object.keys(CONTRACTS).map(function(key) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                        value: CONTRACTS[key],\n                        children: key\n                    }, \"to\" + key, false, {\n                        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                        lineNumber: 87,\n                        columnNumber: 44\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: !valueExchanged ? \"\" : (valueExchanged / valueExchangedDecimals).toFixed(5),\n                disabled: true\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: get1inchSwap,\n                children: \"Get Conversion\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                disabled: !valueExchanged,\n                onClick: sendTransaction,\n                children: \"Swap Tokens\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Check Wallet\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 101,\n                columnNumber: 21\n            }, this),\n            isSuccess && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Transaction: \",\n                    JSON.stringify(data)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 102,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)({\n                        redirect: \"/signin\"\n                    });\n                },\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\React\\\\mine\\\\SimpleSwap\\\\pages\\\\user.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"JImsSISI8mCLymm83KnyF4ZNpgM=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useSendTransaction\n    ];\n});\n_c = User;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7b0JBQUc7MEJBQ04sOERBQUNBLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNFLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTWhFLHdEQUFPLENBQUM7d0JBQUVtRSxRQUFRLEVBQUUsU0FBUztxQkFBRSxDQUFDO2lCQUFBOzBCQUFFLFVBQVE7Ozs7O29CQUFTOzs7Ozs7WUFDdEUsQ0FDTjtDQUNIO0dBcEZRM0QsSUFBSTs7UUFXNkNMLHFEQUFrQjs7O0FBWG5FSyxLQUFBQSxJQUFJOztBQThHYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIuanM/YWEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgTW9yYWxpcyBmcm9tIFwibW9yYWxpc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVNlbmRUcmFuc2FjdGlvbiB9IGZyb20gXCJ3YWdtaVwiO1xyXG5cclxuY29uc3QgQ09OVFJBQ1RTID0ge1xyXG4gIFwiQk5CXCI6IFwiMHhCOGM3NzQ4MmU0NUYxRjQ0ZEUxNzQ1RjUyQzc0NDI2QzYzMWJERDUyXCIsXHJcbiAgXCJCVVNEXCI6IFwiMHg0ZmFiYjE0NWQ2NDY1MmE5NDhkNzI1MzMwMjNmNmU3YTYyM2M3YzUzXCIsXHJcbiAgXCJEQUlcIjogXCIweDFhZjNmMzI5ZThiZTE1NDA3NGQ4NzY5ZDFmZmE0ZWUwNThiMWRiYzNcIixcclxuICBcIkJTQy1VU0RcIjogXCIweDU1ZDM5ODMyNmY5OTA1OWZGNzc1NDg1MjQ2OTk5MDI3QjMxOTc5NTVcIixcclxuICBcIjFJTkNIXCI6IFwiMHgxMTExMTExMTExMTdkYzBhYTc4Yjc3MGZhNmE3MzgwMzQxMjBjMzAyXCIsXHJcbiAgXCJUVVNEXCI6IFwiMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3XCIsXHJcbiAgXCJNQVRJQ1wiOiBcIjB4RWVlZWVFZWVlRWVFZWVFZUVlRWVlRUVFZWVlZUVlZWVlZWVlRUVlRVwiLFxyXG4gIFwiQkVUSFwiOiBcIjB4MjE3MEVkMDg4MGFjOUE3NTVmZDI5QjI2ODg5NTZCRDk1OUY5MzNGOFwiLFxyXG59XHJcblxyXG5jb25zdCBDSEFJTl9JRFMgPSB7XHJcbiAgQkVQMjA6IDU2LFxyXG59XHJcblxyXG5jb25zdCBjaGFpbklkID0gQ0hBSU5fSURTLkJFUDIwXHJcblxyXG5mdW5jdGlvbiBVc2VyKHsgdXNlciwgYmFsYW5jZSB9KSB7XHJcbiAgY29uc3QgW2Zyb21Ub2tlbiwgc2V0RnJvbVRva2VuXSA9IHVzZVN0YXRlKENPTlRSQUNUU1tcIkJOQlwiXSk7XHJcbiAgY29uc3QgW3RvVG9rZW4sIHNldFRvVG9rZW5dID0gdXNlU3RhdGUoT2JqZWN0LnZhbHVlcyhDT05UUkFDVFMpWzBdKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjEwMDAwMDAwMDAwMDAwMDAwMDBcIik7XHJcbiAgY29uc3QgW3ZhbHVlRXhjaGFuZ2VkLCBzZXRWYWx1ZUV4Y2hhbmdlZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmFsdWVFeGNoYW5nZWREZWNpbWFscywgc2V0VmFsdWVFeGNoYW5nZWREZWNpbWFsc10gPSB1c2VTdGF0ZSgxZTE4KTtcclxuICBjb25zdCBbdG8sIHNldFRvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0eERhdGEsIHNldFR4RGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBpc1N1Y2Nlc3MsIHNlbmRUcmFuc2FjdGlvbiB9ID0gdXNlU2VuZFRyYW5zYWN0aW9uKHtcclxuICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgZnJvbTogdXNlci5hZGRyZXNzLFxyXG4gICAgICAgICAgdG86IFN0cmluZyh0byksXHJcbiAgICAgICAgICBkYXRhOiBTdHJpbmcodHhEYXRhKSxcclxuICAgICAgICAgIHZhbHVlOiBTdHJpbmcodmFsdWUpLFxyXG4gICAgICB9LFxyXG4gIH0pXHJcblxyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VUb1Rva2VuKGUpe1xyXG4gICAgc2V0VG9Ub2tlbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZUZyb21Ub2tlbihlKXtcclxuICAgIHNldEZyb21Ub2tlbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRWYWx1ZUV4Y2hhbmdlZChcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKGUpe1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUgKiAxRTE4KTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0MWluY2hTd2FwKCl7XHJcbiAgICBjb25zdCB0eCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuMWluY2guaW8vdjQuMC8ke2NoYWluSWR9L3N3YXA/ZnJvbVRva2VuQWRkcmVzcz0ke2Zyb21Ub2tlbn0mdG9Ub2tlbkFkZHJlc3M9JHt0b1Rva2VufSZhbW91bnQ9JHt2YWx1ZX0mZnJvbUFkZHJlc3M9JHt1c2VyLmFkZHJlc3N9JnNsaXBwYWdlPTIwYCk7ICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJnZXQxaW5jaFN3YXAgfiB0eFwiLCB0eCk7XHJcblxyXG4gICAgc2V0VG8odHguZGF0YS50eC50byk7XHJcbiAgICBzZXRUeERhdGEodHguZGF0YS50eC5kYXRhKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMoTnVtYmVyKGAxRSR7dHguZGF0YS50b1Rva2VuLmRlY2ltYWxzfWApKTtcclxuICAgIHNldFZhbHVlRXhjaGFuZ2VkKHR4LmRhdGEudG9Ub2tlbkFtb3VudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5Vc2VyOiB7dXNlci5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICA8ZGl2PllvdXIgTWF0aWMgQmFsYW5jZTogeyhiYWxhbmNlLmJhbGFuY2UgLyAxZTE4KS50b0ZpeGVkKDMpfTwvZGl2PlxyXG4gICAgICA8c2VsZWN0IG5hbWU9XCJmcm9tVG9rZW5cIiB2YWx1ZT17ZnJvbVRva2VufSBvbkNoYW5nZT17KGUpID0+IGNoYW5nZUZyb21Ub2tlbihlKX0+XHJcbiAgICAgICAge09iamVjdC5rZXlzKENPTlRSQUNUUykubWFwKGtleSA9PiA8b3B0aW9uIGtleT17XCJmcm9tXCIgKyBrZXl9IHZhbHVlPXtDT05UUkFDVFNba2V5XX0+e2tleX08L29wdGlvbj4pfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VWYWx1ZShlKX1cclxuICAgICAgICB2YWx1ZT17dmFsdWUgLyAxZTE4fVxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIG1pbj17MH1cclxuICAgICAgICBtYXg9e2JhbGFuY2UuYmFsYW5jZSAvIDFlMTh9XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxzZWxlY3QgbmFtZT1cInRvVG9rZW5cIiB2YWx1ZT17dG9Ub2tlbn0gb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VUb1Rva2VuKGUpfT5cclxuICAgICAgICB7T2JqZWN0LmtleXMoQ09OVFJBQ1RTKS5tYXAoa2V5ID0+IDxvcHRpb24ga2V5PXtcInRvXCIgKyBrZXl9IHZhbHVlPXtDT05UUkFDVFNba2V5XX0+e2tleX08L29wdGlvbj4pfVxyXG4gICAgICA8L3NlbGVjdD5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgIXZhbHVlRXhjaGFuZ2VkXHJcbiAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICA6ICh2YWx1ZUV4Y2hhbmdlZCAvIHZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMpLnRvRml4ZWQoNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgID48L2lucHV0PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Z2V0MWluY2hTd2FwfT5HZXQgQ29udmVyc2lvbjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXshdmFsdWVFeGNoYW5nZWR9IG9uQ2xpY2s9e3NlbmRUcmFuc2FjdGlvbn0+U3dhcCBUb2tlbnM8L2J1dHRvbj5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkNoZWNrIFdhbGxldDwvZGl2Pn1cclxuICAgICAge2lzU3VjY2VzcyAmJiA8ZGl2PlRyYW5zYWN0aW9uOiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9kaXY+fVxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCh7IHJlZGlyZWN0OiBcIi9zaWduaW5cIiB9KX0+U2lnbiBvdXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IE1vcmFsaXMuRXZtQXBpLmFjY291bnQuZ2V0TmF0aXZlQmFsYW5jZSh7XHJcbiAgICBhZGRyZXNzOiBzZXNzaW9uLnVzZXIuYWRkcmVzcyxcclxuICAgIGNoYWluOiAweDg5LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyLCBiYWxhbmNlOiByZXNwb25zZS5yYXcgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsic2lnbk91dCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTZW5kVHJhbnNhY3Rpb24iLCJDT05UUkFDVFMiLCJDSEFJTl9JRFMiLCJCRVAyMCIsImNoYWluSWQiLCJVc2VyIiwidXNlciIsImJhbGFuY2UiLCJjaGFuZ2VUb1Rva2VuIiwiZSIsInNldFRvVG9rZW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFZhbHVlRXhjaGFuZ2VkIiwiY2hhbmdlRnJvbVRva2VuIiwic2V0RnJvbVRva2VuIiwiY2hhbmdlVmFsdWUiLCJzZXRWYWx1ZSIsImZyb21Ub2tlbiIsIk9iamVjdCIsInZhbHVlcyIsInRvVG9rZW4iLCJ2YWx1ZUV4Y2hhbmdlZCIsInZhbHVlRXhjaGFuZ2VkRGVjaW1hbHMiLCJzZXRWYWx1ZUV4Y2hhbmdlZERlY2ltYWxzIiwidG8iLCJzZXRUbyIsInR4RGF0YSIsInNldFR4RGF0YSIsInJlcXVlc3QiLCJmcm9tIiwiYWRkcmVzcyIsIlN0cmluZyIsImRhdGEiLCJpc0xvYWRpbmciLCJpc1N1Y2Nlc3MiLCJzZW5kVHJhbnNhY3Rpb24iLCJnZXQxaW5jaFN3YXAiLCJ0eCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJkZWNpbWFscyIsInRvVG9rZW5BbW91bnQiLCJkaXYiLCJ0b0ZpeGVkIiwic2VsZWN0IiwibmFtZSIsIm9uQ2hhbmdlIiwia2V5cyIsIm1hcCIsImtleSIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsImJyIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user.js\n"));

/***/ })

});
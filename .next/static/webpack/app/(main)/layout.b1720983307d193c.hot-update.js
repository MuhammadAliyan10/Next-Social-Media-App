/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./src/app/(main)/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/app/(main)/Navbar.tsx ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/(main)/SessionProvider.tsx":
/*!********************************************!*\
  !*** ./src/app/(main)/SessionProvider.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SessionProvider),\n/* harmony export */   useSession: () => (/* binding */ useSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"(app-pages-browser)/./src/app/(main)/Navbar.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ useSession,default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction useSession() {\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SessionContext);\n    if (!context) {\n        throw new Error(\"Session provider is required.\");\n    }\n    return context;\n}\n_s(useSession, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst SessionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction SessionProvider(param) {\n    let { children, value } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SessionContext.Provider, {\n        value: value,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex min-h-screen flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Navbar__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/app/(main)/SessionProvider.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/app/(main)/SessionProvider.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/app/(main)/SessionProvider.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c = SessionProvider;\nvar _c;\n$RefreshReg$(_c, \"SessionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKG1haW4pL1Nlc3Npb25Qcm92aWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXlEO0FBQzNCO0FBV3ZCLFNBQVNJOztJQUNkLE1BQU1DLFVBQVVILGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJLENBQUNELFNBQVM7UUFDWixNQUFNLElBQUlFLE1BQU07SUFDbEI7SUFDQSxPQUFPRjtBQUNUO0dBTmdCRDtBQVFoQixNQUFNRSwrQkFBaUJMLG9EQUFhQSxDQUF3QjtBQUU3QyxTQUFTTyxnQkFBZ0IsS0FHYTtRQUhiLEVBQ3RDQyxRQUFRLEVBQ1JDLEtBQUssRUFDOEMsR0FIYjtJQUl0QyxxQkFDRSw4REFBQ0osZUFBZUssUUFBUTtRQUFDRCxPQUFPQTtrQkFDOUIsNEVBQUNFO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDVixnREFBTUE7Ozs7O2dCQUNOTTs7Ozs7Ozs7Ozs7O0FBSVQ7S0Fad0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKG1haW4pL1Nlc3Npb25Qcm92aWRlci50c3g/ZjFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwibHVjaWFcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuXG5pbnRlcmZhY2UgU2Vzc2lvbkNvbnRleHQge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgc2Vzc2lvbjoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgZXhwaXJlc0F0OiBEYXRlO1xuICAgIGZyZXNoOiBib29sZWFuO1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICB9IHwgbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXNzaW9uKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNlc3Npb24gcHJvdmlkZXIgaXMgcmVxdWlyZWQuXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5jb25zdCBTZXNzaW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U2Vzc2lvbkNvbnRleHQgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vzc2lvblByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG4gIHZhbHVlLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48eyB2YWx1ZTogU2Vzc2lvbkNvbnRleHQgfT4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L1Nlc3Npb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJOYXZiYXIiLCJ1c2VTZXNzaW9uIiwiY29udGV4dCIsIlNlc3Npb25Db250ZXh0IiwiRXJyb3IiLCJTZXNzaW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwiUHJvdmlkZXIiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(main)/SessionProvider.tsx\n"));

/***/ })

});
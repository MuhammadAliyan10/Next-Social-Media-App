"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/page",{

/***/ "(app-pages-browser)/./src/components/posts/editor/PostEditor.tsx":
/*!****************************************************!*\
  !*** ./src/components/posts/editor/PostEditor.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostEditor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tiptap/react */ \"(app-pages-browser)/./node_modules/@tiptap/react/dist/index.js\");\n/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/starter-kit */ \"(app-pages-browser)/./node_modules/@tiptap/starter-kit/dist/index.js\");\n/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-placeholder */ \"(app-pages-browser)/./node_modules/@tiptap/extension-placeholder/dist/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./src/components/posts/editor/actions.ts\");\n/* harmony import */ var _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/(main)/SessionProvider */ \"(app-pages-browser)/./src/app/(main)/SessionProvider.tsx\");\n/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/components/posts/editor/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction PostEditor() {\n    _s();\n    const [loadig, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const { user } = (0,_app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const editor = (0,_tiptap_react__WEBPACK_IMPORTED_MODULE_9__.useEditor)({\n        extensions: [\n            _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].configure({\n                bold: false,\n                italic: false\n            }),\n            _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"].configure({\n                placeholder: \"What's on your mind...\"\n            })\n        ]\n    });\n    const input = (editor === null || editor === void 0 ? void 0 : editor.getText({\n        blockSeparator: \"\\n\"\n    })) || \"\";\n    async function onSubmit() {\n        await (0,_actions__WEBPACK_IMPORTED_MODULE_3__.submitPost)(input);\n        editor === null || editor === void 0 ? void 0 : editor.commands.clearContent();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserAvatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        avatarUrl: user === null || user === void 0 ? void 0 : user.avatarUrl,\n                        className: \"hidden sm:inline\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tiptap_react__WEBPACK_IMPORTED_MODULE_9__.EditorContent, {\n                        editor: editor,\n                        className: \"max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: onSubmit,\n                    disabled: !input.trim(),\n                    className: \"min-w-20\",\n                    children: \"Post\"\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(PostEditor, \"4E9Us3kcOLPtapiMtLhTGeiqa6U=\", false, function() {\n    return [\n        _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        _tiptap_react__WEBPACK_IMPORTED_MODULE_9__.useEditor\n    ];\n});\n_c = PostEditor;\nvar _c;\n$RefreshReg$(_c, \"PostEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL2VkaXRvci9Qb3N0RWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUV5RDtBQUNaO0FBQ1c7QUFDakI7QUFDbUI7QUFDVDtBQUNEO0FBQzNCO0FBQ1k7QUFFbEIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBVTtJQUMvQyxNQUFNLEVBQUVJLElBQUksRUFBRSxHQUFHUCxxRUFBVUE7SUFDM0IsTUFBTVEsU0FBU1osd0RBQVNBLENBQUM7UUFDdkJhLFlBQVk7WUFDVlosMkRBQVVBLENBQUNhLFNBQVMsQ0FBQztnQkFDbkJDLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjtZQUNBZCxxRUFBV0EsQ0FBQ1ksU0FBUyxDQUFDO2dCQUNwQkcsYUFBYTtZQUNmO1NBQ0Q7SUFDSDtJQUNBLE1BQU1DLFFBQ0pOLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUU8sT0FBTyxDQUFDO1FBQ2RDLGdCQUFnQjtJQUNsQixPQUFNO0lBRVIsZUFBZUM7UUFDYixNQUFNbEIsb0RBQVVBLENBQUNlO1FBQ2pCTixtQkFBQUEsNkJBQUFBLE9BQVFVLFFBQVEsQ0FBQ0MsWUFBWTtJQUMvQjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDcEIsOERBQVVBO3dCQUFDcUIsU0FBUyxFQUFFZixpQkFBQUEsMkJBQUFBLEtBQU1lLFNBQVM7d0JBQUVELFdBQVU7Ozs7OztrQ0FDbEQsOERBQUMxQix3REFBYUE7d0JBQ1phLFFBQVFBO3dCQUNSYSxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDbkIseURBQU1BO29CQUNMcUIsU0FBU047b0JBQ1RPLFVBQVUsQ0FBQ1YsTUFBTVcsSUFBSTtvQkFDckJKLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E1Q3dCakI7O1FBRUxKLGlFQUFVQTtRQUNaSixvREFBU0E7OztLQUhGUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy9lZGl0b3IvUG9zdEVkaXRvci50c3g/ZjM5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRWRpdG9yQ29udGVudCwgdXNlRWRpdG9yIH0gZnJvbSBcIkB0aXB0YXAvcmVhY3RcIjtcbmltcG9ydCBTdGFydGVyS2l0IGZyb20gXCJAdGlwdGFwL3N0YXJ0ZXIta2l0XCI7XG5pbXBvcnQgUGxhY2VIb2xkZXIgZnJvbSBcIkB0aXB0YXAvZXh0ZW5zaW9uLXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgeyBzdWJtaXRQb3N0IH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAL2FwcC8obWFpbikvU2Vzc2lvblByb3ZpZGVyXCI7XG5pbXBvcnQgVXNlckF2YXRhciBmcm9tIFwiQC9jb21wb25lbnRzL1VzZXJBdmF0YXJcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdEVkaXRvcigpIHtcbiAgY29uc3QgW2xvYWRpZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBlZGl0b3IgPSB1c2VFZGl0b3Ioe1xuICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgIFN0YXJ0ZXJLaXQuY29uZmlndXJlKHtcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICB9KSxcbiAgICAgIFBsYWNlSG9sZGVyLmNvbmZpZ3VyZSh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIldoYXQncyBvbiB5b3VyIG1pbmQuLi5cIixcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpbnB1dCA9XG4gICAgZWRpdG9yPy5nZXRUZXh0KHtcbiAgICAgIGJsb2NrU2VwYXJhdG9yOiBcIlxcblwiLFxuICAgIH0pIHx8IFwiXCI7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoKSB7XG4gICAgYXdhaXQgc3VibWl0UG9zdChpbnB1dCk7XG4gICAgZWRpdG9yPy5jb21tYW5kcy5jbGVhckNvbnRlbnQoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHJvdW5kZWQtMnhsIGJnLWNhcmQgcC01IHNoYWRvdy1zbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC01XCI+XG4gICAgICAgIDxVc2VyQXZhdGFyIGF2YXRhclVybD17dXNlcj8uYXZhdGFyVXJsfSBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCIgLz5cbiAgICAgICAgPEVkaXRvckNvbnRlbnRcbiAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtaC1bMjByZW1dIHctZnVsbCBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC0yeGwgYmctYmFja2dyb3VuZCBweC01IHB5LTNcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgIGRpc2FibGVkPXshaW5wdXQudHJpbSgpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvc3RcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJFZGl0b3JDb250ZW50IiwidXNlRWRpdG9yIiwiU3RhcnRlcktpdCIsIlBsYWNlSG9sZGVyIiwic3VibWl0UG9zdCIsInVzZVNlc3Npb24iLCJVc2VyQXZhdGFyIiwiQnV0dG9uIiwidXNlU3RhdGUiLCJQb3N0RWRpdG9yIiwibG9hZGlnIiwic2V0TG9hZGluZyIsInVzZXIiLCJlZGl0b3IiLCJleHRlbnNpb25zIiwiY29uZmlndXJlIiwiYm9sZCIsIml0YWxpYyIsInBsYWNlaG9sZGVyIiwiaW5wdXQiLCJnZXRUZXh0IiwiYmxvY2tTZXBhcmF0b3IiLCJvblN1Ym1pdCIsImNvbW1hbmRzIiwiY2xlYXJDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYXZhdGFyVXJsIiwib25DbGljayIsImRpc2FibGVkIiwidHJpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/editor/PostEditor.tsx\n"));

/***/ })

});
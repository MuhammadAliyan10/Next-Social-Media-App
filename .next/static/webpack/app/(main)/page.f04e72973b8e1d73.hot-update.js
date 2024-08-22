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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostEditor)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _tiptap_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tiptap/react */ \"(app-pages-browser)/./node_modules/@tiptap/react/dist/index.js\");\n/* harmony import */ var _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tiptap/starter-kit */ \"(app-pages-browser)/./node_modules/@tiptap/starter-kit/dist/index.js\");\n/* harmony import */ var _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tiptap/extension-placeholder */ \"(app-pages-browser)/./node_modules/@tiptap/extension-placeholder/dist/index.js\");\n/* harmony import */ var _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/(main)/SessionProvider */ \"(app-pages-browser)/./src/app/(main)/SessionProvider.tsx\");\n/* harmony import */ var _components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/components/posts/editor/style.css\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mutations */ \"(app-pages-browser)/./src/components/posts/editor/mutations.ts\");\n/* harmony import */ var _components_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/LoadingButton */ \"(app-pages-browser)/./src/components/LoadingButton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction PostEditor() {\n    _s();\n    const { user } = (0,_app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const mutation = (0,_mutations__WEBPACK_IMPORTED_MODULE_6__.useSubmitPostMutation)();\n    const editor = (0,_tiptap_react__WEBPACK_IMPORTED_MODULE_8__.useEditor)({\n        extensions: [\n            _tiptap_starter_kit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].configure({\n                bold: false,\n                italic: false\n            }),\n            _tiptap_extension_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"].configure({\n                placeholder: \"What's on your mind...\"\n            })\n        ]\n    });\n    const input = (editor === null || editor === void 0 ? void 0 : editor.getText({\n        blockSeparator: \"\\n\"\n    })) || \"\";\n    function onSubmit() {\n        mutation.mutate(input, {\n            onSuccess: ()=>{\n                editor === null || editor === void 0 ? void 0 : editor.commands.clearContent();\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserAvatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        avatarUrl: user === null || user === void 0 ? void 0 : user.avatarUrl,\n                        className: \"hidden sm:inline\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tiptap_react__WEBPACK_IMPORTED_MODULE_8__.EditorContent, {\n                        editor: editor,\n                        className: \"max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    loading: mutation.isPending,\n                    onClick: onSubmit,\n                    disabled: !input.trim(),\n                    className: \"min-w-20\",\n                    children: \"Post\"\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/posts/editor/PostEditor.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(PostEditor, \"f2fNYZ+SAuzIHC4Fz+iuC6oMURI=\", false, function() {\n    return [\n        _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _mutations__WEBPACK_IMPORTED_MODULE_6__.useSubmitPostMutation,\n        _tiptap_react__WEBPACK_IMPORTED_MODULE_8__.useEditor\n    ];\n});\n_c = PostEditor;\nvar _c;\n$RefreshReg$(_c, \"PostEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL2VkaXRvci9Qb3N0RWRpdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFeUQ7QUFDWjtBQUNXO0FBRUU7QUFDVDtBQUU1QjtBQUcrQjtBQUNHO0FBRXhDLFNBQVNROztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTCxxRUFBVUE7SUFDM0IsTUFBTU0sV0FBV0osaUVBQXFCQTtJQUN0QyxNQUFNSyxTQUFTVix3REFBU0EsQ0FBQztRQUN2QlcsWUFBWTtZQUNWViwyREFBVUEsQ0FBQ1csU0FBUyxDQUFDO2dCQUNuQkMsTUFBTTtnQkFDTkMsUUFBUTtZQUNWO1lBQ0FaLHFFQUFXQSxDQUFDVSxTQUFTLENBQUM7Z0JBQ3BCRyxhQUFhO1lBQ2Y7U0FDRDtJQUNIO0lBQ0EsTUFBTUMsUUFDSk4sQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTyxPQUFPLENBQUM7UUFDZEMsZ0JBQWdCO0lBQ2xCLE9BQU07SUFFUixTQUFTQztRQUNQVixTQUFTVyxNQUFNLENBQUNKLE9BQU87WUFDckJLLFdBQVc7Z0JBQ1RYLG1CQUFBQSw2QkFBQUEsT0FBUVksUUFBUSxDQUFDQyxZQUFZO1lBQy9CO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDckIsOERBQVVBO3dCQUFDc0IsU0FBUyxFQUFFbEIsaUJBQUFBLDJCQUFBQSxLQUFNa0IsU0FBUzt3QkFBRUQsV0FBVTs7Ozs7O2tDQUNsRCw4REFBQzFCLHdEQUFhQTt3QkFDWlcsUUFBUUE7d0JBQ1JlLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNuQixpRUFBYUE7b0JBQ1pxQixTQUFTbEIsU0FBU21CLFNBQVM7b0JBQzNCQyxTQUFTVjtvQkFDVFcsVUFBVSxDQUFDZCxNQUFNZSxJQUFJO29CQUNyQk4sV0FBVTs4QkFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWhEd0JsQjs7UUFDTEosaUVBQVVBO1FBQ1ZFLDZEQUFxQkE7UUFDdkJMLG9EQUFTQTs7O0tBSEZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL2VkaXRvci9Qb3N0RWRpdG9yLnRzeD9mMzk3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBFZGl0b3JDb250ZW50LCB1c2VFZGl0b3IgfSBmcm9tIFwiQHRpcHRhcC9yZWFjdFwiO1xuaW1wb3J0IFN0YXJ0ZXJLaXQgZnJvbSBcIkB0aXB0YXAvc3RhcnRlci1raXRcIjtcbmltcG9ydCBQbGFjZUhvbGRlciBmcm9tIFwiQHRpcHRhcC9leHRlbnNpb24tcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB7IHN1Ym1pdFBvc3QgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkAvYXBwLyhtYWluKS9TZXNzaW9uUHJvdmlkZXJcIjtcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gXCJAL2NvbXBvbmVudHMvVXNlckF2YXRhclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN1Ym1pdFBvc3RNdXRhdGlvbiB9IGZyb20gXCIuL211dGF0aW9uc1wiO1xuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2FkaW5nQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RFZGl0b3IoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBtdXRhdGlvbiA9IHVzZVN1Ym1pdFBvc3RNdXRhdGlvbigpO1xuICBjb25zdCBlZGl0b3IgPSB1c2VFZGl0b3Ioe1xuICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgIFN0YXJ0ZXJLaXQuY29uZmlndXJlKHtcbiAgICAgICAgYm9sZDogZmFsc2UsXG4gICAgICAgIGl0YWxpYzogZmFsc2UsXG4gICAgICB9KSxcbiAgICAgIFBsYWNlSG9sZGVyLmNvbmZpZ3VyZSh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIldoYXQncyBvbiB5b3VyIG1pbmQuLi5cIixcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpbnB1dCA9XG4gICAgZWRpdG9yPy5nZXRUZXh0KHtcbiAgICAgIGJsb2NrU2VwYXJhdG9yOiBcIlxcblwiLFxuICAgIH0pIHx8IFwiXCI7XG5cbiAgZnVuY3Rpb24gb25TdWJtaXQoKSB7XG4gICAgbXV0YXRpb24ubXV0YXRlKGlucHV0LCB7XG4gICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgZWRpdG9yPy5jb21tYW5kcy5jbGVhckNvbnRlbnQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNSByb3VuZGVkLTJ4bCBiZy1jYXJkIHAtNSBzaGFkb3ctc21cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNVwiPlxuICAgICAgICA8VXNlckF2YXRhciBhdmF0YXJVcmw9e3VzZXI/LmF2YXRhclVybH0gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiIC8+XG4gICAgICAgIDxFZGl0b3JDb250ZW50XG4gICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LWgtWzIwcmVtXSB3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtMnhsIGJnLWJhY2tncm91bmQgcHgtNSBweS0zXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgIDxMb2FkaW5nQnV0dG9uXG4gICAgICAgICAgbG9hZGluZz17bXV0YXRpb24uaXNQZW5kaW5nfVxuICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgIGRpc2FibGVkPXshaW5wdXQudHJpbSgpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbi13LTIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvc3RcbiAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiRWRpdG9yQ29udGVudCIsInVzZUVkaXRvciIsIlN0YXJ0ZXJLaXQiLCJQbGFjZUhvbGRlciIsInVzZVNlc3Npb24iLCJVc2VyQXZhdGFyIiwidXNlU3VibWl0UG9zdE11dGF0aW9uIiwiTG9hZGluZ0J1dHRvbiIsIlBvc3RFZGl0b3IiLCJ1c2VyIiwibXV0YXRpb24iLCJlZGl0b3IiLCJleHRlbnNpb25zIiwiY29uZmlndXJlIiwiYm9sZCIsIml0YWxpYyIsInBsYWNlaG9sZGVyIiwiaW5wdXQiLCJnZXRUZXh0IiwiYmxvY2tTZXBhcmF0b3IiLCJvblN1Ym1pdCIsIm11dGF0ZSIsIm9uU3VjY2VzcyIsImNvbW1hbmRzIiwiY2xlYXJDb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYXZhdGFyVXJsIiwibG9hZGluZyIsImlzUGVuZGluZyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInRyaW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/editor/PostEditor.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/posts/editor/mutations.ts":
/*!**************************************************!*\
  !*** ./src/components/posts/editor/mutations.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSubmitPostMutation: () => (/* binding */ useSubmitPostMutation)\n/* harmony export */ });\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"(app-pages-browser)/./src/components/posts/editor/actions.ts\");\n\n\n\nfunction useSubmitPostMutation() {\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_0__.useToast)();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();\n    const mutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({\n        mutationFn: _actions__WEBPACK_IMPORTED_MODULE_1__.submitPost,\n        onSuccess: async (newPost)=>{\n            const queryFilter = {\n                queryKey: [\n                    \"post-feed\"\n                ],\n                predicate (query) {\n                    return query.queryKey.includes(\"for-you\") || query.queryKey.includes(\"user-posts\") && query.queryKey.includes(user.id);\n                }\n            };\n            await queryClient.cancelQueries(queryFilter);\n            queryClient.setQueriesData(queryFilter, (oldData)=>{\n                const firstPage = oldData === null || oldData === void 0 ? void 0 : oldData.pages[0];\n                if (firstPage) {\n                    return {\n                        pageParams: oldData.pageParams,\n                        pages: [\n                            {\n                                posts: [\n                                    newPost,\n                                    ...firstPage.posts\n                                ],\n                                nextCursor: firstPage.nextCursor\n                            },\n                            ...oldData.pages.slice(1)\n                        ]\n                    };\n                }\n            });\n            queryClient.invalidateQueries({\n                queryKey: queryFilter.queryKey,\n                predicate (query) {\n                    return queryFilter.predicate(query) && !query.state.data;\n                }\n            });\n            toast({\n                description: \"Post created\"\n            });\n        },\n        onError (error) {\n            console.error(error);\n            toast({\n                variant: \"destructive\",\n                description: \"Failed to post. Please try again.\"\n            });\n        }\n    });\n    return mutation;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL2VkaXRvci9tdXRhdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFPdEI7QUFDUTtBQUVoQyxTQUFTSTtJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdMLGtFQUFRQTtJQUUxQixNQUFNTSxjQUFjSixxRUFBY0E7SUFFbEMsTUFBTUssV0FBV04sa0VBQVdBLENBQUM7UUFDM0JPLFlBQVlMLGdEQUFVQTtRQUN0Qk0sV0FBVyxPQUFPQztZQUNoQixNQUFNQyxjQUFjO2dCQUNsQkMsVUFBVTtvQkFBQztpQkFBWTtnQkFDdkJDLFdBQVVDLEtBQUs7b0JBQ2IsT0FDRUEsTUFBTUYsUUFBUSxDQUFDRyxRQUFRLENBQUMsY0FDdkJELE1BQU1GLFFBQVEsQ0FBQ0csUUFBUSxDQUFDLGlCQUN2QkQsTUFBTUYsUUFBUSxDQUFDRyxRQUFRLENBQUNDLEtBQUtDLEVBQUU7Z0JBRXJDO1lBQ0Y7WUFFQSxNQUFNWCxZQUFZWSxhQUFhLENBQUNQO1lBRWhDTCxZQUFZYSxjQUFjLENBQ3hCUixhQUNBLENBQUNTO2dCQUNDLE1BQU1DLFlBQVlELG9CQUFBQSw4QkFBQUEsUUFBU0UsS0FBSyxDQUFDLEVBQUU7Z0JBRW5DLElBQUlELFdBQVc7b0JBQ2IsT0FBTzt3QkFDTEUsWUFBWUgsUUFBUUcsVUFBVTt3QkFDOUJELE9BQU87NEJBQ0w7Z0NBQ0VFLE9BQU87b0NBQUNkO3VDQUFZVyxVQUFVRyxLQUFLO2lDQUFDO2dDQUNwQ0MsWUFBWUosVUFBVUksVUFBVTs0QkFDbEM7K0JBQ0dMLFFBQVFFLEtBQUssQ0FBQ0ksS0FBSyxDQUFDO3lCQUN4QjtvQkFDSDtnQkFDRjtZQUNGO1lBR0ZwQixZQUFZcUIsaUJBQWlCLENBQUM7Z0JBQzVCZixVQUFVRCxZQUFZQyxRQUFRO2dCQUM5QkMsV0FBVUMsS0FBSztvQkFDYixPQUFPSCxZQUFZRSxTQUFTLENBQUNDLFVBQVUsQ0FBQ0EsTUFBTWMsS0FBSyxDQUFDQyxJQUFJO2dCQUMxRDtZQUNGO1lBRUF4QixNQUFNO2dCQUNKeUIsYUFBYTtZQUNmO1FBQ0Y7UUFDQUMsU0FBUUMsS0FBSztZQUNYQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2QzQixNQUFNO2dCQUNKNkIsU0FBUztnQkFDVEosYUFBYTtZQUNmO1FBQ0Y7SUFDRjtJQUVBLE9BQU92QjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL2VkaXRvci9tdXRhdGlvbnMudHM/MDc4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBQb3N0c1BhZ2UgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7XG4gIEluZmluaXRlRGF0YSxcbiAgUXVlcnlGaWx0ZXJzLFxuICB1c2VNdXRhdGlvbixcbiAgdXNlUXVlcnlDbGllbnQsXG59IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHN1Ym1pdFBvc3QgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdWJtaXRQb3N0TXV0YXRpb24oKSB7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gIGNvbnN0IG11dGF0aW9uID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IHN1Ym1pdFBvc3QsXG4gICAgb25TdWNjZXNzOiBhc3luYyAobmV3UG9zdCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnlGaWx0ZXIgPSB7XG4gICAgICAgIHF1ZXJ5S2V5OiBbXCJwb3N0LWZlZWRcIl0sXG4gICAgICAgIHByZWRpY2F0ZShxdWVyeSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBxdWVyeS5xdWVyeUtleS5pbmNsdWRlcyhcImZvci15b3VcIikgfHxcbiAgICAgICAgICAgIChxdWVyeS5xdWVyeUtleS5pbmNsdWRlcyhcInVzZXItcG9zdHNcIikgJiZcbiAgICAgICAgICAgICAgcXVlcnkucXVlcnlLZXkuaW5jbHVkZXModXNlci5pZCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFF1ZXJ5RmlsdGVycztcblxuICAgICAgYXdhaXQgcXVlcnlDbGllbnQuY2FuY2VsUXVlcmllcyhxdWVyeUZpbHRlcik7XG5cbiAgICAgIHF1ZXJ5Q2xpZW50LnNldFF1ZXJpZXNEYXRhPEluZmluaXRlRGF0YTxQb3N0c1BhZ2UsIHN0cmluZyB8IG51bGw+PihcbiAgICAgICAgcXVlcnlGaWx0ZXIsXG4gICAgICAgIChvbGREYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlyc3RQYWdlID0gb2xkRGF0YT8ucGFnZXNbMF07XG5cbiAgICAgICAgICBpZiAoZmlyc3RQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwYWdlUGFyYW1zOiBvbGREYXRhLnBhZ2VQYXJhbXMsXG4gICAgICAgICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcG9zdHM6IFtuZXdQb3N0LCAuLi5maXJzdFBhZ2UucG9zdHNdLFxuICAgICAgICAgICAgICAgICAgbmV4dEN1cnNvcjogZmlyc3RQYWdlLm5leHRDdXJzb3IsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAuLi5vbGREYXRhLnBhZ2VzLnNsaWNlKDEpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICApO1xuXG4gICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7XG4gICAgICAgIHF1ZXJ5S2V5OiBxdWVyeUZpbHRlci5xdWVyeUtleSxcbiAgICAgICAgcHJlZGljYXRlKHF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5RmlsdGVyLnByZWRpY2F0ZShxdWVyeSkgJiYgIXF1ZXJ5LnN0YXRlLmRhdGE7XG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgdG9hc3Qoe1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3N0IGNyZWF0ZWRcIixcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmFpbGVkIHRvIHBvc3QuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gbXV0YXRpb247XG59XG4iXSwibmFtZXMiOlsidXNlVG9hc3QiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Q2xpZW50Iiwic3VibWl0UG9zdCIsInVzZVN1Ym1pdFBvc3RNdXRhdGlvbiIsInRvYXN0IiwicXVlcnlDbGllbnQiLCJtdXRhdGlvbiIsIm11dGF0aW9uRm4iLCJvblN1Y2Nlc3MiLCJuZXdQb3N0IiwicXVlcnlGaWx0ZXIiLCJxdWVyeUtleSIsInByZWRpY2F0ZSIsInF1ZXJ5IiwiaW5jbHVkZXMiLCJ1c2VyIiwiaWQiLCJjYW5jZWxRdWVyaWVzIiwic2V0UXVlcmllc0RhdGEiLCJvbGREYXRhIiwiZmlyc3RQYWdlIiwicGFnZXMiLCJwYWdlUGFyYW1zIiwicG9zdHMiLCJuZXh0Q3Vyc29yIiwic2xpY2UiLCJpbnZhbGlkYXRlUXVlcmllcyIsInN0YXRlIiwiZGF0YSIsImRlc2NyaXB0aW9uIiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/editor/mutations.ts\n"));

/***/ })

});
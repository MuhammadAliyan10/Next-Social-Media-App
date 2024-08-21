"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/layout",{

/***/ "(app-pages-browser)/./src/components/UserButton.tsx":
/*!***************************************!*\
  !*** ./src/components/UserButton.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/(main)/SessionProvider */ \"(app-pages-browser)/./src/app/(main)/SessionProvider.tsx\");\n/* harmony import */ var _ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/dropdown-menu */ \"(app-pages-browser)/./src/components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserAvatar */ \"(app-pages-browser)/./src/components/UserAvatar.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=LogOutIcon,Monitor,UserIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=LogOutIcon,Monitor,UserIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/monitor.js\");\n/* harmony import */ var _barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=LogOutIcon,Monitor,UserIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _app_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/(auth)/actions */ \"(app-pages-browser)/./src/app/(auth)/actions.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction UserButton(param) {\n    let { className } = param;\n    _s();\n    const { user } = (0,_app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { themes, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"flex-none rounded-full\", className),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserAvatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        avatarUrl: user === null || user === void 0 ? void 0 : user.avatarUrl,\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuLabel, {\n                        children: [\n                            \"Logged in as \",\n                            user === null || user === void 0 ? void 0 : user.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        href: \"/user/\".concat(user === null || user === void 0 ? void 0 : user.username),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"mr-2 size-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                \"Profile\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSub, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSubTrigger, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"mr-2 size-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Theme\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuPortal, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSubContent, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                className: \"mr-2 size-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 17\n                                            }, this),\n                                            \"System Default\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuItem, {\n                        onClick: ()=>(0,_app_auth_actions__WEBPACK_IMPORTED_MODULE_5__.logout)(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOutIcon_Monitor_UserIcon_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                className: \"mr-2 size-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            \"Logout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/muhammadaliyan/Documents/Programming/Programming/TypeScript/Next-Social-Media-App/src/components/UserButton.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(UserButton, \"sPYg8JK3F7t7Vr/vc9f+Q42RoiY=\", false, function() {\n    return [\n        _app_main_SessionProvider__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_themes__WEBPACK_IMPORTED_MODULE_7__.useTheme\n    ];\n});\n_c = UserButton;\nvar _c;\n$RefreshReg$(_c, \"UserButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VzZXJCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTBEO0FBWTlCO0FBQ1U7QUFDVDtBQUNnQztBQUNmO0FBQ2I7QUFDTTtBQU14QixTQUFTbUIsV0FBVyxLQUE4QjtRQUE5QixFQUFFQyxTQUFTLEVBQW1CLEdBQTlCOztJQUNqQyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHckIscUVBQVVBO0lBQzNCLE1BQU0sRUFBRXNCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdMLHFEQUFRQTtJQUVyQyxxQkFDRSw4REFBQ2pCLDJEQUFZQTs7MEJBQ1gsOERBQUNFLGtFQUFtQkE7Z0JBQUNxQixPQUFPOzBCQUMxQiw0RUFBQ0M7b0JBQU9MLFdBQVdILDhDQUFFQSxDQUFDLDBCQUEwQkc7OEJBQzlDLDRFQUFDVCxtREFBVUE7d0JBQUNlLFNBQVMsRUFBRUwsaUJBQUFBLDJCQUFBQSxLQUFNSyxTQUFTO3dCQUFFQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsRCw4REFBQ3pCLGtFQUFtQkE7O2tDQUNsQiw4REFBQ0UsZ0VBQWlCQTs7NEJBQUM7NEJBQWNpQixpQkFBQUEsMkJBQUFBLEtBQU1PLFFBQVE7Ozs7Ozs7a0NBQy9DLDhEQUFDdkIsb0VBQXFCQTs7Ozs7a0NBQ3RCLDhEQUFDTyxpREFBSUE7d0JBQUNpQixNQUFNLFNBQXdCLE9BQWZSLGlCQUFBQSwyQkFBQUEsS0FBTU8sUUFBUTtrQ0FDakMsNEVBQUN0QiwrREFBZ0JBOzs4Q0FDZiw4REFBQ1MsdUdBQVFBO29DQUFDSyxXQUFVOzs7Ozs7Z0NBQWdCOzs7Ozs7Ozs7Ozs7a0NBSXhDLDhEQUFDYiw4REFBZUE7OzBDQUNkLDhEQUFDQyxxRUFBc0JBOztrREFDckIsOERBQUNNLHVHQUFPQTt3Q0FBQ00sV0FBVTs7Ozs7O29DQUFnQjs7Ozs7OzswQ0FHckMsOERBQUNYLGlFQUFrQkE7MENBQ2pCLDRFQUFDQyxxRUFBc0JBOzhDQUNyQiw0RUFBQ0osK0RBQWdCQTs7MERBQ2YsOERBQUNRLHVHQUFPQTtnREFBQ00sV0FBVTs7Ozs7OzRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTNDLDhEQUFDZixvRUFBcUJBOzs7OztrQ0FFdEIsOERBQUNDLCtEQUFnQkE7d0JBQUN3QixTQUFTLElBQU1kLHlEQUFNQTs7MENBQ3JDLDhEQUFDSCx3R0FBVUE7Z0NBQUNPLFdBQVU7Ozs7Ozs0QkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEQ7R0EzQ3dCRDs7UUFDTG5CLGlFQUFVQTtRQUNFa0IsaURBQVFBOzs7S0FGZkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckJ1dHRvbi50c3g/ZWI2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAL2FwcC8obWFpbikvU2Vzc2lvblByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBEcm9wZG93bk1lbnUsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG4gIERyb3Bkb3duTWVudUxhYmVsLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudVN1YixcbiAgRHJvcGRvd25NZW51U3ViVHJpZ2dlcixcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxuICBEcm9wZG93bk1lbnVTdWJDb250ZW50LFxufSBmcm9tIFwiLi91aS9kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgVXNlckF2YXRhciBmcm9tIFwiLi9Vc2VyQXZhdGFyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMb2dPdXRJY29uLCBNb25pdG9yLCBVc2VySWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJAL2FwcC8oYXV0aCkvYWN0aW9uc1wiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5cbmludGVyZmFjZSB1c2VyQnV0dG9uUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJCdXR0b24oeyBjbGFzc05hbWUgfTogdXNlckJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCB7IHRoZW1lcywgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51PlxuICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NuKFwiZmxleC1ub25lIHJvdW5kZWQtZnVsbFwiLCBjbGFzc05hbWUpfT5cbiAgICAgICAgICA8VXNlckF2YXRhciBhdmF0YXJVcmw9e3VzZXI/LmF2YXRhclVybH0gc2l6ZT17NDB9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQ+XG4gICAgICAgIDxEcm9wZG93bk1lbnVMYWJlbD5Mb2dnZWQgaW4gYXMge3VzZXI/LnVzZXJuYW1lfTwvRHJvcGRvd25NZW51TGFiZWw+XG4gICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IgLz5cbiAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7dXNlcj8udXNlcm5hbWV9YH0+XG4gICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0+XG4gICAgICAgICAgICA8VXNlckljb24gY2xhc3NOYW1lPVwibXItMiBzaXplLTRcIiAvPlxuICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8RHJvcGRvd25NZW51U3ViPlxuICAgICAgICAgIDxEcm9wZG93bk1lbnVTdWJUcmlnZ2VyPlxuICAgICAgICAgICAgPE1vbml0b3IgY2xhc3NOYW1lPVwibXItMiBzaXplLTRcIiAvPlxuICAgICAgICAgICAgVGhlbWVcbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudVN1YlRyaWdnZXI+XG4gICAgICAgICAgPERyb3Bkb3duTWVudVBvcnRhbD5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVTdWJDb250ZW50PlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TW9uaXRvciBjbGFzc05hbWU9XCJtci0yIHNpemUtNFwiIC8+XG4gICAgICAgICAgICAgICAgU3lzdGVtIERlZmF1bHRcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVTdWJDb250ZW50PlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51UG9ydGFsPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudVN1Yj5cbiAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvciAvPlxuXG4gICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfT5cbiAgICAgICAgICA8TG9nT3V0SWNvbiBjbGFzc05hbWU9XCJtci0yIHNpemUtNFwiIC8+XG4gICAgICAgICAgTG9nb3V0XG4gICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgIDwvRHJvcGRvd25NZW51Q29udGVudD5cbiAgICA8L0Ryb3Bkb3duTWVudT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51Q29udGVudCIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJEcm9wZG93bk1lbnVMYWJlbCIsIkRyb3Bkb3duTWVudVNlcGFyYXRvciIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVTdWIiLCJEcm9wZG93bk1lbnVTdWJUcmlnZ2VyIiwiRHJvcGRvd25NZW51UG9ydGFsIiwiRHJvcGRvd25NZW51U3ViQ29udGVudCIsIlVzZXJBdmF0YXIiLCJMaW5rIiwiTG9nT3V0SWNvbiIsIk1vbml0b3IiLCJVc2VySWNvbiIsImxvZ291dCIsImNuIiwidXNlVGhlbWUiLCJVc2VyQnV0dG9uIiwiY2xhc3NOYW1lIiwidXNlciIsInRoZW1lcyIsInNldFRoZW1lIiwiYXNDaGlsZCIsImJ1dHRvbiIsImF2YXRhclVybCIsInNpemUiLCJ1c2VybmFtZSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UserButton.tsx\n"));

/***/ })

});
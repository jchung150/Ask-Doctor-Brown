"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Button */ \"./src/pages/component/Button.js\");\n/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.js\");\n/* harmony import */ var react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-speech-recognition */ \"./node_modules/react-speech-recognition/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { transcript, listening, resetTranscript } = (0,react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition)();\n    const [editableTranscript, setEditableTranscript] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isShow, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [lastTranscriptLength, setLastTranscriptLength] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const handleStart = ()=>{\n        setShow(!isShow);\n    };\n    const handleChange = (e)=>{\n        setName(e.target.value);\n    };\n    const handleSubmit = async ()=>{\n        try {\n            const responseAnswer = await (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.getAnswer)(editableTranscript);\n            setAnswer(responseAnswer);\n            (0,_services_apiService__WEBPACK_IMPORTED_MODULE_3__.textToSpeech)(responseAnswer);\n        } catch (error) {\n            console.error(\"An error occurred:\", error);\n        }\n    };\n    const handleReset = ()=>{\n        resetTranscript();\n        setEditableTranscript(\"\");\n        setAnswer(\"\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (transcript) {\n            console.log(\"Transcript updated:\", transcript);\n            const newWords = transcript.substring(lastTranscriptLength);\n            setEditableTranscript((prevTranscript)=>prevTranscript + \" \" + transcript);\n        }\n    }, [\n        transcript\n    ]);\n    const options = {\n        continuous: true,\n        language: \"en-CA\",\n        onError: (error)=>console.error(\"Speech Recognition Error:\", error)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isShow ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-5 text-3xl\",\n                        children: \"Ask Doc Brown\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mb-5 text-center h-10\",\n                        type: \"text\",\n                        value: name,\n                        onChange: handleChange,\n                        placeholder: \"Enter your first name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"\",\n                        onClick: handleStart,\n                        text: \"Start\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-l font-sans\",\n                            children: [\n                                \"Hello! \",\n                                name,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                \"I am Doctor Brown.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                \"Ask Me Any Question.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pb-5 font-sans\",\n                            style: {\n                                color: listening ? \"green\" : \"red\"\n                            },\n                            children: listening ? \"Listening...\" : \"Microphone Off\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: ()=>react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].startListening(options),\n                                    text: \"Start\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopListening,\n                                    text: \"Stop\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onClick: handleReset,\n                                    text: \"Reset\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            type: \"text\",\n                            value: editableTranscript,\n                            onChange: (e)=>setEditableTranscript(e.target.value),\n                            placeholder: \"Press start to record your question or type it here...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"border block w-full mb-5 border-gray-400  rounded-lg  bg-white hover:shadow-md hover:border-opacity-0 font-sans  text-gray-700 text-m py-3\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded\",\n                            children: answer ? answer : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-400\",\n                                children: \"Doc Brown's answer will appear here...\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jcdev/Desktop/mypythonproject/docBrown2_Front/src/pages/index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"RPXegg1eDQPDJGe/7wL4TvATjwU=\", false, function() {\n    return [\n        react_speech_recognition__WEBPACK_IMPORTED_MODULE_4__.useSpeechRecognition\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQlcsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUNyRG1CLGFBQVk7Ozs7OztzQ0FHZCw4REFBQ1M7NEJBQ0NSLFNBQVNuQjs0QkFDVGMsV0FBVTtzQ0FhWDs7Ozs7O3NDQUlELDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWjNCLFNBQ0NBLHVCQUVBLDhEQUFDeUM7Z0NBQUtkLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBT3RDOzs7Ozs7O0FBR1Y7R0EvSHdCakM7O1FBQzZCSCwwRUFBb0JBOzs7S0FEakRHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgeyBnZXRBbnN3ZXIsIHRleHRUb1NwZWVjaCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlXCI7XG5pbXBvcnQgU3BlZWNoUmVjb2duaXRpb24sIHtcbiAgdXNlU3BlZWNoUmVjb2duaXRpb24sXG59IGZyb20gXCJyZWFjdC1zcGVlY2gtcmVjb2duaXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHRyYW5zY3JpcHQsIGxpc3RlbmluZywgcmVzZXRUcmFuc2NyaXB0IH0gPSB1c2VTcGVlY2hSZWNvZ25pdGlvbigpO1xuICBjb25zdCBbZWRpdGFibGVUcmFuc2NyaXB0LCBzZXRFZGl0YWJsZVRyYW5zY3JpcHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdFRyYW5zY3JpcHRMZW5ndGgsIHNldExhc3RUcmFuc2NyaXB0TGVuZ3RoXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldFNob3coIWlzU2hvdyk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2VBbnN3ZXIgPSBhd2FpdCBnZXRBbnN3ZXIoZWRpdGFibGVUcmFuc2NyaXB0KTtcbiAgICAgIHNldEFuc3dlcihyZXNwb25zZUFuc3dlcik7XG4gICAgICB0ZXh0VG9TcGVlY2gocmVzcG9uc2VBbnN3ZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRUcmFuc2NyaXB0KCk7XG4gICAgc2V0RWRpdGFibGVUcmFuc2NyaXB0KFwiXCIpO1xuICAgIHNldEFuc3dlcihcIlwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmFuc2NyaXB0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRyYW5zY3JpcHQgdXBkYXRlZDpcIiwgdHJhbnNjcmlwdCk7XG4gICAgICBjb25zdCBuZXdXb3JkcyA9IHRyYW5zY3JpcHQuc3Vic3RyaW5nKGxhc3RUcmFuc2NyaXB0TGVuZ3RoKTtcbiAgICAgIHNldEVkaXRhYmxlVHJhbnNjcmlwdChcbiAgICAgICAgKHByZXZUcmFuc2NyaXB0KSA9PiBwcmV2VHJhbnNjcmlwdCArIFwiIFwiICsgdHJhbnNjcmlwdFxuICAgICAgKTtcbiAgICB9XG4gIH0sIFt0cmFuc2NyaXB0XSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb250aW51b3VzOiB0cnVlLFxuICAgIGxhbmd1YWdlOiBcImVuLUNBXCIsXG4gICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiU3BlZWNoIFJlY29nbml0aW9uIEVycm9yOlwiLCBlcnJvciksXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2lzU2hvdyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTUgdGV4dC0zeGxcIj5Bc2sgRG9jIEJyb3duPC9kaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi01IHRleHQtY2VudGVyIGgtMTBcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gdGV4dD1cIlN0YXJ0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aXNTaG93ID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtbCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgSGVsbG8hIHtuYW1lfVxuICAgICAgICAgICAgICA8YnI+PC9icj5JIGFtIERvY3RvciBCcm93bi5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+QXNrIE1lIEFueSBRdWVzdGlvbi5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi01IGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBsaXN0ZW5pbmcgPyBcImdyZWVuXCIgOiBcInJlZFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaXN0ZW5pbmcgPyBcIkxpc3RlbmluZy4uLlwiIDogXCJNaWNyb3Bob25lIE9mZlwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTcGVlY2hSZWNvZ25pdGlvbi5zdGFydExpc3RlbmluZyhvcHRpb25zKX1cbiAgICAgICAgICAgICAgICB0ZXh0PVwiU3RhcnRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e1NwZWVjaFJlY29nbml0aW9uLnN0b3BMaXN0ZW5pbmd9IHRleHQ9XCJTdG9wXCIgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0gdGV4dD1cIlJlc2V0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicXVlc3Rpb25TaG93IG92ZXJmbG93LWF1dG8gdy1mdWxsIGJsb2NrIGJveC1ib3JkZXIgYmctd2hpdGUgaC0yNCBwLTQgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIG1iLTUgcm91bmRlZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VkaXRhYmxlVHJhbnNjcmlwdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0YWJsZVRyYW5zY3JpcHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByZXNzIHN0YXJ0IHRvIHJlY29yZCB5b3VyIHF1ZXN0aW9uIG9yIHR5cGUgaXQgaGVyZS4uLlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXG4gICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgIHctZnVsbFxuICAgICAgICAgICAgICBtYi01XG4gICAgICAgICAgICAgIGJvcmRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgICAgcm91bmRlZC1sZyBcbiAgICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgICAgaG92ZXI6c2hhZG93LW1kXG4gICAgICAgICAgICAgIGhvdmVyOmJvcmRlci1vcGFjaXR5LTBcbiAgICAgICAgICAgICAgZm9udC1zYW5zIFxuICAgICAgICAgICAgICB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgIHRleHQtbVxuICAgICAgICAgICAgICBweS0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJTaG93IG92ZXJmbG93LWF1dG8gYm94LWJvcmRlciBiZy13aGl0ZSBoLTU2IHAtNCBib3JkZXItMiBib3JkZXItZ3JheS00MDAgbWItNSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIHthbnN3ZXIgPyAoXG4gICAgICAgICAgICAgICAgYW5zd2VyXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgRG9jIEJyb3duJ3MgYW5zd2VyIHdpbGwgYXBwZWFyIGhlcmUuLi5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkltYWdlIiwiQnV0dG9uIiwiZ2V0QW5zd2VyIiwidGV4dFRvU3BlZWNoIiwiU3BlZWNoUmVjb2duaXRpb24iLCJ1c2VTcGVlY2hSZWNvZ25pdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInRyYW5zY3JpcHQiLCJsaXN0ZW5pbmciLCJyZXNldFRyYW5zY3JpcHQiLCJlZGl0YWJsZVRyYW5zY3JpcHQiLCJzZXRFZGl0YWJsZVRyYW5zY3JpcHQiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpc1Nob3ciLCJzZXRTaG93IiwibmFtZSIsInNldE5hbWUiLCJsYXN0VHJhbnNjcmlwdExlbmd0aCIsInNldExhc3RUcmFuc2NyaXB0TGVuZ3RoIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJyZXNwb25zZUFuc3dlciIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVJlc2V0IiwibG9nIiwibmV3V29yZHMiLCJzdWJzdHJpbmciLCJwcmV2VHJhbnNjcmlwdCIsIm9wdGlvbnMiLCJjb250aW51b3VzIiwibGFuZ3VhZ2UiLCJvbkVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYnIiLCJwIiwic3R5bGUiLCJjb2xvciIsInN0YXJ0TGlzdGVuaW5nIiwic3RvcExpc3RlbmluZyIsImJ1dHRvbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});
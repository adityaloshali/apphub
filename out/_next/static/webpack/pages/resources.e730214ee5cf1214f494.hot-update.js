self["webpackHotUpdate_N_E"]("pages/resources",{

/***/ "./pages/resources.js":
/*!****************************!*\
  !*** ./pages/resources.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Resources; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_BlogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogCard */ "./components/BlogCard/index.js");
/* harmony import */ var _resources_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources.module.scss */ "./pages/resources.module.scss");
/* harmony import */ var _resources_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Privola\\apphub\\pages\\resources.js";




var __N_SSG = true;
function Resources(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Apps | AppHub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      categories: props.categories,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_resources_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_resources_module_scss__WEBPACK_IMPORTED_MODULE_4___default().heading),
          children: "All Stories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: ['columns is-multiline'].join(' '),
          children: props.articles.map(function (article) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "column is-3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogCard__WEBPACK_IMPORTED_MODULE_3__.default, {
                article: article
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, _this)
            }, article.slug, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Resources;

var _c;

$RefreshReg$(_c, "Resources");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzLmpzIl0sIm5hbWVzIjpbIlJlc291cmNlcyIsInByb3BzIiwiY2F0ZWdvcmllcyIsInN0eWxlcyIsImpvaW4iLCJhcnRpY2xlcyIsIm1hcCIsImFydGljbGUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBSUE7O0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFFdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyx1REFBRDtBQUFRLGdCQUFVLEVBQUVBLEtBQUssQ0FBQ0MsVUFBMUI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVDLHlFQUFoQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRUEsdUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUUsQ0FBQyxzQkFBRCxFQUF5QkMsSUFBekIsQ0FBOEIsR0FBOUIsQ0FBaEI7QUFBQSxvQkFFSUgsS0FBSyxDQUFDSSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLGdDQUN4QjtBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUNFLDhEQUFDLHlEQUFEO0FBQVUsdUJBQU8sRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQWtDQSxPQUFPLENBQUNDLElBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHdCO0FBQUEsV0FBMUI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDtLQXpCdUJSLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzLmU3MzAyMTRlZTVjZjEyMTRmNDk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dDYXJkJztcclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tICcuLi9saWIvYXBpJztcclxuaW1wb3J0IHsgZ2V0QXBwc0xpc3RpbmcgfSBmcm9tICcuLi9saWIvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Jlc291cmNlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNvdXJjZXMocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BcHBzIHwgQXBwSHViPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17cHJvcHMuY2F0ZWdvcmllc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PkFsbCBTdG9yaWVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbJ2NvbHVtbnMgaXMtbXVsdGlsaW5lJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb3BzLmFydGljbGVzLm1hcChhcnRpY2xlID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTNcIiBrZXk9e2FydGljbGUuc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgIDxCbG9nQ2FyZCBhcnRpY2xlPXthcnRpY2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGFwcHNMaXN0aW5nUHJvbWlzZSA9IGdldEFwcHNMaXN0aW5nKCk7XHJcbiAgY29uc3QgYXJ0aWNsZXNQcm9taXNlID0gZmV0Y2hBUEkoXCIvYXJ0aWNsZXM/c3RhdHVzPXB1Ymxpc2hlZFwiKTtcclxuXHJcbiAgY29uc3QgYXBwc0xpc3RpbmcgPSBhd2FpdCBhcHBzTGlzdGluZ1Byb21pc2U7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBhcnRpY2xlc1Byb21pc2U7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyAuLi5hcHBzTGlzdGluZywgYXJ0aWNsZXMgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwLFxyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9
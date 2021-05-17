self["webpackHotUpdate_N_E"]("pages/resources/[slug]",{

/***/ "./pages/resources/[slug].js":
/*!***********************************!*\
  !*** ./pages/resources/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/src/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Image */ "./components/Image/index.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Seo */ "./components/Seo/index.js");
/* harmony import */ var _article_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article.module.scss */ "./pages/resources/article.module.scss");
/* harmony import */ var _article_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_article_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Privola\\apphub\\pages\\resources\\[slug].js",
    _this = undefined;










var Article = function Article(_ref) {
  var article = _ref.article,
      categories = _ref.categories;
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__.getStrapiMedia)(article.image);
  var seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  };
  console.log(article, 'info');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_7__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_article_module_scss__WEBPACK_IMPORTED_MODULE_8___default().article),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "banner",
        className: "uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin",
        "data-src": imageUrl,
        "data-srcset": imageUrl,
        "data-uk-img": true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: article.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-section",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: ['uk-container uk-container-small', (_article_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content)].join(' '),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            remarkPlugins: [(remark_gfm__WEBPACK_IMPORTED_MODULE_3___default())],
            skipHtml: true,
            children: article.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "uk-divider-small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-grid-small uk-flex-left",
            "data-uk-grid": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: article.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Image__WEBPACK_IMPORTED_MODULE_6__.default, {
                image: article.author.picture,
                style: {
                  position: "static",
                  borderRadius: "50%",
                  height: 30
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-width-expand",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "uk-margin-remove-bottom",
                children: ["By ", article.author.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "uk-text-meta uk-margin-remove-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                  format: "MMM Do YYYY",
                  children: article.published_at
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c = Article;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

$RefreshReg$(_c, "Article");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJqb2luIiwiZ2ZtIiwiY29udGVudCIsImF1dGhvciIsInBpY3R1cmUiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm5hbWUiLCJwdWJsaXNoZWRfYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBNkI7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNILE9BQU8sQ0FBQ0ksS0FBVCxDQUEvQjtBQUVBLE1BQU1DLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ08sS0FEVDtBQUVWQyxtQkFBZSxFQUFFUixPQUFPLENBQUNTLFdBRmY7QUFHVkMsY0FBVSxFQUFFVixPQUFPLENBQUNJLEtBSFY7QUFJVkosV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BVyxTQUFPLENBQUNDLEdBQVIsQ0FBWVosT0FBWixFQUFxQixNQUFyQjtBQUVBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFQyxVQUFwQjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssU0FBRyxFQUFFSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFFUSxxRUFBaEI7QUFBQSw4QkFDRTtBQUNFLFVBQUUsRUFBQyxRQURMO0FBRUUsaUJBQVMsRUFBQywwR0FGWjtBQUdFLG9CQUFVWCxRQUhaO0FBSUUsdUJBQWFBLFFBSmY7QUFLRSwyQkFMRjtBQUFBLCtCQU9FO0FBQUEsb0JBQUtGLE9BQU8sQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUUsQ0FBQyxpQ0FBRCxFQUFvQ00scUVBQXBDLEVBQXVEQyxJQUF2RCxDQUE0RCxHQUE1RCxDQUFoQjtBQUFBLGtDQUNFLDhEQUFDLHVEQUFEO0FBQWUseUJBQWEsRUFBRSxDQUFDQyxtREFBRCxDQUE5QjtBQUFxQyxvQkFBUSxFQUFFLElBQS9DO0FBQUEsc0JBQXNEZixPQUFPLENBQUNnQjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSSxxQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUsscUJBQVMsRUFBQyw0QkFBZjtBQUE0Qyw0QkFBYSxNQUF6RDtBQUFBLG9DQUNFO0FBQUEsd0JBQ0doQixPQUFPLENBQUNpQixNQUFSLENBQWVDLE9BQWYsaUJBQ0MsOERBQUMsc0RBQUQ7QUFDRSxxQkFBSyxFQUFFbEIsT0FBTyxDQUFDaUIsTUFBUixDQUFlQyxPQUR4QjtBQUVFLHFCQUFLLEVBQUU7QUFDTEMsMEJBQVEsRUFBRSxRQURMO0FBRUxDLDhCQUFZLEVBQUUsS0FGVDtBQUdMQyx3QkFBTSxFQUFFO0FBSEg7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWFFO0FBQUssdUJBQVMsRUFBQyxpQkFBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQyx5QkFBYjtBQUFBLGtDQUNNckIsT0FBTyxDQUFDaUIsTUFBUixDQUFlSyxJQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsbUNBQWI7QUFBQSx1Q0FDRSw4REFBQyxxREFBRDtBQUFRLHdCQUFNLEVBQUMsYUFBZjtBQUFBLDRCQUE4QnRCLE9BQU8sQ0FBQ3VCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBeEREOztLQUFNeEIsTzs7QUFtRk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5jNDYzNTYzYTIyODAzODI0MzExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ltYWdlXCI7XHJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VvXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXJ0aWNsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmltYWdlKTtcclxuXHJcbiAgY29uc3Qgc2VvID0ge1xyXG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLnRpdGxlLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxyXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5pbWFnZSxcclxuICAgIGFydGljbGU6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coYXJ0aWNsZSwgJ2luZm8nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cImJhbm5lclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1oZWlnaHQtbWVkaXVtIHVrLWZsZXggdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGUgdWstYmFja2dyb3VuZC1jb3ZlciB1ay1saWdodCB1ay1wYWRkaW5nIHVrLW1hcmdpblwiXHJcbiAgICAgICAgICBkYXRhLXNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBkYXRhLXNyY3NldD17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBkYXRhLXVrLWltZ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1sndWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbCcsIHN0eWxlc1snY29udGVudCddXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biByZW1hcmtQbHVnaW5zPXtbZ2ZtXX0gc2tpcEh0bWw9e3RydWV9PnthcnRpY2xlLmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZC1zbWFsbCB1ay1mbGV4LWxlZnRcIiBkYXRhLXVrLWdyaWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvci5waWN0dXJlICYmIChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuYXV0aG9yLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWV4cGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgQnkge2FydGljbGUuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPnthcnRpY2xlLnB1Ymxpc2hlZF9hdH08L01vbWVudD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBhcnRpY2xlLnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKFxyXG4gICAgYC9hcnRpY2xlcz9zbHVnPSR7cGFyYW1zLnNsdWd9JnN0YXR1cz1wdWJsaXNoZWRgXHJcbiAgKTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzWzBdLCBjYXRlZ29yaWVzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Image */ "./components/Image/index.js");
/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Seo */ "./components/Seo/index.js");
/* harmony import */ var _article_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article.module.scss */ "./pages/resources/article.module.scss");
/* harmony import */ var _article_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_article_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Privola\\apphub\\pages\\resources\\[slug].js",
    _this = undefined;









var Article = function Article(_ref) {
  var article = _ref.article,
      categories = _ref.categories;
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(article.image);
  var seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  };
  console.log(article, 'info');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    categories: categories,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_article_module_scss__WEBPACK_IMPORTED_MODULE_7___default().article),
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
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-section",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "uk-container uk-container-small",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            source: article.content,
            escapeHtml: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {
            className: "uk-divider-small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-grid-small uk-flex-left",
            "data-uk-grid": "true",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: article.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Image__WEBPACK_IMPORTED_MODULE_5__.default, {
                image: article.author.picture,
                style: {
                  position: "static",
                  borderRadius: "50%",
                  height: 30
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "uk-width-expand",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "uk-margin-remove-bottom",
                children: ["By ", article.author.name]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "uk-text-meta uk-margin-remove-top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
                  format: "MMM Do YYYY",
                  children: article.published_at
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250ZW50IiwiYXV0aG9yIiwicGljdHVyZSIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibmFtZSIsInB1Ymxpc2hlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTZCO0FBQUEsTUFBMUJDLE9BQTBCLFFBQTFCQSxPQUEwQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDM0MsTUFBTUMsUUFBUSxHQUFHQywwREFBYyxDQUFDSCxPQUFPLENBQUNJLEtBQVQsQ0FBL0I7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFTixPQUFPLENBQUNPLEtBRFQ7QUFFVkMsbUJBQWUsRUFBRVIsT0FBTyxDQUFDUyxXQUZmO0FBR1ZDLGNBQVUsRUFBRVYsT0FBTyxDQUFDSSxLQUhWO0FBSVZKLFdBQU8sRUFBRTtBQUpDLEdBQVo7QUFPQVcsU0FBTyxDQUFDQyxHQUFSLENBQVlaLE9BQVosRUFBcUIsTUFBckI7QUFFQSxzQkFDRSw4REFBQyx1REFBRDtBQUFRLGNBQVUsRUFBRUMsVUFBcEI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRUk7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBRVEscUVBQWhCO0FBQUEsOEJBQ0U7QUFDRSxVQUFFLEVBQUMsUUFETDtBQUVFLGlCQUFTLEVBQUMsMEdBRlo7QUFHRSxvQkFBVVgsUUFIWjtBQUlFLHVCQUFhQSxRQUpmO0FBS0UsMkJBTEY7QUFBQSwrQkFPRTtBQUFBLG9CQUFLRixPQUFPLENBQUNPO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQUEsa0NBQ0UsOERBQUMsdURBQUQ7QUFBZSxrQkFBTSxFQUFFUCxPQUFPLENBQUNjLE9BQS9CO0FBQXdDLHNCQUFVLEVBQUU7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUkscUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBNEMsNEJBQWEsTUFBekQ7QUFBQSxvQ0FDRTtBQUFBLHdCQUNHZCxPQUFPLENBQUNlLE1BQVIsQ0FBZUMsT0FBZixpQkFDQyw4REFBQyxzREFBRDtBQUNFLHFCQUFLLEVBQUVoQixPQUFPLENBQUNlLE1BQVIsQ0FBZUMsT0FEeEI7QUFFRSxxQkFBSyxFQUFFO0FBQ0xDLDBCQUFRLEVBQUUsUUFETDtBQUVMQyw4QkFBWSxFQUFFLEtBRlQ7QUFHTEMsd0JBQU0sRUFBRTtBQUhIO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRTtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQ0FDTW5CLE9BQU8sQ0FBQ2UsTUFBUixDQUFlSyxJQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFHLHlCQUFTLEVBQUMsbUNBQWI7QUFBQSx1Q0FDRSw4REFBQyxxREFBRDtBQUFRLHdCQUFNLEVBQUMsYUFBZjtBQUFBLDRCQUE4QnBCLE9BQU8sQ0FBQ3FCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBeEREOztLQUFNdEIsTzs7QUFtRk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5iNGMyNjU3ZWJiOGZiNjNhZjg2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ltYWdlXCI7XHJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VvXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXJ0aWNsZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmltYWdlKTtcclxuXHJcbiAgY29uc3Qgc2VvID0ge1xyXG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLnRpdGxlLFxyXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxyXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5pbWFnZSxcclxuICAgIGFydGljbGU6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc29sZS5sb2coYXJ0aWNsZSwgJ2luZm8nKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfT5cclxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cImJhbm5lclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1oZWlnaHQtbWVkaXVtIHVrLWZsZXggdWstZmxleC1jZW50ZXIgdWstZmxleC1taWRkbGUgdWstYmFja2dyb3VuZC1jb3ZlciB1ay1saWdodCB1ay1wYWRkaW5nIHVrLW1hcmdpblwiXHJcbiAgICAgICAgICBkYXRhLXNyYz17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBkYXRhLXNyY3NldD17aW1hZ2VVcmx9XHJcbiAgICAgICAgICBkYXRhLXVrLWltZ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17YXJ0aWNsZS5jb250ZW50fSBlc2NhcGVIdG1sPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInVrLWRpdmlkZXItc21hbGxcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQtc21hbGwgdWstZmxleC1sZWZ0XCIgZGF0YS11ay1ncmlkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdXRob3IucGljdHVyZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXthcnRpY2xlLmF1dGhvci5waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC1leHBhbmRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJ5IHthcnRpY2xlLmF1dGhvci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1yZW1vdmUtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNb21lbnQgZm9ybWF0PVwiTU1NIERvIFlZWVlcIj57YXJ0aWNsZS5wdWJsaXNoZWRfYXR9PC9Nb21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgc2x1ZzogYXJ0aWNsZS5zbHVnLFxyXG4gICAgICB9LFxyXG4gICAgfSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBmZXRjaEFQSShcclxuICAgIGAvYXJ0aWNsZXM/c2x1Zz0ke3BhcmFtcy5zbHVnfSZzdGF0dXM9cHVibGlzaGVkYFxyXG4gICk7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlc1swXSwgY2F0ZWdvcmllcyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlOyJdLCJzb3VyY2VSb290IjoiIn0=
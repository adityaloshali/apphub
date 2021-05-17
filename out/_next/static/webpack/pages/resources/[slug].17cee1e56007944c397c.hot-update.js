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
          className: "uk-container uk-container-small",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJnZm0iLCJjb250ZW50IiwiYXV0aG9yIiwicGljdHVyZSIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibmFtZSIsInB1Ymxpc2hlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE2QjtBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0MsMERBQWMsQ0FBQ0gsT0FBTyxDQUFDSSxLQUFULENBQS9CO0FBRUEsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLGFBQVMsRUFBRU4sT0FBTyxDQUFDTyxLQURUO0FBRVZDLG1CQUFlLEVBQUVSLE9BQU8sQ0FBQ1MsV0FGZjtBQUdWQyxjQUFVLEVBQUVWLE9BQU8sQ0FBQ0ksS0FIVjtBQUlWSixXQUFPLEVBQUU7QUFKQyxHQUFaO0FBT0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixPQUFaLEVBQXFCLE1BQXJCO0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVDLFVBQXBCO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVRLHFFQUFoQjtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxpQkFBUyxFQUFDLDBHQUZaO0FBR0Usb0JBQVVYLFFBSFo7QUFJRSx1QkFBYUEsUUFKZjtBQUtFLDJCQUxGO0FBQUEsK0JBT0U7QUFBQSxvQkFBS0YsT0FBTyxDQUFDTztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGtDQUNFLDhEQUFDLHVEQUFEO0FBQWUseUJBQWEsRUFBRSxDQUFDTyxtREFBRCxDQUE5QjtBQUFxQyxvQkFBUSxFQUFFLElBQS9DO0FBQUEsc0JBQXNEZCxPQUFPLENBQUNlO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFJLHFCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQTRDLDRCQUFhLE1BQXpEO0FBQUEsb0NBQ0U7QUFBQSx3QkFDR2YsT0FBTyxDQUFDZ0IsTUFBUixDQUFlQyxPQUFmLGlCQUNDLDhEQUFDLHNEQUFEO0FBQ0UscUJBQUssRUFBRWpCLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZUMsT0FEeEI7QUFFRSxxQkFBSyxFQUFFO0FBQ0xDLDBCQUFRLEVBQUUsUUFETDtBQUVMQyw4QkFBWSxFQUFFLEtBRlQ7QUFHTEMsd0JBQU0sRUFBRTtBQUhIO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRTtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMseUJBQWI7QUFBQSxrQ0FDTXBCLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZUssSUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBRyx5QkFBUyxFQUFDLG1DQUFiO0FBQUEsdUNBQ0UsOERBQUMscURBQUQ7QUFBUSx3QkFBTSxFQUFDLGFBQWY7QUFBQSw0QkFBOEJyQixPQUFPLENBQUNzQjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRDRCxDQXhERDs7S0FBTXZCLE87O0FBbUZOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc291cmNlcy9bc2x1Z10uMTdjZWUxZTU2MDA3OTQ0YzM5N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuaW1wb3J0IGdmbSBmcm9tICdyZW1hcmstZ2ZtJztcclxuXHJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vbGliL21lZGlhXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbWFnZVwiO1xyXG5pbXBvcnQgU2VvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Nlb1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FydGljbGUubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5pbWFnZSk7XHJcblxyXG4gIGNvbnN0IHNlbyA9IHtcclxuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS50aXRsZSxcclxuICAgIG1ldGFEZXNjcmlwdGlvbjogYXJ0aWNsZS5kZXNjcmlwdGlvbixcclxuICAgIHNoYXJlSW1hZ2U6IGFydGljbGUuaW1hZ2UsXHJcbiAgICBhcnRpY2xlOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGFydGljbGUsICdpbmZvJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XHJcbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJiYW5uZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidWstaGVpZ2h0LW1lZGl1bSB1ay1mbGV4IHVrLWZsZXgtY2VudGVyIHVrLWZsZXgtbWlkZGxlIHVrLWJhY2tncm91bmQtY292ZXIgdWstbGlnaHQgdWstcGFkZGluZyB1ay1tYXJnaW5cIlxyXG4gICAgICAgICAgZGF0YS1zcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgZGF0YS1zcmNzZXQ9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgZGF0YS11ay1pbWdcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxyXG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biByZW1hcmtQbHVnaW5zPXtbZ2ZtXX0gc2tpcEh0bWw9e3RydWV9PnthcnRpY2xlLmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZC1zbWFsbCB1ay1mbGV4LWxlZnRcIiBkYXRhLXVrLWdyaWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvci5waWN0dXJlICYmIChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuYXV0aG9yLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWV4cGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgQnkge2FydGljbGUuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPnthcnRpY2xlLnB1Ymxpc2hlZF9hdH08L01vbWVudD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBhcnRpY2xlLnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKFxyXG4gICAgYC9hcnRpY2xlcz9zbHVnPSR7cGFyYW1zLnNsdWd9JnN0YXR1cz1wdWJsaXNoZWRgXHJcbiAgKTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzWzBdLCBjYXRlZ29yaWVzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==
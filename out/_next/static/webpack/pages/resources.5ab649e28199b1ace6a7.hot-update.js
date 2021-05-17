self["webpackHotUpdate_N_E"]("pages/resources",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./components/BlogCard/index.js":
/*!**************************************!*\
  !*** ./components/BlogCard/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Image */ "./components/Image/index.js");
/* harmony import */ var _CTA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CTA */ "./components/CTA/index.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./components/BlogCard/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Privola\\apphub\\components\\BlogCard\\index.js",
    _this = undefined;

 // import Link from "next/link";





var Button = function Button(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogcard),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: article.image,
        style: {
          width: '100%',
          height: '100%'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        id: "title",
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CTA__WEBPACK_IMPORTED_MODULE_3__.default, {
        url: "/resources/".concat(article.slug),
        children: "Read"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_c = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

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


/***/ }),

/***/ "./components/CTA/index.js":
/*!*********************************!*\
  !*** ./components/CTA/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./components/CTA/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Privola\\apphub\\components\\CTA\\index.js",
    _this = undefined;





var CTA = function CTA(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cta),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: props.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["animated-arrow"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["the-arrow"]), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["the-arrow--left"])].join(' '),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shaft)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text),
            children: props.children || 'Details'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["the-arrow"]), (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["the-arrow--right"])].join(' '),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().shaft)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, _this);
};

_c = CTA;
/* harmony default export */ __webpack_exports__["default"] = (CTA);

var _c;

$RefreshReg$(_c, "CTA");

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


/***/ }),

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Privola\\apphub\\components\\Image\\index.js",
    _this = undefined;



var Image = function Image(_ref) {
  var image = _ref.image,
      style = _ref.style;
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__.getStrapiMedia)(image);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: imageUrl,
    alt: image.alternativeText || image.name,
    style: style
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Image;
/* harmony default export */ __webpack_exports__["default"] = (Image);

var _c;

$RefreshReg$(_c, "Image");

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


/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var C_Privola_apphub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Privola_apphub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Privola_apphub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Privola_apphub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = (0,C_Privola_apphub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Privola_apphub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var requestUrl, response, data;
    return C_Privola_apphub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestUrl = getStrapiURL(path);
            _context.next = 3;
            return fetch(requestUrl);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

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


/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getStrapiMedia(media) {
  var imageUrl = media.url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(media.url) : media.url;
  return imageUrl;
}

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


/***/ }),

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
          className: ['columns'].join(' '),
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


/***/ }),

/***/ "./components/BlogCard/styles.module.scss":
/*!************************************************!*\
  !*** ./components/BlogCard/styles.module.scss ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/BlogCard/styles.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/BlogCard/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/BlogCard/styles.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/CTA/styles.module.scss":
/*!*******************************************!*\
  !*** ./components/CTA/styles.module.scss ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/CTA/styles.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/CTA/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/CTA/styles.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/BlogCard/styles.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/BlogCard/styles.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".styles_blogcard__lOM6e {\n  background-color: rgba(21, 23, 23, 0.5);\n  height: 100%;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n}\n.styles_blogcard__lOM6e .styles_image__3i6AU {\n  width: 100%;\n  height: 150px;\n}\n.styles_blogcard__lOM6e .styles_content__xV-ka {\n  padding: 15px;\n  height: -moz-calc(100% -150px);\n  height: calc(100% -150px);\n  -moz-box-flex: 1;\n       flex-grow: 1;\n  display: -moz-box;\n  display: flex;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n       flex-direction: column;\n  -moz-box-pack: justify;\n       justify-content: space-between;\n}\n.styles_blogcard__lOM6e .styles_content__xV-ka .styles_title__1ejwW {\n  color: var(--global--color-white-90);\n  font-weight: 500;\n  font-size: var(--global--font-size-sm);\n  margin-bottom: 20px;\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACE,uCAAA;EACA,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AACF;AACE;EACE,WAAA;EACA,aAAA;AACJ;AAEE;EACE,aAAA;EACA,8BAAA;EAAA,yBAAA;EACA,gBAAA;OAAA,YAAA;EACA,iBAAA;EAAA,aAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;EACA,sBAAA;OAAA,8BAAA;AAAJ;AAEI;EACE,oCAAA;EACA,gBAAA;EACA,sCAAA;EACA,mBAAA;AAAN","sourcesContent":[".blogcard {\r\n  background-color: rgba(21,23,23,.5);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  .image {\r\n    width: 100%;\r\n    height: 150px;\r\n  }\r\n\r\n  .content {\r\n    padding: 15px;\r\n    height: calc(100% -150px);\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n\r\n    .title {\r\n      color: var(--global--color-white-90);\r\n      font-weight: 500;\r\n      font-size: var(--global--font-size-sm);\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"blogcard": "styles_blogcard__lOM6e",
	"image": "styles_image__3i6AU",
	"content": "styles_content__xV-ka",
	"title": "styles_title__1ejwW"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/CTA/styles.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/CTA/styles.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".styles_cta__3jVu6 {\n  align-self: stretch;\n  text-align: start;\n}\n.styles_cta__3jVu6 .styles_the-arrow__1Vxu8 {\n  width: 44px;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg {\n  position: absolute;\n  top: 60%;\n  left: 0;\n}\n.styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT {\n  width: 0;\n  background-color: #e9e9e9;\n}\n.styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:before, .styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:after {\n  width: 0;\n  background-color: #e9e9e9;\n}\n.styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:before {\n  -webkit-transform: rotate(0);\n     -moz-transform: rotate(0);\n          transform: rotate(0);\n}\n.styles_cta__3jVu6 .styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:after {\n  -webkit-transform: rotate(0);\n     -moz-transform: rotate(0);\n          transform: rotate(0);\n}\n.styles_cta__3jVu6 .styles_the-arrow--right__1vv_u {\n  top: 3px;\n}\n.styles_cta__3jVu6 .styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT {\n  width: 44px;\n  -webkit-transition-delay: 0.2s;\n     -moz-transition-delay: 0.2s;\n          transition-delay: 0.2s;\n}\n.styles_cta__3jVu6 .styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:before, .styles_cta__3jVu6 .styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:after {\n  width: 8px;\n  -webkit-transition-delay: 0.3s;\n     -moz-transition-delay: 0.3s;\n          transition-delay: 0.3s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.styles_cta__3jVu6 .styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:before {\n  -webkit-transform: rotate(40deg);\n     -moz-transform: rotate(40deg);\n          transform: rotate(40deg);\n}\n.styles_cta__3jVu6 .styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:after {\n  -webkit-transform: rotate(-40deg);\n     -moz-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n}\n.styles_cta__3jVu6 .styles_the-arrow__1Vxu8 > .styles_shaft__2d3RT {\n  background-color: #e9e9e9;\n  display: block;\n  height: 2px;\n  position: relative;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n  -webkit-transition-delay: 0;\n     -moz-transition-delay: 0;\n          transition-delay: 0;\n  will-change: transform;\n}\n.styles_cta__3jVu6 .styles_the-arrow__1Vxu8 > .styles_shaft__2d3RT:before, .styles_cta__3jVu6 .styles_the-arrow__1Vxu8 > .styles_shaft__2d3RT:after {\n  background-color: #e9e9e9;\n  content: \"\";\n  display: block;\n  height: 2px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n  -webkit-transition-delay: 0;\n     -moz-transition-delay: 0;\n          transition-delay: 0;\n}\n.styles_cta__3jVu6 .styles_the-arrow__1Vxu8 > .styles_shaft__2d3RT:before {\n  -webkit-transform-origin: top right;\n     -moz-transform-origin: top right;\n          transform-origin: top right;\n}\n.styles_cta__3jVu6 .styles_the-arrow__1Vxu8 > .styles_shaft__2d3RT:after {\n  -webkit-transform-origin: bottom right;\n     -moz-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF {\n  display: inline-block;\n  color: #e9e9e9;\n  font-size: 1.25em;\n  font-style: italic;\n  text-decoration: none;\n  position: relative;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n}\n@media screen and (max-width: 600px) {\n  .styles_cta__3jVu6 .styles_animated-arrow__9X4wF {\n    font-size: 1em;\n  }\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover {\n  color: #eaeaea;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_the-arrow__1Vxu8.styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT {\n  width: 44px;\n  -webkit-transition-delay: 0.1s;\n     -moz-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n  background-color: #eaeaea;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_the-arrow__1Vxu8.styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:before, .styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_the-arrow__1Vxu8.styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:after {\n  width: 8px;\n  -webkit-transition-delay: 0.1s;\n     -moz-transition-delay: 0.1s;\n          transition-delay: 0.1s;\n  background-color: #eaeaea;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_the-arrow__1Vxu8.styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:before {\n  -webkit-transform: rotate(40deg);\n     -moz-transform: rotate(40deg);\n          transform: rotate(40deg);\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_the-arrow__1Vxu8.styles_the-arrow--left__3Q4jg > .styles_shaft__2d3RT:after {\n  -webkit-transform: rotate(-40deg);\n     -moz-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk {\n  -webkit-transform: translateX(60px);\n     -moz-transform: translateX(60px);\n          transform: translateX(60px);\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk > .styles_the-arrow__1Vxu8.styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT {\n  width: 0;\n  -webkit-transform: translateX(200%);\n     -moz-transform: translateX(200%);\n          transform: translateX(200%);\n  -webkit-transition-delay: 0;\n     -moz-transition-delay: 0;\n          transition-delay: 0;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk > .styles_the-arrow__1Vxu8.styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:before, .styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk > .styles_the-arrow__1Vxu8.styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:after {\n  width: 0;\n  -webkit-transition-delay: 0;\n     -moz-transition-delay: 0;\n          transition-delay: 0;\n  -webkit-transition: all 0.1s;\n  -moz-transition: all 0.1s;\n  transition: all 0.1s;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk > .styles_the-arrow__1Vxu8.styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:before {\n  -webkit-transform: rotate(0);\n     -moz-transform: rotate(0);\n          transform: rotate(0);\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF:hover > .styles_main__2Slwk > .styles_the-arrow__1Vxu8.styles_the-arrow--right__1vv_u > .styles_shaft__2d3RT:after {\n  -webkit-transform: rotate(0);\n     -moz-transform: rotate(0);\n          transform: rotate(0);\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF > .styles_main__2Slwk {\n  display: -moz-box;\n  display: flex;\n  -moz-box-align: center;\n       align-items: center;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF > .styles_main__2Slwk > .styles_text__3-Jpo {\n  margin: 0 16px 0 0;\n  line-height: 1;\n}\n.styles_cta__3jVu6 .styles_animated-arrow__9X4wF > .styles_main__2Slwk > .styles_the-arrow__1Vxu8 {\n  position: relative;\n}", "",{"version":3,"sources":["webpack://styles.module.scss"],"names":[],"mappings":"AAAA;EACE,mBAAA;EACA,iBAAA;AACF;AAWE;EACE,WANY;EAOZ,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AATJ;AAWI;EACE,kBAAA;EACA,QAAA;EACA,OAAA;AATN;AAWM;EACE,QAAA;EACA,yBAnBC;AAUT;AAWQ;EAEE,QAAA;EACA,yBAxBD;AAcT;AAaQ;EACE,4BAAA;KAAA,yBAAA;UAAA,oBAAA;AAXV;AAcQ;EACE,4BAAA;KAAA,yBAAA;UAAA,oBAAA;AAZV;AAiBI;EACE,QAAA;AAfN;AAiBM;EACE,WAtCQ;EAuCR,8BAAA;KAAA,2BAAA;UAAA,sBAAA;AAfR;AAiBQ;EAEE,UAzCW;EA0CX,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AAhBV;AAmBQ;EACE,gCAAA;KAAA,6BAAA;UAAA,wBAAA;AAjBV;AAoBQ;EACE,iCAAA;KAAA,8BAAA;UAAA,yBAAA;AAlBV;AAuBI;EACE,yBA9DG;EA+DH,cAAA;EACA,WA5Dc;EA6Dd,kBAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;EACA,2BAAA;KAAA,wBAAA;UAAA,mBAAA;EACA,sBAAA;AArBN;AAuBM;EAEE,yBAxEC;EAyED,WAAA;EACA,cAAA;EACA,WAvEY;EAwEZ,kBAAA;EACA,MAAA;EACA,QAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;EACA,2BAAA;KAAA,wBAAA;UAAA,mBAAA;AAtBR;AAyBM;EACE,mCAAA;KAAA,gCAAA;UAAA,2BAAA;AAvBR;AA0BM;EACE,sCAAA;KAAA,mCAAA;UAAA,8BAAA;AAxBR;AA8BE;EACE,qBAAA;EACA,cAhGK;EAiGL,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AA5BJ;AA8BI;EATF;IAUI,cAAA;EA3BJ;AACF;AA6BI;EACE,cA7GI;AAkFV;AA8BQ;EACE,WA7GM;EA8GN,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,yBAnHA;AAuFV;AA8BU;EAEE,UAjHS;EAkHT,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,yBAzHF;AA4FV;AAgCU;EACE,gCAAA;KAAA,6BAAA;UAAA,wBAAA;AA9BZ;AAiCU;EACE,iCAAA;KAAA,8BAAA;UAAA,yBAAA;AA/BZ;AAoCM;EACE,mCAAA;KAAA,gCAAA;UAAA,2BAAA;AAlCR;AAqCU;EACE,QAAA;EACA,mCAAA;KAAA,gCAAA;UAAA,2BAAA;EACA,2BAAA;KAAA,wBAAA;UAAA,mBAAA;AAnCZ;AAqCY;EAEE,QAAA;EACA,2BAAA;KAAA,wBAAA;UAAA,mBAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AApCd;AAuCY;EACE,4BAAA;KAAA,yBAAA;UAAA,oBAAA;AArCd;AAwCY;EACE,4BAAA;KAAA,yBAAA;UAAA,oBAAA;AAtCd;AA6CI;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EACA,4BAAA;EAAA,yBAAA;EAAA,oBAAA;AA3CN;AA6CM;EACE,kBAAA;EACA,cAAA;AA3CR;AA8CM;EACE,kBAAA;AA5CR","sourcesContent":[".cta {\r\n  align-self: stretch;\r\n  text-align: start;\r\n\r\n  $black: #666;\r\n  $white: #eaeaea;\r\n  $gray: #e9e9e9;\r\n\r\n  $text-arrow-space: 16px;\r\n  $shaft-width: 44px;\r\n  $shaft-thickness: 2px;\r\n  $arrow-head-width: 8px;\r\n  $arrow-head-thickness: $shaft-thickness;\r\n\r\n  .the-arrow {\r\n    width: $shaft-width;\r\n    transition: all 0.2s;\r\n   \r\n    &--left {\r\n      position: absolute;\r\n      top: 60%;\r\n      left: 0;\r\n  \r\n      > .shaft {\r\n        width: 0;\r\n        background-color: $gray;\r\n        \r\n        &:before,\r\n        &:after {\r\n          width: 0;\r\n          background-color: $gray;\r\n        }\r\n  \r\n        &:before {\r\n          transform: rotate(0);\r\n        }\r\n  \r\n        &:after {\r\n          transform: rotate(0);\r\n        }\r\n      }\r\n    }\r\n    \r\n    &--right {\r\n      top: 3px;\r\n      \r\n      > .shaft {\r\n        width: $shaft-width;\r\n        transition-delay: 0.2s;\r\n  \r\n        &:before,\r\n        &:after { \r\n          width: $arrow-head-width;\r\n          transition-delay: 0.3s;\r\n          transition: all 0.5s;\r\n        }\r\n        \r\n        &:before {\r\n          transform: rotate(40deg);\r\n        }\r\n        \r\n        &:after {\r\n          transform: rotate(-40deg);\r\n        }\r\n      }\r\n    }\r\n  \r\n    > .shaft {\r\n      background-color: $gray;\r\n      display: block;\r\n      height: $shaft-thickness;\r\n      position: relative;\r\n      transition: all 0.2s;\r\n      transition-delay: 0;\r\n      will-change: transform;\r\n  \r\n      &:before,\r\n      &:after {\r\n        background-color: $gray;\r\n        content: '';\r\n        display: block;\r\n        height: $arrow-head-thickness;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        transition: all 0.2s;\r\n        transition-delay: 0;\r\n      }\r\n  \r\n      &:before {\r\n        transform-origin: top right;\r\n      }\r\n  \r\n      &:after {\r\n        transform-origin: bottom right;\r\n      }\r\n    }\r\n  }\r\n\r\n  // Animated Arrow Button      \r\n  .animated-arrow {\r\n    display: inline-block;\r\n    color: $gray;\r\n    font-size: 1.25em;\r\n    font-style: italic;\r\n    text-decoration: none;\r\n    position: relative;\r\n    transition: all 0.2s;\r\n\r\n    @media screen and (max-width: 600px) {\r\n      font-size: 1em;\r\n    }\r\n    \r\n    &:hover {\r\n      color: $white;\r\n      \r\n      > .the-arrow.the-arrow--left {\r\n        > .shaft {\r\n          width: $shaft-width;\r\n          transition-delay: 0.1s;\r\n          background-color: $white;\r\n  \r\n          &:before,\r\n          &:after {\r\n            width: $arrow-head-width;\r\n            transition-delay: 0.1s;\r\n            background-color: $white;\r\n          }\r\n  \r\n          &:before {\r\n            transform: rotate(40deg);\r\n          }\r\n  \r\n          &:after {\r\n            transform: rotate(-40deg);\r\n          }\r\n        }\r\n      }\r\n      \r\n      > .main {\r\n        transform: translateX($shaft-width + $text-arrow-space);\r\n        \r\n        > .the-arrow.the-arrow--right {\r\n          > .shaft {\r\n            width: 0;\r\n            transform: translateX(200%);\r\n            transition-delay: 0;\r\n            \r\n            &:before,\r\n            &:after {\r\n              width: 0;\r\n              transition-delay: 0;\r\n              transition: all 0.1s;\r\n            }\r\n  \r\n            &:before {\r\n              transform: rotate(0);\r\n            }\r\n  \r\n            &:after {\r\n              transform: rotate(0);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n    \r\n    > .main {\r\n      display: flex;\r\n      align-items: center;\r\n      transition: all 0.2s;\r\n      \r\n      > .text {\r\n        margin: 0 $text-arrow-space 0 0;\r\n        line-height: 1;\r\n      }\r\n      \r\n      > .the-arrow {\r\n        position: relative;\r\n      }\r\n    }\r\n  }      \r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"cta": "styles_cta__3jVu6",
	"the-arrow": "styles_the-arrow__1Vxu8",
	"the-arrow--left": "styles_the-arrow--left__3Q4jg",
	"shaft": "styles_shaft__2d3RT",
	"the-arrow--right": "styles_the-arrow--right__1vv_u",
	"animated-arrow": "styles_animated-arrow__9X4wF",
	"main": "styles_main__2Slwk",
	"text": "styles_text__3-Jpo"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZ0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ1RBL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nQ2FyZC9zdHlsZXMubW9kdWxlLnNjc3M/MjljNiIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DVEEvc3R5bGVzLm1vZHVsZS5zY3NzPzBkZTMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZ0NhcmQvc3R5bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NUQS9zdHlsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiYXJ0aWNsZSIsInN0eWxlcyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSIsInNsdWciLCJDVEEiLCJwcm9wcyIsInVybCIsImpvaW4iLCJjaGlsZHJlbiIsIkltYWdlIiwic3R5bGUiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiYWx0ZXJuYXRpdmVUZXh0IiwibmFtZSIsImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInJlcXVlc3RVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJtZWRpYSIsInN0YXJ0c1dpdGgiLCJSZXNvdXJjZXMiLCJjYXRlZ29yaWVzIiwiYXJ0aWNsZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2pDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxzQkFDYjtBQUFLLGFBQVMsRUFBRUMscUVBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLGtFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLDJDQUFEO0FBQU8sYUFBSyxFQUFFRCxPQUFPLENBQUNFLEtBQXRCO0FBQTZCLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUUsTUFBVDtBQUFpQkMsZ0JBQU0sRUFBRTtBQUF6QjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVILG9FQUFoQjtBQUFBLDhCQUNFO0FBQUcsVUFBRSxFQUFDLE9BQU47QUFBYyxpQkFBUyxFQUFFQSxrRUFBekI7QUFBQSxrQkFDR0QsT0FBTyxDQUFDSztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLHlDQUFEO0FBQUssV0FBRyx1QkFBZ0JMLE9BQU8sQ0FBQ00sSUFBeEIsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzb3VyY2VzLjVhYjY0OWUyODE5OWIxYWNlNmE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uL0ltYWdlXCI7XHJcbmltcG9ydCBDVEEgZnJvbSAnLi4vQ1RBJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgYXJ0aWNsZSB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nY2FyZH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgPEltYWdlIGltYWdlPXthcnRpY2xlLmltYWdlfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJyB9fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICA8cCBpZD1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIHthcnRpY2xlLnRpdGxlfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDVEEgdXJsPXtgL3Jlc291cmNlcy8ke2FydGljbGUuc2x1Z31gfT5SZWFkPC9DVEE+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDVEEgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN0YX0+XHJcbiAgICA8TGluayBocmVmPXtwcm9wcy51cmx9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlc1snYW5pbWF0ZWQtYXJyb3cnXX0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzWyd0aGUtYXJyb3cnXSwgc3R5bGVzWyd0aGUtYXJyb3ctLWxlZnQnXV0uam9pbignICcpfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydzaGFmdCddfT48L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydtYWluJ119PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ3RleHQnXX0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbiB8fCAnRGV0YWlscyd9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tzdHlsZXNbJ3RoZS1hcnJvdyddLCBzdHlsZXNbJ3RoZS1hcnJvdy0tcmlnaHQnXV0uam9pbignICcpfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ3NoYWZ0J119Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENUQTsiLCJpbXBvcnQgeyBnZXRTdHJhcGlNZWRpYSB9IGZyb20gXCIuLi8uLi9saWIvbWVkaWFcIjtcclxuXHJcbmNvbnN0IEltYWdlID0gKHsgaW1hZ2UsIHN0eWxlIH0pID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGltYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgc3JjPXtpbWFnZVVybH1cclxuICAgICAgYWx0PXtpbWFnZS5hbHRlcm5hdGl2ZVRleHQgfHwgaW1hZ2UubmFtZX1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xyXG4gIHJldHVybiBgJHtcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcclxuICB9JHtwYXRofWA7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoKSB7XHJcbiAgY29uc3QgcmVxdWVzdFVybCA9IGdldFN0cmFwaVVSTChwYXRoKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59IiwiaW1wb3J0IHsgZ2V0U3RyYXBpVVJMIH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcclxuICBjb25zdCBpbWFnZVVybCA9IG1lZGlhLnVybC5zdGFydHNXaXRoKFwiL1wiKVxyXG4gICAgPyBnZXRTdHJhcGlVUkwobWVkaWEudXJsKVxyXG4gICAgOiBtZWRpYS51cmw7XHJcblxyXG4gIHJldHVybiBpbWFnZVVybDtcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IEJsb2dDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ0NhcmQnO1xyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gJy4uL2xpYi9hcGknO1xyXG5pbXBvcnQgeyBnZXRBcHBzTGlzdGluZyB9IGZyb20gJy4uL2xpYi91dGlscyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmVzb3VyY2VzLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc291cmNlcyhwcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFwcHMgfCBBcHBIdWI8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPExheW91dCBjYXRlZ29yaWVzPXtwcm9wcy5jYXRlZ29yaWVzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+QWxsIFN0b3JpZXM8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1snY29sdW1ucyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9wcy5hcnRpY2xlcy5tYXAoYXJ0aWNsZSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy0zXCIga2V5PXthcnRpY2xlLnNsdWd9PlxyXG4gICAgICAgICAgICAgICAgICA8QmxvZ0NhcmQgYXJ0aWNsZT17YXJ0aWNsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBhcHBzTGlzdGluZ1Byb21pc2UgPSBnZXRBcHBzTGlzdGluZygpO1xyXG4gIGNvbnN0IGFydGljbGVzUHJvbWlzZSA9IGZldGNoQVBJKFwiL2FydGljbGVzP3N0YXR1cz1wdWJsaXNoZWRcIik7XHJcblxyXG4gIGNvbnN0IGFwcHNMaXN0aW5nID0gYXdhaXQgYXBwc0xpc3RpbmdQcm9taXNlO1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgYXJ0aWNsZXNQcm9taXNlO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgLi4uYXBwc0xpc3RpbmcsIGFydGljbGVzIH0sXHJcbiAgICByZXZhbGlkYXRlOiA2MCxcclxuICB9XHJcbn0gIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3R5bGVzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfYmxvZ2NhcmRfX2xPTTZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIzLCAyMywgMC41KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnN0eWxlc19ibG9nY2FyZF9fbE9NNmUgLnN0eWxlc19pbWFnZV9fM2k2QVUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uc3R5bGVzX2Jsb2djYXJkX19sT002ZSAuc3R5bGVzX2NvbnRlbnRfX3hWLWthIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0xNTBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtMTUwcHgpO1xcbiAgLW1vei1ib3gtZmxleDogMTtcXG4gICAgICAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3R5bGVzX2Jsb2djYXJkX19sT002ZSAuc3R5bGVzX2NvbnRlbnRfX3hWLWthIC5zdHlsZXNfdGl0bGVfXzFlandXIHtcXG4gIGNvbG9yOiB2YXIoLS1nbG9iYWwtLWNvbG9yLXdoaXRlLTkwKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IHZhcigtLWdsb2JhbC0tZm9udC1zaXplLXNtKTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQUEseUJBQUE7RUFDQSxnQkFBQTtPQUFBLFlBQUE7RUFDQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7RUFDQSxzQkFBQTtPQUFBLDhCQUFBO0FBQUo7QUFFSTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0FBQU5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJsb2djYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsMjMsMjMsLjUpO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAuaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLTE1MHB4KTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWdsb2JhbC0tY29sb3Itd2hpdGUtOTApO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1nbG9iYWwtLWZvbnQtc2l6ZS1zbSk7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJibG9nY2FyZFwiOiBcInN0eWxlc19ibG9nY2FyZF9fbE9NNmVcIixcblx0XCJpbWFnZVwiOiBcInN0eWxlc19pbWFnZV9fM2k2QVVcIixcblx0XCJjb250ZW50XCI6IFwic3R5bGVzX2NvbnRlbnRfX3hWLWthXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZXNfdGl0bGVfXzFlandXXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19jdGFfXzNqVnU2IHtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OCB7XFxuICB3aWR0aDogNDRweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX3RoZS1hcnJvdy0tbGVmdF9fM1E0amcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MCU7XFxuICBsZWZ0OiAwO1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLWxlZnRfXzNRNGpnID4gLnN0eWxlc19zaGFmdF9fMmQzUlQge1xcbiAgd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLWxlZnRfXzNRNGpnID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YmVmb3JlLCAuc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLWxlZnRfXzNRNGpnID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YWZ0ZXIge1xcbiAgd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLWxlZnRfXzNRNGpnID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfdGhlLWFycm93LS1sZWZ0X18zUTRqZyA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfdGhlLWFycm93LS1yaWdodF9fMXZ2X3Uge1xcbiAgdG9wOiAzcHg7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQge1xcbiAgd2lkdGg6IDQ0cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YmVmb3JlLCAuc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLXJpZ2h0X18xdnZfdSA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIHdpZHRoOiA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3ctLXJpZ2h0X18xdnZfdSA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3dfXzFWeHU4ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OCA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmJlZm9yZSwgLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OCA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDA7XFxuICAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX3RoZS1hcnJvd19fMVZ4dTggPiAuc3R5bGVzX3NoYWZ0X18yZDNSVDpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc190aGUtYXJyb3dfXzFWeHU4ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc19hbmltYXRlZC1hcnJvd19fOVg0d0Yge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICNlOWU5ZTk7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc19hbmltYXRlZC1hcnJvd19fOVg0d0Yge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGOmhvdmVyIHtcXG4gIGNvbG9yOiAjZWFlYWVhO1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc19hbmltYXRlZC1hcnJvd19fOVg0d0Y6aG92ZXIgPiAuc3R5bGVzX3RoZS1hcnJvd19fMVZ4dTguc3R5bGVzX3RoZS1hcnJvdy0tbGVmdF9fM1E0amcgPiAuc3R5bGVzX3NoYWZ0X18yZDNSVCB7XFxuICB3aWR0aDogNDRweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3Rjpob3ZlciA+IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OC5zdHlsZXNfdGhlLWFycm93LS1sZWZ0X18zUTRqZyA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmJlZm9yZSwgLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGOmhvdmVyID4gLnN0eWxlc190aGUtYXJyb3dfXzFWeHU4LnN0eWxlc190aGUtYXJyb3ctLWxlZnRfXzNRNGpnID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YWZ0ZXIge1xcbiAgd2lkdGg6IDhweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgIC1tb3otdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3Rjpob3ZlciA+IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OC5zdHlsZXNfdGhlLWFycm93LS1sZWZ0X18zUTRqZyA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3Rjpob3ZlciA+IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OC5zdHlsZXNfdGhlLWFycm93LS1sZWZ0X18zUTRqZyA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGOmhvdmVyID4gLnN0eWxlc19tYWluX18yU2x3ayB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg2MHB4KTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNjBweCk7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3Rjpob3ZlciA+IC5zdHlsZXNfbWFpbl9fMlNsd2sgPiAuc3R5bGVzX3RoZS1hcnJvd19fMVZ4dTguc3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQge1xcbiAgd2lkdGg6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDA7XFxuICAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3Rjpob3ZlciA+IC5zdHlsZXNfbWFpbl9fMlNsd2sgPiAuc3R5bGVzX3RoZS1hcnJvd19fMVZ4dTguc3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91ID4gLnN0eWxlc19zaGFmdF9fMmQzUlQ6YmVmb3JlLCAuc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc19hbmltYXRlZC1hcnJvd19fOVg0d0Y6aG92ZXIgPiAuc3R5bGVzX21haW5fXzJTbHdrID4gLnN0eWxlc190aGUtYXJyb3dfXzFWeHU4LnN0eWxlc190aGUtYXJyb3ctLXJpZ2h0X18xdnZfdSA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIHdpZHRoOiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgICAgLW1vei10cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGOmhvdmVyID4gLnN0eWxlc19tYWluX18yU2x3ayA+IC5zdHlsZXNfdGhlLWFycm93X18xVnh1OC5zdHlsZXNfdGhlLWFycm93LS1yaWdodF9fMXZ2X3UgPiAuc3R5bGVzX3NoYWZ0X18yZDNSVDpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbn1cXG4uc3R5bGVzX2N0YV9fM2pWdTYgLnN0eWxlc19hbmltYXRlZC1hcnJvd19fOVg0d0Y6aG92ZXIgPiAuc3R5bGVzX21haW5fXzJTbHdrID4gLnN0eWxlc190aGUtYXJyb3dfXzFWeHU4LnN0eWxlc190aGUtYXJyb3ctLXJpZ2h0X18xdnZfdSA+IC5zdHlsZXNfc2hhZnRfXzJkM1JUOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGID4gLnN0eWxlc19tYWluX18yU2x3ayB7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLnN0eWxlc19jdGFfXzNqVnU2IC5zdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGID4gLnN0eWxlc19tYWluX18yU2x3ayA+IC5zdHlsZXNfdGV4dF9fMy1KcG8ge1xcbiAgbWFyZ2luOiAwIDE2cHggMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5zdHlsZXNfY3RhX18zalZ1NiAuc3R5bGVzX2FuaW1hdGVkLWFycm93X185WDR3RiA+IC5zdHlsZXNfbWFpbl9fMlNsd2sgPiAuc3R5bGVzX3RoZS1hcnJvd19fMVZ4dTgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBV0U7RUFDRSxXQU5ZO0VBT1osNEJBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0FBVEo7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUFUTjtBQVdNO0VBQ0UsUUFBQTtFQUNBLHlCQW5CQztBQVVUO0FBV1E7RUFFRSxRQUFBO0VBQ0EseUJBeEJEO0FBY1Q7QUFhUTtFQUNFLDRCQUFBO0tBQUEseUJBQUE7VUFBQSxvQkFBQTtBQVhWO0FBY1E7RUFDRSw0QkFBQTtLQUFBLHlCQUFBO1VBQUEsb0JBQUE7QUFaVjtBQWlCSTtFQUNFLFFBQUE7QUFmTjtBQWlCTTtFQUNFLFdBdENRO0VBdUNSLDhCQUFBO0tBQUEsMkJBQUE7VUFBQSxzQkFBQTtBQWZSO0FBaUJRO0VBRUUsVUF6Q1c7RUEwQ1gsOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0VBQ0EsNEJBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0FBaEJWO0FBbUJRO0VBQ0UsZ0NBQUE7S0FBQSw2QkFBQTtVQUFBLHdCQUFBO0FBakJWO0FBb0JRO0VBQ0UsaUNBQUE7S0FBQSw4QkFBQTtVQUFBLHlCQUFBO0FBbEJWO0FBdUJJO0VBQ0UseUJBOURHO0VBK0RILGNBQUE7RUFDQSxXQTVEYztFQTZEZCxrQkFBQTtFQUNBLDRCQUFBO0VBQUEseUJBQUE7RUFBQSxvQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0FBckJOO0FBdUJNO0VBRUUseUJBeEVDO0VBeUVELFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0F2RVk7RUF3RVosa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQUEseUJBQUE7RUFBQSxvQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7VUFBQSxtQkFBQTtBQXRCUjtBQXlCTTtFQUNFLG1DQUFBO0tBQUEsZ0NBQUE7VUFBQSwyQkFBQTtBQXZCUjtBQTBCTTtFQUNFLHNDQUFBO0tBQUEsbUNBQUE7VUFBQSw4QkFBQTtBQXhCUjtBQThCRTtFQUNFLHFCQUFBO0VBQ0EsY0FoR0s7RUFpR0wsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7QUE1Qko7QUE4Qkk7RUFURjtJQVVJLGNBQUE7RUEzQko7QUFDRjtBQTZCSTtFQUNFLGNBN0dJO0FBa0ZWO0FBOEJRO0VBQ0UsV0E3R007RUE4R04sOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBbkhBO0FBdUZWO0FBOEJVO0VBRUUsVUFqSFM7RUFrSFQsOEJBQUE7S0FBQSwyQkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBekhGO0FBNEZWO0FBZ0NVO0VBQ0UsZ0NBQUE7S0FBQSw2QkFBQTtVQUFBLHdCQUFBO0FBOUJaO0FBaUNVO0VBQ0UsaUNBQUE7S0FBQSw4QkFBQTtVQUFBLHlCQUFBO0FBL0JaO0FBb0NNO0VBQ0UsbUNBQUE7S0FBQSxnQ0FBQTtVQUFBLDJCQUFBO0FBbENSO0FBcUNVO0VBQ0UsUUFBQTtFQUNBLG1DQUFBO0tBQUEsZ0NBQUE7VUFBQSwyQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7VUFBQSxtQkFBQTtBQW5DWjtBQXFDWTtFQUVFLFFBQUE7RUFDQSwyQkFBQTtLQUFBLHdCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7QUFwQ2Q7QUF1Q1k7RUFDRSw0QkFBQTtLQUFBLHlCQUFBO1VBQUEsb0JBQUE7QUFyQ2Q7QUF3Q1k7RUFDRSw0QkFBQTtLQUFBLHlCQUFBO1VBQUEsb0JBQUE7QUF0Q2Q7QUE2Q0k7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSx5QkFBQTtFQUFBLG9CQUFBO0FBM0NOO0FBNkNNO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBM0NSO0FBOENNO0VBQ0Usa0JBQUE7QUE1Q1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmN0YSB7XFxyXFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuXFxyXFxuICAkYmxhY2s6ICM2NjY7XFxyXFxuICAkd2hpdGU6ICNlYWVhZWE7XFxyXFxuICAkZ3JheTogI2U5ZTllOTtcXHJcXG5cXHJcXG4gICR0ZXh0LWFycm93LXNwYWNlOiAxNnB4O1xcclxcbiAgJHNoYWZ0LXdpZHRoOiA0NHB4O1xcclxcbiAgJHNoYWZ0LXRoaWNrbmVzczogMnB4O1xcclxcbiAgJGFycm93LWhlYWQtd2lkdGg6IDhweDtcXHJcXG4gICRhcnJvdy1oZWFkLXRoaWNrbmVzczogJHNoYWZ0LXRoaWNrbmVzcztcXHJcXG5cXHJcXG4gIC50aGUtYXJyb3cge1xcclxcbiAgICB3aWR0aDogJHNoYWZ0LXdpZHRoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG4gICBcXHJcXG4gICAgJi0tbGVmdCB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogNjAlO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICBcXHJcXG4gICAgICA+IC5zaGFmdCB7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmOmJlZm9yZSxcXHJcXG4gICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XFxyXFxuICAgICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICYtLXJpZ2h0IHtcXHJcXG4gICAgICB0b3A6IDNweDtcXHJcXG4gICAgICBcXHJcXG4gICAgICA+IC5zaGFmdCB7XFxyXFxuICAgICAgICB3aWR0aDogJHNoYWZ0LXdpZHRoO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXHJcXG4gIFxcclxcbiAgICAgICAgJjpiZWZvcmUsXFxyXFxuICAgICAgICAmOmFmdGVyIHsgXFxyXFxuICAgICAgICAgIHdpZHRoOiAkYXJyb3ctaGVhZC13aWR0aDtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICA+IC5zaGFmdCB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgaGVpZ2h0OiAkc2hhZnQtdGhpY2tuZXNzO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xcclxcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICBcXHJcXG4gICAgICAmOmJlZm9yZSxcXHJcXG4gICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGhlaWdodDogJGFycm93LWhlYWQtdGhpY2tuZXNzO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgJjpiZWZvcmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gQW5pbWF0ZWQgQXJyb3cgQnV0dG9uICAgICAgXFxyXFxuICAuYW5pbWF0ZWQtYXJyb3cge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGNvbG9yOiAkZ3JheTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgIFxcclxcbiAgICAgID4gLnRoZS1hcnJvdy50aGUtYXJyb3ctLWxlZnQge1xcclxcbiAgICAgICAgPiAuc2hhZnQge1xcclxcbiAgICAgICAgICB3aWR0aDogJHNoYWZ0LXdpZHRoO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxyXFxuICBcXHJcXG4gICAgICAgICAgJjpiZWZvcmUsXFxyXFxuICAgICAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAkYXJyb3ctaGVhZC13aWR0aDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgICAgICY6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAgIFxcclxcbiAgICAgID4gLm1haW4ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCRzaGFmdC13aWR0aCArICR0ZXh0LWFycm93LXNwYWNlKTtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPiAudGhlLWFycm93LnRoZS1hcnJvdy0tcmlnaHQge1xcclxcbiAgICAgICAgICA+IC5zaGFmdCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgJjpiZWZvcmUsXFxyXFxuICAgICAgICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAgICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAgICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgPiAubWFpbiB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbiAgICAgIFxcclxcbiAgICAgID4gLnRleHQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwICR0ZXh0LWFycm93LXNwYWNlIDAgMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBcXHJcXG4gICAgICA+IC50aGUtYXJyb3cge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfSAgICAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjdGFcIjogXCJzdHlsZXNfY3RhX18zalZ1NlwiLFxuXHRcInRoZS1hcnJvd1wiOiBcInN0eWxlc190aGUtYXJyb3dfXzFWeHU4XCIsXG5cdFwidGhlLWFycm93LS1sZWZ0XCI6IFwic3R5bGVzX3RoZS1hcnJvdy0tbGVmdF9fM1E0amdcIixcblx0XCJzaGFmdFwiOiBcInN0eWxlc19zaGFmdF9fMmQzUlRcIixcblx0XCJ0aGUtYXJyb3ctLXJpZ2h0XCI6IFwic3R5bGVzX3RoZS1hcnJvdy0tcmlnaHRfXzF2dl91XCIsXG5cdFwiYW5pbWF0ZWQtYXJyb3dcIjogXCJzdHlsZXNfYW5pbWF0ZWQtYXJyb3dfXzlYNHdGXCIsXG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18yU2x3a1wiLFxuXHRcInRleHRcIjogXCJzdHlsZXNfdGV4dF9fMy1KcG9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
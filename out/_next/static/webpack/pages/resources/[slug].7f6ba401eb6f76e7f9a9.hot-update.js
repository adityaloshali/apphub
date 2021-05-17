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


/***/ }),

/***/ "./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ (function(module) {

"use strict";


module.exports = ccount

function ccount(source, character) {
  var value = String(source)
  var count = 0
  var index

  if (typeof character !== 'string') {
    throw new Error('Expected character')
  }

  index = value.indexOf(character)

  while (index !== -1) {
    count++
    index = value.indexOf(character, index + character.length)
  }

  return count
}


/***/ }),

/***/ "./node_modules/markdown-table/index.js":
/*!**********************************************!*\
  !*** ./node_modules/markdown-table/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = markdownTable

var trailingWhitespace = / +$/

// Characters.
var space = ' '
var lineFeed = '\n'
var dash = '-'
var colon = ':'
var verticalBar = '|'

var x = 0
var C = 67
var L = 76
var R = 82
var c = 99
var l = 108
var r = 114

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {}
  var padding = settings.padding !== false
  var start = settings.delimiterStart !== false
  var end = settings.delimiterEnd !== false
  var align = (settings.align || []).concat()
  var alignDelimiters = settings.alignDelimiters !== false
  var alignments = []
  var stringLength = settings.stringLength || defaultStringLength
  var rowIndex = -1
  var rowLength = table.length
  var cellMatrix = []
  var sizeMatrix = []
  var row = []
  var sizes = []
  var longestCellByColumn = []
  var mostCellsPerRow = 0
  var cells
  var columnIndex
  var columnLength
  var largest
  var size
  var cell
  var lines
  var line
  var before
  var after
  var code

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex]
    columnIndex = -1
    columnLength = cells.length
    row = []
    sizes = []

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex])

      if (alignDelimiters === true) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        largest = longestCellByColumn[columnIndex]

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1
  columnLength = mostCellsPerRow

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  columnLength = mostCellsPerRow
  row = []
  sizes = []

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === l) {
      before = colon
    } else if (code === r) {
      after = colon
    } else if (code === c) {
      before = colon
      after = colon
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        )
      : 1

    cell = before + repeat(dash, size) + after

    if (alignDelimiters === true) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  rowLength = cellMatrix.length
  lines = []

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    columnLength = mostCellsPerRow
    line = []

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === r) {
          before = repeat(space, size)
        } else if (code === c) {
          if (size % 2 === 0) {
            before = repeat(space, size / 2)
            after = before
          } else {
            before = repeat(space, size / 2 + 0.5)
            after = repeat(space, size / 2 - 0.5)
          }
        } else {
          after = repeat(space, size)
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar)
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space)
      }

      if (alignDelimiters === true) {
        line.push(before)
      }

      line.push(cell)

      if (alignDelimiters === true) {
        line.push(after)
      }

      if (padding === true) {
        line.push(space)
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar)
      }
    }

    line = line.join('')

    if (end === false) {
      line = line.replace(trailingWhitespace, '')
    }

    lines.push(line)
  }

  return lines.join(lineFeed)
}

function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value) {
  return value.length
}

function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : x

  return code === L || code === l
    ? l
    : code === R || code === r
    ? r
    : code === C || code === c
    ? c
    : x
}


/***/ }),

/***/ "./node_modules/mdast-util-find-and-replace/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/index.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


module.exports = findAndReplace

var visit = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var escape = __webpack_require__(/*! escape-string-regexp */ "./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js")

var splice = [].splice

function findAndReplace(tree, find, replace, options) {
  var settings
  var schema

  if (typeof find === 'string' || (find && typeof find.exec === 'function')) {
    schema = [[find, replace]]
  } else {
    schema = find
    options = replace
  }

  settings = options || {}

  search(tree, settings, handlerFactory(toPairs(schema)))

  return tree

  function handlerFactory(pairs) {
    var pair = pairs[0]

    return handler

    function handler(node, parent) {
      var find = pair[0]
      var replace = pair[1]
      var nodes = []
      var start = 0
      var index = parent.children.indexOf(node)
      var position
      var match
      var subhandler
      var value

      find.lastIndex = 0

      match = find.exec(node.value)

      while (match) {
        position = match.index
        value = replace.apply(
          null,
          [].concat(match, {index: match.index, input: match.input})
        )

        if (value !== false) {
          if (start !== position) {
            nodes.push({type: 'text', value: node.value.slice(start, position)})
          }

          if (typeof value === 'string' && value.length > 0) {
            value = {type: 'text', value: value}
          }

          if (value) {
            nodes = [].concat(nodes, value)
          }

          start = position + match[0].length
        }

        if (!find.global) {
          break
        }

        match = find.exec(node.value)
      }

      if (position === undefined) {
        nodes = [node]
        index--
      } else {
        if (start < node.value.length) {
          nodes.push({type: 'text', value: node.value.slice(start)})
        }

        nodes.unshift(index, 1)
        splice.apply(parent.children, nodes)
      }

      if (pairs.length > 1) {
        subhandler = handlerFactory(pairs.slice(1))
        position = -1

        while (++position < nodes.length) {
          node = nodes[position]

          if (node.type === 'text') {
            subhandler(node, parent)
          } else {
            search(node, settings, subhandler)
          }
        }
      }

      return index + nodes.length + 1
    }
  }
}

function search(tree, settings, handler) {
  var ignored = convert(settings.ignore || [])
  var result = []

  visit(tree, 'text', visitor)

  return result

  function visitor(node, parents) {
    var index = -1
    var parent
    var grandparent

    while (++index < parents.length) {
      parent = parents[index]

      if (
        ignored(
          parent,
          grandparent ? grandparent.children.indexOf(parent) : undefined,
          grandparent
        )
      ) {
        return
      }

      grandparent = parent
    }

    return handler(node, grandparent)
  }
}

function toPairs(schema) {
  var result = []
  var key
  var index

  if (typeof schema !== 'object') {
    throw new Error('Expected array or object as schema')
  }

  if ('length' in schema) {
    index = -1

    while (++index < schema.length) {
      result.push([
        toExpression(schema[index][0]),
        toFunction(schema[index][1])
      ])
    }
  } else {
    for (key in schema) {
      result.push([toExpression(key), toFunction(schema[key])])
    }
  }

  return result
}

function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escape(find), 'g') : find
}

function toFunction(replace) {
  return typeof replace === 'function' ? replace : returner

  function returner() {
    return replace
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js ***!
  \*********************************************************************************************/
/***/ (function(module) {

"use strict";


module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
};


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var ccount = __webpack_require__(/*! ccount */ "./node_modules/ccount/index.js")
var findAndReplace = __webpack_require__(/*! mdast-util-find-and-replace */ "./node_modules/mdast-util-find-and-replace/index.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

exports.transforms = [transformGfmAutolinkLiterals]
exports.enter = {
  literalAutolink: enterLiteralAutolink,
  literalAutolinkEmail: enterLiteralAutolinkValue,
  literalAutolinkHttp: enterLiteralAutolinkValue,
  literalAutolinkWww: enterLiteralAutolinkValue
}
exports.exit = {
  literalAutolink: exitLiteralAutolink,
  literalAutolinkEmail: exitLiteralAutolinkEmail,
  literalAutolinkHttp: exitLiteralAutolinkHttp,
  literalAutolinkWww: exitLiteralAutolinkWww
}

function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token)
}

function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token)
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token)
}

function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token)
}

function exitLiteralAutolink(token) {
  this.exit(token)
}

function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail]
    ],
    {ignore: ['link', 'linkReference']}
  )
}

function findUrl($0, protocol, domain, path, match) {
  var prefix = ''
  var parts
  var result

  // Not an expected previous character.
  if (!previous(match)) {
    return false
  }

  // Treat `www` as part of the domain.
  if (/^w/i.test(protocol)) {
    domain = protocol + domain
    protocol = ''
    prefix = 'http://'
  }

  if (!isCorrectDomain(domain)) {
    return false
  }

  parts = splitUrl(domain + path)

  if (!parts[0]) return false

  result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{type: 'text', value: protocol + parts[0]}]
  }

  if (parts[1]) {
    result = [result, {type: 'text', value: parts[1]}]
  }

  return result
}

function findEmail($0, atext, label, match) {
  // Not an expected previous character.
  if (!previous(match, true) || /[_-]$/.test(label)) {
    return false
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{type: 'text', value: atext + '@' + label}]
  }
}

function isCorrectDomain(domain) {
  var parts = domain.split('.')

  if (
    parts.length < 2 ||
    (parts[parts.length - 1] &&
      (/_/.test(parts[parts.length - 1]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] &&
      (/_/.test(parts[parts.length - 2]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false
  }

  return true
}

function splitUrl(url) {
  var trail = /[!"&'),.:;<>?\]}]+$/.exec(url)
  var closingParenIndex
  var openingParens
  var closingParens

  if (trail) {
    url = url.slice(0, trail.index)
    trail = trail[0]
    closingParenIndex = trail.indexOf(')')
    openingParens = ccount(url, '(')
    closingParens = ccount(url, ')')

    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1)
      trail = trail.slice(closingParenIndex + 1)
      closingParenIndex = trail.indexOf(')')
      closingParens++
    }
  }

  return [url, trail]
}

function previous(match, email) {
  var code = match.input.charCodeAt(match.index - 1)
  return (
    (code !== code || unicodeWhitespace(code) || unicodePunctuation(code)) &&
    (!email || code !== 47)
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

var inConstruct = 'phrasing'
var notInConstruct = ['autolink', 'link', 'image', 'label']

exports.unsafe = [
  {
    character: '@',
    before: '[+\\-.\\w]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: '.',
    before: '[Ww]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: ':',
    before: '[ps]',
    after: '\\/',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  }
]


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.canContainEols = ['delete']
exports.enter = {strikethrough: enterStrikethrough}
exports.exit = {strikethrough: exitStrikethrough}

function enterStrikethrough(token) {
  this.enter({type: 'delete', children: []}, token)
}

function exitStrikethrough(token) {
  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/to-markdown.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

exports.unsafe = [{character: '~', inConstruct: 'phrasing'}]
exports.handlers = {delete: handleDelete}

handleDelete.peek = peekDelete

function handleDelete(node, _, context) {
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: '~', after: '~'})
  exit()
  return '~~' + value + '~~'
}

function peekDelete() {
  return '~'
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/from-markdown.js":
/*!************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/from-markdown.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.enter = {
  table: enterTable,
  tableData: enterCell,
  tableHeader: enterCell,
  tableRow: enterRow
}
exports.exit = {
  codeText: exitCodeText,
  table: exitTable,
  tableData: exit,
  tableHeader: exit,
  tableRow: exit
}

function enterTable(token) {
  this.enter({type: 'table', align: token._align, children: []}, token)
  this.setData('inTable', true)
}

function exitTable(token) {
  this.exit(token)
  this.setData('inTable')
}

function enterRow(token) {
  this.enter({type: 'tableRow', children: []}, token)
}

function exit(token) {
  this.exit(token)
}

function enterCell(token) {
  this.enter({type: 'tableCell', children: []}, token)
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
function exitCodeText(token) {
  var value = this.resume()

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, replace)
  }

  this.stack[this.stack.length - 1].value = value
  this.exit(token)
}

function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/to-markdown.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/to-markdown.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")
var defaultInlineCode = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/inline-code */ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js")
var markdownTable = __webpack_require__(/*! markdown-table */ "./node_modules/markdown-table/index.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var settings = options || {}
  var padding = settings.tableCellPadding
  var alignDelimiters = settings.tablePipeAlign
  var stringLength = settings.stringLength
  var around = padding ? ' ' : '|'

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  }

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align)
  }

  // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.
  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context)
    // `markdown-table` will always add an align row
    var value = serializeData([row])
    return value.slice(0, value.indexOf('\n'))
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell')
    var value = phrasing(node, context, {before: around, after: around})
    exit()
    return value
  }

  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    })
  }

  function handleTableAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('table')

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context)
    }

    subexit()

    return result
  }

  function handleTableRowAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('tableRow')

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context)
    }

    subexit()

    return result
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = defaultInlineCode(node, parent, context)

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/g, '\\$&')
    }

    return value
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/from-markdown.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.exit = {
  taskListCheckValueChecked: exitCheck,
  taskListCheckValueUnchecked: exitCheck,
  paragraph: exitParagraphWithTaskListItem
}

function exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked =
    token.type === 'taskListCheckValueChecked'
}

function exitParagraphWithTaskListItem(token) {
  var parent = this.stack[this.stack.length - 2]
  var node = this.stack[this.stack.length - 1]
  var siblings = parent.children
  var head = node.children[0]
  var index = -1
  var firstParaghraph

  if (
    parent &&
    parent.type === 'listItem' &&
    typeof parent.checked === 'boolean' &&
    head &&
    head.type === 'text'
  ) {
    while (++index < siblings.length) {
      if (siblings[index].type === 'paragraph') {
        firstParaghraph = siblings[index]
        break
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1)

      if (head.value.length === 0) {
        node.children.shift()
      } else {
        head.position.start.column++
        head.position.start.offset++
        node.position.start = Object.assign({}, head.position.start)
      }
    }
  }

  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/to-markdown.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var defaultListItem = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/list-item */ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js")

exports.unsafe = [{atBreak: true, character: '-', after: '[:|-]'}]

exports.handlers = {
  listItem: listItemWithTaskListItem
}

function listItemWithTaskListItem(node, parent, context) {
  var value = defaultListItem(node, parent, context)
  var head = node.children[0]

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)
  }

  return value

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/from-markdown.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-gfm/from-markdown.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/from-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/from-markdown */ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/from-markdown */ "./node_modules/mdast-util-gfm-table/from-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/from-markdown */ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js")

var own = {}.hasOwnProperty

module.exports = configure([
  autolinkLiteral,
  strikethrough,
  table,
  taskListItem
])

function configure(extensions) {
  var config = {transforms: [], canContainEols: []}
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/to-markdown.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-gfm/to-markdown.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/to-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/to-markdown */ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/to-markdown */ "./node_modules/mdast-util-gfm-table/to-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/to-markdown */ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js")
var configure = __webpack_require__(/*! mdast-util-to-markdown/lib/configure */ "./node_modules/mdast-util-to-markdown/lib/configure.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var config = configure(
    {handlers: {}, join: [], unsafe: [], options: {}},
    {
      extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
    }
  )

  return Object.assign(config.options, {
    handlers: config.handlers,
    join: config.join,
    unsafe: config.unsafe
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/configure.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/configure.js ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = configure

function configure(base, extension) {
  var index = -1
  var key

  // First do subextensions.
  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      configure(base, extension.extensions[index])
    }
  }

  for (key in extension) {
    if (key === 'extensions') {
      // Empty.
    } else if (key === 'unsafe' || key === 'join') {
      base[key] = base[key].concat(extension[key] || [])
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {})
    } else {
      base.options[key] = extension[key]
    }
  }

  return base
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = inlineCode
inlineCode.peek = inlineCodePeek

var patternCompile = __webpack_require__(/*! ../util/pattern-compile */ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js")

function inlineCode(node, parent, context) {
  var value = node.value || ''
  var sequence = '`'
  var index = -1
  var pattern
  var expression
  var match
  var position

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`'
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n`]/.test(value.charAt(0)) ||
      /[ \r\n`]/.test(value.charAt(value.length - 1)))
  ) {
    value = ' ' + value + ' '
  }

  // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.
  while (++index < context.unsafe.length) {
    pattern = context.unsafe[index]

    // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.
    if (!pattern.atBreak) continue

    expression = patternCompile(pattern)

    while ((match = expression.exec(value))) {
      position = match.index

      // Support CRLF (patterns only look for one of the characters).
      if (
        value.charCodeAt(position) === 10 /* `\n` */ &&
        value.charCodeAt(position - 1) === 13 /* `\r` */
      ) {
        position--
      }

      value = value.slice(0, position) + ' ' + value.slice(match.index + 1)
    }
  }

  return sequence + value + sequence
}

function inlineCodePeek() {
  return '`'
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/list-item.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = listItem

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var checkBullet = __webpack_require__(/*! ../util/check-bullet */ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js")
var checkListItemIndent = __webpack_require__(/*! ../util/check-list-item-indent */ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js")
var flow = __webpack_require__(/*! ../util/container-flow */ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")

function listItem(node, parent, context) {
  var bullet = checkBullet(context)
  var listItemIndent = checkListItemIndent(context)
  var size
  var value
  var exit

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.'
  }

  size = bullet.length + 1

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4
  }

  exit = context.enter('listItem')
  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeat(' ', size)) + line
    }

    return (blank ? bullet : bullet + repeat(' ', size - bullet.length)) + line
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = checkBullet

function checkBullet(context) {
  var marker = context.options.bullet || '*'

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = checkListItemIndent

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab'

  if (style === 1 || style === '1') {
    return 'one'
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-flow.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = flow

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

function flow(parent, context) {
  var children = parent.children || []
  var results = []
  var index = -1
  var child

  while (++index < children.length) {
    child = children[index]

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    )

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]))
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1
    var result

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context)

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeat('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = phrasing

function phrasing(parent, context, safeOptions) {
  var children = parent.children || []
  var results = []
  var index = -1
  var before = safeOptions.before
  var after
  var handle
  var child

  while (++index < children.length) {
    child = children[index]

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type]
      if (handle && handle.peek) handle = handle.peek
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: ''
          }).charAt(0)
        : ''
    } else {
      after = safeOptions.after
    }

    // In some cases, html (text) can be found in phrasing right after an eol.
    // When we’d serialize that, in most cases that would be seen as html
    // (flow).
    // As we can’t escape or so to prevent it from happening, we take a somewhat
    // reasonable approach: replace that eol with a space.
    // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
    if (
      results.length > 0 &&
      (before === '\r' || before === '\n') &&
      child.type === 'html'
    ) {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        ' '
      )
      before = ' '
    }

    results.push(
      context.handle(child, parent, context, {
        before: before,
        after: after
      })
    )

    before = results[results.length - 1].slice(-1)
  }

  return results.join('')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = indentLines

var eol = /\r?\n|\r/g

function indentLines(value, map) {
  var result = []
  var start = 0
  var line = 0
  var match

  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index))
    result.push(match[0])
    start = match.index + match[0].length
    line++
  }

  one(value.slice(start))

  return result.join('')

  function one(value) {
    result.push(map(value, line, !value))
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js ***!
  \*************************************************************************/
/***/ (function(module) {

module.exports = patternCompile

function patternCompile(pattern) {
  var before
  var after

  if (!pattern._compiled) {
    before = pattern.before ? '(?:' + pattern.before + ')' : ''
    after = pattern.after ? '(?:' + pattern.after + ')' : ''

    if (pattern.atBreak) {
      before = '[\\r\\n][\\t ]*' + before
    }

    pattern._compiled = new RegExp(
      (before ? '(' + before + ')' : '') +
        (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
        pattern.character +
        (after || ''),
      'g'
    )
  }

  return pattern._compiled
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/index.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js":
/*!*************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/syntax.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var asciiAlpha = __webpack_require__(/*! micromark/dist/character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! micromark/dist/character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiControl = __webpack_require__(/*! micromark/dist/character/ascii-control */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEnding = __webpack_require__(/*! micromark/dist/character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

var www = {tokenize: tokenizeWww, partial: true}
var domain = {tokenize: tokenizeDomain, partial: true}
var path = {tokenize: tokenizePath, partial: true}
var punctuation = {tokenize: tokenizePunctuation, partial: true}
var namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
}

var wwwAutolink = {tokenize: tokenizeWwwAutolink, previous: previousWww}
var httpAutolink = {tokenize: tokenizeHttpAutolink, previous: previousHttp}
var emailAutolink = {tokenize: tokenizeEmailAutolink, previous: previousEmail}

var text = {}

// Export hooked constructs.
exports.text = text

// `0`
var code = 48

// While the code is smaller than `{`.
while (code < 123) {
  text[code] = emailAutolink
  code++
  // Jump from `:` -> `A`
  if (code === 58) code = 65
  // Jump from `[` -> `a`
  else if (code === 91) code = 97
}

// `+`
text[43] = emailAutolink
// `-`
text[45] = emailAutolink
// `.`
text[46] = emailAutolink
// `_`
text[95] = emailAutolink
// `h`.
text[72] = [emailAutolink, httpAutolink]
text[104] = [emailAutolink, httpAutolink]
// `w`.
text[87] = [emailAutolink, wwwAutolink]
text[119] = [emailAutolink, wwwAutolink]

function tokenizeEmailAutolink(effects, ok, nok) {
  var self = this
  var hasDot

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      !gfmAtext(code) ||
      !previousEmail(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkEmail')
    return atext(code)
  }

  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code)
      return atext
    }

    // `@`
    if (code === 64) {
      effects.consume(code)
      return label
    }

    return nok(code)
  }

  function label(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, done, dotContinuation)(code)
    }

    if (
      // `-`
      code === 45 ||
      // `_`
      code === 95
    ) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code)
    }

    if (asciiAlphanumeric(code)) {
      effects.consume(code)
      return label
    }

    return done(code)
  }

  function dotContinuation(code) {
    effects.consume(code)
    hasDot = true
    return label
  }

  function dashOrUnderscoreContinuation(code) {
    effects.consume(code)
    return afterDashOrUnderscore
  }

  function afterDashOrUnderscore(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code)
    }

    return label(code)
  }

  function done(code) {
    if (hasDot) {
      effects.exit('literalAutolinkEmail')
      effects.exit('literalAutolink')
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeWwwAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 87 && code - 32 !== 87) ||
      !previousWww(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkWww')
    // For `www.` we check instead of attempt, because when it matches, GH
    // treats it as part of a domain (yes, it says a valid domain must come
    // after `www.`, but that’s not how it’s implemented by them).
    return effects.check(
      www,
      effects.attempt(domain, effects.attempt(path, done), nok),
      nok
    )(code)
  }

  function done(code) {
    effects.exit('literalAutolinkWww')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeHttpAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 72 && code - 32 !== 72) ||
      !previousHttp(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkHttp')
    effects.consume(code)
    return t1
  }

  function t1(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return t2
    }

    return nok(code)
  }

  function t2(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return p
    }

    return nok(code)
  }

  function p(code) {
    // `p`
    if (code === 80 || code - 32 === 80) {
      effects.consume(code)
      return s
    }

    return nok(code)
  }

  function s(code) {
    // `s`
    if (code === 83 || code - 32 === 83) {
      effects.consume(code)
      return colon
    }

    return colon(code)
  }

  function colon(code) {
    // `:`
    if (code === 58) {
      effects.consume(code)
      return slash1
    }

    return nok(code)
  }

  function slash1(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return slash2
    }

    return nok(code)
  }

  function slash2(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return asciiControl(code) ||
      unicodeWhitespace(code) ||
      unicodePunctuation(code)
      ? nok(code)
      : effects.attempt(domain, effects.attempt(path, done), nok)(code)
  }

  function done(code) {
    effects.exit('literalAutolinkHttp')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeWww(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a `w`.
    effects.consume(code)
    return w2
  }

  function w2(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return w3
    }

    return nok(code)
  }

  function w3(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return dot
    }

    return nok(code)
  }

  function dot(code) {
    // `.`
    if (code === 46) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? nok(code) : ok(code)
  }
}

function tokenizeDomain(effects, ok, nok) {
  var hasUnderscoreInLastSegment
  var hasUnderscoreInLastLastSegment

  return domain

  function domain(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        done,
        punctuationContinuation
      )(code)
    }

    if (code === 46 /* `.` */ || code === 95 /* `_` */) {
      return effects.check(punctuation, done, punctuationContinuation)(code)
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    if (
      asciiControl(code) ||
      unicodeWhitespace(code) ||
      (code !== 45 /* `-` */ && unicodePunctuation(code))
    ) {
      return done(code)
    }

    effects.consume(code)
    return domain
  }

  function punctuationContinuation(code) {
    // `.`
    if (code === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment
      hasUnderscoreInLastSegment = undefined
      effects.consume(code)
      return domain
    }

    // `_`
    if (code === 95) hasUnderscoreInLastSegment = true

    effects.consume(code)
    return domain
  }

  function done(code) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizePath(effects, ok) {
  var balance = 0

  return inPath

  function inPath(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        ok,
        continuedPunctuation
      )(code)
    }

    // `(`
    if (code === 40) {
      balance++
    }

    // `)`
    if (code === 41) {
      return effects.check(
        punctuation,
        parenAtPathEnd,
        continuedPunctuation
      )(code)
    }

    if (pathEnd(code)) {
      return ok(code)
    }

    if (trailingPunctuation(code)) {
      return effects.check(punctuation, ok, continuedPunctuation)(code)
    }

    effects.consume(code)
    return inPath
  }

  function continuedPunctuation(code) {
    effects.consume(code)
    return inPath
  }

  function parenAtPathEnd(code) {
    balance--
    return balance < 0 ? ok(code) : continuedPunctuation(code)
  }
}

function tokenizeNamedCharacterReference(effects, ok, nok) {
  return start

  function start(code) {
    // Assume an ampersand.
    effects.consume(code)
    return inside
  }

  function inside(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return inside
    }

    // `;`
    if (code === 59) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function tokenizePunctuation(effects, ok, nok) {
  return start

  function start(code) {
    // Always a valid trailing punctuation marker.
    effects.consume(code)
    return after
  }

  function after(code) {
    // Check the next.
    if (trailingPunctuation(code)) {
      effects.consume(code)
      return after
    }

    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function trailingPunctuation(code) {
  return (
    // `!`
    code === 33 ||
    // `"`
    code === 34 ||
    // `'`
    code === 39 ||
    // `)`
    code === 41 ||
    // `*`
    code === 42 ||
    // `,`
    code === 44 ||
    // `.`
    code === 46 ||
    // `:`
    code === 58 ||
    // `;`
    code === 59 ||
    // `<`
    code === 60 ||
    // `?`
    code === 63 ||
    // `_`.
    code === 95 ||
    // `~`
    code === 126
  )
}

function pathEnd(code) {
  return (
    // EOF.
    code === null ||
    // CR, LF, CRLF, HT, VS.
    code < 0 ||
    // Space.
    code === 32 ||
    // `<`
    code === 60
  )
}

function gfmAtext(code) {
  return (
    code === 43 /* `+` */ ||
    code === 45 /* `-` */ ||
    code === 46 /* `.` */ ||
    code === 95 /* `_` */ ||
    asciiAlphanumeric(code)
  )
}

function previousWww(code) {
  return (
    code === null ||
    code < 0 ||
    code === 32 /* ` ` */ ||
    code === 40 /* `(` */ ||
    code === 42 /* `*` */ ||
    code === 95 /* `_` */ ||
    code === 126 /* `~` */
  )
}

function previousHttp(code) {
  return code === null || !asciiAlpha(code)
}

function previousEmail(code) {
  return code !== 47 /* `/` */ && previousHttp(code)
}

function previous(events) {
  var index = events.length

  while (index--) {
    if (
      (events[index][1].type === 'labelLink' ||
        events[index][1].type === 'labelImage') &&
      !events[index][1]._balanced
    ) {
      return true
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-strikethrough/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/index.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = create

var classifyCharacter = __webpack_require__(/*! micromark/dist/util/classify-character */ "./node_modules/micromark/dist/util/classify-character.js")
var chunkedSplice = __webpack_require__(/*! micromark/dist/util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var resolveAll = __webpack_require__(/*! micromark/dist/util/resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! micromark/dist/util/shallow */ "./node_modules/micromark/dist/util/shallow.js")

function create(options) {
  var settings = options || {}
  var single = settings.singleTilde
  var tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  }

  if (single === null || single === undefined) {
    single = true
  }

  return {text: {126: tokenizer}, insideSpan: {null: tokenizer}}

  // Take events and resolve strikethrough.
  function resolveAllStrikethrough(events, context) {
    var index = -1
    var strikethrough
    var text
    var open
    var nextEvents

    // Walk through all events.
    while (++index < events.length) {
      // Find a token that can close.
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'strikethroughSequenceTemporary' &&
        events[index][1]._close
      ) {
        open = index

        // Now walk back to find an opener.
        while (open--) {
          // Find a token that can open the closer.
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'strikethroughSequenceTemporary' &&
            events[open][1]._open &&
            // If the sizes are the same:
            events[index][1].end.offset - events[index][1].start.offset ===
              events[open][1].end.offset - events[open][1].start.offset
          ) {
            events[index][1].type = 'strikethroughSequence'
            events[open][1].type = 'strikethroughSequence'

            strikethrough = {
              type: 'strikethrough',
              start: shallow(events[open][1].start),
              end: shallow(events[index][1].end)
            }

            text = {
              type: 'strikethroughText',
              start: shallow(events[open][1].end),
              end: shallow(events[index][1].start)
            }

            // Opening.
            nextEvents = [
              ['enter', strikethrough, context],
              ['enter', events[open][1], context],
              ['exit', events[open][1], context],
              ['enter', text, context]
            ]

            // Between.
            chunkedSplice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index),
                context
              )
            )

            // Closing.
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['exit', text, context],
              ['enter', events[index][1], context],
              ['exit', events[index][1], context],
              ['exit', strikethrough, context]
            ])

            chunkedSplice(events, open - 1, index - open + 3, nextEvents)

            index = open + nextEvents.length - 2
            break
          }
        }
      }
    }

    return removeRemainingSequences(events)
  }

  function removeRemainingSequences(events) {
    var index = -1
    var length = events.length

    while (++index < length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data'
      }
    }

    return events
  }

  function tokenizeStrikethrough(effects, ok, nok) {
    var previous = this.previous
    var events = this.events
    var size = 0

    return start

    function start(code) {
      if (
        code !== 126 ||
        (previous === 126 &&
          events[events.length - 1][1].type !== 'characterEscape')
      ) {
        return nok(code)
      }

      effects.enter('strikethroughSequenceTemporary')
      return more(code)
    }

    function more(code) {
      var before = classifyCharacter(previous)
      var token
      var after

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code)
        effects.consume(code)
        size++
        return more
      }

      if (size < 2 && !single) return nok(code)
      token = effects.exit('strikethroughSequenceTemporary')
      after = classifyCharacter(code)
      token._open = !after || (after === 2 && before)
      token._close = !before || (before === 2 && after)
      return ok(code)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-table/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/syntax.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/syntax.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.flow = {
  null: {tokenize: tokenizeTable, resolve: resolveTable, interruptible: true}
}

var createSpace = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var setextUnderlineMini = {tokenize: tokenizeSetextUnderlineMini, partial: true}
var nextPrefixedOrBlank = {tokenize: tokenizeNextPrefixedOrBlank, partial: true}

function resolveTable(events, context) {
  var length = events.length
  var index = -1
  var token
  var inHead
  var inDelimiterRow
  var inRow
  var cell
  var content
  var text
  var contentStart
  var contentEnd
  var cellStart

  while (++index < length) {
    token = events[index][1]

    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index
        contentEnd = index
      }

      if (
        // Combine separate content parts into one.
        (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
        contentEnd
      ) {
        content = {
          type: 'tableContent',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        }
        text = {
          type: 'chunkText',
          start: content.start,
          end: content.end,
          contentType: 'text'
        }

        events.splice(
          contentStart,
          contentEnd - contentStart + 1,
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        )
        index -= contentEnd - contentStart - 3
        length = events.length
        contentStart = undefined
        contentEnd = undefined
      }
    }

    if (
      events[index][0] === 'exit' &&
      cellStart &&
      cellStart + 1 < index &&
      (token.type === 'tableCellDivider' ||
        (token.type === 'tableRow' &&
          (cellStart + 3 < index ||
            events[cellStart][1].type !== 'whitespace')))
    ) {
      cell = {
        type: inDelimiterRow
          ? 'tableDelimiter'
          : inHead
          ? 'tableHeader'
          : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      }
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
        'exit',
        cell,
        context
      ])
      events.splice(cellStart, 0, ['enter', cell, context])
      index += 2
      length = events.length
      cellStart = index + 1
    }

    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter'

      if (inRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter'

      if (inDelimiterRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter'
    }
  }

  return events
}

function tokenizeTable(effects, ok, nok) {
  var align = []
  var tableHeaderCount = 0
  var seenDelimiter
  var hasDash

  return start

  function start(code) {
    /* istanbul ignore if - used to be passed in beta micromark versions. */
    if (code === null || code === -5 || code === -4 || code === -3) {
      return nok(code)
    }

    effects.enter('table')._align = align
    effects.enter('tableHead')
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerHead(code)
    }

    tableHeaderCount++
    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentHead(code)
  }

  function cellDividerHead(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    seenDelimiter = true
    return cellBreakHead
  }

  function cellBreakHead(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndHead(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceHead
    }

    if (seenDelimiter) {
      seenDelimiter = undefined
      tableHeaderCount++
    }

    // `|`
    if (code === 124) {
      return cellDividerHead(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentHead(code)
  }

  function inWhitespaceHead(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceHead
    }

    effects.exit('whitespace')
    return cellBreakHead(code)
  }

  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakHead(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeHead : inCellContentHead
  }

  function inCellContentEscapeHead(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentHead
    }

    // Anything else.
    return inCellContentHead(code)
  }

  function atRowEndHead(code) {
    if (code === null) {
      return nok(code)
    }

    effects.exit('tableRow')
    effects.exit('tableHead')

    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')

    // If a setext heading, exit.
    return effects.check(
      setextUnderlineMini,
      nok,
      // Support an indent before the delimiter row.
      createSpace(effects, rowStartDelimiter, 'linePrefix', 4)
    )
  }

  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || code < 0 || code === 32) {
      return nok(code)
    }

    effects.enter('tableDelimiterRow')
    return atDelimiterRowBreak(code)
  }

  function atDelimiterRowBreak(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      align.push(null)
      return inFillerDelimiter
    }

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')
      align.push('left')
      return afterLeftAlignment
    }

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function inWhitespaceDelimiter(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    effects.exit('whitespace')
    return atDelimiterRowBreak(code)
  }

  function inFillerDelimiter(code) {
    // `-`
    if (code === 45) {
      effects.consume(code)
      return inFillerDelimiter
    }

    effects.exit('tableDelimiterFiller')

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')

      align[align.length - 1] =
        align[align.length - 1] === 'left' ? 'center' : 'right'

      return afterRightAlignment
    }

    return atDelimiterRowBreak(code)
  }

  function afterLeftAlignment(code) {
    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      return inFillerDelimiter
    }

    // Anything else is not ok.
    return nok(code)
  }

  function afterRightAlignment(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `|`
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow')

    // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code)
    }

    if (code === null) {
      return tableClose(code)
    }

    return effects.check(nextPrefixedOrBlank, tableClose, tableContinue)(code)
  }

  function tableClose(code) {
    effects.exit('table')
    return ok(code)
  }

  function tableContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // We checked that it’s not a prefixed or blank line, so we’re certain a
    // body is coming, though it may be indented.
    return createSpace(effects, bodyStart, 'linePrefix', 4)
  }

  function bodyStart(code) {
    effects.enter('tableBody')
    return rowStartBody(code)
  }

  function rowStartBody(code) {
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerBody(code)
    }

    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentBody(code)
  }

  function cellDividerBody(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    return cellBreakBody
  }

  function cellBreakBody(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndBody(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceBody
    }

    // `|`
    if (code === 124) {
      return cellDividerBody(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentBody(code)
  }

  function inWhitespaceBody(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceBody
    }

    effects.exit('whitespace')
    return cellBreakBody(code)
  }

  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakBody(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeBody : inCellContentBody
  }

  function inCellContentEscapeBody(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentBody
    }

    // Anything else.
    return inCellContentBody(code)
  }

  function atRowEndBody(code) {
    effects.exit('tableRow')

    if (code === null) {
      return tableBodyClose(code)
    }

    return effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      tableBodyContinue
    )(code)
  }

  function tableBodyClose(code) {
    effects.exit('tableBody')
    return tableClose(code)
  }

  function tableBodyContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // Support an optional prefix, then start a body row.
    return createSpace(effects, rowStartBody, 'linePrefix', 4)
  }
}

// Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>
function tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start

  function start(code) {
    // `-`
    if (code !== 45) {
      return nok(code)
    }

    effects.enter('setextUnderline')
    return sequence(code)
  }

  function sequence(code) {
    if (code === 45) {
      effects.consume(code)
      return sequence
    }

    return whitespace(code)
  }

  function whitespace(code) {
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return whitespace
    }

    if (code === null || code === -5 || code === -4 || code === -3) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  var size = 0

  return start

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check')
    // EOL.
    effects.consume(code)
    return whitespace
  }

  function whitespace(code) {
    // VS or SP.
    if (code === -1 || code === 32) {
      effects.consume(code)
      size++
      return size === 4 ? ok : whitespace
    }

    // EOF or whitespace
    if (code === null || code < 0) {
      return ok(code)
    }

    // Anything else.
    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/index.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/syntax.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var markdownLineEndingOrSpace = __webpack_require__(/*! micromark/dist/character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var spaceFactory = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var prefixSize = __webpack_require__(/*! micromark/dist/util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")

var tasklistCheck = {tokenize: tokenizeTasklistCheck}

exports.text = {91: tasklistCheck}

function tokenizeTasklistCheck(effects, ok, nok) {
  var self = this

  return open

  function open(code) {
    if (
      // Exit if not `[`.
      code !== 91 ||
      // Exit if there’s stuff before.
      self.previous !== null ||
      // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck')
    effects.enter('taskListCheckMarker')
    effects.consume(code)
    effects.exit('taskListCheckMarker')
    return inside
  }

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked')
      effects.consume(code)
      effects.exit('taskListCheckValueUnchecked')
      return close
    }

    // Upper- and lower `x`.
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked')
      effects.consume(code)
      effects.exit('taskListCheckValueChecked')
      return close
    }

    return nok(code)
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker')
      effects.consume(code)
      effects.exit('taskListCheckMarker')
      effects.exit('taskListCheck')
      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)
    }

    return nok(code)
  }
}

function spaceThenNonSpace(effects, ok, nok) {
  var self = this

  return spaceFactory(effects, after, 'whitespace')

  function after(code) {
    return prefixSize(self.events, 'whitespace') &&
      code !== null &&
      !markdownLineEndingOrSpace(code)
      ? ok(code)
      : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/syntax.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/syntax.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var combine = __webpack_require__(/*! micromark/dist/util/combine-extensions */ "./node_modules/micromark/dist/util/combine-extensions.js")
var autolink = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ "./node_modules/micromark-extension-gfm-autolink-literal/index.js")
var strikethrough = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ "./node_modules/micromark-extension-gfm-strikethrough/index.js")
var table = __webpack_require__(/*! micromark-extension-gfm-table */ "./node_modules/micromark-extension-gfm-table/index.js")
var tasklist = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ "./node_modules/micromark-extension-gfm-task-list-item/index.js")

module.exports = create

function create(options) {
  return combine([autolink, strikethrough(options), table, tasklist])
}


/***/ }),

/***/ "./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var syntax = __webpack_require__(/*! micromark-extension-gfm */ "./node_modules/micromark-extension-gfm/index.js")
var fromMarkdown = __webpack_require__(/*! mdast-util-gfm/from-markdown */ "./node_modules/mdast-util-gfm/from-markdown.js")
var toMarkdown = __webpack_require__(/*! mdast-util-gfm/to-markdown */ "./node_modules/mdast-util-gfm/to-markdown.js")

var warningIssued

module.exports = gfm

function gfm(options) {
  var data = this.data()

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued = true
    console.warn(
      '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'
    )
  }

  add('micromarkExtensions', syntax(options))
  add('fromMarkdownExtensions', fromMarkdown)
  add('toMarkdownExtensions', toMarkdown(options))

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value)
    else data[field] = [value]
  }
}


/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzb3VyY2VzL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvdG8tbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL2Zyb20tbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhYmxlL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhc2stbGlzdC1pdGVtL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0vZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvY29uZmlndXJlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2lubGluZS1jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stYnVsbGV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1saXN0LWl0ZW0taW5kZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItZmxvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9pbmRlbnQtbGluZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3BhdHRlcm4tY29tcGlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWF1dG9saW5rLWxpdGVyYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS1hdXRvbGluay1saXRlcmFsL3N5bnRheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlL3N5bnRheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vc3ludGF4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS9zeW50YXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZW1hcmstZ2ZtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJpbWFnZVVybCIsImdldFN0cmFwaU1lZGlhIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250ZW50IiwiYXV0aG9yIiwicGljdHVyZSIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibmFtZSIsInB1Ymxpc2hlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUE2QjtBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0MsMERBQWMsQ0FBQ0gsT0FBTyxDQUFDSSxLQUFULENBQS9CO0FBRUEsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLGFBQVMsRUFBRU4sT0FBTyxDQUFDTyxLQURUO0FBRVZDLG1CQUFlLEVBQUVSLE9BQU8sQ0FBQ1MsV0FGZjtBQUdWQyxjQUFVLEVBQUVWLE9BQU8sQ0FBQ0ksS0FIVjtBQUlWSixXQUFPLEVBQUU7QUFKQyxHQUFaO0FBT0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWixPQUFaLEVBQXFCLE1BQXJCO0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxjQUFVLEVBQUVDLFVBQXBCO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUVJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVRLHFFQUFoQjtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLFFBREw7QUFFRSxpQkFBUyxFQUFDLDBHQUZaO0FBR0Usb0JBQVVYLFFBSFo7QUFJRSx1QkFBYUEsUUFKZjtBQUtFLDJCQUxGO0FBQUEsK0JBT0U7QUFBQSxvQkFBS0YsT0FBTyxDQUFDTztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDREQUFlOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN4REE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCQSx5SEFBb0M7Ozs7Ozs7Ozs7O0FDQXBDLGlCQUFpQixtQkFBTyxDQUFDLG9HQUFzQztBQUMvRCx3QkFBd0IsbUJBQU8sQ0FBQyxrSEFBNkM7QUFDN0UsbUJBQW1CLG1CQUFPLENBQUMsd0dBQXdDO0FBQ25FLHlCQUF5QixtQkFBTyxDQUFDLHNIQUErQztBQUNoRix5QkFBeUIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDL0Usd0JBQXdCLG1CQUFPLENBQUMsa0hBQTZDOztBQUU3RSxXQUFXO0FBQ1gsY0FBYztBQUNkLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7O0FBRXJCOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9qQkEsdUhBQW9DOzs7Ozs7Ozs7OztBQ0FwQyxnQ0FBZ0MsbUJBQU8sQ0FBQyx3SUFBd0Q7QUFDaEcsbUJBQW1CLG1CQUFPLENBQUMsc0dBQXVDO0FBQ2xFLGlCQUFpQixtQkFBTyxDQUFDLDBGQUFpQzs7QUFFMUQscUJBQXFCOztBQUVyQixZQUFZLElBQUk7O0FBRWhCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0VBLHdHQUFvQzs7Ozs7Ozs7Ozs7QUNBcEMsY0FBYyxtQkFBTyxDQUFDLHdHQUF3QztBQUM5RCxlQUFlLG1CQUFPLENBQUMsa0hBQTBDO0FBQ2pFLG9CQUFvQixtQkFBTyxDQUFDLDRHQUF1QztBQUNuRSxZQUFZLG1CQUFPLENBQUMsNEZBQStCO0FBQ25ELGVBQWUsbUJBQU8sQ0FBQyw4R0FBd0M7O0FBRS9EOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVlk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGdGQUF5QjtBQUM5QyxtQkFBbUIsbUJBQU8sQ0FBQyxvRkFBOEI7QUFDekQsaUJBQWlCLG1CQUFPLENBQUMsZ0ZBQTRCOztBQUVyRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNvdXJjZXMvW3NsdWddLjdmNmJhNDAxZWI2Zjc2ZTdmOWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XHJcbmltcG9ydCBnZm0gZnJvbSAncmVtYXJrLWdmbSc7XHJcblxyXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCI7XHJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSW1hZ2VcIjtcclxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZW9cIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hcnRpY2xlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlLCBjYXRlZ29yaWVzIH0pID0+IHtcclxuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGFydGljbGUuaW1hZ2UpO1xyXG5cclxuICBjb25zdCBzZW8gPSB7XHJcbiAgICBtZXRhVGl0bGU6IGFydGljbGUudGl0bGUsXHJcbiAgICBtZXRhRGVzY3JpcHRpb246IGFydGljbGUuZGVzY3JpcHRpb24sXHJcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlLmltYWdlLFxyXG4gICAgYXJ0aWNsZTogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhhcnRpY2xlLCAnaW5mbycpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9PlxyXG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPVwiYmFubmVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWhlaWdodC1tZWRpdW0gdWstZmxleCB1ay1mbGV4LWNlbnRlciB1ay1mbGV4LW1pZGRsZSB1ay1iYWNrZ3JvdW5kLWNvdmVyIHVrLWxpZ2h0IHVrLXBhZGRpbmcgdWstbWFyZ2luXCJcclxuICAgICAgICAgIGRhdGEtc3JjPXtpbWFnZVVybH1cclxuICAgICAgICAgIGRhdGEtc3Jjc2V0PXtpbWFnZVVybH1cclxuICAgICAgICAgIGRhdGEtdWstaW1nXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgxPnthcnRpY2xlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItc21hbGxcIj5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc2tpcEh0bWw9e3RydWV9PnthcnRpY2xlLmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZC1zbWFsbCB1ay1mbGV4LWxlZnRcIiBkYXRhLXVrLWdyaWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF1dGhvci5waWN0dXJlICYmIChcclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2FydGljbGUuYXV0aG9yLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWV4cGFuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgQnkge2FydGljbGUuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJNTU0gRG8gWVlZWVwiPnthcnRpY2xlLnB1Ymxpc2hlZF9hdH08L01vbWVudD5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoe1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBzbHVnOiBhcnRpY2xlLnNsdWcsXHJcbiAgICAgIH0sXHJcbiAgICB9KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGZldGNoQVBJKFxyXG4gICAgYC9hcnRpY2xlcz9zbHVnPSR7cGFyYW1zLnNsdWd9JnN0YXR1cz1wdWJsaXNoZWRgXHJcbiAgKTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFydGljbGU6IGFydGljbGVzWzBdLCBjYXRlZ29yaWVzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY2NvdW50XG5cbmZ1bmN0aW9uIGNjb3VudChzb3VyY2UsIGNoYXJhY3Rlcikge1xuICB2YXIgdmFsdWUgPSBTdHJpbmcoc291cmNlKVxuICB2YXIgY291bnQgPSAwXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2YgY2hhcmFjdGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgY2hhcmFjdGVyJylcbiAgfVxuXG4gIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvdW50KytcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyLCBpbmRleCArIGNoYXJhY3Rlci5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4gY291bnRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25UYWJsZVxuXG52YXIgdHJhaWxpbmdXaGl0ZXNwYWNlID0gLyArJC9cblxuLy8gQ2hhcmFjdGVycy5cbnZhciBzcGFjZSA9ICcgJ1xudmFyIGxpbmVGZWVkID0gJ1xcbidcbnZhciBkYXNoID0gJy0nXG52YXIgY29sb24gPSAnOidcbnZhciB2ZXJ0aWNhbEJhciA9ICd8J1xuXG52YXIgeCA9IDBcbnZhciBDID0gNjdcbnZhciBMID0gNzZcbnZhciBSID0gODJcbnZhciBjID0gOTlcbnZhciBsID0gMTA4XG52YXIgciA9IDExNFxuXG4vLyBDcmVhdGUgYSB0YWJsZSBmcm9tIGEgbWF0cml4IG9mIHN0cmluZ3MuXG5mdW5jdGlvbiBtYXJrZG93blRhYmxlKHRhYmxlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHBhZGRpbmcgPSBzZXR0aW5ncy5wYWRkaW5nICE9PSBmYWxzZVxuICB2YXIgc3RhcnQgPSBzZXR0aW5ncy5kZWxpbWl0ZXJTdGFydCAhPT0gZmFsc2VcbiAgdmFyIGVuZCA9IHNldHRpbmdzLmRlbGltaXRlckVuZCAhPT0gZmFsc2VcbiAgdmFyIGFsaWduID0gKHNldHRpbmdzLmFsaWduIHx8IFtdKS5jb25jYXQoKVxuICB2YXIgYWxpZ25EZWxpbWl0ZXJzID0gc2V0dGluZ3MuYWxpZ25EZWxpbWl0ZXJzICE9PSBmYWxzZVxuICB2YXIgYWxpZ25tZW50cyA9IFtdXG4gIHZhciBzdHJpbmdMZW5ndGggPSBzZXR0aW5ncy5zdHJpbmdMZW5ndGggfHwgZGVmYXVsdFN0cmluZ0xlbmd0aFxuICB2YXIgcm93SW5kZXggPSAtMVxuICB2YXIgcm93TGVuZ3RoID0gdGFibGUubGVuZ3RoXG4gIHZhciBjZWxsTWF0cml4ID0gW11cbiAgdmFyIHNpemVNYXRyaXggPSBbXVxuICB2YXIgcm93ID0gW11cbiAgdmFyIHNpemVzID0gW11cbiAgdmFyIGxvbmdlc3RDZWxsQnlDb2x1bW4gPSBbXVxuICB2YXIgbW9zdENlbGxzUGVyUm93ID0gMFxuICB2YXIgY2VsbHNcbiAgdmFyIGNvbHVtbkluZGV4XG4gIHZhciBjb2x1bW5MZW5ndGhcbiAgdmFyIGxhcmdlc3RcbiAgdmFyIHNpemVcbiAgdmFyIGNlbGxcbiAgdmFyIGxpbmVzXG4gIHZhciBsaW5lXG4gIHZhciBiZWZvcmVcbiAgdmFyIGFmdGVyXG4gIHZhciBjb2RlXG5cbiAgLy8gVGhpcyBpcyBhIHN1cGVyZmx1b3VzIGxvb3AgaWYgd2UgZG9u4oCZdCBhbGlnbiBkZWxpbWl0ZXJzLCBidXQgb3RoZXJ3aXNlIHdl4oCZZFxuICAvLyBkbyBzdXBlcmZsdW91cyB3b3JrIHdoZW4gYWxpZ25pbmcsIHNvIG9wdGltaXplIGZvciBhbGlnbmluZy5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICBjZWxscyA9IHRhYmxlW3Jvd0luZGV4XVxuICAgIGNvbHVtbkluZGV4ID0gLTFcbiAgICBjb2x1bW5MZW5ndGggPSBjZWxscy5sZW5ndGhcbiAgICByb3cgPSBbXVxuICAgIHNpemVzID0gW11cblxuICAgIGlmIChjb2x1bW5MZW5ndGggPiBtb3N0Q2VsbHNQZXJSb3cpIHtcbiAgICAgIG1vc3RDZWxsc1BlclJvdyA9IGNvbHVtbkxlbmd0aFxuICAgIH1cblxuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBjZWxsID0gc2VyaWFsaXplKGNlbGxzW2NvbHVtbkluZGV4XSlcblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBzaXplID0gc3RyaW5nTGVuZ3RoKGNlbGwpXG4gICAgICAgIHNpemVzW2NvbHVtbkluZGV4XSA9IHNpemVcblxuICAgICAgICBsYXJnZXN0ID0gbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF1cblxuICAgICAgICBpZiAobGFyZ2VzdCA9PT0gdW5kZWZpbmVkIHx8IHNpemUgPiBsYXJnZXN0KSB7XG4gICAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gPSBzaXplXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93LnB1c2goY2VsbClcbiAgICB9XG5cbiAgICBjZWxsTWF0cml4W3Jvd0luZGV4XSA9IHJvd1xuICAgIHNpemVNYXRyaXhbcm93SW5kZXhdID0gc2l6ZXNcbiAgfVxuXG4gIC8vIEZpZ3VyZSBvdXQgd2hpY2ggYWxpZ25tZW50cyB0byB1c2UuXG4gIGNvbHVtbkluZGV4ID0gLTFcbiAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG5cbiAgaWYgKHR5cGVvZiBhbGlnbiA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYWxpZ24pIHtcbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgYWxpZ25tZW50c1tjb2x1bW5JbmRleF0gPSB0b0FsaWdubWVudChhbGlnbltjb2x1bW5JbmRleF0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvZGUgPSB0b0FsaWdubWVudChhbGlnbilcblxuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XSA9IGNvZGVcbiAgICB9XG4gIH1cblxuICAvLyBJbmplY3QgdGhlIGFsaWdubWVudCByb3cuXG4gIGNvbHVtbkluZGV4ID0gLTFcbiAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG4gIHJvdyA9IFtdXG4gIHNpemVzID0gW11cblxuICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgIGNvZGUgPSBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XVxuICAgIGJlZm9yZSA9ICcnXG4gICAgYWZ0ZXIgPSAnJ1xuXG4gICAgaWYgKGNvZGUgPT09IGwpIHtcbiAgICAgIGJlZm9yZSA9IGNvbG9uXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSByKSB7XG4gICAgICBhZnRlciA9IGNvbG9uXG4gICAgfSBlbHNlIGlmIChjb2RlID09PSBjKSB7XG4gICAgICBiZWZvcmUgPSBjb2xvblxuICAgICAgYWZ0ZXIgPSBjb2xvblxuICAgIH1cblxuICAgIC8vIFRoZXJlICptdXN0KiBiZSBhdCBsZWFzdCBvbmUgaHlwaGVuLW1pbnVzIGluIGVhY2ggYWxpZ25tZW50IGNlbGwuXG4gICAgc2l6ZSA9IGFsaWduRGVsaW1pdGVyc1xuICAgICAgPyBNYXRoLm1heChcbiAgICAgICAgICAxLFxuICAgICAgICAgIGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdIC0gYmVmb3JlLmxlbmd0aCAtIGFmdGVyLmxlbmd0aFxuICAgICAgICApXG4gICAgICA6IDFcblxuICAgIGNlbGwgPSBiZWZvcmUgKyByZXBlYXQoZGFzaCwgc2l6ZSkgKyBhZnRlclxuXG4gICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgc2l6ZSA9IGJlZm9yZS5sZW5ndGggKyBzaXplICsgYWZ0ZXIubGVuZ3RoXG5cbiAgICAgIGlmIChzaXplID4gbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gPSBzaXplXG4gICAgICB9XG5cbiAgICAgIHNpemVzW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICB9XG5cbiAgICByb3dbY29sdW1uSW5kZXhdID0gY2VsbFxuICB9XG5cbiAgLy8gSW5qZWN0IHRoZSBhbGlnbm1lbnQgcm93LlxuICBjZWxsTWF0cml4LnNwbGljZSgxLCAwLCByb3cpXG4gIHNpemVNYXRyaXguc3BsaWNlKDEsIDAsIHNpemVzKVxuXG4gIHJvd0luZGV4ID0gLTFcbiAgcm93TGVuZ3RoID0gY2VsbE1hdHJpeC5sZW5ndGhcbiAgbGluZXMgPSBbXVxuXG4gIHdoaWxlICgrK3Jvd0luZGV4IDwgcm93TGVuZ3RoKSB7XG4gICAgcm93ID0gY2VsbE1hdHJpeFtyb3dJbmRleF1cbiAgICBzaXplcyA9IHNpemVNYXRyaXhbcm93SW5kZXhdXG4gICAgY29sdW1uSW5kZXggPSAtMVxuICAgIGNvbHVtbkxlbmd0aCA9IG1vc3RDZWxsc1BlclJvd1xuICAgIGxpbmUgPSBbXVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGNlbGwgPSByb3dbY29sdW1uSW5kZXhdIHx8ICcnXG4gICAgICBiZWZvcmUgPSAnJ1xuICAgICAgYWZ0ZXIgPSAnJ1xuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIHNpemUgPSBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSAtIChzaXplc1tjb2x1bW5JbmRleF0gfHwgMClcbiAgICAgICAgY29kZSA9IGFsaWdubWVudHNbY29sdW1uSW5kZXhdXG5cbiAgICAgICAgaWYgKGNvZGUgPT09IHIpIHtcbiAgICAgICAgICBiZWZvcmUgPSByZXBlYXQoc3BhY2UsIHNpemUpXG4gICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gYykge1xuICAgICAgICAgIGlmIChzaXplICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgYmVmb3JlID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMilcbiAgICAgICAgICAgIGFmdGVyID0gYmVmb3JlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlZm9yZSA9IHJlcGVhdChzcGFjZSwgc2l6ZSAvIDIgKyAwLjUpXG4gICAgICAgICAgICBhZnRlciA9IHJlcGVhdChzcGFjZSwgc2l6ZSAvIDIgLSAwLjUpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFmdGVyID0gcmVwZWF0KHNwYWNlLCBzaXplKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydCA9PT0gdHJ1ZSAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICBsaW5lLnB1c2godmVydGljYWxCYXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGFkZGluZyA9PT0gdHJ1ZSAmJlxuICAgICAgICAvLyBEb27igJl0IGFkZCB0aGUgb3BlbmluZyBzcGFjZSBpZiB3ZeKAmXJlIG5vdCBhbGlnbmluZyBhbmQgdGhlIGNlbGwgaXNcbiAgICAgICAgLy8gZW1wdHk6IHRoZXJlIHdpbGwgYmUgYSBjbG9zaW5nIHNwYWNlLlxuICAgICAgICAhKGFsaWduRGVsaW1pdGVycyA9PT0gZmFsc2UgJiYgY2VsbCA9PT0gJycpICYmXG4gICAgICAgIChzdGFydCA9PT0gdHJ1ZSB8fCBjb2x1bW5JbmRleCAhPT0gMClcbiAgICAgICkge1xuICAgICAgICBsaW5lLnB1c2goc3BhY2UpXG4gICAgICB9XG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgbGluZS5wdXNoKGJlZm9yZSlcbiAgICAgIH1cblxuICAgICAgbGluZS5wdXNoKGNlbGwpXG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgbGluZS5wdXNoKGFmdGVyKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFkZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goc3BhY2UpXG4gICAgICB9XG5cbiAgICAgIGlmIChlbmQgPT09IHRydWUgfHwgY29sdW1uSW5kZXggIT09IGNvbHVtbkxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGluZS5wdXNoKHZlcnRpY2FsQmFyKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmUgPSBsaW5lLmpvaW4oJycpXG5cbiAgICBpZiAoZW5kID09PSBmYWxzZSkge1xuICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSh0cmFpbGluZ1doaXRlc3BhY2UsICcnKVxuICAgIH1cblxuICAgIGxpbmVzLnB1c2gobGluZSlcbiAgfVxuXG4gIHJldHVybiBsaW5lcy5qb2luKGxpbmVGZWVkKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFN0cmluZ0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbmZ1bmN0aW9uIHRvQWxpZ25tZW50KHZhbHVlKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLmNoYXJDb2RlQXQoMCkgOiB4XG5cbiAgcmV0dXJuIGNvZGUgPT09IEwgfHwgY29kZSA9PT0gbFxuICAgID8gbFxuICAgIDogY29kZSA9PT0gUiB8fCBjb2RlID09PSByXG4gICAgPyByXG4gICAgOiBjb2RlID09PSBDIHx8IGNvZGUgPT09IGNcbiAgICA/IGNcbiAgICA6IHhcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRBbmRSZXBsYWNlXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgZXNjYXBlID0gcmVxdWlyZSgnZXNjYXBlLXN0cmluZy1yZWdleHAnKVxuXG52YXIgc3BsaWNlID0gW10uc3BsaWNlXG5cbmZ1bmN0aW9uIGZpbmRBbmRSZXBsYWNlKHRyZWUsIGZpbmQsIHJlcGxhY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzXG4gIHZhciBzY2hlbWFcblxuICBpZiAodHlwZW9mIGZpbmQgPT09ICdzdHJpbmcnIHx8IChmaW5kICYmIHR5cGVvZiBmaW5kLmV4ZWMgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgc2NoZW1hID0gW1tmaW5kLCByZXBsYWNlXV1cbiAgfSBlbHNlIHtcbiAgICBzY2hlbWEgPSBmaW5kXG4gICAgb3B0aW9ucyA9IHJlcGxhY2VcbiAgfVxuXG4gIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIHNlYXJjaCh0cmVlLCBzZXR0aW5ncywgaGFuZGxlckZhY3RvcnkodG9QYWlycyhzY2hlbWEpKSlcblxuICByZXR1cm4gdHJlZVxuXG4gIGZ1bmN0aW9uIGhhbmRsZXJGYWN0b3J5KHBhaXJzKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1swXVxuXG4gICAgcmV0dXJuIGhhbmRsZXJcblxuICAgIGZ1bmN0aW9uIGhhbmRsZXIobm9kZSwgcGFyZW50KSB7XG4gICAgICB2YXIgZmluZCA9IHBhaXJbMF1cbiAgICAgIHZhciByZXBsYWNlID0gcGFpclsxXVxuICAgICAgdmFyIG5vZGVzID0gW11cbiAgICAgIHZhciBzdGFydCA9IDBcbiAgICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gICAgICB2YXIgcG9zaXRpb25cbiAgICAgIHZhciBtYXRjaFxuICAgICAgdmFyIHN1YmhhbmRsZXJcbiAgICAgIHZhciB2YWx1ZVxuXG4gICAgICBmaW5kLmxhc3RJbmRleCA9IDBcblxuICAgICAgbWF0Y2ggPSBmaW5kLmV4ZWMobm9kZS52YWx1ZSlcblxuICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbWF0Y2guaW5kZXhcbiAgICAgICAgdmFsdWUgPSByZXBsYWNlLmFwcGx5KFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgW10uY29uY2F0KG1hdGNoLCB7aW5kZXg6IG1hdGNoLmluZGV4LCBpbnB1dDogbWF0Y2guaW5wdXR9KVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChzdGFydCAhPT0gcG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWUuc2xpY2Uoc3RhcnQsIHBvc2l0aW9uKX0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogdmFsdWV9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBub2RlcyA9IFtdLmNvbmNhdChub2RlcywgdmFsdWUpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3RhcnQgPSBwb3NpdGlvbiArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaW5kLmdsb2JhbCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaCA9IGZpbmQuZXhlYyhub2RlLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlcyA9IFtub2RlXVxuICAgICAgICBpbmRleC0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgPCBub2RlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIG5vZGVzLnB1c2goe3R5cGU6ICd0ZXh0JywgdmFsdWU6IG5vZGUudmFsdWUuc2xpY2Uoc3RhcnQpfSlcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzLnVuc2hpZnQoaW5kZXgsIDEpXG4gICAgICAgIHNwbGljZS5hcHBseShwYXJlbnQuY2hpbGRyZW4sIG5vZGVzKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFpcnMubGVuZ3RoID4gMSkge1xuICAgICAgICBzdWJoYW5kbGVyID0gaGFuZGxlckZhY3RvcnkocGFpcnMuc2xpY2UoMSkpXG4gICAgICAgIHBvc2l0aW9uID0gLTFcblxuICAgICAgICB3aGlsZSAoKytwb3NpdGlvbiA8IG5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIG5vZGUgPSBub2Rlc1twb3NpdGlvbl1cblxuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgc3ViaGFuZGxlcihub2RlLCBwYXJlbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlYXJjaChub2RlLCBzZXR0aW5ncywgc3ViaGFuZGxlcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4ICsgbm9kZXMubGVuZ3RoICsgMVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWFyY2godHJlZSwgc2V0dGluZ3MsIGhhbmRsZXIpIHtcbiAgdmFyIGlnbm9yZWQgPSBjb252ZXJ0KHNldHRpbmdzLmlnbm9yZSB8fCBbXSlcbiAgdmFyIHJlc3VsdCA9IFtdXG5cbiAgdmlzaXQodHJlZSwgJ3RleHQnLCB2aXNpdG9yKVxuXG4gIHJldHVybiByZXN1bHRcblxuICBmdW5jdGlvbiB2aXNpdG9yKG5vZGUsIHBhcmVudHMpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBwYXJlbnRcbiAgICB2YXIgZ3JhbmRwYXJlbnRcblxuICAgIHdoaWxlICgrK2luZGV4IDwgcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudHNbaW5kZXhdXG5cbiAgICAgIGlmIChcbiAgICAgICAgaWdub3JlZChcbiAgICAgICAgICBwYXJlbnQsXG4gICAgICAgICAgZ3JhbmRwYXJlbnQgPyBncmFuZHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHBhcmVudCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZ3JhbmRwYXJlbnRcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBncmFuZHBhcmVudCA9IHBhcmVudFxuICAgIH1cblxuICAgIHJldHVybiBoYW5kbGVyKG5vZGUsIGdyYW5kcGFyZW50KVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUGFpcnMoc2NoZW1hKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIga2V5XG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygc2NoZW1hICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYXJyYXkgb3Igb2JqZWN0IGFzIHNjaGVtYScpXG4gIH1cblxuICBpZiAoJ2xlbmd0aCcgaW4gc2NoZW1hKSB7XG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBzY2hlbWEubGVuZ3RoKSB7XG4gICAgICByZXN1bHQucHVzaChbXG4gICAgICAgIHRvRXhwcmVzc2lvbihzY2hlbWFbaW5kZXhdWzBdKSxcbiAgICAgICAgdG9GdW5jdGlvbihzY2hlbWFbaW5kZXhdWzFdKVxuICAgICAgXSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChrZXkgaW4gc2NoZW1hKSB7XG4gICAgICByZXN1bHQucHVzaChbdG9FeHByZXNzaW9uKGtleSksIHRvRnVuY3Rpb24oc2NoZW1hW2tleV0pXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHRvRXhwcmVzc2lvbihmaW5kKSB7XG4gIHJldHVybiB0eXBlb2YgZmluZCA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKGVzY2FwZShmaW5kKSwgJ2cnKSA6IGZpbmRcbn1cblxuZnVuY3Rpb24gdG9GdW5jdGlvbihyZXBsYWNlKSB7XG4gIHJldHVybiB0eXBlb2YgcmVwbGFjZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlcGxhY2UgOiByZXR1cm5lclxuXG4gIGZ1bmN0aW9uIHJldHVybmVyKCkge1xuICAgIHJldHVybiByZXBsYWNlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmcgPT4ge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuXHR9XG5cblx0Ly8gRXNjYXBlIGNoYXJhY3RlcnMgd2l0aCBzcGVjaWFsIG1lYW5pbmcgZWl0aGVyIGluc2lkZSBvciBvdXRzaWRlIGNoYXJhY3RlciBzZXRzLlxuXHQvLyBVc2UgYSBzaW1wbGUgYmFja3NsYXNoIGVzY2FwZSB3aGVuIGl04oCZcyBhbHdheXMgdmFsaWQsIGFuZCBhIFxcdW5ubm4gZXNjYXBlIHdoZW4gdGhlIHNpbXBsZXIgZm9ybSB3b3VsZCBiZSBkaXNhbGxvd2VkIGJ5IFVuaWNvZGUgcGF0dGVybnPigJkgc3RyaWN0ZXIgZ3JhbW1hci5cblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicpXG5cdFx0LnJlcGxhY2UoLy0vZywgJ1xcXFx4MmQnKTtcbn07XG4iLCJ2YXIgY2NvdW50ID0gcmVxdWlyZSgnY2NvdW50JylcbnZhciBmaW5kQW5kUmVwbGFjZSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZScpXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24nKVxudmFyIHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtd2hpdGVzcGFjZScpXG5cbmV4cG9ydHMudHJhbnNmb3JtcyA9IFt0cmFuc2Zvcm1HZm1BdXRvbGlua0xpdGVyYWxzXVxuZXhwb3J0cy5lbnRlciA9IHtcbiAgbGl0ZXJhbEF1dG9saW5rOiBlbnRlckxpdGVyYWxBdXRvbGluayxcbiAgbGl0ZXJhbEF1dG9saW5rRW1haWw6IGVudGVyTGl0ZXJhbEF1dG9saW5rVmFsdWUsXG4gIGxpdGVyYWxBdXRvbGlua0h0dHA6IGVudGVyTGl0ZXJhbEF1dG9saW5rVmFsdWUsXG4gIGxpdGVyYWxBdXRvbGlua1d3dzogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZVxufVxuZXhwb3J0cy5leGl0ID0ge1xuICBsaXRlcmFsQXV0b2xpbms6IGV4aXRMaXRlcmFsQXV0b2xpbmssXG4gIGxpdGVyYWxBdXRvbGlua0VtYWlsOiBleGl0TGl0ZXJhbEF1dG9saW5rRW1haWwsXG4gIGxpdGVyYWxBdXRvbGlua0h0dHA6IGV4aXRMaXRlcmFsQXV0b2xpbmtIdHRwLFxuICBsaXRlcmFsQXV0b2xpbmtXd3c6IGV4aXRMaXRlcmFsQXV0b2xpbmtXd3dcbn1cblxuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmsodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiAnJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbmZ1bmN0aW9uIGVudGVyTGl0ZXJhbEF1dG9saW5rVmFsdWUodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZW50ZXIuYXV0b2xpbmtQcm90b2NvbC5jYWxsKHRoaXMsIHRva2VuKVxufVxuXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rSHR0cCh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmF1dG9saW5rUHJvdG9jb2wuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua1d3dyh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9ICdodHRwOi8vJyArIHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG59XG5cbmZ1bmN0aW9uIGV4aXRMaXRlcmFsQXV0b2xpbmtFbWFpbCh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmF1dG9saW5rRW1haWwuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGluayh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUdmbUF1dG9saW5rTGl0ZXJhbHModHJlZSkge1xuICBmaW5kQW5kUmVwbGFjZShcbiAgICB0cmVlLFxuICAgIFtcbiAgICAgIFsvKGh0dHBzPzpcXC9cXC98d3d3KD89XFwuKSkoWy0uXFx3XSspKFteIFxcdFxcclxcbl0qKS9pLCBmaW5kVXJsXSxcbiAgICAgIFsvKFstLlxcdytdKylAKFstXFx3XSsoPzpcXC5bLVxcd10rKSspLywgZmluZEVtYWlsXVxuICAgIF0sXG4gICAge2lnbm9yZTogWydsaW5rJywgJ2xpbmtSZWZlcmVuY2UnXX1cbiAgKVxufVxuXG5mdW5jdGlvbiBmaW5kVXJsKCQwLCBwcm90b2NvbCwgZG9tYWluLCBwYXRoLCBtYXRjaCkge1xuICB2YXIgcHJlZml4ID0gJydcbiAgdmFyIHBhcnRzXG4gIHZhciByZXN1bHRcblxuICAvLyBOb3QgYW4gZXhwZWN0ZWQgcHJldmlvdXMgY2hhcmFjdGVyLlxuICBpZiAoIXByZXZpb3VzKG1hdGNoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVHJlYXQgYHd3d2AgYXMgcGFydCBvZiB0aGUgZG9tYWluLlxuICBpZiAoL153L2kudGVzdChwcm90b2NvbCkpIHtcbiAgICBkb21haW4gPSBwcm90b2NvbCArIGRvbWFpblxuICAgIHByb3RvY29sID0gJydcbiAgICBwcmVmaXggPSAnaHR0cDovLydcbiAgfVxuXG4gIGlmICghaXNDb3JyZWN0RG9tYWluKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHBhcnRzID0gc3BsaXRVcmwoZG9tYWluICsgcGF0aClcblxuICBpZiAoIXBhcnRzWzBdKSByZXR1cm4gZmFsc2VcblxuICByZXN1bHQgPSB7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogcHJlZml4ICsgcHJvdG9jb2wgKyBwYXJ0c1swXSxcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiBwcm90b2NvbCArIHBhcnRzWzBdfV1cbiAgfVxuXG4gIGlmIChwYXJ0c1sxXSkge1xuICAgIHJlc3VsdCA9IFtyZXN1bHQsIHt0eXBlOiAndGV4dCcsIHZhbHVlOiBwYXJ0c1sxXX1dXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGZpbmRFbWFpbCgkMCwgYXRleHQsIGxhYmVsLCBtYXRjaCkge1xuICAvLyBOb3QgYW4gZXhwZWN0ZWQgcHJldmlvdXMgY2hhcmFjdGVyLlxuICBpZiAoIXByZXZpb3VzKG1hdGNoLCB0cnVlKSB8fCAvW18tXSQvLnRlc3QobGFiZWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdsaW5rJyxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB1cmw6ICdtYWlsdG86JyArIGF0ZXh0ICsgJ0AnICsgbGFiZWwsXG4gICAgY2hpbGRyZW46IFt7dHlwZTogJ3RleHQnLCB2YWx1ZTogYXRleHQgKyAnQCcgKyBsYWJlbH1dXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDb3JyZWN0RG9tYWluKGRvbWFpbikge1xuICB2YXIgcGFydHMgPSBkb21haW4uc3BsaXQoJy4nKVxuXG4gIGlmIChcbiAgICBwYXJ0cy5sZW5ndGggPCAyIHx8XG4gICAgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdICYmXG4gICAgICAoL18vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMV0pIHx8XG4gICAgICAgICEvW2EtekEtWlxcZF0vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMV0pKSkgfHxcbiAgICAocGFydHNbcGFydHMubGVuZ3RoIC0gMl0gJiZcbiAgICAgICgvXy8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSkgfHxcbiAgICAgICAgIS9bYS16QS1aXFxkXS8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSkpKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHNwbGl0VXJsKHVybCkge1xuICB2YXIgdHJhaWwgPSAvWyFcIiYnKSwuOjs8Pj9cXF19XSskLy5leGVjKHVybClcbiAgdmFyIGNsb3NpbmdQYXJlbkluZGV4XG4gIHZhciBvcGVuaW5nUGFyZW5zXG4gIHZhciBjbG9zaW5nUGFyZW5zXG5cbiAgaWYgKHRyYWlsKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDAsIHRyYWlsLmluZGV4KVxuICAgIHRyYWlsID0gdHJhaWxbMF1cbiAgICBjbG9zaW5nUGFyZW5JbmRleCA9IHRyYWlsLmluZGV4T2YoJyknKVxuICAgIG9wZW5pbmdQYXJlbnMgPSBjY291bnQodXJsLCAnKCcpXG4gICAgY2xvc2luZ1BhcmVucyA9IGNjb3VudCh1cmwsICcpJylcblxuICAgIHdoaWxlIChjbG9zaW5nUGFyZW5JbmRleCAhPT0gLTEgJiYgb3BlbmluZ1BhcmVucyA+IGNsb3NpbmdQYXJlbnMpIHtcbiAgICAgIHVybCArPSB0cmFpbC5zbGljZSgwLCBjbG9zaW5nUGFyZW5JbmRleCArIDEpXG4gICAgICB0cmFpbCA9IHRyYWlsLnNsaWNlKGNsb3NpbmdQYXJlbkluZGV4ICsgMSlcbiAgICAgIGNsb3NpbmdQYXJlbkluZGV4ID0gdHJhaWwuaW5kZXhPZignKScpXG4gICAgICBjbG9zaW5nUGFyZW5zKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3VybCwgdHJhaWxdXG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzKG1hdGNoLCBlbWFpbCkge1xuICB2YXIgY29kZSA9IG1hdGNoLmlucHV0LmNoYXJDb2RlQXQobWF0Y2guaW5kZXggLSAxKVxuICByZXR1cm4gKFxuICAgIChjb2RlICE9PSBjb2RlIHx8IHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpIHx8IHVuaWNvZGVQdW5jdHVhdGlvbihjb2RlKSkgJiZcbiAgICAoIWVtYWlsIHx8IGNvZGUgIT09IDQ3KVxuICApXG59XG4iLCJ2YXIgaW5Db25zdHJ1Y3QgPSAncGhyYXNpbmcnXG52YXIgbm90SW5Db25zdHJ1Y3QgPSBbJ2F1dG9saW5rJywgJ2xpbmsnLCAnaW1hZ2UnLCAnbGFiZWwnXVxuXG5leHBvcnRzLnVuc2FmZSA9IFtcbiAge1xuICAgIGNoYXJhY3RlcjogJ0AnLFxuICAgIGJlZm9yZTogJ1srXFxcXC0uXFxcXHddJyxcbiAgICBhZnRlcjogJ1tcXFxcLS5cXFxcd10nLFxuICAgIGluQ29uc3RydWN0OiBpbkNvbnN0cnVjdCxcbiAgICBub3RJbkNvbnN0cnVjdDogbm90SW5Db25zdHJ1Y3RcbiAgfSxcbiAge1xuICAgIGNoYXJhY3RlcjogJy4nLFxuICAgIGJlZm9yZTogJ1tXd10nLFxuICAgIGFmdGVyOiAnW1xcXFwtLlxcXFx3XScsXG4gICAgaW5Db25zdHJ1Y3Q6IGluQ29uc3RydWN0LFxuICAgIG5vdEluQ29uc3RydWN0OiBub3RJbkNvbnN0cnVjdFxuICB9LFxuICB7XG4gICAgY2hhcmFjdGVyOiAnOicsXG4gICAgYmVmb3JlOiAnW3BzXScsXG4gICAgYWZ0ZXI6ICdcXFxcLycsXG4gICAgaW5Db25zdHJ1Y3Q6IGluQ29uc3RydWN0LFxuICAgIG5vdEluQ29uc3RydWN0OiBub3RJbkNvbnN0cnVjdFxuICB9XG5dXG4iLCJleHBvcnRzLmNhbkNvbnRhaW5Fb2xzID0gWydkZWxldGUnXVxuZXhwb3J0cy5lbnRlciA9IHtzdHJpa2V0aHJvdWdoOiBlbnRlclN0cmlrZXRocm91Z2h9XG5leHBvcnRzLmV4aXQgPSB7c3RyaWtldGhyb3VnaDogZXhpdFN0cmlrZXRocm91Z2h9XG5cbmZ1bmN0aW9uIGVudGVyU3RyaWtldGhyb3VnaCh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnZGVsZXRlJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbmZ1bmN0aW9uIGV4aXRTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cbiIsInZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nJylcblxuZXhwb3J0cy51bnNhZmUgPSBbe2NoYXJhY3RlcjogJ34nLCBpbkNvbnN0cnVjdDogJ3BocmFzaW5nJ31dXG5leHBvcnRzLmhhbmRsZXJzID0ge2RlbGV0ZTogaGFuZGxlRGVsZXRlfVxuXG5oYW5kbGVEZWxldGUucGVlayA9IHBlZWtEZWxldGVcblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCdlbXBoYXNpcycpXG4gIHZhciB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6ICd+JywgYWZ0ZXI6ICd+J30pXG4gIGV4aXQoKVxuICByZXR1cm4gJ35+JyArIHZhbHVlICsgJ35+J1xufVxuXG5mdW5jdGlvbiBwZWVrRGVsZXRlKCkge1xuICByZXR1cm4gJ34nXG59XG4iLCJleHBvcnRzLmVudGVyID0ge1xuICB0YWJsZTogZW50ZXJUYWJsZSxcbiAgdGFibGVEYXRhOiBlbnRlckNlbGwsXG4gIHRhYmxlSGVhZGVyOiBlbnRlckNlbGwsXG4gIHRhYmxlUm93OiBlbnRlclJvd1xufVxuZXhwb3J0cy5leGl0ID0ge1xuICBjb2RlVGV4dDogZXhpdENvZGVUZXh0LFxuICB0YWJsZTogZXhpdFRhYmxlLFxuICB0YWJsZURhdGE6IGV4aXQsXG4gIHRhYmxlSGVhZGVyOiBleGl0LFxuICB0YWJsZVJvdzogZXhpdFxufVxuXG5mdW5jdGlvbiBlbnRlclRhYmxlKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICd0YWJsZScsIGFsaWduOiB0b2tlbi5fYWxpZ24sIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxuICB0aGlzLnNldERhdGEoJ2luVGFibGUnLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBleGl0VGFibGUodG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxuICB0aGlzLnNldERhdGEoJ2luVGFibGUnKVxufVxuXG5mdW5jdGlvbiBlbnRlclJvdyh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdCh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG59XG5cbmZ1bmN0aW9uIGVudGVyQ2VsbCh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAndGFibGVDZWxsJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8vIE92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBjb2RlIHRleHQgZGF0YSBoYW5kbGVyIHRvIHVuZXNjYXBlIGVzY2FwZWQgcGlwZXMgd2hlblxuLy8gdGhleSBhcmUgaW4gdGFibGVzLlxuZnVuY3Rpb24gZXhpdENvZGVUZXh0KHRva2VuKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMucmVzdW1lKClcblxuICBpZiAodGhpcy5nZXREYXRhKCdpblRhYmxlJykpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwoW1xcXFx8XSkvZywgcmVwbGFjZSlcbiAgfVxuXG4gIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuZnVuY3Rpb24gcmVwbGFjZSgkMCwgJDEpIHtcbiAgLy8gUGlwZXMgd29yaywgYmFja3NsYXNoZXMgZG9u4oCZdCAoYnV0IGNhbuKAmXQgZXNjYXBlIHBpcGVzKS5cbiAgcmV0dXJuICQxID09PSAnfCcgPyAkMSA6ICQwXG59XG4iLCJ2YXIgcGhyYXNpbmcgPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NvbnRhaW5lci1waHJhc2luZycpXG52YXIgZGVmYXVsdElubGluZUNvZGUgPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvaW5saW5lLWNvZGUnKVxudmFyIG1hcmtkb3duVGFibGUgPSByZXF1aXJlKCdtYXJrZG93bi10YWJsZScpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9NYXJrZG93blxuXG5mdW5jdGlvbiB0b01hcmtkb3duKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcGFkZGluZyA9IHNldHRpbmdzLnRhYmxlQ2VsbFBhZGRpbmdcbiAgdmFyIGFsaWduRGVsaW1pdGVycyA9IHNldHRpbmdzLnRhYmxlUGlwZUFsaWduXG4gIHZhciBzdHJpbmdMZW5ndGggPSBzZXR0aW5ncy5zdHJpbmdMZW5ndGhcbiAgdmFyIGFyb3VuZCA9IHBhZGRpbmcgPyAnICcgOiAnfCdcblxuICByZXR1cm4ge1xuICAgIHVuc2FmZTogW1xuICAgICAge2NoYXJhY3RlcjogJ1xccicsIGluQ29uc3RydWN0OiAndGFibGVDZWxsJ30sXG4gICAgICB7Y2hhcmFjdGVyOiAnXFxuJywgaW5Db25zdHJ1Y3Q6ICd0YWJsZUNlbGwnfSxcbiAgICAgIC8vIEEgcGlwZSwgd2hlbiBmb2xsb3dlZCBieSBhIHRhYiBvciBzcGFjZSAocGFkZGluZyksIG9yIGEgZGFzaCBvciBjb2xvblxuICAgICAgLy8gKHVucGFkZGVkIGRlbGltaXRlciByb3cpLCBjb3VsZCByZXN1bHQgaW4gYSB0YWJsZS5cbiAgICAgIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICd8JywgYWZ0ZXI6ICdbXFx0IDotXSd9LFxuICAgICAgLy8gQSBwaXBlIGluIGEgY2VsbCBtdXN0IGJlIGVuY29kZWQuXG4gICAgICB7Y2hhcmFjdGVyOiAnfCcsIGluQ29uc3RydWN0OiAndGFibGVDZWxsJ30sXG4gICAgICAvLyBBIGNvbG9uIG11c3QgYmUgZm9sbG93ZWQgYnkgYSBkYXNoLCBpbiB3aGljaCBjYXNlIGl0IGNvdWxkIHN0YXJ0IGFcbiAgICAgIC8vIGRlbGltaXRlciByb3cuXG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnOicsIGFmdGVyOiAnLSd9LFxuICAgICAgLy8gQSBkZWxpbWl0ZXIgcm93IGNhbiBhbHNvIHN0YXJ0IHdpdGggYSBkYXNoLCB3aGVuIGZvbGxvd2VkIGJ5IG1vcmVcbiAgICAgIC8vIGRhc2hlcywgYSBjb2xvbiwgb3IgYSBwaXBlLlxuICAgICAgLy8gVGhpcyBpcyBhIHN0cmljdGVyIHZlcnNpb24gdGhhbiB0aGUgYnVpbHQgaW4gY2hlY2sgZm9yIGxpc3RzLCB0aGVtYXRpY1xuICAgICAgLy8gYnJlYWtzLCBhbmQgc2V0ZXggaGVhZGluZyB1bmRlcmxpbmVzIHRob3VnaDpcbiAgICAgIC8vIDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9ibG9iLzUxYTIwMzgvbGliL3Vuc2FmZS5qcyNMNTc+XG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnLScsIGFmdGVyOiAnWzp8LV0nfVxuICAgIF0sXG4gICAgaGFuZGxlcnM6IHtcbiAgICAgIHRhYmxlOiBoYW5kbGVUYWJsZSxcbiAgICAgIHRhYmxlUm93OiBoYW5kbGVUYWJsZVJvdyxcbiAgICAgIHRhYmxlQ2VsbDogaGFuZGxlVGFibGVDZWxsLFxuICAgICAgaW5saW5lQ29kZTogaW5saW5lQ29kZVdpdGhUYWJsZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlKG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplRGF0YShoYW5kbGVUYWJsZUFzRGF0YShub2RlLCBjb250ZXh0KSwgbm9kZS5hbGlnbilcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaXNu4oCZdCByZWFsbHkgdXNlZCBub3JtYWxseSwgYmVjYXVzZSB3ZSBoYW5kbGUgcm93cyBhdCB0aGVcbiAgLy8gdGFibGUgbGV2ZWwuXG4gIC8vIEJ1dCwgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB0YWJsZSByb3csIHRoaXMgZW5zdXJlcyB3ZSBtYWtlIHNvbWV3aGF0IHNlbnNlLlxuICBmdW5jdGlvbiBoYW5kbGVUYWJsZVJvdyhub2RlLCBfLCBjb250ZXh0KSB7XG4gICAgdmFyIHJvdyA9IGhhbmRsZVRhYmxlUm93QXNEYXRhKG5vZGUsIGNvbnRleHQpXG4gICAgLy8gYG1hcmtkb3duLXRhYmxlYCB3aWxsIGFsd2F5cyBhZGQgYW4gYWxpZ24gcm93XG4gICAgdmFyIHZhbHVlID0gc2VyaWFsaXplRGF0YShbcm93XSlcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgdmFsdWUuaW5kZXhPZignXFxuJykpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWJsZUNlbGwobm9kZSwgXywgY29udGV4dCkge1xuICAgIHZhciBleGl0ID0gY29udGV4dC5lbnRlcigndGFibGVDZWxsJylcbiAgICB2YXIgdmFsdWUgPSBwaHJhc2luZyhub2RlLCBjb250ZXh0LCB7YmVmb3JlOiBhcm91bmQsIGFmdGVyOiBhcm91bmR9KVxuICAgIGV4aXQoKVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gc2VyaWFsaXplRGF0YShtYXRyaXgsIGFsaWduKSB7XG4gICAgcmV0dXJuIG1hcmtkb3duVGFibGUobWF0cml4LCB7XG4gICAgICBhbGlnbjogYWxpZ24sXG4gICAgICBhbGlnbkRlbGltaXRlcnM6IGFsaWduRGVsaW1pdGVycyxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBzdHJpbmdMZW5ndGg6IHN0cmluZ0xlbmd0aFxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWJsZUFzRGF0YShub2RlLCBjb250ZXh0KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHZhciBzdWJleGl0ID0gY29udGV4dC5lbnRlcigndGFibGUnKVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBoYW5kbGVUYWJsZVJvd0FzRGF0YShjaGlsZHJlbltpbmRleF0sIGNvbnRleHQpXG4gICAgfVxuXG4gICAgc3ViZXhpdCgpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWJsZVJvd0FzRGF0YShub2RlLCBjb250ZXh0KSB7XG4gICAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciByZXN1bHQgPSBbXVxuICAgIHZhciBzdWJleGl0ID0gY29udGV4dC5lbnRlcigndGFibGVSb3cnKVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBoYW5kbGVUYWJsZUNlbGwoY2hpbGRyZW5baW5kZXhdLCBub2RlLCBjb250ZXh0KVxuICAgIH1cblxuICAgIHN1YmV4aXQoKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lQ29kZVdpdGhUYWJsZShub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBkZWZhdWx0SW5saW5lQ29kZShub2RlLCBwYXJlbnQsIGNvbnRleHQpXG5cbiAgICBpZiAoY29udGV4dC5zdGFjay5pbmRleE9mKCd0YWJsZUNlbGwnKSAhPT0gLTEpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFx8L2csICdcXFxcJCYnKVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG4iLCJleHBvcnRzLmV4aXQgPSB7XG4gIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgdGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkOiBleGl0Q2hlY2ssXG4gIHBhcmFncmFwaDogZXhpdFBhcmFncmFwaFdpdGhUYXNrTGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gZXhpdENoZWNrKHRva2VuKSB7XG4gIC8vIFdl4oCZcmUgYWx3YXlzIGluIGEgcGFyYWdyYXBoLCBpbiBhIGxpc3QgaXRlbS5cbiAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdLmNoZWNrZWQgPVxuICAgIHRva2VuLnR5cGUgPT09ICd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJ1xufVxuXG5mdW5jdGlvbiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbSh0b2tlbikge1xuICB2YXIgcGFyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdXG4gIHZhciBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gIHZhciBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlblxuICB2YXIgaGVhZCA9IG5vZGUuY2hpbGRyZW5bMF1cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGZpcnN0UGFyYWdocmFwaFxuXG4gIGlmIChcbiAgICBwYXJlbnQgJiZcbiAgICBwYXJlbnQudHlwZSA9PT0gJ2xpc3RJdGVtJyAmJlxuICAgIHR5cGVvZiBwYXJlbnQuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nICYmXG4gICAgaGVhZCAmJlxuICAgIGhlYWQudHlwZSA9PT0gJ3RleHQnXG4gICkge1xuICAgIHdoaWxlICgrK2luZGV4IDwgc2libGluZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAoc2libGluZ3NbaW5kZXhdLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgIGZpcnN0UGFyYWdocmFwaCA9IHNpYmxpbmdzW2luZGV4XVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaXJzdFBhcmFnaHJhcGggPT09IG5vZGUpIHtcbiAgICAgIC8vIE11c3Qgc3RhcnQgd2l0aCBhIHNwYWNlIG9yIGEgdGFiLlxuICAgICAgaGVhZC52YWx1ZSA9IGhlYWQudmFsdWUuc2xpY2UoMSlcblxuICAgICAgaWYgKGhlYWQudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5vZGUuY2hpbGRyZW4uc2hpZnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZC5wb3NpdGlvbi5zdGFydC5jb2x1bW4rK1xuICAgICAgICBoZWFkLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCsrXG4gICAgICAgIG5vZGUucG9zaXRpb24uc3RhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBoZWFkLnBvc2l0aW9uLnN0YXJ0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cbiIsInZhciBkZWZhdWx0TGlzdEl0ZW0gPSByZXF1aXJlKCdtZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvbGlzdC1pdGVtJylcblxuZXhwb3J0cy51bnNhZmUgPSBbe2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJy0nLCBhZnRlcjogJ1s6fC1dJ31dXG5cbmV4cG9ydHMuaGFuZGxlcnMgPSB7XG4gIGxpc3RJdGVtOiBsaXN0SXRlbVdpdGhUYXNrTGlzdEl0ZW1cbn1cblxuZnVuY3Rpb24gbGlzdEl0ZW1XaXRoVGFza0xpc3RJdGVtKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBkZWZhdWx0TGlzdEl0ZW0obm9kZSwgcGFyZW50LCBjb250ZXh0KVxuICB2YXIgaGVhZCA9IG5vZGUuY2hpbGRyZW5bMF1cblxuICBpZiAodHlwZW9mIG5vZGUuY2hlY2tlZCA9PT0gJ2Jvb2xlYW4nICYmIGhlYWQgJiYgaGVhZC50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXig/OlsqKy1dfFxcZCtcXC4pKFtcXHJcXG5dfCB7MSwzfSkvLCBjaGVjaylcbiAgfVxuXG4gIHJldHVybiB2YWx1ZVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCQwKSB7XG4gICAgcmV0dXJuICQwICsgJ1snICsgKG5vZGUuY2hlY2tlZCA/ICd4JyA6ICcgJykgKyAnXSAnXG4gIH1cbn1cbiIsInZhciBhdXRvbGlua0xpdGVyYWwgPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS1hdXRvbGluay1saXRlcmFsL2Zyb20tbWFya2Rvd24nKVxudmFyIHN0cmlrZXRocm91Z2ggPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL2Zyb20tbWFya2Rvd24nKVxudmFyIHRhYmxlID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0tdGFibGUvZnJvbS1tYXJrZG93bicpXG52YXIgdGFza0xpc3RJdGVtID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vZnJvbS1tYXJrZG93bicpXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZ3VyZShbXG4gIGF1dG9saW5rTGl0ZXJhbCxcbiAgc3RyaWtldGhyb3VnaCxcbiAgdGFibGUsXG4gIHRhc2tMaXN0SXRlbVxuXSlcblxuZnVuY3Rpb24gY29uZmlndXJlKGV4dGVuc2lvbnMpIHtcbiAgdmFyIGNvbmZpZyA9IHt0cmFuc2Zvcm1zOiBbXSwgY2FuQ29udGFpbkVvbHM6IFtdfVxuICB2YXIgbGVuZ3RoID0gZXh0ZW5zaW9ucy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGV4dGVuc2lvbihjb25maWcsIGV4dGVuc2lvbnNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG5mdW5jdGlvbiBleHRlbnNpb24oY29uZmlnLCBleHRlbnNpb24pIHtcbiAgdmFyIGtleVxuICB2YXIgbGVmdFxuICB2YXIgcmlnaHRcblxuICBmb3IgKGtleSBpbiBleHRlbnNpb24pIHtcbiAgICBsZWZ0ID0gb3duLmNhbGwoY29uZmlnLCBrZXkpID8gY29uZmlnW2tleV0gOiAoY29uZmlnW2tleV0gPSB7fSlcbiAgICByaWdodCA9IGV4dGVuc2lvbltrZXldXG5cbiAgICBpZiAoa2V5ID09PSAnY2FuQ29udGFpbkVvbHMnIHx8IGtleSA9PT0gJ3RyYW5zZm9ybXMnKSB7XG4gICAgICBjb25maWdba2V5XSA9IFtdLmNvbmNhdChsZWZ0LCByaWdodClcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbihsZWZ0LCByaWdodClcbiAgICB9XG4gIH1cbn1cbiIsInZhciBhdXRvbGlua0xpdGVyYWwgPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS1hdXRvbGluay1saXRlcmFsL3RvLW1hcmtkb3duJylcbnZhciBzdHJpa2V0aHJvdWdoID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC90by1tYXJrZG93bicpXG52YXIgdGFibGUgPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS10YWJsZS90by1tYXJrZG93bicpXG52YXIgdGFza0xpc3RJdGVtID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vdG8tbWFya2Rvd24nKVxudmFyIGNvbmZpZ3VyZSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2NvbmZpZ3VyZScpXG5cbm1vZHVsZS5leHBvcnRzID0gdG9NYXJrZG93blxuXG5mdW5jdGlvbiB0b01hcmtkb3duKG9wdGlvbnMpIHtcbiAgdmFyIGNvbmZpZyA9IGNvbmZpZ3VyZShcbiAgICB7aGFuZGxlcnM6IHt9LCBqb2luOiBbXSwgdW5zYWZlOiBbXSwgb3B0aW9uczoge319LFxuICAgIHtcbiAgICAgIGV4dGVuc2lvbnM6IFthdXRvbGlua0xpdGVyYWwsIHN0cmlrZXRocm91Z2gsIHRhYmxlKG9wdGlvbnMpLCB0YXNrTGlzdEl0ZW1dXG4gICAgfVxuICApXG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oY29uZmlnLm9wdGlvbnMsIHtcbiAgICBoYW5kbGVyczogY29uZmlnLmhhbmRsZXJzLFxuICAgIGpvaW46IGNvbmZpZy5qb2luLFxuICAgIHVuc2FmZTogY29uZmlnLnVuc2FmZVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb25maWd1cmVcblxuZnVuY3Rpb24gY29uZmlndXJlKGJhc2UsIGV4dGVuc2lvbikge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIga2V5XG5cbiAgLy8gRmlyc3QgZG8gc3ViZXh0ZW5zaW9ucy5cbiAgaWYgKGV4dGVuc2lvbi5leHRlbnNpb25zKSB7XG4gICAgd2hpbGUgKCsraW5kZXggPCBleHRlbnNpb24uZXh0ZW5zaW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZ3VyZShiYXNlLCBleHRlbnNpb24uZXh0ZW5zaW9uc1tpbmRleF0pXG4gICAgfVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZXh0ZW5zaW9uKSB7XG4gICAgaWYgKGtleSA9PT0gJ2V4dGVuc2lvbnMnKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3Vuc2FmZScgfHwga2V5ID09PSAnam9pbicpIHtcbiAgICAgIGJhc2Vba2V5XSA9IGJhc2Vba2V5XS5jb25jYXQoZXh0ZW5zaW9uW2tleV0gfHwgW10pXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoYW5kbGVycycpIHtcbiAgICAgIGJhc2Vba2V5XSA9IE9iamVjdC5hc3NpZ24oYmFzZVtrZXldLCBleHRlbnNpb25ba2V5XSB8fCB7fSlcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZS5vcHRpb25zW2tleV0gPSBleHRlbnNpb25ba2V5XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBiYXNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcbmlubGluZUNvZGUucGVlayA9IGlubGluZUNvZGVQZWVrXG5cbnZhciBwYXR0ZXJuQ29tcGlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvcGF0dGVybi1jb21waWxlJylcblxuZnVuY3Rpb24gaW5saW5lQ29kZShub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZSB8fCAnJ1xuICB2YXIgc2VxdWVuY2UgPSAnYCdcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHBhdHRlcm5cbiAgdmFyIGV4cHJlc3Npb25cbiAgdmFyIG1hdGNoXG4gIHZhciBwb3NpdGlvblxuXG4gIC8vIElmIHRoZXJlIGlzIGEgc2luZ2xlIGdyYXZlIGFjY2VudCBvbiBpdHMgb3duIGluIHRoZSBjb2RlLCB1c2UgYSBmZW5jZSBvZlxuICAvLyB0d28uXG4gIC8vIElmIHRoZXJlIGFyZSB0d28gaW4gYSByb3csIHVzZSBvbmUuXG4gIHdoaWxlIChuZXcgUmVnRXhwKCcoXnxbXmBdKScgKyBzZXF1ZW5jZSArICcoW15gXXwkKScpLnRlc3QodmFsdWUpKSB7XG4gICAgc2VxdWVuY2UgKz0gJ2AnXG4gIH1cblxuICAvLyBJZiB0aGlzIGlzIG5vdCBqdXN0IHNwYWNlcyBvciBlb2xzICh0YWJzIGRvbuKAmXQgY291bnQpLCBhbmQgZWl0aGVyIHRoZVxuICAvLyBmaXJzdCBvciBsYXN0IGNoYXJhY3RlciBhcmUgYSBzcGFjZSwgZW9sLCBvciB0aWNrLCB0aGVuIHBhZCB3aXRoIHNwYWNlcy5cbiAgaWYgKFxuICAgIC9bXiBcXHJcXG5dLy50ZXN0KHZhbHVlKSAmJlxuICAgICgvWyBcXHJcXG5gXS8udGVzdCh2YWx1ZS5jaGFyQXQoMCkpIHx8XG4gICAgICAvWyBcXHJcXG5gXS8udGVzdCh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkpKVxuICApIHtcbiAgICB2YWx1ZSA9ICcgJyArIHZhbHVlICsgJyAnXG4gIH1cblxuICAvLyBXZSBoYXZlIGEgcG90ZW50aWFsIHByb2JsZW06IGNlcnRhaW4gY2hhcmFjdGVycyBhZnRlciBlb2xzIGNvdWxkIHJlc3VsdCBpblxuICAvLyBibG9ja3MgYmVpbmcgc2Vlbi5cbiAgLy8gRm9yIGV4YW1wbGUsIGlmIHNvbWVvbmUgaW5qZWN0ZWQgdGhlIHN0cmluZyBgJ1xcbiMgYidgLCB0aGVuIHRoYXQgd291bGRcbiAgLy8gcmVzdWx0IGluIGFuIEFUWCBoZWFkaW5nLlxuICAvLyBXZSBjYW7igJl0IGVzY2FwZSBjaGFyYWN0ZXJzIGluIGBpbmxpbmVDb2RlYCwgYnV0IGJlY2F1c2UgZW9scyBhcmVcbiAgLy8gdHJhbnNmb3JtZWQgdG8gc3BhY2VzIHdoZW4gZ29pbmcgZnJvbSBtYXJrZG93biB0byBIVE1MIGFueXdheSwgd2UgY2FuIHN3YXBcbiAgLy8gdGhlbSBvdXQuXG4gIHdoaWxlICgrK2luZGV4IDwgY29udGV4dC51bnNhZmUubGVuZ3RoKSB7XG4gICAgcGF0dGVybiA9IGNvbnRleHQudW5zYWZlW2luZGV4XVxuXG4gICAgLy8gT25seSBsb29rIGZvciBgYXRCcmVha2BzLlxuICAgIC8vIEJ0dzogbm90ZSB0aGF0IGBhdEJyZWFrYCBwYXR0ZXJucyB3aWxsIGFsd2F5cyBzdGFydCB0aGUgcmVnZXggYXQgTEYgb3JcbiAgICAvLyBDUi5cbiAgICBpZiAoIXBhdHRlcm4uYXRCcmVhaykgY29udGludWVcblxuICAgIGV4cHJlc3Npb24gPSBwYXR0ZXJuQ29tcGlsZShwYXR0ZXJuKVxuXG4gICAgd2hpbGUgKChtYXRjaCA9IGV4cHJlc3Npb24uZXhlYyh2YWx1ZSkpKSB7XG4gICAgICBwb3NpdGlvbiA9IG1hdGNoLmluZGV4XG5cbiAgICAgIC8vIFN1cHBvcnQgQ1JMRiAocGF0dGVybnMgb25seSBsb29rIGZvciBvbmUgb2YgdGhlIGNoYXJhY3RlcnMpLlxuICAgICAgaWYgKFxuICAgICAgICB2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uKSA9PT0gMTAgLyogYFxcbmAgKi8gJiZcbiAgICAgICAgdmFsdWUuY2hhckNvZGVBdChwb3NpdGlvbiAtIDEpID09PSAxMyAvKiBgXFxyYCAqL1xuICAgICAgKSB7XG4gICAgICAgIHBvc2l0aW9uLS1cbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBwb3NpdGlvbikgKyAnICcgKyB2YWx1ZS5zbGljZShtYXRjaC5pbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlICsgdmFsdWUgKyBzZXF1ZW5jZVxufVxuXG5mdW5jdGlvbiBpbmxpbmVDb2RlUGVlaygpIHtcbiAgcmV0dXJuICdgJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsaXN0SXRlbVxuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG52YXIgY2hlY2tCdWxsZXQgPSByZXF1aXJlKCcuLi91dGlsL2NoZWNrLWJ1bGxldCcpXG52YXIgY2hlY2tMaXN0SXRlbUluZGVudCA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stbGlzdC1pdGVtLWluZGVudCcpXG52YXIgZmxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvY29udGFpbmVyLWZsb3cnKVxudmFyIGluZGVudExpbmVzID0gcmVxdWlyZSgnLi4vdXRpbC9pbmRlbnQtbGluZXMnKVxuXG5mdW5jdGlvbiBsaXN0SXRlbShub2RlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgdmFyIGJ1bGxldCA9IGNoZWNrQnVsbGV0KGNvbnRleHQpXG4gIHZhciBsaXN0SXRlbUluZGVudCA9IGNoZWNrTGlzdEl0ZW1JbmRlbnQoY29udGV4dClcbiAgdmFyIHNpemVcbiAgdmFyIHZhbHVlXG4gIHZhciBleGl0XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQub3JkZXJlZCkge1xuICAgIGJ1bGxldCA9XG4gICAgICAocGFyZW50LnN0YXJ0ID4gLTEgPyBwYXJlbnQuc3RhcnQgOiAxKSArXG4gICAgICAoY29udGV4dC5vcHRpb25zLmluY3JlbWVudExpc3RNYXJrZXIgPT09IGZhbHNlXG4gICAgICAgID8gMFxuICAgICAgICA6IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpKSArXG4gICAgICAnLidcbiAgfVxuXG4gIHNpemUgPSBidWxsZXQubGVuZ3RoICsgMVxuXG4gIGlmIChcbiAgICBsaXN0SXRlbUluZGVudCA9PT0gJ3RhYicgfHxcbiAgICAobGlzdEl0ZW1JbmRlbnQgPT09ICdtaXhlZCcgJiYgKChwYXJlbnQgJiYgcGFyZW50LnNwcmVhZCkgfHwgbm9kZS5zcHJlYWQpKVxuICApIHtcbiAgICBzaXplID0gTWF0aC5jZWlsKHNpemUgLyA0KSAqIDRcbiAgfVxuXG4gIGV4aXQgPSBjb250ZXh0LmVudGVyKCdsaXN0SXRlbScpXG4gIHZhbHVlID0gaW5kZW50TGluZXMoZmxvdyhub2RlLCBjb250ZXh0KSwgbWFwKVxuICBleGl0KClcblxuICByZXR1cm4gdmFsdWVcblxuICBmdW5jdGlvbiBtYXAobGluZSwgaW5kZXgsIGJsYW5rKSB7XG4gICAgaWYgKGluZGV4KSB7XG4gICAgICByZXR1cm4gKGJsYW5rID8gJycgOiByZXBlYXQoJyAnLCBzaXplKSkgKyBsaW5lXG4gICAgfVxuXG4gICAgcmV0dXJuIChibGFuayA/IGJ1bGxldCA6IGJ1bGxldCArIHJlcGVhdCgnICcsIHNpemUgLSBidWxsZXQubGVuZ3RoKSkgKyBsaW5lXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2hlY2tCdWxsZXRcblxuZnVuY3Rpb24gY2hlY2tCdWxsZXQoY29udGV4dCkge1xuICB2YXIgbWFya2VyID0gY29udGV4dC5vcHRpb25zLmJ1bGxldCB8fCAnKidcblxuICBpZiAobWFya2VyICE9PSAnKicgJiYgbWFya2VyICE9PSAnKycgJiYgbWFya2VyICE9PSAnLScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBpdGVtcyB3aXRoIGAnICtcbiAgICAgICAgbWFya2VyICtcbiAgICAgICAgJ2AgZm9yIGBvcHRpb25zLmJ1bGxldGAsIGV4cGVjdGVkIGAqYCwgYCtgLCBvciBgLWAnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlclxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja0xpc3RJdGVtSW5kZW50XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdEl0ZW1JbmRlbnQoY29udGV4dCkge1xuICB2YXIgc3R5bGUgPSBjb250ZXh0Lm9wdGlvbnMubGlzdEl0ZW1JbmRlbnQgfHwgJ3RhYidcblxuICBpZiAoc3R5bGUgPT09IDEgfHwgc3R5bGUgPT09ICcxJykge1xuICAgIHJldHVybiAnb25lJ1xuICB9XG5cbiAgaWYgKHN0eWxlICE9PSAndGFiJyAmJiBzdHlsZSAhPT0gJ29uZScgJiYgc3R5bGUgIT09ICdtaXhlZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQ2Fubm90IHNlcmlhbGl6ZSBpdGVtcyB3aXRoIGAnICtcbiAgICAgICAgc3R5bGUgK1xuICAgICAgICAnYCBmb3IgYG9wdGlvbnMubGlzdEl0ZW1JbmRlbnRgLCBleHBlY3RlZCBgdGFiYCwgYG9uZWAsIG9yIGBtaXhlZGAnXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZsb3dcblxudmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKVxuXG5mdW5jdGlvbiBmbG93KHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICByZXN1bHRzLnB1c2goXG4gICAgICBjb250ZXh0LmhhbmRsZShjaGlsZCwgcGFyZW50LCBjb250ZXh0LCB7YmVmb3JlOiAnXFxuJywgYWZ0ZXI6ICdcXG4nfSlcbiAgICApXG5cbiAgICBpZiAoaW5kZXggKyAxIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzLnB1c2goYmV0d2VlbihjaGlsZCwgY2hpbGRyZW5baW5kZXggKyAxXSkpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcblxuICBmdW5jdGlvbiBiZXR3ZWVuKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgcmVzdWx0XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNvbnRleHQuam9pbi5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IGNvbnRleHQuam9pbltpbmRleF0obGVmdCwgcmlnaHQsIHBhcmVudCwgY29udGV4dClcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSB8fCByZXN1bHQgPT09IDEpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiByZXBlYXQoJ1xcbicsIDEgKyBOdW1iZXIocmVzdWx0KSlcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG48IS0tLS0+XFxuXFxuJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnXFxuXFxuJ1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHBocmFzaW5nXG5cbmZ1bmN0aW9uIHBocmFzaW5nKHBhcmVudCwgY29udGV4dCwgc2FmZU9wdGlvbnMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuIHx8IFtdXG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGJlZm9yZSA9IHNhZmVPcHRpb25zLmJlZm9yZVxuICB2YXIgYWZ0ZXJcbiAgdmFyIGhhbmRsZVxuICB2YXIgY2hpbGRcblxuICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkID0gY2hpbGRyZW5baW5kZXhdXG5cbiAgICBpZiAoaW5kZXggKyAxIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBoYW5kbGUgPSBjb250ZXh0LmhhbmRsZS5oYW5kbGVyc1tjaGlsZHJlbltpbmRleCArIDFdLnR5cGVdXG4gICAgICBpZiAoaGFuZGxlICYmIGhhbmRsZS5wZWVrKSBoYW5kbGUgPSBoYW5kbGUucGVla1xuICAgICAgYWZ0ZXIgPSBoYW5kbGVcbiAgICAgICAgPyBoYW5kbGUoY2hpbGRyZW5baW5kZXggKyAxXSwgcGFyZW50LCBjb250ZXh0LCB7XG4gICAgICAgICAgICBiZWZvcmU6ICcnLFxuICAgICAgICAgICAgYWZ0ZXI6ICcnXG4gICAgICAgICAgfSkuY2hhckF0KDApXG4gICAgICAgIDogJydcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXIgPSBzYWZlT3B0aW9ucy5hZnRlclxuICAgIH1cblxuICAgIC8vIEluIHNvbWUgY2FzZXMsIGh0bWwgKHRleHQpIGNhbiBiZSBmb3VuZCBpbiBwaHJhc2luZyByaWdodCBhZnRlciBhbiBlb2wuXG4gICAgLy8gV2hlbiB3ZeKAmWQgc2VyaWFsaXplIHRoYXQsIGluIG1vc3QgY2FzZXMgdGhhdCB3b3VsZCBiZSBzZWVuIGFzIGh0bWxcbiAgICAvLyAoZmxvdykuXG4gICAgLy8gQXMgd2UgY2Fu4oCZdCBlc2NhcGUgb3Igc28gdG8gcHJldmVudCBpdCBmcm9tIGhhcHBlbmluZywgd2UgdGFrZSBhIHNvbWV3aGF0XG4gICAgLy8gcmVhc29uYWJsZSBhcHByb2FjaDogcmVwbGFjZSB0aGF0IGVvbCB3aXRoIGEgc3BhY2UuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vaXNzdWVzLzE1PlxuICAgIGlmIChcbiAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJlxuICAgICAgKGJlZm9yZSA9PT0gJ1xccicgfHwgYmVmb3JlID09PSAnXFxuJykgJiZcbiAgICAgIGNoaWxkLnR5cGUgPT09ICdodG1sJ1xuICAgICkge1xuICAgICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdID0gcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdLnJlcGxhY2UoXG4gICAgICAgIC8oXFxyP1xcbnxcXHIpJC8sXG4gICAgICAgICcgJ1xuICAgICAgKVxuICAgICAgYmVmb3JlID0gJyAnXG4gICAgfVxuXG4gICAgcmVzdWx0cy5wdXNoKFxuICAgICAgY29udGV4dC5oYW5kbGUoY2hpbGQsIHBhcmVudCwgY29udGV4dCwge1xuICAgICAgICBiZWZvcmU6IGJlZm9yZSxcbiAgICAgICAgYWZ0ZXI6IGFmdGVyXG4gICAgICB9KVxuICAgIClcblxuICAgIGJlZm9yZSA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXS5zbGljZSgtMSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzLmpvaW4oJycpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGluZGVudExpbmVzXG5cbnZhciBlb2wgPSAvXFxyP1xcbnxcXHIvZ1xuXG5mdW5jdGlvbiBpbmRlbnRMaW5lcyh2YWx1ZSwgbWFwKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc3RhcnQgPSAwXG4gIHZhciBsaW5lID0gMFxuICB2YXIgbWF0Y2hcblxuICB3aGlsZSAoKG1hdGNoID0gZW9sLmV4ZWModmFsdWUpKSkge1xuICAgIG9uZSh2YWx1ZS5zbGljZShzdGFydCwgbWF0Y2guaW5kZXgpKVxuICAgIHJlc3VsdC5wdXNoKG1hdGNoWzBdKVxuICAgIHN0YXJ0ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICBsaW5lKytcbiAgfVxuXG4gIG9uZSh2YWx1ZS5zbGljZShzdGFydCkpXG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKVxuXG4gIGZ1bmN0aW9uIG9uZSh2YWx1ZSkge1xuICAgIHJlc3VsdC5wdXNoKG1hcCh2YWx1ZSwgbGluZSwgIXZhbHVlKSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwYXR0ZXJuQ29tcGlsZVxuXG5mdW5jdGlvbiBwYXR0ZXJuQ29tcGlsZShwYXR0ZXJuKSB7XG4gIHZhciBiZWZvcmVcbiAgdmFyIGFmdGVyXG5cbiAgaWYgKCFwYXR0ZXJuLl9jb21waWxlZCkge1xuICAgIGJlZm9yZSA9IHBhdHRlcm4uYmVmb3JlID8gJyg/OicgKyBwYXR0ZXJuLmJlZm9yZSArICcpJyA6ICcnXG4gICAgYWZ0ZXIgPSBwYXR0ZXJuLmFmdGVyID8gJyg/OicgKyBwYXR0ZXJuLmFmdGVyICsgJyknIDogJydcblxuICAgIGlmIChwYXR0ZXJuLmF0QnJlYWspIHtcbiAgICAgIGJlZm9yZSA9ICdbXFxcXHJcXFxcbl1bXFxcXHQgXSonICsgYmVmb3JlXG4gICAgfVxuXG4gICAgcGF0dGVybi5fY29tcGlsZWQgPSBuZXcgUmVnRXhwKFxuICAgICAgKGJlZm9yZSA/ICcoJyArIGJlZm9yZSArICcpJyA6ICcnKSArXG4gICAgICAgICgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS8udGVzdChwYXR0ZXJuLmNoYXJhY3RlcikgPyAnXFxcXCcgOiAnJykgK1xuICAgICAgICBwYXR0ZXJuLmNoYXJhY3RlciArXG4gICAgICAgIChhZnRlciB8fCAnJyksXG4gICAgICAnZydcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGF0dGVybi5fY29tcGlsZWRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9zeW50YXgnKVxuIiwidmFyIGFzY2lpQWxwaGEgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktYWxwaGEnKVxudmFyIGFzY2lpQWxwaGFudW1lcmljID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYycpXG52YXIgYXNjaWlDb250cm9sID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWNvbnRyb2wnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24nKVxudmFyIHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtd2hpdGVzcGFjZScpXG5cbnZhciB3d3cgPSB7dG9rZW5pemU6IHRva2VuaXplV3d3LCBwYXJ0aWFsOiB0cnVlfVxudmFyIGRvbWFpbiA9IHt0b2tlbml6ZTogdG9rZW5pemVEb21haW4sIHBhcnRpYWw6IHRydWV9XG52YXIgcGF0aCA9IHt0b2tlbml6ZTogdG9rZW5pemVQYXRoLCBwYXJ0aWFsOiB0cnVlfVxudmFyIHB1bmN0dWF0aW9uID0ge3Rva2VuaXplOiB0b2tlbml6ZVB1bmN0dWF0aW9uLCBwYXJ0aWFsOiB0cnVlfVxudmFyIG5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlID0ge1xuICB0b2tlbml6ZTogdG9rZW5pemVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSxcbiAgcGFydGlhbDogdHJ1ZVxufVxuXG52YXIgd3d3QXV0b2xpbmsgPSB7dG9rZW5pemU6IHRva2VuaXplV3d3QXV0b2xpbmssIHByZXZpb3VzOiBwcmV2aW91c1d3d31cbnZhciBodHRwQXV0b2xpbmsgPSB7dG9rZW5pemU6IHRva2VuaXplSHR0cEF1dG9saW5rLCBwcmV2aW91czogcHJldmlvdXNIdHRwfVxudmFyIGVtYWlsQXV0b2xpbmsgPSB7dG9rZW5pemU6IHRva2VuaXplRW1haWxBdXRvbGluaywgcHJldmlvdXM6IHByZXZpb3VzRW1haWx9XG5cbnZhciB0ZXh0ID0ge31cblxuLy8gRXhwb3J0IGhvb2tlZCBjb25zdHJ1Y3RzLlxuZXhwb3J0cy50ZXh0ID0gdGV4dFxuXG4vLyBgMGBcbnZhciBjb2RlID0gNDhcblxuLy8gV2hpbGUgdGhlIGNvZGUgaXMgc21hbGxlciB0aGFuIGB7YC5cbndoaWxlIChjb2RlIDwgMTIzKSB7XG4gIHRleHRbY29kZV0gPSBlbWFpbEF1dG9saW5rXG4gIGNvZGUrK1xuICAvLyBKdW1wIGZyb20gYDpgIC0+IGBBYFxuICBpZiAoY29kZSA9PT0gNTgpIGNvZGUgPSA2NVxuICAvLyBKdW1wIGZyb20gYFtgIC0+IGBhYFxuICBlbHNlIGlmIChjb2RlID09PSA5MSkgY29kZSA9IDk3XG59XG5cbi8vIGArYFxudGV4dFs0M10gPSBlbWFpbEF1dG9saW5rXG4vLyBgLWBcbnRleHRbNDVdID0gZW1haWxBdXRvbGlua1xuLy8gYC5gXG50ZXh0WzQ2XSA9IGVtYWlsQXV0b2xpbmtcbi8vIGBfYFxudGV4dFs5NV0gPSBlbWFpbEF1dG9saW5rXG4vLyBgaGAuXG50ZXh0WzcyXSA9IFtlbWFpbEF1dG9saW5rLCBodHRwQXV0b2xpbmtdXG50ZXh0WzEwNF0gPSBbZW1haWxBdXRvbGluaywgaHR0cEF1dG9saW5rXVxuLy8gYHdgLlxudGV4dFs4N10gPSBbZW1haWxBdXRvbGluaywgd3d3QXV0b2xpbmtdXG50ZXh0WzExOV0gPSBbZW1haWxBdXRvbGluaywgd3d3QXV0b2xpbmtdXG5cbmZ1bmN0aW9uIHRva2VuaXplRW1haWxBdXRvbGluayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaGFzRG90XG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gaG9va3MuICovXG4gICAgaWYgKFxuICAgICAgIWdmbUF0ZXh0KGNvZGUpIHx8XG4gICAgICAhcHJldmlvdXNFbWFpbChzZWxmLnByZXZpb3VzKSB8fFxuICAgICAgcHJldmlvdXMoc2VsZi5ldmVudHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGl0ZXJhbEF1dG9saW5rJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaXRlcmFsQXV0b2xpbmtFbWFpbCcpXG4gICAgcmV0dXJuIGF0ZXh0KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdGV4dChjb2RlKSB7XG4gICAgaWYgKGdmbUF0ZXh0KGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBhdGV4dFxuICAgIH1cblxuICAgIC8vIGBAYFxuICAgIGlmIChjb2RlID09PSA2NCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gbGFiZWxcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbChjb2RlKSB7XG4gICAgLy8gYC5gXG4gICAgaWYgKGNvZGUgPT09IDQ2KSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhwdW5jdHVhdGlvbiwgZG9uZSwgZG90Q29udGludWF0aW9uKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIC8vIGAtYFxuICAgICAgY29kZSA9PT0gNDUgfHxcbiAgICAgIC8vIGBfYFxuICAgICAgY29kZSA9PT0gOTVcbiAgICApIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHB1bmN0dWF0aW9uLCBub2ssIGRhc2hPclVuZGVyc2NvcmVDb250aW51YXRpb24pKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBkb25lKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb3RDb250aW51YXRpb24oY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGhhc0RvdCA9IHRydWVcbiAgICByZXR1cm4gbGFiZWxcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhc2hPclVuZGVyc2NvcmVDb250aW51YXRpb24oY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBhZnRlckRhc2hPclVuZGVyc2NvcmVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyRGFzaE9yVW5kZXJzY29yZShjb2RlKSB7XG4gICAgLy8gYC5gXG4gICAgaWYgKGNvZGUgPT09IDQ2KSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhwdW5jdHVhdGlvbiwgbm9rLCBkb3RDb250aW51YXRpb24pKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb25lKGNvZGUpIHtcbiAgICBpZiAoaGFzRG90KSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpdGVyYWxBdXRvbGlua0VtYWlsJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVd3d0F1dG9saW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gaG9va3MuICovXG4gICAgaWYgKFxuICAgICAgKGNvZGUgIT09IDg3ICYmIGNvZGUgLSAzMiAhPT0gODcpIHx8XG4gICAgICAhcHJldmlvdXNXd3coc2VsZi5wcmV2aW91cykgfHxcbiAgICAgIHByZXZpb3VzKHNlbGYuZXZlbnRzKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpdGVyYWxBdXRvbGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignbGl0ZXJhbEF1dG9saW5rV3d3JylcbiAgICAvLyBGb3IgYHd3dy5gIHdlIGNoZWNrIGluc3RlYWQgb2YgYXR0ZW1wdCwgYmVjYXVzZSB3aGVuIGl0IG1hdGNoZXMsIEdIXG4gICAgLy8gdHJlYXRzIGl0IGFzIHBhcnQgb2YgYSBkb21haW4gKHllcywgaXQgc2F5cyBhIHZhbGlkIGRvbWFpbiBtdXN0IGNvbWVcbiAgICAvLyBhZnRlciBgd3d3LmAsIGJ1dCB0aGF04oCZcyBub3QgaG93IGl04oCZcyBpbXBsZW1lbnRlZCBieSB0aGVtKS5cbiAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgIHd3dyxcbiAgICAgIGVmZmVjdHMuYXR0ZW1wdChkb21haW4sIGVmZmVjdHMuYXR0ZW1wdChwYXRoLCBkb25lKSwgbm9rKSxcbiAgICAgIG5va1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rV3d3JylcbiAgICBlZmZlY3RzLmV4aXQoJ2xpdGVyYWxBdXRvbGluaycpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVIdHRwQXV0b2xpbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBob29rcy4gKi9cbiAgICBpZiAoXG4gICAgICAoY29kZSAhPT0gNzIgJiYgY29kZSAtIDMyICE9PSA3MikgfHxcbiAgICAgICFwcmV2aW91c0h0dHAoc2VsZi5wcmV2aW91cykgfHxcbiAgICAgIHByZXZpb3VzKHNlbGYuZXZlbnRzKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpdGVyYWxBdXRvbGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignbGl0ZXJhbEF1dG9saW5rSHR0cCcpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHQxXG4gIH1cblxuICBmdW5jdGlvbiB0MShjb2RlKSB7XG4gICAgLy8gYHRgXG4gICAgaWYgKGNvZGUgPT09IDg0IHx8IGNvZGUgLSAzMiA9PT0gODQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHQyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdDIoY29kZSkge1xuICAgIC8vIGB0YFxuICAgIGlmIChjb2RlID09PSA4NCB8fCBjb2RlIC0gMzIgPT09IDg0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBwXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gcChjb2RlKSB7XG4gICAgLy8gYHBgXG4gICAgaWYgKGNvZGUgPT09IDgwIHx8IGNvZGUgLSAzMiA9PT0gODApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzKGNvZGUpIHtcbiAgICAvLyBgc2BcbiAgICBpZiAoY29kZSA9PT0gODMgfHwgY29kZSAtIDMyID09PSA4Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29sb25cbiAgICB9XG5cbiAgICByZXR1cm4gY29sb24oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbG9uKGNvZGUpIHtcbiAgICAvLyBgOmBcbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNsYXNoMVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsYXNoMShjb2RlKSB7XG4gICAgLy8gYC9gXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzbGFzaDJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzbGFzaDIoY29kZSkge1xuICAgIC8vIGAvYFxuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGFzY2lpQ29udHJvbChjb2RlKSB8fFxuICAgICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSkgfHxcbiAgICAgIHVuaWNvZGVQdW5jdHVhdGlvbihjb2RlKVxuICAgICAgPyBub2soY29kZSlcbiAgICAgIDogZWZmZWN0cy5hdHRlbXB0KGRvbWFpbiwgZWZmZWN0cy5hdHRlbXB0KHBhdGgsIGRvbmUpLCBub2spKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb25lKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ2xpdGVyYWxBdXRvbGlua0h0dHAnKVxuICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVd3dyhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBBc3N1bWUgYSBgd2AuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHcyXG4gIH1cblxuICBmdW5jdGlvbiB3Mihjb2RlKSB7XG4gICAgLy8gYHdgXG4gICAgaWYgKGNvZGUgPT09IDg3IHx8IGNvZGUgLSAzMiA9PT0gODcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHczXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdzMoY29kZSkge1xuICAgIC8vIGB3YFxuICAgIGlmIChjb2RlID09PSA4NyB8fCBjb2RlIC0gMzIgPT09IDg3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkb3RcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkb3QoY29kZSkge1xuICAgIC8vIGAuYFxuICAgIGlmIChjb2RlID09PSA0Nikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gbm9rKGNvZGUpIDogb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZURvbWFpbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBoYXNVbmRlcnNjb3JlSW5MYXN0U2VnbWVudFxuICB2YXIgaGFzVW5kZXJzY29yZUluTGFzdExhc3RTZWdtZW50XG5cbiAgcmV0dXJuIGRvbWFpblxuXG4gIGZ1bmN0aW9uIGRvbWFpbihjb2RlKSB7XG4gICAgLy8gYCZgXG4gICAgaWYgKGNvZGUgPT09IDM4KSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgbmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIHB1bmN0dWF0aW9uQ29udGludWF0aW9uXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qIGAuYCAqLyB8fCBjb2RlID09PSA5NSAvKiBgX2AgKi8pIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHB1bmN0dWF0aW9uLCBkb25lLCBwdW5jdHVhdGlvbkNvbnRpbnVhdGlvbikoY29kZSlcbiAgICB9XG5cbiAgICAvLyBHSCBkb2N1bWVudHMgdGhhdCBvbmx5IGFscGhhbnVtZXJpY3MgKG90aGVyIHRoYW4gYC1gLCBgLmAsIGFuZCBgX2ApIGNhblxuICAgIC8vIG9jY3VyLCB3aGljaCBzb3VuZHMgbGlrZSBBU0NJSSBvbmx5LCBidXQgdGhleSBhbHNvIHN1cHBvcnQgYHd3dy7pu57nnIsuY29tYCxcbiAgICAvLyBzbyB0aGF04oCZcyBVbmljb2RlLlxuICAgIC8vIEluc3RlYWQgb2Ygc29tZSBuZXcgcHJvZHVjdGlvbiBmb3IgVW5pY29kZSBhbHBoYW51bWVyaWNzLCBtYXJrZG93blxuICAgIC8vIGFscmVhZHkgaGFzIHRoYXQgZm9yIFVuaWNvZGUgcHVuY3R1YXRpb24gYW5kIHdoaXRlc3BhY2UsIHNvIHVzZSB0aG9zZS5cbiAgICBpZiAoXG4gICAgICBhc2NpaUNvbnRyb2woY29kZSkgfHxcbiAgICAgIHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgICAoY29kZSAhPT0gNDUgLyogYC1gICovICYmIHVuaWNvZGVQdW5jdHVhdGlvbihjb2RlKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkb25lKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRvbWFpblxuICB9XG5cbiAgZnVuY3Rpb24gcHVuY3R1YXRpb25Db250aW51YXRpb24oY29kZSkge1xuICAgIC8vIGAuYFxuICAgIGlmIChjb2RlID09PSA0Nikge1xuICAgICAgaGFzVW5kZXJzY29yZUluTGFzdExhc3RTZWdtZW50ID0gaGFzVW5kZXJzY29yZUluTGFzdFNlZ21lbnRcbiAgICAgIGhhc1VuZGVyc2NvcmVJbkxhc3RTZWdtZW50ID0gdW5kZWZpbmVkXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkb21haW5cbiAgICB9XG5cbiAgICAvLyBgX2BcbiAgICBpZiAoY29kZSA9PT0gOTUpIGhhc1VuZGVyc2NvcmVJbkxhc3RTZWdtZW50ID0gdHJ1ZVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRvbWFpblxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShjb2RlKSB7XG4gICAgaWYgKCFoYXNVbmRlcnNjb3JlSW5MYXN0TGFzdFNlZ21lbnQgJiYgIWhhc1VuZGVyc2NvcmVJbkxhc3RTZWdtZW50KSB7XG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVQYXRoKGVmZmVjdHMsIG9rKSB7XG4gIHZhciBiYWxhbmNlID0gMFxuXG4gIHJldHVybiBpblBhdGhcblxuICBmdW5jdGlvbiBpblBhdGgoY29kZSkge1xuICAgIC8vIGAmYFxuICAgIGlmIChjb2RlID09PSAzOCkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIG5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlLFxuICAgICAgICBvayxcbiAgICAgICAgY29udGludWVkUHVuY3R1YXRpb25cbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBgKGBcbiAgICBpZiAoY29kZSA9PT0gNDApIHtcbiAgICAgIGJhbGFuY2UrK1xuICAgIH1cblxuICAgIC8vIGApYFxuICAgIGlmIChjb2RlID09PSA0MSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIHB1bmN0dWF0aW9uLFxuICAgICAgICBwYXJlbkF0UGF0aEVuZCxcbiAgICAgICAgY29udGludWVkUHVuY3R1YXRpb25cbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICBpZiAocGF0aEVuZChjb2RlKSkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKHRyYWlsaW5nUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHB1bmN0dWF0aW9uLCBvaywgY29udGludWVkUHVuY3R1YXRpb24pKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGluUGF0aFxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVkUHVuY3R1YXRpb24oY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBpblBhdGhcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmVuQXRQYXRoRW5kKGNvZGUpIHtcbiAgICBiYWxhbmNlLS1cbiAgICByZXR1cm4gYmFsYW5jZSA8IDAgPyBvayhjb2RlKSA6IGNvbnRpbnVlZFB1bmN0dWF0aW9uKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVOYW1lZENoYXJhY3RlclJlZmVyZW5jZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBBc3N1bWUgYW4gYW1wZXJzYW5kLlxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBpbnNpZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgaWYgKGFzY2lpQWxwaGEoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluc2lkZVxuICAgIH1cblxuICAgIC8vIGA7YFxuICAgIGlmIChjb2RlID09PSA1OSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgLy8gSWYgdGhlIG5hbWVkIGNoYXJhY3RlciByZWZlcmVuY2UgaXMgZm9sbG93ZWQgYnkgdGhlIGVuZCBvZiB0aGUgcGF0aCwgaXTigJlzXG4gICAgLy8gbm90IGNvbnRpbnVlZCBwdW5jdHVhdGlvbi5cbiAgICByZXR1cm4gcGF0aEVuZChjb2RlKSA/IG9rKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVQdW5jdHVhdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBBbHdheXMgYSB2YWxpZCB0cmFpbGluZyBwdW5jdHVhdGlvbiBtYXJrZXIuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGFmdGVyXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgLy8gQ2hlY2sgdGhlIG5leHQuXG4gICAgaWYgKHRyYWlsaW5nUHVuY3R1YXRpb24oY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHB1bmN0dWF0aW9uIG1hcmtlciBpcyBmb2xsb3dlZCBieSB0aGUgZW5kIG9mIHRoZSBwYXRoLCBpdOKAmXMgbm90XG4gICAgLy8gY29udGludWVkIHB1bmN0dWF0aW9uLlxuICAgIHJldHVybiBwYXRoRW5kKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFpbGluZ1B1bmN0dWF0aW9uKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBgIWBcbiAgICBjb2RlID09PSAzMyB8fFxuICAgIC8vIGBcImBcbiAgICBjb2RlID09PSAzNCB8fFxuICAgIC8vIGAnYFxuICAgIGNvZGUgPT09IDM5IHx8XG4gICAgLy8gYClgXG4gICAgY29kZSA9PT0gNDEgfHxcbiAgICAvLyBgKmBcbiAgICBjb2RlID09PSA0MiB8fFxuICAgIC8vIGAsYFxuICAgIGNvZGUgPT09IDQ0IHx8XG4gICAgLy8gYC5gXG4gICAgY29kZSA9PT0gNDYgfHxcbiAgICAvLyBgOmBcbiAgICBjb2RlID09PSA1OCB8fFxuICAgIC8vIGA7YFxuICAgIGNvZGUgPT09IDU5IHx8XG4gICAgLy8gYDxgXG4gICAgY29kZSA9PT0gNjAgfHxcbiAgICAvLyBgP2BcbiAgICBjb2RlID09PSA2MyB8fFxuICAgIC8vIGBfYC5cbiAgICBjb2RlID09PSA5NSB8fFxuICAgIC8vIGB+YFxuICAgIGNvZGUgPT09IDEyNlxuICApXG59XG5cbmZ1bmN0aW9uIHBhdGhFbmQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIEVPRi5cbiAgICBjb2RlID09PSBudWxsIHx8XG4gICAgLy8gQ1IsIExGLCBDUkxGLCBIVCwgVlMuXG4gICAgY29kZSA8IDAgfHxcbiAgICAvLyBTcGFjZS5cbiAgICBjb2RlID09PSAzMiB8fFxuICAgIC8vIGA8YFxuICAgIGNvZGUgPT09IDYwXG4gIClcbn1cblxuZnVuY3Rpb24gZ2ZtQXRleHQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIGNvZGUgPT09IDQzIC8qIGArYCAqLyB8fFxuICAgIGNvZGUgPT09IDQ1IC8qIGAtYCAqLyB8fFxuICAgIGNvZGUgPT09IDQ2IC8qIGAuYCAqLyB8fFxuICAgIGNvZGUgPT09IDk1IC8qIGBfYCAqLyB8fFxuICAgIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpXG4gIClcbn1cblxuZnVuY3Rpb24gcHJldmlvdXNXd3coY29kZSkge1xuICByZXR1cm4gKFxuICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICBjb2RlIDwgMCB8fFxuICAgIGNvZGUgPT09IDMyIC8qIGAgYCAqLyB8fFxuICAgIGNvZGUgPT09IDQwIC8qIGAoYCAqLyB8fFxuICAgIGNvZGUgPT09IDQyIC8qIGAqYCAqLyB8fFxuICAgIGNvZGUgPT09IDk1IC8qIGBfYCAqLyB8fFxuICAgIGNvZGUgPT09IDEyNiAvKiBgfmAgKi9cbiAgKVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0h0dHAoY29kZSkge1xuICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCAhYXNjaWlBbHBoYShjb2RlKVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0VtYWlsKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgIT09IDQ3IC8qIGAvYCAqLyAmJiBwcmV2aW91c0h0dHAoY29kZSlcbn1cblxuZnVuY3Rpb24gcHJldmlvdXMoZXZlbnRzKSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChcbiAgICAgIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsYWJlbExpbmsnIHx8XG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xhYmVsSW1hZ2UnKSAmJlxuICAgICAgIWV2ZW50c1tpbmRleF1bMV0uX2JhbGFuY2VkXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxudmFyIGNsYXNzaWZ5Q2hhcmFjdGVyID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9jbGFzc2lmeS1jaGFyYWN0ZXInKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciByZXNvbHZlQWxsID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9yZXNvbHZlLWFsbCcpXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvc2hhbGxvdycpXG5cbmZ1bmN0aW9uIGNyZWF0ZShvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIHNpbmdsZSA9IHNldHRpbmdzLnNpbmdsZVRpbGRlXG4gIHZhciB0b2tlbml6ZXIgPSB7XG4gICAgdG9rZW5pemU6IHRva2VuaXplU3RyaWtldGhyb3VnaCxcbiAgICByZXNvbHZlQWxsOiByZXNvbHZlQWxsU3RyaWtldGhyb3VnaFxuICB9XG5cbiAgaWYgKHNpbmdsZSA9PT0gbnVsbCB8fCBzaW5nbGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNpbmdsZSA9IHRydWVcbiAgfVxuXG4gIHJldHVybiB7dGV4dDogezEyNjogdG9rZW5pemVyfSwgaW5zaWRlU3Bhbjoge251bGw6IHRva2VuaXplcn19XG5cbiAgLy8gVGFrZSBldmVudHMgYW5kIHJlc29sdmUgc3RyaWtldGhyb3VnaC5cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2goZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgc3RyaWtldGhyb3VnaFxuICAgIHZhciB0ZXh0XG4gICAgdmFyIG9wZW5cbiAgICB2YXIgbmV4dEV2ZW50c1xuXG4gICAgLy8gV2FsayB0aHJvdWdoIGFsbCBldmVudHMuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gY2xvc2UuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLl9jbG9zZVxuICAgICAgKSB7XG4gICAgICAgIG9wZW4gPSBpbmRleFxuXG4gICAgICAgIC8vIE5vdyB3YWxrIGJhY2sgdG8gZmluZCBhbiBvcGVuZXIuXG4gICAgICAgIHdoaWxlIChvcGVuLS0pIHtcbiAgICAgICAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gb3BlbiB0aGUgY2xvc2VyLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVswXSA9PT0gJ2V4aXQnICYmXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5fb3BlbiAmJlxuICAgICAgICAgICAgLy8gSWYgdGhlIHNpemVzIGFyZSB0aGUgc2FtZTpcbiAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0ID09PVxuICAgICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2UnXG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0udHlwZSA9ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2UnXG5cbiAgICAgICAgICAgIHN0cmlrZXRocm91Z2ggPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICAgICAgICAgICAgZW5kOiBzaGFsbG93KGV2ZW50c1tpbmRleF1bMV0uZW5kKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaWtldGhyb3VnaFRleHQnLFxuICAgICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uZW5kKSxcbiAgICAgICAgICAgICAgZW5kOiBzaGFsbG93KGV2ZW50c1tpbmRleF1bMV0uc3RhcnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW5pbmcuXG4gICAgICAgICAgICBuZXh0RXZlbnRzID0gW1xuICAgICAgICAgICAgICBbJ2VudGVyJywgc3RyaWtldGhyb3VnaCwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF1cbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgLy8gQmV0d2Vlbi5cbiAgICAgICAgICAgIGNodW5rZWRTcGxpY2UoXG4gICAgICAgICAgICAgIG5leHRFdmVudHMsXG4gICAgICAgICAgICAgIG5leHRFdmVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICByZXNvbHZlQWxsKFxuICAgICAgICAgICAgICAgIGNvbnRleHQucGFyc2VyLmNvbnN0cnVjdHMuaW5zaWRlU3Bhbi5udWxsLFxuICAgICAgICAgICAgICAgIGV2ZW50cy5zbGljZShvcGVuICsgMSwgaW5kZXgpLFxuICAgICAgICAgICAgICAgIGNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAvLyBDbG9zaW5nLlxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0Jywgc3RyaWtldGhyb3VnaCwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBvcGVuIC0gMSwgaW5kZXggLSBvcGVuICsgMywgbmV4dEV2ZW50cylcblxuICAgICAgICAgICAgaW5kZXggPSBvcGVuICsgbmV4dEV2ZW50cy5sZW5ndGggLSAyXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZW1vdmVSZW1haW5pbmdTZXF1ZW5jZXMoZXZlbnRzKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUmVtYWluaW5nU2VxdWVuY2VzKGV2ZW50cykge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxlbmd0aCA9IGV2ZW50cy5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5Jykge1xuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPSAnZGF0YSdcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICBmdW5jdGlvbiB0b2tlbml6ZVN0cmlrZXRocm91Z2goZWZmZWN0cywgb2ssIG5vaykge1xuICAgIHZhciBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNcbiAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHNcbiAgICB2YXIgc2l6ZSA9IDBcblxuICAgIHJldHVybiBzdGFydFxuXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgaWYgKFxuICAgICAgICBjb2RlICE9PSAxMjYgfHxcbiAgICAgICAgKHByZXZpb3VzID09PSAxMjYgJiZcbiAgICAgICAgICBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdWzFdLnR5cGUgIT09ICdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBub2soY29kZSlcbiAgICAgIH1cblxuICAgICAgZWZmZWN0cy5lbnRlcignc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JylcbiAgICAgIHJldHVybiBtb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9yZShjb2RlKSB7XG4gICAgICB2YXIgYmVmb3JlID0gY2xhc3NpZnlDaGFyYWN0ZXIocHJldmlvdXMpXG4gICAgICB2YXIgdG9rZW5cbiAgICAgIHZhciBhZnRlclxuXG4gICAgICBpZiAoY29kZSA9PT0gMTI2KSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIHRoaXJkIG1hcmtlciwgZXhpdC5cbiAgICAgICAgaWYgKHNpemUgPiAxKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIG1vcmVcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPCAyICYmICFzaW5nbGUpIHJldHVybiBub2soY29kZSlcbiAgICAgIHRva2VuID0gZWZmZWN0cy5leGl0KCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgYWZ0ZXIgPSBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKVxuICAgICAgdG9rZW4uX29wZW4gPSAhYWZ0ZXIgfHwgKGFmdGVyID09PSAyICYmIGJlZm9yZSlcbiAgICAgIHRva2VuLl9jbG9zZSA9ICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gMiAmJiBhZnRlcilcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3N5bnRheCcpXG4iLCJleHBvcnRzLmZsb3cgPSB7XG4gIG51bGw6IHt0b2tlbml6ZTogdG9rZW5pemVUYWJsZSwgcmVzb2x2ZTogcmVzb2x2ZVRhYmxlLCBpbnRlcnJ1cHRpYmxlOiB0cnVlfVxufVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXNwYWNlJylcblxudmFyIHNldGV4dFVuZGVybGluZU1pbmkgPSB7dG9rZW5pemU6IHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lTWluaSwgcGFydGlhbDogdHJ1ZX1cbnZhciBuZXh0UHJlZml4ZWRPckJsYW5rID0ge3Rva2VuaXplOiB0b2tlbml6ZU5leHRQcmVmaXhlZE9yQmxhbmssIHBhcnRpYWw6IHRydWV9XG5cbmZ1bmN0aW9uIHJlc29sdmVUYWJsZShldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGxlbmd0aCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHRva2VuXG4gIHZhciBpbkhlYWRcbiAgdmFyIGluRGVsaW1pdGVyUm93XG4gIHZhciBpblJvd1xuICB2YXIgY2VsbFxuICB2YXIgY29udGVudFxuICB2YXIgdGV4dFxuICB2YXIgY29udGVudFN0YXJ0XG4gIHZhciBjb250ZW50RW5kXG4gIHZhciBjZWxsU3RhcnRcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRva2VuID0gZXZlbnRzW2luZGV4XVsxXVxuXG4gICAgaWYgKGluUm93KSB7XG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RlbXBvcmFyeVRhYmxlQ2VsbENvbnRlbnQnKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydCA9IGNvbnRlbnRTdGFydCB8fCBpbmRleFxuICAgICAgICBjb250ZW50RW5kID0gaW5kZXhcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAvLyBDb21iaW5lIHNlcGFyYXRlIGNvbnRlbnQgcGFydHMgaW50byBvbmUuXG4gICAgICAgICh0b2tlbi50eXBlID09PSAndGFibGVDZWxsRGl2aWRlcicgfHwgdG9rZW4udHlwZSA9PT0gJ3RhYmxlUm93JykgJiZcbiAgICAgICAgY29udGVudEVuZFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRlbnQgPSB7XG4gICAgICAgICAgdHlwZTogJ3RhYmxlQ29udGVudCcsXG4gICAgICAgICAgc3RhcnQ6IGV2ZW50c1tjb250ZW50U3RhcnRdWzFdLnN0YXJ0LFxuICAgICAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZFxuICAgICAgICB9XG4gICAgICAgIHRleHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2NodW5rVGV4dCcsXG4gICAgICAgICAgc3RhcnQ6IGNvbnRlbnQuc3RhcnQsXG4gICAgICAgICAgZW5kOiBjb250ZW50LmVuZCxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ3RleHQnXG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMuc3BsaWNlKFxuICAgICAgICAgIGNvbnRlbnRTdGFydCxcbiAgICAgICAgICBjb250ZW50RW5kIC0gY29udGVudFN0YXJ0ICsgMSxcbiAgICAgICAgICBbJ2VudGVyJywgY29udGVudCwgY29udGV4dF0sXG4gICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgIFsnZXhpdCcsIGNvbnRlbnQsIGNvbnRleHRdXG4gICAgICAgIClcbiAgICAgICAgaW5kZXggLT0gY29udGVudEVuZCAtIGNvbnRlbnRTdGFydCAtIDNcbiAgICAgICAgbGVuZ3RoID0gZXZlbnRzLmxlbmd0aFxuICAgICAgICBjb250ZW50U3RhcnQgPSB1bmRlZmluZWRcbiAgICAgICAgY29udGVudEVuZCA9IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdleGl0JyAmJlxuICAgICAgY2VsbFN0YXJ0ICYmXG4gICAgICBjZWxsU3RhcnQgKyAxIDwgaW5kZXggJiZcbiAgICAgICh0b2tlbi50eXBlID09PSAndGFibGVDZWxsRGl2aWRlcicgfHxcbiAgICAgICAgKHRva2VuLnR5cGUgPT09ICd0YWJsZVJvdycgJiZcbiAgICAgICAgICAoY2VsbFN0YXJ0ICsgMyA8IGluZGV4IHx8XG4gICAgICAgICAgICBldmVudHNbY2VsbFN0YXJ0XVsxXS50eXBlICE9PSAnd2hpdGVzcGFjZScpKSlcbiAgICApIHtcbiAgICAgIGNlbGwgPSB7XG4gICAgICAgIHR5cGU6IGluRGVsaW1pdGVyUm93XG4gICAgICAgICAgPyAndGFibGVEZWxpbWl0ZXInXG4gICAgICAgICAgOiBpbkhlYWRcbiAgICAgICAgICA/ICd0YWJsZUhlYWRlcidcbiAgICAgICAgICA6ICd0YWJsZURhdGEnLFxuICAgICAgICBzdGFydDogZXZlbnRzW2NlbGxTdGFydF1bMV0uc3RhcnQsXG4gICAgICAgIGVuZDogZXZlbnRzW2luZGV4XVsxXS5lbmRcbiAgICAgIH1cbiAgICAgIGV2ZW50cy5zcGxpY2UoaW5kZXggKyAodG9rZW4udHlwZSA9PT0gJ3RhYmxlQ2VsbERpdmlkZXInID8gMSA6IDApLCAwLCBbXG4gICAgICAgICdleGl0JyxcbiAgICAgICAgY2VsbCxcbiAgICAgICAgY29udGV4dFxuICAgICAgXSlcbiAgICAgIGV2ZW50cy5zcGxpY2UoY2VsbFN0YXJ0LCAwLCBbJ2VudGVyJywgY2VsbCwgY29udGV4dF0pXG4gICAgICBpbmRleCArPSAyXG4gICAgICBsZW5ndGggPSBldmVudHMubGVuZ3RoXG4gICAgICBjZWxsU3RhcnQgPSBpbmRleCArIDFcbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RhYmxlUm93Jykge1xuICAgICAgaW5Sb3cgPSBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInXG5cbiAgICAgIGlmIChpblJvdykge1xuICAgICAgICBjZWxsU3RhcnQgPSBpbmRleCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RhYmxlRGVsaW1pdGVyUm93Jykge1xuICAgICAgaW5EZWxpbWl0ZXJSb3cgPSBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInXG5cbiAgICAgIGlmIChpbkRlbGltaXRlclJvdykge1xuICAgICAgICBjZWxsU3RhcnQgPSBpbmRleCArIDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ3RhYmxlSGVhZCcpIHtcbiAgICAgIGluSGVhZCA9IGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcidcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplVGFibGUoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgYWxpZ24gPSBbXVxuICB2YXIgdGFibGVIZWFkZXJDb3VudCA9IDBcbiAgdmFyIHNlZW5EZWxpbWl0ZXJcbiAgdmFyIGhhc0Rhc2hcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gdXNlZCB0byBiZSBwYXNzZWQgaW4gYmV0YSBtaWNyb21hcmsgdmVyc2lvbnMuICovXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZScpLl9hbGlnbiA9IGFsaWduXG4gICAgZWZmZWN0cy5lbnRlcigndGFibGVIZWFkJylcbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZVJvdycpXG5cbiAgICAvLyBJZiB3ZSBzdGFydCB3aXRoIGEgcGlwZSwgd2Ugb3BlbiBhIGNlbGwgbWFya2VyLlxuICAgIGlmIChjb2RlID09PSAxMjQpIHtcbiAgICAgIHJldHVybiBjZWxsRGl2aWRlckhlYWQoY29kZSlcbiAgICB9XG5cbiAgICB0YWJsZUhlYWRlckNvdW50KytcbiAgICBlZmZlY3RzLmVudGVyKCd0ZW1wb3JhcnlUYWJsZUNlbGxDb250ZW50JylcbiAgICAvLyBDYW7igJl0IGJlIHNwYWNlIG9yIGVvbHMgYXQgdGhlIHN0YXJ0IG9mIGEgY29uc3RydWN0LCBzbyB3ZeKAmXJlIGluIGEgY2VsbC5cbiAgICByZXR1cm4gaW5DZWxsQ29udGVudEhlYWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbGxEaXZpZGVySGVhZChjb2RlKSB7XG4gICAgLy8gQWx3YXlzIGEgcGlwZS5cbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZUNlbGxEaXZpZGVyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlQ2VsbERpdmlkZXInKVxuICAgIHNlZW5EZWxpbWl0ZXIgPSB0cnVlXG4gICAgcmV0dXJuIGNlbGxCcmVha0hlYWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbGxCcmVha0hlYWQoY29kZSkge1xuICAgIC8vIEVPRiwgQ1IsIExGLCBDUkxGLlxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IC01IHx8IGNvZGUgPT09IC00IHx8IGNvZGUgPT09IC0zKSB7XG4gICAgICByZXR1cm4gYXRSb3dFbmRIZWFkKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gSFQsIFZTLCBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3doaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5XaGl0ZXNwYWNlSGVhZFxuICAgIH1cblxuICAgIGlmIChzZWVuRGVsaW1pdGVyKSB7XG4gICAgICBzZWVuRGVsaW1pdGVyID0gdW5kZWZpbmVkXG4gICAgICB0YWJsZUhlYWRlckNvdW50KytcbiAgICB9XG5cbiAgICAvLyBgfGBcbiAgICBpZiAoY29kZSA9PT0gMTI0KSB7XG4gICAgICByZXR1cm4gY2VsbERpdmlkZXJIZWFkKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBjZWxsIGNvbnRlbnQuXG4gICAgZWZmZWN0cy5lbnRlcigndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpXG4gICAgcmV0dXJuIGluQ2VsbENvbnRlbnRIZWFkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbldoaXRlc3BhY2VIZWFkKGNvZGUpIHtcbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5XaGl0ZXNwYWNlSGVhZFxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnd2hpdGVzcGFjZScpXG4gICAgcmV0dXJuIGNlbGxCcmVha0hlYWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluQ2VsbENvbnRlbnRIZWFkKGNvZGUpIHtcbiAgICAvLyBFT0YsIHdoaXRlc3BhY2UsIHBpcGVcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlIDwgMCB8fCBjb2RlID09PSAzMiB8fCBjb2RlID09PSAxMjQpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpXG4gICAgICByZXR1cm4gY2VsbEJyZWFrSGVhZChjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIC8vIGBcXGBcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBpbkNlbGxDb250ZW50RXNjYXBlSGVhZCA6IGluQ2VsbENvbnRlbnRIZWFkXG4gIH1cblxuICBmdW5jdGlvbiBpbkNlbGxDb250ZW50RXNjYXBlSGVhZChjb2RlKSB7XG4gICAgLy8gYFxcYCBvciBgfGBcbiAgICBpZiAoY29kZSA9PT0gOTIgfHwgY29kZSA9PT0gMTI0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbkNlbGxDb250ZW50SGVhZFxuICAgIH1cblxuICAgIC8vIEFueXRoaW5nIGVsc2UuXG4gICAgcmV0dXJuIGluQ2VsbENvbnRlbnRIZWFkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdFJvd0VuZEhlYWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZVJvdycpXG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZUhlYWQnKVxuXG4gICAgLy8gQWx3YXlzIGEgbGluZSBlbmRpbmcuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcblxuICAgIC8vIElmIGEgc2V0ZXh0IGhlYWRpbmcsIGV4aXQuXG4gICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICBzZXRleHRVbmRlcmxpbmVNaW5pLFxuICAgICAgbm9rLFxuICAgICAgLy8gU3VwcG9ydCBhbiBpbmRlbnQgYmVmb3JlIHRoZSBkZWxpbWl0ZXIgcm93LlxuICAgICAgY3JlYXRlU3BhY2UoZWZmZWN0cywgcm93U3RhcnREZWxpbWl0ZXIsICdsaW5lUHJlZml4JywgNClcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiByb3dTdGFydERlbGltaXRlcihjb2RlKSB7XG4gICAgLy8gSWYgdGhlcmXigJlzIGFub3RoZXIgc3BhY2UsIG9yIHdl4oCZcmUgYXQgdGhlIEVPTC9FT0YsIGV4aXQuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA8IDAgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZURlbGltaXRlclJvdycpXG4gICAgcmV0dXJuIGF0RGVsaW1pdGVyUm93QnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0RGVsaW1pdGVyUm93QnJlYWsoY29kZSkge1xuICAgIC8vIEVPRiwgQ1IsIExGLCBDUkxGLlxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IC01IHx8IGNvZGUgPT09IC00IHx8IGNvZGUgPT09IC0zKSB7XG4gICAgICByZXR1cm4gcm93RW5kRGVsaW1pdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gSFQsIFZTLCBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3doaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5XaGl0ZXNwYWNlRGVsaW1pdGVyXG4gICAgfVxuXG4gICAgLy8gYC1gXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YWJsZURlbGltaXRlckZpbGxlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGhhc0Rhc2ggPSB0cnVlXG4gICAgICBhbGlnbi5wdXNoKG51bGwpXG4gICAgICByZXR1cm4gaW5GaWxsZXJEZWxpbWl0ZXJcbiAgICB9XG5cbiAgICAvLyBgOmBcbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlRGVsaW1pdGVyQWxpZ25tZW50JylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YWJsZURlbGltaXRlckFsaWdubWVudCcpXG4gICAgICBhbGlnbi5wdXNoKCdsZWZ0JylcbiAgICAgIHJldHVybiBhZnRlckxlZnRBbGlnbm1lbnRcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBzdGFydCB3aXRoIGEgcGlwZSwgd2Ugb3BlbiBhIGNlbGwgbWFya2VyLlxuICAgIGlmIChjb2RlID09PSAxMjQpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlQ2VsbERpdmlkZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlQ2VsbERpdmlkZXInKVxuICAgICAgcmV0dXJuIGF0RGVsaW1pdGVyUm93QnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbldoaXRlc3BhY2VEZWxpbWl0ZXIoY29kZSkge1xuICAgIC8vIEhULCBWUywgU1AuXG4gICAgaWYgKGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VEZWxpbWl0ZXJcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3doaXRlc3BhY2UnKVxuICAgIHJldHVybiBhdERlbGltaXRlclJvd0JyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbkZpbGxlckRlbGltaXRlcihjb2RlKSB7XG4gICAgLy8gYC1gXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbkZpbGxlckRlbGltaXRlclxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgndGFibGVEZWxpbWl0ZXJGaWxsZXInKVxuXG4gICAgLy8gYDpgXG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YWJsZURlbGltaXRlckFsaWdubWVudCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFibGVEZWxpbWl0ZXJBbGlnbm1lbnQnKVxuXG4gICAgICBhbGlnblthbGlnbi5sZW5ndGggLSAxXSA9XG4gICAgICAgIGFsaWduW2FsaWduLmxlbmd0aCAtIDFdID09PSAnbGVmdCcgPyAnY2VudGVyJyA6ICdyaWdodCdcblxuICAgICAgcmV0dXJuIGFmdGVyUmlnaHRBbGlnbm1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gYXREZWxpbWl0ZXJSb3dCcmVhayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJMZWZ0QWxpZ25tZW50KGNvZGUpIHtcbiAgICAvLyBgLWBcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlRGVsaW1pdGVyRmlsbGVyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgaGFzRGFzaCA9IHRydWVcbiAgICAgIHJldHVybiBpbkZpbGxlckRlbGltaXRlclxuICAgIH1cblxuICAgIC8vIEFueXRoaW5nIGVsc2UgaXMgbm90IG9rLlxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyUmlnaHRBbGlnbm1lbnQoY29kZSkge1xuICAgIC8vIEVPRiwgQ1IsIExGLCBDUkxGLlxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IC01IHx8IGNvZGUgPT09IC00IHx8IGNvZGUgPT09IC0zKSB7XG4gICAgICByZXR1cm4gcm93RW5kRGVsaW1pdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gSFQsIFZTLCBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3doaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5XaGl0ZXNwYWNlRGVsaW1pdGVyXG4gICAgfVxuXG4gICAgLy8gYHxgXG4gICAgaWYgKGNvZGUgPT09IDEyNCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFibGVDZWxsRGl2aWRlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFibGVDZWxsRGl2aWRlcicpXG4gICAgICByZXR1cm4gYXREZWxpbWl0ZXJSb3dCcmVha1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvd0VuZERlbGltaXRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZURlbGltaXRlclJvdycpXG5cbiAgICAvLyBFeGl0IGlmIHRoZXJlIHdhcyBubyBkYXNoIGF0IGFsbCwgb3IgaWYgdGhlIGhlYWRlciBjZWxsIGNvdW50IGlzIG5vdCB0aGVcbiAgICAvLyBkZWxpbWl0ZXIgY2VsbCBjb3VudC5cbiAgICBpZiAoIWhhc0Rhc2ggfHwgdGFibGVIZWFkZXJDb3VudCAhPT0gYWxpZ24ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0YWJsZUNsb3NlKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVmZmVjdHMuY2hlY2sobmV4dFByZWZpeGVkT3JCbGFuaywgdGFibGVDbG9zZSwgdGFibGVDb250aW51ZSkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhYmxlQ2xvc2UoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgndGFibGUnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFibGVDb250aW51ZShjb2RlKSB7XG4gICAgLy8gQWx3YXlzIGEgbGluZSBlbmRpbmcuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAvLyBXZSBjaGVja2VkIHRoYXQgaXTigJlzIG5vdCBhIHByZWZpeGVkIG9yIGJsYW5rIGxpbmUsIHNvIHdl4oCZcmUgY2VydGFpbiBhXG4gICAgLy8gYm9keSBpcyBjb21pbmcsIHRob3VnaCBpdCBtYXkgYmUgaW5kZW50ZWQuXG4gICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGJvZHlTdGFydCwgJ2xpbmVQcmVmaXgnLCA0KVxuICB9XG5cbiAgZnVuY3Rpb24gYm9keVN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZUJvZHknKVxuICAgIHJldHVybiByb3dTdGFydEJvZHkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvd1N0YXJ0Qm9keShjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigndGFibGVSb3cnKVxuXG4gICAgLy8gSWYgd2Ugc3RhcnQgd2l0aCBhIHBpcGUsIHdlIG9wZW4gYSBjZWxsIG1hcmtlci5cbiAgICBpZiAoY29kZSA9PT0gMTI0KSB7XG4gICAgICByZXR1cm4gY2VsbERpdmlkZXJCb2R5KGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcigndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpXG4gICAgLy8gQ2Fu4oCZdCBiZSBzcGFjZSBvciBlb2xzIGF0IHRoZSBzdGFydCBvZiBhIGNvbnN0cnVjdCwgc28gd2XigJlyZSBpbiBhIGNlbGwuXG4gICAgcmV0dXJuIGluQ2VsbENvbnRlbnRCb2R5KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjZWxsRGl2aWRlckJvZHkoY29kZSkge1xuICAgIC8vIEFsd2F5cyBhIHBpcGUuXG4gICAgZWZmZWN0cy5lbnRlcigndGFibGVDZWxsRGl2aWRlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZUNlbGxEaXZpZGVyJylcbiAgICByZXR1cm4gY2VsbEJyZWFrQm9keVxuICB9XG5cbiAgZnVuY3Rpb24gY2VsbEJyZWFrQm9keShjb2RlKSB7XG4gICAgLy8gRU9GLCBDUiwgTEYsIENSTEYuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiBhdFJvd0VuZEJvZHkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignd2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VCb2R5XG4gICAgfVxuXG4gICAgLy8gYHxgXG4gICAgaWYgKGNvZGUgPT09IDEyNCkge1xuICAgICAgcmV0dXJuIGNlbGxEaXZpZGVyQm9keShjb2RlKVxuICAgIH1cblxuICAgIC8vIEFueXRoaW5nIGVsc2UgaXMgY2VsbCBjb250ZW50LlxuICAgIGVmZmVjdHMuZW50ZXIoJ3RlbXBvcmFyeVRhYmxlQ2VsbENvbnRlbnQnKVxuICAgIHJldHVybiBpbkNlbGxDb250ZW50Qm9keShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5XaGl0ZXNwYWNlQm9keShjb2RlKSB7XG4gICAgLy8gSFQsIFZTLCBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluV2hpdGVzcGFjZUJvZHlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3doaXRlc3BhY2UnKVxuICAgIHJldHVybiBjZWxsQnJlYWtCb2R5KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbkNlbGxDb250ZW50Qm9keShjb2RlKSB7XG4gICAgLy8gRU9GLCB3aGl0ZXNwYWNlLCBwaXBlXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA8IDAgfHwgY29kZSA9PT0gMzIgfHwgY29kZSA9PT0gMTI0KSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ3RlbXBvcmFyeVRhYmxlQ2VsbENvbnRlbnQnKVxuICAgICAgcmV0dXJuIGNlbGxCcmVha0JvZHkoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAvLyBgXFxgXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gaW5DZWxsQ29udGVudEVzY2FwZUJvZHkgOiBpbkNlbGxDb250ZW50Qm9keVxuICB9XG5cbiAgZnVuY3Rpb24gaW5DZWxsQ29udGVudEVzY2FwZUJvZHkoY29kZSkge1xuICAgIC8vIGBcXGAgb3IgYHxgXG4gICAgaWYgKGNvZGUgPT09IDkyIHx8IGNvZGUgPT09IDEyNCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5DZWxsQ29udGVudEJvZHlcbiAgICB9XG5cbiAgICAvLyBBbnl0aGluZyBlbHNlLlxuICAgIHJldHVybiBpbkNlbGxDb250ZW50Qm9keShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYXRSb3dFbmRCb2R5KGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlUm93JylcblxuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGFibGVCb2R5Q2xvc2UoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgIG5leHRQcmVmaXhlZE9yQmxhbmssXG4gICAgICB0YWJsZUJvZHlDbG9zZSxcbiAgICAgIHRhYmxlQm9keUNvbnRpbnVlXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFibGVCb2R5Q2xvc2UoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgndGFibGVCb2R5JylcbiAgICByZXR1cm4gdGFibGVDbG9zZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFibGVCb2R5Q29udGludWUoY29kZSkge1xuICAgIC8vIEFsd2F5cyBhIGxpbmUgZW5kaW5nLlxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgLy8gU3VwcG9ydCBhbiBvcHRpb25hbCBwcmVmaXgsIHRoZW4gc3RhcnQgYSBib2R5IHJvdy5cbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgcm93U3RhcnRCb2R5LCAnbGluZVByZWZpeCcsIDQpXG4gIH1cbn1cblxuLy8gQmFzZWQgb24gbWljcm9tYXJrLCBidXQgdGhhdCB3b27igJl0IHdvcmsgYXMgd2XigJlyZSBpbiBhIHRhYmxlLCBhbmQgdGhhdCBleHBlY3RzXG4vLyBjb250ZW50LlxuLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hcmsvbWljcm9tYXJrL2Jsb2IvbWFpbi9saWIvdG9rZW5pemUvc2V0ZXh0LXVuZGVybGluZS5qcz5cbmZ1bmN0aW9uIHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lTWluaShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBgLWBcbiAgICBpZiAoY29kZSAhPT0gNDUpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdzZXRleHRVbmRlcmxpbmUnKVxuICAgIHJldHVybiBzZXF1ZW5jZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2VxdWVuY2UoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VxdWVuY2VcbiAgICB9XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB3aGl0ZXNwYWNlXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZU5leHRQcmVmaXhlZE9yQmxhbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2l6ZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLy8gVGhpcyBpcyBhIGNoZWNrLCBzbyB3ZSBkb27igJl0IGNhcmUgYWJvdXQgdG9rZW5zLCBidXQgd2Ugb3BlbiBhIGJvZ3VzIG9uZVxuICAgIC8vIHNvIHdl4oCZcmUgdmFsaWQuXG4gICAgZWZmZWN0cy5lbnRlcignY2hlY2snKVxuICAgIC8vIEVPTC5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gd2hpdGVzcGFjZVxuICB9XG5cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZShjb2RlKSB7XG4gICAgLy8gVlMgb3IgU1AuXG4gICAgaWYgKGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIHNpemUgPT09IDQgPyBvayA6IHdoaXRlc3BhY2VcbiAgICB9XG5cbiAgICAvLyBFT0Ygb3Igd2hpdGVzcGFjZVxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPCAwKSB7XG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBBbnl0aGluZyBlbHNlLlxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3N5bnRheCcpXG4iLCJ2YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgc3BhY2VGYWN0b3J5ID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS1zcGFjZScpXG52YXIgcHJlZml4U2l6ZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvcHJlZml4LXNpemUnKVxuXG52YXIgdGFza2xpc3RDaGVjayA9IHt0b2tlbml6ZTogdG9rZW5pemVUYXNrbGlzdENoZWNrfVxuXG5leHBvcnRzLnRleHQgPSB7OTE6IHRhc2tsaXN0Q2hlY2t9XG5cbmZ1bmN0aW9uIHRva2VuaXplVGFza2xpc3RDaGVjayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBvcGVuXG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgLy8gRXhpdCBpZiBub3QgYFtgLlxuICAgICAgY29kZSAhPT0gOTEgfHxcbiAgICAgIC8vIEV4aXQgaWYgdGhlcmXigJlzIHN0dWZmIGJlZm9yZS5cbiAgICAgIHNlbGYucHJldmlvdXMgIT09IG51bGwgfHxcbiAgICAgIC8vIEV4aXQgaWYgbm90IGluIHRoZSBmaXJzdCBjb250ZW50IHRoYXQgaXMgdGhlIGZpcnN0IGNoaWxkIG9mIGEgbGlzdFxuICAgICAgLy8gaXRlbS5cbiAgICAgICFzZWxmLl9nZm1UYXNrbGlzdEZpcnN0Q29udGVudE9mTGlzdEl0ZW1cbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrJylcbiAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIHJldHVybiBpbnNpZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgLy8gVGFiIG9yIHNwYWNlLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQnKVxuICAgICAgcmV0dXJuIGNsb3NlXG4gICAgfVxuXG4gICAgLy8gVXBwZXItIGFuZCBsb3dlciBgeGAuXG4gICAgaWYgKGNvZGUgPT09IDg4IHx8IGNvZGUgPT09IDEyMCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZCcpXG4gICAgICByZXR1cm4gY2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZShjb2RlKSB7XG4gICAgLy8gYF1gXG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVjaycpXG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayh7dG9rZW5pemU6IHNwYWNlVGhlbk5vblNwYWNlfSwgb2ssIG5vaylcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BhY2VUaGVuTm9uU3BhY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3BhY2VGYWN0b3J5KGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpXG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIHJldHVybiBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnd2hpdGVzcGFjZScpICYmXG4gICAgICBjb2RlICE9PSBudWxsICYmXG4gICAgICAhbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3N5bnRheCcpXG4iLCJ2YXIgY29tYmluZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvY29tYmluZS1leHRlbnNpb25zJylcbnZhciBhdXRvbGluayA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWF1dG9saW5rLWxpdGVyYWwnKVxudmFyIHN0cmlrZXRocm91Z2ggPSByZXF1aXJlKCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1zdHJpa2V0aHJvdWdoJylcbnZhciB0YWJsZSA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlJylcbnZhciB0YXNrbGlzdCA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNvbWJpbmUoW2F1dG9saW5rLCBzdHJpa2V0aHJvdWdoKG9wdGlvbnMpLCB0YWJsZSwgdGFza2xpc3RdKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzeW50YXggPSByZXF1aXJlKCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbScpXG52YXIgZnJvbU1hcmtkb3duID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0vZnJvbS1tYXJrZG93bicpXG52YXIgdG9NYXJrZG93biA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtL3RvLW1hcmtkb3duJylcblxudmFyIHdhcm5pbmdJc3N1ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBnZm1cblxuZnVuY3Rpb24gZ2ZtKG9wdGlvbnMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoKVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gb2xkIHJlbWFyay4gKi9cbiAgaWYgKFxuICAgICF3YXJuaW5nSXNzdWVkICYmXG4gICAgKCh0aGlzLlBhcnNlciAmJlxuICAgICAgdGhpcy5QYXJzZXIucHJvdG90eXBlICYmXG4gICAgICB0aGlzLlBhcnNlci5wcm90b3R5cGUuYmxvY2tUb2tlbml6ZXJzKSB8fFxuICAgICAgKHRoaXMuQ29tcGlsZXIgJiZcbiAgICAgICAgdGhpcy5Db21waWxlci5wcm90b3R5cGUgJiZcbiAgICAgICAgdGhpcy5Db21waWxlci5wcm90b3R5cGUudmlzaXRvcnMpKVxuICApIHtcbiAgICB3YXJuaW5nSXNzdWVkID0gdHJ1ZVxuICAgIGNvbnNvbGUud2FybihcbiAgICAgICdbcmVtYXJrLWdmbV0gV2FybmluZzogcGxlYXNlIHVwZ3JhZGUgdG8gcmVtYXJrIDEzIHRvIHVzZSB0aGlzIHBsdWdpbidcbiAgICApXG4gIH1cblxuICBhZGQoJ21pY3JvbWFya0V4dGVuc2lvbnMnLCBzeW50YXgob3B0aW9ucykpXG4gIGFkZCgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycsIGZyb21NYXJrZG93bilcbiAgYWRkKCd0b01hcmtkb3duRXh0ZW5zaW9ucycsIHRvTWFya2Rvd24ob3B0aW9ucykpXG5cbiAgZnVuY3Rpb24gYWRkKGZpZWxkLCB2YWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG90aGVyIGV4dGVuc2lvbnMuICovXG4gICAgaWYgKGRhdGFbZmllbGRdKSBkYXRhW2ZpZWxkXS5wdXNoKHZhbHVlKVxuICAgIGVsc2UgZGF0YVtmaWVsZF0gPSBbdmFsdWVdXG4gIH1cbn1cbiIsIi8qIVxuICogcmVwZWF0LXN0cmluZyA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvcmVwZWF0LXN0cmluZz5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJlc3VsdHMgY2FjaGVcbiAqL1xuXG52YXIgcmVzID0gJyc7XG52YXIgY2FjaGU7XG5cbi8qKlxuICogRXhwb3NlIGByZXBlYXRgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXBlYXQ7XG5cbi8qKlxuICogUmVwZWF0IHRoZSBnaXZlbiBgc3RyaW5nYCB0aGUgc3BlY2lmaWVkIGBudW1iZXJgXG4gKiBvZiB0aW1lcy5cbiAqXG4gKiAqKkV4YW1wbGU6KipcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlcGVhdCA9IHJlcXVpcmUoJ3JlcGVhdC1zdHJpbmcnKTtcbiAqIHJlcGVhdCgnQScsIDUpO1xuICogLy89PiBBQUFBQVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJpbmdgIFRoZSBzdHJpbmcgdG8gcmVwZWF0XG4gKiBAcGFyYW0ge051bWJlcn0gYG51bWJlcmAgVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBSZXBlYXRlZCBzdHJpbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgbnVtKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIH1cblxuICAvLyBjb3ZlciBjb21tb24sIHF1aWNrIHVzZSBjYXNlc1xuICBpZiAobnVtID09PSAxKSByZXR1cm4gc3RyO1xuICBpZiAobnVtID09PSAyKSByZXR1cm4gc3RyICsgc3RyO1xuXG4gIHZhciBtYXggPSBzdHIubGVuZ3RoICogbnVtO1xuICBpZiAoY2FjaGUgIT09IHN0ciB8fCB0eXBlb2YgY2FjaGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2FjaGUgPSBzdHI7XG4gICAgcmVzID0gJyc7XG4gIH0gZWxzZSBpZiAocmVzLmxlbmd0aCA+PSBtYXgpIHtcbiAgICByZXR1cm4gcmVzLnN1YnN0cigwLCBtYXgpO1xuICB9XG5cbiAgd2hpbGUgKG1heCA+IHJlcy5sZW5ndGggJiYgbnVtID4gMSkge1xuICAgIGlmIChudW0gJiAxKSB7XG4gICAgICByZXMgKz0gc3RyO1xuICAgIH1cblxuICAgIG51bSA+Pj0gMTtcbiAgICBzdHIgKz0gc3RyO1xuICB9XG5cbiAgcmVzICs9IHN0cjtcbiAgcmVzID0gcmVzLnN1YnN0cigwLCBtYXgpO1xuICByZXR1cm4gcmVzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
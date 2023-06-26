self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/MyLineChart.js":
/*!*****************************************!*\
  !*** ./pages/components/MyLineChart.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyLineChart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Documentos\\Work\\botTrade\\react-pwa-boilerplate\\pages\\components\\MyLineChart.js";

var data = [{
  name: 'Dia 1',
  uv: 1230,
  pv: 2400,
  amt: 2400
}, {
  name: 'Dia 2',
  uv: 798,
  pv: 1398,
  amt: 2210
}, {
  name: 'Dia 3',
  uv: 2145,
  pv: 9800,
  amt: 2290
}, {
  name: 'Dia 4',
  uv: 2985,
  pv: 9800,
  amt: 2290
}, {
  name: 'Dia 5',
  uv: 1345,
  pv: 9800,
  amt: 2290
}, {
  name: 'Dia 6',
  uv: 345,
  pv: 9800,
  amt: 2290
}, {
  name: 'Dia 7',
  uv: 845,
  pv: 9800,
  amt: 2290
} // ...
];
function MyLineChart() {
  if (false) {}

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {
    width: 380,
    height: 300,
    data: data,
    margin: {
      top: 20,
      right: 30,
      left: -15,
      bottom: 20
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.CartesianGrid, {
      strokeDasharray: "3 3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.XAxis, {
      dataKey: "name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.YAxis, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {
      type: "monotone",
      dataKey: "uv",
      stroke: "#00B55E",
      activeDot: {
        r: 8
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = MyLineChart;

var _c;

$RefreshReg$(_c, "MyLineChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9NeUxpbmVDaGFydC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJNeUxpbmVDaGFydCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQUNDLE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsSUFBcEI7QUFBMEJDLElBQUUsRUFBRSxJQUE5QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBRFcsRUFFWDtBQUFDSCxNQUFJLEVBQUUsT0FBUDtBQUFnQkMsSUFBRSxFQUFFLEdBQXBCO0FBQXlCQyxJQUFFLEVBQUUsSUFBN0I7QUFBbUNDLEtBQUcsRUFBRTtBQUF4QyxDQUZXLEVBR1g7QUFBQ0gsTUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUUsRUFBRSxJQUFwQjtBQUEwQkMsSUFBRSxFQUFFLElBQTlCO0FBQW9DQyxLQUFHLEVBQUU7QUFBekMsQ0FIVyxFQUlYO0FBQUNILE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsSUFBcEI7QUFBMEJDLElBQUUsRUFBRSxJQUE5QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBSlcsRUFLWDtBQUFDSCxNQUFJLEVBQUUsT0FBUDtBQUFnQkMsSUFBRSxFQUFFLElBQXBCO0FBQTBCQyxJQUFFLEVBQUUsSUFBOUI7QUFBb0NDLEtBQUcsRUFBRTtBQUF6QyxDQUxXLEVBTVg7QUFBQ0gsTUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUUsRUFBRSxHQUFwQjtBQUF5QkMsSUFBRSxFQUFFLElBQTdCO0FBQW1DQyxLQUFHLEVBQUU7QUFBeEMsQ0FOVyxFQU9YO0FBQUNILE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsR0FBcEI7QUFBeUJDLElBQUUsRUFBRSxJQUE3QjtBQUFtQ0MsS0FBRyxFQUFFO0FBQXhDLENBUFcsQ0FRWDtBQVJXLENBQWI7QUFXZSxTQUFTQyxXQUFULEdBQXVCO0FBQ3BDLGFBQW1DLEVBRWxDOztBQUVELHNCQUNFLDhEQUFDLCtDQUFEO0FBQVcsU0FBSyxFQUFFLEdBQWxCO0FBQXVCLFVBQU0sRUFBRSxHQUEvQjtBQUFvQyxRQUFJLEVBQUVMLElBQTFDO0FBQ0UsVUFBTSxFQUFFO0FBQUNNLFNBQUcsRUFBRSxFQUFOO0FBQVVDLFdBQUssRUFBRSxFQUFqQjtBQUFxQkMsVUFBSSxFQUFFLENBQUMsRUFBNUI7QUFBZ0NDLFlBQU0sRUFBRTtBQUF4QyxLQURWO0FBQUEsNEJBRUUsOERBQUMsbURBQUQ7QUFBZSxxQkFBZSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDJDQUFEO0FBQU8sYUFBTyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UsOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUsOERBQUMsMENBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMsSUFBOUI7QUFBbUMsWUFBTSxFQUFDLFNBQTFDO0FBQW9ELGVBQVMsRUFBRTtBQUFDQyxTQUFDLEVBQUU7QUFBSjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtLQWhCdUJMLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQ4YmQzYmFlNTc1MzgxNGQ3MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgQ2FydGVzaWFuR3JpZCwgWEF4aXMsIFlBeGlzLCBUb29sdGlwIH0gZnJvbSAncmVjaGFydHMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7bmFtZTogJ0RpYSAxJywgdXY6IDEyMzAsIHB2OiAyNDAwLCBhbXQ6IDI0MDB9LFxyXG4gIHtuYW1lOiAnRGlhIDInLCB1djogNzk4LCBwdjogMTM5OCwgYW10OiAyMjEwfSxcclxuICB7bmFtZTogJ0RpYSAzJywgdXY6IDIxNDUsIHB2OiA5ODAwLCBhbXQ6IDIyOTB9LFxyXG4gIHtuYW1lOiAnRGlhIDQnLCB1djogMjk4NSwgcHY6IDk4MDAsIGFtdDogMjI5MH0sXHJcbiAge25hbWU6ICdEaWEgNScsIHV2OiAxMzQ1LCBwdjogOTgwMCwgYW10OiAyMjkwfSxcclxuICB7bmFtZTogJ0RpYSA2JywgdXY6IDM0NSwgcHY6IDk4MDAsIGFtdDogMjI5MH0sXHJcbiAge25hbWU6ICdEaWEgNycsIHV2OiA4NDUsIHB2OiA5ODAwLCBhbXQ6IDIyOTB9LFxyXG4gIC8vIC4uLlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlMaW5lQ2hhcnQoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUNoYXJ0IHdpZHRoPXszODB9IGhlaWdodD17MzAwfSBkYXRhPXtkYXRhfVxyXG4gICAgICBtYXJnaW49e3t0b3A6IDIwLCByaWdodDogMzAsIGxlZnQ6IC0xNSwgYm90dG9tOiAyMH19PlxyXG4gICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxyXG4gICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiAvPlxyXG4gICAgICA8WUF4aXMgLz5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInV2XCIgc3Ryb2tlPVwiIzAwQjU1RVwiIGFjdGl2ZURvdD17e3I6IDh9fSAvPlxyXG4gICAgPC9MaW5lQ2hhcnQ+XHJcblxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
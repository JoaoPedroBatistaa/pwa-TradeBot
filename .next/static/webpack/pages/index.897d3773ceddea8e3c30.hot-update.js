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
/* harmony import */ var D_Documentos_Work_botTrade_react_pwa_boilerplate_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Documentos\\Work\\botTrade\\react-pwa-boilerplate\\pages\\components\\MyLineChart.js",
    _s = $RefreshSig$();



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
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState2 = (0,D_Documentos_Work_botTrade_react_pwa_boilerplate_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      isClient = _React$useState2[0],
      setIsClient = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Isso será renderizado no servidor e no primeiro render do cliente
    return null;
  } // Este código será renderizado apenas no cliente a partir do segundo render


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
    width: 380,
    height: 300,
    data: data,
    margin: {
      top: 20,
      right: 30,
      left: -15,
      bottom: 20
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {
      strokeDasharray: "3 3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {
      dataKey: "name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
      type: "monotone",
      dataKey: "uv",
      stroke: "#00B55E",
      activeDot: {
        r: 8
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(MyLineChart, "k460N28PNzD7zo1YW47Q9UigQis=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9NeUxpbmVDaGFydC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsInV2IiwicHYiLCJhbXQiLCJNeUxpbmVDaGFydCIsIlJlYWN0IiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQUNDLE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsSUFBcEI7QUFBMEJDLElBQUUsRUFBRSxJQUE5QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBRFcsRUFFWDtBQUFDSCxNQUFJLEVBQUUsT0FBUDtBQUFnQkMsSUFBRSxFQUFFLEdBQXBCO0FBQXlCQyxJQUFFLEVBQUUsSUFBN0I7QUFBbUNDLEtBQUcsRUFBRTtBQUF4QyxDQUZXLEVBR1g7QUFBQ0gsTUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUUsRUFBRSxJQUFwQjtBQUEwQkMsSUFBRSxFQUFFLElBQTlCO0FBQW9DQyxLQUFHLEVBQUU7QUFBekMsQ0FIVyxFQUlYO0FBQUNILE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsSUFBcEI7QUFBMEJDLElBQUUsRUFBRSxJQUE5QjtBQUFvQ0MsS0FBRyxFQUFFO0FBQXpDLENBSlcsRUFLWDtBQUFDSCxNQUFJLEVBQUUsT0FBUDtBQUFnQkMsSUFBRSxFQUFFLElBQXBCO0FBQTBCQyxJQUFFLEVBQUUsSUFBOUI7QUFBb0NDLEtBQUcsRUFBRTtBQUF6QyxDQUxXLEVBTVg7QUFBQ0gsTUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUUsRUFBRSxHQUFwQjtBQUF5QkMsSUFBRSxFQUFFLElBQTdCO0FBQW1DQyxLQUFHLEVBQUU7QUFBeEMsQ0FOVyxFQU9YO0FBQUNILE1BQUksRUFBRSxPQUFQO0FBQWdCQyxJQUFFLEVBQUUsR0FBcEI7QUFBeUJDLElBQUUsRUFBRSxJQUE3QjtBQUFtQ0MsS0FBRyxFQUFFO0FBQXhDLENBUFcsQ0FRWDtBQVJXLENBQWI7QUFXZSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUEsd0JBQ0pDLHFEQUFBLENBQWUsS0FBZixDQURJO0FBQUE7QUFBQSxNQUM3QkMsUUFENkI7QUFBQSxNQUNuQkMsV0FEbUI7O0FBR3BDRix3REFBQSxDQUFnQixZQUFNO0FBQ3BCRSxlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsR0FGRCxFQUVHLEVBRkg7O0FBSUEsTUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBVm1DLENBWXBDOzs7QUFDQSxzQkFDRSw4REFBQywrQ0FBRDtBQUFXLFNBQUssRUFBRSxHQUFsQjtBQUF1QixVQUFNLEVBQUUsR0FBL0I7QUFBb0MsUUFBSSxFQUFFUCxJQUExQztBQUNFLFVBQU0sRUFBRTtBQUFDUyxTQUFHLEVBQUUsRUFBTjtBQUFVQyxXQUFLLEVBQUUsRUFBakI7QUFBcUJDLFVBQUksRUFBRSxDQUFDLEVBQTVCO0FBQWdDQyxZQUFNLEVBQUU7QUFBeEMsS0FEVjtBQUFBLDRCQUVFLDhEQUFDLG1EQUFEO0FBQWUscUJBQWUsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSw4REFBQywyQ0FBRDtBQUFPLGFBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLDBDQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBc0IsYUFBTyxFQUFDLElBQTlCO0FBQW1DLFlBQU0sRUFBQyxTQUExQztBQUFvRCxlQUFTLEVBQUU7QUFBQ0MsU0FBQyxFQUFFO0FBQUo7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBdkJ1QlIsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OTdkMzc3M2NlZGRlYThlM2MzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZUNoYXJ0LCBMaW5lLCBDYXJ0ZXNpYW5HcmlkLCBYQXhpcywgWUF4aXMsIFRvb2x0aXAgfSBmcm9tICdyZWNoYXJ0cyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtuYW1lOiAnRGlhIDEnLCB1djogMTIzMCwgcHY6IDI0MDAsIGFtdDogMjQwMH0sXHJcbiAge25hbWU6ICdEaWEgMicsIHV2OiA3OTgsIHB2OiAxMzk4LCBhbXQ6IDIyMTB9LFxyXG4gIHtuYW1lOiAnRGlhIDMnLCB1djogMjE0NSwgcHY6IDk4MDAsIGFtdDogMjI5MH0sXHJcbiAge25hbWU6ICdEaWEgNCcsIHV2OiAyOTg1LCBwdjogOTgwMCwgYW10OiAyMjkwfSxcclxuICB7bmFtZTogJ0RpYSA1JywgdXY6IDEzNDUsIHB2OiA5ODAwLCBhbXQ6IDIyOTB9LFxyXG4gIHtuYW1lOiAnRGlhIDYnLCB1djogMzQ1LCBwdjogOTgwMCwgYW10OiAyMjkwfSxcclxuICB7bmFtZTogJ0RpYSA3JywgdXY6IDg0NSwgcHY6IDk4MDAsIGFtdDogMjI5MH0sXHJcbiAgLy8gLi4uXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUxpbmVDaGFydCgpIHtcclxuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzQ2xpZW50KHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFpc0NsaWVudCkge1xyXG4gICAgLy8gSXNzbyBzZXLDoSByZW5kZXJpemFkbyBubyBzZXJ2aWRvciBlIG5vIHByaW1laXJvIHJlbmRlciBkbyBjbGllbnRlXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIEVzdGUgY8OzZGlnbyBzZXLDoSByZW5kZXJpemFkbyBhcGVuYXMgbm8gY2xpZW50ZSBhIHBhcnRpciBkbyBzZWd1bmRvIHJlbmRlclxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUNoYXJ0IHdpZHRoPXszODB9IGhlaWdodD17MzAwfSBkYXRhPXtkYXRhfVxyXG4gICAgICBtYXJnaW49e3t0b3A6IDIwLCByaWdodDogMzAsIGxlZnQ6IC0xNSwgYm90dG9tOiAyMH19PlxyXG4gICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiAvPlxyXG4gICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiAvPlxyXG4gICAgICA8WUF4aXMgLz5cclxuICAgICAgPFRvb2x0aXAgLz5cclxuICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cInV2XCIgc3Ryb2tlPVwiIzAwQjU1RVwiIGFjdGl2ZURvdD17e3I6IDh9fSAvPlxyXG4gICAgPC9MaW5lQ2hhcnQ+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
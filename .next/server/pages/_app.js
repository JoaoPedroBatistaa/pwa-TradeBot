(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_pwaEventlisteners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/pwaEventlisteners */ "./scripts/pwaEventlisteners.js");

var _jsxFileName = "D:\\Documentos\\Work\\botTrade\\react-pwa-boilerplate\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;

if (isBrowser) {
  (0,_scripts_pwaEventlisteners__WEBPACK_IMPORTED_MODULE_2__.pwaTrackingListeners)();
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

if (isBrowser && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(() => {
      console.log("Service worker registered");
    }).catch(err => {
      console.log("Service worker registration failed", err);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./scripts/pwaEventlisteners.js":
/*!**************************************!*\
  !*** ./scripts/pwaEventlisteners.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pwaTrackingListeners": function() { return /* binding */ pwaTrackingListeners; }
/* harmony export */ });
const fireTracking = label => {
  //Fire tracking here
  console.log(label);
};

const pwaTrackingListeners = () => {
  const fireAddToHomeScreenImpression = event => {
    fireTracking("Add to homescreen shown"); //will not work for chrome, untill fixed

    event.userChoice.then(choiceResult => {
      fireTracking(`User clicked ${choiceResult}`);
    }); //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click

    window.removeEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);
  };

  window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression); //Track web app install by user

  window.addEventListener("appinstalled", event => {
    fireTracking("PWA app installed by user!!! Hurray");
  }); //Track from where your web app has been opened/browsed

  window.addEventListener("load", () => {
    let trackText;

    if (navigator && navigator.standalone) {
      trackText = "Launched: Installed (iOS)";
    } else if (matchMedia("(display-mode: standalone)").matches) {
      trackText = "Launched: Installed";
    } else {
      trackText = "Launched: Browser Tab";
    }

    fireTracking(trackText);
  });
};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wd2EtYm9pbGVycGxhdGUvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3JlYWN0LXB3YS1ib2lsZXJwbGF0ZS8uL3NjcmlwdHMvcHdhRXZlbnRsaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtcHdhLWJvaWxlcnBsYXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaXNCcm93c2VyIiwicHdhVHJhY2tpbmdMaXN0ZW5lcnMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZmlyZVRyYWNraW5nIiwibGFiZWwiLCJmaXJlQWRkVG9Ib21lU2NyZWVuSW1wcmVzc2lvbiIsImV2ZW50IiwidXNlckNob2ljZSIsImNob2ljZVJlc3VsdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFja1RleHQiLCJzdGFuZGFsb25lIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxRQUFmOztBQUVBLElBQUlBLFNBQUosRUFBZTtBQUNiQyxrRkFBb0I7QUFDckI7O0FBRUQsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsSUFBSUosU0FBUyxJQUFJLG1CQUFtQkssU0FBcEMsRUFBK0M7QUFDN0NDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQ0YsYUFBUyxDQUFDRyxhQUFWLENBQ0dDLFFBREgsQ0FDWSxvQkFEWixFQUVHQyxJQUZILENBRVEsTUFBTTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELEtBSkgsRUFLR0MsS0FMSCxDQUtVQyxHQUFELElBQVM7QUFDZEgsYUFBTyxDQUFDQyxHQUFSLENBQVksb0NBQVosRUFBa0RFLEdBQWxEO0FBQ0QsS0FQSDtBQVFELEdBVEQ7QUFVRDs7QUFFRCwrREFBZVosS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsTUFBTWEsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDOUI7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLEtBQVo7QUFDRCxDQUhEOztBQUtPLE1BQU1mLG9CQUFvQixHQUFHLE1BQU07QUFDeEMsUUFBTWdCLDZCQUE2QixHQUFJQyxLQUFELElBQVc7QUFDL0NILGdCQUFZLENBQUMseUJBQUQsQ0FBWixDQUQrQyxDQUUvQzs7QUFDQUcsU0FBSyxDQUFDQyxVQUFOLENBQWlCVCxJQUFqQixDQUF1QlUsWUFBRCxJQUFrQjtBQUN0Q0wsa0JBQVksQ0FBRSxnQkFBZUssWUFBYSxFQUE5QixDQUFaO0FBQ0QsS0FGRCxFQUgrQyxDQU0vQzs7QUFDQWQsVUFBTSxDQUFDZSxtQkFBUCxDQUNFLHFCQURGLEVBRUVKLDZCQUZGO0FBSUQsR0FYRDs7QUFZQVgsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixxQkFBeEIsRUFBK0NVLDZCQUEvQyxFQWJ3QyxDQWV4Qzs7QUFDQVgsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixjQUF4QixFQUF5Q1csS0FBRCxJQUFXO0FBQ2pESCxnQkFBWSxDQUFDLHFDQUFELENBQVo7QUFDRCxHQUZELEVBaEJ3QyxDQW9CeEM7O0FBQ0FULFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQyxRQUFJZSxTQUFKOztBQUNBLFFBQUlqQixTQUFTLElBQUlBLFNBQVMsQ0FBQ2tCLFVBQTNCLEVBQXVDO0FBQ3JDRCxlQUFTLEdBQUcsMkJBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUUsVUFBVSxDQUFDLDRCQUFELENBQVYsQ0FBeUNDLE9BQTdDLEVBQXNEO0FBQzNESCxlQUFTLEdBQUcscUJBQVo7QUFDRCxLQUZNLE1BRUE7QUFDTEEsZUFBUyxHQUFHLHVCQUFaO0FBQ0Q7O0FBQ0RQLGdCQUFZLENBQUNPLFNBQUQsQ0FBWjtBQUNELEdBVkQ7QUFXRCxDQWhDTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUCxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IHB3YVRyYWNraW5nTGlzdGVuZXJzIH0gZnJvbSBcIi4uL3NjcmlwdHMvcHdhRXZlbnRsaXN0ZW5lcnNcIjtcclxuXHJcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG5pZiAoaXNCcm93c2VyKSB7XHJcbiAgcHdhVHJhY2tpbmdMaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbn1cclxuXHJcbmlmIChpc0Jyb3dzZXIgJiYgXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbiAgICAgIC5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZFwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImNvbnN0IGZpcmVUcmFja2luZyA9IChsYWJlbCkgPT4ge1xyXG4gIC8vRmlyZSB0cmFja2luZyBoZXJlXHJcbiAgY29uc29sZS5sb2cobGFiZWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHB3YVRyYWNraW5nTGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZpcmVBZGRUb0hvbWVTY3JlZW5JbXByZXNzaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBmaXJlVHJhY2tpbmcoXCJBZGQgdG8gaG9tZXNjcmVlbiBzaG93blwiKTtcclxuICAgIC8vd2lsbCBub3Qgd29yayBmb3IgY2hyb21lLCB1bnRpbGwgZml4ZWRcclxuICAgIGV2ZW50LnVzZXJDaG9pY2UudGhlbigoY2hvaWNlUmVzdWx0KSA9PiB7XHJcbiAgICAgIGZpcmVUcmFja2luZyhgVXNlciBjbGlja2VkICR7Y2hvaWNlUmVzdWx0fWApO1xyXG4gICAgfSk7XHJcbiAgICAvL1RoaXMgaXMgdG8gcHJldmVudCBgYmVmb3JlaW5zdGFsbHByb21wdGAgZXZlbnQgdGhhdCB0cmlnZ2VycyBhZ2FpbiBvbiBgQWRkYCBvciBgQ2FuY2VsYCBjbGlja1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLFxyXG4gICAgICBmaXJlQWRkVG9Ib21lU2NyZWVuSW1wcmVzc2lvblxyXG4gICAgKTtcclxuICB9O1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlaW5zdGFsbHByb21wdFwiLCBmaXJlQWRkVG9Ib21lU2NyZWVuSW1wcmVzc2lvbik7XHJcblxyXG4gIC8vVHJhY2sgd2ViIGFwcCBpbnN0YWxsIGJ5IHVzZXJcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFwcGluc3RhbGxlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGZpcmVUcmFja2luZyhcIlBXQSBhcHAgaW5zdGFsbGVkIGJ5IHVzZXIhISEgSHVycmF5XCIpO1xyXG4gIH0pO1xyXG5cclxuICAvL1RyYWNrIGZyb20gd2hlcmUgeW91ciB3ZWIgYXBwIGhhcyBiZWVuIG9wZW5lZC9icm93c2VkXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIGxldCB0cmFja1RleHQ7XHJcbiAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5zdGFuZGFsb25lKSB7XHJcbiAgICAgIHRyYWNrVGV4dCA9IFwiTGF1bmNoZWQ6IEluc3RhbGxlZCAoaU9TKVwiO1xyXG4gICAgfSBlbHNlIGlmIChtYXRjaE1lZGlhKFwiKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSlcIikubWF0Y2hlcykge1xyXG4gICAgICB0cmFja1RleHQgPSBcIkxhdW5jaGVkOiBJbnN0YWxsZWRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYWNrVGV4dCA9IFwiTGF1bmNoZWQ6IEJyb3dzZXIgVGFiXCI7XHJcbiAgICB9XHJcbiAgICBmaXJlVHJhY2tpbmcodHJhY2tUZXh0KTtcclxuICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
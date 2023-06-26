(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 735:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./scripts/pwaEventlisteners.js
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
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isBrowser = false;

if (isBrowser) {
  pwaTrackingListeners();
}

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps));
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

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(735));
module.exports = __webpack_exports__;

})();
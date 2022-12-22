/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"www/js/build/dev/reactpages/report/winloss-nonsports-betlist": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/source/reactpages/components/Loader.jsx":
/*!********************************************************!*\
  !*** ./www/js/source/reactpages/components/Loader.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Loader = ({
  isLoading
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-process default",
    style: {
      display: `${isLoading ? 'block' : 'none'}`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-loading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader-inner ball-beat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./www/js/source/reactpages/components/NoDataTitle.jsx":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/components/NoDataTitle.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");


const NoDataTitle = ({
  title
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "no-info-row center-align",
    dangerouslySetInnerHTML: {
      __html: title ? title : _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("NoInfo")
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (NoDataTitle);

/***/ }),

/***/ "./www/js/source/reactpages/layouts/AppLayout.jsx":
/*!********************************************************!*\
  !*** ./www/js/source/reactpages/layouts/AppLayout.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class AppLayout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "container",
      className: `container-fluid ${this.props.className || ''}`
    }, this.props.children);
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/lib/DataService.js":
/*!*****************************************************!*\
  !*** ./www/js/source/reactpages/lib/DataService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _jsroot_lib_QueryString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/QueryString */ "./www/js/source/reactpages/lib/QueryString.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class DataService {
  static buildProxyUrl(apiKey, apiUrl) {
    const encodeUrl = apiUrl.replace(new RegExp('/', 'g'), '_');
    const proxyUrl = `api/proxy/${apiKey}/${encodeUrl}`;
    return proxyUrl;
  }
  static getData(url, params) {
    url = _jsroot_lib_QueryString__WEBPACK_IMPORTED_MODULE_2__["default"].setParams(url, params);
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        '__RequestVerificationToken': _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].getXsrfToken()
      }
    });
  }
  static postData(url, params) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        '__RequestVerificationToken': _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].getXsrfToken()
      }
    });
  }
  static getFile(url, params) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params, {
      responseType: 'blob',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        '__RequestVerificationToken': _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].getXsrfToken()
      }
    });
  }
  static postProxyData(apiKey, apiUrl, params) {
    const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
    return this.postData(proxyUrl, params);
  }
  static postReportData(url, params) {
    return this.postProxyData(this.apiKeys.report, url, params);
  }
  static postBetListData(url, params) {
    return this.postProxyData(this.apiKeys.betlist, url, params);
  }
  static getProxyFile(apiKey, apiUrl, params) {
    const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
    return this.getFile(proxyUrl, params);
  }
  static getReportFile(url, params) {
    return this.getProxyFile(this.apiKeys.report, url, params);
  }
  static getBetListFile(url, params) {
    return this.getProxyFile(this.apiKeys.betlist, url, params);
  }
  static getProxyData(apiKey, apiUrl, params) {
    const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
    return this.getData(proxyUrl, params);
  }
  static getReportData(url, params) {
    return this.getProxyData(this.apiKeys.report, url, params);
  }
}
_defineProperty(DataService, "apiKeys", {
  report: 'reportApi',
  betlist: 'betlistApi'
});

/***/ }),

/***/ "./www/js/source/reactpages/lib/QueryString.js":
/*!*****************************************************!*\
  !*** ./www/js/source/reactpages/lib/QueryString.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryString; });
class QueryString {
  static _parseQueryString(queryString) {
    let args = queryString.split('&');
    let argsList = {};
    for (let i = 0; i < args.length; i++) {
      let arg = unescape(args[i]);
      if (arg.length > 0) {
        if (arg.indexOf('=') === -1) {
          argsList[arg.toLowerCase().trim()] = null;
        } else {
          let keyValuePair = arg.split('=');
          argsList[keyValuePair[0].toLowerCase().trim()] = keyValuePair[1].trim();
        }
      }
    }
    return argsList;
  }
  static _getQueryString(url) {
    var index = url.indexOf("?");
    return index < 0 ? "" : url.substring(index + 1, url.length);
  }
  static _getRawUrl(url) {
    var index = url.indexOf("?");
    return index < 0 ? url : url.substring(0, index);
  }
  static setParam(url, name, value) {
    var rawUrl = QueryString._getRawUrl(url);
    var queryString = QueryString._getQueryString(url);
    var args = QueryString._parseQueryString(queryString);
    if (!name) {
      return url;
    }

    // Update value
    var found = false;
    for (var key in args) {
      if (key && key.toLowerCase() === name.toLowerCase()) {
        // Does not update data if value = undefined
        if (value !== undefined) {
          args[key] = value;
        }
        found = true;
      }
    }
    if (!found) {
      args[name.toLowerCase()] = value;
    }
    var queryArray = [];

    // Rebuild query string, ignore null value
    for (var key1 in args) {
      if (args[key1] != null && args[key1] !== undefined) {
        queryArray.push(key1.toLowerCase() + "=" + args[key1]);
      }
    }
    return rawUrl + "?" + queryArray.join("&");
  }
  static setParams(url, parameters) {
    for (var property in parameters) {
      if (parameters.hasOwnProperty(property)) {
        url = QueryString.setParam(url, property, parameters[property]);
      }
    }
    return url;
  }
  static getParam(url, name) {
    var queryString = QueryString._getQueryString(url);
    var args = QueryString._parseQueryString(queryString);
    for (var key in args) {
      if (key != null && key.toLowerCase() === name.toLowerCase()) {
        return args[key];
      }
    }
    return null;
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/lib/langHelper.js":
/*!****************************************************!*\
  !*** ./www/js/source/reactpages/lib/langHelper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LangHelper; });
const DEFAULT_RESOURCE_NAME = "_language_en_US";
const langCode = window.PageLanguage || "en-US";
const resourceName = `_language_${langCode.replace("-", "_")}`;
class LangHelper {
  static get currentLanguage() {
    return langCode;
  }
  static getSingleResource(key) {
    var langHandler = window[resourceName];
    return langHandler && langHandler[key] || window[DEFAULT_RESOURCE_NAME] && window[DEFAULT_RESOURCE_NAME][key] || key;
  }
  static getResources(keys) {
    var langHandler = window[resourceName];
    return keys.map(key => langHandler && langHandler[key] || window[DEFAULT_RESOURCE_NAME] && window[DEFAULT_RESOURCE_NAME][key] || key);
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/lib/numberFormat.js":
/*!******************************************************!*\
  !*** ./www/js/source/reactpages/lib/numberFormat.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberFormat; });
class NumberFormat {
  static formatDecimal(value) {
    return this.format(value, 2);
  }
  static format(value, digits = 0) {
    if (!this.isNumber(value)) {
      return "";
    }
    const roundedValue = this.round(value, digits);
    return roundedValue.toFixed(digits).replace(/^[+-]?\d+/, int => int.replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
  }
  static round(value, digits) {
    const sign = value < 0 ? -1 : 1;
    const absoluteValue = Math.abs(value);
    const rounded = Number(Math.round(absoluteValue + 'e' + digits) + 'e-' + digits);
    return sign * rounded;
  }
  static isNumber(value) {
    return typeof value !== "number" || isNaN(value) ? false : true;
  }
  static parseToString(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, "$1,");
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/lib/site.js":
/*!**********************************************!*\
  !*** ./www/js/source/reactpages/lib/site.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Site; });
const _rootUrl = window.rootUrl || "/";
let _xsrfToken = null;
class Site {
  static getXsrfToken() {
    if (!_xsrfToken) {
      _xsrfToken = document.querySelector("input[name=__RequestVerificationToken]").value;
    }
    return _xsrfToken;
  }
  static resolveClientUrl(relativeUrl) {
    return _rootUrl + relativeUrl;
  }
  static convertDateToString(date) {
    return typeof date === "string" ? date : date.format("MM/DD/YYYY");
  }
  static isEmptyObject(obj = {}) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }
  static asNull(text) {
    if (text != null) {
      text = text.trim();
      if (text === '') {
        return null;
      }
    }
    return text;
  }
  static downloadFile(data, fileName) {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  static readAsJson(blob, callback) {
    const reader = new FileReader();
    reader.onload = function () {
      callback && callback(JSON.parse(reader.result));
    };
    reader.readAsText(blob);
  }
  static getRootUrl() {
    return _rootUrl;
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/AppContainer.jsx":
/*!*************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/AppContainer.jsx ***!
  \*************************************************************************************************************/
/*! exports provided: AppContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/components/Loader */ "./www/js/source/reactpages/components/Loader.jsx");
/* harmony import */ var _jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _GridData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GridData */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/GridData.jsx");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/queryService.js");
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/constants */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const AppContainer = _ => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sortOption, setSortOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_libs_constants__WEBPACK_IMPORTED_MODULE_6__["defaultSortOption"]);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_libs_constants__WEBPACK_IMPORTED_MODULE_6__["defaultPagingOption"]);
  const _handleExport = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    event.preventDefault();
    setLoading(true);
    const params = _objectSpread(_objectSpread({}, _libs_constants__WEBPACK_IMPORTED_MODULE_6__["defaultState"]), {}, {
      totalRows: pagingOption.TotalItem,
      sortById: sortOption.sortBy,
      isSortAsc: sortOption.sortType === 'asc'
    });
    _libs_queryService__WEBPACK_IMPORTED_MODULE_5__["default"].exportNonSportsBetList(params, () => setLoading(false));
  }, [sortOption, pagingOption]);
  const _contentTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content-title"
    }, window.mainTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "currency-title"
    }, window.currencyTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: _handleExport
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('ExportToExcel')
    }))));
  }, [_handleExport]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "winloss-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }), _contentTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GridData__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setLoading: setLoading,
    isLoading: isLoading,
    setSortOption: setSortOption,
    sortOption: sortOption,
    setPagingOption: setPagingOption,
    pagingOption: pagingOption
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/GridData.jsx":
/*!*********************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/GridData.jsx ***!
  \*********************************************************************************************************/
/*! exports provided: GridData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridData", function() { return GridData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_components_NoDataTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/components/NoDataTitle */ "./www/js/source/reactpages/components/NoDataTitle.jsx");
/* harmony import */ var _libs_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/constants */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/constants.js");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/queryService.js");
/* harmony import */ var _components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/grid/DecimalCell */ "./www/js/source/reactpages/pages/report/winloss/components/grid/DecimalCell.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const GridData = ({
  setLoading,
  sortOption,
  setSortOption,
  pagingOption,
  setPagingOption
}) => {
  const [gridData, setGridData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_libs_constants__WEBPACK_IMPORTED_MODULE_4__["defaultGridData"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchBetList(_objectSpread(_objectSpread({}, _libs_constants__WEBPACK_IMPORTED_MODULE_4__["defaultState"]), {}, {
      sortById: sortOption.sortBy,
      isSortAsc: sortOption.sortType === 'asc'
    }), response => {
      const {
        totalRows
      } = response;
      setPagingOption(_objectSpread(_objectSpread({}, pagingOption), {}, {
        TotalItem: totalRows
      }));
    });
  }, []);
  const {
    dataList,
    totalData
  } = gridData;
  const fetchBetList = async (params, after) => {
    setLoading(true);
    const response = await _libs_queryService__WEBPACK_IMPORTED_MODULE_5__["default"].getNonSportsBetList(params);
    const {
      dataList,
      totalData
    } = response;
    setLoading(false);
    setGridData({
      dataList,
      totalData
    });
    after && after(response);
  };
  const _handleSort = (sortBy, sortType) => {
    const params = _objectSpread(_objectSpread(_objectSpread({}, _libs_constants__WEBPACK_IMPORTED_MODULE_4__["defaultState"]), pagingOption), {}, {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    });
    fetchBetList(params, _ => {
      setSortOption({
        sortBy,
        sortType
      });
    });
  };
  const _handlePaging = (pageIndex, pageSize) => {
    const params = _objectSpread(_objectSpread({}, _libs_constants__WEBPACK_IMPORTED_MODULE_4__["defaultState"]), {}, {
      sortbyId: sortOption.sortBy,
      isSortAsc: sortOption.sortType === 'asc',
      pageIndex,
      pageSize
    });
    fetchBetList(params, response => {
      setPagingOption(_objectSpread(_objectSpread({}, pagingOption), {}, {
        PageIndex: pageIndex,
        PageSize: pageSize,
        TotalItem: response.totalRows
      }));
    });
  };
  const _header = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderRow"], {
      style: {
        height: '35px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      colWidth: 30
    }, '#'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 1,
      colWidth: 100
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('RefNo')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 2,
      colWidth: 60
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('TransTime')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 3,
      colWidth: 70
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('Stake')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 4,
      colWidth: 70
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('PlayerWinloss')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 5,
      colWidth: 70
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('ProgressiveWin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 6,
      colWidth: 70
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('ProgressiveBet')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 7,
      colWidth: 50
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('GGR')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], {
      sortBy: 8,
      colWidth: 40
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('Status')));
  }, []);
  const _body = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      style: {
        height: '25px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      className: "center-align"
    }, item.rowNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      className: "center-align"
    }, item.refNo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      className: "center-align"
    }, item.transTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: item.stake,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: item.playerWinLoss,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: item.progressiveWin,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: item.progressiveBet,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: item.ggr
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      className: "center-align"
    }, item.ticketStatus)));
  }, [dataList]);
  const _footer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "fixed-table-grant-total",
      key: "totalRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      key: "total",
      className: "right-align"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("GrandTotal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: totalData.playerWinLoss,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: totalData.progressiveWin,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: totalData.progressiveBet,
      disableWarning: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "right-align",
      value: totalData.ggr
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], null));
  }, [totalData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dataList.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    minWidth: 500,
    autoWidth: true,
    autoHeight: true,
    header: _header,
    body: _body,
    footer: _footer,
    isPaging: true,
    pageOption: pagingOption,
    onPaging: _handlePaging,
    onSort: _handleSort,
    containerPadding: 30,
    shouldResetScrollPosition: true
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_NoDataTitle__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GridData));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/index.js":
/*!******************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/index.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppContainer */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/components/AppContainer.jsx");



Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("app-container"));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/constants.js":
/*!***************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/constants.js ***!
  \***************************************************************************************************/
/*! exports provided: defaultState, defaultPagingOption, defaultSortOption, defaultGridData, Url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPagingOption", function() { return defaultPagingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSortOption", function() { return defaultSortOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGridData", function() { return defaultGridData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
const defaultState = window.initialState || {};
const defaultPagingOption = {
  PageIndex: 1,
  PageSize: 50,
  TotalItem: 0,
  PageList: [50, 100, 200, 500, 1000]
};
const defaultSortOption = {
  sortBy: 2,
  sortType: 'asc'
};
const defaultGridData = {
  dataList: [],
  totalData: {},
  totalRows: 0
};
const Url = {
  nonSportsBetList: 'Api/WinLossReport/GetPlayerBetList',
  exportNonSportsBetList: 'Api/WinLossReport/ExportPlayerBetList'
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/queryService.js":
/*!******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/queryService.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryService; });
/* harmony import */ var _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/DataService */ "./www/js/source/reactpages/lib/DataService.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/libs/constants.js");




class QueryService {
  static async getNonSportsBetList(params) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants__WEBPACK_IMPORTED_MODULE_3__["Url"].nonSportsBetList, params);
      if (response.status === 200) {
        return response.data;
      }
    } catch (e) {
      console.log(e);
    }
    alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("ErrorProcessingMsg"));
    return _constants__WEBPACK_IMPORTED_MODULE_3__["defaultGridData"];
  }
  static async exportNonSportsBetList(params, after) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants__WEBPACK_IMPORTED_MODULE_3__["Url"].exportNonSportsBetList, params);
      const noContentStatusCode = 204;
      if (response.status === noContentStatusCode) {
        alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("NoInfo"));
      } else {
        _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__["default"].downloadFile(response.data, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('PlayerBetList') + '_' + params.ProductName + '.xlsx');
      }
      ;
    } catch (e) {
      alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("ErrorProcessingMsg"));
      console.log(e);
    } finally {
      after && after();
    }
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/grid/DecimalCell.jsx":
/*!***************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/grid/DecimalCell.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");



const DecimalCell = props => {
  const {
    value,
    className,
    children,
    digits,
    disableWarning
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    className: className + (value < 0 && !disableWarning ? ' negative' : '')
  }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(value, digits), children);
};
DecimalCell.defaultProps = {
  digits: 2
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DecimalCell));

/***/ })

/******/ });
//# sourceMappingURL=winloss-nonsports-betlist.chunk.js.map
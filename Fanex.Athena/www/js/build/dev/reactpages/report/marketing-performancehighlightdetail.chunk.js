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
/******/ 		"www/js/build/dev/reactpages/report/marketing-performancehighlightdetail": 0
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
/******/ 	deferredModules.push(["./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/index.js","common"]);
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

/***/ "./www/js/source/reactpages/lib/AppData.js":
/*!*************************************************!*\
  !*** ./www/js/source/reactpages/lib/AppData.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (window._AppData || {});

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
    } // Update value


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

    var queryArray = []; // Rebuild query string, ignore null value

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
    return roundedValue.toFixed(digits).replace(/(\d)(?=(\d{3})+(\.|$))/g, "$1,");
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

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/GroupCell.jsx":
/*!*****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/GroupCell.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const GroupCell = props => {
  const {
    rowData,
    dataList,
    fieldKey,
    allowedDrillDown,
    isChild,
    onDrillDown,
    displayText
  } = props,
        rest = _objectWithoutProperties(props, ["rowData", "dataList", "fieldKey", "allowedDrillDown", "isChild", "onDrillDown", "displayText"]);

  const _isDrillDown = rowData.isDrillDown || false;

  const _handleDrillDown = () => {
    const rowIndex = dataList.findIndex(_ => _[fieldKey] === rowData[fieldKey]);

    if (rowIndex === -1) {
      return;
    }

    if (_isDrillDown) {
      dataList.splice(rowIndex + 1, rowData.childs.length);
    } else {
      dataList.splice(rowIndex + 1, 0, ...rowData.childs);
    }

    dataList[rowIndex] = _objectSpread(_objectSpread({}, rowData), {
      isDrillDown: !_isDrillDown
    });
    onDrillDown && onDrillDown(dataList);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], _extends({
    key: `group-cell-${rowData[fieldKey]}`
  }, rest), allowedDrillDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-arrow",
    style: {
      transform: _isDrillDown ? 'rotate(0)' : null
    },
    onClick: _handleDrillDown
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: isChild ? '20px' : '0'
    }
  }, displayText));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GroupCell));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx ***!
  \**************************************************************************************/
/*! exports provided: Widget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/components/Loader */ "./www/js/source/reactpages/components/Loader.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");



const Widget = props => {
  const {
    title,
    isLoading,
    handleExportExcel,
    children
  } = props;
  const [isCollapsed, setIsCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const _renderTitle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "widget-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-arrow",
      style: {
        transform: isCollapsed ? 'rotate(-180deg)' : null
      },
      onClick: () => setIsCollapsed(!isCollapsed)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), handleExportExcel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('ExportToExcel')
    }))));
  };

  const _renderNoData = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "no-data-widget"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource('NoInfo'));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget"
  }, _renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-content",
    style: {
      display: isCollapsed ? 'none' : 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }), children || _renderNoData()));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Widget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetail.jsx":
/*!***************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetail.jsx ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _BonusClaimedSummaryWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BonusClaimedSummaryWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedSummaryWidget.jsx");
/* harmony import */ var _BonusClaimedDetailWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BonusClaimedDetailWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetailWidget.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");








const BonusClaimedDetail = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [sortInfoDetailWidget, setSortInfoDetailWidget] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_6__["DefaultSortInfo"]);

  const handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__["default"].getBonusClaimedExportAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      allowedCompare,
      sortInfo: sortInfoDetailWidget
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__["default"].exportBonusClaimedData(exportParams);
  };

  const _renderCaption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "highlight-detail-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('BonusAmountClaimed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ExportToExcel')
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-detail"
  }, _renderCaption(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BonusClaimedSummaryWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reportDate: reportDate,
    compareDate: compareDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency,
    allowedCompare: allowedCompare
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BonusClaimedDetailWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSort: setSortInfoDetailWidget,
    sortInfo: sortInfoDetailWidget,
    reportDate: reportDate,
    baseCurrency: baseCurrency,
    selectedCurrency: selectedCurrency,
    selectedBrand: selectedBrand
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BonusClaimedDetail));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetailWidget.jsx":
/*!*********************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetailWidget.jsx ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const BonusClaimedDetailWidget = ({
  reportDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  sortInfo,
  onSort
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detailData, setDetailData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DefaultPagingOption"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getBonusClaimedDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });
  }, [reportDate]);

  const _fetchData = (params, before, after) => {
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchBonusClaimedDetailData(params, () => {
      before && before();
      setLoading(true);
    }, response => {
      response.isSuccess && after && after(response.data);
      setDetailData(response.data);
      setLoading(false);
    });
  };

  const _handleSort = (sortBy, sortType) => {
    const sortInfo = {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    };
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getBonusClaimedDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });

    onSort && onSort(sortInfo);
  };

  const _handlePaging = (pageIndex, pageSize) => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getBonusClaimedDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption: {
        PageIndex: pageIndex,
        PageSize: pageSize
      },
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
      setPagingOption(newPagingOption);
    });
  };

  const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
    return _objectSpread(_objectSpread(_objectSpread({}, pagingOption), sortInfo), {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };

  const _renderHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].rowId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].rowId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].username].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].username].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].currency].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].registeredDateDisplay].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].registeredDateDisplay].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].signupUrl].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].signupUrl].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].affCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].affCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].depositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].depositAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].withdrawalAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].withdrawalAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusAmount].name));
  };

  const _renderBody = () => {
    const {
      dataList
    } = detailData;
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].rowId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].rowId], " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusCode] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].username].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].username]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].currency].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].currency]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].registeredDateDisplay].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].registeredDateDisplay]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].signupUrl].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].signupUrl]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].affCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].affCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].depositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].depositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].withdrawalAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].withdrawalAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiBonusClaimedGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailBonusClaimedGridColumns"].bonusAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"]))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Details'),
    isLoading: isLoading
  }, detailData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Pager"], {
    pageOption: pagingOption,
    onPaging: _handlePaging
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    minWidth: 650,
    autoWidth: true,
    maxWidth: document.body.clientWidth,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    containerPadding: 70,
    shouldResetScrollPosition: isLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BonusClaimedDetailWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedSummaryWidget.jsx":
/*!**********************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedSummaryWidget.jsx ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_GroupCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/GroupCell */ "./www/js/source/reactpages/pages/report/marketing/components/common/GroupCell.jsx");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const BonusClaimedSummaryWidget = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [summaryData, setSummaryData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getBonusClaimedSummaryAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].fetchBonusClaimedSummaryData(apiParams, () => {
      setLoading(true);
    }, response => {
      setSummaryData(response.data);
      setLoading(false);
    });
  }, [reportDate, compareDate]);

  const _renderTotalData = () => {
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalBonusAmountClaimed')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ReportDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('CompareDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ChangePercent')));

    const body = _renderBodyTotalData();

    const totalRow = _rendertotalRowTotalData();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: document.body.clientWidth,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: [...body, totalRow],
      isPaging: true,
      containerPadding: 70
    }));
  };

  const _renderBodyTotalData = () => {
    const {
      totalData
    } = summaryData;
    return totalData.map(item => {
      const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(item.changeRate, 0);
      const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].displayRate(roundRate);
      const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getColorRate(roundRate);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
        className: "left-align highlight-cell"
      }, item.currencyCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
        className: "right-align"
      }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.bonusAmountClaimeds, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
        className: "right-align"
      }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.compareBonusAmountClaimeds, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
        className: `right-align ${colorRate}`
      }, displayRate));
    });
  };

  const _rendertotalRowTotalData = () => {
    const {
      totalTotalData
    } = summaryData;
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(totalTotalData.changeRate, 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getColorRate(roundRate);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align total-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Total')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalTotalData.bonusAmountClaimeds, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalTotalData.compareBonusAmountClaimeds, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: `right-align total-cell ${colorRate}`
    }, displayRate));
  };

  const _onDrillDownCampaignData = newCampaignData => {
    const newSummaryData = _objectSpread({}, summaryData);

    newSummaryData.detailData = newCampaignData;
    setSummaryData(newSummaryData);
  };

  const _renderCampaignData = () => {
    const {
      detailData,
      totalDetailData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('BonusCode')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('BonusName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NoOfUserClaimingBonus')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalBonusAmountClaimed')));
    const body = detailData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      key: item.id,
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, _renderGroupCampaignCell(item, detailData), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align"
    }, item.bonusName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.numberOfBonusUser, 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.bonusAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"]))));
    const totalRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align total-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Total')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "total-cell"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalDetailData.totalBonusUsers, 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalDetailData.totalBonusAmount, 2)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: document.body.clientWidth,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: [...body, totalRow],
      containerPadding: 70
    }));
  };

  const _renderGroupCampaignCell = (item, detailData) => {
    const isParent = item.childs && item.childs.length > 0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_GroupCell__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      displayText: item[isParent ? 'bonusCode' : 'currencyCode'] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None'),
      rowData: item,
      dataList: detailData,
      fieldKey: 'id',
      allowedDrillDown: isParent,
      isChild: !isParent,
      onDrillDown: _onDrillDownCampaignData
    }, {
      className: "left-align" + (isParent ? " highlight-cell" : "")
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Summary'),
    isLoading: isLoading
  }, summaryData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-container"
  }, _renderTotalData(), _renderCampaignData()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BonusClaimedSummaryWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetail.jsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetail.jsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _DepositAmountSummaryWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DepositAmountSummaryWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountSummaryWidget.jsx");
/* harmony import */ var _DepositAmountDetailWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DepositAmountDetailWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetailWidget.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");








const DepositAmountDetail = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [sortInfoDetailWidget, setSortInfoDetailWidget] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_6__["DefaultSortInfo"]);

  const handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__["default"].getDepositAmountExportAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      allowedCompare,
      sortInfo: sortInfoDetailWidget
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__["default"].exportDepositAmountData(exportParams);
  };

  const _renderCaption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "highlight-detail-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('DepositAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ExportToExcel')
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-detail"
  }, _renderCaption(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositAmountSummaryWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reportDate: reportDate,
    compareDate: compareDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency,
    allowedCompare: allowedCompare
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositAmountDetailWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSort: setSortInfoDetailWidget,
    sortInfo: sortInfoDetailWidget,
    reportDate: reportDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DepositAmountDetail));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetailWidget.jsx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetailWidget.jsx ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const DepositAmountDetailWidget = ({
  reportDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  sortInfo,
  onSort
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detailData, setDetailData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DefaultPagingOption"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getDepositAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });
  }, [reportDate]);

  const _fetchData = (params, before, after) => {
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchDepositAmountDetailData(params, () => {
      before && before();
      setLoading(true);
    }, response => {
      response.isSuccess && after && after(response.data);
      setDetailData(response.data);
      setLoading(false);
    });
  };

  const _handleSort = (sortBy, sortType) => {
    const sortInfo = {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    };
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getDepositAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });

    onSort && onSort(sortInfo);
  };

  const _handlePaging = (pageIndex, pageSize) => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getDepositAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption: {
        PageIndex: pageIndex,
        PageSize: pageSize
      },
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
      setPagingOption(newPagingOption);
    });
  };

  const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
    return _objectSpread(_objectSpread(_objectSpread({}, pagingOption), sortInfo), {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };

  const _renderHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].rowId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].rowId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].username].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].username].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].currency].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].registeredDateDisplay].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].registeredDateDisplay].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].signupUrl].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].signupUrl].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].affCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].affCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].firstDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].firstDepositAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].numberOfDeposits].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].numberOfDeposits].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].depositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].depositAmount].name));
  };

  const _renderBody = () => {
    const {
      dataList
    } = detailData;
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].rowId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].rowId], " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].username].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].username]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].currency].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].currency]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].registeredDateDisplay].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].registeredDateDisplay]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].signupUrl].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].signupUrl]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].affCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].affCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].numberOfDeposits].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].numberOfDeposits], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].depositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailDepositAmountGridColumns"].depositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"]))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Details'),
    isLoading: isLoading
  }, detailData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Pager"], {
    pageOption: pagingOption,
    onPaging: _handlePaging
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    minWidth: 650,
    autoWidth: true,
    maxWidth: document.body.clientWidth,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    containerPadding: 55,
    shouldResetScrollPosition: isLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DepositAmountDetailWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountSummaryWidget.jsx":
/*!************************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountSummaryWidget.jsx ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_GroupCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/GroupCell */ "./www/js/source/reactpages/pages/report/marketing/components/common/GroupCell.jsx");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const DepositAmountSummaryWidget = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [summaryData, setSummaryData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getDepositAmountSummaryAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].fetchDepositAmountSummaryData(apiParams, () => {
      setLoading(true);
    }, response => {
      setSummaryData(response.data);
      setLoading(false);
    });
  }, [reportDate, compareDate]);

  const _onDrillDownSignupData = newSignupData => {
    const newSummaryData = _objectSpread({}, summaryData);

    newSummaryData.signupData = newSignupData;
    setSummaryData(newSummaryData);
  };

  const _renderTotalData = () => {
    const {
      totalData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Total')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ReportDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('CompareDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ChangePercent')));
    const item = totalData[0];
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(item.changeRate, 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getColorRate(roundRate);
    const body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align highlight-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('DepositAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.depositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.compareDepositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: `right-align ${colorRate}`
    }, displayRate));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: document.body.clientWidth,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: body,
      isPaging: true,
      containerPadding: 70
    }));
  };

  const _renderSignupData = () => {
    const {
      signupData,
      totalSignupData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('SignupUrl')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('FirstDepositAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalDepositAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NumberOfPlayers')));
    const body = signupData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, _renderGroupSignupCell(item, signupData), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.firstDepositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.totalDepositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item.noOfPlayers, 0))));
    const totalRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align total-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Total')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalFirstDepositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalDepositAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalNoOfPlayers, 0)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: document.body.clientWidth,
      autoWidth: true,
      autoHeight: false,
      bodyHeight: 400,
      header: header,
      body: [...body, totalRow],
      containerPadding: 70
    }));
  };

  const _renderGroupSignupCell = (item, signupData) => {
    const isChild = !item.noGrouping && (!item.childs || !item.childs.length);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_GroupCell__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      displayText: item.signupUrl,
      rowData: item,
      dataList: signupData,
      fieldKey: 'signupUrl',
      allowedDrillDown: !item.noGrouping && item.childs && item.childs.length > 0,
      isChild: isChild,
      onDrillDown: _onDrillDownSignupData
    }, {
      className: 'left-align' + (isChild ? '' : ' highlight-cell')
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Summary'),
    isLoading: isLoading
  }, summaryData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-container"
  }, _renderTotalData(), _renderSignupData()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DepositAmountSummaryWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetail.jsx":
/*!************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetail.jsx ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _NewlyRegisterUsersSummaryWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewlyRegisterUsersSummaryWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersSummaryWidget.jsx");
/* harmony import */ var _NewlyRegisterUsersDetailWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewlyRegisterUsersDetailWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetailWidget.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");








const NewlyRegisterUsersDetail = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [sortInfoDetailWidget, setSortInfoDetailWidget] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_6__["DefaultSortInfo"]);

  const handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__["default"].getNewlyRegisterUsersExportAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      allowedCompare,
      sortInfo: sortInfoDetailWidget
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__["default"].exportNewlyRegisterUsersData(exportParams);
  };

  const _renderCaption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "highlight-detail-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NewlyRegisteredUsers')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ExportToExcel')
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-detail"
  }, _renderCaption(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewlyRegisterUsersSummaryWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reportDate: reportDate,
    compareDate: compareDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency,
    allowedCompare: allowedCompare
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewlyRegisterUsersDetailWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSort: setSortInfoDetailWidget,
    sortInfo: sortInfoDetailWidget,
    reportDate: reportDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersDetail));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetailWidget.jsx":
/*!******************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetailWidget.jsx ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const NewlyRegisterUsersDetailWidget = ({
  reportDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  sortInfo,
  onSort
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detailData, setDetailData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DefaultPagingOption"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });
    setTimeout(() => {
      _fetchData(apiParams, null, data => {
        const newPagingOption = getNewPagingOption(null, null, data.totalRows);
        setPagingOption(newPagingOption);
      });
    }, 100);
  }, [reportDate]);

  const _fetchData = (params, before, after) => {
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchNewlyRegisterUsersDetailData(params, () => {
      before && before();
      setLoading(true);
    }, response => {
      response.isSuccess && after && after(response.data);
      setDetailData(response.data);
      setLoading(false);
    });
  };

  const _handleSort = (sortBy, sortType) => {
    const sortInfo = {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    };
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });

    onSort && onSort(sortInfo);
  };

  const _handlePaging = (pageIndex, pageSize) => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption: {
        PageIndex: pageIndex,
        PageSize: pageSize
      },
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
      setPagingOption(newPagingOption);
    });
  };

  const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
    return _objectSpread(_objectSpread(_objectSpread({}, pagingOption), sortInfo), {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };

  const _renderHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].currency].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].affCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].affCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].totalDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].totalDepositAmount].name));
  };

  const _renderBody = () => {
    const {
      dataList
    } = detailData;
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId], " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].currency].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].currency]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].affCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].affCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit] ? _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Yes') : _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('No')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].totalDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].totalDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"]))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Details'),
    isLoading: isLoading
  }, detailData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Pager"], {
    pageOption: pagingOption,
    onPaging: _handlePaging
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    minWidth: 650,
    autoWidth: true,
    maxWidth: window.innerWidth,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    containerPadding: 55,
    shouldResetScrollPosition: isLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersDetailWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersSummaryWidget.jsx":
/*!*******************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersSummaryWidget.jsx ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_GroupCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/GroupCell */ "./www/js/source/reactpages/pages/report/marketing/components/common/GroupCell.jsx");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const NewlyRegisterUsersSummaryWidget = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [summaryData, setSummaryData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersSummaryAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].fetchNewlyRegisterUsersSummaryData(apiParams, () => {
      setLoading(true);
    }, response => {
      setSummaryData(response.data);
      setLoading(false);
    });
  }, [reportDate, compareDate]);

  const _renderTotalData = () => {
    const {
      totalData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].total].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].newlyRegisterUsers].name), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].compareNewlyRegisterUsers].name), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].changeRate].name));
    const item = totalData[0];
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].changeRate], 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getColorRate(roundRate);
    const body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].total].attributes, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NRU')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].newlyRegisterUsers])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].compareNewlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].compareNewlyRegisterUsers])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _extends({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].changeRate].attributes, {
      className: `${_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["TotalNRUGridColumns"].changeRate].attributes.className} ${colorRate}`
    }), displayRate));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: window.innerWidth,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: body,
      containerPadding: 70
    }));
  };

  const _renderCampaignData = () => {
    const {
      campaignData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusName].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusName].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].newlyRegisterUsers].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].newlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].depositUsers].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].depositUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].firstDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].firstDepositAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].totalDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].totalDepositAmount].name));
    const body = campaignData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusCode] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].bonusName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].newlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].depositUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].depositUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].totalDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["CampaignNRUGridColumns"].totalDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"]))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: window.innerWidth,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: body,
      containerPadding: 70
    }));
  };

  const _onDrillDownSignupData = newSignupData => {
    const newSummaryData = _objectSpread({}, summaryData);

    newSummaryData.signupData = newSignupData;
    setSummaryData(newSummaryData);
  };

  const _renderSignupData = () => {
    const {
      signupData,
      totalSignupData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].url].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].newlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].depositUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].firstDepositAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].totalDepositAmount].name));
    const body = signupData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      key: `${item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].source]}-${item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].url]}`,
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"]
    }, _renderGroupSignupCell(item, signupData), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].newlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].depositUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].depositUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].totalDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].totalDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"]))));
    const totalRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align total-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Total')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalNewlyRegisterUsers, 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalDepositUsers, 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalFirstDepositAmount, 2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align total-cell"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(totalSignupData.totalDepositAmount, 2)));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: window.innerWidth,
      autoWidth: true,
      autoHeight: false,
      bodyHeight: 400,
      header: header,
      body: [...body, totalRow],
      containerPadding: 70
    }));
  };

  const _renderGroupSignupCell = (item, signupData) => {
    const isChild = !item.noGrouping && (!item.childs || !item.childs.length);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_GroupCell__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      displayText: item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].url] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None'),
      rowData: item,
      dataList: signupData,
      fieldKey: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["SignupNRUGridColumns"].url,
      allowedDrillDown: !item.noGrouping && item.childs && item.childs.length > 0,
      isChild: isChild,
      onDrillDown: _onDrillDownSignupData
    }, {
      className: 'left-align' + (isChild ? '' : ' highlight-cell')
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Summary'),
    isLoading: isLoading
  }, summaryData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-container"
  }, _renderTotalData(), _renderCampaignData(), _renderSignupData()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersSummaryWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetail.jsx":
/*!***********************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetail.jsx ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _WithdrawalAmountSummaryWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WithdrawalAmountSummaryWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountSummaryWidget.jsx");
/* harmony import */ var _WithdrawalAmountDetailWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WithdrawalAmountDetailWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetailWidget.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");








const WithdrawalAmountDetail = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [sortInfoDetailWidget, setSortInfoDetailWidget] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_6__["DefaultSortInfo"]);

  const handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__["default"].getWithdrawalAmountExportAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      allowedCompare,
      sortInfo: sortInfoDetailWidget
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__["default"].exportWithdrawalAmountData(exportParams);
  };

  const _renderCaption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "highlight-detail-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('WithdrawalAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ExportToExcel')
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "highlight-detail"
  }, _renderCaption(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithdrawalAmountSummaryWidget__WEBPACK_IMPORTED_MODULE_4__["default"], {
    reportDate: reportDate,
    compareDate: compareDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand,
    selectedCurrency: selectedCurrency,
    allowedCompare: allowedCompare
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithdrawalAmountDetailWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSort: setSortInfoDetailWidget,
    sortInfo: sortInfoDetailWidget,
    reportDate: reportDate,
    baseCurrency: baseCurrency,
    selectedCurrency: selectedCurrency,
    selectedBrand: selectedBrand
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WithdrawalAmountDetail));
;

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetailWidget.jsx":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetailWidget.jsx ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const WithdrawalAmountDetailWidget = ({
  reportDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  sortInfo,
  onSort
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detailData, setDetailData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DefaultPagingOption"]);
  const MAX_WIDTH = Math.min(document.body.clientWidth, 1360);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getWithdrawalAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });
  }, [reportDate]);

  const _fetchData = (params, before, after) => {
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchWithdrawalAmountDetailData(params, () => {
      before && before();
      setLoading(true);
    }, response => {
      response.isSuccess && after && after(response.data);
      setDetailData(response.data);
      setLoading(false);
    });
  };

  const _handleSort = (sortBy, sortType) => {
    const sortInfo = {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    };
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getWithdrawalAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });

    onSort && onSort(sortInfo);
  };

  const _handlePaging = (pageIndex, pageSize) => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getWithdrawalAmountDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency,
      pagingOption: {
        PageIndex: pageIndex,
        PageSize: pageSize
      },
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
      setPagingOption(newPagingOption);
    });
  };

  const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
    return _objectSpread(_objectSpread(_objectSpread({}, pagingOption), sortInfo), {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };

  const _renderHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].rowId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].rowId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].username].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].username].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].currency].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].registeredDateDisplay].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].registeredDateDisplay].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].numberOfWithdrawals].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].numberOfWithdrawals].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].withdrawalAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].withdrawalAmount].name));
  };

  const _renderBody = () => {
    const {
      dataList
    } = detailData;
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].rowId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].rowId], " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].username].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].username]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].currency].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].currency]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].registeredDateDisplay].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].registeredDateDisplay]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].numberOfWithdrawals].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].numberOfWithdrawals], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetaiWithdrawalAmountGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].withdrawalAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailWithdrawalAmountGridColumns"].withdrawalAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"]))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Details'),
    isLoading: isLoading
  }, detailData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Pager"], {
    pageOption: pagingOption,
    onPaging: _handlePaging
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    minWidth: 650,
    autoWidth: true,
    maxWidth: document.body.clientWidth,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    containerPadding: 55,
    shouldResetScrollPosition: isLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WithdrawalAmountDetailWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountSummaryWidget.jsx":
/*!******************************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountSummaryWidget.jsx ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");










const WithdrawalAmountSummaryWidget = ({
  reportDate,
  compareDate,
  baseCurrency,
  selectedBrand,
  selectedCurrency,
  allowedCompare
}) => {
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [summaryData, setSummaryData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getWithdrawalAmountSummaryAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      selectedCurrency
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchWithdrawalAmountSummaryData(apiParams, () => {
      setLoading(true);
    }, response => {
      setSummaryData(response.data);
      setLoading(false);
    });
  }, [reportDate, compareDate]);

  const _header = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ReportDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('CompareDate')), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ChangePercent')));
  }, []);

  const _renderTotalAmountRow = () => {
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(summaryData.withdrawalAmountChangeRate, 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getColorRate(roundRate);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align highlight-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalWithdrawalAmount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(summaryData.withdrawalAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(summaryData.compareWithdrawalAmount, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: `right-align ${colorRate}`
    }, displayRate));
  };

  const _renderTotalUsersRow = () => {
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(summaryData.withdrawalUsersChangeRate, 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getColorRate(roundRate);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "left-align highlight-cell"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalWithdrawalUsers')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, summaryData.withdrawalUsers === 0 ? '-' : _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(summaryData.withdrawalUsers, 0)), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: "right-align"
    }, summaryData.compareWithdrawalUsers === 0 ? '-' : _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(summaryData.compareWithdrawalUsers, 0)), allowedCompare && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], {
      className: `right-align ${colorRate}`
    }, displayRate));
  };

  const _renderTotalData = () => {
    const totalAmountRow = _renderTotalAmountRow();

    const totalUsersRow = _renderTotalUsersRow();

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: document.body.clientWidth,
      autoWidth: true,
      autoHeight: true,
      header: _header,
      body: [totalAmountRow, totalUsersRow],
      containerPadding: 70
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Summary'),
    isLoading: isLoading
  }, summaryData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-container"
  }, _renderTotalData()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(WithdrawalAmountSummaryWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/index.js":
/*!************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/index.js ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NRU_NewlyRegisterUsersDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NRU/NewlyRegisterUsersDetail */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NRU/NewlyRegisterUsersDetail.jsx");
/* harmony import */ var _WithdrawalAmount_WithdrawalAmountDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WithdrawalAmount/WithdrawalAmountDetail */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/WithdrawalAmount/WithdrawalAmountDetail.jsx");
/* harmony import */ var _BonusClaimed_BonusClaimedDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BonusClaimed/BonusClaimedDetail */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/BonusClaimed/BonusClaimedDetail.jsx");
/* harmony import */ var _DepositAmount_DepositAmountDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DepositAmount/DepositAmountDetail */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/DepositAmount/DepositAmountDetail.jsx");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");
/* harmony import */ var _constants_chartConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants/chartConst */ "./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const params = window.params;
const initState = {
  selectedBox: params.selectedBox,
  baseCurrency: params.baseCurrency,
  selectedBrand: params.selectedBrand,
  selectedCurrency: params.selectedCurrency,
  reportDate: {
    fromDate: params.fromDate,
    toDate: params.toDate
  },
  compareDate: {
    fromDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_6__["default"].convertToDateStructure(new Date(params.compareFromDate)),
    toDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_6__["default"].convertToDateStructure(new Date(params.compareToDate))
  },
  allowedCompare: params.allowedCompare
};

const DetailPopup = (_ref) => {
  let {
    selectedBox
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["selectedBox"]);

  const _render = () => {
    if (selectedBox === _constants_chartConst__WEBPACK_IMPORTED_MODULE_7__["PerformanceHighlightDetailBoxKeys"].NewlyRegisteredUsers) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NRU_NewlyRegisterUsersDetail__WEBPACK_IMPORTED_MODULE_2__["default"], rest);
    }

    if (selectedBox === _constants_chartConst__WEBPACK_IMPORTED_MODULE_7__["PerformanceHighlightDetailBoxKeys"].WithdrawalAmount) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WithdrawalAmount_WithdrawalAmountDetail__WEBPACK_IMPORTED_MODULE_3__["default"], rest);
    }

    if (selectedBox === _constants_chartConst__WEBPACK_IMPORTED_MODULE_7__["PerformanceHighlightDetailBoxKeys"].BonusClaimed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BonusClaimed_BonusClaimedDetail__WEBPACK_IMPORTED_MODULE_4__["default"], rest);
    }

    if (selectedBox === _constants_chartConst__WEBPACK_IMPORTED_MODULE_7__["PerformanceHighlightDetailBoxKeys"].DepositAmount) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DepositAmount_DepositAmountDetail__WEBPACK_IMPORTED_MODULE_5__["default"], rest);
    }

    return null;
  };

  return _render();
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailPopup, initState), document.getElementById("app-container"));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js ***!
  \*********************************************************************************/
/*! exports provided: ChartMode, ChartModeOptions, UserActivitiesChartDataMapping, AvgRevenueChartDataMapping, PerformanceHighlightDetailBoxKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMode", function() { return ChartMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModeOptions", function() { return ChartModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesChartDataMapping", function() { return UserActivitiesChartDataMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgRevenueChartDataMapping", function() { return AvgRevenueChartDataMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceHighlightDetailBoxKeys", function() { return PerformanceHighlightDetailBoxKeys; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");


const ChartMode = {
  Bar: 1,
  Line: 2
};
const ChartModeOptions = [{
  value: ChartMode.Bar,
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-bar-chart"
  })
}, {
  value: ChartMode.Line,
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-line-chart"
  })
}];
const ChartColor = {
  Color1: '#F16F37',
  Color2: '#194170'
};
const UserActivitiesChartDataMapping = {
  labelField: 'time',
  isDecimal: false,
  datasets: [{
    legend: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('AUActiveUsers'),
    dataField: 'activeUsers',
    color: ChartColor.Color1
  }, {
    legend: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NRUNewlyRegisterdUsers'),
    dataField: 'newlyRegisterUsers',
    color: ChartColor.Color2
  }]
};
const AvgRevenueChartDataMapping = {
  labelField: 'productName',
  isDecimal: true,
  datasets: [{
    legend: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ARPUAllUsers'),
    dataField: 'allUsersRevenue',
    color: ChartColor.Color1
  }, {
    legend: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('ARPPUPaidUsers'),
    dataField: 'paidUsersRevenue',
    color: ChartColor.Color2
  }]
};
const PerformanceHighlightDetailBoxKeys = {
  BonusClaimed: 'BonusClaimed',
  NewlyRegisteredUsers: 'NewlyRegisteredUsers',
  WithdrawalAmount: 'WithdrawalAmount',
  DepositAmount: 'DepositAmount'
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js ***!
  \********************************************************************************/
/*! exports provided: TotalNRUGridColumns, TotalNRUGridConfig, CampaignNRUGridColumns, CampaignNRUGridConfig, SignupNRUGridColumns, SignupNRUGridConfig, DetailNRUGridColumns, DetailNRUGridConfig, DetailWithdrawalAmountGridColumns, DetaiWithdrawalAmountGridConfig, DetailBonusClaimedGridColumns, DetaiBonusClaimedGridConfig, DetailDepositAmountGridColumns, DetailDepositAmountGridConfig, DefaultPagingOption, DefaultSortInfo, DigitsAmount, StyleRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalNRUGridColumns", function() { return TotalNRUGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalNRUGridConfig", function() { return TotalNRUGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignNRUGridColumns", function() { return CampaignNRUGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignNRUGridConfig", function() { return CampaignNRUGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupNRUGridColumns", function() { return SignupNRUGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupNRUGridConfig", function() { return SignupNRUGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNRUGridColumns", function() { return DetailNRUGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailNRUGridConfig", function() { return DetailNRUGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailWithdrawalAmountGridColumns", function() { return DetailWithdrawalAmountGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaiWithdrawalAmountGridConfig", function() { return DetaiWithdrawalAmountGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBonusClaimedGridColumns", function() { return DetailBonusClaimedGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetaiBonusClaimedGridConfig", function() { return DetaiBonusClaimedGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDepositAmountGridColumns", function() { return DetailDepositAmountGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailDepositAmountGridConfig", function() { return DetailDepositAmountGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPagingOption", function() { return DefaultPagingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSortInfo", function() { return DefaultSortInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitsAmount", function() { return DigitsAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRow", function() { return StyleRow; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const TotalNRUGridColumns = {
  total: 'total',
  newlyRegisterUsers: 'newlyRegisterUsers',
  compareNewlyRegisterUsers: 'compareNewlyRegisterUsers',
  changeRate: 'changeRate'
};
const TotalNRUGridConfig = {
  [TotalNRUGridColumns.total]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Total'),
    attributes: {
      className: "left-align highlight-cell"
    }
  },
  [TotalNRUGridColumns.newlyRegisterUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ReportDate'),
    attributes: {
      className: "right-align"
    }
  },
  [TotalNRUGridColumns.compareNewlyRegisterUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('CompareDate'),
    attributes: {
      className: "right-align"
    }
  },
  [TotalNRUGridColumns.changeRate]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ChangePercent'),
    attributes: {
      className: "right-align"
    }
  }
};
const CampaignNRUGridColumns = {
  bonusCode: 'bonusCode',
  bonusName: 'bonusName',
  newlyRegisterUsers: 'newlyRegisterUsers',
  depositUsers: 'depositUsers',
  firstDepositAmount: 'firstDepositAmount',
  totalDepositAmount: 'totalDepositAmount'
};
const CampaignNRUGridConfig = {
  [CampaignNRUGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      colWidth: 60,
      className: "left-align highlight-cell"
    }
  },
  [CampaignNRUGridColumns.bonusName]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusName'),
    attributes: {
      colWidth: 100,
      className: "left-align"
    }
  },
  [CampaignNRUGridColumns.newlyRegisterUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('NRU'),
    attributes: {
      colWidth: 50,
      className: "right-align"
    }
  },
  [CampaignNRUGridColumns.depositUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Deposit'),
    attributes: {
      colWidth: 50,
      className: "right-align"
    }
  },
  [CampaignNRUGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      colWidth: 50,
      className: "right-align"
    }
  },
  [CampaignNRUGridColumns.totalDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDepositAmount'),
    attributes: {
      colWidth: 50,
      className: "right-align"
    }
  }
};
const SignupNRUGridColumns = {
  url: 'signupUrl',
  source: 'signupSource',
  newlyRegisterUsers: 'newlyRegisterUsers',
  depositUsers: 'depositUsers',
  firstDepositAmount: 'firstDepositAmount',
  totalDepositAmount: 'totalDepositAmount'
};
const SignupNRUGridConfig = {
  [SignupNRUGridColumns.url]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      className: "left-align highlight-cell"
    }
  },
  [SignupNRUGridColumns.newlyRegisterUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('NRU'),
    attributes: {
      className: "right-align"
    }
  },
  [SignupNRUGridColumns.depositUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Deposit'),
    attributes: {
      className: "right-align"
    }
  },
  [SignupNRUGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      className: "right-align"
    }
  },
  [SignupNRUGridColumns.totalDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDepositAmount'),
    attributes: {
      className: "right-align"
    }
  }
};
const DetailNRUGridColumns = {
  rowId: 'rowId',
  bonusCode: 'bonusCode',
  username: 'username',
  currency: 'currency',
  registeredDateDisplay: 'registeredDateDisplay',
  signupUrl: 'signupUrl',
  affCode: 'affCode',
  isDeposit: 'isDeposit',
  firstDepositAmount: 'firstDepositAmount',
  totalDepositAmount: 'totalDepositAmount'
};
const DetailNRUGridConfig = {
  [DetailNRUGridColumns.rowId]: {
    name: '#',
    attributes: {
      colWidth: 30,
      className: "center-align"
    }
  },
  [DetailNRUGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      sortBy: 1,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailNRUGridColumns.username]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Username'),
    attributes: {
      sortBy: 2,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailNRUGridColumns.currency]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Currency'),
    attributes: {
      sortBy: 3,
      colWidth: 50,
      className: "left-align"
    }
  },
  [DetailNRUGridColumns.registeredDateDisplay]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('RegisteredDate'),
    attributes: {
      sortBy: 4,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailNRUGridColumns.signupUrl]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      sortBy: 5,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailNRUGridColumns.affCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('AffCode'),
    attributes: {
      sortBy: 6,
      colWidth: 50,
      className: "right-align"
    }
  },
  [DetailNRUGridColumns.isDeposit]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Deposit'),
    attributes: {
      sortBy: 7,
      colWidth: 50,
      className: "center-align"
    }
  },
  [DetailNRUGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      sortBy: 8,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailNRUGridColumns.totalDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDepositAmount'),
    attributes: {
      sortBy: 9,
      colWidth: 80,
      className: "right-align"
    }
  }
};
const DetailWithdrawalAmountGridColumns = {
  rowId: 'rowId',
  username: 'username',
  currency: 'currency',
  registeredDateDisplay: 'registeredDateDisplay',
  numberOfWithdrawals: 'numberOfWithdrawals',
  withdrawalAmount: 'totalWithdrawalAmount'
};
const DetaiWithdrawalAmountGridConfig = {
  [DetailWithdrawalAmountGridColumns.rowId]: {
    name: '#',
    attributes: {
      colWidth: 30,
      className: "center-align"
    }
  },
  [DetailWithdrawalAmountGridColumns.username]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Username'),
    attributes: {
      sortBy: 1,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailWithdrawalAmountGridColumns.currency]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Currency'),
    attributes: {
      sortBy: 2,
      colWidth: 60,
      className: "left-align"
    }
  },
  [DetailWithdrawalAmountGridColumns.registeredDateDisplay]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('RegisteredDate'),
    attributes: {
      sortBy: 3,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailWithdrawalAmountGridColumns.numberOfWithdrawals]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('NumberOfWithdrawals'),
    attributes: {
      sortBy: 4,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailWithdrawalAmountGridColumns.withdrawalAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalWithdrawalAmount'),
    attributes: {
      sortBy: 5,
      colWidth: 80,
      className: "right-align"
    }
  }
};
const DetailBonusClaimedGridColumns = {
  rowId: 'rowId',
  bonusCode: 'bonusCode',
  username: 'username',
  currency: 'currency',
  registeredDateDisplay: 'registeredDateDisplay',
  signupUrl: 'signupUrl',
  affCode: 'affCode',
  depositAmount: 'totalDepositAmount',
  withdrawalAmount: 'totalWithdrawalAmount',
  bonusAmount: 'totalBonusAmount'
};
const DetaiBonusClaimedGridConfig = {
  [DetailBonusClaimedGridColumns.rowId]: {
    name: '#',
    attributes: {
      colWidth: 30,
      className: "center-align"
    }
  },
  [DetailBonusClaimedGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      sortBy: 1,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailBonusClaimedGridColumns.username]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Username'),
    attributes: {
      sortBy: 2,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailBonusClaimedGridColumns.currency]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('currency'),
    attributes: {
      sortBy: 3,
      colWidth: 50,
      className: "left-align"
    }
  },
  [DetailBonusClaimedGridColumns.registeredDateDisplay]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('RegisteredDate'),
    attributes: {
      sortBy: 4,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailBonusClaimedGridColumns.signupUrl]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      sortBy: 5,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailBonusClaimedGridColumns.affCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('AffCode'),
    attributes: {
      sortBy: 6,
      colWidth: 50,
      className: "right-align"
    }
  },
  [DetailBonusClaimedGridColumns.depositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDepositAmount'),
    attributes: {
      sortBy: 7,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailBonusClaimedGridColumns.withdrawalAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalWithdrawalAmount'),
    attributes: {
      sortBy: 8,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailBonusClaimedGridColumns.bonusAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalBonusAmountClaimed'),
    attributes: {
      sortBy: 9,
      colWidth: 80,
      className: "right-align"
    }
  }
};
const DetailDepositAmountGridColumns = {
  rowId: 'rowId',
  username: 'username',
  currency: 'currency',
  registeredDateDisplay: 'registeredDateDisplay',
  signupUrl: 'signupUrl',
  affCode: 'affCode',
  firstDepositAmount: 'firstDepositAmount',
  numberOfDeposits: 'noOfDeposits',
  depositAmount: 'totalDepositAmount'
};
const DetailDepositAmountGridConfig = {
  [DetailDepositAmountGridColumns.rowId]: {
    name: '#',
    attributes: {
      colWidth: 30,
      className: "center-align"
    }
  },
  [DetailDepositAmountGridColumns.username]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Username'),
    attributes: {
      sortBy: 1,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailDepositAmountGridColumns.currency]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Currency'),
    attributes: {
      sortBy: 2,
      colWidth: 50,
      className: "left-align"
    }
  },
  [DetailDepositAmountGridColumns.registeredDateDisplay]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('RegisteredDate'),
    attributes: {
      sortBy: 3,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailDepositAmountGridColumns.signupUrl]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      sortBy: 4,
      className: "left-align"
    }
  },
  [DetailDepositAmountGridColumns.affCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('AffCode'),
    attributes: {
      sortBy: 5,
      colWidth: 50,
      className: "right-align"
    }
  },
  [DetailDepositAmountGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      sortBy: 6,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailDepositAmountGridColumns.numberOfDeposits]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('NumberOfDeposits'),
    attributes: {
      sortBy: 7,
      colWidth: 80,
      className: "right-align"
    }
  },
  [DetailDepositAmountGridColumns.depositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDepositAmount'),
    attributes: {
      sortBy: 8,
      colWidth: 80,
      className: "right-align"
    }
  }
};
const DefaultPagingOption = {
  PageIndex: 1,
  PageSize: 100,
  TotalItem: 0,
  PageList: [100, 200, 500, 1000]
};
const DefaultSortInfo = {
  sortbyId: 1,
  isSortAsc: true
};
const DigitsAmount = 2;
const StyleRow = {
  height: '25px'
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js ***!
  \*********************************************************************************/
/*! exports provided: Url, FileNameExport, errorResponse, successResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNameExport", function() { return FileNameExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorResponse", function() { return errorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successResponse", function() { return successResponse; });
const Url = {
  performanceHighlight: 'Api/Marketing/PerformanceHighlight/GetData',
  performanceHighlightExport: 'Api/Marketing/PerformanceHighlight/ExportData',
  userActivities: 'Api/Marketing/UserActivities/GetData',
  avgRevenue: 'Api/Marketing/Revenue/GetAvgData',
  newlyRegisterUsersSummary: 'Api/Marketing/NewlyRegisterUsers/GetSummaryData',
  newlyRegisterUsersDetail: 'Api/Marketing/NewlyRegisterUsers/GetDetailsData',
  newlyRegisterUsersExport: 'Api/Marketing/NewlyRegisterUsers/ExportData',
  withdrawalAmountSummary: 'Api/Marketing/Withdrawal/GetSummaryData',
  withdrawalAmountDetail: 'Api/Marketing/Withdrawal/GetDetailsData',
  withdrawalAmountExport: 'Api/Marketing/Withdrawal/ExportData',
  bonusClaimedSummary: 'Api/Marketing/BonusClaimed/GetSummaryData',
  bonusClaimedDetail: 'Api/Marketing/BonusClaimed/GetDetailsData',
  bonusClaimedExport: 'Api/Marketing/BonusClaimed/ExportData',
  depositAmountSummary: 'Api/Marketing/DepositAmount/GetSummaryData',
  depositAmountDetail: 'Api/Marketing/DepositAmount/GetDetailsData',
  depositAmountExport: 'Api/Marketing/DepositAmount/ExportData',
  performanceHighlightDetailFrame: 'MarketingReport/PerformanceHighlightDetail'
};
const FileNameExport = {
  newlyRegisterUsers: 'MarketingReport_NewlyRegisterUsers.xls',
  withdrawalAmount: 'MarketingReport_WithdrawalAmount.xls',
  bonusClaimed: 'MarketingReport_BonusAmountClaimed.xls',
  depositAmount: 'MarketingReport_DepositAmount.xls',
  performanceHighlight: 'MarketingReport_BusinessPerformanceHighlight.xls'
};
const errorResponse = {
  data: null,
  isSuccess: false
};
const successResponse = {
  isSuccess: true
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js":
/*!****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTimeHelper; });
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let today = null;
class DateTimeHelper {
  static getToday() {
    if (today) {
      return today;
    }

    today = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_0__["default"].today ? new Date(_jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_0__["default"].today) : new Date();
    return today;
  }

}

_defineProperty(DateTimeHelper, "getDiffDays", (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

_defineProperty(DateTimeHelper, "getDiffDaysOfDateStructure", (dateStructure1, dateStructure2) => {
  const dateObject1 = DateTimeHelper.convertToDateObject(dateStructure1);
  const dateObject2 = DateTimeHelper.convertToDateObject(dateStructure2);
  const diffDays = DateTimeHelper.getDiffDays(dateObject1, dateObject2);
  return diffDays;
});

_defineProperty(DateTimeHelper, "addDays", (date, numberOfDays) => {
  const cloneDate = new Date(date);
  const newDate = new Date(cloneDate.setDate(cloneDate.getDate() + numberOfDays));
  ;
  return newDate;
});

_defineProperty(DateTimeHelper, "addYears", (date, numberOfYears) => {
  const cloneDate = new Date(date);
  const newDate = new Date(cloneDate.setFullYear(cloneDate.getFullYear() + numberOfYears));
  ;
  return newDate;
});

_defineProperty(DateTimeHelper, "formatDateRangeToString", (fromDate, toDate) => {
  const displayFromDate = DateTimeHelper.formatDateStructureToString(fromDate);
  const displayToDate = DateTimeHelper.formatDateStructureToString(toDate);
  return `${displayFromDate} - ${displayToDate}`;
});

_defineProperty(DateTimeHelper, "formatDateStructureToString", ({
  year,
  month,
  day
}) => {
  return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
});

_defineProperty(DateTimeHelper, "convertToDateStructure", dateObject => {
  return {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1,
    day: dateObject.getDate()
  };
});

_defineProperty(DateTimeHelper, "convertToDateObject", dateStructure => {
  const {
    year,
    month,
    day
  } = dateStructure;
  return new Date(year, month - 1, day);
});

_defineProperty(DateTimeHelper, "isEqualDate", (date1, date2) => {
  return date1.year === date2.year && date1.month === date2.month && date1.day === date2.day;
});

_defineProperty(DateTimeHelper, "getYesterdayDateStructure", () => {
  const yesterday = DateTimeHelper.addDays(DateTimeHelper.getToday(), -1);
  const yesterdayObject = DateTimeHelper.convertToDateStructure(yesterday);
  return yesterdayObject;
});

_defineProperty(DateTimeHelper, "getTodayDateStructure", () => {
  const today = DateTimeHelper.getToday();
  const todayObject = DateTimeHelper.convertToDateStructure(today);
  return todayObject;
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberHelper; });
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class NumberHelper {
  static displayRate(rate) {
    return `${rate > 0 ? '+' : ''}${_jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_0__["default"].format(rate)}%`;
  }

}

_defineProperty(NumberHelper, "getColorRate", rate => {
  if (rate === 0) {
    return '';
  }

  return rate > 0 ? 'green-color' : 'red-color';
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
/* harmony import */ var _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class DataService {}

_defineProperty(DataService, "getCommonAPIParams", ({
  selectedBrand,
  selectedCurrency,
  reportDate
}) => {
  const params = {
    brandId: selectedBrand,
    currencyIdList: selectedCurrency,
    fromDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].convertDateToString(reportDate.fromDate),
    toDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].convertDateToString(reportDate.toDate)
  };
  return params;
});

_defineProperty(DataService, "getPerformanceHighlightAPIParams", ({
  selectedBrand,
  selectedCurrency,
  selectedBaseCurrency,
  reportDate,
  compareDate,
  fromLastXDays
}) => {
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    selectedCurrency,
    reportDate
  });

  const params = _objectSpread(_objectSpread({}, commonParams), {
    compareFromDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.fromDate),
    compareToDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.toDate),
    baseCurrency: selectedBaseCurrency,
    fromLastXDays
  });

  return params;
});

_defineProperty(DataService, "getPerformanceHighlightPopupSummaryAPIParams", (_ref) => {
  let {
    baseCurrency
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["baseCurrency"]);

  const commonParams = DataService.getPerformanceHighlightAPIParams(rest);

  const params = _objectSpread(_objectSpread({}, commonParams), {}, {
    baseCurrency
  });

  return params;
});

_defineProperty(DataService, "getPerformanceHighlightPopupDetailAPIParams", (_ref2) => {
  let {
    reportDate,
    selectedBrand,
    selectedCurrency,
    pagingOption,
    sortInfo
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["reportDate", "selectedBrand", "selectedCurrency", "pagingOption", "sortInfo"]);

  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    selectedCurrency,
    reportDate
  });

  const params = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonParams), sortInfo), {
    pageIndex: pagingOption.PageIndex,
    pageSize: pagingOption.PageSize
  }), rest);

  return params;
});

_defineProperty(DataService, "getPerformanceHighlightPopupExportAPIParams", (_ref3) => {
  let {
    baseCurrency,
    sortInfo,
    allowedCompare
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["baseCurrency", "sortInfo", "allowedCompare"]);

  const commonParams = DataService.getPerformanceHighlightAPIParams(rest);

  const params = _objectSpread(_objectSpread(_objectSpread({}, commonParams), sortInfo), {}, {
    baseCurrency,
    allowedCompare
  });

  return params;
});

_defineProperty(DataService, "getPerformanceHighlightExportAPIParams", ({
  selectedBrand,
  selectedCurrency,
  reportDate,
  selectedBaseCurrency,
  fromLastXDays,
  currencyNameList
}) => {
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    selectedCurrency,
    reportDate
  });

  const params = _objectSpread(_objectSpread({}, commonParams), {}, {
    fromLastXDays,
    baseCurrency: selectedBaseCurrency,
    currencyNameList
  });

  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersSummaryAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupSummaryAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersDetailAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupDetailAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersExportAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupExportAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getWithdrawalAmountSummaryAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupSummaryAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getWithdrawalAmountDetailAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupDetailAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getWithdrawalAmountExportAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupExportAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getBonusClaimedSummaryAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupSummaryAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getBonusClaimedDetailAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupDetailAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getBonusClaimedExportAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupExportAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getDepositAmountSummaryAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupSummaryAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getDepositAmountDetailAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupDetailAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getDepositAmountExportAPIParams", filterData => {
  const params = DataService.getPerformanceHighlightPopupExportAPIParams(filterData);
  return params;
});

_defineProperty(DataService, "getUserActivitiesAPIParams", filterData => {
  const {
    selectedBrand,
    selectedCurrency,
    reportDate,
    viewMode
  } = filterData;
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    selectedCurrency,
    reportDate
  });

  const params = _objectSpread(_objectSpread({}, commonParams), {
    viewMode
  });

  return params;
});

_defineProperty(DataService, "getAvgRevenueAPIParams", filterData => {
  const {
    selectedBrand,
    selectedCurrency,
    reportDate,
    selectedBaseCurrency,
    products
  } = filterData;
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    selectedCurrency,
    reportDate
  });

  const params = _objectSpread(_objectSpread({}, commonParams), {
    productIds: products,
    baseCurrency: selectedBaseCurrency
  });

  return params;
});

_defineProperty(DataService, "filterDataWithSelectedProducts", (avgRevenueData, products) => {
  const selectedProducts = products.split(',');
  const dicSelectedProducts = selectedProducts.reduce((prevValue, currentValue) => _objectSpread(_objectSpread({}, prevValue), {}, {
    [currentValue]: true
  }), {});
  const newData = avgRevenueData.filter(_ => dicSelectedProducts[_.productId]);
  return newData;
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js":
/*!***************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryService; });
/* harmony import */ var _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/DataService */ "./www/js/source/reactpages/lib/DataService.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/queryConst */ "./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class QueryService {
  /* detail popup*/
  static async exportNewlyRegisterUsersData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].newlyRegisterUsers);
    }

    ;
  }

  static async exportWithdrawalAmountData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].withdrawalAmountExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].withdrawalAmount);
    }

    ;
  }

  static async exportBonusClaimedData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusClaimedExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].bonusClaimed);
    }

    ;
  }

  static async exportDepositAmountData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].depositAmountExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].depositAmount);
    }

    ;
  }
  /* end detail popup*/


  static async exportPerformanceHighlightData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].performanceHighlightExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].performanceHighlight);
    }

    ;
  }

}

_defineProperty(QueryService, "fetchPerformanceHighlightData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].performanceHighlight, params));
  return data;
});

_defineProperty(QueryService, "fetchUserActivitiesData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].userActivities, params));
  return data;
});

_defineProperty(QueryService, "fetchAvgRevenueData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].avgRevenue, params));
  return data;
});

_defineProperty(QueryService, "fetchNewlyRegisterUsersSummaryData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersSummary, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchNewlyRegisterUsersDetailData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersDetail, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchWithdrawalAmountSummaryData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].withdrawalAmountSummary, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchWithdrawalAmountDetailData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].withdrawalAmountDetail, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchBonusClaimedSummaryData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusClaimedSummary, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchBonusClaimedDetailData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusClaimedDetail, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchDepositAmountSummaryData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].depositAmountSummary, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchDepositAmountDetailData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].depositAmountDetail, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchData", async apiCall => {
  try {
    const response = await apiCall();

    if (response.status === 200) {
      return _objectSpread(_objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["successResponse"]), {
        data: response.data
      });
    }
  } catch (e) {
    console.log(e);
  }

  return _objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["errorResponse"]);
});

/***/ })

/******/ });
//# sourceMappingURL=marketing-performancehighlightdetail.chunk.js.map
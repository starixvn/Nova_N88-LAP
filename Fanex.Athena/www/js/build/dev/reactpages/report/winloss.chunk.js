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
/******/ 		"www/js/build/dev/reactpages/report/winloss": 0
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
/******/ 	deferredModules.push(["./www/js/source/reactpages/pages/report/winloss/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/source/reactpages/actions/baseCurrencyAction.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/actions/baseCurrencyAction.js ***!
  \****************************************************************/
/*! exports provided: setSelectedBaseCurrency, setBaseCurrencyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBaseCurrency", function() { return setSelectedBaseCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseCurrencyList", function() { return setBaseCurrencyList; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedBaseCurrency = baseCurrency => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BASECURRENCY"],
    data: baseCurrency
  };
};
const setBaseCurrencyList = baseCurrencyList => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BASECURRENCY_LIST"],
    data: baseCurrencyList
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/brandAction.js":
/*!*********************************************************!*\
  !*** ./www/js/source/reactpages/actions/brandAction.js ***!
  \*********************************************************/
/*! exports provided: setSelectedBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBrand", function() { return setSelectedBrand; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedBrand = brandIds => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BRAND"],
    data: brandIds
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/currencyAction.js":
/*!************************************************************!*\
  !*** ./www/js/source/reactpages/actions/currencyAction.js ***!
  \************************************************************/
/*! exports provided: setSelectedCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedCurrency", function() { return setSelectedCurrency; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedCurrency = item => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_CURRENCY"],
    data: item
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/dateRangeAction.js":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/actions/dateRangeAction.js ***!
  \*************************************************************/
/*! exports provided: setDateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDateRange", function() { return setDateRange; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setDateRange = dateRange => {
  const range = {
    fromDate: dateRange.startDate,
    toDate: dateRange.endDate
  };
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_DATE_RANGE"],
    data: range
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/excludeTestAction.js":
/*!***************************************************************!*\
  !*** ./www/js/source/reactpages/actions/excludeTestAction.js ***!
  \***************************************************************/
/*! exports provided: changeIsExcludeTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeIsExcludeTest", function() { return changeIsExcludeTest; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const changeIsExcludeTest = checked => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_IS_EXCLUDE_TEST"],
    data: checked
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/gridDataAction.js":
/*!************************************************************!*\
  !*** ./www/js/source/reactpages/actions/gridDataAction.js ***!
  \************************************************************/
/*! exports provided: getGridData, setGridData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridData", function() { return getGridData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGridData", function() { return setGridData; });
/* harmony import */ var _jsroot_actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/actions/types.js */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _jsroot_lib_DataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/DataService.js */ "./www/js/source/reactpages/lib/DataService.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/actions/loaderAction */ "./www/js/source/reactpages/actions/loaderAction.js");




function getGridData(url, params, apiKey) {
  return async dispatch => {
    let apiCaller = null;

    if (apiKey) {
      apiCaller = _jsroot_lib_DataService_js__WEBPACK_IMPORTED_MODULE_1__["default"].postProxyData(apiKey, url, params);
    } else {
      apiCaller = _jsroot_lib_DataService_js__WEBPACK_IMPORTED_MODULE_1__["default"].postData(url, params);
    }

    try {
      var response = await apiCaller;
      response.data.timestamp = new Date().getTime();
      dispatch(setGridData(response.data));
    } catch (error) {
      handleError(error);
      dispatch(Object(_jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_3__["toggleLoader"])(false));
    }
  };
}

const handleError = error => {
  switch (error.response.status) {
    case 403:
      window.location.href = _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__["default"].resolveClientUrl('Utility/AccessDenied');
      break;

    default:
      alert("Sorry, an error occurred while processing your request.");
      break;
  }
};

function setGridData(data) {
  return {
    type: _jsroot_actions_types_js__WEBPACK_IMPORTED_MODULE_0__["SET_GRID_DATA"],
    data: data
  };
}

/***/ }),

/***/ "./www/js/source/reactpages/actions/loaderAction.js":
/*!**********************************************************!*\
  !*** ./www/js/source/reactpages/actions/loaderAction.js ***!
  \**********************************************************/
/*! exports provided: toggleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLoader", function() { return toggleLoader; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const toggleLoader = show => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_LOADER"],
    data: show
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/pagingOptionAction.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/actions/pagingOptionAction.js ***!
  \****************************************************************/
/*! exports provided: setPagingOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPagingOption", function() { return setPagingOption; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setPagingOption = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_PAGING_OPTION"],
    data
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/productAction.js":
/*!***********************************************************!*\
  !*** ./www/js/source/reactpages/actions/productAction.js ***!
  \***********************************************************/
/*! exports provided: setSelectedProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedProduct", function() { return setSelectedProduct; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedProduct = product => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_PRODUCT"],
    data: product
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/requestParamAction.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/actions/requestParamAction.js ***!
  \****************************************************************/
/*! exports provided: setRequestParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRequestParam", function() { return setRequestParam; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setRequestParam = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_REQUEST_PARAM"],
    data: data
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/settingDataAction.js":
/*!***************************************************************!*\
  !*** ./www/js/source/reactpages/actions/settingDataAction.js ***!
  \***************************************************************/
/*! exports provided: setSettingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettingData", function() { return setSettingData; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSettingData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SETTING_DATA"],
    data
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/sortOptionAction.js":
/*!**************************************************************!*\
  !*** ./www/js/source/reactpages/actions/sortOptionAction.js ***!
  \**************************************************************/
/*! exports provided: setSortOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSortOption", function() { return setSortOption; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSortOption = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SORT_OPTION"],
    data
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/actions/types.js":
/*!***************************************************!*\
  !*** ./www/js/source/reactpages/actions/types.js ***!
  \***************************************************/
/*! exports provided: FETCH_DATA, SET_GRID_DATA, SET_SELECTED_PRODUCT, SET_SELECTED_BRAND, SET_SELECTED_BASECURRENCY, SET_BASECURRENCY_LIST, SET_SELECTED_CURRENCY, TOGGLE_LOADER, CHANGE_IS_EXCLUDE_TEST, USER_GUIDE_CONTENT, SET_DATE_RANGE, GET_DATE_CONSTRAINT, CHANGE_IS_CONVERT_ALL, SET_SELECTED_STATUS, SET_SELECTED_PLATFORM, SET_SELECTED_LIVESTATUS, SET_USERNAME, SET_REQUEST_PARAM, SET_REPORT_TITLE, SET_PAGING_OPTION, SET_SORT_OPTION, SET_SETTING_DATA, SET_BONUS_NAME, SET_SELECTED_BONUS_TYPE, SET_SELECTED_BONUS_STATUS, SET_SELECTED_CLAIM_STATUS, SET_BONUS_CODE_LIST, SET_SELECTED_BONUS_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GRID_DATA", function() { return SET_GRID_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_PRODUCT", function() { return SET_SELECTED_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BRAND", function() { return SET_SELECTED_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BASECURRENCY", function() { return SET_SELECTED_BASECURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BASECURRENCY_LIST", function() { return SET_BASECURRENCY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_CURRENCY", function() { return SET_SELECTED_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LOADER", function() { return TOGGLE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_IS_EXCLUDE_TEST", function() { return CHANGE_IS_EXCLUDE_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_GUIDE_CONTENT", function() { return USER_GUIDE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DATE_RANGE", function() { return SET_DATE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DATE_CONSTRAINT", function() { return GET_DATE_CONSTRAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_IS_CONVERT_ALL", function() { return CHANGE_IS_CONVERT_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_STATUS", function() { return SET_SELECTED_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_PLATFORM", function() { return SET_SELECTED_PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_LIVESTATUS", function() { return SET_SELECTED_LIVESTATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REQUEST_PARAM", function() { return SET_REQUEST_PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REPORT_TITLE", function() { return SET_REPORT_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PAGING_OPTION", function() { return SET_PAGING_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORT_OPTION", function() { return SET_SORT_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SETTING_DATA", function() { return SET_SETTING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BONUS_NAME", function() { return SET_BONUS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BONUS_TYPE", function() { return SET_SELECTED_BONUS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BONUS_STATUS", function() { return SET_SELECTED_BONUS_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_CLAIM_STATUS", function() { return SET_SELECTED_CLAIM_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BONUS_CODE_LIST", function() { return SET_BONUS_CODE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BONUS_CODE", function() { return SET_SELECTED_BONUS_CODE; });
const FETCH_DATA = 'FETCH_DATA';
const SET_GRID_DATA = "SET_GRID_DATA";
/* Product */

const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
/* Brand */

const SET_SELECTED_BRAND = "SET_SELECTED_BRAND";
/* Base Currency */

const SET_SELECTED_BASECURRENCY = "SET_SELECTED_BASECURRENCY";
const SET_BASECURRENCY_LIST = "SET_BASECURRENCY_LIST";
/* Currency */

const SET_SELECTED_CURRENCY = "SET_SELECTED_CURRENCY";
/* Loader */

const TOGGLE_LOADER = "TOGGLE_LOADER";
/* Exclude Test Data */

const CHANGE_IS_EXCLUDE_TEST = "CHANGE_IS_EXCLUDE_TEST";
/* User mini guide */

const USER_GUIDE_CONTENT = "USER_GUIDE_CONTENT;";
/* Date range */

const SET_DATE_RANGE = 'SET_DATE_RANGE';
const GET_DATE_CONSTRAINT = 'GET_DATE_CONSTRAINT';
/* Convert all figures to base currency */

const CHANGE_IS_CONVERT_ALL = "CHANGE_IS_CONVERT_ALL";
/* Status */

const SET_SELECTED_STATUS = "SET_SELECTED_STATUS";
/* Platform  */

const SET_SELECTED_PLATFORM = "SET_SELECTED_PLATFORM";
/* Live Status  */

const SET_SELECTED_LIVESTATUS = "SET_SELECTED_LIVESTATUS";
const SET_USERNAME = "SET_USERNAME";
const SET_REQUEST_PARAM = "SET_REQUEST_PARAM";
const SET_REPORT_TITLE = "SET_REPORT_TITLE";
/* Live Status  */

const SET_PAGING_OPTION = 'SET_PAGING_OPTION';
const SET_SORT_OPTION = 'SET_SORT_OPTION';
/* Setting Data */

const SET_SETTING_DATA = 'SET_SETTING_DATA';
/* Bonus */

const SET_BONUS_NAME = "SET_BONUS_NAME";
const SET_SELECTED_BONUS_TYPE = "SET_BONUS_TYPE";
const SET_SELECTED_BONUS_STATUS = "SET_BONUS_STATUS";
const SET_SELECTED_CLAIM_STATUS = "SET_CLAIM_STATUS";
const SET_BONUS_CODE_LIST = "SET_BONUS_CODE_LIST";
const SET_SELECTED_BONUS_CODE = "SET_SELECTED_BONUS_CODE";

/***/ }),

/***/ "./www/js/source/reactpages/actions/usernameAction.js":
/*!************************************************************!*\
  !*** ./www/js/source/reactpages/actions/usernameAction.js ***!
  \************************************************************/
/*! exports provided: setUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsername", function() { return setUsername; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./www/js/source/reactpages/actions/types.js");

const setUsername = value => {
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["SET_USERNAME"],
    data: value
  };
};

/***/ }),

/***/ "./www/js/source/reactpages/components/CheckBox.jsx":
/*!**********************************************************!*\
  !*** ./www/js/source/reactpages/components/CheckBox.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const CheckBox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox-group",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "checkbox",
    id: props.id,
    checked: props.checked,
    disabled: props.disabled,
    onChange: () => props.onChange(!props.checked)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: props.id
  }, props.label));
});
CheckBox.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
CheckBox.defaultProps = {
  label: '',
  checked: true,
  disabled: false,
  onChange: function () {}
};
/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),

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

/***/ "./www/js/source/reactpages/components/Overlay.jsx":
/*!*********************************************************!*\
  !*** ./www/js/source/reactpages/components/Overlay.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overlay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const wrapperClasses = {
  OVERLAY: "overlay",
  OVERLAY_OPEN: "overlay-open"
};
class Overlay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_unRegisterEvents", () => {
      const {
        closeOnOutsideClick
      } = this.props;

      if (closeOnOutsideClick) {
        document.removeEventListener('click', this._handleClickOutSide);
      }
    });

    _defineProperty(this, "_handleClickOutSide", event => {
      const clickOutside = this.containerElement && !this.containerElement.contains(event.target);

      if (clickOutside && this.state.isOpening) {
        this._close();
      }
    });

    this.containerElement = null;
    this.refHandlers = {
      container: ref => {
        this.containerElement = ref;
      }
    };
    this.state = {
      isOpening: this.props.isOpening
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpening !== prevProps.isOpening) {
      const {
        onOpen
      } = this.props;
      this.props.isOpening && onOpen && onOpen();
      this.setState({
        isOpening: this.props.isOpening
      });
      window.setTimeout(() => {
        if (this.props.isOpening) {
          this._registerEvents();
        } else {
          this._unRegisterEvents();
        }
      }, 0);
    }
  }

  componentWillUnmount() {
    this._unRegisterEvents();
  }

  _registerEvents() {
    const {
      closeOnOutsideClick
    } = this.props;

    if (closeOnOutsideClick) {
      document.addEventListener('click', this._handleClickOutSide);
    }
  }

  _close() {
    const {
      onClose
    } = this.props;
    this.setState({
      isOpening: false
    }, () => onClose && onClose());
  }

  render() {
    const {
      className,
      children
    } = this.props;
    const mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(wrapperClasses.OVERLAY, {
      [wrapperClasses.OVERLAY_OPEN]: this.state.isOpening
    }, className);
    const style = {
      display: this.state.isOpening ? "block" : "none"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: mergedClassName,
      style: style,
      ref: this.refHandlers.container
    }, children);
  }

}

_defineProperty(Overlay, "propTypes", {
  closeOnOutsideClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isOpening: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(Overlay, "defaultProps", {
  closeOnOutsideClick: true,
  isOpening: false
});

/***/ }),

/***/ "./www/js/source/reactpages/components/ReportTitle.jsx":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/components/ReportTitle.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ReportTitle = (_ref) => {
  let {
    content,
    tag
  } = _ref,
      attrs = _objectWithoutProperties(_ref, ["content", "tag"]);

  const Tag = tag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "report-title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    className: "report-title"
  }, attrs), content));
};

const propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
const defaultProps = {
  tag: 'p'
};
ReportTitle.propTypes = propTypes;
ReportTitle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ReportTitle);

/***/ }),

/***/ "./www/js/source/reactpages/components/auto-complete/AutoComplete.jsx":
/*!****************************************************************************!*\
  !*** ./www/js/source/reactpages/components/auto-complete/AutoComplete.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutoComplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
/* harmony import */ var _SuggestionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SuggestionList */ "./www/js/source/reactpages/components/auto-complete/SuggestionList.jsx");
/* harmony import */ var _utils_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/timer */ "./www/js/source/reactpages/components/utils/timer.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const DELAY_TIME_MILLISECOND = 300;
class AutoComplete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "_onKeyDown", event => {
      if (!this.isShowSuggestionList) {
        return;
      }

      const selectedIndex = this.state.selectedIndex;

      switch (event.keyCode) {
        case 38:
          //up
          if (selectedIndex > 0) {
            this.setState({
              selectedIndex: selectedIndex - 1
            });
          }

          break;

        case 40:
          //down
          if (selectedIndex < this.state.suggestions.length - 1) {
            this.setState({
              selectedIndex: selectedIndex + 1
            });
          }

          break;

        case 13:
          //enter
          if (selectedIndex > -1) {
            const selectedItem = this.state.suggestions[selectedIndex];

            this._onSelect(selectedItem);
          }

          break;
      }
    });

    _defineProperty(this, "_clearState", () => {
      this.setState({
        suggestions: null,
        selectedIndex: -1
      });
    });

    _defineProperty(this, "_onSelect", selectedItem => {
      const {
        onSelect
      } = this.props;
      onSelect && onSelect(selectedItem);
      this.input.value = typeof selectedItem === "object" ? selectedItem.value : selectedItem;

      this._clearState();
    });

    _defineProperty(this, "_onChange", event => {
      const value = (this.input.value || "").trim();
      const {
        onInput
      } = this.props;
      onInput && onInput(value);

      if (value.length < 3) {
        this._clearState();

        return;
      }

      const cachedData = this.cacheData[value];

      if (cachedData) {
        this.setState({
          suggestions: cachedData
        });
        return;
      }

      const {
        url
      } = this.props;

      if (url) {
        this._getDataByUrl(url, value);
      }
    });

    this.state = {
      suggestions: null,
      selectedIndex: -1
    };
    this.input = null;
    this.cacheData = {};
    this.onChange = _utils_timer__WEBPACK_IMPORTED_MODULE_6__["default"].debounce(this._onChange, DELAY_TIME_MILLISECOND).bind(this);
  }

  get isShowSuggestionList() {
    return this.state.suggestions && this.state.suggestions.length > 0;
  }

  _setStateWithCaching(value, suggestionList) {
    if (this.props.cache) {
      const cacheKey = value.toLowerCase();
      this.cacheData[cacheKey] = suggestionList;
    }

    this.setState({
      suggestions: suggestionList
    });
  }

  _getDataByUrl(url, value) {
    const {
      responseDataField,
      queryParamName
    } = this.props;
    const apiUrl = `${url}?${queryParamName}=${value}`;
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(apiUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(response => {
      const data = responseDataField ? response.data[responseDataField] : response.data;

      this._setStateWithCaching(value, data);
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ac-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
      type: "text",
      className: "input-text"
    }, this.props.htmlAttributes, {
      onChange: this.onChange,
      onKeyDown: this._onKeyDown,
      ref: element => this.input = element
    })), this.isShowSuggestionList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isOpening: true,
      onClose: this._clearState
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestionList__WEBPACK_IMPORTED_MODULE_5__["default"], {
      selectedIndex: this.state.selectedIndex,
      width: this.input.clientWidth,
      dataList: this.state.suggestions,
      onSelect: this._onSelect
    })));
  }

}

_defineProperty(AutoComplete, "propTypes", {
  url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onInput: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  responseDataField: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  cache: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  queryParamName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
});

_defineProperty(AutoComplete, "defaultProps", {
  url: null,
  responseDataField: "suggestions",
  cache: true,
  queryParamName: "query"
});

/***/ }),

/***/ "./www/js/source/reactpages/components/auto-complete/SuggestionList.jsx":
/*!******************************************************************************!*\
  !*** ./www/js/source/reactpages/components/auto-complete/SuggestionList.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestionList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SuggestionList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  onSelect(selectedItem) {
    const {
      onSelect
    } = this.props;
    onSelect && onSelect(selectedItem);
  }

  _renderDataList() {
    return this.props.dataList.map((item, index) => {
      const className = index === this.props.selectedIndex ? "ac-item ac-item-active" : "ac-item";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: `ac-item-${index}`,
        className: className,
        onClick: this.onSelect.bind(this, item)
      }, item && typeof item === "object" ? item.value : item);
    });
  }

  render() {
    const style = {
      width: this.props.width
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "suggestion-list",
      style: style
    }, this._renderDataList());
  }

}

_defineProperty(SuggestionList, "propTypes", {
  dataList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  selectedIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
});

/***/ }),

/***/ "./www/js/source/reactpages/components/auto-complete/index.jsx":
/*!*********************************************************************!*\
  !*** ./www/js/source/reactpages/components/auto-complete/index.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoComplete */ "./www/js/source/reactpages/components/auto-complete/AutoComplete.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_AutoComplete__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./www/js/source/reactpages/components/collapsible-panel/CollapsiblePanel.jsx":
/*!************************************************************************************!*\
  !*** ./www/js/source/reactpages/components/collapsible-panel/CollapsiblePanel.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CollapsiblePanel extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onClick", () => {
      const newState = !this.state.isCollapsed;
      const {
        onCollapse,
        onExpand
      } = this.props;

      if (newState) {
        onCollapse && onCollapse();
      }

      this.setState({
        isCollapsed: newState
      }, () => {
        window.dispatchEvent(new Event('resize'));

        if (!newState) {
          onExpand && onExpand();
        }
      });
    });

    this.state = {
      isCollapsed: false
    };
  }

  render() {
    const {
      stickyFooter,
      iconContainerStyle,
      iconToggle
    } = this.props;

    const {
      tag,
      className,
      style
    } = iconToggle,
          attrs = _objectWithoutProperties(iconToggle, ["tag", "className", "style"]);

    const IconTag = tag;
    const iconStyle = style || {
      transform: this.state.isCollapsed ? null : 'rotate(180deg)',
      color: '#fff',
      textAlign: 'center',
      background: '#0F3630',
      height: "15px",
      width: "20px",
      float: 'left'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${this.props.className}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: this.state.isCollapsed ? 'none' : 'block'
      }
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "caret-block"
    }, stickyFooter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "filter-handle",
      style: iconContainerStyle,
      onClick: this.onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconTag, _extends({
      className: className,
      style: iconStyle
    }, attrs))));
  }

}

_defineProperty(CollapsiblePanel, "propTypes", {
  stickyFooter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

const propTypes = {
  stickyFooter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onCollapse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  iconToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
const defaultProps = {
  iconContainerStyle: {
    height: '15px',
    width: '20px',
    cursor: 'pointer',
    position: 'absolute',
    left: 'calc(50% - 10px)',
    bottom: 0,
    background: '#0F3630',
    textAlign: 'center'
  },
  iconToggle: {
    tag: 'i',
    className: 'icon-arrow',
    style: null
  }
};
CollapsiblePanel.propTypes = propTypes;
CollapsiblePanel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CollapsiblePanel);

/***/ }),

/***/ "./www/js/source/reactpages/components/collapsible-panel/index.jsx":
/*!*************************************************************************!*\
  !*** ./www/js/source/reactpages/components/collapsible-panel/index.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapsiblePanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsiblePanel */ "./www/js/source/reactpages/components/collapsible-panel/CollapsiblePanel.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_CollapsiblePanel__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/Calendar.js":
/*!********************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/Calendar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/parseInput.js */ "./www/js/source/reactpages/components/date-range/utils/parseInput.js");
/* harmony import */ var _DayCell_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DayCell.js */ "./www/js/source/reactpages/components/date-range/DayCell.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.js */ "./www/js/source/reactpages/components/date-range/styles.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const START_OF_MONTH = 0;
const END_OF_MONTH = 11;
const START_DAY_OF_MONTH = 1;
const DEFAULT_YEAR_RANGE = 5;

function checkRange(dayMoment, range) {
  return dayMoment.isBetween(range['startDate'], range['endDate']) || dayMoment.isBetween(range['endDate'], range['startDate']);
}

function checkStartEdge(dayMoment, range) {
  const {
    startDate
  } = range;
  return dayMoment.startOf('day').isSame(startDate.startOf('day'));
}

function checkEndEdge(dayMoment, range) {
  const {
    endDate
  } = range;
  return dayMoment.endOf('day').isSame(endDate.endOf('day'));
}

function isOusideMinMax(dayMoment, minDate, maxDate, format) {
  return minDate && dayMoment.isBefore(Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(minDate, format, 'startOf')) || maxDate && dayMoment.isAfter(Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(maxDate, format, 'endOf'));
}

class Calendar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    const {
      format,
      range,
      theme,
      offset,
      firstDayOfWeek,
      shownDate
    } = props;
    const date = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(props.date, format, 'startOf');
    let showDate = (shownDate || range && range['endDate'] || date).clone();
    const state = {
      date,
      shownDate: showDate,
      firstDayOfWeek: firstDayOfWeek || moment__WEBPACK_IMPORTED_MODULE_2___default.a.localeData().firstDayOfWeek()
    };
    this.state = state;
    this.styles = Object(_styles_js__WEBPACK_IMPORTED_MODULE_5__["default"])(theme);
  }

  componentDidMount() {
    const {
      onInit
    } = this.props;
    onInit && onInit(this.state.date);
  }

  get limitedDate() {
    const {
      minDate,
      maxDate
    } = this.props;
    const m = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    let startDate, endDate;

    if (minDate) {
      startDate = moment__WEBPACK_IMPORTED_MODULE_2___default.a.isMoment(minDate) ? minDate : moment__WEBPACK_IMPORTED_MODULE_2___default()(minDate, _constants__WEBPACK_IMPORTED_MODULE_6__["MomentFormat"].default);
    } else {
      startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([m.year() - DEFAULT_YEAR_RANGE, START_OF_MONTH]);
    }

    if (maxDate) {
      endDate = moment__WEBPACK_IMPORTED_MODULE_2___default.a.isMoment(maxDate) ? maxDate : moment__WEBPACK_IMPORTED_MODULE_2___default()(maxDate, _constants__WEBPACK_IMPORTED_MODULE_6__["MomentFormat"].default);
    } else {
      endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([m.year(), END_OF_MONTH]).endOf("month");
    }

    return {
      startDate,
      endDate
    };
  }

  get disablePrevButton() {
    const range = this.limitedDate;
    const startDate = range.startDate;
    const currentDate = this.state.shownDate;
    let prevMonth = this.state.shownDate.month() - 1;

    if (prevMonth < startDate.month() && currentDate.year() <= startDate.year()) {
      return true;
    }

    return false;
  }

  get disableNextButton() {
    const range = this.limitedDate;
    const endDate = range.endDate;
    const currentDate = this.state.shownDate;
    let nextMonth = this.state.shownDate.month() + 1;

    if (nextMonth > endDate.month() && currentDate.year() >= endDate.year()) {
      return true;
    }

    return false;
  }

  getShownDate() {
    const {
      link
    } = this.props;
    const shownDate = link || this.state.shownDate;
    return shownDate;
  }

  handleSelect(newDate) {
    const {
      link,
      onChange
    } = this.props;
    onChange && onChange(newDate);

    if (!link) {
      this.setState({
        date: newDate
      });
    }
  }

  nextButtonClickHandler(event) {
    event.preventDefault();

    if (!this.disableNextButton) {
      this.changeMonth(this.state.shownDate.month() + 1, event);
    }
  }

  prevButtonClickHandler(event) {
    event.preventDefault();

    if (!this.disablePrevButton) {
      this.changeMonth(this.state.shownDate.month() - 1, event);
    }
  }

  changeMonth(direction, event) {
    event.preventDefault();
    let selectedMonth = Number(direction);
    let year = this.state.shownDate.year();

    if (selectedMonth < START_OF_MONTH) {
      selectedMonth = END_OF_MONTH;
      year -= 1;
    }

    if (selectedMonth > END_OF_MONTH) {
      selectedMonth = START_OF_MONTH;
      year += 1;
    }

    const {
      link,
      linkCB
    } = this.props;
    let newDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([year, selectedMonth, this.state.shownDate.date()]);

    if (!newDate.isValid()) {
      newDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([year, selectedMonth, START_DAY_OF_MONTH]);
    }

    if (link && linkCB) {
      return linkCB(newDate);
    }

    this.setState({
      shownDate: newDate
    });
  }

  changeYear(event) {
    event.preventDefault();
    const selectedYear = Number(event.target.value);
    let newDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([selectedYear, this.state.shownDate.month(), this.state.shownDate.date()]);

    if (!newDate.isValid()) {
      newDate = moment__WEBPACK_IMPORTED_MODULE_2___default()([selectedYear, this.state.shownDate.month(), START_DAY_OF_MONTH]);
    }

    this.setState({
      shownDate: newDate
    });
  }

  renderMonthList(classes) {
    const {
      styles
    } = this;
    const {
      onlyClasses,
      locale
    } = this.props;
    const monthLabels = locale.months;
    let monthOptions = [];

    for (let i = 0; i < 12; i++) {
      const isDisabled = this._isDisabledMonth(i);

      monthOptions.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        disabled: isDisabled,
        key: `month${i}`,
        value: i
      }, monthLabels[i]));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      style: onlyClasses ? undefined : styles["MonthAndYearSelect"],
      className: classes.monthAndYearSelect,
      onChange: e => this.changeMonth(e.target.value, e),
      value: this.state.shownDate.month()
    }, monthOptions);
  }

  _isDisabledMonth(currentMonth) {
    const range = this.limitedDate;
    const currentYear = this.state.shownDate.year();
    return currentMonth < range.startDate.month() && currentYear <= range.startDate.year() || currentMonth > range.endDate.month() && currentYear >= range.endDate.year();
  }

  renderYearList(classes) {
    const {
      styles
    } = this;
    const {
      onlyClasses
    } = this.props;
    const range = this.limitedDate;
    const yearOptions = [];

    for (let i = range.startDate.year(); i <= range.endDate.year(); i++) {
      yearOptions.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: `year${i}`,
        value: i
      }, i));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      style: onlyClasses ? undefined : styles["MonthAndYearSelect"],
      className: classes.monthAndYearSelect,
      onChange: this.changeYear.bind(this),
      value: this.state.shownDate.year()
    }, yearOptions);
  }

  renderMonthAndYear(classes) {
    const shownDate = this.getShownDate();
    const year = shownDate.year();
    const {
      styles
    } = this;
    const {
      minDate,
      maxDate,
      onlyClasses,
      showMonthArrow
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: onlyClasses ? undefined : styles['MonthAndYear'],
      className: classes.monthAndYearWrapper
    }, showMonthArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      disabled: this.disablePrevButton,
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['MonthButton']), {}, {
        float: 'left'
      }),
      className: classes.prevButton,
      onClick: this.prevButtonClickHandler.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['MonthArrow']), styles['MonthArrowPrev'])
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.month
    }, this.renderMonthList(classes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.monthAndYearDivider
    }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.year
    }, this.renderYearList(classes))), showMonthArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      disabled: this.disableNextButton,
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['MonthButton']), {}, {
        float: 'right'
      }),
      className: classes.nextButton,
      onClick: this.nextButtonClickHandler.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['MonthArrow']), styles['MonthArrowNext'])
    })) : null);
  }

  renderWeekdays(classes) {
    const dow = this.state.firstDayOfWeek;
    const weekdays = [];
    const {
      styles
    } = this;
    const {
      onlyClasses,
      locale
    } = this.props;
    const weekDays = locale.weekdays;
    const dayLength = 7 + dow;

    for (let i = dow; i < dayLength; i++) {
      const weekDayIndex = i % 7;
      const day = weekDays[weekDayIndex];
      weekdays.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: onlyClasses ? undefined : styles['Weekday'],
        className: classes.weekDay,
        key: i + day
      }, day));
    }

    return weekdays;
  }

  renderDays(classes) {
    // TODO: Split this logic into smaller chunks
    const {
      styles
    } = this;
    const {
      range,
      minDate,
      maxDate,
      format,
      onlyClasses,
      disableDaysBeforeToday,
      specialDays
    } = this.props;
    const shownDate = this.getShownDate();
    const {
      date,
      firstDayOfWeek
    } = this.state;
    const dateUnix = date.unix();
    const monthNumber = shownDate.month();
    const dayCount = shownDate.daysInMonth();
    const startOfMonth = shownDate.clone().startOf('month').isoWeekday();
    const lastMonth = shownDate.clone().month(monthNumber - 1);
    const lastMonthNumber = lastMonth.month();
    const lastMonthDayCount = lastMonth.daysInMonth();
    const nextMonth = shownDate.clone().month(monthNumber + 1);
    const nextMonthNumber = nextMonth.month();
    const days = []; // Previous month's days

    const diff = Math.abs(firstDayOfWeek - (startOfMonth + 7)) % 7;

    for (let i = diff - 1; i >= 0; i--) {
      const dayMoment = lastMonth.clone().date(lastMonthDayCount - i);
      days.push({
        dayMoment,
        isPassive: true
      });
    } // Current month's days


    for (let i = 1; i <= dayCount; i++) {
      const dayMoment = shownDate.clone().date(i); // set days before today to isPassive

      var _today = moment__WEBPACK_IMPORTED_MODULE_2___default()();

      if (disableDaysBeforeToday && Number(dayMoment.diff(_today, "days")) <= -1) {
        days.push({
          dayMoment,
          isPassive: true
        });
      } else {
        days.push({
          dayMoment
        });
      }
    } // Next month's days


    const remainingCells = 42 - days.length; // 42cells = 7days * 6rows

    for (let i = 1; i <= remainingCells; i++) {
      const dayMoment = nextMonth.clone().date(i);
      days.push({
        dayMoment,
        isPassive: true
      });
    }

    const today = moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('day');
    return days.map((data, index) => {
      const {
        dayMoment,
        isPassive
      } = data;
      const isSelected = !range && dayMoment.unix() === dateUnix;
      const isInRange = range && checkRange(dayMoment, range);
      const isStartEdge = range && checkStartEdge(dayMoment, range);
      const isEndEdge = range && checkEndEdge(dayMoment, range);
      const isEdge = isStartEdge || isEndEdge;
      const isToday = today.isSame(dayMoment);
      const isSunday = dayMoment.day() === 0;
      const isSpecialDay = specialDays && specialDays.some(specialDay => {
        return dayMoment.endOf('day').isSame(specialDay.date.endOf('day'));
      });
      const isOutsideMinMax = isOusideMinMax(dayMoment, minDate, maxDate, format);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DayCell_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
        onSelect: this.handleSelect.bind(this)
      }, data, {
        theme: styles,
        isStartEdge: isStartEdge,
        isEndEdge: isEndEdge,
        isSelected: isSelected || isEdge,
        isInRange: isInRange,
        isSunday: isSunday,
        isSpecialDay: isSpecialDay,
        isToday: isToday,
        key: index,
        isPassive: isPassive || isOutsideMinMax,
        onlyClasses: onlyClasses,
        classNames: classes
      }));
    });
  }

  render() {
    const {
      styles
    } = this;
    const {
      onlyClasses,
      classNames
    } = this.props;

    const classes = _objectSpread(_objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_5__["defaultClasses"]), classNames);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['Calendar']), this.props.style),
      className: classes.calendar
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.monthAndYear
    }, this.renderMonthAndYear(classes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.weekDays
    }, this.renderWeekdays(classes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.days
    }, this.renderDays(classes)));
  }

}

Calendar.defaultProps = {
  format: _constants__WEBPACK_IMPORTED_MODULE_6__["MomentFormat"].default,
  theme: {},
  showMonthArrow: true,
  disableDaysBeforeToday: false,
  onlyClasses: false,
  classNames: {},
  specialDays: []
};
Calendar.propTypes = {
  showMonthArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disableDaysBeforeToday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }),
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  firstDayOfWeek: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onInit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  linkCB: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onlyClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  specialDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/DatePicker.jsx":
/*!***********************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/DatePicker.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/parseInput.js */ "./www/js/source/reactpages/components/date-range/utils/parseInput.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultOptions.js */ "./www/js/source/reactpages/components/date-range/defaultOptions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ "./www/js/source/reactpages/components/date-range/styles.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
/* harmony import */ var _Calendar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Calendar.js */ "./www/js/source/reactpages/components/date-range/Calendar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class DatePicker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "show", () => {
      this.setState({
        show: true
      });
    });

    const {
      locale,
      date,
      format
    } = props;
    this.locale = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"].locale), locale);
    const selectedDate = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, format, 'startOf');
    this.state = {
      selectedDate,
      show: false
    };
  }

  get dateText() {
    const {
      selectedDate
    } = this.state;

    if (selectedDate) {
      return `${selectedDate.format(this.props.format)}`;
    }

    return "";
  }

  handleSelect(date) {
    const {
      onChange
    } = this.props;
    onChange && onChange(date);
    this.setState({
      selectedDate: date,
      show: false
    });
  }

  render() {
    const {
      format,
      firstDayOfWeek,
      minDate,
      maxDate,
      classNames
    } = this.props;

    const classes = _objectSpread(_objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_6__["defaultClasses"]), classNames);

    const {
      show
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daterange-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daterange-label",
      onClick: this.show
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      readOnly: true,
      className: "input-text datepicker",
      type: "text",
      autoComplete: "off",
      value: this.dateText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon icon-calendar"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isOpening: show
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.dateRange
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calendar_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      shownDate: this.state.selectedDate,
      format: format,
      firstDayOfWeek: firstDayOfWeek,
      minDate: minDate,
      maxDate: maxDate,
      classNames: classNames,
      onChange: this.handleSelect.bind(this),
      locale: this.locale
    }))));
  }

}

_defineProperty(DatePicker, "propTypes", {
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  firstDayOfWeek: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onInit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
});

_defineProperty(DatePicker, "defaultProps", {
  format: _constants__WEBPACK_IMPORTED_MODULE_5__["MomentFormat"].default
});

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/DateRange.js":
/*!*********************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/DateRange.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/parseInput.js */ "./www/js/source/reactpages/components/date-range/utils/parseInput.js");
/* harmony import */ var _Calendar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calendar.js */ "./www/js/source/reactpages/components/date-range/Calendar.js");
/* harmony import */ var _PredefinedRanges_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PredefinedRanges.js */ "./www/js/source/reactpages/components/date-range/PredefinedRanges.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ "./www/js/source/reactpages/components/date-range/styles.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultOptions.js */ "./www/js/source/reactpages/components/date-range/defaultOptions.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class DateRange extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);

    _defineProperty(this, "show", () => {
      this.calendarSelectionStep = 0;
      this.setState({
        show: true
      });
    });

    _defineProperty(this, "handleApply", () => {
      const {
        onClickApplyButton,
        onChange
      } = this.props;
      const range = this.state.range;
      this.originalRange = Object.assign({}, range);
      onClickApplyButton && onClickApplyButton(range, this.isValid);
      onChange && onChange(range, this.isValid);
      this.close();
    });

    _defineProperty(this, "handleCancel", () => {
      this.setRange(this.originalRange, false);
    });

    const {
      format,
      linkedCalendars,
      theme
    } = props;
    const startDate = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(props.startDate, format, 'startOf');
    const endDate = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(props.endDate, format, 'endOf');
    this.styles = Object(_styles_js__WEBPACK_IMPORTED_MODULE_6__["default"])(theme);
    this.calendarSelectionStep = 0;
    this.locale = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"].locale), props.locale);
    this.ranges = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"].ranges(props.today, props.minDate, props.maxDate, props.limitedMonthRange)), props.ranges);
    this.isValid = true;
    this.originalRange = {
      startDate,
      endDate
    };
    this.state = {
      range: {
        startDate,
        endDate
      },
      link: linkedCalendars && endDate,
      show: false
    };
  }

  get dateRangeText() {
    const range = this.state.range;

    if (range.startDate && range.endDate) {
      const {
        format
      } = this.props;
      return `${range.startDate.format(format)} - ${range.endDate.format(format)}`;
    }

    return "";
  }

  close() {
    this.setState({
      show: false
    });
  }

  componentDidMount() {
    const {
      onInit
    } = this.props;
    onInit && onInit(this.state.range);
  }

  orderRange(range) {
    const {
      startDate,
      endDate
    } = range;
    const swap = startDate.isAfter(endDate);
    if (!swap) return range;
    return {
      startDate: endDate,
      endDate: startDate
    };
  }

  setRange(dateRange, show) {
    let range = this.orderRange(dateRange);
    this.isValid = this.isValidMonthRange(range);

    if (this.isValid) {
      const newState = show === undefined ? {
        range
      } : {
        range,
        show
      };
      this.setState(newState);
    } else {
      const {
        onChange
      } = this.props;
      onChange && onChange(range, false);
    }
  }

  handlePredefinedRangesSelect(range) {
    this.setRange(range, false);
    this.originalRange = Object.assign({}, range);
    const {
      onChange
    } = this.props;
    onChange && onChange(range, true);
  }

  handleCalendarSelect(date) {
    const {
      startDate,
      endDate
    } = this.state.range;
    const range = {
      startDate: startDate,
      endDate: endDate
    };

    switch (this.calendarSelectionStep) {
      case 0:
        range['startDate'] = date;
        range['endDate'] = date;
        this.calendarSelectionStep = 1;
        break;

      case 1:
        range['endDate'] = date;
        this.calendarSelectionStep = 0;
        break;
    }

    this.setRange(range);
  }

  isValidMonthRange(date) {
    const {
      limitedMonthRange
    } = this.props;

    if (limitedMonthRange) {
      const startDate = date.startDate;
      const endDate = date.endDate;
      const diffMonth = 12 * (endDate.year() - startDate.year()) + endDate.month() - startDate.month() + 1;
      return diffMonth <= limitedMonthRange;
    }

    return true;
  }

  handleLinkChange(newDate) {
    this.setState({
      link: newDate
    });
  }

  render() {
    const {
      showRange,
      format,
      linkedCalendars,
      calendars,
      firstDayOfWeek,
      minDate,
      maxDate,
      classNames,
      onlyClasses,
      specialDays,
      lang,
      disableDaysBeforeToday,
      showMonthArrow
    } = this.props;
    const {
      range,
      link
    } = this.state;
    const {
      styles
    } = this;

    const classes = _objectSpread(_objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_6__["defaultClasses"]), classNames);

    const calendarsCount = Number(calendars) - 1;
    const buttonHandlers = {
      apply: this.handleApply,
      cancel: this.handleCancel
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daterange-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "daterange-label",
      onClick: this.show
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      readOnly: true,
      name: "DateRange",
      id: "DateRange",
      className: "input-text datepicker",
      type: "text",
      autoComplete: "off",
      value: this.dateRangeText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon icon-calendar"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isOpening: this.state.show,
      onClose: this.handleCancel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.dateRange,
      ref: element => this.dateRangeContainer = element
    }, showRange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PredefinedRanges_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      format: format,
      ranges: this.ranges,
      range: range,
      theme: styles,
      onSelect: range => this.handlePredefinedRangesSelect(range),
      onlyClasses: onlyClasses,
      classNames: classes,
      locale: this.locale,
      buttonHandlers: buttonHandlers
    }), (() => {
      const _calendars = [];

      for (var i = calendarsCount; i >= 0; i--) {
        const shownDate = i == calendarsCount ? range.startDate : range.endDate;

        _calendars.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calendar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          showMonthArrow: showMonthArrow,
          shownDate: shownDate,
          disableDaysBeforeToday: disableDaysBeforeToday,
          lang: lang,
          key: i,
          link: linkedCalendars && link,
          linkCB: this.handleLinkChange.bind(this),
          range: range,
          format: format,
          firstDayOfWeek: firstDayOfWeek,
          theme: styles,
          minDate: minDate,
          maxDate: maxDate,
          onlyClasses: onlyClasses,
          specialDays: specialDays,
          classNames: classes,
          onChange: this.handleCalendarSelect.bind(this),
          locale: this.locale
        }));
      }

      return _calendars;
    })())));
  }

}

DateRange.defaultProps = {
  linkedCalendars: false,
  theme: {},
  format: _constants__WEBPACK_IMPORTED_MODULE_8__["MomentFormat"].default,
  calendars: 2,
  onlyClasses: true,
  classNames: {},
  specialDays: [],
  twoStepChange: false,
  showRange: true
};
DateRange.propTypes = {
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  firstDayOfWeek: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  calendars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  dateLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  ranges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  linkedCalendars: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  twoStepChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onInit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onlyClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  specialDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onClickApplyButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  limitedMonthRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  today: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};
/* harmony default export */ __webpack_exports__["default"] = (DateRange);

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/DayCell.js":
/*!*******************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/DayCell.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./www/js/source/reactpages/components/date-range/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class DayCell extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hover: false,
      active: false
    };
    this.styles = this.props.theme;
  }

  handleMouseEvent(event) {
    event.preventDefault();
    if (this.props.isPassive) return null;
    const newState = {};

    switch (event.type) {
      case 'mouseenter':
        newState['hover'] = true;
        break;

      case 'mouseup':
      case 'mouseleave':
        newState['hover'] = false;
        newState['active'] = false;
        break;

      case 'mousedown':
        newState['active'] = true;
        break;
    }

    this.setState(newState);
  }

  handleSelect(event) {
    event.preventDefault();
    if (this.props.isPassive) return null;
    this.props.onSelect(this.props.dayMoment);
  }

  getStateStyles() {
    const {
      hover,
      active
    } = this.state;
    const {
      isSelected,
      isInRange,
      isPassive,
      isStartEdge,
      isEndEdge,
      dayMoment,
      isToday,
      isSunday,
      isSpecialDay
    } = this.props;
    const {
      styles
    } = this;
    const hoverStyle = hover ? styles['DayHover'] : {};
    const activeStyle = active ? styles['DayActive'] : {};
    const passiveStyle = isPassive ? styles['DayPassive'] : {};
    const startEdgeStyle = isStartEdge ? styles['DayStartEdge'] : {};
    const endEdgeStyle = isEndEdge ? styles['DayEndEdge'] : {};
    const selectedStyle = isSelected ? styles['DaySelected'] : {};
    const inRangeStyle = isInRange ? styles['DayInRange'] : {};
    const todayStyle = isToday ? styles['DayToday'] : {};
    const sundayStyle = isSunday ? styles['DaySunday'] : {};
    const specialDayStyle = isSpecialDay ? styles['DaySpecialDay'] : {};
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, todayStyle), sundayStyle), specialDayStyle), inRangeStyle), hoverStyle), passiveStyle), activeStyle), selectedStyle), startEdgeStyle), endEdgeStyle);
  }

  getClassNames(classes) {
    const {
      isSelected,
      isInRange,
      isPassive,
      isStartEdge,
      isEndEdge,
      isToday,
      isSunday,
      isSpecialDay
    } = this.props;
    return classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [classes.day]: true,
      [classes.dayActive]: isSelected,
      [classes.dayPassive]: isPassive,
      [classes.dayInRange]: isInRange,
      [classes.dayStartEdge]: isStartEdge,
      [classes.dayEndEdge]: isEndEdge,
      [classes.dayToday]: isToday,
      [classes.daySunday]: isSunday,
      [classes.daySpecialDay]: isSpecialDay
    });
  }

  render() {
    const {
      dayMoment,
      onlyClasses,
      classNames
    } = this.props;
    const {
      styles
    } = this;
    const stateStyle = this.getStateStyles();
    const classes = this.getClassNames(classNames);
    const dayWrapperStyles = {
      width: styles['Day'].width,
      height: styles['Day'].height,
      display: styles['Day'].display
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: onlyClasses ? undefined : dayWrapperStyles,
      onClick: this.handleSelect.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onMouseEnter: this.handleMouseEvent.bind(this),
      onMouseLeave: this.handleMouseEvent.bind(this),
      onMouseDown: this.handleMouseEvent.bind(this),
      onMouseUp: this.handleMouseEvent.bind(this),
      className: classes,
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['Day']), stateStyle)
    }, dayMoment.date()));
  }

}

DayCell.defaultProps = {
  theme: {
    'Day': {}
  },
  onlyClasses: false
};
DayCell.propTypes = {
  dayMoment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isInRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPassive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    Day: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired,
  onlyClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isSpecialDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DayCell);

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/PredefinedRanges.js":
/*!****************************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/PredefinedRanges.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/parseInput.js */ "./www/js/source/reactpages/components/date-range/utils/parseInput.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.js */ "./www/js/source/reactpages/components/date-range/styles.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultOptions.js */ "./www/js/source/reactpages/components/date-range/defaultOptions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class PredefinedRanges extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.styles = this.props.theme;
    this.selectedItem = this._getSelectedRange();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.range !== prevProps.range) {
      this.selectedItem = this._getSelectedRange();
    }
  }

  _getSelectedRange() {
    const {
      ranges,
      range
    } = this.props;
    return Object.keys(ranges).find(name => {
      const currentRange = ranges[name];
      return range.startDate.isSame(currentRange.startDate, "day") && range.endDate.isSame(currentRange.endDate, "day");
    });
  }

  handleSelect(name, event) {
    event.preventDefault();
    this.selectedItem = name;
    const range = this.props.ranges[name];
    this.props.onSelect({
      startDate: Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_4__["default"])(range['startDate'], null, 'startOf'),
      endDate: Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_4__["default"])(range['endDate'], null, 'endOf')
    });
  }

  clickButton(event, action) {
    event.preventDefault();
    this.props.buttonHandlers[action]();
  }

  renderRangeList(classes) {
    const {
      ranges,
      range,
      onlyClasses
    } = this.props;
    const {
      styles
    } = this;
    let gotActiveRange = false;
    return Object.keys(ranges).map(name => {
      const active = this.selectedItem === name;
      gotActiveRange = !gotActiveRange && active;

      const style = _objectSpread(_objectSpread({}, styles['PredefinedRangesItem']), gotActiveRange ? styles['PredefinedRangesItemActive'] : {});

      const predefinedRangeClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        [classes.predefinedRangesItem]: true,
        [classes.predefinedRangesItemActive]: gotActiveRange
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        key: 'range-' + name,
        className: predefinedRangeClass,
        style: onlyClasses ? undefined : style,
        onClick: e => this.handleSelect(name, e)
      }, name);
    });
  }

  renderRangeButtons(classes) {
    const {
      style,
      onlyClasses,
      locale
    } = this.props;

    const locales = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"].locale), locale);

    const {
      styles
    } = this;
    const action = {
      apply: "apply",
      cancel: "cancel"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_js__WEBPACK_IMPORTED_MODULE_5__["defaultClasses"].rangeButtonGroup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classes.applyButton,
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['RangeApplyButton']), style),
      type: "button",
      onClick: e => this.clickButton(e, action.apply)
    }, locales.applyLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classes.cancelButton,
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['RangeCancelButton']), style),
      onClick: e => this.clickButton(e, action.cancel),
      type: "button"
    }, locales.cancelLabel));
  }

  render() {
    const {
      style,
      onlyClasses,
      classNames
    } = this.props;
    const {
      styles
    } = this;

    const classes = _objectSpread(_objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_5__["defaultClasses"]), classNames);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: onlyClasses ? undefined : _objectSpread(_objectSpread({}, styles['PredefinedRanges']), style),
      className: classes.predefinedRanges
    }, this.renderRangeList(classes), this.renderRangeButtons(classes));
  }

}

PredefinedRanges.defaultProps = {
  onlyClasses: false,
  classNames: {}
};
PredefinedRanges.propTypes = {
  ranges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onlyClasses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (PredefinedRanges);

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/constants.js":
/*!*********************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/constants.js ***!
  \*********************************************************************/
/*! exports provided: MomentFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentFormat", function() { return MomentFormat; });
const MomentFormat = {
  default: "MM/DD/YYYY",
  monthSelect: "MMM"
};

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/defaultOptions.js":
/*!**************************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/defaultOptions.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _utils_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/locale */ "./www/js/source/reactpages/components/date-range/utils/locale.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const addRange = (rangeObj, name, start, end) => {
  rangeObj[_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource(name)] = {
    startDate: start,
    endDate: end
  };
};

const addOneDay = (rangeObj, name, day, min, max) => {
  if (day >= min && day <= max) {
    addRange(rangeObj, name, day, day);
  }
};

const addDistanceDays = (rangeObj, name, start, end, min, max) => {
  if (!(max < start || end < min)) {
    addRange(rangeObj, name, start < min ? min : start, end > max ? max : end);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  ranges: (todayDate, minDate, maxDate, limitMonths) => {
    var today = !todayDate ? moment__WEBPACK_IMPORTED_MODULE_0___default()() : !moment__WEBPACK_IMPORTED_MODULE_0___default.a.isMoment(todayDate) ? moment__WEBPACK_IMPORTED_MODULE_0___default()(todayDate, _constants__WEBPACK_IMPORTED_MODULE_3__["MomentFormat"].default) : todayDate;
    var max = !maxDate ? today : !moment__WEBPACK_IMPORTED_MODULE_0___default.a.isMoment(maxDate) ? moment__WEBPACK_IMPORTED_MODULE_0___default()(maxDate, _constants__WEBPACK_IMPORTED_MODULE_3__["MomentFormat"].default) : maxDate;
    var min = !minDate ? today : !moment__WEBPACK_IMPORTED_MODULE_0___default.a.isMoment(minDate) ? moment__WEBPACK_IMPORTED_MODULE_0___default()(minDate, _constants__WEBPACK_IMPORTED_MODULE_3__["MomentFormat"].default) : minDate;
    const range = {};

    if (today < min) {
      return range;
    }

    addOneDay(range, "Today", today, min, max);
    const yesterday = today.clone().add(-1, 'days');
    addOneDay(range, "Yesterday", yesterday, min, max);
    const startCurrentWeek = today.clone().startOf('week');
    const endCurrentWeek = today;
    addDistanceDays(range, "Currentweek", startCurrentWeek, endCurrentWeek, min, max);
    const startLastWeek = today.clone().subtract(1, 'week').startOf('week');
    const endLastWeek = startLastWeek.clone().add(6, 'days');
    addDistanceDays(range, "Lastweek", startLastWeek, endLastWeek, min, max);
    const startCurrentmonth = today.clone().startOf('month');
    const endCurrentmonth = today;
    addDistanceDays(range, "Currentmonth", startCurrentmonth, endCurrentmonth, min, max);
    const startLastmonth = today.clone().subtract(1, 'month').startOf('month');
    const endLastmonth = startLastmonth.clone().endOf('month');
    addDistanceDays(range, "Lastmonth", startLastmonth, endLastmonth, min, max);

    if (limitMonths && limitMonths > 1) {
      const startSincelastmonth = today.clone().subtract(1, 'month').startOf('month');
      const endSincelastmonth = today;
      addDistanceDays(range, "Sincelastmonth", startSincelastmonth, endSincelastmonth, min, max);
    }

    return range;
  },
  locale: _objectSpread({
    applyLabel: _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("OK"),
    cancelLabel: _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource("Cancel")
  }, _utils_locale__WEBPACK_IMPORTED_MODULE_2__["default"])
});

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/index.js":
/*!*****************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/index.js ***!
  \*****************************************************************/
/*! exports provided: DateRange, Calendar, DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRange.js */ "./www/js/source/reactpages/components/date-range/DateRange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return _DateRange_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.js */ "./www/js/source/reactpages/components/date-range/Calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker */ "./www/js/source/reactpages/components/date-range/DatePicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/styles.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/styles.js ***!
  \******************************************************************/
/*! exports provided: defaultClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultClasses", function() { return defaultClasses; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultClasses = {
  show: 'rdr-Show',
  hide: 'rdr-Hide',
  calendar: 'rdr-Calendar',
  dateRange: 'rdr-DateRange',
  predefinedRanges: 'rdr-PredefinedRanges',
  predefinedRangesItem: 'rdr-PredefinedRangesItem',
  predefinedRangesItemActive: 'rdr-PredefinedRangesItemActive',
  monthAndYear: 'rdr-MonthAndYear',
  monthAndYearSelect: 'rdr-MonthAndYearSelect',
  weekDays: 'rdr-WeekDays',
  weekDay: 'rdr-WeekDay',
  days: 'rdr-Days',
  day: 'rdr-Day',
  dayActive: 'is-selected',
  dayPassive: 'is-passive',
  dayInRange: 'is-inRange',
  monthAndYearWrapper: 'rdr-MonthAndYear-innerWrapper',
  prevButton: 'rdr-MonthAndYear-button prev',
  nextButton: 'rdr-MonthAndYear-button next',
  month: 'rdr-MonthAndYear-month',
  monthAndYearDivider: 'rdr-MonthAndYear-divider',
  year: 'rdr-MonthAndYear-year',
  daySunday: 'rdr-Sunday',
  daySpecialDay: 'rdr-SpecialDay',
  rangeButtonGroup: 'range-button-group',
  applyButton: 'rdr-Button rdr-ApplyButton',
  cancelButton: 'rdr-Button rdr-CancelButton'
};
const defaultTheme = {
  DateRange: {
    display: 'none',
    boxSizing: 'border-box',
    background: '#ffffff',
    borderRadius: '2px',
    position: "absolute",
    width: 735,
    zIndex: 1,
    top: 60
  },
  Calendar: {
    width: 280,
    padding: 10,
    background: '#ffffff',
    borderRadius: '2px',
    display: 'inline-block',
    boxSizing: 'border-box',
    letterSpacing: 0,
    color: '#000000'
  },
  Day: {
    boxSizing: 'border-box',
    display: 'inline-block',
    letterSpacing: 'initial',
    textAlign: 'center',
    fontSize: 12,
    cursor: 'pointer',
    transition: 'transform .1s ease'
  },
  DayPassive: {
    opacity: 0.4,
    cursor: 'normal'
  },
  DayHover: {
    background: 'rgba(78, 184, 94, 0.4)'
  },
  DayToday: {},
  DaySunday: {},
  DaySpecialDay: {},
  DayActive: {
    background: '#95a5a6',
    color: '#ffffff',
    transform: 'scale(0.9)'
  },
  DaySelected: {
    background: '#4eb85e',
    color: '#ffffff'
  },
  DayStartEdge: {},
  DayEndEdge: {},
  DayInRange: {
    background: 'rgba(78, 184, 94, 0.2)',
    color: '#95a5a6'
  },
  Weekday: {
    boxSizing: 'border-box',
    display: 'inline-block',
    letterSpacing: 'initial',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 1
  },
  MonthAndYear: {
    textAlign: 'center',
    boxSizing: 'border-box',
    fontSize: 12,
    padding: '5px 0',
    height: 40,
    lineHeight: '18px'
  },
  MonthButton: {
    display: 'block',
    boxSizing: 'border-box',
    height: 25,
    width: 25,
    padding: 0,
    margin: '0 10px',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    background: '#fff',
    cursor: 'pointer'
  },
  MonthArrow: {
    display: 'block',
    width: 0,
    height: 0,
    padding: 0,
    margin: 0,
    border: '5px solid transparent',
    textAlign: 'center'
  },
  MonthArrowPrev: {
    borderRightWidth: '7px',
    borderRightColor: '#34495e',
    marginLeft: 3
  },
  MonthArrowNext: {
    borderLeftWidth: '7px',
    borderLeftColor: '#34495e',
    marginLeft: 10
  },
  MonthAndYearSelect: {
    height: 25,
    width: 65
  },
  PredefinedRanges: {
    width: 160,
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft: 10,
    marginTop: 10
  },
  PredefinedRangesItem: {
    display: 'block',
    fontSize: 12,
    color: '#2c3e50',
    padding: '10px 14px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginBottom: 3
  },
  PredefinedRangesItemActive: {
    background: '#4c6375',
    color: '#fff'
  },
  RangeButton: {
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    height: 25,
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '0.5px',
    display: 'inline-block',
    outline: 0,
    verticalAlign: 'middle',
    width: '48%',
    color: '#fff'
  },
  RangeApplyButton: {
    marginRight: 'calc(4%)',
    backgroundColor: '#f05b1f'
  },
  RangeCancelButton: {
    backgroundColor: '#757985'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ((customTheme = {}) => {
  let calendarWidth = defaultTheme.Calendar.width;
  let calendarPadding = defaultTheme.Calendar.padding;
  let cellMargin = defaultTheme.Day.margin || 0;

  if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('width')) {
    calendarWidth = customTheme.Calendar.width;
  }

  if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('padding')) {
    calendarPadding = customTheme.Calendar.padding;
  }

  if (customTheme.Day && customTheme.Day.hasOwnProperty('margin')) {
    cellMargin = customTheme.Day.margin;
  }

  const cellSize = (parseInt(calendarWidth, 10) - parseInt(calendarPadding, 10) * 2) / 7 - parseInt(cellMargin, 10) * 2;
  return {
    DateRange: _objectSpread(_objectSpread({}, defaultTheme.DateRange), customTheme.DateRange),
    Calendar: _objectSpread(_objectSpread({}, defaultTheme.Calendar), customTheme.Calendar),
    Day: _objectSpread(_objectSpread({
      width: cellSize,
      height: cellSize,
      lineHeight: cellSize + 'px'
    }, defaultTheme.Day), customTheme.Day),
    DayPassive: _objectSpread(_objectSpread({}, defaultTheme.DayPassive), customTheme.DayPassive),
    DayHover: _objectSpread(_objectSpread({}, defaultTheme.DayHover), customTheme.DayHover),
    DayToday: _objectSpread(_objectSpread({}, defaultTheme.DayToday), customTheme.DayToday),
    DaySunday: _objectSpread(_objectSpread({}, defaultTheme.DaySunday), customTheme.DaySunday),
    DaySpecialDay: _objectSpread(_objectSpread({}, defaultTheme.DaySpecialDay), customTheme.DaySpecialDay),
    DayActive: _objectSpread(_objectSpread({}, defaultTheme.DayActive), customTheme.DayActive),
    DaySelected: _objectSpread(_objectSpread({}, defaultTheme.DaySelected), customTheme.DaySelected),
    DayStartEdge: _objectSpread(_objectSpread({}, defaultTheme.DayStartEdge), customTheme.DayStartEdge),
    DayEndEdge: _objectSpread(_objectSpread({}, defaultTheme.DayEndEdge), customTheme.DayEndEdge),
    DayInRange: _objectSpread(_objectSpread({}, defaultTheme.DayInRange), customTheme.DayInRange),
    Weekday: _objectSpread(_objectSpread({
      width: cellSize,
      height: cellSize / 2,
      lineHeight: cellSize / 2 + 'px'
    }, defaultTheme.Weekday), customTheme.Weekday),
    MonthAndYear: _objectSpread(_objectSpread({}, defaultTheme.MonthAndYear), customTheme.MonthAndYear),
    MonthAndYearSelect: _objectSpread(_objectSpread({}, defaultTheme.MonthAndYearSelect), customTheme.MonthAndYearSelect),
    MonthButton: _objectSpread(_objectSpread({}, defaultTheme.MonthButton), customTheme.MonthButton),
    MonthArrow: _objectSpread(_objectSpread({}, defaultTheme.MonthArrow), customTheme.MonthArrow),
    MonthArrowPrev: _objectSpread(_objectSpread({}, defaultTheme.MonthArrowPrev), customTheme.MonthArrowPrev),
    MonthArrowNext: _objectSpread(_objectSpread({}, defaultTheme.MonthArrowNext), customTheme.MonthArrowNext),
    PredefinedRanges: _objectSpread(_objectSpread({}, defaultTheme.PredefinedRanges), customTheme.PredefinedRanges),
    PredefinedRangesItem: _objectSpread(_objectSpread({}, defaultTheme.PredefinedRangesItem), customTheme.PredefinedRangesItem),
    PredefinedRangesItemActive: _objectSpread(_objectSpread({}, defaultTheme.PredefinedRangesItemActive), customTheme.PredefinedRangesItemActive),
    RangeApplyButton: _objectSpread(_objectSpread(_objectSpread({}, defaultTheme.RangeButton), defaultTheme.RangeApplyButton), customTheme.RangeApplyButton),
    RangeCancelButton: _objectSpread(_objectSpread(_objectSpread({}, defaultTheme.RangeButton), defaultTheme.RangeCancelButton), customTheme.RangeCancelButton)
  };
});

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/utils/locale.js":
/*!************************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/utils/locale.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  months: [_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Jan'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Feb'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Mar'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Apr'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('May'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Jun'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Jul'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Aug'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Sep'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Oct'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Nov'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Dec')],
  weekdays: [_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Su'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Mo'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Tu'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('We'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Th'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Fr'), _lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Sa')]
});

/***/ }),

/***/ "./www/js/source/reactpages/components/date-range/utils/parseInput.js":
/*!****************************************************************************!*\
  !*** ./www/js/source/reactpages/components/date-range/utils/parseInput.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseInput; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function parseInput(input, format, timeOfDay) {
  let output = null;

  if (typeof input === 'undefined' || typeof input === 'null' || !input || input === '') {
    output = moment__WEBPACK_IMPORTED_MODULE_0___default()()[timeOfDay]('day');
  } else if (typeof input === 'string') {
    output = moment__WEBPACK_IMPORTED_MODULE_0___default()(input, format)[timeOfDay]('day');
  } else if (typeof input === 'function') {
    output = parseInput(input(moment__WEBPACK_IMPORTED_MODULE_0___default()()[timeOfDay]('day')), format, timeOfDay);
  } else if (input._isAMomentObject) {
    output = input[timeOfDay]('day').clone();
  }

  return output;
}

/***/ }),

/***/ "./www/js/source/reactpages/components/dropdown/DropdownButton.jsx":
/*!*************************************************************************!*\
  !*** ./www/js/source/reactpages/components/dropdown/DropdownButton.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownToggle */ "./www/js/source/reactpages/components/dropdown/DropdownToggle.jsx");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownMenu */ "./www/js/source/reactpages/components/dropdown/DropdownMenu.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const DropdownButton = props => {
  const {
    className,
    children,
    toggleButton,
    dropdownMenu,
    isOpen,
    onOpen,
    onClose,
    onToggle,
    buttonLabel
  } = props,
        attrs = _objectWithoutProperties(props, ["className", "children", "toggleButton", "dropdownMenu", "isOpen", "onOpen", "onClose", "onToggle", "buttonLabel"]);

  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('dropdown', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classes
  }, attrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropdownToggle__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, toggleButton, {
    onClick: onToggle
  }), buttonLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, dropdownMenu, {
    isOpen: isOpen,
    onOpen: onOpen,
    onClose: onClose
  }), children));
};

const propTypes = {
  buttonLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  toggleButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    caret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  dropdownMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};
const defaultProps = {
  toggleButton: {
    className: 'toggle-default'
  }
};
DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

/***/ }),

/***/ "./www/js/source/reactpages/components/dropdown/DropdownItem.jsx":
/*!***********************************************************************!*\
  !*** ./www/js/source/reactpages/components/dropdown/DropdownItem.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class DropdownItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      e.preventDefault();

      if (this.props.disabled) {
        return;
      }

      this.props.onClick && this.props.onClick(e);
    });
  }

  render() {
    const _this$props = this.props,
          {
      tag,
      className,
      active
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["tag", "className", "active"]);

    const Tag = tag;
    const type = Tag === 'button' && props.onClick ? 'button' : undefined;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('dropdown-item', className, {
      disabled: props.disabled,
      active
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes,
      type: type
    }, props));
  }

}

const propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const defaultProps = {
  tag: 'button',
  disabled: false
};
DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownItem);

/***/ }),

/***/ "./www/js/source/reactpages/components/dropdown/DropdownMenu.jsx":
/*!***********************************************************************!*\
  !*** ./www/js/source/reactpages/components/dropdown/DropdownMenu.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






class DropdownMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    const _this$props = this.props,
          {
      tag,
      className,
      isOpen,
      onOpen,
      onClose
    } = _this$props,
          attrs = _objectWithoutProperties(_this$props, ["tag", "className", "isOpen", "onOpen", "onClose"]);

    const Tag = tag;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('dropdown-menu', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isOpening: isOpen,
      onOpen: onOpen,
      onClose: onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
      className: classes
    }, attrs)));
  }

}

const propTypes = {
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
const defaultProps = {
  tag: 'div'
};
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./www/js/source/reactpages/components/dropdown/DropdownToggle.jsx":
/*!*************************************************************************!*\
  !*** ./www/js/source/reactpages/components/dropdown/DropdownToggle.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const DropdownToggle = props => {
  const {
    className,
    tag,
    caret
  } = props,
        attrs = _objectWithoutProperties(props, ["className", "tag", "caret"]);

  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('dropdown-toggle', className, {
    'site-caret': caret
  });
  const Tag = tag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    className: classes
  }, attrs));
};

const propTypes = {
  caret: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const defaultProps = {
  caret: true,
  tag: 'button'
};
DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownToggle);

/***/ }),

/***/ "./www/js/source/reactpages/components/dropdown/index.js":
/*!***************************************************************!*\
  !*** ./www/js/source/reactpages/components/dropdown/index.js ***!
  \***************************************************************/
/*! exports provided: DropdownToggle, DropdownMenu, DropdownItem, DropdownButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownToggle */ "./www/js/source/reactpages/components/dropdown/DropdownToggle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownToggle", function() { return _DropdownToggle__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownMenu */ "./www/js/source/reactpages/components/dropdown/DropdownMenu.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return _DropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownItem */ "./www/js/source/reactpages/components/dropdown/DropdownItem.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return _DropdownItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownButton */ "./www/js/source/reactpages/components/dropdown/DropdownButton.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return _DropdownButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./www/js/source/reactpages/components/radio/Radio.jsx":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/components/radio/Radio.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class radio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      value: this.props.value,
      checked: this.props.checked,
      name: this.props.name,
      id: this.props.id,
      onChange: () => this.props.onChange(this.props.value)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label));
  }

}

_defineProperty(radio, "propTypes", {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(radio, "defaultProps", {
  label: '',
  name: '',
  value: 0,
  checked: false
});

/***/ }),

/***/ "./www/js/source/reactpages/components/radio/RadioGroup.jsx":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/components/radio/RadioGroup.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Radio */ "./www/js/source/reactpages/components/radio/Radio.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RadioGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onChange(value) {
    if (this.state.value === value) {
      return;
    }

    this.setState({
      value: value
    });
    this.props.onChange(value);
  }

  _renderItem() {
    const {
      options,
      name
    } = this.props;
    let radios = [];

    for (let i = 0; i < options.length; i++) {
      const item = options[i];
      const isChecked = item.value === this.state.value;
      const id = `${name}-${item.value}`;
      radios.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: id,
        value: item.value,
        checked: isChecked,
        name: name,
        id: id,
        label: item.label,
        onChange: value => this.onChange(value)
      }));
    }

    return radios;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "radio-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, this.props.label), this._renderItem());
  }

}

_defineProperty(RadioGroup, "propTypes", {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
  })).isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
});

_defineProperty(RadioGroup, "defaultProps", {
  label: '',
  name: '',
  value: 0,
  onChange: function () {}
});

/***/ }),

/***/ "./www/js/source/reactpages/components/utils/timer.js":
/*!************************************************************!*\
  !*** ./www/js/source/reactpages/components/utils/timer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timer; });
const DEFAULT_TIME_DELAY_MILLISECOND = 500;
class Timer {
  static debounce(func, wait) {
    let timeout;
    return function () {
      const context = this,
            args = arguments;

      const later = () => {
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait || DEFAULT_TIME_DELAY_MILLISECOND);
    };
  }

}

/***/ }),

/***/ "./www/js/source/reactpages/constants/config.js":
/*!******************************************************!*\
  !*** ./www/js/source/reactpages/constants/config.js ***!
  \******************************************************/
/*! exports provided: debuggingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debuggingConfig", function() { return debuggingConfig; });
const debuggingConfig = {
  name: "__lrfConfig__",
  env: "local"
};

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

/***/ "./www/js/source/reactpages/lib/createReducer.js":
/*!*******************************************************!*\
  !*** ./www/js/source/reactpages/lib/createReducer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/***/ }),

/***/ "./www/js/source/reactpages/lib/currencyHelper.js":
/*!********************************************************!*\
  !*** ./www/js/source/reactpages/lib/currencyHelper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CurrencyHelper; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CurrencyHelper {
  static getTpCurrencyList(brandIds, brands) {
    return this._getCurrencyList(brandIds, brands, 'tpCurrencies');
  }

  static getAgentCurrencyList(brandIds, brands) {
    return this._getCurrencyList(brandIds, brands, 'currencies');
  }

  static _getCurrencyList(brandIds, brands, currencyProperty) {
    const brandIdList = (brandIds + '').split(',');
    const existKeys = {};
    const currencyList = brandIdList.reduce((result, brandId) => {
      const currencyListByBrand = this._getCurrencyListByBrandId(brandId, brands, existKeys, currencyProperty);

      return [...result, ...currencyListByBrand];
    }, []);
    return currencyList;
  }

  static _getCurrencyListByBrandId(brandId, brands, existKeys, currencyProperty) {
    var brandInfo = brands.find(_ => _.id === parseInt(brandId));

    if (brandInfo) {
      return brandInfo[currencyProperty].reduce((result, currentValue) => {
        if (!existKeys[currentValue.key]) {
          existKeys[currentValue.key] = true;
          return [...result, _objectSpread(_objectSpread({}, currentValue), {}, {
            status: true
          })];
        }

        return result;
      }, []);
    }

    return [];
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

/***/ "./www/js/source/reactpages/lib/logger.js":
/*!************************************************!*\
  !*** ./www/js/source/reactpages/lib/logger.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./www/js/source/reactpages/constants/config.js");


const isDev = "development" === "development";
const configName = _constants_config__WEBPACK_IMPORTED_MODULE_1__["debuggingConfig"].name; // middleware that logs actions

const loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_0__["createLogger"])({
  predicate: (getState, action) => isDev || window[configName] && window[configName].env === _constants_config__WEBPACK_IMPORTED_MODULE_1__["debuggingConfig"].env && (!window[configName].actionFilter || window[configName].actionFilter === action.type)
});
class Logger {
  static getLoggerMiddleware() {
    return loggerMiddleware;
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

/***/ "./www/js/source/reactpages/lib/store.js":
/*!***********************************************!*\
  !*** ./www/js/source/reactpages/lib/store.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./www/js/source/reactpages/lib/logger.js");



class Store {
  static createStore(reducer, initialState) {
    const loggerMiddleware = _logger__WEBPACK_IMPORTED_MODULE_2__["default"].getLoggerMiddleware();
    const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], // lets us dispatch() functions
    loggerMiddleware));
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, enhancer);
  }

}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/actions/filterAction.js":
/*!*******************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/actions/filterAction.js ***!
  \*******************************************************************************/
/*! exports provided: fetchSettingData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSettingData", function() { return fetchSettingData; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/winloss/actions/types.js");
/* harmony import */ var _jsroot_actions_dateRangeAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/actions/dateRangeAction */ "./www/js/source/reactpages/actions/dateRangeAction.js");
/* harmony import */ var _jsroot_actions_currencyAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/actions/currencyAction */ "./www/js/source/reactpages/actions/currencyAction.js");
/* harmony import */ var _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/actions/baseCurrencyAction */ "./www/js/source/reactpages/actions/baseCurrencyAction.js");
/* harmony import */ var _jsroot_actions_usernameAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/actions/usernameAction */ "./www/js/source/reactpages/actions/usernameAction.js");
/* harmony import */ var _jsroot_actions_productAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/actions/productAction */ "./www/js/source/reactpages/actions/productAction.js");
/* harmony import */ var _jsroot_actions_excludeTestAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/actions/excludeTestAction */ "./www/js/source/reactpages/actions/excludeTestAction.js");
/* harmony import */ var _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/actions/brandAction */ "./www/js/source/reactpages/actions/brandAction.js");
/* harmony import */ var _jsroot_actions_settingDataAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsroot/actions/settingDataAction */ "./www/js/source/reactpages/actions/settingDataAction.js");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/libs/queryService.js");











const setNoDraw = isNoDraw => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_NO_DRAW"],
    data: isNoDraw
  };
};

const setDrilldownInOriginalCurrency = isOriginalCurrency => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DRILLDOWN_IN_ORIGINAL_CURRENCY"],
    data: isOriginalCurrency
  };
};

const setUserNameFilterOption = userNameOption => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USERNAME_FILTER_OPTION"],
    data: userNameOption
  };
};

const setSelectedDateType = selectedDateType => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_DATE_TYPE"],
    data: selectedDateType
  };
};

const setSelectedGroupByOption = groupByOption => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_GROUP_BY_OPTION"],
    data: groupByOption
  };
};

const setSelectedTimezone = timezone => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_TIMEZONE"],
    data: timezone
  };
};

const fetchSettingData = () => async dispatch => {
  const response = await _libs_queryService__WEBPACK_IMPORTED_MODULE_9__["default"].getSettingData();

  if (!response.isSuccess) {
    alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
  }

  dispatch(Object(_jsroot_actions_settingDataAction__WEBPACK_IMPORTED_MODULE_8__["setSettingData"])(response.data));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchSettingData,
  setSelectedDateType,
  setDateRange: _jsroot_actions_dateRangeAction__WEBPACK_IMPORTED_MODULE_1__["setDateRange"],
  setSelectedBrand: _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_7__["setSelectedBrand"],
  setSelectedProduct: _jsroot_actions_productAction__WEBPACK_IMPORTED_MODULE_5__["setSelectedProduct"],
  setUserNameFilterOption,
  setUsername: _jsroot_actions_usernameAction__WEBPACK_IMPORTED_MODULE_4__["setUsername"],
  setSelectedCurrency: _jsroot_actions_currencyAction__WEBPACK_IMPORTED_MODULE_2__["setSelectedCurrency"],
  setSelectedBaseCurrency: _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_3__["setSelectedBaseCurrency"],
  changeIsExcludeTest: _jsroot_actions_excludeTestAction__WEBPACK_IMPORTED_MODULE_6__["changeIsExcludeTest"],
  setNoDraw,
  setDrilldownInOriginalCurrency,
  setSelectedGroupByOption,
  setSelectedTimezone
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/actions/gridAction.js":
/*!*****************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/actions/gridAction.js ***!
  \*****************************************************************************/
/*! exports provided: fetchReportData, setDisplayedColumns, setPagingOption, setSortOption, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchReportData", function() { return fetchReportData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayedColumns", function() { return setDisplayedColumns; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/winloss/actions/types.js");
/* harmony import */ var _jsroot_actions_gridDataAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/actions/gridDataAction */ "./www/js/source/reactpages/actions/gridDataAction.js");
/* harmony import */ var _jsroot_actions_pagingOptionAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/actions/pagingOptionAction */ "./www/js/source/reactpages/actions/pagingOptionAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPagingOption", function() { return _jsroot_actions_pagingOptionAction__WEBPACK_IMPORTED_MODULE_2__["setPagingOption"]; });

/* harmony import */ var _jsroot_actions_sortOptionAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/actions/sortOptionAction */ "./www/js/source/reactpages/actions/sortOptionAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSortOption", function() { return _jsroot_actions_sortOptionAction__WEBPACK_IMPORTED_MODULE_3__["setSortOption"]; });

/* harmony import */ var _jsroot_actions_requestParamAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/actions/requestParamAction */ "./www/js/source/reactpages/actions/requestParamAction.js");
/* harmony import */ var _jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/actions/loaderAction */ "./www/js/source/reactpages/actions/loaderAction.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/libs/queryService.js");








const fetchReportData = (params, afterSuccess) => async dispatch => {
  dispatch(Object(_jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_5__["toggleLoader"])(true));
  const response = await _libs_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].getReportData(params);

  if (!response.isSuccess) {
    alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("ErrorProcessingMsg"));
  }

  afterSuccess && afterSuccess(response.data);
  dispatch(Object(_jsroot_actions_gridDataAction__WEBPACK_IMPORTED_MODULE_1__["setGridData"])(response.data));
  dispatch(Object(_jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_5__["toggleLoader"])(false));
};
const setDisplayedColumns = columns => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_DISPLAYED_COLUMNS"],
    data: columns
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setDisplayedColumns,
  setGridData: _jsroot_actions_gridDataAction__WEBPACK_IMPORTED_MODULE_1__["setGridData"],
  setPagingOption: _jsroot_actions_pagingOptionAction__WEBPACK_IMPORTED_MODULE_2__["setPagingOption"],
  setSortOption: _jsroot_actions_sortOptionAction__WEBPACK_IMPORTED_MODULE_3__["setSortOption"],
  setRequestParam: _jsroot_actions_requestParamAction__WEBPACK_IMPORTED_MODULE_4__["setRequestParam"],
  fetchReportData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/actions/index.js":
/*!************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/actions/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/actions/loaderAction */ "./www/js/source/reactpages/actions/loaderAction.js");
/* harmony import */ var _jsroot_actions_settingDataAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/actions/settingDataAction */ "./www/js/source/reactpages/actions/settingDataAction.js");
/* harmony import */ var _gridAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gridAction */ "./www/js/source/reactpages/pages/report/winloss/actions/gridAction.js");
/* harmony import */ var _filterAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterAction */ "./www/js/source/reactpages/pages/report/winloss/actions/filterAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _jsroot_actions_loaderAction__WEBPACK_IMPORTED_MODULE_0__), _jsroot_actions_settingDataAction__WEBPACK_IMPORTED_MODULE_1__), _filterAction__WEBPACK_IMPORTED_MODULE_3__["default"]), _gridAction__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/actions/types.js":
/*!************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/actions/types.js ***!
  \************************************************************************/
/*! exports provided: SET_SELECTED_DATE_TYPE, SET_NO_DRAW, SET_SELECTED_GROUP_BY_OPTION, SET_DISPLAYED_COLUMNS, SET_REPORT_DATA, DRILLDOWN_IN_ORIGINAL_CURRENCY, USERNAME_FILTER_OPTION, SET_SELECTED_TIMEZONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_DATE_TYPE", function() { return SET_SELECTED_DATE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NO_DRAW", function() { return SET_NO_DRAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_GROUP_BY_OPTION", function() { return SET_SELECTED_GROUP_BY_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DISPLAYED_COLUMNS", function() { return SET_DISPLAYED_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REPORT_DATA", function() { return SET_REPORT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRILLDOWN_IN_ORIGINAL_CURRENCY", function() { return DRILLDOWN_IN_ORIGINAL_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERNAME_FILTER_OPTION", function() { return USERNAME_FILTER_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_TIMEZONE", function() { return SET_SELECTED_TIMEZONE; });
const SET_SELECTED_DATE_TYPE = 'SET_SELECTED_DATE_TYPE';
const SET_NO_DRAW = 'SET_NO_DRAW';
const SET_SELECTED_GROUP_BY_OPTION = 'SET_SELECTED_GROUP_BY_OPTION';
const SET_DISPLAYED_COLUMNS = 'SET_DISPLAYED_COLUMNS';
const SET_REPORT_DATA = 'SET_REPORT_DATA';
const DRILLDOWN_IN_ORIGINAL_CURRENCY = 'DRILLDOWN_IN_ORIGINAL_CURRENCY';
const USERNAME_FILTER_OPTION = 'USERNAME_FILTER_OPTION';
const SET_SELECTED_TIMEZONE = 'SET_SELECTED_TIMEZONE';

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/AppContainer.jsx":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/AppContainer.jsx ***!
  \***********************************************************************************/
/*! exports provided: AppContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/components/Loader */ "./www/js/source/reactpages/components/Loader.jsx");
/* harmony import */ var _jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _FormFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormFilter */ "./www/js/source/reactpages/pages/report/winloss/components/FormFilter.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Content */ "./www/js/source/reactpages/pages/report/winloss/components/Content.jsx");








const AppContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "winloss-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isLoading: props.isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFilter__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

function mapStateToProps(state) {
  const {
    isLoading
  } = state;
  return Object.assign({}, {
    isLoading
  });
}

function mapDispatchToProps(dispatch) {
  const {} = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AppContainer));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/Content.jsx":
/*!******************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/Content.jsx ***!
  \******************************************************************************/
/*! exports provided: Content, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grid_GridData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/GridData */ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridData.jsx");
/* harmony import */ var _grid_GridCaption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/GridCaption */ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridCaption.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");







const Content = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grid_GridCaption__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grid_GridData__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__["Pager"], null));
};

function mapStateToProps(state) {
  const {} = state;
  return Object.assign({}, {});
}

function mapDispatchToProps(dispatch) {
  const {} = _actions__WEBPACK_IMPORTED_MODULE_6__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Content));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/FormFilter.jsx":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/FormFilter.jsx ***!
  \*********************************************************************************/
/*! exports provided: FormFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFilter", function() { return FormFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @9softstudio/react-multiselect */ "./node_modules/@9softstudio/react-multiselect/dist/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jsroot_components_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/auto-complete */ "./www/js/source/reactpages/components/auto-complete/index.jsx");
/* harmony import */ var _jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/components/collapsible-panel */ "./www/js/source/reactpages/components/collapsible-panel/index.jsx");
/* harmony import */ var _jsroot_components_CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/components/CheckBox */ "./www/js/source/reactpages/components/CheckBox.jsx");
/* harmony import */ var _jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsroot/components/date-range */ "./www/js/source/reactpages/components/date-range/index.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_currencyHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jsroot/lib/currencyHelper */ "./www/js/source/reactpages/lib/currencyHelper.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _filter_GroupFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filter/GroupFilter */ "./www/js/source/reactpages/pages/report/winloss/components/filter/GroupFilter.jsx");
/* harmony import */ var _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../libs/helpers/queryHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/queryHelper.js");
/* harmony import */ var _libs_helpers_collectionHelper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../libs/helpers/collectionHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/collectionHelper.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants/filterConsts */ "./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
/* harmony import */ var _components_filter_SelectOption__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/filter/SelectOption */ "./www/js/source/reactpages/pages/report/winloss/components/filter/SelectOption.jsx");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/libs/queryService.js");
/* harmony import */ var _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../libs/helpers/gridHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/gridHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















class FormFilter extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "currencyList", []);

    _defineProperty(this, "_onChangeDateRange", (date, isValidMonthRange = true) => {
      if (isValidMonthRange) {
        this.props.setDateRange(date);
      } else {
        const message = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("DateRangeExceedMsg").replace("{0}", _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].dateConstraint.limitedMonthRange);
        alert(message);
      }
    });

    _defineProperty(this, "_validateDateRangeSupportQuickDownload", dateRange => {
      const {
        fromDate,
        toDate
      } = dateRange;

      if (typeof fromDate === "string" || typeof toDate === "string") {
        return true;
      } else {
        const differentDays = toDate.diff(fromDate, 'days');
        return differentDays <= 30;
      }
    });

    _defineProperty(this, "_handleQuickDownload", event => {
      event.preventDefault();
      const {
        displayedColumns,
        dateRange,
        toggleLoader
      } = this.props;

      if (!this._validateDateRangeSupportQuickDownload(dateRange)) {
        alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource('QuickDownloadDateRangeExceedMsg'));
        return;
      }

      const params = _objectSpread(_objectSpread({}, _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_14__["default"].toAPIParams(_objectSpread(_objectSpread({}, this.props), {}, {
        requestParam: {}
      }))), {}, {
        orderCols: _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_20__["default"].getOrderCols(displayedColumns)
      });

      toggleLoader(true);
      _libs_queryService__WEBPACK_IMPORTED_MODULE_19__["default"].exportReportDetailData(params, () => toggleLoader(false));
    });

    _defineProperty(this, "_handleSubmit", event => {
      event.preventDefault();
      const {
        displayedColumns
      } = this.props;
      const newRequestParam = _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_14__["default"].toAPIParams(this.props);
      this.props.setRequestParam(_objectSpread(_objectSpread({}, newRequestParam), {}, {
        displayedColumns
      }));
      this.props.fetchReportData(newRequestParam, _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_14__["default"].callBackToUpdateGridOption(_constants_gridContants__WEBPACK_IMPORTED_MODULE_17__["defaultPagingOption"].PageIndex, _constants_gridContants__WEBPACK_IMPORTED_MODULE_17__["defaultPagingOption"].PageSize, _constants_gridContants__WEBPACK_IMPORTED_MODULE_17__["defaultSortOption"].sortBy, _constants_gridContants__WEBPACK_IMPORTED_MODULE_17__["defaultSortOption"].sortType));
    });

    this.currencyList = _jsroot_lib_currencyHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getTpCurrencyList(this.props.selectedBrand, _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].brands);
  }

  componentDidMount() {
    this.props.fetchSettingData();
  }

  _renderDateRange() {
    const {
      dateRange
    } = this.props;
    const dateConstraint = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].dateConstraint;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_8__["DateRange"], {
      startDate: dateRange.fromDate,
      endDate: dateRange.toDate,
      minDate: dateConstraint.minDate,
      maxDate: dateConstraint.maxDate,
      today: dateRange.toDate,
      limitedMonthRange: dateConstraint.limitedMonthRange,
      onChange: this._onChangeDateRange
    });
  }

  _renderCurrencySelectList() {
    const {
      selectedCurrency,
      setSelectedCurrency
    } = this.props;
    const currencyList = this.currencyList;
    const dataSource = _libs_helpers_collectionHelper__WEBPACK_IMPORTED_MODULE_15__["default"].createDataSourceFrom(currencyList, selectedCurrency);
    return currencyList && currencyList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "ddlCurrency",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].currentLanguage,
      dataSource: dataSource,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (_, selectedItemsKey) => setSelectedCurrency(selectedItemsKey)
    });
  }

  _renderBaseCurrencySelectList() {
    const baseCurrencyList = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].baseCurrencyList;
    return baseCurrencyList && baseCurrencyList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      instanceId: "ddlBasedCurrency",
      value: this.props.selectedBaseCurrency,
      options: baseCurrencyList,
      onChange: item => this.props.setSelectedBaseCurrency(item.value)
    });
  }

  _renderTimezoneSelectList() {
    const timezones = this.props.settingData.timezones;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      instanceId: "ddlTimezone",
      value: this.props.selectedTimezone,
      options: timezones,
      onChange: item => this.props.setSelectedTimezone(item.value)
    });
  }

  _renderProductSelectList() {
    const productOptions = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].productOptions;
    return productOptions && productOptions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "ProductList",
      hasSearchBox: true,
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].currentLanguage,
      dataSource: productOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (currentItem, selectedItemsKey) => this.props.setSelectedProduct(selectedItemsKey)
    }) : null;
  }

  _renderUserNameInputSearch() {
    const {
      userNameFilterOption,
      setUserNameFilterOption
    } = this.props;
    const optionName = _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["UserNameFilterOptions"].find(option => option.value === userNameFilterOption);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, optionName.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filter_SelectOption__WEBPACK_IMPORTED_MODULE_18__["default"], {
      name: 'userNameInputSearch',
      value: userNameFilterOption,
      onChange: value => setUserNameFilterOption(value),
      options: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["UserNameFilterOptions"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_auto_complete__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onSelect: value => this.props.setUsername(value),
      onInput: value => this.props.setUsername(value)
    }));
  }

  _renderDateFilter() {
    const {
      selectedDateType,
      setSelectedDateType
    } = this.props;
    const optionName = _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["DateFilterTypeOptions"].find(option => option.value === selectedDateType);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, optionName.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filter_SelectOption__WEBPACK_IMPORTED_MODULE_18__["default"], {
      name: 'dateTypeFilter',
      value: selectedDateType,
      onChange: value => setSelectedDateType(value),
      options: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["DateFilterTypeOptions"]
    })), this._renderDateRange());
  }

  _renderBrandSelectList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a, {
      id: "BrandList",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].currentLanguage,
      dataSource: _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].brandOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (currentItem, selectedItemsKey) => {
        this.props.setSelectedBrand(selectedItemsKey);
        this.currencyList = _jsroot_lib_currencyHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getTpCurrencyList(selectedItemsKey, _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].brands);
        const selectedCurrency = this.currencyList.map(_ => _.key).join(',');
        this.props.setSelectedCurrency(selectedCurrency);
      }
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "page-filter"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, this._renderDateFilter())), _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].brandOptions && _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_11__["default"].brandOptions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("Brand")), this._renderBrandSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("Product")), this._renderProductSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-2 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, this._renderUserNameInputSearch())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("Currency")), this._renderCurrencySelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("BaseCurrency")), this._renderBaseCurrencySelectList()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-2 col-sm-3 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("DisplayTimezone")), this._renderTimezoneSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-2 col-sm-3 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_CheckBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "ExcludeTestData",
      checked: !this.props.isExcludeTest,
      onChange: checked => this.props.changeIsExcludeTest(!checked),
      label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("IncludeTestData")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_CheckBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "NoDraw",
      checked: this.props.noDraw,
      onChange: checked => this.props.setNoDraw(checked),
      label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("NoDraw")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-4 col-lg-4 col-xl-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_CheckBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "DrilldownInOriginalCurrency",
      checked: this.props.drilldownInOriginalCurrency,
      onChange: checked => this.props.setDrilldownInOriginalCurrency(checked),
      label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getSingleResource("DrilldownInOriginalCurrency")
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter_GroupFilter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      isDisabledSubmit: !this.props.selectedCurrency || !this.props.selectedProduct,
      onSubmit: this._handleSubmit,
      onQuickDownload: this._handleQuickDownload
    }));
  }

}

function mapDispatchToProps(dispatch) {
  const {
    fetchReportData,
    fetchSettingData,
    setSelectedDateType,
    setSelectedBrand,
    setDateRange,
    setSelectedProduct,
    setUsername,
    setSelectedCurrency,
    setSelectedBaseCurrency,
    changeIsExcludeTest,
    setNoDraw,
    setRequestParam,
    setDrilldownInOriginalCurrency,
    setUserNameFilterOption,
    setSelectedTimezone,
    toggleLoader
  } = _actions__WEBPACK_IMPORTED_MODULE_12__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    fetchReportData,
    fetchSettingData,
    setSelectedDateType,
    setSelectedBrand,
    setDateRange,
    setSelectedProduct,
    setUserNameFilterOption,
    setUsername,
    setSelectedCurrency,
    setSelectedBaseCurrency,
    changeIsExcludeTest,
    setNoDraw,
    setDrilldownInOriginalCurrency,
    setRequestParam,
    setSelectedTimezone,
    toggleLoader
  }), dispatch);
}

function mapStateToProps(state) {
  const {
    settingData,
    selectedDateType,
    dateRange,
    selectedBrand,
    username,
    selectedProduct,
    selectedCurrency,
    selectedBaseCurrency,
    isExcludeTest,
    noDraw,
    selectedGroupByOption,
    drilldownInOriginalCurrency,
    userNameFilterOption,
    selectedTimezone,
    displayedColumns
  } = state;
  return Object.assign({}, {
    settingData,
    selectedDateType,
    dateRange,
    selectedBrand,
    userNameFilterOption,
    username,
    selectedProduct,
    isExcludeTest,
    noDraw,
    drilldownInOriginalCurrency,
    selectedCurrency,
    selectedBaseCurrency,
    selectedGroupByOption,
    selectedTimezone,
    displayedColumns
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FormFilter));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/filter/GroupFilter.jsx":
/*!*****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/filter/GroupFilter.jsx ***!
  \*****************************************************************************************/
/*! exports provided: GroupFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilter", function() { return GroupFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/components/collapsible-panel */ "./www/js/source/reactpages/components/collapsible-panel/index.jsx");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-multiselect */ "./node_modules/@9softstudio/react-multiselect/dist/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/components/radio/RadioGroup */ "./www/js/source/reactpages/components/radio/RadioGroup.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/filterConsts */ "./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js");
/* harmony import */ var _libs_helpers_groupHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/helpers/groupHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/groupHelper.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const GroupFilter = props => {
  const {
    setSelectedGroupByOption,
    selectedGroupByOption,
    onSubmit,
    onQuickDownload,
    isDisabledSubmit,
    displayedColumns,
    setDisplayedColumns
  } = props;
  const isDisabledQuickDownload = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => !_constants_filterConsts__WEBPACK_IMPORTED_MODULE_8__["GroupByOptionAllowQuickDownload"].some(_ => _ === selectedGroupByOption), [selectedGroupByOption]);

  const _handleChangeDisplayedColumn = (currentItem, selectedItemsKey) => {
    const selectedKeyList = selectedItemsKey.split(',');
    const newColumnList = displayedColumns.map(item => {
      const isShow = selectedKeyList.indexOf(item.key) !== -1;
      return item.show === isShow ? item : _objectSpread(_objectSpread({}, item), {}, {
        show: isShow
      });
    });
    setDisplayedColumns(newColumnList);
  };

  const _renderViewColumnSelectList = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "ddlViewColumn",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].currentLanguage,
      dataSource: displayedColumns,
      keyField: "key",
      valueField: "name",
      statusField: "show",
      onChange: _handleChangeDisplayedColumn
    });
  };

  const _handleChangeGroupBy = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selectedGroupBy => {
    setSelectedGroupByOption(selectedGroupBy);
    const newDisplayedColumns = _libs_helpers_groupHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getDislayedColumns(_constants_gridContants__WEBPACK_IMPORTED_MODULE_10__["displayedColumns"], selectedGroupBy);
    setDisplayedColumns(newDisplayedColumns);
  }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "group-filter page-filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource("GroupBy") + ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: 'filterGroupBy',
    value: selectedGroupByOption,
    options: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_8__["GroupByOptions"],
    onChange: _handleChangeGroupBy
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource("ViewColumn")), _renderViewColumnSelectList()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-submit",
    disabled: isDisabledSubmit,
    onClick: onSubmit
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource("Submit")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn",
    disabled: isDisabledQuickDownload,
    onClick: onQuickDownload
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource("Download")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-1 note",
    style: {
      flex: "0 0 4%"
    }
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource('Note'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-9 note"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource('NoteReportGrossRevenue'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getSingleResource('NoteReportDepositAndWithdrawal'))));
};

function mapDispatchToProps(dispatch) {
  const {
    setSelectedGroupByOption,
    setDisplayedColumns
  } = _actions__WEBPACK_IMPORTED_MODULE_3__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setSelectedGroupByOption,
    setDisplayedColumns
  }), dispatch);
}

function mapStateToProps(state) {
  const {
    selectedGroupByOption,
    displayedColumns
  } = state;
  return Object.assign({}, {
    selectedGroupByOption,
    displayedColumns
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GroupFilter)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/filter/SelectOption.jsx":
/*!******************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/filter/SelectOption.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/components/dropdown */ "./www/js/source/reactpages/components/dropdown/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const SearchOption = props => {
  const {
    value,
    onChange,
    options,
    name,
    valueField,
    labelField
  } = props;
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const selectedOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => options.find(_ => _[valueField] === value), [value]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = event => {
    let changedValue = event.target.value;
    changedValue = parseInt(changedValue);
    onChange && onChange(changedValue);
  };

  const toggleButton = {
    className: 'toggle-outline toggle-outline-light'
  };
  const dropdownList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return options.map(option => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
        key: `DropdownItem-${name}-${option.value}`,
        tag: "div"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "selection-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "radio",
        name: `radioOption-${name}`,
        value: option[valueField],
        checked: option.value === selectedOption[valueField],
        onChange: handleChange
      }), "\xA0\xA0", option[labelField]));
    });
  }, [options, selectedOption]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_dropdown__WEBPACK_IMPORTED_MODULE_1__["DropdownButton"], {
    className: "search-option",
    isOpen: isOpen,
    toggleButton: toggleButton,
    onToggle: handleToggleDropdown,
    buttonLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons"
    }, "settings"),
    onClose: handleClose
  }, dropdownList);
};

const propTypes = {
  valueField: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  labelField: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const defaultProps = {
  valueField: 'value',
  labelField: 'label'
};
SearchOption.propTypes = propTypes;
SearchOption.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (SearchOption);

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

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridCaption.jsx":
/*!***************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/grid/GridCaption.jsx ***!
  \***************************************************************************************/
/*! exports provided: GridCaption, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCaption", function() { return GridCaption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/components/ReportTitle */ "./www/js/source/reactpages/components/ReportTitle.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _libs_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/queryService */ "./www/js/source/reactpages/pages/report/winloss/libs/queryService.js");
/* harmony import */ var _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/helpers/gridHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/gridHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class GridCaption extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_handleExportExcel", event => {
      event.preventDefault();
      const {
        requestParam,
        toggleLoader,
        sortOption
      } = this.props;

      if (!requestParam) {
        return;
      }

      toggleLoader(true);

      const {
        displayedColumns
      } = requestParam,
            restRequestParam = _objectWithoutProperties(requestParam, ["displayedColumns"]);

      const params = _objectSpread(_objectSpread({}, restRequestParam), {}, {
        sortById: sortOption.sortBy,
        isSortAsc: sortOption.sortType === 'asc',
        orderCols: _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getOrderCols(displayedColumns)
      });

      _libs_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].exportReportData(params, () => toggleLoader(false));
    });
  }

  _buildLeftPart() {
    const {
      baseCurrency,
      fromDate,
      toDate
    } = this.props.requestParam;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: "searchResult"
    }, `
        ${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getSingleResource('WinLossAnalysis')},
         ${fromDate} - ${toDate},
          ${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getSingleResource('Viewin').replace('{0}', baseCurrency)}`);
  }

  _buildRightPart() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "caret-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-excel-wrapper",
      onClick: this._handleExportExcel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-excel",
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getSingleResource('ExportToExcel')
    })));
  }

  render() {
    if (!this.props.gridData.dataList) {
      return null;
    }

    const Content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this._buildLeftPart(), this._buildRightPart());
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tag: "div",
      content: Content
    });
  }

}

function mapDispatchToProps(dispatch) {
  const {
    toggleLoader
  } = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    toggleLoader
  }), dispatch);
}

function mapStateToProps(state) {
  const {
    selectedBaseCurrency,
    gridData,
    requestParam,
    pagingOption,
    sortOption
  } = state;
  return Object.assign({}, {
    selectedBaseCurrency,
    gridData,
    requestParam,
    pagingOption,
    sortOption
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(GridCaption));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridData.jsx":
/*!************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/grid/GridData.jsx ***!
  \************************************************************************************/
/*! exports provided: GridData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridData", function() { return GridData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _jsroot_components_NoDataTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/NoDataTitle */ "./www/js/source/reactpages/components/NoDataTitle.jsx");
/* harmony import */ var _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/helpers/gridHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/gridHelper.js");
/* harmony import */ var _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/helpers/queryHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/queryHelper.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MAX_WIDTH_PAGE = 1920;
const GridData = props => {
  const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);
  const {
    gridData,
    pagingOption,
    sortOption,
    requestParam,
    isLoading,
    setRequestParam,
    fetchReportData
  } = props;
  const {
    dataList,
    totalData
  } = gridData;

  if (!dataList) {
    return null;
  }

  if (!dataList.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_NoDataTitle__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  const _handleSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((sortBy, sortType) => {
    const params = _objectSpread(_objectSpread(_objectSpread({}, requestParam), pagingOption), {}, {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    });

    fetchReportData(params, _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_7__["default"].callBackToUpdateGridOption(pagingOption.PageIndex, pagingOption.PageSize, sortBy, sortType, false));
  });

  const _handlePaging = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((pageIndex, pageSize) => {
    const {
      displayedColumns: omitted
    } = requestParam,
          restRequestParam = _objectWithoutProperties(requestParam, ["displayedColumns"]);

    const params = _objectSpread(_objectSpread({}, restRequestParam), {}, {
      sortbyId: sortOption.sortBy,
      isSortAsc: sortOption.sortType === 'asc',
      pageIndex,
      pageSize
    });

    fetchReportData(params, _libs_helpers_queryHelper__WEBPACK_IMPORTED_MODULE_7__["default"].callBackToUpdateGridOption(pageIndex, pageSize, sortOption.sortBy, sortOption.sortType));
  });

  const header = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_6__["default"].renderHeader(requestParam.displayedColumns, displayedColumns => setRequestParam(_objectSpread(_objectSpread({}, requestParam), {}, {
    displayedColumns
  }))), [requestParam.displayedColumns]);
  const body = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_6__["default"].renderBody(dataList, requestParam.displayedColumns), [dataList, requestParam.displayedColumns]);
  const footer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _libs_helpers_gridHelper__WEBPACK_IMPORTED_MODULE_6__["default"].renderFooter(totalData, requestParam.displayedColumns), [totalData, requestParam.displayedColumns]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    minWidth: 500,
    autoWidth: true,
    maxWidth: MAX_WIDTH,
    autoHeight: true,
    header: header,
    body: body,
    footer: footer,
    isPaging: true,
    pageOption: pagingOption,
    onPaging: _handlePaging,
    onSort: _handleSort,
    containerPadding: 30,
    shouldResetScrollPosition: isLoading
  }));
};

function mapDispatchToProps(dispatch) {
  const {
    setSortOption,
    setGridData,
    setRequestParam,
    fetchReportData
  } = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    setSortOption,
    setGridData,
    setRequestParam,
    fetchReportData
  }, dispatch);
}

function mapStateToProps(state) {
  const {
    gridData,
    displayedColumns,
    requestParam,
    pagingOption,
    sortOption,
    isLoading
  } = state;
  return Object.assign({}, {
    gridData,
    displayedColumns,
    requestParam,
    pagingOption,
    sortOption,
    isLoading
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GridData)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridRow.jsx":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/grid/GridRow.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");




const GridRow = props => {
  const {
    rowData,
    displayedColumns
  } = props;
  const hasParent = rowData.parent ? true : false;
  const highLight = hasParent ? ' high-light' : '';
  const groupChildClassName = hasParent ? ' right-align' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null, [..._constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["defaultDisplayedColumns"], ...displayedColumns].map(col => col.show && _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["componentCells"][col.key] && _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["componentCells"][col.key](rowData, highLight, groupChildClassName)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GridRow));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/components/grid/GroupCell.jsx":
/*!*************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/components/grid/GroupCell.jsx ***!
  \*************************************************************************************/
/*! exports provided: GroupCell, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupCell", function() { return GroupCell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/winloss/actions/index.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const GroupCell = props => {
  const {
    rowData,
    setGridData,
    gridData
  } = props,
        rest = _objectWithoutProperties(props, ["rowData", "setGridData", "gridData"]);

  const key = rowData.key;

  const _isAllowedDrillDown = rowData.drillDownData && rowData.drillDownData.length > 0;

  const _isDrillDown = rowData.isDrillDown || false;

  const _handleDrillDown = () => {
    const dataList = gridData.dataList;
    const rowIndex = dataList.findIndex(_ => _.key === key);

    if (rowIndex === -1) {
      return;
    }

    const newDataList = [...dataList];

    if (_isDrillDown) {
      newDataList.splice(rowIndex + 1, rowData.drillDownData.length);
    } else {
      newDataList.splice(rowIndex + 1, 0, ...rowData.drillDownData);
    }

    newDataList[rowIndex] = _objectSpread(_objectSpread({}, rowData), {
      isDrillDown: !_isDrillDown
    });

    const newGridData = _objectSpread(_objectSpread({}, gridData), {
      dataList: newDataList
    });

    setGridData(newGridData);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], _extends({
    key: `group-cell-${key}`
  }, rest), rowData[_constants_gridContants__WEBPACK_IMPORTED_MODULE_5__["columnKeys"].group], _isAllowedDrillDown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: `icon-arrow right ${_isDrillDown ? 'arrow-down' : 'arrow-right'}`,
    onClick: _handleDrillDown
  }));
};

function mapDispatchToProps(dispatch) {
  const {
    setGridData
  } = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setGridData
  }), dispatch);
}

function mapStateToProps(state) {
  const {
    gridData
  } = state;
  return Object.assign({}, {
    gridData
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GroupCell)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js ***!
  \*********************************************************************************/
/*! exports provided: GroupByOptionIds, GroupByOptionAllowQuickDownload, GroupByOptions, DateFilterTypeOptions, UserNameFilterOptions, DefaultTimezone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOptionIds", function() { return GroupByOptionIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOptionAllowQuickDownload", function() { return GroupByOptionAllowQuickDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOptions", function() { return GroupByOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFilterTypeOptions", function() { return DateFilterTypeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameFilterOptions", function() { return UserNameFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTimezone", function() { return DefaultTimezone; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const GroupByOptionIds = {
  date: 1,
  month: 2,
  product: 3,
  currency: 4,
  player: 5
};
const GroupByOptionAllowQuickDownload = [GroupByOptionIds.date, GroupByOptionIds.month];
const GroupByOptions = [{
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Date"),
  value: GroupByOptionIds.date
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Month"),
  value: GroupByOptionIds.month
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Product"),
  value: GroupByOptionIds.product
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Currency"),
  value: GroupByOptionIds.currency
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Player"),
  value: GroupByOptionIds.player
}];
const DateFilterTypeOptions = [{
  value: 1,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SettledDate')
}, {
  value: 2,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('CreatedDate')
}];
const UserNameFilterOptions = [{
  value: 1,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Username')
}, {
  value: 2,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SabaId')
}, {
  value: 3,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SabaSystemId')
}];
const DefaultTimezone = 8;

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js ***!
  \*********************************************************************************/
/*! exports provided: columnKeys, displayedColumns, defaultDisplayedColumns, dataColumns, componentCells, defaultPagingOption, defaultSortOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnKeys", function() { return columnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayedColumns", function() { return displayedColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDisplayedColumns", function() { return defaultDisplayedColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataColumns", function() { return dataColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentCells", function() { return componentCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPagingOption", function() { return defaultPagingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSortOption", function() { return defaultSortOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _filterConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterConsts */ "./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_grid_GroupCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/grid/GroupCell */ "./www/js/source/reactpages/pages/report/winloss/components/grid/GroupCell.jsx");
/* harmony import */ var _components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/grid/DecimalCell */ "./www/js/source/reactpages/pages/report/winloss/components/grid/DecimalCell.jsx");






const columnKeys = {
  group: 'group',
  sabaId: 'sabaId',
  sabaSystemId: 'sabaSystemId',
  turnover: 'turnover',
  netTurnover: 'netTurnover',
  ggr: 'ggr',
  playerWinloss: 'playerWinloss',
  betCount: 'betCount',
  avgBetAmount: 'avgBetAmount',
  uniquePlayers: 'uniquePlayers',
  margin: 'margin',
  noOfDeposit: 'numberOfDeposit',
  totalDepositAmount: 'depositAmount',
  noOfWithdrawal: 'numberOfWithdrawal',
  totalWithdrawalAmount: 'withdrawalAmount'
};
const displayedColumns = [{
  key: columnKeys.sabaId,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('SabaId'),
  show: true,
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  hasTotal: false
}, {
  key: columnKeys.sabaSystemId,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('SabaSystemId'),
  show: true,
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  hasTotal: false
}, {
  key: columnKeys.turnover,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Turnover'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.netTurnover,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NetTurnover'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.ggr,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('GGR'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.playerWinloss,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('PlayerWinloss'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.betCount,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('BetCount'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.avgBetAmount,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('AvgBetAmount'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.uniquePlayers,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('UniquePlayers'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.margin,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Margin'),
  show: true,
  hasTotal: true
}, {
  key: columnKeys.noOfDeposit,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NoOfDeposit'),
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].date, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].month, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].currency, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  show: true,
  hasTotal: true
}, {
  key: columnKeys.totalDepositAmount,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalDepositAmount'),
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].date, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].month, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].currency, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  show: true,
  hasTotal: true
}, {
  key: columnKeys.noOfWithdrawal,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NoOfWithdrawal'),
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].date, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].month, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].currency, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  show: true,
  hasTotal: true
}, {
  key: columnKeys.totalWithdrawalAmount,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TotalWithdrawalAmount'),
  allowGroups: [_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].date, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].month, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].currency, _filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].player],
  show: true,
  hasTotal: true
}];
const defaultDisplayedColumns = [{
  key: columnKeys.group,
  name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Group'),
  show: true
}];
const dataColumns = {
  [columnKeys.group]: {
    sortBy: 1,
    colWidth: 80,
    className: "left-align"
  },
  [columnKeys.sabaId]: {
    colWidth: 70,
    className: "left-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.sabaId)
  },
  [columnKeys.sabaSystemId]: {
    colWidth: 70,
    className: "left-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.sabaSystemId)
  },
  [columnKeys.turnover]: {
    sortBy: 2,
    colWidth: 70,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.turnover)
  },
  [columnKeys.netTurnover]: {
    sortBy: 3,
    colWidth: 70,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.netTurnover)
  },
  [columnKeys.ggr]: {
    sortBy: 4,
    colWidth: 60,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.ggr)
  },
  [columnKeys.playerWinloss]: {
    sortBy: 5,
    colWidth: 60,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.playerWinloss)
  },
  [columnKeys.betCount]: {
    sortBy: 6,
    colWidth: 50,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.betCount)
  },
  [columnKeys.avgBetAmount]: {
    sortBy: 7,
    colWidth: 70,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.avgBetAmount)
  },
  [columnKeys.uniquePlayers]: {
    sortBy: 8,
    colWidth: 60,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.uniquePlayers)
  },
  [columnKeys.margin]: {
    sortBy: 9,
    colWidth: 50,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.margin)
  },
  [columnKeys.noOfDeposit]: {
    sortBy: 10,
    colWidth: 50,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.noOfDeposit)
  },
  [columnKeys.totalDepositAmount]: {
    sortBy: 11,
    colWidth: 70,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.totalDepositAmount)
  },
  [columnKeys.noOfWithdrawal]: {
    sortBy: 12,
    colWidth: 60,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.noOfWithdrawal)
  },
  [columnKeys.totalWithdrawalAmount]: {
    sortBy: 13,
    colWidth: 70,
    className: "right-align",
    draggable: true,
    onDragOver: event => event.preventDefault(),
    onDragStart: event => onDragStart(event, columnKeys.totalWithdrawalAmount)
  }
};

const onDragStart = (event, columnKey) => {
  const headerX = event.clientX - event.currentTarget.getBoundingClientRect().x;
  event.dataTransfer.setData("headerX", headerX);
  event.dataTransfer.setData("headerKey", columnKey);
};

const componentCells = {
  [columnKeys.group]: (rowData, highLight, groupChildClassName) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_GroupCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rowData: rowData,
    className: highLight + groupChildClassName
  }),
  [columnKeys.sabaId]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    className: dataColumns[columnKeys.sabaId].className + highLight
  }, rowData[columnKeys.sabaId]),
  [columnKeys.sabaSystemId]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    className: dataColumns[columnKeys.sabaSystemId].className + highLight
  }, rowData[columnKeys.sabaSystemId]),
  [columnKeys.turnover]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.turnover],
    className: dataColumns[columnKeys.turnover].className + highLight
  }),
  [columnKeys.netTurnover]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.netTurnover],
    className: dataColumns[columnKeys.netTurnover].className + highLight
  }),
  [columnKeys.ggr]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.ggr],
    className: dataColumns[columnKeys.ggr].className + highLight
  }),
  [columnKeys.playerWinloss]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.playerWinloss],
    disableWarning: true,
    className: dataColumns[columnKeys.playerWinloss].className + highLight
  }),
  [columnKeys.betCount]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.betCount],
    className: dataColumns[columnKeys.betCount].className + highLight,
    digits: 0
  }),
  [columnKeys.avgBetAmount]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.avgBetAmount],
    className: dataColumns[columnKeys.avgBetAmount].className + highLight
  }),
  [columnKeys.uniquePlayers]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.uniquePlayers],
    className: dataColumns[columnKeys.uniquePlayers].className + highLight,
    digits: 0
  }),
  [columnKeys.margin]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.margin],
    className: dataColumns[columnKeys.margin].className + highLight
  }, '%'),
  [columnKeys.noOfDeposit]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.noOfDeposit],
    className: dataColumns[columnKeys.noOfDeposit].className + highLight,
    digits: 0
  }),
  [columnKeys.totalDepositAmount]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.totalDepositAmount],
    className: dataColumns[columnKeys.totalDepositAmount].className + highLight
  }),
  [columnKeys.noOfWithdrawal]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.noOfWithdrawal],
    className: dataColumns[columnKeys.noOfWithdrawal].className + highLight,
    digits: 0
  }),
  [columnKeys.totalWithdrawalAmount]: (rowData, highLight) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_DecimalCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowData[columnKeys.totalWithdrawalAmount],
    className: dataColumns[columnKeys.totalWithdrawalAmount].className + highLight
  })
};
const defaultPagingOption = {
  PageIndex: 1,
  PageSize: 500,
  TotalItem: 0,
  PageList: [500, 1000, 1500, 2000]
};
const defaultSortOption = {
  sortBy: 1,
  sortType: 'asc'
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/constants/queryConsts.js":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/constants/queryConsts.js ***!
  \********************************************************************************/
/*! exports provided: Url, FileNameExport, errorResponse, successResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNameExport", function() { return FileNameExport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorResponse", function() { return errorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successResponse", function() { return successResponse; });
const Url = {
  setting: 'Api/WinLossReport/GetSetting',
  reportByGroup: 'Api/WinLossReport/GetData',
  exportReportByGroup: 'Api/WinLossReport/ExportData',
  exportReportDetailByGroup: 'Api/WinLossReport/ExportDetailData'
};
const FileNameExport = {
  reportByGroup: 'WinLossAnalysisReport.xlsx',
  reportDetailByGroup: 'WinLossAnalysisReport_Detail.xlsx'
};
const errorResponse = {
  data: null,
  isSuccess: false
};
const successResponse = {
  isSuccess: true
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/index.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppContainer */ "./www/js/source/reactpages/pages/report/winloss/components/AppContainer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/store */ "./www/js/source/reactpages/pages/report/winloss/libs/store.js");






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _libs_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("app-container"));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/collectionHelper.js":
/*!****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/helpers/collectionHelper.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionHelper; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CollectionHelper {
  static createDataSourceFrom(originDataSource, selectedItems) {
    const selectedItemList = selectedItems.split(',').filter(x => x !== '');
    const convertedList = originDataSource.map(item => {
      const {
        key,
        value
      } = item;
      return {
        key,
        value,
        status: selectedItemList.find(_ => _ == key) ? true : false
      };
    });
    return convertedList;
  }

  static sort(items, sortBy, sortType = 'asc') {
    if (!items || !items.length) {
      return [];
    }

    const comparer = this.buildComparer(sortBy, sortType);
    return items.sort(comparer);
  }

}

_defineProperty(CollectionHelper, "buildComparer", (property, sortType) => {
  const sortFactor = sortType === 'asc' ? 1 : -1;
  return (elment1, element2) => {
    let value;

    if (elment1[property] < element2[property]) {
      value = -1;
    } else if (elment1[property] > element2[property]) {
      value = 1;
    } else {
      value = 0;
    }

    return value * sortFactor;
  };
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/gridHelper.js":
/*!**********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/helpers/gridHelper.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridHelper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
/* harmony import */ var _components_grid_GridRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/grid/GridRow */ "./www/js/source/reactpages/pages/report/winloss/components/grid/GridRow.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class GridHelper {
  static renderHeader(displayedColumns, onDrop) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderRow"], {
      style: {
        height: '32px'
      }
    }, [..._constants_gridContants__WEBPACK_IMPORTED_MODULE_3__["defaultDisplayedColumns"], ...displayedColumns].map(col => col.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["HeaderCell"], _extends({
      key: `header-cell-${col.key}`
    }, _constants_gridContants__WEBPACK_IMPORTED_MODULE_3__["dataColumns"][col.key], {
      onDrop: event => {
        event.preventDefault();
        const headerKey = event.dataTransfer.getData("headerKey");
        const headerX = parseInt(event.dataTransfer.getData("headerX"));
        const headerDestIndex = displayedColumns.findIndex(_ => _.key === col.key);
        const headerSourceIndex = displayedColumns.findIndex(_ => _.key === headerKey);
        const newDisplayedColumns = [...displayedColumns];
        const targetX = event.target.getBoundingClientRect().x;
        const dragElementX = event.clientX - headerX;

        if (headerSourceIndex === headerDestIndex) {
          return;
        } else if (headerSourceIndex < headerDestIndex) {
          this._orderColumnsLeftToRight(newDisplayedColumns, headerSourceIndex, headerDestIndex, dragElementX, targetX);
        } else {
          this._orderColumnsRightToLeft(newDisplayedColumns, headerSourceIndex, headerDestIndex, dragElementX, targetX);
        }

        onDrop && onDrop(newDisplayedColumns);
      }
    }), col.name)));
  }

  static renderBody(dataList, displayedColumns) {
    return dataList.map(rowData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_GridRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: `row-${rowData.key}`,
      rowData: rowData,
      displayedColumns: displayedColumns
    }));
  }

  static renderFooter(totalData, displayedColumns) {
    const cells = displayedColumns.map(col => {
      if (!col.show) {
        return null;
      }

      if (col.hasTotal) {
        return _constants_gridContants__WEBPACK_IMPORTED_MODULE_3__["componentCells"][col.key](totalData, '', '');
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], null);
      }
    });
    const row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "fixed-table-grant-total",
      key: "totalRow"
    }, [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
      key: "total",
      className: "center-align"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("Total")), ...cells]);
    return [row];
  }

  static resetGridDataList(dataList) {
    return dataList.filter(_ => {
      const noParent = !_.parent ? true : false;
      noParent && (_.isDrillDown = false);
      return noParent;
    });
  }

  static _orderColumnsLeftToRight(columns, sourceIndex, destIndex, dragElementX, targetX) {
    if (dragElementX >= targetX) {
      destIndex++;
    }

    const tempSource = columns[sourceIndex];

    for (let colIndex = sourceIndex; colIndex < destIndex - 1; colIndex++) {
      columns[colIndex] = columns[colIndex + 1];
    }

    columns[destIndex - 1] = tempSource;
  }

  static _orderColumnsRightToLeft(columns, sourceIndex, destIndex, dragElementX, targetX) {
    if (dragElementX <= targetX) {
      destIndex--;
    }

    const tempSource = columns[sourceIndex];

    for (let colIndex = sourceIndex; colIndex > destIndex + 1; colIndex--) {
      columns[colIndex] = columns[colIndex - 1];
    }

    columns[destIndex + 1] = tempSource;
  }

}

_defineProperty(GridHelper, "getOrderCols", displayedColumns => {
  return displayedColumns.filter(_ => _.show).map(_ => _.key);
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/groupHelper.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/helpers/groupHelper.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupHelper; });
class GroupHelper {
  static getDislayedColumns(displayedColumns, groupBy) {
    const displayedAllowCols = displayedColumns.filter(col => {
      const allowGroups = col.allowGroups;

      if (!allowGroups) {
        return true;
      }

      return allowGroups.some(_groupBy => _groupBy === groupBy);
    });
    return displayedAllowCols;
  }

}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/queryHelper.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/helpers/queryHelper.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryHelper; });
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./www/js/source/reactpages/pages/report/winloss/libs/store.js");
/* harmony import */ var _actions_gridAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/gridAction */ "./www/js/source/reactpages/pages/report/winloss/actions/gridAction.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
/* harmony import */ var _helpers_groupHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/groupHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/groupHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class QueryHelper {
  static toAPIParams({
    requestParam,
    username,
    selectedCurrency,
    selectedBaseCurrency,
    selectedProduct,
    selectedBrand,
    selectedDateType,
    isExcludeTest,
    noDraw,
    drilldownInOriginalCurrency,
    dateRange,
    selectedGroupByOption,
    userNameFilterOption,
    selectedTimezone
  }) {
    return _objectSpread(_objectSpread({}, requestParam), {
      userNameFilterId: userNameFilterOption,
      username,
      currencyIdList: selectedCurrency,
      baseCurrency: selectedBaseCurrency,
      productIds: selectedProduct,
      brandIds: selectedBrand,
      dateType: selectedDateType,
      isIncludedTestData: !isExcludeTest,
      isNoDrawTicket: noDraw,
      drilldownInOriginalCurrency: drilldownInOriginalCurrency,
      fromDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_0__["default"].convertDateToString(dateRange.fromDate),
      toDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_0__["default"].convertDateToString(dateRange.toDate),
      groupBy: selectedGroupByOption,
      timezone: selectedTimezone
    });
  }

}

_defineProperty(QueryHelper, "callBackToUpdateGridOption", (pageIndex, pageSize, sortBy, sortType) => response => {
  const {
    totalRows
  } = response;
  const {
    pagingOption,
    selectedGroupByOption
  } = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getState();

  const newPagingOption = _objectSpread(_objectSpread({}, pagingOption), {
    PageIndex: pageIndex,
    PageSize: pageSize,
    TotalItem: totalRows
  });

  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_gridAction__WEBPACK_IMPORTED_MODULE_2__["setPagingOption"])(newPagingOption));
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_actions_gridAction__WEBPACK_IMPORTED_MODULE_2__["setSortOption"])({
    sortBy,
    sortType
  }));
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/queryService.js":
/*!****************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/queryService.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryService; });
/* harmony import */ var _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/DataService */ "./www/js/source/reactpages/lib/DataService.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/queryConsts */ "./www/js/source/reactpages/pages/report/winloss/constants/queryConsts.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class QueryService {
  static async getSettingData() {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportData(_constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["Url"].setting);

      if (response.status === 200) {
        return _objectSpread(_objectSpread({}, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["successResponse"]), {
          data: response.data
        });
      }
    } catch (e) {
      console.log(e);
    }

    return _objectSpread(_objectSpread({}, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["errorResponse"]), {
      data: {
        gridData: {}
      }
    });
  }

  static async getReportData(params) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["Url"].reportByGroup, params);

      if (response.status === 200) {
        return _objectSpread(_objectSpread({}, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["successResponse"]), {
          data: response.data
        });
      }
    } catch (e) {
      console.log(e);
    }

    return _objectSpread(_objectSpread({}, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["errorResponse"]), {
      data: {
        gridData: {}
      }
    });
  }

  static async exportReportData(params, after) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["Url"].exportReportByGroup, params);
      const noContentStatusCode = 204;

      if (response.status === noContentStatusCode) {
        alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("NoInfo"));
      } else {
        _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["FileNameExport"].reportByGroup);
      }

      ;
    } catch (e) {
      alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("ErrorProcessingMsg"));
      console.log(e);
    } finally {
      after && after();
    }
  }

  static async exportReportDetailData(params, after) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["Url"].exportReportDetailByGroup, params);
      const noContentStatusCode = 204;

      if (response.status === noContentStatusCode) {
        alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("NoInfo"));
      } else {
        _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConsts__WEBPACK_IMPORTED_MODULE_3__["FileNameExport"].reportDetailByGroup);
      }

      ;
    } catch (e) {
      alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("ErrorProcessingMsg"));
      console.log(e);
    } finally {
      after && after();
    }
  }

}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/libs/store.js":
/*!*********************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/libs/store.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/store */ "./www/js/source/reactpages/lib/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./www/js/source/reactpages/pages/report/winloss/reducers/index.js");
/* harmony import */ var _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/gridContants */ "./www/js/source/reactpages/pages/report/winloss/constants/gridContants.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/filterConsts */ "./www/js/source/reactpages/pages/report/winloss/constants/filterConsts.js");
/* harmony import */ var _libs_helpers_groupHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/helpers/groupHelper */ "./www/js/source/reactpages/pages/report/winloss/libs/helpers/groupHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const defaultState = _objectSpread(_objectSpread({}, window.initialState), {
  isLoading: false,
  gridData: {},
  requestParam: {},
  pagingOption: _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["defaultPagingOption"],
  sortOption: _constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["defaultSortOption"],
  selectedGroupByOption: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_3__["GroupByOptionIds"].date,
  selectedTimezone: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_3__["DefaultTimezone"],
  settingData: {
    timezones: []
  },
  displayedColumns: _libs_helpers_groupHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getDislayedColumns(_constants_gridContants__WEBPACK_IMPORTED_MODULE_2__["displayedColumns"], _constants_filterConsts__WEBPACK_IMPORTED_MODULE_3__["GroupByOptionIds"].date)
});

const store = _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], defaultState);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/reducers/filterReducer.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/reducers/filterReducer.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/winloss/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
/* harmony import */ var _jsroot_reducers_dateRangeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/reducers/dateRangeReducer */ "./www/js/source/reactpages/reducers/dateRangeReducer.js");
/* harmony import */ var _jsroot_reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/reducers/currencyReducer */ "./www/js/source/reactpages/reducers/currencyReducer.js");
/* harmony import */ var _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/reducers/baseCurrencyReducer */ "./www/js/source/reactpages/reducers/baseCurrencyReducer.js");
/* harmony import */ var _jsroot_reducers_usernameReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/reducers/usernameReducer */ "./www/js/source/reactpages/reducers/usernameReducer.js");
/* harmony import */ var _jsroot_reducers_productReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/reducers/productReducer */ "./www/js/source/reactpages/reducers/productReducer.js");
/* harmony import */ var _jsroot_reducers_excludeTestReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/reducers/excludeTestReducer */ "./www/js/source/reactpages/reducers/excludeTestReducer.js");
/* harmony import */ var _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jsroot/reducers/brandReducer */ "./www/js/source/reactpages/reducers/brandReducer.js");









const selectedDateType = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_DATE_TYPE"]](state, action) {
    return action.data;
  }

});
const noDraw = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_NO_DRAW"]](state, action) {
    return action.data;
  }

});
const drilldownInOriginalCurrency = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["DRILLDOWN_IN_ORIGINAL_CURRENCY"]](state, action) {
    return action.data;
  }

});
const userNameFilterOption = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["USERNAME_FILTER_OPTION"]](state, action) {
    return action.data;
  }

});
const selectedGroupByOption = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_GROUP_BY_OPTION"]](state, action) {
    return action.data;
  }

});
const selectedTimezone = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_TIMEZONE"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  selectedDateType,
  dateRange: _jsroot_reducers_dateRangeReducer__WEBPACK_IMPORTED_MODULE_2__["dateRange"],
  selectedProduct: _jsroot_reducers_productReducer__WEBPACK_IMPORTED_MODULE_6__["selectedProduct"],
  selectedBrand: _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_8__["selectedBrand"],
  userNameFilterOption,
  username: _jsroot_reducers_usernameReducer__WEBPACK_IMPORTED_MODULE_5__["username"],
  selectedCurrency: _jsroot_reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_3__["selectedCurrency"],
  selectedBaseCurrency: _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_4__["selectedBaseCurrency"],
  noDraw,
  drilldownInOriginalCurrency,
  isExcludeTest: _jsroot_reducers_excludeTestReducer__WEBPACK_IMPORTED_MODULE_7__["isExcludeTest"],
  selectedGroupByOption,
  selectedTimezone
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/reducers/gridReducer.js":
/*!*******************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/reducers/gridReducer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/winloss/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer */ "./www/js/source/reactpages/lib/createReducer.js");
/* harmony import */ var _jsroot_reducers_gridDataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/reducers/gridDataReducer */ "./www/js/source/reactpages/reducers/gridDataReducer.js");
/* harmony import */ var _jsroot_reducers_pagingOptionReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/reducers/pagingOptionReducer */ "./www/js/source/reactpages/reducers/pagingOptionReducer.js");
/* harmony import */ var _jsroot_reducers_sortOptionReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/reducers/sortOptionReducer */ "./www/js/source/reactpages/reducers/sortOptionReducer.js");
/* harmony import */ var _jsroot_reducers_requestParamReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/reducers/requestParamReducer */ "./www/js/source/reactpages/reducers/requestParamReducer.js");






const displayedColumns = Object(_jsroot_lib_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_DISPLAYED_COLUMNS"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  displayedColumns,
  gridData: _jsroot_reducers_gridDataReducer__WEBPACK_IMPORTED_MODULE_2__["gridData"],
  pagingOption: _jsroot_reducers_pagingOptionReducer__WEBPACK_IMPORTED_MODULE_3__["pagingOption"],
  sortOption: _jsroot_reducers_sortOptionReducer__WEBPACK_IMPORTED_MODULE_4__["sortOption"],
  requestParam: _jsroot_reducers_requestParamReducer__WEBPACK_IMPORTED_MODULE_5__["requestParam"]
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/winloss/reducers/index.js":
/*!*************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/winloss/reducers/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_reducers_loaderReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/reducers/loaderReducer */ "./www/js/source/reactpages/reducers/loaderReducer.js");
/* harmony import */ var _jsroot_reducers_settingDataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/reducers/settingDataReducer */ "./www/js/source/reactpages/reducers/settingDataReducer.js");
/* harmony import */ var _filterReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterReducer */ "./www/js/source/reactpages/pages/report/winloss/reducers/filterReducer.js");
/* harmony import */ var _gridReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gridReducer */ "./www/js/source/reactpages/pages/report/winloss/reducers/gridReducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object.assign(_jsroot_reducers_loaderReducer__WEBPACK_IMPORTED_MODULE_1__, _jsroot_reducers_settingDataReducer__WEBPACK_IMPORTED_MODULE_2__, _filterReducer__WEBPACK_IMPORTED_MODULE_3__["default"], _gridReducer__WEBPACK_IMPORTED_MODULE_4__["default"])));

/***/ }),

/***/ "./www/js/source/reactpages/reducers/baseCurrencyReducer.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/baseCurrencyReducer.js ***!
  \******************************************************************/
/*! exports provided: selectedBaseCurrency, baseCurrencyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBaseCurrency", function() { return selectedBaseCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseCurrencyList", function() { return baseCurrencyList; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedBaseCurrency = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BASECURRENCY"]](state, action) {
    return action.data;
  }

});
const baseCurrencyList = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BASECURRENCY_LIST"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/brandReducer.js":
/*!***********************************************************!*\
  !*** ./www/js/source/reactpages/reducers/brandReducer.js ***!
  \***********************************************************/
/*! exports provided: selectedBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBrand", function() { return selectedBrand; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedBrand = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BRAND"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/currencyReducer.js":
/*!**************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/currencyReducer.js ***!
  \**************************************************************/
/*! exports provided: selectedCurrency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedCurrency", function() { return selectedCurrency; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedCurrency = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_CURRENCY"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/dateRangeReducer.js":
/*!***************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/dateRangeReducer.js ***!
  \***************************************************************/
/*! exports provided: dateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateRange", function() { return dateRange; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const dateRange = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_DATE_RANGE"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/excludeTestReducer.js":
/*!*****************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/excludeTestReducer.js ***!
  \*****************************************************************/
/*! exports provided: isExcludeTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExcludeTest", function() { return isExcludeTest; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const isExcludeTest = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_IS_EXCLUDE_TEST"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/gridDataReducer.js":
/*!**************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/gridDataReducer.js ***!
  \**************************************************************/
/*! exports provided: gridData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridData", function() { return gridData; });
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types.js */ "./www/js/source/reactpages/actions/types.js");


const gridData = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, {
  [_actions_types_js__WEBPACK_IMPORTED_MODULE_1__["SET_GRID_DATA"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/loaderReducer.js":
/*!************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/loaderReducer.js ***!
  \************************************************************/
/*! exports provided: isLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const isLoading = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_LOADER"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/pagingOptionReducer.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/pagingOptionReducer.js ***!
  \******************************************************************/
/*! exports provided: pagingOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagingOption", function() { return pagingOption; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultPagingOption = {
  PageIndex: 1,
  PageSize: 50,
  TotalItem: 0,
  PageList: [50, 100, 200, 500]
};
const pagingOption = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultPagingOption, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_PAGING_OPTION"]](prevState, action) {
    return _objectSpread(_objectSpread({}, prevState), action.data);
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/productReducer.js":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/productReducer.js ***!
  \*************************************************************/
/*! exports provided: selectedProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedProduct", function() { return selectedProduct; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedProduct = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_PRODUCT"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/requestParamReducer.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/requestParamReducer.js ***!
  \******************************************************************/
/*! exports provided: requestParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestParam", function() { return requestParam; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const requestParam = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_REQUEST_PARAM"]](state, action) {
    return _objectSpread({}, action.data);
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/settingDataReducer.js":
/*!*****************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/settingDataReducer.js ***!
  \*****************************************************************/
/*! exports provided: settingData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingData", function() { return settingData; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const settingData = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SETTING_DATA"]](state, action) {
    return action.data;
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/sortOptionReducer.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/sortOptionReducer.js ***!
  \****************************************************************/
/*! exports provided: sortOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOption", function() { return sortOption; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const sortOption = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SORT_OPTION"]](prevState, action) {
    return _objectSpread(_objectSpread({}, prevState), action.data);
  }

});

/***/ }),

/***/ "./www/js/source/reactpages/reducers/usernameReducer.js":
/*!**************************************************************!*\
  !*** ./www/js/source/reactpages/reducers/usernameReducer.js ***!
  \**************************************************************/
/*! exports provided: username */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "username", function() { return username; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const username = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_USERNAME"]](state, action) {
    return action.data;
  }

});

/***/ })

/******/ });
//# sourceMappingURL=winloss.chunk.js.map
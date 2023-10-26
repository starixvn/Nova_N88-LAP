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
/******/ 		"www/js/build/dev/reactpages/report/bonusinfo": 0
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
/******/ 	deferredModules.push(["./www/js/source/reactpages/pages/report/bonusinfo/index.js","common"]);
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

/***/ "./www/js/source/reactpages/actions/bonusAction.js":
/*!*********************************************************!*\
  !*** ./www/js/source/reactpages/actions/bonusAction.js ***!
  \*********************************************************/
/*! exports provided: setSelectedBonusType, setSelectedBonusStatus, setSelectedBonusName, setBonusCodeList, setBonusCodeDetailList, setSelectedBonusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusType", function() { return setSelectedBonusType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusStatus", function() { return setSelectedBonusStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusName", function() { return setSelectedBonusName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBonusCodeList", function() { return setBonusCodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBonusCodeDetailList", function() { return setBonusCodeDetailList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusCode", function() { return setSelectedBonusCode; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedBonusType = bonusType => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_TYPE"],
    data: bonusType
  };
};
const setSelectedBonusStatus = bonusStatus => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_STATUS"],
    data: bonusStatus
  };
};
const setSelectedBonusName = bonusName => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_NAME"],
    data: bonusName
  };
};
const setBonusCodeList = bonusCodeList => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_CODE_LIST"],
    data: bonusCodeList
  };
};
const setBonusCodeDetailList = bonusCodeDetailList => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_CODE_DETAIL_LIST"],
    data: bonusCodeDetailList
  };
};
const setSelectedBonusCode = bonusCode => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_CODE"],
    data: bonusCode
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

/***/ "./www/js/source/reactpages/actions/claimAction.js":
/*!*********************************************************!*\
  !*** ./www/js/source/reactpages/actions/claimAction.js ***!
  \*********************************************************/
/*! exports provided: setSelectedClaimStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedClaimStatus", function() { return setSelectedClaimStatus; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/actions/types.js");

const setSelectedClaimStatus = claimStatus => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_CLAIM_STATUS"],
    data: claimStatus
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

/***/ "./www/js/source/reactpages/actions/types.js":
/*!***************************************************!*\
  !*** ./www/js/source/reactpages/actions/types.js ***!
  \***************************************************/
/*! exports provided: FETCH_DATA, SET_GRID_DATA, SET_SELECTED_PRODUCT, SET_SELECTED_BRAND, SET_SELECTED_BASECURRENCY, SET_BASECURRENCY_LIST, SET_SELECTED_CURRENCY, TOGGLE_LOADER, CHANGE_IS_EXCLUDE_TEST, USER_GUIDE_CONTENT, SET_DATE_RANGE, GET_DATE_CONSTRAINT, CHANGE_IS_CONVERT_ALL, SET_SELECTED_STATUS, SET_SELECTED_PLATFORM, SET_SELECTED_LIVESTATUS, SET_USERNAME, SET_REQUEST_PARAM, SET_REPORT_TITLE, SET_PAGING_OPTION, SET_SORT_OPTION, SET_SETTING_DATA, SET_BONUS_NAME, SET_SELECTED_BONUS_TYPE, SET_SELECTED_BONUS_STATUS, SET_SELECTED_CLAIM_STATUS, SET_BONUS_CODE_LIST, SET_BONUS_CODE_DETAIL_LIST, SET_SELECTED_BONUS_CODE, SET_REASON_LIST */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BONUS_CODE_DETAIL_LIST", function() { return SET_BONUS_CODE_DETAIL_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_BONUS_CODE", function() { return SET_SELECTED_BONUS_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REASON_LIST", function() { return SET_REASON_LIST; });
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
const SET_BONUS_CODE_DETAIL_LIST = "SET_BONUS_CODE_DETAIL_LIST";
const SET_SELECTED_BONUS_CODE = "SET_SELECTED_BONUS_CODE";

/* Reason */
const SET_REASON_LIST = "SET_REASON_LIST";

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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



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
const _excluded = ["content", "tag"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const ReportTitle = _ref => {
  let {
      content,
      tag
    } = _ref,
    attrs = _objectWithoutProperties(_ref, _excluded);
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
const _excluded = ["tag", "className", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


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
      attrs = _objectWithoutProperties(iconToggle, _excluded);
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







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
    const days = [];

    // Previous month's days
    const diff = Math.abs(firstDayOfWeek - (startOfMonth + 7)) % 7;
    for (let i = diff - 1; i >= 0; i--) {
      const dayMoment = lastMonth.clone().date(lastMonthDayCount - i);
      days.push({
        dayMoment,
        isPassive: true
      });
    }

    // Current month's days
    for (let i = 1; i <= dayCount; i++) {
      const dayMoment = shownDate.clone().date(i);
      // set days before today to isPassive
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
    }

    // Next month's days
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./defaultOptions.js */ "./www/js/source/reactpages/components/date-range/defaultOptions.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










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
    this.locale = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"].locale), props.locale);
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
  componentDidUpdate(prevProps) {
    if (this.props.startDate != prevProps.startDate || this.props.endDate != prevProps.endDate) {
      const {
        format,
        linkedCalendars
      } = this.props;
      const startDate = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.startDate, format, 'startOf');
      const endDate = Object(_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.props.endDate, format, 'endOf');
      this.setState({
        range: {
          startDate,
          endDate
        },
        link: linkedCalendars && endDate,
        show: false
      });
    }
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
    const today = moment__WEBPACK_IMPORTED_MODULE_2___default()().format("MM/DD/YYYY");
    const ranges = _objectSpread(_objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"].ranges(today, this.props.minDate, this.props.maxDate, this.props.limitedMonthRange)), this.props.ranges);
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
      isOpening: this.state.show,
      onClose: this.handleCancel,
      key: range.startDate.month().toString() + range.startDate.year().toString() + range.endDate.month().toString() + range.endDate.year().toString()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.dateRange,
      ref: element => this.dateRangeContainer = element
    }, showRange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PredefinedRanges_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      format: format,
      ranges: ranges,
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
          key: i + shownDate.month().toString() + shownDate.year().toString(),
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
  format: _constants__WEBPACK_IMPORTED_MODULE_7__["MomentFormat"].default,
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



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

/***/ "./www/js/source/reactpages/lib/collectionHelper.js":
/*!**********************************************************!*\
  !*** ./www/js/source/reactpages/lib/collectionHelper.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollectionHelper; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
const configName = _constants_config__WEBPACK_IMPORTED_MODULE_1__["debuggingConfig"].name;
// middleware that logs actions
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
    const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"],
    // lets us dispatch() functions
    loggerMiddleware));
    return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, enhancer);
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/actions/dataAction.js":
/*!*******************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/actions/dataAction.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/services/queryService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");



const fetchBonusInfoSummaryData = (params, isSort, callBack) => async dispatch => {
  const response = await _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchBonusInfoSummaryData(params);
  response.isSuccess && dispatch(setBonusInfoSummaryData(response.data.sortedData)) || alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("ErrorProcessingMsg"));
  !isSort && dispatch(setBonusInfoDetailData(null));
  callBack && callBack(response.data, response.isSuccess);
};
const setBonusInfoSummaryData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_INFO_SUMMARY_DATA"],
    data: data
  };
};
const fetchBonusInfoDetailData = (params, callBack) => async dispatch => {
  const response = await _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchBonusInfoDetailData(params);
  response.isSuccess && dispatch(setBonusInfoDetailData(response.data)) || alert(_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleResource("ErrorProcessingMsg"));
  callBack && callBack(response.data, response.isSuccess);
};
const setBonusInfoDetailData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_INFO_DETAIL_DATA"],
    data: data
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchBonusInfoSummaryData,
  fetchBonusInfoDetailData,
  setBonusInfoDetailData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/actions/filterAction.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/actions/filterAction.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js");
/* harmony import */ var _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/actions/baseCurrencyAction */ "./www/js/source/reactpages/actions/baseCurrencyAction.js");
/* harmony import */ var _jsroot_actions_currencyAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/actions/currencyAction */ "./www/js/source/reactpages/actions/currencyAction.js");
/* harmony import */ var _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/actions/brandAction */ "./www/js/source/reactpages/actions/brandAction.js");
/* harmony import */ var _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/actions/bonusAction */ "./www/js/source/reactpages/actions/bonusAction.js");
/* harmony import */ var _jsroot_actions_claimAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/actions/claimAction */ "./www/js/source/reactpages/actions/claimAction.js");
/* harmony import */ var _jsroot_actions_dateRangeAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/actions/dateRangeAction */ "./www/js/source/reactpages/actions/dateRangeAction.js");







const setGlobalFilter = filterData => async dispatch => {
  dispatch(setGlobalFilterData(filterData));
  dispatch(setSummaryGridHeight(380));
  dispatch(setDetailFilter(null));
};
const setGlobalFilterData = filterData => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_GLOBAL_FILTER"],
    data: filterData
  };
};
const setDetailFilter = detailFilterData => async dispatch => {
  dispatch(setDetailFilterData(detailFilterData));
};
const setDetailFilterData = detailFilterData => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_DETAIL_FILTER"],
    data: detailFilterData
  };
};
const setSummaryGridHeight = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SUMMARY_GRID_HEIGHT"],
    data: data
  };
};
const setDropdownOptionsData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_DROPDOWN_OPTIONS_DATA"],
    data: data
  };
};
const setSelectedGroupByOption = groupByOption => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_GROUP_BY_OPTION"],
    data: groupByOption
  };
};
const setSelectedSummaryDateRange = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_SUMMARY_DATE_RANGE"],
    data: data
  };
};
const setSummarySortInfo = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SUMMARY_SORT_INFO"],
    data: data
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setDateRange: _jsroot_actions_dateRangeAction__WEBPACK_IMPORTED_MODULE_6__["setDateRange"],
  setSelectedBaseCurrency: _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_1__["setSelectedBaseCurrency"],
  setSelectedCurrency: _jsroot_actions_currencyAction__WEBPACK_IMPORTED_MODULE_2__["setSelectedCurrency"],
  setSelectedBrand: _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_3__["setSelectedBrand"],
  setBonusCodeList: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setBonusCodeList"],
  setBonusCodeDetailList: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setBonusCodeDetailList"],
  setSelectedBonusName: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusName"],
  setSelectedBonusType: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusType"],
  setSelectedBonusStatus: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusStatus"],
  setSelectedClaimStatus: _jsroot_actions_claimAction__WEBPACK_IMPORTED_MODULE_5__["setSelectedClaimStatus"],
  setSelectedBonusCode: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusCode"],
  setSelectedSummaryDateRange,
  setSummarySortInfo,
  setGlobalFilter,
  setDetailFilter,
  setSummaryGridHeight,
  setDropdownOptionsData,
  setSelectedGroupByOption
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js":
/*!**************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterAction */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/filterAction.js");
/* harmony import */ var _dataAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataAction */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/dataAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _filterAction__WEBPACK_IMPORTED_MODULE_0__["default"]), _dataAction__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js":
/*!**************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js ***!
  \**************************************************************************/
/*! exports provided: SET_REPORT_DATE, SET_GLOBAL_FILTER, SET_DETAIL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_BONUS_INFO_SUMMARY_DATA, SET_BONUS_INFO_DETAIL_DATA, SET_DROPDOWN_OPTIONS_DATA, SET_SELECTED_GROUP_BY_OPTION, SET_SELECTED_SUMMARY_DATE_RANGE, SET_SUMMARY_SORT_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REPORT_DATE", function() { return SET_REPORT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GLOBAL_FILTER", function() { return SET_GLOBAL_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DETAIL_FILTER", function() { return SET_DETAIL_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COLLAPSE_FORM_FILTER", function() { return SET_COLLAPSE_FORM_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUMMARY_GRID_HEIGHT", function() { return SET_SUMMARY_GRID_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BONUS_INFO_SUMMARY_DATA", function() { return SET_BONUS_INFO_SUMMARY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BONUS_INFO_DETAIL_DATA", function() { return SET_BONUS_INFO_DETAIL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DROPDOWN_OPTIONS_DATA", function() { return SET_DROPDOWN_OPTIONS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_GROUP_BY_OPTION", function() { return SET_SELECTED_GROUP_BY_OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_SUMMARY_DATE_RANGE", function() { return SET_SELECTED_SUMMARY_DATE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SUMMARY_SORT_INFO", function() { return SET_SUMMARY_SORT_INFO; });
const SET_REPORT_DATE = 'SET_REPORT_DATE';
const SET_GLOBAL_FILTER = 'SET_GLOBAL_FILTER';
const SET_DETAIL_FILTER = 'SET_DETAIL_FILTER';
const SET_COLLAPSE_FORM_FILTER = 'SET_COLLAPSED_FORM_FILTER';
const SET_SUMMARY_GRID_HEIGHT = 'SET_SUMMARY_GRID_HEIGHT';
const SET_BONUS_INFO_SUMMARY_DATA = 'SET_BONUS_INFO_SUMMARY_DATA';
const SET_BONUS_INFO_DETAIL_DATA = 'SET_BONUS_INFO_DETAILS_DATA';
const SET_DROPDOWN_OPTIONS_DATA = 'SET_DROPDOWN_OPTIONS_DATA';
const SET_SELECTED_GROUP_BY_OPTION = 'SET_SELECTED_GROUP_BY_OPTION';
const SET_SELECTED_SUMMARY_DATE_RANGE = 'SET_SELECTED_SUMMARY_DATE_RANGE';
const SET_SUMMARY_SORT_INFO = 'SET_SUMMARY_SORT_INFO';

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/AppContainer.jsx":
/*!*************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/AppContainer.jsx ***!
  \*************************************************************************************/
/*! exports provided: AppContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _FormFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFilter */ "./www/js/source/reactpages/pages/report/bonusinfo/components/FormFilter.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./www/js/source/reactpages/pages/report/bonusinfo/components/Content.jsx");




const AppContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bonusinfo-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFilter__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/Content.jsx":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/Content.jsx ***!
  \********************************************************************************/
/*! exports provided: Content, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/components/ReportTitle */ "./www/js/source/reactpages/components/ReportTitle.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _widgets_BonusInfoSummaryWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/BonusInfoSummaryWidget */ "./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoSummaryWidget.jsx");
/* harmony import */ var _widgets_BonusInfoDetailWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/BonusInfoDetailWidget */ "./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoDetailWidget.jsx");








const Content = props => {
  const {
    globalFilter,
    detailFilter
  } = props;
  if (!globalFilter) {
    return null;
  }
  const {
    baseCurrency,
    fromDate,
    toDate
  } = globalFilter;
  const _renderTitle = () => {
    const reportName = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('BonusInfo');
    if (!globalFilter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tag: "div",
        content: reportName
      });
    }
    const displayCurrency = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Viewin').replace('{0}', baseCurrency);
    const content = `${reportName}, ${fromDate} → ${toDate}, ${displayCurrency}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tag: "div",
      content: content
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bonusinfo-content"
  }, _renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_BonusInfoSummaryWidget__WEBPACK_IMPORTED_MODULE_6__["default"], null), detailFilter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_BonusInfoDetailWidget__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
};
function mapStateToProps(state) {
  const {
    globalFilter,
    detailFilter
  } = state;
  return Object.assign({}, {
    globalFilter,
    detailFilter
  });
}
function mapDispatchToProps(dispatch) {
  const {} = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({}, dispatch);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Content));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/FormFilter.jsx":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/FormFilter.jsx ***!
  \***********************************************************************************/
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
/* harmony import */ var _jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/components/collapsible-panel */ "./www/js/source/reactpages/components/collapsible-panel/index.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jsroot/components/date-range */ "./www/js/source/reactpages/components/date-range/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @9softstudio/react-multiselect */ "./node_modules/@9softstudio/react-multiselect/dist/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _jsroot_lib_collectionHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsroot/lib/collectionHelper */ "./www/js/source/reactpages/lib/collectionHelper.js");
/* harmony import */ var _jsroot_lib_currencyHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @jsroot/lib/currencyHelper */ "./www/js/source/reactpages/lib/currencyHelper.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../libs/services/queryService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js");
/* harmony import */ var _filter_GroupFilter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filter/GroupFilter */ "./www/js/source/reactpages/pages/report/bonusinfo/components/filter/GroupFilter.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../constants/gridConst */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");

















const FormFilter = props => {
  const {
    setDateRange,
    setSelectedBonusName,
    setSelectedBrand,
    setSelectedBaseCurrency,
    setSelectedCurrency,
    setSelectedClaimStatus,
    setSelectedBonusStatus,
    setSelectedBonusType,
    selectedClaimStatus,
    selectedBonusStatus,
    selectedBonusType,
    setGlobalFilter,
    dateRange,
    selectedBonusName,
    selectedBrand,
    selectedGroupByOption,
    selectedBaseCurrency,
    selectedCurrency,
    dropdownOptionsData,
    setDropdownOptionsData,
    setSummarySortInfo
  } = props;
  const currencyList = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_currencyHelper__WEBPACK_IMPORTED_MODULE_12__["default"].getTpCurrencyList(selectedBrand, _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].brands), [selectedBrand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_13__["default"].fetchDropdownOptionsData(response => {
      if (response.isSuccess) {
        setDropdownOptionsData(response.data);
        setSelectedClaimStatus(response.data.claimStatusList.map(item => item.status && item.key).join(','));
        setSelectedBonusStatus(response.data.bonusStatusList.map(item => item.status && item.key).join(','));
        setSelectedBonusType(response.data.bonusTypeList.map(item => item.status && item.key).join(','));
      }
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const selectedCurrency = currencyList.map(_ => _.key).join(',');
    setSelectedCurrency(selectedCurrency);
  }, [currencyList]);
  const _onChangeDateRange = (range, isValid = true) => {
    if (isValid) {
      setDateRange(range);
    } else {
      const message = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("DateRangeExceedMsg").replace("{0}", _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].dateConstraint.limitedMonthRange);
      alert(message);
    }
  };
  const _renderDateFilter = () => {
    const dateConstraint = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].dateConstraint;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_9__["DateRange"], {
      startDate: dateRange.fromDate,
      endDate: dateRange.toDate,
      minDate: dateConstraint.minDate,
      maxDate: dateConstraint.maxDate,
      today: dateRange.toDate,
      limitedMonthRange: dateConstraint.limitedMonthRange,
      onChange: _onChangeDateRange
    });
  };
  const _renderCurrencySelectList = () => {
    const dataSource = _jsroot_lib_collectionHelper__WEBPACK_IMPORTED_MODULE_11__["default"].createDataSourceFrom(currencyList, selectedCurrency);
    return currencyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "ddlCurrency",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].currentLanguage,
      dataSource: dataSource,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (_, selectedItemsKey) => setSelectedCurrency(selectedItemsKey)
    });
  };
  const _renderBaseCurrencySelectList = () => {
    const baseCurrencyList = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].baseCurrencyList;
    return baseCurrencyList && baseCurrencyList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      instanceId: "baseCurrency",
      value: selectedBaseCurrency,
      options: baseCurrencyList,
      onChange: item => setSelectedBaseCurrency(item.value)
    });
  };
  const _renderBrandSelectList = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      instanceId: "brandList",
      value: selectedBrand,
      options: _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].brandOptions,
      onChange: item => setSelectedBrand(item.value)
    });
  };
  const _renderBonusStatusSelectList = () => {
    const bonusStatusOptions = dropdownOptionsData.bonusStatusList;
    return bonusStatusOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "bonusStatus",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].currentLanguage,
      dataSource: bonusStatusOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (currentItem, selectedItemsKey) => setSelectedBonusStatus(selectedItemsKey)
    });
  };
  const _renderBonusTypeSelectList = () => {
    const bonusTypeOptions = dropdownOptionsData.bonusTypeList;
    return bonusTypeOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "bonusType",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].currentLanguage,
      dataSource: bonusTypeOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (currentItem, selectedItemsKey) => setSelectedBonusType(selectedItemsKey)
    });
  };
  const _renderClaimStatusSelectList = () => {
    const claimStatusOptions = dropdownOptionsData.claimStatusList;
    return claimStatusOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_10___default.a, {
      id: "claimStatus",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].currentLanguage,
      dataSource: claimStatusOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (currentItem, selectedItemsKey) => setSelectedClaimStatus(selectedItemsKey)
    });
  };
  const _onSubmit = () => {
    const {
      fromDate,
      toDate
    } = dateRange;
    const {
      ggr,
      totalDeposit,
      totalWithdrawal
    } = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].specialReportDataPermission;
    const globalFilter = {
      fromDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_7__["default"].convertDateToString(fromDate),
      toDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_7__["default"].convertDateToString(toDate),
      bonusName: selectedBonusName,
      baseCurrency: selectedBaseCurrency,
      currencyIdList: selectedCurrency,
      brandId: selectedBrand,
      claimStatus: selectedClaimStatus,
      bonusStatus: selectedBonusStatus,
      bonusType: selectedBonusType,
      groupBy: selectedGroupByOption,
      isAllowedGGR: ggr,
      isAllowedTotalDeposit: totalDeposit,
      isAllowedTotalWithdrawal: totalWithdrawal
    };
    selectedGroupByOption === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["GroupByOptionIds"].bonusCode && setSummarySortInfo(_constants_gridConst__WEBPACK_IMPORTED_MODULE_15__["DefaultSummarySortInfo"]) || setSummarySortInfo(_constants_gridConst__WEBPACK_IMPORTED_MODULE_15__["DefaultSummarySortInfoGroupByDate"]);
    setGlobalFilter(globalFilter);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page-filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].brandOptions && _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].brandOptions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("Brand")), _renderBrandSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, `${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("BonusName")}/ ${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("Code")}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input-text",
    id: "BonusName",
    name: "BonusName",
    type: "text",
    value: selectedBonusName,
    onChange: item => setSelectedBonusName(item.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("BonusType")), _renderBonusTypeSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("BonusStatus")), _renderBonusStatusSelectList()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("Date")), _renderDateFilter())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("ClaimStatus")), _renderClaimStatusSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("Currency")), _renderCurrencySelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleResource("BaseCurrency")), _renderBaseCurrencySelectList())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filter_GroupFilter__WEBPACK_IMPORTED_MODULE_14__["default"], {
    isDisabledSubmit: !selectedClaimStatus || !selectedBonusStatus || !selectedBonusType || !selectedCurrency,
    onSubmit: _onSubmit
  }));
};
function mapStateToProps(state) {
  const {
    dateRange,
    selectedBrand,
    selectedBonusName,
    selectedBaseCurrency,
    selectedCurrency,
    selectedClaimStatus,
    selectedBonusStatus,
    selectedBonusType,
    dropdownOptionsData,
    selectedGroupByOption
  } = state;
  return Object.assign({}, {
    dateRange,
    selectedBonusName,
    selectedBrand,
    selectedBaseCurrency,
    selectedCurrency,
    selectedClaimStatus,
    selectedBonusStatus,
    selectedBonusType,
    selectedGroupByOption,
    dropdownOptionsData
  });
}
function mapDispatchToProps(dispatch) {
  const {
    setDateRange,
    setSelectedBonusName,
    setSelectedBrand,
    setSelectedBaseCurrency,
    setSelectedCurrency,
    setSelectedClaimStatus,
    setSelectedBonusStatus,
    setSelectedBonusType,
    setGlobalFilter,
    setCollapseFormFilter,
    setDropdownOptionsData,
    setSummarySortInfo
  } = _actions__WEBPACK_IMPORTED_MODULE_8__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setDateRange,
    setSelectedBonusName,
    setSelectedBrand,
    setSelectedBaseCurrency,
    setSelectedCurrency,
    setSelectedClaimStatus,
    setSelectedBonusStatus,
    setSelectedBonusType,
    setGlobalFilter,
    setCollapseFormFilter,
    setDropdownOptionsData,
    setSummarySortInfo
  }), dispatch);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FormFilter));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/common/Widget.jsx":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/common/Widget.jsx ***!
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
    hasData,
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
    className: hasData ? "widget-content" : "widget-no-content",
    style: {
      display: isCollapsed ? 'none' : 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isLoading: isLoading
  }), hasData && children || _renderNoData()));
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Widget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/filter/GroupFilter.jsx":
/*!*******************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/filter/GroupFilter.jsx ***!
  \*******************************************************************************************/
/*! exports provided: GroupFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFilter", function() { return GroupFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/components/collapsible-panel */ "./www/js/source/reactpages/components/collapsible-panel/index.jsx");
/* harmony import */ var _jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/radio/RadioGroup */ "./www/js/source/reactpages/components/radio/RadioGroup.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");








const GroupFilter = props => {
  const {
    setSelectedGroupByOption,
    selectedGroupByOption,
    onSubmit,
    isDisabledSubmit
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "group-filter page-filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("GroupBy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: 'filterGroupBy',
    value: selectedGroupByOption,
    options: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_7__["GroupByOptions"],
    onChange: setSelectedGroupByOption
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-submit",
    disabled: isDisabledSubmit,
    onClick: onSubmit
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("Submit")))));
};
function mapDispatchToProps(dispatch) {
  const {
    setSelectedGroupByOption
  } = _actions__WEBPACK_IMPORTED_MODULE_3__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setSelectedGroupByOption
  }), dispatch);
}
function mapStateToProps(state) {
  const {
    selectedGroupByOption
  } = state;
  return Object.assign({}, {
    selectedGroupByOption
  });
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(GroupFilter)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoDetailWidget.jsx":
/*!******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoDetailWidget.jsx ***!
  \******************************************************************************************************/
/*! exports provided: BonusInfoDetailWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoDetailWidget", function() { return BonusInfoDetailWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/bonusinfo/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/gridConst */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsroot/components/date-range */ "./www/js/source/reactpages/components/date-range/index.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @9softstudio/react-multiselect */ "./node_modules/@9softstudio/react-multiselect/dist/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


















const BonusInfoDetailWidget = props => {
  const {
    detailFilter,
    dateRange,
    bonusInfoSummaryData,
    bonusCodeDetailList,
    bonusInfoDetailData,
    fetchBonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    setBonusCodeList,
    setSelectedBonusCode,
    selectedSummaryDateRange,
    setSelectedSummaryDateRange,
    setBonusInfoDetailData
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [selectedBonusCodeList, setSelectedBonusCodeList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedBonusCode);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultPagingOption"]);
  const [sortInfo, onSort] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultDetailSortInfo"]);
  const [selectedDateRange, setSelectedDateRange] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedSummaryDateRange);
  const dateRangeLimit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => dateRange, []);
  const isDisabledSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return selectedBonusCodeList ? false : true;
  }, [selectedBonusCodeList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSelectedBonusCodeList(selectedBonusCode);
    setSelectedDateRange(selectedSummaryDateRange);
    if (!detailFilter || !selectedBonusCode || detailFilter.groupBy !== _constants_filterConsts__WEBPACK_IMPORTED_MODULE_14__["GroupByOptionIds"].bonusCode && !selectedSummaryDateRange) {
      return;
    }
    _fetchData(_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultPagingOption"].PageIndex, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultPagingOption"].PageSize);
  }, [detailFilter, selectedBonusCode, selectedSummaryDateRange]);
  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Details'), []);
  const _getBonusTypeId = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(bonusCode => {
    const bonusType = bonusInfoSummaryData.dataList.find(bonus => bonus.bonusCode === bonusCode);
    return bonusType ? bonusType.bonusTypeId : 0;
  }, [bonusInfoSummaryData]);
  const _handleExportExcel = () => {
    if (!selectedBonusCode) {
      return;
    }
    const date = detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_14__["GroupByOptionIds"].bonusCode ? null : selectedSummaryDateRange;
    const dateRangeParams = {
      fromDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_4__["default"].convertDateToString(date ? date.startDate : detailFilter.fromDate),
      toDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_4__["default"].convertDateToString(date ? date.endDate : detailFilter.toDate)
    };
    var rows = selectedBonusCode.split(',').reduce((info, curentValue) => {
      return info + `<r bonuscode="${curentValue}" bonustypeid="${_getBonusTypeId(curentValue)}"/>`;
    }, '');
    var bonusInfo = `<root> ${rows} </root>`;
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_7__["default"].getBonusInfoDetailExportAPIParams(detailFilter, sortInfo, dateRangeParams, bonusInfo, selectedBonusCode.split(',').join(', '));
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_8__["default"].exportBonusInfoDetailData(exportParams);
  };
  const _fetchData = (pageIndex, pageSize, sort) => {
    const date = detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_14__["GroupByOptionIds"].bonusCode ? null : selectedSummaryDateRange;
    const dateRangeParams = {
      fromDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_4__["default"].convertDateToString(date ? date.startDate : detailFilter.fromDate),
      toDate: _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_4__["default"].convertDateToString(date ? date.endDate : detailFilter.toDate)
    };
    var rows = selectedBonusCode.split(',').reduce((info, curentValue) => {
      return info + `<r bonuscode="${curentValue}" bonustypeid="${_getBonusTypeId(curentValue)}"/>`;
    }, '');
    var bonusInfo = `<root> ${rows} </root>`;
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_7__["default"].getBonusInfoDetailAPIParams(detailFilter, {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize
    }, sort || sortInfo, dateRangeParams, bonusInfo, selectedBonusCode.split(',').join(', '));
    setLoading(true);
    fetchBonusInfoDetailData(apiParams, (data, isSuccess) => {
      setLoading(false);
      if (isSuccess && data) {
        const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
        setPagingOption(newPagingOption);
      }
    });
  };
  const _handleSort = (sortBy, sortType) => {
    const newSort = {
      sortbyId: sortBy,
      isSortAsc: sortType === 'asc'
    };
    _fetchData(null, null, newSort);
    onSort && onSort(newSort);
  };
  const _handlePaging = (pageIndex, pageSize) => {
    _fetchData(pageIndex, pageSize);
  };
  const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
    return _objectSpread(_objectSpread(_objectSpread({}, pagingOption), sortInfo), {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };
  const _renderHeader = () => {
    const dataPermission = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_15__["default"].specialReportDataPermission;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"],
      key: detailFilter.groupBy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].userName].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].userName].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].sabaId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].sabaId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].currency].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].currency].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusType].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusType].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusName].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusName].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].claimDate].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].claimDate].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusAmountClaimed].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusAmountClaimed].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].transactionType].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].transactionType].name), dataPermission.totalDeposit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalDeposit].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalDeposit].name), dataPermission.totalWithdrawal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalWithdrawal].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalWithdrawal].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].status].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].status].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion].name));
  };
  const _renderBody = () => {
    const data = [...bonusInfoDetailData.dataList];
    const dataPermission = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_15__["default"].specialReportDataPermission;
    return data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["StyleRow"],
      key: item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].userName] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusCode] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].claimDate] + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].userName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].userName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].sabaId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].sabaId]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].currency].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].currency]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusType].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusType]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].claimDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].claimDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusAmountClaimed].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_12__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].bonusAmountClaimed], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].transactionType].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].transactionType]), dataPermission.totalDeposit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_12__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), dataPermission.totalWithdrawal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_12__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].status].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].status]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion].attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar",
      role: "progressbar",
      "aria-valuenow": item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion],
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      style: {
        width: `${item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion] * 100}%`
      }
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_12__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["BonusInfoDetailGridColumns"].completion] * 100, _constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DigitsAmount"]), "%")))));
  };
  const _onSubmit = () => {
    setSelectedBonusCode(selectedBonusCodeList);
    setSelectedSummaryDateRange(_objectSpread({}, selectedDateRange));
    setBonusInfoDetailData(null);
  };
  const _bonusOnChange = (item, dataSource) => {
    var bonusCodes = dataSource.reduce((arr, e) => {
      if (item.split(',').includes(e.key + '')) {
        arr.push(e.value);
      }
      return arr;
    }, []);
    setSelectedBonusCodeList(bonusCodes.join(','));
    setPagingOption(_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultPagingOption"]);
    onSort(_constants_gridConst__WEBPACK_IMPORTED_MODULE_9__["DefaultDetailSortInfo"]);
  };
  const _onChangeDateRange = range => {
    const {
      startDate,
      endDate
    } = range;
    const bonusCodeListData = bonusCodeDetailList.filter(item => moment__WEBPACK_IMPORTED_MODULE_16___default()(item.date).isBetween(startDate, endDate, 'day', []) && item.bonusCode).map(item => item.bonusCode);
    const uniqueBonusCodeList = bonusCodeListData.filter((code, index, list) => list.indexOf(code) === index);
    setBonusCodeList(uniqueBonusCodeList);
    setSelectedBonusCodeList("");
    setSelectedDateRange(range);
  };
  const _renderDateFilter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_11__["DateRange"], {
      key: selectedDateRange.startDate + selectedDateRange.endDate,
      startDate: selectedDateRange.startDate,
      endDate: selectedDateRange.endDate,
      minDate: dateRangeLimit.fromDate,
      maxDate: dateRangeLimit.toDate,
      today: selectedDateRange.endDate,
      onChange: _onChangeDateRange
    });
  };
  const _renderBonusSelectList = () => {
    const bonusCodeDataSource = bonusCodeList.map(function (item, index) {
      return {
        key: index,
        value: item,
        status: selectedBonusCodeList.split(',').includes(item) ? true : false
      };
    });
    return bonusCodeDataSource && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_13___default.a, {
      id: "bonusCodeList",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].currentLanguage,
      dataSource: bonusCodeDataSource,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (_, selectedItemsKey) => _bonusOnChange(selectedItemsKey, bonusCodeDataSource)
    });
  };
  const hasData = bonusInfoDetailData && bonusInfoDetailData.dataList.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: _title,
    isLoading: isLoading,
    handleExportExcel: _handleExportExcel,
    hasData: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row bonus-filter"
  }, detailFilter.groupBy !== _constants_filterConsts__WEBPACK_IMPORTED_MODULE_14__["GroupByOptionIds"].bonusCode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Date")), _renderDateFilter())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Bonus")), _renderBonusSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-submit",
    disabled: isDisabledSubmit,
    onClick: _onSubmit
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Submit")))))), hasData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_10__["Table"], {
    minWidth: 650,
    autoWidth: true,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    isPaging: true,
    pageOption: pagingOption,
    onPaging: _handlePaging,
    containerPadding: 60,
    shouldResetScrollPosition: isLoading
  }))));
};
function mapStateToProps(state) {
  const {
    detailFilter,
    dateRange,
    bonusInfoSummaryData,
    bonusCodeDetailList,
    bonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    selectedSummaryDateRange
  } = state;
  return Object.assign({}, {
    detailFilter,
    dateRange,
    bonusInfoSummaryData,
    bonusCodeDetailList,
    bonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    selectedSummaryDateRange
  });
}
function mapDispatchToProps(dispatch) {
  const {
    fetchBonusInfoDetailData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSelectedSummaryDateRange,
    setBonusInfoDetailData
  } = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchBonusInfoDetailData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSelectedSummaryDateRange,
    setBonusInfoDetailData
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BonusInfoDetailWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoSummaryWidget.jsx":
/*!*******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/components/widgets/BonusInfoSummaryWidget.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: BonusInfoSummaryWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoSummaryWidget", function() { return BonusInfoSummaryWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/bonusinfo/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/gridConst */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














let countRender = 0;
const BonusInfoSummaryWidget = props => {
  const {
    globalFilter,
    bonusInfoSummaryData,
    fetchBonusInfoSummaryData,
    selectedSummarySortInfo,
    setSummarySortInfo,
    setDetailFilter,
    setBonusCodeList,
    setBonusCodeDetailList,
    setSelectedBonusCode,
    summaryGridHeight,
    setSummaryGridHeight,
    setSelectedSummaryDateRange,
    setBonusInfoDetailData
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!globalFilter) {
      return;
    }
    countRender++;
    _fetchData(null);
  }, [globalFilter]);
  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Summary'), []);
  const _handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__["default"].getBonusInfoSummaryExportAPIParams(globalFilter, selectedSummarySortInfo);
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].exportBonusInfoSummaryData(exportParams);
  };
  const _fetchData = sort => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__["default"].getBonusInfoSummaryAPIParams(globalFilter, sort || selectedSummarySortInfo);
    setLoading(true);
    fetchBonusInfoSummaryData(apiParams, sort !== null, (data, isSuccess) => {
      if (isSuccess && data.bonusCodeList && data.bonusCodeInfoDetailList) {
        setBonusCodeList(data.bonusCodeList);
        setBonusCodeDetailList(data.bonusCodeInfoDetailList);
      }
      setLoading(false);
    });
  };
  const _handleSort = (sortBy, sortType) => {
    const sortInfo = {
      sortBy,
      sortType
    };
    _fetchData(sortInfo);
    setSummarySortInfo(sortInfo);
  };
  const _bonusCodeClick = (e, bonusCode) => {
    e.preventDefault();
    const detailFilter = _objectSpread({}, globalFilter);
    setDetailFilter(detailFilter);
    setSelectedBonusCode(bonusCode);
    setSummaryGridHeight(200);
  };
  const _dateClick = (e, date, bonusCode) => {
    e.preventDefault();
    const dateRangeValue = {
      startDate: moment__WEBPACK_IMPORTED_MODULE_13___default()(date).format('MM/DD/YYYY'),
      endDate: moment__WEBPACK_IMPORTED_MODULE_13___default()(date).format('MM/DD/YYYY')
    };
    const detailFilter = _objectSpread({}, globalFilter);
    const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => {
      if (item.date === date && item.bonusCode) {
        return item;
      }
    }).map(item => {
      return item.bonusCode;
    });
    const uniqueBonusCodeList = bonusCodeList.filter((v, i, a) => a.indexOf(v) === i);
    setSelectedBonusCode(bonusCode);
    setBonusCodeList(uniqueBonusCodeList);
    setBonusInfoDetailData(null);
    setDetailFilter(detailFilter);
    setSelectedSummaryDateRange(_objectSpread({}, dateRangeValue));
    setSummaryGridHeight(200);
  };
  const _monthClick = (e, date, bonusCode) => {
    e.preventDefault();
    const dateRangeValue = {
      startDate: moment__WEBPACK_IMPORTED_MODULE_13___default.a.max(moment__WEBPACK_IMPORTED_MODULE_13___default()(date).startOf('month'), moment__WEBPACK_IMPORTED_MODULE_13___default()(globalFilter.fromDate)).format('MM/DD/YYYY'),
      endDate: moment__WEBPACK_IMPORTED_MODULE_13___default.a.min(moment__WEBPACK_IMPORTED_MODULE_13___default()(date).endOf('month'), moment__WEBPACK_IMPORTED_MODULE_13___default()(globalFilter.toDate)).format('MM/DD/YYYY')
    };
    const detailFilter = _objectSpread({}, globalFilter);
    const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => {
      if (item.date === date && item.bonusCode) {
        return item;
      }
    }).map(item => {
      return item.bonusCode;
    });
    const uniqueBonusCodeList = bonusCodeList.filter((v, i, a) => a.indexOf(v) === i);
    setSelectedBonusCode(bonusCode);
    setBonusCodeList(uniqueBonusCodeList);
    setBonusInfoDetailData(null);
    setDetailFilter(detailFilter);
    setSelectedSummaryDateRange(_objectSpread({}, dateRangeValue));
    setSummaryGridHeight(200);
  };
  const _renderHeader = () => {
    const claimStatusNumber = globalFilter.claimStatus.split(",").length;
    const claimStatusAtributes = {
      colWidth: 50 * claimStatusNumber,
      colSpan: claimStatusNumber,
      className: "center-align"
    };
    const dataPermission = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_12__["default"].specialReportDataPermission;
    const gridHeader = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: "header1"
    }, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].name), globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndMonth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].month].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].month].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], claimStatusAtributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].claimStatus].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].name), dataPermission.ggr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].name), dataPermission.totalDeposit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].name), dataPermission.totalWithdrawal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: "header2",
      className: "row2"
    }, globalFilter.claimStatus.split(",").map((statusId, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].name);
    }))];
    return gridHeader;
  };
  const _renderBody = () => {
    const data = [...bonusInfoSummaryData.dataList];
    const dataPermission = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_12__["default"].specialReportDataPermission;
    return data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date] + index
    }, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => _dateClick(e, item.date, item.bonusCode)
    }, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date])), globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndMonth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].month].attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => _monthClick(e, item.date, item.bonusCode)
    }, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].month])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode].attributes, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCode ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => _bonusCodeClick(e, item.bonusCode)
    }, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode]) : item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus]), globalFilter.claimStatus.split(",").map((statusId, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]], 0));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.ggr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.totalDeposit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.totalWithdrawal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"]))));
  };
  const _renderFooter = () => {
    const {
      totalData
    } = bonusInfoSummaryData;
    const dataPermission = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_12__["default"].specialReportDataPermission;
    const totalAtributes = {
      colSpan: globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCode ? 6 : 7,
      className: "left-align"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      className: "fixed-table-grant-total",
      key: "totalRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], totalAtributes, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Total")), globalFilter.claimStatus.split(",").map((statusId, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]], 0));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.ggr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.totalDeposit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), dataPermission.totalWithdrawal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])));
  };
  const hasData = bonusInfoSummaryData && bonusInfoSummaryData.dataList.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: _title,
    isLoading: isLoading,
    handleExportExcel: _handleExportExcel,
    hasData: hasData
  }, hasData > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Table"], {
    key: 'BonusInfo_Summary' + summaryGridHeight + countRender,
    minWidth: 650,
    autoWidth: true,
    autoHeight: false,
    bodyHeight: summaryGridHeight,
    header: _renderHeader(),
    body: _renderBody(),
    footer: _renderFooter(),
    onSort: _handleSort,
    containerPadding: 65,
    shouldResetScrollPosition: isLoading
  })));
};
function mapStateToProps(state) {
  const {
    globalFilter,
    bonusInfoSummaryData,
    summaryGridHeight,
    selectedSummarySortInfo,
    selectedSummaryDateRange
  } = state;
  return Object.assign({}, {
    globalFilter,
    bonusInfoSummaryData,
    summaryGridHeight,
    selectedSummarySortInfo,
    selectedSummaryDateRange
  });
}
function mapDispatchToProps(dispatch) {
  const {
    fetchBonusInfoSummaryData,
    setDetailFilter,
    setBonusCodeList,
    setBonusCodeDetailList,
    setSelectedBonusCode,
    setSummaryGridHeight,
    setSelectedSummaryDateRange,
    setSummarySortInfo,
    setBonusInfoDetailData
  } = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchBonusInfoSummaryData,
    setDetailFilter,
    setBonusCodeList,
    setBonusCodeDetailList,
    setSelectedBonusCode,
    setSummaryGridHeight,
    setSelectedSummaryDateRange,
    setSummarySortInfo,
    setBonusInfoDetailData
  }, dispatch);
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BonusInfoSummaryWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js ***!
  \***********************************************************************************/
/*! exports provided: GroupByOptionIds, GroupByOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOptionIds", function() { return GroupByOptionIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByOptions", function() { return GroupByOptions; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const GroupByOptionIds = {
  bonusCode: 1,
  bonusCodeAndDate: 2,
  bonusCodeAndMonth: 3
};
const GroupByOptions = [{
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("BonusCode"),
  value: GroupByOptionIds.bonusCode
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Date"),
  value: GroupByOptionIds.bonusCodeAndDate
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Month"),
  value: GroupByOptionIds.bonusCodeAndMonth
}];

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js ***!
  \********************************************************************************/
/*! exports provided: BonusInfoSummaryGridColumns, BonusInfoDetailGridColumns, BonusInfoSummaryGridConfig, BonusInfoDetailGridConfig, DefaultPagingOption, DefaultDetailSortInfo, DefaultSummarySortInfo, DefaultSummarySortInfoGroupByDate, DigitsAmount, StyleRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoSummaryGridColumns", function() { return BonusInfoSummaryGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoDetailGridColumns", function() { return BonusInfoDetailGridColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoSummaryGridConfig", function() { return BonusInfoSummaryGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusInfoDetailGridConfig", function() { return BonusInfoDetailGridConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPagingOption", function() { return DefaultPagingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDetailSortInfo", function() { return DefaultDetailSortInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSummarySortInfo", function() { return DefaultSummarySortInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSummarySortInfoGroupByDate", function() { return DefaultSummarySortInfoGroupByDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitsAmount", function() { return DigitsAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRow", function() { return StyleRow; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const BonusInfoSummaryGridColumns = {
  total: 'total',
  brand: 'brandName',
  bonusName: 'bonusName',
  bonusCode: 'bonusCode',
  date: 'dateString',
  month: 'monthString',
  gGR: 'ggr',
  bonusType: 'bonusTypeName',
  startDate: 'startDateString',
  endDate: 'endDateString',
  bonusStatus: 'bonusStatusText',
  claimStatus: 'claimStatus',
  totalClaimants: 'totalClaimants',
  totalClaimedAmount: 'totalClaimedAmount',
  totalDeposit: 'totalDeposit',
  totalWithdrawal: 'totalWithdrawal',
  claimStatus1: 'running',
  claimStatus2: 'canceled',
  claimStatus4: 'fulfill',
  claimStatus5: 'otherPlatform'
};
const BonusInfoDetailGridColumns = {
  userName: 'userName',
  sabaId: 'sabaId',
  currency: 'currency',
  brand: 'brandName',
  bonusCode: 'bonusCode',
  bonusType: 'bonusType',
  bonusName: 'bonusName',
  claimDate: 'claimDateString',
  bonusAmountClaimed: 'claimedAmount',
  transactionType: 'transactionType',
  totalDeposit: 'totalDeposit',
  totalWithdrawal: 'totalWithdrawal',
  status: 'statusText',
  completion: 'percentagedCompletion'
};
const BonusInfoSummaryGridConfig = {
  [BonusInfoSummaryGridColumns.total]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Total'),
    attributes: {
      colSpan: 6,
      className: "left-align"
    }
  },
  [BonusInfoSummaryGridColumns.date]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Date'),
    attributes: {
      sortBy: 'Date',
      colWidth: 60,
      className: "center-align"
    }
  },
  [BonusInfoSummaryGridColumns.month]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Month'),
    attributes: {
      sortBy: 'Date',
      colWidth: 60,
      className: "center-align"
    }
  },
  [BonusInfoSummaryGridColumns.bonusName]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusName'),
    attributes: {
      sortBy: 'bonusName',
      colWidth: 110,
      className: "left-align"
    }
  },
  [BonusInfoSummaryGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      sortBy: 'bonusCode',
      colWidth: 110,
      className: "left-align"
    }
  },
  [BonusInfoSummaryGridColumns.bonusType]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusType'),
    attributes: {
      sortBy: 'bonusTypeName',
      colWidth: 85,
      className: "left-align"
    }
  },
  [BonusInfoSummaryGridColumns.startDate]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('StartDate'),
    attributes: {
      sortBy: 'startDate',
      colWidth: 60,
      className: "center-align"
    }
  },
  [BonusInfoSummaryGridColumns.endDate]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('EndDate'),
    attributes: {
      sortBy: 'endDate',
      colWidth: 60,
      className: "center-align"
    }
  },
  [BonusInfoSummaryGridColumns.bonusStatus]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusStatus'),
    attributes: {
      sortBy: 'bonusStatus',
      colWidth: 55,
      className: "center-align"
    }
  },
  [BonusInfoSummaryGridColumns.claimStatus]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ClaimStatus')
  },
  [BonusInfoSummaryGridColumns.totalClaimants]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalClaimants'),
    attributes: {
      sortBy: 'totalClaimants',
      colWidth: 55,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.totalClaimedAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalClaimedAmount'),
    attributes: {
      sortBy: 'totalClaimedAmount',
      colWidth: 70,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.gGR]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('GGR'),
    attributes: {
      sortBy: 'ggr',
      colWidth: 70,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.totalDeposit]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDeposit'),
    attributes: {
      sortBy: 'totalDeposit',
      colWidth: 70,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.totalWithdrawal]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalWithdrawal'),
    attributes: {
      sortBy: 'totalWithdrawal',
      colWidth: 70,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.claimStatus1]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Running'),
    attributes: {
      sortBy: 'running',
      colWidth: 50,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.claimStatus2]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Canceled'),
    attributes: {
      sortBy: 'canceled',
      colWidth: 50,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.claimStatus4]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Fullfill'),
    attributes: {
      sortBy: 'fulfill',
      colWidth: 50,
      className: "right-align"
    }
  },
  [BonusInfoSummaryGridColumns.claimStatus5]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('OtherPlatform'),
    attributes: {
      sortBy: 'otherPlatform',
      colWidth: 50,
      className: "right-align"
    }
  }
};
const BonusInfoDetailGridConfig = {
  [BonusInfoDetailGridColumns.userName]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('UserName'),
    attributes: {
      sortBy: 1,
      colWidth: 100,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.sabaId]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SabaId'),
    attributes: {
      sortBy: 2,
      colWidth: 100,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.currency]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Currency'),
    attributes: {
      sortBy: 3,
      colWidth: 60,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      sortBy: 4,
      colWidth: 100,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.bonusType]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusType'),
    attributes: {
      sortBy: 5,
      colWidth: 100,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.bonusName]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusName'),
    attributes: {
      sortBy: 6,
      colWidth: 100,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.claimDate]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ClaimDate'),
    attributes: {
      sortBy: 7,
      colWidth: 80,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.bonusAmountClaimed]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusAmountClaimed'),
    attributes: {
      sortBy: 8,
      colWidth: 80,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.transactionType]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TransactionType'),
    attributes: {
      sortBy: 9,
      colWidth: 80,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.totalDeposit]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDeposit'),
    attributes: {
      sortBy: 10,
      colWidth: 80,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.totalWithdrawal]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalWithdrawal'),
    attributes: {
      sortBy: 11,
      colWidth: 80,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.status]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ClaimStatus'),
    attributes: {
      sortBy: 12,
      colWidth: 80,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.completion]: {
    name: '% ' + _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Completion'),
    attributes: {
      sortBy: 13,
      colWidth: 120,
      className: "center-align"
    }
  }
};
const DefaultPagingOption = {
  PageIndex: 1,
  PageSize: 100,
  TotalItem: 0,
  PageList: [100, 200, 500, 1000]
};
const DefaultDetailSortInfo = {
  sortbyId: 13,
  isSortAsc: false
};
const DefaultSummarySortInfo = {
  sortBy: 'BonusCode',
  sortType: 'asc'
};
const DefaultSummarySortInfoGroupByDate = {
  sortBy: 'Date',
  sortType: 'asc'
};
const DigitsAmount = 2;
const StyleRow = {
  height: '32px'
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/constants/queryConst.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/constants/queryConst.js ***!
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
  bonusInfoSetting: 'Api/BonusInfo/GetSetting',
  bonusInfoSummary: 'Api/BonusInfo/GetSummaryData',
  bonusInfoDetail: 'Api/BonusInfo/GetDetailsData',
  bonusInfoSummaryExport: 'Api/BonusInfo/ExportSummaryData',
  bonusInfoDetailExport: 'Api/BonusInfo/ExportDetailData'
};
const FileNameExport = {
  bonusInfoSummaryExport: 'BonusInfo_Summary.xls',
  bonusInfoDetailExport: 'BonusInfo_Detail.xls'
};
const errorResponse = {
  data: null,
  isSuccess: false
};
const successResponse = {
  isSuccess: true
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/index.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppContainer */ "./www/js/source/reactpages/pages/report/bonusinfo/components/AppContainer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/store */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/store.js");





const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _libs_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("app-container"));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/dataService.js":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/libs/services/dataService.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataService; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class DataService {}
_defineProperty(DataService, "getBonusInfoSummaryAPIParams", (filterData, sortInfo) => {
  const params = _objectSpread(_objectSpread({}, filterData), sortInfo);
  return params;
});
_defineProperty(DataService, "getBonusInfoDetailAPIParams", (filterData, pagingOption, sortInfo, dateRange, bonusInfo, bonusCode) => {
  const params = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, filterData), sortInfo), dateRange), {
    pageIndex: pagingOption.PageIndex,
    pageSize: pagingOption.PageSize
  }), {}, {
    bonusInfo,
    bonusCode
  });
  return params;
});
_defineProperty(DataService, "getBonusInfoSummaryExportAPIParams", (filterData, sortInfo) => {
  const params = _objectSpread(_objectSpread({}, filterData), sortInfo);
  return params;
});
_defineProperty(DataService, "getBonusInfoDetailExportAPIParams", (filterData, sortInfo, dateRange, bonusInfo, bonusCode) => {
  const params = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, filterData), sortInfo), dateRange), {}, {
    bonusInfo,
    bonusCode
  });
  return params;
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js":
/*!***************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueryService; });
/* harmony import */ var _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/DataService */ "./www/js/source/reactpages/lib/DataService.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/queryConst */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/queryConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class QueryService {
  static async exportBonusInfoSummaryData(params) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoSummaryExport, params);
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].bonusInfoSummaryExport);
    } catch (e) {
      console.log(e);
    }
  }
  static async exportBonusInfoDetailData(params) {
    try {
      const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoDetailExport, params);
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].bonusInfoDetailExport);
    } catch (e) {
      console.log(e);
    }
  }
}
_defineProperty(QueryService, "fetchDropdownOptionsData", async callBack => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoSetting, {
    time: new Date().getTime()
  }));
  callBack && callBack(data);
});
_defineProperty(QueryService, "fetchBonusInfoSummaryData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoSummary, params));
  return data;
});
_defineProperty(QueryService, "fetchBonusInfoDetailData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoDetail, params));
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

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/libs/store.js":
/*!***********************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/libs/store.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/store */ "./www/js/source/reactpages/lib/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/index.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const defaultState = _objectSpread(_objectSpread(_objectSpread({}, window.initialState), {
  dropdownOptionsData: {
    bonusTypeList: [],
    bonusStatusList: [],
    claimStatusList: []
  }
}), {
  selectedGroupByOption: _constants_filterConsts__WEBPACK_IMPORTED_MODULE_2__["GroupByOptionIds"].bonusCode
});
const store = _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], defaultState);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/dataReducer.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/reducers/dataReducer.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const bonusInfoSummaryData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_INFO_SUMMARY_DATA"]](state, action) {
    return action.data;
  }
});
const bonusInfoDetailData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_INFO_DETAIL_DATA"]](state, action) {
    return action.data;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  bonusInfoSummaryData,
  bonusInfoDetailData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/filterReducer.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/reducers/filterReducer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
/* harmony import */ var _jsroot_reducers_dateRangeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/reducers/dateRangeReducer */ "./www/js/source/reactpages/reducers/dateRangeReducer.js");
/* harmony import */ var _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/reducers/baseCurrencyReducer */ "./www/js/source/reactpages/reducers/baseCurrencyReducer.js");
/* harmony import */ var _jsroot_reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/reducers/currencyReducer */ "./www/js/source/reactpages/reducers/currencyReducer.js");
/* harmony import */ var _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/reducers/brandReducer */ "./www/js/source/reactpages/reducers/brandReducer.js");
/* harmony import */ var _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/reducers/bonusReducer */ "./www/js/source/reactpages/reducers/bonusReducer.js");
/* harmony import */ var _jsroot_reducers_claimReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/reducers/claimReducer */ "./www/js/source/reactpages/reducers/claimReducer.js");








const globalFilter = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_GLOBAL_FILTER"]](state, action) {
    return action.data;
  }
});
const detailFilter = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_DETAIL_FILTER"]](state, action) {
    return action.data;
  }
});
const isCollapsedFormFilter = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSE_FORM_FILTER"]](state, action) {
    return action.data;
  }
});
const summaryGridHeight = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SUMMARY_GRID_HEIGHT"]](state, action) {
    return action.data;
  }
});
const dropdownOptionsData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_DROPDOWN_OPTIONS_DATA"]](state, action) {
    return action.data;
  }
});
const selectedGroupByOption = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_GROUP_BY_OPTION"]](state, action) {
    return action.data;
  }
});
const selectedSummaryDateRange = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_SUMMARY_DATE_RANGE"]](state, action) {
    return action.data;
  }
});
const selectedSummarySortInfo = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SUMMARY_SORT_INFO"]](state, action) {
    return action.data;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  dateRange: _jsroot_reducers_dateRangeReducer__WEBPACK_IMPORTED_MODULE_2__["dateRange"],
  selectedBrand: _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_5__["selectedBrand"],
  selectedBaseCurrency: _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_3__["selectedBaseCurrency"],
  selectedCurrency: _jsroot_reducers_currencyReducer__WEBPACK_IMPORTED_MODULE_4__["selectedCurrency"],
  selectedBonusName: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["selectedBonusName"],
  selectedBonusType: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["selectedBonusType"],
  selectedBonusStatus: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["selectedBonusStatus"],
  selectedClaimStatus: _jsroot_reducers_claimReducer__WEBPACK_IMPORTED_MODULE_7__["selectedClaimStatus"],
  selectedBonusCode: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["selectedBonusCode"],
  selectedGroupByOption,
  selectedSummaryDateRange,
  selectedSummarySortInfo,
  bonusCodeList: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["bonusCodeList"],
  bonusCodeDetailList: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["bonusCodeDetailList"],
  globalFilter,
  detailFilter,
  isCollapsedFormFilter,
  summaryGridHeight,
  dropdownOptionsData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/index.js":
/*!***************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/bonusinfo/reducers/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _filterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterReducer */ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/filterReducer.js");
/* harmony import */ var _dataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataReducer */ "./www/js/source/reactpages/pages/report/bonusinfo/reducers/dataReducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(Object.assign(_filterReducer__WEBPACK_IMPORTED_MODULE_1__["default"], _dataReducer__WEBPACK_IMPORTED_MODULE_2__["default"])));

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

/***/ "./www/js/source/reactpages/reducers/bonusReducer.js":
/*!***********************************************************!*\
  !*** ./www/js/source/reactpages/reducers/bonusReducer.js ***!
  \***********************************************************/
/*! exports provided: selectedBonusStatus, selectedBonusType, selectedBonusName, bonusCodeList, bonusCodeDetailList, selectedBonusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusStatus", function() { return selectedBonusStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusType", function() { return selectedBonusType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusName", function() { return selectedBonusName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonusCodeList", function() { return bonusCodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonusCodeDetailList", function() { return bonusCodeDetailList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusCode", function() { return selectedBonusCode; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedBonusStatus = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_STATUS"]](state, action) {
    return action.data;
  }
});
const selectedBonusType = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_TYPE"]](state, action) {
    return action.data;
  }
});
const selectedBonusName = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_NAME"]](state, action) {
    return action.data;
  }
});
const bonusCodeList = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_CODE_LIST"]](state, action) {
    return action.data;
  }
});
const bonusCodeDetailList = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_BONUS_CODE_DETAIL_LIST"]](state, action) {
    return action.data;
  }
});
const selectedBonusCode = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_BONUS_CODE"]](state, action) {
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

/***/ "./www/js/source/reactpages/reducers/claimReducer.js":
/*!***********************************************************!*\
  !*** ./www/js/source/reactpages/reducers/claimReducer.js ***!
  \***********************************************************/
/*! exports provided: selectedClaimStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedClaimStatus", function() { return selectedClaimStatus; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/actions/types.js");
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const selectedClaimStatus = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_CLAIM_STATUS"]](state, action) {
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

/***/ })

/******/ });
//# sourceMappingURL=bonusinfo.chunk.js.map
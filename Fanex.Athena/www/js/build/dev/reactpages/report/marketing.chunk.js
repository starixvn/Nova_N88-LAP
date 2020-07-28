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
/******/ 		"www/js/build/dev/reactpages/report/marketing": 0
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
/******/ 	deferredModules.push(["./www/js/source/reactpages/pages/report/marketing/index.js","common"]);
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

/***/ "./www/js/source/reactpages/actions/types.js":
/*!***************************************************!*\
  !*** ./www/js/source/reactpages/actions/types.js ***!
  \***************************************************/
/*! exports provided: FETCH_DATA, SET_GRID_DATA, SET_SELECTED_PRODUCT, SET_SELECTED_BASECURRENCY, SET_BASECURRENCY_LIST, SET_SELECTED_CURRENCY, TOGGLE_LOADER, CHANGE_IS_EXCLUDE_TEST, USER_GUIDE_CONTENT, SET_DATE_RANGE, GET_DATE_CONSTRAINT, CHANGE_IS_CONVERT_ALL, SET_SELECTED_STATUS, SET_SELECTED_PLATFORM, SET_SELECTED_LIVESTATUS, SET_USERNAME, SET_REQUEST_PARAM, SET_REPORT_TITLE, SET_PAGING_OPTION, SET_SORT_OPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GRID_DATA", function() { return SET_GRID_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_PRODUCT", function() { return SET_SELECTED_PRODUCT; });
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
const FETCH_DATA = 'FETCH_DATA';
const SET_GRID_DATA = "SET_GRID_DATA";
/* Product */

const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
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


class DataService {
  static getData(url, params) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
      params: params
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

/***/ "./www/js/source/reactpages/pages/report/marketing/actions/dataAction.js":
/*!*******************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/actions/dataAction.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/marketing/actions/types.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");



const fetchPeformanceHighlightData = (params, callBack) => async dispatch => {
  const response = await _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchPerformanceHighlightData(params);
  dispatch(setPeformanceHighlightData(response.data));
  callBack && callBack();
};

const setPeformanceHighlightData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_PERFORMANCE_HIGHLIGHT_DATA"],
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPeformanceHighlightData,
  setPeformanceHighlightData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/actions/filterAction.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/actions/filterAction.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./www/js/source/reactpages/pages/report/marketing/actions/types.js");
/* harmony import */ var _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/actions/baseCurrencyAction */ "./www/js/source/reactpages/actions/baseCurrencyAction.js");



const setViewMode = viewMode => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_VIEW_MODE"],
    data: viewMode
  };
};

const setReportDate = reportDate => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_REPORT_DATE"],
    data: reportDate
  };
};

const setCompareDate = compareDate => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_COMPARE_DATE"],
    data: compareDate
  };
};

const setGlobalFilter = filterData => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_GLOBAL_FILTER"],
    data: filterData
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setSelectedBaseCurrency: _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_1__["setSelectedBaseCurrency"],
  setViewMode,
  setReportDate,
  setCompareDate,
  setGlobalFilter
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/actions/index.js":
/*!**************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/actions/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterAction */ "./www/js/source/reactpages/pages/report/marketing/actions/filterAction.js");
/* harmony import */ var _dataAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataAction */ "./www/js/source/reactpages/pages/report/marketing/actions/dataAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _filterAction__WEBPACK_IMPORTED_MODULE_0__["default"], {}, _dataAction__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/actions/types.js":
/*!**************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/actions/types.js ***!
  \**************************************************************************/
/*! exports provided: SET_REPORT_DATE, SET_COMPARE_DATE, SET_VIEW_MODE, SET_GLOBAL_FILTER, SET_PERFORMANCE_HIGHLIGHT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REPORT_DATE", function() { return SET_REPORT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COMPARE_DATE", function() { return SET_COMPARE_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEW_MODE", function() { return SET_VIEW_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GLOBAL_FILTER", function() { return SET_GLOBAL_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PERFORMANCE_HIGHLIGHT_DATA", function() { return SET_PERFORMANCE_HIGHLIGHT_DATA; });
const SET_REPORT_DATE = 'SET_REPORT_DATE';
const SET_COMPARE_DATE = 'SET_COMPARE_DATE';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const SET_GLOBAL_FILTER = 'SET_GLOBAL_FILTER';
const SET_PERFORMANCE_HIGHLIGHT_DATA = 'SET_PERFORMANCE_HIGHLIGHT_DATA';

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/AppContainer.jsx":
/*!*************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/AppContainer.jsx ***!
  \*************************************************************************************/
/*! exports provided: AppContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainer", function() { return AppContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _FormFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormFilter */ "./www/js/source/reactpages/pages/report/marketing/components/FormFilter.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content */ "./www/js/source/reactpages/pages/report/marketing/components/Content.jsx");







const AppContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "marketing-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFilter__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

function mapStateToProps(state) {
  const {} = state;
  return Object.assign({}, {});
}

function mapDispatchToProps(dispatch) {
  const {} = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AppContainer));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/Content.jsx":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/Content.jsx ***!
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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _widgets_PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/PerformanceHighlightWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget.jsx");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");








const Content = props => {
  const {
    globalFilter
  } = props;

  const _renderTitle = () => {
    const reportName = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Marketing');

    if (!globalFilter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tag: "div",
        content: reportName
      });
    }

    const {
      selectedBaseCurrency,
      reportDate
    } = globalFilter;
    const {
      fromDate,
      toDate
    } = reportDate; // const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);

    const reportDateRange = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_7__["default"].isEqualDate(fromDate, toDate) ? _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_7__["default"].formatDateStructureToString(reportDate.fromDate) : `${_libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_7__["default"].formatDateStructureToString(reportDate.fromDate)} - ${_libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_7__["default"].formatDateStructureToString(reportDate.toDate)}`;
    const content = `${reportName}, ${reportDateRange}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tag: "div",
      content: content
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "marketing-content"
  }, _renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

function mapStateToProps(state) {
  const {
    globalFilter
  } = state;
  return Object.assign({}, {
    globalFilter
  });
}

function mapDispatchToProps(dispatch) {
  const {} = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Content));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/FormFilter.jsx":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/FormFilter.jsx ***!
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
/* harmony import */ var _jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/radio/RadioGroup */ "./www/js/source/reactpages/components/radio/RadioGroup.jsx");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/filterConst */ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js");
/* harmony import */ var _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/helpers/filterHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js");
/* harmony import */ var _common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/TimePeriodSelect */ "./www/js/source/reactpages/pages/report/marketing/components/common/TimePeriodSelect.jsx");












const FormFilter = props => {
  const {
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter,
    selectedBaseCurrency,
    reportDate,
    compareDate
  } = props;

  const _renderBaseCurrencySelectList = () => {
    const baseCurrencyList = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__["default"].baseCurrencyList;
    return baseCurrencyList && baseCurrencyList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      instanceId: "ddlBasedCurrency",
      value: selectedBaseCurrency,
      options: baseCurrencyList,
      onChange: item => setSelectedBaseCurrency(item.value)
    });
  };

  const _renderViewModeOptions = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: 'ViewBy',
      value: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["ViewByOptions"][0].value,
      options: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["ViewByOptions"],
      onChange: setViewMode
    });
  };

  const _renderReportDateSelection = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_11__["default"], {
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["ReportDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].ReportDateGenerateRangeSelections,
      selectedRange: reportDate,
      onChange: selectedRange => {
        setReportDate(selectedRange);
        setCompareDate(_libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].CompareDateGenerateRangeSelections[_constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["CompareDateOptionValues"].previousPeriod](selectedRange)); //reset to default selection
      }
    });
  };

  const _renderCompareDateSelection = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_11__["default"], {
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["CompareDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].CompareDateGenerateRangeSelections,
      selectedRange: compareDate,
      selectedDependRange: reportDate,
      onChange: selectedRange => setCompareDate(selectedRange)
    });
  };

  const _onSubmit = () => {
    const globalFilter = {
      reportDate,
      compareDate,
      selectedBaseCurrency
    };
    setGlobalFilter(globalFilter);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page-filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("ReportDate")), _renderReportDateSelection())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("CompareDate")), _renderCompareDateSelection()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-submit",
    disabled: false,
    onClick: _onSubmit
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("Submit"))))))));
};

function mapStateToProps(state) {
  const {
    selectedBaseCurrency,
    viewMode,
    reportDate,
    compareDate
  } = state;
  return Object.assign({}, {
    selectedBaseCurrency,
    viewMode,
    reportDate,
    compareDate
  });
}

function mapDispatchToProps(dispatch) {
  const {
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter
  } = _actions__WEBPACK_IMPORTED_MODULE_8__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter
  }), dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FormFilter));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/StickyCompareBox.jsx":
/*!************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/StickyCompareBox.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");





const StickyCompareBox = props => {
  const {
    title,
    description,
    value,
    rate,
    showGrowthRateSympol
  } = props;

  const _renderTitle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-title"
    }, title);
  };

  const _renderDescription = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-description"
    }, description);
  };

  const _renderValue = () => {
    const isNumber = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(value);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-content"
    }, isNumber ? _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(value) : value);
  };

  const _renderRate = () => {
    const roundedRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(rate, 0);
    const rateDisplay = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_3__["default"].displayRate(roundedRate);
    const color = roundedRate >= 0 ? 'green' : 'red';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-rate"
    }, showGrowthRateSympol !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "triangle-top-left-green"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `rate ${color}`
    }, rateDisplay));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box"
  }, _renderTitle(), _renderDescription(), _renderValue(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-compare-title"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('CompareDate')), _renderRate());
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(StickyCompareBox));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/TimePeriodSelect.jsx":
/*!************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/TimePeriodSelect.jsx ***!
  \************************************************************************************************/
/*! exports provided: TimePeriodSelect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePeriodSelect", function() { return TimePeriodSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");



const TimePeriodSelect = props => {
  const {
    selectedRange,
    selectedDependRange,
    selectOptions,
    selectOptionGenerateRange,
    onChange
  } = props;
  const {
    fromDate,
    toDate
  } = selectedRange;

  const _onChange = currentSelectOption => {
    const range = selectOptionGenerateRange[currentSelectOption.value](selectedDependRange);
    onChange && onChange(range);
  };

  const _displayRange = () => {
    const displayFromDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__["default"].formatDateStructureToString(fromDate);

    if (_libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__["default"].isEqualDate(fromDate, toDate)) {
      return displayFromDate;
    }

    const displayToDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__["default"].formatDateStructureToString(toDate);
    return `${displayFromDate} - ${displayToDate}`;
  };

  const _getCurrentSelectOption = () => {
    const currentSelection = selectOptions.find(_ => {
      const range = selectOptionGenerateRange[_.value](selectedDependRange);

      return _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__["default"].isEqualDate(fromDate, range.fromDate) && _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_2__["default"].isEqualDate(toDate, range.toDate);
    });
    return currentSelection;
  };

  const _renderSelectOptions = () => {
    const selectedSelectOption = _getCurrentSelectOption();

    return selectOptions && selectOptions.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
      instanceId: "ddlSelectOptions",
      value: selectedSelectOption.value,
      options: selectOptions,
      onChange: _onChange
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-5 col-sm-5 col-lg-5 col-xl-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, _renderSelectOptions())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-7 col-sm-7 col-lg-7 col-xl-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "input-text disabled",
    value: _displayRange(),
    disabled: true
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TimePeriodSelect));

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
    children
  } = props;
  const [isCollapsed, setIsCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const _renderTitle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "widget-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: `${isCollapsed ? "arrow-up" : "arrow-down"} ${"arrow"}`,
      onClick: () => setIsCollapsed(!isCollapsed)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title));
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
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Widget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget.jsx":
/*!***********************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget.jsx ***!
  \***********************************************************************************************************/
/*! exports provided: PerformanceHighlightWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceHighlightWidget", function() { return PerformanceHighlightWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/StickyCompareBox */ "./www/js/source/reactpages/pages/report/marketing/components/common/StickyCompareBox.jsx");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");
/* harmony import */ var _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/helpers/filterHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js");










const PerformanceHighlightWidget = props => {
  const {
    globalFilter,
    performanceHighlightData,
    fetchPeformanceHighlightData
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!globalFilter) {
      return;
    }

    const apiParams = _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getPerformanceHighlightWidgetAPIParams(globalFilter);
    setLoading(true);
    fetchPeformanceHighlightData(apiParams, () => setLoading(false));
  }, [globalFilter]);

  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('BusinessPerformanceHighlights'));

  const _renderTotalUsersBox = () => {
    const {
      totalUsers,
      growthRateTotalUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('TotalUsers'),
      value: totalUsers,
      rate: growthRateTotalUsers
    });
  };

  const _renderPaidUsersBox = () => {
    const {
      paidUsers,
      growthRatePaidUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: 'PU (APA)',
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('PaidUsers'),
      value: paidUsers,
      rate: growthRatePaidUsers
    });
  };

  const _renderActiveUsersBox = () => {
    const {
      activeUsers,
      growthRateActiveUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('AU'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('ActiveUsers'),
      value: activeUsers,
      rate: growthRateActiveUsers
    });
  };

  const _renderNewlyRegisteredUsersBox = () => {
    const {
      newlyRegisterUsers,
      growthRateNewlyRegisterUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('NRU'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('NewlyRegisteredUsers'),
      value: newlyRegisterUsers,
      rate: growthRateNewlyRegisterUsers
    });
  };

  const _renderChurnRateBox = () => {
    const {
      fromDate,
      toDate
    } = globalFilter.reportDate;
    const {
      churnRate,
      differentChurnRate
    } = performanceHighlightData;
    const isSingleDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_8__["default"].isEqualDate(fromDate, toDate);
    return !isSingleDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('CR'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('ChurnRate'),
      value: `${_jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].round(churnRate, 0)}%`,
      rate: differentChurnRate,
      showGrowthRateSympol: false
    });
  };

  const _renderRetentionRateBox = () => {
    const {
      fromDate,
      toDate
    } = globalFilter.reportDate;
    const {
      retentionRate,
      differentRetentionRate
    } = performanceHighlightData;
    const isSingleDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_8__["default"].isEqualDate(fromDate, toDate);
    return !isSingleDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_StickyCompareBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('RR'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('RetentionRate'),
      value: `${_jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].round(retentionRate, 0)}%`,
      rate: differentRetentionRate,
      showGrowthRateSympol: false
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: _title,
    isLoading: isLoading
  }, performanceHighlightData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-container"
  }, _renderTotalUsersBox(), _renderPaidUsersBox(), _renderActiveUsersBox(), _renderNewlyRegisteredUsersBox(), _renderChurnRateBox(), _renderRetentionRateBox()));
};

function mapStateToProps(state) {
  const {
    globalFilter,
    performanceHighlightData
  } = state;
  return Object.assign({}, {
    globalFilter,
    performanceHighlightData
  });
}

function mapDispatchToProps(dispatch) {
  const {
    fetchPeformanceHighlightData
  } = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchPeformanceHighlightData
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PerformanceHighlightWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js":
/*!**********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js ***!
  \**********************************************************************************/
/*! exports provided: ReportDateOptionValues, CompareDateOptionValues, ViewByOptionKeys, ViewByOptions, ReportDateSelectionOptions, CompareDateSelectionOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDateOptionValues", function() { return ReportDateOptionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareDateOptionValues", function() { return CompareDateOptionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewByOptionKeys", function() { return ViewByOptionKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewByOptions", function() { return ViewByOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDateSelectionOptions", function() { return ReportDateSelectionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareDateSelectionOptions", function() { return CompareDateSelectionOptions; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const ReportDateOptionValues = {
  yesterday: 1,
  last7Days: 2,
  last30Days: 3
};
const CompareDateOptionValues = {
  previousPeriod: 1,
  samePeriodLastYear: 2
};
const ViewByOptionKeys = {
  Daily: 1,
  Weekly: 2
};
const ViewByOptions = [{
  value: ViewByOptionKeys.Daily,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Daily')
}, {
  value: ViewByOptionKeys.Weekly,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Weekly')
}];
const ReportDateSelectionOptions = [{
  value: ReportDateOptionValues.yesterday,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Yesterday')
}, {
  value: ReportDateOptionValues.last7Days,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Last7Days')
}, {
  value: ReportDateOptionValues.last30Days,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Last30Days')
}];
const CompareDateSelectionOptions = [{
  value: CompareDateOptionValues.previousPeriod,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('PreviousPeriod')
}, {
  value: CompareDateOptionValues.samePeriodLastYear,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SamePeriodLastYear')
}];

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js ***!
  \*********************************************************************************/
/*! exports provided: Url, errorResponse, successResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorResponse", function() { return errorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successResponse", function() { return successResponse; });
const Url = {
  performanceHighlight: 'Api/MarketingReport/PerformanceHighlight'
};
const errorResponse = {
  data: null,
  isSuccess: false
};
const successResponse = {
  isSuccess: true
};

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/index.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/index.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppContainer */ "./www/js/source/reactpages/pages/report/marketing/components/AppContainer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/store */ "./www/js/source/reactpages/pages/report/marketing/libs/store.js");






const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _libs_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("app-container"));

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

    if (_jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_0__["default"].today) {
      today = new Date(_jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_0__["default"].today);
    } else {
      today = new Date();
    }

    return today;
  }

}

_defineProperty(DateTimeHelper, "getDiffDays", (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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

_defineProperty(DateTimeHelper, "getYesterday", () => {
  const yesterday = DateTimeHelper.addDays(DateTimeHelper.getToday(), -1);
  const yesterdayObject = DateTimeHelper.convertToDateStructure(yesterday);
  return yesterdayObject;
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js":
/*!**************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterHelper; });
/* harmony import */ var _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");
/* harmony import */ var _constants_filterConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/filterConst */ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FilterHelper {}

_defineProperty(FilterHelper, "getCommonAPIParams", globalFilterData => {
  const {
    selectedBaseCurrency,
    reportDate,
    compareDate
  } = globalFilterData;
  const apiParams = {
    baseCurrency: selectedBaseCurrency,
    fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(reportDate.fromDate),
    toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(reportDate.toDate),
    compareFromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.fromDate),
    compareToDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.toDate)
  };
  return apiParams;
});

_defineProperty(FilterHelper, "getPerformanceHighlightWidgetAPIParams", filterData => {
  const commonParams = FilterHelper.getCommonAPIParams(filterData);
  return commonParams;
});

_defineProperty(FilterHelper, "ReportDateGenerateRangeSelections", {
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["ReportDateOptionValues"].yesterday]: () => {
    const yesterday = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getYesterday();
    return {
      fromDate: yesterday,
      toDate: yesterday
    };
  },
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["ReportDateOptionValues"].last7Days]: () => {
    const toDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToday(), -1);
    const fromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(toDate, -6);
    return {
      fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(fromDate),
      toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(toDate)
    };
  },
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["ReportDateOptionValues"].last30Days]: () => {
    const toDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToday(), -1);
    const fromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(toDate, -29);
    return {
      fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(fromDate),
      toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(toDate)
    };
  }
});

_defineProperty(FilterHelper, "CompareDateGenerateRangeSelections", {
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["CompareDateOptionValues"].previousPeriod]: selectedDependRange => {
    const currentPeriodFromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateObject(selectedDependRange.fromDate);
    const currentPeriodToDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateObject(selectedDependRange.toDate);
    const diffDays = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getDiffDays(currentPeriodFromDate, currentPeriodToDate);
    const toDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(currentPeriodFromDate, -1);
    const fromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(toDate, -diffDays);
    return {
      fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(fromDate),
      toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(toDate)
    };
  },
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["CompareDateOptionValues"].samePeriodLastYear]: selectedDependRange => {
    const currentPeriodFromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateObject(selectedDependRange.fromDate);
    const currentPeriodToDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateObject(selectedDependRange.toDate);
    const diffDays = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getDiffDays(currentPeriodFromDate, currentPeriodToDate);
    const toDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addYears(currentPeriodToDate, -1);
    const fromDate = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].addDays(toDate, -diffDays);
    return {
      fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(fromDate),
      toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].convertToDateStructure(toDate)
    };
  }
});

_defineProperty(FilterHelper, "DefaultReportDate", {
  fromDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getYesterday(),
  toDate: _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getYesterday()
});

_defineProperty(FilterHelper, "DefaultCompareDate", FilterHelper.CompareDateGenerateRangeSelections[_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["CompareDateOptionValues"].previousPeriod](FilterHelper.DefaultReportDate));

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
class NumberHelper {
  static displayRate(rate) {
    return `${rate >= 0 ? '+' : ''}${rate}%`;
  }

}

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
/* harmony import */ var _constants_queryConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/queryConst */ "./www/js/source/reactpages/pages/report/marketing/constants/queryConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class QueryService {}

_defineProperty(QueryService, "fetchPerformanceHighlightData", async params => {
  try {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_1__["Url"].performanceHighlight, params);

    if (response.status === 200) {
      return _objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_1__["successResponse"], {}, {
        data: response.data
      });
    }
  } catch (e) {
    console.log(e);
  }

  return _objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_1__["errorResponse"]);
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/store.js":
/*!***********************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/store.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/store */ "./www/js/source/reactpages/lib/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./www/js/source/reactpages/pages/report/marketing/reducers/index.js");
/* harmony import */ var _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/helpers/filterHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultState = _objectSpread({}, window.initialState, {}, {
  reportDate: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_2__["default"].DefaultReportDate,
  compareDate: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_2__["default"].DefaultCompareDate
});

const store = _jsroot_lib_store__WEBPACK_IMPORTED_MODULE_0__["default"].createStore(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], defaultState);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/reducers/dataReducer.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/reducers/dataReducer.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/marketing/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");


const performanceHighlightData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_PERFORMANCE_HIGHLIGHT_DATA"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  performanceHighlightData
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/reducers/filterReducer.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/reducers/filterReducer.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./www/js/source/reactpages/pages/report/marketing/actions/types.js");
/* harmony import */ var _jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");
/* harmony import */ var _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/reducers/baseCurrencyReducer */ "./www/js/source/reactpages/reducers/baseCurrencyReducer.js");



const viewMode = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_VIEW_MODE"]](state, action) {
    return action.data;
  }

});
const reportDate = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_REPORT_DATE"]](state, action) {
    return action.data;
  }

});
const compareDate = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_COMPARE_DATE"]](state, action) {
    return action.data;
  }

});
const globalFilter = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_GLOBAL_FILTER"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  selectedBaseCurrency: _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_2__["selectedBaseCurrency"],
  viewMode,
  reportDate,
  compareDate,
  globalFilter
});

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/reducers/index.js":
/*!***************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/reducers/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _filterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterReducer */ "./www/js/source/reactpages/pages/report/marketing/reducers/filterReducer.js");
/* harmony import */ var _dataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataReducer */ "./www/js/source/reactpages/pages/report/marketing/reducers/dataReducer.js");



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

/***/ })

/******/ });
//# sourceMappingURL=marketing.chunk.js.map
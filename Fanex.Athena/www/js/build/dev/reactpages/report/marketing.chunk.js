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

/***/ "./www/js/source/reactpages/actions/types.js":
/*!***************************************************!*\
  !*** ./www/js/source/reactpages/actions/types.js ***!
  \***************************************************/
/*! exports provided: FETCH_DATA, SET_GRID_DATA, SET_SELECTED_PRODUCT, SET_SELECTED_BRAND, SET_SELECTED_BASECURRENCY, SET_BASECURRENCY_LIST, SET_SELECTED_CURRENCY, TOGGLE_LOADER, CHANGE_IS_EXCLUDE_TEST, USER_GUIDE_CONTENT, SET_DATE_RANGE, GET_DATE_CONSTRAINT, CHANGE_IS_CONVERT_ALL, SET_SELECTED_STATUS, SET_SELECTED_PLATFORM, SET_SELECTED_LIVESTATUS, SET_USERNAME, SET_REQUEST_PARAM, SET_REPORT_TITLE, SET_PAGING_OPTION, SET_SORT_OPTION */
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
      style: onlyClasses ? undefined : _objectSpread({}, styles['MonthButton'], {
        float: 'left'
      }),
      className: classes.prevButton,
      onClick: this.prevButtonClickHandler.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: onlyClasses ? undefined : _objectSpread({}, styles['MonthArrow'], {}, styles['MonthArrowPrev'])
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.month
    }, this.renderMonthList(classes)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.monthAndYearDivider
    }, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.year
    }, this.renderYearList(classes))), showMonthArrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      disabled: this.disableNextButton,
      style: onlyClasses ? undefined : _objectSpread({}, styles['MonthButton'], {
        float: 'right'
      }),
      className: classes.nextButton,
      onClick: this.nextButtonClickHandler.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: onlyClasses ? undefined : _objectSpread({}, styles['MonthArrow'], {}, styles['MonthArrowNext'])
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

    const classes = _objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_5__["defaultClasses"], {}, classNames);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: onlyClasses ? undefined : _objectSpread({}, styles['Calendar'], {}, this.props.style),
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
    this.locale = _objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"].locale, {}, locale);
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

    const classes = _objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_6__["defaultClasses"], {}, classNames);

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
    this.locale = _objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"].locale, {}, props.locale);
    this.ranges = _objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__["default"].ranges(props.today, props.minDate, props.maxDate, props.limitedMonthRange), {}, props.ranges);
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

    const classes = _objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_6__["defaultClasses"], {}, classNames);

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
    return _objectSpread({}, todayStyle, {}, sundayStyle, {}, specialDayStyle, {}, inRangeStyle, {}, hoverStyle, {}, passiveStyle, {}, activeStyle, {}, selectedStyle, {}, startEdgeStyle, {}, endEdgeStyle);
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
      style: onlyClasses ? undefined : _objectSpread({}, styles['Day'], {}, stateStyle)
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

      const style = _objectSpread({}, styles['PredefinedRangesItem'], {}, gotActiveRange ? styles['PredefinedRangesItemActive'] : {});

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

    const locales = _objectSpread({}, _defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"].locale, {}, locale);

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
      style: onlyClasses ? undefined : _objectSpread({}, styles['RangeApplyButton'], {}, style),
      type: "button",
      onClick: e => this.clickButton(e, action.apply)
    }, locales.applyLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classes.cancelButton,
      style: onlyClasses ? undefined : _objectSpread({}, styles['RangeCancelButton'], {}, style),
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

    const classes = _objectSpread({}, _styles_js__WEBPACK_IMPORTED_MODULE_5__["defaultClasses"], {}, classNames);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: onlyClasses ? undefined : _objectSpread({}, styles['PredefinedRanges'], {}, style),
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
    DateRange: _objectSpread({}, defaultTheme.DateRange, {}, customTheme.DateRange),
    Calendar: _objectSpread({}, defaultTheme.Calendar, {}, customTheme.Calendar),
    Day: _objectSpread({
      width: cellSize,
      height: cellSize,
      lineHeight: cellSize + 'px'
    }, defaultTheme.Day, {}, customTheme.Day),
    DayPassive: _objectSpread({}, defaultTheme.DayPassive, {}, customTheme.DayPassive),
    DayHover: _objectSpread({}, defaultTheme.DayHover, {}, customTheme.DayHover),
    DayToday: _objectSpread({}, defaultTheme.DayToday, {}, customTheme.DayToday),
    DaySunday: _objectSpread({}, defaultTheme.DaySunday, {}, customTheme.DaySunday),
    DaySpecialDay: _objectSpread({}, defaultTheme.DaySpecialDay, {}, customTheme.DaySpecialDay),
    DayActive: _objectSpread({}, defaultTheme.DayActive, {}, customTheme.DayActive),
    DaySelected: _objectSpread({}, defaultTheme.DaySelected, {}, customTheme.DaySelected),
    DayStartEdge: _objectSpread({}, defaultTheme.DayStartEdge, {}, customTheme.DayStartEdge),
    DayEndEdge: _objectSpread({}, defaultTheme.DayEndEdge, {}, customTheme.DayEndEdge),
    DayInRange: _objectSpread({}, defaultTheme.DayInRange, {}, customTheme.DayInRange),
    Weekday: _objectSpread({
      width: cellSize,
      height: cellSize / 2,
      lineHeight: cellSize / 2 + 'px'
    }, defaultTheme.Weekday, {}, customTheme.Weekday),
    MonthAndYear: _objectSpread({}, defaultTheme.MonthAndYear, {}, customTheme.MonthAndYear),
    MonthAndYearSelect: _objectSpread({}, defaultTheme.MonthAndYearSelect, {}, customTheme.MonthAndYearSelect),
    MonthButton: _objectSpread({}, defaultTheme.MonthButton, {}, customTheme.MonthButton),
    MonthArrow: _objectSpread({}, defaultTheme.MonthArrow, {}, customTheme.MonthArrow),
    MonthArrowPrev: _objectSpread({}, defaultTheme.MonthArrowPrev, {}, customTheme.MonthArrowPrev),
    MonthArrowNext: _objectSpread({}, defaultTheme.MonthArrowNext, {}, customTheme.MonthArrowNext),
    PredefinedRanges: _objectSpread({}, defaultTheme.PredefinedRanges, {}, customTheme.PredefinedRanges),
    PredefinedRangesItem: _objectSpread({}, defaultTheme.PredefinedRangesItem, {}, customTheme.PredefinedRangesItem),
    PredefinedRangesItemActive: _objectSpread({}, defaultTheme.PredefinedRangesItemActive, {}, customTheme.PredefinedRangesItemActive),
    RangeApplyButton: _objectSpread({}, defaultTheme.RangeButton, {}, defaultTheme.RangeApplyButton, {}, customTheme.RangeApplyButton),
    RangeCancelButton: _objectSpread({}, defaultTheme.RangeButton, {}, defaultTheme.RangeCancelButton, {}, customTheme.RangeCancelButton)
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

/***/ "./www/js/source/reactpages/components/popup/Popup.jsx":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/components/popup/Popup.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/popup/constants.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const Popup = props => {
  const {
    title,
    isShow,
    width,
    height,
    isHtml,
    children,
    iframeUrl
  } = props;
  let content;

  if (iframeUrl) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      frameBorder: "0",
      src: iframeUrl,
      width: "100%",
      height: "100%"
    });
  } else {
    content = isHtml ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "popup-content",
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "popup-content"
    }, children);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `popup-container ${isShow ? 'show' : 'hide'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-block-body"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flat-popup",
    style: {
      height: height,
      width: width
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "popup-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "txt-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "popup-close",
    onClick: () => {
      props.onClose && props.onClose();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-close"
  }))), content));
};

Popup.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isShow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  isHtml: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  iframeUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Popup.defaultProps = {
  width: _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_WIDTH"],
  height: _constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_HEIGHT"],
  isShow: false,
  isHtml: false,
  iframeUrl: null
};
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./www/js/source/reactpages/components/popup/constants.js":
/*!****************************************************************!*\
  !*** ./www/js/source/reactpages/components/popup/constants.js ***!
  \****************************************************************/
/*! exports provided: DEFAULT_WIDTH, DEFAULT_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WIDTH", function() { return DEFAULT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_HEIGHT", function() { return DEFAULT_HEIGHT; });
const DEFAULT_WIDTH = '55%';
const DEFAULT_HEIGHT = '55%';

/***/ }),

/***/ "./www/js/source/reactpages/components/popup/index.jsx":
/*!*************************************************************!*\
  !*** ./www/js/source/reactpages/components/popup/index.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./www/js/source/reactpages/components/popup/Popup.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

const fetchUserActivitiesData = (params, callBack) => async dispatch => {
  const response = await _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchUserActivitiesData(params);
  dispatch(setUserActivitiesData(response.data));
  callBack && callBack();
};

const fetchAvgRevenueData = (params, callBack) => async dispatch => {
  const response = await _libs_services_queryService__WEBPACK_IMPORTED_MODULE_1__["default"].fetchAvgRevenueData(params);
  dispatch(setAvgRevenueData(response.data));
  callBack && callBack(response.data);
};

const setPeformanceHighlightData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_PERFORMANCE_HIGHLIGHT_DATA"],
    data: data
  };
};

const setUserActivitiesData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_USER_ACTIVITIES_DATA"],
    data: data
  };
};

const setAvgRevenueData = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_AVG_REVENUE_DATA"],
    data: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPeformanceHighlightData,
  fetchUserActivitiesData,
  fetchAvgRevenueData
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
/* harmony import */ var _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/actions/brandAction */ "./www/js/source/reactpages/actions/brandAction.js");




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

const setCollapseFormFilter = isCollapsed => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSE_FORM_FILTER"],
    data: isCollapsed
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setSelectedBaseCurrency: _jsroot_actions_baseCurrencyAction__WEBPACK_IMPORTED_MODULE_1__["setSelectedBaseCurrency"],
  setSelectedBrand: _jsroot_actions_brandAction__WEBPACK_IMPORTED_MODULE_2__["setSelectedBrand"],
  setViewMode,
  setReportDate,
  setCompareDate,
  setGlobalFilter,
  setCollapseFormFilter
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
/*! exports provided: SET_REPORT_DATE, SET_COMPARE_DATE, SET_VIEW_MODE, SET_GLOBAL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_PERFORMANCE_HIGHLIGHT_DATA, SET_USER_ACTIVITIES_DATA, SET_AVG_REVENUE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REPORT_DATE", function() { return SET_REPORT_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COMPARE_DATE", function() { return SET_COMPARE_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEW_MODE", function() { return SET_VIEW_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GLOBAL_FILTER", function() { return SET_GLOBAL_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COLLAPSE_FORM_FILTER", function() { return SET_COLLAPSE_FORM_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PERFORMANCE_HIGHLIGHT_DATA", function() { return SET_PERFORMANCE_HIGHLIGHT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_ACTIVITIES_DATA", function() { return SET_USER_ACTIVITIES_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AVG_REVENUE_DATA", function() { return SET_AVG_REVENUE_DATA; });
const SET_REPORT_DATE = 'SET_REPORT_DATE';
const SET_COMPARE_DATE = 'SET_COMPARE_DATE';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const SET_GLOBAL_FILTER = 'SET_GLOBAL_FILTER';
const SET_COLLAPSE_FORM_FILTER = 'SET_COLLAPSED_FORM_FILTER';
const SET_PERFORMANCE_HIGHLIGHT_DATA = 'SET_PERFORMANCE_HIGHLIGHT_DATA';
const SET_USER_ACTIVITIES_DATA = 'SET_USER_ACTIVITIES_DATA';
const SET_AVG_REVENUE_DATA = 'SET_AVG_REVENUE_DATA';

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
/* harmony import */ var _jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _FormFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormFilter */ "./www/js/source/reactpages/pages/report/marketing/components/FormFilter.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./www/js/source/reactpages/pages/report/marketing/components/Content.jsx");




const AppContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "marketing-report"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormFilter__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

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
/* harmony import */ var _widgets_PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/PerformanceHighlightWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/index.js");
/* harmony import */ var _widgets_UserActivitiesWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/UserActivitiesWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/UserActivitiesWidget.jsx");
/* harmony import */ var _widgets_AvgRevenueWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/AvgRevenueWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/AvgRevenueWidget.jsx");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");










const Content = props => {
  const {
    globalFilter,
    isCollapsedFormFilter
  } = props;

  if (!globalFilter) {
    return null;
  }

  const {
    selectedBaseCurrency,
    reportDate
  } = globalFilter;
  const {
    fromDate,
    toDate
  } = reportDate;

  const _maxHeightPixel = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    const {
      innerHeight
    } = window;
    return innerHeight - (isCollapsedFormFilter ? 100 : 220) + 'px';
  }, [isCollapsedFormFilter]);

  const _renderTitle = () => {
    const reportName = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Marketing');

    if (!globalFilter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tag: "div",
        content: reportName
      });
    }

    const displayCurrency = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
    const reportDateRange = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__["default"].formatDateRangeToString(fromDate, toDate);
    const content = `${reportName}, ${reportDateRange}, ${displayCurrency}`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_ReportTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tag: "div",
      content: content
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "marketing-content"
  }, _renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-list",
    style: {
      maxHeight: _maxHeightPixel
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_UserActivitiesWidget__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_AvgRevenueWidget__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
};

function mapStateToProps(state) {
  const {
    globalFilter,
    isCollapsedFormFilter
  } = state;
  return Object.assign({}, {
    globalFilter,
    isCollapsedFormFilter
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
    setSelectedBrand,
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter,
    setCollapseFormFilter,
    selectedBrand,
    selectedBaseCurrency,
    reportDate,
    compareDate,
    viewMode
  } = props;

  const _renderBaseCurrencySelectList = () => {
    const baseCurrencyList = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__["default"].baseCurrencyList;
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
      options: _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__["default"].brandOptions,
      onChange: item => setSelectedBrand(item.value)
    });
  };

  const _renderViewModeOptions = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: 'ViewMode',
      value: viewMode,
      options: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["ViewModeOptions"],
      onChange: setViewMode
    });
  };

  const _onChangeReportDateSelection = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selectedRange => {
    setReportDate(selectedRange);
    setCompareDate(_libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].CompareDateGenerateRangeSelections[_constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["CompareDateOptionValues"].previousPeriod](selectedRange)); //reset to default selection
  }, []);

  const _onChangeCompareDateSelection = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selectedRange => setCompareDate(selectedRange), []);

  const _renderReportDateSelection = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_11__["default"], {
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["ReportDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].ReportDateGenerateRangeSelections,
      selectedRange: reportDate,
      onChange: _onChangeReportDateSelection
    });
  };

  const _renderCompareDateSelection = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_11__["default"], {
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_9__["CompareDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_10__["default"].CompareDateGenerateRangeSelections,
      selectedRange: compareDate,
      selectedDependRange: reportDate,
      onChange: _onChangeCompareDateSelection
    });
  };

  const _onSubmit = () => {
    const globalFilter = {
      reportDate,
      compareDate,
      viewMode,
      selectedBaseCurrency,
      selectedBrand
    };
    setGlobalFilter(globalFilter);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_collapsible_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "page-filter",
    onCollapse: () => setCollapseFormFilter(true),
    onExpand: () => setCollapseFormFilter(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__["default"].brandOptions && _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_7__["default"].brandOptions.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3 col-sm-3 col-lg-2 col-xl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("Brand")), _renderBrandSelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    className: "col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("ViewBy")), _renderViewModeOptions())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-3 col-sm-3 col-lg-2 col-xl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getSingleResource("DisplayCurrency")), _renderBaseCurrencySelectList())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    selectedBrand,
    selectedBaseCurrency,
    viewMode,
    reportDate,
    compareDate
  } = state;
  return Object.assign({}, {
    selectedBrand,
    selectedBaseCurrency,
    viewMode,
    reportDate,
    compareDate
  });
}

function mapDispatchToProps(dispatch) {
  const {
    setSelectedBrand,
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter,
    setCollapseFormFilter
  } = _actions__WEBPACK_IMPORTED_MODULE_8__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(Object.assign({}, {
    setSelectedBrand,
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter,
    setCollapseFormFilter
  }), dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FormFilter));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/BarChart.jsx":
/*!****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/BarChart.jsx ***!
  \****************************************************************************************/
/*! exports provided: BarChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/helpers/chartHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/chartHelper.js");



const BarChart = props => {
  const {
    data,
    dataMapping
  } = props;

  const _chartData = _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__["default"].buildBarChartData(data, dataMapping);

  const _chartOptions = _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__["default"].buildBarChartOptions(_chartData.labels, dataMapping.isDecimal);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    data: _chartData,
    options: _chartOptions
  });
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BarChart));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/HighlightBox.jsx":
/*!********************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/HighlightBox.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");





const HighlightBox = props => {
  const {
    title,
    description,
    value,
    rate,
    isNegativeMean,
    enableCompare,
    onViewDetail
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

  const _getArrowColor = rate => {
    return rate >= 0 ? 'border-top-green' : 'border-top-red';
  };

  const _renderCompareRate = () => {
    const roundedRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(rate, 0);
    const rateDisplay = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_3__["default"].displayRate(roundedRate);

    const _roundedRate = isNegativeMean ? -roundedRate : roundedRate;

    const color = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getColorRate(_roundedRate);

    const arrowColor = _getArrowColor(_roundedRate);

    const arrow = roundedRate >= 0 ? 'triangle-top-left' : 'triangle-bottom-left';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-compare-title"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('CompareDate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sticky-box-rate"
    }, roundedRate !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${arrow} ${arrowColor}`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `rate ${color}`
    }, rateDisplay)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box",
    title: onViewDetail && _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('TooltipViewDetails'),
    style: {
      cursor: onViewDetail ? 'pointer' : 'normal'
    },
    onClick: () => onViewDetail && onViewDetail()
  }, _renderTitle(), _renderDescription(), _renderValue(), enableCompare !== false && _renderCompareRate());
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HighlightBox));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/common/LineChart.jsx":
/*!*****************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/common/LineChart.jsx ***!
  \*****************************************************************************************/
/*! exports provided: LineChart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/helpers/chartHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/chartHelper.js");



const LineChart = props => {
  const {
    data,
    dataMapping
  } = props;

  const _chartData = _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__["default"].buildLineChartData(data, dataMapping);

  const _chartOptions = _libs_helpers_chartHelper__WEBPACK_IMPORTED_MODULE_2__["default"].buildLineChartOptions(_chartData.labels, dataMapping.isDecimal);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: _chartData,
    options: _chartOptions
  });
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LineChart));

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
/* harmony import */ var _jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/components/date-range */ "./www/js/source/reactpages/components/date-range/index.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");






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
    toDate,
    isSpecificRange
  } = selectedRange;

  const _onChange = currentSelectOption => {
    const {
      value
    } = currentSelectOption;
    const range = selectOptionGenerateRange[value](selectedDependRange);
    onChange && onChange(range);
  };

  const _getCurrentSelectOption = () => {
    let currentSelection = null;

    if (isSpecificRange) {
      currentSelection = selectOptions.find(_ => _.isSpecificRange);
    } else {
      currentSelection = selectOptions.find(_ => {
        const range = selectOptionGenerateRange[_.value](selectedDependRange);

        return _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].isEqualDate(fromDate, range.fromDate) && _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].isEqualDate(toDate, range.toDate);
      });
    }

    return currentSelection || selectOptions[0];
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

  const _onChangeDateRange = (range, isValid = true) => {
    if (isValid) {
      const {
        startDate,
        endDate
      } = range;
      const convertedRange = {
        fromDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].convertToDateStructure(startDate._d),
        toDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].convertToDateStructure(endDate._d),
        isSpecificRange: true
      };
      onChange && onChange(convertedRange);
    } else {
      const message = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("DateRangeExceedMsg").replace("{0}", _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_4__["default"].dateConstraint.limitedMonthRange);
      alert(message);
    }
  };

  const _renderDateRangeSelect = () => {
    const dateRange = {
      fromDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].formatDateStructureToString(fromDate),
      toDate: _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].formatDateStructureToString(toDate)
    };
    const dateConstraint = _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_4__["default"].dateConstraint;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_date_range__WEBPACK_IMPORTED_MODULE_2__["DateRange"], {
      startDate: dateRange.fromDate,
      endDate: dateRange.toDate,
      minDate: dateConstraint.minDate,
      maxDate: dateConstraint.maxDate,
      toDate: dateRange.toDate,
      limitedMonthRange: dateConstraint.limitedMonthRange,
      onChange: _onChangeDateRange
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "time-period-select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "time-period-select-time"
  }, _renderSelectOptions()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "time-period-display-time"
  }, isSpecificRange ? _renderDateRangeSelect() : _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_5__["default"].formatDateRangeToString(fromDate, toDate)));
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
      className: "icon-arrow",
      style: {
        transform: isCollapsed ? 'rotate(-180deg)' : null
      },
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

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/AvgRevenueWidget.jsx":
/*!*************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/AvgRevenueWidget.jsx ***!
  \*************************************************************************************************/
/*! exports provided: AvgRevenueWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgRevenueWidget", function() { return AvgRevenueWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/components/radio/RadioGroup */ "./www/js/source/reactpages/components/radio/RadioGroup.jsx");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-multiselect */ "./node_modules/@9softstudio/react-multiselect/dist/index.js");
/* harmony import */ var _9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/AppData */ "./www/js/source/reactpages/lib/AppData.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/TimePeriodSelect */ "./www/js/source/reactpages/pages/report/marketing/components/common/TimePeriodSelect.jsx");
/* harmony import */ var _common_BarChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/BarChart */ "./www/js/source/reactpages/pages/report/marketing/components/common/BarChart.jsx");
/* harmony import */ var _common_LineChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/LineChart */ "./www/js/source/reactpages/pages/report/marketing/components/common/LineChart.jsx");
/* harmony import */ var _constants_filterConst__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/filterConst */ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js");
/* harmony import */ var _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/helpers/filterHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants/chartConst */ "./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js");
















let countRender = 0;
const AvgRevenueWidget = props => {
  const {
    globalFilter,
    avgRevenueData,
    fetchAvgRevenueData
  } = props;
  const [reportDate, setReportDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(globalFilter.reportDate);
  const [products, setProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].defaultSelectedProduct);
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [chartMode, setChartMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["ChartMode"].Bar);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setReportDate(globalFilter.reportDate);

    _reloadData(globalFilter.reportDate);

    countRender++;
  }, [globalFilter]);

  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => `${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('AvgRevenue')} (${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Viewin').replace('{0}', globalFilter.selectedBaseCurrency)})`, [globalFilter.selectedBaseCurrency]);

  const _chartData = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => {
    if (!avgRevenueData) {
      return null;
    }

    const data = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_14__["default"].filterDataWithSelectedProducts(avgRevenueData, products);
    return data;
  }, [products, avgRevenueData]);

  const _onChangeReportDate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selectedRange => {
    setReportDate(selectedRange);

    if (!selectedRange.isSpecificRange || reportDate.isSpecificRange) {
      _reloadData(selectedRange);
    }
  }, [reportDate]);

  const _reloadData = reportDate => {
    setLoading(true);
    const {
      selectedBrand,
      selectedBaseCurrency
    } = globalFilter;
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_14__["default"].getAvgRevenueAPIParams({
      reportDate,
      products: _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].defaultSelectedProduct,
      selectedBrand,
      selectedBaseCurrency
    });
    fetchAvgRevenueData(apiParams, _ => {
      setLoading(false);
    });
  };

  const _renderChart = () => {
    if (chartMode === _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["ChartMode"].Bar) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_BarChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: _chartData,
        dataMapping: _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["AvgRevenueChartDataMapping"]
      });
    }

    if (chartMode === _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["ChartMode"].Line) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_LineChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: _chartData,
        dataMapping: _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["AvgRevenueChartDataMapping"]
      });
    }

    return null;
  };

  const _renderFilter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("ReportDate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: 'AvgRevenueWidget_ReportDate_' + countRender,
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_12__["ReportDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_13__["default"].ReportDateGenerateRangeSelections,
      selectedRange: reportDate,
      onChange: _onChangeReportDate
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_multiselect__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "ProductList",
      language: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].currentLanguage,
      dataSource: _jsroot_lib_AppData__WEBPACK_IMPORTED_MODULE_6__["default"].productOptions,
      keyField: "key",
      valueField: "value",
      statusField: "status",
      onChange: (_, selectedItemsKey) => setProducts(selectedItemsKey)
    }))));
  };

  const _renderBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-body"
    }, _renderChart());
  };

  const _renderFooter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'AvgRevenue-ViewChartMode',
      value: _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["ChartMode"].Bar,
      options: _constants_chartConst__WEBPACK_IMPORTED_MODULE_15__["ChartModeOptions"],
      onChange: setChartMode
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: _title,
    isLoading: isLoading
  }, avgRevenueData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "avg-revenue-container"
  }, _renderFilter(), _renderBody(), _renderFooter()));
};

function mapStateToProps(state) {
  const {
    globalFilter,
    avgRevenueData
  } = state;
  return Object.assign({}, {
    globalFilter,
    avgRevenueData
  });
}

function mapDispatchToProps(dispatch) {
  const {
    fetchAvgRevenueData
  } = _actions__WEBPACK_IMPORTED_MODULE_7__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchAvgRevenueData
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AvgRevenueWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetail.jsx":
/*!********************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetail.jsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _NewlyRegisterUsersSummaryWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewlyRegisterUsersSummaryWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersSummaryWidget.jsx");
/* harmony import */ var _NewlyRegisterUsersDetailWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewlyRegisterUsersDetailWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetailWidget.jsx");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");








const NewlyRegisterUsersDetail = props => {
  const {
    reportDate,
    compareDate,
    baseCurrency,
    selectedBrand
  } = props;
  const [sortInfoDetailWidget, setSortInfoDetailWidget] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_6__["DefaultSortInfo"]);

  const handleExportExcel = () => {
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_2__["default"].getNewlyRegisterUsersExportAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand,
      sortInfo: sortInfoDetailWidget
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_3__["default"].exportNewlyRegisterUsersData(exportParams);
  };

  const _renderCaption = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "highlight-detail-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NRU')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
    selectedBrand: selectedBrand
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewlyRegisterUsersDetailWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSort: setSortInfoDetailWidget,
    sortInfo: sortInfoDetailWidget,
    reportDate: reportDate,
    baseCurrency: baseCurrency,
    selectedBrand: selectedBrand
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersDetail));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetailWidget.jsx":
/*!**************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetailWidget.jsx ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const NewlyRegisterUsersDetailWidget = props => {
  const {
    reportDate,
    baseCurrency,
    selectedBrand,
    sortInfo,
    onSort
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detailData, setDetailData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DefaultPagingOption"]);
  const MAX_WIDTH = Math.min(document.body.clientWidth, 1360);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersDetailAPIParams({
      reportDate,
      baseCurrency,
      selectedBrand,
      pagingOption,
      sortInfo
    });

    _fetchData(apiParams, null, data => {
      const newPagingOption = getNewPagingOption(null, null, data.totalRows);
      setPagingOption(newPagingOption);
    });
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
    return _objectSpread({}, pagingOption, {}, sortInfo, {}, {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize,
      TotalItem: totalRows
    });
  };

  const _renderHeader = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].name));
  };

  const _renderBody = () => {
    const {
      dataList
    } = detailData;
    return dataList.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].rowId], " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].bonusCode] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].username]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].registeredDateDisplay]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].signupUrl] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit] ? _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Yes') : _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('No')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].isDeposit] ? _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DetailNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_7__["DigitsAmount"]) : '-')));
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
    maxWidth: MAX_WIDTH,
    autoHeight: false,
    bodyHeight: 400,
    header: _renderHeader(),
    body: _renderBody(),
    onSort: _handleSort,
    containerPadding: 30,
    shouldResetScrollPosition: isLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersDetailWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersSummaryWidget.jsx":
/*!***************************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersSummaryWidget.jsx ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/queryService.js");
/* harmony import */ var _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../libs/helpers/numberHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/numberHelper.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constants/gridConst */ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const NewlyRegisterUsersSummaryWidget = props => {
  const {
    reportDate,
    compareDate,
    baseCurrency,
    selectedBrand
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [summaryData, setSummaryData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_4__["default"].getNewlyRegisterUsersSummaryAPIParams({
      reportDate,
      compareDate,
      baseCurrency,
      selectedBrand
    });
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_6__["default"].fetchNewlyRegisterUsersSummaryData(apiParams, () => {
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
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].total].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].newlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].compareNewlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].changeRate].name));
    const item = totalData[0];
    const roundRate = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].round(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].changeRate], 0);
    const displayRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].displayRate(roundRate);
    const colorRate = _libs_helpers_numberHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getColorRate(roundRate);
    const body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].total].attributes, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('NRU')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].newlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].compareNewlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].compareNewlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _extends({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].changeRate].attributes, {
      className: `${_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["TotalNRUGridColumns"].changeRate].attributes.className} ${colorRate}`
    }), displayRate));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: 1350,
      autoWidth: true,
      autoHeight: true,
      header: header,
      body: body,
      isPaging: true,
      containerPadding: 30
    }));
  };

  const _renderCampaignData = () => {
    const {
      campaignData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].newlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].depositUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].firstDepositAmount].name));
    const body = campaignData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].bonusCode] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].newlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].depositUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].depositUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["CampaignNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"]))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: 1350,
      autoWidth: true,
      bodyHeight: 300,
      autoHeight: true,
      header: header,
      body: body,
      isPaging: true,
      containerPadding: 30
    }));
  };

  const _renderSignupData = () => {
    const {
      signupData
    } = summaryData;
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].url].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].newlyRegisterUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].depositUsers].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["HeaderCell"], null, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].firstDepositAmount].name));
    const body = signupData.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].url].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].url] || _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('None')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].newlyRegisterUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].newlyRegisterUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].depositUsers].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].depositUsers])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].firstDepositAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_2__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["SignupNRUGridColumns"].firstDepositAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"]))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "summary-table"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_5__["Table"], {
      minWidth: 500,
      maxWidth: 1350,
      autoWidth: true,
      bodyHeight: 300,
      autoHeight: true,
      header: header,
      body: body,
      isPaging: true,
      containerPadding: 30
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleResource('Summary'),
    isLoading: isLoading
  }, summaryData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summary-container"
  }, _renderTotalData(), _renderCampaignData(), _renderSignupData()));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NewlyRegisterUsersSummaryWidget));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/PerformanceHighlightWidget.jsx":
/*!**************************************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/PerformanceHighlightWidget.jsx ***!
  \**************************************************************************************************************************************/
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
/* harmony import */ var _jsroot_components_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/popup */ "./www/js/source/reactpages/components/popup/index.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/HighlightBox */ "./www/js/source/reactpages/pages/report/marketing/components/common/HighlightBox.jsx");
/* harmony import */ var _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../libs/helpers/dateTimeHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/dateTimeHelper.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");
/* harmony import */ var _Details_NewlyRegisterUsersDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Details/NewlyRegisterUsersDetail */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/NewlyRegisterUsersDetail.jsx");












const PerformanceHighlightWidget = props => {
  const {
    globalFilter,
    performanceHighlightData,
    fetchPeformanceHighlightData
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [selectedBox, setSelectedBox] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!globalFilter) {
      return;
    }

    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_10__["default"].getPerformanceHighlightAPIParams(globalFilter);
    setLoading(true);
    fetchPeformanceHighlightData(apiParams, () => setLoading(false));
  }, [globalFilter]);

  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('BusinessPerformanceHighlights'), []);

  const _renderTotalUsersBox = () => {
    const {
      totalUsers,
      growthRateTotalUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      enableCompare: false,
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      enableCompare: false,
      title: 'PU (APA)',
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('DepositUsers'),
      value: paidUsers,
      rate: growthRatePaidUsers
    });
  };

  const _renderActiveUsersBox = () => {
    const {
      activeUsers,
      growthRateActiveUsers
    } = performanceHighlightData;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onViewDetail: () => setSelectedBox(1),
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
    const isSingleDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__["default"].isEqualDate(fromDate, toDate);
    return !isSingleDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('CR'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('ChurnRate'),
      value: `${_jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].round(churnRate, 0)}%`,
      isNegativeMean: true,
      rate: differentChurnRate
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
    const isSingleDate = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__["default"].isEqualDate(fromDate, toDate);
    return !isSingleDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_HighlightBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('RR'),
      description: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('RetentionRate'),
      value: `${_jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].round(retentionRate, 0)}%`,
      rate: differentRetentionRate
    });
  };

  const _renderPopupTitle = () => {
    const {
      selectedBaseCurrency,
      reportDate
    } = globalFilter;
    const reportName = `${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('NRU')} - ${_jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('NewlyRegisteredUsers')}`;
    const displayCurrency = _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
    const reportDateRange = _libs_helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_9__["default"].formatDateRangeToString(reportDate.fromDate, reportDate.toDate);
    return `${reportName}, ${reportDateRange}, ${displayCurrency}`;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: _title,
    isLoading: isLoading
  }, performanceHighlightData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-container"
  }, selectedBox && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 800,
    width: 1400,
    isShow: true,
    title: _renderPopupTitle(),
    onClose: () => setSelectedBox(null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Details_NewlyRegisterUsersDetail__WEBPACK_IMPORTED_MODULE_11__["default"], {
    reportDate: globalFilter.reportDate,
    compareDate: globalFilter.compareDate,
    baseCurrency: globalFilter.selectedBaseCurrency,
    selectedBrand: globalFilter.selectedBrand
  })), _renderTotalUsersBox(), _renderPaidUsersBox(), _renderActiveUsersBox(), _renderNewlyRegisteredUsersBox(), _renderChurnRateBox(), _renderRetentionRateBox()));
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
  } = _actions__WEBPACK_IMPORTED_MODULE_6__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchPeformanceHighlightData
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PerformanceHighlightWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/index.js":
/*!****************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceHighlightWidget */ "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/PerformanceHighlightWidget.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_PerformanceHighlightWidget__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/components/widgets/UserActivitiesWidget.jsx":
/*!*****************************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/components/widgets/UserActivitiesWidget.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: UserActivitiesWidget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesWidget", function() { return UserActivitiesWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");
/* harmony import */ var _jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/components/radio/RadioGroup */ "./www/js/source/reactpages/components/radio/RadioGroup.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/marketing/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/marketing/components/common/Widget.jsx");
/* harmony import */ var _common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/TimePeriodSelect */ "./www/js/source/reactpages/pages/report/marketing/components/common/TimePeriodSelect.jsx");
/* harmony import */ var _common_BarChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/BarChart */ "./www/js/source/reactpages/pages/report/marketing/components/common/BarChart.jsx");
/* harmony import */ var _common_LineChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/LineChart */ "./www/js/source/reactpages/pages/report/marketing/components/common/LineChart.jsx");
/* harmony import */ var _constants_filterConst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/filterConst */ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js");
/* harmony import */ var _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/helpers/filterHelper */ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/filterHelper.js");
/* harmony import */ var _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/chartConst */ "./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/marketing/libs/services/dataService.js");














let countRender = 0;
const UserActivitiesWidget = props => {
  const {
    globalFilter,
    userActivitiesData,
    fetchUserActivitiesData
  } = props;
  const {
    selectedBrand,
    viewMode
  } = globalFilter;
  const [reportDate, setReportDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(globalFilter.reportDate);
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [chartMode, setChartMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["ChartMode"].Bar);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setReportDate(globalFilter.reportDate);

    _reloadData(globalFilter.reportDate);

    countRender++;
  }, [globalFilter]);

  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('UserActivities'), []);

  const _onChangeReportDate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(selectedRange => {
    setReportDate(selectedRange);

    if (!selectedRange.isSpecificRange || reportDate.isSpecificRange) {
      _reloadData(selectedRange);
    }
  }, [reportDate]);

  const _reloadData = reportDate => {
    setLoading(true);
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_13__["default"].getUserActivitiesAPIParams({
      selectedBrand,
      reportDate,
      viewMode
    });
    fetchUserActivitiesData(apiParams, () => setLoading(false));
  };

  const _renderChart = () => {
    if (chartMode === _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["ChartMode"].Bar) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_BarChart__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: userActivitiesData,
        dataMapping: _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["UserActivitiesChartDataMapping"]
      });
    }

    if (chartMode === _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["ChartMode"].Line) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_LineChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: userActivitiesData,
        dataMapping: _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["UserActivitiesChartDataMapping"]
      });
    }

    return null;
  };

  const _renderFilter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "label-text"
    }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("ReportDate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_TimePeriodSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: 'UserActivitiesWidget_ReportDate_' + countRender,
      selectOptions: _constants_filterConst__WEBPACK_IMPORTED_MODULE_10__["ReportDateSelectionOptions"],
      selectOptionGenerateRange: _libs_helpers_filterHelper__WEBPACK_IMPORTED_MODULE_11__["default"].ReportDateGenerateRangeSelections,
      selectedRange: reportDate,
      onChange: _onChangeReportDate
    }))));
  };

  const _renderBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-body"
    }, _renderChart());
  };

  const _renderFooter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chart-footer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_radio_RadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'UserActivities-ViewChartMode',
      value: _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["ChartMode"].Bar,
      options: _constants_chartConst__WEBPACK_IMPORTED_MODULE_12__["ChartModeOptions"],
      onChange: setChartMode
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: _title,
    isLoading: isLoading
  }, userActivitiesData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-activities-container"
  }, _renderFilter(), _renderBody(), _renderFooter()));
};

function mapStateToProps(state) {
  const {
    globalFilter,
    userActivitiesData
  } = state;
  return Object.assign({}, {
    globalFilter,
    userActivitiesData
  });
}

function mapDispatchToProps(dispatch) {
  const {
    fetchUserActivitiesData
  } = _actions__WEBPACK_IMPORTED_MODULE_5__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchUserActivitiesData
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(UserActivitiesWidget)));

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/chartConst.js ***!
  \*********************************************************************************/
/*! exports provided: ChartMode, ChartModeOptions, UserActivitiesChartDataMapping, AvgRevenueChartDataMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMode", function() { return ChartMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModeOptions", function() { return ChartModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivitiesChartDataMapping", function() { return UserActivitiesChartDataMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgRevenueChartDataMapping", function() { return AvgRevenueChartDataMapping; });
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

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js":
/*!**********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js ***!
  \**********************************************************************************/
/*! exports provided: NumberDaysOfWeek, ReportDateOptionValues, CompareDateOptionValues, ViewModeOptionValues, ViewModeOptions, ReportDateSelectionOptions, CompareDateSelectionOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDaysOfWeek", function() { return NumberDaysOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDateOptionValues", function() { return ReportDateOptionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareDateOptionValues", function() { return CompareDateOptionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModeOptionValues", function() { return ViewModeOptionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModeOptions", function() { return ViewModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDateSelectionOptions", function() { return ReportDateSelectionOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareDateSelectionOptions", function() { return CompareDateSelectionOptions; });
/* harmony import */ var _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/langHelper */ "./www/js/source/reactpages/lib/langHelper.js");

const NumberDaysOfWeek = 7;
const ReportDateOptionValues = {
  yesterday: 1,
  last7Days: 2,
  last30Days: 3,
  specificRange: 4
};
const CompareDateOptionValues = {
  previousPeriod: 1,
  samePeriodLastYear: 2
};
const ViewModeOptionValues = {
  Daily: 1,
  Weekly: 2
};
const ViewModeOptions = [{
  value: ViewModeOptionValues.Daily,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Daily')
}, {
  value: ViewModeOptionValues.Weekly,
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
}, {
  value: ReportDateOptionValues.specificRange,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SpecificDateRange'),
  isSpecificRange: true
}];
const CompareDateSelectionOptions = [{
  value: CompareDateOptionValues.previousPeriod,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('PreviousPeriod')
}, {
  value: CompareDateOptionValues.samePeriodLastYear,
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SamePeriodLastYear')
}];

/***/ }),

/***/ "./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js":
/*!********************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/constants/gridConst.js ***!
  \********************************************************************************/
/*! exports provided: TotalNRUGridColumns, TotalNRUGridConfig, CampaignNRUGridColumns, CampaignNRUGridConfig, SignupNRUGridColumns, SignupNRUGridConfig, DetailNRUGridColumns, DetailNRUGridConfig, DefaultPagingOption, DefaultSortInfo, DigitsAmount, StyleRow */
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
      className: "left-align highlight-detail-cell"
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
  newlyRegisterUsers: 'newlyRegisterUsers',
  depositUsers: 'depositUsers',
  firstDepositAmount: 'firstDepositAmount'
};
const CampaignNRUGridConfig = {
  [CampaignNRUGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Bonus'),
    attributes: {
      className: "left-align highlight-detail-cell"
    }
  },
  [CampaignNRUGridColumns.newlyRegisterUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('NRU'),
    attributes: {
      className: "right-align"
    }
  },
  [CampaignNRUGridColumns.depositUsers]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Deposit'),
    attributes: {
      className: "right-align"
    }
  },
  [CampaignNRUGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      className: "right-align"
    }
  }
};
const SignupNRUGridColumns = {
  url: 'signupUrl',
  newlyRegisterUsers: 'newlyRegisterUsers',
  depositUsers: 'depositUsers',
  firstDepositAmount: 'firstDepositAmount'
};
const SignupNRUGridConfig = {
  [SignupNRUGridColumns.url]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      className: "left-align highlight-detail-cell"
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
  }
};
const DetailNRUGridColumns = {
  rowId: 'rowId',
  bonusCode: 'bonusCode',
  username: 'username',
  registeredDateDisplay: 'registeredDateDisplay',
  signupUrl: 'signupUrl',
  isDeposit: 'isDeposit',
  firstDepositAmount: 'firstDepositAmount'
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
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Bonus'),
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
  [DetailNRUGridColumns.registeredDateDisplay]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('RegisteredDate'),
    attributes: {
      sortBy: 3,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailNRUGridColumns.signupUrl]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('SignupUrl'),
    attributes: {
      sortBy: 4,
      colWidth: 80,
      className: "left-align"
    }
  },
  [DetailNRUGridColumns.isDeposit]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Deposit'),
    attributes: {
      sortBy: 5,
      colWidth: 80,
      className: "center-align"
    }
  },
  [DetailNRUGridColumns.firstDepositAmount]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('FirstDepositAmount'),
    attributes: {
      sortBy: 6,
      colWidth: 80,
      className: "right-align"
    }
  }
};
const DefaultPagingOption = {
  PageIndex: 1,
  PageSize: 500,
  TotalItem: 0,
  PageList: [500, 1000, 1500, 2000]
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
  performanceHighlight: 'Api/MarketingReport/PerformanceHighlight',
  userActivities: 'Api/MarketingReport/UserActivities',
  avgRevenue: 'Api/MarketingReport/AvgRevenue',
  newlyRegisterUsersSummary: 'Api/MarketingReport/NewlyRegisterUsersSummary',
  newlyRegisterUsersDetail: 'Api/MarketingReport/NewlyRegisterUsersDetails',
  newlyRegisterUsersExport: 'Api/MarketingReport/NewlyRegisterUsersExport'
};
const FileNameExport = {
  newlyRegisterUsers: 'NewlyRegisterUsers.xls'
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

/***/ "./www/js/source/reactpages/pages/report/marketing/libs/helpers/chartHelper.js":
/*!*************************************************************************************!*\
  !*** ./www/js/source/reactpages/pages/report/marketing/libs/helpers/chartHelper.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartHelper; });
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ChartHelper {}

_defineProperty(ChartHelper, "buildBarChartData", (data, chartDataMapping) => {
  const labels = data.map(_ => _[chartDataMapping.labelField]);
  const datasets = chartDataMapping.datasets.map(dataMapping => {
    const valueOfCols = data.map(item => item[dataMapping.dataField]);
    return {
      label: dataMapping.legend,
      data: valueOfCols,
      backgroundColor: dataMapping.color
    };
  });
  return {
    labels,
    datasets
  };
});

_defineProperty(ChartHelper, "buildLineChartData", (data, chartDataMapping) => {
  const labels = data.map(_ => _[chartDataMapping.labelField]);
  const datasets = chartDataMapping.datasets.map(dataMapping => {
    const valueOfCols = data.map(item => item[dataMapping.dataField]);
    return {
      label: dataMapping.legend,
      data: valueOfCols,
      lineTension: 0,
      pointRadius: 1,
      borderWidth: 2,
      fill: false,
      borderColor: dataMapping.color,
      backgroundColor: dataMapping.color,
      pointBorderColor: dataMapping.color,
      pointBackgroundColor: dataMapping.color
    };
  });
  return {
    labels,
    datasets
  };
});

_defineProperty(ChartHelper, "buildBarChartOptions", (labels, isDecimal) => {
  return {
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
        boxHeight: 5,
        padding: 20,
        usePointStyle: true
      },
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      },
      onLeave: function (e) {
        e.target.style.cursor = '';
      }
    },
    hover: {
      animationDuration: 0
    },
    tooltips: {
      callbacks: {
        label: ChartHelper.tooltipFunc(isDecimal)
      }
    },
    scales: {
      xAxes: [_objectSpread({}, {
        barPercentage: 1,
        categoryPercentage: 0.6
      }, {}, {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        labels
      })],
      yAxes: [{
        display: true,
        labels: {
          show: true
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
});

_defineProperty(ChartHelper, "buildLineChartOptions", (labels, isDecimal) => {
  return {
    maintainAspectRatio: false,
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
        boxHeight: 5,
        padding: 20,
        usePointStyle: true
      },
      onHover: function (e) {
        e.target.style.cursor = 'pointer';
      },
      onLeave: function (e) {
        e.target.style.cursor = '';
      }
    },
    hover: {
      animationDuration: 0
    },
    tooltips: {
      callbacks: {
        label: ChartHelper.tooltipFunc(isDecimal)
      }
    },
    scales: {
      xAxes: [_objectSpread({}, {
        display: true,
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        labels
      })],
      yAxes: [{
        display: true,
        labels: {
          show: true
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
});

_defineProperty(ChartHelper, "tooltipFunc", isDecimal => (tooltipItem, data) => {
  const dataSet = data.datasets[tooltipItem.datasetIndex];
  return _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_0__["default"].format(dataSet.data[tooltipItem.index], isDecimal ? 2 : 0);
});

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

  if (DateTimeHelper.isEqualDate(fromDate, toDate)) {
    return displayFromDate;
  }

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
  },
  [_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["ReportDateOptionValues"].specificRange]: () => {
    const yesterday = _dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getYesterday();
    return {
      fromDate: yesterday,
      toDate: yesterday,
      isSpecificRange: true
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

_defineProperty(FilterHelper, "DefaultReportDate", FilterHelper.ReportDateGenerateRangeSelections[_constants_filterConst__WEBPACK_IMPORTED_MODULE_1__["ReportDateOptionValues"].yesterday]());

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class NumberHelper {
  static displayRate(rate) {
    return `${rate > 0 ? '+' : ''}${rate}%`;
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class DataService {}

_defineProperty(DataService, "getCommonAPIParams", ({
  selectedBrand,
  reportDate
}) => {
  const params = {
    brandId: selectedBrand,
    fromDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(reportDate.fromDate),
    toDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(reportDate.toDate)
  };
  return params;
});

_defineProperty(DataService, "getPerformanceHighlightAPIParams", filterData => {
  const {
    selectedBrand,
    reportDate,
    compareDate
  } = filterData;
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    reportDate
  });

  const params = _objectSpread({}, commonParams, {}, {
    compareFromDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.fromDate),
    compareToDate: _helpers_dateTimeHelper__WEBPACK_IMPORTED_MODULE_0__["default"].formatDateStructureToString(compareDate.toDate)
  });

  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersSummaryAPIParams", filterData => {
  const {
    baseCurrency
  } = filterData,
        rest = _objectWithoutProperties(filterData, ["baseCurrency"]);

  const commonParams = DataService.getPerformanceHighlightAPIParams(rest);

  const params = _objectSpread({}, commonParams, {
    baseCurrency
  });

  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersDetailAPIParams", filterData => {
  const {
    reportDate,
    selectedBrand,
    pagingOption,
    sortInfo
  } = filterData,
        rest = _objectWithoutProperties(filterData, ["reportDate", "selectedBrand", "pagingOption", "sortInfo"]);

  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    reportDate
  });

  const params = _objectSpread({}, commonParams, {}, sortInfo, {}, {
    pageIndex: pagingOption.PageIndex,
    pageSize: pagingOption.PageSize
  }, {}, rest);

  return params;
});

_defineProperty(DataService, "getNewlyRegisterUsersExportAPIParams", filterData => {
  const {
    baseCurrency,
    sortInfo
  } = filterData,
        rest = _objectWithoutProperties(filterData, ["baseCurrency", "sortInfo"]);

  const commonParams = DataService.getPerformanceHighlightAPIParams(rest);

  const params = _objectSpread({}, commonParams, {}, sortInfo, {
    baseCurrency
  });

  return params;
});

_defineProperty(DataService, "getUserActivitiesAPIParams", filterData => {
  const {
    selectedBrand,
    reportDate,
    viewMode
  } = filterData;
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    reportDate
  });

  const params = _objectSpread({}, commonParams, {}, {
    viewMode
  });

  return params;
});

_defineProperty(DataService, "getAvgRevenueAPIParams", filterData => {
  const {
    selectedBrand,
    reportDate,
    selectedBaseCurrency,
    products
  } = filterData;
  const commonParams = DataService.getCommonAPIParams({
    selectedBrand,
    reportDate
  });

  const params = _objectSpread({}, commonParams, {}, {
    productIds: products,
    baseCurrency: selectedBaseCurrency
  });

  return params;
});

_defineProperty(DataService, "filterDataWithSelectedProducts", (avgRevenueData, products) => {
  const selectedProducts = products.split(',');
  const dicSelectedProducts = selectedProducts.reduce((prevValue, currentValue) => _objectSpread({}, prevValue, {
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
  static async exportNewlyRegisterUsersData(params) {
    const response = await _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getFile(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersExport, params);
    const noContentStatusCode = 204;

    if (response.status === noContentStatusCode) {
      alert(LangHelper.getSingleResource("NoInfo"));
    } else {
      _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_1__["default"].downloadFile(response.data, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["FileNameExport"].newlyRegisterUsers);
    }

    ;
  }

}

_defineProperty(QueryService, "fetchPerformanceHighlightData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].performanceHighlight, params));
  return data;
});

_defineProperty(QueryService, "fetchUserActivitiesData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].userActivities, params));
  return data;
});

_defineProperty(QueryService, "fetchAvgRevenueData", async params => {
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].avgRevenue, params));
  return data;
});

_defineProperty(QueryService, "fetchNewlyRegisterUsersSummaryData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersSummary, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchNewlyRegisterUsersDetailData", async (params, before, after) => {
  before && before();
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].postData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].newlyRegisterUsersDetail, params));
  after && after(data);
  return data;
});

_defineProperty(QueryService, "fetchData", async apiCall => {
  try {
    const response = await apiCall();

    if (response.status === 200) {
      return _objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["successResponse"], {}, {
        data: response.data
      });
    }
  } catch (e) {
    console.log(e);
  }

  return _objectSpread({}, _constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["errorResponse"]);
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
/* harmony import */ var _constants_filterConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/filterConst */ "./www/js/source/reactpages/pages/report/marketing/constants/filterConst.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const defaultState = _objectSpread({}, window.initialState, {}, {
  isCollapsedFormFilter: false,
  viewMode: _constants_filterConst__WEBPACK_IMPORTED_MODULE_3__["ViewModeOptionValues"].Daily,
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
const userActivitiesData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_USER_ACTIVITIES_DATA"]](state, action) {
    return action.data;
  }

});
const avgRevenueData = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_AVG_REVENUE_DATA"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  performanceHighlightData,
  userActivitiesData,
  avgRevenueData
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
/* harmony import */ var _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jsroot/reducers/brandReducer */ "./www/js/source/reactpages/reducers/brandReducer.js");




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
const isCollapsedFormFilter = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSE_FORM_FILTER"]](state, action) {
    return action.data;
  }

});
/* harmony default export */ __webpack_exports__["default"] = ({
  selectedBrand: _jsroot_reducers_brandReducer__WEBPACK_IMPORTED_MODULE_3__["selectedBrand"],
  selectedBaseCurrency: _jsroot_reducers_baseCurrencyReducer__WEBPACK_IMPORTED_MODULE_2__["selectedBaseCurrency"],
  viewMode,
  reportDate,
  compareDate,
  globalFilter,
  isCollapsedFormFilter
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

/***/ })

/******/ });
//# sourceMappingURL=marketing.chunk.js.map
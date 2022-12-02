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
/******/ 		"www/js/build/dev/reactpages/playeradmin/accountinfo": 0
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
/******/ 	deferredModules.push(["./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/index.jsx","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js ***!
  \***********************************************************************************/
/*! exports provided: ActionCreators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreators", function() { return ActionCreators; });
/* harmony import */ var _lib_factoryCommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/factoryCommonService */ "./www/js/source/reactpages/Module/lib/factoryCommonService.js");
/* harmony import */ var _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/playerAccountService */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/playerAccountService.js");
/* harmony import */ var _subtabAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtabAction */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/subtabAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const getCustomerBettingStatus = param => () => {
  const service = new _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return service.getCustomerBettingStatus(param);
};
const getLink = (sysType, action) => () => {
  const commonService = _lib_factoryCommonService__WEBPACK_IMPORTED_MODULE_0__["default"].createInstance();
  return commonService.getLink(sysType, action);
};
const ActionCreators = _objectSpread(_objectSpread({}, _subtabAction__WEBPACK_IMPORTED_MODULE_2__), {}, {
  getCustomerBettingStatus,
  getLink
});

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/subtabAction.js":
/*!******************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/subtabAction.js ***!
  \******************************************************************************************/
/*! exports provided: getAccountProfile, getBankInfo, getActivityRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountProfile", function() { return getAccountProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBankInfo", function() { return getBankInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityRecord", function() { return getActivityRecord; });
/* harmony import */ var _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/playerAccountService */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/playerAccountService.js");

const getAccountProfile = param => () => {
  const service = new _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  return service.getAccountProfile(param);
};
const getBankInfo = param => () => {
  const service = new _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  return service.getBankInfo(param);
};
const getActivityRecord = param => () => {
  const service = new _lib_playerAccountService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  return service.getActivityRecord(param);
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/AppContainer.jsx":
/*!**********************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/AppContainer.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layouts/AppLayout */ "./www/js/source/reactpages/layouts/AppLayout.jsx");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/TabContent.jsx");
/* harmony import */ var _WidgetContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetContent */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/WidgetContent.jsx");




const AppContainer = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "account-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabContent__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WidgetContent__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/SubTab.jsx":
/*!****************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/SubTab.jsx ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const SubTab = props => {
  const {
    dataList,
    selectedTab,
    onChangeTab
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "tabs"
  }, dataList.map(item => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "tab",
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: item.name === selectedTab ? 'link active' : 'link',
      onClick: () => onChangeTab(item.name)
    }, item.text));
  }))));
};
SubTab.propTypes = {
  dataList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  selectedTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChangeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
SubTab.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (SubTab);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/TabContent.jsx":
/*!********************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/TabContent.jsx ***!
  \********************************************************************************************/
/*! exports provided: TabContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return TabContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/constants */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/constants.js");
/* harmony import */ var _subtab_AccountProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtab/AccountProfile */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AccountProfile.jsx");
/* harmony import */ var _subtab_BankInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subtab/BankInformation */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/BankInformation.jsx");
/* harmony import */ var _subtab_ActivityRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtab/ActivityRecord */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ActivityRecord.jsx");
/* harmony import */ var _SubTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubTab */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/SubTab.jsx");







const TabContent = props => {
  const initialSubtab = props.subTabKey || _lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabKeys"].playerProfile;
  const [selectedTab, setSelectedTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSubtab);
  const tabListByLicenseeType = props.licenseeType === _lib_constants__WEBPACK_IMPORTED_MODULE_2__["licenseeType"].api ? _lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabList"].filter(x => x.name !== _lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabKeys"].bankInformation) : [..._lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabList"]];
  const getStyle = tabKey => ({
    display: selectedTab === tabKey ? 'block' : 'none'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "outer-col-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subtab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dataList: tabListByLicenseeType,
    selectedTab: selectedTab,
    onChangeTab: setSelectedTab
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: getStyle(_lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabKeys"].playerProfile)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subtab_AccountProfile__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: getStyle(_lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabKeys"].bankInformation)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subtab_BankInformation__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: getStyle(_lib_constants__WEBPACK_IMPORTED_MODULE_2__["tabKeys"].activityRecord)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_subtab_ActivityRecord__WEBPACK_IMPORTED_MODULE_5__["default"], null)))));
};
function mapStateToProps(state) {
  const {
    licenseeType,
    subTabKey
  } = state;
  return Object.assign({}, {
    licenseeType,
    subTabKey
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(TabContent));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/WidgetContent.jsx":
/*!***********************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/WidgetContent.jsx ***!
  \***********************************************************************************************/
/*! exports provided: WidgetContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetContent", function() { return WidgetContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgets_CustomerBettingStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/CustomerBettingStatus */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/CustomerBettingStatus.jsx");
/* harmony import */ var _widgets_FastCrossLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/FastCrossLink */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/FastCrossLink.jsx");



const WidgetContent = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "outer-col-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cust-betting-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_CustomerBettingStatus__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fast-cross-link-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgets_FastCrossLink__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (WidgetContent);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/index.jsx":
/*!***************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/index.jsx ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources */ "./www/js/source/reactpages/Module/PlayerAdmin/resources/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppContainer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContainer.jsx */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/AppContainer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index.js */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/index.js");
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/store */ "./www/js/source/reactpages/lib/store.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const defaultState = _objectSpread({}, window.initialState);
const store = _lib_store__WEBPACK_IMPORTED_MODULE_6__["default"].createStore(_reducers_index_js__WEBPACK_IMPORTED_MODULE_5__["default"], defaultState);
const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppContainer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null), document.getElementById("app-container"));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AccountProfile.jsx":
/*!*******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AccountProfile.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: AccountProfile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProfile", function() { return AccountProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index.js */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _AthenaProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AthenaProfile */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AthenaProfile.jsx");
/* harmony import */ var _ApiProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApiProfile */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ApiProfile.jsx");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/constants */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/constants.js");







const AccountProfile = props => {
  const {
    licenseeCustId
  } = props;
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const param = {
      licenseeCustId
    };
    props.getAccountProfile(param).then(result => setData(result));
  }, [licenseeCustId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side-content account-profile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, props.licenseeType === _lib_constants__WEBPACK_IMPORTED_MODULE_6__["licenseeType"].api ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AthenaProfile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  })));
};
function mapDispatchToProps(dispatch) {
  const {
    getAccountProfile
  } = _actions_index_js__WEBPACK_IMPORTED_MODULE_2__["ActionCreators"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    getAccountProfile
  }, dispatch);
}
function mapStateToProps(state) {
  const {
    licenseeCustId,
    licenseeType
  } = state;
  return Object.assign({}, {
    licenseeCustId,
    licenseeType
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AccountProfile));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ActivityRecord.jsx":
/*!*******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ActivityRecord.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: ActivityRecord, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRecord", function() { return ActivityRecord; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index.js */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");





const ActivityRecord = ({
  ibcCustId,
  createdDate,
  getActivityRecord
}) => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data === null) {
      const param = {
        ibcCustId
      };
      getActivityRecord(param).then(result => setData(result));
    }
  }, [ibcCustId]);
  const {
    LastTxn,
    LastUpdateBAString,
    BAUpdatedBy,
    LastUpdateSpecialLevelString,
    SpecialLevelUpdateBy
  } = data || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side-content activity-record-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "first-cell"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('CreatedDate')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, createdDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('LastTransaction')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, LastTxn)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('BAUpdatedBy')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, BAUpdatedBy)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('LastUpdatedBA')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, LastUpdateBAString)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('SpecialLevel')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, SpecialLevelUpdateBy)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_4__["default"].getText('LastUpdatedSpecialLevel')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, LastUpdateSpecialLevelString)))));
};
function mapDispatchToProps(dispatch) {
  const {
    getActivityRecord
  } = _actions_index_js__WEBPACK_IMPORTED_MODULE_2__["ActionCreators"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    getActivityRecord
  }, dispatch);
}
function mapStateToProps(state) {
  const {
    ibcCustId,
    createdDate
  } = state;
  return Object.assign({}, {
    ibcCustId,
    createdDate
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ActivityRecord));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ApiProfile.jsx":
/*!***************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/ApiProfile.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");


const ApiProfile = ({
  data
}) => {
  const {
    MemberId,
    FirstName,
    LastName,
    OperatorId,
    SiteCode,
    ProductCode,
    CustomInfo1,
    CustomInfo2,
    CustomInfo3,
    CustomInfo4,
    CustomInfo5
  } = data || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "first-cell"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('MemberId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, MemberId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('FirstName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, FirstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('LastName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, LastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('OperatorId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, OperatorId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('SiteCode')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, SiteCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ProductCode')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ProductCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CustomInfo1')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, CustomInfo1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CustomInfo2')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, CustomInfo2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CustomInfo3')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, CustomInfo3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CustomInfo4')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, CustomInfo4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('CustomInfo5')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, CustomInfo5)));
};
/* harmony default export */ __webpack_exports__["default"] = (ApiProfile);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AthenaProfile.jsx":
/*!******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/AthenaProfile.jsx ***!
  \******************************************************************************************************/
/*! exports provided: AthenaProfile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AthenaProfile", function() { return AthenaProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");


const AthenaProfile = ({
  data
}) => {
  const {
    AGUserId,
    GoldDeluxeUserId,
    VoidbridgeUserId,
    ExchangeUserId,
    FirstName,
    LastName,
    Gender,
    Birthday,
    Phone,
    Country,
    Address,
    City,
    Town,
    State,
    ZipCode,
    SecurityQuestion,
    SecurityCode,
    HowToKnow,
    PreferredUserName,
    PreferredCurrency,
    PreferredOdds,
    PreferredLanguage
  } = data || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "first-cell"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('AgUserId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, AGUserId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('GoldDeluxeUserId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, GoldDeluxeUserId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('MacauGamesUserId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, VoidbridgeUserId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ExchangeUserId')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ExchangeUserId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('FirstName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, FirstName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('LastName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, LastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Gender')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Gender)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('DateOfBirth')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Birthday)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Mobile')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Country')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Country)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Address')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, Address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('City'), "/ ", _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('Town')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, City, City && Town && '/', Town)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('State')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, State)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('ZipCode')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, ZipCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('SecurityQuestion')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, SecurityQuestion)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('SecurityCode')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, SecurityCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('WhereHear')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, HowToKnow)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PreferredUserName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, PreferredUserName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PreferredCurrency')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, PreferredCurrency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PreferredOdds')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, PreferredOdds)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"].getText('PreferredLanguage')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, PreferredLanguage)));
};
/* harmony default export */ __webpack_exports__["default"] = (AthenaProfile);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/BankInformation.jsx":
/*!********************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/subtab/BankInformation.jsx ***!
  \********************************************************************************************************/
/*! exports provided: BankInformation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankInformation", function() { return BankInformation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index.js */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constants */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/constants.js");
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");






const BankInformation = props => {
  if (props.licenseeType === _lib_constants__WEBPACK_IMPORTED_MODULE_4__["licenseeType"].api) {
    return null;
  }
  const {
    licenseeCustId
  } = props;
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isShowPlainText, setIsShowPlainText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const param = {
      licenseeCustId
    };
    props.getBankInfo(param).then(result => setData(result));
  }, [licenseeCustId]);
  const displayInfo = value => isShowPlainText ? value : value && '*'.repeat(value.length);
  const {
    BankName,
    AccountName,
    AccountNumber
  } = data || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-side-content bank-infor-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "first-cell"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_5__["default"].getText('BankInformation'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-default btn-link btn-icon",
    onClick: () => setIsShowPlainText(true),
    onMouseLeave: () => setIsShowPlainText(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "material-icons"
  }, "remove_red_eye"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_5__["default"].getText('BankName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, displayInfo(BankName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_5__["default"].getText('BankAccountName')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, displayInfo(AccountName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_5__["default"].getText('BankAccountNumber')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, displayInfo(AccountNumber))))));
};
function mapDispatchToProps(dispatch) {
  const {
    getBankInfo
  } = _actions_index_js__WEBPACK_IMPORTED_MODULE_2__["ActionCreators"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    getBankInfo
  }, dispatch);
}
function mapStateToProps(state) {
  const {
    licenseeCustId,
    licenseeType
  } = state;
  return Object.assign({}, {
    licenseeCustId,
    licenseeType
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(BankInformation));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/CustomerBettingStatus.jsx":
/*!***************************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/CustomerBettingStatus.jsx ***!
  \***************************************************************************************************************/
/*! exports provided: CustomerBettingStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBettingStatus", function() { return CustomerBettingStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/index.js */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const backgroundColorList = ['#36A2EB', '#F15D21', '#97A9B3', '#E8AE1B'];
const defaultDataSetItem = {
  data: [],
  backgroundColor: backgroundColorList
};
const defaultChartData = {
  labels: [_jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Won'), _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Lose'), _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Draw'), _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Cancelled')],
  datasets: [],
  borderWidth: 2,
  hoverBorderWidth: 10
};
const legendOpts = {
  display: true,
  position: 'bottom',
  labels: {
    boxWidth: 15,
    usePointStyle: true
  },
  onClick: () => {}
};
const option = {
  animation: {
    onComplete: function () {
      const self = this;
      const chart = this.chart;
      const ctx = chart.ctx;
      const chartSize = Math.min(chart.width, chart.height);
      if (chartSize < 100) {
        return;
      }
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff";
      ctx.font = "1rem sans-serif";
      ctx.save();
      ctx.shadowColor = "black";
      ctx.shadowBlur = 3;
      const summary = self.data.datasets[0].data.reduce((sum, current) => {
        return sum += current;
      }, 0);
      self.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = self.getDatasetMeta(datasetIndex);
        meta.data.forEach((element, index) => {
          const segmentPercent = dataset.data[index] / summary * 100;
          const position = element.tooltipPosition();
          if (element._model.circumference > 0) {
            const label = segmentPercent < 1 ? "<1" : segmentPercent.toFixed(2);
            ctx.fillText(label + '%', position.x, position.y);
          }
        });
      });
      ctx.restore();
    }
  }
};
const CustomerBettingStatus = props => {
  const [data, setData] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = () => {
      const {
        ibcCustId
      } = props;
      const params = {
        custId: ibcCustId
      };
      props.getCustomerBettingStatus(params).then(response => {
        setData(response.data);
      }).catch(err => {
        console.log(err.message);
      });
    };
    fetchData();
  }, []);
  const renderContent = () => {
    const {
      WonTicketCount,
      LoseTicketCount,
      DrawTicketCount,
      CancelledTicketCount
    } = data;
    const dataSetItem = _objectSpread(_objectSpread({}, defaultDataSetItem), {}, {
      data: [WonTicketCount, LoseTicketCount, DrawTicketCount, CancelledTicketCount]
    });
    const chartData = _objectSpread(_objectSpread({}, defaultChartData), {}, {
      datasets: [dataSetItem]
    });
    const {
      Margin,
      AverageBetSize,
      Winnings,
      Loss,
      NetWinLoss
    } = data;
    const marginPercent = _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].round(Margin, 2) * 100;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-7 col-sm-7 col-lg-7 col-xl-7 chart-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__["Doughnut"], {
      data: chartData,
      legend: legendOpts,
      options: option
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-12 col-md-5 col-sm-5 col-lg-5 col-xl-5 statistics-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('BasedOnSportsbook')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5 col-md-5 col-sm-5 col-lg-5 col-xl-5"
    }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Margin'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].formatDecimal(marginPercent), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5 col-md-5 col-sm-5 col-lg-5 col-xl-5"
    }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('AverageBetSize'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].formatDecimal(AverageBetSize))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5 col-md-5 col-sm-5 col-lg-5 col-xl-5"
    }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Winnings'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].formatDecimal(Winnings))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5 col-md-5 col-sm-5 col-lg-5 col-xl-5"
    }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('Loss'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].formatDecimal(Loss))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-5 col-md-5 col-sm-5 col-lg-5 col-xl-5"
    }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NetWinLoss'), ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4 col-md-4 col-sm-4 col-lg-4 col-xl-4"
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_4__["default"].formatDecimal(NetWinLoss)))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-header"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('PlayerBettingStatisticsTitle')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, data && data.HasData ? renderContent() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "center-align"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('NoSportsbookData'))));
};
function mapDispatchToProps(dispatch) {
  const {
    getCustomerBettingStatus
  } = _actions_index_js__WEBPACK_IMPORTED_MODULE_2__["ActionCreators"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])({
    getCustomerBettingStatus
  }, dispatch);
}
function mapStateToProps(state) {
  const {
    ibcCustId
  } = state;
  return Object.assign({}, {
    ibcCustId
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CustomerBettingStatus));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/FastCrossLink.jsx":
/*!*******************************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/widgets/FastCrossLink.jsx ***!
  \*******************************************************************************************************/
/*! exports provided: FastCrossLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastCrossLink", function() { return FastCrossLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/actions/index.js");
/* harmony import */ var _constants_configInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/configInfo */ "./www/js/source/reactpages/Module/constants/configInfo.js");
/* harmony import */ var _jsroot_components_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jsroot/components/popup */ "./www/js/source/reactpages/components/popup/index.jsx");
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");







const defaultPopupInfo = {
  url: null,
  title: null,
  width: 0,
  height: 0
};
const FastCrossLink = props => {
  const {
    userName,
    currencyName,
    getLink
  } = props;
  const singleCustomerActionLink = `PlayerBtcSingleCustomer?userName=${userName}&currencyName=${currencyName}`;
  const singleCustomerUrl = getLink(_constants_configInfo__WEBPACK_IMPORTED_MODULE_4__["systemType"].lrf, singleCustomerActionLink);
  const customerWinLossActionLink = `PlayerWinLoss?userName=${userName}&currencyName=${currencyName}`;
  const customerWinLossUrl = getLink(_constants_configInfo__WEBPACK_IMPORTED_MODULE_4__["systemType"].lrf, customerWinLossActionLink);
  const [popupInfo, setPopupInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPopupInfo);
  const isShowPopup = !!popupInfo.url;
  const handleClickLink = (event, popup) => {
    event.preventDefault();
    setPopupInfo(popup);
  };
  const popupSingleCustomer = {
    url: singleCustomerUrl,
    title: _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('BettingTicketCenter') + ' - ' + _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('SingleCustomer'),
    width: window.innerWidth - 10,
    height: window.innerHeight - 10
  };
  const popupCustomerWinLoss = {
    url: customerWinLossUrl,
    title: _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CustomerWinLoss'),
    width: window.innerWidth - 10,
    height: 300
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-header"
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('FastCrossLink')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('BettingTicketCenter')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "divider"
  }, ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    onClick: e => handleClickLink(e, popupSingleCustomer)
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('SingleCustomer')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link",
    onClick: e => handleClickLink(e, popupCustomerWinLoss)
  }, _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_6__["default"].getText('CustomerWinLoss'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_jsroot_components_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isShow: isShowPopup,
    iframeUrl: popupInfo.url,
    title: popupInfo.title,
    width: popupInfo.width,
    height: popupInfo.height,
    onClose: () => setPopupInfo(defaultPopupInfo)
  }));
};
function mapDispatchToProps(dispatch) {
  const {
    getLink
  } = _actions__WEBPACK_IMPORTED_MODULE_3__["ActionCreators"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    getLink
  }, dispatch);
}
function mapStateToProps(state) {
  const {
    userName,
    currencyName
  } = state;
  return Object.assign({}, {
    userName,
    currencyName
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FastCrossLink));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/apiInfo.js":
/*!*********************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/apiInfo.js ***!
  \*********************************************************************************/
/*! exports provided: custBettingStatus, lapAccountProfile, lapBankInfo, lrfActivityRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custBettingStatus", function() { return custBettingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lapAccountProfile", function() { return lapAccountProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lapBankInfo", function() { return lapBankInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lrfActivityRecord", function() { return lrfActivityRecord; });
/* harmony import */ var _constants_configInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/configInfo */ "./www/js/source/reactpages/Module/constants/configInfo.js");

const custBettingStatus = {
  action: 'api/PlayerBettingStatistics/GetData',
  type: _constants_configInfo__WEBPACK_IMPORTED_MODULE_0__["systemType"].lrf
};
const lapAccountProfile = {
  action: 'PlayerAccountInfo/GetAccountProfile',
  type: _constants_configInfo__WEBPACK_IMPORTED_MODULE_0__["systemType"].newAdmin
};
const lapBankInfo = {
  action: 'PlayerAccountInfo/GetBankInfo',
  type: _constants_configInfo__WEBPACK_IMPORTED_MODULE_0__["systemType"].newAdmin
};
const lrfActivityRecord = {
  action: 'api/PlayerActivityRecord/Index',
  type: _constants_configInfo__WEBPACK_IMPORTED_MODULE_0__["systemType"].lrf
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/constants.js":
/*!***********************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/constants.js ***!
  \***********************************************************************************/
/*! exports provided: tabKeys, tabList, licenseeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabKeys", function() { return tabKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabList", function() { return tabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenseeType", function() { return licenseeType; });
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");

const getText = resourceKey => _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_0__["default"].getText(resourceKey);
const tabKeys = {
  playerProfile: 'playerProfile',
  bankInformation: 'bankInformation',
  activityRecord: 'activityRecord'
};
const tabList = [{
  name: tabKeys.playerProfile,
  text: getText('PlayerProfile')
}, {
  name: tabKeys.bankInformation,
  text: getText('BankInformation')
}, {
  name: tabKeys.activityRecord,
  text: getText('ActivityRecord')
}];
const licenseeType = {
  api: 0,
  nonApi: 1
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/playerAccountService.js":
/*!**********************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/playerAccountService.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerAccountService; });
/* harmony import */ var _lib_factoryCommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/factoryCommonService */ "./www/js/source/reactpages/Module/lib/factoryCommonService.js");
/* harmony import */ var _apiInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiInfo */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/lib/apiInfo.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class PlayerAccountService {
  constructor() {
    this.commonService = _lib_factoryCommonService__WEBPACK_IMPORTED_MODULE_0__["default"].createInstance();
  }
  getAccountProfile(param) {
    return this._getData(_apiInfo__WEBPACK_IMPORTED_MODULE_1__["lapAccountProfile"].type, _apiInfo__WEBPACK_IMPORTED_MODULE_1__["lapAccountProfile"].action, param);
  }
  getBankInfo(param) {
    return this._getData(_apiInfo__WEBPACK_IMPORTED_MODULE_1__["lapBankInfo"].type, _apiInfo__WEBPACK_IMPORTED_MODULE_1__["lapBankInfo"].action, param);
  }
  getActivityRecord(param) {
    return this._getData(_apiInfo__WEBPACK_IMPORTED_MODULE_1__["lrfActivityRecord"].type, _apiInfo__WEBPACK_IMPORTED_MODULE_1__["lrfActivityRecord"].action, param);
  }
  _getData(licType, action, param) {
    return this.commonService.fetchData(licType, action, param).then(response => {
      const {
        data
      } = response;
      return data;
    }).catch(error => {
      console.log(error.message);
      return null;
    });
  }
  getCustomerBettingStatus(param) {
    const params = _objectSpread({}, param);
    return this.commonService.fetchData(_apiInfo__WEBPACK_IMPORTED_MODULE_1__["custBettingStatus"].type, _apiInfo__WEBPACK_IMPORTED_MODULE_1__["custBettingStatus"].action, params);
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/commonReducer.js":
/*!********************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/commonReducer.js ***!
  \********************************************************************************************/
/*! exports provided: licenseeCustId, ibcCustId, licenseeType, userName, currencyName, subTabKey, createdDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenseeCustId", function() { return licenseeCustId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ibcCustId", function() { return ibcCustId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenseeType", function() { return licenseeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userName", function() { return userName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyName", function() { return currencyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTabKey", function() { return subTabKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdDate", function() { return createdDate; });
/* harmony import */ var _lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/createReducer.js */ "./www/js/source/reactpages/lib/createReducer.js");

const licenseeCustId = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null, {});
const ibcCustId = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null, {});
const licenseeType = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null, {});
const userName = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])('', {});
const currencyName = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])('', {});
const subTabKey = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])('', {});
const createdDate = Object(_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_0__["default"])('', {});

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/index.js":
/*!************************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _commonReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonReducer */ "./www/js/source/reactpages/Module/PlayerAdmin/account-info/reducers/commonReducer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_objectSpread({}, _commonReducer__WEBPACK_IMPORTED_MODULE_1__)));

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/resources/index.js":
/*!************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/resources/index.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jsroot/lib/clientResourceManager */ "./www/js/source/reactpages/lib/clientResourceManager.js");
/* harmony import */ var _resource_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource.en */ "./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.en.js");
/* harmony import */ var _resource_cs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource.cs */ "./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.cs.js");



_jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_0__["default"].register('en', _resource_en__WEBPACK_IMPORTED_MODULE_1__["resource_en"]);
_jsroot_lib_clientResourceManager__WEBPACK_IMPORTED_MODULE_0__["default"].register('cs', _resource_cs__WEBPACK_IMPORTED_MODULE_2__["resource_cs"]);

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.cs.js":
/*!******************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.cs.js ***!
  \******************************************************************************/
/*! exports provided: resource_cs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resource_cs", function() { return resource_cs; });
const resource_cs = {
  BankInformation: '银行资讯',
  BankName: '银行名称',
  BankAccountName: '账户名称',
  BankAccountNumber: '银行账户号码',
  Country: '地区',
  Mobile: '手机版',
  CreatedDate: '创建日期',
  LastLogin: '最后登入',
  LastTxn: '最后交易',
  BAUpdatedBy: '投注总计跟新由',
  LastUpdatedBy: 'Last Updated By',
  SpecialLevel: '特殊层级',
  LastUpdatedSpecialLevel: '最近更新的特殊级别',
  Margin: '利润',
  SingleCustomer: '单一会员',
  BettingTicketCenter: '注单中心',
  CustomerWinLoss: '会员輸贏',
  NoSportsbookData: '没有体育平台资料',
  PlayerBettingStatisticsTitle: '玩家投注统计(月到日)',
  FastCrossLink: '快速连结',
  BasedOnSportsbook: '基于体育平台资料',
  AverageBetSize: '平均投注量',
  Winnings: '赢',
  Loss: '输',
  NetWinLoss: '净输赢',
  PlayerProfile: '玩家个人资料',
  ActivityRecord: '活动纪录',
  MemberId: '会员序号',
  FirstName: '名字',
  LastName: '姓名',
  OperatorId: '厂商ID',
  SiteCode: '网站代码',
  ProductCode: '商品代码',
  CustomInfo1: '玩家信息1',
  CustomInfo2: '玩家信息2',
  CustomInfo3: '玩家信息3',
  CustomInfo4: '玩家信息4',
  CustomInfo5: '玩家信息5',
  AgUserId: 'AG使用者ID',
  GoldDeluxeUserId: 'GD真人娱乐场平台使用者ID',
  MacauGamesUserId: 'Macau Games UserID',
  ExchangeUserId: 'Exchange使用者ID',
  Gender: '性别',
  DateOfBirth: '生日',
  Address: '地址',
  City: '城市',
  Town: '城镇',
  State: '州',
  ZipCode: '邮政编码',
  SecurityQuestion: '安全问题',
  SecurityCode: '完全代码',
  WhereHear: '您是如何知道我们的',
  PreferredUserName: '使用者名称偏好',
  PreferredCurrency: '币别偏好',
  PreferredOdds: '赔率偏好',
  PreferredLanguage: '语言偏好',
  LastUpdatedBA: '最后更新BA',
  Won: '赢',
  Lose: '输',
  Draw: '和局',
  Cancelled: '已取消的',
  LastTransaction: '最后交易'
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.en.js":
/*!******************************************************************************!*\
  !*** ./www/js/source/reactpages/Module/PlayerAdmin/resources/resource.en.js ***!
  \******************************************************************************/
/*! exports provided: resource_en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resource_en", function() { return resource_en; });
const resource_en = {
  BankInformation: 'Bank Information',
  BankName: 'Bank Name',
  BankAccountName: 'Bank Account Name',
  BankAccountNumber: 'Bank Account Number',
  Country: 'Country',
  AgUserId: 'AG UserId',
  GoldDeluxeUserId: 'Gold Deluxe UserID',
  MacauGamesUserId: 'Macau Games UserID',
  ExchangeUserId: 'Exchange UserID',
  FirstName: 'First name',
  LastName: 'Last name',
  DateOfBirth: 'Date of birth',
  Mobile: 'Mobile',
  City: 'City',
  Town: 'Town',
  State: 'State',
  ZipCode: 'Zip Code',
  SecurityQuestion: 'Security question',
  SecurityCode: 'Security code',
  WhereHear: 'Where did you hear about us',
  PreferredUserName: 'My preferred username',
  PreferredCurrency: 'My preferred currency',
  PreferredOdds: 'My preferred odds',
  PreferredLanguage: 'My preferred language',
  MemberId: 'Member ID',
  OperatorId: 'Operator ID',
  SiteCode: 'Site code',
  ProductCode: 'Product code',
  CustomInfo1: 'CustomInfo 1',
  CustomInfo2: 'CustomInfo 2',
  CustomInfo3: 'CustomInfo 3',
  CustomInfo4: 'CustomInfo 4',
  CustomInfo5: 'CustomInfo 5',
  CreatedDate: 'Created Date',
  LastLogin: 'Last Login',
  BAUpdatedBy: 'BA Updated By',
  LastUpdatedBA: 'Last Updated BA',
  SpecialLevel: 'Special Level',
  LastUpdatedSpecialLevel: 'Last Updated Special Level',
  Margin: 'Margin',
  AverageBetSize: 'Average bet size',
  Winnings: 'Winnings',
  Loss: 'Loss',
  NetWinLoss: 'Net Win Loss',
  BasedOnSportsbook: 'Based on Sportsbook data',
  NoSportsbookData: 'There is no Sportsbook data.',
  FastCrossLink: 'Fast Cross-Link',
  SingleCustomer: 'Single Customer',
  BettingTicketCenter: 'Betting Ticket Center',
  CustomerWinLoss: 'Customer Win Loss',
  PlayerBettingStatisticsTitle: 'Player Betting Statistics (month to date)',
  PlayerProfile: 'Player Profile',
  ActivityRecord: 'Activity Record',
  PlaceholderBankAccount: 'Search by Exactly Bank Account Number',
  PlaceholderEmail: 'Search by Exactly Email',
  Gender: 'Gender',
  Address: 'Address',
  Won: 'Won',
  Lose: 'Lose',
  Draw: 'Draw',
  Cancelled: 'Cancelled',
  LastTransaction: 'Last Transaction'
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/constants/configInfo.js":
/*!*****************************************************************!*\
  !*** ./www/js/source/reactpages/Module/constants/configInfo.js ***!
  \*****************************************************************/
/*! exports provided: tokenUrlTemplate, systemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenUrlTemplate", function() { return tokenUrlTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemType", function() { return systemType; });
const pageConfig = window._pConfig;
const tokenUrlTemplate = pageConfig && pageConfig.tokenUrl;
const systemType = {
  internal: 0,
  lrf: 1,
  affiliate: 2,
  newAdmin: 3
};

/***/ }),

/***/ "./www/js/source/reactpages/Module/lib/baseCommonService.js":
/*!******************************************************************!*\
  !*** ./www/js/source/reactpages/Module/lib/baseCommonService.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BaseCommonService {
  constructor() {
    if (this.constructor == BaseCommonService) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  getTabList() {
    throw new Error("Method 'getTabList()' must be implemented.");
  }
  fetchData(sType, action, params, configOption = {}) {
    throw new Error("Method 'fetchData()' must be implemented.");
  }
  fetchMultiple(promiseList, callback) {
    throw new Error("Method 'fetchMultiple()' must be implemented.");
  }
}
/* harmony default export */ __webpack_exports__["default"] = (BaseCommonService);

/***/ }),

/***/ "./www/js/source/reactpages/Module/lib/factoryCommonService.js":
/*!*********************************************************************!*\
  !*** ./www/js/source/reactpages/Module/lib/factoryCommonService.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FactoryCommonService; });
/* harmony import */ var _lapCommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lapCommonService */ "./www/js/source/reactpages/Module/lib/lapCommonService.js");

class FactoryCommonService {
  static createInstance() {
    const pageConfig = window._pConfig;
    if (!pageConfig) {
      throw new Error("Missing _pConfig in window");
    }
    const {
      tabList,
      hostUrl
    } = pageConfig;
    const initialConfig = {
      tabList,
      baseUrl: hostUrl
    };
    return new _lapCommonService__WEBPACK_IMPORTED_MODULE_0__["default"](initialConfig);
  }
}

/***/ }),

/***/ "./www/js/source/reactpages/Module/lib/lapCommonService.js":
/*!*****************************************************************!*\
  !*** ./www/js/source/reactpages/Module/lib/lapCommonService.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseCommonService */ "./www/js/source/reactpages/Module/lib/baseCommonService.js");
/* harmony import */ var _constants_configInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/configInfo */ "./www/js/source/reactpages/Module/constants/configInfo.js");
/* harmony import */ var _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jsroot/lib/site */ "./www/js/source/reactpages/lib/site.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





const defaultAjaxConfig = {
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/x-www-form-urlencoded',
    '__RequestVerificationToken': _jsroot_lib_site__WEBPACK_IMPORTED_MODULE_2__["default"].getXsrfToken()
  },
  withCredentials: false,
  responseType: 'json',
  cancelToken: new axios__WEBPACK_IMPORTED_MODULE_3___default.a.CancelToken(function (cancel) {})
};
class LapCommonService extends _baseCommonService__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(initialConfig) {
    super();
    const {
      baseUrl,
      tabList
    } = initialConfig;
    this._baseUrl = baseUrl;
    this._tabList = tabList || [];
  }
  getTabList() {
    return [...this._tabList];
  }
  _buildCommonAjaxConfig(configOption, apiActionUrl, params) {
    const commonConfig = _objectSpread(_objectSpread({}, configOption), {}, {
      url: apiActionUrl
    });
    const configWithParam = this._getConfigParam(commonConfig, params);
    return configWithParam;
  }
  _getConfigParam(config, params) {
    const isGetMethod = config.method.toLowerCase() === 'get';
    const paramConfig = isGetMethod ? {
      params
    } : {
      data: qs__WEBPACK_IMPORTED_MODULE_4___default.a.stringify(params)
    };
    return _objectSpread(_objectSpread({}, config), paramConfig);
  }
  fetchData(sysType, action, params, configOption = defaultAjaxConfig) {
    const config = _objectSpread(_objectSpread({}, defaultAjaxConfig), configOption);
    const relativeUrl = this._baseUrl + action;
    const ajaxConfig = this._buildCommonAjaxConfig(config, relativeUrl, params);
    return axios__WEBPACK_IMPORTED_MODULE_3___default()(ajaxConfig);
  }
  fetchMultiple(promiseList, callback) {
    if (promiseList && promiseList.length) {
      return axios__WEBPACK_IMPORTED_MODULE_3___default.a.all(promiseList).then(axios__WEBPACK_IMPORTED_MODULE_3___default.a.spread(callback));
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LapCommonService);

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

/***/ "./www/js/source/reactpages/lib/clientResourceManager.js":
/*!***************************************************************!*\
  !*** ./www/js/source/reactpages/lib/clientResourceManager.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientResourceManager; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const DEFAULT_RESOURCE_KEY = 'en';
const resources = {
  'en': {},
  'cs': {}
};
const currentLangKey = window._langKey || DEFAULT_RESOURCE_KEY;
class ClientResourceManager {
  static register(langKey, resourceValue) {
    resources[langKey] = _objectSpread(_objectSpread({}, resources[langKey]), resourceValue);
  }
  static getText(key) {
    const currentResource = resources[currentLangKey];
    return currentResource && (currentResource[key] || resources[DEFAULT_RESOURCE_KEY][key] || key);
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

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=accountinfo.chunk.js.map
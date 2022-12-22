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

/***/ "./node_modules/@9softstudio/react-datepicker/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@9softstudio/react-datepicker/dist/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! moment */ "./node_modules/moment/moment.js")):undefined}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=11)}([function(t,n){t.exports=e},function(e,t,n){e.exports=n(13)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,a){var o=null;void 0!==t&&"null"!=typeof t&&t&&""!==t?"string"==typeof t?o=(0,r.default)(t,n)[a]("day"):"function"==typeof t?o=e(t((0,r.default)()[a]("day")),n,a):t._isAMomentObject&&(o=t[a]("day").clone()):o=(0,r.default)()[a]("day");return o};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=(t.defaultClasses={show:"rdr-Show",hide:"rdr-Hide",calendar:"rdr-Calendar",dateRange:"rdr-DateRange",predefinedRanges:"rdr-PredefinedRanges",predefinedRangesItem:"rdr-PredefinedRangesItem",predefinedRangesItemActive:"rdr-PredefinedRangesItemActive",monthAndYear:"rdr-MonthAndYear",monthAndYearSelect:"rdr-MonthAndYearSelect",weekDays:"rdr-WeekDays",weekDay:"rdr-WeekDay",days:"rdr-Days",day:"rdr-Day",dayActive:"is-selected",dayPassive:"is-passive",dayInRange:"is-inRange",monthAndYearWrapper:"rdr-MonthAndYear-innerWrapper",prevButton:"rdr-MonthAndYear-button prev",nextButton:"rdr-MonthAndYear-button next",month:"rdr-MonthAndYear-month",monthAndYearDivider:"rdr-MonthAndYear-divider",year:"rdr-MonthAndYear-year",daySunday:"rdr-Sunday",daySpecialDay:"rdr-SpecialDay",rangeButtonGroup:"range-button-group",applyButton:"rdr-Button rdr-ApplyButton",cancelButton:"rdr-Button rdr-CancelButton"},{DateRange:{display:"none",boxSizing:"border-box",background:"#ffffff",borderRadius:"2px",position:"absolute",width:735,zIndex:1,top:60},Calendar:{width:280,padding:10,background:"#ffffff",borderRadius:"2px",display:"inline-block",boxSizing:"border-box",letterSpacing:0,color:"#000000"},Day:{boxSizing:"border-box",display:"inline-block",letterSpacing:"initial",textAlign:"center",fontSize:12,cursor:"pointer",transition:"transform .1s ease"},DayPassive:{opacity:.4,cursor:"normal"},DayHover:{background:"rgba(78, 184, 94, 0.4)"},DayToday:{},DaySunday:{},DaySpecialDay:{},DayActive:{background:"#95a5a6",color:"#ffffff",transform:"scale(0.9)"},DaySelected:{background:"#4eb85e",color:"#ffffff"},DayStartEdge:{},DayEndEdge:{},DayInRange:{background:"rgba(78, 184, 94, 0.2)",color:"#95a5a6"},Weekday:{boxSizing:"border-box",display:"inline-block",letterSpacing:"initial",textAlign:"center",fontSize:12,fontWeight:"600",marginBottom:1},MonthAndYear:{textAlign:"center",boxSizing:"border-box",fontSize:12,padding:"5px 0",height:40,lineHeight:"18px"},MonthButton:{display:"block",boxSizing:"border-box",height:25,width:25,padding:0,margin:"0 10px",border:"none",boxShadow:"none",outline:"none",background:"#fff",cursor:"pointer"},MonthArrow:{display:"block",width:0,height:0,padding:0,margin:0,border:"5px solid transparent",textAlign:"center"},MonthArrowPrev:{borderRightWidth:"7px",borderRightColor:"#34495e",marginLeft:3},MonthArrowNext:{borderLeftWidth:"7px",borderLeftColor:"#34495e",marginLeft:10},MonthAndYearSelect:{height:25,width:65},PredefinedRanges:{width:160,display:"inline-block",verticalAlign:"top",marginLeft:10,marginTop:10},PredefinedRangesItem:{display:"block",fontSize:12,color:"#2c3e50",padding:"10px 14px",borderRadius:"4px",textDecoration:"none",marginBottom:3},PredefinedRangesItemActive:{background:"#4c6375",color:"#fff"},RangeButton:{border:"none",borderRadius:"2px",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",height:25,lineHeight:"25px",textAlign:"center",letterSpacing:"0.5px",display:"inline-block",outline:0,verticalAlign:"middle",width:"48%",color:"#fff"},RangeApplyButton:{marginRight:"calc(4%)",backgroundColor:"#f05b1f"},RangeCancelButton:{backgroundColor:"#757985"}});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.Calendar.width,n=a.Calendar.padding,o=a.Day.margin||0;e.Calendar&&e.Calendar.hasOwnProperty("width")&&(t=e.Calendar.width),e.Calendar&&e.Calendar.hasOwnProperty("padding")&&(n=e.Calendar.padding),e.Day&&e.Day.hasOwnProperty("margin")&&(o=e.Day.margin);var l=(parseInt(t)-2*parseInt(n))/7-2*parseInt(o);return{DateRange:r({},a.DateRange,e.DateRange),Calendar:r({},a.Calendar,e.Calendar),Day:r({width:l,height:l,lineHeight:l+"px"},a.Day,e.Day),DayPassive:r({},a.DayPassive,e.DayPassive),DayHover:r({},a.DayHover,e.DayHover),DayToday:r({},a.DayToday,e.DayToday),DaySunday:r({},a.DaySunday,e.DaySunday),DaySpecialDay:r({},a.DaySpecialDay,e.DaySpecialDay),DayActive:r({},a.DayActive,e.DayActive),DaySelected:r({},a.DaySelected,e.DaySelected),DayStartEdge:r({},a.DayStartEdge,e.DayStartEdge),DayEndEdge:r({},a.DayEndEdge,e.DayEndEdge),DayInRange:r({},a.DayInRange,e.DayInRange),Weekday:r({width:l,height:l/2,lineHeight:l/2+"px"},a.Weekday,e.Weekday),MonthAndYear:r({},a.MonthAndYear,e.MonthAndYear),MonthAndYearSelect:r({},a.MonthAndYearSelect,e.MonthAndYearSelect),MonthButton:r({},a.MonthButton,e.MonthButton),MonthArrow:r({},a.MonthArrow,e.MonthArrow),MonthArrowPrev:r({},a.MonthArrowPrev,e.MonthArrowPrev),MonthArrowNext:r({},a.MonthArrowNext,e.MonthArrowNext),PredefinedRanges:r({},a.PredefinedRanges,e.PredefinedRanges),PredefinedRangesItem:r({},a.PredefinedRangesItem,e.PredefinedRangesItem),PredefinedRangesItemActive:r({},a.PredefinedRangesItemActive,e.PredefinedRangesItemActive),RangeApplyButton:r({},a.RangeButton,a.RangeApplyButton,e.RangeApplyButton),RangeCancelButton:r({},a.RangeButton,a.RangeCancelButton,e.RangeCancelButton)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.MomentFormat={default:"MM/DD/YYYY",monthSelect:"MMM"}},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=h(o),i=h(n(1)),u=h(n(5)),s=h(n(2)),c=h(n(15)),f=n(3),d=h(f),p=n(4);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.handleSelect=function(e){var t=r.props,n=t.link,a=t.onChange;a&&a(e),n||r.setState({shownDate:e.clone()})};var a=e.range,o=e.theme,l=e.firstDayOfWeek,i={shownDate:(e.shownDate||a&&a.endDate).clone(),firstDayOfWeek:l||u.default.localeData().firstDayOfWeek()};return r.state=i,r.styles=(0,d.default)(o),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props.onInit;e&&e(this.state.shownDate)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.shownDate;n!==e.shownDate&&this.setState({shownDate:n.clone()})}},{key:"getShownDate",value:function(){return this.props.link||this.state.shownDate}},{key:"nextButtonClickHandler",value:function(e){e.preventDefault(),this.disableNextButton||this.changeMonth(this.state.shownDate.month()+1,e)}},{key:"prevButtonClickHandler",value:function(e){e.preventDefault(),this.disablePrevButton||this.changeMonth(this.state.shownDate.month()-1,e)}},{key:"changeMonth",value:function(e,t){t.preventDefault();var n=Number(e),r=this.state.shownDate.year();n<0&&(n=11,r-=1),n>11&&(n=0,r+=1);var a=this.props,o=a.link,l=a.linkCB,i=(0,u.default)([r,n,this.state.shownDate.date()]);if(i.isValid()||(i=(0,u.default)([r,n,1])),o&&l)return l(i);this.setState({shownDate:i})}},{key:"changeYear",value:function(e){e.preventDefault();var t=Number(e.target.value),n=(0,u.default)([t,this.state.shownDate.month(),this.state.shownDate.date()]);n.isValid()||(n=(0,u.default)([t,this.state.shownDate.month(),1])),this.setState({shownDate:n})}},{key:"renderMonthList",value:function(e){for(var t=this,n=this.styles,r=this.props,a=r.onlyClasses,o=r.locale.months,i=[],u=0;u<12;u++){var s=this._isDisabledMonth(u);i.push(l.default.createElement("option",{disabled:s,key:"month"+u,value:u},o[u]))}return l.default.createElement("select",{style:a?void 0:n.MonthAndYearSelect,className:e.monthAndYearSelect,onChange:function(e){return t.changeMonth(e.target.value,e)},value:this.state.shownDate.month()},i)}},{key:"_isDisabledMonth",value:function(e){var t=this.limitedDate,n=this.state.shownDate.year();return e<t.startDate.month()&&n<=t.startDate.year()||e>t.endDate.month()&&n>=t.endDate.year()}},{key:"renderYearList",value:function(e){for(var t=this.styles,n=this.props.onlyClasses,r=this.limitedDate,a=[],o=r.startDate.year();o<=r.endDate.year();o++)a.push(l.default.createElement("option",{key:"year"+o,value:o},o));return l.default.createElement("select",{style:n?void 0:t.MonthAndYearSelect,className:e.monthAndYearSelect,onChange:this.changeYear.bind(this),value:this.state.shownDate.year()},a)}},{key:"renderMonthAndYear",value:function(e){var t=this.styles,n=this.props,a=n.onlyClasses,o=n.showMonthArrow;return l.default.createElement("div",{style:a?void 0:t.MonthAndYear,className:e.monthAndYearWrapper},o?l.default.createElement("button",{type:"button",disabled:this.disablePrevButton,style:a?void 0:r({},t.MonthButton,{float:"left"}),className:e.prevButton,onClick:this.prevButtonClickHandler.bind(this)},l.default.createElement("i",{style:a?void 0:r({},t.MonthArrow,t.MonthArrowPrev)})):null,l.default.createElement("span",null,l.default.createElement("span",{className:e.month},this.renderMonthList(e)),l.default.createElement("span",{className:e.monthAndYearDivider}," "),l.default.createElement("span",{className:e.year},this.renderYearList(e))),o?l.default.createElement("button",{type:"button",disabled:this.disableNextButton,style:a?void 0:r({},t.MonthButton,{float:"right"}),className:e.nextButton,onClick:this.nextButtonClickHandler.bind(this)},l.default.createElement("i",{style:a?void 0:r({},t.MonthArrow,t.MonthArrowNext)})):null)}},{key:"renderWeekdays",value:function(e){for(var t=this.state.firstDayOfWeek,n=[],r=this.styles,a=this.props,o=a.onlyClasses,i=a.locale.weekdays,u=7+t,s=t;s<u;s++){var c=i[s%7];n.push(l.default.createElement("span",{style:o?void 0:r.Weekday,className:e.weekDay,key:s+c},c))}return n}},{key:"renderDays",value:function(e){for(var t=this,n=this.styles,a=this.props,o=a.range,i=a.minDate,f=a.maxDate,d=a.format,p=a.onlyClasses,h=a.disableDaysBeforeToday,m=a.specialDays,y=this.getShownDate(),v=this.state.firstDayOfWeek,g=y.unix(),b=y.month(),k=y.daysInMonth(),w=y.clone().startOf("month").isoWeekday(),x=y.clone().month(b-1),C=x.daysInMonth(),_=y.clone().month(b+1),E=[],S=Math.abs(v-(w+7))%7-1;S>=0;S--){var T=x.clone().date(C-S);E.push({dayMoment:T,isPassive:!0})}for(var D=1;D<=k;D++){var P=y.clone().date(D),O=(0,u.default)();h&&Number(P.diff(O,"days"))<=-1?E.push({dayMoment:P,isPassive:!0}):E.push({dayMoment:P})}for(var M=42-E.length,N=1;N<=M;N++){var R=_.clone().date(N);E.push({dayMoment:R,isPassive:!0})}var A=(0,u.default)().startOf("day");return E.map(function(a,u){var h=a.dayMoment,y=a.isPassive,v=!o&&h.unix()===g,b=o&&function(e,t){return e.isBetween(t.startDate,t.endDate)||e.isBetween(t.endDate,t.startDate)}(h,o),k=o&&function(e,t){var n=t.startDate;return e.startOf("day").isSame(n.startOf("day"))}(h,o),w=o&&function(e,t){var n=t.endDate;return e.endOf("day").isSame(n.endOf("day"))}(h,o),x=k||w,C=A.isSame(h),_=0===h.day(),E=m&&m.some(function(e){return h.endOf("day").isSame(e.date.endOf("day"))}),S=function(e,t,n,r){return t&&e.isBefore((0,s.default)(t,r,"startOf"))||n&&e.isAfter((0,s.default)(n,r,"endOf"))}(h,i,f,d);return l.default.createElement(c.default,r({onSelect:t.handleSelect},a,{theme:n,isStartEdge:k,isEndEdge:w,isSelected:v||x,isInRange:b,isSunday:_,isSpecialDay:E,isToday:C,key:u,isPassive:y||S,onlyClasses:p,classNames:e}))})}},{key:"render",value:function(){var e=this.styles,t=this.props,n=t.onlyClasses,a=t.classNames,o=r({},f.defaultClasses,a);return l.default.createElement("div",{style:n?void 0:r({},e.Calendar,this.props.style),className:o.calendar},l.default.createElement("div",{className:o.monthAndYear},this.renderMonthAndYear(o)),l.default.createElement("div",{className:o.weekDays},this.renderWeekdays(o)),l.default.createElement("div",{className:o.days},this.renderDays(o)))}},{key:"limitedDate",get:function(){var e=this.props,t=e.minDate,n=e.maxDate,r=e.format,a=(0,u.default)();return{startDate:t?u.default.isMoment(t)?t:(0,u.default)(t,r):(0,u.default)([a.year()-5,0]),endDate:n?u.default.isMoment(n)?n:(0,u.default)(n,r):(0,u.default)([a.year(),11]).endOf("month")}}},{key:"disablePrevButton",get:function(){var e=this.limitedDate.startDate,t=this.state.shownDate;return this.state.shownDate.month()-1<e.month()&&t.year()<=e.year()}},{key:"disableNextButton",get:function(){var e=this.limitedDate.endDate,t=this.state.shownDate;return this.state.shownDate.month()+1>e.month()&&t.year()>=e.year()}}]),t}();m.defaultProps={format:p.MomentFormat.default,theme:{},showMonthArrow:!0,disableDaysBeforeToday:!1,onlyClasses:!0,classNames:{},specialDays:[]},m.propTypes={showMonthArrow:i.default.bool,disableDaysBeforeToday:i.default.bool,lang:i.default.string,sets:i.default.string,range:i.default.shape({startDate:i.default.object,endDate:i.default.object}),minDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),maxDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),date:i.default.oneOfType([i.default.object,i.default.string,i.default.func]),format:i.default.string.isRequired,firstDayOfWeek:i.default.oneOfType([i.default.number,i.default.string]),onChange:i.default.func,onInit:i.default.func,link:i.default.oneOfType([i.default.shape({startDate:i.default.object,endDate:i.default.object}),i.default.bool]),linkCB:i.default.func,theme:i.default.object,onlyClasses:i.default.bool,specialDays:i.default.array,classNames:i.default.object,locale:i.default.object},t.default=m},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=a.apply(null,r);l&&e.push(l)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(5)),l=u(n(17)),i=n(4);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=(s(r={},"Today","Today"),s(r,"Yesterday","Yesterday"),s(r,"Currentweek","Current week"),s(r,"Lastweek","Last week"),s(r,"Currentmonth","Current month"),s(r,"Lastmonth","Last month"),s(r,"Sincelastmonth","Since last month"),r),f=function(e,t,n,r){e[c[t]||t]={startDate:n,endDate:r}},d=function(e,t,n,r,a){n>=r&&n<=a&&f(e,t,n,n)},p=function(e,t,n,r,a,o){o<n||r<a||f(e,t,n<a?a:n,r>o?o:r)};t.default={ranges:function(e,t,n,r){e=e?o.default.isMoment(e)?e:(0,o.default)(e,i.MomentFormat.default):(0,o.default)(),n=n?o.default.isMoment(n)?n:(0,o.default)(n,i.MomentFormat.default):e;var a={};if(e<(t=t?o.default.isMoment(t)?t:(0,o.default)(t,i.MomentFormat.default):e))return a;d(a,"Today",e,t,n);var l=e.clone().add(-1,"days");d(a,"Yesterday",l,t,n);var u=e.clone().startOf("week");p(a,"Currentweek",u,e,t,n);var s=e.clone().subtract(1,"week").startOf("week"),c=s.clone().add(6,"days");p(a,"Lastweek",s,c,t,n);var f=e.clone().startOf("month");p(a,"Currentmonth",f,e,t,n);var h=e.clone().subtract(1,"month").startOf("month"),m=h.clone().endOf("month");if(p(a,"Lastmonth",h,m,t,n),r&&r>1){var y=e.clone().subtract(1,"month").startOf("month");p(a,"Sincelastmonth",y,e,t,n)}return a},locale:a({applyLabel:"OK",cancelLabel:"Cancel"},l.default)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),l=(u(n(10)),u(n(1))),i=u(n(7));function u(e){return e&&e.__esModule?e:{default:e}}var s="overlay",c="overlay-open",f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._unRegisterEvents=function(){n.props.closeOnOutsideClick&&document.removeEventListener("click",n._handleClickOutSide,!0)},n._handleClickOutSide=function(e){n.containerElement&&!n.containerElement.contains(e.target)&&n.state.isOpening&&n._close()},n.containerElement=null,n.refHandlers={container:function(e){n.containerElement=e}},n.state={isOpening:n.props.isOpening},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"componentDidUpdate",value:function(e,t){var n=this,r=this.props.isOpening;r!==e.isOpening&&this.setState({isOpening:r},function(){var e=n.props,t=e.onOpen,a=e.onClose;r?t&&t():a&&a()})}},{key:"componentDidMount",value:function(){this._registerEvents()}},{key:"componentWillUnmount",value:function(){this._unRegisterEvents()}},{key:"_registerEvents",value:function(){this.props.closeOnOutsideClick&&document.addEventListener("click",this._handleClickOutSide,!0)}},{key:"_close",value:function(){var e=this.props.onClose;this.setState({isOpening:!1},function(){return e&&e()})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(0,i.default)(s,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},c,this.state.isOpening),t),a={display:this.state.isOpening?"block":"none"};return o.default.createElement("div",{className:r,style:a,ref:this.refHandlers.container},n)}}]),t}();f.propTypes={closeOnOutsideClick:l.default.bool,isOpening:l.default.bool,onOpen:l.default.func,onClose:l.default.func},f.defaultProps={closeOnOutsideClick:!0,isOpening:!1},t.default=f},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=n(18)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DatePicker=t.Calendar=t.DateRange=void 0;var r=l(n(12)),a=l(n(6)),o=l(n(22));function l(e){return e&&e.__esModule?e:{default:e}}t.DateRange=r.default,t.Calendar=a.default,t.DatePicker=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=y(o),i=y(n(1)),u=y(n(2)),s=y(n(6)),c=y(n(16)),f=n(3),d=y(f),p=n(4),h=y(n(8)),m=y(n(9));function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));g.call(a);var o=e.format,l=e.linkedCalendars,i=e.theme,s=(0,u.default)(e.startDate,o,"startOf"),c=(0,u.default)(e.endDate,o,"endOf");return a.styles=(0,d.default)(i),a.calendarSelectionStep=0,a.locale=r({},h.default.locale,e.locale),a.ranges=e.ranges||h.default.ranges(e.today,e.minDate,e.maxDate,e.limitedMonthRange),a.isValid=!0,a.originalRange={startDate:s,endDate:c},a.state={range:{startDate:s,endDate:c},link:l&&c,show:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"close",value:function(){this.setState({show:!1})}},{key:"componentDidMount",value:function(){var e=this.props.onInit;e&&e(this.state.range)}},{key:"orderRange",value:function(e){var t=e.startDate,n=e.endDate;return t.isAfter(n)?{startDate:n,endDate:t}:e}},{key:"setRange",value:function(e,t){if(e=this.orderRange(e),this.isValid=this.isValidMonthRange(e),this.isValid){var n=void 0===t?{range:e}:{range:e,show:t};this.setState(n)}else{var r=this.props.onChange;r&&r(e,!1)}}},{key:"handlePredefinedRangesSelect",value:function(e){this.setRange(e,!1),this.originalRange=Object.assign({},e);var t=this.props.onChange;t&&t(e,!0)}},{key:"isValidMonthRange",value:function(e){var t=this.props.limitedMonthRange;if(t){var n=e.startDate,r=e.endDate;return 12*(r.year()-n.year())+r.month()-n.month()+1<=t}return!0}},{key:"handleLinkChange",value:function(e){this.setState({link:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.showRange,a=t.format,o=t.linkedCalendars,i=t.calendars,u=t.firstDayOfWeek,d=t.minDate,p=t.maxDate,h=t.classNames,y=t.onlyClasses,v=t.specialDays,g=t.lang,b=t.disableDaysBeforeToday,k=t.showMonthArrow,w=t.iconElement,x=this.state,C=x.range,_=x.link,E=this.styles,S=r({},f.defaultClasses,h),T=Number(i)-1,D={apply:this.handleApply,cancel:this.handleCancel};return l.default.createElement("div",{className:"daterange-container"},l.default.createElement("div",{className:"daterange-label",onClick:this.show},l.default.createElement("input",{readOnly:!0,name:"DateRange",id:"DateRange",className:"input-text datepicker",type:"text",autoComplete:"off",value:this.dateRangeText}),w),l.default.createElement(m.default,{isOpening:this.state.show,onClose:this.handleCancel},l.default.createElement("div",{className:S.dateRange,ref:function(t){return e.dateRangeContainer=t}},n&&l.default.createElement(c.default,{format:a,ranges:this.ranges,range:C,theme:E,onSelect:function(t){return e.handlePredefinedRangesSelect(t)},onlyClasses:y,classNames:S,locale:this.locale,buttonHandlers:D}),function(){for(var t=[],n=T;n>=0;n--){var r=n==T?C.startDate:C.endDate;t.push(l.default.createElement(s.default,{showMonthArrow:k,shownDate:r,disableDaysBeforeToday:b,lang:g,key:n,link:o&&_,linkCB:e.handleLinkChange.bind(e),range:C,format:a,firstDayOfWeek:u,theme:E,minDate:d,maxDate:p,onlyClasses:y,specialDays:v,classNames:S,onChange:e.handleCalendarSelect,locale:e.locale}))}return t}())))}},{key:"dateRangeText",get:function(){var e=this.state.range;if(e.startDate&&e.endDate){var t=this.props.format;return e.startDate.format(t)+" - "+e.endDate.format(t)}return""}}]),t}(),g=function(){var e=this;this.show=function(){e.calendarSelectionStep=0,e.setState({show:!0})},this.handleCalendarSelect=function(t){var n=e.state.range,r={startDate:n.startDate,endDate:n.endDate};switch(e.calendarSelectionStep){case 0:r.startDate=t,r.endDate=t,e.calendarSelectionStep=1;break;case 1:r.endDate=t,e.calendarSelectionStep=0}e.setRange(r)},this.handleApply=function(){var t=e.props,n=t.onClickApplyButton,r=t.onChange,a=e.state.range;e.originalRange=Object.assign({},a),n&&n(a,e.isValid),r&&r(a,e.isValid),e.close()},this.handleCancel=function(){e.setRange(e.originalRange,!1)}};v.defaultProps={linkedCalendars:!1,theme:{},format:p.MomentFormat.default,calendars:2,onlyClasses:!0,classNames:{},specialDays:[],twoStepChange:!1,showRange:!0,iconElement:l.default.createElement("i",{className:"icon icon-calendar"})},v.propTypes={format:i.default.string,firstDayOfWeek:i.default.number,calendars:i.default.oneOfType([i.default.string,i.default.number]),startDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),endDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),minDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),maxDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),dateLimit:i.default.func,ranges:i.default.object,linkedCalendars:i.default.bool,twoStepChange:i.default.bool,theme:i.default.object,onInit:i.default.func,onChange:i.default.func,onlyClasses:i.default.bool,specialDays:i.default.array,classNames:i.default.object,onClickApplyButton:i.default.func,showRange:i.default.bool,limitedMonthRange:i.default.number,today:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),iconElement:i.default.any},t.default=v},function(e,t,n){"use strict";var r=n(14);function a(){}e.exports=function(){function e(e,t,n,a,o,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=a,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=s(o),i=s(n(1)),u=s(n(7));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={hover:!1,active:!1},r.styles=r.props.theme,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"handleMouseEvent",value:function(e){if(e.preventDefault(),this.props.isPassive)return null;var t={};switch(e.type){case"mouseenter":t.hover=!0;break;case"mouseup":case"mouseleave":t.hover=!1,t.active=!1;break;case"mousedown":t.active=!0}this.setState(t)}},{key:"handleSelect",value:function(e){if(e.preventDefault(),this.props.isPassive)return null;this.props.onSelect(this.props.dayMoment)}},{key:"getStateStyles",value:function(){var e=this.state,t=e.hover,n=e.active,a=this.props,o=a.isSelected,l=a.isInRange,i=a.isPassive,u=a.isStartEdge,s=a.isEndEdge,c=(a.dayMoment,a.isToday),f=a.isSunday,d=a.isSpecialDay,p=this.styles,h=t?p.DayHover:{},m=n?p.DayActive:{},y=i?p.DayPassive:{},v=u?p.DayStartEdge:{},g=s?p.DayEndEdge:{},b=o?p.DaySelected:{},k=l?p.DayInRange:{},w=c?p.DayToday:{},x=f?p.DaySunday:{},C=d?p.DaySpecialDay:{};return r({},w,x,C,k,h,y,m,b,v,g)}},{key:"getClassNames",value:function(e){var t,n=this.props,r=n.isSelected,a=n.isInRange,o=n.isPassive,l=n.isStartEdge,i=n.isEndEdge,s=n.isToday,f=n.isSunday,d=n.isSpecialDay;return(0,u.default)((c(t={},e.day,!0),c(t,e.dayActive,r),c(t,e.dayPassive,o),c(t,e.dayInRange,a),c(t,e.dayStartEdge,l),c(t,e.dayEndEdge,i),c(t,e.dayToday,s),c(t,e.daySunday,f),c(t,e.daySpecialDay,d),t))}},{key:"render",value:function(){var e=this.props,t=e.dayMoment,n=e.onlyClasses,a=e.classNames,o=this.styles,i=this.getStateStyles(),u=this.getClassNames(a),s={width:o.Day.width,height:o.Day.height,display:o.Day.display};return l.default.createElement("span",{style:n?void 0:s,onClick:this.handleSelect.bind(this)},l.default.createElement("span",{onMouseEnter:this.handleMouseEvent.bind(this),onMouseLeave:this.handleMouseEvent.bind(this),onMouseDown:this.handleMouseEvent.bind(this),onMouseUp:this.handleMouseEvent.bind(this),className:u,style:n?void 0:r({},o.Day,i)},t.date()))}}]),t}();f.defaultProps={theme:{Day:{}},onlyClasses:!1},f.propTypes={dayMoment:i.default.object.isRequired,onSelect:i.default.func,isSelected:i.default.bool,isInRange:i.default.bool,isPassive:i.default.bool,theme:i.default.shape({Day:i.default.object.isRequired}).isRequired,onlyClasses:i.default.bool,isSpecialDay:i.default.bool,classNames:i.default.object},t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=d(o),i=d(n(1)),u=d(n(7)),s=d(n(2)),c=n(3),f=d(n(8));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.styles=r.props.theme,r.selectedItem=r._getSelectedRange(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidUpdate",value:function(e,t){this.props.range!==e.range&&(this.selectedItem=this._getSelectedRange())}},{key:"_getSelectedRange",value:function(){var e=this.props,t=e.ranges,n=e.range;return Object.keys(t).find(function(e){var r=t[e];return n.startDate.isSame(r.startDate,"day")&&n.endDate.isSame(r.endDate,"day")})}},{key:"handleSelect",value:function(e,t){t.preventDefault(),this.selectedItem=e;var n=this.props.ranges[e];this.props.onSelect({startDate:(0,s.default)(n.startDate,null,"startOf"),endDate:(0,s.default)(n.endDate,null,"endOf")})}},{key:"clickButton",value:function(e,t){e.preventDefault(),this.props.buttonHandlers[t]()}},{key:"renderRangeList",value:function(e){var t=this,n=this.props,a=n.ranges,o=n.onlyClasses,i=this.styles,s=!1;return Object.keys(a).map(function(n){var a,c=t.selectedItem===n;s=!s&&c;var f=r({},i.PredefinedRangesItem,s?i.PredefinedRangesItemActive:{}),d=(0,u.default)((p(a={},e.predefinedRangesItem,!0),p(a,e.predefinedRangesItemActive,s),a));return l.default.createElement("a",{href:"#",key:"range-"+n,className:d,style:o?void 0:f,onClick:function(e){return t.handleSelect(n,e)}},n)})}},{key:"renderRangeButtons",value:function(e){var t=this,n=this.props,a=n.style,o=n.onlyClasses,i=n.locale,u=r({},f.default.locale,i),s=this.styles,d="apply",p="cancel";return l.default.createElement("div",{className:c.defaultClasses.rangeButtonGroup},l.default.createElement("button",{className:e.applyButton,style:o?void 0:r({},s.RangeApplyButton,a),type:"button",onClick:function(e){return t.clickButton(e,d)}},u.applyLabel),l.default.createElement("button",{className:e.cancelButton,style:o?void 0:r({},s.RangeCancelButton,a),onClick:function(e){return t.clickButton(e,p)},type:"button"},u.cancelLabel))}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.onlyClasses,a=e.classNames,o=this.styles,i=r({},c.defaultClasses,a);return l.default.createElement("div",{style:n?void 0:r({},o.PredefinedRanges,t),className:i.predefinedRanges},this.renderRangeList(i),this.renderRangeButtons(i))}}]),t}();h.defaultProps={onlyClasses:!1,classNames:{}},h.propTypes={ranges:i.default.object.isRequired,onlyClasses:i.default.bool,classNames:i.default.object},t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"]}},function(e,t,n){"use strict";
/** @license React v16.5.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),a=n(19),o=n(20);function l(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,a,o,l,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,l,i],s=0;(e=Error(t.replace(/%s/g,function(){return u[s++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}r||l("227");var i=!1,u=null,s=!1,c=null,f={onError:function(e){i=!0,u=e}};function d(e,t,n,r,a,o,l,s,c){i=!1,u=null,function(e,t,n,r,a,o,l,i,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}.apply(f,arguments)}var p=null,h={};function m(){if(p)for(var e in h){var t=h[e],n=p.indexOf(e);if(-1<n||l("96",e),!v[n])for(var r in t.extractEvents||l("97",e),v[n]=t,n=t.eventTypes){var a=void 0,o=n[r],i=t,u=r;g.hasOwnProperty(u)&&l("99",u),g[u]=o;var s=o.phasedRegistrationNames;if(s){for(a in s)s.hasOwnProperty(a)&&y(s[a],i,u);a=!0}else o.registrationName?(y(o.registrationName,i,u),a=!0):a=!1;a||l("98",r,e)}}}function y(e,t,n){b[e]&&l("100",e),b[e]=t,k[e]=t.eventTypes[n].dependencies}var v=[],g={},b={},k={},w=null,x=null,C=null;function _(e,t,n,r){t=e.type||"unknown-event",e.currentTarget=C(r),function(e,t,n,r,a,o,f,p,h){if(d.apply(this,arguments),i){if(i){var m=u;i=!1,u=null}else l("198"),m=void 0;s||(s=!0,c=m)}}(t,n,void 0,e),e.currentTarget=null}function E(e,t){return null==t&&l("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function S(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var T=null;function D(e,t){if(e){var n=e._dispatchListeners,r=e._dispatchInstances;if(Array.isArray(n))for(var a=0;a<n.length&&!e.isPropagationStopped();a++)_(e,t,n[a],r[a]);else n&&_(e,t,n,r);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function P(e){return D(e,!0)}function O(e){return D(e,!1)}var M={injectEventPluginOrder:function(e){p&&l("101"),p=Array.prototype.slice.call(e),m()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];h.hasOwnProperty(t)&&h[t]===r||(h[t]&&l("102",t),h[t]=r,n=!0)}n&&m()}};function N(e,t){var n=e.stateNode;if(!n)return null;var r=w(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&l("231",t,typeof n),n)}function R(e,t){if(null!==e&&(T=E(T,e)),e=T,T=null,e&&(S(e,t?P:O),T&&l("95"),s))throw t=c,s=!1,c=null,t}var A=Math.random().toString(36).slice(2),j="__reactInternalInstance$"+A,I="__reactEventHandlers$"+A;function F(e){if(e[j])return e[j];for(;!e[j];){if(!e.parentNode)return null;e=e.parentNode}return 7===(e=e[j]).tag||8===e.tag?e:null}function U(e){return!(e=e[j])||7!==e.tag&&8!==e.tag?null:e}function L(e){if(7===e.tag||8===e.tag)return e.stateNode;l("33")}function z(e){return e[I]||null}function B(e){do{e=e.return}while(e&&7!==e.tag);return e||null}function W(e,t,n){(t=N(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=E(n._dispatchListeners,t),n._dispatchInstances=E(n._dispatchInstances,e))}function V(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=B(t);for(t=n.length;0<t--;)W(n[t],"captured",e);for(t=0;t<n.length;t++)W(n[t],"bubbled",e)}}function Y(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=N(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=E(n._dispatchListeners,t),n._dispatchInstances=E(n._dispatchInstances,e))}function H(e){e&&e.dispatchConfig.registrationName&&Y(e._targetInst,null,e)}function K(e){S(e,V)}var Q=!("undefined"==typeof window||!window.document||!window.document.createElement);function q(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $={animationend:q("Animation","AnimationEnd"),animationiteration:q("Animation","AnimationIteration"),animationstart:q("Animation","AnimationStart"),transitionend:q("Transition","TransitionEnd")},X={},G={};function J(e){if(X[e])return X[e];if(!$[e])return e;var t,n=$[e];for(t in n)if(n.hasOwnProperty(t)&&t in G)return X[e]=n[t];return e}Q&&(G=document.createElement("div").style,"AnimationEvent"in window||(delete $.animationend.animation,delete $.animationiteration.animation,delete $.animationstart.animation),"TransitionEvent"in window||delete $.transitionend.transition);var Z=J("animationend"),ee=J("animationiteration"),te=J("animationstart"),ne=J("transitionend"),re="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ae=null,oe=null,le=null;function ie(){if(le)return le;var e,t,n=oe,r=n.length,a="value"in ae?ae.value:ae.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return le=a.slice(e,1<t?1-t:void 0)}function ue(){return!0}function se(){return!1}function ce(e,t,n,r){for(var a in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(a)&&((t=e[a])?this[a]=t(n):"target"===a?this.target=r:this[a]=n[a]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ue:se,this.isPropagationStopped=se,this}function fe(e,t,n,r){if(this.eventPool.length){var a=this.eventPool.pop();return this.call(a,e,t,n,r),a}return new this(e,t,n,r)}function de(e){e instanceof this||l("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function pe(e){e.eventPool=[],e.getPooled=fe,e.release=de}a(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ue)},persist:function(){this.isPersistent=ue},isPersistent:se,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=se,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return a(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=a({},r.Interface,e),n.extend=r.extend,pe(n),n},pe(ce);var he=ce.extend({data:null}),me=ce.extend({data:null}),ye=[9,13,27,32],ve=Q&&"CompositionEvent"in window,ge=null;Q&&"documentMode"in document&&(ge=document.documentMode);var be=Q&&"TextEvent"in window&&!ge,ke=Q&&(!ve||ge&&8<ge&&11>=ge),we=String.fromCharCode(32),xe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Ce=!1;function _e(e,t){switch(e){case"keyup":return-1!==ye.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function Ee(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Se=!1;var Te={eventTypes:xe,extractEvents:function(e,t,n,r){var a=void 0,o=void 0;if(ve)e:{switch(e){case"compositionstart":a=xe.compositionStart;break e;case"compositionend":a=xe.compositionEnd;break e;case"compositionupdate":a=xe.compositionUpdate;break e}a=void 0}else Se?_e(e,n)&&(a=xe.compositionEnd):"keydown"===e&&229===n.keyCode&&(a=xe.compositionStart);return a?(ke&&"ko"!==n.locale&&(Se||a!==xe.compositionStart?a===xe.compositionEnd&&Se&&(o=ie()):(oe="value"in(ae=r)?ae.value:ae.textContent,Se=!0)),a=he.getPooled(a,t,n,r),o?a.data=o:null!==(o=Ee(n))&&(a.data=o),K(a),o=a):o=null,(e=be?function(e,t){switch(e){case"compositionend":return Ee(t);case"keypress":return 32!==t.which?null:(Ce=!0,we);case"textInput":return(e=t.data)===we&&Ce?null:e;default:return null}}(e,n):function(e,t){if(Se)return"compositionend"===e||!ve&&_e(e,t)?(e=ie(),le=oe=ae=null,Se=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ke&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=me.getPooled(xe.beforeInput,t,n,r)).data=e,K(t)):t=null,null===o?t:null===t?o:[o,t]}},De=null,Pe=null,Oe=null;function Me(e){if(e=x(e)){"function"!=typeof De&&l("280");var t=w(e.stateNode);De(e.stateNode,e.type,t)}}function Ne(e){Pe?Oe?Oe.push(e):Oe=[e]:Pe=e}function Re(){if(Pe){var e=Pe,t=Oe;if(Oe=Pe=null,Me(e),t)for(e=0;e<t.length;e++)Me(t[e])}}function Ae(e,t){return e(t)}function je(e,t,n){return e(t,n)}function Ie(){}var Fe=!1;function Ue(e,t){if(Fe)return e(t);Fe=!0;try{return Ae(e,t)}finally{Fe=!1,(null!==Pe||null!==Oe)&&(Ie(),Re())}}var Le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ze(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Le[e.type]:"textarea"===t}function Be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function We(e){if(!Q)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function Ve(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Ye(e){e._valueTracker||(e._valueTracker=function(e){var t=Ve(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function He(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ve(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}var Ke=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qe=/^(.*)[\\\/]/,qe="function"==typeof Symbol&&Symbol.for,$e=qe?Symbol.for("react.element"):60103,Xe=qe?Symbol.for("react.portal"):60106,Ge=qe?Symbol.for("react.fragment"):60107,Je=qe?Symbol.for("react.strict_mode"):60108,Ze=qe?Symbol.for("react.profiler"):60114,et=qe?Symbol.for("react.provider"):60109,tt=qe?Symbol.for("react.context"):60110,nt=qe?Symbol.for("react.async_mode"):60111,rt=qe?Symbol.for("react.forward_ref"):60112,at=qe?Symbol.for("react.placeholder"):60113,ot="function"==typeof Symbol&&Symbol.iterator;function lt(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=ot&&e[ot]||e["@@iterator"])?e:null}function it(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case nt:return"AsyncMode";case Ge:return"Fragment";case Xe:return"Portal";case Ze:return"Profiler";case Je:return"StrictMode";case at:return"Placeholder"}if("object"==typeof e){switch(e.$$typeof){case tt:return"Context.Consumer";case et:return"Context.Provider";case rt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef")}if("function"==typeof e.then&&(e=1===e._reactStatus?e._reactResult:null))return it(e)}return null}function ut(e){var t="";do{e:switch(e.tag){case 4:case 0:case 1:case 2:case 3:case 7:case 10:var n=e._debugOwner,r=e._debugSource,a=it(e.type),o=null;n&&(o=it(n.type)),n=a,a="",r?a=" (at "+r.fileName.replace(Qe,"")+":"+r.lineNumber+")":o&&(a=" (created by "+o+")"),o="\n    in "+(n||"Unknown")+a;break e;default:o=""}t+=o,e=e.return}while(e);return t}var st=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ct=Object.prototype.hasOwnProperty,ft={},dt={};function pt(e,t,n,r,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ht[e]=new pt(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ht[t]=new pt(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ht[e]=new pt(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ht[e]=new pt(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ht[e]=new pt(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){ht[e]=new pt(e,3,!0,e,null)}),["capture","download"].forEach(function(e){ht[e]=new pt(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){ht[e]=new pt(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){ht[e]=new pt(e,5,!1,e.toLowerCase(),null)});var mt=/[\-:]([a-z])/g;function yt(e){return e[1].toUpperCase()}function vt(e,t,n,r){var a=ht.hasOwnProperty(t)?ht[t]:null;(null!==a?0===a.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null===t||void 0===t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!ct.call(dt,e)||!ct.call(ft,e)&&(st.test(e)?dt[e]=!0:(ft[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function gt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function bt(e,t){var n=t.checked;return a({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function kt(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=gt(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function wt(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function xt(e,t){wt(e,t);var n=gt(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?_t(e,t.type,n):t.hasOwnProperty("defaultValue")&&_t(e,t.type,gt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ct(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function _t(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mt,yt);ht[t]=new pt(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mt,yt);ht[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mt,yt);ht[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),ht.tabIndex=new pt("tabIndex",1,!1,"tabindex",null);var Et={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function St(e,t,n){return(e=ce.getPooled(Et.change,e,t,n)).type="change",Ne(n),K(e),e}var Tt=null,Dt=null;function Pt(e){R(e,!1)}function Ot(e){if(He(L(e)))return e}function Mt(e,t){if("change"===e)return t}var Nt=!1;function Rt(){Tt&&(Tt.detachEvent("onpropertychange",At),Dt=Tt=null)}function At(e){"value"===e.propertyName&&Ot(Dt)&&Ue(Pt,e=St(Dt,e,Be(e)))}function jt(e,t,n){"focus"===e?(Rt(),Dt=n,(Tt=t).attachEvent("onpropertychange",At)):"blur"===e&&Rt()}function It(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ot(Dt)}function Ft(e,t){if("click"===e)return Ot(t)}function Ut(e,t){if("input"===e||"change"===e)return Ot(t)}Q&&(Nt=We("input")&&(!document.documentMode||9<document.documentMode));var Lt={eventTypes:Et,_isInputEventSupported:Nt,extractEvents:function(e,t,n,r){var a=t?L(t):window,o=void 0,l=void 0,i=a.nodeName&&a.nodeName.toLowerCase();if("select"===i||"input"===i&&"file"===a.type?o=Mt:ze(a)?Nt?o=Ut:(o=It,l=jt):(i=a.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(o=Ft),o&&(o=o(e,t)))return St(o,n,r);l&&l(e,a,t),"blur"===e&&(e=a._wrapperState)&&e.controlled&&"number"===a.type&&_t(a,"number",a.value)}},zt=ce.extend({view:null,detail:null}),Bt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Bt[e])&&!!t[e]}function Vt(){return Wt}var Yt=0,Ht=0,Kt=!1,Qt=!1,qt=zt.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Vt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Yt;return Yt=e.screenX,Kt?"mousemove"===e.type?e.screenX-t:0:(Kt=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Ht;return Ht=e.screenY,Qt?"mousemove"===e.type?e.screenY-t:0:(Qt=!0,0)}}),$t=qt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Gt={eventTypes:Xt,extractEvents:function(e,t,n,r){var a="mouseover"===e||"pointerover"===e,o="mouseout"===e||"pointerout"===e;if(a&&(n.relatedTarget||n.fromElement)||!o&&!a)return null;if(a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window,o?(o=t,t=(t=n.relatedTarget||n.toElement)?F(t):null):o=null,o===t)return null;var l=void 0,i=void 0,u=void 0,s=void 0;"mouseout"===e||"mouseover"===e?(l=qt,i=Xt.mouseLeave,u=Xt.mouseEnter,s="mouse"):"pointerout"!==e&&"pointerover"!==e||(l=$t,i=Xt.pointerLeave,u=Xt.pointerEnter,s="pointer");var c=null==o?a:L(o);if(a=null==t?a:L(t),(e=l.getPooled(i,o,n,r)).type=s+"leave",e.target=c,e.relatedTarget=a,(n=l.getPooled(u,t,n,r)).type=s+"enter",n.target=a,n.relatedTarget=c,r=t,o&&r)e:{for(a=r,s=0,l=t=o;l;l=B(l))s++;for(l=0,u=a;u;u=B(u))l++;for(;0<s-l;)t=B(t),s--;for(;0<l-s;)a=B(a),l--;for(;s--;){if(t===a||t===a.alternate)break e;t=B(t),a=B(a)}t=null}else t=null;for(a=t,t=[];o&&o!==a&&(null===(s=o.alternate)||s!==a);)t.push(o),o=B(o);for(o=[];r&&r!==a&&(null===(s=r.alternate)||s!==a);)o.push(r),r=B(r);for(r=0;r<t.length;r++)Y(t[r],"bubbled",e);for(r=o.length;0<r--;)Y(o[r],"captured",n);return[e,n]}},Jt=Object.prototype.hasOwnProperty;function Zt(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function en(e,t){if(Zt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Jt.call(t,n[r])||!Zt(e[n[r]],t[n[r]]))return!1;return!0}function tn(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 5===t.tag?2:3}function nn(e){2!==tn(e)&&l("188")}function rn(e){if(!(e=function(e){var t=e.alternate;if(!t)return 3===(t=tn(e))&&l("188"),1===t?null:e;for(var n=e,r=t;;){var a=n.return,o=a?a.alternate:null;if(!a||!o)break;if(a.child===o.child){for(var i=a.child;i;){if(i===n)return nn(a),e;if(i===r)return nn(a),t;i=i.sibling}l("188")}if(n.return!==r.return)n=a,r=o;else{i=!1;for(var u=a.child;u;){if(u===n){i=!0,n=a,r=o;break}if(u===r){i=!0,r=a,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=a;break}if(u===r){i=!0,r=o,n=a;break}u=u.sibling}i||l("189")}}n.alternate!==r&&l("190")}return 5!==n.tag&&l("188"),n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(7===t.tag||8===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var an=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),on=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ln=zt.extend({relatedTarget:null});function un(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var sn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn=zt.extend({key:function(e){if(e.key){var t=sn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=un(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cn[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Vt,charCode:function(e){return"keypress"===e.type?un(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?un(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),dn=qt.extend({dataTransfer:null}),pn=zt.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Vt}),hn=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),mn=qt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),yn=[["abort","abort"],[Z,"animationEnd"],[ee,"animationIteration"],[te,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ne,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vn={},gn={};function bn(e,t){var n=e[0],r="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:r,captured:r+"Capture"},dependencies:[n],isInteractive:t},vn[e]=t,gn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(e){bn(e,!0)}),yn.forEach(function(e){bn(e,!1)});var kn={eventTypes:vn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=gn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,r){var a=gn[e];if(!a)return null;switch(e){case"keypress":if(0===un(n))return null;case"keydown":case"keyup":e=fn;break;case"blur":case"focus":e=ln;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=qt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=dn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=pn;break;case Z:case ee:case te:e=an;break;case ne:e=hn;break;case"scroll":e=zt;break;case"wheel":e=mn;break;case"copy":case"cut":case"paste":e=on;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=$t;break;default:e=ce}return K(t=e.getPooled(a,t,n,r)),t}},wn=kn.isInteractiveTopLevelEventType,xn=[];function Cn(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r;for(r=n;r.return;)r=r.return;if(!(r=5!==r.tag?null:r.stateNode.containerInfo))break;e.ancestors.push(n),n=F(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var a=Be(e.nativeEvent);r=e.topLevelType;for(var o=e.nativeEvent,l=null,i=0;i<v.length;i++){var u=v[i];u&&(u=u.extractEvents(r,t,o,a))&&(l=E(l,u))}R(l,!1)}}var _n=!0;function En(e,t){if(!t)return null;var n=(wn(e)?Tn:Dn).bind(null,e);t.addEventListener(e,n,!1)}function Sn(e,t){if(!t)return null;var n=(wn(e)?Tn:Dn).bind(null,e);t.addEventListener(e,n,!0)}function Tn(e,t){je(Dn,e,t)}function Dn(e,t){if(_n){var n=Be(t);if(null===(n=F(n))||"number"!=typeof n.tag||2===tn(n)||(n=null),xn.length){var r=xn.pop();r.topLevelType=e,r.nativeEvent=t,r.targetInst=n,e=r}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Ue(Cn,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>xn.length&&xn.push(e)}}}var Pn={},On=0,Mn="_reactListenersID"+(""+Math.random()).slice(2);function Nn(e){return Object.prototype.hasOwnProperty.call(e,Mn)||(e[Mn]=On++,Pn[e[Mn]]={}),Pn[e[Mn]]}function Rn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function An(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jn(e,t){var n,r=An(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=An(r)}}function In(){for(var e=window,t=Rn();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=Rn(e.document)}return t}function Fn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var Un=Q&&"documentMode"in document&&11>=document.documentMode,Ln={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},zn=null,Bn=null,Wn=null,Vn=!1;function Yn(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Vn||null==zn||zn!==Rn(n)?null:("selectionStart"in(n=zn)&&Fn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Wn&&en(Wn,n)?null:(Wn=n,(e=ce.getPooled(Ln.select,Bn,e,t)).type="select",e.target=zn,K(e),e))}var Hn={eventTypes:Ln,extractEvents:function(e,t,n,r){var a,o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(a=!o)){e:{o=Nn(o),a=k.onSelect;for(var l=0;l<a.length;l++){var i=a[l];if(!o.hasOwnProperty(i)||!o[i]){o=!1;break e}}o=!0}a=!o}if(a)return null;switch(o=t?L(t):window,e){case"focus":(ze(o)||"true"===o.contentEditable)&&(zn=o,Bn=t,Wn=null);break;case"blur":Wn=Bn=zn=null;break;case"mousedown":Vn=!0;break;case"contextmenu":case"mouseup":case"dragend":return Vn=!1,Yn(n,r);case"selectionchange":if(Un)break;case"keydown":case"keyup":return Yn(n,r)}return null}};function Kn(e,t){return e=a({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(t.children))&&(e.children=t),e}function Qn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function qn(e,t){return null!=t.dangerouslySetInnerHTML&&l("91"),a({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $n(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&l("92"),Array.isArray(t)&&(1>=t.length||l("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:gt(n)}}function Xn(e,t){var n=gt(t.value),r=gt(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Gn(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}M.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w=z,x=U,C=L,M.injectEventPluginsByName({SimpleEventPlugin:kn,EnterLeaveEventPlugin:Gt,ChangeEventPlugin:Lt,SelectEventPlugin:Hn,BeforeInputEventPlugin:Te});var Jn={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Zn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function er(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Zn(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var tr=void 0,nr=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if(e.namespaceURI!==Jn.svg||"innerHTML"in e)e.innerHTML=t;else{for((tr=tr||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ar={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},or=["Webkit","ms","Moz","O"];function lr(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=n,o=t[n];a=null==o||"boolean"==typeof o||""===o?"":r||"number"!=typeof o||0===o||ar.hasOwnProperty(a)&&ar[a]?(""+o).trim():o+"px","float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(ar).forEach(function(e){or.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});var ir=a({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ur(e,t){t&&(ir[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&l("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&l("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||l("61")),null!=t.style&&"object"!=typeof t.style&&l("62",""))}function sr(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function cr(e,t){var n=Nn(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=k[t];for(var r=0;r<t.length;r++){var a=t[r];if(!n.hasOwnProperty(a)||!n[a]){switch(a){case"scroll":Sn("scroll",e);break;case"focus":case"blur":Sn("focus",e),Sn("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":We(a)&&Sn(a,e);break;case"invalid":case"submit":case"reset":break;default:-1===re.indexOf(a)&&En(a,e)}n[a]=!0}}}function fr(){}var dr=null,pr=null;function hr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function mr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}function yr(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function vr(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var gr=[],br=-1;function kr(e){0>br||(e.current=gr[br],gr[br]=null,br--)}function wr(e,t){gr[++br]=e.current,e.current=t}var xr={},Cr={current:xr},_r={current:!1},Er=xr;function Sr(e,t){var n=e.type.contextTypes;if(!n)return xr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Tr(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Dr(e){kr(_r),kr(Cr)}function Pr(e){kr(_r),kr(Cr)}function Or(e,t,n){Cr.current!==xr&&l("168"),wr(Cr,t),wr(_r,n)}function Mr(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())o in e||l("108",it(t)||"Unknown",o);return a({},n,r)}function Nr(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||xr,Er=Cr.current,wr(Cr,t),wr(_r,_r.current),!0}function Rr(e,t,n){var r=e.stateNode;r||l("169"),n?(t=Mr(e,t,Er),r.__reactInternalMemoizedMergedChildContext=t,kr(_r),kr(Cr),wr(Cr,t)):kr(_r),wr(_r,n)}var Ar=null,jr=null;function Ir(e){return function(t){try{return e(t)}catch(e){}}}function Fr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=null,this.index=0,this.ref=null,this.pendingProps=t,this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Ur(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Lr(e,t,n){var r=e.alternate;return null===r?((r=new Fr(e.tag,t,e.key,e.mode)).type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.effectTag=0,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null),r.childExpirationTime=e.childExpirationTime,r.expirationTime=t!==e.pendingProps?n:e.expirationTime,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,r.firstContextDependency=e.firstContextDependency,r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function zr(e,t,n){var r=e.type,a=e.key;e=e.props;var o=void 0;if("function"==typeof r)o=Ur(r)?2:4;else if("string"==typeof r)o=7;else e:switch(r){case Ge:return Br(e.children,t,n,a);case nt:o=10,t|=3;break;case Je:o=10,t|=2;break;case Ze:return(r=new Fr(15,e,a,4|t)).type=Ze,r.expirationTime=n,r;case at:o=16;break;default:if("object"==typeof r&&null!==r)switch(r.$$typeof){case et:o=12;break e;case tt:o=11;break e;case rt:o=13;break e;default:if("function"==typeof r.then){o=4;break e}}l("130",null==r?r:typeof r,"")}return(t=new Fr(o,e,a,t)).type=r,t.expirationTime=n,t}function Br(e,t,n,r){return(e=new Fr(9,e,r,t)).expirationTime=n,e}function Wr(e,t,n){return(e=new Fr(8,e,null,t)).expirationTime=n,e}function Vr(e,t,n){return(t=new Fr(6,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yr(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n>t?e.earliestPendingTime=t:e.latestPendingTime<t&&(e.latestPendingTime=t),Hr(t,e)}function Hr(e,t){var n=t.earliestSuspendedTime,r=t.latestSuspendedTime,a=t.earliestPendingTime,o=t.latestPingedTime;0===(a=0!==a?a:o)&&(0===e||r>e)&&(a=r),0!==(e=a)&&0!==n&&n<e&&(e=n),t.nextExpirationTimeToWorkOn=a,t.expirationTime=e}var Kr=!1;function Qr(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function qr(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function $r(e){return{expirationTime:e,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Xr(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function Gr(e,t){var n=e.alternate;if(null===n){var r=e.updateQueue,a=null;null===r&&(r=e.updateQueue=Qr(e.memoizedState))}else r=e.updateQueue,a=n.updateQueue,null===r?null===a?(r=e.updateQueue=Qr(e.memoizedState),a=n.updateQueue=Qr(n.memoizedState)):r=e.updateQueue=qr(a):null===a&&(a=n.updateQueue=qr(r));null===a||r===a?Xr(r,t):null===r.lastUpdate||null===a.lastUpdate?(Xr(r,t),Xr(a,t)):(Xr(r,t),a.lastUpdate=t)}function Jr(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=Qr(e.memoizedState):Zr(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function Zr(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=qr(t)),t}function ea(e,t,n,r,o,l){switch(n.tag){case 1:return"function"==typeof(e=n.payload)?e.call(l,r,o):e;case 3:e.effectTag=-1025&e.effectTag|64;case 0:if(null===(o="function"==typeof(e=n.payload)?e.call(l,r,o):e)||void 0===o)break;return a({},r,o);case 2:Kr=!0}return r}function ta(e,t,n,r,a){Kr=!1;for(var o=(t=Zr(e,t)).baseState,l=null,i=0,u=t.firstUpdate,s=o;null!==u;){var c=u.expirationTime;c>a?(null===l&&(l=u,o=s),(0===i||i>c)&&(i=c)):(s=ea(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=u:(t.lastEffect.nextEffect=u,t.lastEffect=u))),u=u.next}for(c=null,u=t.firstCapturedUpdate;null!==u;){var f=u.expirationTime;f>a?(null===c&&(c=u,null===l&&(o=s)),(0===i||i>f)&&(i=f)):(s=ea(e,0,u,s,n,r),null!==u.callback&&(e.effectTag|=32,u.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=u:(t.lastCapturedEffect.nextEffect=u,t.lastCapturedEffect=u))),u=u.next}null===l&&(t.lastUpdate=null),null===c?t.lastCapturedUpdate=null:e.effectTag|=32,null===l&&null===c&&(o=s),t.baseState=o,t.firstUpdate=l,t.firstCapturedUpdate=c,e.expirationTime=i,e.memoizedState=s}function na(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ra(t.firstEffect,n),t.firstEffect=t.lastEffect=null,ra(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function ra(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var r=t;"function"!=typeof n&&l("191",n),n.call(r)}e=e.nextEffect}}function aa(e,t){return{value:e,source:t,stack:ut(t)}}var oa={current:null},la=null,ia=null,ua=null;function sa(e,t){var n=e.type._context;wr(oa,n._currentValue),n._currentValue=t}function ca(e){var t=oa.current;kr(oa),e.type._context._currentValue=t}function fa(e){la=e,ua=ia=null,e.firstContextDependency=null}function da(e,t){return ua!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(ua=e,t=1073741823),t={context:e,observedBits:t,next:null},null===ia?(null===la&&l("277"),la.firstContextDependency=ia=t):ia=ia.next=t),e._currentValue}var pa={},ha={current:pa},ma={current:pa},ya={current:pa};function va(e){return e===pa&&l("174"),e}function ga(e,t){wr(ya,t),wr(ma,e),wr(ha,pa);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:er(null,"");break;default:t=er(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}kr(ha),wr(ha,t)}function ba(e){kr(ha),kr(ma),kr(ya)}function ka(e){va(ya.current);var t=va(ha.current),n=er(t,e.type);t!==n&&(wr(ma,e),wr(ha,n))}function wa(e){ma.current===e&&(kr(ha),kr(ma))}var xa=(new r.Component).refs;function Ca(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:a({},t,n),e.memoizedState=n,null!==(r=e.updateQueue)&&0===e.expirationTime&&(r.baseState=n)}var _a={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===tn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=ll(),a=$r(r=No(r,e));a.payload=t,void 0!==n&&null!==n&&(a.callback=n),Gr(e,a),Ro(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=ll(),a=$r(r=No(r,e));a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),Gr(e,a),Ro(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=ll(),r=$r(n=No(n,e));r.tag=2,void 0!==t&&null!==t&&(r.callback=t),Gr(e,r),Ro(e,n)}};function Ea(e,t,n,r,a,o,l){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!en(n,r)||!en(a,o))}function Sa(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_a.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,r){var a=e.stateNode,o=Tr(t)?Er:Cr.current;a.props=n,a.state=e.memoizedState,a.refs=xa,a.context=Sr(e,o),null!==(o=e.updateQueue)&&(ta(e,o,n,a,r),a.state=e.memoizedState),"function"==typeof(o=t.getDerivedStateFromProps)&&(Ca(e,t,o,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&_a.enqueueReplaceState(a,a.state,null),null!==(o=e.updateQueue)&&(ta(e,o,n,a,r),a.state=e.memoizedState)),"function"==typeof a.componentDidMount&&(e.effectTag|=4)}var Da=Array.isArray;function Pa(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){var r=void 0;(n=n._owner)&&(2!==n.tag&&3!==n.tag&&l("110"),r=n.stateNode),r||l("147",e);var a=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===a?t.ref:((t=function(e){var t=r.refs;t===xa&&(t=r.refs={}),null===e?delete t[a]:t[a]=e})._stringRef=a,t)}"string"!=typeof e&&l("284"),n._owner||l("254",e)}return e}function Oa(e,t){"textarea"!==e.type&&l("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function Ma(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t,n){return(e=Lr(e,t,n)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function i(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,n,r){return null===t||8!==t.tag?((t=Wr(n,e.mode,r)).return=e,t):((t=a(t,n,r)).return=e,t)}function s(e,t,n,r){return null!==t&&t.type===n.type?((r=a(t,n.props,r)).ref=Pa(e,t,n),r.return=e,r):((r=zr(n,e.mode,r)).ref=Pa(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||6!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Vr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[],r)).return=e,t)}function f(e,t,n,r,o){return null===t||9!==t.tag?((t=Br(n,e.mode,r,o)).return=e,t):((t=a(t,n,r)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Wr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case $e:return(n=zr(t,e.mode,n)).ref=Pa(e,null,t),n.return=e,n;case Xe:return(t=Vr(t,e.mode,n)).return=e,t}if(Da(t)||lt(t))return(t=Br(t,e.mode,n,null)).return=e,t;Oa(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==a?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case $e:return n.key===a?n.type===Ge?f(e,t,n.props.children,r,a):s(e,t,n,r):null;case Xe:return n.key===a?c(e,t,n,r):null}if(Da(n)||lt(n))return null!==a?null:f(e,t,n,r,null);Oa(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case $e:return e=e.get(null===r.key?n:r.key)||null,r.type===Ge?f(t,e,r.props.children,a,r.key):s(t,e,r,a);case Xe:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a)}if(Da(r)||lt(r))return f(t,e=e.get(n)||null,r,a,null);Oa(t,r)}return null}function m(a,l,i,u){for(var s=null,c=null,f=l,m=l=0,y=null;null!==f&&m<i.length;m++){f.index>m?(y=f,f=null):y=f.sibling;var v=p(a,f,i[m],u);if(null===v){null===f&&(f=y);break}e&&f&&null===v.alternate&&t(a,f),l=o(v,l,m),null===c?s=v:c.sibling=v,c=v,f=y}if(m===i.length)return n(a,f),s;if(null===f){for(;m<i.length;m++)(f=d(a,i[m],u))&&(l=o(f,l,m),null===c?s=f:c.sibling=f,c=f);return s}for(f=r(a,f);m<i.length;m++)(y=h(f,a,m,i[m],u))&&(e&&null!==y.alternate&&f.delete(null===y.key?m:y.key),l=o(y,l,m),null===c?s=y:c.sibling=y,c=y);return e&&f.forEach(function(e){return t(a,e)}),s}function y(a,i,u,s){var c=lt(u);"function"!=typeof c&&l("150"),null==(u=c.call(u))&&l("151");for(var f=c=null,m=i,y=i=0,v=null,g=u.next();null!==m&&!g.done;y++,g=u.next()){m.index>y?(v=m,m=null):v=m.sibling;var b=p(a,m,g.value,s);if(null===b){m||(m=v);break}e&&m&&null===b.alternate&&t(a,m),i=o(b,i,y),null===f?c=b:f.sibling=b,f=b,m=v}if(g.done)return n(a,m),c;if(null===m){for(;!g.done;y++,g=u.next())null!==(g=d(a,g.value,s))&&(i=o(g,i,y),null===f?c=g:f.sibling=g,f=g);return c}for(m=r(a,m);!g.done;y++,g=u.next())null!==(g=h(m,a,y,g.value,s))&&(e&&null!==g.alternate&&m.delete(null===g.key?y:g.key),i=o(g,i,y),null===f?c=g:f.sibling=g,f=g);return e&&m.forEach(function(e){return t(a,e)}),c}return function(e,r,o,u){var s="object"==typeof o&&null!==o&&o.type===Ge&&null===o.key;s&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case $e:e:{for(c=o.key,s=r;null!==s;){if(s.key===c){if(9===s.tag?o.type===Ge:s.type===o.type){n(e,s.sibling),(r=a(s,o.type===Ge?o.props.children:o.props,u)).ref=Pa(e,s,o),r.return=e,e=r;break e}n(e,s);break}t(e,s),s=s.sibling}o.type===Ge?((r=Br(o.props.children,e.mode,u,o.key)).return=e,e=r):((u=zr(o,e.mode,u)).ref=Pa(e,r,o),u.return=e,e=u)}return i(e);case Xe:e:{for(s=o.key;null!==r;){if(r.key===s){if(6===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=a(r,o.children||[],u)).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Vr(o,e.mode,u)).return=e,e=r}return i(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&8===r.tag?(n(e,r.sibling),(r=a(r,o,u)).return=e,e=r):(n(e,r),(r=Wr(o,e.mode,u)).return=e,e=r),i(e);if(Da(o))return m(e,r,o,u);if(lt(o))return y(e,r,o,u);if(c&&Oa(e,o),void 0===o&&!s)switch(e.tag){case 2:case 3:case 0:l("152",(u=e.type).displayName||u.name||"Component")}return n(e,r)}}var Na=Ma(!0),Ra=Ma(!1),Aa=null,ja=null,Ia=!1;function Fa(e,t){var n=new Fr(7,null,null,0);n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Ua(e,t){switch(e.tag){case 7:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 8:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function La(e){if(Ia){var t=ja;if(t){var n=t;if(!Ua(e,t)){if(!(t=yr(n))||!Ua(e,t))return e.effectTag|=2,Ia=!1,void(Aa=e);Fa(Aa,n)}Aa=e,ja=vr(t)}else e.effectTag|=2,Ia=!1,Aa=e}}function za(e){for(e=e.return;null!==e&&7!==e.tag&&5!==e.tag;)e=e.return;Aa=e}function Ba(e){if(e!==Aa)return!1;if(!Ia)return za(e),Ia=!0,!1;var t=e.type;if(7!==e.tag||"head"!==t&&"body"!==t&&!mr(t,e.memoizedProps))for(t=ja;t;)Fa(e,t),t=yr(t);return za(e),ja=Aa?yr(e.stateNode):null,!0}function Wa(){ja=Aa=null,Ia=!1}var Va=Ke.ReactCurrentOwner;function Ya(e,t,n,r){t.child=null===e?Ra(t,null,n,r):Na(t,e.child,n,r)}function Ha(e,t,n,r,a){n=n.render;var o=t.ref;return _r.current||t.memoizedProps!==r||o!==(null!==e?e.ref:null)?(Ya(e,t,n=n(r,o),a),t.memoizedProps=r,t.child):Ja(e,t,a)}function Ka(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Qa(e,t,n,r,a){var o=Tr(n)?Er:Cr.current;return o=Sr(t,o),fa(t),n=n(r,o),t.effectTag|=1,Ya(e,t,n,a),t.memoizedProps=r,t.child}function qa(e,t,n,r,a){if(Tr(n)){var o=!0;Nr(t)}else o=!1;if(fa(t),null===e)if(null===t.stateNode){var l=Tr(n)?Er:Cr.current,i=n.contextTypes,u=null!==i&&void 0!==i,s=new n(r,i=u?Sr(t,l):xr);t.memoizedState=null!==s.state&&void 0!==s.state?s.state:null,s.updater=_a,t.stateNode=s,s._reactInternalFiber=t,u&&((u=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=l,u.__reactInternalMemoizedMaskedChildContext=i),Ta(t,n,r,a),r=!0}else{l=t.stateNode,i=t.memoizedProps,l.props=i;var c=l.context;u=Sr(t,u=Tr(n)?Er:Cr.current);var f=n.getDerivedStateFromProps;(s="function"==typeof f||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i!==r||c!==u)&&Sa(t,l,r,u),Kr=!1;var d=t.memoizedState;c=l.state=d;var p=t.updateQueue;null!==p&&(ta(t,p,r,l,a),c=t.memoizedState),i!==r||d!==c||_r.current||Kr?("function"==typeof f&&(Ca(t,n,f,r),c=t.memoizedState),(i=Kr||Ea(t,n,i,r,d,c,u))?(s||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||("function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"==typeof l.componentDidMount&&(t.effectTag|=4)):("function"==typeof l.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=i):("function"==typeof l.componentDidMount&&(t.effectTag|=4),r=!1)}else l=t.stateNode,i=t.memoizedProps,l.props=i,c=l.context,u=Sr(t,u=Tr(n)?Er:Cr.current),(s="function"==typeof(f=n.getDerivedStateFromProps)||"function"==typeof l.getSnapshotBeforeUpdate)||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||(i!==r||c!==u)&&Sa(t,l,r,u),Kr=!1,c=t.memoizedState,d=l.state=c,null!==(p=t.updateQueue)&&(ta(t,p,r,l,a),d=t.memoizedState),i!==r||c!==d||_r.current||Kr?("function"==typeof f&&(Ca(t,n,f,r),d=t.memoizedState),(f=Kr||Ea(t,n,i,r,c,d,u))?(s||"function"!=typeof l.UNSAFE_componentWillUpdate&&"function"!=typeof l.componentWillUpdate||("function"==typeof l.componentWillUpdate&&l.componentWillUpdate(r,d,u),"function"==typeof l.UNSAFE_componentWillUpdate&&l.UNSAFE_componentWillUpdate(r,d,u)),"function"==typeof l.componentDidUpdate&&(t.effectTag|=4),"function"==typeof l.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof l.componentDidUpdate||i===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=u,r=f):("function"!=typeof l.componentDidUpdate||i===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=4),"function"!=typeof l.getSnapshotBeforeUpdate||i===e.memoizedProps&&c===e.memoizedState||(t.effectTag|=256),r=!1);return $a(e,t,n,r,o,a)}function $a(e,t,n,r,a,o){Ka(e,t);var l=0!=(64&t.effectTag);if(!r&&!l)return a&&Rr(t,n,!1),Ja(e,t,o);r=t.stateNode,Va.current=t;var i=l?null:r.render();return t.effectTag|=1,null!==e&&l&&(Ya(e,t,null,o),t.child=null),Ya(e,t,i,o),t.memoizedState=r.state,t.memoizedProps=r.props,a&&Rr(t,n,!0),t.child}function Xa(e){var t=e.stateNode;t.pendingContext?Or(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Or(0,t.context,!1),ga(e,t.containerInfo)}function Ga(e,t){if(e&&e.defaultProps)for(var n in t=a({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}function Ja(e,t,n){null!==e&&(t.firstContextDependency=e.firstContextDependency);var r=t.childExpirationTime;if(0===r||r>n)return null;if(null!==e&&t.child!==e.child&&l("153"),null!==t.child){for(n=Lr(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Lr(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Za(e,t,n){var r=t.expirationTime;if(!_r.current&&(0===r||r>n)){switch(t.tag){case 5:Xa(t),Wa();break;case 7:ka(t);break;case 2:Tr(t.type)&&Nr(t);break;case 3:Tr(t.type._reactResult)&&Nr(t);break;case 6:ga(t,t.stateNode.containerInfo);break;case 12:sa(t,t.memoizedProps.value)}return Ja(e,t,n)}switch(t.expirationTime=0,t.tag){case 4:return function(e,t,n,r){null!==e&&l("155");var a=t.pendingProps;if("object"==typeof n&&null!==n&&"function"==typeof n.then){var o=n=function(e){switch(e._reactStatus){case 1:return e._reactResult;case 2:throw e._reactResult;case 0:throw e;default:throw e._reactStatus=0,e.then(function(t){if(0===e._reactStatus){if(e._reactStatus=1,"object"==typeof t&&null!==t){var n=t.default;t=void 0!==n&&null!==n?n:t}e._reactResult=t}},function(t){0===e._reactStatus&&(e._reactStatus=2,e._reactResult=t)}),e}}(n);o="function"==typeof o?Ur(o)?3:1:void 0!==o&&null!==o&&o.$$typeof?14:4,o=t.tag=o;var i=Ga(n,a);switch(o){case 1:return Qa(e,t,n,i,r);case 3:return qa(e,t,n,i,r);case 14:return Ha(e,t,n,i,r);default:l("283",n)}}if(o=Sr(t,Cr.current),fa(t),o=n(a,o),t.effectTag|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){t.tag=2,Tr(n)?(i=!0,Nr(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null;var u=n.getDerivedStateFromProps;return"function"==typeof u&&Ca(t,n,u,a),o.updater=_a,t.stateNode=o,o._reactInternalFiber=t,Ta(t,n,a,r),$a(e,t,n,!0,i,r)}return t.tag=0,Ya(e,t,o,r),t.memoizedProps=a,t.child}(e,t,t.type,n);case 0:return Qa(e,t,t.type,t.pendingProps,n);case 1:var a=t.type._reactResult;return e=Qa(e,t,a,Ga(a,r=t.pendingProps),n),t.memoizedProps=r,e;case 2:return qa(e,t,t.type,t.pendingProps,n);case 3:return e=qa(e,t,a=t.type._reactResult,Ga(a,r=t.pendingProps),n),t.memoizedProps=r,e;case 5:return Xa(t),null===(r=t.updateQueue)&&l("282"),a=null!==(a=t.memoizedState)?a.element:null,ta(t,r,t.pendingProps,null,n),(r=t.memoizedState.element)===a?(Wa(),t=Ja(e,t,n)):(a=t.stateNode,(a=(null===e||null===e.child)&&a.hydrate)&&(ja=vr(t.stateNode.containerInfo),Aa=t,a=Ia=!0),a?(t.effectTag|=2,t.child=Ra(t,null,r,n)):(Ya(e,t,r,n),Wa()),t=t.child),t;case 7:ka(t),null===e&&La(t),r=t.type,a=t.pendingProps;var o=null!==e?e.memoizedProps:null,i=a.children;return mr(r,a)?i=null:null!==o&&mr(r,o)&&(t.effectTag|=16),Ka(e,t),1073741823!==n&&1&t.mode&&a.hidden?(t.expirationTime=1073741823,t.memoizedProps=a,t=null):(Ya(e,t,i,n),t.memoizedProps=a,t=t.child),t;case 8:return null===e&&La(t),t.memoizedProps=t.pendingProps,null;case 16:return null;case 6:return ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Na(t,null,r,n):Ya(e,t,r,n),t.memoizedProps=r,t.child;case 13:return Ha(e,t,t.type,t.pendingProps,n);case 14:return e=Ha(e,t,a=t.type._reactResult,Ga(a,r=t.pendingProps),n),t.memoizedProps=r,e;case 9:return Ya(e,t,r=t.pendingProps,n),t.memoizedProps=r,t.child;case 10:return Ya(e,t,r=t.pendingProps.children,n),t.memoizedProps=r,t.child;case 15:return Ya(e,t,(r=t.pendingProps).children,n),t.memoizedProps=r,t.child;case 12:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,t.memoizedProps=a,sa(t,o),null!==i){var u=i.value;if(0===(o=u===o&&(0!==u||1/u==1/o)||u!=u&&o!=o?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,o):1073741823))){if(i.children===a.children&&!_r.current){t=Ja(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){if(null!==(u=i.firstContextDependency))do{if(u.context===r&&0!=(u.observedBits&o)){if(2===i.tag||3===i.tag){var s=$r(n);s.tag=2,Gr(i,s)}(0===i.expirationTime||i.expirationTime>n)&&(i.expirationTime=n),null!==(s=i.alternate)&&(0===s.expirationTime||s.expirationTime>n)&&(s.expirationTime=n);for(var c=i.return;null!==c;){if(s=c.alternate,0===c.childExpirationTime||c.childExpirationTime>n)c.childExpirationTime=n,null!==s&&(0===s.childExpirationTime||s.childExpirationTime>n)&&(s.childExpirationTime=n);else{if(null===s||!(0===s.childExpirationTime||s.childExpirationTime>n))break;s.childExpirationTime=n}c=c.return}}s=i.child,u=u.next}while(null!==u);else s=12===i.tag&&i.type===t.type?null:i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===t){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}Ya(e,t,a.children,n),t=t.child}return t;case 11:return o=t.type,a=(r=t.pendingProps).children,fa(t),a=a(o=da(o,r.unstable_observedBits)),t.effectTag|=1,Ya(e,t,a,n),t.memoizedProps=r,t.child;default:l("156")}}function eo(e){e.effectTag|=4}var to=void 0,no=void 0,ro=void 0;function ao(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ut(n)),null!==n&&it(n.type),t=t.value,null!==e&&2===e.tag&&it(e.type);try{console.error(t)}catch(e){setTimeout(function(){throw e})}}function oo(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Mo(e,t)}else t.current=null}function lo(e){switch("function"==typeof jr&&jr(e),e.tag){case 2:case 3:oo(e);var t=e.stateNode;if("function"==typeof t.componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Mo(e,t)}break;case 7:oo(e);break;case 6:so(e)}}function io(e){return 7===e.tag||5===e.tag||6===e.tag}function uo(e){e:{for(var t=e.return;null!==t;){if(io(t)){var n=t;break e}t=t.return}l("160"),n=void 0}var r=t=void 0;switch(n.tag){case 7:t=n.stateNode,r=!1;break;case 5:case 6:t=n.stateNode.containerInfo,r=!0;break;default:l("161")}16&n.effectTag&&(rr(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||io(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;7!==n.tag&&8!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||6===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var a=e;;){if(7===a.tag||8===a.tag)if(n)if(r){var o=t,i=a.stateNode,u=n;8===o.nodeType?o.parentNode.insertBefore(i,u):o.insertBefore(i,u)}else t.insertBefore(a.stateNode,n);else r?(o=t,i=a.stateNode,8===o.nodeType?(u=o.parentNode).insertBefore(i,o):(u=o).appendChild(i),null===u.onclick&&(u.onclick=fr)):t.appendChild(a.stateNode);else if(6!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===e)break;for(;null===a.sibling;){if(null===a.return||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function so(e){for(var t=e,n=!1,r=void 0,a=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&l("160"),n.tag){case 7:r=n.stateNode,a=!1;break e;case 5:case 6:r=n.stateNode.containerInfo,a=!0;break e}n=n.return}n=!0}if(7===t.tag||8===t.tag){e:for(var o=t,i=o;;)if(lo(i),null!==i.child&&6!==i.tag)i.child.return=i,i=i.child;else{if(i===o)break;for(;null===i.sibling;){if(null===i.return||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}a?(o=r,i=t.stateNode,8===o.nodeType?o.parentNode.removeChild(i):o.removeChild(i)):r.removeChild(t.stateNode)}else if(6===t.tag?(r=t.stateNode.containerInfo,a=!0):lo(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;6===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function co(e,t){switch(t.tag){case 2:case 3:break;case 7:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,a=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[I]=r,"input"===e&&"radio"===r.type&&null!=r.name&&wt(n,r),sr(e,a),t=sr(e,r),a=0;a<o.length;a+=2){var i=o[a],u=o[a+1];"style"===i?lr(n,u):"dangerouslySetInnerHTML"===i?nr(n,u):"children"===i?rr(n,u):vt(n,i,u,t)}switch(e){case"input":xt(n,r);break;case"textarea":Xn(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?Qn(n,!!r.multiple,o,!1):e!==!!r.multiple&&(null!=r.defaultValue?Qn(n,!!r.multiple,r.defaultValue,!0):Qn(n,!!r.multiple,r.multiple?[]:"",!1))}}}break;case 8:null===t.stateNode&&l("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 5:case 15:case 16:break;default:l("163")}}function fo(e,t,n){(n=$r(n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pl(r),ao(e,t)},n}function po(e,t,n){(n=$r(n)).tag=3;var r=e.stateNode;return null!==r&&"function"==typeof r.componentDidCatch&&(n.callback=function(){null===So?So=new Set([this]):So.add(this);var n=t.value,r=t.stack;ao(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function ho(e){switch(e.tag){case 2:Tr(e.type)&&Dr();var t=e.effectTag;return 1024&t?(e.effectTag=-1025&t|64,e):null;case 3:return Tr(e.type._reactResult)&&Dr(),1024&(t=e.effectTag)?(e.effectTag=-1025&t|64,e):null;case 5:return ba(),Pr(),0!=(64&(t=e.effectTag))&&l("285"),e.effectTag=-1025&t|64,e;case 7:return wa(e),null;case 16:return 1024&(t=e.effectTag)?(e.effectTag=-1025&t|64,e):null;case 6:return ba(),null;case 12:return ca(e),null;default:return null}}to=function(){},no=function(e,t,n,r,o){var l=e.memoizedProps;if(l!==r){var i=t.stateNode;switch(va(ha.current),e=null,n){case"input":l=bt(i,l),r=bt(i,r),e=[];break;case"option":l=Kn(i,l),r=Kn(i,r),e=[];break;case"select":l=a({},l,{value:void 0}),r=a({},r,{value:void 0}),e=[];break;case"textarea":l=qn(i,l),r=qn(i,r),e=[];break;default:"function"!=typeof l.onClick&&"function"==typeof r.onClick&&(i.onclick=fr)}ur(n,r),i=n=void 0;var u=null;for(n in l)if(!r.hasOwnProperty(n)&&l.hasOwnProperty(n)&&null!=l[n])if("style"===n){var s=l[n];for(i in s)s.hasOwnProperty(i)&&(u||(u={}),u[i]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(b.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in r){var c=r[n];if(s=null!=l?l[n]:void 0,r.hasOwnProperty(n)&&c!==s&&(null!=c||null!=s))if("style"===n)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(u||(u={}),u[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(u||(u={}),u[i]=c[i])}else u||(e||(e=[]),e.push(n,u)),u=c;else"dangerouslySetInnerHTML"===n?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(e=e||[]).push(n,""+c)):"children"===n?s===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(n,""+c):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(b.hasOwnProperty(n)?(null!=c&&cr(o,n),e||s===c||(e=[])):(e=e||[]).push(n,c))}u&&(e=e||[]).push("style",u),o=e,(t.updateQueue=o)&&eo(t)}},ro=function(e,t,n,r){n!==r&&eo(t)};var mo={readContext:da},yo=Ke.ReactCurrentOwner,vo=0,go=0,bo=!1,ko=null,wo=null,xo=0,Co=!1,_o=null,Eo=!1,So=null;function To(){if(null!==ko)for(var e=ko.return;null!==e;){var t=e;switch(t.tag){case 2:var n=t.type.childContextTypes;null!==n&&void 0!==n&&Dr();break;case 3:null!==(n=t.type._reactResult.childContextTypes)&&void 0!==n&&Dr();break;case 5:ba(),Pr();break;case 7:wa(t);break;case 6:ba();break;case 12:ca(t)}e=e.return}wo=null,xo=0,Co=!1,ko=null}function Do(e){for(;;){var t=e.alternate,n=e.return,r=e.sibling;if(0==(512&e.effectTag)){var o=t,i=(t=e).pendingProps;switch(t.tag){case 0:case 1:break;case 2:Tr(t.type)&&Dr();break;case 3:Tr(t.type._reactResult)&&Dr();break;case 5:ba(),Pr(),(i=t.stateNode).pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),null!==o&&null!==o.child||(Ba(t),t.effectTag&=-3),to(t);break;case 7:wa(t);var u=va(ya.current),s=t.type;if(null!==o&&null!=t.stateNode)no(o,t,s,i,u),o.ref!==t.ref&&(t.effectTag|=128);else if(i){var c=va(ha.current);if(Ba(t)){o=(i=t).stateNode;var f=i.type,d=i.memoizedProps,p=u;switch(o[j]=i,o[I]=d,s=void 0,u=f){case"iframe":case"object":En("load",o);break;case"video":case"audio":for(f=0;f<re.length;f++)En(re[f],o);break;case"source":En("error",o);break;case"img":case"image":case"link":En("error",o),En("load",o);break;case"form":En("reset",o),En("submit",o);break;case"details":En("toggle",o);break;case"input":kt(o,d),En("invalid",o),cr(p,"onChange");break;case"select":o._wrapperState={wasMultiple:!!d.multiple},En("invalid",o),cr(p,"onChange");break;case"textarea":$n(o,d),En("invalid",o),cr(p,"onChange")}for(s in ur(u,d),f=null,d)d.hasOwnProperty(s)&&(c=d[s],"children"===s?"string"==typeof c?o.textContent!==c&&(f=["children",c]):"number"==typeof c&&o.textContent!==""+c&&(f=["children",""+c]):b.hasOwnProperty(s)&&null!=c&&cr(p,s));switch(u){case"input":Ye(o),Ct(o,d,!0);break;case"textarea":Ye(o),Gn(o);break;case"select":case"option":break;default:"function"==typeof d.onClick&&(o.onclick=fr)}s=f,i.updateQueue=s,(i=null!==s)&&eo(t)}else{d=t,o=s,p=i,f=9===u.nodeType?u:u.ownerDocument,c===Jn.html&&(c=Zn(o)),c===Jn.html?"script"===o?((o=f.createElement("div")).innerHTML="<script><\/script>",f=o.removeChild(o.firstChild)):"string"==typeof p.is?f=f.createElement(o,{is:p.is}):(f=f.createElement(o),"select"===o&&p.multiple&&(f.multiple=!0)):f=f.createElementNS(c,o),(o=f)[j]=d,o[I]=i;e:for(d=o,p=t,f=p.child;null!==f;){if(7===f.tag||8===f.tag)d.appendChild(f.stateNode);else if(6!==f.tag&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===p)break;for(;null===f.sibling;){if(null===f.return||f.return===p)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}p=o;var h=u,m=sr(f=s,d=i);switch(f){case"iframe":case"object":En("load",p),u=d;break;case"video":case"audio":for(u=0;u<re.length;u++)En(re[u],p);u=d;break;case"source":En("error",p),u=d;break;case"img":case"image":case"link":En("error",p),En("load",p),u=d;break;case"form":En("reset",p),En("submit",p),u=d;break;case"details":En("toggle",p),u=d;break;case"input":kt(p,d),u=bt(p,d),En("invalid",p),cr(h,"onChange");break;case"option":u=Kn(p,d);break;case"select":p._wrapperState={wasMultiple:!!d.multiple},u=a({},d,{value:void 0}),En("invalid",p),cr(h,"onChange");break;case"textarea":$n(p,d),u=qn(p,d),En("invalid",p),cr(h,"onChange");break;default:u=d}ur(f,u),c=void 0;var y=f,v=p,g=u;for(c in g)if(g.hasOwnProperty(c)){var k=g[c];"style"===c?lr(v,k):"dangerouslySetInnerHTML"===c?null!=(k=k?k.__html:void 0)&&nr(v,k):"children"===c?"string"==typeof k?("textarea"!==y||""!==k)&&rr(v,k):"number"==typeof k&&rr(v,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(b.hasOwnProperty(c)?null!=k&&cr(h,c):null!=k&&vt(v,c,k,m))}switch(f){case"input":Ye(p),Ct(p,d,!1);break;case"textarea":Ye(p),Gn(p);break;case"option":null!=d.value&&p.setAttribute("value",""+gt(d.value));break;case"select":(u=p).multiple=!!d.multiple,null!=(p=d.value)?Qn(u,!!d.multiple,p,!1):null!=d.defaultValue&&Qn(u,!!d.multiple,d.defaultValue,!0);break;default:"function"==typeof u.onClick&&(p.onclick=fr)}(i=hr(s,i))&&eo(t),t.stateNode=o}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&l("166");break;case 8:o&&null!=t.stateNode?ro(o,t,o.memoizedProps,i):("string"!=typeof i&&(null===t.stateNode&&l("166")),o=va(ya.current),va(ha.current),Ba(t)?(s=(i=t).stateNode,o=i.memoizedProps,s[j]=i,(i=s.nodeValue!==o)&&eo(t)):(s=t,(i=(9===o.nodeType?o:o.ownerDocument).createTextNode(i))[j]=s,t.stateNode=i));break;case 13:case 14:case 16:case 9:case 10:case 15:break;case 6:ba(),to(t);break;case 12:ca(t);break;case 11:break;case 4:l("167");default:l("156")}if(t=ko=null,i=e,1073741823===xo||1073741823!==i.childExpirationTime){for(s=0,o=i.child;null!==o;)u=o.expirationTime,d=o.childExpirationTime,(0===s||0!==u&&u<s)&&(s=u),(0===s||0!==d&&d<s)&&(s=d),o=o.sibling;i.childExpirationTime=s}if(null!==t)return t;null!==n&&0==(512&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=ho(e)))return e.effectTag&=511,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=512)}if(null!==r)return r;if(null===n)break;e=n}return null}function Po(e){var t=Za(e.alternate,e,xo);return null===t&&(t=Do(e)),yo.current=null,t}function Oo(e,t,n){bo&&l("243"),bo=!0,yo.currentDispatcher=mo;var r=e.nextExpirationTimeToWorkOn;r===xo&&e===wo&&null!==ko||(To(),xo=r,ko=Lr((wo=e).current,null,xo),e.pendingCommitExpirationTime=0);for(var a=!1;;){try{if(t)for(;null!==ko&&!dl();)ko=Po(ko);else for(;null!==ko;)ko=Po(ko)}catch(e){if(null===ko)a=!0,pl(e);else{null===ko&&l("271");var o=ko,i=o.return;if(null!==i){e:{var u=i,s=o,c=e;i=xo,s.effectTag|=512,s.firstEffect=s.lastEffect=null,Co=!0,c=aa(c,s);do{switch(u.tag){case 5:u.effectTag|=1024,u.expirationTime=i,Jr(u,i=fo(u,c,i));break e;case 2:case 3:s=c;var f=u.stateNode;if(0==(64&u.effectTag)&&null!==f&&"function"==typeof f.componentDidCatch&&(null===So||!So.has(f))){u.effectTag|=1024,u.expirationTime=i,Jr(u,i=po(u,s,i));break e}}u=u.return}while(null!==u)}ko=Do(o);continue}a=!0,pl(e)}}break}if(bo=!1,ua=ia=la=yo.currentDispatcher=null,a)wo=null,e.finishedWork=null;else if(null!==ko)e.finishedWork=null;else{if(null===(t=e.current.alternate)&&l("281"),wo=null,Co){if(a=e.latestPendingTime,o=e.latestSuspendedTime,i=e.latestPingedTime,0!==a&&a>r||0!==o&&o>r||0!==i&&i>r)return e.didError=!1,0!==(n=e.latestPingedTime)&&n<=r&&(e.latestPingedTime=0),n=e.earliestPendingTime,t=e.latestPendingTime,n===r?e.earliestPendingTime=t===r?e.latestPendingTime=0:t:t===r&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,t=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=r:n>r?e.earliestSuspendedTime=r:t<r&&(e.latestSuspendedTime=r),Hr(r,e),void(e.expirationTime=e.expirationTime);if(!e.didError&&!n)return e.didError=!0,e.nextExpirationTimeToWorkOn=r,r=e.expirationTime=1,void(e.expirationTime=r)}e.pendingCommitExpirationTime=r,e.finishedWork=t}}function Mo(e,t){var n;e:{for(bo&&!Eo&&l("263"),n=e.return;null!==n;){switch(n.tag){case 2:case 3:var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromCatch||"function"==typeof r.componentDidCatch&&(null===So||!So.has(r))){Gr(n,e=po(n,e=aa(t,e),1)),Ro(n,1),n=void 0;break e}break;case 5:Gr(n,e=fo(n,e=aa(t,e),1)),Ro(n,1),n=void 0;break e}n=n.return}5===e.tag&&(Gr(e,n=fo(e,n=aa(t,e),1)),Ro(e,1)),n=void 0}return n}function No(e,t){return 0!==go?e=go:bo?e=Eo?1:xo:1&t.mode?(e=$o?2+10*(1+((e-2+15)/10|0)):2+25*(1+((e-2+500)/25|0)),null!==wo&&e===xo&&(e+=1)):e=1,$o&&(0===Wo||e>Wo)&&(Wo=e),e}function Ro(e,t){e:{(0===e.expirationTime||e.expirationTime>t)&&(e.expirationTime=t);var n=e.alternate;null!==n&&(0===n.expirationTime||n.expirationTime>t)&&(n.expirationTime=t);var r=e.return;if(null===r&&5===e.tag)e=e.stateNode;else{for(;null!==r;){if(n=r.alternate,(0===r.childExpirationTime||r.childExpirationTime>t)&&(r.childExpirationTime=t),null!==n&&(0===n.childExpirationTime||n.childExpirationTime>t)&&(n.childExpirationTime=t),null===r.return&&5===r.tag){e=r.stateNode;break e}r=r.return}e=null}}null!==e&&(!bo&&0!==xo&&t<xo&&To(),Yr(e,t),bo&&!Eo&&wo===e||(t=e,e=e.expirationTime,null===t.nextScheduledRoot?(t.expirationTime=e,null===Io?(jo=Io=t,t.nextScheduledRoot=t):(Io=Io.nextScheduledRoot=t).nextScheduledRoot=jo):(0===(n=t.expirationTime)||e<n)&&(t.expirationTime=e),Lo||(Qo?qo&&(zo=t,Bo=1,cl(t,1,!0)):1===e?sl(1,null):ol(t,e))),tl>el&&(tl=0,l("185")))}function Ao(e,t,n,r,a){var o=go;go=1;try{return e(t,n,r,a)}finally{go=o}}var jo=null,Io=null,Fo=0,Uo=void 0,Lo=!1,zo=null,Bo=0,Wo=0,Vo=!1,Yo=!1,Ho=null,Ko=null,Qo=!1,qo=!1,$o=!1,Xo=null,Go=o.unstable_now(),Jo=2+(Go/10|0),Zo=Jo,el=50,tl=0,nl=null,rl=1;function al(){Jo=2+((o.unstable_now()-Go)/10|0)}function ol(e,t){if(0!==Fo){if(t>Fo)return;null!==Uo&&o.unstable_cancelScheduledWork(Uo)}Fo=t,e=o.unstable_now()-Go,Uo=o.unstable_scheduleWork(ul,{timeout:10*(t-2)-e})}function ll(){return Lo?Zo:(il(),0!==Bo&&1073741823!==Bo||(al(),Zo=Jo),Zo)}function il(){var e=0,t=null;if(null!==Io)for(var n=Io,r=jo;null!==r;){var a=r.expirationTime;if(0===a){if((null===n||null===Io)&&l("244"),r===r.nextScheduledRoot){jo=Io=r.nextScheduledRoot=null;break}if(r===jo)jo=a=r.nextScheduledRoot,Io.nextScheduledRoot=a,r.nextScheduledRoot=null;else{if(r===Io){(Io=n).nextScheduledRoot=jo,r.nextScheduledRoot=null;break}n.nextScheduledRoot=r.nextScheduledRoot,r.nextScheduledRoot=null}r=n.nextScheduledRoot}else{if((0===e||a<e)&&(e=a,t=r),r===Io)break;if(1===e)break;n=r,r=r.nextScheduledRoot}}zo=t,Bo=e}function ul(e){if(e.didTimeout&&null!==jo){al();var t=jo;do{var n=t.expirationTime;0!==n&&Jo>=n&&(t.nextExpirationTimeToWorkOn=Jo),t=t.nextScheduledRoot}while(t!==jo)}sl(0,e)}function sl(e,t){if(Ko=t,il(),null!==Ko)for(al(),Zo=Jo;null!==zo&&0!==Bo&&(0===e||e>=Bo)&&(!Vo||Jo>=Bo);)cl(zo,Bo,Jo>=Bo),il(),al(),Zo=Jo;else for(;null!==zo&&0!==Bo&&(0===e||e>=Bo);)cl(zo,Bo,!0),il();if(null!==Ko&&(Fo=0,Uo=null),0!==Bo&&ol(zo,Bo),Ko=null,Vo=!1,tl=0,nl=null,null!==Xo)for(e=Xo,Xo=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){Yo||(Yo=!0,Ho=e)}}if(Yo)throw e=Ho,Ho=null,Yo=!1,e}function cl(e,t,n){if(Lo&&l("245"),Lo=!0,null===Ko||n){var r=e.finishedWork;null!==r?fl(e,r,t):(e.finishedWork=null,Oo(e,!1,n),null!==(r=e.finishedWork)&&fl(e,r,t))}else null!==(r=e.finishedWork)?fl(e,r,t):(e.finishedWork=null,Oo(e,!0,n),null!==(r=e.finishedWork)&&(dl()?e.finishedWork=r:fl(e,r,t)));Lo=!1}function fl(e,t,n){var r=e.firstBatch;if(null!==r&&r._expirationTime<=n&&(null===Xo?Xo=[r]:Xo.push(r),r._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===nl?tl++:(nl=e,tl=0),Eo=bo=!0,e.current===t&&l("177"),0===(n=e.pendingCommitExpirationTime)&&l("261"),e.pendingCommitExpirationTime=0,r=t.expirationTime;var a=t.childExpirationTime;if(r=0===r||0!==a&&a<r?a:r,e.didError=!1,0===r?(e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0):(0!==(a=e.latestPendingTime)&&(a<r?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime<r&&(e.earliestPendingTime=e.latestPendingTime)),0===(a=e.earliestSuspendedTime)?Yr(e,r):r>e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,Yr(e,r)):r<a&&Yr(e,r)),Hr(0,e),yo.current=null,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,r=t.firstEffect):r=t:r=t.firstEffect,dr=_n,Fn(a=In())){if("selectionStart"in a)var o={start:a.selectionStart,end:a.selectionEnd};else e:{var i=(o=(o=a.ownerDocument)&&o.defaultView||window).getSelection&&o.getSelection();if(i&&0!==i.rangeCount){o=i.anchorNode;var u=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{o.nodeType,s.nodeType}catch(e){o=null;break e}var c=0,f=-1,d=-1,p=0,h=0,m=a,y=null;t:for(;;){for(var v;m!==o||0!==u&&3!==m.nodeType||(f=c+u),m!==s||0!==i&&3!==m.nodeType||(d=c+i),3===m.nodeType&&(c+=m.nodeValue.length),null!==(v=m.firstChild);)y=m,m=v;for(;;){if(m===a)break t;if(y===o&&++p===u&&(f=c),y===s&&++h===i&&(d=c),null!==(v=m.nextSibling))break;y=(m=y).parentNode}m=v}o=-1===f||-1===d?null:{start:f,end:d}}else o=null}o=o||{start:0,end:0}}else o=null;for(pr={focusedElem:a,selectionRange:o},_n=!1,_o=r;null!==_o;){a=!1,o=void 0;try{for(;null!==_o;){if(256&_o.effectTag){var g=_o.alternate;e:switch(u=_o,u.tag){case 2:case 3:if(256&u.effectTag&&null!==g){var b=g.memoizedProps,k=g.memoizedState,w=u.stateNode;w.props=u.memoizedProps,w.state=u.memoizedState;var x=w.getSnapshotBeforeUpdate(b,k);w.__reactInternalSnapshotBeforeUpdate=x}break e;case 5:case 7:case 8:case 6:break e;default:l("163")}}_o=_o.nextEffect}}catch(e){a=!0,o=e}a&&(null===_o&&l("178"),Mo(_o,o),null!==_o&&(_o=_o.nextEffect))}for(_o=r;null!==_o;){g=!1,b=void 0;try{for(;null!==_o;){var C=_o.effectTag;if(16&C&&rr(_o.stateNode,""),128&C){var _=_o.alternate;if(null!==_){var E=_.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(14&C){case 2:uo(_o),_o.effectTag&=-3;break;case 6:uo(_o),_o.effectTag&=-3,co(_o.alternate,_o);break;case 4:co(_o.alternate,_o);break;case 8:so(k=_o),k.return=null,k.child=null,k.alternate&&(k.alternate.child=null,k.alternate.return=null)}_o=_o.nextEffect}}catch(e){g=!0,b=e}g&&(null===_o&&l("178"),Mo(_o,b),null!==_o&&(_o=_o.nextEffect))}if(E=pr,_=In(),C=E.focusedElem,b=E.selectionRange,_!==C&&C&&C.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(C.ownerDocument.documentElement,C)){null!==b&&Fn(C)&&(_=b.start,void 0===(E=b.end)&&(E=_),"selectionStart"in C?(C.selectionStart=_,C.selectionEnd=Math.min(E,C.value.length)):(_=((g=C.ownerDocument||document)&&g.defaultView||window).getSelection(),k=C.textContent.length,E=Math.min(b.start,k),b=void 0===b.end?E:Math.min(b.end,k),!_.extend&&E>b&&(k=b,b=E,E=k),k=jn(C,E),w=jn(C,b),k&&w&&(1!==_.rangeCount||_.anchorNode!==k.node||_.anchorOffset!==k.offset||_.focusNode!==w.node||_.focusOffset!==w.offset)&&((g=g.createRange()).setStart(k.node,k.offset),_.removeAllRanges(),E>b?(_.addRange(g),_.extend(w.node,w.offset)):(g.setEnd(w.node,w.offset),_.addRange(g))))),_=[];for(E=C;E=E.parentNode;)1===E.nodeType&&_.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof C.focus&&C.focus(),C=0;C<_.length;C++)(E=_[C]).element.scrollLeft=E.left,E.element.scrollTop=E.top}for(pr=null,_n=!!dr,dr=null,e.current=t,_o=r;null!==_o;){r=!1,C=void 0;try{for(_=n;null!==_o;){var S=_o.effectTag;if(36&S){var T=_o.alternate;switch(g=_,(E=_o).tag){case 2:case 3:var D=E.stateNode;if(4&E.effectTag)if(null===T)D.props=E.memoizedProps,D.state=E.memoizedState,D.componentDidMount();else{var P=T.memoizedProps,O=T.memoizedState;D.props=E.memoizedProps,D.state=E.memoizedState,D.componentDidUpdate(P,O,D.__reactInternalSnapshotBeforeUpdate)}var M=E.updateQueue;null!==M&&(D.props=E.memoizedProps,D.state=E.memoizedState,na(0,M,D));break;case 5:var N=E.updateQueue;if(null!==N){if(b=null,null!==E.child)switch(E.child.tag){case 7:b=E.child.stateNode;break;case 2:case 3:b=E.child.stateNode}na(0,N,b)}break;case 7:var R=E.stateNode;null===T&&4&E.effectTag&&hr(E.type,E.memoizedProps)&&R.focus();break;case 8:case 6:case 15:case 16:break;default:l("163")}}if(128&S){var A=_o.ref;if(null!==A){var j=_o.stateNode;switch(_o.tag){case 7:var I=j;break;default:I=j}"function"==typeof A?A(I):A.current=I}}var F=_o.nextEffect;_o.nextEffect=null,_o=F}}catch(e){r=!0,C=e}r&&(null===_o&&l("178"),Mo(_o,C),null!==_o&&(_o=_o.nextEffect))}bo=Eo=!1,"function"==typeof Ar&&Ar(t.stateNode),S=t.expirationTime,t=t.childExpirationTime,0===(t=0===S||0!==t&&t<S?t:S)&&(So=null),e.expirationTime=t,e.finishedWork=null}function dl(){return!!Vo||!(null===Ko||Ko.timeRemaining()>rl)&&(Vo=!0)}function pl(e){null===zo&&l("246"),zo.expirationTime=0,Yo||(Yo=!0,Ho=e)}function hl(e,t){var n=Qo;Qo=!0;try{return e(t)}finally{(Qo=n)||Lo||sl(1,null)}}function ml(e,t){if(Qo&&!qo){qo=!0;try{return e(t)}finally{qo=!1}}return e(t)}function yl(e,t,n){if($o)return e(t,n);Qo||Lo||0===Wo||(sl(Wo,null),Wo=0);var r=$o,a=Qo;Qo=$o=!0;try{return e(t,n)}finally{$o=r,(Qo=a)||Lo||sl(1,null)}}function vl(e,t,n,r,a){var o=t.current;return n=function(e){if(!e)return xr;e=e._reactInternalFiber;e:{(2!==tn(e)||2!==e.tag&&3!==e.tag)&&l("170");var t=e;do{switch(t.tag){case 5:t=t.stateNode.context;break e;case 2:if(Tr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}break;case 3:if(Tr(t.type._reactResult)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);l("171"),t=void 0}if(2===e.tag){var n=e.type;if(Tr(n))return Mr(e,n,t)}else if(3===e.tag&&Tr(n=e.type._reactResult))return Mr(e,n,t);return t}(n),null===t.context?t.context=n:t.pendingContext=n,t=a,(a=$r(r)).payload={element:e},null!==(t=void 0===t?null:t)&&(a.callback=t),Gr(o,a),Ro(o,r),r}function gl(e,t,n,r){var a=t.current;return vl(e,t,n,a=No(ll(),a),r)}function bl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 7:default:return e.child.stateNode}}function kl(e){var t=2+25*(1+((ll()-2+500)/25|0));t<=vo&&(t=vo+1),this._expirationTime=vo=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function wl(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function xl(e,t,n){e={current:t=new Fr(5,null,null,t?3:0),containerInfo:e,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Cl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function _l(e,t,n,r,a){Cl(n)||l("200");var o=n._reactRootContainer;if(o){if("function"==typeof a){var i=a;a=function(){var e=bl(o._internalRoot);i.call(e)}}null!=e?o.legacy_renderSubtreeIntoContainer(e,t,a):o.render(t,a)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new xl(e,!1,t)}(n,r),"function"==typeof a){var u=a;a=function(){var e=bl(o._internalRoot);u.call(e)}}ml(function(){null!=e?o.legacy_renderSubtreeIntoContainer(e,t,a):o.render(t,a)})}return bl(o._internalRoot)}function El(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Cl(t)||l("200"),function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Xe,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}De=function(e,t,n){switch(t){case"input":if(xt(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=z(r);a||l("90"),He(r),xt(r,a)}}}break;case"textarea":Xn(e,n);break;case"select":null!=(t=n.value)&&Qn(e,!!n.multiple,t,!1)}},kl.prototype.render=function(e){this._defer||l("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,r=new wl;return vl(e,t,null,n,r._onCommit),r},kl.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},kl.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||l("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var r=null,a=t;a!==this;)r=a,a=a._next;null===r&&l("251"),r._next=a._next,this._next=t,e.firstBatch=this}this._defer=!1,t=n,Lo&&l("253"),zo=e,Bo=t,cl(e,t,!0),sl(1,null),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},kl.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},wl.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},wl.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&l("191",n),n()}}},xl.prototype.render=function(e,t){var n=this._internalRoot,r=new wl;return null!==(t=void 0===t?null:t)&&r.then(t),gl(e,n,null,r._onCommit),r},xl.prototype.unmount=function(e){var t=this._internalRoot,n=new wl;return null!==(e=void 0===e?null:e)&&n.then(e),gl(null,t,null,n._onCommit),n},xl.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var r=this._internalRoot,a=new wl;return null!==(n=void 0===n?null:n)&&a.then(n),gl(t,r,e,a._onCommit),a},xl.prototype.createBatch=function(){var e=new kl(this),t=e._expirationTime,n=this._internalRoot,r=n.firstBatch;if(null===r)n.firstBatch=e,e._next=null;else{for(n=null;null!==r&&r._expirationTime<=t;)n=r,r=r._next;e._next=r,null!==n&&(n._next=e)}return e},Ae=hl,je=yl,Ie=function(){Lo||0===Wo||(sl(Wo,null),Wo=0)};var Sl={createPortal:El,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?l("188"):l("268",Object.keys(e))),e=null===(e=rn(t))?null:e.stateNode},hydrate:function(e,t,n){return _l(null,e,t,!0,n)},render:function(e,t,n){return _l(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){return(null==e||void 0===e._reactInternalFiber)&&l("38"),_l(e,t,n,!1,r)},unmountComponentAtNode:function(e){return Cl(e)||l("40"),!!e._reactRootContainer&&(ml(function(){_l(null,null,e,!1,function(){e._reactRootContainer=null})}),!0)},unstable_createPortal:function(){return El.apply(void 0,arguments)},unstable_batchedUpdates:hl,unstable_interactiveUpdates:yl,flushSync:function(e,t){Lo&&l("187");var n=Qo;Qo=!0;try{return Ao(e,t)}finally{Qo=n,sl(1,null)}},unstable_flushControlled:function(e){var t=Qo;Qo=!0;try{Ao(e)}finally{(Qo=t)||Lo||sl(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[U,L,z,M.injectEventPluginsByName,g,K,function(e){S(e,H)},Ne,Re,Dn,R]},unstable_createRoot:function(e,t){return Cl(e)||l("278"),new xl(e,!0,null!=t&&!0===t.hydrate)}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Ar=Ir(function(e){return t.onCommitFiberRoot(n,e)}),jr=Ir(function(e){return t.onCommitFiberUnmount(n,e)})}catch(e){}})(a({},e,{findHostInstanceByFiber:function(e){return null===(e=rn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:F,bundleType:0,version:"16.5.2",rendererPackageName:"react-dom"});var Tl={default:Sl},Dl=Tl&&Sl||Tl;e.exports=Dl.default||Dl},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,i=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(i[s]=n[s]);if(r){l=r(n);for(var c=0;c<l.length;c++)o.call(n,l[c])&&(i[l[c]]=n[l[c]])}}return i}},function(e,t,n){"use strict";e.exports=n(21)},function(e,t,n){"use strict";
/** @license React v16.5.2
 * schedule.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r=null,a=!1,o=!1,l="object"==typeof performance&&"function"==typeof performance.now,i={timeRemaining:l?function(){var e=m()-performance.now();return 0<e?e:0}:function(){var e=m()-Date.now();return 0<e?e:0},didTimeout:!1};function u(){if(!a){var e=r.timesOutAt;o?h():o=!0,p(c,e)}}function s(){var e=r,t=r.next;if(r===t)r=null;else{var n=r.previous;r=n.next=t,t.previous=n}e.next=e.previous=null,(e=e.callback)(i)}function c(e){a=!0,i.didTimeout=e;try{if(e)for(;null!==r;){var n=t.unstable_now();if(!(r.timesOutAt<=n))break;do{s()}while(null!==r&&r.timesOutAt<=n)}else if(null!==r)do{s()}while(null!==r&&0<m()-t.unstable_now())}finally{a=!1,null!==r?u():o=!1}}var f,d,p,h,m,y=Date,v="function"==typeof setTimeout?setTimeout:void 0,g="function"==typeof clearTimeout?clearTimeout:void 0,b="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,k="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){f=b(function(t){g(d),e(t)}),d=v(function(){k(f),e(t.unstable_now())},100)}if(l){var x=performance;t.unstable_now=function(){return x.now()}}else t.unstable_now=function(){return y.now()};if("undefined"==typeof window){var C=-1;p=function(e){C=setTimeout(e,0,!0)},h=function(){clearTimeout(C)},m=function(){return 0}}else if(window._schedMock){var _=window._schedMock;p=_[0],h=_[1],m=_[2]}else{"undefined"!=typeof console&&("function"!=typeof b&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof k&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var E=null,S=!1,T=-1,D=!1,P=!1,O=0,M=33,N=33;m=function(){return O};var R="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(e){if(e.source===window&&e.data===R){S=!1;var n=t.unstable_now();if(e=!1,0>=O-n){if(!(-1!==T&&T<=n))return void(D||(D=!0,w(A)));e=!0}if(T=-1,n=E,E=null,null!==n){P=!0;try{n(e)}finally{P=!1}}}},!1);var A=function(e){D=!1;var t=e-O+N;t<N&&M<N?(8>t&&(t=8),N=t<M?M:t):M=t,O=e+N,S||(S=!0,window.postMessage(R,"*"))};p=function(e,t){E=e,T=t,P?window.postMessage(R,"*"):D||(D=!0,w(A))},h=function(){E=null,S=!1,T=-1}}t.unstable_scheduleWork=function(e,n){var a=t.unstable_now();if(e={callback:e,timesOutAt:n=void 0!==n&&null!==n&&null!==n.timeout&&void 0!==n.timeout?a+n.timeout:a+5e3,next:null,previous:null},null===r)r=e.next=e.previous=e,u();else{a=null;var o=r;do{if(o.timesOutAt>n){a=o;break}o=o.next}while(o!==r);null===a?a=r:a===r&&(r=e,u()),(n=a.previous).next=a.previous=e,e.next=a,e.previous=n}return e},t.unstable_cancelScheduledWork=function(e){var t=e.next;if(null!==t){if(t===e)r=null;else{e===r&&(r=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=h(o),i=h(n(1)),u=h(n(2)),s=h(n(8)),c=n(4),f=n(3),d=h(n(9)),p=h(n(6));function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));y.call(n);var a=e.locale,o=e.date,l=e.format;n.locale=r({},s.default.locale,a);var i=(0,u.default)(o,l,"startOf");return n.state={selectedDate:i,show:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.props.date;n!==e.date&&this.setState({selectedDate:(0,u.default)(n,this.props.format,"startOf")})}},{key:"render",value:function(){var e=this.props,t=e.format,n=e.firstDayOfWeek,a=e.minDate,o=e.maxDate,i=e.classNames,u=e.iconElement,s=e.isEnable,c=r({},f.defaultClasses,i),h=this.state.show;return l.default.createElement("div",{className:"daterange-container"},l.default.createElement("div",{className:"daterange-label",onClick:this.show},l.default.createElement("input",{readOnly:!0,className:"input-text datepicker",type:"text",autoComplete:"off",value:this.dateText,disabled:!s}),u),l.default.createElement(d.default,{isOpening:h,onClose:this.close},l.default.createElement("div",{className:c.dateRange},l.default.createElement(p.default,{shownDate:this.state.selectedDate,format:t,firstDayOfWeek:n,minDate:a,maxDate:o,classNames:i,onChange:this.handleSelect,locale:this.locale}))))}},{key:"dateText",get:function(){var e=this.state.selectedDate;return e?""+e.format(this.props.format):""}}]),t}();m.propTypes={format:i.default.string,firstDayOfWeek:i.default.number,minDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),maxDate:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),classNames:i.default.object,onChange:i.default.func,onInit:i.default.func,locale:i.default.object,date:i.default.oneOfType([i.default.object,i.default.func,i.default.string]),iconElement:i.default.any,isEnable:i.default.bool},m.defaultProps={format:c.MomentFormat.default,iconElement:l.default.createElement("i",{className:"icon icon-calendar"}),isEnable:!0};var y=function(){var e=this;this.handleSelect=function(t){var n=e.props.onChange;n&&n(t),e.setState({selectedDate:t,show:!1})},this.show=function(){e.props.isEnable&&e.setState({show:!0})},this.close=function(){var t=e.props,n=t.date,r=t.format,a=(0,u.default)(n,r,"startOf");e.setState({show:!1,selectedDate:a})}};t.default=m}])});

/***/ }),

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
/*! exports provided: setSelectedBonusType, setSelectedBonusStatus, setSelectedBonusName, setBonusCodeList, setSelectedBonusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusType", function() { return setSelectedBonusType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusStatus", function() { return setSelectedBonusStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedBonusName", function() { return setSelectedBonusName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBonusCodeList", function() { return setBonusCodeList; });
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
/*! exports provided: FETCH_DATA, SET_GRID_DATA, SET_SELECTED_PRODUCT, SET_SELECTED_BRAND, SET_SELECTED_BASECURRENCY, SET_BASECURRENCY_LIST, SET_SELECTED_CURRENCY, TOGGLE_LOADER, CHANGE_IS_EXCLUDE_TEST, USER_GUIDE_CONTENT, SET_DATE_RANGE, GET_DATE_CONSTRAINT, CHANGE_IS_CONVERT_ALL, SET_SELECTED_STATUS, SET_SELECTED_PLATFORM, SET_SELECTED_LIVESTATUS, SET_USERNAME, SET_REQUEST_PARAM, SET_REPORT_TITLE, SET_PAGING_OPTION, SET_SORT_OPTION, SET_SETTING_DATA, SET_BONUS_NAME, SET_SELECTED_BONUS_TYPE, SET_SELECTED_BONUS_STATUS, SET_SELECTED_CLAIM_STATUS, SET_BONUS_CODE_LIST, SET_SELECTED_BONUS_CODE, SET_REASON_LIST */
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./www/js/source/reactpages/components/date-range/constants.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultOptions.js */ "./www/js/source/reactpages/components/date-range/defaultOptions.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Overlay */ "./www/js/source/reactpages/components/Overlay.jsx");
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
const setSelectedSummaryDate = data => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_SUMMARY_DATE"],
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
  setSelectedBonusName: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusName"],
  setSelectedBonusType: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusType"],
  setSelectedBonusStatus: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusStatus"],
  setSelectedClaimStatus: _jsroot_actions_claimAction__WEBPACK_IMPORTED_MODULE_5__["setSelectedClaimStatus"],
  setSelectedBonusCode: _jsroot_actions_bonusAction__WEBPACK_IMPORTED_MODULE_4__["setSelectedBonusCode"],
  setSelectedSummaryDate,
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
/*! exports provided: SET_REPORT_DATE, SET_GLOBAL_FILTER, SET_DETAIL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_BONUS_INFO_SUMMARY_DATA, SET_BONUS_INFO_DETAIL_DATA, SET_DROPDOWN_OPTIONS_DATA, SET_SELECTED_GROUP_BY_OPTION, SET_SELECTED_SUMMARY_DATE, SET_SUMMARY_SORT_INFO */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_SUMMARY_DATE", function() { return SET_SELECTED_SUMMARY_DATE; });
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
const SET_SELECTED_SUMMARY_DATE = 'SET_SELECTED_SUMMARY_DATE';
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
      groupBy: selectedGroupByOption
    };
    selectedGroupByOption === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_16__["GroupByOptionIds"].bonusCodeAndDate && setSummarySortInfo(_constants_gridConst__WEBPACK_IMPORTED_MODULE_15__["DefaultSummarySortInfoGroupByDate"]) || setSummarySortInfo(_constants_gridConst__WEBPACK_IMPORTED_MODULE_15__["DefaultSummarySortInfo"]);
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
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./www/js/source/reactpages/pages/report/bonusinfo/actions/index.js");
/* harmony import */ var _common_Widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Widget */ "./www/js/source/reactpages/pages/report/bonusinfo/components/common/Widget.jsx");
/* harmony import */ var _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/services/dataService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/dataService.js");
/* harmony import */ var _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../libs/services/queryService */ "./www/js/source/reactpages/pages/report/bonusinfo/libs/services/queryService.js");
/* harmony import */ var _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/gridConst */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/gridConst.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @9softstudio/react-grid */ "./node_modules/@9softstudio/react-grid/dist/index.js");
/* harmony import */ var _9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _9softstudio_react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @9softstudio/react-datepicker */ "./node_modules/@9softstudio/react-datepicker/dist/index.js");
/* harmony import */ var _9softstudio_react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_9softstudio_react_datepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jsroot/lib/numberFormat */ "./www/js/source/reactpages/lib/numberFormat.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
/* harmony import */ var _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/filterConsts */ "./www/js/source/reactpages/pages/report/bonusinfo/constants/filterConsts.js");
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
    bonusInfoDetailData,
    fetchBonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    setBonusCodeList,
    setSelectedBonusCode,
    selectedSummaryDate,
    setSelectedSummaryDate,
    setBonusInfoDetailData
  } = props;
  const [isLoading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [pagingOption, setPagingOption] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DefaultPagingOption"]);
  const [sortInfo, onSort] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DefaultDetailSortInfo"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!detailFilter || !selectedBonusCode || detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__["GroupByOptionIds"].bonusCodeAndDate && !selectedSummaryDate) {
      return;
    }
    _fetchData(null, null);
  }, [detailFilter, selectedBonusCode, selectedSummaryDate]);
  const _title = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(() => _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource('Details'), []);
  const _getBonusTypeId = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(bonusCode => {
    const bonusType = bonusInfoSummaryData.dataList.find(bonus => bonus.bonusCode === bonusCode);
    return bonusType ? bonusType.bonusTypeId : 0;
  }, [bonusInfoSummaryData]);
  const _handleExportExcel = () => {
    if (!selectedBonusCode) {
      return;
    }
    const date = detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__["GroupByOptionIds"].bonusCodeAndDate ? selectedSummaryDate : null;
    const dateRange = {
      fromDate: date ? date : detailFilter.fromDate,
      toDate: date ? date : detailFilter.toDate
    };
    const bonusTypeId = _getBonusTypeId(selectedBonusCode);
    const exportParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__["default"].getBonusInfoDetailExportAPIParams(detailFilter, sortInfo, dateRange, selectedBonusCode, bonusTypeId);
    _libs_services_queryService__WEBPACK_IMPORTED_MODULE_7__["default"].exportBonusInfoDetailData(exportParams);
  };
  const _fetchData = (pageIndex, pageSize, sort) => {
    const date = detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__["GroupByOptionIds"].bonusCodeAndDate ? selectedSummaryDate : null;
    const dateRange = {
      fromDate: date ? date : detailFilter.fromDate,
      toDate: date ? date : detailFilter.toDate
    };
    const bonusTypeId = _getBonusTypeId(selectedBonusCode);
    const apiParams = _libs_services_dataService__WEBPACK_IMPORTED_MODULE_6__["default"].getBonusInfoDetailAPIParams(detailFilter, {
      PageIndex: pageIndex || pagingOption.PageIndex,
      PageSize: pageSize || pagingOption.PageSize
    }, sort || sortInfo, dateRange, selectedBonusCode, bonusTypeId);
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
    const claimDateAtributes = {
      colWidth: 60,
      className: "center-align"
    };
    if (detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__["GroupByOptionIds"].bonusCode) {
      claimDateAtributes.sortBy = 2;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: detailFilter.groupBy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].userName].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].userName].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusCode].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusCode].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], claimDateAtributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].claimDate].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusAmountClaimed].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusAmountClaimed].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].transactionType].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].transactionType].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalDeposit].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalDeposit].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalWithdrawal].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalWithdrawal].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].status].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].status].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion].attributes, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion].name));
  };
  const _renderBody = () => {
    const data = [...bonusInfoDetailData.dataList];
    return data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].userName] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusCode] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].claimDate] + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].userName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].userName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusCode].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusCode]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].claimDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].claimDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusAmountClaimed].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_11__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].bonusAmountClaimed], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].transactionType].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].transactionType]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_11__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_11__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].status].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].status]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion].attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "progress-bar",
      role: "progressbar",
      "aria-valuenow": item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion],
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      style: {
        width: `${item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion] * 100}%`
      }
    }, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_11__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoDetailGridColumns"].completion] * 100, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"]), "%")))));
  };
  const _bonusOnChange = item => {
    setSelectedBonusCode(item.value);
    setPagingOption(_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DefaultPagingOption"]);
    onSort(_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DefaultDetailSortInfo"]);
  };
  const _renderBonusSelectList = () => {
    const listValue = bonusCodeList.map(function (item) {
      return {
        value: item,
        label: item
      };
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: selectedSummaryDate,
      instanceId: "bonusCodeList",
      value: selectedBonusCode,
      options: listValue,
      onChange: _bonusOnChange
    });
  };
  const _onChangeDateRange = date => {
    const dateString = date.format("DD-MMM-YYYY");
    const newDate = date.format("MM/DD/YYYY");
    const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => item.dateString === dateString && item.bonusCode).map(item => item.bonusCode);
    const uniqueBonusCodeList = bonusCodeList.filter((code, index, list) => list.indexOf(code) === index);
    setBonusCodeList(uniqueBonusCodeList);
    (uniqueBonusCodeList === null || uniqueBonusCodeList === void 0 ? void 0 : uniqueBonusCodeList.length) === 1 ? setSelectedBonusCode(uniqueBonusCodeList[0]) : setSelectedBonusCode(null);
    setSelectedSummaryDate(newDate);
    setBonusInfoDetailData(null);
  };
  const _renderDateFilter = () => {
    const iconElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      class: "icon icon-calendar"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_datepicker__WEBPACK_IMPORTED_MODULE_10__["DatePicker"], {
      key: selectedSummaryDate,
      onChange: _onChangeDateRange,
      iconElement: iconElement,
      date: selectedSummaryDate,
      minDate: dateRange.fromDate,
      maxDate: dateRange.toDate,
      isEnable: true
    });
  };
  const hasData = bonusInfoDetailData && bonusInfoDetailData.dataList.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Widget__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: _title,
    isLoading: isLoading,
    handleExportExcel: _handleExportExcel,
    hasData: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row bonus-filter"
  }, detailFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_13__["GroupByOptionIds"].bonusCodeAndDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-2 col-xl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Date")), _renderDateFilter())), bonusCodeList && bonusCodeList.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "label-text"
  }, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Bonus")), _renderBonusSelectList()))), hasData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sticky-box-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Table"], {
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
    bonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    selectedSummaryDate
  } = state;
  return Object.assign({}, {
    detailFilter,
    dateRange,
    bonusInfoSummaryData,
    bonusInfoDetailData,
    bonusCodeList,
    selectedBonusCode,
    selectedSummaryDate
  });
}
function mapDispatchToProps(dispatch) {
  const {
    fetchBonusInfoDetailData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSelectedSummaryDate,
    setBonusInfoDetailData
  } = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchBonusInfoDetailData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSelectedSummaryDate,
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
    setSelectedBonusCode,
    summaryGridHeight,
    setSummaryGridHeight,
    setSelectedSummaryDate,
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
      if (isSuccess && data.bonusCodeList) {
        setBonusCodeList(data.bonusCodeList);
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
    const selectedDate = new Date(Date.parse(date));
    const dateValue = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
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
    setSelectedSummaryDate(dateValue);
    setSummaryGridHeight(200);
  };
  const _renderHeader = () => {
    const claimStatusNumber = globalFilter.claimStatus.split(",").length;
    const claimStatusAtributes = {
      colWidth: 50 * claimStatusNumber,
      colSpan: claimStatusNumber,
      className: "center-align"
    };
    const gridHeader = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderRow"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: "header1"
    }, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName].attributes), {}, {
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
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes), {}, {
      rowSpan: 2
    }), _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["HeaderCell"], _objectSpread(_objectSpread({}, _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes), {}, {
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
    return data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      style: _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["StyleRow"],
      key: item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType] + item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date] + index
    }, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date].attributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => _dateClick(e, item.date, item.bonusCode)
    }, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].date])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusName]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode].attributes, globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate ? item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: e => _bonusCodeClick(e, item.bonusCode)
    }, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusCode])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusType]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].startDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].endDate]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus].attributes, item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].bonusStatus]), globalFilter.claimStatus.split(",").map((statusId, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]], 0));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(item[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"]))));
  };
  const _renderFooter = () => {
    const {
      totalData
    } = bonusInfoSummaryData;
    const totalAtributes = {
      colSpan: globalFilter.groupBy === _constants_filterConsts__WEBPACK_IMPORTED_MODULE_11__["GroupByOptionIds"].bonusCodeAndDate ? 7 : 6,
      className: "left-align"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Row"], {
      className: "fixed-table-grant-total",
      key: "totalRow"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], totalAtributes, _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleResource("Total")), globalFilter.claimStatus.split(",").map((statusId, i) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"][`claimStatus${statusId}`]], 0));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimants], 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalClaimedAmount], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].gGR], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalDeposit], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_9softstudio_react_grid__WEBPACK_IMPORTED_MODULE_9__["Cell"], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridConfig"][_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal].attributes, _jsroot_lib_numberFormat__WEBPACK_IMPORTED_MODULE_10__["default"].format(totalData[_constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["BonusInfoSummaryGridColumns"].totalWithdrawal], _constants_gridConst__WEBPACK_IMPORTED_MODULE_8__["DigitsAmount"])));
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
    selectedSummaryDate
  } = state;
  return Object.assign({}, {
    globalFilter,
    bonusInfoSummaryData,
    summaryGridHeight,
    selectedSummarySortInfo,
    selectedSummaryDate
  });
}
function mapDispatchToProps(dispatch) {
  const {
    fetchBonusInfoSummaryData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSummaryGridHeight,
    setSelectedSummaryDate,
    setSummarySortInfo,
    setBonusInfoDetailData
  } = _actions__WEBPACK_IMPORTED_MODULE_4__["default"];
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])({
    fetchBonusInfoSummaryData,
    setDetailFilter,
    setBonusCodeList,
    setSelectedBonusCode,
    setSummaryGridHeight,
    setSelectedSummaryDate,
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
  bonusCodeAndDate: 2
};
const GroupByOptions = [{
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("BonusCode"),
  value: GroupByOptionIds.bonusCode
}, {
  label: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource("Date"),
  value: GroupByOptionIds.bonusCodeAndDate
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
  brand: 'brandName',
  bonusName: 'bonusName',
  bonusCode: 'bonusCode',
  bonusType: 'bonusType',
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
  [BonusInfoDetailGridColumns.bonusCode]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusCode'),
    attributes: {
      colWidth: 120,
      className: "left-align"
    }
  },
  [BonusInfoDetailGridColumns.claimDate]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ClaimDate')
  },
  [BonusInfoDetailGridColumns.bonusAmountClaimed]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('BonusAmountClaimed'),
    attributes: {
      sortBy: 3,
      colWidth: 100,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.transactionType]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TransactionType'),
    attributes: {
      sortBy: 4,
      colWidth: 100,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.totalDeposit]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalDeposit'),
    attributes: {
      sortBy: 5,
      colWidth: 100,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.totalWithdrawal]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('TotalWithdrawal'),
    attributes: {
      sortBy: 6,
      colWidth: 100,
      className: "right-align"
    }
  },
  [BonusInfoDetailGridColumns.status]: {
    name: _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('ClaimStatus'),
    attributes: {
      sortBy: 7,
      colWidth: 80,
      className: "center-align"
    }
  },
  [BonusInfoDetailGridColumns.completion]: {
    name: '% ' + _jsroot_lib_langHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getSingleResource('Completion'),
    attributes: {
      sortBy: 8,
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
  sortbyId: 7,
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
_defineProperty(DataService, "getBonusInfoDetailAPIParams", (filterData, pagingOption, sortInfo, dateRange, bonusCode, bonusTypeId) => {
  const params = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, filterData), sortInfo), dateRange), {
    pageIndex: pagingOption.PageIndex,
    pageSize: pagingOption.PageSize
  }), {}, {
    bonusCode,
    bonusTypeId
  });
  return params;
});
_defineProperty(DataService, "getBonusInfoSummaryExportAPIParams", (filterData, sortInfo) => {
  const params = _objectSpread(_objectSpread({}, filterData), sortInfo);
  return params;
});
_defineProperty(DataService, "getBonusInfoDetailExportAPIParams", (filterData, sortInfo, dateRange, bonusCode, bonusTypeId) => {
  const params = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, filterData), sortInfo), dateRange), {}, {
    bonusCode,
    bonusTypeId
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
  var data = await QueryService.fetchData(() => _jsroot_lib_DataService__WEBPACK_IMPORTED_MODULE_0__["default"].getReportData(_constants_queryConst__WEBPACK_IMPORTED_MODULE_2__["Url"].bonusInfoSetting));
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
const selectedSummaryDate = Object(_jsroot_lib_createReducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
  [_actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_SUMMARY_DATE"]](state, action) {
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
  selectedSummaryDate,
  selectedSummarySortInfo,
  bonusCodeList: _jsroot_reducers_bonusReducer__WEBPACK_IMPORTED_MODULE_6__["bonusCodeList"],
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
/*! exports provided: selectedBonusStatus, selectedBonusType, selectedBonusName, bonusCodeList, selectedBonusCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusStatus", function() { return selectedBonusStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusType", function() { return selectedBonusType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedBonusName", function() { return selectedBonusName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonusCodeList", function() { return bonusCodeList; });
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
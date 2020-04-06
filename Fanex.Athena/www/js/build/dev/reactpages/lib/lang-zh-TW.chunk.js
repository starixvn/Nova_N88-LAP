/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/source/common/languages/ViewResources.zh-TW.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/source/common/languages/ViewResources.zh-TW.js":
/*!***************************************************************!*\
  !*** ./www/js/source/common/languages/ViewResources.zh-TW.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _window$_language_zh_;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generated at: 4/3/2020 4:49:28 PM
window._language_zh_TW = (_window$_language_zh_ = {
  AA: "客客",
  AbnormalBet: "非正規註單",
  AccessDeniedMsg: "對不起，您沒有權限訪問此頁面。",
  Account: "賬號",
  AccountManagement: "帳戶管理",
  Action: "動作",
  ActiveGroupConfirm: "Are you sure you want to {0} {1} ?",
  AD: "客和",
  Adjustment: "調整",
  AffiliateTransfer: "合作夥伴轉賬",
  AGCasino: "AG Casino",
  AGCasinoNotOfferCurrency: "AG Casino is not offered for this currency.",
  AH: "客主",
  Alert: "Alert",
  AlertChooseProductMsg: "請選擇至少一個產品",
  AlertInputOldPwdMsg: "請輸入舊密碼！",
  AlertPasswordEmptyMsg: "對不起，密碼不能空置!!!",
  AlertRemoveSpecialLevelForCustomerMsg: "即將刪除此會員的特殊級別。您，確定嗎?",
  AlertSetSpecialLevelForCustomerMsg: "您確定要設置此會員的特殊級別為 ?",
  AlertTurnOffBAMsg: "您確定要關閉BA？",
  AlertTurnOnBAMsg: "您確定要打開BA？",
  AlertUserNameMsg: "請輸入用戶名！",
  All: "全部",
  AllBetTypes: "所有投注類型",
  AllCurrencies: "所有貨幣",
  Amendment: "重新結算",
  Amount: "金額",
  AmountDue: "應付金額",
  AmountDueTo: "應付金額",
  AmountDueToCB: "應付金額至CB足彩",
  AmtDueTo: "Amt Due To",
  AmtDueToBA: "BA金額",
  AmtGreaterThan30kGBP: "金額≥ 30,000英鎊",
  AmtLessThan30kGBP: "金額&lt; 30,000英鎊",
  Apr: "四月",
  April: "四月",
  AreYouSure: "您確定要繼續嗎？",
  Asia: "亞洲",
  Aug: "八月",
  August: "八月",
  AvailableFunds: "可用資金",
  Away: "客隊",
  AwayNoBet: "客隊(不獲胜球隊)",
  BA: "BA",
  BackToCurrentReport: "回到現有報告",
  BACommission: "BA佣金",
  Balance: "餘額",
  BaseCurrency: "基礎貨幣",
  Based: "基於",
  BAStatus: "BA 狀態",
  BAUpdatedBy: "投注總計跟新由",
  BBAmtComm: "回購金額+即時兌現傭金",
  BetCount: "投注數",
  BetfromOthers: "其他",
  BetHistory: "Bet History",
  BetId: "投注單號",
  BetList: "投注歷史",
  BetListRunning: "投注歷史(進行中)",
  BetPlaced: "投注時間",
  BetSetting: "投注設定",
  BetSettingGroups: "Bet Setting Groups",
  BetSettings: "投注設定",
  BetTaken: "匹配時間",
  BettingLimit: "投注限額",
  BettingStatement: "投注詳情",
  BettingTicketCenter: "注單中心",
  BettingTicketCenter_AdvancedSearchTabNote1: "所有投注類別，聯賽和比賽過濾器僅支援1個選定日期",
  BettingTicketCenter_AdvancedSearchTabNote2: "顯示從{0}開始的資料",
  BettingTicketCenter_RefnoTabNote1: "在體育的搜尋結果將包含相關的紅利與現金注單",
  BettingTicketCenter_RefnoTabNote2: "{0}: 請提供用戶名以便查詢{1}之後的注單",
  BetType: "投注類別",
  BONTeamToScore: "雙方/一方/兩者皆不得分",
  Bonus: "紅利",
  BoughtAmount: "買入金額",
  BoughtDetails: "買入詳情",
  BoughtStake: "買入本金",
  BoughtTicketsList: "買入注單",
  BTCExportExcelMsg1: "您的搜尋結果超過系統設定的範圍.",
  BTCExportExcelMsg2: "請試著縮短日期範圍或是分別搜尋個別貨幣/投注類別等。",
  BuyBackAmount: "回購金額",
  ByBetType: "根據投注類型",
  ByCurrency: "根據貨幣",
  BySportsType: "根據運動類型",
  Cancel: "取消",
  CashOutAmount: "即時兌現金額",
  CashOutAmt: "兌現金額",
  CashOutCommission: "即時兌現佣金",
  CashOutDetails: "即時兌現詳情",
  CashOutNotOfferCurrency: "即時兌現不支援此貨幣",
  CashOutShare: "兌現分紅",
  CashOutStake: "即時兌現本金",
  CashOutTickets: "即時兌現注單",
  CashOutTicketsList: "即時兌現注單",
  CashOutTimes: "即時兌現次數",
  CashOutValue: "會員賣出的實際投注額",
  CashOutWinLoss: "即時兌現輸贏",
  CasinoTransfer: "娛樂城的總轉賬額",
  ChangePassword: "更改密碼",
  ChangeStatus: "更改{0}的狀態",
  ChangeStatusOfThisCustomerMsg: "您確定您要更換此會員的狀態嗎?",
  Checkavailability: "檢查可用性",
  China: "中國",
  Choice: "選擇",
  ChooseGroupMsg: "請選擇一個組",
  ChooseGroupNameMsg: "請選擇其他組名",
  CleanSheet: "零失球",
  ClearCurrentComm: "清除會員的佣金",
  Close: "關閉",
  Closed: "關閉",
  ClosingBalance: "期末餘額",
  Columns: "Columns",
  Comm: "佣金",
  CommIsClear: "會員的佣金已清空",
  Commission: "佣金",
  CommissionGroupList: "佣金組別列表",
  CommissionShare: "佣金",
  CommIsUnChange: "會員的佣金是不變的",
  Confirm: "確認",
  Confirmation: "確認",
  ConfirmCommission: "確認會員的佣金:",
  ConfirmPassword: "確認密碼",
  Content: "内容",
  ConvertAllFiguresToBaseCurrency: "將所有數據轉換為基礎貨幣",
  CopyBetSettingFromSoccer: "從足球複製所有投注設定",
  CorrectScore: "波膽",
  Country: "Country",
  Created_Date: "Created Date",
  CreatedDate: "創建日期",
  CreateNewGroup: "新增組",
  Creator: "Creator",
  CreditDebit: "貸記/借記",
  CS: "娛樂城",
  CSComm: "娛樂城佣金",
  Currency: "貨幣",
  Currentmonth: "本月",
  Currentweek: "本週",
  Customer: "會員",
  CustomerBalance: "會員餘額",
  CustomerBetList: "會員注單",
  CustomerComm: "會員傭金",
  CustomerHasNeverPlayed: "This customer has never played {0}.",
  CustomerList: "會員列表",
  CustomerLog: "會員日誌",
  CustomerNotBelongAnyGroupMsg: "選擇的會員不屬於任何一組",
  CustomerOption: "會員選項",
  CustomerPedingFunds: "會員待定資金",
  CustomerPedingFundsTitle: "會員待定資金 - {0}",
  Customers: "會員",
  CustomersBelongGroupsBeRemovedMsg: "只有屬於組的會員將從他們所屬的組中移除。",
  CustomerSetting: "會員設定",
  CustomersExistedinGroupMsg: "選擇的會員已經出現在此組",
  CustomerW_L: "會員輸贏",
  CustomerWinLoss: "會員輸贏",
  CustomerWinLossTitle: "會員輸贏，{0} --&gt; {1} - {2}",
  CustomerWinnings: "會員總贏",
  DA: "和客",
  Daily: "每日",
  DailyStatement: "每日賬目",
  DailyStatementMsg: "Support data up to 4 months only",
  Date: "日期",
  DateRange: "日期範圍",
  DateRangeNote: "數據可從{0:d MMM yyyy}查看",
  DD: "和和",
  Deactive: "Deactive",
  Dec: "十二月",
  December: "十二月",
  DecimalOdds: "歐洲盤賠率",
  DeepLink: "深度鏈結",
  DefaultGroup: "預設組",
  DefaultGroupMsg: "這是默認組。是否繼續?",
  Delete: "刪除",
  DeleteCommissionGroup: "刪除佣金群組",
  DeleteGroup: "刪除組",
  Deposit: "存款",
  Description: "Description",
  Details: "細節",
  DH: "和主",
  DisableAgCasino: "Disable AG Casino",
  DisableRNGCasino: "停用娛樂城",
  Dontshowagain: "不再顯示",
  DoubleChance: "雙重機會",
  Draw: "和局",
  DrawFilter: "和局篩選",
  DrawGame: "和局",
  DrawNoBet: "獲胜球隊(平局退款)",
  DrawNoDraw: "平局/不是和局",
  Edit: "編輯",
  EditAccount: "編輯賬號",
  Editedby: "編輯者",
  EditGroup: "編輯組別",
  EditSuccessMsg: "Host"
}, _defineProperty(_window$_language_zh_, "EditSuccessMsg", "&apos;{0}&apos; has been updated successfully. You will be redirected in &lt;span class=&apos;msec&apos;&gt;{1}&lt;/span&gt; seconds."), _defineProperty(_window$_language_zh_, "EffectiveBettingValue", "有效投注額"), _defineProperty(_window$_language_zh_, "EffectiveBettingValueNote", "有效投注額支援09/01/2014之後數據"), _defineProperty(_window$_language_zh_, "EnableAgCasino", "Enable AG Casino"), _defineProperty(_window$_language_zh_, "EnableCashOut", "開啟即時兌現"), _defineProperty(_window$_language_zh_, "EnableRNGCasino", "Enable RNG Casino"), _defineProperty(_window$_language_zh_, "EndDate", "結束日期"), _defineProperty(_window$_language_zh_, "Entered", "成績已輸入場數"), _defineProperty(_window$_language_zh_, "Error", "誤差"), _defineProperty(_window$_language_zh_, "ErrorProcessingMsg", "對不起，處理您的請求時有錯誤發生。"), _defineProperty(_window$_language_zh_, "Euro", "歐洲"), _defineProperty(_window$_language_zh_, "Event", "項目"), _defineProperty(_window$_language_zh_, "EventDate", "賽事日期"), _defineProperty(_window$_language_zh_, "ExcludeTestData", "排除測試數據"), _defineProperty(_window$_language_zh_, "ExportToExcel", "導出至Excel"), _defineProperty(_window$_language_zh_, "ExternalId", "外部ID"), _defineProperty(_window$_language_zh_, "ExternalIdOrSystemId", "外部識別或系統識別"), _defineProperty(_window$_language_zh_, "Fail", "失敗"), _defineProperty(_window$_language_zh_, "Feb", "二月"), _defineProperty(_window$_language_zh_, "February", "二月"), _defineProperty(_window$_language_zh_, "FGLG", "最先進球/最後進球"), _defineProperty(_window$_language_zh_, "FirstGoal", "最先進球"), _defineProperty(_window$_language_zh_, "FirstName", "名字"), _defineProperty(_window$_language_zh_, "Forecast", "預測"), _defineProperty(_window$_language_zh_, "ForecastAway", "客隊預測"), _defineProperty(_window$_language_zh_, "ForecastHome", "主隊預測"), _defineProperty(_window$_language_zh_, "Fr", "Fr"), _defineProperty(_window$_language_zh_, "FreePlay", "免費投注"), _defineProperty(_window$_language_zh_, "Freeze", "暫停更新"), _defineProperty(_window$_language_zh_, "Friday", "星期五"), _defineProperty(_window$_language_zh_, "From", "從"), _defineProperty(_window$_language_zh_, "Fromdate", "從日期"), _defineProperty(_window$_language_zh_, "FT", "全場"), _defineProperty(_window$_language_zh_, "Full", "全場"), _defineProperty(_window$_language_zh_, "FullTime", "全場"), _defineProperty(_window$_language_zh_, "Function", "功能"), _defineProperty(_window$_language_zh_, "FunctionDeniedMsg", "抱歉，你沒有許可權使用這功能"), _defineProperty(_window$_language_zh_, "GameKind", "遊戲種類"), _defineProperty(_window$_language_zh_, "GameType", "遊戲類型"), _defineProperty(_window$_language_zh_, "GameTypeName", "遊戲類型名稱"), _defineProperty(_window$_language_zh_, "General", "常規"), _defineProperty(_window$_language_zh_, "Go", "開始"), _defineProperty(_window$_language_zh_, "GoldDeluxeWinLossGuidelineContent", "在GMT-4下午4點之前的任何查詢將依據前一天下午4點的數據。您每次查詢可以過濾最多3個月內的數據。"), _defineProperty(_window$_language_zh_, "GotoCustomerList", "轉至會員名單"), _defineProperty(_window$_language_zh_, "GrandTotal", "累計"), _defineProperty(_window$_language_zh_, "Group", "組"), _defineProperty(_window$_language_zh_, "GroupBy", "分組方式"), _defineProperty(_window$_language_zh_, "GroupColor", "組別顏色"), _defineProperty(_window$_language_zh_, "GroupCommission", "佣金組別"), _defineProperty(_window$_language_zh_, "GroupCommNote", "若默認組已被選擇，所有新註冊之會員將被自動分配至此傭金組。這將不會對現有的會員進行任何更改。"), _defineProperty(_window$_language_zh_, "GroupId", "組別ID"), _defineProperty(_window$_language_zh_, "GroupName", "組別名稱"), _defineProperty(_window$_language_zh_, "GroupNameExistedMsg", "此組名稱已經存在，請嘗試另一個!"), _defineProperty(_window$_language_zh_, "GroupNameNotEmptyMsg", "組名稱不能空置"), _defineProperty(_window$_language_zh_, "GroupNameNotExceed100CharactersMsg", "組名稱不可超過100個字符"), _defineProperty(_window$_language_zh_, "GroupNameOnlyContainCharactersAndNumberMsg", "組名稱必須包含字符及數字而已"), _defineProperty(_window$_language_zh_, "GroupSetAsDefaultMsg", "另一組當前已設定為默認值。需要把此組設置為默認值?"), _defineProperty(_window$_language_zh_, "HA", "主客"), _defineProperty(_window$_language_zh_, "Half", "一半"), _defineProperty(_window$_language_zh_, "HalfTime", "半場"), _defineProperty(_window$_language_zh_, "Handicap", "讓球"), _defineProperty(_window$_language_zh_, "HandicapOverUnderLive", "讓球/大小/滾球"), _defineProperty(_window$_language_zh_, "HD", "主和"), _defineProperty(_window$_language_zh_, "HH", "主主"), _defineProperty(_window$_language_zh_, "hide", "隱藏"), _defineProperty(_window$_language_zh_, "HistoricalReportDateRangeNote", "只提供 {0:MM/dd/yyyy} 之後的資料。如果需要更多的歷史數據"), _defineProperty(_window$_language_zh_, "Home", "主隊"), _defineProperty(_window$_language_zh_, "HomeDrawAwayNoBet", "主隊(不獲胜球隊)/獲胜球隊(平局退款)/客隊(不獲胜球隊"), _defineProperty(_window$_language_zh_, "HomeNoBet", "主隊(不獲胜球隊)"), _defineProperty(_window$_language_zh_, "Host", "Host"), _defineProperty(_window$_language_zh_, "HTFT", "半場/全場"), _defineProperty(_window$_language_zh_, "HttpError_403", "訪問被拒絕"), _defineProperty(_window$_language_zh_, "HttpError_404", "頁面不存在，請檢查地址"), _defineProperty(_window$_language_zh_, "HttpError_Default", "Oops… 您在此處基於系統錯誤，請通知管理員"), _defineProperty(_window$_language_zh_, "Inactive", "Inactive"), _defineProperty(_window$_language_zh_, "IncludeDrawData", "包含和局資料"), _defineProperty(_window$_language_zh_, "IncorrectMaxBet", "不正確的最大投注"), _defineProperty(_window$_language_zh_, "IncorrectMaxPerBall", "不正確的單球最大投注"), _defineProperty(_window$_language_zh_, "IncorrectMaxPerMatch", "不正確的單場最大投注"), _defineProperty(_window$_language_zh_, "IncorrectMinBet", "不正確的最小投注"), _defineProperty(_window$_language_zh_, "InternalSystem", "內部系統"), _defineProperty(_window$_language_zh_, "InvalidCaptchaMsg", "您輸入了無效的編碼"), _defineProperty(_window$_language_zh_, "InvalidParams", "Invalid parameters"), _defineProperty(_window$_language_zh_, "InvalidRequestMsg", "請求無效"), _defineProperty(_window$_language_zh_, "InvalidRequestOrNotAuthorizedMsg", "無效的請求或您未被授權訪問所請求的資源"), _defineProperty(_window$_language_zh_, "InvalidStartGroupNameValidationMsg", "Group Name cannot start with &apos;starix&apos;"), _defineProperty(_window$_language_zh_, "IsNeutral", "(中)"), _defineProperty(_window$_language_zh_, "Jan", "一月"), _defineProperty(_window$_language_zh_, "January", "一月"), _defineProperty(_window$_language_zh_, "Jul", "七月"), _defineProperty(_window$_language_zh_, "July", "七月"), _defineProperty(_window$_language_zh_, "Jun", "六月"), _defineProperty(_window$_language_zh_, "June", "六月"), _defineProperty(_window$_language_zh_, "KeepCurrentComm", "保持當前的佣金"), _defineProperty(_window$_language_zh_, "Last", "最後"), _defineProperty(_window$_language_zh_, "LastBetsMonitoring", "最後投注監測"), _defineProperty(_window$_language_zh_, "LastGoal", "最後進球"), _defineProperty(_window$_language_zh_, "LastLogin", "最後登入"), _defineProperty(_window$_language_zh_, "Lastmonth", "上個月"), _defineProperty(_window$_language_zh_, "LastName", "姓"), _defineProperty(_window$_language_zh_, "LastTxn", "最後交易"), _defineProperty(_window$_language_zh_, "LastUpdatedBA", "投注總計最後更新"), _defineProperty(_window$_language_zh_, "LastUpdatedMsg", "最近更新的特殊級別"), _defineProperty(_window$_language_zh_, "Lastweek", "上週"), _defineProperty(_window$_language_zh_, "lbl1st", "第一名"), _defineProperty(_window$_language_zh_, "lbl1stHalf", "上半場"), _defineProperty(_window$_language_zh_, "lbl1stHandicap", "上半場亞洲盤"), _defineProperty(_window$_language_zh_, "lbl1stOver_Under", "半場大小盤"), _defineProperty(_window$_language_zh_, "lbl3WayHandicap", "三項讓分投注"), _defineProperty(_window$_language_zh_, "lbl7Over", "7或以上"), _defineProperty(_window$_language_zh_, "League", "聯賽"), _defineProperty(_window$_language_zh_, "Liability", "負債"), _defineProperty(_window$_language_zh_, "Licensee", "承租公司"), _defineProperty(_window$_language_zh_, "LicenseeComm", "承租公司傭金"), _defineProperty(_window$_language_zh_, "LicenseeNetWL", "承租公司淨輸贏"), _defineProperty(_window$_language_zh_, "LicenseeW_L", "承租公司輸贏"), _defineProperty(_window$_language_zh_, "LicenseeWinLoss", "承租公司輸贏"), _defineProperty(_window$_language_zh_, "LicenseeWL", "承租公司輸贏"), _defineProperty(_window$_language_zh_, "Live", "滾球"), _defineProperty(_window$_language_zh_, "LiveGame", "滾球遊戲"), _defineProperty(_window$_language_zh_, "LiveReport", "滾球報告"), _defineProperty(_window$_language_zh_, "LiveReportTitle", "Live Report - {0}, {1} --&gt; {2} - {3}"), _defineProperty(_window$_language_zh_, "LiveStatus", "滾球狀態"), _defineProperty(_window$_language_zh_, "LocationRestriction", "地點限制"), _defineProperty(_window$_language_zh_, "LocationRestrictionMsg", "限制直接訪問此網站。欲知詳情請聯繫{0}。"), _defineProperty(_window$_language_zh_, "LogDate", "登入日期"), _defineProperty(_window$_language_zh_, "LogID", "登入識別"), _defineProperty(_window$_language_zh_, "Login", "登錄"), _defineProperty(_window$_language_zh_, "LogInfo", "登入信息"), _defineProperty(_window$_language_zh_, "Logout", "註銷"), _defineProperty(_window$_language_zh_, "Lose", "輸"), _defineProperty(_window$_language_zh_, "LrfNotification", "LRF通知"), _defineProperty(_window$_language_zh_, "Main", "主"), _defineProperty(_window$_language_zh_, "ManageAccount", "賬號管理"), _defineProperty(_window$_language_zh_, "Management", "Management"), _defineProperty(_window$_language_zh_, "Mar", "三月"), _defineProperty(_window$_language_zh_, "March", "三月"), _defineProperty(_window$_language_zh_, "Margin", "利潤"), _defineProperty(_window$_language_zh_, "Market", "市場"), _defineProperty(_window$_language_zh_, "Match", "賽事"), _defineProperty(_window$_language_zh_, "MatchWinLoss", "球賽輸贏"), _defineProperty(_window$_language_zh_, "MatchWinLossTitle", "球賽輸贏, {0} - {1}"), _defineProperty(_window$_language_zh_, "MaxBet", "最高投注"), _defineProperty(_window$_language_zh_, "MaxBetCanNotGreaterThanMaxPerMatch", "最大投注不能大於單場最大投注"), _defineProperty(_window$_language_zh_, "MaxBetLessThanOrEqual", "最大投注必須小於或等於"), _defineProperty(_window$_language_zh_, "MaxBetMatchLessThanOrEqual", "最大單場最大投注必須小於或等於"), _defineProperty(_window$_language_zh_, "MaxBetMatchMoreThanOrEqual", "最大單場最大投注必須大於或等於"), _defineProperty(_window$_language_zh_, "MaxBetPerDraw", "單場最大限額"), _defineProperty(_window$_language_zh_, "MaxPerBall", "单粒球最高投注"), _defineProperty(_window$_language_zh_, "MaxPerBallLessThanOrEqual", "最大單球最大投注必須小於或等於"), _defineProperty(_window$_language_zh_, "MaxPerMatch", "單場限額"), _defineProperty(_window$_language_zh_, "May", "五月"), _defineProperty(_window$_language_zh_, "MessageCommCannotGreaterThan", "佣金不能大於15%的"), _defineProperty(_window$_language_zh_, "MessageCommNoChange", "佣金沒有更改"), _defineProperty(_window$_language_zh_, "MessageGroupCreationFail", "創建組失敗"), _defineProperty(_window$_language_zh_, "MessageGroupDoesNotExistMsg", "This Group does not exist!"), _defineProperty(_window$_language_zh_, "MessageGroupHasAlreadyChoosen", "此組名稱已經被選擇，請嘗試另一個名稱!"), _defineProperty(_window$_language_zh_, "MessageInvalidCommValue", "佣金值無效!"), _defineProperty(_window$_language_zh_, "MessageSuccess", "成功"), _defineProperty(_window$_language_zh_, "MinBet", "最低投注"), _defineProperty(_window$_language_zh_, "MinBetCanNotGreaterThanMaxBet", "最小投注不能超過最大投注"), _defineProperty(_window$_language_zh_, "MinBetGreaterThanOrEqual", "最小投注必須大於或等於"), _defineProperty(_window$_language_zh_, "MinimumOdds", "最低賠率"), _defineProperty(_window$_language_zh_, "MixLiveAndNoneLive", "混合滾球&amp;非滾球"), _defineProperty(_window$_language_zh_, "MixSportsParlay", "混合過關"), _defineProperty(_window$_language_zh_, "Mo", "Mo"), _defineProperty(_window$_language_zh_, "Mobile", "手機版"), _defineProperty(_window$_language_zh_, "Modified_Date", "Modified_Date"), _defineProperty(_window$_language_zh_, "Modifier", "Modifier"), _defineProperty(_window$_language_zh_, "Monday", "星期一"), _defineProperty(_window$_language_zh_, "MoneyLine", "勝負盤"), _defineProperty(_window$_language_zh_, "MoneyPlay", "普通投注"), _defineProperty(_window$_language_zh_, "Month", "月份"), _defineProperty(_window$_language_zh_, "Monthly", "每月"), _defineProperty(_window$_language_zh_, "MoveSuccessfullyMsg", "成功移動"), _defineProperty(_window$_language_zh_, "MoveToGroup", "轉移至組"), _defineProperty(_window$_language_zh_, "MultiCustomers", "多個會員"), _defineProperty(_window$_language_zh_, "NA", "N/A"), _defineProperty(_window$_language_zh_, "Name", "姓名"), _defineProperty(_window$_language_zh_, "NetTurnover", "淨交易額"), _defineProperty(_window$_language_zh_, "NewAsia", "新亞洲版"), _defineProperty(_window$_language_zh_, "NewGroup", "新組別"), _defineProperty(_window$_language_zh_, "Next", "下個"), _defineProperty(_window$_language_zh_, "NG", "百練賽"), _defineProperty(_window$_language_zh_, "NGComm", "百練賽佣金"), _defineProperty(_window$_language_zh_, "NGCommission", "百練賽傭金"), _defineProperty(_window$_language_zh_, "No", "不是"), _defineProperty(_window$_language_zh_, "NoBettypeFound", "No bet type found."), _defineProperty(_window$_language_zh_, "NoDraws", "沒有和局"), _defineProperty(_window$_language_zh_, "NoDrawsForTurnoverOnly", "只有交易額不包括和局"), _defineProperty(_window$_language_zh_, "NoGoal", "無進球"), _defineProperty(_window$_language_zh_, "NoInfo", "没资料显示"), _defineProperty(_window$_language_zh_, "NoInformationAvailable", "No Information Available"), _defineProperty(_window$_language_zh_, "None", "無"), _defineProperty(_window$_language_zh_, "NoneCurrency", "None currency"), _defineProperty(_window$_language_zh_, "NoneLevel", "None level"), _defineProperty(_window$_language_zh_, "NoneLive", "非滾球"), _defineProperty(_window$_language_zh_, "NonEntered", "成績還沒輸入場數"), _defineProperty(_window$_language_zh_, "NoOfCustmer", "會員數"), _defineProperty(_window$_language_zh_, "NoProductFound", "No product found"), _defineProperty(_window$_language_zh_, "Normal", "正常"), _defineProperty(_window$_language_zh_, "NotAllowBA", "此被許可不允許投注總計"), _defineProperty(_window$_language_zh_, "Note", "注意"), _defineProperty(_window$_language_zh_, "Notification", "通知"), _defineProperty(_window$_language_zh_, "NotificationDateRangeLimitNote", "最多可以檢索六個月前的資料"), _defineProperty(_window$_language_zh_, "Nov", "十一月"), _defineProperty(_window$_language_zh_, "November", "十一月"), _defineProperty(_window$_language_zh_, "NumberGameNo", "百練賽編號"), _defineProperty(_window$_language_zh_, "OANDANote", "請注意所有的換算的基礎貨幣（歐元，美金）僅供參考。"), _defineProperty(_window$_language_zh_, "Oct", "十月"), _defineProperty(_window$_language_zh_, "October", "十月"), _defineProperty(_window$_language_zh_, "Odd_Dec", "歐洲盤"), _defineProperty(_window$_language_zh_, "Odd_MY", "馬來盤"), _defineProperty(_window$_language_zh_, "OddEven", "單雙盤"), _defineProperty(_window$_language_zh_, "OddEvenDND", "單雙盤 + 獨贏盤 + 平局/不是和局"), _defineProperty(_window$_language_zh_, "Odds", "賠率"), _defineProperty(_window$_language_zh_, "OddsAvg", "平均賠率"), _defineProperty(_window$_language_zh_, "OddsMatched", "匹配賠率"), _defineProperty(_window$_language_zh_, "OddsReq", "投注賠率"), _defineProperty(_window$_language_zh_, "OddsType", "賠率類型"), _defineProperty(_window$_language_zh_, "of", "之"), _defineProperty(_window$_language_zh_, "Off", "關"), _defineProperty(_window$_language_zh_, "OK", "OK"), _defineProperty(_window$_language_zh_, "OldColor", "舊色"), _defineProperty(_window$_language_zh_, "OldPassword", "舊密碼"), _defineProperty(_window$_language_zh_, "On", "開"), _defineProperty(_window$_language_zh_, "OneXTwo", "獨贏盤"), _defineProperty(_window$_language_zh_, "Open", "開啟"), _defineProperty(_window$_language_zh_, "OpeningBalance", "前期餘額"), _defineProperty(_window$_language_zh_, "OriginalBetTicket", "原始注單"), _defineProperty(_window$_language_zh_, "Others", "其他"), _defineProperty(_window$_language_zh_, "OtherSport", "其他運動"), _defineProperty(_window$_language_zh_, "Outright", "優勝冠軍"), _defineProperty(_window$_language_zh_, "Over", "上盤"), _defineProperty(_window$_language_zh_, "OverUnder", "大小"), _defineProperty(_window$_language_zh_, "Page", "頁面"), _defineProperty(_window$_language_zh_, "Parlay", "混合過關"), _defineProperty(_window$_language_zh_, "ParlayComm", "Parlay 佣金"), _defineProperty(_window$_language_zh_, "Password", "密碼"), _defineProperty(_window$_language_zh_, "PasswordChangedMsg", "密碼更改！"), _defineProperty(_window$_language_zh_, "PasswordConfirmErrorMsg", "密碼無法確認"), _defineProperty(_window$_language_zh_, "PasswordNoteMsg", "密碼必須至少為6個字符，包含至少2個英文字母及至少2個數字 (例如：pass22)。"), _defineProperty(_window$_language_zh_, "PayAttentionMsg", "請注意：由於不同的佣金值，會員將從組別中刪除。"), _defineProperty(_window$_language_zh_, "Pending", "待定"), _defineProperty(_window$_language_zh_, "PendingFunds", "待定資金"), _defineProperty(_window$_language_zh_, "Permission", "權限"), _defineProperty(_window$_language_zh_, "PermissionForUser", "用戶權限"), _defineProperty(_window$_language_zh_, "Platform", "平台"), _defineProperty(_window$_language_zh_, "PreGame", "遊戲開始前"), _defineProperty(_window$_language_zh_, "Prev", "上個"), _defineProperty(_window$_language_zh_, "Product", "產品"), _defineProperty(_window$_language_zh_, "ProductCC", "嘻嘻俱樂部"), _defineProperty(_window$_language_zh_, "ProductCO", "即時兌現"), _defineProperty(_window$_language_zh_, "ProductCS", "娛樂城"), _defineProperty(_window$_language_zh_, "ProductKN", "快樂彩"), _defineProperty(_window$_language_zh_, "ProductNG", "百練賽"), _defineProperty(_window$_language_zh_, "ProductSB", "體育博彩"), _defineProperty(_window$_language_zh_, "ProductVRG", "虛擬娛樂城"), _defineProperty(_window$_language_zh_, "ProductVS", "虛擬運動"), _defineProperty(_window$_language_zh_, "ProductVS2", "虛擬運動2"), _defineProperty(_window$_language_zh_, "Promotion", "促銷活動"), _defineProperty(_window$_language_zh_, "PromotionPrize", "活動獎金"), _defineProperty(_window$_language_zh_, "RB", "賽馬"), _defineProperty(_window$_language_zh_, "Read", "Read"), _defineProperty(_window$_language_zh_, "RecommendBrowserOnReportPageMsg", "若頁面大小&gt; 1,000，請您考慮使用火狐或Chrome瀏覽器以獲得更好的體驗"), _defineProperty(_window$_language_zh_, "RefNo", "注單號碼"), _defineProperty(_window$_language_zh_, "Refund", "退款"), _defineProperty(_window$_language_zh_, "Reject", "已取消"), _defineProperty(_window$_language_zh_, "Remark", "備註"), _defineProperty(_window$_language_zh_, "RemoveFromGroup", "從組中刪除"), _defineProperty(_window$_language_zh_, "RemoveGroupMsg", "您確定要從組中移除此（這些）會員?"), _defineProperty(_window$_language_zh_, "RemoveTheseCustomersFromGroupMsg", "您確定要從組中移除這些會員?"), _defineProperty(_window$_language_zh_, "RemoveThisCustomerFromGroupMsg", "您確定要從組中移除該會員?"), _defineProperty(_window$_language_zh_, "Report", "報告"), _defineProperty(_window$_language_zh_, "ReportBy", "報告由"), _defineProperty(_window$_language_zh_, "Reset", "重設"), _defineProperty(_window$_language_zh_, "ResetPassword", "重設密碼"), _defineProperty(_window$_language_zh_, "ResetPasswordSuccessMsg", "重置密碼成功!"), _defineProperty(_window$_language_zh_, "Result", "賽果"), _defineProperty(_window$_language_zh_, "ResultPending", "賽果待定"), _defineProperty(_window$_language_zh_, "Results", "賽果"), _defineProperty(_window$_language_zh_, "RngCasinoAndBingoExcludedNote", "此報告不包含娛樂城及賓果"), _defineProperty(_window$_language_zh_, "RNGCasinoUpdateSettingUnAvailableMsg", "RNG Casino Database is not currently available. Please try again later."), _defineProperty(_window$_language_zh_, "Running", "進行中"), _defineProperty(_window$_language_zh_, "Sa", "Sa"), _defineProperty(_window$_language_zh_, "Saturday", "星期日"), _defineProperty(_window$_language_zh_, "Save", "保存"), _defineProperty(_window$_language_zh_, "SB", "體育博彩"), _defineProperty(_window$_language_zh_, "SBComm", "體育博彩佣金"), _defineProperty(_window$_language_zh_, "Score", "比分"), _defineProperty(_window$_language_zh_, "SearchResult", "搜索結果"), _defineProperty(_window$_language_zh_, "SelectAtLeastOneCurrencyMsg", "請最少選擇一種貨幣"), _defineProperty(_window$_language_zh_, "SelectedItemCount", "已選  # 個項目"), _defineProperty(_window$_language_zh_, "SelectGroup", "選擇組"), _defineProperty(_window$_language_zh_, "Selection", "選項"), _defineProperty(_window$_language_zh_, "SelectLicenseeMsg", "請選擇一個被許可"), _defineProperty(_window$_language_zh_, "SelectOptions", "選擇一個選項"), _defineProperty(_window$_language_zh_, "SelectTop", "選擇最大"), _defineProperty(_window$_language_zh_, "Sep", "九月"), _defineProperty(_window$_language_zh_, "September", "九月"), _defineProperty(_window$_language_zh_, "ServerBusyMessage", "由於服務器繁忙，您的請求現在無法處理。請稍後再試。"), _defineProperty(_window$_language_zh_, "SessionLoggedMsg", "您已從另一會話登入或您的登入會話已過期"), _defineProperty(_window$_language_zh_, "SetAsDefaultGroup", "設置為默認組"), _defineProperty(_window$_language_zh_, "SettleAmount", "結算總額"), _defineProperty(_window$_language_zh_, "Show", "顯示"), _defineProperty(_window$_language_zh_, "ShowAllLeagues", "顯示所有聯賽"), _defineProperty(_window$_language_zh_, "ShowOldValue", "顯示舊值"), _defineProperty(_window$_language_zh_, "Sincelastmonth", "從上個月"), _defineProperty(_window$_language_zh_, "SingleCustomer", "單一會員"), _defineProperty(_window$_language_zh_, "SpecialLevel", "特殊層級"), _defineProperty(_window$_language_zh_, "SpecificDate", "特定日期"), _defineProperty(_window$_language_zh_, "Sport", "運動"), _defineProperty(_window$_language_zh_, "Sportsbook", "體育博彩"), _defineProperty(_window$_language_zh_, "Stake", "投注額"), _defineProperty(_window$_language_zh_, "StakeFrom", "投注額從"), _defineProperty(_window$_language_zh_, "Statement", "賬目"), _defineProperty(_window$_language_zh_, "Status", "狀態"), _defineProperty(_window$_language_zh_, "Su", "Su"), _defineProperty(_window$_language_zh_, "Submit", "提交"), _defineProperty(_window$_language_zh_, "Subsidiary", "子網站"), _defineProperty(_window$_language_zh_, "SubsidiaryWL", "子網站輸贏"), _defineProperty(_window$_language_zh_, "Summary", "總結"), _defineProperty(_window$_language_zh_, "Sunday", "星期六"), _defineProperty(_window$_language_zh_, "Suspended", "暫停"), _defineProperty(_window$_language_zh_, "SystemId", "系統帳號"), _defineProperty(_window$_language_zh_, "SystemParlay", "複式過關"), _defineProperty(_window$_language_zh_, "SystemParlayDetailNote", "輸贏的進位值僅供參考。因此，所有輸贏相加的總計有可能和小計有差數。"), _defineProperty(_window$_language_zh_, "Tablet", "平板"), _defineProperty(_window$_language_zh_, "Team", "隊伍"), _defineProperty(_window$_language_zh_, "Th", "Th"), _defineProperty(_window$_language_zh_, "ThereIsNoSelectedItem", "There is no selected item."), _defineProperty(_window$_language_zh_, "Thursday", "星期四"), _defineProperty(_window$_language_zh_, "TicketFilter", "注單篩選"), _defineProperty(_window$_language_zh_, "TicketList", "注單清單"), _defineProperty(_window$_language_zh_, "TicketNo", "票劵號碼"), _defineProperty(_window$_language_zh_, "TicketPayout", "注單結果+實際投注金額"), _defineProperty(_window$_language_zh_, "TicketType", "注單類型"), _defineProperty(_window$_language_zh_, "Time", "時間"), _defineProperty(_window$_language_zh_, "TimeZone", "時區"), _defineProperty(_window$_language_zh_, "TipAmount", "打賞金額"), _defineProperty(_window$_language_zh_, "TipSharing", "打賞抽成"), _defineProperty(_window$_language_zh_, "To", "至"), _defineProperty(_window$_language_zh_, "Todate", "至日期"), _defineProperty(_window$_language_zh_, "Today", "今日"), _defineProperty(_window$_language_zh_, "Total", "總和"), _defineProperty(_window$_language_zh_, "TotalActiveCustomer", "總活躍會員人數"), _defineProperty(_window$_language_zh_, "TotalAway", "客隊總計"), _defineProperty(_window$_language_zh_, "TotalBets", "總投注"), _defineProperty(_window$_language_zh_, "TotalGoal", "總進球"), _defineProperty(_window$_language_zh_, "TotalHome", "主隊總計"), _defineProperty(_window$_language_zh_, "Totalin", "總計在"), _defineProperty(_window$_language_zh_, "TotalTransaction", "總交易數"), _defineProperty(_window$_language_zh_, "TotalTurnover", "總交易額"), _defineProperty(_window$_language_zh_, "ToViewHistoryRptMsg", "請點擊查看歷史報告"), _defineProperty(_window$_language_zh_, "ToWinToNil", "零失球的勝方"), _defineProperty(_window$_language_zh_, "TransferIn", "Transfer In"), _defineProperty(_window$_language_zh_, "TransferOut", "Transfer Out"), _defineProperty(_window$_language_zh_, "TransTime", "交易時間"), _defineProperty(_window$_language_zh_, "Tu", "Tu"), _defineProperty(_window$_language_zh_, "Tuesday", "星期二"), _defineProperty(_window$_language_zh_, "TurnOffBaTooltip", "點擊關閉"), _defineProperty(_window$_language_zh_, "TurnOnBaTooltip", "點擊打開"), _defineProperty(_window$_language_zh_, "Turnover", "交易額"), _defineProperty(_window$_language_zh_, "TurnoverTitle", "交易額, {0} --&gt; {1} - {2} {3} ({4})"), _defineProperty(_window$_language_zh_, "TurnoverTitleNoUser", "交易額，{0} - {1}, {2}"), _defineProperty(_window$_language_zh_, "Type", "類型"), _defineProperty(_window$_language_zh_, "UncheckAll", "Uncheck All"), _defineProperty(_window$_language_zh_, "Under", "下盤"), _defineProperty(_window$_language_zh_, "UnderMaintenance", "維護中"), _defineProperty(_window$_language_zh_, "UndermaintenanceMsg", "我們正進行伺服器維護，網站於{0}至{1}將無法使用。非常抱歉造成您的不便!"), _defineProperty(_window$_language_zh_, "UnderSettlement", "結算中"), _defineProperty(_window$_language_zh_, "Unfreeze", "Unfreeze"), _defineProperty(_window$_language_zh_, "Update", "更新"), _defineProperty(_window$_language_zh_, "UpdateAccountSuccessMsg", "更新賬號成功!"), _defineProperty(_window$_language_zh_, "UpdateAgCasinoBetSettings", "Are you sure you want to update all AG Casino bet settings?"), _defineProperty(_window$_language_zh_, "UpdateAgCasinoBetSettingSuccessMsg", "The Ag Casino bet setting of {0} was updated successfully"), _defineProperty(_window$_language_zh_, "UpdateCommission", "更新佣金"), _defineProperty(_window$_language_zh_, "UpdateCommSucessfulMsg", "成功更新佣金"), _defineProperty(_window$_language_zh_, "UpdateCurrencySuccessfulMsg", "更新貨幣成功"), _defineProperty(_window$_language_zh_, "UpdateCustomerCommission", "更新會員的佣金"), _defineProperty(_window$_language_zh_, "UpdateFunctionSuccessfulMsg", "更新成功"), _defineProperty(_window$_language_zh_, "UpdateKenoBetSettings", "Are you sure you want to update all RNG Keno bet settings?"), _defineProperty(_window$_language_zh_, "UpdateKenoBetSettingSuccessMsg", "The RNG Keno bet setting of {0} was updated successfully"), _defineProperty(_window$_language_zh_, "UpdateNumberGameBetSettings", "您確定您要更新的所有百練賽投注設置嗎？"), _defineProperty(_window$_language_zh_, "UpdateNumberGameBetSettingSuccessMsg", "{0}的百練賽投注設置已成功更新"), _defineProperty(_window$_language_zh_, "UpdateRNGCasinoBetSettingFailMsg", "The RNG Casino bet setting of {0} updated is failed"), _defineProperty(_window$_language_zh_, "UpdateRNGCasinoBetSettings", "Are you sure you want to update RNG Casino bet settings?"), _defineProperty(_window$_language_zh_, "UpdateRNGCasinoBetSettingSuccessMsg", "The RNG Casino bet setting of {0} was updated successfully"), _defineProperty(_window$_language_zh_, "UpdateSpecialLevelMsg", "無效的參數。無效的會員識別"), _defineProperty(_window$_language_zh_, "UpdateSportsbookBetSettings", "您確定您要更新所有的體育博彩投注設置嗎？"), _defineProperty(_window$_language_zh_, "UpdateSportsbookBetSettingSuccessMsg", "{0}的體育博彩投注設置已成功更新"), _defineProperty(_window$_language_zh_, "UpdateSuccess", "Update successfully!"), _defineProperty(_window$_language_zh_, "UpdateUnSuccess", "Update unsucessfully!"), _defineProperty(_window$_language_zh_, "UserInformation", "用戶信息"), _defineProperty(_window$_language_zh_, "Username", "用戶名"), _defineProperty(_window$_language_zh_, "UserNotHaveCurrency", "您沒有任何幣別的權限可以觀看這份報告, 請聯絡貴司的後台管理人員."), _defineProperty(_window$_language_zh_, "View", "檢視"), _defineProperty(_window$_language_zh_, "View_details_of", "View details of"), _defineProperty(_window$_language_zh_, "ViewBy", "查看由"), _defineProperty(_window$_language_zh_, "ViewDataInMonth", "检阅每月數據"), _defineProperty(_window$_language_zh_, "Viewin", "以 {0} 查看"), _defineProperty(_window$_language_zh_, "ViewNotification", "查看通知"), _defineProperty(_window$_language_zh_, "VirtualCycling", "Virtual Cycling"), _defineProperty(_window$_language_zh_, "VirtualHorseRacing", "Virtual Horse Racing"), _defineProperty(_window$_language_zh_, "VirtualSoccer", "Virtual Soccer"), _defineProperty(_window$_language_zh_, "VirtualSpeedway", "Virtual Speedway"), _defineProperty(_window$_language_zh_, "VirtualSports", "虛擬運動"), _defineProperty(_window$_language_zh_, "VirtualTennis", "Virtual Tennis"), _defineProperty(_window$_language_zh_, "Void", "作廢"), _defineProperty(_window$_language_zh_, "Wap", "WAP"), _defineProperty(_window$_language_zh_, "We", "We"), _defineProperty(_window$_language_zh_, "Wednesday", "星期三"), _defineProperty(_window$_language_zh_, "Welcome", "歡迎"), _defineProperty(_window$_language_zh_, "WinLoss", "獨贏"), _defineProperty(_window$_language_zh_, "WinLossByBetType", "投注類別輸贏"), _defineProperty(_window$_language_zh_, "WinLossByBetTypeTitle", "投注類別輸贏, {0} --&gt; {1} - {2}"), _defineProperty(_window$_language_zh_, "WinLossByLeague", "Win Loss By Leagues"), _defineProperty(_window$_language_zh_, "WinLossByProduct", "投注產品輸贏"), _defineProperty(_window$_language_zh_, "WinLossByProductTitle", "投注產品輸贏, {0} --&gt; {1}, {2}"), _defineProperty(_window$_language_zh_, "WinLossByTimeZone", "投注時區輸贏"), _defineProperty(_window$_language_zh_, "Withdrawal", "提款"), _defineProperty(_window$_language_zh_, "WL", "獨贏"), _defineProperty(_window$_language_zh_, "Won", "贏"), _defineProperty(_window$_language_zh_, "Yes", "是"), _defineProperty(_window$_language_zh_, "Yesterday", "昨日"), _defineProperty(_window$_language_zh_, "YouNotChooseAnyCustomerMsg", "您還沒有選擇任何會員"), _window$_language_zh_);

/***/ })

/******/ });
//# sourceMappingURL=lang-zh-TW.chunk.js.map
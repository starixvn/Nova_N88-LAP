var path = require('path');

var projectRoot = path.resolve(__dirname, '../../../');

var cssPaths = {
    build: "www/css/build",

    home: ["./www/css/source/pages/home/home.scss"],
    main: ["./www/css/source/main.scss"],
    error: ["./www/css/source/pages/utility/error.scss"],
    um: ["./www/css/source/pages/utility/um.scss"],

    reportjqgridlayout: ["./www/css/source/pages/common/reportjqgridlayout.main.scss"],
    betlistLayout: ["./www/css/source/pages/betlist/betlistcommon.main.scss"],
    betlistSimpleLayout: ["./www/css/source/pages/betlist/betlistcommon.main.scss", "./www/css/source/extensions/popup-ex.scss"],

    colossusbetdetail: ["./www/css/source/pages/betlist/colossusbetdetail.scss"],
    systemparlaydetail: ["./www/css/source/pages/betlist/systemparlaydetail.scss"],

    betlistResult: ["./www/css/source/pages/betlist/result/betlist.result.scss"],

    login: ["./www/css/source/pages/login/login-ex.scss"],
    licenseewinloss: ["./www/css/source/pages/report/licenseewinloss.scss"],

    result: ["./www/css/source/pages/report/result.scss"],
    cashoutwinloss: ["./www/css/source/pages/report/cashoutwinloss.scss"],
    cashouthistory: ["./www/css/source/pages/betlist/cashouthistory.main.scss", "./www/css/source/extensions/popup-ex.scss"],

    customercommgrouplist: ["./www/css/source/pages/customer/commgrouplist.scss"],
    customercommgroupdetail: ["./www/css/source/pages/customer/commgrouplist-detail.scss"],
    customerlog: ["./www/css/source/pages/customer/customerlog.scss"],
    customerlist: ["./www/css/source/pages/customer/customerlist.scss"],
    customeroutstanding: ["./www/css/source/pages/betlist/customeroutstanding.scss"],
    betsetting: ["./www/css/source/pages/customer/betsetting.scss"],
    customerwinloss: ["./www/css/source/pages/report/customerwinloss.scss"],
    manageuser: ["./www/css/source/pages/user/index.scss"]
};

var scriptPaths = {
    build: "www/js/build",

    language: "common/languages/ViewResources.js",
    languageCN: "common/languages/ViewResources.zh-CN.js",
    languageTW: "common/languages/ViewResources.zh-TW.js",
    languageHans: "common/languages/ViewResources.zh-Hans.js",
    home: ["./www/js/source/components/navbar.js", "./www/js/source/components/sidebar.js", "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js", "./www/js/source/pages/home/main.js"],
    signin: ["./www/js/source/pages/signin/main.js"],

    licenseewinloss: "./www/js/source/pages/report/licenseewinloss/main.js",
    betlist: "./www/js/source/pages/betlist/betlist.js",
    betlistsimple: "./www/js/source/pages/betlist/main-simple.js",
    betlistrunning: "./www/js/source/pages/betlist/main-betlistrunning.js",
    betlistrunningmultiplebettypes: "./www/js/source/pages/betlist/main-betlistrunning.multiplebettypes.js",
    betlistcorrectscore: "./www/js/source/pages/betlist/main-betlistcorrectscore.js",

    result: "./www/js/source/pages/report/result/main-result.js",
    cashoutwinloss: "./www/js/source/pages/report/cashoutwinloss/main.js",
    customeroutstanding: "./www/js/source/pages/betlist/customer/main.js",
    customerwinloss: "./www/js/source/pages/report/customerwinloss/main.js"
};

module.exports = {
    projectRoot: projectRoot,
    cssPaths: cssPaths,
    scriptPaths: scriptPaths
};
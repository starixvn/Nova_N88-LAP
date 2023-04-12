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

    systemparlaydetail: ["./www/css/source/pages/betlist/systemparlaydetail.scss"],

    betlistResult: ["./www/css/source/pages/betlist/result/betlist.result.scss"],

    login: ["./www/css/source/pages/login/login-ex.scss"],
    licenseewinloss: ["./www/css/source/pages/report/licenseewinloss.scss"],
    cashouthistory: ["./www/css/source/pages/betlist/cashouthistory.main.scss", "./www/css/source/extensions/popup-ex.scss"],

    customercommgrouplist: ["./www/css/source/pages/customer/commgrouplist.scss"],
    customercommgroupdetail: ["./www/css/source/pages/customer/commgrouplist-detail.scss"],
    customerlog: ["./www/css/source/pages/customer/customerlog.scss"],
    customerlist: ["./www/css/source/pages/customer/customerlist.scss"],
    customeroutstanding: ["./www/css/source/pages/betlist/customeroutstanding.scss"],
    betsetting: ["./www/css/source/pages/customer/betsetting.scss"],
    manageuser: ["./www/css/source/pages/user/index.scss"],
    edituser: ["./www/css/source/pages/user/edit.scss"],
    assignpermission: ["./www/css/source/pages/user/assign-permission.scss"],

    logexecsp: ["./www/css/source/pages/log/logexecsp.scss"]
};

var scriptPaths = {
    build: "www/js/build",

    language: "common/languages/ViewResources.js",
    home: ["./www/js/source/components/navbar.js", "./www/js/source/components/sidebar.js", "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js", "./www/js/source/pages/home/main.js"],
    signin: ["./www/js/source/pages/signin/main.js"],

    licenseewinloss: "./www/js/source/pages/report/licenseewinloss/main.js",
    betlist: "./www/js/source/pages/betlist/betlist.js",
    betlistsimple: "./www/js/source/pages/betlist/main-simple.js",
    betlistrunning: "./www/js/source/pages/betlist/main-betlistrunning.js",
    betlistrunningmultiplebettypes: "./www/js/source/pages/betlist/main-betlistrunning.multiplebettypes.js",
    betlistcorrectscore: "./www/js/source/pages/betlist/main-betlistcorrectscore.js",

    loginlog: "./www/js/source/pages/customer/customerlog/loginlog/main.js",
    customersetting: "./www/js/source/pages/customer/customerlog/customersetting/main.js",
    groupcommission: "./www/js/source/pages/customer/customerlog/groupcommission/main.js",
    customeroutstanding: "./www/js/source/pages/betlist/customer/main.js"
};

module.exports = {
    projectRoot: projectRoot,
    cssPaths: cssPaths,
    scriptPaths: scriptPaths
};
var path = require("path");

var projectRoot = path.resolve(__dirname, "../../../");

var cssPaths = {
    build: "www/css/build",
    layout: "./www/css/source/reactpages/main.scss",
    notification: "./www/css/source/reactpages/pages/notification/index.scss",
    bettingticketscenter:
        "./www/css/source/reactpages/pages/bettingticketscenter/index.scss",
    betlist: "./www/css/source/reactpages/pages/betlist/index.scss",
    playeradmin: "./www/css/source/reactpages/pages/playeradmin/index.scss",
    accountInfo:
        "./www/css/source/reactpages/pages/playeradmin/account-info.scss",
    playerrunningbetlist:
        "./www/css/source/reactpages/pages/playeradmin/running-betlist.scss",
    playerwinloss:
        "./www/css/source/reactpages/pages/playeradmin/playerwinloss.scss",
    statement: "./www/css/source/reactpages/pages/playeradmin/statement.scss",

    winlossreport:
        "./www/css/source/reactpages/pages/report/winloss/index.scss",
    marketingreport:
        "./www/css/source/reactpages/pages/report/marketing/index.scss",
    bonusinforeport:
        "./www/css/source/reactpages/pages/report/bonusinfo/index.scss",
    extrapayoutreport:
        "./www/css/source/reactpages/pages/report/extrapayout/index.scss",
    abnormalbetreport:
        "./www/css/source/reactpages/pages/report/abnormalbet/index.scss",
    winlossanalysis:
        "./www/css/source/reactpages/pages/report/winlossanalysis/index.scss",
};

var scriptPaths = {
    build: "www/js/build",

    languageResource: [
        "./www/js/source/reactpages/lib/langHelper.js",
        "./www/js/source/common/languages/ViewResources.js",
    ],
    /*React page*/
    notification:
        "./www/js/source/reactpages/pages/notification/components/resultAmendment/index.jsx",
    bettingticketscenter_advancedsearch:
        "./www/js/source/reactpages/pages/bettingticketscenter/advancedsearch/components/index.jsx",
    bettingticketscenter_singlecustomer:
        "./www/js/source/reactpages/pages/bettingticketscenter/singlecustomer/components/index.jsx",
    bettingticketscenter_bookedbet: "./www/js/source/reactpages/pages/bettingticketscenter/bookedbet/components/index.jsx",
    bettingticketscenter_refno:
        "./www/js/source/reactpages/pages/bettingticketscenter/refno/components/index.jsx",
    bettingticketscenter_running:
        "./www/js/source/reactpages/pages/bettingticketscenter/running/components/index.jsx",

    playerlist:
        "./www/js/source/reactpages/Module/PlayerAdmin/playerlist/components/index.jsx",
    accountinfo:
        "./www/js/source/reactpages/Module/PlayerAdmin/account-info/components/index.jsx",
    playerrunningbetlist:
        "./www/js/source/reactpages/Module/PlayerAdmin/running-betlist/components/index.jsx",
    singleCustomer:
        "./www/js/source/reactpages/Module/PlayerAdmin/single-customer/components/index.jsx",
    playerwinloss:
        "./www/js/source/reactpages/Module/PlayerAdmin/playerwinloss/components/index.jsx",
    statement:
        "./www/js/source/reactpages/Module/PlayerAdmin/statement/components/index.jsx",

    winlossreport: "./www/js/source/reactpages/pages/report/winloss/index.js",
    winloss_nonsports_betlist:
        "./www/js/source/reactpages/pages/report/winloss/betlist/nonsports-betlist/index.js",
    marketingreport:
        "./www/js/source/reactpages/pages/report/marketing/index.js",
    marketingreport_performancehighlightdetail:
        "./www/js/source/reactpages/pages/report/marketing/components/widgets/PerformanceHighlightWidget/Details/index.js",
    bonusinforeport:
        "./www/js/source/reactpages/pages/report/bonusinfo/index.js",
    extrapayoutreport:
        "./www/js/source/reactpages/pages/report/extrapayout/index.js",
    abnormalbetreport:
        "./www/js/source/reactpages/pages/report/abnormalbet/components/index.jsx",
    winlossanalysis:
        "./www/js/source/reactpages/pages/report/winlossanalysis/components/index.jsx",
};
module.exports = {
    projectRoot: projectRoot,
    cssPaths: cssPaths,
    scriptPaths: scriptPaths,
};

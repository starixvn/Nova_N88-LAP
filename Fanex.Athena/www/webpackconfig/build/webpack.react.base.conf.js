var path = require('path');
var alias = require('../config/aliasReact');
var pathConfig = require('../config/pathReact');
var pluginGenerator = require('../config/pluginReact');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function generateConfig(environment) {
    var jsPath = `${pathConfig.scriptPaths.build}/${environment}/reactpages`;
    var cssPath = `${pathConfig.cssPaths.build}/${environment}/reactpages`;
    var commonConfigs = {
        resolve: {
            alias: alias,
            extensions: ['.js', '.jsx']
        },
        entry: {
            /*js*/

            [`${jsPath}/lib/langHelper`]: pathConfig.scriptPaths.languageResource,

            [`${jsPath}/notification/notification`]: pathConfig.scriptPaths.notification,
            [`${jsPath}/bettingticketscenter/advancedsearch`]: pathConfig.scriptPaths.bettingticketscenter_advancedsearch,
            [`${jsPath}/bettingticketscenter/singlecustomer`]: pathConfig.scriptPaths.bettingticketscenter_singlecustomer,
            [`${jsPath}/bettingticketscenter/refno`]: pathConfig.scriptPaths.bettingticketscenter_refno,
            [`${jsPath}/bettingticketscenter/running`]: pathConfig.scriptPaths.bettingticketscenter_running,
            [`${jsPath}/playeradmin/playerlist`]: pathConfig.scriptPaths.playerlist,
            [`${jsPath}/playeradmin/accountinfo`]: pathConfig.scriptPaths.accountinfo,
            [`${jsPath}/playeradmin/runningbetlist`]: pathConfig.scriptPaths.playerrunningbetlist,
            [`${jsPath}/playeradmin/single-customer`]: pathConfig.scriptPaths.singleCustomer,
            [`${jsPath}/playeradmin/playerwinloss`]: pathConfig.scriptPaths.playerwinloss,
            [`${jsPath}/playeradmin/statement`]: pathConfig.scriptPaths.statement,

            [`${jsPath}/report/winloss`]: pathConfig.scriptPaths.winlossreport,
            [`${jsPath}/report/winloss-nonsports-betlist`]: pathConfig.scriptPaths.winloss_nonsports_betlist,
            [`${jsPath}/report/marketing`]: pathConfig.scriptPaths.marketingreport,
            [`${jsPath}/report/bonusinfo`]: pathConfig.scriptPaths.bonusinforeport,
            [`${jsPath}/report/extrapayout`]: pathConfig.scriptPaths.extrapayoutreport,
            [`${jsPath}/report/marketing-performancehighlightdetail`]: pathConfig.scriptPaths.marketingreport_performancehighlightdetail,
            [`${jsPath}/report/abnormalbet`]: pathConfig.scriptPaths.abnormalbetreport,

            /*css*/
            [`${cssPath}/vendor`]: pathConfig.cssPaths.layout,
            [`${cssPath}/notification/index`]: pathConfig.cssPaths.notification,
            [`${cssPath}/bettingticketscenter/index`]: pathConfig.cssPaths.bettingticketscenter,
            [`${cssPath}/betlist/index`]: pathConfig.cssPaths.betlist,
            [`${cssPath}/playeradmin/index`]: pathConfig.cssPaths.playeradmin,
            [`${cssPath}/playeradmin/account-info`]: pathConfig.cssPaths.accountInfo,
            [`${cssPath}/playeradmin/running-betlist`]: pathConfig.cssPaths.playerrunningbetlist,
            [`${cssPath}/playeradmin/playerwinloss`]: pathConfig.cssPaths.playerwinloss,
            [`${cssPath}/playeradmin/statement`]: pathConfig.cssPaths.statement,

            [`${cssPath}/report/winloss`]: pathConfig.cssPaths.winlossreport,
            [`${cssPath}/report/marketing`]: pathConfig.cssPaths.marketingreport,
            [`${cssPath}/report/bonusinfo`]: pathConfig.cssPaths.bonusinforeport,
            [`${cssPath}/report/extrapayout`]: pathConfig.cssPaths.extrapayoutreport,
            [`${cssPath}/report/abnormalbet`]: pathConfig.cssPaths.abnormalbetreport
        },
        output: {
            path: pathConfig.projectRoot,
            filename: "[name].chunk.js",
            chunkFilename: jsPath + '/lib/[name].chunk.js',
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                loader: ["babel-loader"],
                exclude: /node_modules/
            }]
        },
        plugins: pluginGenerator(environment),
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            children: true
        },
        node: {
            fs: 'empty'
        },
        externals: [
            { './jszip': 'jszip' },
            { './ods': 'ods' },
            { './cptable': 'var cptable' }
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true
                })
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 30000,
                maxSize: 0,
                minChunks: 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: false,
                cacheGroups: {
                    // disable default cache group
                    default: false,
                    vendors: false,
                    common: {
                        name: 'common',
                        test: /(node_modules)/,
                        minChunks: 2,
                        priority: -10
                    }
                }
            }
        }
    };

    return commonConfigs;
}

module.exports = generateConfig;
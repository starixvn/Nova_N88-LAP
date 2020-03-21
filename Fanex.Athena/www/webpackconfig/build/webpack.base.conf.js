var path = require('path');
var merge = require('webpack-merge');

var pathConfig = require('../config/path');
var alias = require('../config/alias');
var rules = require('../config/rule');
var pluginGenerator = require('../config/plugin');
var exposeLoader = require('expose-loader');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function generateConfig(environment) {
    var jsPath = `${pathConfig.scriptPaths.build}/${environment}`;
    var cssPath = `${pathConfig.cssPaths.build}/${environment}`;

    var commonConfigs = {
        resolve: {
            alias: alias,
            modules: [
                path.join(__dirname, "www"),
                "node_modules"
           ]
        },
        entry: {
            [`${jsPath}/language`]: pathConfig.scriptPaths.language,
            [`${jsPath}/language-zh-CN`]: pathConfig.scriptPaths.languageCN,
            [`${jsPath}/language-zh-TW`]: pathConfig.scriptPaths.languageTW,
            [`${jsPath}/language-zh-Hans`]: pathConfig.scriptPaths.languageHans,
            [`${jsPath}/pages/home/home`]: pathConfig.scriptPaths.home,
            [`${jsPath}/pages/signin/signin`]: pathConfig.scriptPaths.signin,
            [`${jsPath}/pages/reports/licenseewinloss`]: [pathConfig.scriptPaths.licenseewinloss],
            [`${jsPath}/pages/betlist/betlist`]: [pathConfig.scriptPaths.betlist],
            [`${jsPath}/pages/betlist/betlistsimple`]: [pathConfig.scriptPaths.betlistsimple],
            [`${jsPath}/pages/betlist/betlistrunning`]: [pathConfig.scriptPaths.betlistrunning],
            [`${jsPath}/pages/betlist/betlistrunningmultiplebettypes`]: [pathConfig.scriptPaths.betlistrunningmultiplebettypes],
            [`${jsPath}/pages/betlist/betlistcorrectscore`]: [pathConfig.scriptPaths.betlistcorrectscore],
            [`${jsPath}/pages/reports/result`]: [pathConfig.scriptPaths.result],
            [`${jsPath}/pages/reports/cashoutwinloss`]: [pathConfig.scriptPaths.cashoutwinloss],
            [`${jsPath}/pages/betlist/customeroutstanding`]: [pathConfig.scriptPaths.customeroutstanding],
            [`${jsPath}/pages/reports/customerwinloss`]: [pathConfig.scriptPaths.customerwinloss],

            [`${cssPath}/pages/reports/reportjqgridlayout`]: pathConfig.cssPaths.reportjqgridlayout,
            [`${cssPath}/main`]: pathConfig.cssPaths.main,
            [`${cssPath}/pages/utility/error`]: pathConfig.cssPaths.error,
            [`${cssPath}/home`]: pathConfig.cssPaths.home,
            [`${cssPath}/um`]: pathConfig.cssPaths.um,
            [`${cssPath}/pages/login/login`]: pathConfig.cssPaths.login,
            [`${cssPath}/pages/reports/licenseewinloss`]: pathConfig.cssPaths.licenseewinloss,

            [`${cssPath}/pages/betlist/betlistLayout`]: pathConfig.cssPaths.betlistLayout,
            [`${cssPath}/pages/betlist/betlistSimpleLayout`]: pathConfig.cssPaths.betlistSimpleLayout,
            [`${cssPath}/pages/betlist/betlistResult`]: pathConfig.cssPaths.betlistResult,
            [`${cssPath}/pages/betlist/colossusbetdetail`]: pathConfig.cssPaths.colossusbetdetail,
            [`${cssPath}/pages/betlist/systemparlaydetail`]: pathConfig.cssPaths.systemparlaydetail,

            [`${cssPath}/pages/reports/result`]: pathConfig.cssPaths.result,
            [`${cssPath}/pages/reports/cashoutwinloss`]: pathConfig.cssPaths.cashoutwinloss,
            [`${cssPath}/pages/betlist/cashouthistory`]: pathConfig.cssPaths.cashouthistory,
            [`${cssPath}/pages/customer/commgroupdetail`]: pathConfig.cssPaths.customercommgroupdetail,
            [`${cssPath}/pages/customer/customerlog`]: pathConfig.cssPaths.customerlog,
            [`${cssPath}/pages/customer/customerlist`]: pathConfig.cssPaths.customerlist,
            [`${cssPath}/pages/betlist/customeroutstanding`]: pathConfig.cssPaths.customeroutstanding,
            [`${cssPath}/pages/customer/betsetting`]: pathConfig.cssPaths.betsetting,
            [`${cssPath}/pages/reports/customerwinloss`]: pathConfig.cssPaths.customerwinloss,

            [`${cssPath}/pages/user/manageuser`]: pathConfig.cssPaths.manageuser
        },
        output: {
            path: pathConfig.projectRoot,
            filename: "[name].chunk.js"
        },
        module: {
            rules: rules.commonRules
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
            children: false
        },
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
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    // disable default cache group
                    default: false,
                    vendors: false,
                    common: {
                       name: `${jsPath}/pages/lib/common`,
                       test: /(node_modules|www[\\/]js[\\/]source[\\/]vendors|www[\\/]js[\\/]source[\\/]common)/,
                       minChunks: 2,
                       priority: -10
                    },
                    jqgrid: {
                        name: `${jsPath}/pages/lib/jqgrid`,
                        test: /(www[\\/]js[\\/]source[\\/]lib[\\/]jqgrid)/,
                        minChunks: 2,
                        priority: -15
                    }
                }
            }
        }
    };

    return commonConfigs;
}

module.exports = generateConfig;
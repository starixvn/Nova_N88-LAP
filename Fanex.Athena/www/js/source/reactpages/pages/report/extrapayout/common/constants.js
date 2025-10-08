import Site from '@jsroot/lib/site';
import LangHelper from '@jsroot/lib/langHelper';

export const DefaultPageSize = 50;

export const ApiUrl = {
    REPORT_DATA_URL: "Api/ExtraPayout/GetData",
    REPORT_DETAIL_DATA_URL: "Api/ExtraPayout/GetDetailData",
    EXPORT_REPORT_DATA_URL: "Api/ExtraPayout/ExportExcel",
    EXPORT_REPORT_DETAIL_DATA_URL: "Api/ExtraPayout/ExportDetailExcel",
    ODDS_BOOST_BONUS_DETAIL_DATA_URL: 'Api/ExtraPayout/GetOddsBoostBonusDetailData',
    EXPORT_ODDS_BOOST_BONUS_DETAIL_DATA_URL: 'Api/ExtraPayout/ExportOddsBoostBonusDetailExcel',
}

export const headerText = {
    date: LangHelper.getSingleResource('Date'),
    refno: LangHelper.getSingleResource('RefNo'),
    betID: LangHelper.getSingleResource('BetID'),
    externalId: LangHelper.getSingleResource('ExternalId'),
    systemId: LangHelper.getSingleResource('SystemId'),
    currency: LangHelper.getSingleResource('Currency'),
    product: LangHelper.getSingleResource('Product'),
    promotionType: LangHelper.getSingleResource('PromotionType'),
    turnover: LangHelper.getSingleResource('Turnover'),
    totalTransaction: LangHelper.getSingleResource('TotalTransaction'),
    customerAmount: LangHelper.getSingleResource('CustomerAmount'),
    licSharingAmount: LangHelper.getSingleResource('LicSharingAmount')
}


export const BreadcrumbText = {
    main: LangHelper.getSingleResource('Main'),
    customer: LangHelper.getSingleResource('Customer')
}

export const ReportLevel = {
    MAIN: 0,
    CUSTOMER: 1
}

export const DefaultPagingOption = {
    PageIndex: 1,
    PageSize: 50,
    TotalItem: 0,
    PageList: [50, 100, 200, 300, 400, 500, 1000, 2000]
}

export const PayoutPromotionType = {
    OddsBoostAdjustment: 101
}
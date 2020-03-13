import { SET_PARAM, SET_ADVANCED_SEARCH, SET_COLLAPSE_FILTER } from './types';
import { toggleLoader } from '@jsroot/actions/loaderAction';
import PlayerQueryService from '../lib/services/playerQueryService';
import { setSelectedPlayer } from './commonAction';
import { setPlayerList, setPagingOption, setIsFetchingData } from './gridHandlerAction';
import { defaultPagingOption } from '../lib/constants.js';
import { buildSelectedPlayer } from '../lib/helpers/playerDataBuilder';
import PlayerSuggestionService from '../lib/services/playerSuggestionService';
import { setSelectedTabName } from './playerDetailHandlerAction';

const testData = {"DataList":[{"IbcCustId":1411402,"UserName":"simo2912","SystemId":"12BETAUD02001","CurrencyId":9,"Currency":"AUD","CurrentBalance":209780.7810,"OutstandingBalance":415202.7100,"OddsGroup":"C","BaStatus":false,"SpecialLevel":0},{"IbcCustId":14766371,"UserName":"Demo01","SystemId":"SPONUUS01258","CurrencyId":20,"Currency":"UUS","CurrentBalance":2100269976.4493,"OutstandingBalance":0.0000,"OddsGroup":"C","BaStatus":true,"SpecialLevel":10}],"TotalItem":2}

const processBeforeGettingData = (dispatch) => {
    dispatch(setSelectedPlayer(null));
    dispatch(setIsFetchingData(true));
    dispatch(toggleLoader(true));
    dispatch(setSelectedTabName(null));
}

export const searchPlayer = (param) => (dispatch) => {
    const service = new PlayerQueryService();

    processBeforeGettingData(dispatch);
    dispatch(setParam(param));

    service.getPlayerList(param).then(result => {
        const { DataList, totalItem } = testData;
        dispatch(setPlayerList(DataList));
        dispatch(setIsFetchingData(false));

        const pagingOption = {
            ...defaultPagingOption,
            PageIndex: param.pageIndex,
            PageSize: param.pageSize,
            TotalItem: totalItem
        }
        dispatch(setPagingOption(pagingOption));

        if (DataList.length === 1) {
            const selectedPlayer = buildSelectedPlayer(DataList[0]);
            dispatch(setSelectedPlayer(selectedPlayer));
        }

        dispatch(toggleLoader(false));
    }).catch(() => {
        dispatch(toggleLoader(false));
    })
}

export const getSinglePlayer = (param) => (dispatch) => {
    const service = new PlayerQueryService();

    processBeforeGettingData(dispatch);

    service.getSinglePlayer(param).then(result => {
        if (result) {
            dispatch(setPlayerList([result]));
            dispatch(setIsFetchingData(false));

            const pagingOption = {
                ...defaultPagingOption,
                TotalItem: 1
            }
            dispatch(setPagingOption(pagingOption));

            const selectedPlayer = buildSelectedPlayer(result);
            dispatch(setSelectedPlayer(selectedPlayer));
        }
        dispatch(toggleLoader(false));
    }).catch(() => {
        dispatch(toggleLoader(false));
    })
}

export const setParam = (data) => {
    return {
        type: SET_PARAM,
        data
    }
}

export const setAdvancedSearch = (data) => {
    return {
        type: SET_ADVANCED_SEARCH,
        data
    }
}

export const setCollapseFilter = (data) => {
    return {
        type: SET_COLLAPSE_FILTER,
        data
    }
}

export const getSuggestionList = (param) => () => {
    const suggestionService = new PlayerSuggestionService();

    return suggestionService.getSuggestionList(param);
}
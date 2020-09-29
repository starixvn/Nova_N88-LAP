import * as types from '@jsroot/actions/types.js'
import DataService from '@jsroot/lib/DataService.js'
import Site from '@jsroot/lib/site';
import { toggleLoader } from '@jsroot/actions/loaderAction'

export function getGridData(url, params, apiKey) {
    return async (dispatch) => {
        let apiCaller = null;
        if(apiKey) {
            apiCaller = DataService.postProxyData(apiKey, url, params);
        } else {
            apiCaller = DataService.postData(url, params);
        }

        try {
            var response = await apiCaller;
            response.data.timestamp = new Date().getTime();
            dispatch(setGridData(response.data));
        } catch(error) {
            handleError(error);
            dispatch(toggleLoader(false));
        }
    };
}

const handleError = (error) => {
    switch (error.response.status) {
        case 403:
            window.location.href = Site.resolveClientUrl('Utility/AccessDenied');
            break;

        default:
            alert("Sorry, an error occurred while processing your request.");
            break;
    }
}

export function setGridData(data) {
    return {
        type: types.SET_GRID_DATA,
        data: data
    };
}
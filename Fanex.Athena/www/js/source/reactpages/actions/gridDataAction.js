import * as types from '@jsroot/actions/types.js'
import DataService from '@jsroot/lib/DataService.js'
import Site from '@jsroot/lib/site';
import { toggleLoader } from '@jsroot/actions/loaderAction'

export function getGridData(url, params) {
    return (dispatch) => {
        DataService.postData(url, params)
            .then(response => {
                response.data.timestamp = new Date().getTime();
                dispatch(setGridData(response.data));
            })
            .catch(error => {
                switch (error.response.status) {
                    case 403:
                        window.location.href = Site.resolveClientUrl('Utility/AccessDenied');
                        break;

                    default:
                        alert("Sorry, an error occurred while processing your request.");
                        break;
                }

                dispatch(toggleLoader(false));
            });
    };
}

export function setGridData(data) {
    return {
        type: types.SET_GRID_DATA,
        data: data
    };
}
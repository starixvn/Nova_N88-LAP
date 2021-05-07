import React, { useMemo, useCallback, useState } from 'react';
import Loader from '@jsroot/components/Loader';
import AppLayout from '@jsroot/layouts/AppLayout';
import LangHelper from '@jsroot/lib/langHelper';
import GridData from './GridData';
import QueryService from '../libs/queryService';
import { defaultState, defaultSortOption } from '../libs/constants';

export const AppContainer = _ => {
    const [isLoading, setLoading] = useState(false);
    const [sortOption, setSortOption] = useState(defaultSortOption);

    const _handleExport = useCallback(event => {
        event.preventDefault();
        setLoading(true)
        const params = {
            ...defaultState,
            sortById: sortOption.sortBy,
            isSortAsc: sortOption.sortType === 'asc',
        }
        QueryService.exportNonSportsBetList(params, () => setLoading(false));
    }, [sortOption])


    const _contentTitle = useMemo(() => {
        return (<div className="content-title">
            {window.title}
            <span className="caret-block">
                <span className="icon-excel-wrapper" onClick={_handleExport}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>
        </div>);
    }, [_handleExport])

    return (
        <AppLayout className="winloss-report">
                <Loader isLoading={isLoading} />
                {_contentTitle}
                <GridData setLoading={setLoading} isLoading={isLoading}
                    setSortOption={setSortOption} sortOption={sortOption}
                />
        </AppLayout>
    )
}

export default AppContainer;
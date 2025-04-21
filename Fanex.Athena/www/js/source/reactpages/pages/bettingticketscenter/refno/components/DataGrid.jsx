import React from 'react';
import { connect } from 'react-redux';
import { ApiUrl } from '../../common/lib/constants';
import BaseDataGrid from '../../common/components/BaseDataGrid';
import AppData from '@jsroot/lib/AppData';

const Columns = [
    'Index', 'ExternalId', 'SystemId', 'RefNo', 'TransTime', 'Choice', 'Odds',
    'OddsType', 'Stake', 'WinLoss', 'LicenseeWL', 'Status', 'Platform', 'Live'
];
const ColumnWidths = [
    40, 120, 120, 160, 140, 370, 70,
    70, 100, 100, 100, 110, 80, 80
];
const ColumnAlignments = [
    'center-align', '', '', 'center-align tooltip', 'center-align', 'right-align', 'right-align',
    'right-align', 'right-align', 'right-align', 'right-align', 'center-align', 'center-align', 'center-align'
];

const DataGrid = (props) => {
    const { requestParam } = props;

    if (AppData.isAllowSabaCoins && requestParam?.ViewSabaCoins && Columns.includes('LicenseeWL')) {
        Columns.splice(10, 1);
        ColumnWidths.splice(10, 1);
        ColumnAlignments.splice(10, 1);
    }

    return (
        <BaseDataGrid
            dataUrl={ApiUrl.REFNO_DATA_URL}
            isPaging={false}
            columns={Columns}
            columnWidths={ColumnWidths}
            columnAlignments={ColumnAlignments}
            totalText=''
            totalColumns={[]}
            sortableColumns={[]}
        />
    );
}

function mapStateToProps(state) {
    return {
        requestParam: state.requestParam
    };
}

export default connect(mapStateToProps)(DataGrid);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataGrid from './DataGrid'
import FormFilter from './FormFilter'
import PageLayout from '../../common/components/PageLayout'
import Loader from '@jsroot/components/Loader';
import SweetAlert from '@jsroot/components/sweet-alert';

export class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PageLayout selectedTabIndex="3">
                <Loader isLoading={this.props.isLoading} />
                <FormFilter />
                <DataGrid />
                {this.props.sweetAlertOption && <SweetAlert {...this.props.sweetAlertOption} />}
            </PageLayout>
        );
    }
}

function mapStateToProps(state) {
    return Object.assign({}, { isLoading: state.isLoading, sweetAlertOption: state.sweetAlertOption });
}

export default connect(mapStateToProps)(AppContainer);
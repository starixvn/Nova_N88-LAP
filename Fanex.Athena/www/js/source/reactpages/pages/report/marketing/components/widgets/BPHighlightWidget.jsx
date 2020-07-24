import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import { Title } from '../../constants/BPHightlightConst';
import Widget from '../common/Widget';
import StickyCompareBox from '../common/StickyCompareBox';

const BPHighlightWidget = props => {
    const {  } = props;

    return (<Widget title={Title}>
        <div className="sticky-box-container">
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                value={512312}
                rate={5}
            />
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                description={LangHelper.getSingleResource('TotalUsers')}
                value={512312}
                rate={-24}
            />
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                description={LangHelper.getSingleResource('PaidUsers')}
                value={512312}
                rate={5}
            />
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                description={LangHelper.getSingleResource('PaidUsers')}
                value={512312}
                rate={0}
            />
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                description={LangHelper.getSingleResource('PaidUsers')}
                value={512312}
                rate={-95}
            />
            <StickyCompareBox
                title={LangHelper.getSingleResource('TotalUsers')}
                description={LangHelper.getSingleResource('PaidUsers')}
                value={512312}
                rate={5}
            />
        </div>
    </Widget>)
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, {});
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BPHighlightWidget));
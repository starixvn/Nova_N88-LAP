import React from 'react';
import AppLayout from '@jsroot/layouts/AppLayout';
import FormFilter from './FormFilter';
import Content from './Content';

export const AppContainer = _ => {
    return (<AppLayout className="marketing-report">
        <FormFilter />
        <Content />
    </AppLayout>)
}

export default AppContainer;
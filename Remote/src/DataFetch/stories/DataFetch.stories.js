import React from 'react';
import DataFetch from './DataFetch';

const meta = {
    title: 'DataFetch',
    component: DataFetch,
    argTypes: { onClick: { action: 'clicked' } }
};

export default meta;

const Template = (args) => <DataFetch {...args} />

export const Default = Template.bind({});
Default.args = {};
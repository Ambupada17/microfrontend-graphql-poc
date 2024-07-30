import React from 'react';
import FAQ from './Faq';

const meta = {
    title: 'Faq',
    component: FAQ,
};

export default meta;

const Template = (args) => <FAQ {...args} />

export const Default = Template.bind({});
Default.args = {};
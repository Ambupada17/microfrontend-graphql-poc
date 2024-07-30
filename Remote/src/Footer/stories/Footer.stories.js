import React from 'react';
import Footer from './Footer'

const meta = {
    title: 'Footer',
    component: Footer,
};

export default meta;

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({});
Default.args = {};
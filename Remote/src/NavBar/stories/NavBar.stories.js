import React from 'react';
import NavBar from './NavBar';
const meta = {
    title: 'NavBar',
    component: NavBar,
};

export default meta;

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({});
Default.args = {};
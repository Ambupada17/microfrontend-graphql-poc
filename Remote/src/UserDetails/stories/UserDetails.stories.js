import React from 'react';
import UserDetails from './UserDetails';
const meta = {
    title: 'UserDetails',
    component: UserDetails,
};

export default meta;

const Template = (args) => <UserDetails {...args} />

export const Default = Template.bind({});
Default.args = {};
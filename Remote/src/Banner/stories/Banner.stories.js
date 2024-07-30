import React from 'react';
import Banner from './Banner';

// export default {
//     title: 'MF/Banner',
//     component: Banner,
// };

// export const Small = () => <Banner />;

// Small.storyName = "Banner comp";

const meta = {
    title: 'Banner',
    component: Banner,
};

export default meta;

const Template = (args) => <Banner {...args} />

export const Default = Template.bind({});
Default.args = {};
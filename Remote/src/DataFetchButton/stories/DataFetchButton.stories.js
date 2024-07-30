import React from 'react';
import DataFetchButton from './DataFetchButton';

const meta = {
    title: 'DataFetchButton',
    component: DataFetchButton,
    //argTypes: { onClick: { action: 'clicked' } }
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'radio' },
        },
        onClick: {
            action: 'clicked'
        }
      },
};

export default meta;

const Template = (args) => <DataFetchButton {...args} />

export const Default = Template.bind({});
Default.args = {};

// export const Log = () => (
//     <DataFetchButton colorScheme="pink" onClick={() => console.log('Object is called')}>Log</DataFetchButton>
// )
import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import RibbonComponent from './Ribbon';

export default {
    title: 'Navigation/Ribbon',
    component: RibbonComponent,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                defaultValue: 'manz',
                options: [
                    'manz',
                    'atomic_tangerine',
                    'tickle_me_pink',
                    'tapestry',
                    'flamingo',
                    'maroon_flush',
                    'corduroy',
                    'tuna',
                ],
            },
        },
    },
} as Meta;

export const Ribbon = (args) => {
    return <RibbonComponent {...args} />;
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
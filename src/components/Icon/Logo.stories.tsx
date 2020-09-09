import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import LogoComponent from './Logo';

import './Logo.stories.scss';

export default {
    title: 'Icons/Logo',
    component: LogoComponent,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                defaultValue: 'main',
                options: [
                    'main',
                    'bianca',
                    'bizarre',
                    'manz',
                    'atomic_tangerine',
                    'tickle_me_pink',
                    'tapestry',
                    'flamingo',
                    'maroon_flush',
                    'tuna',
                ],
            },
        },
        mono: {
            control: {
                type: 'boolean',
                defaultValue: false
            },
        },
    },
} as Meta;

export const Default = (args) => (
  <div className="LogoWrapper">
     <LogoComponent {...args} />
  </div>
);


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

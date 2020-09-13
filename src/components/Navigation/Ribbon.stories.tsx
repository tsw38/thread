import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import RibbonComponent from './Ribbon';
import {colors} from '../../types/color'

export default {
    title: 'Navigation/Ribbon',
    component: RibbonComponent,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                defaultValue: 'manz',
                options: colors,
            },
        },
    },
} as Meta;

export const Ribbon = (args) => {
    return <RibbonComponent {...args} />;
};
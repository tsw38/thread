import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import NavigationComponent from './Navigation';
import {colors} from '../../types/color'

export default {
    title: 'Navigation/Navigation',
    component: NavigationComponent,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                defaultValue: 'manz',
                options: colors,
            },
        },
    },
} as Meta

export const Default = args => {
    return <NavigationComponent{...args} />
}
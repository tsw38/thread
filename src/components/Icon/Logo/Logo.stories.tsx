import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import LogoComponent from './Logo';

import storyStyles from './Logo.stories.module.scss';
import {colors} from '../../../types/color';

export default {
    title: 'Icons/Logo',
    component: LogoComponent,
    argTypes: {
        color: {
            control: {
                type: 'inline-radio',
                defaultValue: 'main',
                options: colors.concat('main'),
            },
        },
        mono: {
            control: {
                type: 'boolean',
                defaultValue: false,
            },
        },
    },
} as Meta

export const Default = (args) => (
    <div className={storyStyles.LogoWrapper}>
        <LogoComponent {...args} className={storyStyles.Logo} />
    </div>
)

export const Loading = (args) => (
    <div className={storyStyles.LogoWrapper}>
        <LogoComponent {...args} loading className={storyStyles.Logo} />
    </div>
)
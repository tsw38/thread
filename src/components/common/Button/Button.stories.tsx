import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'

import ButtonComponent, {ButtonGroup as ButtonGroupComponent} from './index'
import {colors} from '../../../types/color';

const colorControlType = {
    control: {
        type: 'inline-radio',
        options: colors,
    },
}
const textArgType = {
    control: {
        type: 'text',
    },
}

export default {
    title: 'Button',
    component: ButtonComponent,
} as Meta

import styles from "./Button.stories.module.scss"

export const AllStates = (args) => {
    return (
        <div className={styles.ButtonWrapper}>
            <div className={styles.Row}>
                <ButtonComponent {...args} />
                <div className={styles.Wrapper}>
                    <code>default</code>
                </div>
            </div>
            <div className={styles.Row}>
                <ButtonComponent {...args} className="hover" />
                <div className={styles.Wrapper}>
                    <code>hover</code>
                </div>
            </div>
            <div className={styles.Row}>
                <ButtonComponent {...args} className="click" />
                <div className={styles.Wrapper}>
                    <code>click</code>
                </div>
            </div>
            <div className={styles.Row}>
                <ButtonComponent {...args} disabled />
                <div className={styles.Wrapper}>
                    <code>disabled</code>
                </div>
            </div>
        </div>
    )
}
AllStates.argTypes = {
    color: colorControlType,
}
AllStates.args = {
    children: 'Button',
}

export const ButtonGroup = ({
    stacked,
    primaryColor,
    primaryButtonText,
    secondaryButtonText,
}) => (
    <ButtonGroupComponent stacked={stacked}>
        <ButtonComponent color={primaryColor}>
            {primaryButtonText}
        </ButtonComponent>
        <ButtonComponent color="bizarre">{secondaryButtonText}</ButtonComponent>
    </ButtonGroupComponent>
)
ButtonGroup.argTypes = {
    primaryColor: colorControlType,
    primaryButtonText: textArgType,
    secondaryButtonText: textArgType,
    stacked: {
        control: {
            type: 'boolean'
        }
    }
}
ButtonGroup.args = {
    primaryColor: 'tapestry',
    primaryButtonText: 'Primary Button',
    secondaryButtonText: 'Secondary Button',
}

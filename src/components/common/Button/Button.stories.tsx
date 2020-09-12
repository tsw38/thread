import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import './Button.stories.scss'

import ButtonComponent, {ButtonGroup as ButtonGroupComponent} from './index'
const colors = [
    'bianca',
    'bizarre',
    'atomic_tangerine',
    'tickle_me_pink',
    'tapestry',
    'flamingo',
    'maroon_flush',
    'corduroy',
    'tuna',
]

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

export const AllStates = (args) => {
    return (
        <div className="ButtonWrapper">
            <div className="Row">
                <ButtonComponent {...args} />
                <div className="Wrapper">
                    <code>default</code>
                </div>
            </div>
            <div className="Row">
                <ButtonComponent {...args} className="hover" />
                <div className="Wrapper">
                    <code>hover</code>
                </div>
            </div>
            <div className="Row">
                <ButtonComponent {...args} className="click" />
                <div className="Wrapper">
                    <code>click</code>
                </div>
            </div>
            <div className="Row">
                <ButtonComponent {...args} disabled />
                <div className="Wrapper">
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

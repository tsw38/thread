import React from 'react'
import {Meta} from '@storybook/react/types-6-0'

import FlagComponent from './Flag'

import flags from './flags'
import './Flag.stories.scss'

export default {
    title: 'Icons/Flags',
    component: FlagComponent
} as Meta

export const Default = () => (
    <div className="FlagsWrapper">
        {Object.keys(flags).map((flag) => {
            return (
                <div className="FlagWrapper" key={`Flag-${flag}`}>
                    <FlagComponent name={flag} />
                    <code>{flag}</code>
                </div>
            )
        })}
    </div>
)

export const Flag = (args) => (
    <div className="FullPage">
        <FlagComponent {...args} name={args.name || 'greece'} />
    </div>
)
Flag.argTypes = {
    name: {
        control: {
            type: 'select',
            options: Object.keys(flags),
        },
    },
}

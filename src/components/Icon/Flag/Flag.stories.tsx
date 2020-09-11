import React from 'react'
import {Meta} from '@storybook/react/types-6-0'

import Flag from './Flag'

import flags from './flags'
import './Flag.stories.scss'

export default {
    title: 'Icons/Flags',
    component: Flag,
} as Meta

export const Default = () => {
    return (
        <div className="FlagsWrapper">
            {Object.keys(flags).map((flag) => {
                return (
                    <div className="FlagWrapper" key={`Flag-${flag}`}>
                        <Flag name={flag} />
                        <code>{flag}</code>
                    </div>
                )
            })}
        </div>
    )
}

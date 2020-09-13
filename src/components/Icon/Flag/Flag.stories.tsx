import React from 'react'
import {Meta} from '@storybook/react/types-6-0'

import FlagComponent from './Flag'

import flags from './flags'
import storyStyles from './Flag.stories.module.scss';
// import styles from './Flag.stories.module.scss';

export default {
    title: 'Icons/Flags',
    component: FlagComponent
} as Meta

export const Default = () => (
    <div className={storyStyles.FlagsWrapper}>
        {Object.keys(flags).map((flag) => {
            return (
                <div className={storyStyles.FlagWrapper} key={`Flag-${flag}`}>
                    <FlagComponent name={flag} />
                    <code>{flag}</code>
                </div>
            )
        })}
    </div>
)

export const Flag = (args) => (
    <div className={storyStyles.FullPage}>
        <FlagComponent {...args} name={args.name} className={storyStyles.Flag} />
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

Flag.args = {
    name: 'greece'
}

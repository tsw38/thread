import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'

import {
    Column as ColumnComponent,
    Container as ContainerComponent,
} from '.'

import styles from './Layout.stories.module.scss'

export default {
    title: 'Common/Layout',
    component: ContainerComponent,
} as Meta

export const Container = (args) => (
    <ContainerComponent {...args}>&nbsp;</ContainerComponent>
)
Container.args = {
    className: styles.Container,
}

export const Column = ({columnCount, ...args}) => (
    <ContainerComponent {...args} className={styles.Container} columns={columnCount}>
        {Array(columnCount)
            .fill(ColumnComponent)
            .map((Component, index) => (
                <Component
                    key={`column-${index}`}
                    className={styles[`Column-${index + 1}`]}
                >
                    &nbsp;
                </Component>
            ))}
    </ContainerComponent>
)
Column.args = {
    columnCount: 2
}
const fs = require('fs')
const path = require('path')
const colors = require('colors')
const mkdirp = require('mkdirp')
const commandLineArgs = require('command-line-args')

const projectDir = path.resolve(__dirname, '../')
const defaultDestination = path.resolve(projectDir, 'src/components')

const createNewDir = ({path}) => {
    console.log('creating directory:', path)
    mkdirp.sync(path)
}

const createSassFile = ({path, component}) => {
    fs.writeFileSync(
        `${path}/${component}.scss`,
        `.${component} {\r\r}`,
        'utf-8'
    )
}

const createTestFile = ({path, component}) => {
    fs.writeFileSync(
        `${path}/${component}.spec.tsx`,
        "import React from 'react';"
    )
}

const createComponentFile = ({path, component}) => {
    const componentTemplate = `
import React from 'react';
import classNames from 'classnames';

import './${component}.scss';

export interface ${component}Props {
}

const ${component}: React.FC<${component}Props> = ({
    ...props
}) => null;

export default ${component};
`

    fs.writeFileSync(`${path}/${component}.tsx`, componentTemplate, 'utf-8')
}

const createStoryFile = ({path, component}) => {
    const componentTemplate = `
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import ${component}Component from './${component}';

export default {
    title: '${component}',
    component: ${component}Component
} as Meta;

export const Default = (args) => <${component}Component {...args} />
`

    fs.writeFileSync(
        `${path}/${component}.stories.tsx`,
        componentTemplate,
        'utf-8'
    )
}

const run = () => {
    if (process.env.ENV !== 'dev') {
        throw new Error('Please run this via npm')
    }

    const {destination, component} = commandLineArgs([
        {name: 'component', alias: 'c', type: String},
        {
            name: 'destination',
            alias: 'd',
            type: String,
            defaultValue: defaultDestination,
        },
    ])

    const componentArgs = {
        path: `${destination}/${component}`,
        component,
    }

    createNewDir(componentArgs)
    createSassFile(componentArgs)
    createTestFile(componentArgs)
    createComponentFile(componentArgs)
    createStoryFile(componentArgs)
}

try {
    run()
} catch (err) {
    console.log(
        `${err.message}:`,
        colors.green(
            `npm run create-component ${process.argv
                .slice(process.argv.indexOf('--'))
                .join(' ')}`
        ),
        '\n'
    )
}

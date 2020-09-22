const fs = require('fs')
const path = require('path')
const isTest = process.env.NODE_ENV === 'test'

const tsConfigPath = path.resolve(__dirname, '../', 'tsconfig.json')

let tsconfig = fs.readFileSync(tsConfigPath, 'utf-8')

tsconfig = JSON.parse(tsconfig)
tsconfig.compilerOptions.jsx = isTest ? 'react' : 'preserve'

fs.writeFileSync(tsConfigPath, JSON.stringify(tsconfig, null, 4), 'utf-8')

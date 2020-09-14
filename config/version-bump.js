const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

const bumpTagVersion = (packageJson) => {
    const semverType = process.argv[2]
    let major, minor, patch

    if (packageJson) {
        const version = packageJson.version.split('.')

        major = version[0]
        minor = version[1]
        patch = version[2]
    } else {
        const tag = execSync('git describe --tags').toString()
        // eslint-disable-next-line no-unused-vars
        const splitTag = tag
            .split('-')[0]
            .replace(/[a-z,A-Z]/g, '')
            .split('.')

        major = splitTag[0]
        minor = splitTag[1]
        patch = splitTag[2] || 0
    }

    switch (semverType) {
        case 'major':
            return `${Number(major) + 1}.0.0`
        case 'minor':
            return `${major}.${Number(minor) + 1}.0`
        default:
            return `${major}.${minor}.${Number(patch) + 1}`
    }
}

const bumpPackageVersion = () => {
    const packagePath = path.resolve(__dirname, '../package.json')

    let package = fs.readFileSync(packagePath)
    package = JSON.parse(package)

    package.version = bumpTagVersion(package)

    fs.writeFileSync(packagePath, JSON.stringify(package, null, 4), 'utf-8')
}

bumpPackageVersion()

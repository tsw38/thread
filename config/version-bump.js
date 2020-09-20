const fs = require('fs')
const path = require('path')
const {execSync} = require('child_process')

const bumpTagVersion = (packageJson) => {
    const semverType = process.argv[2].split('--')[0]
    const isAlpha = process.argv.find((item) => /alpha/gi.test(item))
    let major, minor, patch

    if (packageJson) {
        const version = packageJson.version.split('-')[0].split('.')

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

    let newVersion

    switch (semverType) {
        case 'major':
            newVersion = `${Number(major) + 1}.0.0`
            break
        case 'minor':
            newVersion = `${major}.${Number(minor) + 1}.0`
            break
        default:
            newVersion = `${major}.${minor}.${Number(patch) + 1}`
            break
    }

    return `${newVersion}${isAlpha ? '-alpha' : ''}`
}

const bumpPackageVersion = () => {
    const packagePath = path.resolve(__dirname, '../package.json')

    let package = fs.readFileSync(packagePath)
    package = JSON.parse(package)

    package.version = bumpTagVersion(package)

    fs.writeFileSync(packagePath, JSON.stringify(package, null, 4), 'utf-8')
}

bumpPackageVersion()

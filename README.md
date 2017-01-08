# showdown-highlightjs-extension

[![Build Status](https://travis-ci.org/unional/showdown-highlightjs-extension.svg?branch=master)](https://travis-ci.org/unional/showdown-highlightjs-extension)
[![Coverage Status](https://coveralls.io/repos/github/unional/showdown-highlightjs-extension/badge.svg?branch=master)](https://coveralls.io/github/unional/showdown-highlightjs-extension?branch=master)

[`showdown`](https://github.com/showdownjs/showdown) extension for [`highlightjs`](https://github.com/isagalaev/highlight.js).

## Usage

```ts
// typscript
import * as showdown from 'showdown'
import 'showdown-highlightjs-extension`

const converter = new showdown.Converter({ extensions: [ 'highlightjs' ]})
const text = 'Some text with code block (```<language> ... ```)'
const html = converter.makeHtml(text)
```


## Contribute

```sh
# right after clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# edit `webpack.config.dev.js` to exclude dependencies for the global build.

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

## Npm Commands

There are a few useful commands you can use during development.

```sh
# Run tests (and lint) automatically whenever you save a file.
npm run watch

# Run tests with coverage stats (but won't fail you if coverage does not meet criteria)
npm run test

# Manually verify the project.
# This will be ran during 'npm preversion' so you normally don't need to run this yourself.
npm run verify

# Build the project.
# You normally don't need to do this.
npm run build

# Run tslint
# You normally don't need to do this as `npm run watch` and `npm version` will automatically run lint for you.
npm run lint
```

Generated by [`generator-unional@0.1.2`](https://github.com/unional/unional-cli)

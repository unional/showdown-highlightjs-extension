require('aurelia-polyfills')
const LogManager = require('@unional/logging')

LogManager.addAppender(new LogManager.ConsoleAppender())

LogManager.setLevel(LogManager.logLevel.none)

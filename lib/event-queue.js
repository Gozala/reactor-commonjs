'use strict'

var timer = require('timer')

exports.setTimeout = timer.setTimeout
exports.setInterval = timer.setInterval
exports.clearTimeout = timer.clearTimeout
exports.clearInterval = timer.clearTimeout
exports.enqueue = function enqueue(task) {
  timer.setTimeout(task, 0)
}

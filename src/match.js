'use strict'

function match(value, checks){
  if(checks[value]) {
    return checks[value](value)
  }
  else if(checks._) {
    return checks._(value)
  }
}

module.exports = match

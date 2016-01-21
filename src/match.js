'use strict'

function match(value, checks){
  if( Object.prototype.toString.call(checks) === '[object Array]' ) {
    let callOnFail = false

    let response = checks.forEach(check => {
      let possibleValue = check.toString().match(/([^\s,]+)/g)[1].toLowerCase().replace(/\(|\)/g, '')
      if(value == possibleValue) return check(value)
      if(possibleValue == '_') callOnFail = check
    })
    if(response) return response
    if(callOnFail) return callOnFail(value)
    return null
  }
  else {
    if(checks[value]) {
      return checks[value](value)
    }
    else if(checks._) {
      return checks._(value)
    }
  }
}

module.exports = match

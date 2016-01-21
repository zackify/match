'use strict'

function match(value, checks){
  if( Object.prototype.toString.call(checks) === '[object Array]' ) {
    let callOnFail, called, response

    checks.forEach(check => {
      let stringified = check.toString()

      if(/=>/.test(stringified) === true) {
        var possibleValue = stringified.split(/=>/)[0]
      }
      else {
        var possibleValue = stringified.match(/([^\s,]+)/g)[1]
      }

      possibleValue = possibleValue.replace(/\(|\)/g, '').replace(/ /g,'')
      if(value == possibleValue) {
        called = true
        return response = check(value)
      }
      if(possibleValue == '_') callOnFail = check
    })
    if(called) return response
    if(callOnFail) return callOnFail(value)
    throw 'error: non-exhaustive patterns: `_` not covered'
  }
  else {
    if(checks[value]) {
      return checks[value](value)
    }
    else if(checks._) {
      return checks._(value)
    }
    throw 'error: non-exhaustive patterns: `_` not covered'
  }
}

module.exports = match

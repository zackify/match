'use strict'

function match(value, checks){
  if( Object.prototype.toString.call(checks) === '[object Array]' ) {
    let callOnFail = false

    let response = checks.forEach(check => {
      let matches = check.toString().match(/([^\s,]+)/g)
      var match = matches[1]
      if(/=>/.test(matches[1]) == true) match = matches[0]

      let possibleValue = match.toLowerCase().replace(/\(|\)/g, '')
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

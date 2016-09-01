[![Build Status](https://circleci.com/gh/zackify/match.svg?style=shield&circle-token=443316526a6b5f0ed82f7b64307c6c5914f79ad5)](https://circleci.com/gh/zackify/match)

##Match

A basic port of [Rust's match](https://doc.rust-lang.org/book/match.html) function.

##Install

```js
npm install rust-match --save

import match from 'rust-match'
```

You can get the UMD build from `/umd`, or use it in a script tag from unpkg:

```
<script src="https://unpkg.com/rust-match/umd/match.min.js"></script>
```


##Examples

####[Play around on JSFiddle](https://jsfiddle.net/2ct8d7r9/10/)

```js

let message = 'hello'
let response = match(message, [
  hello => 'the value is hello',
  goodbye => 'hello to you too!',
  _ => 'something else'
])

console.log(response) // prints 'the value is hello'

//numbers and spaces are more verbose
let number = '26'
match(number, {
  5: () => console.log('the value is hi'),
  'test word': () => console.log('the value is test word'),
  _: (value) => console.log(`you chose ${value}!`)
})

```

It is [a LOT slower](http://jsperf.com/match-vs-switch/11) than a switch statement though.

##Exhaustive Checking

```js
match('test', [
  awesome => console.log('awesome')
])

//throws: error: non-exhaustive patterns: `_` not covered, just like rust!
```

##Usage with Redux

This also turns out to be a nice alternative to using switch statements in redux!

```js
export default (state = Immutable.Map, action) => {
  return match(action.type, [
    authenticate => state.merge(action),
    setToken => state.set('token', 'test'),
    _ => state
  ])
}
```

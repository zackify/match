##Match

A basic port of [Rust's match](https://doc.rust-lang.org/book/match.html) function.

##Examples

```js
let number = '26'

match(number)({
  5: () => console.log('the value is hi'),
  _: (value) => console.log(`you chose ${value}!`)
})

match('hello there')({
  'goodbye': () => console.log('the value is hi'),
  'hello there': (value) => console.log('hello to you too!')
})
```

[Play around on JSFiddle](https://jsfiddle.net/2ct8d7r9/3/)

##Usage

```js
npm install rust-match --save

import match from 'rust-match'
```

You can get the UMD build from `/umd`, or use it in a script tag from npmcdn:

```
<script src="https://npmcdn.com/rust-match/umd/match.min.js"></script>
```

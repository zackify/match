import match from './src/match'
import { expect } from 'chai'

describe('Match', () => {

  it('runs correct function', done => {
    let message = 'hello'
    match(message, {
      hello: value => {
        expect('hello').to.equal(value)
        done()
      }
    })
  })

  it('calls wildcard function', done => {
    let message = 'hey'
    match(message, {
      hello: value => console.log('you said hello'),
      _: value => {
        expect('hey').to.equal(value)
        done()
      }
    })
  })

  it('works with string values', done => {
    let message = 'cool test'
    match(message, {
      'cool test': value => {
        expect('cool test').to.equal(value)
        done()
      },
      _: value => console.log(value)
    })
  })

  it('return value is correct', done => {
    let message = 'cool test'
    let value = match(message, {
      'cool test': value => value + 'er',
      _: value => console.log(value)
    })
    expect('cool tester').to.equal(value)
    done()
  })

  it('only calls one function', done => {
    let message = 'cool tests'
    match(message, {
      'cool test': value => expect('failed').to.equal(value),
      _: value => {
        expect('cool tests').to.equal(value)
        done()
      },
    })
  })
})

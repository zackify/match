import match from '../src/match'
import { expect } from 'chai'

describe('Array of functions', () => {
  it('works as an array', done => {
    let message = 'test'
    match(message, [
      test => {
        expect('test').to.equal(test)
        done()
      },
      awesome => console.log('awesome'),
      _ => console.log('boom')
    ])
  })

  it('wildcard with array', done => {
    let message = 'test'
    match(message, [
      _ => {
        expect('test').to.equal(_)
        done()
      },
      awesome => console.log('awesome')
    ])
  })

  it('throws error when nothing matches', () => {
    try {
      match('test', [
        awesome => console.log('awesome')
      ])
    }
    catch(e) {
      expect('error: non-exhaustive patterns: `_` not covered').to.be.equal(e)
    }
  })

  it('returns wildcard match', () => {
    let response = match('test', [
      awesome => 'you are awesome',
      _ => 'hey there'
    ])
    expect('hey there').to.be.equal(response)
  })
})

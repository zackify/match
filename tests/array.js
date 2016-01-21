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
      awesome => console.log('awesome')

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
})

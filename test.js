const add = require('.')

test('add', () => {
    expect(add(1, 2)).toEqual(3)
})

test('add negative numbers', () => {
    expect(add(-1, -2)).toEqual(-3)
})
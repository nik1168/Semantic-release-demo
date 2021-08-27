const operations = require('.')

test('add', () => {
    expect(operations.add(1, 2)).toEqual(3)
})

test('multiply', () => {
    expect(operations.multiply(1, 2)).toEqual(2)
})

const operations = require('.')

test('add', () => {
    expect(operations.add(1, 2)).toEqual(3)
})

test('multiply', () => {
    expect(operations.multiply(1, 2)).toEqual(2)
})

test('subtract', () => {
    expect(operations.subtract(1, 2)).toEqual(-1)
})

test('divide', () => {
    expect(operations.divide(1, 1)).toEqual(1)
})


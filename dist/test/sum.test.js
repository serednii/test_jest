const { sum, rotateString } = require('../closoures.js')

test('sum numbers 1,2,3 to equal 6', () => {
    expect(sum(1, 2, 3)).toBe(6);
})

test('rotate stirng', () => {
    expect(rotateString("hello")).toBe("olleh")
    expect(rotateString(" marta ")).toBe("atram")
    expect(rotateString(" igor")).toBe("rogi")
    expect(rotateString("list ")).toBe("tsil")

})
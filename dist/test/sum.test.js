const { sum, rotateString } = require('../closoures.js')

test('sum numbers 1,2,3 to equal 6', () => {
    expect(sum(1, 2, 3)).toBe(6);
})


const testList = [
    {
        in: "hello",
        res: "olleh"
    },
    {
        in: " marta ",
        res: "atram"
    },
    {
        in: " igor",
        res: "rogi"
    },
    {
        in: "list ",
        res: "tsil"
    },

]

test('rotate stirng', () => {
    testList.forEach(test => {
        expect(rotateString(test.in)).toBe(test.res)
    })

})
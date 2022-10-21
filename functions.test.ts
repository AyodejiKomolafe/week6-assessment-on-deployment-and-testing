const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("shuffleArray shoud return an array", ()=>{
        expect(Array.isArray(shuffleArray([1,2]))).toBe(true)
    }),
    test("shuffleArray contains all the inputed items", () =>{
        expect(shuffleArray([3,4])).toEqual(expect.arrayContaining([3,4]))
    })
})
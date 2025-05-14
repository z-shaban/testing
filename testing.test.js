import * as testing from './testing.js'

test("capitalize",()=>{
    expect(testing.capitalize("john")).toBe("John")
})

test("reverseString", ()=>{
    expect(testing.reverseString("hello")).toBe("olleh")
})

test("calculator",()=>{
    expect(testing.calculator.add(2 , 2)).toBe(4)
    expect(testing.calculator.subtract(2 , 2)).toBe(0)
    expect(testing.calculator.multiply(2 , 2)).toBe(4)
    expect(testing.calculator.divide(2 , 2)).toBe(1)
})

test("ceasarCipher works",()=>{
     expect(testing.ceaserCipher("abc" , 2)).toBe("cde")
})

test("ceasarCipher wraps after z",()=>{
    expect(testing.ceaserCipher("xyz" , 3)).toBe("abc")
})

test("ceasarCipher case presevation",()=>{
    expect(testing.ceaserCipher('HeLLo', 3)).toBe("KhOOr")
})

test("ceasarCipher, punctuation should remain the same",()=>{
    expect(testing.ceaserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyze array', ()=>{
    expect(testing.analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})
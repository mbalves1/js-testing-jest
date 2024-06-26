import { it, expect, describe } from 'vitest'
import { add } from './math'

describe('math', () => {
  it('should summarize all number values in array', () => {
    // Arrange
    const numbers = [1, 2, 3]
    
    // Act
    const result  = add(numbers);
    
    // Assert
    const expectdResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0)
    expect(result).toBe(expectdResult)
  })
  
  it('should yield NaN if a least one invalid number is provided', () => {
    // Arrange
    const inputs = ['invalid', 1]
  
    // Act
    const  result = add(inputs)
  
    // Assert
    expect(result).toBeNaN()
  })
  it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2']
  
    const result = add(numbers)
  
    const expectdResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0)
    expect(result).toBe(expectdResult)
  })
  
  it('should yield 0 if an empty array is provided', () => {
    const numbers = []
  
    const result = add(numbers)
  
    expect(result).toBe(0)
  })
  
  it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
      add()
    }
    expect(resultFn).toThrow()
  })
  
  it('should throw an error if provider with multiple arguments instead of an array', () => {
    const num1 = 1
    const num2 = 2
  
    const resultFn = () => {
      add(num1, num2)
    }
  
    expect(resultFn).toThrow(/is not iterable/)
  
  })
})

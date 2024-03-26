import { it, expect, describe } from 'vitest'
import { transformToNumber, cleanNumbers } from './numbers'

describe('numbers', () => {
  it('should transform numeric strings to numbers', () => {
    // Arrange
    const numberString = '2';
  
    // Act
    const result = transformToNumber(numberString);
  
    // Assert
    const expectedNumber = +numberString;
    // expect(result).toBe(expectedNumber);
    expect(result).toBeTypeOf('number');
  });
  
  it('should return NaN for non-numeric strings', () => {
    // Arrange
    const nonNumericString = 'hello';
  
    // Act
    const result = transformToNumber(nonNumericString);
  
    // Assert
    expect(result).toBeNaN();
  });
})

describe('numbers cleanNumbers', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2']

    const cleanedNumbers = cleanNumbers(numberValues)

    expect(cleanedNumbers[0]).toBeTypeOf('number')
  })

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow()
  })
})
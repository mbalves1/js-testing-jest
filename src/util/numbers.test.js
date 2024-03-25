import { it, expect, describe } from 'vitest'
import { transformToNumber } from './numbers'

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
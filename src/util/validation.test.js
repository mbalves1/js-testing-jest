import { it, expect, describe } from 'vitest'
import { validateStringNotEmpty, validateNumber } from './validation'

describe('Validation', () => {
  it('should throw an error for empty strings', () => {
    // Arrange
    const emptyString = '';
  
    // Act
    const expectedError = () => validateStringNotEmpty(emptyString);
  
    // Assert
    expect(expectedError).toThrowError('Invalid input - must not be empty.');
})
});
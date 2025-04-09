import paintRequiredCalculator from './paintRequiredCalculator';

describe('paint required calculator', () => {
  test('should return expected result', () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5); // (50 / 10) = 5
  });

  test('should throw error for invalid area (negative number)', () => {
    expect(() => paintRequiredCalculator(-50, 10)).toThrowError("Area must be a positive number greater than zero.");
  });

  test('should throw error for invalid coveragePerLiter (zero)', () => {
    expect(() => paintRequiredCalculator(50, 0)).toThrowError("Coverage per liter must be a positive number greater than zero.");
  });

  test('should throw error for invalid coveragePerLiter (negative number)', () => {
    expect(() => paintRequiredCalculator(50, -10)).toThrowError("Coverage per liter must be a positive number greater than zero.");
  });

  test('should throw error for invalid input (NaN)', () => {
    expect(() => paintRequiredCalculator(NaN, 10)).toThrowError("Both area and coveragePerLiter must be valid numbers.");
    expect(() => paintRequiredCalculator(50, NaN)).toThrowError("Both area and coveragePerLiter must be valid numbers.");
  });

  test('should throw error for zero area', () => {
    expect(() => paintRequiredCalculator(0, 10)).toThrowError("Area must be a positive number greater than zero.");
  });
});


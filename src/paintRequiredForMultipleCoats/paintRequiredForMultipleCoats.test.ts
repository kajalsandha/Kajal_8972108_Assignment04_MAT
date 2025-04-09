import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  test('should throw error for area of 0', () => {
    expect(() => paintRequiredForMultipleCoats(0, 10, 2)).toThrowError("Area must be a positive number greater than zero.");
  });

  test('should throw error for coveragePerLiter of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 0, 2)).toThrowError("Coverage per liter must be a positive number greater than zero.");
  });

  test('should throw error for coats of 0', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, 0)).toThrowError("Number of coats must be a positive integer.");
  });

  test('should handle negative values correctly', () => {
    expect(() => paintRequiredForMultipleCoats(-100, 10, 2)).toThrowError("Area must be a positive number greater than zero.");
    expect(() => paintRequiredForMultipleCoats(100, -10, 2)).toThrowError("Coverage per liter must be a positive number greater than zero.");
    expect(() => paintRequiredForMultipleCoats(100, 10, -2)).toThrowError("Number of coats must be a positive integer.");
  });
});


import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('should convert area correctly for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39, 2);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78, 2);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585, 2);
  });

  test('should return 0 for area of 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  test('should handle negative values correctly and return 0', () => {
    expect(convertAreaToSquareFeet(-100)).toBe(0); // Invalid input, return 0
    expect(convertAreaToSquareFeet(-200)).toBe(0); // Invalid input, return 0
    expect(convertAreaToSquareFeet(-150)).toBe(0); // Invalid input, return 0
  });

  test('should return 0 for non-numeric inputs', () => {
    expect(convertAreaToSquareFeet(NaN)).toBe(0); // Invalid input, return 0
    expect(convertAreaToSquareFeet('string' as any)).toBe(0); // Invalid input, return 0
  });
});


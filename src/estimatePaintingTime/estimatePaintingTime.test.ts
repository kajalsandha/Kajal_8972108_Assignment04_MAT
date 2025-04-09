import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10); // (100 / 10) = 10
    expect(estimatePaintingTime(200, 20)).toBe(10); // (200 / 20) = 10
    expect(estimatePaintingTime(150, 15)).toBe(10); // (150 / 15) = 10
  });

  test('should return Infinity for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity); // Division by zero
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0); // No time needed for 0 area
  });

  test('should handle negative values correctly', () => {
    expect(estimatePaintingTime(-100, 10)).toBe(0); // Negative area is invalid, return 0
    expect(estimatePaintingTime(100, -10)).toBe(-10); // Negative speed, should return negative time
    expect(estimatePaintingTime(-100, -10)).toBe(0); // Negative area is invalid, return 0
  });

  test('should handle invalid values gracefully', () => {
    expect(estimatePaintingTime(NaN, 10)).toBe(NaN); // Invalid area, return NaN
    expect(estimatePaintingTime(100, NaN)).toBe(NaN); // Invalid speed, return NaN
    expect(estimatePaintingTime('string' as any, 10)).toBe(NaN); // Invalid area input, return NaN
  });
});


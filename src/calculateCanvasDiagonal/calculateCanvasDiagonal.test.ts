import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  // Test: Ensure correct diagonal calculation for positive values
  test('calculates diagonal correctly for positive values', () => {
    expect(calculateCanvasDiagonal(3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(6, 8)).toBeCloseTo(10);
    expect(calculateCanvasDiagonal(5, 12)).toBeCloseTo(13);
  });

  // Test: Return 0 when both length and width are 0
  test('returns 0 for length and width of 0', () => {
    expect(calculateCanvasDiagonal(0, 0)).toBe(0);
  });

  // Test: Handle negative values by treating them as positive (absolute value)
  test('handles negative values correctly', () => {
    expect(calculateCanvasDiagonal(-3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(3, -4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(-3, -4)).toBeCloseTo(5);
  });

  // Test: Handle non-numeric input by returning NaN
  test('returns NaN for non-numeric input', () => {
    expect(calculateCanvasDiagonal('a', 4)).toBeNaN();
    expect(calculateCanvasDiagonal(3, 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('a', 'b')).toBeNaN();
  });
});

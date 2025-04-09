// src/calculateCanvasDiagonal/calculateCanvasDiagonal.test.ts

import { calculateCanvasDiagonal } from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should return correct diagonal for valid numeric inputs', () => {
    expect(calculateCanvasDiagonal(3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(6, 8)).toBeCloseTo(10);
    expect(calculateCanvasDiagonal(5, 12)).toBeCloseTo(13);
  });

  test('should return 0 for zero width and height', () => {
    expect(calculateCanvasDiagonal(0, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculateCanvasDiagonal(-3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(3, -4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(-3, -4)).toBeCloseTo(5);
  });

  test('should return NaN for invalid inputs', () => {
    expect(calculateCanvasDiagonal('a', 4)).toBeNaN();
    expect(calculateCanvasDiagonal(3, 'b')).toBeNaN();
    expect(calculateCanvasDiagonal('x', 'y')).toBeNaN();
  });
});


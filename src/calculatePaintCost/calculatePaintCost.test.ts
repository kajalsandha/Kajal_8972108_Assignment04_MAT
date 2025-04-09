import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should return 0 when any value is negative', () => {
    expect(calculatePaintCost(-10, 5)).toBe(0);
    expect(calculatePaintCost(10, -5)).toBe(0);
    expect(calculatePaintCost(-10, -5)).toBe(0);
  });

  test('should return 0 when inputs are not numbers', () => {
    expect(calculatePaintCost(NaN, 5)).toBe(0);
    expect(calculatePaintCost(10, NaN)).toBe(0);
    expect(calculatePaintCost(NaN, NaN)).toBe(0);
  });
});


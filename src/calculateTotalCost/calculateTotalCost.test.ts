import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('should return paint cost when labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });

  test('should return labor cost when paint cost is 0', () => {
    expect(calculateTotalCost(0, 50)).toBe(50);
  });

  test('should handle negative values correctly and return 0 for invalid inputs', () => {
    expect(calculateTotalCost(-100, 50)).toBe(0); // Invalid input
    expect(calculateTotalCost(100, -50)).toBe(0); // Invalid input
    expect(calculateTotalCost(-100, -50)).toBe(0); // Invalid input
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

  test('should return 0 for non-numeric inputs', () => {
    expect(calculateTotalCost(NaN, 50)).toBe(0); // Invalid input
    expect(calculateTotalCost(100, NaN)).toBe(0); // Invalid input
    expect(calculateTotalCost(NaN, NaN)).toBe(0); // Invalid input
  });
});


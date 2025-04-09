// calculateCanvasSize.test.ts
import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("calculates the canvas size correctly for valid numeric string inputs", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toBe(1000);  // (10 * 100) = 1000
  });

  test("calculates the canvas size correctly for valid numeric inputs", () => {
    const result = calculateCanvasSize(10, 100);
    expect(result).toBe(1000);  // (10 * 100) = 1000
  });

  test("returns 0 for invalid string inputs", () => {
    const result = calculateCanvasSize("abc", "100");
    expect(result).toBe(0);  // Invalid length input, should return 0
  });

  test("returns 0 for invalid width inputs", () => {
    const result = calculateCanvasSize("10", "xyz");
    expect(result).toBe(0);  // Invalid width input, should return 0
  });

  test("returns 0 for both invalid inputs", () => {
    const result = calculateCanvasSize("abc", "xyz");
    expect(result).toBe(0);  // Both inputs are invalid, should return 0
  });

  test("calculates the canvas size correctly for mixed type inputs", () => {
    const result1 = calculateCanvasSize("5", 20);
    expect(result1).toBe(100);  // (5 * 20) = 100
    
    const result2 = calculateCanvasSize(5, "20");
    expect(result2).toBe(100);  // (5 * 20) = 100

    const result3 = calculateCanvasSize(5, 20);
    expect(result3).toBe(100);  // (5 * 20) = 100
  });
});


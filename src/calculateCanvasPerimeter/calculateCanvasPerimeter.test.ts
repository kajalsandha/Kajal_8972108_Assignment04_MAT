// calculateCanvasPerimeter.test.ts
import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("calculates the perimeter correctly for valid numeric inputs", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toBe(220);  // (2 * (10 + 100)) = 220
  });

  test("returns 0 for invalid string inputs", () => {
    const result = calculateCanvasPerimeter("abc", "100");
    expect(result).toBe(0);
  });

  test("returns 0 for missing one valid input", () => {
    const result = calculateCanvasPerimeter("5", "abc");
    expect(result).toBe(0);
  });

  test("returns 0 when both inputs are not valid", () => {
    const result = calculateCanvasPerimeter("abc", "xyz");
    expect(result).toBe(0);
  });

  test("calculates the perimeter correctly for mixed number types", () => {
    expect(calculateCanvasPerimeter("5", 20)).toBe(50); // (2 * (5 + 20)) = 50
    expect(calculateCanvasPerimeter(5, "20")).toBe(50); // (2 * (5 + 20)) = 50
    expect(calculateCanvasPerimeter(5, 20)).toBe(50);   // (2 * (5 + 20)) = 50
  });
});


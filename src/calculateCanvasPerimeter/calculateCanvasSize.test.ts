import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  it("should return correct result when valid string numbers are passed", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toBe(1000);
  });

  it("should return 0 if one of the inputs is not a number", () => {
    const result = calculateCanvasSize("abc", "100");
    expect(result).toBe(0); // or handle it according to your function logic
  });

  it("should handle numeric input as strings or numbers", () => {
    expect(calculateCanvasSize("5", 20)).toBe(100);
    expect(calculateCanvasSize(5, "20")).toBe(100);
    expect(calculateCanvasSize(5, 20)).toBe(100);
  });

  it("should return 0 if either input is missing", () => {
    expect(calculateCanvasSize("10")).toBe(0); // assuming default return is 0
  });
});


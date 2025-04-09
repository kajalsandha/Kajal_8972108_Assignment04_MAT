export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
  // Validate that both inputs are numbers and not NaN
  if (isNaN(area) || isNaN(coveragePerLiter)) {
    throw new Error("Both area and coveragePerLiter must be valid numbers.");
  }

  // Check for invalid or zero coverage
  if (coveragePerLiter <= 0) {
    throw new Error("Coverage per liter must be a positive number greater than zero.");
  }

  // Check for invalid area
  if (area <= 0) {
    throw new Error("Area must be a positive number greater than zero.");
  }

  return area / coveragePerLiter;
}


export default function paintRequiredForMultipleCoats(area: number, coveragePerLiter: number, coats: number): number {
  // Validate that both inputs are numbers and not NaN
  if (isNaN(area) || isNaN(coveragePerLiter) || isNaN(coats)) {
    throw new Error("All inputs must be valid numbers.");
  }

  // Validate that the area is greater than 0
  if (area <= 0) {
    throw new Error("Area must be a positive number greater than zero.");
  }

  // Validate that the coverage per liter is greater than 0
  if (coveragePerLiter <= 0) {
    throw new Error("Coverage per liter must be a positive number greater than zero.");
  }

  // Validate that the number of coats is greater than 0
  if (coats <= 0) {
    throw new Error("Number of coats must be a positive integer.");
  }

  // Calculate and return the required paint for multiple coats
  return (area / coveragePerLiter) * coats;
}


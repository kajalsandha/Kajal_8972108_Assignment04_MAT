export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  // Validate that the inputs are valid numbers and greater than or equal to 0
  if (isNaN(paintRequired) || isNaN(costPerLiter) || paintRequired < 0 || costPerLiter < 0) {
    return 0;  // Return 0 if any input is invalid or negative
  }
  return paintRequired * costPerLiter;
}


export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  // Ensure inputs are valid numbers and non-negative
  if (isNaN(paintCost) || isNaN(laborCost) || paintCost < 0 || laborCost < 0) {
    return 0; // Return 0 for invalid or negative inputs
  }

  return paintCost + laborCost;
}


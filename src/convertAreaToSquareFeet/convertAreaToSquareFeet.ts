export default function convertAreaToSquareFeet(area: number): number {
  // Ensure the area is a valid non-negative number
  if (isNaN(area) || area < 0) {
    return 0; // Return 0 for invalid or negative area values
  }

  const conversionFactor = 10.7639;
  return area * conversionFactor;
}


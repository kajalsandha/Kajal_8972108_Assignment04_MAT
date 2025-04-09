export default function estimatePaintingTime(area: number, paintingSpeed: number): number {
  // Check if the area and painting speed are valid numbers
  if (isNaN(area) || isNaN(paintingSpeed)) {
    return NaN; // Return NaN if inputs are invalid
  }

  // Handle edge case where paintingSpeed is 0 (prevents division by zero)
  if (paintingSpeed === 0) {
    return Infinity; // Return Infinity for zero speed
  }

  // Handle negative values
  if (area < 0) {
    return 0; // Return 0 if area is negative
  }

  // If area is 0, no time is needed
  if (area === 0) {
    return 0;
  }

  return area / paintingSpeed;
}


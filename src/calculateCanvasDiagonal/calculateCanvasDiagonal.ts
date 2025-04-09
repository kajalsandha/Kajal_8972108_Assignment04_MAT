export default function calculateCanvasSize(
  length: string,
  width: string
): number | string {
  // Parse inputs to integers
  const parsedLength = parseInt(length, 10);
  const parsedWidth = parseInt(width, 10);

  // Validate inputs to ensure they are numbers
  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    return 'Invalid input: Both length and width must be valid numbers.';
  }

  // Ensure inputs are non-negative
  if (parsedLength < 0 || parsedWidth < 0) {
    return 'Invalid input: Length and width must be non-negative.';
  }

  // Calculate and return the perimeter
  return 2 * (parsedLength + parsedWidth);
}

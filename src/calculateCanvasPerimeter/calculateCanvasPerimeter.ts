export default function calculateCanvasSize(length: string, width: string): number {
  // Convert strings to integers and ensure they are valid
  const parsedLength = parseInt(length, 10);
  const parsedWidth = parseInt(width, 10);

  // Check if the parsed values are valid numbers
  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    throw new Error("Invalid input: Both length and width must be valid numbers.");
  }

  // Return the calculated canvas size (perimeter in this case)
  return 2 * (parsedLength + parsedWidth);
}


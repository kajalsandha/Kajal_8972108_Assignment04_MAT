// calculateCanvasPerimeter.ts
export default function calculateCanvasPerimeter(length: string | number, width: string | number): number {
  // Convert the inputs to numbers in case they are strings
  const lengthNum = typeof length === 'string' ? parseInt(length) : length;
  const widthNum = typeof width === 'string' ? parseInt(width) : width;

  // Handle invalid inputs (NaN check)
  if (isNaN(lengthNum) || isNaN(widthNum)) {
    return 0;
  }

  return 2 * (lengthNum + widthNum);
}


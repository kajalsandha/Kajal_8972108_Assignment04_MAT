// calculateCanvasSize.ts
export default function calculateCanvasSize(length: string | number, width: string | number): number {
  // Convert inputs to numbers in case they are strings
  const lengthNum = typeof length === 'string' ? parseInt(length) : length;
  const widthNum = typeof width === 'string' ? parseInt(width) : width;

  // Handle invalid inputs (NaN check)
  if (isNaN(lengthNum) || isNaN(widthNum)) {
    return 0;
  }

  return lengthNum * widthNum;
}


// src/calculateCanvasDiagonal/calculateCanvasDiagonal.ts

export function calculateCanvasDiagonal(width: string | number, height: string | number): number {
  const w = Number(width);
  const h = Number(height);

  // Check if conversion to number failed
  if (isNaN(w) || isNaN(h)) {
    return NaN;
  }

  // Calculate diagonal using Pythagoras theorem
  return Math.sqrt(Math.abs(w) ** 2 + Math.abs(h) ** 2);
}


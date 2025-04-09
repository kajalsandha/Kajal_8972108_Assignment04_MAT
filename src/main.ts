import calculateCanvasSize from './calculateCanvasSize';
import paintRequiredCalculator from './paintRequiredCalculator';

// Function to validate and convert input values
function validateAndParseInput(value: string): number {
  const parsedValue = parseFloat(value);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw new Error(`Invalid value: ${value}. Please provide a positive number.`);
  }
  return parsedValue;
}

function main() {
  try {
    // Validate and parse the inputs
    const length = validateAndParseInput("10");
    const width = validateAndParseInput("20");
    
    // Calculate the canvas size
    const area = calculateCanvasSize(length, width);

    // Validate the coverage per liter
    const coveragePerLiter = 11.4;
    if (coveragePerLiter <= 0) {
      throw new Error("Coverage per liter must be a positive number.");
    }

    // Calculate the paint required
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);

    // Output the result
    console.log(`${paintRequired} liters of paint are required to cover an area of ${area} square units of canvas.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();


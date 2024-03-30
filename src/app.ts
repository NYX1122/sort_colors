import chroma from 'chroma-js';

// Updated type to include 'chroma' and 'lightness'
type Dimension = 'hue' | 'chroma' | 'lightness';

const sortColors = (colors: string[], dimension: Dimension = 'hue'): string[] => {
  return colors.sort((a, b) => {
    let valueA: number, valueB: number;

    if (dimension === 'hue') {
      // Use HSL for hue, which is the first value in the array
      valueA = chroma(a).hsl()[0] || 0;
      valueB = chroma(b).hsl()[0] || 0;
    } else if (dimension === 'chroma' || dimension === 'lightness') {
      // Use HCL for chroma (second value) and lightness (third value)
      const index = dimension === 'chroma' ? 1 : 2;
      valueA = chroma(a).hcl()[index] || 0;
      valueB = chroma(b).hcl()[index] || 0;
    } else {
      // This block should never be reached due to TypeScript's type checking
      throw new Error('Invalid dimension provided.');
    }

    return valueA - valueB;
  });
};

export default sortColors;

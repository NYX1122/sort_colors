# sort_colors

This package sorts colors by utilizing the chroma-js library, allowing sorting based on hue, chroma, or lightness.

## Installation

To install the package, run:

```bash
npm install sort_colors
```

## Usage

```typescript
import sortColors from 'sort_colors';

// Sort an array of colors by hue (default)
const colors = ['#ff0000', '#0000ff', '#00ff00']; // Red, Blue, Green
const sortedByHue = sortColors(colors); // Returns ['#ff0000', '#00ff00', '#0000ff'] (Red, Green, Blue)

// Sort an array of colors by chroma
const sortedByChroma = sortColors(colors, 'chroma'); // Sort by chroma

// Sort an array of colors by lightness
const sortedByLightness = sortColors(colors, 'lightness'); // Sort by lightness
```

### Parameters

- **`colors`**: 
  - **Description**: The array of colors to sort.
  - **Type**: `Array<string>`
  - **Supported Formats**: `Hex`

- **`dimension`**:
  - **Description**: The dimension to sort by.
  - **Type**: `string` (optional, default: 'hue')
  - **Supported Values**: `hue`, `chroma`, `lightness`

### Return Value

- **Description**: An array of hex color strings sorted according to the specified dimension.
- **Type**: `Array<string>`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This package is licensed under the ISC License.

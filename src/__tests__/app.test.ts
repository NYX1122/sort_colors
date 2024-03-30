import { describe, it, expect } from 'vitest';
import sortColors from '../app'; // Adjust the import path as needed

describe('sortColors', () => {
  // Test sorting by hue
  it('correctly sorts colors by hue', () => {
    const colors = ['#ff0000', '#0000ff', '#008000']; // Red, Blue, Green
    const expected = ['#ff0000', '#008000', '#0000ff']; // Red, Green, Blue sorted by hue
    expect(sortColors(colors, 'hue')).toEqual(expected);
  });

  // Test sorting by chroma
  it('correctly sorts colors by chroma', () => {
    const colors = ['#00ffff', '#f0f8ff', '#faebd7']; // Aqua, AliceBlue, AntiqueWhite
    const expected = ['#f0f8ff', '#faebd7', '#00ffff']; // AliceBlue, AntiqueWhite, Aqua sorted by chroma
    expect(sortColors(colors, 'chroma')).toEqual(expected);
  });

  // Test sorting by lightness
  it('correctly sorts colors by lightness', () => {
    const colors = ['#ffffff', '#000000', '#808080']; // White, Black, Gray
    const expected = ['#000000', '#808080', '#ffffff']; // Black, Gray, White sorted by lightness
    expect(sortColors(colors, 'lightness')).toEqual(expected);
  });

  // Test that the dimension parameter is optional and defaults to hue
  it('defaults the dimension parameter to hue when omitted', () => {
    const colors = ['#ff0000', '#0000ff', '#008000']; // Red, Blue, Green
    const expected = ['#ff0000', '#008000', '#0000ff']; // Red, Green, Blue by hue
    // Call sortColors without specifying the dimension; it should default to hue
    expect(sortColors(colors)).toEqual(expected);
  });
});

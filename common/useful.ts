/**
 * Capitalize only first letter of the text
 * @param text {string} - string to capitalize
 * @returns {string}
 */
export const capitalize = (text: string): string => {
  if (!text) return '';
  return text.toString().charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Returns the array of unique values
 * @param array – array to be filtered
 */
export const uniqueArray = <T>(array: T[]): T[] => {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

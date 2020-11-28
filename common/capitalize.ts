/**
 * Capitalize only first letter of the text
 * @param text {string} - string to capitalize
 * @returns {string}
 */
const capitalize = (text: string): string => {
  if (!text) return '';
  return text.toString().charAt(0).toUpperCase() + text.slice(1);
};
export default capitalize;

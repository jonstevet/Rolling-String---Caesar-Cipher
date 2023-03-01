/** function to replace a character at a given index in a string
 * @param {string} index - The index of the character to be replaced 
 * @param {string} replacement - The character to replace the original character
 * @returns {string} - The string with the character replaced
 * @example 'abc'.replaceAt(1, 'd') = 'adc'
 */


export default function replaceAt(index, replacement) {
    let result = '';
    let arrayStr = this.split('');
    arrayStr[index] = replacement;
    arrayStr.forEach(x => result += x);
    return result;
}
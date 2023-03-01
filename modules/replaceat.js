export default function replaceAt(index, replacement) {
    let result = '';
    let arrayStr = this.split('');
    arrayStr[index] = replacement;
    arrayStr.forEach(x => result += x);
    return result;
}
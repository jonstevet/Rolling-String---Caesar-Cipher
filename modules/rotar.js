/** Rotation function for a single character
 * @param {string} x - The character to be rotated
 * @param {string} y - The direction of rotation
 * @returns {string} - The rotated character
 * @example rotate('a', 'L') = 'z'
 * 
 * 
*/
export default function rotate(x, y){
    let abcArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (y=='L'){
        if(x=='a') return 'z';
        return abcArray[abcArray.indexOf(x)-1];
    } else if (y=='R'){
        if(x=='z')return 'a';
        return abcArray[abcArray.indexOf(x)+1];
    }
}
import rotar from './modules/rotar.js';
import replaceAt from './modules/replaceat.js';

String.prototype.replaceAt = replaceAt;

export default function rollinString(x, y){
    let result = [];
    let stringIn = x;

    for(let element of y){
        let posPrimeraLetra = element[0];
        let posSegundaLetra = element[2];
        let sentidoRotacion = element[4];
        result.push(stringIn);
        stringIn = stringIn.replaceAt(posPrimeraLetra, rotar(stringIn[posPrimeraLetra], sentidoRotacion));
        result.push(stringIn);
        stringIn = stringIn.replaceAt(posSegundaLetra, rotar(stringIn[posSegundaLetra], sentidoRotacion));
        result.push(stringIn);
    }
    console.log(result);
    return result.pop();
}

console.log(rollinString('abc', ['0 0 L','0 0 R', '1 1 L']))
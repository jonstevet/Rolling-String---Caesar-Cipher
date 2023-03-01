import replaceAt from '../modules/replaceat.js';

describe('reemplaza caracter', () => {
    test('reemplaza en string abc caracter-0- con x, respuesta = xbc', () => {
        String.prototype.replaceAt = replaceAt;
      expect('abc'.replaceAt(0, 'x')).toStrictEqual('xbc');
    });
});
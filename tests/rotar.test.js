import rotar from '../modules/rotar.js';

describe('rotar module', () => {
    test('rota 1 posicion a la izquierda de x, respuesta = w', () => {
      expect(rotar('x', 'L')).toStrictEqual('w');
    });
});
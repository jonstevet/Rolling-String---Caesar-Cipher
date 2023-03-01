import rollinString from '../index';

describe('Rolling String', () => {
    test('funcion que codifica strings usando caesar cipher', () => {
      expect(rollinString('abc', ['0 0 L','0 0 R'])).toStrictEqual('abc');
    });
});
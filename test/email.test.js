const validaEmail = require('../js/email');

describe('Teste de email', () => {
    // eslint-disable-next-line no-unused-expressions
    test('Verifica o funcionamento da função', () => {
    expect(validaEmail('teste@gmail.com')).toBe(true)
    });
});


test('Verifica se a função corresponde aos requisitos', () => {
    expect('teste@gmail.com').toMatch('@')
});
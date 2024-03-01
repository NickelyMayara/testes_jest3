const verificaIdade = require('../js/idade');

describe('Teste para verificar categorias', () => {
    // eslint-disable-next-line no-unused-expressions
    test('Verifica o funcionamento da função com números menores que 5', () => {
    expect(verificaIdade(4)).toBe('Erro...Digite números maiores que 5')
    });
});

test('Verifica o funcionamento da função na categoria 1', () => {
expect(verificaIdade(6)).toBe('Infantil A')
});

test('Verifica o funcionamento da função na categoria 2', () => {
expect(verificaIdade(8)).toBe('Infantil B')
});

test('Verifica o funcionamento da função na categoria 3', () => {
expect(verificaIdade(12)).toBe('Juvenil A')
});

test('Verifica o funcionamento da função na categoria 4', () => {
expect(verificaIdade(16)).toBe('Juvenil B')
});

test('Verifica o funcionamento da função com 18 anos', () => {
expect(verificaIdade(18)).toBe('Adulto')
});

test('Verifica o funcionamento da função com números maiores que 18', () => {
expect(verificaIdade(20)).toBe('Adulto')
});
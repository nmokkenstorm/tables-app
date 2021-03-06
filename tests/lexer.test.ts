import {Lexer} from '../src/services/Lexer';

it('should generate a stream of tokens', () => {
  const expression = '1 + 1';

  const lexer = new Lexer(expression);

  expect(lexer.getNextToken().value).toBe(1);
  expect(lexer.getNextToken().type).toBe('PLUS');
  expect(lexer.getNextToken().value).toBe(1);
});

it('it should handle extra spaces correctly', () => {
  const expression = '     1      -  3      ';

  const lexer = new Lexer(expression);

  expect(lexer.getNextToken().value).toBe(1);
  expect(lexer.getNextToken().type).toBe('MINUS');
  expect(lexer.getNextToken().value).toBe(3);
  expect(lexer.getNextToken().type).toBe('EOF');
});

it('it should be able to handle division and multiplication', () => {
  const expression = '1 * 2 / 3';

  const lexer = new Lexer(expression);

  expect(lexer.getNextToken().value).toBe(1);
  expect(lexer.getNextToken().type).toBe('MUL');
  expect(lexer.getNextToken().value).toBe(2);
  expect(lexer.getNextToken().type).toBe('DIV');
  expect(lexer.getNextToken().value).toBe(3);
  expect(lexer.getNextToken().type).toBe('EOF');
});

it('it should be able to handle multi token expressions', () => {
  const expression = '1 >= 2 != 0';

  const lexer = new Lexer(expression);

  expect(lexer.getNextToken().value).toBe(1);
  expect(lexer.getNextToken().type).toBe('GREATER_EQUALS');
  expect(lexer.getNextToken().value).toBe(2);
  expect(lexer.getNextToken().type).toBe('NOT_EQUALS');
  expect(lexer.getNextToken().value).toBe(0);
});

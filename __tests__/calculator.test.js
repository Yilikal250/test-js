const calculator = require('../calculator');
const stringLength = require('../stringcount');
const reverseString = require('../reverse');
const cap = require('../cap');


describe('calculator tests', () => {
  test('adding 1 + 2 should return 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });
  test('adding -1 + 1 should return 0', () => {
    expect(calculator.sum(-1, 1)).toBe(0);
  });
  test('adding -1 + 1 should NOT return 2', () => {
    expect(calculator.sum(-1, 1)).not.toBe(2);
  });

  test('2 - 2 should NOT return 1', () => {
    expect(calculator.diff(2, 2)).not.toBe(1);
  });
  test('0 - 2 should return -2', () => {
    expect(calculator.diff(0, 2)).toBe(-2);
  });
  test('-1 - 1 should NOT return 2', () => {
    expect(calculator.diff(-1, -1)).not.toBe(2);
  });
  test('2 * 0 should return 0', () => {
    expect(calculator.mul(2, 0)).toBe(0);
  });
  test('2 * 2 should return 4', () => {
    expect(calculator.mul(2, 2)).toBe(4);
  });
  test('0 * 0 should return 0', () => {
    expect(calculator.mul(0, 0)).toBe(0);
  });
  test('2 / 2 should NOT return 1', () => {
    expect(calculator.div(2, 2)).toBe(1);
  });
  test('-2 / 2 should return -1', () => {
    expect(calculator.div(-2, 2)).toBe(-1);
  });
  test('0 / 2 should NOT return 0', () => {
    expect(calculator.div(0, 2)).toBe(0);
  });
});

describe('stringcount tests', () => {
  test('string Abebe should return 5', () => {
    expect(stringLength('Abebe')).toBe(5);
  });
  test('string n should NOT return 0', () => {
    expect(stringLength('n')).not.toBe(0);
  });
  test('string  should  return 0', () => {
    expect(stringLength('')).toBe(0);
  });
});

describe('stringcount tests', () => {
  test('string Abebe should return ebebA', () => {
    expect(reverseString('Abebe')).toBe("ebebA");
  });
  test('string n should NOT return Abebe', () => {
    expect(reverseString('Abebe')).not.toBe('Abebe');
  });
  test('string  should  return ALEX', () => {
    expect(cap('ALEX')).toBe('ALEX');
  });
});

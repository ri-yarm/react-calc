import calculatorReducer, {
  calculatePercentage,
  inputNumber,
  setOperator,
  toggleSign,
} from '@/features/calculator/model/slice';

describe('calculator reducer', () => {
  const initialState = {
    display: '0',
    previousDisplay: '',
    operator: null,
    history: [],
  };

  test('дисплей', () => {
    const actual = calculatorReducer(initialState, inputNumber('1'));
    expect(actual.display).toBe('1');
  });

  test('ставим оператор', () => {
    const state = calculatorReducer(initialState, inputNumber('3'));
    const actual = calculatorReducer(state, setOperator('+'));
    expect(actual.operator).toBe('+');
    expect(actual.previousDisplay).toBe('3');
    expect(actual.display).toBe('0');
  });

  test('переключаем знак', () => {
    const state = calculatorReducer(initialState, inputNumber('5'));
    const actual = calculatorReducer(state, toggleSign());
    expect(actual.display).toBe('-5');
  });

  test('считаем проценты', () => {
    const state = calculatorReducer(initialState, inputNumber('200'));
    const actual = calculatorReducer(state, calculatePercentage());
    expect(actual.display).toBe('2');
  });
});

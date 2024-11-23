import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState } from '@/features/calculator/model/slice/types';

const initialState: CalculatorState = {
  display: '0',
  previousDisplay: '',
  operator: null,
  history: [],
};

const index = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputNumber(state, action: PayloadAction<string>) {
      state.display = state.display === '0' ? action.payload : state.display + action.payload;
    },
    setOperator(state, action: PayloadAction<string>) {
      state.operator = action.payload;
      state.previousDisplay = state.display;
      state.display = '0';
    },
    updateDisplay(state, action: PayloadAction<string>) {
      return {
        ...state,
        display: action.payload,
      };
    },
    calculateResult(state) {
      const prev = parseFloat(state.previousDisplay);
      const current = parseFloat(state.display);
      let result = 0;

      switch (state.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          break;
      }

      state.display = result.toString();
      state.previousDisplay = '';
      state.operator = null;
      state.history.push(`${prev} ${state.operator} ${current} = ${result}`);
    },
    clear(state) {
      state.display = '0';
      state.previousDisplay = '';
      state.operator = null;
    },
    toggleSign(state) {
      state.display = (parseFloat(state.display) * -1).toString();
    },
    calculatePercentage(state) {
      state.display = (parseFloat(state.display) / 100).toString();
    },
    // addHistory(state, action: PayloadAction<HistoryEntry>) {
    //   state.history.push(action.payload);
    // },
    // setHistory(state, action: PayloadAction<HistoryEntryArray>) {
    //   return {
    //     ...state,
    //     history: action.payload,
    //   };
    // },
  },
});

export const { inputNumber, setOperator, calculateResult, clear, toggleSign, calculatePercentage } = index.actions;
export default index.reducer;

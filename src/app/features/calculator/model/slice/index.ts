import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState, HistoryEntry } from '@/features/calculator/model/slice/types';
import formatDate from '@/shared/utilities/date';
import { addToHistory, fetchHistory } from '@/features/calculator/model/api';

const initialState: CalculatorState = {
  display: '0',
  previousDisplay: '',
  operator: null,
  history: [],
};

const calculator = createSlice({
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
    calculateResult(state) {
      const prev = parseFloat(state.previousDisplay);
      const current = parseFloat(state.display);
      let result = 0;

      if (state.display === '0' && state.previousDisplay === '') {
        return;
      }

      if (Number.isNaN(prev) || Number.isNaN(current)) {
        state.display = 'Ошибка';
        return;
      }

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
          result = 0;
          return;
      }

      const history: Omit<HistoryEntry, 'id'> = {
        operation: `${formatDate(new Date())} ${prev} ${state.operator} ${current} = ${result}`,
      };

      state.history.push(history);

      state.display = result.toString();
      state.previousDisplay = '';
      state.operator = null;
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
      const result = parseFloat(state.display) / 100;

      const history: Omit<HistoryEntry, 'id'> = {
        operation: `${formatDate(new Date())} ${state.display} % ${100} = ${result}`,
      };

      state.history.push(history);
      state.display = result.toString();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHistory.fulfilled, (state, action: PayloadAction<HistoryEntry[]>) => {
      // reverse потмоу что мокапи так отдаёт
      state.history = action.payload;
    });
    builder.addCase(fetchHistory.rejected, () => {
      alert('ошибка при загрузке истории');
    });
    builder.addCase(addToHistory.fulfilled, () => {
      // можем пеоеиспользовать где нибудь
    });
    builder.addCase(addToHistory.rejected, () => {
      alert('ошибка при добавлении в историю');
    });
  },
});

export const { inputNumber, setOperator, calculateResult, clear, toggleSign, calculatePercentage } = calculator.actions;
export default calculator.reducer;

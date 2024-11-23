import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState, HistoryEntry, HistoryEntryArray } from '@/features/calculator/model/slice/types';

const initialState: CalculatorState = {
  display: '0',
  history: [],
};

const index = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateDisplay(state, action: PayloadAction<string>) {
      return {
        ...state,
        display: action.payload,
      };
    },
    addHistory(state, action: PayloadAction<HistoryEntry>) {
      state.history.push(action.payload);
    },
    setHistory(state, action: PayloadAction<HistoryEntryArray>) {
      return {
        ...state,
        history: action.payload,
      };
    },
  },
});

export const { updateDisplay, addHistory, setHistory } = index.actions;
export default index.reducer;

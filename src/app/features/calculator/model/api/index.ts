import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CalculatorState, HistoryEntry } from '@/features/calculator/model/slice/types';
import { calculatePercentage, calculateResult } from '@/features/calculator/model/slice';

// ? использовал moakapi как самый простой вариант хранения истории
const API_URL = 'https://6741d907e4647499008efdf4.mockapi.io/history';

export const fetchHistory = createAsyncThunk('calculator/fetchHistory', async () => {
  const response = await axios.get<HistoryEntry[]>(API_URL);
  return response.data;
});

export const addToHistory = createAsyncThunk('calculator/addToHistory', async (entry: Omit<HistoryEntry, 'id'>) => {
  const response = await axios.post<HistoryEntry>(API_URL, entry);
  return response.data;
});

export const calculateAndAddToHistory = createAsyncThunk(
  'calculator/calculateAndAddToHistory',
  async (_, { dispatch, getState }) => {
    dispatch(calculateResult());

    const state = getState() as { calculator: CalculatorState };
    const lastEntry = state.calculator.history[state.calculator.history.length - 1];

    if (lastEntry) {
      await dispatch(addToHistory({ operation: lastEntry.operation }));
    }
  },
);

export const calculatePercentageAndAddToHistory = createAsyncThunk(
  'calculator/calculateAndAddToHistory',
  async (_, { dispatch, getState }) => {
    dispatch(calculatePercentage());

    const state = getState() as { calculator: CalculatorState };
    const lastEntry = state.calculator.history[state.calculator.history.length - 1];

    if (lastEntry) {
      await dispatch(addToHistory({ operation: lastEntry.operation }));
    }
  },
);

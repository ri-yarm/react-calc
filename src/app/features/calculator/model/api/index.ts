import axios from 'axios';
import { HistoryEntry } from '@/features/calculator/model/slice/types';

// ? использовал moakapi как самый простой вариант хранения истории
const API_URL = 'https://6741d907e4647499008efdf4.mockapi.io/history';

export const fetchHistory = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToHistory = async (entry: HistoryEntry) => {
  const response = await axios.post(API_URL, entry);
  return response.data;
};

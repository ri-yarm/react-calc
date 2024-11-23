export type HistoryEntry = {
  id: string;
  expression: string;
  result: string;
  timestamp: string;
};

export type HistoryEntryArray = HistoryEntry[];

export interface CalculatorState {
  display: string;
  history: HistoryEntry[];
}

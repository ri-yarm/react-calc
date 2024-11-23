export type HistoryEntry = {
  id: string;
  date: Date;
  operation: string;
};

export type HistoryEntryArray = HistoryEntry[];

export interface CalculatorState {
  display: string;
  history: HistoryEntry[];
}

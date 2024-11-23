export type HistoryEntry = {
  id: string;
  date: Date;
  operation: string;
};

export type HistoryEntryArray = HistoryEntry[];

export interface CalculatorState {
  display: string;
  previousDisplay: string;
  operator: string | null;
  history: HistoryEntryArray;
}

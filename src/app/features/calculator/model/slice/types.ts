export type HistoryEntry = {
  id: string;
  operation: string;
};

export type HistoryEntryArray = HistoryEntry[];

export interface CalculatorState {
  display: string;
  previousDisplay: string;
  operator: string | null;
  history: HistoryEntryArray;
}

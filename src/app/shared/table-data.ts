export interface TableData {
  stepname: string;
  type: string;
  static: boolean;
  editorType: string;
  totalEB: number;
  totalDDM: number;
  tries: number;
  stepLabel: boolean;
  separateDDMAP: boolean;
  totalActStmt: number;
  totalPassStmt: number;
  editorPos: number;
  tablePos: Array<number>;
}

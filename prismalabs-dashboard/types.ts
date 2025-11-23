export interface Patient {
  name: string;
  program: string;
  currentPanelDate: string;
  nextPanelDate: string;
}

export interface ScoreData {
  current: number;
  previousDifference: number;
  analyzedCount: number;
  withinReferenceCount: number;
  attentionCount: number;
}

export interface AreaStatus {
  id: string;
  name: string;
  status: 'Ideal' | 'Atenção' | 'Alerta';
  examples: string;
  iconName: string;
}

export interface TimelinePoint {
  date: string;
  score: number;
}

export interface BiomarkerHistoryPoint {
  date: string;
  value: number;
}

export interface Biomarker {
  id: string;
  area: string;
  name: string;
  value: string;
  unit: string;
  status: 'Ideal' | 'Atenção' | 'Alto Risco' | 'Baixo Risco';
  trend: 'up' | 'down' | 'stable';
  history?: BiomarkerHistoryPoint[];
}
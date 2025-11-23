import React from 'react';
import { Header } from './components/Header';
import { ScoreCard } from './components/ScoreCard';
import { RecentHighlights } from './components/RecentHighlights';
import { VitalAreasCard } from './components/VitalAreasCard';
import { TimelineCard } from './components/TimelineCard';
import { MedicalIntelligenceCard } from './components/MedicalIntelligenceCard';
import { HighlightsCard } from './components/HighlightsCard';
import { BiomarkerTable } from './components/BiomarkerTable';
import { DoctorSummaryCard } from './components/DoctorSummaryCard';
import { Patient, ScoreData, AreaStatus, TimelinePoint, Biomarker } from './types';

// --- Mock Data ---

const patientData: Patient = {
  name: 'Ricardo C.',
  program: 'Programa Avançado',
  currentPanelDate: 'Outubro 2024',
  nextPanelDate: 'Abril 2025'
};

const scoreData: ScoreData = {
  current: 82,
  previousDifference: 4,
  analyzedCount: 112,
  withinReferenceCount: 104,
  attentionCount: 8
};

const areaData: AreaStatus[] = [
  { id: '1', name: 'Coração', status: 'Ideal', examples: 'Colesterol, ApoB, Homocisteína...', iconName: 'Heart' },
  { id: '2', name: 'Metabolismo', status: 'Atenção', examples: 'Glicemia, HbA1c, Insulina...', iconName: 'Zap' },
  { id: '3', name: 'Hormônios', status: 'Ideal', examples: 'Testosterona, Cortisol, DHEA...', iconName: 'Layers' },
  { id: '4', name: 'Inflamação', status: 'Ideal', examples: 'PCR-us, Ferritina, Fibrinogênio...', iconName: 'Flame' },
  { id: '5', name: 'Tireoide', status: 'Ideal', examples: 'TSH, T3 Livre, T4 Livre...', iconName: 'Activity' },
  { id: '6', name: 'Rins', status: 'Ideal', examples: 'Creatinina, Ureia, Cistatina C...', iconName: 'Filter' },
  { id: '7', name: 'Fígado', status: 'Atenção', examples: 'TGO, TGP, GGT...', iconName: 'Beer' },
  { id: '8', name: 'Imunidade', status: 'Ideal', examples: 'Leucócitos, Linfócitos...', iconName: 'Shield' },
  { id: '9', name: 'Nutrientes', status: 'Atenção', examples: 'Vit D, B12, Magnésio...', iconName: 'Apple' },
  { id: '10', name: 'Sangue', status: 'Ideal', examples: 'Hemoglobina, Hematócrito...', iconName: 'Droplet' },
];

const timelineData: TimelinePoint[] = [
  { date: 'Jan/23', score: 76 },
  { date: 'Jul/23', score: 80 },
  { date: 'Out/24', score: 82 },
];

const biomarkerData: Biomarker[] = [
  { 
    id: '1', 
    area: 'Coração', 
    name: 'ApoB', 
    value: '78', 
    unit: 'mg/dL', 
    status: 'Ideal', 
    trend: 'down',
    history: [
      { date: 'Jan/23', value: 92 },
      { date: 'Jul/23', value: 85 },
      { date: 'Out/24', value: 78 },
    ]
  },
  { 
    id: '2', 
    area: 'Coração', 
    name: 'LDL Colesterol', 
    value: '98', 
    unit: 'mg/dL', 
    status: 'Ideal', 
    trend: 'stable',
    history: [
      { date: 'Jan/23', value: 110 },
      { date: 'Jul/23', value: 99 },
      { date: 'Out/24', value: 98 },
    ]
  },
  { 
    id: '3', 
    area: 'Hormônios', 
    name: 'Vitamina D', 
    value: '24', 
    unit: 'ng/mL', 
    status: 'Atenção', 
    trend: 'down',
    history: [
      { date: 'Jan/23', value: 35 },
      { date: 'Jul/23', value: 28 },
      { date: 'Out/24', value: 24 },
    ]
  },
  { 
    id: '4', 
    area: 'Metabolismo', 
    name: 'Glicose Jejum', 
    value: '96', 
    unit: 'mg/dL', 
    status: 'Ideal', 
    trend: 'up',
    history: [
      { date: 'Jan/23', value: 88 },
      { date: 'Jul/23', value: 92 },
      { date: 'Out/24', value: 96 },
    ]
  },
  { 
    id: '5', 
    area: 'Metabolismo', 
    name: 'Insulina', 
    value: '12', 
    unit: 'uUI/mL', 
    status: 'Atenção', 
    trend: 'up',
    history: [
      { date: 'Jan/23', value: 6 },
      { date: 'Jul/23', value: 9 },
      { date: 'Out/24', value: 12 },
    ]
  },
  { 
    id: '6', 
    area: 'Fígado', 
    name: 'TGP (ALT)', 
    value: '52', 
    unit: 'U/L', 
    status: 'Atenção', 
    trend: 'up',
    history: [
      { date: 'Jan/23', value: 30 },
      { date: 'Jul/23', value: 42 },
      { date: 'Out/24', value: 52 },
    ]
  },
  { 
    id: '7', 
    area: 'Fígado', 
    name: 'GGT', 
    value: '60', 
    unit: 'U/L', 
    status: 'Atenção', 
    trend: 'up',
    history: [
      { date: 'Jan/23', value: 28 },
      { date: 'Jul/23', value: 45 },
      { date: 'Out/24', value: 60 },
    ]
  },
  { 
    id: '8', 
    area: 'Inflamação', 
    name: 'PCR Ultra', 
    value: '0.8', 
    unit: 'mg/dL', 
    status: 'Ideal', 
    trend: 'down',
    history: [
      { date: 'Jan/23', value: 2.5 },
      { date: 'Jul/23', value: 1.2 },
      { date: 'Out/24', value: 0.8 },
    ]
  },
  { 
    id: '9', 
    area: 'Tireoide', 
    name: 'TSH', 
    value: '2.4', 
    unit: 'uUI/mL', 
    status: 'Ideal', 
    trend: 'stable',
    history: [
      { date: 'Jan/23', value: 2.1 },
      { date: 'Jul/23', value: 2.3 },
      { date: 'Out/24', value: 2.4 },
    ]
  },
  { 
    id: '10', 
    area: 'Nutrientes', 
    name: 'Vitamina B12', 
    value: '450', 
    unit: 'pg/mL', 
    status: 'Ideal', 
    trend: 'stable',
    history: [
      { date: 'Jan/23', value: 440 },
      { date: 'Jul/23', value: 460 },
      { date: 'Out/24', value: 450 },
    ]
  },
];

function App() {
  return (
    <div className="min-h-screen pb-20">
      <Header patient={patientData} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Stats & History) */}
          <div className="lg:col-span-8 space-y-8">
            <ScoreCard data={scoreData} />
            <RecentHighlights />
            <VitalAreasCard areas={areaData} />
            <TimelineCard data={timelineData} />
          </div>

          {/* Right Column (AI & Highlights) */}
          <div className="lg:col-span-4 space-y-8">
            <MedicalIntelligenceCard />
            <HighlightsCard />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y-8">
          <BiomarkerTable data={biomarkerData} />
          <DoctorSummaryCard />
        </div>

      </main>
      
      <footer className="text-center py-8 text-slate-400 text-sm">
        <p>© 2024 PrismaLabs. Todos os direitos reservados.</p>
        <p className="mt-1 text-xs">Conhecer é cuidar.</p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { Card } from './ui/Card';
import { ScoreData } from '../types';
import { TrendingUp, Activity, CheckCircle, AlertCircle } from 'lucide-react';

interface ScoreCardProps {
  data: ScoreData;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ data }) => {
  return (
    <Card 
      title="Score Clínico"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Main Score */}
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-2">
            <span className="text-6xl font-bold text-slate-900">{data.current}</span>
            <span className="text-xl text-slate-400 font-medium">/100</span>
          </div>
          
          <div className="flex items-center mt-2 text-emerald-600 font-medium text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+{data.previousDifference} pts vs. painel anterior</span>
          </div>
          
          <p className="mt-4 text-slate-600 text-sm max-w-sm leading-relaxed">
            Resultado global calculado a partir de mais de 100 biomarcadores, com foco em riscos inflamatórios, metabólicos e cardiovasculares.
          </p>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
            <Activity className="text-slate-400 mb-2" size={20} />
            <span className="text-2xl font-bold text-slate-800">{data.analyzedCount}</span>
            <span className="text-xs text-slate-500 mt-1">Marcadores analisados</span>
          </div>
          
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex flex-col items-center justify-center text-center">
            <CheckCircle className="text-emerald-500 mb-2" size={20} />
            <span className="text-2xl font-bold text-emerald-700">{data.withinReferenceCount}</span>
            <span className="text-xs text-emerald-600 mt-1">Dentro da referência</span>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center justify-center text-center">
            <AlertCircle className="text-amber-500 mb-2" size={20} />
            <span className="text-2xl font-bold text-amber-700">{data.attentionCount}</span>
            <span className="text-xs text-amber-600 mt-1">Em atenção</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
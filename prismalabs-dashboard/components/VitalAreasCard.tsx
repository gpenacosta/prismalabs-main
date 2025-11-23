import React from 'react';
import { Card } from './ui/Card';
import { AreaStatus } from '../types';
import { Heart, Zap, Layers, Flame, Activity, Filter, Beer, Shield, Apple, Droplet } from 'lucide-react';

interface VitalAreasCardProps {
  areas: AreaStatus[];
}

// Icon mapper
const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    'Coração': <Heart size={18} />,
    'Metabolismo': <Zap size={18} />,
    'Hormônios': <Layers size={18} />,
    'Inflamação': <Flame size={18} />,
    'Tireoide': <Activity size={18} />,
    'Rins': <Filter size={18} />,
    'Fígado': <Beer size={18} />,
    'Imunidade': <Shield size={18} />,
    'Nutrientes': <Apple size={18} />,
    'Sangue': <Droplet size={18} />,
  };
  return icons[name] || <Activity size={18} />;
};

export const VitalAreasCard: React.FC<VitalAreasCardProps> = ({ areas }) => {
  return (
    <Card
      title="Seu check-up inteligente em 10 áreas vitais"
      subtitle="Painel laboratorial completo com mais de 100 biomarcadores organizados em 10 áreas vitais, para detecção precoce de riscos de saúde e otimização contínua da sua saúde."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {areas.map((area) => {
          const isAttention = area.status !== 'Ideal';
          return (
            <div 
              key={area.id} 
              className={`p-4 rounded-lg border transition-all hover:shadow-sm ${
                isAttention ? 'bg-amber-50/50 border-amber-100' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-full ${isAttention ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'}`}>
                    {getIcon(area.name)}
                  </div>
                  <span className="font-semibold text-slate-800">{area.name}</span>
                </div>
                <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${isAttention ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                    <span className={`text-xs font-medium ${isAttention ? 'text-amber-700' : 'text-emerald-700'}`}>
                        {area.status}
                    </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 ml-10 truncate">
                {area.examples}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
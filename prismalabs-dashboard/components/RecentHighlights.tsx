import React from 'react';
import { Card } from './ui/Card';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface Highlight {
  id: string;
  type: 'positive' | 'warning';
  label: string;
  tooltip: string;
}

const highlights: Highlight[] = [
  {
    id: '1',
    type: 'positive',
    label: 'Perfil lipídico otimizado',
    tooltip: 'LDL e ApoB estão em zona de menor risco. Ótimo indicador cardiovascular.',
  },
  {
    id: '2',
    type: 'positive',
    label: 'PCR normalizado',
    tooltip: 'Inflamação sistêmica voltou à faixa ideal em relação ao painel anterior.',
  },
  {
    id: '3',
    type: 'positive',
    label: 'Glicemia estável',
    tooltip: 'Seus marcadores de açúcar no sangue se mantêm dentro da referência.',
  },
  {
    id: '4',
    type: 'warning',
    label: 'Função hepática em atenção',
    tooltip: 'Enzimas do fígado acima do ideal, vale acompanhar com seu médico.',
  },
  {
    id: '5',
    type: 'warning',
    label: 'Vitamina D abaixo do ideal',
    tooltip: 'Nível abaixo da faixa ideal de saúde, discuta exposição solar/reposição com seu médico.',
  },
];

export const RecentHighlights: React.FC = () => {
  // Header Action (Legend)
  const Legend = (
    <div className="flex items-center space-x-3 text-xs font-medium text-slate-500">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></div>
        <span>Melhorias</span>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-amber-500 mr-1.5"></div>
        <span>Em atenção</span>
      </div>
    </div>
  );

  return (
    <Card
      title="Destaques recentes"
      subtitle="Uma visão rápida do que melhorou e do que merece atenção neste painel."
      headerAction={Legend}
    >
      <div className="flex flex-wrap gap-3">
        {highlights.map((item) => (
          <div
            key={item.id}
            title={item.tooltip}
            className={`
              inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-help
              ${
                item.type === 'positive'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100'
                  : 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100'
              }
            `}
          >
            {item.type === 'positive' ? (
              <CheckCircle2 size={14} className="mr-1.5 flex-shrink-0" />
            ) : (
              <AlertCircle size={14} className="mr-1.5 flex-shrink-0" />
            )}
            {item.label}
          </div>
        ))}
      </div>
    </Card>
  );
};

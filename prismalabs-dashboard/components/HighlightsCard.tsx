import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Sparkles } from 'lucide-react';

export const HighlightsCard: React.FC = () => {
  return (
    <Card title="Destaques clínicos" className="mt-6">
      <div className="space-y-6">
        {/* Item 1 - ApoB (risco cardiovascular) */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Badge
              label="Cardiovascular"
              variant="neutral"
              className="bg-slate-100 text-slate-600"
            />
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Ideal
            </span>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-lg font-semibold text-slate-900">ApoB</span>
            <span className="text-lg font-bold text-slate-900">
              78 <span className="text-sm font-normal text-slate-500">mg/dL</span>
            </span>
          </div>

          {/* Visual Bar – <80, 80–99, 100–129, ≥130 */}
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            {/* < 80 mg/dL – zona ótima */}
            <div className="h-full w-[30%] bg-emerald-500/70" />
            {/* 80–99 mg/dL – dentro da meta recomendada */}
            <div className="h-full w-[25%] bg-emerald-300/70" />
            {/* 100–129 mg/dL – acima da meta, atenção */}
            <div className="h-full w-[20%] bg-amber-300" />
            {/* ≥ 130 mg/dL – alto risco */}
            <div className="h-full w-[25%] bg-rose-300/80" />

            {/* Marker ~78 mg/dL */}
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[28%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Baixo risco</span>
            <span>Ideal</span>
            <span>Alto risco</span>
          </div>

          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3 group">
            <p className="text-sm text-slate-600">
              Excelente. Nos últimos check-ups, seu ApoB passou de risco moderadoro para uma zona ideal.
            </p>
            <div title="Insight gerado com apoio da IA. A interpretação final é sempre do seu médico.">
              <Sparkles size={14} className="text-violet-500 mt-0.5 flex-shrink-0" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Item 2 - Vitamina D (25-OH) */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Badge
              label="Hormônios & Imunidade"
              variant="neutral"
              className="bg-slate-100 text-slate-600"
            />
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Atenção
            </span>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-lg font-semibold text-slate-900">Vitamina D</span>
            <span className="text-lg font-bold text-slate-900">
              24 <span className="text-sm font-normal text-slate-500">ng/mL</span>
            </span>
          </div>

          {/* Visual Bar – <20 deficiência, 20–29 abaixo, 30–60 adequado, 60–100 acima, >100 possível excesso */}
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            {/* < 20 – deficiência */}
            <div className="h-full w-[15%] bg-rose-300/80" />
            {/* 20–29 – abaixo do ideal */}
            <div className="h-full w-[15%] bg-amber-300" />
            {/* 30–60 – faixa adequada */}
            <div className="h-full w-[35%] bg-emerald-300/70" />
            {/* 60–100 – acima do ideal */}
            <div className="h-full w-[25%] bg-amber-200" />
            {/* > 100 – possível excesso */}
            <div className="h-full w-[10%] bg-rose-200/80" />

            {/* Marker ~24 ng/mL */}
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[22%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Deficiência</span>
            <span>Ideal</span>
            <span>Excesso</span>
          </div>

          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3 group">
            <p className="text-sm text-slate-600">
              Marcador associado à saúde óssea, muscular e imunológica, influenciado por exposição solar e hábitos alimentares.
            </p>
            <div title="Insight gerado com apoio da IA. A interpretação final é sempre do seu médico.">
              <Sparkles size={14} className="text-violet-500 mt-0.5 flex-shrink-0" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Item 3 - Testosterona Livre */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Badge
              label="Hormônios"
              variant="neutral"
              className="bg-slate-100 text-slate-600"
            />
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              Atenção
            </span>
          </div>

          <div className="flex justify-between items-end">
            <span className="text-lg font-semibold text-slate-900">Testosterona Livre</span>
            <span className="text-lg font-bold text-slate-900">
              6.5 <span className="text-sm font-normal text-slate-500">pg/mL</span>
            </span>
          </div>

          {/* Visual Bar – baixo, faixa de referência, acima da referência */}
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            {/* abaixo da referência */}
            <div className="h-full w-[20%] bg-amber-300" />
            {/* faixa de referência */}
            <div className="h-full w-[60%] bg-emerald-300/70" />
            {/* acima da referência */}
            <div className="h-full w-[20%] bg-amber-200" />

            {/* Marker ~6.5 pg/mL */}
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[18%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Baixa</span>
            <span>Normal</span>
            <span>Alta</span>
          </div>

          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3 group">
            <p className="text-sm text-slate-600">
              Nível abaixo do ideal para a sua idade. Marcador pode ser associado a sintomas como baixa energia e redução de libido.
            </p>
            <div title="Insight gerado com apoio da IA. A interpretação final é sempre do seu médico.">
              <Sparkles size={14} className="text-violet-500 mt-0.5 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
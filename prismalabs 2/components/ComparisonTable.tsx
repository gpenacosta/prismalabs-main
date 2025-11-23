import React from 'react';
import { Check, X, FileText, Smartphone, Activity, UserPlus } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: "Profundidade da Análise",
      traditional: "Básico (20-30 exames)",
      prisma: "Integral (100+ biomarcadores)",
      icon: Activity
    },
    {
      feature: "Formato dos Resultados",
      traditional: "PDFs técnicos e confusos",
      prisma: "Dashboard digital interativo",
      icon: Smartphone
    },
    {
      feature: "Interpretação",
      traditional: "Apenas faixas de referência padrão",
      prisma: "Zonas otimizadas de longevidade",
      icon: FileText
    },
    {
      feature: "Plano de Ação",
      traditional: "Inexistente",
      prisma: "Plano médico personalizado",
      icon: Check
    },
    {
      feature: "Modelo de Cuidado",
      traditional: "Reativo (apenas quando adoece)",
      prisma: "Proativo e Contínuo (acompanhamento)",
      icon: UserPlus
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Por que o Prisma é <span className="text-purple-700">diferente</span>.
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A maioria dos check-ups olha apenas para doenças. Nós olhamos para a sua saúde máxima.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block bg-cream/30 rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-4">O que avaliamos</div>
              <div className="col-span-4 text-center">Check-up Tradicional</div>
              <div className="col-span-4 text-center text-purple-700">Padrão Prisma Labs</div>
            </div>
            
            <div className="divide-y divide-slate-100 bg-white">
              {rows.map((row, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="grid grid-cols-12 p-6 items-center hover:bg-purple-50/30 transition-colors">
                    <div className="col-span-4 flex items-center gap-3 font-semibold text-slate-900">
                      <div className="p-2 bg-slate-100 text-slate-500 rounded-lg">
                        <row.icon size={18} />
                      </div>
                      {row.feature}
                    </div>
                    <div className="col-span-4 text-center text-slate-500 flex justify-center items-center gap-2">
                      {i > 2 ? <X className="w-5 h-5 text-slate-400" /> : null}
                      {row.traditional}
                    </div>
                    <div className="col-span-4 text-center font-bold text-purple-700 flex justify-center items-center gap-2 bg-purple-50/50 py-2 rounded-lg">
                      <Check className="w-5 h-5 text-purple-600" />
                      {row.prisma}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 font-bold text-slate-900">
                    <div className="p-2 bg-slate-100 text-slate-500 rounded-lg">
                      <row.icon size={18} />
                    </div>
                    {row.feature}
                  </div>
                  
                  <div className="flex justify-between items-center text-sm py-3 border-b border-slate-50">
                    <span className="text-slate-500">Tradicional</span>
                    <span className="text-slate-400 font-medium text-right max-w-[50%]">{row.traditional}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm py-3">
                    <span className="text-purple-700 font-bold">Prisma</span>
                    <span className="text-slate-900 font-bold text-right max-w-[50%] flex items-center gap-2 justify-end">
                       {row.prisma}
                       <Check className="w-4 h-4 text-purple-600 shrink-0" />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
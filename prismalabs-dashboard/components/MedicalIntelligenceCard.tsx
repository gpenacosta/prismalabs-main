import React from 'react';
import { Brain, Sparkles, Info } from 'lucide-react';

export const MedicalIntelligenceCard: React.FC = () => {
  // futuramente você pode ligar esse onClick a um modal ou navegação
  const handleViewFullAnalysis = () => {
    // placeholder – conectar com modal ou rota de análise completa
    console.log('Ver análise completa clicado');
  };

  return (
    <div className="bg-white rounded-xl border border-violet-100 shadow-sm overflow-hidden relative">
      {/* Decorative header gradient */}
      <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="p-2 bg-violet-100 rounded-lg">
            <Brain className="text-violet-600" size={24} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-slate-900">Inteligência médica</h3>
              <span className="inline-flex items-center rounded-full bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/20">
                Beta
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Análises geradas por IA treinada em evidência científica e revisada por médicos.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 relative">
          <div className="absolute -top-3 left-4 bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-500 uppercase tracking-wide flex items-center shadow-sm">
            <Sparkles size={10} className="mr-1 text-violet-500" />
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed mt-2">
            <p>
              <span className="font-semibold">Ricardo</span>, ao cruzar seus marcadores de fígado com o questionário de estilo de vida, a IA encontrou um padrão compatível com possível{' '}
              <span className="font-medium text-amber-700 bg-amber-50 px-1 rounded">sobrecarga hepática</span>
              : suas enzimas hepáticas estão acima do ideal e você relatou sedentarismo e consumo frequente de álcool.
            </p>
            <p>
              Essa combinação sugere que o fígado pode estar trabalhando no limite para lidar com gordura, toxinas e medicações do dia a dia. Em estágios iniciais, muitos desses quadros são silenciosos e potencialmente reversíveis com mudanças de hábito.
            </p>
            <p className="font-medium text-violet-800">
              Leve este resumo para o seu médico: juntos, vocês podem decidir se vale investigar mais a fundo (por exemplo, com um ultrassom de fígado) e definir um plano de redução de risco, com ajustes em alimentação, atividade física e álcool.
            </p>
          </div>
        </div>

        {/* Link de ação no bottom do card de inteligência médica */}
        <div className="mt-3">
          <button
            type="button"
            onClick={handleViewFullAnalysis}
            className="text-xs font-semibold text-violet-700 hover:text-violet-800 inline-flex items-center"
          >
            Ver análise completa
            <span className="ml-1">↗</span>
          </button>
        </div>

        <div className="mt-6 flex items-start space-x-2 p-3 bg-blue-50 rounded-lg text-blue-800 border border-blue-100">
          <Info size={16} className="mt-0.5 flex-shrink-0" />
          <p className="text-xs">
            <span className="font-semibold">Importante:</span> este insight não substitui consulta, diagnóstico ou tratamento médico. Use estas informações para apoiar a conversa com seu médico.
          </p>
        </div>
      </div>
    </div>
  );
};
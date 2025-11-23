import React from 'react';
import { Card } from './ui/Card';
import { ClipboardList, Copy } from 'lucide-react';

export const DoctorSummaryCard: React.FC = () => {
  return (
    <Card className="border-violet-100 bg-gradient-to-b from-white to-slate-50">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
            <div className="flex-shrink-0 bg-slate-900 text-white p-3 rounded-lg hidden md:block">
                <ClipboardList size={24} />
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Resumo para sua próxima consulta médica</h3>
                <p className="text-slate-600 text-sm mb-4">
                    Geramos um resumo com os principais pontos de atenção e evolução para você levar ao médico e facilitar a conversa.
                </p>
                
                <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm font-mono text-sm text-slate-700 relative">
                    <button className="absolute top-3 right-3 text-slate-400 hover:text-violet-600 transition-colors">
                        <Copy size={16} />
                    </button>
                    <ul className="space-y-2 list-disc list-outside ml-4">
                        <li>Perfil lipídico otimizado, <span className="font-semibold">ApoB</span> em zona ideal.</li>
                        <li><span className="font-semibold">Vitamina D</span> abaixo da faixa ideal (24 ng/mL), considerar ajuste de exposição solar/suplementação.</li>
                        <li>Possível sobrecarga hepática indicada por enzimas elevadas: avaliar exames de imagem e plano de redução de álcool.</li>
                        <li>Score Clínico evoluiu +4 pontos, indicando melhoria metabólica geral.</li>
                    </ul>
                </div>
                
                <div className="mt-4 text-xs text-slate-500 flex items-center">
                   Informações contextuais para a consulta médica, ajudando seu médico a ganhar tempo e profundidade na análise.
                </div>
            </div>
        </div>
    </Card>
  );
};
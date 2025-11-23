import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const BiologicalAge: React.FC = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 max-w-xl">
            <FadeIn>
              <div className="inline-block px-3 py-1 bg-white text-purple-800 text-xs font-bold rounded-full mb-4 border border-white/50 shadow-sm">
                NOVIDADE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Descubra sua <br/>
                <span className="text-purple-700">idade biológica.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Compare quantos anos seu corpo aparenta ter por dentro com a sua idade do RG. Acompanhe se suas mudanças de estilo de vida estão realmente rejuvenescendo seu sistema.
              </p>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-white/50 flex items-center justify-center shadow-sm text-purple-700 font-bold text-sm shrink-0">1</div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Exame Inicial</strong>
                    <p className="text-slate-600 text-sm">Estabeleça sua linha de base. Você está envelhecendo mais rápido ou mais devagar que a média?</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-white/50 flex items-center justify-center shadow-sm text-purple-700 font-bold text-sm shrink-0">2</div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Plano de Ação</strong>
                    <p className="text-slate-600 text-sm">Receba recomendações para melhorar sono, dieta e atividade física focadas em rejuvenescer.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-white/50 flex items-center justify-center shadow-sm text-purple-700 font-bold text-sm shrink-0">3</div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Acompanhamento</strong>
                    <p className="text-slate-600 text-sm">Repita em 6 meses. Ver o número da sua idade biológica cair é a melhor motivação que existe.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1 w-full">
            <FadeIn direction="left" className="relative">
              {/* Dark Card for Contrast/Tech feel */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-900/20">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-slate-500 text-sm uppercase font-semibold tracking-wider mb-1">Idade Cronológica (RG)</p>
                    <p className="text-2xl font-bold text-white">41 Anos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-sm uppercase font-semibold tracking-wider mb-1">Idade Biológica</p>
                    <p className="text-4xl font-bold text-purple-400">35 Anos</p>
                  </div>
                </div>

                {/* Visual Indicator */}
                <div className="relative h-4 bg-slate-800 rounded-full mb-6">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[41%] w-0.5 h-8 bg-slate-600"></div> {/* Marker 41 */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10 border-4 border-slate-900"></div>
                  <div className="h-full w-[35%] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full opacity-90"></div>
                </div>

                {/* Timeline */}
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <p className="text-sm text-slate-300 font-medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    Sua evolução
                  </p>
                  <div className="flex items-end justify-between h-32 gap-4">
                    <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
                      <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">38.0</span>
                      <div className="w-full bg-slate-700 rounded-t-md h-[60%] group-hover:bg-slate-600 transition-colors"></div>
                      <span className="text-xs text-slate-400">Jan/23</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
                      <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">36.5</span>
                      <div className="w-full bg-slate-700 rounded-t-md h-[45%] group-hover:bg-slate-600 transition-colors"></div>
                      <span className="text-xs text-slate-400">Jul/23</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2">
                      <span className="text-xs text-purple-400 font-bold">35.0</span>
                      <div className="w-full bg-purple-500 rounded-t-md h-[30%] shadow-[0_0_10px_rgba(168,85,247,0.3)]"></div>
                      <span className="text-xs text-white font-medium">Hoje</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Estimativa ilustrativa baseada em biomarcadores inflamatórios e metabólicos.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
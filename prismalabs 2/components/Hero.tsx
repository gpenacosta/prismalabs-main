import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { scrollToSection } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream py-16 md:py-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          src="https://www.pexels.com/download/video/8233011/"
          autoPlay
          muted
          loop
          playsInline
        />
        {/*old video: https://www.pexels.com/download/video/8233011/*/}
        {/* Cream-tinted overlay */}
        <div className="absolute inset-0 bg-cream/60 backdrop-blur-[2px]" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center pt-12 md:pt-20">
          <FadeIn delay={0.1} className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-slate-800 text-sm font-semibold mb-8 tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              O futuro da sua saúde
            </span>
          </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            <span className="block">Conheça melhor o seu corpo.</span>
            <span className="block text-purple-700">Seu check-up inteligente.</span>
          </h1>
        </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-slate-600 mt-10 mb-12 md:mt-14 md:mb-16 max-w-4xl mx-auto leading-relaxed">
              Acompanhe sua saúde em mais de 100 biomarcadores com inteligência de dados e IA treinada por evidência científica.
              Entregamos resultados de exames em uma visão integral para você e seu médico discutirem com mais informação — 
              porque conhecer é cuidar.
            </p>
          </FadeIn>

          {/* Feature bullets */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-5xl mx-auto text-left">
              {[
                'Painel clínico abrangente (100+ biomarcadores)',
                'Detecção precoce de riscos de saúde',
                'Otimize sua saúde com base em dados personalizados',
                'Coleta domiciliar ou laboratorial',
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:bg-white/80 transition-colors"
                >
                  <div className="shrink-0 p-1.5 bg-purple-100 text-purple-700 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('planos')}
                className="px-10 py-4 bg-purple-700 text-white font-bold rounded-full hover:bg-purple-800 transition-all transform hover:scale-105 shadow-xl shadow-purple-900/20 flex items-center justify-center gap-2 min-w-[180px]"
              >
                Começar
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('biomarcadores')}
                className="group text-slate-700 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1 border-b border-transparent hover:border-purple-300 pb-0.5"
              >
                Ver lista de exames
              </button>
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium">
              A partir de R$990/ano.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
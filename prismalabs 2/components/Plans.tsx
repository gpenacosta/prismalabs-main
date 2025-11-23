import React from 'react';
import { Check, Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

type PlanCardProps = { 
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
  description: string;
  programId: string;
  onStartProgram: (programId: string) => void;
};

const PlanCard: React.FC<PlanCardProps> = ({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  cta,
  description,
  programId,
  onStartProgram,
}) => (
  <div
    className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${
      isPopular
        ? 'bg-slate-900 text-white border-slate-800 shadow-2xl shadow-slate-900/50 transform md:-translate-y-4'
        : 'bg-white text-slate-900 border-white/50 hover:border-purple-200 shadow-md hover:shadow-xl'
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap">
        <Star className="w-3 h-3 fill-current" />
        Mais escolhido
      </div>
    )}
    
    <div className="mb-6">
      <h3 className={`text-lg font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
          {period}
        </span>
      </div>
      <p className={`text-sm mt-4 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>

    <div className={`h-px w-full mb-6 ${isPopular ? 'bg-slate-700' : 'bg-slate-100'}`} />

    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <div
            className={`mt-0.5 p-0.5 rounded-full shrink-0 ${
              isPopular ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-50 text-purple-700'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
            {feat}
          </span>
        </li>
      ))}
    </ul>

    <button
      type="button"
      onClick={() => onStartProgram(programId)}
      className={`w-full py-4 rounded-full font-bold transition-all flex items-center justify-center ${
        isPopular
          ? 'bg-purple-500 hover:bg-purple-400 text-white shadow-lg shadow-purple-900/20'
          : 'bg-cream hover:bg-slate-200 text-slate-900'
      }`}
    >
      {cta}
    </button>
  </div>
);

type PlansProps = {
  onStartProgram: (programId: string) => void;
};

export const Plans: React.FC<PlansProps> = ({ onStartProgram }) => {
  return (
    <section id="planos" className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Escolha o programa para o seu momento.
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Do check-up essencial à otimização completa de longevidade.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-center">
          <FadeIn delay={0.2} className="h-full">
            <PlanCard 
              title="Prisma Essencial"
              programId="essencial"
              price="R$ 990"
              period="/ano"
              description="Ideal para check-up anual e monitoramento dos principais indicadores de saúde."
              cta="Começar"
              features={[
                "1 painel completo por ano (50+ biomarcadores)",
                "Análise de saúde cardíaca e metabólica básica",
                "Relatório explicativo médico",
                "Plano de ação básico",
                "Acesso à plataforma digital"
              ]}
              onStartProgram={onStartProgram}
            />
          </FadeIn>

          <FadeIn delay={0.4} className="h-full">
            <PlanCard 
              isPopular
              title="Prisma Avançado"
              programId="avancado"
              price="R$ 1.990"
              period="/ano"
              description="Para quem busca performance e longevidade. Monitoramento semestral profundo."
              cta="Começar"
              features={[
                "2 painéis completos por ano (100+ biomarcadores)",
                "Hormônios avançados, inflamação e vitaminas",
                "Cálculo de Idade Biológica incluso",
                "Consulta de revisão com especialista",
                "Plano de ação detalhado com suplementação"
              ]}
              onStartProgram={onStartProgram}
            />
          </FadeIn>
        </div>
        
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>Valores referentes ao pacote anual. Parcelamento disponível em até 12x sem juros.</p>
          <p className="mt-1">Garantia de satisfação de 30 dias.</p>
        </div>
      </div>
    </section>
  );
};
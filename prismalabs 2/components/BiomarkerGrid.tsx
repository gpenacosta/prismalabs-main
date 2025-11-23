import React, { useState } from 'react';
import { 
  Heart, Zap, Activity, Dna, Filter, 
  Droplets, Layers, Apple, Flame, ShieldAlert, 
  ChevronDown, ChevronUp 
} from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const AREAS = [
  {
    id: 1,
    icon: Heart,
    title: 'Coração',
    desc: 'Painel avançado de lipídios e risco cardiovascular.',
    summaryLabs: ['Colesterol total', 'HDL-colesterol', 'LDL-colesterol', 'ApoB'],
    completeLabs: [
      'Colesterol total',
      'HDL-colesterol',
      'LDL-colesterol (direto ou calculado)',
      'Triglicerídeos',
      'Colesterol não-HDL',
      'ApoB (Apolipoproteína B)',
      'Lipoproteína(a) – Lp(a)',
      'Número de partículas de LDL (LDL-P)',
      'Tamanho de partículas de LDL e HDL',
      'Razão colesterol total/HDL',
      'Razão triglicerídeos/HDL',
    ],
  },
  {
    id: 2,
    icon: Zap,
    title: 'Metabolismo & Diabetes',
    desc: 'Glicemia, insulina e controle glicêmico de longo prazo.',
    summaryLabs: ['Glicose em jejum', 'Insulina em jejum', 'HbA1c'],
    completeLabs: [
      'Glicose em jejum',
      'Insulina em jejum',
      'Hemoglobina glicada (HbA1c)',
      'HOMA-IR',
      'Peptídeo C (opcional)',
      'Glicose pós-prandial (se aplicável)',
    ],
  },
  {
    id: 3,
    icon: Activity,
    title: 'Tireoide',
    desc: 'Avaliação completa da função tireoidiana e autoimunidade.',
    summaryLabs: ['TSH', 'T4 livre', 'T3 livre'],
    completeLabs: [
      'TSH',
      'T4 livre',
      'T3 livre',
      'T4 total',
      'T3 total',
      'Anti-TPO (anticorpo antiperoxidase tireoidiana)',
      'Anti-Tg (anticorpo antitireoglobulina)',
    ],
  },
  {
    id: 4,
    icon: Dna,
    title: 'Hormônios',
    desc: 'Eixo hormonal reprodutivo e sexual ao longo da vida.',
    summaryLabs: ['Testosterona total', 'Estradiol (E2)', 'FSH', 'LH'],
    completeLabs: [
      'FSH',
      'LH',
      'Estradiol (E2)',
      'Progesterona',
      'Testosterona total',
      'Testosterona livre (ou calculada)',
      'SHBG (globulina ligadora de hormônios sexuais)',
      'DHEA-S',
      'Prolactina',
      'AMH (hormônio antimülleriano)',
    ],
  },
  {
    id: 5,
    icon: Filter,
    title: 'Fígado',
    desc: 'Função hepática, inflamação e metabolismo hepático.',
    summaryLabs: ['ALT (TGP)', 'AST (TGO)', 'GGT'],
    completeLabs: [
      'ALT (TGP)',
      'AST (TGO)',
      'GGT',
      'Fosfatase alcalina',
      'Bilirrubina total',
      'Bilirrubina direta',
      'Bilirrubina indireta',
      'Albumina',
      'Proteínas totais',
    ],
  },
  {
    id: 6,
    icon: Droplets,
    title: 'Rim',
    desc: 'Filtração renal, equilíbrio hídrico e eletrólitos-chave.',
    summaryLabs: ['Creatinina sérica', 'eGFR', 'Ureia'],
    completeLabs: [
      'Creatinina sérica',
      'Ureia / BUN',
      'eGFR (taxa de filtração glomerular estimada)',
      'Sódio',
      'Potássio',
      'Cloro',
      'Relação albumina/creatinina urinária (microalbuminúria)',
    ],
  },
  {
    id: 7,
    icon: Layers,
    title: 'Pâncreas',
    desc: 'Marcadores de função pancreática e inflamação.',
    summaryLabs: ['Lipase', 'Amilase'],
    completeLabs: ['Lipase', 'Amilase'],
  },
  {
    id: 8,
    icon: Apple,
    title: 'Nutrientes & Vitaminas',
    desc: 'Status de vitaminas, minerais e ácidos graxos essenciais.',
    summaryLabs: ['Vitamina D (25-OH)', 'Vitamina B12', 'Ferritina', 'Omega 3 Total'],
    completeLabs: [
      'Vitamina D (25-OH)',
      'Vitamina B12',
      'Folato',
      'Homocisteína',
      'Ferro sérico',
      'TIBC / capacidade total de ligação do ferro',
      'Saturação de transferrina',
      'Ferritina',
      'Magnésio',
      'Cálcio',
      'Fósforo',
      'Zinco',
      'Cobre',
      'Perfil de ácidos graxos ômega-3 (Omega 3 Total, EPA, DHA)',
    ],
  },
  {
    id: 9,
    icon: Flame,
    title: 'Inflamação & Autoimunidade',
    desc: 'Inflamação crônica e atividade autoimune.',
    summaryLabs: ['PCR-us (hs-CRP)', 'Ferritina', 'ANA Screen'],
    completeLabs: [
      'Proteína C-reativa ultrassensível (PCR-us / hs-CRP)',
      'VHS (velocidade de hemossedimentação)',
      'Ferritina (como marcador inflamatório)',
      'ANA Screen (anticorpos antinucleares)',
      'Padrão de ANA',
      'Anti-TPO',
      'Anti-Tg',
      'Fator reumatoide (FR)',
      'Anti-CCP (anticorpo anti-peptídeo citrulinado cíclico)',
    ],
  },
  {
    id: 10,
    icon: ShieldAlert,
    title: 'Toxinas Ambientais & Metais Pesados',
    desc: 'Exposição a metais pesados e toxinas ambientais.',
    summaryLabs: ['Chumbo', 'Mercúrio', 'Arsênio'],
    completeLabs: [
      'Chumbo',
      'Mercúrio',
      'Arsênio',
      'Alumínio',
      '(Opcional) Cádmio',
      '(Opcional) Níquel',
    ],
  },
];

export const BiomarkerGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="biomarcadores" className="py-24 bg-cream relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* TÍTULO + SUBTÍTULO (sem badge / ping) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Monitore o que importa em{' '}
              <span className="text-purple-700">10 áreas vitais</span>.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Tenha uma visão integrada do seu corpo em um único painel que faz
              sentido para você e para o seu médico. Enxergue cedo o que pode
              afetar sua saúde no futuro.
            </p>
          </FadeIn>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {AREAS.map((area, idx) => {
            const isExpanded = expandedId === area.id;
            const labsToShow = isExpanded
              ? area.completeLabs
              : area.summaryLabs;

            return (
              <FadeIn key={area.id} delay={idx * 0.05} className="h-full">
                <div
                  className={`
                    group relative flex flex-col h-full
                    rounded-3xl p-5 shadow-sm border
                    bg-white/80 backdrop-blur-md
                    ${isExpanded
                      ? 'border-purple-300 shadow-xl ring-1 ring-purple-100'
                      : 'border-white/60 hover:border-purple-200 hover:shadow-lg'}
                  `}
                >
                  {/* BLOCO SUPERIOR (ícone + título + descrição) */}
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col items-start gap-3 h-[120px]">
                      <div className="w-12 h-12 rounded-xl bg-cream border border-white/60 flex items-center justify-center text-purple-700 shadow-sm group-hover:bg-purple-50 group-hover:text-purple-800 transition-colors">
                        <area.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                        {area.title}
                      </h3>
                    </div>

                    <div className="h-[84px]">
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                        {area.desc}
                      </p>
                    </div>
                  </div>

                  {/* LINHA + LABEL "EXAMES" */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.16em] mb-3">
                      EXAMES
                    </p>

                    {/* Chips de exames (mesmo estilo aberto/fechado) */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {labsToShow.map((lab, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-50 text-slate-600 px-2 py-1 rounded border border-slate-100 truncate max-w-full"
                        >
                          {lab}
                        </span>
                      ))}

                      {!isExpanded && (
                        <span className="text-xs text-slate-400 px-1 self-center">
                          ...
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA FIXO NO RODAPÉ DO CARD */}
                  <button
                    onClick={() => toggleCard(area.id)}
                    className="mt-auto w-full mt-4 py-2 flex items-center justify-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 hover:bg-purple-50 rounded-lg transition-colors uppercase tracking-wider"
                  >
                    {isExpanded ? (
                      <>
                        Fechar <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        Ver todos <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
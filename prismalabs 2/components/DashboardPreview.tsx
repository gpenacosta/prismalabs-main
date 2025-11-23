// DashboardPreview.tsx
import React from 'react';
import {
  TrendingUp,
  Activity,
  CheckCircle,
  AlertCircle as AlertIcon,
  CheckCircle2,
  AlertCircle,
  Brain,
  Sparkles,
  Info,
  ClipboardList,
  Copy,
  Heart,
  Zap,
  Layers,
  Flame,
  Filter,
  Beer,
  Shield,
  Apple,
  Droplet,
  Calendar,
  User,
  Search,
  FileText,
  MessageSquareText,
} from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

/* ------------------------------------------------------------------
 * UI PRIMITIVES: Card & Badge
 * ------------------------------------------------------------------ */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  headerAction,
}) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      {(title || subtitle) && (
        <div className="p-6 border-b border-slate-100 flex justify-between items-start">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-slate-900 leading-none tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'neutral';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-violet-100 text-violet-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-700',
    neutral: 'bg-slate-100 text-slate-600',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
};

/* ------------------------------------------------------------------
 * TOP HEADER (inside the mock window)
 * ------------------------------------------------------------------ */

const DashboardHeaderBar: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
            Prisma<span className="text-violet-600">Labs</span>
          </span>
        </div>

        {/* User block */}
        <div className="flex items-center space-x-4 text-right">
          <div className="hidden sm:block">
            <div className="flex items-center justify-end space-x-2">
              <span className="text-sm font-semibold text-slate-800">
                Ricardo C.
              </span>
              <Badge label="Programa Avançado" variant="default" />
            </div>
            <div className="flex items-center justify-end space-x-1 mt-1 text-xs text-slate-500">
              <Calendar size={12} />
              <span>Painel atual: Out/2024 · Próximo: Abr/2025</span>
            </div>
          </div>

          {/* Mobile avatar */}
          <div className="sm:hidden p-2 bg-slate-100 rounded-full">
            <User size={18} className="text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

/* ------------------------------------------------------------------
 * SCORE CARD
 * ------------------------------------------------------------------ */

const ScoreCard: React.FC = () => {
  return (
    <Card title="Score clínico">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Main Score */}
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-2">
            <span className="text-5xl sm:text-6xl font-bold text-slate-900">
              82
            </span>
            <span className="text-xl text-slate-400 font-medium">/100</span>
          </div>

          <div className="flex items-center mt-2 text-emerald-600 font-medium text-sm">
            <TrendingUp size={16} className="mr-1" />
            <span>+4 pts vs. painel anterior</span>
          </div>

          <p className="mt-4 text-slate-600 text-sm max-w-sm leading-relaxed">
            Visão integral baseada em todos os exames, priorizando risco
            cardiometabólico e inflamatório.
          </p>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-center">
            <Activity className="text-slate-400 mb-2" size={20} />
            <span className="text-2xl font-bold text-slate-800">112</span>
            <span className="text-xs text-slate-500 mt-1">
              Marcadores analisados
            </span>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 flex flex-col items-center justify-center text-center">
            <CheckCircle className="text-emerald-500 mb-2" size={20} />
            <span className="text-2xl font-bold text-emerald-700">104</span>
            <span className="text-xs text-emerald-600 mt-1">
              Dentro da referência
            </span>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex flex-col items-center justify-center text-center">
            <AlertIcon className="text-amber-500 mb-2" size={20} />
            <span className="text-2xl font-bold text-amber-700">8</span>
            <span className="text-xs text-amber-600 mt-1">Em atenção</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ------------------------------------------------------------------
 * RECENT HIGHLIGHTS (chips)
 * ------------------------------------------------------------------ */

const RecentHighlights: React.FC = () => {
  const highlights = [
    {
      id: '1',
      type: 'positive' as const,
      label: 'Perfil lipídico otimizado',
    },
    {
      id: '2',
      type: 'positive' as const,
      label: 'PCR normalizado',
    },
    {
      id: '3',
      type: 'positive' as const,
      label: 'Glicemia estável',
    },
    {
      id: '4',
      type: 'warning' as const,
      label: 'Função hepática em atenção',
    },
    {
      id: '5',
      type: 'warning' as const,
      label: 'Vitamina D abaixo do ideal',
    },
  ];

  const Legend = (
    <div className="flex items-center space-x-3 text-xs font-medium text-slate-500">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></div>
        <span>Melhorias</span>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-amber-500 mr-1.5"></div>
        <span>Atenção</span>
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
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-colors
            ${
              item.type === 'positive'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                : 'bg-amber-50 text-amber-700 border-amber-100'
            }`}
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

/* ------------------------------------------------------------------
 * VITAL AREAS GRID
 * ------------------------------------------------------------------ */

const VitalAreasCard: React.FC = () => {
  const areas = [
    { id: '1', name: 'Coração', status: 'Ideal', examples: 'Colesterol, ApoB, Homocisteína...' },
    { id: '2', name: 'Metabolismo', status: 'Atenção', examples: 'Glicemia, HbA1c, Insulina...' },
    { id: '3', name: 'Hormônios', status: 'Ideal', examples: 'Testosterona, Cortisol, DHEA...' },
    { id: '4', name: 'Inflamação', status: 'Ideal', examples: 'PCR-us, Ferritina, Fibrinogênio...' },
    { id: '5', name: 'Tireoide', status: 'Ideal', examples: 'TSH, T3 Livre, T4 Livre...' },
    { id: '6', name: 'Rins', status: 'Ideal', examples: 'Creatinina, Ureia, Cistatina C...' },
    { id: '7', name: 'Fígado', status: 'Atenção', examples: 'TGO, TGP, GGT...' },
    { id: '8', name: 'Imunidade', status: 'Ideal', examples: 'Leucócitos, Linfócitos...' },
    { id: '9', name: 'Nutrientes', status: 'Atenção', examples: 'Vit D, B12, Magnésio...' },
    { id: '10', name: 'Sangue', status: 'Ideal', examples: 'Hemoglobina, Hematócrito...' },
  ];

  const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
      Coração: <Heart size={18} />,
      Metabolismo: <Zap size={18} />,
      Hormônios: <Layers size={18} />,
      Inflamação: <Flame size={18} />,
      Tireoide: <Activity size={18} />,
      Rins: <Filter size={18} />,
      Fígado: <Beer size={18} />,
      Imunidade: <Shield size={18} />,
      Nutrientes: <Apple size={18} />,
      Sangue: <Droplet size={18} />,
    };
    return icons[name] || <Activity size={18} />;
  };

  return (
    <Card
      title="Seu check-up inteligente em 10 áreas vitais"
      subtitle="Painel laboratorial completo com mais de 100 biomarcadores organizados em áreas vitais, para detecção precoce de riscos."
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
                  <div
                    className={`p-2 rounded-full ${
                      isAttention ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {getIcon(area.name)}
                  </div>
                  <span className="font-semibold text-slate-800">{area.name}</span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      isAttention ? 'bg-amber-500' : 'bg-emerald-500'
                    }`}
                  ></span>
                  <span
                    className={`text-xs font-medium ${
                      isAttention ? 'text-amber-700' : 'text-emerald-700'
                    }`}
                  >
                    {area.status}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 ml-10 truncate">{area.examples}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

/* ------------------------------------------------------------------
 * MEDICAL INTELLIGENCE CARD
 * ------------------------------------------------------------------ */

const MedicalIntelligenceCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-violet-100 shadow-sm overflow-hidden relative">
      <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="p-2 bg-violet-100 rounded-lg">
            <Brain className="text-violet-600" size={24} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold text-slate-900">
                Inteligência médica
              </h3>
              <span className="inline-flex items-center rounded-full bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/20">
                Beta
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Análises geradas por IA treinada em evidência científica e
              revisada por médicos.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 relative">
          <div className="absolute -top-3 left-4 bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-500 uppercase tracking-wide flex items-center shadow-sm">
            <Sparkles size={10} className="mr-1 text-violet-500" />
            Insight da IA
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed mt-2">
            <p>
              <span className="font-semibold">Ricardo</span>, ao cruzar seus
              marcadores de fígado com o questionário de estilo de vida, a IA
              encontrou um padrão compatível com possível{' '}
              <span className="font-medium text-amber-700 bg-amber-50 px-1 rounded">
                sobrecarga hepática
              </span>
              : suas enzimas hepáticas estão acima do ideal e você relatou
              sedentarismo e consumo frequente de álcool.
            </p>
            <p>
              Essa combinação sugere que o fígado pode estar trabalhando no
              limite para lidar com gordura, toxinas e medicações do dia a dia.
              Em estágios iniciais, muitos desses quadros são silenciosos e
              potencialmente reversíveis com mudanças de hábito.
            </p>
            <p className="font-medium text-violet-800">
              Leve este resumo para o seu médico: juntos, vocês podem avaliar
              exames de imagem (por exemplo, ultrassom de fígado) e montar um
              plano de redução de risco, com ajustes em alimentação, atividade
              física e álcool.
            </p>
          </div>
        </div>

        <div className="mt-3">
          <button
            type="button"
            className="text-xs font-semibold text-violet-700 hover:text-violet-800 inline-flex items-center"
          >
            Ver análise completa
            <span className="ml-1">↗</span>
          </button>
        </div>

        <div className="mt-6 flex items-start space-x-2 p-3 bg-blue-50 rounded-lg text-blue-800 border border-blue-100">
          <Info size={16} className="mt-0.5 flex-shrink-0" />
          <p className="text-xs">
            <span className="font-semibold">Importante:</span> este insight não
            substitui consulta, diagnóstico ou tratamento médico. Use como apoio
            à conversa com seu médico.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------
 * CLINICAL HIGHLIGHTS (right column)
 * ------------------------------------------------------------------ */

const ClinicalHighlightsCard: React.FC = () => {
  return (
    <Card title="Destaques clínicos" className="mt-6">
      <div className="space-y-6">
        {/* ApoB */}
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
              78{' '}
              <span className="text-sm font-normal text-slate-500">mg/dL</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            <div className="h-full w-[30%] bg-emerald-500/70" />
            <div className="h-full w-[25%] bg-emerald-300/70" />
            <div className="h-full w-[20%] bg-amber-300" />
            <div className="h-full w-[25%] bg-rose-300/80" />
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[28%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Baixo risco</span>
            <span>Ideal</span>
            <span>Alto risco</span>
          </div>
          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3">
            <p className="text-sm text-slate-600">
              Excelente. Nos últimos check-ups, seu ApoB passou de risco
              moderado para uma zona ideal.
            </p>
            <Sparkles
              size={14}
              className="text-violet-500 mt-0.5 flex-shrink-0"
            />
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Vitamina D */}
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
            <span className="text-lg font-semibold text-slate-900">
              Vitamina D
            </span>
            <span className="text-lg font-bold text-slate-900">
              24{' '}
              <span className="text-sm font-normal text-slate-500">ng/mL</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            <div className="h-full w-[15%] bg-rose-300/80" />
            <div className="h-full w-[15%] bg-amber-300" />
            <div className="h-full w-[35%] bg-emerald-300/70" />
            <div className="h-full w-[25%] bg-amber-200" />
            <div className="h-full w-[10%] bg-rose-200/80" />
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[22%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Deficiência</span>
            <span>Ideal</span>
            <span>Excesso</span>
          </div>
          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3">
            <p className="text-sm text-slate-600">
              Marcador associado à saúde óssea, muscular e imunológica, influenciado por exposição solar e hábitos alimentares.
            </p>
            <Sparkles
              size={14}
              className="text-violet-500 mt-0.5 flex-shrink-0"
            />
          </div>
        </div>

        <div className="border-t border-slate-100" />

        {/* Testosterona Livre */}
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
            <span className="text-lg font-semibold text-slate-900">
              Testosterona livre
            </span>
            <span className="text-lg font-bold text-slate-900">
              6,5{' '}
              <span className="text-sm font-normal text-slate-500">pg/mL</span>
            </span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex relative">
            <div className="h-full w-[20%] bg-amber-300" />
            <div className="h-full w-[60%] bg-emerald-300/70" />
            <div className="h-full w-[20%] bg-amber-200" />
            <div className="absolute top-0 bottom-0 w-1 bg-slate-900 left-[18%]" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 uppercase font-medium tracking-wide">
            <span>Baixa</span>
            <span>Normal</span>
            <span>Alta</span>
          </div>
          <div className="bg-slate-50 p-2 rounded border border-slate-100 mt-1 flex justify-between items-start gap-3">
            <p className="text-sm text-slate-600">
              Nível abaixo do ideal para a sua idade. Marcador pode ser associado a sintomas como baixa energia e redução de libido.
            </p>
            <Sparkles
              size={14}
              className="text-violet-500 mt-0.5 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ------------------------------------------------------------------
 * BIOMARKER TABLE (simplified preview)
 * ------------------------------------------------------------------ */

const BiomarkerTablePreview: React.FC = () => {
  const rows = [
    {
      area: 'Coração',
      marker: 'ApoB',
      value: '78 mg/dL',
      status: 'Ideal',
      trend: 'down', // lipídios melhorando
    },
    {
      area: 'Coração',
      marker: 'LDL',
      value: '98 mg/dL',
      status: 'Ideal',
      trend: 'flat',
    },
    {
      area: 'Hormônios',
      marker: 'Vit D',
      value: '24 ng/mL',
      status: 'Atenção',
      trend: 'down',
    },
    {
      area: 'Metabolismo',
      marker: 'Glicose',
      value: '96 mg/dL',
      status: 'Ideal',
      trend: 'up',
    },
    {
      area: 'Metabolismo',
      marker: 'Insulina',
      value: '12 uUI/mL',
      status: 'Atenção',
      trend: 'up',
    },
  ];

  const getStatusVariant = (status: string) =>
    status === 'Ideal' ? 'success' : 'warning';

  const Sparkline: React.FC<{ trend: 'up' | 'down' | 'flat' }> = ({ trend }) => {
    let points = '';
    switch (trend) {
      case 'down':
        points = '4,8 20,11 36,15 52,18 68,20';
        break;
      case 'up':
        points = '4,20 20,18 36,14 52,10 68,6';
        break;
      case 'flat':
      default:
        points = '4,14 20,14 36,14 52,14 68,14';
        break;
    }

    const stroke =
      trend === 'up'
        ? '#10b981' // emerald
        : trend === 'down'
        ? '#f59e0b' // amber
        : '#64748b'; // slate

    return (
      <svg
        viewBox="0 0 72 26"
        className="w-20 h-8 text-slate-400"
        aria-hidden="true"
      >
        <polyline
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="2"
          points="4,14 68,14"
        />
        <polyline
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  return (
    <Card
      title="Todos os seus biomarcadores, organizados"
      subtitle="Veja cada exame em detalhe, com referências, histórico e notas."
    >
      {/* Filtros (visuais) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            disabled
            type="text"
            placeholder="Buscar por exame..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
        </div>
        <div className="w-full sm:w-40">
          <div className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 flex items-center justify-between">
            <span>Status: todos</span>
            <span className="text-xs">▼</span>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto -mx-6 sm:mx-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                Área
              </th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                Biomarcador
              </th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                Resultado
              </th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                Status
              </th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50 text-center">
                Histórico
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-3 px-6 text-sm text-slate-500">{row.area}</td>
                <td className="py-3 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {row.marker}
                  </span>
                </td>
                <td className="py-3 px-6 text-sm text-slate-800 font-semibold">
                  {row.value}
                </td>
                <td className="py-3 px-6">
                  <Badge
                    label={row.status}
                    variant={getStatusVariant(row.status)}
                  />
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="inline-flex items-center justify-center rounded-md bg-slate-50 border border-slate-100 px-2 py-1">
                    <Sparkline trend={row.trend as 'up' | 'down' | 'flat'} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

/* ------------------------------------------------------------------
 * DOCTOR SUMMARY
 * ------------------------------------------------------------------ */

const DoctorSummaryCard: React.FC = () => {
  return (
    <Card className="border-violet-100 bg-gradient-to-b from-white to-slate-50">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
        <div className="flex-shrink-0 bg-slate-900 text-white p-3 rounded-lg hidden md:block">
          <ClipboardList size={24} />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Resumo para sua próxima consulta médica
          </h3>
          <p className="text-slate-600 text-sm mb-4">
            Geramos um resumo com os principais pontos de atenção e evolução
            para você levar ao médico e facilitar a conversa.
          </p>

          <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm font-mono text-sm text-slate-700 relative">
            <button className="absolute top-3 right-3 text-slate-400 hover:text-violet-600 transition-colors">
              <Copy size={16} />
            </button>
            <ul className="space-y-2 list-disc list-outside ml-4">
              <li>
                Perfil lipídico otimizado, <span className="font-semibold">ApoB</span> em zona
                ideal.
              </li>
              <li>
                <span className="font-semibold">Vitamina D</span> abaixo da faixa ideal (24
                ng/mL); considerar exposição solar e/ou suplementação.
              </li>
              <li>
                Possível sobrecarga hepática por enzimas elevadas; avaliar exames de imagem e plano
                de redução de álcool.
              </li>
              <li>
                Score clínico evoluiu +4 pontos, indicando melhora metabólica geral.
              </li>
            </ul>
          </div>

          <div className="mt-4 text-xs text-slate-500 flex items-center">
            Informações contextuais para a consulta, ajudando seu médico a ganhar
            tempo e profundidade na análise.
          </div>
        </div>
      </div>
    </Card>
  );
};

/* ------------------------------------------------------------------
 * DASHBOARD PREVIEW (exported component for the landing page)
 * ------------------------------------------------------------------ */

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER: Plataforma Exclusiva + IA */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-purple-100 shadow-sm mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Plataforma Exclusiva + IA
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Sua saúde, <br className="hidden md:block" />
                <span className="text-purple-700">organizada e traduzida.</span>
              </h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna 1: Plataforma Exclusiva */}
            <FadeIn delay={0.1}>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/60 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Plataforma Exclusiva
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Seus exames podem trazer resultados muito além de um PDF confuso do laboratório. Nossa plataforma digital agrega todos os seus exames, traz explicações e insights práticos, mostra se você está na zona ideal e sugere caminhos de cuidado.
                </p>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-sm text-purple-900 font-medium italic">
                    Converse melhor com seu médico, potencializando seu acompanhamento clínico com informações relevantes e contextuais.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Coluna 2: IA treinada por médicos */}
            <FadeIn delay={0.2}>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/60 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  IA treinada por médicos
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Nossa IA, treinada em evidência científica e revisada por médicos, traz inteligência clínica para os seus resultados:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-white rounded-full text-purple-600 shadow-sm shrink-0">
                      <MessageSquareText size={14} />
                    </div>
                    <span className="text-sm text-slate-700">
                      Responda a dúvidas sobre seus biomarcadores em linguagem simples.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-white rounded-full text-purple-600 shadow-sm shrink-0">
                      <Activity size={14} />
                    </div>
                    <span className="text-sm text-slate-700">
                      Receba análises comparativas ao longo do tempo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-white rounded-full text-purple-600 shadow-sm shrink-0">
                      <Zap size={14} />
                    </div>
                    <span className="text-sm text-slate-700">
                      Entenda como hábitos de sono, alimentação e atividade física influenciam seus resultados.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-wide font-semibold">
                  * Não substitui a consulta nem a decisão médica.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Heading pequeno + mock do painel */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-sm font-semibold text-slate-500 tracking-wide uppercase mb-2">
            Preview da Plataforma
          </h3>
          <p className="text-slate-600 text-sm md:text-base">
            
          </p>
        </div>

        {/* Mock window with the dashboard */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-[2.5rem] blur-3xl opacity-10 -z-10" />

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header inside the mock window */}
            <DashboardHeaderBar />

            {/* Main dashboard layout (static) */}
            <div className="bg-slate-50/60">
              <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left column */}
                  <div className="lg:col-span-8 space-y-8">
                    <ScoreCard />
                    <RecentHighlights />
                    <VitalAreasCard />
                    <BiomarkerTablePreview />
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-4 space-y-8">
                    <MedicalIntelligenceCard />
                    <ClinicalHighlightsCard />
                  </div>
                </div>

                {/* Bottom full-width summary */}
                <DoctorSummaryCard />
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
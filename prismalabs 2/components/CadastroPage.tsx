/* ---------------- CADASTRO PAGE ---------------- */
import React from 'react';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

interface CadastroPageProps {
  selectedProgram?: string | null;
  onGoHome: () => void;
  onGoDashboard: () => void;
}

export const CadastroPage: React.FC<CadastroPageProps> = ({
  selectedProgram: selectedProgramProp = null,
  onGoHome,
  onGoDashboard,
}) => {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);

  const [formData, setFormData] = React.useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    genero: '',
    responsavel: '',
    cidadeExames: '',
  });

  const [paymentData, setPaymentData] = React.useState({
    nomeCartao: '',
    numeroCartao: '',
    validade: '',
    cvc: '',
  });

  const [consents, setConsents] = React.useState({
    termos: false,
    usoDados: false,
    resultados: false,
  });

  const [selectedProgram, setSelectedProgram] =
    React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (selectedProgramProp) {
      setSelectedProgram(selectedProgramProp);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    setSelectedProgram(params.get('programa'));
  }, [selectedProgramProp]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({ ...formData, genero: gender });
    if (errors.genero) {
      setErrors({ ...errors, genero: '' });
    }
  };

  const handleToggleConsent = (key: keyof typeof consents) => {
    const updated = { ...consents, [key]: !consents[key] };
    setConsents(updated);

    if (
      errors.consents &&
      updated.termos &&
      updated.usoDados &&
      updated.resultados
    ) {
      setErrors({ ...errors, consents: '' });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nomeCompleto) newErrors.nomeCompleto = 'Campo obrigatório';
    if (!formData.email) newErrors.email = 'Campo obrigatório';
    if (!formData.telefone) newErrors.telefone = 'Campo obrigatório';
    if (!formData.dataNascimento)
      newErrors.dataNascimento = 'Campo obrigatório';
    if (!formData.cpf) newErrors.cpf = 'Campo obrigatório';
    if (!formData.genero) newErrors.genero = 'Selecione um gênero';
    if (!formData.responsavel) newErrors.responsavel = 'Campo obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.cidadeExames) newErrors.cidadeExames = 'Campo obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!paymentData.nomeCartao) newErrors.nomeCartao = 'Campo obrigatório';
    if (!paymentData.numeroCartao)
      newErrors.numeroCartao = 'Campo obrigatório';
    if (!paymentData.validade) newErrors.validade = 'Campo obrigatório';
    if (!paymentData.cvc) newErrors.cvc = 'Campo obrigatório';

    if (!consents.termos || !consents.usoDados || !consents.resultados) {
      newErrors.consents =
        'Você precisa aceitar todas as autorizações para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinueStep1 = () => {
    if (validateStep1()) {
      setStep(2);
      setErrors({});
    }
  };

  const handleContinueStep2 = () => {
    if (validateStep2()) {
      setStep(3);
      setErrors({});
    }
  };

  const handleConfirmPayment = () => {
    if (!validateStep3()) return;

    const finalData = {
      programa: selectedProgram,
      ...formData,
      paymentData,
      consents,
    };

    console.log('Dados completos do cadastro:', finalData);
    alert('Pagamento confirmado! Redirecionando para seu dashboard.');
    onGoDashboard();
  };

  const inclusions = [
    'Check-up inteligente: painel laboratorial completo com mais de 100 biomarcadores organizados em 10 áreas vitais para detecção precoce de riscos de saúde e otimização contínua da sua saúde. Inclui 2 painéis por ano e, se necessário, testes sob demanda.',
    'Dashboard contínuo: laudo inteligente destacando marcadores que merecem atenção, zonas de referência personalizadas e histórico de resultados em um único lugar. Organização automática de exames de outros laboratórios.',
    'Inteligência médica: IA treinada em evidência científica que analisa contexto, histórico, tendências e combinações de marcadores, organizando e traduzindo seus dados em insights clínicos compreensíveis.',
    'Mais informação para seu médico: resumo e destaque das informações mais relevantes para ajudar você e seu médico a aprofundarem na análise e a ganhar tempo.',
  ];

  const programInfo =
    selectedProgram === 'avancado'
      ? {
          name: 'Prisma Avançado',
          price: 'R$ 1.990/ano',
        }
      : {
          name: 'Prisma Essencial',
          price: 'R$ 990/ano',
        };

  return (
    <section className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-white/60 p-6 md:p-8">
          {/* Top nav */}
          <div className="mb-6">
            <button
              type="button"
              onClick={onGoHome}
              className="text-slate-500 hover:text-purple-700 text-sm font-medium flex items-center gap-1 mb-4"
            >
              &larr; Voltar para home
            </button>

            {selectedProgram && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700">
                Programa selecionado:{' '}
                {selectedProgram === 'avancado'
                  ? 'Prisma Avançado'
                  : 'Prisma Essencial'}
              </div>
            )}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.16em] mb-2">
                Passo 1 de 3
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Comece seu programa
              </h1>
              <p className="text-sm text-slate-600 mb-6">
                Preencha seus dados para criarmos seu painel personalizado de
                exames.
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome completo */}
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">Nome completo</span>
                  <input
                    type="text"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.nomeCompleto
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                    placeholder="Digite seu nome completo"
                  />
                  {errors.nomeCompleto && (
                    <span className="text-[10px] text-red-500">
                      {errors.nomeCompleto}
                    </span>
                  )}
                </label>

                {/* Email */}
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.email
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                    placeholder="seuemail@exemplo.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500">
                      {errors.email}
                    </span>
                  )}
                </label>

                {/* Telefone */}
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">Telefone (WhatsApp)</span>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.telefone
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.telefone && (
                    <span className="text-[10px] text-red-500">
                      {errors.telefone}
                    </span>
                  )}
                </label>

                {/* Data de nascimento */}
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">Data de nascimento</span>
                  <input
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.dataNascimento
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                  />
                  {errors.dataNascimento && (
                    <span className="text-[10px] text-red-500">
                      {errors.dataNascimento}
                    </span>
                  )}
                </label>

                {/* CPF */}
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">CPF</span>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.cpf
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                    placeholder="000.000.000-00"
                  />
                  {errors.cpf && (
                    <span className="text-[10px] text-red-500">
                      {errors.cpf}
                    </span>
                  )}
                </label>

                {/* Gênero */}
                <div className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">Gênero</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleGenderSelect('feminino')}
                      className={cn(
                        'flex-1 h-10 rounded-lg border text-sm font-medium transition-all',
                        formData.genero === 'feminino'
                          ? 'bg-purple-50 border-purple-500 text-purple-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      )}
                    >
                      Feminino
                    </button>
                    <button
                      type="button"
                      onClick={() => handleGenderSelect('masculino')}
                      className={cn(
                        'flex-1 h-10 rounded-lg border text-sm font-medium transition-all',
                        formData.genero === 'masculino'
                          ? 'bg-purple-50 border-purple-500 text-purple-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      )}
                    >
                      Masculino
                    </button>
                  </div>
                  {errors.genero && (
                    <span className="text-[10px] text-red-500">
                      {errors.genero}
                    </span>
                  )}
                </div>

                {/* Responsável */}
                <label className="flex flex-col gap-1 text-sm text-slate-700 md:col-span-2">
                  <span className="font-medium">Nome da mãe ou do pai</span>
                  <input
                    type="text"
                    name="responsavel"
                    value={formData.responsavel}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.responsavel
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                    placeholder="Nome completo do responsável"
                  />
                  {errors.responsavel && (
                    <span className="text-[10px] text-red-500">
                      {errors.responsavel}
                    </span>
                  )}
                </label>
              </form>

              <div className="border-t border-slate-100 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-400 text-center sm:text-left max-w-xs leading-tight">
                  Seus dados são usados apenas para o cuidado em saúde e seguem
                  nossa política de privacidade.
                </p>
                <button
                  type="button"
                  onClick={handleContinueStep1}
                  className="px-8 py-3 bg-purple-700 text-white text-sm font-bold rounded-full hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/10 w-full sm:w-auto"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.16em] mb-2">
                Passo 2 de 3
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Onde você fará seus exames?
              </h1>
              <p className="text-sm text-slate-600 mb-6">
                Nos conte em qual cidade você pretende realizar a coleta para
                sugerirmos a melhor logística.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col gap-1 text-sm text-slate-700">
                  <span className="font-medium">
                    Em qual cidade você fará seus exames?
                  </span>
                  <select
                    name="cidadeExames"
                    value={formData.cidadeExames}
                    onChange={handleChange}
                    className={cn(
                      'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                      errors.cidadeExames
                        ? 'border-red-300 bg-red-50'
                        : 'border-slate-200'
                    )}
                  >
                    <option value="">Selecione a cidade...</option>
                    <option value="Brasília (DF)">Brasília (DF)</option>
                    <option value="São Paulo (SP)">São Paulo (SP)</option>
                    <option value="Rio de Janeiro (RJ)">Rio de Janeiro (RJ)</option>
                    <option value="Belo Horizonte (MG)">
                      Belo Horizonte (MG)
                    </option>
                    <option value="Outra cidade">Outra cidade</option>
                  </select>
                  {errors.cidadeExames && (
                    <span className="text-[10px] text-red-500">
                      {errors.cidadeExames}
                    </span>
                  )}
                </label>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-slate-500 hover:text-slate-700 underline font-medium"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={handleContinueStep2}
                  className="px-8 py-3 bg-purple-700 text-white text-sm font-bold rounded-full hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/10"
                >
                  Continuar
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.16em] mb-2">
                Passo 3 de 3
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Pagamento e confirmação
              </h1>
              <p className="text-sm text-slate-600 mb-6">
                Revise seu plano, informe os dados de pagamento e aceite os
                termos para concluir seu cadastro.
              </p>

              {/* Programa + O que está incluso */}
              <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-900 to-slate-900 text-slate-50 px-5 py-5 md:px-7 md:py-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-purple-200/80 mb-1">
                      Seu programa
                    </p>
                    <h2 className="text-lg md:text-xl font-bold">
                      {programInfo.name}
                    </h2>
                    <p className="text-[11px] text-purple-200/90 mt-1 leading-snug">
                      Renovação anual automática
                      <br />
                      Cancele a qualquer momento
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-purple-200/80">
                      Total anual
                    </p>
                    <p className="text-2xl md:text-3xl font-bold">
                      {programInfo.price}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-purple-200/80 mb-3">
                    O que está incluso
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {inclusions.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/15 px-3 py-3 md:px-4 md:py-3 backdrop-blur-sm"
                      >
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm shrink-0">
                          <Check size={11} />
                        </div>
                        <p className="text-[11px] md:text-xs text-slate-50/95 leading-snug">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detalhes de pagamento */}
              <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 md:px-6 md:py-5">
                <h2 className="text-sm font-semibold text-slate-900 mb-4">
                  Detalhes de pagamento
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1 text-sm text-slate-700">
                    <span className="font-medium">Nome no cartão</span>
                    <input
                      type="text"
                      name="nomeCartao"
                      value={paymentData.nomeCartao}
                      onChange={handlePaymentChange}
                      className={cn(
                        'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                        errors.nomeCartao
                          ? 'border-red-300 bg-red-50'
                          : 'border-slate-200'
                      )}
                      placeholder="Como aparece no cartão"
                    />
                    {errors.nomeCartao && (
                      <span className="text-[10px] text-red-500">
                        {errors.nomeCartao}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col gap-1 text-sm text-slate-700 md:col-span-1">
                    <span className="font-medium">Número do cartão</span>
                    <input
                      type="text"
                      name="numeroCartao"
                      value={paymentData.numeroCartao}
                      onChange={handlePaymentChange}
                      className={cn(
                        'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                        errors.numeroCartao
                          ? 'border-red-300 bg-red-50'
                          : 'border-slate-200'
                      )}
                      placeholder="0000 0000 0000 0000"
                    />
                    {errors.numeroCartao && (
                      <span className="text-[10px] text-red-500">
                        {errors.numeroCartao}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col gap-1 text-sm text-slate-700">
                    <span className="font-medium">Validade</span>
                    <input
                      type="text"
                      name="validade"
                      value={paymentData.validade}
                      onChange={handlePaymentChange}
                      className={cn(
                        'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                        errors.validade
                          ? 'border-red-300 bg-red-50'
                          : 'border-slate-200'
                      )}
                      placeholder="MM/AA"
                    />
                    {errors.validade && (
                      <span className="text-[10px] text-red-500">
                        {errors.validade}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col gap-1 text-sm text-slate-700">
                    <span className="font-medium">CVC</span>
                    <input
                      type="text"
                      name="cvc"
                      value={paymentData.cvc}
                      onChange={handlePaymentChange}
                      className={cn(
                        'h-10 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                        errors.cvc
                          ? 'border-red-300 bg-red-50'
                          : 'border-slate-200'
                      )}
                      placeholder="000"
                    />
                    {errors.cvc && (
                      <span className="text-[10px] text-red-500">
                        {errors.cvc}
                      </span>
                    )}
                  </label>
                </div>

                <p className="mt-3 text-[11px] text-slate-400">
                  Pagamento fictício para protótipo. Em produção, esta etapa
                  seria conectada a um checkout seguro (ex.: Stripe).
                </p>
              </div>

              {/* Autorizações (abaixo do cartão, 1 coluna) */}
              <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4 md:px-6 md:py-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Autorizações
                </h3>

                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                      checked={consents.termos}
                      onChange={() => handleToggleConsent('termos')}
                    />
                    <span>
                      Eu concordo com os{' '}
                      <a
                        href="#"
                        className="underline decoration-purple-500 decoration-1 underline-offset-2"
                      >
                        Termos de Uso
                      </a>{' '}
                      e a{' '}
                      <a
                        href="#"
                        className="underline decoration-purple-500 decoration-1 underline-offset-2"
                      >
                        Política de Privacidade
                      </a>{' '}
                      do Prisma Labs.
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                      checked={consents.usoDados}
                      onChange={() => handleToggleConsent('usoDados')}
                    />
                    <span>
                      Autorizo o uso dos meus dados laboratoriais para fins de
                      geração de laudos, análises clínicas e recomendações
                      personalizadas dentro da plataforma Prisma Labs.
                    </span>
                  </label>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
                      checked={consents.resultados}
                      onChange={() => handleToggleConsent('resultados')}
                    />
                    <span>
                      Autorizo o Prisma Labs a solicitar e organizar resultados
                      de exames realizados em laboratórios parceiros, conforme
                      minha autorização expressa.
                    </span>
                  </label>
                </div>

                {errors.consents && (
                  <p className="text-[11px] text-red-500 mt-3">
                    {errors.consents}
                  </p>
                )}
              </div>

              {/* Footer / Ações */}
              <div className="border-t border-slate-100 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm text-slate-500 hover:text-slate-700 underline font-medium"
                >
                  Voltar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  className="px-8 py-3 bg-purple-700 text-white text-sm font-bold rounded-full hover:bg-purple-800 transition-all shadow-lg shadow-purple-900/10"
                >
                  Confirmar pagamento
                </button>
              </div>

              <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                Ao confirmar e concluir sua assinatura, você autoriza o Prisma
                Labs a cobrar o valor do programa selecionado de forma
                recorrente, de acordo com nossos termos de serviço. Você pode
                cancelar sua assinatura a qualquer momento, após o primeiro
                ciclo de exames. Em produção, o processamento de pagamentos será
                feito por um provedor seguro (ex.: Stripe).
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface AuthPageProps {
  onGoHome: () => void;
  onAuthenticate: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  onGoHome,
  onAuthenticate,
}) => {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!credentials.email) newErrors.email = 'Informe seu e-mail';
    if (!credentials.password) newErrors.password = 'Informe sua senha';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAuthenticate();
    }
  };

  return (
    <section className="bg-cream min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-white/60 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <button
              type="button"
              onClick={onGoHome}
              className="text-slate-500 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
            >
              &larr; Voltar para home
            </button>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold uppercase tracking-[0.16em] text-purple-700">
              Área do cliente
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xs font-bold text-purple-600 uppercase tracking-[0.16em] mb-2">
              Acesse seu painel
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Entrar na sua conta Prisma
            </h1>
            <p className="text-sm text-slate-600">
              Visualize seus biomarcadores, histórico e recomendações personalizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 space-y-5"
            >
              <label className="flex flex-col gap-1 text-sm text-slate-700">
                <span className="font-medium">E-mail</span>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  className={cn(
                    'h-11 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                    errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200'
                  )}
                  placeholder="seuemail@exemplo.com"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500">{errors.email}</span>
                )}
              </label>

              <label className="flex flex-col gap-1 text-sm text-slate-700">
                <span className="font-medium">Senha</span>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className={cn(
                    'h-11 rounded-lg border px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all',
                    errors.password ? 'border-red-300 bg-red-50' : 'border-slate-200'
                  )}
                  placeholder="Digite sua senha"
                />
                {errors.password && (
                  <span className="text-[10px] text-red-500">{errors.password}</span>
                )}
              </label>

              <button
                type="submit"
                className="w-full h-11 rounded-lg bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:bg-purple-700 transition-colors"
              >
                Entrar
              </button>

              <p className="text-xs text-slate-500 text-center">
                Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade.
              </p>
            </form>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 space-y-4">
              <h2 className="text-sm font-semibold text-purple-800">
                Explore seu dashboard
              </h2>
              <ul className="space-y-3">
                {[ 'Acompanhe mais de 100 biomarcadores em tempo real.', 'Receba insights personalizados de saúde.', 'Compartilhe resultados com seu médico de forma segura.' ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-purple-900/90">
                    <Check className="w-4 h-4 text-purple-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onGoHome}
                className="w-full h-10 rounded-lg border border-purple-200 text-purple-800 font-semibold bg-white hover:bg-purple-50 transition-colors"
              >
                Ainda não é cliente? Conheça os programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

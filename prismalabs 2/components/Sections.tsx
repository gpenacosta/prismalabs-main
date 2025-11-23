import React, { useState } from 'react';
import { 
  ArrowRight, Check, Calendar, User, FileText, 
  Activity, ChevronDown, Instagram, 
  Twitter, Linkedin, MessageCircle 
} from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { scrollToSection } from '../lib/utils';
import { Logo } from './ui/Logo';

// --- How It Works Component ---
export const HowItWorks = () => {
  const steps = [
    { icon: FileText, title: "Escolha seu programa", text: "Selecione entre Essencial ou Avançado, conforme seu momento." },
    { icon: Calendar, title: "Agende sua coleta", text: "Marque a coleta em uma unidade parceira ou em domicílio." },
    { icon: Activity, title: "Faça o exame", text: "Colete o sangue com nossa equipe especializada." },
    { icon: FileText, title: "Receba resultados", text: "Visualize tudo organizado por áreas da saúde." },
    { icon: ArrowRight, title: "Siga o plano", text: "Acompanhe recomendações e repita exames para evoluir." }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-cream border-y border-white/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título + subtítulo centralizados */}
        <FadeIn className="mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Como funciona na prática.
            </h2>
            <p className="text-slate-600 text-lg">
              Em poucos passos, você transforma um exame de sangue em um plano concreto.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row justify-between gap-8 relative mt-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-white/50 -z-10"></div>

          {steps.map((step, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.1}
              className="flex-1 relative bg-cream md:bg-transparent pt-4 md:pt-0"
            >
              <div className="flex flex-col items-start md:items-center text-left md:text-center group">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-white/50 flex items-center justify-center text-purple-600 mb-4 z-10 shadow-sm group-hover:border-purple-500 transition-colors">
                  <step.icon size={20} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-slate-500 bg-white/50 px-2 py-1 rounded-full">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
// --- Experts Component ---
export const Experts = () => (
  <section className="py-24 bg-cream">
    <div className="container mx-auto px-4 md:px-6">
      <FadeIn className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Curadoria de especialistas.
        </h2>
        <p className="text-slate-600 text-lg">
          Os painéis são construídos com apoio de médicos especialistas em cada área.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { 
            name: "Dr. Antônio Nogueira", 
            role: "Cardiologia e Longevidade", 
            desc: "Foco em prevenção cardiovascular e envelhecimento saudável.",
            image: "https://images.unsplash.com/photo-1758691461516-7e716e0ca135?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          { 
            name: "Dr. Augusto Barreto", 
            role: "Endocrinologia e Metabolismo", 
            desc: "Equilíbrio hormonal e metabólico de longo prazo.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000"
          },
          { 
            name: "Dra. Regina Célia Monteiro", 
            role: "Medicina do Estilo de Vida", 
            desc: "Sono, alimentação, atividade física e saúde mental.",
            image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ].map((expert, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white rounded-3xl border border-white/50 hover:border-purple-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full shadow-sm overflow-hidden group">
              
              {/* Foto */}
              <div className="h-80 w-full relative overflow-hidden bg-cream">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 sepia-[0.15]"
                />
                {/* Overlay quente para combinar com o fundo pastel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-bold text-xl">{expert.name}</h4>
                  <p className="text-purple-200 text-xs font-bold uppercase tracking-widest">
                    {expert.role}
                  </p>
                </div>
              </div>

              {/* Descrição */}
              <div className="p-6 flex-grow flex flex-col justify-center">
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{expert.desc}"
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Social Proof ---
export const SocialProof = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {[
          { val: "+10.000", label: "Exames Analisados" },
          { val: "4.9/5", label: "Satisfação dos Clientes" },
          { val: "100%", label: "Focado em Prevenção" }
        ].map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} className="pt-8 md:pt-0 px-4">
             <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.val}</h3>
             <p className="text-slate-400 uppercase text-sm tracking-widest font-semibold">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
      <div className="text-center mt-12">
         <p className="text-slate-500 text-xs">Números ilustrativos para demonstrar o modelo de cuidado.</p>
      </div>
    </div>
  </section>
);

// --- FAQ ---
export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    { q: "Para quem o Prisma Labs é indicado?", a: "Para qualquer pessoa que queira ir além do check-up básico e entender sua saúde de forma preventiva e profunda." },
    { q: "Preciso de pedido médico?", a: "Não. Nossa plataforma conecta você a médicos parceiros que emitem os pedidos necessários para os exames inclusos nos pacotes." },
    { q: "O programa substitui meu convênio ou médico?", a: "Não. O Prisma Labs é um complemento focado em prevenção e longevidade. Recomendamos manter seu acompanhamento médico regular." },
    { q: "Os exames são feitos em quais laboratórios?", a: "Utilizamos a rede de excelência do Grupo Sabin e parceiros selecionados para garantir a máxima precisão nos resultados." },
    { q: "Com que frequência devo repetir os exames?", a: "Depende do seu programa. O Essencial é anual, ideal para manutenção. O Avançado é semestral, focado em otimização rápida." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Nossos programas mensais não possuem fidelidade de longo prazo após o período mínimo do primeiro ciclo de exames." },
  ];

  return (
    <section id="faq" className="py-24 bg-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
           <p className="text-slate-600">Tire suas dúvidas sobre como cuidamos de você.</p>
        </FadeIn>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.05}>
              <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === idx ? 'bg-white border-purple-200 shadow-sm' : 'bg-white border-white/50 hover:border-slate-300'}`}>
                <button 
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold pr-8 transition-colors ${open === idx ? 'text-purple-800' : 'text-slate-800'}`}>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ${open === idx ? 'rotate-180 text-purple-600' : 'text-slate-400'}`} />
                </button>
                <div className={`px-6 text-slate-600 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${open === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {item.a}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
export const Footer = () => (
  <footer className="bg-slate-950 text-white py-16 text-sm border-t border-slate-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
        <div>
          <div className="mb-4">
            <Logo dark />
          </div>
          <p className="text-slate-400 max-w-xs leading-relaxed">
            A evolução da medicina diagnóstica. Unimos tecnologia, ciência de dados e medicina funcional para você viver mais e melhor.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 w-full md:w-auto">
          <div>
            <h4 className="font-semibold text-white mb-4">Labs</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Biomarcadores</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Programas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Agendar Coleta</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">WhatsApp</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"><Instagram size={18}/></a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"><Twitter size={18}/></a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"><Linkedin size={18}/></a>
        </div>
      </div>
      
      <div className="border-t border-slate-900 pt-8 text-slate-500 text-xs space-y-3">
        <p>© 2024 Prisma Labs. Todos os direitos reservados.</p>
        <p className="max-w-4xl">
          Aviso Legal: O Prisma Labs não é um plano de saúde. As informações desta plataforma têm caráter informativo e não substituem consulta, diagnóstico ou tratamento médico. Em caso de emergência, procure atendimento médico imediato.
        </p>
      </div>
    </div>
  </footer>
);

// --- CTA App ---
export const CTA = () => (
  <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    
    <div className="container mx-auto px-4 text-center relative z-10">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Pronto para transformar seus exames <br className="hidden md:block" /> em um programa de vida?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <button 
            onClick={() => scrollToSection('planos')}
            className="px-10 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Começar
          </button>
          <button className="px-10 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <MessageCircle size={18} />
            Falar com especialista
          </button>
        </div>
      </FadeIn>
    </div>
  </section>
);
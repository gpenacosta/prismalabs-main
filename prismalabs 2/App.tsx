import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { BiomarkerGrid } from './components/BiomarkerGrid';
import { DashboardPreview } from './components/DashboardPreview';
import { ComparisonTable } from './components/ComparisonTable';
import { Plans } from './components/Plans';
import { CadastroPage } from './components/CadastroPage';
import { AuthPage } from './components/AuthPage';
import { 
  HowItWorks, 
  Experts, 
  SocialProof, 
  FAQ, 
  Footer, 
  CTA 
} from './components/Sections';
import { scrollToSection, cn } from './lib/utils';
import { Logo } from './components/ui/Logo';

/* ---------------- STICKY NAV ---------------- */

interface StickyNavProps {
  onEntrar: () => void;
}

const StickyNav: React.FC<StickyNavProps> = ({ onEntrar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'visao-geral', label: 'Visão Geral' },
    { id: 'biomarcadores', label: 'Biomarcadores' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'planos', label: 'Programas' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
          : 'bg-cream/50 backdrop-blur-sm border-b border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Logo dark={false} />
        </div>

        <nav
          className={cn(
            'hidden md:flex items-center gap-1 p-1 rounded-full transition-all',
            scrolled
              ? 'bg-white/50 border border-white/20'
              : 'bg-white/30 border border-white/20'
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'px-4 py-1.5 text-sm font-medium rounded-full transition-all hover:shadow-sm',
                'text-slate-700 hover:text-slate-900 hover:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className={cn(
            'px-5 py-2 text-sm font-semibold rounded-full transition-colors shadow-lg',
            'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10'
          )}
          onClick={onEntrar}
        >
          Entrar
        </button>
      </div>
    </header>
  );
};



/* ---------------- APP / ROUTER EM ESTADO ---------------- */

const App: React.FC = () => {
  const [route, setRoute] = useState<'home' | 'cadastro' | 'auth'>('home');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const goToDashboard = () => {
    window.location.href = '/prismalabs-dashboard';
  };

  const handleStartProgram = (programId: string) => {
    setSelectedProgram(programId);
    setRoute('cadastro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoAuth = () => {
    setRoute('auth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-slate-900 font-sans antialiased selection:bg-purple-200 selection:text-purple-900">
      <StickyNav onEntrar={handleGoAuth} />
      {route === 'home' ? (
        <>
          <main id="visao-geral">
            <Hero />
            <BiomarkerGrid />
            <DashboardPreview />
            <HowItWorks />
            <Experts />
            <ComparisonTable />
            <Plans onStartProgram={handleStartProgram} />
            <SocialProof />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </>
      ) : route === 'cadastro' ? (
        <main className="pt-24">
          <CadastroPage
            selectedProgram={selectedProgram}
            onGoHome={handleGoHome}
            onGoDashboard={goToDashboard}
          />
        </main>
      ) : (
        <main className="pt-24">
          <AuthPage
            onGoHome={handleGoHome}
            onAuthenticate={goToDashboard}
          />
        </main>
      )}
    </div>
  );
};

export default App;
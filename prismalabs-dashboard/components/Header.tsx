import React from 'react';
import { Patient } from '../types';
import { Badge } from './ui/Badge';
import { User, Calendar } from 'lucide-react';

interface HeaderProps {
  patient: Patient;
}

export const Header: React.FC<HeaderProps> = ({ patient }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-slate-900">Prisma<span className="text-violet-600">Labs</span></span>
        </div>

        {/* User Info Block */}
        <div className="flex items-center space-x-6 text-right">
          <div className="hidden md:block">
             <div className="flex items-center justify-end space-x-2">
                <span className="text-sm font-semibold text-slate-800">{patient.name}</span>
                <Badge label={patient.program} variant="default" />
             </div>
             <div className="flex items-center justify-end space-x-1 mt-1 text-xs text-slate-500">
                <Calendar size={12} />
                <span>Painel atual: {patient.currentPanelDate} · Próximo: {patient.nextPanelDate}</span>
             </div>
          </div>
          
          {/* Mobile User Icon */}
          <div className="md:hidden p-2 bg-slate-100 rounded-full">
            <User size={20} className="text-slate-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
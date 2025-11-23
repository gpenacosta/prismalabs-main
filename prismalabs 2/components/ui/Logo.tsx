import React from 'react';

export const Logo: React.FC<{ className?: string, dark?: boolean }> = ({ className = "", dark = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-bold text-2xl tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        Prisma<span className={dark ? 'text-purple-300' : 'text-purple-700'}>Labs</span>
      </span>
    </div>
  );
};
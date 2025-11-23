import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, subtitle, headerAction }) => {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      {(title || subtitle) && (
        <div className="p-6 border-b border-slate-100 flex justify-between items-start">
          <div>
            {title && <h3 className="text-lg font-semibold text-slate-900 leading-none tracking-tight">{title}</h3>}
            {subtitle && <p className="text-sm text-slate-500 mt-2 leading-relaxed">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
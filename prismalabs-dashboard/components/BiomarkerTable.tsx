import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Card } from './ui/Card';
import { Biomarker, BiomarkerHistoryPoint } from '../types';
import { Badge } from './ui/Badge';
import { Search, Sparkles } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface BiomarkerTableProps {
  data: Biomarker[];
}

// --- Internal Components for History ---

const CustomTooltip = ({ active, payload, label, unit }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg rounded text-xs z-50">
        <p className="font-bold text-slate-700 mb-1">{label}</p>
        <p className="text-violet-600 font-medium">
          {payload[0].value} <span className="text-slate-400 font-normal">{unit}</span>
        </p>
      </div>
    );
  }
  return null;
};

const HistoryCell: React.FC<{ history?: BiomarkerHistoryPoint[]; status: string; unit: string }> = ({ history, status, unit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Update coordinates for the popup
  const updateCoords = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top,
        left: rect.left + rect.width / 2
      });
    }
  };

  // Handle scroll to close popup to prevent detachment
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [isOpen]);

  if (!history || history.length === 0) {
    return <span className="text-slate-400">-</span>;
  }

  // Determine color based on status
  let strokeColor = '#94a3b8'; // Default slate-400
  if (status === 'Ideal') strokeColor = '#10b981'; // emerald-500
  if (status === 'Atenção') strokeColor = '#f59e0b'; // amber-500
  if (status === 'Alto Risco') strokeColor = '#f43f5e'; // rose-500

  return (
    <div 
      ref={containerRef}
      className="relative h-full flex items-center justify-center"
      onMouseEnter={() => {
        updateCoords();
        setIsOpen(true);
      }}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => {
        updateCoords();
        setIsOpen(!isOpen);
      }}
    >
      {/* Sparkline Preview - Static (pointer-events-none removes interaction) */}
      <div className="w-20 h-8 bg-slate-50 rounded border border-slate-100 flex items-center justify-center px-1 pointer-events-none">
         <ResponsiveContainer width="100%" height="100%">
           <LineChart data={history}>
             <Line 
               type="monotone" 
               dataKey="value" 
               stroke={strokeColor} 
               strokeWidth={2} 
               dot={false} 
               activeDot={false}
               isAnimationActive={false}
             />
           </LineChart>
         </ResponsiveContainer>
      </div>

      {/* Detailed Popup - Rendered via Portal to avoid clipping */}
      {isOpen && createPortal(
        <div 
          className="fixed z-[9999] bg-white p-4 rounded-xl shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-100 w-64 pointer-events-auto"
          style={{
            top: coords.top - 10, // Shift up slightly
            left: coords.left,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Histórico Detalhado</div>
          <div className="h-32 w-full">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id={`gradient-${status}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={strokeColor} stopOpacity={0.1}/>
                    <stop offset="95%" stopColor={strokeColor} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  tick={{fontSize: 10, fill: '#64748b'}} 
                  axisLine={false} 
                  tickLine={false}
                  interval="preserveStartEnd"
                />
                <YAxis 
                  tick={{fontSize: 10, fill: '#64748b'}} 
                  axisLine={false} 
                  tickLine={false}
                  domain={['auto', 'auto']}
                />
                <Tooltip content={<CustomTooltip unit={unit} />} cursor={{ stroke: '#cbd5e1', strokeDasharray: '3 3' }} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={strokeColor} 
                  fill={`url(#gradient-${status})`}
                  strokeWidth={2} 
                  activeDot={{ r: 4, strokeWidth: 0, fill: strokeColor }}
                />
              </AreaChart>
             </ResponsiveContainer>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-white border-b border-r border-slate-200 transform rotate-45"></div>
        </div>,
        document.body
      )}
    </div>
  );
};


export const BiomarkerTable: React.FC<BiomarkerTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todas');

  // Extract unique areas for the dropdown
  const uniqueAreas = Array.from(new Set(data.map(b => b.area))).sort();

  const filteredData = data.filter(item => {
    // Search Logic
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter Logic (Combined Area + Status)
    let matchesFilter = true;
    if (selectedFilter !== 'Todas') {
      if (selectedFilter.startsWith('Status: ')) {
        const statusTarget = selectedFilter.replace('Status: ', '');
        matchesFilter = item.status === statusTarget;
      } else if (selectedFilter.startsWith('Área: ')) {
        const areaTarget = selectedFilter.replace('Área: ', '');
        matchesFilter = item.area === areaTarget;
      }
    }

    return matchesSearch && matchesFilter;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Ideal': return 'success';
      case 'Atenção': return 'warning';
      case 'Alto Risco': return 'danger';
      default: return 'default';
    }
  };

  return (
    <Card 
      title="Todos os seus biomarcadores, organizados"
      subtitle="Veja cada exame em detalhe, com referências, histórico e notas. Ajuste e otimize sua saúde com base em dados personalizados."
    >
      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por exame..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Combined Filter Dropdown */}
        <div className="w-full sm:w-56">
          <select 
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 cursor-pointer transition-colors appearance-none"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.7rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            <option value="Todas">Todas</option>
            <optgroup label="Status">
              <option value="Status: Ideal">Ideal</option>
              <option value="Status: Atenção">Atenção</option>
            </optgroup>
            <optgroup label="Área">
              {uniqueAreas.map(area => (
                <option key={area} value={`Área: ${area}`}>{area}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -mx-6 sm:mx-0 pb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">Área</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">Biomarcador</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">Resultado</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">Status</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50 text-center">Histórico</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50 text-center">
                 <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="py-4 px-6 text-sm text-slate-500">{row.area}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {row.name}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-slate-800 font-semibold">
                  {row.value} <span className="text-slate-400 font-normal text-xs">{row.unit}</span>
                </td>
                <td className="py-4 px-6">
                  <Badge label={row.status} variant={getStatusVariant(row.status)} />
                </td>
                <td className="py-4 px-6 text-center h-full">
                   <HistoryCell history={row.history} status={row.status} unit={row.unit} />
                </td>
                <td className="py-4 px-6 text-center">
                   <button 
                    title="Ver análise detalhada com apoio da IA"
                    className="text-violet-500 hover:text-violet-700 hover:bg-violet-50 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                   >
                      <Sparkles size={16} />
                   </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-400 text-sm">
                  Nenhum biomarcador encontrado para os filtros selecionados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
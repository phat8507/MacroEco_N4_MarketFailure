import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceLine, ResponsiveContainer } from 'recharts';
import { creditGrowthData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    const isNeg = d.growth < 0;
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm max-w-xs">
        <p className="font-bold text-ink-800 mb-1">Năm {label}</p>
        <p className={`font-mono font-semibold ${isNeg ? 'text-coral-500' : 'text-indigo-500'}`}>
          Tăng trưởng TD BDS: {d.growth > 0 ? '+' : ''}{d.growth}%
        </p>
        {d.note && <p className="text-ink-500 text-xs mt-1">{d.note}</p>}
      </div>
    );
  }
  return null;
};

export default function CreditGrowthChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-4">
        Tăng trưởng Tín dụng Bất động sản 2019–2022 <span className="text-ink-400 font-normal">(%/năm)</span>
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={creditGrowthData} margin={{ top: 16, right: 16, left: -8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[-10, 35]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99,102,241,0.05)' }} />
          <ReferenceLine y={0} stroke="#d1d5db" strokeWidth={1.5} />
          <Bar dataKey="growth" radius={[6, 6, 0, 0]} animationBegin={400} animationDuration={1200}>
            {creditGrowthData.map((entry, i) => (
              <Cell key={i} fill={entry.growth < 0 ? '#f43f5e' : '#6366f1'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* Annotation */}
      <div className="mt-3 flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-sm bg-indigo-500 flex-shrink-0" />
        <span className="text-ink-500 text-xs">Tăng trưởng dương</span>
        <span className="inline-block w-3 h-3 rounded-sm bg-coral-500 flex-shrink-0 ml-3" />
        <span className="text-ink-500 text-xs">Đảo chiều (2022)</span>
      </div>
      <SourceTag>NHNN/SBV — Tín dụng phân theo ngành kinh tế</SourceTag>
    </div>
  );
}

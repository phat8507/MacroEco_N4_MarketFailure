import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ReferenceLine, ResponsiveContainer } from 'recharts';
import { laborData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const color = payload[0].payload.color;
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-1">{label}</p>
        <p className="font-mono font-semibold" style={{ color: color }}>
          {payload[0].value.toLocaleString('vi-VN')} lao động
        </p>
        <p className="text-ink-500 text-xs mt-1">Q1 → Q2/2023</p>
      </div>
    );
  }
  return null;
};

export default function LaborLossChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Lao Động Mất Việc theo Ngành <span className="text-ink-400 font-normal">(Q1 → Q2/2023)</span>
      </h3>
      <p className="text-ink-500 text-xs mb-4">Chênh lệch số lao động giữa Q2 và Q1 — số âm = mất việc</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={laborData} margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="industry" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            reversed={true}
            domain={['auto', 0]}
            tickFormatter={(v) => v.toLocaleString('vi-VN')}
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
          <ReferenceLine y={0} stroke="#d1d5db" strokeWidth={1.5} />
          <Bar dataKey="change" radius={[6, 6, 0, 0]} animationBegin={400} animationDuration={1200}>
            {laborData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <SourceTag>GSO — Báo cáo Lao động Q2/2023</SourceTag>
    </div>
  );
}

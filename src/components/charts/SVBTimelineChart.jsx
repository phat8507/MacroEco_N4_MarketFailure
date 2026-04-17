import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ResponsiveContainer } from 'recharts';
import { svbRunData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-1">{label}</p>
        <p className="font-mono text-coral-500 font-semibold">{payload[0].value} tỷ USD bị rút</p>
        <p className="text-ink-400 text-xs mt-1">Tốc độ ≈ 1,2 triệu USD/giây</p>
      </div>
    );
  }
  return null;
};

export default function SVBTimelineChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        SVB Bank Run — 9/3/2023 trong 8 Giờ
      </h3>
      <p className="text-ink-500 text-xs mb-4">42 tỷ USD bị rút trong 8 giờ · Tốc độ: 1,2 triệu USD/giây</p>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={svbRunData} margin={{ top: 8, right: 16, left: -8, bottom: 4 }}>
          <defs>
            <linearGradient id="runGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="time" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}B`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 50]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#f43f5e', strokeWidth: 1.5 }} />
          <Area
            type="monotone"
            dataKey="withdrawn"
            stroke="#f43f5e"
            strokeWidth={3}
            fill="url(#runGrad)"
            dot={{ r: 5, fill: '#f43f5e', strokeWidth: 2, stroke: '#fff' }}
            animationBegin={400}
            animationDuration={1600}
          />
          <ReferenceDot
            x="16:00"
            y={42}
            r={8}
            fill="#f43f5e"
            stroke="#fff"
            strokeWidth={2}
            label={{ value: '$42B', position: 'top', fontSize: 11, fontWeight: 700, fill: '#f43f5e' }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <SourceTag>DFPI California — Department of Financial Protection and Innovation, 2023</SourceTag>
    </div>
  );
}

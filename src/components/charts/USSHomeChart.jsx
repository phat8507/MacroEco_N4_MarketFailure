import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ReferenceArea, ResponsiveContainer } from 'recharts';
import { usHousingData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    const phaseLabel = { bubble: '📈 Bong bóng', peak: '🔺 Đỉnh', crash: '📉 Sụp đổ', pre: '⬜ Trước bong bóng' };
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-1">Năm {label}</p>
        <p className="font-mono text-indigo-600 font-semibold">${d.price.toLocaleString('en')}K</p>
        <p className="text-ink-400 text-xs mt-1">{phaseLabel[d.phase]}</p>
      </div>
    );
  }
  return null;
};

export default function USSHomeChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Giá Nhà Trung Bình Hoa Kỳ 1998–2012 <span className="text-ink-400 font-normal">(nghìn USD)</span>
      </h3>
      <p className="text-ink-500 text-xs mb-4">Tăng 60% trong 5 năm (2000–2005) → Đỉnh $257K (2006) → Sụp đổ 2008</p>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={usHousingData} margin={{ top: 16, right: 16, left: -8, bottom: 4 }}>
          <defs>
            <linearGradient id="houseBubble" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="houseCrash" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}K`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[100, 290]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6366f1', strokeWidth: 1.5 }} />
          {/* Vùng bong bóng */}
          <ReferenceArea x1="2000" x2="2006" fill="#f59e0b" fillOpacity={0.08} label={{ value: 'Bong bóng', position: 'insideTop', fontSize: 10, fill: '#d97706' }} />
          {/* Vùng sụp đổ */}
          <ReferenceArea x1="2006" x2="2012" fill="#f43f5e" fillOpacity={0.06} label={{ value: 'Sụp đổ', position: 'insideTop', fontSize: 10, fill: '#e11d48' }} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={2.5}
            fill="url(#houseBubble)"
            dot={{ r: 5, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
            animationBegin={400}
            animationDuration={1600}
          />
          <ReferenceDot x="2006" y={257.4} r={8} fill="#f43f5e" stroke="#fff" strokeWidth={2}
            label={{ value: '$257K', position: 'top', fontSize: 11, fontWeight: 700, fill: '#f43f5e' }} />
        </AreaChart>
      </ResponsiveContainer>
      <SourceTag>S&amp;P/Case-Shiller National Home Price Index / U.S. Census Bureau</SourceTag>
    </div>
  );
}

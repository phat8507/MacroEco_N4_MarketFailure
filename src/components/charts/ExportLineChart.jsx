import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ResponsiveContainer } from 'recharts';
import { exportData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-1">Năm {label}</p>
        <p className="font-mono text-indigo-600 font-semibold">{d.value} tỷ USD</p>
        {d.peak && <p className="text-emerald-500 text-xs mt-1">📈 Đỉnh xuất khẩu</p>}
        {d.drop && <p className="text-coral-500 text-xs mt-1">📉 Giảm lần đầu (−4,4%)</p>}
      </div>
    );
  }
  return null;
};

export default function ExportLineChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-4">
        Xuất khẩu Việt Nam 2020–2023 <span className="text-ink-400 font-normal">(tỷ USD)</span>
      </h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={exportData} margin={{ top: 16, right: 16, left: -8, bottom: 4 }}>
          <defs>
            <linearGradient id="exportGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}B`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[240, 400]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#6366f1', strokeWidth: 1.5 }} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2.5}
            fill="url(#exportGrad)"
            dot={{ r: 5, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }}
            animationBegin={400}
            animationDuration={1400}
          />
          <ReferenceDot x="2022" y={371.9} r={7} fill="#10b981" stroke="#fff" strokeWidth={2} label={{ value: 'Đỉnh', position: 'top', fontSize: 10, fill: '#10b981' }} />
          <ReferenceDot x="2023" y={355.5} r={7} fill="#f43f5e" stroke="#fff" strokeWidth={2} label={{ value: '−4,4%', position: 'bottom', fontSize: 10, fill: '#f43f5e' }} />
        </AreaChart>
      </ResponsiveContainer>
      <SourceTag>GSO — Tổng cục Thống kê Việt Nam, 2023</SourceTag>
    </div>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, ResponsiveContainer } from 'recharts';
import { shippingData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-1">{label}</p>
        <p className="font-mono font-semibold" style={{ color: payload[0].payload.color }}>
          ${payload[0].value.toLocaleString('en')} USD/container
        </p>
      </div>
    );
  }
  return null;
};

export default function ShippingCostChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Chi Phí Vận Chuyển Container <span className="text-ink-400 font-normal">(USD/container, tuyến Á-Âu)</span>
      </h3>
      <p className="text-ink-500 text-xs mb-4">
        Xung đột Biển Đỏ → chi phí tăng hơn 100%, thời gian vận chuyển tăng thêm 10–14 ngày
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={shippingData} margin={{ top: 24, right: 32, left: -8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 3500]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
          <Bar dataKey="cost" radius={[8, 8, 0, 0]} animationBegin={400} animationDuration={1200}>
            <LabelList
              dataKey="cost"
              position="top"
              formatter={(v) => `$${v.toLocaleString('en')}`}
              style={{ fontSize: 12, fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}
            />
            {shippingData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <SourceTag>Bộ Công Thương VN 2024 / Drewry Shipping Consultants</SourceTag>
    </div>
  );
}

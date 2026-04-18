import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, ResponsiveContainer } from 'recharts';
import { shippingData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#ffffff', border: '1px solid #e0e0e8', borderRadius: '1rem', padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }} className="text-sm">
        <p style={{ fontWeight: 700, color: '#6b7280', marginBottom: 4 }}>{label}</p>
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
    <div style={{ background: '#fafafa', border: '1px solid #e0e0e8', borderRadius: '12px', padding: '32px' }}>
      <h3 style={{ color: '#0d0d0d', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px', fontFamily: "'Playfair Display', serif" }}>
        Chi Phí Vận Chuyển Container <span style={{ color: '#6b7280', fontWeight: 400, fontFamily: "'DM Mono', monospace", fontSize: '0.8rem' }}>(USD/container, tuyến Á-Âu)</span>
      </h3>
      <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '24px', fontFamily: "'DM Mono', monospace" }}>
        Xung đột Biển Đỏ → chi phí tăng hơn 100%, thời gian vận chuyển tăng thêm 10–14 ngày
      </p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={shippingData} margin={{ top: 24, right: 32, left: -8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 12, fill: '#6b7280', fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#6b7280', fontFamily: "'DM Mono', monospace" }}
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
              style={{ fontSize: 12, fontWeight: 700, fontFamily: "'DM Mono', monospace", fill: '#0d0d0d' }}
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

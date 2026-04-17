import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { apartmentData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 border border-ink-100 rounded-2xl shadow-xl px-4 py-3 text-sm">
        <p className="font-bold text-ink-800 mb-2">Năm {label}</p>
        {payload.map((p, i) => (
          <p key={i} className="font-mono text-xs" style={{ color: p.color }}>
            {p.name}: {p.value.toLocaleString('vi-VN')} {p.dataKey === 'price' ? 'triệu đ/m²' : 'giao dịch'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ApartmentPriceChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Giá Căn hộ Sơ cấp Hà Nội 2022–2024
      </h3>
      <p className="text-ink-500 text-xs mb-4">Nghịch lý: Giá tăng mạnh trong khi giao dịch giảm → Tâm lý bầy đàn</p>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={apartmentData} margin={{ top: 8, right: 40, left: -8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="price"
            orientation="left"
            tickFormatter={(v) => `${v}tr`}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[20, 80]}
          />
          <YAxis
            yAxisId="trans"
            orientation="right"
            tickFormatter={(v) => v.toLocaleString('vi-VN')}
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99,102,241,0.05)' }} />
          <Legend
            formatter={(value) => value === 'price' ? 'Giá (triệu đ/m²)' : 'Số giao dịch'}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Bar yAxisId="price" dataKey="price" name="price" fill="#6366f1" radius={[6, 6, 0, 0]} animationBegin={400} animationDuration={1200} />
          <Line yAxisId="trans" dataKey="transactions" name="transactions" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 5, fill: '#f43f5e' }} animationBegin={600} animationDuration={1200} />
        </ComposedChart>
      </ResponsiveContainer>
      <SourceTag>CBRE Vietnam Q4/2024 — Thị trường căn hộ sơ cấp Hà Nội</SourceTag>
    </div>
  );
}

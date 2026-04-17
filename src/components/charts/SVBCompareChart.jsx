import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import { svbCompareData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const svbDisplayData = svbCompareData.map(d => ({ ...d, bank: d.bank }));

export default function SVBCompareChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        So Sánh SVB vs Ngành — Rủi ro Lệch Kỳ Hạn
      </h3>
      <p className="text-ink-500 text-xs mb-4">SVB có tỷ lệ tiền gửi không bảo hiểm và lỗ HTM vượt trội so với toàn ngành</p>
      <div className="grid grid-cols-1 gap-4">
        {/* Chart 1: Uninsured deposits */}
        <div>
          <p className="text-ink-600 text-xs font-semibold mb-2">Tiền gửi không bảo hiểm FDIC (%)</p>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={svbCompareData} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
              <XAxis type="number" domain={[0, 110]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="bank" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={110} />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="uninsured" radius={[0, 6, 6, 0]} animationBegin={400} animationDuration={1000}>
                {svbCompareData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Chart 2: HTM Loss ratio */}
        <div>
          <p className="text-ink-600 text-xs font-semibold mb-2">Lỗ HTM / Vốn chủ sở hữu (%)</p>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={svbCompareData} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
              <XAxis type="number" domain={[0, 160]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="bank" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={110} />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="htmRatio" radius={[0, 6, 6, 0]} animationBegin={600} animationDuration={1000}>
                {svbCompareData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <SourceTag>OIG Fed Report 2023-SR-B-013 / FDIC</SourceTag>
    </div>
  );
}

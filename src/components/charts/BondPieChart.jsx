import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { bondMaturityData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

const RADIAN = Math.PI / 180;
const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const r = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight="700">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function BondPieChart() {
  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Cơ cấu Trái phiếu DN Đáo hạn 2025
      </h3>
      <p className="text-ink-500 text-xs mb-4">BDS chiếm &gt; 50% tổng giá trị trái phiếu đáo hạn</p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={bondMaturityData}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={95}
            dataKey="value"
            labelLine={false}
            label={renderLabel}
            animationBegin={400}
            animationDuration={1200}
          >
            {bondMaturityData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(val, name) => [`${val}%`, name]}
            contentStyle={{ borderRadius: 12, border: '1px solid #e5e7eb', fontSize: 12 }}
          />
          <Legend
            formatter={(value) => value}
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '12px' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <SourceTag>VBMA / VNDIRECT Research Q1/2025</SourceTag>
    </div>
  );
}

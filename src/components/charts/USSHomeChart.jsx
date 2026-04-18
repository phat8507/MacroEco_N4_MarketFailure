import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ReferenceArea, ResponsiveContainer } from 'recharts';
import { usHousingData } from '../../data/chartData';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    const phaseLabel = { bubble: '📈 Bong bóng', peak: '🔺 Đỉnh', crash: '📉 Sụp đổ', pre: '⬜ Trước bong bóng' };
    return (
      <div style={{
        background: '#ffffff',
        border: '1px solid #e0e0e8',
        borderRadius: '8px',
        padding: '12px 16px',
        color: '#0d0d0d',
        fontFamily: "'DM Mono', monospace",
        fontSize: '0.8rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}>
        <p style={{ fontWeight: 700, color: '#6b7280', marginBottom: 4 }}>Năm {label}</p>
        <p style={{ color: '#1a56db', fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>
          ${d.price.toLocaleString('en')}K
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>{phaseLabel[d.phase]}</p>
      </div>
    );
  }
  return null;
};

const CustomPeakDot = (props) => {
  const { cx, cy } = props;
  return (
    <svg x={cx - 16} y={cy - 16} width={32} height={32} overflow="visible">
      <circle cx={16} cy={16} r={8} fill="none" stroke="#c0392b" strokeWidth={2}>
        <animate attributeName="r" begin="0s" dur="2s" values="8; 20" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" begin="0s" dur="2s" values="0.8; 0" repeatCount="indefinite" />
      </circle>
      <circle cx={16} cy={16} r={6} fill="#c0392b" stroke="#ffffff" strokeWidth={1.5} />
    </svg>
  );
};

export default function USSHomeChart() {
  return (
    <div style={{
      background: '#fafafa',
      border: '1px solid #e0e0e8',
      borderRadius: '12px',
      padding: '32px',
      backdropFilter: 'blur(4px)',
      width: '100%',
    }}>
      <h3 style={{
        color: '#0d0d0d',
        fontWeight: 700,
        fontSize: '1.1rem',
        marginBottom: '4px',
        fontFamily: "'Playfair Display', serif"
      }}>
        Giá Nhà Trung Bình Hoa Kỳ 1998–2012 <span style={{ color: '#6b7280', fontWeight: 400, fontFamily: "'DM Mono', monospace", fontSize: '0.8rem' }}>(nghìn USD)</span>
      </h3>
      <p style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '24px', fontFamily: "'DM Mono', monospace" }}>
        Nguồn: S&P/Case-Shiller National Home Price Index / U.S. Census Bureau
      </p>
      
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={usHousingData} margin={{ top: 16, right: 16, left: -8, bottom: 4 }}>
          <defs>
            <linearGradient id="coolBlueLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1a56db" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#1a56db" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ebebeb" vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#6b7280', fontFamily: "'DM Mono', monospace" }} axisLine={{ stroke: '#e0e0e8' }} tickLine={false} />
          <YAxis
            tickFormatter={(v) => `$${v}K`}
            tick={{ fontSize: 11, fill: '#6b7280', fontFamily: "'DM Mono', monospace" }}
            axisLine={false}
            tickLine={false}
            domain={[100, 290]}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#e0e0e8', strokeWidth: 2 }} />
          
          {/* Bong bóng region */}
          <ReferenceArea 
            x1="2002" x2="2005" 
            fill="rgba(192,57,43,0.03)" 
            stroke="rgba(192,57,43,0.15)"
            strokeDasharray="4 4"
            label={{ value: 'Bong bóng', position: 'insideTopLeft', fontSize: 11, fill: '#c0392b', fontFamily: "'DM Mono', monospace", dx: 10, dy: 10 }} 
          />
          
          <ReferenceArea 
            x1="2006" x2="2012" 
            fill="transparent" 
            label={{ value: 'Sụp đổ', position: 'insideTopRight', fontSize: 11, fill: '#c0392b', fontFamily: "'DM Mono', monospace", dx: -10, dy: 10 }} 
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="#1a56db"
            strokeWidth={3}
            fill="url(#coolBlueLight)"
            dot={{ r: 4, fill: '#fafafa', strokeWidth: 2, stroke: '#1a56db' }}
            activeDot={{ r: 6, fill: '#1a56db', stroke: '#ffffff' }}
            animationBegin={400}
            animationDuration={1600}
          />
          
          <ReferenceDot 
            x="2006" y={257.4} 
            shape={<CustomPeakDot />}
            label={{ value: '$257K', position: 'top', fontSize: 12, fontWeight: 700, fill: '#c0392b', fontFamily: "'DM Mono', monospace", offset: 12 }} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

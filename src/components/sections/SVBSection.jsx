import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import FadeInView from '../ui/FadeInView';
import SectionBridge from '../ui/SectionBridge';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  AreaChart, Area, ReferenceDot, ResponsiveContainer,
} from 'recharts';
import { svbCompareData, svbRunData } from '../../data/chartData';

// ── Gradient constants ────────────────────────────────────────────────────────
const BG_GRADIENT = 'linear-gradient(90deg, #4f2036 0%, #2b1d42 42%, #17183b 100%)';
const ROSE_ACCENT  = '#fb7185';   // Brighter, higher contrast rose
const PURPLE_GLOW  = '#d8b4fe';   // Brighter, clearer purple
const NAVY_TEXT    = '#ffffff';   // Pure white for primary body text
const DIM_TEXT     = '#f1f5f9';   // Very light slate (was dim gray) for better readability
const BORDER_GLASS = 'rgba(255,255,255,0.2)'; // Stronger contrast border
const CARD_BG      = 'rgba(15, 10, 30, 0.75)'; // Much more opaque for KPI cards
const CHART_BG     = 'rgba(10, 5, 20, 0.85)'; // Very dark, opaque inner layer for charts

// ── Dark tooltip ─────────────────────────────────────────────────────────────
const darkTooltip = {
  backgroundColor: 'rgba(10,5,20,0.98)',
  border: '1px solid rgba(255,255,255,0.25)',
  borderRadius: '12px',
  color: '#ffffff',
  fontSize: '13px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
};

// ── Custom bank-run tooltip ───────────────────────────────────────────────────
function RunTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ ...darkTooltip, padding: '12px 16px' }}>
      <p style={{ fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{label}</p>
      <p style={{ color: ROSE_ACCENT, fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '14px' }}>
        ${payload[0].value}B bị rút
      </p>
      <p style={{ color: '#cbd5e1', fontSize: 12, marginTop: 6, fontWeight: 500 }}>Tốc độ ≈ 1,2&nbsp;triệu&nbsp;USD/giây</p>
    </div>
  );
}

const stats = [
  { value: '$212B', label: 'Tổng tài sản SVB (2022)', accent: PURPLE_GLOW, source: 'OIG Fed' },
  { value: '94%',   label: 'Tiền gửi không bảo hiểm FDIC', accent: ROSE_ACCENT, source: 'OIG Fed' },
  { value: '$42B',  label: 'Bị rút trong 8 giờ ngày 9/3/2023', accent: ROSE_ACCENT, source: 'DFPI' },
  { value: '$15,1B',label: 'Lỗ HTM chưa thực hiện cuối 2022', accent: '#fb923c', source: 'OIG Fed' },
];

export default function SVBSection() {
  return (
    <section
      id="svb"
      style={{ position: 'relative', overflow: 'hidden', padding: '6rem 1rem' }}
    >
      {/* ── Gradient background ─────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, background: BG_GRADIENT }} />

      {/* ── Radial glows for visual depth (reduced to not compete with data) ─ */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 10% 30%, rgba(139,62,80,0.2) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 50% 60% at 90% 70%, rgba(55,35,90,0.3) 0%, transparent 65%)',
      }} />

      {/* ── Subtle grain texture (reduced opacity) ────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.02,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />

      {/* ── Top highlight edge ──────────────────────────────────────────────── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(200,140,160,0.5), rgba(160,120,220,0.4), transparent)',
      }} />

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="section-container relative z-10">

        <FadeInView>
          <div style={{ color: ROSE_ACCENT }}>
            <SectionLabel index={10} label="Case SVB 2023" accent={ROSE_ACCENT} />
          </div>
          <SpeakerTag name="Danh Phúc" time="6:30 – 8:00" color={PURPLE_GLOW} />
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8"
        >
          {/* ── Section title ─────────────────────────────────────────────── */}
          <motion.div variants={fadeInUp} className="mb-4">
            <p style={{ color: '#e2e8f0', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
              Case study — Cơ chế 2: Lệch Kỳ Hạn
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: '#ffffff',
              }}
            >
              SVB 2023
            </h2>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                background: `linear-gradient(135deg, ${ROSE_ACCENT}, ${PURPLE_GLOW})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginTop: '0.2rem',
              }}
            >
              Lệch Kỳ Hạn Số Hóa
            </h2>
          </motion.div>

          {/* ── Drop-cap context paragraph ────────────────────────────────── */}
          <motion.div variants={fadeInUp} className="mb-12 max-w-2xl">
            <p
              className="drop-cap leading-relaxed text-[1.1rem]"
              style={{ color: NAVY_TEXT, fontWeight: 400 }}
            >
              Silicon Valley Bank — ngân hàng{' '}
              <strong style={{ color: '#ffffff', fontWeight: 700 }}>212 tỷ USD</strong> tài sản, lớn thứ 16 nước Mỹ — sụp đổ trong{' '}
              <strong style={{ color: ROSE_ACCENT, fontWeight: 700 }}>48 giờ</strong>.
              Không phải vì lãi suất FED tăng. Mà vì cấu trúc bảng cân đối tư nhân đã sai từ trước.
            </p>
          </motion.div>

          {/* ── Key stats — prominent cards ───────────────────────────────── */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                style={{
                  background: CARD_BG,
                  border: `1px solid ${s.accent}40`,
                  borderRadius: '16px',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  boxShadow: `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`,
                }}
              >
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', color: s.accent, lineHeight: 1.2, marginBottom: '0.75rem' }}>
                  {s.value}
                </p>
                <p style={{ color: DIM_TEXT, fontSize: '0.8rem', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', marginTop: '0.75rem', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.source}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Charts ────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

            {/* SVB Compare Chart — dark heavy contrast */}
            <FadeInView>
              <div style={{ background: CHART_BG, border: `1px solid ${BORDER_GLASS}`, borderRadius: '16px', padding: '1.75rem', backdropFilter: 'blur(4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>
                  So Sánh SVB vs Ngành — Rủi ro Lệch Kỳ Hạn
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  SVB có tỷ lệ <strong style={{color:"#ffffff"}}>tiền gửi không bảo hiểm</strong> và <strong style={{color:"#ffffff"}}>lỗ HTM</strong> vượt trội so với toàn ngành
                </p>
                
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tiền gửi không bảo hiểm FDIC (%)</p>
                    <ResponsiveContainer width="100%" height={140}>
                      <BarChart data={svbCompareData} layout="vertical" margin={{ top: 0, right: 50, bottom: 0, left: 8 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" horizontal={false} />
                        <XAxis type="number" domain={[0, 110]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11, fill: '#f1f5f9', fontWeight: 600 }} axisLine={{stroke: 'rgba(255,255,255,0.2)'}} tickLine={false} />
                        <YAxis type="category" dataKey="bank" tick={{ fontSize: 12, fill: '#ffffff', fontWeight: 600 }} axisLine={false} tickLine={false} width={110} />
                        <Tooltip contentStyle={darkTooltip} formatter={(v) => [`${v}%`, 'Không bảo hiểm']} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                        <Bar dataKey="uninsured" radius={[0, 6, 6, 0]} animationBegin={200} animationDuration={1000} barSize={24}>
                          {svbCompareData.map((entry, i) => (
                            <Cell key={i} fill={i === 0 ? ROSE_ACCENT : i === 1 ? PURPLE_GLOW : '#60a5fa'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lỗ HTM / Vốn chủ sở hữu (%)</p>
                    <ResponsiveContainer width="100%" height={140}>
                      <BarChart data={svbCompareData} layout="vertical" margin={{ top: 0, right: 50, bottom: 0, left: 8 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" horizontal={false} />
                        <XAxis type="number" domain={[0, 160]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11, fill: '#f1f5f9', fontWeight: 600 }} axisLine={{stroke: 'rgba(255,255,255,0.2)'}} tickLine={false} />
                        <YAxis type="category" dataKey="bank" tick={{ fontSize: 12, fill: '#ffffff', fontWeight: 600 }} axisLine={false} tickLine={false} width={110} />
                        <Tooltip contentStyle={darkTooltip} formatter={(v) => [`${v}%`, 'Lỗ HTM']} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                        <Bar dataKey="htmRatio" radius={[0, 6, 6, 0]} animationBegin={400} animationDuration={1000} barSize={24}>
                          {svbCompareData.map((entry, i) => (
                            <Cell key={i} fill={i === 0 ? '#fb923c' : i === 1 ? '#d8b4fe' : '#34d399'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginTop: '1.25rem', fontFamily: 'monospace' }}>
                  Nguồn: OIG Fed Report 2023-SR-B-013 / FDIC
                </p>
              </div>
            </FadeInView>

            {/* SVB Bank Run Timeline — dark heavy contrast */}
            <FadeInView delay={0.1}>
              <div style={{ background: CHART_BG, border: `1px solid ${BORDER_GLASS}`, borderRadius: '16px', padding: '1.75rem', backdropFilter: 'blur(4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                <h3 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '6px' }}>
                  SVB Bank Run — 9/3/2023
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '2rem', lineHeight: 1.5 }}>
                  <strong style={{ color: ROSE_ACCENT, fontSize: '1rem' }}>$42 tỷ</strong> bị rút trong 8 giờ · Tốc độ: <strong style={{color:"#ffffff"}}>1,2 triệu USD/giây</strong>
                </p>
                <div style={{ paddingTop: '1rem' }}>
                    <ResponsiveContainer width="100%" height={260}>
                      <AreaChart data={svbRunData} margin={{ top: 16, right: 16, left: 0, bottom: 8 }}>
                        <defs>
                          <linearGradient id="runGradDark" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={ROSE_ACCENT} stopOpacity={0.4} />
                            <stop offset="95%" stopColor={ROSE_ACCENT} stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 4" stroke="rgba(255,255,255,0.12)" vertical={false} />
                        <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#f1f5f9', fontWeight: 600 }} axisLine={{stroke: 'rgba(255,255,255,0.2)'}} tickLine={false} tickMargin={10} />
                        <YAxis tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 12, fill: '#ffffff', fontWeight: 700 }} axisLine={false} tickLine={false} domain={[0, 50]} tickMargin={10} />
                        <Tooltip content={<RunTooltip />} cursor={{ stroke: ROSE_ACCENT, strokeWidth: 1.5, strokeDasharray: '4 4' }} />
                        <Area
                          type="monotone"
                          dataKey="withdrawn"
                          stroke={ROSE_ACCENT}
                          strokeWidth={3.5}
                          fill="url(#runGradDark)"
                          dot={{ r: 5, fill: ROSE_ACCENT, strokeWidth: 2, stroke: '#17183b' }}
                          animationBegin={400}
                          animationDuration={1600}
                        />
                        <ReferenceDot
                          x="16:00" y={42} r={9}
                          fill={ROSE_ACCENT} stroke="#ffffff" strokeWidth={2.5}
                          label={{ value: '$42B', position: 'top', fontSize: 14, fontWeight: 800, fill: ROSE_ACCENT, offset: 12 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginTop: '1.25rem', fontFamily: 'monospace' }}>
                  Nguồn: DFPI California, 2023
                </p>
              </div>
            </FadeInView>
          </div>

          {/* ── SVB vs JPMorgan comparison ────────────────────────────────── */}
          <FadeInView>
            <div style={{ background: 'rgba(25, 15, 35, 0.8)', border: `1px solid ${PURPLE_GLOW}40`, borderRadius: '16px', padding: '1.75rem', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
              <p style={{ color: PURPLE_GLOW, fontSize: '0.95rem', fontWeight: 800, marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                🔑 SVB vs JPMorgan — Cùng đợt tăng lãi suất FED
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div style={{ background: 'rgba(251,113,133,0.12)', border: '1px solid rgba(251,113,133,0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: ROSE_ACCENT, fontWeight: 800, fontSize:'1.05rem', marginBottom: '0.75rem' }}>SVB — Sụp đổ</p>
                  <ul style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.7, listStyle: 'disc', paddingLeft: '1.25rem', fontWeight: 500 }}>
                    <li><strong style={{color: ROSE_ACCENT}}>94%</strong> tiền gửi không bảo hiểm</li>
                    <li>Lỗ HTM vượt quá vốn chủ sở hữu</li>
                    <li>Tập trung tệp khách startup — dễ lây lan bầy đàn</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#34d399', fontWeight: 800, fontSize:'1.05rem', marginBottom: '0.75rem' }}>JPMorgan — Không vỡ</p>
                  <ul style={{ color: '#ffffff', fontSize: '0.85rem', lineHeight: 1.7, listStyle: 'disc', paddingLeft: '1.25rem', fontWeight: 500 }}>
                    <li><strong style={{color: '#34d399'}}>~40%</strong> tiền gửi không bảo hiểm</li>
                    <li>Tỷ lệ lỗ HTM an toàn</li>
                    <li>Danh mục đa dạng, lệch kỳ hạn được kiểm soát</li>
                  </ul>
                </div>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '0.8rem', marginTop: '1.25rem', fontFamily: 'monospace', fontWeight: 600 }}>
                → Cùng một biến số vĩ mô (FED tăng lãi suất), sự khác biệt nằm ở <strong style={{color:'#ffffff'}}>cấu trúc bảng cân đối tư nhân</strong>.
              </p>
            </div>
          </FadeInView>
        </motion.div>

        {/* Section bridge */}
        <div className="mt-16">
          <SectionBridge
            text="SVB sụp đổ năm 2023. Nhưng kịch bản này đã xảy ra một lần trước — ở quy mô lớn hơn gấp 3.000 lần."
            nextLabel="Khủng hoảng Tài chính 2008 — Vòng Xoáy Toàn Cầu"
            accent={PURPLE_GLOW}
            variant="dark"
          />
        </div>

        {/* Bottom edge highlight */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(160,120,220,0.35), transparent)',
        }} />
      </div>
    </section>
  );
}

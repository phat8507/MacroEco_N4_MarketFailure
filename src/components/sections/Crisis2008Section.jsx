import { motion } from 'framer-motion';
import FadeInView from '../ui/FadeInView';
import USSHomeChart from '../charts/USSHomeChart';
import SectionBridge from '../ui/SectionBridge';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const HouseIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const BankIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="16" height="12" rx="2"></rect>
    <path d="M12 10V6"></path>
    <path d="M8 6h8"></path>
    <path d="M10 2l2 4 2-4"></path>
  </svg>
);

const RatingIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IdeaIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M12 2a7 7 0 0 0-7 7c0 2.2 1.3 4.1 3 5.3V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.7c1.7-1.2 3-3.1 3-5.3a7 7 0 0 0-7-7z"></path>
  </svg>
);

export default function Crisis2008Section() {
  const chain = [
    { title: 'Môi giới bất động sản', body: '"Liar Loans" — cho vay không kiểm tra thu nhập', Icon: HouseIcon, color: '#c0392b' },
    { title: 'Goldman Sachs / Lehman Brothers', body: 'Đóng gói CDO / MBS — chuyển rủi ro cho nhà đầu tư toàn cầu', Icon: BankIcon, color: '#1a56db' },
    { title: "Moody's và S&P", body: 'Xếp hạng AAA giả tạo cho tài sản độc hại', Icon: RatingIcon, color: '#d97706' },
  ];

  return (
    <>
      <style>{`
        .card-actor {
          transition: all 0.25s ease;
        }
        .card-actor:hover {
          transform: translateY(-4px);
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .dot-green {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          animation: pulse-green 2s infinite;
        }
        .text-underline-hover {
          transition: text-decoration 0.2s;
        }
        .text-underline-hover:hover {
          text-decoration: underline;
        }
      `}</style>
      
      <section
        id="crisis-2008"
        style={{ background: '#f5f5f0', color: '#1a1a2e', position: 'relative', overflow: 'hidden', padding: '6rem 1rem' }}
      >
        <div className="section-container relative z-10 max-w-7xl mx-auto">
          
          <FadeInView>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              {/* Slide label */}
              <div style={{ 
                fontFamily: "'DM Mono', monospace", 
                fontSize: '0.7rem', 
                color: '#6b7280', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                SLIDE 11 / 12 — CASE TOÀN CẦU
              </div>
              
              {/* Speaker badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(0,0,0,0.15)',
                backdropFilter: 'blur(8px)',
                background: 'rgba(0,0,0,0.03)',
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.75rem',
                color: '#0d0d0d'
              }}>
                <span className="dot-green"></span>
                Hoàng Việt <span style={{ opacity: 0.5, marginLeft: '6px' }}>8:00 – 9:00</span>
              </div>
            </div>
          </FadeInView>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {/* Hero Title Block */}
            <motion.div variants={fadeInUp} style={{ position: 'relative', paddingLeft: '24px', marginBottom: '60px' }}>
              <div style={{ position: 'absolute', left: 0, top: '4px', bottom: '4px', width: '2px', background: '#c0392b' }}></div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: '#0d0d0d',
                margin: 0
              }}>
                Khủng hoảng 2008
              </h2>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#c0392b',
                margin: '8px 0 0 0'
              }}>
                Vòng Xoáy Toàn Cầu
              </h2>
            </motion.div>

            {/* Layout: Chart (Left) + Stats & Insight (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              
              <FadeInView>
                <USSHomeChart />
              </FadeInView>

              <FadeInView delay={0.1}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Stat Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div style={{
                      background: '#ffffff',
                      borderTop: '3px solid #1a56db',
                      borderLeft: '1px solid #e0e0e8',
                      borderRight: '1px solid #e0e0e8',
                      borderBottom: '1px solid #e0e0e8',
                      padding: '24px 20px',
                      borderRadius: '8px',
                      minHeight: '160px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start'
                    }}>
                      <div style={{ color: '#1a56db', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>
                        +60%
                      </div>
                      <div style={{ color: '#1a1a2e', fontSize: '0.85rem', marginTop: '16px', lineHeight: 1.5 }}>
                        Giá nhà Mỹ tăng 2000–2005 (Case-Shiller)
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.65rem', fontStyle: 'italic', fontFamily: "'DM Mono', monospace", marginTop: 'auto', paddingTop: '12px' }}>
                        Nguồn: S&P/Case-Shiller
                      </div>
                    </div>

                    <div style={{
                      background: '#ffffff',
                      borderTop: '3px solid #1a56db',
                      borderLeft: '1px solid #e0e0e8',
                      borderRight: '1px solid #e0e0e8',
                      borderBottom: '1px solid #e0e0e8',
                      padding: '24px 20px',
                      borderRadius: '8px',
                      minHeight: '160px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start'
                    }}>
                      <div style={{ color: '#1a56db', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>
                        $639B
                      </div>
                      <div style={{ color: '#1a1a2e', fontSize: '0.85rem', marginTop: '16px', lineHeight: 1.5 }}>
                        Tài sản Lehman Brothers – vỡ 15/9/2008
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.65rem', fontStyle: 'italic', fontFamily: "'DM Mono', monospace", marginTop: 'auto', paddingTop: '12px' }}>
                        Nguồn: Lehman Filing, PACER
                      </div>
                    </div>
                  </div>

                  {/* Insight Box */}
                  <div style={{
                    background: '#eef2f7',
                    borderLeft: '3px solid #1a56db',
                    padding: '24px',
                    borderRadius: '8px',
                    marginTop: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <IdeaIcon color="#1a56db" />
                      <h4 style={{ color: '#0d0d0d', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Vai trò lãi suất FED</h4>
                    </div>
                    <p style={{ color: '#1a1a2e', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                      FED duy trì lãi suất 1% (2003–2004) tạo điều kiện khuếch đại — theo nhiều nhà phân tích, <strong style={{ color: '#0d0d0d' }}>đây không phải nguyên nhân gốc</strong>.
                      JPMorgan và Wells Fargo cùng chung môi trường lãi suất thấp nhưng lại không vỡ nợ.
                      Sự khác biệt thực chất nằm ở <strong style={{ color: '#c0392b' }} className="text-underline-hover">cấu trúc bảng cân đối tư nhân</strong>.
                    </p>
                  </div>

                </div>
              </FadeInView>
            </div>

            {/* Mắt Xích Tư Nhân */}
            <motion.h3 variants={fadeInUp} style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: '2rem', 
              color: '#0d0d0d', 
              marginBottom: '24px' 
            }}>
              Ba Mắt Xích Tư Nhân
            </motion.h3>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {chain.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="card-actor"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e0e0e8',
                    borderLeft: `3px solid ${c.color}`,
                    padding: '24px',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = c.color}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e8';
                    e.currentTarget.style.borderLeft = `3px solid ${c.color}`;
                  }}
                >
                  <c.Icon color={c.color} />
                  <div>
                    <h4 style={{ color: c.color, fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>
                      {c.title}
                    </h4>
                    <p style={{ color: '#374151', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Section Bridge */}
          <SectionBridge
            text="SVB 2023 hay khủng hoảng 2008 đều có chung một điểm gốc: sự bóp méo cấu trúc tư nhân."
            nextLabel="Phần Kết Luận"
          />

        </div>
      </section>
    </>
  );
}

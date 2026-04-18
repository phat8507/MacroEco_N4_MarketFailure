import { motion } from 'framer-motion';
import FadeInView from '../ui/FadeInView';
import SpeakerTag from '../ui/SpeakerTag';
import SectionLabel from '../ui/SectionLabel';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const timeline = [
  {
    year: '2021',
    event: 'BĐS tích lũy',
    detail: 'TD BĐS +26% · TP 2–3 năm cho dự án 5–10 năm',
    color: '#10b981',
  },
  {
    year: '2023',
    event: 'Lao động VN + SVB',
    detail: '280K mất việc · SVB 42 tỷ rút trong 8h',
    color: '#10b981',
  },
  {
    year: '2008',
    event: 'Lehman sụp',
    detail: '639 tỷ USD · cùng 3 cơ chế',
    color: '#10b981',
  },
];

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="section-base"
      style={{ background: '#fafaf9' }}
    >
      <div className="section-container relative z-10 max-w-3xl mx-auto text-center">

        {/* Speaker label */}
        <FadeInView>
          <SpeakerTag name="Kết Luận" time="9:00–10:00" color="#10b981" />
        </FadeInView>

        {/* ── Big headline ── */}
        <FadeInView>
          <h2
            className="mt-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            BĐS VN → Bình Dương<br />
            → SVB → Lehman.
          </h2>
          {/* Green italic line */}
          <h2
            className="mt-1"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              lineHeight: 1.15,
              color: '#10b981',
              letterSpacing: '-0.02em',
            }}
          >
            Cùng một câu chuyện.
          </h2>
        </FadeInView>

        {/* Subtitle */}
        <FadeInView>
          <p className="mt-6 text-ink-500 leading-relaxed max-w-xl mx-auto">
            Ba cơ chế tư nhân = thuốc nổ tích lũy nhiều năm. Chính sách = tia lửa. Chị Hoa không
            mất việc vì một thông tư sai — mà vì chuỗi cung ứng không có đệm an toàn, vì bảng
            cân đối đã chất đầy rủi ro từ 2021.
          </p>
        </FadeInView>

        {/* ── Timeline cards ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-12 text-left"
        >
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              <p
                className="font-mono font-semibold text-xs tracking-widest mb-2"
                style={{ color: item.color }}
              >
                {item.year}
              </p>
              <p className="font-bold text-ink-800 text-sm mb-1">{item.event}</p>
              <p className="text-ink-500 text-xs leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── HERO QUOTE — canh giữa như hình 2 ── */}
        <FadeInView>
          <div className="relative text-center py-8 px-4 md:px-12">
            {/* Decorative quotation mark — góc trái nhỏ gọn */}
            <div
              className="absolute top-4 left-2 md:left-6 select-none pointer-events-none leading-none"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '5rem',
                color: '#a5b4fc',
                opacity: 0.4,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              "
            </div>

            <blockquote>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.35rem, 2.8vw, 2rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                  color: '#111827',
                  textAlign: 'center',
                }}
              >
                Khủng hoảng không nổ từ thông cáo chính sách.
                Nó nổ từ bảng cân đối tư nhân đã chất đầy rủi ro.
              </p>
              <footer className="mt-5 text-ink-400 text-xs font-mono tracking-widest uppercase text-center">
                — Phe 1A · Nhóm 4 · L02
              </footer>
            </blockquote>
          </div>
        </FadeInView>

      </div>
    </section>
  );
}

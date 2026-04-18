import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import FadeInView from '../ui/FadeInView';
import SectionBridge from '../ui/SectionBridge';
import { staggerContainer, fadeInUp, tableRowVariant } from '../../animations/variants';

const levels = [
  {
    tier: 'Tầng 1',
    title: 'Nguyên nhân gốc',
    desc: 'Thị trường tư nhân: vòng xoáy đòn bẩy, lệch kỳ hạn, tâm lý bầy đàn',
    who: 'Doanh nghiệp / Ngân hàng tư nhân',
    color: '#f43f5e',
    highlight: true,
  },
  {
    tier: 'Tầng 2',
    title: 'Ngòi nổ',
    desc: 'Chính sách hoặc cú sốc ngoại sinh kích hoạt điểm bùng phát',
    who: 'Chính phủ / Cú sốc bên ngoài',
    color: '#f59e0b',
    highlight: false,
  },
  {
    tier: 'Tầng 3',
    title: 'Lan rộng',
    desc: 'Cơ chế thị trường khuếch đại: bán tháo, bank run, chuỗi phá sản',
    who: 'Thị trường tự vận hành',
    color: '#8b5cf6',
    highlight: false,
  },
  {
    tier: 'Tầng 4',
    title: 'Xử lý hậu quả',
    desc: 'Chính phủ / NHTW can thiệp để giảm thiểu tổn thất hệ thống',
    who: 'Nhà nước / Ngân hàng Trung ương',
    color: '#6366f1',
    highlight: false,
  },
];

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="section-base"
      style={{ background: '#f8fafc' }}
    >
      <div className="section-container">
        <FadeInView>
          <SectionLabel index={3} label="Khung Phân Tích" accent="#6366f1" />
          <SpeakerTag name="Trường Phát" time="0:30 – 1:00" color="#6366f1" />
        </FadeInView>

        {/* Editorial rule */}
        <div className="editorial-rule mt-8" />

        {/* EDITORIAL LAYOUT — No glass cards, full-bleed typography + grid báo chí */}
        <div className="editorial-grid">
          {/* Left: Big editorial text */}
          <div>
            <FadeInView>
              {/* Full-bleed headline */}
              <h2 className="full-bleed-text text-ink-900 mb-0">Khung</h2>
              <h2 className="full-bleed-text text-ink-900 mb-0">4 Tầng</h2>
              <h2 className="full-bleed-text gradient-text-indigo mb-6">Nhân Quả</h2>

              {/* Body text — no card, just typography */}
              <p className="text-ink-600 leading-relaxed text-lg max-w-lg">
                Phe 1B lập luận rằng tầng 2–4 mới là nguyên nhân.{' '}
                <strong className="text-ink-800">Chúng tôi hỏi:</strong>{' '}
                rủi ro ở <span className="text-coral-500 font-semibold">Tầng 1</span> đến từ đâu?
              </p>
            </FadeInView>

            {/* Luận điểm — editorial callout, no glass */}
            <FadeInView delay={0.15}>
              <div
                className="mt-8 border-l-4 pl-6 py-2"
                style={{ borderColor: '#6366f1' }}
              >
                <p className="text-indigo-700 text-sm font-bold uppercase tracking-widest mb-2">
                  💡 Luận điểm cốt lõi
                </p>
                <p className="text-ink-700 text-base leading-relaxed">
                  Không có thuốc nổ (Tầng 1) thì tia lửa (Tầng 2) không gây nổ.
                  <br />
                  <strong>Ba cơ chế tư nhân = thuốc nổ. Chính sách = tia lửa.</strong>
                </p>
              </div>
            </FadeInView>
          </div>

          {/* Right: Cards — glass-card nổi như cũ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3 mt-8 lg:mt-0"
          >
            {levels.map((lv, i) => (
              <motion.div
                key={i}
                variants={tableRowVariant}
                className={`glass-card p-5 transition-all ${lv.highlight ? 'shadow-md' : ''}`}
                style={{ borderLeft: `3px solid ${lv.color}` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-xs font-bold font-mono"
                        style={{ color: lv.color }}
                      >
                        {lv.tier}
                      </span>
                      <span className="text-ink-800 font-bold text-sm">{lv.title}</span>
                      {lv.highlight && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded"
                          style={{ background: '#fee2e2', color: '#991b1b' }}>
                          ← Trọng tâm
                        </span>
                      )}
                    </div>
                    <p className="text-ink-600 text-xs leading-relaxed">{lv.desc}</p>
                  </div>
                </div>
                <p className="text-ink-400 text-xs mt-2 font-mono">{lv.who}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Editorial full-bleed bridge — kiểu tạp chí */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-20 text-center"
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#1a1a2e',
              letterSpacing: '-0.02em',
            }}
          >
            Vòng xoáy đòn bẩy,<br />
            lệch kỳ hạn, bầy đàn.
          </h2>
          <p className="mt-6 text-ink-400 text-sm font-mono italic">
            "3 cơ chế = thuốc nổ. Chính sách = tia lửa."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

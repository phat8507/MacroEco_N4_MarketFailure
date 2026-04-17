import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import FadeInView from '../ui/FadeInView';
import { staggerContainer, fadeInUp, tableRowVariant } from '../../animations/variants';

const levels = [
  {
    tier: 'Tầng 1',
    title: 'Nguyên nhân gốc',
    desc: 'Thị trường tư nhân: vòng xoáy đòn bẩy, lệch kỳ hạn, tâm lý bầy đàn',
    who: 'Doanh nghiệp / Ngân hàng tư nhân',
    color: '#f43f5e',
    bg: 'bg-red-50 border-red-200',
    badge: 'bg-red-100 text-red-700',
    highlight: true,
  },
  {
    tier: 'Tầng 2',
    title: 'Ngòi nổ',
    desc: 'Chính sách hoặc cú sốc ngoại sinh kích hoạt điểm bùng phát',
    who: 'Chính phủ / Cú sốc bên ngoài',
    color: '#f59e0b',
    bg: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    highlight: false,
  },
  {
    tier: 'Tầng 3',
    title: 'Lan rộng',
    desc: 'Cơ chế thị trường khuếch đại: bán tháo, bank run, chuỗi phá sản',
    who: 'Thị trường tự vận hành',
    color: '#8b5cf6',
    bg: 'bg-violet-50 border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    highlight: false,
  },
  {
    tier: 'Tầng 4',
    title: 'Xử lý hậu quả',
    desc: 'Chính phủ / NHTW can thiệp để giảm thiểu tổn thất hệ thống',
    who: 'Nhà nước / Ngân hàng Trung ương',
    color: '#6366f1',
    bg: 'bg-indigo-50 border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
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

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <FadeInView>
              <h2 className="display-lg text-ink-900 mb-4">
                Khung 4 Tầng<br />
                <span className="gradient-text-indigo">Nhân Quả</span>
              </h2>
              <p className="text-ink-600 leading-relaxed">
                Phe 1B lập luận rằng tầng 2–4 mới là nguyên nhân.{' '}
                <strong className="text-ink-800">Chúng tôi hỏi:</strong>{' '}
                rủi ro ở <span className="text-coral-500 font-semibold">Tầng 1</span> đến từ đâu?
              </p>
            </FadeInView>

            <FadeInView delay={0.15} className="mt-6 p-5 glass-card-tinted">
              <p className="text-indigo-700 text-sm font-semibold">💡 Luận điểm cốt lõi của Phe 1A</p>
              <p className="text-ink-600 text-sm mt-2 leading-relaxed">
                Không có thuốc nổ (Tầng 1) thì tia lửa (Tầng 2) không gây nổ.
                Ba cơ chế tư nhân = thuốc nổ. Chính sách = tia lửa.
              </p>
            </FadeInView>
          </div>

          {/* Right: Table */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            {levels.map((lv, i) => (
              <motion.div
                key={i}
                variants={tableRowVariant}
                className={`p-5 rounded-2xl border-2 ${lv.bg} transition-all ${lv.highlight ? 'shadow-md' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${lv.badge}`}>
                        {lv.tier}
                      </span>
                      <span className="font-bold text-ink-800 text-sm">{lv.title}</span>
                      {lv.highlight && (
                        <span className="text-xs font-bold text-coral-600 bg-coral-100 px-2 py-0.5 rounded-md">
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
      </div>
    </section>
  );
}

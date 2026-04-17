import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import SVBCompareChart from '../charts/SVBCompareChart';
import SVBTimelineChart from '../charts/SVBTimelineChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function SVBSection() {
  return (
    <section
      id="svb"
      className="section-base"
      style={{ background: 'linear-gradient(135deg, #fff1f2 0%, #fef2f2 100%)' }}
    >
      <MorphingBlob color="#f43f5e" size={450} style={{ top: '-5%', right: '-8%', opacity: 0.1 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={10} label="Case SVB 2023" accent="#f43f5e" />
          <SpeakerTag name="Danh Phúc" time="6:30 – 8:00" color="#8b5cf6" />
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8"
        >
          <motion.h2 variants={fadeInUp} className="display-lg text-ink-900 mb-2">
            SVB 2023
          </motion.h2>
          <motion.h2 variants={fadeInUp} className="display-lg gradient-text-coral mb-6">
            Lệch Kỳ Hạn Số Hóa
          </motion.h2>

          {/* Context */}
          <motion.div variants={fadeInUp} className="glass-card p-5 mb-8 max-w-2xl">
            <p className="text-ink-700 leading-relaxed">
              Silicon Valley Bank — ngân hàng <strong>212 tỷ USD</strong> tài sản,
              lớn thứ 16 nước Mỹ — sụp đổ trong <strong className="text-coral-500">48 giờ</strong>.
              Không phải vì lãi suất FED tăng. Mà vì cấu trúc bảng cân đối tư nhân đã sai từ trước.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '$212B', label: 'Tổng tài sản SVB (2022)', accent: '#6366f1', source: 'OIG Fed' },
              { value: '94%', label: 'Tiền gửi không bảo hiểm FDIC', accent: '#f43f5e', source: 'OIG Fed' },
              { value: '$42B', label: 'Bị rút trong 8 giờ ngày 9/3/2023', accent: '#f43f5e', source: 'DFPI' },
              { value: '$15,1B', label: 'Lỗ HTM chưa thực hiện cuối 2022', accent: '#fb923c', source: 'OIG Fed' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <StatCard value={s.value} label={s.label} source={s.source} accent={s.accent} size="sm" />
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <FadeInView><SVBCompareChart /></FadeInView>
            <FadeInView delay={0.1}><SVBTimelineChart /></FadeInView>
          </div>

          {/* Key comparison */}
          <FadeInView>
            <div className="glass-card-tinted p-5">
              <p className="text-indigo-700 text-sm font-semibold mb-3">🔑 SVB vs JPMorgan — Cùng đợt tăng lãi suất FED</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-coral-50 rounded-xl border border-coral-200">
                  <p className="font-bold text-coral-700 mb-1">SVB — Sụp đổ</p>
                  <ul className="text-ink-600 text-xs space-y-1 list-disc list-inside">
                    <li>94% tiền gửi không bảo hiểm</li>
                    <li>Lỗ HTM vượt vốn CSH</li>
                    <li>Tập trung vào startup — dễ bầy đàn</li>
                  </ul>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <p className="font-bold text-emerald-700 mb-1">JPMorgan — Không vỡ</p>
                  <ul className="text-ink-600 text-xs space-y-1 list-disc list-inside">
                    <li>~40% tiền gửi không bảo hiểm</li>
                    <li>HTM ratio an toàn</li>
                    <li>Danh mục đa dạng, kỳ hạn cân bằng</li>
                  </ul>
                </div>
              </div>
              <p className="text-ink-500 text-xs mt-3 font-mono">→ Cùng chính sách FED, khác nhau vì cấu trúc bảng cân đối tư nhân</p>
            </div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

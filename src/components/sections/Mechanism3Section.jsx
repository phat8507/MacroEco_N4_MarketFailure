import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import ApartmentPriceChart from '../charts/ApartmentPriceChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function Mechanism3Section() {
  return (
    <section
      id="mechanism-3"
      className="section-base"
      style={{ background: 'linear-gradient(180deg, #f5f3ff 0%, #fafaf9 100%)' }}
    >
      <MorphingBlob color="#8b5cf6" size={420} style={{ top: '-8%', right: '-5%', opacity: 0.1 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={6} label="Cơ Chế 3" accent="#8b5cf6" />
          <SpeakerTag name="Thành Trung" time="2:30 – 3:30" color="#ec4899" />
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          {/* Left */}
          <div>
            <motion.h2 variants={fadeInUp} className="display-lg text-ink-900 mb-4">
              Tâm Lý<br />
              <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Bầy Đàn
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Mua/bán theo đám đông, không theo giá trị thực →{' '}
                <strong className="text-violet-600">tự khuếch đại</strong>.
              </p>
              <p>
                Trong thị trường số hóa, một tweet có thể kích hoạt bank run
                với tốc độ <strong className="text-coral-500">1,2 triệu USD/giây</strong>.
              </p>
            </motion.div>

            {/* Two examples */}
            <motion.div variants={fadeInUp} className="mt-6 space-y-3">
              <div className="p-4 rounded-xl bg-violet-50 border border-violet-200">
                <p className="text-xs font-bold text-violet-700 mb-1">🏠 Ví dụ VN — Căn hộ Hà Nội 2024</p>
                <p className="text-ink-600 text-xs leading-relaxed">
                  Giá tăng 35–40% dù thị trường đóng băng thanh khoản.
                  Khan cung pháp lý + tâm lý bầy đàn = giá tăng ảo.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-coral-50 border border-coral-200">
                <p className="text-xs font-bold text-coral-700 mb-1">🏦 Ví dụ QT — SVB Bank Run 2023</p>
                <p className="text-ink-600 text-xs leading-relaxed">
                  1 tweet → 42 tỷ USD rút trong 8 giờ (DFPI).
                  Tốc độ: 1,2 triệu USD/giây. Mạng xã hội số hóa bầy đàn.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-5 p-4 glass-card-tinted">
              <p className="text-indigo-700 text-sm font-semibold mb-1">🔑 Kết luận — Thành Trung</p>
              <p className="text-ink-600 text-sm">
                3 cơ chế = thuốc nổ. Chính sách = tia lửa.
                Không có thuốc nổ, tia lửa không gây nổ.
              </p>
            </motion.div>
          </div>

          {/* Right: Chart */}
          <FadeInView delay={0.1}>
            <ApartmentPriceChart />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <StatCard value="+35–40%" label="Giá căn hộ HN tăng năm 2024 dù thị trường đóng băng" source="CBRE Q4/2024" accent="#8b5cf6" size="sm" />
              <StatCard value="$42B" label="Rút khỏi SVB trong 8 giờ (9/3/2023)" source="DFPI 2023" accent="#f43f5e" size="sm" />
            </div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

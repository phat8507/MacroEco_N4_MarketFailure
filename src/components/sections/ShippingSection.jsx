import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import ShippingCostChart from '../charts/ShippingCostChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import bienDoImg from '../../assets/bien-do.jpg';

export default function ShippingSection() {
  return (
    <section
      id="shipping"
      className="section-base"
      style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)' }}
    >
      <MorphingBlob color="#06b6d4" size={400} style={{ top: '-10%', left: '-8%', opacity: 0.12 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={9} label="Ngoại Tác Tiêu Cực" accent="#06b6d4" />
          <SpeakerTag name="Xuân Phúc" time="6:00 – 6:30" color="#3b82f6" />
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
              Biến Động<br />
              <span style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Biển Đỏ Q1/2024
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Xung đột tại Biển Đỏ → Lưu lượng qua kênh Suez giảm <strong className="text-cyan-600">50%</strong>.
                Hàng hóa phải đi vòng Mũi Hảo Vọng (Nam Phi) — thêm <strong className="text-coral-500">10–14 ngày</strong>.
              </p>
              <p>
                Tập đoàn đa quốc gia tối ưu chi phí của họ —
                <strong className="text-ink-800"> đẩy chi phí sang toàn chuỗi cung ứng</strong>.
              </p>
            </motion.div>

            {/* Route comparison */}
            <motion.div variants={fadeInUp} className="mt-6 space-y-2">
              {[
                { route: 'Tuyến Suez (cũ)', time: '~30 ngày VN → EU', color: 'bg-emerald-50 border-emerald-200', icon: '✅' },
                { route: 'Tuyến Mũi Hảo Vọng (mới)', time: '~40–44 ngày VN → EU', color: 'bg-coral-50 border-coral-200', icon: '⚠️' },
              ].map((r, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${r.color}`}>
                  <span>{r.icon}</span>
                  <div>
                    <p className="font-semibold text-ink-700 text-sm">{r.route}</p>
                    <p className="text-ink-500 text-xs font-mono">{r.time}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-5 grid grid-cols-2 gap-3">
              <StatCard value="−50%" label="Lưu lượng Suez / Bab el-Mandeb Q1/2024" source="World Bank / UNCTAD" accent="#06b6d4" size="sm" />
              <StatCard value="+10–14" suffix=" ngày" label="Thời gian vận chuyển tăng thêm VN → EU" source="World Bank Q1/2024" accent="#f43f5e" size="sm" />
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <FadeInView>
              <img
                src={bienDoImg}
                alt="Bản đồ tuyến đường Suez vs Mũi Hảo Vọng"
                className="w-full h-[200px] object-cover rounded-2xl shadow-sm"
              />
            </FadeInView>
            <FadeInView delay={0.1}>
              <ShippingCostChart />
            </FadeInView>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

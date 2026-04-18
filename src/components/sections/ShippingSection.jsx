import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import ShippingCostChart from '../charts/ShippingCostChart';
import RouteMapSVG from '../ui/RouteMapSVG';
import MorphingBlob from '../ui/MorphingBlob';
import SectionBridge from '../ui/SectionBridge';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function ShippingSection() {
  return (
    <section
      id="shipping"
      className="section-base"
      style={{ background: '#f5f5f0' }}
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
            <motion.h2 variants={fadeInUp} className="display-lg mb-4" style={{ color: '#0d0d0d' }}>
              Biến Động<br />
              <span style={{ color: '#c0392b' }}>
                Biển Đỏ Q1/2024
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 leading-relaxed" style={{ color: '#1a1a2e' }}>
              <p>
                Xung đột tại Biển Đỏ → Lưu lượng qua kênh Suez giảm <strong style={{ color: '#1a56db' }}>50%</strong>.
                Hàng hóa phải đi vòng Mũi Hảo Vọng (Nam Phi) — thêm <strong style={{ color: '#c0392b' }}>10–14 ngày</strong>.
              </p>
              <p>
                Tập đoàn đa quốc gia tối ưu chi phí của họ —
                <strong style={{ color: '#0d0d0d' }}> đẩy chi phí sang toàn chuỗi cung ứng</strong>.
              </p>
            </motion.div>

            {/* Route comparison */}
            <motion.div variants={fadeInUp} className="mt-6 space-y-2">
              {[
                { route: 'Tuyến Suez (cũ)', time: '~30 ngày VN → EU', color: '#1a56db', icon: '✅' },
                { route: 'Tuyến Mũi Hảo Vọng (mới)', time: '~40–44 ngày VN → EU', color: '#c0392b', icon: '⚠️' },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#ffffff', border: '1px solid #e0e0e8', borderLeft: `3px solid ${r.color}` }}>
                  <span>{r.icon}</span>
                  <div>
                    <p style={{ color: '#0d0d0d', fontWeight: 600, fontSize: '0.875rem' }}>{r.route}</p>
                    <p style={{ color: '#6b7280', fontSize: '0.75rem', fontFamily: 'monospace' }}>{r.time}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-5 grid grid-cols-2 gap-3">
              <StatCard value="−50%" label="Lưu lượng Suez / Bab el-Mandeb Q1/2024" source="World Bank / UNCTAD" accent="#1a56db" size="sm" />
              <StatCard value="+10–14" suffix=" ngày" label="Thời gian vận chuyển tăng thêm VN → EU" source="World Bank Q1/2024" accent="#c0392b" size="sm" />
            </motion.div>
          </div>

          {/* Right — RouteMapSVG (thay ảnh bien-do.jpg) + chart */}
          <div className="space-y-4">
            <FadeInView>
              <RouteMapSVG />
            </FadeInView>
            <FadeInView delay={0.1}>
              <ShippingCostChart />
            </FadeInView>
          </div>
        </motion.div>

        {/* Section bridge → SVB */}
        <SectionBridge
          text="Ngoại tác này không chỉ ảnh hưởng chuỗi cung ứng. Cùng lúc, hệ thống ngân hàng tại Silicon Valley cũng bắt đầu rạn nứt."
          nextLabel="SVB 2023 — Lệch Kỳ Hạn Số Hóa"
          accent="#f43f5e"
        />
      </div>
    </section>
  );
}

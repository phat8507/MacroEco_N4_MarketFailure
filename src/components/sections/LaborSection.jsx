import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import FadeInView from '../ui/FadeInView';
import ExportLineChart from '../charts/ExportLineChart';
import LaborLossChart from '../charts/LaborLossChart';
import MorphingBlob from '../ui/MorphingBlob';
import SectionBridge from '../ui/SectionBridge';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const statsData = [
  { value: '280.000', label: 'người mất việc hoàn toàn 5T/2023', accent: '#f43f5e', source: 'Bộ LĐTBXH' },
  { value: '510.000', label: 'lao động bị ảnh hưởng tổng cộng', accent: '#fb923c', source: 'Bộ LĐTBXH' },
  { value: '355,5 tỷ', label: 'USD xuất khẩu 2023 — giảm lần đầu', accent: '#6366f1', source: 'GSO' },
  { value: '−4,4%', label: 'tăng trưởng xuất khẩu 2023 so 2022', accent: '#f43f5e', source: 'GSO 2023' },
];

export default function LaborSection() {
  return (
    <section
      id="labor-2023"
      className="section-base"
      style={{ background: '#f8fafc' }}
    >
      <MorphingBlob color="#f43f5e" size={360} style={{ top: '-8%', right: '-5%', opacity: 0.07 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={8} label="Cú Sốc Lao Động & Xuất Khẩu" accent="#f43f5e" />
          <SpeakerTag name="Minh Quân" time="5:00 – 6:00" color="#10b981" />
        </FadeInView>

        {/* Editorial rule */}
        <div className="editorial-rule mt-8" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-4"
        >
          {/* Full-bleed editorial headline */}
          <div className="mb-8">
            <motion.h2 variants={fadeInUp} className="full-bleed-text text-ink-900">
              Khi Chuỗi
            </motion.h2>
            <motion.h2 variants={fadeInUp} className="full-bleed-text text-ink-900">
              Cung Ứng
            </motion.h2>
            <motion.h2 variants={fadeInUp} className="full-bleed-text gradient-text-coral">
              Không Có Đệm
            </motion.h2>
          </div>

          {/* Pull quote — editorial style, NO glass-card */}
          <motion.div variants={fadeInUp} className="mb-10">
            <p className="text-ink-500 font-mono text-xs tracking-widest uppercase mb-3">
              — Từ nhà máy Bình Dương
            </p>
            <blockquote
              className="border-l-4 border-coral-400 pl-6 text-ink-700 text-xl leading-relaxed font-medium italic max-w-2xl"
            >
              "Tạm dừng đơn hàng để xử lý tồn kho." Chị Hoa và 280.000 người khác
              nhận thông báo cắt giảm — không phải vì lỗi của họ.
            </blockquote>
            <p className="text-ink-400 text-sm mt-3 pl-6">
              Không có van bản nội địa nào can thiệp được — ngoại tác tiêu cực.
            </p>
          </motion.div>

          {/* Stats — editorial horizontal rule style */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-10 border-t border-ink-200">
            {statsData.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="py-6 px-4 border-r border-ink-100 last:border-r-0"
              >
                <p className="font-mono font-bold text-2xl md:text-3xl mb-1" style={{ color: s.accent }}>
                  {s.value}
                </p>
                <p className="text-ink-500 text-xs leading-snug mb-1">{s.label}</p>
                <p className="text-ink-300 text-xs font-mono">{s.source}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <FadeInView><ExportLineChart /></FadeInView>
            <FadeInView delay={0.1}><LaborLossChart /></FadeInView>
          </div>

          {/* FDI note — editorial, no glass */}
          <FadeInView>
            <div
              className="border-t border-b border-ink-100 py-5 mt-4"
            >
              <p className="text-ink-400 font-mono text-xs uppercase tracking-widest mb-3">📊 Cơ cấu xuất khẩu 2024</p>
              <div className="flex gap-12 text-sm">
                <div>
                  <span className="font-mono text-3xl font-bold" style={{ color: '#f43f5e' }}>71,7%</span>
                  <p className="text-ink-500 text-xs mt-0.5">Doanh nghiệp FDI xuất khẩu</p>
                </div>
                <div>
                  <span className="font-mono text-3xl font-bold" style={{ color: '#6366f1' }}>170%</span>
                  <p className="text-ink-500 text-xs mt-0.5">Tổng XNK / GDP Việt Nam 2024</p>
                </div>
              </div>
              <p className="text-ink-300 text-xs mt-3 font-mono">
                Nguồn: Bộ KH&amp;ĐT (MPI) 2024 / Tổng cục Hải quan
              </p>
            </div>
          </FadeInView>
        </motion.div>

        {/* Section bridge → Shipping */}
        <SectionBridge
          text="Mất việc trong nước chỉ là một mảnh của bức tranh. Cùng lúc, Biển Đỏ bùng cháy — toàn chuỗi cung ứng bị gián đoạn."
          nextLabel="Biến Động Biển Đỏ Q1/2024"
          accent="#06b6d4"
        />
      </div>
    </section>
  );
}

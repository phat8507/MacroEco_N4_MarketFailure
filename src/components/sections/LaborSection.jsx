import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import ExportLineChart from '../charts/ExportLineChart';
import LaborLossChart from '../charts/LaborLossChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8"
        >
          <motion.h2 variants={fadeInUp} className="display-lg text-ink-900 mb-2">
            Khi Chuỗi Cung Ứng
          </motion.h2>
          <motion.h2 variants={fadeInUp} className="display-lg gradient-text-coral mb-6">
            Không Có Đệm
          </motion.h2>

          <motion.div variants={fadeInUp} className="glass-card p-5 mb-8 max-w-2xl">
            <p className="text-ink-600 leading-relaxed">
              <strong className="text-ink-800">Email từ nhà máy Bình Dương:</strong>{' '}
              "Tạm dừng đơn hàng để xử lý tồn kho." Chị Hoa và 280.000 người
              khác nhận thông báo cắt giảm — không phải vì lỗi của họ.
            </p>
            <p className="text-ink-500 text-sm mt-3">
              Không có van bản nội địa nào can thiệp được — ngoại tác tiêu cực.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '280.000', label: 'người mất việc hoàn toàn 5T/2023', accent: '#f43f5e', source: 'Bộ LĐTBXH' },
              { value: '510.000', label: 'lao động bị ảnh hưởng tổng cộng', accent: '#fb923c', source: 'Bộ LĐTBXH' },
              { value: '355,5', suffix: ' tỷ USD', label: 'xuất khẩu 2023 — giảm lần đầu', accent: '#6366f1', source: 'GSO' },
              { value: '−4,4%', label: 'tăng trưởng xuất khẩu 2023 so 2022', accent: '#f43f5e', source: 'GSO 2023' },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <StatCard value={s.value} suffix={s.suffix} label={s.label} source={s.source} accent={s.accent} size="sm" />
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <FadeInView><ExportLineChart /></FadeInView>
            <FadeInView delay={0.1}><LaborLossChart /></FadeInView>
          </div>

          {/* FDI note */}
          <FadeInView>
            <div className="glass-card-tinted p-5">
              <p className="text-indigo-700 text-sm font-semibold mb-2">📊 Cơ cấu xuất khẩu 2024</p>
              <div className="flex gap-8 text-sm">
                <div>
                  <span className="font-mono text-2xl font-bold text-coral-500">71,7%</span>
                  <p className="text-ink-500 text-xs mt-0.5">Doanh nghiệp FDI xuất khẩu</p>
                </div>
                <div>
                  <span className="font-mono text-2xl font-bold text-indigo-500">170%</span>
                  <p className="text-ink-500 text-xs mt-0.5">Tổng XNK / GDP Việt Nam 2024</p>
                </div>
              </div>
              <p className="text-ink-500 text-xs mt-3">
                Nguồn: Bộ KH&amp;ĐT (MPI) 2024 / Tổng cục Hải quan
              </p>
            </div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

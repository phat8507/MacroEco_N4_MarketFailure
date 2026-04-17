import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import MaturityGapChart from '../charts/MaturityGapChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function Mechanism2Section() {
  return (
    <section
      id="mechanism-2"
      className="section-base"
      style={{ background: 'linear-gradient(180deg, #fff1f2 0%, #fafaf9 100%)' }}
    >
      <MorphingBlob color="#f43f5e" size={380} style={{ bottom: '-10%', right: '-8%', opacity: 0.08 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={5} label="Cơ Chế 2" accent="#f43f5e" />
          <SpeakerTag name="Minh Nhật" time="1:45 – 2:30" color="#f43f5e" />
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
              Lệch<br />
              <span className="gradient-text-coral">Kỳ Hạn</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Doanh nghiệp BDS vay <strong className="text-ink-800">ngắn hạn</strong> (trái phiếu 2–3 năm)
                để tài trợ tài sản <strong className="text-coral-500">dài hạn</strong> (dự án 5–10 năm).
              </p>
              <p>
                Khi vốn ngắn không đảo được — <strong className="text-coral-500">sụp đổ ngay lập tức</strong>.
              </p>
            </motion.div>

            {/* Example */}
            <motion.div variants={fadeInUp} className="mt-6 p-5 glass-card">
              <p className="text-sm font-bold text-ink-700 mb-3">📋 Ví dụ thực tế — BDS Việt Nam 2021</p>
              <p className="text-ink-600 text-xs leading-relaxed">
                Doanh nghiệp BDS phát hành trái phiếu 5.000 tỷ, lãi suất 12%/năm, kỳ hạn <strong>2–3 năm</strong>,
                cho dự án cần <strong>5–10 năm</strong> thu hồi vốn. Khi NĐ65 kiểm soát phát hành trái phiếu —
                đảo nợ không được, vỡ ngay.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-5 grid grid-cols-2 gap-3">
              <StatCard value="90+" label="Tổ chức chậm nghĩa vụ trái phiếu" source="VNDIRECT Q4/2024" accent="#f43f5e" size="sm" />
              <StatCard value="190.000" suffix=" tỷ" label="Dư nợ chậm nghĩa vụ" source="VNDIRECT 2024" accent="#f43f5e" size="sm" />
            </motion.div>
          </div>

          {/* Right: Chart */}
          <FadeInView delay={0.1}>
            <MaturityGapChart />
            <div className="mt-4 glass-card-tinted p-4">
              <p className="text-indigo-700 text-xs font-semibold">💡 So sánh quy mô</p>
              <p className="text-ink-600 text-xs mt-1">
                190.000 tỷ đồng ≈ 7,5 tỷ USD = đủ xây ~760 trường học tiêu chuẩn quốc tế.
                Đây không phải con số xuất hiện trong 1 tháng — tích lũy từ 2021.
              </p>
            </div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

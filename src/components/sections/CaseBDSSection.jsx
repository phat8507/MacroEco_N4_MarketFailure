import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import BondPieChart from '../charts/BondPieChart';
import ApartmentPriceChart from '../charts/ApartmentPriceChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function CaseBDSSection() {
  const mechanisms = [
    { icon: '🌀', label: 'Vòng xoáy đòn bẩy', detail: 'Tín dụng BDS +26%/năm (2019–2021)', color: 'bg-amber-50 border-amber-200 text-amber-700' },
    { icon: '⏱', label: 'Lệch kỳ hạn', detail: 'TP 2–3 năm / Dự án 5–10 năm', color: 'bg-coral-50 border-coral-300 text-coral-700' },
    { icon: '🐑', label: 'Tâm lý bầy đàn', detail: 'Rút đồng loạt khi tin xấu lan ra', color: 'bg-violet-50 border-violet-200 text-violet-700' },
  ];

  return (
    <section
      id="case-bds"
      className="section-base"
      style={{ background: 'linear-gradient(180deg, #fafaf9, #ede9fe 40%, #fafaf9)' }}
    >
      <MorphingBlob color="#10b981" size={350} style={{ bottom: 0, left: '-5%', opacity: 0.08 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={7} label="Case BDS Việt Nam" accent="#10b981" />
          <SpeakerTag name="Văn Ngọc" time="3:30 – 5:00" color="#f59e0b" />
        </FadeInView>

        <FadeInView>
          <h2 className="display-lg text-ink-900 mt-8 mb-2">
            BDS Việt Nam —
          </h2>
          <h2 className="display-lg gradient-text-indigo mb-6">
            3 Cơ Chế Cùng Hoạt Động
          </h2>
        </FadeInView>

        <FadeInView>
          <p className="text-ink-600 leading-relaxed max-w-2xl mb-8">
            <strong className="text-ink-800">2021:</strong> Doanh nghiệp BDS phát hành 5.000 tỷ trái phiếu 12%/năm
            cho dự án chưa có pháp lý. Không phải 1 vụ bất thường —
            đây là mô hình toàn ngành.
          </p>
        </FadeInView>

        {/* 3 Mechanisms summary */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {mechanisms.map((m, i) => (
            <motion.div key={i} variants={fadeInUp} className={`p-5 rounded-2xl border-2 ${m.color}`}>
              <span className="text-2xl mb-3 block">{m.icon}</span>
              <p className="font-bold text-sm mb-1">{m.label}</p>
              <p className="text-xs opacity-80 leading-relaxed">{m.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FadeInView><BondPieChart /></FadeInView>
          <FadeInView delay={0.1}><ApartmentPriceChart /></FadeInView>
        </div>

        {/* Key conclusion */}
        <FadeInView>
          <div className="glass-card p-6 border-l-4 border-indigo-500">
            <p className="text-ink-700 font-medium leading-relaxed">
              <strong className="text-indigo-600">Kết luận:</strong> 190.000 tỷ đồng không thể xuất hiện
              trong 1 tháng. Đây là kết quả của 3 cơ chế tư nhân tích lũy từ 2021 —
              chính sách chỉ là ngòi nổ.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

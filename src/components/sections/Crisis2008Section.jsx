import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import USSHomeChart from '../charts/USSHomeChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function Crisis2008Section() {
  const chain = [
    { actor: 'Môi giới bất động sản', role: '"Liar Loans" — cho vay không kiểm tra thu nhập', icon: '🤝', color: 'bg-amber-50 border-amber-200' },
    { actor: 'Goldman Sachs / Lehman Brothers', role: 'Đóng gói CDO / MBS — chuyển rủi ro cho nhà đầu tư toàn cầu', icon: '🏦', color: 'bg-indigo-50 border-indigo-200' },
    { actor: "Moody's và S&P", role: 'Xếp hạng AAA giả tạo cho tài sản độc hại', icon: '⭐', color: 'bg-coral-50 border-coral-200' },
  ];

  return (
    <section
      id="crisis-2008"
      className="section-base"
      style={{ background: '#fafaf9' }}
    >
      <MorphingBlob color="#6366f1" size={420} style={{ bottom: '-8%', right: '-5%', opacity: 0.08 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={11} label="Case Toàn Cầu" accent="#6366f1" />
          <SpeakerTag name="Hoàng Việt" time="8:00 – 9:00" color="#06b6d4" />
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8"
        >
          <motion.h2 variants={fadeInUp} className="display-lg text-ink-900 mb-2">
            Khủng hoảng 2008
          </motion.h2>
          <motion.h2 variants={fadeInUp} className="display-lg gradient-text-indigo mb-6">
            Vòng Xoáy Toàn Cầu
          </motion.h2>

          {/* Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <FadeInView><USSHomeChart /></FadeInView>

            <FadeInView delay={0.1}>
              <div className="space-y-4">
                {/* Key stats */}
                <div className="grid grid-cols-2 gap-3">
                  <StatCard value="+60%" label="Giá nhà Mỹ tăng 2000–2005 (Case-Shiller)" source="S&P/Case-Shiller" accent="#f59e0b" size="sm" />
                  <StatCard value="$639B" label="Tài sản Lehman Brothers — vỡ 15/9/2008" source="Lehman Filing, PACER" accent="#f43f5e" size="sm" />
                </div>
                {/* FED rate note */}
                <div className="glass-card-tinted p-4">
                  <p className="text-indigo-700 text-sm font-semibold mb-2">💡 Vai trò lãi suất FED</p>
                  <p className="text-ink-600 text-xs leading-relaxed">
                    FED duy trì lãi suất 1% (2003–2004) tạo điều kiện khuếch đại —
                    <strong> nhưng không phải nguyên nhân gốc</strong>.
                    JPMorgan và Wells Fargo cùng chung môi trường lãi suất thấp mà không sụp đổ.
                    Sự khác biệt nằm ở <strong className="text-coral-500">cấu trúc bảng cân đối tư nhân</strong>.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* 3-actor chain */}
          <FadeInView>
            <h3 className="text-ink-800 font-bold text-lg mb-4">Ba Mắt Xích Tư Nhân</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {chain.map((c, i) => (
                <motion.div key={i} variants={fadeInUp} className={`p-5 rounded-2xl border-2 ${c.color}`}>
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <p className="font-bold text-ink-800 text-sm mb-1">{c.actor}</p>
                  <p className="text-ink-600 text-xs leading-relaxed">{c.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

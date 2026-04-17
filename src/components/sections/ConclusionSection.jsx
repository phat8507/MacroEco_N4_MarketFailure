import { motion } from 'framer-motion';
import FadeInView from '../ui/FadeInView';
import QuoteBlock from '../ui/QuoteBlock';
import SpeakerTag from '../ui/SpeakerTag';
import SectionLabel from '../ui/SectionLabel';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const timeline = [
  {
    year: '2021',
    event: 'BDS Việt Nam tích lũy',
    detail: 'Tín dụng BDS +26%/năm · Trái phiếu 5.000 tỷ/DN · Dự án chưa có pháp lý',
    color: '#f59e0b',
    icon: '🌀',
  },
  {
    year: '2023',
    event: 'Cú sốc kép',
    detail: '280.000 lao động VN mất việc · SVB sụp đổ 48h · 42 tỷ USD bank run',
    color: '#f43f5e',
    icon: '💥',
  },
  {
    year: '2008',
    event: 'Khủng hoảng toàn cầu',
    detail: 'Lehman Brothers $639B · Giá nhà Mỹ giảm 40% · CDO/MBS độc hại',
    color: '#6366f1',
    icon: '🌍',
  },
];

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="section-base"
      style={{ background: 'linear-gradient(180deg, #ede9fe 0%, #fce7f3 100%)' }}
    >
      <MorphingBlob color="#6366f1" size={500} style={{ top: '-10%', left: '-10%', opacity: 0.12 }} />
      <MorphingBlob color="#ec4899" size={350} style={{ bottom: '-5%', right: '-5%', opacity: 0.1, animationDelay: '4s' }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={12} label="Kết Luận" accent="#6366f1" />
          <SpeakerTag name="Hoàng Việt" time="9:00 – 10:00" color="#06b6d4" />
        </FadeInView>

        <FadeInView>
          <h2 className="display-lg text-ink-900 mt-8 mb-2">Tất Cả Cùng</h2>
          <h2 className="display-lg gradient-text-indigo mb-8">Một Câu Chuyện</h2>
        </FadeInView>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mb-12"
        >
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-400 via-coral-400 to-indigo-500 hidden md:block" aria-hidden="true" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-5 items-start"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md z-10"
                  style={{ background: `${item.color}20`, border: `2px solid ${item.color}` }}
                >
                  {item.icon}
                </div>
                <div className="glass-card flex-1 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-bold text-lg" style={{ color: item.color }}>{item.year}</span>
                    <span className="font-bold text-ink-800">{item.event}</span>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">{item.detail}</p>
                  <p className="text-ink-400 text-xs mt-2 font-mono">→ Cùng 3 cơ chế tư nhân</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Return to Chi Hoa */}
        <FadeInView>
          <div className="glass-card p-8 mb-8 border-l-4 border-coral-400">
            <p className="text-ink-700 leading-relaxed">
              <strong className="text-coral-500">Quay lại chị Hoa:</strong> Chị không mất việc vì thông tư sai.
              Chị mất việc vì chuỗi cung ứng toàn cầu không có đệm an toàn —
              được tích lũy qua nhiều năm bởi <strong className="text-ink-800">quyết định tư nhân chạy theo lợi nhuận</strong>.
            </p>
          </div>
        </FadeInView>

        {/* Final punchline */}
        <FadeInView>
          <div className="text-center max-w-3xl mx-auto">
            <QuoteBlock accent="#6366f1" className="text-left">
              Khủng hoảng không nổ từ thông cáo chính sách. Nó nổ từ bảng cân đối tư nhân đã chất đầy rủi ro.
            </QuoteBlock>
            <p className="text-ink-400 text-sm mt-4 font-mono">— Luận điểm cốt lõi Phe 1A · Nhóm 4 · Lớp L02</p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

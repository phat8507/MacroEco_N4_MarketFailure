import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import HeroStat from '../ui/HeroStat';
import QuoteBlock from '../ui/QuoteBlock';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import FadeInView from '../ui/FadeInView';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import nhaMayImg from '../../assets/nha-may.jpg';

export default function HookSection() {
  return (
    <section
      id="hook"
      className="section-base"
      style={{ background: '#fafaf9' }}
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <MorphingBlob color="#f43f5e" size={350} style={{ top: '-5%', right: '-5%', opacity: 0.08 }} />

      <div className="section-container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Story */}
          <div>
            <motion.div variants={fadeInUp}>
              <SectionLabel index={2} label="Câu Chuyện Mở Đầu" accent="#f43f5e" />
              <SpeakerTag name="Trường Phát" time="0:00 – 0:30" color="#6366f1" />
            </motion.div>

            <motion.h2 variants={fadeInUp} className="display-lg text-ink-900 mt-6 mb-4">
              Câu Chuyện<br />
              <span className="gradient-text-coral">Chị Hoa</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                <strong className="text-ink-800">Tháng 4/2023.</strong> Chị Hoa, công nhân may mặc
                tại Bình Dương, nhận tờ thông báo cắt giảm. Không phải vì chị làm sai.
                Không phải vì nhà máy thua lỗ từ hôm qua.
              </p>
              <p>
                Mà vì cả một chuỗi cung ứng toàn cầu đã{' '}
                <strong className="text-coral-500">không có đệm an toàn</strong> — tích lũy
                từ nhiều năm trước.
              </p>
              <p className="font-semibold text-ink-700">
                Đây là lỗi của ai?
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <QuoteBlock accent="#f43f5e">
                280.000 người mất việc trong 5 tháng đầu 2023 — tương đương toàn bộ dân số TP. Vĩnh Long.
              </QuoteBlock>
            </motion.div>
          </div>

          {/* Right: Big number + Image */}
          <div className="space-y-6">
            <FadeInView>
              <div className="glass-card p-8 text-center">
                <HeroStat
                  value={280000}
                  label="người mất việc trong 5 tháng đầu 2023"
                  sublabel="Nguồn: Bộ LĐTBXH 2023"
                  accent="#f43f5e"
                />
                <div className="mt-4 pt-4 border-t border-ink-100">
                  <p className="text-ink-500 text-sm">
                    + 230.000 người bị giảm giờ làm = <strong className="text-coral-500">510.000</strong> lao động bị ảnh hưởng
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.15}>
              <img
                src={nhaMayImg}
                alt="Nhà máy may mặc Bình Dương"
                className="w-full h-[220px] object-cover rounded-2xl shadow-sm"
              />
            </FadeInView>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

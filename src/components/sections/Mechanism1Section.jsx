import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import SpeakerTag from '../ui/SpeakerTag';
import StatCard from '../ui/StatCard';
import FadeInView from '../ui/FadeInView';
import CreditGrowthChart from '../charts/CreditGrowthChart';
import MorphingBlob from '../ui/MorphingBlob';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function Mechanism1Section() {
  return (
    <section
      id="mechanism-1"
      className="section-base"
      style={{ background: 'linear-gradient(180deg, #fffbeb 0%, #fafaf9 100%)' }}
    >
      <MorphingBlob color="#f59e0b" size={400} style={{ top: 0, left: '-10%', opacity: 0.1 }} />

      <div className="section-container relative z-10">
        <FadeInView>
          <SectionLabel index={4} label="Cơ Chế 1" accent="#f59e0b" />
          <SpeakerTag name="Minh Nhật" time="1:00 – 1:45" color="#f43f5e" />
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
              Vòng Xoáy<br />
              <span className="gradient-text-coral">Đòn Bẩy</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                Giá tài sản tăng → Giá trị thế chấp phình → Vay thêm → Giá tăng tiếp → Vòng lặp.
              </p>
              <p>
                Khi đảo chiều, <strong className="text-coral-500">cùng cơ chế chạy ngược lại</strong> —
                nhanh và tàn khốc hơn.
              </p>
            </motion.div>

            {/* Flow diagram */}
            <motion.div variants={fadeInUp} className="mt-6 space-y-2">
              {[
                { step: '①', text: 'Giá BDS tăng', icon: '📈', color: 'bg-amber-50 border-amber-200' },
                { step: '②', text: 'Tài sản thế chấp phình to', icon: '🏠', color: 'bg-amber-50 border-amber-200' },
                { step: '③', text: 'Ngân hàng cho vay thêm', icon: '🏦', color: 'bg-indigo-50 border-indigo-200' },
                { step: '④', text: 'Tiền đổ vào BDS → Giá tiếp tục tăng', icon: '🔄', color: 'bg-coral-50 border-coral-300' },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${item.color}`}>
                  <span className="font-mono text-xs font-bold text-ink-400 w-5">{item.step}</span>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-ink-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-6">
              <StatCard
                value="+26%"
                label="Tăng trưởng tín dụng BDS/năm (2019–2021)"
                source="NHNN/SBV"
                accent="#f59e0b"
              />
            </motion.div>
          </div>

          {/* Right: Chart */}
          <FadeInView delay={0.1}>
            <CreditGrowthChart />
            <div className="mt-4 glass-card-tinted p-4">
              <p className="text-indigo-700 text-xs font-semibold">💡 Hệ quả sau 3 năm</p>
              <p className="text-ink-600 text-xs mt-1">
                Tín dụng BDS tăng trưởng 26%/năm liên tiếp 3 năm → 2018 = X thì 2021 = X × 2,0.
                Sau 3 năm, tín dụng BDS đã nhân đôi.
              </p>
            </div>
          </FadeInView>
        </motion.div>
      </div>
    </section>
  );
}

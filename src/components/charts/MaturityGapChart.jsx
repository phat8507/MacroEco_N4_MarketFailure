import { motion } from 'framer-motion';
import { maturityGapData } from '../../data/chartData';
import SourceTag from '../ui/SourceTag';

export default function MaturityGapChart() {
  const maxYears = 10;
  const bondWidth = (maturityGapData.bond.years / maxYears) * 100;
  const projectWidth = (maturityGapData.project.years / maxYears) * 100;

  return (
    <div className="chart-wrapper">
      <h3 className="text-ink-800 font-semibold text-sm mb-1">
        Lệch Kỳ Hạn — Nguy Cơ Tiềm Ẩn
      </h3>
      <p className="text-ink-500 text-xs mb-6">
        Vay ngắn hạn tài trợ tài sản dài hạn — khi vốn ngắn không đảo được, sụp ngay
      </p>

      <div className="space-y-5">
        {/* Trái phiếu DN */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-ink-700">{maturityGapData.bond.label}</span>
            <span className="font-mono text-sm font-bold" style={{ color: maturityGapData.bond.color }}>
              {maturityGapData.bond.years} năm
            </span>
          </div>
          <div className="relative h-10 bg-ink-100 rounded-xl overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bondWidth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full rounded-xl flex items-center justify-end pr-3"
              style={{ background: 'linear-gradient(90deg, #fb7185, #f43f5e)' }}
            >
              <span className="text-white text-xs font-bold">2–3 năm</span>
            </motion.div>
          </div>
        </div>

        {/* Dự án BDS */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-ink-700">{maturityGapData.project.label}</span>
            <span className="font-mono text-sm font-bold" style={{ color: maturityGapData.project.color }}>
              {maturityGapData.project.years} năm
            </span>
          </div>
          <div className="relative h-10 bg-ink-100 rounded-xl overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${projectWidth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="h-full rounded-xl flex items-center justify-end pr-3"
              style={{ background: 'linear-gradient(90deg, #818cf8, #6366f1)' }}
            >
              <span className="text-white text-xs font-bold">5–10 năm</span>
            </motion.div>
          </div>
        </div>

        {/* Gap indicator */}
        <div className="mt-4 p-4 rounded-xl border-2 border-dashed border-coral-300 bg-coral-50">
          <p className="text-coral-600 text-sm font-semibold text-center">
            ⚠️ Khoảng chênh lệch = <strong>{maturityGapData.project.years - maturityGapData.bond.years} năm rủi ro</strong>
          </p>
          <p className="text-coral-500 text-xs text-center mt-1">
            Kết quả: 90+ tổ chức chậm nghĩa vụ · ~190.000 tỷ đồng
          </p>
        </div>
      </div>
      <SourceTag>NHNN/SBV · VNDIRECT Research Q4/2024</SourceTag>
    </div>
  );
}

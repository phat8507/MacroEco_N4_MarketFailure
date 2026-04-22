import { motion } from 'framer-motion';
import FadeInView from '../ui/FadeInView';
import { staggerContainer, fadeInUp } from '../../animations/variants';

import imgMeeting from '../../assets/journey/team-meeting-01.jpg';
import imgTask from '../../assets/journey/task-allocation-01.jpg';
import imgResearch from '../../assets/journey/research-01.jpg';
import imgSlide from '../../assets/journey/slide-editing-01.jpg';
import imgRehearsal from '../../assets/journey/rehearsal-01.jpg';
import imgPresentation from '../../assets/journey/presentation-day-01.jpg';

const journeySteps = [
  {
    id: 1,
    title: 'Họp nhóm & Lên ý tưởng',
    tag: 'Research',
    filename: 'team-meeting-01.jpg',
    image: imgMeeting,
    colSpan: 'col-span-1 md:col-span-2',
    aspect: 'aspect-video'
  },
  {
    id: 2,
    title: 'Nghiên cứu & Thảo luận',
    tag: 'Discussion',
    filename: 'task-allocation-01.jpg',
    image: imgTask,
    colSpan: 'col-span-1',
    aspect: 'aspect-square'
  },
  {
    id: 3,
    title: 'Nghiên cứu & Tổng hợp số liệu',
    tag: 'Research',
    filename: 'research-01.jpg',
    image: imgResearch,
    colSpan: 'col-span-1',
    aspect: 'aspect-square'
  },
  {
    id: 4,
    title: 'Biên tập & Làm slide',
    tag: 'Editing',
    filename: 'slide-editing-01.jpg',
    image: imgSlide,
    colSpan: 'col-span-1 md:col-span-2',
    aspect: 'aspect-video'
  },
  {
    id: 5,
    title: 'Tập duyệt thuyết trình',
    tag: 'Rehearsal',
    filename: 'rehearsal-01.jpg',
    image: imgRehearsal,
    colSpan: 'col-span-1 md:col-span-2',
    aspect: 'aspect-video'
  },
  {
    id: 6,
    title: 'Báo cáo & Hoàn thành',
    tag: 'Presentation',
    filename: 'presentation-day-01.jpg',
    image: imgPresentation,
    colSpan: 'col-span-1',
    aspect: 'aspect-square'
  }
];

export default function TeamJourneySection() {
  return (
    <section id="team-journey" className="section-base" style={{ background: '#f8fafc' }}>
      <div className="section-container relative z-10">
        <FadeInView className="text-center mb-12">
          <span className="section-eyebrow block mb-3">Hậu trường</span>
          <h2 className="display-lg text-ink-900">
            Hành Trình <span className="gradient-text-indigo">Làm Việc Nhóm</span>
          </h2>
          <p className="text-ink-500 mt-3 text-lg max-w-2xl mx-auto">
            Quá trình từ những ý tưởng sơ khai đến khi hoàn thiện dự án, với sự đóng góp và nỗ lực của tất cả các thành viên.
          </p>
        </FadeInView>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {journeySteps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-[16px] flex flex-col ${step.colSpan}`}
              style={{ 
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Image Placeholder Area */}
              <div className={`relative w-full overflow-hidden bg-slate-100 ${step.aspect}`}>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-ink-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm tracking-wide">
                    {step.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-ink-900 text-[1.1rem] mb-2">{step.title}</h3>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import FadeInView from '../ui/FadeInView';
import MorphingBlob from '../ui/MorphingBlob';
import { teamMembers } from '../../data/teamData';
import { staggerContainer, fadeInUp } from '../../animations/variants';

function AvatarPlaceholder({ member }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={`Ảnh đại diện ${member.name}`}
        className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-lg flex-shrink-0"
        style={{
          border: '3px solid white',
          boxShadow: `0 4px 16px ${member.color}44`,
        }}
      />
    );
  }

  return (
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg flex-shrink-0`}
      style={{
        background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
        border: `3px solid white`,
        boxShadow: `0 4px 16px ${member.color}44`,
      }}
      aria-label={`Ảnh màu đại diện ${member.name}`}
    >
      {member.initials}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="section-base"
      style={{ background: '#f8fafc' }}
    >
      <MorphingBlob color="#6366f1" size={400} style={{ top: '-5%', right: '-5%', opacity: 0.07 }} />
      <MorphingBlob color="#ec4899" size={300} style={{ bottom: '-5%', left: '-5%', opacity: 0.07, animationDelay: '3s' }} />

      <div className="section-container relative z-10">
        <FadeInView className="text-center mb-12">
          <span className="section-eyebrow block mb-3">Nhóm thực hiện</span>
          <h2 className="display-lg text-ink-900">
            Thành Viên <span className="gradient-text-indigo">Nhóm 4</span>
          </h2>
          <p className="text-ink-500 mt-3 text-lg">Lớp L02 · Kinh tế Vĩ mô</p>
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.035, boxShadow: `0 16px 48px ${member.color}30` }}
              transition={{ duration: 0.25 }}
              className="glass-card p-6 text-center cursor-default"
            >
              <AvatarPlaceholder member={member} />

              {/* Role badge */}
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${member.color}18`, color: member.color }}
              >
                {member.role}
              </span>

              <h3 className="font-bold text-ink-900 text-base mb-1">{member.name}</h3>
              <p className="text-ink-500 text-xs leading-relaxed mb-3">{member.duty}</p>

              {/* Slides badge */}
              <div className="flex items-center justify-center gap-1">
                <span className="text-ink-300 text-xs">📄</span>
                <span className="font-mono text-xs text-ink-400">{member.slides}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
// Team Data — 8 thành viên nhóm (đã xác nhận vai trò)
// ─────────────────────────────────────────────────────

import truongPhatImg from '../assets/team/truong-phat.jpg';
import minhNhatImg from '../assets/team/minh-nhat.jpg';
import danhPhucImg from '../assets/team/danh-phuc.jpg';
import hoangVietImg from '../assets/team/hoang-viet.jpg';
import minhQuanImg from '../assets/team/minh-quan.jpg';
import vanNgocImg from '../assets/team/van-ngoc.jpg';
import xuanPhucImg from '../assets/team/xuan-phuc.jpg';
import thanhTrungImg from '../assets/team/thanh-trung.jpg';

export const teamMembers = [
  {
    id: 1,
    name: 'Trường Phát',
    role: 'Leader',
    duty: 'MC mở đầu · Khung phân tích 4 tầng',
    slides: 'Slide 1–3',
    color: '#6366f1',
    bgGradient: 'from-indigo-400 to-violet-500',
    initials: 'TP',
    image: truongPhatImg,
  },
  {
    id: 2,
    name: 'Minh Nhật',
    role: 'Rebuttal Specialist',
    duty: 'Cơ chế Vòng xoáy đòn bẩy & Lệch kỳ hạn',
    slides: 'Slide 4–5',
    color: '#f43f5e',
    bgGradient: 'from-rose-400 to-red-500',
    initials: 'MN',
    image: minhNhatImg,
  },
  {
    id: 3,
    name: 'Danh Phúc',
    role: 'Case Analyst',
    duty: 'Phân tích Case Silicon Valley Bank 2023',
    slides: 'Slide 10',
    color: '#8b5cf6',
    bgGradient: 'from-violet-400 to-purple-600',
    initials: 'DP',
    image: danhPhucImg,
  },
  {
    id: 4,
    name: 'Hoàng Việt',
    role: 'Case Analyst',
    duty: 'Khủng hoảng Tài chính Toàn cầu 2008 · Kết luận',
    slides: 'Slide 11–12',
    color: '#06b6d4',
    bgGradient: 'from-cyan-400 to-sky-500',
    initials: 'HV',
    image: hoangVietImg,
  },
  {
    id: 5,
    name: 'Minh Quân',
    role: 'Việt Nam External Specialist',
    duty: 'Xuất khẩu & Lao động 2023',
    slides: 'Slide 8',
    color: '#10b981',
    bgGradient: 'from-emerald-400 to-green-500',
    initials: 'MQ',
    image: minhQuanImg,
  },
  {
    id: 6,
    name: 'Văn Ngọc',
    role: 'Việt Nam Domestic Specialist',
    duty: 'Case BDS Việt Nam — tổng hợp 3 cơ chế',
    slides: 'Slide 7',
    color: '#f59e0b',
    bgGradient: 'from-amber-400 to-orange-500',
    initials: 'VN',
    image: vanNgocImg,
  },
  {
    id: 7,
    name: 'Xuân Phúc',
    role: 'Data Strategist',
    duty: 'Biến Động Biển Đỏ Q1/2024 — Kênh đào Suez',
    slides: 'Slide 9',
    color: '#3b82f6',
    bgGradient: 'from-blue-400 to-indigo-500',
    initials: 'XP',
    image: xuanPhucImg,
  },
  {
    id: 8,
    name: 'Thành Trung',
    role: 'Data & Sources Lead',
    duty: 'Tâm lý Bầy đàn · Kiểm chứng & Trích xuất nguồn',
    slides: 'Slide 6',
    color: '#ec4899',
    bgGradient: 'from-pink-400 to-rose-500',
    initials: 'TT',
    image: thanhTrungImg,
  },
];

// ─────────────────────────────────────────────────────
// Chart Data — Toàn bộ dữ liệu biểu đồ
// Nguồn: tài liệu nội bộ nhóm, GSO, NHNN/SBV, CBRE, VNDIRECT, OIG Fed, DFPI
// ─────────────────────────────────────────────────────

// Slide 4 — Tín dụng BDS (Nguồn: NHNN/SBV)
export const creditGrowthData = [
  { year: '2019', growth: 26,  fill: '#6366f1', note: 'Khởi đầu vòng xoáy' },
  { year: '2020', growth: 26,  fill: '#6366f1', note: 'Tăng tốc — lãi suất thấp' },
  { year: '2021', growth: 26,  fill: '#6366f1', note: 'Đỉnh tín dụng BDS' },
  { year: '2022', growth: -5,  fill: '#f43f5e', note: '↩ Vòng xoáy đảo chiều' },
];

// Slide 5 — Lệch kỳ hạn
export const maturityGapData = {
  bond:    { years: 2.5, label: 'Trái phiếu DN (2–3 năm)', color: '#f43f5e' },
  project: { years: 7.5, label: 'Dự án BDS (5–10 năm)',   color: '#6366f1' },
  defaultOrgs: 90,
  defaultAmountTy: 190000,
  defaultAmountUSD: 7.5,
};

// Slides 6 & 7 — Giá căn hộ HN (Nguồn: CBRE Vietnam Q4/2024)
export const apartmentData = [
  { year: '2022', price: 37, transactions: 8500 },
  { year: '2023', price: 47, transactions: 5200 },
  { year: '2024', price: 64, transactions: 3100 },
];

// Slide 7 — Trái phiếu đáo hạn 2025 (Nguồn: VBMA / VNDIRECT Q1/2025)
export const bondMaturityData = [
  { name: 'Bất động sản', value: 52, color: '#f43f5e' },
  { name: 'Ngành khác',   value: 48, color: '#6366f1' },
];

// Slide 8 — Xuất khẩu VN 2020–2023 (Nguồn: GSO)
export const exportData = [
  { year: '2020', value: 281.5 },
  { year: '2021', value: 336.3 },
  { year: '2022', value: 371.9, peak: true },
  { year: '2023', value: 355.5, drop: true },
];

// Slide 8 — Lao động mất việc Q1→Q2/2023 (Nguồn: GSO)
export const laborData = [
  { industry: 'Dệt may', change: -142500, color: '#f43f5e' },
  { industry: 'Điện tử', change: -30200,  color: '#3b82f6' },
];

// Slide 9 — Chi phí vận chuyển (Nguồn: Bộ Công Thương / Drewry)
export const shippingData = [
  { label: 'Trước xung đột', cost: 1375, color: '#10b981' },
  { label: 'Sau xung đột',   cost: 2875, color: '#f43f5e' },
];

// Slide 10 — SVB so sánh ngân hàng (Nguồn: OIG Fed 2023-SR-B-013)
export const svbCompareData = [
  { bank: 'SVB',               uninsured: 94, htmRatio: 137, color: '#f43f5e' },
  { bank: 'Trung bình ngành',  uninsured: 50, htmRatio: 35,  color: '#f59e0b' },
  { bank: 'JPMorgan',          uninsured: 40, htmRatio: 18,  color: '#6366f1' },
];

// Slide 10 — SVB Bank Run 8 giờ (Nguồn: DFPI California 2023)
export const svbRunData = [
  { time: '08:00', withdrawn: 0,  rate: 0 },
  { time: '09:30', withdrawn: 5,  rate: 0.8 },
  { time: '11:00', withdrawn: 12, rate: 1.2 },
  { time: '12:30', withdrawn: 22, rate: 1.4 },
  { time: '14:00', withdrawn: 32, rate: 1.5 },
  { time: '16:00', withdrawn: 42, rate: 1.2 },
];

// Slide 11 — Giá nhà Mỹ 1998–2012 (Nguồn: S&P/Case-Shiller)
export const usHousingData = [
  { year: '1998', price: 130,   phase: 'pre' },
  { year: '2000', price: 156,   phase: 'bubble' },
  { year: '2002', price: 168,   phase: 'bubble' },
  { year: '2004', price: 195,   phase: 'bubble' },
  { year: '2005', price: 240,   phase: 'peak' },
  { year: '2006', price: 257.4, phase: 'peak' },
  { year: '2008', price: 215,   phase: 'crash' },
  { year: '2009', price: 180,   phase: 'crash' },
  { year: '2012', price: 155,   phase: 'crash' },
];

// Slide 11 — Lãi suất FED (Nguồn: Federal Reserve Historical Data)
export const fedRateData = [
  { year: '2000', rate: 6.5 },
  { year: '2002', rate: 1.75 },
  { year: '2003', rate: 1.0 },
  { year: '2004', rate: 2.25 },
  { year: '2006', rate: 5.25 },
  { year: '2008', rate: 0.25 },
];

const clearText = (value = '') => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const signalRules = [
  {
    id: 'phone',
    label: 'Có liên hệ',
    points: 10,
    test: (lead) => Boolean(lead.phone?.trim()),
    reason: 'Đã có số điện thoại/Zalo để chăm sóc tiếp.'
  },
  {
    id: 'budget',
    label: 'Ngân sách rõ',
    points: 20,
    test: (lead) => Boolean(lead.budget && !clearText(lead.budget).includes('chua ro')),
    reason: 'Khách có khung ngân sách, dễ lọc phương án phù hợp.'
  },
  {
    id: 'need',
    label: 'Nhu cầu cụ thể',
    points: 15,
    test: (lead) => Boolean(lead.need && lead.need.length > 35),
    reason: 'Nhu cầu đủ chi tiết để tư vấn có trọng tâm.'
  },
  {
    id: 'appointment',
    label: 'Có ý định gặp/xem',
    points: 25,
    test: (lead) => {
      const text = clearText(`${lead.need} ${lead.timeline} ${lead.note} ${lead.nextAction}`)
      return ['xem', 'gap', 'hen', 'cuoi tuan', 'goi lai'].some((word) => text.includes(word))
    },
    reason: 'Có tín hiệu muốn trao đổi hoặc xem thực tế.'
  },
  {
    id: 'decision',
    label: 'Hỏi thông tin quyết định',
    points: 15,
    test: (lead) => {
      const text = clearText(`${lead.need} ${lead.budget} ${lead.note}`)
      return ['phap ly', 'so rieng', 'gia', 'bang gia', 'bao gia', 'vi tri', 'cod'].some((word) => text.includes(word))
    },
    reason: 'Khách hỏi các yếu tố ảnh hưởng đến quyết định.'
  },
  {
    id: 'urgency',
    label: 'Có thời gian rõ',
    points: 10,
    test: (lead) => {
      const text = clearText(`${lead.timeline} ${lead.note}`)
      return ['trong tuan', 'trong 24', 'trong 2 thang', 'hom nay', 'ngay mai'].some((word) => text.includes(word))
    },
    reason: 'Timeline rõ giúp đặt nhắc việc chăm sóc.'
  },
  {
    id: 'priority',
    label: 'Ưu tiên cao',
    points: 10,
    test: (lead) => lead.priority === 'Cao',
    reason: 'Được đánh dấu cần ưu tiên bởi người dùng.'
  }
]

export function getLeadSignals(lead) {
  return signalRules.map((rule) => ({ ...rule, active: rule.test(lead) }))
}

export function calculateLeadScore(lead) {
  const baseScore = getLeadSignals(lead).filter((signal) => signal.active).reduce((total, signal) => total + signal.points, 0)
  let score = baseScore
  if (lead.status === 'appointment') score += 10
  if (lead.status === 'closed') score = Math.max(score, 90)
  if (lead.status === 'lost') score = Math.min(score, 25)
  return Math.min(100, score)
}

export function getTemperature(score) {
  if (score >= 80) return { id: 'hot', label: 'Khách nóng', hint: 'Ưu tiên chăm ngay', action: 'Gọi / nhắn trong hôm nay' }
  if (score >= 50) return { id: 'warm', label: 'Khách ấm', hint: 'Nên follow-up', action: 'Gửi thêm thông tin chọn lọc' }
  if (score >= 20) return { id: 'cold', label: 'Khách lạnh', hint: 'Cần thêm dữ liệu', action: 'Hỏi rõ nhu cầu và ngân sách' }
  return { id: 'unknown', label: 'Thiếu thông tin', hint: 'Chưa đủ tín hiệu', action: 'Xin thêm thông tin liên hệ' }
}

export function buildLeadSummary(lead) {
  const temp = lead.temperature || getTemperature(calculateLeadScore(lead))
  const activeSignals = getLeadSignals(lead).filter((signal) => signal.active).map((signal) => signal.label.toLowerCase()).join(', ')
  return `${lead.name} thuộc nhóm ${temp.label.toLowerCase()} vì ${activeSignals || 'chưa có nhiều tín hiệu rõ'}. Nhu cầu chính: ${lead.need || 'chưa rõ'}. Ngân sách: ${lead.budget || 'chưa rõ'}. Bước tiếp theo: ${lead.nextAction || temp.action}.`
}

export function buildActionPlan(lead) {
  const temp = lead.temperature || getTemperature(calculateLeadScore(lead))
  const text = clearText(`${lead.businessType} ${lead.need} ${lead.note}`)
  const plan = []

  if (!lead.phone) plan.push('Xin số điện thoại/Zalo để không mất liên hệ.')
  if (!lead.budget || clearText(lead.budget).includes('chua ro')) plan.push('Hỏi rõ ngân sách hoặc khoảng giá có thể chấp nhận.')
  if (text.includes('phap ly') || text.includes('so rieng')) plan.push('Chuẩn bị thông tin pháp lý/sổ và điểm cần kiểm tra.')
  if (text.includes('bao gia') || text.includes('gia')) plan.push('Gửi báo giá/so sánh gói thật ngắn, tránh quá tải thông tin.')
  if (lead.status === 'appointment') plan.push('Xác nhận lại lịch hẹn và tài liệu cần gửi trước buổi gặp.')
  if (lead.status === 'closed') plan.push('Chăm sóc sau chốt: cảm ơn, xin phản hồi và đề nghị giới thiệu thêm.')
  if (plan.length < 3) plan.push(temp.action, 'Ghi lại phản hồi mới để cập nhật điểm khách.')

  return [...new Set(plan)].slice(0, 4)
}

export function getPortfolioMetrics(leads) {
  const total = leads.length
  const hot = leads.filter((lead) => lead.score >= 80).length
  const active = leads.filter((lead) => !['closed', 'lost'].includes(lead.status)).length
  const closed = leads.filter((lead) => lead.status === 'closed').length
  const estimatedValue = leads.reduce((sum, lead) => sum + Number(String(lead.dealValue || '').replace(/[^0-9]/g, '')), 0)
  const conversion = total ? Math.round((closed / total) * 100) : 0
  return { total, hot, active, closed, estimatedValue, conversion }
}

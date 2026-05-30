const clean = (value = '') => String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const toNumber = (value) => Number(String(value || '').replace(/[^0-9]/g, '')) || 0

export function calculateDealProbability(lead) {
  if (!lead) return 0
  let probability = Math.round((lead.score || 0) * 0.58)

  const statusBoost = {
    new: 2,
    consulting: 8,
    interested: 16,
    appointment: 24,
    closed: 100,
    lost: -35
  }

  if (lead.status === 'closed') return 100
  if (lead.status === 'lost') return Math.max(5, Math.min(22, probability - 35))

  probability += statusBoost[lead.status] || 0
  if (lead.priority === 'Cao') probability += 8
  if (toNumber(lead.dealValue) > 0) probability += 5
  if (clean(`${lead.timeline} ${lead.note}`).includes('cuoi tuan')) probability += 4

  return Math.max(8, Math.min(96, probability))
}

export function getProbabilityLabel(probability) {
  if (probability >= 80) return { label: 'Rất cao', hint: 'Nên chốt lịch hoặc gọi ngay', tone: 'hot' }
  if (probability >= 60) return { label: 'Cao', hint: 'Cần gửi phương án chọn lọc', tone: 'warm' }
  if (probability >= 35) return { label: 'Trung bình', hint: 'Cần làm rõ rào cản mua', tone: 'cold' }
  return { label: 'Thấp', hint: 'Cần nuôi dưỡng thêm dữ liệu', tone: 'unknown' }
}

export function calculateLeadHealth(lead) {
  const text = clean(`${lead.timeline} ${lead.note} ${lead.nextAction}`)
  let risk = 0

  if (!lead.phone) risk += 30
  if (!lead.budget || clean(lead.budget).includes('chua ro')) risk += 18
  if (!lead.timeline || clean(lead.timeline).includes('chua ro')) risk += 14
  if (lead.status === 'new') risk += 10
  if (lead.status === 'lost') risk += 45
  if (lead.status === 'closed') risk = 0
  if (text.includes('ngay mai') || text.includes('hom nay') || text.includes('cuoi tuan')) risk -= 10

  const score = Math.max(0, Math.min(100, 100 - risk))
  if (score >= 82) return { score, label: 'Ổn định', hint: 'Khách đang có dữ liệu tốt', tone: 'good' }
  if (score >= 62) return { score, label: 'Cần chú ý', hint: 'Nên cập nhật thông tin còn thiếu', tone: 'watch' }
  if (score >= 38) return { score, label: 'Dễ bị bỏ quên', hint: 'Thiếu dữ liệu/timeline để chăm tiếp', tone: 'risk' }
  return { score, label: 'Nguy cơ mất', hint: 'Cần liên hệ hoặc làm rõ lại ngay', tone: 'danger' }
}

export function buildFollowUpTimeline(lead) {
  const text = clean(`${lead.businessType} ${lead.need} ${lead.note} ${lead.timeline}`)
  const isRealEstate = text.includes('bds') || text.includes('dat') || text.includes('ninh hoa') || text.includes('phap ly')
  const isShop = text.includes('shop') || text.includes('cod') || text.includes('san pham') || text.includes('hang')

  const first = lead.nextAction || 'Gửi thông tin ngắn gọn đúng nhu cầu khách đang hỏi'
  const second = isRealEstate
    ? 'Gửi 2–3 lựa chọn kèm điểm mạnh, pháp lý và vị trí cần kiểm tra'
    : isShop
      ? 'Xác nhận sản phẩm, giá, tồn kho và phương thức giao hàng'
      : 'Làm rõ nhu cầu, ngân sách và thời gian ra quyết định'
  const third = lead.status === 'appointment'
    ? 'Xác nhận lại lịch hẹn, địa điểm và tài liệu cần chuẩn bị'
    : 'Đặt lịch gọi lại ngắn để xử lý câu hỏi còn phân vân'
  const fourth = lead.score >= 80
    ? 'Chốt bước tiếp theo: xem trực tiếp, gửi báo giá hoặc xác nhận đơn'
    : 'Nuôi dưỡng nhẹ bằng case phù hợp, ưu đãi hoặc thông tin tham khảo'

  return [
    { day: 'Hôm nay', title: first },
    { day: 'Ngày mai', title: second },
    { day: '48 giờ', title: third },
    { day: 'Sau phản hồi', title: fourth }
  ]
}

export const objectionTypes = [
  { id: 'price', label: 'Giá cao' },
  { id: 'think', label: 'Để suy nghĩ' },
  { id: 'not-urgent', label: 'Chưa cần gấp' },
  { id: 'send-info', label: 'Gửi xem trước' },
  { id: 'compare', label: 'Đang tham khảo' }
]

export function handleObjection(lead, objection = 'think') {
  const name = lead?.name || 'anh/chị'
  const need = lead?.need || 'nhu cầu của mình'
  const map = {
    price: `Dạ em hiểu ạ. Thay vì chỉ nhìn giá, mình có thể so sánh thêm vị trí, pháp lý, mức phù hợp với nhu cầu và chi phí phát sinh để xem lựa chọn nào đáng tiền hơn. Em gửi ${name} 2–3 phương án dễ so sánh nhé ạ.`,
    think: `Dạ được ạ. Để ${name} dễ cân nhắc, em tóm tắt lại 3 ý quan trọng nhất theo nhu cầu: ${need}. Sau đó em hẹn mình một mốc ngắn để trao đổi lại, tránh bỏ sót cơ hội phù hợp ạ.`,
    'not-urgent': `Dạ không sao ạ. Em sẽ lưu nhu cầu hiện tại của ${name} và chỉ gửi những thông tin thật sự sát tiêu chí, không làm phiền nhiều. Khi có phương án phù hợp hơn em nhắn mình trước nhé ạ.`,
    'send-info': `Dạ em gửi mình bản ngắn gồm: thông tin chính, điểm mạnh, điểm cần kiểm tra và bước tiếp theo. Nếu xem xong thấy phù hợp, mình trao đổi thêm 5 phút để em lọc đúng hơn ạ.`,
    compare: `Dạ mình tham khảo thêm là rất hợp lý ạ. Em sẽ gửi bảng so sánh ngắn để ${name} nhìn rõ khác biệt về giá trị, rủi ro và độ phù hợp, từ đó quyết định dễ hơn.`
  }
  return map[objection] || map.think
}

export function buildMessageLibrary(lead) {
  if (!lead) return []
  return [
    {
      id: 'new-lead',
      title: 'Chào khách mới',
      body: `Dạ ${lead.name}, em đã nhận thông tin mình quan tâm. Em sẽ lọc nhanh nội dung phù hợp với nhu cầu: ${lead.need || 'mình đang cần'} rồi gửi mình xem trước ạ.`
    },
    {
      id: 'follow-up',
      title: 'Chăm lại nhẹ',
      body: `Dạ ${lead.name}, em nhắn lại để xem mình còn muốn em hỗ trợ thêm phần nào không ạ. Em có thể gửi bản tóm tắt ngắn để mình dễ quyết hơn.`
    },
    {
      id: 'appointment',
      title: 'Chốt lịch hẹn',
      body: `Dạ ${lead.name}, nếu thuận tiện mình chốt một lịch trao đổi/xem trực tiếp ngắn nhé ạ. Em chuẩn bị trước thông tin phù hợp để mình không mất thời gian.`
    },
    {
      id: 'old-lead',
      title: 'Chăm lại khách cũ',
      body: `Dạ ${lead.name}, em có cập nhật mới khá sát với nhu cầu mình từng hỏi. Em gửi mình xem thử, nếu chưa phù hợp em sẽ lọc lại đúng tiêu chí hơn ạ.`
    }
  ]
}

export const toneOptions = [
  { id: 'polite', label: 'Lịch sự' },
  { id: 'friendly', label: 'Thân thiện' },
  { id: 'closing', label: 'Chốt nhẹ' },
  { id: 'premium', label: 'Cao cấp' },
  { id: 'short', label: 'Zalo ngắn' }
]

const firstName = (name = 'anh/chị') => name.replace(/^(anh|chị|cô|chú|em)\s+/i, '').trim() || name

export function createFollowUpMessage(lead, tone = 'polite') {
  if (!lead) return ''
  const name = firstName(lead.name)
  const need = lead.need || 'nhu cầu anh/chị đang quan tâm'
  const budget = lead.budget && lead.budget !== 'Chưa rõ' ? ` trong khoảng ${lead.budget}` : ''
  const next = lead.nextAction || 'em gửi thêm thông tin phù hợp cho mình xem trước'

  const templates = {
    polite: `Dạ ${lead.name}, em đã ghi lại nhu cầu: ${need}${budget}. Bước tiếp theo em đề xuất là: ${next}. Nếu thuận tiện, mình trao đổi ngắn để em tư vấn kỹ hơn ạ.`,
    friendly: `Dạ ${name} ơi, em đã lưu lại nhu cầu của mình rồi: ${need}${budget}. Em lọc nhanh vài phương án phù hợp rồi gửi mình xem trước nhé. Nếu thấy ổn, mình trao đổi thêm để chọn hướng tốt nhất ạ.`,
    closing: `Dạ ${lead.name}, theo nhu cầu hiện tại thì em thấy mình nên xem trước 2–3 lựa chọn phù hợp nhất để tránh mất thời gian. Em gửi thông tin chi tiết cho mình ngay hôm nay, sau đó mình chốt lịch xem/trao đổi tiếp được không ạ?`,
    premium: `Dạ ${lead.name}, em đã tổng hợp lại nhu cầu và các tiêu chí chính của mình. Em sẽ ưu tiên lọc những phương án rõ thông tin, phù hợp ngân sách và có cơ sở để đánh giá kỹ hơn trước khi ra quyết định. Em gửi bản chọn lọc cho mình trước nhé ạ.`,
    short: `${lead.name} ơi, em đã ghi lại nhu cầu ${need}${budget}. Em gửi mình vài phương án phù hợp trước nhé?`
  }

  return templates[tone] || templates.polite
}

export function createCallScript(lead) {
  if (!lead) return []
  return [
    `Mở đầu: Dạ em gọi lại theo nhu cầu ${lead.need || 'mình đã trao đổi'} của ${lead.name}.`,
    `Làm rõ: Mình ưu tiên tiêu chí nào nhất: giá, vị trí, pháp lý hay thời gian triển khai?`,
    `Đề xuất: Em sẽ lọc 2–3 phương án sát nhất để mình không mất thời gian xem quá nhiều.`,
    `Kết thúc: Em gửi thông tin qua Zalo và hẹn mình phản hồi lại sau khi xem nhé ạ.`
  ]
}

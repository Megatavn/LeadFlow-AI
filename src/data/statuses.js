export const leadStatuses = [
  { id: 'new', label: 'Mới', short: 'Mới', description: 'Vừa tiếp nhận, cần phản hồi nhanh.' },
  { id: 'consulting', label: 'Đang tư vấn', short: 'Tư vấn', description: 'Đã có nhu cầu, đang làm rõ tiêu chí.' },
  { id: 'interested', label: 'Quan tâm cao', short: 'Quan tâm', description: 'Có tín hiệu mua/dùng dịch vụ rõ hơn.' },
  { id: 'appointment', label: 'Hẹn gặp', short: 'Hẹn', description: 'Đã có lịch gọi, gặp hoặc xem thực tế.' },
  { id: 'closed', label: 'Đã chốt', short: 'Chốt', description: 'Đã đạt kết quả mong muốn.' },
  { id: 'lost', label: 'Mất', short: 'Mất', description: 'Không còn phù hợp hoặc chưa quay lại.' }
]

export const sources = ['Facebook', 'Zalo', 'TikTok', 'Website', 'Giới thiệu', 'Facebook Ads', 'Khác']
export const businessTypes = ['BĐS', 'Shop online', 'Dịch vụ', 'Quán nhỏ', 'Khác']
export const priorityLevels = ['Thấp', 'Vừa', 'Cao']

export const playbooks = [
  {
    id: 'real-estate',
    title: 'Môi giới BĐS',
    subtitle: 'Khách hỏi giá, pháp lý, ngân sách, lịch xem.',
    tags: ['Ngân sách', 'Pháp lý', 'Lịch xem'],
    exampleNeed: 'Quan tâm đất Ninh Hòa dưới 900 triệu, gần đường lớn, ưu tiên có sổ riêng.',
    exampleNote: 'Khách hỏi kỹ pháp lý, giá và muốn xem trực tiếp cuối tuần.'
  },
  {
    id: 'online-shop',
    title: 'Shop online',
    subtitle: 'Khách hỏi sản phẩm, size, phí ship, khuyến mãi.',
    tags: ['Giá', 'COD', 'Tồn kho'],
    exampleNeed: 'Khách hỏi mẫu còn hàng không, muốn ship COD và xin giảm nhẹ.',
    exampleNote: 'Khách phản hồi nhanh, đã để lại số điện thoại.'
  },
  {
    id: 'service',
    title: 'Dịch vụ nhỏ',
    subtitle: 'Khách hỏi tư vấn, lịch hẹn, gói dịch vụ.',
    tags: ['Lịch hẹn', 'Báo giá', 'Tư vấn'],
    exampleNeed: 'Khách muốn tư vấn gói chăm sóc khách tự động cho spa nhỏ.',
    exampleNote: 'Mới hỏi thông tin ban đầu, cần làm rõ ngân sách.'
  }
]

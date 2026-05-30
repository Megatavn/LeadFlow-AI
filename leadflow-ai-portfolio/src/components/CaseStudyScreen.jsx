const blocks = [
  {
    label: 'Vấn đề',
    title: 'Người bán hàng dễ bỏ quên lead',
    body: 'Khách đến từ nhiều nguồn, ghi chú rời rạc, không biết ai cần ưu tiên và nên nhắn gì tiếp theo.'
  },
  {
    label: 'Giải pháp',
    title: 'Quản lý khách mini có phân tích bán hàng',
    body: 'LeadFlow AI mô phỏng quy trình AI: chấm điểm khách, tạo việc nên làm tiếp, xử lý từ chối, tạo tin nhắn và quản lý phễu bán hàng.'
  },
  {
    label: 'Phạm vi',
    title: 'Prototype offline-first cho portfolio',
    body: 'Bản này cố ý không dùng backend/API để tập trung vào UI, UX, product logic và APK demo chạy thật trên Android.'
  }
]

export function CaseStudyScreen() {
  return (
    <section className="case-study-card">
      <p className="eyebrow">Case study</p>
      <h2>Câu chuyện đưa vào CV</h2>
      <div className="case-study-grid">
        {blocks.map((block) => (
          <article key={block.label}>
            <span>{block.label}</span>
            <strong>{block.title}</strong>
            <p>{block.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

import { OnboardingIllustration } from './Illustrations'

const slides = [
  {
    kicker: 'Bản demo offline',
    title: 'Quản lý lead dễ hơn',
    body: 'LeadFlow AI gom khách tiềm năng, nhu cầu, ngân sách và trạng thái vào một nơi để demo quy trình sale rõ ràng.',
    points: ['Không cần đăng nhập', 'Không cần backend', 'Lưu dữ liệu local'],
    visual: 'leads'
  },
  {
    kicker: 'Phân tích bán hàng',
    title: 'AI logic mô phỏng quyết định sale',
    body: 'App dùng rule-based scoring để chấm điểm lead, giải thích tín hiệu, dự đoán khả năng chốt và gợi ý bước tiếp theo.',
    points: ['Điểm khách', 'Khả năng chốt', 'Việc nên làm'],
    visual: 'score'
  },
  {
    kicker: 'Sẵn sàng cho CV',
    title: 'Dễ quay demo, dễ đưa vào CV',
    body: 'Thiết kế mobile-first, có pipeline, thư viện tin nhắn, xử lý từ chối, export/import dữ liệu và case study trong app.',
    points: ['APK Android', 'README công khai', 'Case study CV'],
    visual: 'pipeline'
  }
]

export function Onboarding({ onFinish }) {
  return (
    <div className="onboarding-shell animated-dock" role="dialog" aria-modal="true" aria-label="Giới thiệu LeadFlow AI">
      <div className="onboarding-card animated-sheet">
        <div className="sheet-handle" />
        <div className="onboarding-brand">
          <span>LF</span>
          <div>
            <p className="eyebrow">LeadFlow AI v2.6</p>
            <strong>Thuần Việt UX Fix</strong>
          </div>
        </div>

        <div className="onboarding-slides">
          {slides.map((slide, index) => (
            <article key={slide.title} className="onboarding-slide motion-card" style={{ '--stagger': `${index * 80}ms` }}>
              <span className="slide-index">0{index + 1}</span>
              <OnboardingIllustration type={slide.visual} />
              <p className="eyebrow">{slide.kicker}</p>
              <h2>{slide.title}</h2>
              <p>{slide.body}</p>
              <div className="slide-pills">
                {slide.points.map((point) => <span key={point}>{point}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="onboarding-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <button className="primary-btn full-width pressable" onClick={onFinish}>Bắt đầu xem demo</button>
        <button className="secondary-btn full-width pressable" onClick={onFinish}>Bỏ qua giới thiệu</button>
      </div>
    </div>
  )
}

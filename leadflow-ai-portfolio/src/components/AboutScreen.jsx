import { ThemeToggle } from './ThemeToggle'
import { DataTools } from './DataTools'
import { CaseStudyScreen } from './CaseStudyScreen'

export function AboutScreen({ leads, onReset, onImport, theme, onThemeChange, onShowOnboarding, onToast }) {
  return (
    <div className="screen about-screen">
      <header className="hero-card about-hero upgraded-hero polish-hero">
        <div className="release-pill">v2.6 Thuần Việt UX Fix</div>
        <p className="eyebrow">Case study cho CV</p>
        <h1>LeadFlow AI</h1>
        <p className="hero-copy">Prototype quản lý khách hàng offline dành cho GitHub/CV: quản lý khách tiềm năng, chấm điểm khách, dự đoán khả năng chốt, xử lý từ chối và theo dõi phễu bán hàng.</p>
        <div className="hero-actions">
          <button className="secondary-btn translucent pressable" onClick={onShowOnboarding}>Xem onboarding</button>
        </div>
      </header>

      <CaseStudyScreen />

      <section className="section-block feature-list polished-feature-list">
        <h2>Điểm thể hiện trong CV</h2>
        <p><span>01</span> Tư duy sản phẩm ưu tiên mobile</p>
        <p><span>02</span> Chấm điểm khách bằng logic AI mô phỏng</p>
        <p><span>03</span> Dự đoán khả năng chốt và sức khỏe khách</p>
        <p><span>04</span> Xử lý từ chối và thư viện tin nhắn</p>
        <p><span>05</span> Lưu dữ liệu offline bằng LocalStorage</p>
        <p><span>06</span> Nhập/xuất JSON & CSV</p>
        <p><span>07</span> Chuyển giao diện sáng/tối và lưu local</p>
        <p><span>08</span> Đóng gói APK Android bằng Capacitor</p>
      </section>

      <ThemeToggle theme={theme} onChange={onThemeChange} />

      <section className="portfolio-copy-card polished-copy-card">
        <p className="eyebrow">Tóm tắt tiếng Anh cho CV</p>
        <p>Built a mobile-first offline Sales Intelligence CRM prototype with rule-based lead scoring, deal probability, lead health, follow-up timeline, objection handling, message library, call scripting, import/export tools, local data storage, theme persistence, and Android APK packaging.</p>
      </section>

      <section className="portfolio-copy-card polished-copy-card">
        <p className="eyebrow">Ghi chú công khai GitHub</p>
        <p>This is a portfolio prototype. It intentionally avoids backend, login, external AI API, and online database to keep the APK lightweight, offline-first, and easy to review.</p>
      </section>

      <DataTools leads={leads} onImport={onImport} onReset={onReset} onToast={onToast} />

      <section className="note-panel polish-note">
        <strong>Phạm vi phù hợp để công khai</strong>
        <p>Bản v2.6 tập trung sửa lỗi hiển thị chi tiết khách, Việt hóa giao diện, tinh chỉnh UX mobile, animation, minh họa, thông báo, avatar, case study, công cụ dữ liệu và tài liệu README/CV. Đây là bản phù hợp để public GitHub và đưa vào CV.</p>
      </section>
    </div>
  )
}

import { formatCurrency } from '../utils/formatters'
import { getPortfolioMetrics } from '../utils/leadScoring'
import { calculateDealProbability, calculateLeadHealth } from '../utils/salesIntelligence'
import { LeadCard } from './LeadCard'
import { HeroVisual } from './Illustrations'

export function Dashboard({ leads, onAdd, onOpenLead }) {
  const metrics = getPortfolioMetrics(leads)
  const todayTasks = leads
    .filter((lead) => ['new', 'consulting', 'interested', 'appointment'].includes(lead.status))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
  const topLead = [...leads].sort((a, b) => b.score - a.score)[0]
  const riskLeads = leads.filter((lead) => lead.score >= 50 && !lead.phone).length
  const dealProbability = leads.length ? Math.round(leads.reduce((sum, lead) => sum + calculateDealProbability(lead), 0) / leads.length) : 0
  const healthQueue = [...leads]
    .map((lead) => ({ ...lead, health: calculateLeadHealth(lead) }))
    .filter((lead) => !['closed', 'lost'].includes(lead.status))
    .sort((a, b) => a.health.score - b.health.score)
    .slice(0, 3)

  return (
    <div className="screen dashboard-screen">
      <header className="hero-card upgraded-hero motion-hero">
        <div className="hero-topline">
          <p className="eyebrow">LeadFlow AI · Bản portfolio</p>
          <span className="live-pill">Demo offline</span>
        </div>
        <h1>Chăm lead rõ ràng, không bỏ lỡ khách nóng.</h1>
        <p className="hero-copy">Công cụ quản lý khách offline dùng logic AI mô phỏng để chấm điểm, gợi ý việc cần làm và tạo tin nhắn chăm khách.</p>
        <div className="hero-actions">
          <button className="primary-btn pressable" onClick={onAdd}>+ Thêm khách mới</button>
          <button className="secondary-btn translucent pressable" onClick={() => topLead && onOpenLead(topLead.id)}>Xem khách nóng</button>
        </div>
        <HeroVisual />
      </header>

      <section className="brief-card">
        <div>
          <p className="eyebrow">Tóm tắt hôm nay</p>
          <h2>Hôm nay ưu tiên {todayTasks.length} khách</h2>
          <p>Phễu bán hàng đang có {metrics.active} khách hoạt động, {metrics.hot} khách nóng và giá trị demo khoảng {formatCurrency(metrics.estimatedValue)}.</p>
        </div>
        <span>{metrics.conversion}%</span>
      </section>

      <section className="metric-grid pro-grid">
        <article className="metric-card">
          <span>Tổng lead</span>
          <strong>{metrics.total}</strong>
        </article>
        <article className="metric-card warm">
          <span>Khách nóng</span>
          <strong>{metrics.hot}</strong>
        </article>
        <article className="metric-card">
          <span>Đã chốt</span>
          <strong>{metrics.closed}</strong>
        </article>
        <article className="metric-card danger-soft">
          <span>Thiếu liên hệ</span>
          <strong>{riskLeads}</strong>
        </article>
      </section>


      <section className="sales-brief-card">
        <div>
          <p className="eyebrow">Phân tích bán hàng</p>
          <h2>{dealProbability}% khả năng chốt trung bình</h2>
          <p>Bản v2.5 thêm motion, avatar, illustration, toast và empty state để demo UX/UI chuyên nghiệp hơn.</p>
        </div>
        <div className="health-queue">
          {healthQueue.map((lead) => (
            <button key={lead.id} onClick={() => onOpenLead(lead.id)}>
              <span>{lead.health.score}</span>
              <p>{lead.name}<small>{lead.health.label}</small></p>
            </button>
          ))}
        </div>
      </section>

      {topLead && (
        <section className="section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Khách ưu tiên</p>
              <h2>Khách nên chăm trước</h2>
            </div>
          </div>
          <LeadCard lead={topLead} onClick={() => onOpenLead(topLead.id)} />
        </section>
      )}

      <section className="section-block task-card premium-task-card">
        <p className="eyebrow">Kế hoạch hành động</p>
        <h2>Việc cần làm tiếp theo</h2>
        <div className="task-list">
          {todayTasks.map((lead) => (
            <button key={lead.id} onClick={() => onOpenLead(lead.id)}>
              <span className={`task-dot ${lead.temperature.id}`} />
              <span>{lead.nextAction || `Chăm sóc lại ${lead.name}`}</span>
              <small>{lead.name} · {lead.temperature.hint}</small>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}

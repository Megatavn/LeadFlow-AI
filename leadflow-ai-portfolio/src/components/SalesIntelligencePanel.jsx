import { calculateDealProbability, calculateLeadHealth, getProbabilityLabel, buildFollowUpTimeline } from '../utils/salesIntelligence'

export function SalesIntelligencePanel({ lead }) {
  const probability = calculateDealProbability(lead)
  const probabilityMeta = getProbabilityLabel(probability)
  const health = calculateLeadHealth(lead)
  const timeline = buildFollowUpTimeline(lead)

  return (
    <section className="sales-intel-card">
      <div className="section-heading compact-gap">
        <div>
          <p className="eyebrow">Phân tích bán hàng</p>
          <h2>Khả năng chốt & sức khỏe khách</h2>
        </div>
      </div>

      <div className="intel-metric-grid">
        <article className={`intel-metric ${probabilityMeta.tone}`}>
          <span>Khả năng chốt</span>
          <strong>{probability}%</strong>
          <p>{probabilityMeta.label} · {probabilityMeta.hint}</p>
        </article>
        <article className={`intel-metric ${health.tone}`}>
          <span>Sức khỏe khách</span>
          <strong>{health.score}</strong>
          <p>{health.label} · {health.hint}</p>
        </article>
      </div>

      <div className="timeline-box">
        <p className="eyebrow">Lộ trình chăm sóc</p>
        {timeline.map((item) => (
          <div className="timeline-row" key={item.day + item.title}>
            <span>{item.day}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

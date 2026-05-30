import { getLeadSignals } from '../utils/leadScoring'

export function SignalStack({ lead }) {
  const signals = getLeadSignals(lead)
  return (
    <section className="signal-stack">
      <div className="section-heading compact-gap">
        <div>
          <p className="eyebrow">Tín hiệu AI</p>
          <h2>Tín hiệu quyết định</h2>
        </div>
      </div>
      <div className="signal-grid">
        {signals.map((signal) => (
          <article key={signal.id} className={`signal-card ${signal.active ? 'active' : ''}`}>
            <div>
              <strong>{signal.label}</strong>
              <span>{signal.active ? `+${signal.points}` : '0'} điểm</span>
            </div>
            <p>{signal.reason}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

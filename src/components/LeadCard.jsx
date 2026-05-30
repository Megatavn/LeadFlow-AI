import { formatCurrency } from '../utils/formatters'
import { calculateDealProbability, calculateLeadHealth } from '../utils/salesIntelligence'
import { ScoreBadge } from './ScoreBadge'
import { Avatar } from './Illustrations'

export function LeadCard({ lead, selected, onClick }) {
  const probability = calculateDealProbability(lead)
  const health = calculateLeadHealth(lead)

  return (
    <button className={`lead-card pressable ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="lead-main-row">
        <div className="lead-title-with-avatar">
          <Avatar name={lead.name} tone={lead.temperature?.id} />
          <div>
            <p className="eyebrow">{lead.source} · {lead.businessType}</p>
            <h3>{lead.name}</h3>
          </div>
        </div>
        <ScoreBadge score={lead.score} temperature={lead.temperature} compact />
      </div>
      <p className="lead-need">{lead.need}</p>
      <div className="lead-meta-row icon-meta-row">
        <span>💰 {lead.budget || 'Chưa rõ ngân sách'}</span>
        <span>⏱ {lead.timeline || 'Chưa rõ thời gian'}</span>
        <span>↗ Giá trị: {formatCurrency(lead.dealValue)}</span>
      </div>
      <div className="sales-mini-row">
        <span>Chốt {probability}%</span>
        <span className={`health-chip ${health.tone}`}>{health.label}</span>
      </div>
      <div className="lead-next-action">
        <span>Tiếp theo</span>
        <p>{lead.nextAction || lead.temperature.action}</p>
      </div>
    </button>
  )
}

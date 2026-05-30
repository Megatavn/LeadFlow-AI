import { leadStatuses } from '../data/statuses'
import { buildActionPlan, buildLeadSummary } from '../utils/leadScoring'
import { formatCurrency, formatDateLabel } from '../utils/formatters'
import { ScoreBadge } from './ScoreBadge'
import { SignalStack } from './SignalStack'
import { SalesIntelligencePanel } from './SalesIntelligencePanel'
import { ObjectionHandler } from './ObjectionHandler'
import { Avatar } from './Illustrations'

export function LeadDetail({ lead, onClose, onUpdate, onDelete, onGenerateMessage, onToast }) {
  const actionPlan = buildActionPlan(lead)

  const copyPhone = async () => {
    if (!lead.phone) {
      onToast?.('Khách này chưa có số điện thoại', 'warning')
      return
    }
    try {
      await navigator.clipboard.writeText(lead.phone)
      onToast?.('Đã copy số điện thoại')
    } catch {
      onToast?.('Không copy được trên trình duyệt này', 'warning')
    }
  }

  return (
    <aside className="detail-dock animated-dock" onClick={onClose}>
      <div className="detail-card animated-sheet" onClick={(event) => event.stopPropagation()}>
        <div className="sheet-handle" />
        <header className="detail-header visual-detail-header">
          <div className="detail-title-row">
            <Avatar name={lead.name} tone={lead.temperature?.id} size="lg" />
            <div>
              <p className="eyebrow">Chi tiết khách</p>
              <h2>{lead.name}</h2>
            </div>
          </div>
          <button className="icon-btn ghost pressable" onClick={onClose}>×</button>
        </header>

        <div className="detail-score-row pro-detail-score visual-score-panel">
          <ScoreBadge score={lead.score} temperature={lead.temperature} />
          <div>
            <strong>{lead.temperature.hint}</strong>
            <p>{lead.phone || 'Chưa có số điện thoại'} · Giá trị {formatCurrency(lead.dealValue)}</p>
          </div>
        </div>

        <section className="ai-summary-box highlight-summary">
          <p className="eyebrow">Tóm tắt AI</p>
          <p>{buildLeadSummary(lead)}</p>
        </section>

        <SalesIntelligencePanel lead={lead} />

        <section className="action-plan-card motion-card">
          <p className="eyebrow">Việc nên làm tiếp</p>
          <div className="action-steps">
            {actionPlan.map((item, index) => (
              <p key={item}><span>{index + 1}</span>{item}</p>
            ))}
          </div>
        </section>

        <SignalStack lead={lead} />

        <ObjectionHandler lead={lead} />

        <div className="info-list polished-info-list">
          <p><span>Nguồn</span>{lead.source}</p>
          <p><span>Ngành</span>{lead.businessType}</p>
          <p><span>Ngân sách</span>{lead.budget || 'Chưa rõ'}</p>
          <p><span>Thời gian</span>{lead.timeline || 'Chưa rõ'}</p>
          <p><span>Ngày vào</span>{formatDateLabel(lead.createdAt)}</p>
        </div>

        <label className="select-label status-select-block">
          <span>Trạng thái</span>
          <select value={lead.status} onChange={(event) => onUpdate(lead.id, { status: event.target.value })}>
            {leadStatuses.map((status) => <option key={status.id} value={status.id}>{status.label}</option>)}
          </select>
        </label>

        <div className="detail-quick-actions">
          <button className="secondary-btn pressable" onClick={copyPhone}>Copy số</button>
          <button className="primary-btn pressable" onClick={onGenerateMessage}>Tạo tin nhắn</button>
        </div>
        <button className="danger-btn full-width pressable" onClick={() => onDelete(lead.id)}>Xoá khách demo</button>
      </div>
    </aside>
  )
}

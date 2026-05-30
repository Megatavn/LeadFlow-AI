import { leadStatuses } from '../data/statuses'
import { formatCurrency } from '../utils/formatters'
import { calculateDealProbability } from '../utils/salesIntelligence'
import { EmptyStateIllustration } from './Illustrations'

export function Pipeline({ leads, onMoveLead, onOpenLead }) {
  return (
    <div className="screen pipeline-screen">
      <header className="simple-header">
        <div>
          <p className="eyebrow">Phễu bán hàng</p>
          <h1>Theo dõi tiến độ</h1>
        </div>
      </header>

      <section className="pipeline-insight">
        <strong>Bảng phễu khách hàng</strong>
        <p>Kéo ngang để xem từng giai đoạn. Bản offline demo dùng select để đổi trạng thái thay cho drag & drop, giúp nhẹ và dễ build APK.</p>
      </section>

      <div className="pipeline-board">
        {leadStatuses.map((status) => {
          const statusLeads = leads.filter((lead) => lead.status === status.id)
          const value = statusLeads.reduce((sum, lead) => sum + Number(String(lead.dealValue || '').replace(/[^0-9]/g, '')), 0)
          return (
            <section key={status.id} className="pipeline-column">
              <div className="pipeline-title">
                <div>
                  <h2>{status.label}</h2>
                  <p>{status.description}</p>
                </div>
                <span>{statusLeads.length}</span>
              </div>
              <small className="column-value">Giá trị: {formatCurrency(value)}</small>
              <div className="pipeline-items">
                {statusLeads.map((lead) => (
                  <article key={lead.id} className="pipeline-card pressable" onClick={() => onOpenLead(lead.id)}>
                    <div>
                      <strong>{lead.name}</strong>
                      <p>{lead.need}</p>
                    </div>
                    <span className={`mini-score ${lead.temperature.id}`}>{calculateDealProbability(lead)}%</span>
                    <select value={lead.status} onClick={(event) => event.stopPropagation()} onChange={(event) => onMoveLead(lead.id, { status: event.target.value })}>
                      {leadStatuses.map((option) => <option key={option.id} value={option.id}>{option.short}</option>)}
                    </select>
                  </article>
                ))}
                {!statusLeads.length && (
                  <div className="empty-mini visual-empty compact-empty">
                    <EmptyStateIllustration type="pipeline" />
                    <span>Chưa có lead</span>
                  </div>
                )}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

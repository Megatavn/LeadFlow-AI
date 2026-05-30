import { useMemo, useState } from 'react'
import { LeadCard } from './LeadCard'
import { EmptyStateIllustration } from './Illustrations'

const filters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'hot', label: 'Nóng' },
  { id: 'warm', label: 'Ấm' },
  { id: 'cold', label: 'Lạnh' },
  { id: 'unknown', label: 'Thiếu dữ liệu' }
]

export function LeadList({ leads, selectedLeadId, onSelectLead, onAdd }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('score')

  const visibleLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        const matchQuery = `${lead.name} ${lead.need} ${lead.phone} ${lead.source} ${lead.businessType}`.toLowerCase().includes(query.toLowerCase())
        const matchFilter = filter === 'all' || lead.temperature.id === filter
        return matchQuery && matchFilter
      })
      .sort((a, b) => {
        if (sort === 'score') return b.score - a.score
        if (sort === 'newest') return new Date(b.createdAt) - new Date(a.createdAt)
        return a.name.localeCompare(b.name, 'vi')
      })
  }, [filter, leads, query, sort])

  return (
    <div className="screen list-screen">
      <header className="simple-header">
        <div>
          <p className="eyebrow">Danh sách khách</p>
          <h1>Khách hàng tiềm năng</h1>
        </div>
        <button className="icon-btn pressable" onClick={onAdd}>+</button>
      </header>

      <label className="search-box">
        <span>⌕</span>
        <input placeholder="Tìm tên, nhu cầu, nguồn khách..." value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>

      <div className="control-row">
        <div className="filter-row">
          {filters.map((item) => (
            <button key={item.id} className={filter === item.id ? 'active' : ''} onClick={() => setFilter(item.id)}>{item.label}</button>
          ))}
        </div>
        <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="score">Điểm cao</option>
          <option value="newest">Mới nhất</option>
          <option value="name">Tên A-Z</option>
        </select>
      </div>

      <div className="lead-stack">
        {visibleLeads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} selected={lead.id === selectedLeadId} onClick={() => onSelectLead(lead.id)} />
        ))}
        {!visibleLeads.length && (
          <div className="empty-state visual-empty">
            <EmptyStateIllustration type="lead" />
            <strong>Không có khách phù hợp</strong>
            <p>Thử đổi bộ lọc hoặc thêm khách mới để demo tiếp.</p>
            <button className="secondary-btn pressable" onClick={onAdd}>Thêm khách demo</button>
          </div>
        )}
      </div>
    </div>
  )
}

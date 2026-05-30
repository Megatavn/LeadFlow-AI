import { useState } from 'react'
import { businessTypes, playbooks, priorityLevels, sources } from '../data/statuses'

export function LeadForm({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    source: sources[0],
    businessType: businessTypes[0],
    need: '',
    budget: '',
    timeline: '',
    dealValue: '',
    priority: priorityLevels[1],
    nextAction: '',
    note: ''
  })

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  const applyPlaybook = (playbook) => {
    setForm((current) => ({
      ...current,
      businessType: playbook.title.includes('BĐS') ? 'BĐS' : playbook.title.includes('Shop') ? 'Shop online' : 'Dịch vụ',
      need: playbook.exampleNeed,
      note: playbook.exampleNote
    }))
  }

  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) return alert('Nhập tên khách trước nhé')
    onSubmit(form)
  }

  return (
    <div className="overlay animated-dock">
      <form className="sheet-form animated-sheet" onSubmit={submit}>
        <div className="sheet-handle" />
        <header className="simple-header compact">
          <div>
            <p className="eyebrow">Thêm khách</p>
            <h2>Thêm khách mới</h2>
          </div>
          <button type="button" className="icon-btn ghost pressable" onClick={onClose}>×</button>
        </header>

        <section className="playbook-strip">
          {playbooks.map((playbook) => (
            <button type="button" className="pressable" key={playbook.id} onClick={() => applyPlaybook(playbook)}>
              <strong>{playbook.title}</strong>
              <span>{playbook.tags.join(' · ')}</span>
            </button>
          ))}
        </section>

        <label>Tên khách<input value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Ví dụ: Anh Minh" /></label>
        <label>Số điện thoại<input value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="090..." /></label>
        <div className="form-grid">
          <label>Nguồn khách<select value={form.source} onChange={(event) => update('source', event.target.value)}>{sources.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Ngành<select value={form.businessType} onChange={(event) => update('businessType', event.target.value)}>{businessTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <label>Nhu cầu<textarea value={form.need} onChange={(event) => update('need', event.target.value)} placeholder="Khách đang cần gì?" /></label>
        <div className="form-grid">
          <label>Ngân sách<input value={form.budget} onChange={(event) => update('budget', event.target.value)} placeholder="Ví dụ: dưới 900 triệu" /></label>
          <label>Giá trị deal<input inputMode="numeric" value={form.dealValue} onChange={(event) => update('dealValue', event.target.value)} placeholder="900000000" /></label>
        </div>
        <div className="form-grid">
          <label>Thời gian<input value={form.timeline} onChange={(event) => update('timeline', event.target.value)} placeholder="Muốn xem cuối tuần" /></label>
          <label>Ưu tiên<select value={form.priority} onChange={(event) => update('priority', event.target.value)}>{priorityLevels.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <label>Việc tiếp theo<input value={form.nextAction} onChange={(event) => update('nextAction', event.target.value)} placeholder="Gửi báo giá / chốt lịch / xin số điện thoại..." /></label>
        <label>Ghi chú<textarea value={form.note} onChange={(event) => update('note', event.target.value)} placeholder="Hỏi giá, pháp lý, muốn gặp..." /></label>

        <button className="primary-btn full-width pressable">Lưu khách</button>
      </form>
    </div>
  )
}

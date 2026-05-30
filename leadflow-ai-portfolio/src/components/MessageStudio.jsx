import { useMemo, useState } from 'react'
import { createCallScript, toneOptions } from '../utils/messageTemplates'
import { buildMessageLibrary, handleObjection, objectionTypes } from '../utils/salesIntelligence'

export function MessageStudio({ leads, selectedLead, selectedTone, onToneChange, onSelectLead, message, onToast }) {
  const [copied, setCopied] = useState(false)
  const [objection, setObjection] = useState(objectionTypes[0].id)
  const callScript = useMemo(() => createCallScript(selectedLead), [selectedLead])
  const messageLibrary = useMemo(() => buildMessageLibrary(selectedLead), [selectedLead])
  const objectionMessage = useMemo(() => handleObjection(selectedLead, objection), [selectedLead, objection])

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      onToast?.('Đã copy nội dung tin nhắn')
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      onToast?.('Không copy được. Bạn có thể giữ và chọn nội dung để sao chép.', 'warning')
    }
  }

  return (
    <div className="screen message-screen">
      <header className="simple-header">
        <div>
          <p className="eyebrow">Soạn tin AI</p>
          <h1>Bộ tin nhắn chăm khách</h1>
        </div>
      </header>

      <section className="message-context-card">
        <label className="select-label">
          <span>Chọn khách</span>
          <select value={selectedLead?.id || ''} onChange={(event) => onSelectLead(event.target.value)}>
            {leads.map((lead) => <option key={lead.id} value={lead.id}>{lead.name} · {lead.temperature.label}</option>)}
          </select>
        </label>
        <div className="mini-context-grid">
          <p><span>Điểm</span><strong>{selectedLead?.score || 0}</strong></p>
          <p><span>Nhóm</span><strong>{selectedLead?.temperature?.label || 'Khách'}</strong></p>
        </div>
      </section>

      <div className="tone-grid">
        {toneOptions.map((tone) => (
          <button key={tone.id} className={`pressable ${selectedTone === tone.id ? 'active' : ''}`} onClick={() => onToneChange(tone.id)}>{tone.label}</button>
        ))}
      </div>

      <article className="message-card pro-message-card">
        <p className="eyebrow">Tin nhắn gợi ý</p>
        <p>{message}</p>
      </article>

      <button className="primary-btn full-width pressable" onClick={() => copyText(message)}>{copied ? 'Đã copy ✓' : 'Copy tin nhắn'}</button>

      <section className="library-card">
        <p className="eyebrow">Thư viện tin nhắn</p>
        <h2>4 mẫu chăm sóc nhanh</h2>
        <div className="message-library-grid">
          {messageLibrary.map((item) => (
            <article key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
              <button className="pressable" onClick={() => copyText(item.body)}>Copy mẫu</button>
            </article>
          ))}
        </div>
      </section>

      <section className="objection-card">
        <p className="eyebrow">Xử lý phản hồi</p>
        <h2>Khi khách từ chối/phân vân</h2>
        <div className="objection-tabs">
          {objectionTypes.map((item) => (
            <button key={item.id} className={`pressable ${objection === item.id ? 'active' : ''}`} onClick={() => setObjection(item.id)}>{item.label}</button>
          ))}
        </div>
        <article className="objection-response">
          <span>Gợi ý trả lời</span>
          <p>{objectionMessage}</p>
        </article>
      </section>

      <section className="call-script-card">
        <p className="eyebrow">Kịch bản gọi</p>
        <h2>Kịch bản gọi nhanh</h2>
        {callScript.map((line, index) => <p className="script-line" key={line}><span>{index + 1}</span>{line}</p>)}
      </section>

      <section className="note-panel">
        <strong>Ghi chú portfolio</strong>
        <p>v2.6 mô phỏng phân tích bán hàng bằng luật và mẫu nội dung: thư viện tin nhắn, xử lý từ chối, kịch bản gọi và chọn giọng văn — vẫn offline, không cần API thật.</p>
      </section>
    </div>
  )
}

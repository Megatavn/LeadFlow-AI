import { useState } from 'react'
import { handleObjection, objectionTypes } from '../utils/salesIntelligence'

export function ObjectionHandler({ lead }) {
  const [selected, setSelected] = useState(objectionTypes[0].id)
  const response = handleObjection(lead, selected)

  return (
    <section className="objection-card">
      <p className="eyebrow">Xử lý phản hồi</p>
      <h2>Xử lý từ chối</h2>
      <div className="objection-tabs">
        {objectionTypes.map((item) => (
          <button key={item.id} className={`pressable ${selected === item.id ? 'active' : ''}`} onClick={() => setSelected(item.id)}>{item.label}</button>
        ))}
      </div>
      <article className="objection-response">
        <span>Gợi ý trả lời</span>
        <p>{response}</p>
      </article>
    </section>
  )
}

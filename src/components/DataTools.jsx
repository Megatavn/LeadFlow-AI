import { createCsv, downloadTextFile } from '../utils/formatters'

export function DataTools({ leads, onImport, onReset, onToast }) {
  const exportJson = () => {
    downloadTextFile('leadflow-ai-demo-data.json', JSON.stringify(leads, null, 2), 'application/json')
    onToast?.('Đã xuất JSON demo')
  }
  const exportCsv = () => {
    downloadTextFile('leadflow-ai-demo-data.csv', createCsv(leads), 'text/csv;charset=utf-8')
    onToast?.('Đã xuất CSV demo')
  }

  const handleImport = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const text = await file.text()
      const parsed = JSON.parse(text)
      if (!Array.isArray(parsed)) throw new Error('JSON phải là một mảng lead')
      onImport(parsed)
      event.target.value = ''
    } catch (error) {
      onToast?.(`Không import được file: ${error.message}`, 'warning')
    }
  }

  return (
    <section className="export-panel polished-data-tools motion-card">
      <div>
        <p className="eyebrow">Công cụ dữ liệu offline</p>
        <strong>Nhập / Xuất dữ liệu cho demo GitHub</strong>
        <p>Xuất dữ liệu để quay video demo, hoặc import lại bộ lead mẫu khi cần test nhanh trên APK.</p>
      </div>
      <button className="secondary-btn full-width pressable" onClick={exportJson}>Xuất JSON</button>
      <button className="secondary-btn full-width pressable" onClick={exportCsv}>Xuất CSV</button>
      <label className="import-btn pressable">
        Nhập JSON
        <input type="file" accept="application/json,.json" onChange={handleImport} />
      </label>
      <button className="danger-btn full-width pressable" onClick={onReset}>Reset dữ liệu demo</button>
    </section>
  )
}

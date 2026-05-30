export function formatCurrency(value) {
  const number = Number(String(value || '').replace(/[^0-9]/g, ''))
  if (!number) return 'Chưa rõ'
  if (number >= 1_000_000_000) return `${(number / 1_000_000_000).toFixed(number % 1_000_000_000 === 0 ? 0 : 1)} tỷ`
  if (number >= 1_000_000) return `${Math.round(number / 1_000_000)} triệu`
  return new Intl.NumberFormat('vi-VN').format(number)
}

export function formatDateLabel(value) {
  if (!value) return 'Không rõ'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Không rõ'
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })
}

export function createCsv(leads) {
  const headers = ['name', 'phone', 'source', 'businessType', 'need', 'budget', 'timeline', 'status', 'score', 'priority', 'nextAction']
  const rows = leads.map((lead) => headers.map((key) => `"${String(lead[key] ?? '').replaceAll('"', '""')}"`).join(','))
  return [headers.join(','), ...rows].join('\n')
}

export function downloadTextFile(filename, content, type = 'text/plain') {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

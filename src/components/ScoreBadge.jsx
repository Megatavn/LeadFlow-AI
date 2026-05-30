export function ScoreBadge({ score, temperature, compact = false }) {
  return (
    <div className={`score-badge ${temperature?.id || 'unknown'} ${compact ? 'compact' : ''}`}>
      <strong>{score}</strong>
      <span>{temperature?.label || 'Khách'}</span>
    </div>
  )
}

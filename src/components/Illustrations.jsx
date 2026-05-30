const initials = (name = 'LF') => {
  const parts = String(name).trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return 'LF'
  const first = parts[0]?.[0] || ''
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : parts[0]?.[1] || ''
  return `${first}${last}`.toUpperCase()
}

export function Avatar({ name, tone = 'default', size = 'md' }) {
  return (
    <span className={`avatar avatar-${tone} avatar-${size}`} aria-hidden="true">
      {initials(name)}
    </span>
  )
}

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-phone-card">
        <span className="visual-dot hot" />
        <span className="visual-line long" />
        <span className="visual-line" />
        <div className="visual-score">92</div>
      </div>
      <div className="hero-float-card one">AI</div>
      <div className="hero-float-card two">↗</div>
      <div className="hero-orbit" />
    </div>
  )
}

export function OnboardingIllustration({ type = 'leads' }) {
  return (
    <div className={`illustration illustration-${type}`} aria-hidden="true">
      <div className="illu-phone">
        <span className="illu-top" />
        <span className="illu-row strong" />
        <span className="illu-row" />
        <span className="illu-row short" />
        <div className="illu-mini-cards">
          <span />
          <span />
          <span />
        </div>
      </div>
      <span className="illu-bubble bubble-a" />
      <span className="illu-bubble bubble-b" />
      <span className="illu-badge">{type === 'score' ? '98' : type === 'pipeline' ? '✓' : 'LF'}</span>
    </div>
  )
}

export function EmptyStateIllustration({ type = 'lead' }) {
  return (
    <div className={`empty-illustration empty-${type}`} aria-hidden="true">
      <span className="empty-card card-a" />
      <span className="empty-card card-b" />
      <span className="empty-card card-c" />
      <span className="empty-spark">✦</span>
    </div>
  )
}

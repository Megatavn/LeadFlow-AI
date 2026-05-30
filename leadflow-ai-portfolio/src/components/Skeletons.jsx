export function AppSkeleton() {
  return (
    <div className="screen skeleton-screen" aria-label="Đang tải giao diện demo">
      <section className="skeleton-hero">
        <span className="skeleton-line w-40" />
        <span className="skeleton-title" />
        <span className="skeleton-line" />
        <span className="skeleton-line w-70" />
      </section>
      <div className="metric-grid">
        <span className="skeleton-card" />
        <span className="skeleton-card" />
        <span className="skeleton-card" />
        <span className="skeleton-card" />
      </div>
      <span className="skeleton-card large" />
    </div>
  )
}

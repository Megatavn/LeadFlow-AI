const navItems = [
  { id: 'dashboard', label: 'Tổng quan', icon: '⌂' },
  { id: 'leads', label: 'Khách', icon: '◌' },
  { id: 'pipeline', label: 'Phễu', icon: '↳' },
  { id: 'messages', label: 'Tin AI', icon: '✦' },
  { id: 'about', label: 'CV', icon: '◎' }
]

export function BottomNav({ activeTab, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Điều hướng chính">
      {navItems.map((item) => (
        <button key={item.id} className={`nav-item pressable ${activeTab === item.id ? 'active' : ''}`} onClick={() => onChange(item.id)}>
          <span className="nav-icon">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export function ThemeToggle({ theme, onChange }) {
  return (
    <div className="theme-toggle-card">
      <div>
        <p className="eyebrow">Giao diện</p>
        <strong>Giao diện {theme === 'dark' ? 'tối' : 'sáng'}</strong>
        <p>Lựa chọn giao diện được lưu bằng LocalStorage để bản demo trông hoàn thiện hơn khi đưa lên GitHub/CV.</p>
      </div>
      <button className="secondary-btn pressable" onClick={() => onChange(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Chế độ sáng' : 'Chế độ tối'}
      </button>
    </div>
  )
}

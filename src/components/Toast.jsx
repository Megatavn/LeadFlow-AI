export function ToastStack({ toasts }) {
  if (!toasts.length) return null
  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type || 'success'}`}>
          <span>{toast.type === 'warning' ? '!' : '✓'}</span>
          <p>{toast.message}</p>
        </div>
      ))}
    </div>
  )
}

/**
 * Note — nota informativa contextual (Figma: componente Note)
 * v2 tendrá type: info/warning/success
 */

export default function Note({ children, className = '' }) {
  return (
    <div className={`
      bg-brand-subtle text-primary
      px-3 py-3 rounded-(--radius-md)
      text-sm
      ${className}
    `}>
      {children}
    </div>
  )
}
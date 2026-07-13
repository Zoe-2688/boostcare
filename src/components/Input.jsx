/**
 * Input — Figma: state (default/focus/error/disabled)
 *
 * Figma            →  React/CSS
 * ───────────────────────────────────
 * state=focus      →  pseudo-clase focus: (borde verde 2px)
 * state=error      →  prop `error` (borde rojo + mensaje)
 * state=disabled   →  atributo disabled
 * label siempre visible · placeholder alineado izquierda
 */

export default function Input({
  label,
  error,
  id,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold text-primary">
        {label}
      </label>

      <input
        id={id}
        className={`
          w-full px-4 py-3 rounded-(--radius-md)
          bg-bg-default text-primary text-base
          placeholder:text-neutral-500
          border outline-none
          transition-colors duration-150
          disabled:bg-surface disabled:text-neutral-300
          ${error
            ? 'border-danger focus:border-danger'
            : 'border-border-default focus:border-action-primary focus:border-2'
          }
        `}
        aria-invalid={!!error}
        {...props}
      />

      {error && (
        <p className="text-xs font-semibold text-danger">{error}</p>
      )}
    </div>
  )
}
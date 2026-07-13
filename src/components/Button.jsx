/**
 * Button — traducción 1:1 del componente de Figma
 *
 * Figma                    →  React/CSS
 * ─────────────────────────────────────────────
 * prop type (variant)      →  prop `type`
 * state=pressed            →  pseudo-clase active:
 * state=disabled           →  atributo disabled + variante disabled:
 * alto táctil 44px         →  min-h-11
 * label/md (14 SemiBold)   →  text-sm font-semibold
 * radius/md (12)           →  rounded-(--radius-md)
 * padding 20/12            →  px-5 py-3
 */

const styles = {
  primary: `
    bg-action-primary text-on-brand
    active:bg-action-primary-pressed
    disabled:bg-neutral-200 disabled:text-neutral-500
  `,
  secondary: `
    border-[1.5px] border-action-primary text-action-primary
    active:bg-brand-subtle
    disabled:border-border-strong disabled:text-neutral-500
  `,
  ghost: `
    text-action-primary
    active:bg-brand-subtle
    disabled:text-neutral-500
  `,
}

export default function Button({
  type = 'primary',
  children,
  className = '',
  ...props
}) {
  return (
    <button
      className={`
        min-h-11 px-5 py-3 rounded-(--radius-md)
        text-sm font-semibold
        transition-colors duration-150
        disabled:cursor-not-allowed
        ${styles[type]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

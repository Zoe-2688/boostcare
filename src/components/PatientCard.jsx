/**
 * PatientCard — Figma: avatar | info (Fill) | Badge (Hug)
 *
 * Composición: usa Badge ADENTRO — igual que la instancia
 * dentro del componente en Figma.
 * El layout: flex = tu auto layout horizontal ·
 * flex-1 = tu "info en W Fill" (empuja el badge a la derecha)
 */

import Badge from './Badge'

export default function PatientCard({
  name,
  detail,
  initials,
  level = 'high',
  adherence,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-full flex items-center gap-3
        bg-bg-default border border-border-default
        rounded-(--radius-lg) p-4
        text-left
        transition-colors hover:bg-surface
      "
    >
      {/* avatar */}
      <span className="
        flex items-center justify-center
        w-10 h-10 shrink-0 rounded-full
        bg-green-100 text-green-800
        text-sm font-semibold
      ">
        {initials}
      </span>

      {/* info — tu "W Fill" */}
      <span className="flex-1 flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-primary">{name}</span>
        <span className="text-sm text-secondary">{detail}</span>
      </span>

      {/* badge — tu "Hug", pegado a la derecha */}
      <Badge level={level}>{adherence}%</Badge>
    </button>
  )
}
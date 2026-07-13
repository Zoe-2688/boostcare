/**
 * Badge de adherencia — Figma: level (high/medium/low)
 * Regla icono+color: nunca color solo (WCAG 1.4.1)
 */

const levels = {
  high:   { symbol: '✓', classes: 'bg-green-100 text-green-800' },
  medium: { symbol: '!', classes: 'bg-amber-100 text-amber-700' },
  low:    { symbol: '✕', classes: 'bg-red-100 text-red-700' },
}

export default function Badge({ level = 'high', children }) {
  const { symbol, classes } = levels[level]
  return (
    <span className={`
      inline-flex items-center gap-1
      px-2 py-1 rounded-full
      text-xs font-semibold
      ${classes}
    `}>
      {symbol} {children}
    </span>
  )
}
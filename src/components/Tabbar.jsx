/**
 * Tabbar — NavLink detecta la ruta actual y pinta el activo.
 * Tu regla de Figma ("tab activo verde") ahora es automática.
 */

import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/dashboard', label: 'Inicio' },
  { to: '/pacientes', label: 'Pacientes' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/perfil', label: 'Perfil' },
]

export default function Tabbar() {
  return (
    <nav className="
      fixed bottom-0 left-1/2 -translate-x-1/2
      w-full max-w-sm
      flex justify-between items-center
      bg-bg-default border-t border-border-default
      px-6 pt-3 pb-5
    ">
      {tabs.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `text-xs font-semibold ${isActive ? 'text-action-primary' : 'text-secondary'}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}
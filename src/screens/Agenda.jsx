import { appointments } from '../data/appointments'
import Tabbar from '../components/Tabbar'

export default function Agenda() {
  // agrupar citas por día (sin repetir el día)
  const dias = [...new Set(appointments.map(a => a.day))]

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-4 px-4 pt-14 pb-24">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary">Agenda</h1>
        <p className="text-sm text-secondary">Semana del 13 al 17 de julio</p>
      </header>

      {dias.map(dia => (
        <section key={dia} className="flex flex-col gap-3">
          <h2 className="text-sm font-semibold text-secondary">{dia}</h2>
          {appointments.filter(a => a.day === dia).map(a => (
            <div key={a.id} className="flex items-center gap-3 bg-bg-default border border-border-default rounded-(--radius-md) p-4">
              <span className="text-sm font-semibold text-action-primary bg-brand-subtle rounded-(--radius-sm) px-2 py-1">{a.time}</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-primary">{a.name}</span>
                <span className="text-sm text-secondary">{a.reason}</span>
                <span className="text-xs text-secondary">📍 {a.location}</span>
              </span>
            </div>
          ))}
        </section>
      ))}

      <Tabbar />
    </div>
  )
}
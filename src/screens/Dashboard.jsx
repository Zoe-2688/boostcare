import { patients } from '../data/patients'
import PatientCard from '../components/PatientCard'

export default function Dashboard() {
  // datos derivados
  const enRiesgo = patients
    .filter(p => p.level !== 'high')
    .sort((a, b) => a.adherence - b.adherence)

  const visibles = enRiesgo.slice(0, 3)
  const estables = patients.filter(p => p.level === 'high')

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-24">

      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary">Hola, Dra. Ramírez</h1>
        <p className="text-sm text-secondary">
          Lunes 13 de julio · {enRiesgo.length} pacientes en alerta
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-secondary flex justify-between">
          <span>Pacientes en riesgo ({enRiesgo.length})</span>
          {enRiesgo.length > 3 && (
            <span className="text-action-primary">Ver todos →</span>
          )}
        </h2>
        {visibles.map(p => <PatientCard key={p.id} {...p} />)}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-secondary">Estables</h2>
        {estables.map(p => <PatientCard key={p.id} {...p} />)}
      </section>

      <nav className="
        fixed bottom-0 left-1/2 -translate-x-1/2
        w-full max-w-sm
        flex justify-between items-center
        bg-bg-default border-t border-border-default
        px-6 pt-3 pb-5
      ">
        <span className="text-xs font-semibold text-action-primary">Inicio</span>
        <span className="text-xs font-semibold text-secondary">Pacientes</span>
        <span className="text-xs font-semibold text-secondary">Agenda</span>
        <span className="text-xs font-semibold text-secondary">Perfil</span>
      </nav>
    </div>
  )
}
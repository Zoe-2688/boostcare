import { patients } from '../data/patients'
import PatientCard from '../components/PatientCard'
import Tabbar from '../components/Tabbar'
import { useNavigate } from 'react-router-dom'
import { appointments } from '../data/appointments'
import ResumenIA from '../components/ResumenIA'

export default function Dashboard() {
    // datos derivados
    const navigate = useNavigate()
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

            <ResumenIA patients={patients} />
            
            {/* Agenda de hoy */}
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-secondary">Agenda de hoy</h2>
                {appointments.filter(a => a.day.startsWith('Hoy')).map(a => (
                    <div key={a.id} className="flex items-center gap-3 bg-bg-default border border-border-default rounded-(--radius-md) p-4">
                        <span className="text-sm font-semibold text-action-primary bg-brand-subtle rounded-(--radius-sm) px-2 py-1">
                            {a.time}
                        </span>
                        <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-primary">{a.name}</span>
                            <span className="text-sm text-secondary">{a.reason}</span>
                            <span className="text-xs text-secondary"><span aria-hidden="true">📍</span> {a.location}</span>
                        </span>
                    </div>
                ))}
            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-secondary flex justify-between">
                    <span>Pacientes en riesgo ({enRiesgo.length})</span>
                    {enRiesgo.length > 3 && (
                        <span className="text-action-primary">Ver todos →</span>
                    )}
                </h2>
                {visibles.map(p => (
                    <PatientCard key={p.id} {...p} onClick={() => navigate(`/paciente/${p.id}`)} />
                ))}

            </section>

            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-secondary">Estables</h2>
                {estables.map(p => (
                    <PatientCard key={p.id} {...p} onClick={() => navigate(`/paciente/${p.id}`)} />
                ))}
            </section>

            <Tabbar />
        </div>
    )
}
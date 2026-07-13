import { patients } from '../data/patients'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function CaregiverView() {
    // el cuidador ve UN paciente: Cármen (id 4)
    const patient = patients.find(p => p.id === 4)
    const proximaToma = patient.meds[1]   // la de la noche
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-8">

            {/* saludo */}
            <header className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-primary">Hola, Marcos</h1>
                <p className="text-sm text-secondary">Cuidas a {patient.name}</p>
            </header>

            {/* estado del paciente — reusa el patrón de PatientCard */}
            <div className="flex items-center gap-3 bg-bg-default border border-border-default rounded-(--radius-lg) p-4">
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                    {patient.initials}
                </span>
                <span className="flex-1 flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-primary">{patient.name}</span>
                    <span className="text-sm text-secondary">{patient.detail}</span>
                </span>
                <Badge level={patient.level}>{patient.adherence}%</Badge>
            </div>

            {/* próxima toma */}
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-secondary">Próxima toma</h2>
                <div className="flex flex-col gap-0.5 bg-bg-default border border-border-default rounded-(--radius-md) px-4 py-3">
                    <span className="text-sm font-semibold text-primary">{proximaToma.name}</span>
                    <span className="text-sm text-secondary">Hoy · {proximaToma.schedule}</span>
                </div>
            </section>

            {/* aviso al médico */}
            <section className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold text-secondary">¿Notas algo diferente?</h2>
                <Button type="secondary" onClick={() => navigate('/cuidador/aviso-enviado')}>
                    Avisar a la Dra. Ramírez
                </Button>
            </section>
        </div>
    )
}
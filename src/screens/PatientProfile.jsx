import { useParams, useNavigate } from 'react-router-dom'
import { patients } from '../data/patients'
import Badge from '../components/Badge'
import Button from '../components/Button'

export default function PatientProfile() {
  const { id } = useParams()                    // lee el :id de la URL
  const navigate = useNavigate()
  const patient = patients.find(p => p.id === Number(id))

  if (!patient) return <p className="p-8 text-secondary">Paciente no encontrado</p>

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-8">

      {/* topbar */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm font-semibold text-primary text-left"
      >
        ← Perfil del paciente
      </button>

      {/* header del paciente */}
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

      {/* métricas */}
      {/* métricas */}
      <div className="flex gap-3">
        <div className="flex-1 flex flex-col items-center gap-1 bg-bg-default border border-border-default rounded-(--radius-md) p-3">
          <span className={`text-xl font-bold ${patient.level === 'high' ? 'text-success'
              : patient.level === 'medium' ? 'text-warning'
                : 'text-danger'
            }`}>
            {patient.adherence}%
          </span>
          <span className="text-xs text-secondary">Adherencia</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1 bg-bg-default border border-border-default rounded-(--radius-md) p-3">
          <span className="text-xl font-bold text-primary">{patient.meds.length}</span>
          <span className="text-xs text-secondary">Medicamentos</span>
        </div>
      </div>

      {/* medicamentos */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-semibold text-secondary">Medicamentos</h2>
        {patient.meds.map(med => (
          <div key={med.name} className="flex flex-col gap-0.5 bg-bg-default border border-border-default rounded-(--radius-md) px-4 py-3">
            <span className="text-sm font-semibold text-primary">{med.name}</span>
            <span className="text-sm text-secondary">{med.schedule}</span>
          </div>
        ))}
      </section>

      <Button onClick={() => navigate(`/paciente/${patient.id}/receta`)}>Nueva receta digital</Button>
    </div>
  )
}
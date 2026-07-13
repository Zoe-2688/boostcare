import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { patients } from '../data/patients'
import Input from '../components/Input'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Note from '../components/Note'

export default function NuevaReceta() {
  const { id } = useParams()
  const navigate = useNavigate()
  const patient = patients.find(p => p.id === Number(id))

  // el formulario vive en estado
  const [medicamento, setMedicamento] = useState('')
  const [dosis, setDosis] = useState('')
  const [indicaciones, setIndicaciones] = useState('')

  const puedeEnviar = medicamento && dosis   // regla simple de validación

  if (!patient) return <p className="p-8 text-secondary">Paciente no encontrado</p>

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-5 px-4 pt-14 pb-8">

      <button onClick={() => navigate(-1)} className="text-sm font-semibold text-primary text-left">
        ← Nueva receta
      </button>

      {/* contexto del paciente — seguridad clínica: siempre saber para quién */}
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

      <Input id="med" label="Medicamento" placeholder="Busca por nombre…"
        value={medicamento} onChange={e => setMedicamento(e.target.value)} />
      <Input id="dosis" label="Dosis" placeholder="10 mg"
        value={dosis} onChange={e => setDosis(e.target.value)} />
      <Input id="ind" label="Frecuencia e indicaciones" placeholder="1 comprimido cada 24 h, en ayunas"
        value={indicaciones} onChange={e => setIndicaciones(e.target.value)} />

      <Note>El paciente, su cuidador y la farmacia verán esta receta digital idéntica.</Note>

      <Button
        disabled={!puedeEnviar}
        onClick={() => navigate(`/paciente/${id}/receta-enviada`)}
      >
        Firmar y enviar receta
      </Button>
    </div>
  )
}
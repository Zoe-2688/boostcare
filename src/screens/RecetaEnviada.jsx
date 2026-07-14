import { useParams, useNavigate } from 'react-router-dom'
import { patients } from '../data/patients'
import Button from '../components/Button'

export default function RecetaEnviada() {
  const { id } = useParams()
  const navigate = useNavigate()
  const patient = patients.find(p => p.id === Number(id))

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col items-center justify-center gap-4 px-8 text-center">
      <span className="text-6xl text-success" aria-hidden="true">✓</span>
      <h1 className="text-xl font-bold text-primary">Receta enviada</h1>
      <p className="text-sm text-secondary">
        {patient?.name}, su cuidador y la farmacia ya pueden verla.
      </p>
      <Button className="w-72" onClick={() => navigate(`/paciente/${id}`)}>
        Volver al perfil
      </Button>
      <Button className="w-72" onClick={() => navigate('/dashboard')}>
        Volver al Dashboard
      </Button>
    </div>
  )
}
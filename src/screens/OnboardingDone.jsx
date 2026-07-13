import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function OnboardingDone() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col items-center justify-center gap-4 px-8 text-center">
      <span className="text-6xl text-success">✓</span>
      <h1 className="text-xl font-bold text-primary">¡Tu clínica está lista!</h1>
      <p className="text-sm text-secondary">Invitaste a 1 paciente. Cuando descargue Boost, verás su adherencia aquí.</p>
      <Button className="w-[300px]" onClick={() => navigate('/dashboard')}>Ir a mi Dashboard</Button>
    </div>
  )
}
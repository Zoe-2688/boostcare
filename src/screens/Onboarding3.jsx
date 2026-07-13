import { useNavigate } from 'react-router-dom'
import Progress from '../components/Progress'
import Input from '../components/Input'
import Button from '../components/Button'
import Note from '../components/Note'

export default function Onboarding3() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-bg-default max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-6">
      <Progress step={3} />
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary">Invita a tus pacientes</h1>
        <p className="text-sm text-secondary">Paso 3 de 3 · 30 segundos</p>
      </header>

      <Input id="paciente" label="Correo del paciente" placeholder="paciente@correo.com" />
      <Note>Tu paciente recibirá una invitación para descargar Boost gratis. Podrás invitar más desde el Dashboard.</Note>

      <Button onClick={() => navigate('/onboarding/listo')}>Enviar invitación</Button>
      <Button type="ghost" onClick={() => navigate('/onboarding/listo')}>Omitir por ahora</Button>
    </div>
  )
}
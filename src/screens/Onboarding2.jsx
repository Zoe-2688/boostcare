import { useNavigate } from 'react-router-dom'
import Progress from '../components/Progress'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Onboarding2() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-bg-default max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-6">
      <Progress step={2} />
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary">Crea tu perfil</h1>
        <p className="text-sm text-secondary">Paso 2 de 3 · 1 minuto</p>
      </header>

      <Input id="nombre" label="Nombre completo" placeholder="Dra. Carolina Ramírez" />
      <Input id="esp" label="Especialidad" placeholder="Medicina General" />
      <Input id="reg" label="N° de registro médico" placeholder="123456" />

      <Button onClick={() => navigate('/onboarding/3')}>Continuar</Button>
    </div>
  )
}
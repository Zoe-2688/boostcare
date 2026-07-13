import { useNavigate } from 'react-router-dom'
import Progress from '../components/Progress'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Onboarding1() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-bg-default max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-6">
      <Progress step={1} />
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-primary">Cuéntanos de tu clínica</h1>
        <p className="text-sm text-secondary">Paso 1 de 3 · 2 minutos</p>
      </header>

      <Input id="clinica" label="Nombre de la clínica" placeholder="Clínica San Rafael" />
      <Input id="correo" label="Correo de contacto" placeholder="contacto@clinica.com" />
      <Input id="tel" label="Teléfono" placeholder="+56 9 1234 5678" />

      <Button onClick={() => navigate('/onboarding/2')}>Continuar</Button>
    </div>
  )
}
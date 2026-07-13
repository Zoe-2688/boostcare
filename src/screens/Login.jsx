import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg-default max-w-sm mx-auto flex flex-col justify-center gap-4 px-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        <span className="text-accent-strong">Boost</span>
        <span className="text-primary">Care</span>
      </h1>

      <Input id="correo" label="Correo" placeholder="dra@clinica.com" />
      <Input id="password" label="Contraseña" type="password" placeholder="••••••••" />

      <Button onClick={() => navigate('/dashboard')}>Entrar</Button>
      <Button type="ghost">¿Olvidaste tu contraseña?</Button>
    </div>
  )
}
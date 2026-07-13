import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function AvisoEnviado() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col items-center justify-center gap-4 px-8 text-center">
      <span className="text-6xl text-success">✓</span>
      <h1 className="text-xl font-bold text-primary">Aviso enviado</h1>
      <p className="text-sm text-secondary">
        La Dra. Ramírez recibió tu mensaje y revisará el caso hoy.
      </p>
      <Button className="w-72" onClick={() => navigate('/cuidador')}>
        Volver
      </Button>
    </div>
  )
}
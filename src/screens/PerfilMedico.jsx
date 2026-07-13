import { useNavigate } from 'react-router-dom'
import Tabbar from '../components/Tabbar'

const opciones = ['Notificaciones', 'Ayuda y soporte', 'Datos personales']

export default function PerfilMedico() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-6 px-4 pt-14 pb-24">

      {/* header del médico */}
      {/* header del médico — horizontal, como en Figma */}
      <div className="flex items-center gap-3 pt-2">
        <span className="flex items-center justify-center w-[72px] h-[72px] shrink-0 rounded-full bg-green-100 text-green-800 text-2xl font-bold">
          CR
        </span>
      
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xl font-bold text-primary">Dra. Carolina Ramírez</h1>
        <p className="text-sm text-secondary">Geriatría · Clínica San Rafael</p>
      </div>
    </div>

      {/* plan */ }
  <div className="flex justify-between items-center bg-brand-subtle rounded-(--radius-md) px-4 py-3">
    <span className="text-sm font-semibold text-primary">Plan Pro</span>
    <span className="text-sm text-secondary">$59 · por médico al mes</span>
  </div>

  {/* opciones */ }
  <section className="flex flex-col gap-2">
    {opciones.map(op => (
      <div key={op} className="flex justify-between items-center bg-bg-default border border-border-default rounded-(--radius-md) px-4 py-4">
        <span className="text-base text-primary">{op}</span>
        <span className="text-secondary">›</span>
      </div>
    ))}
  </section>

  {/* cerrar sesión */ }
      <button
        onClick={() => navigate('/')}
        className="bg-bg-default border border-border-default rounded-(--radius-md) px-4 py-4 text-center text-danger font-semibold"
      >
        Cerrar sesión
      </button>

      <Tabbar />
    </div >
  )
}
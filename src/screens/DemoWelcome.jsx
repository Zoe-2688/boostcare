import { useNavigate } from 'react-router-dom'

export default function DemoWelcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col justify-center gap-6 px-6 py-12">

      <div className="flex flex-col gap-2 text-center">
        <span className="text-2xl font-bold">
          <span className="text-accent-strong">Boost</span>
          <span className="text-primary">Care</span>
        </span>
        <p className="text-sm text-secondary">
          Plataforma de salud que ayuda a los médicos a gestionar su agenda y monitorear
          la adherencia de sus pacientes (qué tan bien siguen su tratamiento).
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-primary text-center">
          Estás en una demo. Elige cómo explorarla:
        </p>

        {/* opción médico */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex flex-col gap-1 bg-bg-default border border-border-default rounded-(--radius-lg) p-4 text-left hover:bg-brand-subtle transition-colors"
        >
          <span className="text-sm font-semibold text-primary">👩‍⚕️ Soy médico/a</span>
          <span className="text-sm text-secondary">Explora como la Dra. Ramírez: agenda, pacientes y recetas.</span>
        </button>

        {/* opción cuidador */}
        <button
          onClick={() => navigate('/cuidador')}
          className="flex flex-col gap-1 bg-bg-default border border-border-default rounded-(--radius-lg) p-4 text-left hover:bg-brand-subtle transition-colors"
        >
          <span className="text-sm font-semibold text-primary">🤝 Soy cuidador/a</span>
          <span className="text-sm text-secondary">Monitorea a tu familiar y avisa al médico si notas algo.</span>
        </button>

        {/* ver landing */}
        <button
          onClick={() => navigate('/landing')}
          className="text-sm text-action-primary font-semibold text-center mt-2"
        >
          Ver la página de presentación →
        </button>
      </div>
    </div>
  )
}
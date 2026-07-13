import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import PatientCard from '../components/PatientCard'
import { patients } from '../data/patients'

export default function Landing() {
  const navigate = useNavigate()
  const demo = patients.find(p => p.id === 3)  // María, para la muestra

  return (
    <div className="bg-bg-default max-w-sm mx-auto flex flex-col">

      {/* nav */}
      <nav className="flex justify-between items-center px-4 py-3">
        <span className="text-xl font-bold">
          <span className="text-accent-strong">Boost</span>
          <span className="text-primary">Care</span>
        </span>
        <Button type="secondary" onClick={() => navigate('/login')}>Entrar</Button>
      </nav>

      {/* hero */}
      <section className="flex flex-col items-center gap-5 px-4 py-12 bg-brand-subtle text-center">
        <h1 className="text-3xl font-bold text-primary">Menos papeleo, más pacientes cuidados</h1>
        <p className="text-base text-secondary">
          Agenda, adherencia a medicación y recetas digitales en una sola plataforma.
        </p>
        <Button onClick={() => navigate('/onboarding/1')}>Prueba gratis 14 días</Button>
        <PatientCard {...demo} adherence={demo.adherence} />
      </section>
      {/* features */}
<section className="flex flex-col gap-4 px-4 py-12">
  <h2 className="text-xl font-bold text-primary text-center">Todo lo que tu consulta necesita</h2>
  {[
    { icon: '📅', title: 'Agenda inteligente', text: 'Tu día organizado: citas, recordatorios y huecos libres de un vistazo.' },
    { icon: '💊', title: 'Adherencia en tiempo real', text: 'Alertas cuando un paciente deja de tomar su medicación.' },
    { icon: '📝', title: 'Recetas digitales', text: 'Sin letra ilegible: paciente, cuidador y farmacia ven lo mismo.' },
  ].map(f => (
    <div key={f.title} className="flex flex-col gap-2 bg-surface rounded-(--radius-lg) p-4">
      <span className="text-2xl">{f.icon}</span>
      <span className="text-sm font-semibold text-primary">{f.title}</span>
      <span className="text-sm text-secondary">{f.text}</span>
    </div>
  ))}
</section>

{/* pricing */}
<section className="flex flex-col gap-4 px-4 py-12 bg-surface">
  <h2 className="text-xl font-bold text-primary text-center">Planes que crecen contigo</h2>
  {[
    { name: 'Básico', price: '$29', period: 'por médico · al mes', feats: ['Hasta 20 pacientes', 'Agenda y alertas', 'Recetas digitales'], featured: false, cta: 'Empezar' },
    { name: 'Pro', price: '$59', period: 'por médico · al mes', feats: ['Pacientes ilimitados', 'Recetas digitales', 'Análisis de adherencia con IA'], featured: true, cta: 'Empezar' },
    { name: 'Clínica', price: 'A medida', period: 'precio por volumen', feats: ['Médicos ilimitados', 'Facturación centralizada', 'Soporte dedicado'], featured: false, cta: 'Contactar' },
  ].map(plan => (
    <div key={plan.name} className={`flex flex-col gap-3 bg-bg-default rounded-(--radius-lg) p-5 ${
      plan.featured ? 'border-2 border-action-primary' : 'border border-border-default'
    }`}>
      <span className="text-sm font-semibold text-action-primary">{plan.name}</span>
      <span className="text-2xl font-bold text-primary">{plan.price}</span>
      <span className="text-sm text-secondary">{plan.period}</span>
      <div className="flex flex-col gap-1">
        {plan.feats.map(f => (
          <span key={f} className="text-sm text-primary">✓ {f}</span>
        ))}
      </div>
      <Button type={plan.featured ? 'primary' : 'secondary'} onClick={() => navigate('/onboarding/1')}>
        {plan.cta}
      </Button>
    </div>
  ))}
</section>

{/* CTA final */}
<section className="flex flex-col items-center gap-5 px-4 py-16 bg-action-primary text-center">
  <h2 className="text-xl font-bold text-on-brand">Empieza hoy: tu clínica configurada en 10 minutos</h2>
  <button
    onClick={() => navigate('/onboarding/1')}
    className="bg-bg-default text-action-primary font-semibold px-5 py-3 rounded-(--radius-md) w-[300px]"
  >
    Crear mi cuenta
  </button>
</section>

{/* footer */}
<footer className="px-4 py-6 text-center">
  <span className="text-xs text-secondary">BoostCare © 2026 · hola@boostcare.app</span>
</footer>

    </div>
  )
}
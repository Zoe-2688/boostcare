import Button from './components/Button'

export default function App() {
  return (
    <div className="min-h-screen bg-surface p-4 flex flex-col gap-3 max-w-sm">
      <h1 className="text-2xl font-bold text-primary">BoostCare 💚</h1>
      <Button>Continuar</Button>
      <Button type="secondary">Continuar</Button>
      <Button type="ghost">¿Olvidaste tu contraseña?</Button>
      <Button disabled>Continuar</Button>
    </div>
  )
}
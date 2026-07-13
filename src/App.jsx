import Button from './components/Button'
import Badge from './components/Badge'
import Input from './components/Input'
import PatientCard from './components/PatientCard'
import Note from './components/Note'

export default function App() {
  return (
    <div className="min-h-screen bg-surface p-4 flex flex-col gap-3 max-w-sm">
      <h1 className="text-2xl font-bold text-primary">BoostCare 💚</h1>
      <Button>Continuar</Button>
      <Button type="secondary">Continuar</Button>
      <Button type="ghost">¿Olvidaste tu contraseña?</Button>
      <Button disabled>Continuar</Button>
      <div className="flex gap-2">
        <Badge level="high">94%</Badge>
        <Badge level="medium">71%</Badge>
        <Badge level="low">43%</Badge>
      </div>
      <Input id="correo" label="Correo electrónico" placeholder="nombre@clinica.com" />
      <Input id="error-demo" label="Correo electrónico" placeholder="nombre@clinica.com" error="Correo no válido" />
      <Input id="disabled-demo" label="Correo electrónico" placeholder="nombre@clinica.com" disabled />
      <PatientCard initials="CM" name="Carlos Mendoza" detail="81 años · Alzheimer temprano" level="low" adherence="43%" />
      <PatientCard initials="AT" name="Ana Torres" detail="67 años · Diabetes tipo 2" level="medium" adherence="71%" />
      <PatientCard initials="MG" name="María González" detail="72 años · Hipertensión" level="high" adherence="94%" />
      <Note>Tu paciente recibirá una invitación para descargar Boost gratis.</Note>
    </div>
  )
}
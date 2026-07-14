import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DemoWelcome from './screens/DemoWelcome'
import Landing from './screens/Landing'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import Pacientes from './screens/Pacientes'
import PatientProfile from './screens/PatientProfile'
import NuevaReceta from './screens/NuevaReceta'
import RecetaEnviada from './screens/RecetaEnviada'
import Agenda from './screens/Agenda'
import PerfilMedico from './screens/PerfilMedico'
import CaregiverView from './screens/CaregiverView'
import AvisoEnviado from './screens/AvisoEnviado'
import Onboarding1 from './screens/Onboarding1'
import Onboarding2 from './screens/Onboarding2'
import Onboarding3 from './screens/Onboarding3'
import OnboardingDone from './screens/OnboardingDone'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoWelcome />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/paciente/:id" element={<PatientProfile />} />
        <Route path="/paciente/:id/receta" element={<NuevaReceta />} />
        <Route path="/paciente/:id/receta-enviada" element={<RecetaEnviada />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/perfil" element={<PerfilMedico />} />
        <Route path="/cuidador" element={<CaregiverView />} />
        <Route path="/cuidador/aviso-enviado" element={<AvisoEnviado />} />
        <Route path="/onboarding/1" element={<Onboarding1 />} />
        <Route path="/onboarding/2" element={<Onboarding2 />} />
        <Route path="/onboarding/3" element={<Onboarding3 />} />
        <Route path="/onboarding/listo" element={<OnboardingDone />} />
      </Routes>
    </BrowserRouter>
  )
}
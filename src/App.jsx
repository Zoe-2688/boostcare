import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/paciente/:id" element={<PatientProfile />} />
        <Route path="/paciente/:id/receta" element={<NuevaReceta />} />
        <Route path="/paciente/:id/receta-enviada" element={<RecetaEnviada />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/perfil" element={<PerfilMedico />} />
        <Route path="/cuidador" element={<CaregiverView />} />
        <Route path="/cuidador/aviso-enviado" element={<AvisoEnviado />} />
      </Routes>
    </BrowserRouter>
  )
}
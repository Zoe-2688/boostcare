import { useState } from 'react'
import { patients } from '../data/patients'
import PatientCard from '../components/PatientCard'
import Input from '../components/Input'
import Tabbar from '../components/Tabbar'
import { useNavigate } from 'react-router-dom'

export default function Pacientes() {
    // ESTADO: lo que el usuario escribe, vive aquí
    const navigate = useNavigate()
    const [busqueda, setBusqueda] = useState('')

    const filtrados = patients.filter(p =>
        p.name.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-surface max-w-sm mx-auto flex flex-col gap-4 px-4 pt-14 pb-24">
            <h1 className="text-2xl font-bold text-primary">Mis pacientes</h1>

            <Input
                id="buscar"
                label="Buscar"
                placeholder="Buscar paciente…"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
            />

            {filtrados.map(p => (
                <PatientCard key={p.id} {...p} onClick={() => navigate(`/paciente/${p.id}`)} />
            ))}
            {filtrados.length === 0 && (
                <p className="text-sm text-secondary text-center py-8">
                    No se encontraron pacientes con "{busqueda}"
                </p>
            )}

            <Tabbar />
        </div>
    )
}
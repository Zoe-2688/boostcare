/**
 * Datos de prueba — simula lo que un día devolverá la API real.
 * Contrato de datos: cada paciente = { id, name, detail, initials, level, adherence, meds }
 */

export const patients = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    detail: '81 años · Alzheimer temprano',
    initials: 'CM',
    level: 'low',
    adherence: 43,
    meds: [
      { name: 'Donepezilo 10 mg', schedule: '1 comprimido · ☀️ 08:00' },
      { name: 'Memantina 10 mg', schedule: '1 comprimido · 🌙 21:00' },
      { name: 'Vitamina D 1000 UI', schedule: '1 cápsula · con el desayuno' },
    ],
  },
  {
    id: 2,
    name: 'Ana Torres',
    detail: '67 años · Diabetes tipo 2',
    initials: 'AT',
    level: 'medium',
    adherence: 71,
    meds: [
      { name: 'Metformina 850 mg', schedule: '1 comprimido · ☀️ 08:00 y 🌙 20:00' },
      { name: 'Empagliflozina 10 mg', schedule: '1 comprimido · ☀️ 08:00' },
      { name: 'Atorvastatina 20 mg', schedule: '1 comprimido · con la cena' },
    ],
  },
  {
    id: 3,
    name: 'María González',
    detail: '72 años · Hipertensión',
    initials: 'MG',
    level: 'high',
    adherence: 94,
    meds: [
      { name: 'Losartán 50 mg', schedule: '1 comprimido · ☀️ 08:00' },
      { name: 'Amlodipino 5 mg', schedule: '1 comprimido · 🌙 21:00' },
      { name: 'Hidroclorotiazida 25 mg', schedule: '1 comprimido · ☀️ 08:00' },
    ],
  },
  {
    id: 4,
    name: 'Cármen Mercédes',
    detail: '62 años · Demencia frontotemporal',
    initials: 'CM',
    level: 'low',
    adherence: 40,
    meds: [
      { name: 'Sertralina 50 mg', schedule: '1 comprimido · ☀️ 08:00' },
      { name: 'Trazodona 50 mg', schedule: '1 comprimido · 🌙 22:00' },
      { name: 'Quetiapina 25 mg', schedule: '1 comprimido · 🌙 22:00' },
    ],
  },
]
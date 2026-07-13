/**
 * ResumenIA — resumen inteligente del día para el médico.
 * v1: генera el texto desde los datos (reglas).
 * v2 (post-deploy): la misma caja, pero el texto vendrá de una IA real
 *     vía Netlify Function. Solo cambia de dónde sale `resumen`.
 */

function generarResumen(patients) {
  const enRiesgo = patients.filter(p => p.level !== 'high')
  const critico = [...enRiesgo].sort((a, b) => a.adherence - b.adherence)[0]
  const estables = patients.filter(p => p.level === 'high').length

  if (enRiesgo.length === 0) {
    return 'Todos tus pacientes mantienen buena adherencia hoy. Sin alertas. 🌿'
  }

  return `${critico.name} es tu prioridad: ${critico.adherence}% de adherencia. ` +
    `Tienes ${enRiesgo.length} paciente(s) en riesgo y ${estables} estable(s). ` +
    `Revisa primero los tratamientos que no están funcionando.`
}

export default function ResumenIA({ patients }) {
  const resumen = generarResumen(patients)

  return (
    <div className="flex flex-col gap-2 bg-brand-subtle rounded-(--radius-md) p-4">
      <span className="flex items-center gap-2 text-xs font-semibold text-accent-strong">
        ✨ Resumen del día
      </span>
      <p className="text-sm text-primary">{resumen}</p>
    </div>
  )
}
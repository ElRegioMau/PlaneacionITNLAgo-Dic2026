import { evaluation } from '../data/evaluation'

export default function EvaluationCard() {
  return (
    <section className="evaluation-card" aria-label="Esquema de evaluación">
      <div>
        <span className="eyebrow">Evaluación por módulo</span>
        <h2>Construir cuenta tanto como practicar.</h2>
        <p>Cada módulo se evalúa con evidencia continua y un producto integrador funcional.</p>
      </div>
      <div className="evaluation-bars">
        {evaluation.map((item) => (
          <div className="evaluation-item" key={item.label}>
            <div><span>{item.label}</span><strong>{item.value}%</strong></div>
            <div className="bar-track"><span style={{ width: `${item.value}%` }} /></div>
          </div>
        ))}
      </div>
    </section>
  )
}

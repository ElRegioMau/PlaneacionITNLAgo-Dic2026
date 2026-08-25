import type { WeekPlan as WeekPlanType } from '../types/course'

const kindClass: Record<string, string> = {
  Práctica: 'kind-practice',
  Reto: 'kind-challenge',
  Datos: 'kind-data',
  IA: 'kind-ai',
  Diseño: 'kind-design',
  Laboratorio: 'kind-lab',
}

export default function WeekPlan({ week }: { week: WeekPlanType }) {
  return (
    <article className="week-card">
      <div className="week-header">
        <span>Semana {week.number}</span>
        <strong>{week.focus}</strong>
      </div>
      <div className="activity-list">
        {week.activities.map((activity, index) => (
          <div className="activity-item" key={`${activity.title}-${index}`}>
            <span className={`kind-badge ${kindClass[activity.kind] ?? ''}`}>{activity.kind}</span>
            <div>
              <strong>{activity.title}</strong>
              <p>{activity.description}</p>
              {activity.image && (
                <img
                  className="activity-image"
                  src={activity.image}
                  alt={activity.imageAlt ?? ''}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

import { ChevronDown, Download } from 'lucide-react'
import type { Activity, WeekPlan as WeekPlanType } from '../types/course'
import ResourceDetails from './ResourceDetails'

const kindClass: Record<string, string> = {
  Práctica: 'kind-practice',
  Reto: 'kind-challenge',
  Datos: 'kind-data',
  IA: 'kind-ai',
  Diseño: 'kind-design',
  Laboratorio: 'kind-lab',
}

function ActivityDownloads({ downloads }: { downloads: NonNullable<Activity['downloads']> }) {
  return (
    <details className="activity-resources activity-downloads">
      <summary>
        <span>Descargar drivers para ESP32</span>
        <ChevronDown size={17} aria-hidden="true" />
      </summary>
      <div className="activity-downloads-content">
        {downloads.map((download) => (
          <a href={download.url} download={download.fileName} key={download.url}>
            <span>
              <strong>{download.label}</strong>
              <small>{download.fileName}</small>
            </span>
            <span className="activity-download-action">
              <Download size={16} aria-hidden="true" />
              Descargar
            </span>
          </a>
        ))}
      </div>
    </details>
  )
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
              {activity.image && activity.imageCollapsible && (
                <details className="activity-resources activity-image-details">
                  <summary>
                    <span>{activity.imageToggleLabel ?? 'Ver imagen de la actividad'}</span>
                    <ChevronDown size={17} aria-hidden="true" />
                  </summary>
                  <div className="activity-image-content">
                    <img
                      className="activity-image"
                      src={activity.image}
                      alt={activity.imageAlt ?? ''}
                    />
                  </div>
                </details>
              )}
              {activity.image && !activity.imageCollapsible && (
                <img
                  className="activity-image"
                  src={activity.image}
                  alt={activity.imageAlt ?? ''}
                />
              )}
              {activity.resources && (
                <ResourceDetails
                  resources={activity.resources}
                  toggleLabel={activity.resourceToggleLabel ?? 'Ver script y preguntas'}
                />
              )}
              {activity.downloads && <ActivityDownloads downloads={activity.downloads} />}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}

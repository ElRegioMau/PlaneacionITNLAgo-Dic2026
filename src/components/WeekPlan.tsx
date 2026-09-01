import { Check, ChevronDown, Copy, Download } from 'lucide-react'
import { useState } from 'react'
import type { Activity, WeekPlan as WeekPlanType } from '../types/course'

const kindClass: Record<string, string> = {
  Práctica: 'kind-practice',
  Reto: 'kind-challenge',
  Datos: 'kind-data',
  IA: 'kind-ai',
  Diseño: 'kind-design',
  Laboratorio: 'kind-lab',
}

function ActivityResources({
  resources,
  toggleLabel = 'Ver script y preguntas',
}: {
  resources: NonNullable<Activity['resources']>
  toggleLabel?: string
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyResource = async (content: string, index: number) => {
    await navigator.clipboard.writeText(content)
    setCopiedIndex(index)
    window.setTimeout(() => setCopiedIndex(null), 1800)
  }

  return (
    <details className="activity-resources">
      <summary>
        <span>{toggleLabel}</span>
        <ChevronDown size={17} aria-hidden="true" />
      </summary>
      <div className="activity-resources-content">
        {resources.map((resource, index) => (
          <section className="activity-resource" key={resource.label}>
            <div className="activity-resource-header">
              <strong>{resource.label}</strong>
              <button type="button" onClick={() => copyResource(resource.content, index)}>
                {copiedIndex === index ? <Check size={15} /> : <Copy size={15} />}
                {copiedIndex === index ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            {resource.format === 'ordered-list' ? (
              <ol className="activity-resource-list">
                {resource.content.split('\n').filter(Boolean).map((item) => <li key={item}>{item}</li>)}
              </ol>
            ) : resource.format === 'text' ? (
              <div className="activity-resource-text">
                {resource.content.split('\n').filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : (
              <pre><code className={resource.language ? `language-${resource.language}` : undefined}>{resource.content}</code></pre>
            )}
          </section>
        ))}
      </div>
    </details>
  )
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
                <ActivityResources
                  resources={activity.resources}
                  toggleLabel={activity.resourceToggleLabel}
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

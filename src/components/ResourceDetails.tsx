import { Check, ChevronDown, Copy } from 'lucide-react'
import { Fragment, useState } from 'react'
import type { ContentResource } from '../types/course'

function formatInlineText(text: string) {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>
    }

    return <Fragment key={`${part}-${index}`}>{part}</Fragment>
  })
}

export default function ResourceDetails({
  resources,
  toggleLabel,
  className = '',
}: {
  resources: ContentResource[]
  toggleLabel: string
  className?: string
}) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyResource = async (content: string, index: number) => {
    await navigator.clipboard.writeText(content)
    setCopiedIndex(index)
    window.setTimeout(() => setCopiedIndex(null), 1800)
  }

  return (
    <details className={`activity-resources ${className}`.trim()}>
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
                {resource.content.split('\n').filter(Boolean).map((item) => <li key={item}>{formatInlineText(item)}</li>)}
              </ol>
            ) : resource.format === 'text' ? (
              <div className="activity-resource-text">
                {resource.content.split('\n').filter(Boolean).map((paragraph) => <p key={paragraph}>{formatInlineText(paragraph)}</p>)}
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

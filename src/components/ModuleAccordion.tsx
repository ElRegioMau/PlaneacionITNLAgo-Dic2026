import { ChevronDown, Code2, Flag, Target } from 'lucide-react'
import { useState } from 'react'
import type { CourseModule } from '../types/course'
import ProjectCard from './ProjectCard'
import WeekPlan from './WeekPlan'

interface ModuleAccordionProps {
  module: CourseModule
  initiallyOpen?: boolean
}

export default function ModuleAccordion({ module, initiallyOpen = false }: ModuleAccordionProps) {
  const [open, setOpen] = useState(initiallyOpen)

  return (
    <article className={`module-card ${open ? 'is-open' : ''}`}>
      <button className="module-toggle" onClick={() => setOpen((current) => !current)} aria-expanded={open}>
        <span className="module-index">M{module.number}</span>
        <span className="module-heading">
          <small>Semanas {(module.number - 1) * 4 + 1}–{module.number * 4}</small>
          <strong>{module.title}</strong>
          <span>{module.description}</span>
        </span>
        <ChevronDown className="module-chevron" size={24} />
      </button>

      <div className="accordion-body" aria-hidden={!open}>
        <div className="accordion-inner">
          <div className="module-meta-grid">
            <section className="info-panel">
              <div className="section-kicker"><Target size={17} /> Objetivos</div>
              <ul>
                {module.objectives.map((objective) => <li key={objective}>{objective}</li>)}
              </ul>
            </section>
            <section className="info-panel">
              <div className="section-kicker"><Code2 size={17} /> Temas clave</div>
              <div className="chip-cloud">
                {module.topics.map((topic) => <span className="chip" key={topic}>{topic}</span>)}
              </div>
            </section>
          </div>

          <section className="weeks-section">
            <div className="section-heading-row">
              <div>
                <span className="eyebrow"><Flag size={15} /> Ruta de trabajo</span>
                <h3>Actividades por semana</h3>
              </div>
              <span className="activity-count">8 actividades · 50%</span>
            </div>
            <div className="weeks-grid">
              {module.weeks.map((week) => <WeekPlan key={week.number} week={week} />)}
            </div>
          </section>

          <ProjectCard project={module.project} />
        </div>
      </div>
    </article>
  )
}

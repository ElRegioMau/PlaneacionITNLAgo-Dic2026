import { ArrowLeft, BookOpenCheck, Cpu, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ModuleAccordion from '../components/ModuleAccordion'
import type { Course } from '../types/course'
import '../styles/course.css'

export default function CoursePage({ course }: { course: Course }) {
  return (
    <div className="page course-page">
      <section className="course-hero section-shell">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Todas las materias</Link>
        <div className="course-hero-grid">
          <div>
            <span className="eyebrow"><BookOpenCheck size={15} /> {course.degree}</span>
            <h1>{course.title}</h1>
            <p>{course.summary}</p>
          </div>
          <aside className="course-brief">
            <span className="course-brief-label"><Layers3 size={17} /> Estructura</span>
            <div><strong>4</strong><span>módulos</span></div>
            <div><strong>16</strong><span>semanas</span></div>
            <div><strong>32</strong><span>actividades</span></div>
            <div><strong>4</strong><span>proyectos</span></div>
          </aside>
        </div>
        <div className="approach-panel">
          <div className="approach-title"><Cpu size={20} /><span>{course.eyebrow}</span></div>
          <p>{course.approach}</p>
          <div className="tech-row">
            {course.technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>
      </section>

      <section className="section-shell modules-section">
        <div className="section-intro compact">
          <span className="eyebrow">Ruta del semestre</span>
          <h2>4 módulos · 4 semanas cada uno</h2>
          <p>Selecciona un módulo para desplegar objetivos, temas, actividades semanales y proyecto integrador.</p>
        </div>
        <div className="module-stack">
          {course.modules.map((module, index) => (
            <ModuleAccordion key={module.number} module={module} initiallyOpen={index === 0} />
          ))}
        </div>
      </section>
    </div>
  )
}

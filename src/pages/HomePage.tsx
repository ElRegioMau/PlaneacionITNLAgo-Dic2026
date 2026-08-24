import { ArrowRight, BrainCircuit, BriefcaseBusiness, Code2, GraduationCap, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import EvaluationCard from '../components/EvaluationCard'
import { courses } from '../data/courses'
import { profile } from '../data/profile'
import '../styles/home.css'

export default function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <span className="eyebrow"><Sparkles size={15} /> Planeación · Agosto–Diciembre 2026</span>
          <h1 className="hero-quote">Vivimos en una sociedad profundamente dependiente de la ciencia y la tecnología y en la que casi nadie sabe nada de estos temas.</h1>
          <p className="quote-author">— Carl Sagan</p>
          <p className="hero-lead">{profile.headline}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#materias">Explorar materias <ArrowRight size={18} /></a>
            <a className="ghost-button" href="#perfil">Conocer al profesor</a>
          </div>
        </div>

        <aside className="profile-orbit reveal delay-one" aria-label="Perfil docente resumido">
          <div className="orbit-glow" />
          <div className="profile-monogram">MA</div>
          <span className="profile-status"><span /> Docencia + industria + IA</span>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <div className="mini-stack">
            <span><Code2 size={16} /> Software</span>
            <span><BrainCircuit size={16} /> Inteligencia Artificial</span>
            <span><GraduationCap size={16} /> Docencia</span>
          </div>
        </aside>
      </section>

      <section className="section-shell principles-strip" aria-label="Principios de la planeación">
        <div><span>01</span><strong>Práctica primero</strong><p>Cada semana produce evidencia ejecutable.</p></div>
        <div><span>02</span><strong>IA con criterio</strong><p>Se usa para acelerar, analizar y probar; el alumno defiende el resultado.</p></div>
        <div><span>03</span><strong>Datos reales</strong><p>KPIs, telemetría, APIs, SQL y ML aparecen dentro de problemas de ingeniería.</p></div>
        <div><span>04</span><strong>Portafolio</strong><p>Los proyectos pueden vivir en GitHub como evidencia profesional.</p></div>
      </section>

      <section className="section-shell" id="perfil">
        <div className="profile-section">
          <div className="profile-copy">
            <span className="eyebrow"><BriefcaseBusiness size={15} /> Perfil docente</span>
            <h2>Experiencia profesional llevada al aula.</h2>
            <p>{profile.philosophy}</p>
            <div className="education-card">
              <GraduationCap size={22} />
              <div><span>Formación académica</span><strong>{profile.education}</strong></div>
            </div>
            <div className="skill-cloud">
              {profile.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <div className="timeline">
            {profile.experience.map((item) => (
              <article className="timeline-item" key={`${item.label}-${item.period}`}>
                <span className="timeline-dot" />
                <small>{item.period}</small>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell courses-section" id="materias">
        <div className="section-intro">
          <span className="eyebrow">Materias del semestre</span>
          <p>Selecciona tu materia para consultar objetivos, actividades y proyectos del semestre.</p>
        </div>
        <div className="course-card-grid">
          {courses.map((course, index) => (
            <Link className="course-card" to={`/materias/${course.slug}`} key={course.slug}>
              <span className="course-number">0{index + 1}</span>
              <div>
                <span className="course-degree">{course.degree}</span>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
              </div>
              <div className="course-card-footer">
                <span>4 módulos · 16 semanas</span>
                <span className="round-arrow"><ArrowRight size={18} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell evaluation-section">
        <EvaluationCard />
      </section>

      <section className="section-shell ai-manifesto">
        <div className="manifesto-icon"><BrainCircuit size={28} /></div>
        <div>
          <span className="eyebrow">Criterio de uso de IA</span>
          <h2>La IA puede escribir código. El ingeniero sigue siendo responsable de entenderlo.</h2>
          <p>Cuando una actividad use IA generativa, se valorará la especificación, la revisión, las pruebas, la trazabilidad de cambios y la capacidad de explicar el resultado.</p>
        </div>
      </section>
    </div>
  )
}

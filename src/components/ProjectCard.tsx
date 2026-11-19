import { Box, CheckCircle2, Sparkles } from 'lucide-react'
import type { ModuleProject } from '../types/course'
import ResourceDetails from './ResourceDetails'
import { ActivityDownloads } from './WeekPlan'

export default function ProjectCard({ project }: { project: ModuleProject }) {
  return (
    <section className="project-card">
      <div className="project-title-row">
        <div className="project-icon"><Sparkles size={22} /></div>
        <div>
          <span>Proyecto integrador · 50%</span>
          <h3>{project.title}</h3>
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      {project.resources && (
        <ResourceDetails
          resources={project.resources}
          toggleLabel={project.resourceToggleLabel ?? 'Ver requisitos del proyecto'}
          className="project-resources"
        />
      )}
      {project.downloads && <ActivityDownloads downloads={project.downloads} label="Descargar documentos y presentación" />}
      <div className="project-grid">
        <div>
          <div className="section-kicker"><CheckCircle2 size={17} /> Entregables</div>
          <ul>
            {project.deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <div className="section-kicker"><Box size={17} /> Competencias</div>
          <div className="chip-cloud">
            {project.skills.map((skill) => <span className="chip project-chip" key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

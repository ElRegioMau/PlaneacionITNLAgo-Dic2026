export type ActivityKind = 'Práctica' | 'Reto' | 'Datos' | 'IA' | 'Diseño' | 'Laboratorio'

export interface ContentResource {
  label: string
  language?: string
  format?: 'code' | 'text' | 'ordered-list'
  content: string
}

export interface Activity {
  title: string
  description: string
  kind: ActivityKind
  image?: string
  imageAlt?: string
  imageCollapsible?: boolean
  imageToggleLabel?: string
  resourceToggleLabel?: string
  resources?: ContentResource[]
  downloads?: {
    label: string
    fileName: string
    url: string
  }[]
}

export interface WeekPlan {
  number: number
  focus: string
  activities: [Activity, Activity]
}

export interface ModuleProject {
  title: string
  description: string
  deliverables: string[]
  skills: string[]
  resourceToggleLabel?: string
  resources?: ContentResource[]
}

export interface CourseModule {
  number: number
  title: string
  description: string
  objectives: string[]
  topics: string[]
  project: ModuleProject
  weeks: WeekPlan[]
}

export interface Course {
  slug: string
  shortName: string
  title: string
  degree: string
  eyebrow: string
  summary: string
  approach: string
  technologies: string[]
  modules: CourseModule[]
}

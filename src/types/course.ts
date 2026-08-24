export type ActivityKind = 'Práctica' | 'Reto' | 'Datos' | 'IA' | 'Diseño' | 'Laboratorio'

export interface Activity {
  title: string
  description: string
  kind: ActivityKind
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

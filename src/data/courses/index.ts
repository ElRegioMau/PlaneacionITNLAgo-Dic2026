import type { Course } from '../../types/course'
import iot from './iot-sistemas-embebidos.json'
import algoritmos from './algoritmos-lenguajes-programacion.json'
import programacionBasica from './programacion-basica-mecatronica.json'
import logicaFuncional from './programacion-logica-funcional.json'
import programacionVisual from './programacion-visual-semiconductores.json'

export const courses = [
  iot,
  algoritmos,
  programacionBasica,
  logicaFuncional,
  programacionVisual,
] as Course[]

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug)
}

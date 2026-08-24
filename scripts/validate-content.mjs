import fs from 'node:fs'
import path from 'node:path'

const coursesDir = path.resolve('src/data/courses')
const files = fs.readdirSync(coursesDir).filter((file) => file.endsWith('.json'))

if (files.length !== 5) throw new Error(`Se esperaban 5 materias y se encontraron ${files.length}.`)

for (const file of files) {
  const course = JSON.parse(fs.readFileSync(path.join(coursesDir, file), 'utf8'))
  if (course.modules.length !== 4) throw new Error(`${course.title}: debe tener 4 módulos.`)

  const weeks = course.modules.flatMap((module) => module.weeks)
  const weekNumbers = weeks.map((week) => week.number)
  if (JSON.stringify(weekNumbers) !== JSON.stringify([...Array(16)].map((_, i) => i + 1))) {
    throw new Error(`${course.title}: la numeración de semanas no es 1–16.`)
  }

  for (const week of weeks) {
    if (week.activities.length !== 2) throw new Error(`${course.title}, semana ${week.number}: debe tener 2 actividades.`)
  }
}

console.log('✓ Contenido validado: 5 materias · 20 módulos · 160 actividades · 20 proyectos')

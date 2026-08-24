import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <NavLink to="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-mark">MA</span>
          <span className="brand-copy">
            <strong>Planeación Docente</strong>
            <small>Ago–Dic 2026</small>
          </span>
        </NavLink>

        <button
          className="menu-button"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Inicio
          </NavLink>
          {courses.map((course) => (
            <NavLink
              key={course.slug}
              to={`/materias/${course.slug}`}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {course.shortName}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

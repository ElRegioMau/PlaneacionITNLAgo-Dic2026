import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import { courses } from './data/courses'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {courses.map((course) => (
          <Route
            key={course.slug}
            path={`/materias/${course.slug}`}
            element={<CoursePage course={course} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

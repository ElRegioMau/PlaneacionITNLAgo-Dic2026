import type { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

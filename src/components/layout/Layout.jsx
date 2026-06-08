import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children, fullBleed = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-obsidian">
      <Navbar />
      <main className={`flex-1 ${fullBleed ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

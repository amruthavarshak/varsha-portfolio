
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Resume from './pages/Resume'
import Hire from './pages/Hire'
import Settings from './pages/Settings'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<div className="container-section py-10">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}


import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useEffect, useState } from 'react'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 ${isActive ? 'text-indigo-600 dark:text-teal-300' : 'text-slate-700 dark:text-slate-200'}`}
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b border-slate-900/10 dark:border-slate-50/10 ${scrolled ? 'bg-white/70 dark:bg-slate-950/70' : 'bg-transparent'}`}>
      <div className="container-section flex items-center justify-between h-16">
        <a href="/" className="font-semibold">Varsha Kurella</a>
        <nav className="flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/experience">Experience</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/hire">Hire Me</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

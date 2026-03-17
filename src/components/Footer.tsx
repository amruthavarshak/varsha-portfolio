
import { Github, Linkedin, Mail } from 'lucide-react'
import site from '../../content/site.json'

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 dark:border-slate-50/10 mt-10">
      <div className="container-section py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} Varsha Kurella</p>
        <div className="flex gap-3 items-center">
          <a href="/settings" className="text-xs underline text-slate-500 hover:text-slate-700">Theme</a>
          {site.socials.github && (
            <a aria-label="GitHub" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800" href={site.socials.github} target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
          )}
          {site.socials.linkedin && (
            <a aria-label="LinkedIn" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800" href={site.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          )}
          {site.socials.email && (
            <a aria-label="Email" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800" href={site.socials.email}>
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

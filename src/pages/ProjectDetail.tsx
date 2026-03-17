
import Section from '../components/Section'
import SEO from '../components/SEO'
import { useParams } from 'react-router-dom'
import { content } from '../utils/content'
import Lightbox from '../components/Lightbox'
import { useState } from 'react'

export default function ProjectDetail() {
  const { slug } = useParams()
  const proj = content.projects.find((p) => p.slug === slug)
  const [open, setOpen] = useState<string | null>(null)

  if (!proj) return <Section><p>Project not found.</p></Section>

  return (
    <>
      <SEO title={`${proj.title} | Project`} description={proj.summary} canonical={location.origin + '/projects/' + proj.slug} />
      <Section title={proj.title}>
        <p className="text-slate-600 dark:text-slate-300 max-w-prose">{proj.longDescription}</p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
            <div className="text-xs text-slate-500">Role</div>
            <div className="text-sm font-medium">{proj.role}</div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
            <div className="text-xs text-slate-500">Features</div>
            <ul className="mt-1 text-sm list-disc ps-5 space-y-1">{proj.features?.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
            <div className="text-xs text-slate-500">Outcomes</div>
            <ul className="mt-1 text-sm list-disc ps-5 space-y-1">{proj.outcomes?.map((o) => <li key={o}>{o}</li>)}</ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
          {proj.tech.map((t) => <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800" key={t}>{t}</span>)}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proj.screenshots.map((s) => (
            <button key={s} onClick={() => setOpen(s)} className="aspect-video bg-slate-100 dark:bg-slate-800 rounded overflow-hidden focus:ring-2 focus:ring-indigo-500">
              <img src={s} alt={`${proj.title} screenshot`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          {proj.links.demo && <a className="px-4 py-2 rounded bg-indigo-600 text-white" href={proj.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
          {proj.links.repo && <a className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700" href={proj.links.repo} target="_blank" rel="noreferrer">Source</a>}
        </div>
      </Section>
      {open && <Lightbox src={open} onClose={() => setOpen(null)} />}
    </>
  )
}


import Section from '../components/Section'
import SEO from '../components/SEO'
import { content } from '../utils/content'
import { useMemo, useState } from 'react'

export default function Projects() {
  const p = content.profile
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const tags = useMemo(() => Array.from(new Set(content.projects.flatMap((p) => p.tech))), [])
  const filtered = useMemo(() => {
    return content.projects.filter((proj) => {
      const matchQ = [proj.title, proj.summary, proj.longDescription].join(' ').toLowerCase().includes(query.toLowerCase())
      const matchT = !tag || proj.tech.includes(tag)
      return matchQ && matchT
    })
  }, [query, tag])

  return (
    <>
      <SEO
        title="Projects | Varsha Kurella"
        description="Selected frontend and e‑commerce projects using React, Redux, TypeScript, and modern UI architectures."
        canonical="https://yourdomain.com/projects"
      />
      <Section title="Projects">
        <div className="flex flex-wrap gap-2 mb-6">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…" className="px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent" />
          <button onClick={() => setTag(null)} className={`px-3 py-2 rounded border ${tag === null ? 'bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-700'}`}>All</button>
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)} className={`px-3 py-2 rounded border ${tag === t ? 'bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-700'}`}>{t}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <a key={proj.slug} href={`/projects/${proj.slug}`} className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow">

              <img
                src={(proj.screenshots && (proj.screenshots[1] || proj.screenshots[0])) || ''}
                alt={`${proj.title} thumbnail`}
                className="w-full aspect-video object-cover bg-slate-100 dark:bg-slate-800"
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold group-hover:text-indigo-600">{proj.title}</h3>
                  {proj.featured && <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40">Featured</span>}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{proj.summary}</p>
                <div className="mt-2 flex gap-2 flex-wrap text-xs text-slate-500">
                  {proj.tech.map((t) => <span key={t} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{t}</span>)}
                </div>
                {proj.outcomes?.length ? (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {proj.outcomes.slice(0, 2).map((o, i) => (
                      <div key={i} className="text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-200 px-2 py-1 rounded">{o}</div>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  )
}

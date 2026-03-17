
import Section from '../components/Section'
import SEO from '../components/SEO'
import { content } from '../utils/content'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  const p = content.profile
  return (
    <>
      <SEO
        title="Varsha Kurella | Senior Frontend Engineer (React, TypeScript)"
        description="Senior Frontend Engineer with 12+ years of experience building scalable React and e‑commerce applications."
        canonical="https://yourdomain.com/"
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-blob" aria-hidden></div>
        <div className="container-section py-24 sm:py-28 relative">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-4xl sm:text-6xl font-bold tracking-tight">
            {p.name}
          </motion.h1>
          <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">{p.title}</p>
          <p className="mt-5 max-w-2xl text-slate-700 dark:text-slate-200">{p.headline}</p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <a href={p.resumeUrl} className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500">Download CV</a>
            <Link to="/projects" className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">View Projects</Link>
            <Link to="/hire" className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Hire Me</Link>
            <Link to="/contact" className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Contact</Link>
          </div>
        </div>
      </section>
      <Section title="Featured Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.slice(0, 3).map((proj) => (
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
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  )
}

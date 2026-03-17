
import Section from '../components/Section'
import SEO from '../components/SEO'
import { content } from '../utils/content'

export default function Hire() {
  const p = content.profile
  const keyWins = [
    '≈60% improvement in code reusability via React component library',
    '≈30% faster page loads across browsers after performance tuning',
    '30+ user-facing features shipped for Oracle Cloud Commerce'
  ]

  return (
    <>
      <SEO title={`Hire | ${p.name}`} description={`Quick highlights and contact for ${p.name}`} canonical={location.origin + '/hire'} />
      <Section title="Why hire me?">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Core strengths</h3>
            <ul className="list-disc ps-5 space-y-1 text-sm">
              {p.strengths?.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Key wins</h3>
              <ul className="list-disc ps-5 space-y-1 text-sm">
                {keyWins.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">Based in {p.location}. Available: {p.availability || 'Ask for availability'}.</p>
            <div className="mt-3 flex gap-3">
              <a className="px-4 py-2 rounded bg-indigo-600 text-white" href="/resume">View Resume</a>
              <a className="px-4 py-2 rounded border border-slate-300 dark:border-slate-700" href={`mailto:${p.email || 'varsha@example.com'}`}>Email me</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

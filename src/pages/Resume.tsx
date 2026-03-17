
import Section from '../components/Section'
import SEO from '../components/SEO'
import { content } from '../utils/content'
import { generateResumePDF } from '../utils/pdf'

export default function Resume() {
  const p = content.profile
  return (
    <>
      <SEO
        title="Resume | Varsha Kurella"
        description="Resume of Varsha Kurella, Senior Frontend Engineer with 12+ years of experience."
        canonical="https://yourdomain.com/resume"
      />

      <Section title="Resume">
        <div className="max-w-3xl">
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="text-slate-600 dark:text-slate-300">{p.title} · {p.location}</p>
          {p.email && <p className="text-slate-600 dark:text-slate-300">{p.email}</p>}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm">{p.summary}</p>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Experience (highlights)</h4>
            <ul className="list-disc ps-5 space-y-2 text-sm">
              {content.experience.timeline.map((r) => (
                <li key={r.company + r.date}><span className="font-medium">{r.role}</span> — {r.company} <span className="text-slate-500">({r.date})</span></li>
              ))}
            </ul>
          </div>
          <button onClick={generateResumePDF} className="mt-8 px-4 py-2 rounded bg-indigo-600 text-white">Download PDF</button>
        </div>
      </Section>
    </>
  )
}

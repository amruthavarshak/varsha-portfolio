
import Section from '../components/Section'
import SEO from '../components/SEO'
import { content } from '../utils/content'
import SkillMatrix from '../components/SkillMatrix'
import Timeline from '../components/Timeline'

export default function About() {
  const p = content.profile
  const skills = content.skills
  const exp = content.experience
  return (
    <>
      <SEO title={`About | ${p.name}`} description={p.summary} canonical={location.origin + '/about'} />
      <Section title="About">
        <div className="mt-8 grid sm:grid-cols-3 gap-6 items-start">
          <div className="sm:col-span-2">
            <p className="max-w-prose text-slate-700 dark:text-slate-200">{p.summary}</p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Strengths</h3>
              <ul className="list-disc ps-5 space-y-1 text-sm">
                {p.strengths?.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden"></div>
          </div>
        </div>
      </Section>
      <Section title="Skills">
        {skills.categories.map((cat) => (
          <div key={cat.category} className="mb-6">
            <h3 className="font-semibold mb-3">{cat.category}</h3>
            <SkillMatrix skills={cat.items} />
          </div>
        ))}
      </Section>
      <Section title="Timeline">
        <Timeline items={exp.timeline} />
      </Section>
    </>
  )
}

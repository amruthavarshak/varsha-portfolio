
import Section from '../components/Section'
import SEO from '../components/SEO'
import Timeline from '../components/Timeline'
import { content } from '../utils/content'

export default function Experience() {
  const p = content.profile
  const exp = content.experience
  return (
    <>
      <SEO title={`Experience | ${p.name}`} description="Work history and achievements" canonical={location.origin + '/experience'} />
      <Section title="Experience">
        <Timeline items={exp.timeline} />
      </Section>
    </>
  )
}


import Section from '../components/Section'
import SEO from '../components/SEO'
import ThemePresets from '../components/ThemePresets'

export default function Settings() {
  return (
    <>
      <SEO title="Theme Settings" description="Choose a color preset" canonical={location.origin + '/settings'} />
      <Section title="Theme Presets">
        <ThemePresets />
      </Section>
    </>
  )
}

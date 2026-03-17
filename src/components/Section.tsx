
export default function Section({ id, title, children }: { id?: string; title?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-section py-12 sm:py-16">
      {title && <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">{title}</h2>}
      {children}
    </section>
  )
}

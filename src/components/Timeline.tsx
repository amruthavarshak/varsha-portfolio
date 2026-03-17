
export type TimelineItem = { company?: string; role?: string; title?: string; date?: string; description?: string; achievements?: string[] }
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-s border-slate-200 dark:border-slate-800">
      {items.map((it, idx) => (
        <li key={idx} className="ms-6 mb-8">
          <span className="absolute -start-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-500"></span>
          <h3 className="font-semibold">{it.title || `${it.role} · ${it.company}`}</h3>
          {it.date && <time className="text-xs text-slate-500">{it.date}</time>}
          {it.description && <p className="mt-2 text-sm">{it.description}</p>}
          {it.achievements && (
            <ul className="list-disc ps-5 mt-2 space-y-1 text-sm">{it.achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>
          )}
        </li>
      ))}
    </ol>
  )
}

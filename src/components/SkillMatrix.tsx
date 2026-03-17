
type Skill = { name: string; level: number; years?: number; tags?: string[] }
export default function SkillMatrix({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {skills.map((s) => (
        <div key={s.name}>
          <div className="flex justify-between text-sm mb-1">
            <span>{s.name}</span>
            <span className="text-slate-500">{s.level}%{s.years ? ` · ${s.years}y` : ''}</span>
          </div>
          <div className="h-2 rounded bg-slate-200 dark:bg-slate-800">
            <div className="h-full rounded bg-indigo-500" style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

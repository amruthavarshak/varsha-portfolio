
export default function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 p-3 text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  )
}

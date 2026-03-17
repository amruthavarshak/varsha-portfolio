
import { useEffect, useState } from 'react'
import { PRESETS, applyPreset, initPreset } from '../styles/presets'

export default function ThemePresets() {
  const [current, setCurrent] = useState<string>('')
  useEffect(()=>{ initPreset(); setCurrent(localStorage.getItem('themePreset')||PRESETS[0].name) },[])
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {PRESETS.map(p => (
        <button key={p.name} onClick={() => { applyPreset(p.name); setCurrent(p.name) }} className={`rounded-xl border px-3 py-2 text-sm text-left hover:bg-slate-50 dark:hover:bg-slate-800 ${current===p.name? 'border-indigo-500':'border-slate-200 dark:border-slate-800'}`}>
          <div className="font-medium">{p.name}</div>
          <div className="mt-2 h-2 w-full rounded" style={{ backgroundColor: `hsl(${p.vars['--brand']})`}} />
        </button>
      ))}
    </div>
  )
}

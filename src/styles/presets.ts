
export type Preset = { name: string; vars: Record<string,string> }
export const PRESETS: Preset[] = [
  { name: 'Minimal (Indigo)', vars: { '--brand': '221 83% 53%' } },
  { name: 'Vibrant (Teal/Cyan)', vars: { '--brand': '173 80% 40%' } },
  { name: 'Corporate (Slate/Blue)', vars: { '--brand': '215 64% 45%' } },
  { name: 'Neon (Fuchsia)', vars: { '--brand': '296 72% 55%' } }
]
export function applyPreset(name: string) {
  const preset = PRESETS.find(p=>p.name===name) || PRESETS[0]
  for (const [k,v] of Object.entries(preset.vars)) document.documentElement.style.setProperty(k, v)
  localStorage.setItem('themePreset', name)
}
export function initPreset() { const stored = localStorage.getItem('themePreset'); if (stored) applyPreset(stored) }

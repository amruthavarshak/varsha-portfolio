
import { useEffect } from 'react'
export default function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }; document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey) }, [onClose])
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <img src={src} alt="Screenshot" className="max-h-full max-w-full rounded shadow-lg" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

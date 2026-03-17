
import { jsPDF } from 'jspdf'
import { content } from './content'
export async function generateResumePDF() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const p = content.profile
  const exp = content.experience
  const line = (y:number) => doc.line(40,y,555,y)
  doc.setFont('helvetica','bold').setFontSize(18).text(p.name, 40, 50)
  doc.setFont('helvetica','normal').setFontSize(11).text(`${p.title} · ${p.location}`, 40, 70)
  if (p.email) doc.text(p.email, 40, 85)
  line(98)
  doc.setFont('helvetica','bold').setFontSize(12).text('Summary',40, 118)
  doc.setFont('helvetica','normal').setFontSize(11).text(doc.splitTextToSize(p.summary || '', 515), 40, 136)
  doc.setFont('helvetica','bold').text('Skills',40, 190)
  let y = 208
  try {
    const skills = (await import('../../content/skills.json')).default as any
    for (const cat of skills.categories) {
      doc.setFont('helvetica','bold').text(`• ${cat.category}:`, 40, y)
      doc.setFont('helvetica','normal')
      const items = cat.items.map((i:any)=> i.name).join(', ')
      const wrapped = doc.splitTextToSize(items, 470)
      doc.text(wrapped, 80, y)
      y += 16 + (wrapped.length>1? (wrapped.length-1)*14 : 0)
    }
  } catch {}
  y += 10
  doc.setFont('helvetica','bold').text('Experience',40, y)
  y += 18
  doc.setFont('helvetica','normal')
  for (const role of exp.timeline) {
    doc.setFont('helvetica','bold').text(`${role.role} — ${role.company}`, 40, y)
    doc.setFont('helvetica','normal').text(role.date || '', 40, y+14)
    y += 30
    for (const a of (role.achievements||[])) {
      const bullet = doc.splitTextToSize(`• ${a}`, 515)
      doc.text(bullet, 40, y)
      y += 14 * bullet.length
      if (y > 750) { doc.addPage(); y = 50 }
    }
    y += 8
    if (y > 780) { doc.addPage(); y = 50 }
  }
  doc.save('Varsha_Kurella_Resume.pdf')
}

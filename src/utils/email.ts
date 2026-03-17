
import emailjs from 'emailjs-com'
export async function sendEmail(form: { name: string; email: string; message: string }) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (serviceId && templateId && publicKey) {
    return emailjs.send(serviceId, templateId, form, publicKey)
  }
  window.location.href = `mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'varsha@example.com'}?subject=Portfolio%20Contact&body=${encodeURIComponent(form.message)}%0A%0AFrom:%20${encodeURIComponent(form.name)}%20<${encodeURIComponent(form.email)}>`
  return Promise.resolve()
}

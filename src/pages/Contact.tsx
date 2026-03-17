
import Section from '../components/Section'
import SEO from '../components/SEO'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '../utils/email'
import { useState } from 'react'
import Toast from '../components/Toast'

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(10) })
type FormValues = z.infer<typeof schema>

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) })
  const [toast, setToast] = useState<{msg: string; type: 'success'|'error'} | null>(null)

  const onSubmit = async (data: FormValues) => {
    try { await sendEmail(data); setToast({ msg: 'Thanks! Your message has been sent.', type: 'success' }); reset() }
    catch { setToast({ msg: 'Something went wrong. Please try again.', type: 'error' }) }
    finally { setTimeout(() => setToast(null), 4000) }
  }

  return (
    <>
      <SEO title="Contact | Varsha Kurella" description="Get in touch" canonical={location.origin + '/contact'} />
      <Section title="Contact">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input {...register('name')} className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent" />
            {errors.name && <p className="text-sm text-rose-500">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" {...register('email')} className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent" />
            {errors.email && <p className="text-sm text-rose-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={6} {...register('message')} className="w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-700 bg-transparent" />
            {errors.message && <p className="text-sm text-rose-500">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Send'}</button>
          <a className="ml-3 text-sm underline" href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'varsha@example.com'}`}>Or email directly</a>
        </form>
      </Section>
      {toast && <Toast message={toast.msg} type={toast.type} />}
    </>
  )
}

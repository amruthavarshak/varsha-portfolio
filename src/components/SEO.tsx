import { Helmet } from 'react-helmet-async'
import { content } from '../utils/content'

export default function SEO({
  title,
  description,
  canonical
}: {
  title?: string
  description?: string
  canonical?: string
}) {
  const defaultTitle = `${content.profile.name} | Senior Frontend Engineer`
  const defaultDescription =
    'Senior Frontend Engineer with 12+ years of experience in React, TypeScript, and scalable UI systems. Portfolio of Varsha Kurella.'

  return (
    <Helmet>
      <title>{title ?? defaultTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ?? defaultTitle} />
      <meta property="og:description" content={description ?? defaultDescription} />
      <meta property="og:image" content="/og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ?? defaultTitle} />
      <meta name="twitter:description" content={description ?? defaultDescription} />
      <meta name="twitter:image" content="/og.png" />
    </Helmet>
  )
}


export function personJsonLd(profile: { name: string; title: string; location: string; email?: string }) {
  return { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: profile.title, address: profile.location, email: profile.email || undefined }
}

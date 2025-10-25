import { useEffect } from 'react'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }

    if (keywords) {
      let meta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'keywords'
        document.head.appendChild(meta)
      }
      meta.content = keywords
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = canonical
    }
  }, [title, description, keywords, canonical])

  return null
}

// Also export a named version for flexibility
export { SEO }

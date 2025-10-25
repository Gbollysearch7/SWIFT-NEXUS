import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonical?: string
}

const DEFAULT_TITLE = 'Swift Nexus - Marketing Consulting & Execution That Scales'
const DEFAULT_DESCRIPTION = 'We engineer growth that scales and influence that sticks. A marketing and influence consultancy that helps ambitious brands, leaders, and institutions turn strategy into measurable revenue and reputation.'
const DEFAULT_KEYWORDS = 'marketing consulting, digital marketing agency, SEO services, paid media, growth marketing, brand strategy, reputation management, marketing execution'
const DEFAULT_OG_IMAGE = 'https://swiftnexus.com/og-image.jpg'
const SITE_URL = 'https://swiftnexus.com'

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonical
}: SEOProps) {
  const fullTitle = title ? `${title} | Swift Nexus` : DEFAULT_TITLE
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  useEffect(() => {
    // Update title
    document.title = fullTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Standard meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    updateMetaTag('og:type', ogType, true)
    updateMetaTag('og:url', canonicalUrl, true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // Cleanup function (optional, but good practice)
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl])

  return null
}

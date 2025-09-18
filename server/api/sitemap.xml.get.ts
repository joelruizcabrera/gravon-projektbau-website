export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.siteUrl || 'https://gravon-projektbau.de'

    // Define all pages with their priorities and change frequencies
    const pages = [
        // Main pages (German - default locale)
        {
            loc: '/',
            priority: '1.0',
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
            images: ['/images/hero-bg.jpg', '/images/about-hero.jpg']
        },
        {
            loc: '/services',
            priority: '0.9',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/services-hero.jpg']
        },
        {
            loc: '/projects',
            priority: '0.8',
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
            images: ['/images/projects-hero.jpg']
        },
        {
            loc: '/about',
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/about-hero.jpg']
        },
        {
            loc: '/contact',
            priority: '0.8',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/contact-hero.jpg']
        },

        // Legal pages (lower priority, no index)
        {
            loc: '/privacy',
            priority: '0.3',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        },
        {
            loc: '/terms',
            priority: '0.3',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        },
        {
            loc: '/imprint',
            priority: '0.3',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        },

        // English pages
        {
            loc: '/en',
            priority: '0.9',
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
            images: ['/images/hero-bg.jpg']
        },
        {
            loc: '/en/services',
            priority: '0.8',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/services-hero.jpg']
        },
        {
            loc: '/en/projects',
            priority: '0.8',
            changefreq: 'weekly',
            lastmod: new Date().toISOString(),
            images: ['/images/projects-hero.jpg']
        },
        {
            loc: '/en/about',
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/about-hero.jpg']
        },
        {
            loc: '/en/contact',
            priority: '0.7',
            changefreq: 'monthly',
            lastmod: new Date().toISOString(),
            images: ['/images/contact-hero.jpg']
        },

        // English legal pages
        {
            loc: '/en/privacy',
            priority: '0.2',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        },
        {
            loc: '/en/terms',
            priority: '0.2',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        },
        {
            loc: '/en/imprint',
            priority: '0.2',
            changefreq: 'yearly',
            lastmod: new Date().toISOString()
        }
    ]

    // Helper function to generate alternate language links
    const generateAlternateLinks = (path: string) => {
        const isEnglish = path.startsWith('/en')
        const cleanPath = isEnglish ? path.replace('/en', '') : path

        return `
    <xhtml:link rel="alternate" hreflang="de" href="${baseURL}${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}/en${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}${cleanPath}" />`
    }

    // Helper function to generate image tags
    const generateImageTags = (images: string[] = []) => {
        return images.map(image => `
    <image:image>
      <image:loc>${baseURL}${image}</image:loc>
      <image:caption>GRAVON Projektbau</image:caption>
    </image:image>`).join('')
    }

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${baseURL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${generateAlternateLinks(page.loc)}${generateImageTags(page.images)}
  </url>`).join('\n')}
</urlset>`

    // Set appropriate headers
    setHeader(event, 'content-type', 'application/xml')
    setHeader(event, 'cache-control', 'public, max-age=86400') // Cache for 24 hours

    return sitemap
})
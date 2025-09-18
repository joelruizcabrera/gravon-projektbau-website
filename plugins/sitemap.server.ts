import {defineNitroPlugin} from "nitropack/runtime";

export default defineNitroPlugin((nitroApp) => {
    // Hook wird nur während der Generierung ausgeführt
    nitroApp.hooks.hook('render:route', (url, result, context) => {
        if (url === '/sitemap.xml') {
            const baseURL = process.env.NUXT_PUBLIC_SITE_URL || 'https://gravon-projektbau.de'

            // Alle Seiten mit Metadaten definieren
            const pages = [
                // Deutsche Hauptseiten
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

                // Deutsche Legal-Seiten
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

                // Englische Seiten
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

            // Hilfsfunktionen für XML-Generierung
            const generateAlternateLinks = (path: string) => {
                const isEnglish = path.startsWith('/en')
                const cleanPath = isEnglish ? path.replace('/en', '') : path

                return `
    <xhtml:link rel="alternate" hreflang="de" href="${baseURL}${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}/en${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}${cleanPath}" />`
            }

            const generateImageTags = (images: string[] = []) => {
                return images.map(image => `
    <image:image>
      <image:loc>${baseURL}${image}</image:loc>
      <image:caption>GRAVON Projektbau</image:caption>
    </image:image>`).join('')
            }

            // XML Sitemap generieren
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${baseURL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${generateAlternateLinks(page.loc)}${generateImageTags(page.images)}
  </url>`).join('\n')}
</urlset>`

            // Sitemap in das Result-Objekt setzen
            result.html = sitemap
        }
    })
})
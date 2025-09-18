// scripts/generate-sitemap-static.js
// Erstellt eine statische Sitemap für den Build-Prozess
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const baseURL = process.env.NUXT_PUBLIC_SITE_URL || 'https://gravon-projektbau.de'

console.log('🔧 Generiere statische Sitemap für Build...')

// Alle Seiten definieren - IDENTISCH zur API-Route
const pages = [
    // DEUTSCHE SEITEN (Default-Locale ohne Präfix)
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

    // ENGLISCHE SEITEN
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
    },

    // SPANISCHE SEITEN
    {
        loc: '/es',
        priority: '0.9',
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
        images: ['/images/hero-bg.jpg']
    },
    {
        loc: '/es/services',
        priority: '0.8',
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
        images: ['/images/services-hero.jpg']
    },
    {
        loc: '/es/projects',
        priority: '0.8',
        changefreq: 'weekly',
        lastmod: new Date().toISOString(),
        images: ['/images/projects-hero.jpg']
    },
    {
        loc: '/es/about',
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
        images: ['/images/about-hero.jpg']
    },
    {
        loc: '/es/contact',
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: new Date().toISOString(),
        images: ['/images/contact-hero.jpg']
    },
    {
        loc: '/es/privacy',
        priority: '0.2',
        changefreq: 'yearly',
        lastmod: new Date().toISOString()
    },
    {
        loc: '/es/terms',
        priority: '0.2',
        changefreq: 'yearly',
        lastmod: new Date().toISOString()
    },
    {
        loc: '/es/imprint',
        priority: '0.2',
        changefreq: 'yearly',
        lastmod: new Date().toISOString()
    }
]

// Hilfsfunktionen
const generateAlternateLinks = (path) => {
    let cleanPath = path

    if (path.startsWith('/en/')) {
        cleanPath = path.replace('/en', '')
    } else if (path.startsWith('/es/')) {
        cleanPath = path.replace('/es', '')
    }

    if (cleanPath === '') cleanPath = '/'

    return `
    <xhtml:link rel="alternate" hreflang="de" href="${baseURL}${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}/en${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseURL}/es${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseURL}${cleanPath}" />`
}

const generateImageTags = (images = []) => {
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

// Statische Sitemap erstellen
try {
    writeFileSync(resolve('public/sitemap.xml'), sitemap)
    console.log('✅ Statische Sitemap erstellt: public/sitemap.xml')
    console.log(`📊 ${pages.length} URLs generiert`)
    console.log(`   Deutsche URLs: ${pages.filter(p => !p.loc.includes('/') || (p.loc.startsWith('/') && !p.loc.startsWith('/en') && !p.loc.startsWith('/es'))).length}`)
    console.log(`   Englische URLs: ${pages.filter(p => p.loc.startsWith('/en')).length}`)
    console.log(`   Spanische URLs: ${pages.filter(p => p.loc.startsWith('/es')).length}`)
} catch (error) {
    console.error('❌ Fehler beim Erstellen der Sitemap:', error)
    process.exit(1)
}
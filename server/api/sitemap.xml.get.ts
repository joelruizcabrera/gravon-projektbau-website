export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.siteUrl

    const pages = [
        { loc: '/', priority: '1.0', changefreq: 'weekly' },
        { loc: '/services', priority: '0.8', changefreq: 'monthly' },
        { loc: '/projects', priority: '0.8', changefreq: 'monthly' },
        { loc: '/about', priority: '0.7', changefreq: 'yearly' },
        { loc: '/contact', priority: '0.6', changefreq: 'yearly' },
        { loc: '/en', priority: '1.0', changefreq: 'weekly' },
        { loc: '/en/services', priority: '0.8', changefreq: 'monthly' },
        { loc: '/en/projects', priority: '0.8', changefreq: 'monthly' },
        { loc: '/en/about', priority: '0.7', changefreq: 'yearly' },
        { loc: '/en/contact', priority: '0.6', changefreq: 'yearly' }
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${baseURL}${page.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.loc.startsWith('/en') ?
        `<xhtml:link rel="alternate" hreflang="de" href="${baseURL}${page.loc.replace('/en', '')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}${page.loc}" />` :
        `<xhtml:link rel="alternate" hreflang="de" href="${baseURL}${page.loc}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseURL}/en${page.loc}" />`
    }
  </url>`).join('\n')}
</urlset>`

    setHeader(event, 'content-type', 'text/xml')
    return sitemap
})
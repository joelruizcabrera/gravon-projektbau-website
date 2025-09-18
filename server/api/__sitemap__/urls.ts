import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'

export default defineSitemapEventHandler(async () => {
    const config = useRuntimeConfig()
    const baseURL = config.public.siteUrl || 'https://gravon-projektbau.de'

    return [
        {
            loc: '/',
        },
    ] satisfies SitemapUrlInput[]
})
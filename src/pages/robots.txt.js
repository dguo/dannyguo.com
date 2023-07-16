export async function get() {
    return {
        body: `User-agent: *

Sitemap: ${import.meta.env.SITE}/sitemap-index.xml
`
    };
}

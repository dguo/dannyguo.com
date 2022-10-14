import path from "node:path";

import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./**/*.md", { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
    rss({
        title: "Danny Guo",
        description: "Blog posts by Danny Guo",
        site: path.join(import.meta.env.SITE, "blog"),
        items: posts
            .filter(
                (post) =>
                    post.frontmatter.date &&
                    !post.frontmatter.draft &&
                    !post.frontmatter.unlisted
            )
            .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
            .map((post) => ({
                link: post.url,
                title: post.frontmatter.title,
                pubDate: post.frontmatter.date,
            })),
        customData: `<language>en-us</language><managingEditor>${
            import.meta.env.PUBLIC_AUTHOR_EMAIL
        } (${import.meta.env.PUBLIC_AUTHOR_NAME})</managingEditor>
        <webMaster>${import.meta.env.PUBLIC_AUTHOR_EMAIL} (${
            import.meta.env.PUBLIC_AUTHOR_NAME
        })</webMaster>`,
    });

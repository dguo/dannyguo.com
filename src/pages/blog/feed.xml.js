import path from "node:path";

import rss from "@astrojs/rss";

import { getBlogPostList } from "./_utils";

const posts = getBlogPostList();

export const get = () =>
    rss({
        title: "Danny Guo",
        description: "Blog posts by Danny Guo",
        site: path.join(import.meta.env.SITE, "blog"),
        items: posts.map((post) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date
        })),
        customData: `<language>en-us</language><managingEditor>${
            import.meta.env.PUBLIC_AUTHOR_EMAIL
        } (${import.meta.env.PUBLIC_AUTHOR_NAME})</managingEditor>
        <webMaster>${import.meta.env.PUBLIC_AUTHOR_EMAIL} (${
            import.meta.env.PUBLIC_AUTHOR_NAME
        })</webMaster>`,
        trailingSlash: false
    });

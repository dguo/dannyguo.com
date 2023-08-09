import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { h } from "hastscript";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        data.astro.frontmatter.minutesToRead = Math.ceil(readingTime.minutes);
        data.astro.frontmatter.numberOfWords = readingTime.words;
    };
}

export default defineConfig({
    site: "https://www.dannyguo.com",
    integrations: [
        mdx(),
        sitemap({
            filter: (page) =>
                !page.includes("blog/debates-as-competitions") &&
                !page.includes("blog/my-approach-to-code-review") &&
                !page.includes(
                    "blog/thinking-in-binaries-spectrums-and-dimensions"
                ),
            serialize: (item) => {
                // Remove trailing slashes
                item.url = item.url.replace(/\/$/, "");
                return item;
            }
        })
    ],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "append",
                    properties: { class: "anchor" },
                    content: (node) => {
                        return [
                            h("svg.icon.icon-link", { ariaHidden: "true" }, [
                                h("use", {
                                    href: "/images/icons.svg#icon-link"
                                })
                            ])
                        ];
                    },
                    test: ["h2", "h3", "h4", "h5", "h6"]
                }
            ]
        ],
        shikiConfig: {
            theme: "monokai"
        }
    }
});

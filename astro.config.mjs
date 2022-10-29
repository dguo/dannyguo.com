import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

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
    integrations: [sitemap()],
    markdown: {
        remarkPlugins: [remarkReadingTime],
        shikiConfig: {
            theme: "monokai",
        },
    },
});

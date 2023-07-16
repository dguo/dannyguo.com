/* Returns an array of blog posts, sorted with this logic:
     1. Draft posts in alphabetical order
     2. Regular and unlisted posts in reverse chronological order */
export function getBlogPostList(options?: {
    includeDraft?: boolean;
    includeUnlisted?: boolean;
}): { url: string; frontmatter: any }[] {
    const postsGlob = import.meta.glob("./**/*.(md|mdx)", {
        eager: true
    });
    const posts: any[] = Object.values(postsGlob);
    return posts
        .filter(
            (post) =>
                (!post.frontmatter.draft || options?.includeDraft) &&
                (!post.frontmatter.unlisted || options?.includeUnlisted)
        )
        .sort((a, b) =>
            (a.frontmatter.date &&
                b.frontmatter.date &&
                a.frontmatter.date < b.frontmatter.date) ||
            (!a.frontmatter.date &&
                !b.frontmatter.date &&
                a.frontmatter.title > b.frontmatter.title) ||
            (a.frontmatter.date && !b.frontmatter.date)
                ? 1
                : -1
        );
}

export function getBlogPosts(options?: {
    includeDraft?: boolean;
    includeUnlisted?: boolean;
}) {
    const postsGlob = import.meta.glob("./**/*.(md|mdx)", {
        eager: true,
    });
    const posts: any[] = Object.values(postsGlob);
    return posts
        .filter(
            (post) =>
                (!post.frontmatter.draft || options?.includeDraft) &&
                (!post.frontmatter.unlisted || options?.includeUnlisted)
        )
        .sort((a, b) =>
            a.frontmatter.date < b.frontmatter.date ||
            (a.frontmatter.date && !b.frontmatter.date)
                ? 1
                : -1
        );
}

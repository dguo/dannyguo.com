---
categories:
  - programming
date: "2018-06-14"
draft: true
tags:
  - jekyll
  - hugo
title: Migrating From Jekyll to Hugo
---

I recently migrated my personal website (the source code is on
[GitHub](https://github.com/dguo/dguo.github.io)) from
[Jekyll](https://jekyllrb.com/) to [Hugo](https://gohugo.io/). It was mostly
painless, and now I'm eager to write more often and put more content on my
website.

I originally chose to use Jekyll because it's
[supported](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
by [GitHub Pages](https://pages.github.com/). At the time, I also wasn't aware
of other static site generators, and Jekyll seemed to be widely used. But when I decided to put more effort into my website, I looked into other options to make sure that I have the best possible foundation to work with. Migrating my tiny site would be easier than trying to migrate later when my site has more content and features.

I looked into [all the popular static site
generators](https://www.staticgen.com/) and investigated Hugo more, based on its popularity. I don't anticipate adding much dynamic content to my website, or else I would have given more consideration to [Gatsby](https://www.gatsbyjs.org/) and [Next](https://nextjs.org/), both of which use [React](https://reactjs.org/).

I found quite a few posts from people who have migrated from Jekyll to Hugo:

* [Docs are Migrating from Jekyll to Hugo](https://kubernetes.io/blog/2018/05/05/hugo-migration/)
* [Bye Bye, Jekyll. Hello, Hugo.](https://ramhiser.com/post/2017-12-28-bye-bye-jekyll-hello-hugo/)
* [Switching to Hugo](https://jvns.ca/blog/2016/10/09/switching-to-hugo/)
* [Hugo vs. Jekyll: a showdown of static site generator](https://novelist.xyz/tech/hugo-vs-jekyll-static-site-generator/)
* [Migrating from Jekyll+Github Pages to Hugo+Netlify ](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/)

I also found a [Hacker News comment](https://news.ycombinator.com/item?id=12678013) by the [creator of Hugo](https://github.com/spf13) that includes what seems like a fair summary of Hugo's pros and cons:

> Hugo's key differentiators: 1. Ease of install 2. Speed (critical for large sites) 3. Integrated live-reload while editing in near realtime 4. Multilingual capabilities 5. Flexible 6. Very strong community 7. Very good & comprehensive documentation (but not perfect...yet)

> Hugo struggles with: 1. Not integrated with Github like Jekyll (though webhooks solve this to a large degree) 2. No plugin support 3. Media & Asset processing not tightly integrated

The cons were not important to me. I don't need GitHub integration because I switched my site hosting from GitHub Pages to [Netlify](https://www.netlify.com/). I don't think I would miss plugins because I skimmed through the Hugo documentation, and it seems to have many built-in features that might be plugins for other generators. And I don't need much of an asset pipeline because I want to keep my website as minimal and static as possible anyway.

## Speed

The most commonly cited advantage for Hugo is that it is much faster than Jekyll. Hugo is implemented in [Go](https://golang.org/), while Jekyll is implemented
in [Ruby](https://www.ruby-lang.org/).

Hugo builds my entire site in tens of milliseconds, and incremental builds are
also measured in milliseconds. Jekyll, in contrast, took a few seconds for a
full build, and incremental builds would still take over a second. While
Jekyll's times might not sound so bad right now, my site has almost no content. Many of the posts suggest that Jekyll's speed does not scale well, and it can take several minutes to build larger sites.

## Live reloading

While Jekyll's speed was not a pain point for me yet, I did miss [live
reloading](https://github.com/hasura/awesome-live-reloading). I followed this
[pull request](https://github.com/jekyll/jekyll/pull/5142) for adding live
reloading to Jekyll without having to use a
[plugin](https://github.com/RobertDeRose/jekyll-livereload).

It was released with [version
3.7.0](https://jekyllrb.com/news/2018/01/02/jekyll-3-7-0-released/) on January
2, 2018. However, I experienced an issue when I tried to use it. I would get
404 errors when pages were regenerated, presumably because the browser requests
the page before it is ready. There's an open [pull
request](https://github.com/jekyll/jekyll/pull/7064) to fix it.

This was the problem that really caused me to switch to Hugo. It has natively supported live reloading for much longer, so I was confident that the kinks would be worked out already.

## Migrating

[This](https://github.com/dguo/dguo.github.io/commit/91a60dea4414432cb315a1560327b62860b93183)
is the commit where I did the migration. Hugo has a
[command](https://gohugo.io/commands/hugo_import_jekyll/) to import from
Jekyll, so I ran that first. Most of the work was just converting the templates
to Hugo's [syntax](https://gohugo.io/templates/introduction/), which took a bit of time since I was not familiar at all with Go's templating libraries.

I also had to convert my [Sass](https://sass-lang.com/) files to raw CSS.
There's an [open issue](https://github.com/gohugoio/hugo/issues/4243) to
discuss adding native Sass support, but it wasn't a big deal for me because I
was barely using any Sass specific features to begin with.

I did find the layout system to be a little confusing in terms of figuring out exactly how.

## Built in features


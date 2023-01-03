---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2018-06-24"
tags:
  - jekyll
  - hugo
title: Migrating from Jekyll to Hugo
---

I recently migrated my personal website (the source code is on
[GitHub](https://github.com/dguo/dannyguo.com)) from
[Jekyll](https://jekyllrb.com/) to [Hugo](https://gohugo.io/). It was mostly
painless, and now I'm eager to write more often and put more content on my
website.

I originally chose to use Jekyll because it's
[supported](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
by [GitHub Pages](https://pages.github.com/). At the time, I also wasn't aware
of other static site generators, and Jekyll seemed to be widely used. But when
I recently decided to put more effort into my website, I looked into other
options to make sure that I have the best possible foundation to work with. I
figured migrating when my site is tiny would be easier than trying to migrate
later when my site has more content and features.

I looked into this [list of static site generators](https://www.staticgen.com/)
and decided to investigate Hugo more, mainly because of its popularity and
because I had read a fair amount of praise for it beforehand. I don't
anticipate adding much dynamic content to my website, or else I would have
given more consideration to [Gatsby](https://www.gatsbyjs.org/) and
[Next](https://nextjs.org/), both of which use [React](https://reactjs.org/).

I found quite a few posts from people who have migrated from Jekyll to Hugo:

* [Docs are Migrating from Jekyll to Hugo](https://kubernetes.io/blog/2018/05/05/hugo-migration/)
* [Bye Bye, Jekyll. Hello, Hugo.](https://ramhiser.com/post/2017-12-28-bye-bye-jekyll-hello-hugo/)
* [Switching to Hugo](https://jvns.ca/blog/2016/10/09/switching-to-hugo/)
* [Hugo vs. Jekyll: a showdown of static site
  generator](https://novelist.xyz/tech/hugo-vs-jekyll-static-site-generator/)
  (sic)
* [Migrating from Jekyll+Github Pages to Hugo+Netlify](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/)

I also found a [Hacker News
comment](https://news.ycombinator.com/item?id=12678013) by the [creator of
Hugo](https://github.com/spf13) that includes what seems like a fair summary of
Hugo's pros and cons:

> Hugo's key differentiators: 1. Ease of install 2. Speed (critical for large
> sites) 3. Integrated live-reload while editing in near realtime 4.
> Multilingual capabilities 5. Flexible 6. Very strong community 7. Very good &
> comprehensive documentation (but not perfect...yet)
>
> Hugo struggles with: 1. Not integrated with Github like Jekyll (though
> webhooks solve this to a large degree) 2. No plugin support 3. Media & Asset
> processing not tightly integrated

The cons are not important to me. I don't need GitHub integration because I
switched my website hosting from GitHub Pages to
[Netlify](https://www.netlify.com/). I don't think I will miss plugins because
Hugo seems to have many built-in features (like [RSS feed
generation](https://gohugo.io/templates/rss/)) that might be plugins for other
generators. And I don't need a sophisticated asset pipeline because I want to
keep my website relatively minimal and static anyway.

## Speed

The most commonly cited advantage for Hugo is that it is much faster than
Jekyll because Hugo is implemented in [Go](https://golang.org/), while Jekyll
is implemented in [Ruby](https://www.ruby-lang.org/).

Hugo builds my site in tens of milliseconds, and incremental builds are also
measured in milliseconds. Jekyll, in contrast, took a few seconds for a full
build, and even incremental builds took over a second. While Jekyll's times
might not sound so bad right now, my site doesn't have much content. According
to what I have read, Jekyll does not scale well, and it can take several
minutes to build larger sites.

## Live reloading

While Jekyll's speed was not a pain point for me yet, I did want [live
reloading](https://github.com/hasura/awesome-live-reloading). I followed this
[pull request](https://github.com/jekyll/jekyll/pull/5142) for adding live
reloading to Jekyll without having to use a
[plugin](https://github.com/RobertDeRose/jekyll-livereload). The feature was
released with [version
3.7.0](https://jekyllrb.com/news/2018/01/02/jekyll-3-7-0-released/) on January
2, 2018. However, I experienced an issue when I tried to use it. I would get
`404` errors when pages were regenerated, presumably because the browser requests
the page before it is ready. There is an open [pull
request](https://github.com/jekyll/jekyll/pull/7064) to fix it.

This was the problem that really pushed me to switch to Hugo. It has natively
supported live reloading for much longer, so I was confident that the kinks
would be worked out already. That has turned out to be true in practice. Live
reloading with Hugo works quickly and reliably.

## Migrating

[This](https://github.com/dguo/dannyguo.com/commit/91a60dea4414432cb315a1560327b62860b93183)
is the commit where I did the migration. Hugo has a
[command](https://gohugo.io/commands/hugo_import_jekyll/) to import from
Jekyll, so I ran that first. Most of the work after that was just converting
the templates to Hugo's [syntax](https://gohugo.io/templates/introduction/),
which took a bit of time since I was not familiar with Go's templating
libraries.

I also had to convert my [Sass](https://sass-lang.com/) files to raw CSS, but
this wasn't a big deal for me because I was barely using any Sass specific
features. There's an [open issue](https://github.com/gohugoio/hugo/issues/4243)
for adding native Sass support, and [this
tweet](https://twitter.com/GoHugoIO/status/1007361748201037824) confirms that
it's coming:

I did find the layout system to be a little confusing in terms of figuring out
how Hugo [determines](https://gohugo.io/templates/lookup-order/) which layouts
to use for which pages. I had to re-read the documentation a couple times
before I got it working.

## Convenience

Later on, there were multiple times when I discovered that Hugo has a
convenient method for doing something, like [adding Google
Analytics](https://gohugo.io/templates/internal/#google-analytics), [embedding
YouTube videos](https://gohugo.io/content-management/shortcodes/#youtube), or
[adding Disqus
comments](https://gohugo.io/content-management/comments/#add-disqus). It
wouldn't be difficult to do these things with Jekyll, but they would involve
adding boilerplate that isn't necessary with Hugo. Small but nice touches like
these give me confidence that I'll want to stick with Hugo for a long time.

## Conclusion

Jekyll is still a solid choice for creating a static website. It has a large
community and its own advantages (like a plugin system).  However, I'm happy
that I switched to Hugo and that it's in my development toolbox now. I
encourage anyone who maintains or needs a static website to check it out.

Continue the discussion on [Hacker
News](https://news.ycombinator.com/item?id=17387103), on
[Medium](https://medium.com/@dannyguo/migrating-from-jekyll-to-hugo-8c57c1e9722b),
or in the comments below.

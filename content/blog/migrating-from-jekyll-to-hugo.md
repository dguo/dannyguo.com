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
of other static site generators, and Jekyll seemed to be widely used by the
community. But when I decided to put more effort into my website, I figured it'd
be a good time to evaluate options so that I have a good foundation to work with.
Migrating a smaller site is easier.

I looked into [all the popular static site
generators](https://www.staticgen.com/). In particular, I considered Hugo and
[Hexo](https://hexo.io/).

https://www.optasy.com/blog/hugo-or-jekyll-which-static-site-generator-best-suits-your-website
https://kubernetes.io/blog/2018/05/05/hugo-migration/
https://ramhiser.com/post/2017-12-28-bye-bye-jekyll-hello-hugo/
https://jvns.ca/blog/2016/10/09/switching-to-hugo/
https://novelist.xyz/tech/hugo-vs-jekyll-static-site-generator/
https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/

## Speed

Hugo is implemented in [Go](https://golang.org/), while Jekyll is implemented
in [Ruby](https://www.ruby-lang.org/). Practically, this allows Hugo to be much
faster than Jekyll.

Hugo builds my entire site in tens of milliseconds, and incremental builds are
also measured in milliseconds. Jekyll, in contrast, took a few seconds for a
full build, and incremental builds would still take over a second. While
Jekyll's times might not sound so bad, it's still a plus for Hugo, and I've
read that websites with more content can take minutes to build with Jekyll.

## Live reloading

I followed this [pull request](https://github.com/jekyll/jekyll/pull/5142) for
adding live reloading to Jekyll without having to use a
[plugin](https://github.com/RobertDeRose/jekyll-livereload).

It was released with [version
3.7.0](https://jekyllrb.com/news/2018/01/02/jekyll-3-7-0-released/) on January
2, 2018.

However, I ran into this issue when I tried to use it. There's an open [pull
request](https://github.com/jekyll/jekyll/pull/7064) to fix it.

## Built in features

## Migrating

[This](https://github.com/dguo/dguo.github.io/commit/91a60dea4414432cb315a1560327b62860b93183)
is the commit where I did the migration. Hugo has a
[command](https://gohugo.io/commands/hugo_import_jekyll/) to import from
Jekyll, so I ran that first. Most of the work was just converting the templates
to Hugo's syntax. I also had to convert my [Sass](https://sass-lang.com/) files
to raw CSS. There's an [open
issue](https://github.com/gohugoio/hugo/issues/4243) to discuss adding native
Sass support, but it wasn't a big deal for me because my site is relatively
simple, and I wasn't using many Sass specific features.

## Hugo downsides

I find the layout system to be a little confusing.

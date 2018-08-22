---
categories:
  - programming
date: "2018-08-21"
draft: true
tags:
  - webdev
title: The State of Static Websites in 2018
---

There has traditionally been a clear distinction between static and dynamic
websites. Frameworks are available to facilitate building one or the other. For
static websites, there's Jekyll and Hugo. For dynamic websites, there's Ruby on
Rails and Django. Let's take a look at the current state of tooling for static
websites, and examine why the distinction between static and dynamic is
blurring.

## Static vs. Dynamic

The difference between a static website and a dynamic website is that a static
website serves the same assets to everyone. You can think of it like directly
copying pre-existing files (e.g. HTML, CSS, JavaScript) from the server to the
browser. A blog is a good fit for a static website because every visitor
expects to see the same content. In contrast, a dynamic website generates the
assets on the fly. A social network like Facebook would generally be a dynamic
website because different people see different content depending on who they
follow.

Dynamic websites allow for flexibility, but static websites have some important
advantages.

### Deployment and hosting simplicity

A static website is just a set of files, so deploying it can be as simple as
copying the files somewhere.

### Smaller surface area for security issues

### Potentially better performance

It's easier for a server to serve a file than to dynamically generate HTML.

Since a static website has the same assets for everyone, it's also easy to improve performance by serving the site directly from a content delivery network.

## SPAs and the JAMstack

[JAMstack](https://jamstack.org/)

[SPA](https://en.wikipedia.org/wiki/Single-page_application)

[PWA]()

[PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)

## Generation

* No framework
* [Hexo](https://hexo.io/)
* [Hugo](https://gohugo.io/)
* [Jekyll](https://jekyllrb.com/)
* [Metalsmith](http://www.metalsmith.io/)
* [Middleman](https://middlemanapp.com/)
* [Pelican](https://github.com/getpelican/pelican)

* [Next](https://nextjs.org/)
* [Gatsby](https://www.gatsbyjs.org/)
* [VuePress](https://vuepress.vuejs.org/)

For even more options, you can check out [StaticGen](https://www.staticgen.com/).

## Hosting

What to consider:

* SSL
* CDN
* Cache invalidation
* Prerendering
* Minification

Options:

* [Netlify](https://www.netlify.com/)
* [Bitbucket Cloud](https://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html)
* [GitHub Pages](https://pages.github.com/)
* [GitLab Pages](https://about.gitlab.com/features/pages/)
* [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
* [Firebase](https://firebase.google.com/docs/hosting/)

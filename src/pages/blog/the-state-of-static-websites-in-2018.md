---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date:
draft: true
tags:
  - webdev
title: The State of Static Websites in 2018
---

There has traditionally been a clear distinction between statically and
dynamically generated websites, but this distinction has become more nuanced as
more and more rendering is happening in the browser rather than in servers.
Let's review the difference between static and dynamic websites, take a look at
current options for tooling, and then go over the implications of more powerful
static websites for web development.

## Static vs. Dynamic

In the context of this post, the terms "static" and "dynamic" refer to how
websites are generated, not how they work in the browser. A static website
could be extremely interactive through JavaScript, and a dynamic website might
not have any interaction at all.

The difference between a static website and a dynamic website is that a static
website serves the same assets to everyone. You can think of it like directly
copying pre-existing files (e.g. HTML, CSS, and JavaScript) from the server to
the browser. A blog is a good fit for a static website because every visitor
expects to see the same content. In contrast, a dynamic website generates HTML
on the fly. Dynamic websites allow for flexibility, but static websites have
some important advantages.

### Simpler Deployment and Hosting

A static website is just a set of files, so deploying it can be as simple as
copying the files somewhere. Servers can deliver the website without executing
any additional code, so there is no need to have PHP, Python, Ruby, etc.
installed. There's also no need for extra infrastructure, like a database.

### Smaller Surface Area for Security Issues

Dynamic websites have to handle a wide range of potential security issues (like
[SQL injection](https://en.wikipedia.org/wiki/SQL_injection) and [cross-site
request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery))
because they run code in response to user actions and input. Static websites
can avoid many of these problems by default because they do not run code.

### Better Performance

It's generally faster for a server to just serve a file than to dynamically
generate HTML.

Since a static website uses the same assets for everyone, it's also easy to
improve performance by serving the entire site from a [content delivery
network](https://en.wikipedia.org/wiki/Content_delivery_network). While dynamic
websites can also utilize CDNs, even to cache dynamic content, managing cache
invalidation adds additional complexity and room for error.

## Tooling

These advantages mean that developers should only choose to use a dynamic
server when it's actually necessary. Plenty of websites don't need the
flexibility of [Django](https://www.djangoproject.com/),
[Express](https://expressjs.com/), [Rails](https://rubyonrails.org/), or
[Wordpress](https://wordpress.org/), and many tools are available to make
creating and hosting a static website as simple as possible.

### Generation

There are numerous frameworks for creating static websites, but keep in mind
that there's nothing wrong with sometimes forgoing frameworks entirely.
Depending on the website, writing raw HTML might be the best approach.

The benefit of frameworks is that they make it easy to solve common problems.
They tend to come with some sort of templating system. They can also make it
easy to do things like generating RSS feeds and sitemaps.

This list is not exhaustive. For even more options, check out
[StaticGen](https://www.staticgen.com/).

#### Jekyll

[Jekyll](https://jekyllrb.com/) was one of the first widely used frameworks, in
part because GitHub has a
[well-supported](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
Jekyll integration. It allows users to write content in
[Markdown](https://commonmark.org/), a common feature in static website
frameworks now. It is also advertised as being blog-aware, so it supports many
features that are associated with blogs, like tags and permalinks.

Jekyll is written in [Ruby](https://www.ruby-lang.org/) and has a rich
[plugin](https://jekyllrb.com/docs/plugins/) ecosystem. Check out [Awesome
Jekyll Plugins](https://github.com/planetjekyll/awesome-jekyll-plugins). It
also has many themes. See [jekyllthemes.io](https://jekyllthemes.io/) and
[jekyllthemes.org](http://jekyllthemes.org/).

#### Hexo

[Hexo](https://hexo.io/) is like Jekyll but runs on
[Node.js](https://nodejs.org/). It also has
[plugins](https://hexo.io/plugins/index.html) and
[themes](https://hexo.io/themes/).

#### Hugo

[Hugo](https://gohugo.io/) is written in Go.

* [Metalsmith](http://www.metalsmith.io/)
* [Middleman](https://middlemanapp.com/)
* [Pelican](https://github.com/getpelican/pelican)

* [Next](https://nextjs.org/)
* [Gatsby](https://www.gatsbyjs.org/)
* [VuePress](https://vuepress.vuejs.org/)

### Hosting

Static site generators produce a directory of files that have to be served
somehow. There are many options for static site hosting, and it can be very
cheap or even free. Besides cost, there are many factors to consier.

[All
websites](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
should be served through [HTTPS](https://en.wikipedia.org/wiki/HTTPS) now, even
if they don't handle credit card numbers or passwords. Chrome now marks all
HTTP websites as "not secure." Luckily, most static site hosts offer managed
SSL for free, so you don't even need to remember to renew your certificates.
It's frequently powered by [Let's Encrypt](https://letsencrypt.org/) behind the
scenes.

Static websites should be served through a CDN for increased performance.

* Cache invalidation
* Prerendering
* Minification
* CLI for deployment

#### Object Storage

[Object storage](https://en.wikipedia.org/wiki/Object_storage) is a basic
building block of cloud computing platforms, and many of them allow you to treat
a bucket as a static website. To deploy the website, you just have to update the
files in the bucket.

* [Amazon Web Services S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
* [Microsoft Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
* [Google Cloud Storage](https://cloud.google.com/storage/docs/hosting-static-website)

#### VCS

GitHub pioneered VCS-integrated static website hosting with [GitHub
Pages](https://pages.github.com/). It allows users to publish a directory of
static content as a website. The Jekyll integration also meant that GitHub
could automatically build and publish a Jekyll site without the user needing to
do any additional work. This is convenient, but keep in mind that the Jekyll
environment is out of your control. You cannot change the Jekyll version or use
plugins that they don't provide. They do [publish the
versions](https://pages.github.com/versions/) of all the dependencies.

GitHub Pages is free and supports [custom
domains](https://help.github.com/articles/using-a-custom-domain-with-github-pages/),
and
[HTTPS](https://help.github.com/articles/securing-your-github-pages-site-with-https/).

Bitbucket Cloud also has [free website
publishing](https://confluence.atlassian.com/bitbucket/publishing-a-website-on-bitbucket-cloud-221449776.html).

GitLab has [GitLab Pages](https://about.gitlab.com/features/pages/).

#### Dedicated Hosting

* [Netlify](https://www.netlify.com/)
* [Firebase](https://firebase.google.com/docs/hosting/)
* [Neocities](https://neocities.org/)

## Statically Generated but Dynamic

In the past, the fact that a website was statically generated also implied that
the website itself was also largely static. However, browsers have become more
powerful, and it's becoming more common to see websites that are rendered
and controlled by JavaScript.

JavaScript first appeared in 1995 to allow for client-side scripting in
[Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator).
[Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)) came along in 2005,
which allowed websites to update without re-rendering a full HTML page. This
development led to the rise of the [single-page
application](https://en.wikipedia.org/wiki/Single-page_application) (SPA)
pattern, in which the user never experiences a full page reload.

The culmination of these developments is the [JAMstack](https://jamstack.org/),
which refers to an architecture where dynamic rendering happens through
JavaScript running on the client, server-side actions are accessed through
resuable APIs, and templated markup is prebuilt at deploy time.

Some websites will need a data-only server anyway to power mobile apps. With a
statically generated website, it can use the same server.

[Formspree](https://formspree.io/)

[FormKeep](https://formkeep.com/)

[Wufoo](https://www.wufoo.com/)

[Disqus](https://disqus.com/)

[Remarkbox](https://www.remarkbox.com/)

[PWA](https://developers.google.com/web/progressive-web-apps/)

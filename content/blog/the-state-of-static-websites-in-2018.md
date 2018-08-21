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

## Generation

* No framework
* Jekyll
* Hugo
* Next
* Gatsby
* Hexo
* VuePress
* [Pelican](https://github.com/getpelican/pelican)

For even more options, you can check out [StaticGen](https://www.staticgen.com/).

## Hosting

What to consider:

* SSL
* CDN
* Cache invalidation
* Prerendering
* Minification

Options:

* Netlify
* GitHub Pages
* GitLab Pages
* AWS S3
* Firebase

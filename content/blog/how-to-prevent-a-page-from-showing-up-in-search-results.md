---
categories:
  - programming
date: 2021-05-08
draft: true
tags:
  - search-engines
title: How to Prevent a Page From Showing Up in Search Results
---

To prevent a website page from showing up in search results, either set a
`robots` [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
tag or send a `X-Robots-Tag` [HTTP
header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

So you can add this tag to the page:

```html
<meta name="robots" content="noindex" />
```

Or send this header for the page:

```txt
X-Robots-Tag: noindex
```

One benefit of the header approach is that you can use it for non-HTML content,
like PDFs or JSON.

The `noindex` value tells crawlers, such as Google and Bing, not to index the
page.

## Don't Use `robots.txt`

You might think to use `robots.txt` to disallow crawling, but that doesn't work
because then search engines can't see your directive to not index the page.  If
other websites link to your page, the crawler can still pick up your page and
index it.

## Directives

Besides `noindex`, you can send other directive values. However, not all
crawlers support the same set of values.

Check out [this documentation for which ones Google
supports](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives)
and [this documentation for which ones Bing
supports](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Specifying Crawlers

If you want different directives based on the specific crawler, you can specify
the user agent in the meta tag's name:

```html
<meta name="googlebot" content="noindex" />
```

Or in the header:

```txt
X-Robots-Tag: googlebot: noindex
```

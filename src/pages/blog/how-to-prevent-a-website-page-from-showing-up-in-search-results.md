---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2021-05-11"
tags:
  - seo
title: How to Prevent a Website Page From Showing Up in Search Results
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

```
X-Robots-Tag: noindex
```

One benefit of the header approach is that you can use it for non-HTML content,
like a PDF or JSON file.

The `noindex` value tells crawlers, such as Google and Bing, not to index the
page, so it won't show up in search results.

## Don't Use `robots.txt`

You might think to use the [robots exclusion
standard](https://en.wikipedia.org/wiki/Robots_exclusion_standard) (i.e.
`robots.txt`) to disallow crawling, but that [doesn't
work](https://developers.google.com/search/docs/advanced/robots/intro?rd=1#understand-the-limitations-of-a-robots.txt-file)
because then the crawlers can't see your directive to not index the page. You've
instructed them not to look at the page at all! So if other websites link to
your page, a crawler can still pick up and index the page.

The `robots.txt` file is for controlling *crawling*, not *indexing*.

## Directives

There are many possible directive values, and you can specify more than one by
separating them with commas:

* `all`: no restrictions (the default behavior)
* `noindex`: exclude the page from search results
* `nofollow`: don't follow the links in the page
* `none`: the same as `noindex, nofollow`
* `noarchive` or `nocache`: don't link to a cached version of the page
* `nosnippet`: don't show a description, snippet, thumbnail, or video preview of
  the page in search results
* `max-snippet:[length]`: limit a snippet to `[length]` number of characters
* `max-image-preview:[setting]`: set an image preview's maximum size, where
  `[setting]` can be `none`, `standard`, or `large`
* `max-video-preview:[length]`: limit a video preview to `[length]` number of
  seconds
* `notranslate`: don't link to a translation of the page
* `noimageindex`: don't index images on the page
* `unavailable_after:[datetime]`: exclude the page from search results after
  `[datetime]`, which should be in a standard format, such as [ISO
  8601](https://en.wikipedia.org/wiki/ISO_8601)

However, not all crawlers support all values. For example, check out [this
documentation for
Google](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#directives),
[this documentation for
Bing](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240),
and [this documentation for
Yandex](https://yandex.com/support/webmaster/controlling-robot/meta-robots.html).

## Specifying Crawlers

If you want to use different directives based on the specific crawler, you can
specify the [user agent](https://en.wikipedia.org/wiki/User_agent) in the meta
tag's name:

```html
<meta name="googlebot" content="noindex" />
<meta name="bingbot" content="nofollow" />
```

Or in the header value:

```
X-Robots-Tag: googlebot: noindex
X-Robots-Tag: bingbot: nofollow
```

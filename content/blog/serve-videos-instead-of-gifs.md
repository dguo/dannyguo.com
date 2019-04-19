---
categories:
  - programming
date:
draft: true
tags:
  - optimization
  - webdev
title: Serve Videos Instead of GIFs
---

[GIF](https://en.wikipedia.org/wiki/GIF)s can be great for serving up bite-sized
content, whether it's entertaining or informative. They are ubiquitous on the
internet, with [entire services](https://giphy.com/) dedicated to making and
sharing them. It's easy for web developers to embed them with a simple
[img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag. Yet
they have a significant drawback: massive file sizes. A single GIF can be larger
than the average website ([over 2
MB](https://www.keycdn.com/support/the-growth-of-web-page-size)).

## GIFs

> I don't care what anything was *designed* to do. I care about what it *can* do.
>
> -- [Gene Kranz](https://youtu.be/XLMDSjCzEx8?t=109) in Apollo 13

GIFs [were never
designed](https://www.wired.com/2017/05/gif-turns-30-ancient-format-changed-internet/)
to serve full videos, but a

The reason GIFs are so large is that they don't do any compression between
frames.

## Serving videos

It does take a bit more work to use the
[video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) tag
rather than `img`. To serve the video equivalent of a GIF, we can use markup
like this:

```html
<video autoplay loop muted playsinline>
    <source src="foobar.mp4" type="video/mp4">
    <p>Your browser doesn't support this embedded video.</p>
</video>
```

Using all of these video attributes gives us the same behavior that we expect
from a GIF.

The `playsinline` attribute is also necessary for [iOS in
particular](https://webkit.org/blog/6784/new-video-policies-for-ios/). See this
[question](https://stackoverflow.com/q/47655077/1481479).

We also provide a fallback message in case the browser can't play the video.

Chrome for Android [supports
videos](https://developers.google.com/web/updates/2016/07/autoplay).

You don't have to provide the `type` for the `source`, but doing so might allow
the browser to [save a network
request](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#Attributes).
If it can't handle the type, it can move on to the next source rather than
asking the server for the type.

Video behavior can also be affected by the user's power settings. For example,
videos won't autoplay on iOS if the user has power saving mode activated.
Instead, the user will see the controls and can manually play the video.

## Creating videos

To convert an existing GIF into a video file, you can use
[FFmpeg](https://ffmpeg.org/).

```sh
ffmpeg -f gif -i dancing-baby.gif dancing-baby.mp4
```

To take video screenshots, I use [Kap](https://getkap.co/). It supports saving
the videos in GIF, MP4, [WebM](https://en.wikipedia.org/wiki/WebM), or APNG
format.

I host some videos on [Imgur](https://imgur.com/), and I discovered that I
sometimes ran into quality issues when I tried uploading MP4s. The reason seems
to be that [MP4s get
downgraded](https://community.imgur.com/t/videos-losing-quality-on-upload/62258).
It's better to upload a GIF, and let Imgur take care of converting it to MP4.

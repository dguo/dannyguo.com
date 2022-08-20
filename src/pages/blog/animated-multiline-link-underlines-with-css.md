---
categories:
  - programming
date: "2018-12-19"
lastmod: "2019-01-29"
tags:
  - css
title: Animated Multiline Link Underlines with CSS
---

One benefit of building my [personal website](https://www.dannyguo.com/) from
scratch instead of using a [theme](https://themes.gohugo.io/) made by someone
else is that I can start from the browser's defaults and gradually add my own
flourishes. I strive to keep my site lean, but making it personal is also kind
of the point. There is a spectrum of gratuitous touches between the spartan
pages of [Hacker News](https://news.ycombinator.com/) and
[Craigslist](https://newyork.craigslist.org/) on one end and the sensory
overload of [old
MySpace](https://news.codecademy.com/myspace-and-the-coding-legacy/) on the
other.

I ran across a site that had fancy, animated underlines for links, and I wanted
to add a similar effect to my site. It was important to me to use a pure CSS
solution. For something as frivolous as this, I didn't want to add JavaScript
that has a risk of causing a performance issue or frustrating behavior (see
[scroll hijacking](https://envato.com/blog/scroll-hijacking/)).

Here's what the effect looks like now.

{{< video 2sKxENF >}}

## Implementation

The topic of drawing lines under text on the web can be [surprisingly
complicated](https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9),
depending on how far you are willing to
[stray](https://css-tricks.com/styling-underlines-web/) from `text-decoration:
underline` and which details (like [clearing
descenders](https://stackoverflow.com/q/40008990/1481479)) you care about.

I investigated a few approaches:

* [Animating Link Underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
* [CSS Animated Underline Links](http://www.cssportal.com/blog/css-animated-underline-links/)

Both of them essentially remove the default
[text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
and add a simulated border using
[pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
The border is then animated by [CSS
transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).
Unfortunately, these solutions have one drawback: they don't work properly if
the link spans more than one line. The underline only appears on the first line.

{{< video XWPhTQM >}}

I eventually found a [CodePen](https://codepen.io/shshaw/pen/pdyJBW) by
[Shaw](https://twitter.com/shshaw) that doesn't have this flaw. I modified the
CSS until I got to a solution that looks good to me.

{{< video 8pxxwkT >}}

Here is the relevant code. You can use [this
repl](https://repl.it/@dyguo/animated-multiline-link-underlines) to play around
with it.

```css
a {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

a:hover, a:focus {
    background-size: 100% 2px;
}
```

Let's go through this approach part by part. First, we turn off the default
`text-decoration` for links.

We want to use
[background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
because it can span multiple lines. While we could supply an actual image, we
only want to draw a line, so we use
[linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient),
which generates an image for us. Normally, it's used to create a gradient
between two different colors, but I want the underline to just be the same color
as the link, so I use
[currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword)
for both the beginning and the end of the gradient. `currentColor` tells the
browser to use the element's computed
[color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) property.

We use
[background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
to place the image in the bottom left corner. `0%` sets the horizontal position,
and `100%` sets the vertical position.

We turn off
[background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
to prevent it from creating multiple instances of the image to fill the entire
background of the link.

We use
[background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
to make the image zero pixels wide and two pixels tall. It has zero width
because the underline should only appear on hover.

We set a [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
on `background-size`, so any change to the property will take `0.3` seconds
to complete.

On link [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover), we
change the width of the image to `100%`, creating a full underline, and
`transition` takes care of the animation. As [nickels55
suggests](https://www.reddit.com/r/web_design/comments/a7y701/animated_multiline_link_underlines_with_css/ec6pwel/),
we also want the effect to happen on focus for those who use keyboard
navigation. Thanks to nickels55 for keeping
[accessibility](https://en.wikipedia.org/wiki/Web_accessibility) in mind.

And that's it! I was very happy with how small the
[commit](https://github.com/dguo/dannyguo.com/commit/14e51391329163fa414ac55d77fdf6da521ab644)
ended up being. If you'd like to add something similar to your site, feel free
to take this implementation, or check out some other [animated underline
effects](https://speckyboy.com/underline-text-effects-css/) for inspiration.

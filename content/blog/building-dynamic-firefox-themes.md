---
date: "2018-04-12"
title: Building Dynamic Firefox Themes
---

[Mozilla](https://www.mozilla.org/) is running a contest called the [Firefox
Quantum Extensions Challenge](https://extensionschallenge.com/) for building
extensions that take advantage of new capabilities in [WebExtension
APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions). One of the
categories is "Best Dynamic Theme." I love adding color to my setup, so I was
pretty motivated to participate. I ended up creating three extensions.

## Chromatastic
[Chromatastic](https://addons.mozilla.org/en-US/firefox/addon/chromatastic/)
([source code](https://github.com/dguo/chromatastic)) continuously cycles
through colors using a
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
in the background. This one was inspired by the lighting effects on my
[Razer](https://www.razer.com/gaming-keyboards) keyboard. I keep mine in what I
like to call [Nyan Cat](https://en.wikipedia.org/wiki/Nyan_Cat) mode:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Wd9PSgfVpiM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

I considered trying to replicate the effect, but it seems like it would be too
obnoxious in the browser. I'm also not sure if it's feasible with the current
API. The only method I can think of is to use an [animated
SVG](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/theme#Image_formats),
which is possible as of Firefox 59. I decided to do spectrum cycling instead:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pI96n8kjKW8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Here's a GIF of what it looks like:

![Chromatastic video](https://i.imgur.com/qRwh1WU.gif)

The color transitions occur fairly slowly, so the overall effect shouldn't be
distracting.

## Color Tailor
[Color Tailor](https://addons.mozilla.org/en-US/firefox/addon/color-tailor/)
([source code](https://github.com/dguo/color-tailor)) changes the browser theme
to the current website's "primary" color, as determined by the meta
[theme-color](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color)
element or by the dominant color in the
[favicon](https://en.wikipedia.org/wiki/Favicon). The dominant color is derived
by [color quantization](https://en.wikipedia.org/wiki/Color_quantization) using
the [node-vibrant](https://github.com/akfish/node-vibrant) package.

Color Tailor was inspired by an [iTunes
feature](https://stackoverflow.com/q/13637892/1481479) that would change UI
colors on the fly to match album covers. Chrome on Android does a [similar
thing](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)
with the toolbar color, and there is an [open
issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1098544) to do the same for
Firefox.

Here's the result:

![Color Tailor screenshot](https://i.imgur.com/uqJqd3A.png)

## Picture Paint
[Picture Paint](https://addons.mozilla.org/en-US/firefox/addon/picture-paint/)
([source code](https://github.com/dguo/picture-paint)) uses the color palette
of the current [National Geographic Photo of the
Day](https://www.nationalgeographic.com/photography/photo-of-the-day/).

![lava](https://i.imgur.com/uSqHCKQ.png)

Popup coloring:

![popup coloring](https://i.imgur.com/IGzEXXK.png)

Scroll for picture details:

![picture details](https://i.imgur.com/22etI5f.png)

Preferences:

![preferences](https://i.imgur.com/oHdTDf7.png)

![lightning](https://i.imgur.com/FvIy7CI.png)

![orangutan](https://i.imgur.com/rbEluSY.png)

![desert](https://i.imgur.com/geh3MSi.png)

![giraffes and gazelles](https://i.imgur.com/qD7zAJR.png)

![marble caves](https://i.imgur.com/TnlmeBk.png)

![octopus](https://i.imgur.com/xMu1nZq.png)

![Golden Gate Bridge](https://i.imgur.com/g3bfzRd.png)

## What I learned
These extensions are relatively simple, but I still learned quite a few things
in the process of making them.

### web-ext
Mozilla has created a command line tool called
[web-ext](https://github.com/mozilla/web-ext) to [streamline extension
development](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext).
I added it as a development dependency to use its `lint` and `build` commands.
I also wanted to use the `run` command for source file watching and automatic
extension reloading, but it doesn't work from within Docker. There is an [open
issue](https://github.com/mozilla/web-ext/issues/521) to allow web-ext to
attach to a remote Firefox instance, which would also fix this issue.

### Webpack
Firefox extensions have a default [Content Security
Policy](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_Security_Policy)
that disallows using unsafe practices such as
[`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).
However, many of the [Webpack source map
options](https://webpack.js.org/configuration/devtool/) use eval. I didn't want
to change the extension's CSP just for source maps, so I ended up using the
`inline-source-map` option.

### Theme API
The [theme
API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme)
offers a lot of granularity in terms of coloring individual browser elements,
and using it is straightforward. As of now, Firefox is the only browser that
supports dynamically updating the theme.

### Getting the favicon
At first, I tried to get the favicon location by looking for an [icon
reference](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_custom_icons_to_your_site)
in the page's head element and defaulting to `/favicon.ico` otherwise. This
worked for the most part, but then I learned that the extensions API provides a
`favIconUrl` property on the [tab
object](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/Tabs/Tab).
The caveat is that it might be an empty string if the tab is loading. As a
workaround, Color Tailor [listens for
updates](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/onUpdated)
to the tab info.

### HSV
My first thought for creating a rainbow effect with Chromatastic was to cycle through [RGB](https://en.wikipedia.org/wiki/RGB_color_model) combinations. But [it turns out](https://arduino.stackexchange.com/a/35791/45573) it's easier to create smooth transitions using [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) values.

### Getting the National Geographic photo
There doesn't seem to be an official API to get the National Geographic Photo
of the Day. I found an [unofficial
API](https://github.com/crisboarna/national-geographic-api) on npm, but it uses
a hardcoded API user/key. I dove into the Photo of the Day page's source code
to look for an alternative. I found a reference to
`https://www.nationalgeographic.com/photography/photo-of-the-day/_jcr_content/.gallery.2018-04.json`,
which looked promising. I tried retrieving it from the extension using
[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and it
worked without any authorization.

I also tried removing the `.2018-04` part from the URL, and to my mild
surprise, it worked! Leaving it off returns the current month, so Picture Paint
does that for the daily updates.

### Bad themes
During development, I tried to set a theme and forgot the `textcolor`
property. Apparently this property is
[required](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/theme#colors),
but
[`theme.update`](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/theme/update)
seems to fail silently when it is omitted. The theme doesn't change, and the
Promise resolves without any errors. It took some debugging before I re-read
the documentation and found the source of the problem. I would expect the
Promise to reject if the theme is invalid.

### Color quantization
Until I worked on these extensions, I didn't know that the technique of getting
color palettes from images is called [color
quantization](https://en.wikipedia.org/wiki/Color_quantization). I tried many
JS color quantization libraries and ended up picking two.

Picture Paint uses
[image-q](https://github.com/ibezkrovnyi/image-quantization), while Color
Tailor uses [node-vibrant](https://github.com/akfish/node-vibrant). In my
experience, using default settings, image-q produces more reasonable color
palettes but also takes much longer to run. node-vibrant uses the [Modified
Median Cut Quantization](http://www.leptonica.com/color-quantization.html)
(MMCQ) method, while image-q uses
[NeuQuant](https://www.researchgate.net/publication/232079905_Kohonen_neural_networks_for_optimal_colour_quantization)
([overview](https://scientificgems.wordpress.com/stuff/neuquant-fast-high-quality-image-quantization/)),
which builds a [Kohonen neural
network](https://en.wikipedia.org/wiki/Self-organizing_map).

Speed is more important for Color Tailor because the theme needs to update as
quickly as possible when the user loads a new page. Picture Paint, on the other
hand, can afford to take a few seconds to processs the image because it happens
in the background.

### Canvas permission issue
The issue that took me the longest to resolve occurred when I first tried to
use the color quantization libraries. I was getting a DOM security error, and I
eventually [figured out](https://stackoverflow.com/a/49696532/1481479) that I
needed the `"<all_urls>"`
[permission](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Match_patterns#%3Call_urls%3E)
in order to fully use the canvas API (which the libraries use). I stumbled on
the solution while reading through this [bug
report](https://bugzilla.mozilla.org/show_bug.cgi?id=1318565) regarding using
canvas in an extension.

### Popup coloring
Firefox 60 will [significantly
increase](https://blog.mozilla.org/addons/2018/04/02/extensions-firefox-60/)
the number of UI elements that can be themed. I changed my code to set popup
colors. It generally looks good for things like the Firefox menu, but when I
tried using a native [date
input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date),
the datepicker looked very bad in many cases and was sometimes downright
illegible. I considered not theming the popup, but I decided to keep using
[Pikaday](https://github.com/dbushell/Pikaday) instead of switching to the
native input.

This seems to be a general issue with theming. When I used themes in the
past, I never stuck with them for long because images can clash badly with
favicons and extension icons. Solid colors work much better in my opinion, but
there are still occassions when an icon gets washed out by the theme. I'd love
to see a good solution to this problem. Maybe just adding a very small white
margin to the icons would be sufficient.

### Imperative UI
It was nice to work on something with a very limited scope. Instead of using a
UI framework for something so small, I manually manipulated the DOM with
vanilla JS. After working in [React](https://reactjs.org/) for a while, it is
striking how backwards imperative manipulation feels now. Dealing with error
and loading states meant mental bookkeeping in terms of hiding and unhiding the
correct elements on each possible event. It's totally manageable at this scale,
but it still gave me flashbacks to dealing with [jQuery](https://jquery.com/)
[spaghetti](https://en.wikipedia.org/wiki/Spaghetti_code).

### Photon design system
Firefox has a new design system called
[Photon](https://design.firefox.com/photon/index.html). It's like Google's
[Material Design](https://material.io/). I referenced it for things like color
values when I was building popup and option pages. However, I was surprised
that there isn't a drop in stylesheet like
[Bootstrap](https://getbootstrap.com/) or [Semantic
UI](https://semantic-ui.com/). I found [this
issue](https://github.com/FirefoxUX/photon/issues/268) with a great question of
"How do you actually use this?", and it links to a [Photon Extension
Kit](https://github.com/FirefoxUX/photon-extension-kit) repo that seems to be
what I was looking for. It has an open [pull
request](https://github.com/FirefoxUX/photon-extension-kit/pull/1) to
"photonize" the CSS.

### Packaging source code
Firefox has a review process for extensions, and [providing the source
code](https://developer.mozilla.org/en-US/Add-ons/Source_Code_Submission) is
required when the final code is obfuscated or minified. I have a release
command that I run before uploading a new version, but I wasn't sure how to
package the source mode. It would be easy to create a ZIP of the directory, but
I wanted to avoid including files and directories that are in the `.gitignore`,
such as `node_modules`. It turned out that Git has an [archive
command](https://git-scm.com/docs/git-archive) that does exactly what I need.

## Conclusion
Building these extensions was fun. Please feel free to contact me or open an
issue if you have any suggestions or issues with any of them. Picture Paint
turned out better than I had anticipated, and that's the one I'll personally
use for now. Some of the National Geographic photos are truly stunning, and I
like getting a new theme every day.

I hope Mozilla has been getting a lot of submissions, and I look forward to
seeing what other people made!

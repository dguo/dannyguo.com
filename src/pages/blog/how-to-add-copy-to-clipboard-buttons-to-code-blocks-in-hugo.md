---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2019-03-22"
tags:
  - hugo
title: How to Add Copy to Clipboard Buttons to Code Blocks in Hugo
---

A small quality of life improvement for programming-related websites is to add
copy to clipboard buttons to code blocks. When a visitor wants to copy a code
example or a shell command, it's nice to be able to just hit a button rather
than manually select the text, right click, and press copy.

I use [Hugo](https://gohugo.io/) to build my [personal
website](https://www.dannyguo.com/). While Hugo has built-in support for [syntax
highlighting](https://gohugo.io/content-management/syntax-highlighting/), it
doesn't support copy buttons. Here is how I added the feature to my website. The
end result looks like this:

![code block with a copy button](https://i.imgur.com/8SBpdIT.png)

## Adding the buttons

I inspected the source of a page with code blocks and found that Hugo generates
each block with markup like this:

```html
<div class="highlight">
    <pre>
        <code>...</code>
    </pre>
</div>
```

Code blocks without syntax highlighting have the same structure but without the
surrounding highlight div. To account for both cases, I selected for
[code](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code) elements
that are children of
[pre](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre) elements.

```js
document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    var pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('highlight')) {
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);
    } else {
        pre.parentNode.insertBefore(button, pre);
    }
});
```

For many implementations of copy code buttons that I've seen, the button is
located in the top right or bottom right corner of the code block. However, I've
noticed that the button can cover up some of the code if the line is too long,
especially on mobile. To avoid this possibility, I placed each button before the
entire code block.

Some implementations only show the button when the user hovers over the code
block, but for discoverability, I left the buttons always visible.

For styling the buttons, I used this CSS:

```css
.copy-code-button {
    color: #272822;
    background-color: #FFF;
    border-color: #272822;
    border: 2px solid;
    border-radius: 3px 3px 0px 0px;

    /* right-align */
    display: block;
    margin-left: auto;
    margin-right: 0;

    margin-bottom: -2px;
    padding: 3px 8px;
    font-size: 0.8em;
}

.copy-code-button:hover {
    cursor: pointer;
    background-color: #F2F2F2;
}

.copy-code-button:focus {
    /* Avoid an ugly focus outline on click in Chrome,
       but darken the button for accessibility.
       See https://stackoverflow.com/a/25298082/1481479 */
    background-color: #E6E6E6;
    outline: 0;
}

.copy-code-button:active {
    background-color: #D9D9D9;
}

.highlight pre {
    /* Avoid pushing up the copy buttons. */
    margin: 0;
}
```

## Interacting with the clipboard

Next, I investigated how to [copy to the clipboard using
JavaScript](https://stackoverflow.com/q/400212/1481479). The most popular
library for doing so is [clipboard.js](https://clipboardjs.com/), but I wanted
to avoid bringing in a dependency if possible.

One way is to use
[execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)
with `document.execCommand('copy')`, which copies the current text selection.
[Under the hood](https://github.com/zenorocha/clipboard.js), clipboard.js uses
this method.

However, there is a newer approach, the [Clipboard
API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API). It has
[several
advantages](https://developers.google.com/web/updates/2018/03/clipboardapi):
it's asynchronous, takes arbitrary text/data (so it doesn't have to already
exist on the page), and has a better story for dealing with permissions.
Chrome, Firefox, and Opera [support
it](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#Browser_compatibility)
already. For other browsers, there is a
[polyfill](https://github.com/lgarron/clipboard-polyfill).

I put the code in a function and added a click handler. I used
[innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
to get the code to be copied. After the copy operation, the button displays
either an error message or a success message that lasts for two seconds.

```js {hl_lines=[1,"8-22",32]}
function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied!';

                setTimeout(function () {
                    button.innerText = 'Copy';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
}
```

Next, I added a check for whether or not the browser supports the Clipboard API.
If not, the script loads the polyfill from
[CDNJS](https://cdnjs.com/libraries/clipboard-polyfill).

```js
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
```

After the Clipboard API becomes ubiquitous, I'll remove the polyfill code.

## Smart loading with Hugo

After I got the functionality to work, I thought about how to include the
script. I had three options. The first was to indiscriminately include it on
every page. The script is small, but for optimization, I wanted to only include
it when it's actually needed, saving a bit of bandwidth and a network request
(or two, if the polyfill is needed).

The second option was to use a [custom Hugo front matter
variable](https://gohugo.io/content-management/front-matter/#user-defined).
With this method, I'd set a flag on every post that has a code block.  The
template could then check for this flag. However, this approach involves manual
work and runs the risk of me forgetting to do it.

The third option was to find a way to use Hugo to figure out which pages have at
least one code block. A regex seemed like the way to go. I used Hugo's
[findRE](https://gohugo.io/functions/findre/) function to determine if the
HTML seems to contain a `pre` element.

```go html template
{{ if (findRE "<pre" .Content 1) }}
    <script src="/js/copy-code-button.js"></script>
{{ end }}
```

I passed it a limit parameter of `1` because I only care if the page *has* a code
block or not, not the total number of code blocks.

Keep in mind that this script should be loaded after the page content,
preferably at the end of the body so that it doesn't block rendering. Otherwise,
the selector might run before the code blocks actually exist.

## Non-Hugo websites

This solution should easily work for non-Hugo websites as well. The only part of
the script that is specific to Hugo is the `pre > code` selector. Modifying the
selector and possibly where the button is inserted should be all that is needed.

## CodeCopy

[CodeCopy](https://github.com/zenorocha/codecopy) is a browser extension for
[Chrome](https://chrome.google.com/webstore/detail/codecopy/fkbfebkcoelajmhanocgppanfoojcdmg)
and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/codecopy/) that
adds copy buttons to code blocks on many websites that are likely to have them,
such as [GitHub](https://github.com/) and [Stack
Overflow](https://stackoverflow.com/). It's made by the [same
person](https://zenorocha.com/) behind clipboard.js.

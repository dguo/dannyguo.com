---
categories:
  -
date:
draft: true
tags:
  -
title: How to Add Copy to Clipboard Buttons to Code Blocks in Hugo
---

A small quality of life improvement for technical websites is to add copy to
clipboard buttons to code blocks. When a visitor wants to copy a code example
or a shell command, it's nice to be able to just hit a button rather than
manually select the text, right click, and press copy.

I use [Hugo](https://gohugo.io/) to build my [personal
website](https://www.dannyguo.com/). While Hugo has built-in support for [syntax
highlighting](https://gohugo.io/content-management/syntax-highlighting/), it
doesn't support copy buttons. Here is how I added the feature to my website.

## Adding the buttons

I first inspected the source of a page with code blocks and found that Hugo
generates each block with something like this:

```html
<div class="highlight">
    <pre>
        <code>...</code>
    </pre>
</div>
```

The `highlight` class gave me a selector to work with.

```js
document.querySelectorAll('.highlight').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    codeBlock.parentNode.insertBefore(button, codeBlock);
});
```

## Interacting with the clipboard

[Document.execCommand](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands)

[clipboard API](https://developers.google.com/web/updates/2018/03/clipboardapi)

[clipboard.js](https://github.com/zenorocha/clipboard.js/)

The native [Clipboard
API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

[clipboard-polyfill](https://github.com/lgarron/clipboard-polyfill)

[innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
gives me the code to be copied.

{{< highlight js "hl_lines=7-20" >}}
document.querySelectorAll('.highlight').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.innerText = 'Copy';

    button.addEventListener('click', function () {
        clipboard.writeText(codeBlock.innerText).then(function () {
            /* Chrome doesn't seem to blur automatically,
               leaving the button in a focused state */
            button.blur();

            button.innerText = 'Copied!';
            setTimeout(function () {
                button.innerText = 'Copy';
            }, 2000);
        }, function (error) {
            button.innerText = 'Error';
        });
    });

    codeBlock.parentNode.insertBefore(button, codeBlock);
});
{{< / highlight >}}

## Smart loading

After I got the functionality to work, I thought about how to include the
script. I had three options. The first was to indiscriminately include it on
every page. The script is small, but as a fun optimization exercise, I wanted to
only include it when it's actually needed.

The second option was to use a [custom front matter
variable](https://gohugo.io/content-management/front-matter/#user-defined).
With this method, I'd have to manually set a flag on every post that has a code
block. The template could then check for this flag. However, this approach runs
the risk of me forgetting to set the flag.

The third option was to find a way to use Hugo to figure out which pages have at
least one code block. A regex seemed like the way to go. Hugo's
[findRE](https://gohugo.io/functions/findre/) function can determine if the
HTML contains the text `class="highlight"`.

```html
{{ if (findRE "class=\"highlight\"" .Content 1) }}
    <script src="/js/copy-code-button.js"></script>
{{ end  }}
```

I pass it a limit parameter of `1` because I only care if the page has a code
block or not, not the total number of code blocks.

## Related

[CodeCopy](https://github.com/zenorocha/codecopy) is a browser extension that
adds copy buttons to code blocks on many websites that are likely to have them,
such as [GitHub](https://github.com/) and [Stack
Overflow](https://stackoverflow.com/).

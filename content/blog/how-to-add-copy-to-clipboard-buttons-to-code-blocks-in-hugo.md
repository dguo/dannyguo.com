---
categories:
  -
date:
draft: true
tags:
  -
title: How to Add Copy to Clipboard Buttons to Code Blocks in Hugo
---

A small quality of life improvement for technical pages is to add copy to
clipboard buttons to code examples. If a programmer has to copy a code example
or a shell command, it's nice to be able to just hit a button rather than
manually selecting the code.

I use Hugo to build my personal website, and while it has many features out of
the box, it doesn't support this one. Here is how I added it.

## Interacting with the clipboard

[Document.execCommand](https://developers.google.com/web/updates/2015/04/cut-and-copy-commands)

[clipboard API](https://developers.google.com/web/updates/2018/03/clipboardapi)

[clipboard.js](https://github.com/zenorocha/clipboard.js/)

The native [Clipboard
API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

According to [Can I use](https://caniuse.com/#feat=clipboard)

[clipboard-polyfill](https://github.com/lgarron/clipboard-polyfill)

Hugo natively supports [syntax
highlighting](https://gohugo.io/content-management/syntax-highlighting/).

## Smart loading

After I got the functionality to work, I thought about how to include the
scripts. I had three options.

The first was to indiscriminately include them on every page.

The second was to use a custom front matter variable.

The third was to find a way to use Hugo to figure out which pages need the
scripts.

## Related

[CodeCopy](https://github.com/zenorocha/codecopy) is a browser extension that
adds copy buttons to code blocks on many websites that are likely to have them,
such as [GitHub](https://github.com/) and [Stack
Overflow](https://stackoverflow.com/).

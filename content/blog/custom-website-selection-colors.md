---
draft: true
title: Custom Website Selection Colors
---

CSS provides an easy way to style the user's highlighted elements using the [::selection selector](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection).

Note that `background` is a [shorthand](https://stackoverflow.com/a/10205500/1481479) for `background-color`.

Right now, you should include the `-moz-` prefixed version, but it [looks
like](https://caniuse.com/#feat=css-selection) as of Firefox 62, the prefix
won't be necesssary anymore.

```css
::selection {
    color: orange;
    background: black;
}

::-moz-selection {
    color: orange;
    background: black;
}
```

You can also style specific elements.

```css
#special::selection {
    color: orange;
    background: black;
}

#special::-moz-selection {
    color: orange;
    background: black;
}
```

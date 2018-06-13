---
categories:
  - programming
draft: true
tags:
  - css
title: Custom Website Selection Colors
---

CSS provides an easy way to style the user's highlighted elements using the
[::selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
[pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

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

Note that `background` is a
[shorthand](https://stackoverflow.com/a/10205500/1481479) for multiple
`background-*` properties, with `background-color` being the first one.

## Browser Support

You should include the `-moz-` prefixed version for now to support Firefox, but
be aware that Firefox [won't need the
prefix](https://bugzilla.mozilla.org/show_bug.cgi?id=509958) from version 62
onwards.

According to [Can I use](https://caniuse.com/#feat=css-selection), about 85% of
users are on browsers that support this feature. iOS Safari is the notable
holdout.

## Specific Styling

The previous example applies the changes to the entire page, but you can also
limit them to specific elements using standard selectors.

```css
#special::selection {
    color: pink;
    background: white;
}

#special::-moz-selection {
    color: pink;
    background: white;
}
```

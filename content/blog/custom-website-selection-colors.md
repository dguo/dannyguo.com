---
categories:
  - programming
date: "2018-06-13"
tags:
  - css
title: Custom Website Selection Colors
---

CSS provides an easy way to style the user's selected or highlighted elements
using the
[::selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
[pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

```css
::selection {
    color: white;
    background: purple;
}

/* for Firefox */
::-moz-selection {
    color: white;
    background: purple;
}
```

Try it out:

{{< replit css-styling-selections >}}

Note that `background` is a
[shorthand](https://stackoverflow.com/a/10205500/1481479) for multiple
`background-*` properties, with `background-color` being the first one.

Also keep in mind that you cannot combine the selectors like this:

```css
::selection, ::-moz-selection {
    color: white;
    background: purple;
}
```

This will fail because browsers [ignore CSS
rules](https://stackoverflow.com/a/16982510/1481479) that they consider to have
invalid selectors. Chrome won't recognize the prefixed version, and Firefox
won't recognize the unprefixed version, so they both reject the rule.

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
.iron-man::selection {
    color: #beba46;
    background:#790d0d;
}

.iron-man::-moz-selection {
    color: #beba46;
    background: #790d0d;
}

.incredible-hulk::selection {
    color: #bf80ff;
    background: #70964b;
}

.incredible-hulk::-moz-selection {
    color: #bf80ff;
    background: #70964b;
}

.thor::selection {
    color:#e63900;
    background: #363636;
}

.thor::-moz-selection {
    color: #e63900;
    background: #363636;
}
```

Try it out:

{{< replit css-styling-selections-with-selectors >}}

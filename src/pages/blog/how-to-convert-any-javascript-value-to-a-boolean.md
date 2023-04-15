---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-04-13"
draft: true
tags:
  - javascript
title: How to Convert Any JavaScript Value to a Boolean
---

The best way to convert a JavaScript value to a boolean is to use the
`Boolean()` function.

Make sure you don't use it as a constructor.

```javascript
const foo = new Boolean();
```

## Not Operator

An alternative is to use the not operator (`!`) twice.

```javascript
const foo = !!blah;
```

I prefer to use the `Boolean()` method because I think it's more readable. Sure
it takes a few more characters to write, but we should generally [optimize for
reading over writing](https://thoughtbot.com/blog/write-code-to-be-read).

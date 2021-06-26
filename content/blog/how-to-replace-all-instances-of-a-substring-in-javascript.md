---
categories:
  - programming
date: 2021-06-26
draft: true
tags:
  - javascript
title: How to Replace All Instances of a Substring in JavaScript
---

The modern way to replace all instances of a
[substring](https://en.wikipedia.org/wiki/Substring) in JavaScript is to use the
built-in `replaceAll` function on the string.

```javascript
const text = "I like bananas, grapes, and mangoes, but mangoes are the best.";
const newText = text.replaceAll("mangoes", "blueberries");
// newText === "I like bananas, grapes, and blueberries, but blueberries are the best."
```

`replaceAll` [is a part](https://github.com/tc39/proposal-string-replaceall) of
the [ES2021 specification](https://en.wikipedia.org/wiki/ECMAScript#ES2021). All
the major browsers have implemented it. It's also available in
[Node.js](https://nodejs.org/) as of v15.

## Using .replace with a Regular Expression

If you can't use `replaceAll` for whatever reason, the older method is to use
the `replace` function with a [regular
expression](https://en.wikipedia.org/wiki/Regular_expression) (regex).

```javascript
const text = "";
const newText = text.replace(/foo/g, "bar");
```

It's important to use the `g` [regex
flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags).
Without it, `replace` only replaces the *first* occurrence of the substring.

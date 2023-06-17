---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-06-17"
tags:
  - javascript
title: How to Convert Any JavaScript Value to a Boolean
---

The best way to convert a JavaScript value to a boolean is to use the
`Boolean()` function. It returns `false` for any
[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value and
`true` otherwise (any value that is not falsy is
[truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)). You can try
out the examples in this post with [this
Replit](https://replit.com/@dyguo/How-to-Convert-Any-JavaScript-Value-to-a-Boolean#index.js).

```javascript
// Falsy values
const a = Boolean(null);
const b = Boolean("");
const c = Boolean(0);
const d = Boolean(false);

// Truthy values
const e = Boolean({});
const f = Boolean("foobar");
const g = Boolean(1);
const h = Boolean(true);

// The values are boolean primitives (`false` and `true`)
console.log({a, b, c, d, e, f, g, h});
```

## Not Operator

An alternative is to use the not operator (`!`) twice. The first one returns a
primitive boolean value, and then the second one flips the value to what you
actually want.

```javascript
const fooString = "";
const fooBoolean = !!fooString;
// The value is `false`
console.log({fooBoolean});
```

This method takes fewer characters to write, but I prefer to use the `Boolean()`
method because I think it's clearer and more readable. We should generally
[optimize for reading code over writing
code](https://thoughtbot.com/blog/write-code-to-be-read).

## Boolean Constructor

Make sure you don't use `Boolean` as a constructor (using `new`) because that
creates an *object*. You would have to use `.valueOf()` to get a primitive
value.

```javascript
// bar is an object
const bar = new Boolean("");

if (bar) {
    // So this would run because an object is truthy
    console.log("in bar branch");
}

const barValue = bar.valueOf();
if (barValue) {
    // But this wouldn't run because barValue is `false`
    console.log("in barValue branch");
}

console.log({bar, barValue});
```

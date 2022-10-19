---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-04-07"
tags:
  - javascript
title: How to Check if a JavaScript String Begins or Ends With a String
---

To check if a JavaScript string begins with a particular string, use the
`startsWith` method.

```javascript
const testString = "Foobar";

// evaluates to true
testString.startsWith("Foo");

// evaluates to false
testString.startsWith("bar");

// evaluates to false
testString.startsWith("Foobarbaz");

// evaluates to false (the check is case-sensitive)
testString.startsWith("foo");
```

Similarly, to check if a JavaScript string ends with a particular string, use
the `endsWith` method.

```javascript
const testString = "Foobar";

// evaluates to true
testString.endsWith("bar");

// evaluates to false
testString.endsWith("baz");

// evaluates to false (the check is case-sensitive)
testString.startsWith("BAR");
```

## Advanced Usage

The `startsWith` method takes an optional starting index as a second parameter.
The index is [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering),
so if you want to start the check at the fourth character in the string, you
would pass in a value of 3.

```javascript
const testString = "foobar";

// evaluates to false
testString.startsWith("bar");
// this is equivalent
testString.startsWith("bar", 0);

// evaluates to true
testString.startsWith("bar", 3);
```

The `endsWith` method takes an optional length as a second parameter. This
limits the length of the string that you are searching.

```javascript
const testString = "foobar";

// evaluates to false
testString.endsWith("oo");

// evaluates to true because it's equivalent to "foo".endsWith("oo")
testString.endsWith("oo", 3);
```

## Alternatives

`startsWith` and `endsWith` were part of the [ECMAScript
2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)
specification, so all modern browsers [support the
methods](https://caniuse.com/mdn-javascript_builtins_string_startswith). If you
can't use them for whatever reason, such as needing to support Internet
Explorer, one option is to use a
[regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

To replicate `startsWith`, you can use the `^` character to match the beginning
of the input.

```javascript
const testString = "foobar";

// evaluates to true
/^foo/.test(testString);
```

To replicate `endsWith`, you can use the `$` character to match the end
of the input.

```javascript
const testString = "foobar";

// evaluates to true
/bar$/.test(testString);
```

Alternatively, you can use `lastIndexOf` and `indexOf` to replicate the methods,
as [detailed here](https://stackoverflow.com/a/36876507/1481479).

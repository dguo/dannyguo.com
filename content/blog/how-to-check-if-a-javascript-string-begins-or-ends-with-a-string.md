---
categories:
  - programming
date: 2022-04-03
draft: true
tags:
  - javascript
title: How to Check if a JavaScript String Begins or Ends With a String
---

To check if a JavaScript string begins with a particular string, use the
`startsWith` method.

```javascript
const testString = "foobar";

// evaluates to true
testString.startsWith("foo")

// evaluates to false
testString.startsWith("zoo");
```

Similarly, to check if a JavaScript string ends with a particular string, use
the `endsWith` method.

```javascript
const testString = "foobar";

// evaluates to true
testString.endsWith("bar")

// evaluates to false
testString.endsWith("baz");
```

## Advanced Usage

The `startsWith` method takes an optional starting index as a second parameter.
The index is [zero-based](https://en.wikipedia.org/wiki/Zero-based_numbering),
so if you want to start at the second character in the string, for example, you
would pass in a value of 1.

```javascript
const testString = "foobar";

// evaluates to false
testString.startsWith("bar")

// evaluates to true
testString.startsWith("bar", 3);
```

The `endsWith` method takes an optional length as a second parameter. This
limits the length of the string that you are searching.

```javascript
const testString = "foobar";

// evaluates to false
testString.endsWith("foo")

// evaluates to true
testString.endsWith("foo", 3);
```

## Alternatives

`startsWith` and `endsWith` were a part of the [ECMAScript
2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)
specification, so all modern browsers [support the
methods](https://caniuse.com/mdn-javascript_builtins_string_startswith).

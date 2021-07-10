---
categories:
  - programming
date: 2021-07-10
draft: true
tags:
  - javascript
title: How to Replace All Instances of a Substring in JavaScript
---

The modern way to replace all instances of a
[substring](https://en.wikipedia.org/wiki/Substring) in JavaScript is to use the
built-in `replaceAll` function on the string. It returns a new string, leaving
the original string unchanged.

```javascript
const text = "Blake likes Demi, but Demi prefers Dylan.";
const newText = text.replaceAll("Demi", "Hannah");
// text === "Blake likes Demi, but Demi prefers Dylan."
// newText === "Blake likes Hannah, but Hannah prefers Dylan."
```

`replaceAll` [is a part](https://github.com/tc39/proposal-string-replaceall) of
the [ES2021 specification](https://en.wikipedia.org/wiki/ECMAScript#ES2021). All
the major browsers [have implemented
it](https://caniuse.com/mdn-javascript_builtins_string_replaceall), and it's
available in [Node.js](https://nodejs.org/) as of
[v15](https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278).

If you can't use it, you can [use the replace
function](#using-replace-with-a-regular-expression) instead.

## Using a Regular Expression

You can also provide a [regular
expression](https://en.wikipedia.org/wiki/Regular_expression) (regex) as the
target, instead of a string. Here's an example that uses a regex to replace all
numerical digits using the `\d` [character
class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes).

```javascript
const text = "The bank account numbers are 143838 and 23299.";
const newText = text.replaceAll(/\d/g, "*");
// newText === "The bank account numbers are ****** and *****."
```

The `g` [regex
flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags)
is required. Without it, you'll get a
[TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

```txt
TypeError: String.prototype.replaceAll called with a non-global RegExp argument
```

## Special Replacements

There are special patterns that you can use in the replacement string. The first
one is `$&`, which lets you insert the matched string. Here's an example that
surrounds each word with asterisks, using [this
regex](https://regex101.com/r/DUInpP/1).

```javascript
const text = "life goes on";
const newText = text.replaceAll(/\w+/g, "*$&*");
// newText === "*life* *goes* *on*"
```

The next pattern is `` $` ``, which lets you insert the part of the string
before the matched string.

```javascript
const text = "CatDogBird";
const newText = text.replaceAll("Dog", "$`");
// newText === "CatCatBird"
```

The next pattern is `$'`, which lets you insert the part of the string
after the matched string.

```javascript
const text = "CatDogBird";
const newText = text.replaceAll("Dog", "$'");
// newText === "CatBirdBird"
```

The next pattern is `$n`, which lets you insert the nth match.

```javascript
const text = "life goes on";
const newText = text.replaceAll(/\w+/g, "*$&*");
// newText === "*life* *goes* *on*"
```

The last pattern is `$$`, which lets you insert a raw `"$"`. This gives you an
escape hatch if you actually want to put the characters for one of the special
patterns in your string.

```javascript
const text = "$` is cool, but $` is rarer than $&.";
const newText = text.replaceAll("$`", "$$'");
// newText === "$' is cool, but $' is rarer than $&."
```

However, this is also a potential source of bugs! If
you don't know about these patterns, you'll probably get unexpected results. For
example, to put "$$" in the string, you need to escape twice using "$$$$".

## Using a Function for Replacement Logic

```javascript
const text = "Blake likes Demi, but Demi prefers Dylan.";
const newText = text.replaceAll("Demi", (value) => {
});
// newText === "Blake likes Hannah, but Hannah prefers Dylan."
```

## Using .replace with a Regular Expression

If you can't use `replaceAll` for whatever reason, the older method is to use
the `replace` function with a regex.

```javascript
const text = "Blake likes Demi, but Demi prefers Dylan.";
const newText = text.replaceAll(/Demi/g, "Hannah");
```

It's important to use the `g` regex flag. If you omit it, you won't get a
runtime error, but `replace` will only replace the *first* occurrence of the
substring.

`replace` also supports the special replacement patterns and using a function
instead of a string for the replacement.

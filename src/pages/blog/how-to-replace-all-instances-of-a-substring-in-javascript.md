---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2021-07-12"
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

You can try out the examples in this post for yourself with [this
Replit](https://replit.com/@dyguo/replace-all-substrings-in-javascript).

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

```
TypeError: String.prototype.replaceAll called with a non-global RegExp argument
```

## Special Replacement Patterns

There are special patterns that you can use in the replacement string. The first
one is `$&`, which lets you insert the matched substring. Here's an example that
surrounds each word with asterisks, using [this
regex](https://regex101.com/r/DUInpP/1).

```javascript
const text = "life goes on";
const newText = text.replaceAll(/\w+/g, "*$&*");
// newText === "*life* *goes* *on*"
```

The next pattern is `` $` ``, which lets you insert the part of the string
before the matched substring.

```javascript
const text = "CatDogBird";
const newText = text.replaceAll("Dog", "$`");
// newText === "CatCatBird"
```

The next pattern is `$'`, which lets you insert the part of the string after the
matched substring.

```javascript
const text = "CatDogBird";
const newText = text.replaceAll("Dog", "$'");
// newText === "CatBirdBird"
```

The next pattern is `$n`, which is available when you use a regex that contains
[capturing groups](https://javascript.info/regexp-groups). The `n` refers to the
n<sup>th</sup> match (starting at an index of 1). Here's an example that changes
the positions of words.

```javascript
const text = "foo bar baz";
const newText = text.replaceAll(/(\w+) (\w+) (\w+)/g, "$3 $1 $2");
// newText === "baz foo bar"
```

The last pattern is `$$`, which lets you insert a raw `$`. This gives you an
escape hatch if you want to avoid the special pattern logic and use the
characters literally.

```javascript
const text = "$` is cool, but $` is rarer than $&.";
const newText = text.replaceAll("$`", "$$'");
// newText === "$' is cool, but $' is rarer than $&."
```

However, these patterns are also a potential source of bugs! Someone could use
them accidentally and get unexpected results.  For example, to put `$$` in the
result string, you need to escape twice using `$$$$` because `$$` in the
replacement string will only insert a single `$` in the result.

```javascript
const text = "PostgreSQL has dollar quoting: !!Mary's Room!!";
const newText = text.replaceAll("!!", "$$$$");
// newText === "PostgreSQL has dollar quoting: $$Mary's Room$$"
```

## Using a Function for Replacement Logic

For even more advanced cases, you can provide a function instead of a
replacement string.  The function will receive these arguments (in order): the
matched substring, its offset in the original string, and the entire original
string.  `replaceAll` will use the return value as the string to insert.

```javascript
const text = "foo bar foo baz foo";
const newText = text.replaceAll("foo", (substring, offset, string) => {
    const prefix = offset === 0 ? "first" : "more";
    return `${prefix}-${substring}`;
});
// newText === "first-foo bar more-foo baz more-foo"
```

If there are regex capture groups, the function will receive the n<sup>th</sup>
values as additional arguments in between the matched substring and offset
arguments.

```javascript
const text = "foo bar baz";
const newText = text.replaceAll(
    /(\w+) (\w+) (\w+)/g,
    (substring, n1, n2, n3, offset, string) => {
        return `1-${n1} 2-${n2} 3-${n3}`;
    }
);
// newText === "1-foo 2-bar 3-baz"
```

## Using .replace with a Regular Expression

If you can't use `replaceAll` for whatever reason, the older method is to use
the `replace` function with a regex.

```javascript
const text = "Blake likes Demi, but Demi prefers Dylan.";
const newText = text.replace(/Demi/g, "Hannah");
```

It's important to use the `g` regex flag. If you omit it, you won't get a
runtime error like with `replaceAll`, but `replace` will only replace the
*first* occurrence of the substring.

`replace` also supports the special replacement patterns and using a replacement
function instead of a string.

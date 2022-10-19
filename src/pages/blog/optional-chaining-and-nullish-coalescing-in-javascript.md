---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/optional-chaining-and-nullish-coalescing-in-javascript/
categories:
  - programming
date: "2020-01-03"
tags:
  - javascript
title: Optional Chaining and Nullish Coalescing in JavaScript
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/optional-chaining-and-nullish-coalescing-in-javascript/).*

Optional chaining and nullish coalescing are new JavaScript operators. They have
both reached [stage 3](https://tc39.es/process-document/) in the
[TC39](https://tc39.es/) process, which means that their specifications are
complete.

I have been looking forward to these operators for a long time. I believe they
are the most significant improvement to JavaScript ergonomics since
[async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).
They don’t enable anything new in terms of functionality, but they will make
quite a lot of code nicer to both write and read.

## Optional chaining

Working with data in JavaScript frequently involves situations where you aren’t
sure that something exists. For example, imagine getting a JSON response from a
weather API.

```json
{
  "data": {
    "temperature": {
      "current": 68,
      "high": 79,
      "low": 45
    },
    "averageWindSpeed": 8
  }
}
```

You can go through each level of the object to get the high temperature.

```javascript
const highTemperature = response.data.temperature.current;
```

But maybe you’ll request the weather data for different days in the past, and
the service doesn’t have the high temperature for some days, or any temperature
data at all for other days. So `temperature` or `temperature.high` could be
`undefined`.

```json
{
  "data": {
    "averageWindSpeed": 12
  }
}
```

In this case, trying to get the high temperature will result in an exception
that many developers are quite familiar with when working with JavaScript:
`TypeError: Cannot read property 'current' of undefined`.

To avoid the exception, you have to add checks for each level of the object.
Maybe the API documentation says that when there is an error, the top-level
property will be `error` instead of `data`, so you can’t even be sure that
`data` exists.

```javascript
let highTemperature;
if (response.data && response.data.temperature) {
  highTemperature = response.data.temperature.high;
}
```

This code is safer but also more verbose. Our data isn’t even that deeply
nested; a more complicated object might have many more levels to check.

Optional chaining provides a terse alternative. It is JavaScript’s version of
the [safe navigation
operator](https://en.wikipedia.org/wiki/Safe_navigation_operator), which exists
in many languages, such as
[Swift](https://docs.swift.org/swift-book/LanguageGuide/OptionalChaining.html)
and
[C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-).
With the optional chaining operator (`?.`), our code would look like this
instead:

```javascript
const highTemperature = response.data?.temperature?.high;
```

This is still safe but almost as succinct as the original code. If either
`response.data` or `response.data.temperature` is `null` or `undefined`, the
entire expression
[short-circuits](https://en.wikipedia.org/wiki/Short-circuit_evaluation) and
returns `undefined` rather than throwing an exception.

Optional chaining works the same when accessing a property through bracket
notation.

```javascript
const property = "temperature";
const highTemperature = response.data?.[property]?.high;
```

It isn’t restricted to sub-levels. You can use it at the top level as well.

```javascript
const highTemperature = response?.data?.temperature?.high;
```

Optional chaining even works with function calls.

```javascript
const celsiusTemperature = temperature.toCelsius?.();
```

If `temperature` doesn’t have a `toCelsius` property, this will result in
`undefined` instead of throwing an error. However, note that if `temperature`
happens to have a `toCelsius` property that just isn’t a function, this will
still cause an error: `TypeError: temperature.toCelsius is not a function`.

## Nullish coalescing

In addition to accessing nested values, another common pattern in JavaScript is
to use the logical OR operator (`||`) to coalesce values because it returns the
first [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
operand, not a Boolean.

Let’s say you’re building a website and have added some animations to it. You
have decided to allow users to customize how long the animations take. You want
to use a default value if the user doesn’t provide one, so you do the following.

```javascript
const defaultTime = 2;
const animationTime = settings.animationTime || defaultTime;
```

This code might work in general, but there is a subtle bug.  The Boolean
`false`, empty strings (`""`), `NaN`, and the number `0` are all falsy. In this
example, a user might not want any animations at all. But if he or she sets the
time to `0`, this code will ignore it and erroneously use the default value of
`2`.

We could be more explicit.

```javascript
const defaultTime = 2;
const animationTime =
  typeof settings.animationTime === "number"
    ? settings.animationTime
    : defaultTime;
```

The nullish coalescing operator (`??`) gives us a cleaner method.

```javascript
const defaultTime = 2;
const animationTime = settings.animationTime ?? defaultTime;
```

Nullish coalescing acts like regular coalescing, but it only rejects values if
they are strictly `null` or `undefined`, so this code will accept a value of `0`
if it is provided.

Like regular coalescing, nullish coalescing short-circuits once an operand is
satisfactory, so further expressions are not evaluated. This is important to
keep in mind if further expressions have side effects.

## Ecosystem support

Optional chaining and nullish coalescing make it easier to write safer code, and
the JavaScript community seems eager to adopt them. Even though they are not
part of the formal [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
specification yet, tools have already started to add support.

[TypeScript](https://www.typescriptlang.org/) supports them as of [version
3.7](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/) (Nov.
6, 2019).

[Babel](https://babeljs.io/) has an [optional chaining
plugin](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) and
a [nullish coalescing
plugin](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator).

[Prettier](https://prettier.io/) supports them as of [version
1.19](https://prettier.io/blog/2019/11/09/1.19.0.html) (Nov. 9, 2019).

[ESLint](https://eslint.org/) doesn’t natively support [experimental language
features](https://github.com/eslint/eslint#what-about-experimental-features)
until they reach stage 4, but it’s possible to use Babel as a workaround through
[babel-eslint](https://github.com/babel/babel-eslint).

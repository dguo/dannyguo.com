---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-03-04"
draft: true
tags:
  - typescript
title: How to Enforce Comprehensive TypeScript Enum Mappings Using Records
---

Instead of using a function to map a TypeScript
[enum](https://www.typescriptlang.org/docs/handbook/enums.html) to values, you
can use a [Record
type](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type).
This turns a runtime error into a compile-time error.

You can try out the examples in this post for yourself with [this
Replit](https://replit.com/@dyguo/how-to-break-and-continue-in-nested-loops-in-javascript).

Let's say we have an enum, and we want to encode a certain value for each enum
value. We might write a function to do so.

```typescript
enum Cities {
  Foo,
  Bar,
  Baz
}

function getValueForCity(city: Cities) {
    if (city === Cities.Foo) {
        return 0;
    } else if (city === Cities.Bar) {
        return 1;
    } else if (city === Cities.Baz) {
        return 2;
    }
}
```

This does the job, but what if someone adds a new `Cities` value without
updating `getValueForCity`? Then this function would return `undefined`, which
could cause bad behavior. One option is to throw an error.

```typescript
function getValueForCity(city: Cities) {
    if (city === Cities.Foo) {
        return 0;
    } else if (city === Cities.Bar) {
        return 1;
    } else if (city === Cities.Baz) {
        return 2;
    }

    throw new Error(`Unexpected city: ${city}`);
}
```

So we would at least get a runtime error as early as possible. But we can do
better because using a `Record` lets us turns this into a compile-time error.

```typescript
const ValueForCity: Record<Cities, number> = {
    [Cities.Foo]: 0,
    [Cities.Bar]: 1,
    [Cities.Baz]: 2
}
```

Now, if we get add a new value to `Cities`, TypeScript will error out.


This works for
[unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
as well.

```typescript
type Cities = "foo" | "bar" | "baz";

const ValueForCity: Record<Cities, number> = {
    "foo": 0,
    "bar": 1,
    "baz": 2
}
```

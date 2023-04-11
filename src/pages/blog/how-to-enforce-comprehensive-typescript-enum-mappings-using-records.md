---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-04-11"
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

For example, let's say you have an enum of countries, and you want a way to get
the capital for each country. You might write a function to do so.

```typescript
enum Country {
  Australia,
  China,
  UnitedStates
}

function getCountryCapital(country: Country) {
    if (country === Country.Australia) {
        return "Canberra";
    } else if (country === Country.China) {
        return "Beijing";
    } else if (country === Country.UnitedStates) {
        return "Washington, D.C.";
    }
}
```

This does the job, but what if someone adds a new `Country` value without
updating `getCountryCapital`? Then the function would return `undefined`, which
could cause bad behavior. One option is to throw an error.

```typescript
function getCountryCapital(country: Country) {
    if (country === Country.Australia) {
        return "Canberra";
    } else if (country === Country.China) {
        return "Beijing";
    } else if (country === Country.UnitedStates) {
        return "Washington, D.C.";
    }

    throw new Error(`Unexpected country: ${country}`);
}
```

So you would at least get a runtime error as early as possible. But you can do
better by using a `Record`, which turns this situation into a compile-time
error.

```typescript
const CountryToCapital: Record<Country, string> = {
    [Country.Australia]: "Canberra",
    [Country.China]: "Beijing",
    [Country.UnitedStates]: "Washington, D.C."
}
```

Now, if we get add a new value to `Country`, TypeScript will error out.

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

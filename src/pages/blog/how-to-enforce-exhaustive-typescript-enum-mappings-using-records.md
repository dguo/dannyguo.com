---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-04-12"
tags:
  - typescript
title: How to Enforce Exhaustive TypeScript Enum Mappings Using Records
---

Instead of using a function to exhaustively map a
[TypeScript](https://www.typescriptlang.org/)
[enum](https://www.typescriptlang.org/docs/handbook/enums.html) to other values,
you can use a [Record
type](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type).
This turns a runtime error into a compile-time error.

For example (and you can try out these examples with [this
Replit](https://replit.com/@dyguo/Enforce-Exhaustive-TypeScript-Enum-Mappings-Using-Records#index.ts)),
let's say you have an enum of countries, and you want a way to get the capital
for each country. You might write a function to do so.

```typescript
enum Country {
    Australia = "Australia",
    China = "China",
    UnitedStates = "United States"
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
function getCountryCapital(country: Country): string {
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
better in terms of safety by using a `Record`, which turns this situation into a
compile-time error.

```typescript
const CountryToCapital: Record<Country, string> = {
    [Country.Australia]: "Canberra",
    [Country.China]: "Beijing",
    [Country.UnitedStates]: "Washington, D.C."
}
```

Let's say you add South Africa to the enum without updating `CountryToCapital`.

```typescript
enum Country {
    Australia = "Australia",
    China = "China",
    SouthAfrica = "South Africa",
    UnitedStates = "United States"
}
```

TypeScript should then give you an error. And if your
[IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) or
editor is connected to TypeScript, you should see a hint for the error in your
code as well.

```
Property '"South Africa"' is missing in type '{ Australia: string; China:
string; "United States": string; }' but required in type 'Record<Country,
string>'.
```

## Unions

This approach works for
[unions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
as well. Adding South Africa to this union would also result in a type error.

```typescript
type Country = "Australia" | "China" | "United States";

const CountryToCapital: Record<Country, string> = {
    "Australia": "Canberra",
    "China": "Beijing",
    "United States": "Washington, D.C."
}
```

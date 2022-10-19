---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2021-04-17"
tags:
  - typescript
title: How to Fix instanceof Not Working For Custom Errors in TypeScript
---

In JavaScript, you can create custom errors by extending the built-in [Error
object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
(ever since [ES
2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)).

```javascript
class DatabaseError extends Error {}
```

You can do the same thing in [TypeScript](https://www.typescriptlang.org/), but
there is an important caveat if your `tsconfig.json` has a compilation
[target](https://www.typescriptlang.org/tsconfig#target) of ES3 or ES5. In that
case, `instanceof` doesn't work, which breaks any logic that is based on whether
or not an error is a case of the custom error.

```typescript
class DatabaseError extends Error {}

const error = new DatabaseError("Unique constraint violation");

// prints "true"
console.log(error instanceof Error);
// incorrectly prints "false"
console.log(error instanceof DatabaseError);
```

You can try [this out
yourself](https://www.typescriptlang.org/play?target=1&ts=4.2.3#code/MYGwhgzhAEAiYBcwCNIFMCiAnLB7L0aAHgmgHYAmM2eBA3gL4BQTwuZEChO+0AvNDJoA7nEQp0NfAAoARAFUyASwCOAVzTQ2HBFjBKyXAG5Lc4BKbKyAlAG4WAegfQADlgMIYs3Rtmt2EGZoAHQguADm0mg8BAacYGTAaLgAZtBSWHZMTtAGbDhowAggAJ6u7oZeKWAgEGh+2oEgIWGR0bS5OglJqWJIqHUZdkA)
in the TypeScript playground. This is a [known
issue](https://github.com/microsoft/TypeScript/issues/13965) that started with
[TypeScript version
2.1](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work).
The recommended fix is to manually set the prototype in the constructor.

```typescript
class DatabaseError extends Error {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}

const error = new DatabaseError("Unique constraint violation");

// both print "true" now
console.log(error instanceof Error);
console.log(error instanceof DatabaseError);
```

Any custom errors which further extend `DatabaseError` still need the same
adjustment.

```typescript
class DatabaseError extends Error {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
}

class DatabaseConnectionError extends DatabaseError {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}

const error = new DatabaseConnectionError("Invalid credentials");

// all print "true"
console.log(error instanceof Error);
console.log(error instanceof DatabaseError);
console.log(error instanceof DatabaseConnectionError);
```

## Upgrade the Compilation Target

Remember that this is only an issue if your compilation target is ES3 or ES5.
Instead of having to remember to set the prototype, you could consider upgrading
your target to ES 2015 or even later. ES 2015 has [over 97% browser
support](https://caniuse.com/es6), so it may be a reasonable choice for you,
especially if you are okay with dropping support for Internet Explorer.

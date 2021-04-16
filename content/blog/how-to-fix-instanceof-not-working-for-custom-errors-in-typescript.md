---
categories:
  - programming
date:
draft: true
tags:
  - typescript
title: How to Fix instanceof Not Working For Custom Errors in TypeScript
---

In JavaScript, we can create custom errors by extending the built-in [Error
object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
(ever since [ES
2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015)).

```javascript
class DatabaseError extends Error {}
```

We can do the same thing in [TypeScript](https://www.typescriptlang.org/), but
there is an important caveat. By default, `instanceof` doesn't work, which
breaks any logic that is based on whether or not an error is a case of the
custom error.

```typescript
class DatabaseError extends Error {}

const error = new DatabaseError("Unique constraint violation");

// evaluates to true
error instanceof Error;
// incorrectly evaluates to false
error instanceof DatabaseError;
```

This is a [known issue](https://github.com/microsoft/TypeScript/issues/13965)
that started with [TypeScript version
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

// evaluates to true
error instanceof Error;
// now correctly evaluates to true
error instanceof DatabaseError;
```

Any custom errors which further extend `DatabaseError` also need to manually
set the prototype.

```typescript
class DatabaseConnectionError extends DatabaseError {
    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
}

const error = new DatabaseConnectionError("Incorrect credentials");

// all evaluate to true
error instanceof Error;
error instanceof DatabaseError;
error instanceof DatabaseConnectionError;
```

Alternatively, there are third party packages that can serve as the base class
to avoid this error, such as
[make-error](https://www.npmjs.com/package/make-error).

---
categories:
  - programming
date: 2022-04-16
draft: true
tags:
  - javascript
title: How to Break Out of Nested Loops in JavaScript
---

The easiest way to `break` out of nested loops in JavaScript is to use
[labels](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).
By labeling a loop, you can use it in a `break` statement to break out of not
only the loop you're in but all the way out of the specified loop.

You can try out the examples in this post for yourself with [this
Replit](https://replit.com/@dyguo/how-to-break-out-of-nested-loops-in-javascript).

```javascript
const chunks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

chunkLoop: for (let chunk of chunks) {
    for (let number of chunk) {
        if (number === 5) {
            break chunkLoop;
        }

        console.log(number);
    }
}

/*
Outputs:
1
2
3
4
*/
```

The output stops at 4 because when the code reaches 5, the code breaks all the
way out of the outer loop.

You can also use `continue` with a label if you just want to skip to the next
iteration of an outer loop.

```javascript
const chunks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

chunkLoop: for (let chunk of chunks) {
    for (let number of chunk) {
        if (number === 5) {
            continue chunkLoop;
        }

        console.log(number);
    }
}

/*
Outputs:
1
2
3
4
7
8
9
*/
```

5 and 6 aren't in the output because when the code reaches 5, the code continues
on to the next iteration of the chunk loop, which is the `[7, 8, 9]` chunk.

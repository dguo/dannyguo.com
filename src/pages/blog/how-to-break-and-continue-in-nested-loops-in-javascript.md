---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-04-17"
tags:
  - javascript
title: How to Break and Continue in Nested Loops in JavaScript
---

The easiest way to `break` out of nested loops in JavaScript is to use
[labels](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).
By labeling a loop, you can use it in a `break` statement to break out of not
only the loop you're in but also all the way out of the specified loop.

You can try out the examples in this post for yourself with [this
Replit](https://replit.com/@dyguo/how-to-break-and-continue-in-nested-loops-in-javascript).

```javascript
const chunks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

chunkLoop: for (const chunk of chunks) {
    for (const number of chunk) {
        if (number === 5) {
            break chunkLoop;
        }

        console.log(number);
    }
}

/*
Output:
1
2
3
4
*/
```

The output stops at 4 because when the code reaches 5, the code breaks all the
way out of the outer loop (`chunkLoop`).

## Continue

You can also use `continue` with a label if you want to skip to the next
iteration of an outer loop.

```javascript
const chunks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

chunkLoop: for (const chunk of chunks) {
    for (const number of chunk) {
        if (number === 5) {
            continue chunkLoop;
        }

        console.log(number);
    }
}

/*
Output:
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

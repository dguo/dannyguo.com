---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-04-19"
tags:
  - docker
title: How to Use Newlines in an Environment Variable File for Docker
---

When you run a Docker container, you can [pass environment
variables](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)
to the [run command](https://docs.docker.com/engine/reference/commandline/run/).
However, the `--env-file` option has a limitation in that it doesn't handle
[newline characters](https://en.wikipedia.org/wiki/Newline). See this [GitHub
issue](https://github.com/moby/moby/issues/32140) and this [comment on a
separate
issue](https://github.com/moby/moby/issues/28617#issuecomment-671906320).

This can be problematic if you need newlines for something like a public or
private key for [public-key
cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). I tried
adding double quotes around the value and using `\n` for the newlines:

```sh
FOO=bar
PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nFOO\nBAR\nBAZ\n-----END PRIVATE KEY-----"
```

But that didn't work, using single quotes didn't work, and actually breaking the
value across multiple lines in my `.env` file didn't work either. As a
workaround, I found that I could detect the situation and modify the value in
code. For a [Node.js](https://nodejs.org) server, I did this:

```javascript
let PRIVATE_KEY = process.env.PRIVATE_KEY;
if (PRIVATE_KEY?.startsWith(`"`)) {
    PRIVATE_KEY =
        PRIVATE_KEY.replaceAll(`"`, ``).replaceAll(`\\n`, `\n`);
}
```

So I removed the double quotes and replaced every occurrence of a literal
backslash (the `\\` is necesssary for
[escaping](https://en.wikipedia.org/wiki/Escape_character) the backslash)
followed by a `n` with a newline character. This worked for my use case.

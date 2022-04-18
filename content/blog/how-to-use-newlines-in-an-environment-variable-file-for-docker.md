---
categories:
  - programming
date: 2022-04-18
draft: true
tags:
  - docker
title: How to Use Newlines in an Environment Variable File for Docker
---

When you run a Docker container, you can [pass environment
variables](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)
to the `run`
[command](https://docs.docker.com/engine/reference/commandline/run/).

However, there is a limitation with the `--env-file` option in that it doesn't
handle [newline characters](https://en.wikipedia.org/wiki/Newline).

See this [GitHub issue](https://github.com/moby/moby/issues/32140) and this
[comment on a separate
issue](https://github.com/moby/moby/issues/28617#issuecomment-671906320).

This is even if you double or single quote the value. As a hacky workaround, I
found that I could detect the situation and modify the value in code.

```javascript
let PRIVATE_KEY = process.env.PRIVATE_KEY;
if (PRIVATE_KEY?.startsWith(`"`)) {
    PRIVATE_KEY =
        PRIVATE_KEY.replaceAll(`"`, ``).replaceAll(`\\n`, `\n`);
}
```

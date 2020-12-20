---
categories:
  - programming
date:
draft: true
tags:
  - lua
title: How to Concatenate Strings in Lua
---

The most straightforward way to concatenate strings in
[Lua](https://www.lua.org/about.html) is to use the dedicated [string
concatenation operator](https://www.lua.org/pil/3.4.html): `..`.

```lua
local foo = "Hello, " .. "world!"
```

However, strings in Lua are immutable, so in this example, `foo` is a brand new
string.

If you need to perform many concatenation operations, this approach can
be slow because Lua has to keep reallocating memory for intermediate strings.

## table.concat

It can be much faster to use
[table.concat](https://www.lua.org/manual/5.4/manual.html#6.6).

```lua
local strings = {"Hello, ", "world!"}
local foo = table.concat(strings)
```

In typical cases, the difference shouldn't matter, but if you're working with
many strings, it's a good idea to use `table.concat`.

## Direct Approach

If you don't actually need a variable holding the final string, you can save
some memory usage over `table.concat` by writing it out directly.

```lua

```

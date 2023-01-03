---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2020-12-28"
tags:
  - lua
title: How to Concatenate Strings in Lua
---

The most straightforward way to concatenate (or combine) strings in
[Lua](https://www.lua.org/about.html) is to use the dedicated [string
concatenation operator](https://www.lua.org/pil/3.4.html), which is two periods
(`..`).

```lua
message = "Hello, " .. "world!"
-- message equals "Hello, World!"
```

Numbers are coerced to strings. For fine-grained control over number formatting,
use
[string.format](https://www.lua.org/manual/5.4/manual.html#pdf-string.format),
which behaves mostly like C's
[printf](https://www.cplusplus.com/reference/cstdio/printf/).

```lua
count = 42
message = "The count is: " .. count
-- message equals "The count is: 42"
```

Trying to concatenate other [types](https://www.lua.org/pil/2.html), like nil or
a table, will result in an error.

```lua
count = nil
message = "The count is: " .. count
-- results in an "attempt to concatenate a nil value" error
```

Note that Lua [doesn't have](https://stackoverflow.com/q/20091779/1481479)
syntactic sugar for [augmented
assignment](https://en.wikipedia.org/wiki/Augmented_assignment). The following
is invalid syntax.

```lua
message = "Hello, "
message ..= "world!"
-- results in a "syntax error near '..'" error
```

Strings in Lua are [immutable](https://www.lua.org/pil/2.4.html), so the
concatenation result (`message` in this example) is a brand new string.

```lua
start = "Hello, "
message = start .. "world!"
start = "Bye, "
-- message still equals "Hello, World!"
```

## table.concat

If you need to perform many concatenation operations, using the concatenation
operator can be slow because Lua has to keep reallocating memory to create new
strings.

```lua
message = ""
for i=1,100000 do
  message = message .. i
end
```

As a result, it [can be much
faster](https://www.reddit.com/r/lua/comments/1t6ois/tableconcat_is_fast/) to
use [table.concat](https://www.lua.org/manual/5.4/manual.html#6.6).

```lua
numbers = {}
for i=1,100000 do
  numbers[i] = i
end
message = table.concat(numbers)
```

Here's a benchmark comparsion (using
[hyperfine](https://github.com/sharkdp/hyperfine)) from running the `..` example
as `slow.lua` and running the `table.concat` example as `fast.lua`.

```sh
hyperfine 'lua slow.lua'
# Benchmark #1: lua slow.lua
#   Time (mean ± σ):      1.287 s ±  0.115 s    [User: 1.120 s, System: 0.078 s]
#   Range (min … max):    1.187 s …  1.528 s    10 runs
hyperfine 'lua fast.lua'
# Benchmark #1: lua fast.lua
#   Time (mean ± σ):      39.3 ms ±   3.8 ms    [User: 34.6 ms, System: 2.8 ms]
#   Range (min … max):    35.3 ms …  58.3 ms    48 runs
```

The difference probably doesn't matter in most cases, but it's a good
optimization to be aware of.

`table.concat` can also be easier to use because it can take a separator
argument to add between elements.

```lua
message = table.concat({1, 2, 3, 4, 5})
-- message equals "12345"
message = table.concat({1, 2, 3, 4, 5}, ", ")
-- message equals "1, 2, 3, 4, 5"
```

It can also take start and end indexes. Keep in mind that Lua arrays [start with
index 1](https://www.lua.org/pil/11.1.html).

```lua
message = table.concat({1, 2, 3, 4, 5}, ", ", 2, 4)
-- message equals "2, 3, 4"
```

## Direct Approach

Depending on your use case, you might be able to save some memory usage over
`table.concat` by generating the result directly.

```lua
for i=1,100000 do
  io.stdout:write(i)
end
```

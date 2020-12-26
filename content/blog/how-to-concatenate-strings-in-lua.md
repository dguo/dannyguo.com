---
categories:
  - programming
date: 2020-12-26
draft: true
tags:
  - lua
title: How to Concatenate Strings in Lua
---

The most straightforward way to concatenate strings in
[Lua](https://www.lua.org/about.html) is to use the dedicated [string
concatenation operator](https://www.lua.org/pil/3.4.html), which is two periods
(`..`).

```lua
message = "Hello, " .. "world!"
-- message equals "Hello, World!"
```

Numbers are coerced to strings.

```lua
count = 42
message = "The count is: " .. count
-- message equals "The count is: 42"
```

But trying to concatenate other [types](https://www.lua.org/pil/2.html), like
`nil` or a table, will result in an error.

```lua
count = nil
message = "The count is: " .. count
-- results in an "attempt to concatenate a nil value" error
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
for i=i,10000 do
  message = message .. i
end
```

As a result, it [can be much
faster](https://www.reddit.com/r/lua/comments/1t6ois/tableconcat_is_fast/) to
use [table.concat](https://www.lua.org/manual/5.4/manual.html#6.6).

```lua
strings = {"Hello, ", "world!"}
message = table.concat(strings)
-- message equals "Hello, World!"
```

separator example

In typical cases, the difference shouldn't matter, but if you're working with
many strings, it's a good idea to use `table.concat`.

## Direct Approach

If you don't actually need a variable holding the final string, you can save
some memory usage over `table.concat` by writing it out directly.

```lua

```

number formatting example

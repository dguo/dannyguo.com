---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2021-06-25"
tags:
  - sql
  - postgres
  - mysql
  - sqlite
  - oracle
  - sql-server
title: How to Swap Column Values in SQL
---

If you need to swap column values in SQL, it's easy to do in most databases. The
big exception is [MySQL](#mysql). For Postgres, Oracle, SQL Server, and SQLite,
you can simply set the columns equal to each other in an `update`. Here's an
example that you can try with SQLite.  You can also try it online with [this DB
Fiddle for SQLite](https://www.db-fiddle.com/f/gRoFnCbEhWq9gxqhUUHHc4/2).

```sql
create table coordinates (
    x integer,
    y integer
);

insert into coordinates (x, y)
values (5, 12);

select * from coordinates;
```

You should see this output (after [turning headers
on](https://database.guide/format-sqlite-query-results-as-columns-with-column-headers/)):

```
sqlite> .headers on
sqlite> select * from coordinates;
x|y
5|12
```

And then if you run:

```sql
update coordinates
set x = y, y = x;

select * from coordinates;
```

The values should be swapped:

```
x|y
12|5
```

## MySQL

Unfortunately, this approach doesn't work for MySQL. You'll end up with both
columns having the same value. The output of the update will be:

```
x|y
12|12
```

You can try it for yourself with [this DB Fiddle for
MySQL](https://www.db-fiddle.com/f/dF6FFWfjKjt5HEKzEG5wRC/2).

[Artem Russakovskii](https://beerpla.net/) gives us a few workarounds in [this
post](https://beerpla.net/2009/02/17/swapping-column-values-in-mysql/).  See
[this Stack Overflow answer](https://stackoverflow.com/a/559291/1481479) for
more discussion.

The cleanest workaround is to use a temporary variable:

```sql
update coordinates
set x = (@temp := x), x = y, y = @temp;
```

You can try it for yourself with [this DB
Fiddle](https://www.db-fiddle.com/f/xxwUotZ1YBSQXvBnM9JomY/2).

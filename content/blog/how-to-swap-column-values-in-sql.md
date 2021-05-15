---
categories:
  - programming
date: 2021-05-15
draft: true
tags:
  - sql
  - postgres
  - mysql
  - sqlite
  - oracle
  - sqlserver
title: How to Swap Column Values in SQL
---

If you need to swap column values in SQL, it's easy to do in most databases. For
Postgres, Oracle, SQL Server, and SQLite, you can simply set the columns equal
to each other in an `update`. Here's an example that you can try with a SQLite
database. You can also try it online with [this DB Fiddle for
SQLite](https://www.db-fiddle.com/f/gRoFnCbEhWq9gxqhUUHHc4/2).

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

```txt
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

```txt
x|y
12|5
```

## MySQL

Unfortunately, this approach doesn't work for MySQL. If you try it, you'll end up
with both columns having the same value. The output of the update will be:

```txt
x|y
12|12
```

You can try it for yourself with [this DB Fiddle for
MySQL](https://www.db-fiddle.com/f/dF6FFWfjKjt5HEKzEG5wRC/0).

[Artem Russakovskii](https://beerpla.net/) gives us some good workarounds in
[this post](https://beerpla.net/2009/02/17/swapping-column-values-in-mysql/).

The first is similar to how we might swap variables in some programming
languages: use a temporary variable.

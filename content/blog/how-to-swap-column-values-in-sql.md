---
categories:
  - programming
date: 2021-05-14
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

If you need to swap column values in SQL, it's easy to do for most databases.
For Postgres, Oracle, SQL Server, and SQLite, you can simply set the column
equal to the other column. Here's an example. If you run:

```sql
create table foos (
    a text,
    b text
);

insert into foos (a, b)
values ('elephant', 'tiger');

select * from foos;
```

You should see this output:

```sh
a        b
elephant tiger
```

And then if you run:

```sql
update foos
set a = b, b = a;

select * from foos;
```

The values should be swapped:

```sh
a     b
tiger elephant
```

Try it with [this DB Fiddle for
Postgres](https://www.db-fiddle.com/f/tAMmoF7d444DNVrCKFV8tN/0) or [this DB
Fiddle for SQLite](https://www.db-fiddle.com/f/gRoFnCbEhWq9gxqhUUHHc4/1).

## MySQL

MySQL is trickier. If you try to use the same update as Postgres or SQLite,
you'll end up with both columns being set to the same value. The output of the
update will be:

```sh
a     b
tiger tiger
```

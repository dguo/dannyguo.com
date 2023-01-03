---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://daily.dev/blog/how-to-use-git-bisect-for-debugging
categories:
  - programming
date: "2021-05-27"
tags:
  - git
  - debugging
title: How to Use Git Bisect for Debugging
---

*This post was originally written for
[daily.dev](https://daily.dev/blog/how-to-use-git-bisect-for-debugging).*

While many programmers use [Git](https://git-scm.com/) on a daily basis, some
might not use much more than the basic commands like add, commit, push, and
pull. Yet Git has dozens of high-level
[commands](https://git-scm.com/docs/git#_git_commands). A particularly
interesting one is bisect. It allows you to efficiently search through your
commit history to identify when a change occurred. The most obvious use case for
this is to find out when a bug was introduced.

At a high level, the way bisect works is that it lets you mark commits as “good”
or “bad” until it can figure out the specific commit that caused the repository
to flip from good to bad. To minimize the number of commits you have to inspect,
it tries to stick to a [binary
search](https://en.wikipedia.org/wiki/Binary_search_algorithm) as much as
possible. For an in-depth look at how bisect works under the hood, I recommend
reading [this paper](https://git-scm.com/docs/git-bisect-lk2009), which
discusses [how the bisection algorithm
works](https://git-scm.com/docs/git-bisect-lk2009#_git_bisect_details).

Let’s think about when bisect can be useful. Then we’ll go through a tutorial.
Lastly, I’ll cover some advanced features and go over some caveats.

## When to Use Bisect

I don’t use bisect very often, but when I do, it’s usually when I’m trying to
figure out a particularly tricky problem involving a bug with an unclear origin.
Some bugs can be attributed to a very recent commit, and it’s obvious from a
quick look which one caused the issue. If a commit from this morning changed a
part of your system, and you start getting error alerts for that part, there’s a
good chance the commit from this morning is the culprit.

But other bugs are subtle, and you might not discover them until long after
their introduction to the codebase. In these cases, it can be challenging to go
through the commit history and suss out the bad commit, especially if you don’t
have a good idea of when exactly the issue started. The task can be even harder
if you don’t have a descriptive, clean commit log to read because the commit
messages are not [written well](https://chris.beams.io/posts/git-commit/).
Imagine trying to pinpoint a problematic commit when the commit log is full of
generic messages like “Fix issue” or “Clean up.”

Even when you have a decent commit log, many bugs have non-obvious causes.
Bisect provides a way to avoid wasting time and get straight to figuring out the
source of the problem. Whenever you find yourself asking when a change happened,
bisect should be one of the techniques you consider using.

## Tutorial

Let’s go through an example. You can clone [this
repo](https://github.com/dguo/git-bisect-demo) if you want to try it out for
yourself. It contains an `index.html` file with the following content:

```html
<!DOCTYPE html>
<html lang="esperanto">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Git bisect is awesome!</title>
        <meta name="description" content="Git bisect can be a great debugging tool" />
    </head>
    <body>
        <h1>How to Use Git Bisect for Debugging</h1>
        <p>
            <a href="https://git-scm.com/">Git</a> bisect can be a great way to
            determine when a change was introduced into a codebase.
        </p>
        <p>
            It's efficient because it uses binary search.
        </p>
    </body>
</html>
```

You might notice that the language is incorrectly set to
[Esperanto](https://en.wikipedia.org/wiki/Esperanto) instead of English. Let’s
use bisect to find the commit where that happened. You can start a bisect
session with `git bisect start`. Note that you have to be at the top-level
directory of the repository or else bisect will refuse to start. If you run `git
status`, you should see this message:

```
You are currently bisecting, started from branch 'main'.
  (use "git bisect reset" to get back to the original branch)
```

To end the bisect session at any point, run `git bisect reset`.

Mark the current commit (HEAD) as bad with `git bisect bad`. Next, you need to
determine a commit that doesn’t have the problem. For a real world bug, maybe
you think the problem started occurring about a month ago. You can `git
checkout` a commit from two months before and hopefully confirm the problem
doesn’t occur with that commit. If it still does, you’ll need to go back even
further. Once you find a good commit, you mark it with `git bisect good
<commit>`. You can also run just `git bisect good` to mark the current commit.

For this repo, let’s go all the way back to the first commit and mark it as good
with `git bisect good b35894eec380a1039f07f47c1d0b63fa0d015190`. Now that Git
has a start (the good commit) and an end (the bad commit) to work with, it can
proceed with the bisection. You should see this message:

```
Bisecting: 5 revisions left to test after this (roughly 3 steps)
[d44fbe511a46fa78e7428077d74b0f18897ebe65] Add a meta description
```

You’re now on a commit in the middle of the range, and you can confirm if the
problem still exists or not. Open `index.html` and check if the language is
still set to “esperanto” or if it’s set to the correct value of “en.” Mark the
commit with `git bisect bad` or `git bisect good`, and Git will put you on a new
commit in the middle of the new search range. Repeat the process until Git
determines the point at which one commit is good, and the following one is bad:

```
e4203915d6639fdc7028d69a9cc773c2fc2b584b is the first bad commit
commit e4203915d6639fdc7028d69a9cc773c2fc2b584b
Author: Danny Guo
Date:   Fri Apr 30 23:52:49 2021 -0400

        Make the page responsive

index.html | 3 ++-
1 file changed, 2 insertions(+), 1 deletion(-)
```

And that’s it! This commit changed the value from “en” to “esperanto.” Run `git
bisect reset` to end the session. In a real world situation, the changes in the
identified commit will hopefully make it easy to determine the cause of the bug.

## Advanced Features

A typical bisect session doesn’t require more than the `start`, `bad`, and
`good` subcommands, but there are some advanced features that even programmers
who are familiar with bisect might not know about.

### Skip Commits

`git bisect skip` lets you skip a commit or range of commits if you know they
aren’t relevant to what you’re trying to pinpoint. `git bisect skip` will skip
whatever commit you are currently on, while `git bisect skip
<start-commit>..<end-commit>` will skip every commit after `<start-commit>`, up
to and including `<end-commit>`. If you want to also skip `<start-commit>`, you
can use `git bisect skip <start-commit> <start-commit>..<end-commit>`.

Skipping commits can make your session go faster, but be wary that it can also
cause bisect to fail to identify a specific commit and issue a message like
this:

```
There are only 'skip'ped commits left to test.
The first bad commit could be any of:
87699539acfe49ff1307cd0fa794d8422ec830c5
9f3b97749781017b59f949f62042552fdb44c950
9fdb8c5dabcd8577f358986a27b80a9ffee6be62
We cannot bisect more!
```

### Redo a Session

You can use `git bisect log` to produce a log of the current session. Here’s an
example:

```
git bisect start
# bad: [73ab00c89f17ea5fa19478a9ce4a4488a2bb57fd] Add a README
git bisect bad 73ab00c89f17ea5fa19478a9ce4a4488a2bb57fd
# good: [b35894eec380a1039f07f47c1d0b63fa0d015190] Initial commit
git bisect good b35894eec380a1039f07f47c1d0b63fa0d015190
# good: [d44fbe511a46fa78e7428077d74b0f18897ebe65] Add a meta description
git bisect good d44fbe511a46fa78e7428077d74b0f18897ebe65
# bad: [e4203915d6639fdc7028d69a9cc773c2fc2b584b] Make the page responsive
git bisect bad e4203915d6639fdc7028d69a9cc773c2fc2b584b
```

If you save this output to a file with `git bisect log > bisect.txt`, you can
edit the text file manually, reset the session, and then redo the session with
`git bisect replay bisect.txt`.

This is also a way to fix mistakes. You can edit `bisect.text` before running
the replay command.

### Run a Script or Command

Bisect can automatically complete the session for you if you give it a command
or script to run, so you don’t have to do it manually for each commit. You can
try this with the example repo. Start a session and set the initial bad and good
commits as before. Then run `git bisect run grep -q 'lang="en"' index.html`.
The `-q` flag suppresses the [grep](https://en.wikipedia.org/wiki/Grep) output.

Git will run the given command for each commit. If the command returns an exit
code of 0, Git will mark the commit as good. If the command returns an exit code
of 125, Git will mark the commit as skipped. And if the command returns any
other exit code between 1 and 127 (inclusive), Git will mark the commit as bad.
So in this case, the grep command will return 0 if it finds the correct
language. When bisect is done, you should see this output:

```
running grep -q lang="en" index.html
Bisecting: 2 revisions left to test after this (roughly 2 steps)
[e4203915d6639fdc7028d69a9cc773c2fc2b584b] Make the page responsive
running grep -q lang="en" index.html
Bisecting: 0 revisions left to test after this (roughly 1 step)
[2003e4a84618a340616df6d214d10d7fe421871c] Add a paragraph
running grep -q lang="en" index.html
e4203915d6639fdc7028d69a9cc773c2fc2b584b is the first bad commit
commit e4203915d6639fdc7028d69a9cc773c2fc2b584b
Author: Danny Guo
Date:   Fri Apr 30 23:52:49 2021 -0400

        Make the page responsive

 index.html | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)
bisect run success
```

So you get the same result without having to check commits one by one. You can
imagine how useful this can be if you need to run bisect on a range of dozens,
hundreds, or even thousands of commits.

### Change Terms

If the “bad” and “good” subcommand names don’t make sense for your use case, you
can change the terms that bisect uses. Not every session involves bugs. Maybe
you just want to know when you last updated a section of documentation. For
these situations, Git also allows you to use “old” and “new” instead of “bad”
and “good,” respectively. If even these don’t work, you can set custom terms
using `git bisect start --term-old <old-substitute> --term-new <new-substitute>`
and then mark commits with `git bisect <old-substitute>` and `git bisect
<new-substitute>`.

## Caveats

While bisect can be a powerful tool, it’s important to be aware of situations
where it doesn’t work so well. The first is when you have bugs that aren’t
reliably reproducible, making it difficult for bisect to pinpoint the start of
the problem. Bisect only works if your determination of good and bad commits is
accurate. If your bug is due to a [race
condition](https://en.wikipedia.org/wiki/Race_condition), for example, you might
incorrectly mark a commit as good or bad, depending on whether or not the race
condition worked out in your favor. Bisect might fail to tell you the offending
commit, but at least the failure indicates that a race condition or something
like that is a possibility.

Another problem could be that the bug depends on something that is external to
the codebase, such as an issue with a third party vendor or particular data in
your production database that doesn’t come up in your local environment. Like a
race condition, these circumstances can also make it hard to confidently mark
commits as good or bad.

Lastly, it’s possible that the bug started occurring far enough in the past that
for older commits, you can’t easily run the project in the necessary way to
determine if the problem exists. Development environments evolve over time, and
complex ones can make it difficult for you to work with old versions, slowing
down your bisect session.

## Conclusion

I didn’t learn about bisect until a few years into my first programming job. I
wish I had learned it earlier! I appreciate it because it can be so useful for
bugs that are hard to debug. Many bugs are fairly simple to figure out by just
examining an error message, a stack trace, the current code, etc. But the
trickier bugs can take hours if not days of investigation. Git bisect can cut
that time down with satisfying efficiency.

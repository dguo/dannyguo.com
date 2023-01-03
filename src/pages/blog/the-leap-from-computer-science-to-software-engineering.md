---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date:
draft: true
tags:
  - computer science
title: The Leap From Computer Science to Software Engineering
---

Right before I left my previous job, a new junior engineer asked me if I had
any advice. I took that as an opportunity to reflect on what I had learned in
four years of working after graduating college. What that really meant was
figuring out what distinguishes me as a computer science student from me as
a software engineer.

What do I take for granted when I have conversations with other software
engineers?

As a disclaimer, I only minored in CS, taking five courses in total. I also
never did a software engineering internship, which is how many CS students
start to make the transition from student to professional.

In my job, I learned about all the additional skills that go into software
development. This is a list of topics that I think is broadly applicable.

If there's one thing I've learned, it's that the code itself is quite often one
of the easier parts of a project. Getting something in a somewhat working state
generally isn't that hard. The challenge comes from everything around the code.

## Requirements

In college, assignments were well-specified, and many of them had been used for
hundreds if not thousands of students before me. For the most part, these
assignments gave me very clear goals to work towards.

The real world isn't like that very often. Ill-defined requirements are common,
and people don't know what they really need or want. This frustrated me at
first, but I eventually realized that it's my responsibility too to help figure
how something should work, even if there's a "business owner."

## Third party code

In college, I almost never had to use third party libraries and frameworks.

Now, I routinely search to see if someone else has already created a tool that
solves my immediate problem. For most problems, there are multiple solutions,
and the challenge becomes figuring out which one to use. The routine of
evaluating third party code by reading its documentation (hopefully it has
documentation in the first place), looking for tests, checking out activity to
determine if it's effectively abandoned, etc. is one I do all the time now.

## Documentation

My college assignments required written READMEs and explanations, but I didn't
fully appreciate the enormous value of good documentation until I first started
to work with things that lacked it. I remind myself constantly that nobody can
read my mind. If it's not in the README, external documentation, Wiki, etc.,
then it can be very frustrating to try to figure something out as simple as how
to actually install the thing.

## Logging

Logging can be an extremely useful way to figure out why something isn't
working.  Using logging levels, aggregation, and searching are all basic
requirements for decent logging.

## Monitoring

## Promotion

## Testing

Some of my college assignments did expose me to the concept of automated tests,
but I'm still working on writing good, reliable tests.

## Environments

In college, I had never been exposed to the concept of multiple environments,
such as development, staging, and production.

Now I find it frustrating if I have to work with something that doesn't have
dedicated environments.

## Continuous integration and deployment

## Collaboration

## Legacy code

In college, everything I wrote was from scratch.

I've gradually learned how to dive into existing codebases. I've seen plenty of
`TODO` comments that are years old and instances of kludgy fixes and
workarounds for horrifying issues.

## Tool awareness

## Not invented here syndrome

## Decision reversibility

Learn which decisions are easy to change later and which are hard.

Jeff Bezos [calls
this](https://qz.com/961350/lessons-from-the-bezos-way-and-the-success-of-amazon/)
the difference between Type 1 decisions and Type 2 decisions.  Choosing which
implementation of bcrypt to use is not nearly as important a decision, as say,
choosing which ORM to use. The former will likely be used in only a few places.
The latter will be used all over.

## Go vertical before going horizontal

When I first worked on a brand new [three-tier
architecture](https://en.wikipedia.org/wiki/Multitier_architecture), I
approached it by trying to do all the database work first, then all the service
work, and then all the UI work. Overall, the project took me longer than it
should have because I underestimated how long it would take to hook the
different layers together.

## Think before you write

## Explore

Read technical blogs. Follow Hacker News and particular subreddits. Check out
GitLogs.

Think about what can go wrong.

Changing configurations can break things.

Use the right tool for the job.

Internalize the [twelve-factor app](https://12factor.net/).

## Make things

## Complications

## Debugging

I still use `print` debugging for the most part.

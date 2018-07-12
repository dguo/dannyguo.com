---
categories:
  - programming
date: "2018-06-25"
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
never did a software engineering internship, which I assume is how most CS
students start to make the transition from student to professional.

In my job, I learned about all the additional skills that go into software
development. This is a list of topics that I think is broadly applicable.

## Requirements

## Documentation

## Logging

## Monitoring

## Promotion

## Testing

## Environments

In school, I had never been exposed to the concept of multiple environments,
such as development, test, and production.

## Continuous integration and deployment

## Collaboration

## Legacy code

## Tool awareness

## Not invented here syndrome

## Aphorisms

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

Think before you write.

## Explore

Read technical blogs. Follow Hacker News and particular subreddits. Check out
GitLogs.

Think about what can go wrong.

Changing configurations can break things.

Use the right tool for the job.

Internalize the [twelve-factor app](https://12factor.net/).

## Make things

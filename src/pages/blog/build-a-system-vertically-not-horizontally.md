---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-08-06"
unlisted: true
tags:
  -
title: Build a System Vertically, Not Horizontally
---

After college, my first big programming project for work was to build a
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app from
scratch. The most important lesson that I learned from it was that when I'm in
an unfamilar environment, I should prefer to build a system vertically instead
of doing it horizontally, layer by layer. The points at which pieces connect
together have the greatest opportunities for surprises and slowdowns.

For my project, I started with the database schema. Then I followed my team's
pattern in writing database accessor code. Next, I wrote business logic code in
a backend service. Lastly, I wrote the
[UI](https://en.wikipedia.org/wiki/User_interface) code that called the backend
service. So I started at the bottom and completed each layer before moving on to
the next one. At the end, I deployed the pieces and connected them together.

The deployment process was the hardest part of the project. For the code, I
sometimes needed help from my mentor. But for the most part, it was up to me how
fast I completed it. For deployment, however, there were multiple points that I
needed another team to do something.

I remember one Friday afternoon when I learned that I needed someone to add a
connection string to a configuration file. It was a manual process, and only one
person was really trusted to make the change. That person had left for the day,
so I had to wait until the next week. Yes, there are meta problems with that
situation, but it was the reality that I had to work with. In the context of
completing my project, it would have been better for me to have knocked out the
configuration charge early on. I could have requested the change and worked on
my code in parallel while I was waiting for the change.

Issues like that made the project stretch on longer than it should have. I'd be
blocked by things that were not entirely within my control and because I had
already finished the code that *was* up to me, they'd be total blockers.

If I were to do a project like that again, I'd try to get something that works
into production as quickly as possible. I'd build one feature end to end first.
Then I'd iterate and build the other features.

## MVP

This is the system equivalent of a
[minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product). A UI that can talk
to a backend service that can talk to a database to fulfill one user request is
a better starting point than a sophisticated, totally fleshed out backend that
has no corresponding frontend for someone to actually do anything. The former is
a minimum viable system. The latter doesn't have all the pieces that the system
needs.

For a CRUD app, code tends to be the easiest thing to figure out, but creating a
robust, working system involves more than code. Computer science classes don't
tend to involve much networking, security policies, and configuration, while
real world programming can have plenty of all that.

This also applies to something like integrating with a new API or external
system. Instead of expanding on my code to support what I want to do with the
API, my initial focus would be on interacting with the API to figure out how it
really behaves. Maybe there's an IP
[allowlist](https://en.wikipedia.org/wiki/Whitelist) that needs to be updated.
Or maybe I'll learn that requests to my system won't come with a
[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
header, which causes my framework to not parse the request (true story). Many
integrations will have kinks like that, and I want to find them as early as
possible.

## Learning

Another way I think about this topic is that it's about learning more
efficiently. Once you've learned how to retrieve data from the database with
whatever language/framework/pattern you're expected to use, doing it for a
different piece of data probably doesn't teach you much more. It's too similar
to what you've already done. Whereas implementing a frontend screen to show that
data is going to teach you a lot more.

It's like broadening your cultural awareness by traveling. If you live in the
United States, going to Canada isn't going to be much of a culture shock. Going
to Cambodia or Niger, on the other hand, would expose you to many more new
things.

To the extent that your success depends on crossing the boundaries in a system,
I recommend doing it as early as possible. It will help you to make better plans
and to become a little more accurate in the eternal challenge of estimating
how long things will take.

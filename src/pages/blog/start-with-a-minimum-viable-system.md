---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-08-09"
tags:
  - systems
title: Start With a Minimum Viable System
---

After college, my first big programming project for work was to build a
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app from
scratch. The most important lesson that I learned from it was that when I'm in
an unfamiliar environment, I should prefer to build a minimum viable system by
developing things vertically instead of horizontally. That means building just a
portion of a layer and then moving to the next layer as quickly as possible.
Rather than building out entire layers sequentially. Connecting the pieces of a
system can be surprisingly challenging, which means that if I leave it to the
end, I can run into unexpected issues and slowdowns.

For my project, I started with the database schema. Then I followed my team's
pattern in writing database accessor code. Next, I wrote business logic code in
a backend service. Lastly, I wrote the
[UI](https://en.wikipedia.org/wiki/User_interface) code that called the backend
service. So I started at the bottom and completed each layer for all the
required features before moving to the next layer. At the end, I deployed the
pieces and connected them together.

The deployment process was the hardest part of the project. For the code, I
sometimes needed help from my mentor. But for the most part, it was up to me how
fast I completed it. For deployment, however, there were multiple times that I
needed another team to do something.

I remember one Friday afternoon when I learned that I needed someone to add a
connection string to a configuration file. It was a manual process, and only one
person was really trusted to make the change. That person had left for the day,
so I had to wait until the next week. Yes, there are process/institutional
problems with that situation, but it was the reality that I had to work with. In
the context of completing my project, I should have knocked out the
configuration charge early on. I could have requested the change and worked on
my code in parallel while I was waiting.

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

Consider what a minimum viable system for a todo app looks like compared to an
unusable system.

![diagrams for a todo app](https://i.imgur.com/a9a7zV7.jpg)

For a CRUD app, code tends to be the easiest thing to figure out, but creating a
robust, working system involves more than code. Computer science classes don't
involve much networking, security policies, and configuration, while real world
programming can have plenty of all that.

This also applies to something like integrating with a new API or external
system. Instead of expanding on my code to support what I want to do with the
API, I would inititally focus on interacting with the API to figure out how it
really behaves. Maybe there's an IP
[allowlist](https://en.wikipedia.org/wiki/Whitelist) that needs to be updated.
Or maybe I'll learn that requests to my system won't come with a
[Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
header, which causes my framework to not parse the request (true story). Many
integrations will have kinks like that, and I want to find them as early as
possible.

## Learning

Another way I think about minimum viable systems is that it's about learning
more efficiently. Once you've learned how to retrieve data from the database
with whatever language/framework/library/pattern you're expected to use, doing
it for a different piece of data probably doesn't teach you much more. It's too
similar to what you've already done. Whereas implementing the UI to show that
data is going to teach you a lot more.

One objection could be that you might only be responsible for one piece of the
system, or maybe you want to focus on learning one topic in depth (e.g. becoming
a database expert). That makes sense, but for any project that involves more
than one piece of a system, you can still advocate for integrating the pieces
quickly. To the extent that your success depends on crossing the boundaries in a
system, I recommend doing it as early as possible. It will save you pain and
make it easier to estimate how long things will take.

---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - communication
date: "2024-09-27"
unlisted: true
title: The Black Hole Problem
---

A [quote](https://scrapsfromtheloft.com/movies/interstellar-2014-transcript/)
from [Interstellar](https://en.wikipedia.org/wiki/Interstellar_(film)) talking
about a [black hole](https://en.wikipedia.org/wiki/Black_hole):

> ROMILLY: Nothing escapes that horizon.
>
> Not even light.
>
> Oh, the answer’s there, just no way to see it.

In companies, one problem that I've occasionally run into is what I've come to
call the black hole problem. It means making a request of some kind and feeling
like it has gone into a black hole. You're not sure who has seen the request.
You're not sure when you'll get a response. You don't even know *if* you'll get
a response. This could take many forms, like asking a question to a person or
group or putting in a ticket for something.

The black hole problem is one way to gauge how dysfunctional a company is. No
company is perfect, but the more it feels like my requests are going into a
black hole, the less likely it is that the company's internal processes and
systems are designed or operating well in general.

It reminds me of building user interfaces, which have varying degrees of
responsiveness to their users. A bug might cause some requests to fail. Doing
something else might take so long that some users give up on it and leave before
it finishes. A third thing might silently succeed, with no feedback to the user
that something did in fact happen. It takes effort to build user interfaces that
feel fast, reliable, and predictable.

Similarly, companies should actively think about how to make its systems,
processes, and people more responsive. Whenever someone makes a request, it's
going into some sort of queue. That queue could be implicit or explicit.

If you ask someone a question, you are effectively giving them a piece of work.
You expect a response, but you probably don't know all the other work that the
other person has. That person has an implicit queue in their head of everything
that they need to do, and you don't know what position your question has in that
queue.

Or maybe you put in a ticket to IT for help with something. Your ticket is
explicitly going into whatever queue your IT department has set up to triage and
deal with incoming requests.

When I run into the black hole problem, I sometimes wish that we would make
these implicit and explicit queues more like the queues that we use in software
systems. I'd like to have
[SLAs](https://en.wikipedia.org/wiki/Service-level_agreement). I'd like to be
able to see metrics like how backed up a queue is and what is its typical
throughput. I'd like to have monitoring and alerting so that when something
isn't working well, I can easily find out about it and hopefully improve it.

Of course, that all takes work and introduces overhead that wouldn't always be
worth it. At one end of the spectrum, every queue in a company would be totally
transparent. I'd be able to see every little thing that someone or something has
to respond to. I would know where all my requests sit in those queues, and I
would have confidence in when those requests would be fulfilled (or at least
when I'd get pushback). And when a queue is failing, there would be
accountability of some sort.

On the other end of the spectrum, you have the black hole problem everywhere.
For any given company, there's a point on that spectrum that is optimal. But by
default, companies tend to gravitate towards the black hole end, since it takes
no work or effort to make things opaque.

In the meantime, the most effective strategy I have for dealing with the black
hole problem is to keep track of my outbound requests. I add following up on
things to my own todo list so that if something does go into a black hole, I can
proactively deal with it.

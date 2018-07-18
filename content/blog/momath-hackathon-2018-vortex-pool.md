---
categories:
  - programming
date: "2018-07-17"
draft: true
tags:
  - hackathon
title: "MoMath Hackathon 2018: Vortex Pool"
---

This past weekend, some friends and I went to the [National Museum of
Mathematics](https://momath.org/) (MoMath) to participate in their second
annual [Expressions hackathon](http://hackathon.momath.org/).

## Dynamic Wall

As soon as you enter the museum, there's a big, animated wall on the right
side. It's made up of multiple slats that can move independently from each
other. The top and bottom of each slat can move in and out.

One category for the hackthon was to develop an animation for this wall using
the [SDK](https://github.com/momath/dynamic-wall).

{{< youtube quOzjpmQkOg >}}

## Math Square

Another category was to develop something for the museum's interactive light up
floor, which also has a [SDK](https://github.com/momath/math-square). The floor
consists of a large pixel display, along with a grid of binary sensors that can
detect the locations of people.

{{< youtube qeOW8Umr0Hk >}}

## Brainstorming

The other hackathon categories were [augmented
reality](https://en.wikipedia.org/wiki/Augmented_reality) and an open-ended
category. We brainstormed for a while and came up with more ideas for the Math
Square than for anything else.

## Wind Tunnel

We ended up deciding to try creating a [wind
tunnel](https://en.wikipedia.org/wiki/Wind_tunnel) simulation. We did create a
working prototype, but it wasn't as good as we wanted it to be. In particular,
the calculations for the velocity changes for each particle was intensive
enough that it was hard to keep the whole thing from slowing to a crawl. As we
packed up for the night, we decided that it might be worth it to try creating a
[whirlpool](https://en.wikipedia.org/wiki/Whirlpool)-like simulation instead.

## Vortex Pool

The next morning, we were able to get the new approach working. It looks much
more interesting than our wind tunnel did, and the implementation is simpler
and less computationally intensive. The source code is on
[GitHub](https://github.com/katbug/momath-vortexpool).

We won a runner-up prize for the category. The winning submission is very cool,
and you can check it out on
[GitHub](https://github.com/jlam55555/howitfeelstochew6gum/tree/master/Spirographs%20of%20Venus%20--%20Math%20Square).

## Tile Flip

One of our friends also single-handedly recreated a puzzle game from
[Zelda](https://en.wikipedia.org/wiki/The_Legend_of_Zelda). It's on
[GitHub](https://github.com/bishpls/tile-flip) as well.

{{< youtube utnz-BglP0w >}}

## Conclusion

This hackathon was a fun one.

Thanks to [Two Sigma](http://www.twosigma.com/) for sponsoring and presumably
paying for all the food!

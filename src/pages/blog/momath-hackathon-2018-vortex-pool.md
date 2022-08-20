---
categories:
  - programming
date: "2018-07-23"
tags:
  - hackathon
  - MoMath
title: "MoMath Hackathon 2018: Vortex Pool"
---

Two weekends ago, some friends and I went to the [National Museum of
Mathematics](https://momath.org/) (MoMath) to participate in their second
annual [Expressions hackathon](http://hackathon.momath.org/). The museum has
many interactive exhibits, and two of them have SDKs.

## Dynamic Wall

As soon as you enter the museum, there's a big, animated wall on the right
side. It's made up of multiple slats that can move independently from each
other. The top and bottom of each slat can move in and out (perpendicular to
the wall). One category for the hackathon was to develop an animation for this
wall using the [SDK](https://github.com/momath/dynamic-wall).

{{< youtube quOzjpmQkOg >}}

## Math Square

Another category was to develop something for the museum's interactive light up
floor, which also has a [SDK](https://github.com/momath/math-square). The floor
is basically a large pixel display, along with a grid of binary sensors that
can detect the locations of people. This video shows the floor acting as a
[Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram).

{{< youtube qeOW8Umr0Hk >}}

## Wind Tunnel

The other hackathon categories were [augmented
reality](https://en.wikipedia.org/wiki/Augmented_reality) and an open-ended
category. We brainstormed for a while and came up with more ideas for the Math
Square than for anything else. Many of our ideas were for games, but we settled
on trying to create a [wind tunnel](https://en.wikipedia.org/wiki/Wind_tunnel)
simulation. The idea was that when people step on the square, we would display
[airfoil](https://en.wikipedia.org/wiki/Airfoil) shapes. From one side of the
square, we would generate a stream of particles, and their velocities would
change in the presence of the airfoils. We also wanted to create larger
airfoils when multiple people were close to each other.

By the end of the night, we had a working prototype. It looked like this.

{{< video lrMngzB >}}

But it wasn't as good as we wanted it to be. In particular, the calculations
for the velocity changes for each particle was expensive enough that
performance became an issue. It also didn't work with more than one airfoil.
When we tested the simulation on the actual floor, it looked pretty lame. To
make the simulation look more realistic, we would have had to tweak the
calculations or add collision detection. As we packed up for the day, we
discussed trying to create a
[whirlpool](https://en.wikipedia.org/wiki/Whirlpool)-like simulation instead.

## Vortex Pool

The next morning, we switched to the new approach. It looks much more
interesting than our wind tunnel did, and the implementation is simpler and far
less computationally intensive. My friend who handled all the velocity
calculations said this was because each airfoil was essentially made up of
dozens of the [vortexes](https://en.wikipedia.org/wiki/Vortex) that we were
rendering now with a single digit count. Check out this [online
demo](https://katbug.github.io/momath-vortexpool/). Click to create vortexes.

{{< video taEXQoG >}}

The source code, along with a more in-depth explanation, is on
[GitHub](https://github.com/katbug/momath-vortexpool). We won a [runner-up
prize](http://hackathon.momath.org/showcase/) for the category, and we're
hopeful it will actually be used on the museum floor. We didn't think to take a
video of it in action, but here are some pictures.

![Vortex Pool 1](https://i.imgur.com/tdHwdwE.jpg)

![Vortex Pool 2](https://i.imgur.com/L4wXAYG.jpg)

![Vortex Pool 3](https://i.imgur.com/IwNWj3F.jpg)

The winning submission for the category is very cool, and it's also on
[GitHub](https://github.com/jlam55555/howitfeelstochew6gum/tree/master/Spirographs%20of%20Venus%20--%20Math%20Square).

## Tile Flip

One of our friends also single-handedly recreated a puzzle game from
[Zelda](https://en.wikipedia.org/wiki/The_Legend_of_Zelda), complete with level
progression! It's on [GitHub](https://github.com/bishpls/tile-flip) as well.

{{< youtube utnz-BglP0w >}}

## Conclusion

Vortex Pool is very different from what I usually work on, so it was a great
change of pace. I also got some exposure to new tools. It was my first time
using [p5.js](https://p5js.org/) (I had never heard of it or
[Processing](https://processing.org/)), and I got to try out
[Rollup](https://rollupjs.org/), which I had [read
about](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
but never used.

This hackathon is supposed to be an annual event, and the one we attended was
the second one ever. I encourage anyone in NYC with an interest in programming
to try it out in the future.

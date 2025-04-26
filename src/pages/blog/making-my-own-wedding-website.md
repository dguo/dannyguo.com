---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2025-04-25"
unlisted: true
title: Making My Own Wedding Website
---

A few years ago, I made [my own wedding
website](https://www.dannyguo.com/jennyanddannyl). Part of the motivation was
pride. Wedding websites are commodities, with many free options like
[Joy](https://withjoy.com/) and [The Knot](https://www.theknot.com). But two of
my friends who are also software developers made their own websites, and I
wasn't about to be the one to break that streak. It also seemed like it'd be fun
to build my own.

Another benefit is that it can live indefinitely. Or at least it has a better
chance to than if I used one of the platforms. If I get in trouble with my wife
20 years from now, maybe I can pull up the website to remind her how much she
loves me. As long as AI doesn't somehow make HTML obsolete by then, I've got a
chance.

## Stack

I ended up only doing the easy part, which is displaying static content. I
linked out to Joy for actually collecting info and managing RSVPs. So describing
my "stack" is overstating things a bit for something so simple, but I took this
as an opportunity to try out [Next.js](https://nextjs.org/), and I handled
styling with [Tailwind](https://tailwindcss.com/).

If I were to redo it, [Astro](https://astro.build/) or even plain HTML would
also work fine. This is also a case where I think [vibe
coding](https://en.wikipedia.org/wiki/Vibe_coding) would actually work really
well, since the requirements are so basic.

## Domain

One challenge did come from me being cheap. I wanted to host the website on my
personal domain ([dannyguo.com](https://www.dannyguo.com/)) rather than buying a
new custom domain and then paying hundreds of dollars for it over the course of
a lifetime. Because who actually gives up a domain after collecting it?

I also wanted my wedding website to be a separate repo so that it could be
private since my personal website's repo [is
public](https://github.com/dguo/dannyguo.com). My personal site is hosted on
[Netlify](https://www.netlify.com/), which has [redirect
features](https://docs.netlify.com/routing/redirects/). So my wedding website is
deployed as a separate Netlify website, but then my Netlify configuration for
`dannyguo.com` will transparently serve the wedding website when someone goes to
`dannyguo.com/jennyanddanny`. Getting this setup to work properly took a bit of
tweaking. I configured
[basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
for the Next.js site and configured a redirect in my personal website's
`netlify.toml`. But I had to add a second redirect rule to work around an
infinite redirect issue.

```toml
# We shouldn't need this redirect for the home page because of
# the next, catch-all redirect. But without this one, we get
# an infinite redirect issue for some reason.
[[redirects]]
  from = "/jennyanddanny"
  to = "https://jenny-and-danny.netlify.app/jennyanddanny"
  status = 200
  force = true

[[redirects]]
  from = "/jennyanddanny/*"
  to = "https://jenny-and-danny.netlify.app/jennyanddanny/:splat"
  status = 200
  force = true
```

And I still ran into [a Netlify issue serving a static
image](https://github.com/opennextjs/opennextjs-netlify/issues/671). I had to
wait for Netlify to fix the issue. Which reminded me that the creators of
Next.js have their own hosting platform ([Vercel](https://vercel.com)), so it
shouldn't be surprising that other platforms would have some edge cases.

I don't remember why I didn't make the website a subdomain instead (i.e.
`jennyanddanny.dannyguo.com`) because that probably would have been less
troublesome. Maybe because that URL seems uglier to me than
`dannyguo.com/jennyanddanny`.

## Personalization

The website is simple, but one thing I'm proud of is that I added a touch of
personalization. Every guest got a personal password (in the form of a
passphrase) that was somehow unique to them or an inside joke. And then on the
invitation page, in addition to a picture of myself and my now-wife, I also
loaded pictures of us with the guest.

This was a fair amount of work to do, mainly because I needed to dig up good
pictures! It took hours. My friends don't have a good habit of taking pictures
anymore, so some of these were hard to find. I had go deep in Google Photos and
Facebook, and many people have stopped using Facebook. Some of them to the point
of deleting their profiles entirely. But I was able to find pictures of almost
everyone.

Going through the pictures was a nice moment of nostaliga, and it also reminded
me of why I wanted them at my wedding in the first place.

## Authentication

For actually implementing the presonalization. I wanted to keep things as simple
as possible. So for authentication, I had a single [API
route](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
for logging in. That route is powered by a [Netlify serverless
function](https://docs.netlify.com/functions/overview/).

It checks if the supplied password matches one of the personal passwords. Or if
it matches a generic password that is stored as a [Netlify environment
variable](https://docs.netlify.com/environment-variables/overview/).


```typescript
const personalInvite = PERSONAL_PASSWORDS_TO_DATA[req.body.password];

if (
    req.body.password !== process.env.PASSWORD &&
    !personalInvite
) {
    res.status(400).json({ error: "Incorrect password" });
    return;
}

```

Yes, this should theoretically use
[crypto.timingSafeEqual](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b).
And yes, there should probably be rate limiting to mitigate a bruce force
attack. But I didn't bother going that far. I did ask a few of my more
mischevious friends to please don't attack my site.

To keep people logged in, I simply set a cookie with the generic password. Yes,
this is a terrible method as far as security goes! But I wasn't protecting
anything particularly sensitive. I did hash the value using the IP address for
some obfuscation.

```typescript
const hashedPassword = crypto
    .createHmac("sha256", ip)
    .update(process.env.PASSWORD)
    .digest("hex");
```

I then set a separate cookie to store the user id for anyone who used a personal
password.

```typescript
const cookies = [
    serialize("PASSWORD", hashedPassword, {
      ...cookieOptions,
    }),
  ];

if (personalInvite) {
    cookies.push(
      serialize("USER_ID", personalInvite.userId, {
        ...cookieOptions,
      })
    );
} else if (req.cookies["USER_ID"]) {
    cookies.push(
      serialize("USER_ID", "", {
        ...cookieOptions,
        maxAge: -1,
      })
    );
}

res.setHeader("Set-Cookie", cookies);
```

I used UUIDs for the user ids so someone wouldn't be able to iterate through the
ids. Though that was overkill since it didn't really matter if friends were able
to see pictures for other people.

Then I had [Next.js
middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
that would check the cookie value for all routes that require being logged in.

In retrospect, I should have implemented this stateless authentication with a
[JWT](https://jwt.is/), since that wouldn't have taken much more work but
avoids the security concerns that come with storing a password in a cookie.

## Conclusion

Using a wedding platform to make the site would have taken almost no time. But
putting in the effort to make my own made it more special to me. I was also free
to do gratuitous things like add a confetti animation to my save the date using
[react-confetti](https://github.com/alampros/react-confetti).

Now to see how long the website actually lasts..

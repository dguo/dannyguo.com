---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - writing
date: "2023-03-24"
unlisted: true
tags:
  - blogging
title: Why I Blog
---

Some people have asked me why I blog and why I value writing in general. These
are my reasons, in roughly decreasing order of importance to me.

## Clarify My Thinking

Writing is one of the best tools I have to clarify my own thinking. I'm a
natural ruminator. I'm not good at thinking on the spot. I prefer to have time
to think through details, connections, nuances, and consequences.

Writing lets me do that while also helping me to avoid going around in circles.
When thoughts are in my head, it's easy for them to get jumbled up. I miss
things, and I keep coming back to the same thoughts, leading to the unproductive
ruminating. But writing my thoughts down stops that process. I am forced to
organize my thoughts in a coherent manner and to acknowledge when they don't
make sense. Thoughts in my head are like a cloudy mixture of dirty water, while
writing is like a filter for that water. It removes the nonsense from my
thinking.

If you had asked me when I was a student what the purpose of writing is, I would
have said something like putting what you think into words. What I understand
now is that the very act of writing can change your thinking. Writing is not
mere transcription. It can be a way to think more clearly and to *produce*
thoughts. For example, I had never thought of the analogy to filtering dirty
water until I sat down to edit this section for maybe the fourth time.

This isn't an original thought of mine. See [Paul
Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer))'s
[essay](http://www.paulgraham.com/words.html) on "Putting Ideas Into Words."

When I am done writing something, I can have a different or more nuanced
perspective than when I started. And even when that doesn't happen, writing
still gives me better words to express myself. Going from thoughts to words is
messy. I get frustrated when I talk to someone and feel like they aren't
understanding me only because I'm not using the right words. So I love hitting
upon precise wording that accurately captures what I am thinking or feeling.
That's a lot easier for me to do when I am writing because I have the space to
play around with different words and to think about how someone else would
interpret them.

## Sharing Knowledge and Ideas

I also love the feeling that I get from reading a great blog post, whether the
post perfectly solves a problem that I have, teaches me something new, or
encourages me to change my mind about something.

One reason is that I want to avoid learning by making mistakes. While I value
that process when it happens, it's still painful and inefficient. Instead, I
want to learn from other people so that I avoid making the same mistakes that
they do. Likewise, I don't want others to make my mistakes, which is why I have
no problem telling the world that I once [published an AWS secret key to a
public GitHub
repo](https://www.dannyguo.com/blog/i-published-my-aws-secret-key-to-github/).

Every medium for sharing information has its advantages and disadvantages, but I
generally prefer blog posts. They allow room for more nuance and detail than
tweets, they take much less time to read than books, they are easy to consume at
my own pace (unlike videos), and they are easy to link to and reference.

So blogging is a way for me to share what I know. I don't claim to actually know
all that much, but I believe that everyone has something worth sharing. The idea
that my posts could be helpful for even just one other person motivates me. And
I know from comments that at least a few people have found some of my posts
helpful, and that alone is tremendously gratifying.

## Learn Things

I usually blog about things that I am already familiar with, but I've sometimes
used blogging as a way to learn something new. For example, I wrote a [post on
AssemblyScript](https://www.dannyguo.com/blog/the-introductory-guide-to-assemblyscript/),
which forced me to learn about it without doing something more involved and
time-consuming, like a side project.

Even for things I feel like I know well, I tend to learn new details as I write
the post. Sometimes, it's knowledge that could be useful in the future, such as
the [optional
parameters](https://www.dannyguo.com/blog/how-to-check-if-a-javascript-string-begins-or-ends-with-a-string/#advanced-usage)
for `startsWith` and `endsWith` in JavaScript. I didn't know those existed until
I wrote my post.

Other times, I learn things that are interesting to me but maybe don't have much
practical value, like what the jQuery homepage [originally looked
like](https://www.dannyguo.com/blog/the-history-and-legacy-of-jquery/#a-brief-history-of-jquery).

Either way, almost every blog post I write teaches me something new, even if the
detail doesn't end up making it into the final post.

## Practice Writing

It's pretty hard to get better at something without actually doing it, and
blogging allows me to practice writing. Most importantly, it's a form of writing
that is totally up to me. While I also write during my day job (e.g. Slack
messages, emails, ticket specifications, code reviews, documentation,
prosposals, etc.), those cases are usually driven by some external factor.

My personal blog, on the other hand, gives me the freedom to write about
whatever I truly feel like writing about. That means I write more, and I have
hopefully gotten at least a little better at writing as a result.

Blogging also means that I can get feedback from a global audience. Instead of
an email that I know only one person is going to read, I know that anyone with
access to the internet could read my post. That motivates me to try harder to
write it well.

## Learn How I'm Wrong

I've learned that publishing things to the internet is a fantastic way to
quickly learn what I am mistaken about or haven't considered. Here are a few
examples.

I wrote a post about [automating my air
conditioner](https://www.dannyguo.com/blog/automating-my-air-conditioner), and I
learned that my air conditioner [does in fact have a
thermostat](https://news.ycombinator.com/item?id=28813747). While I would have
done my project anyway, it was unnecessary in theory.

I also wrote a post encouraging [serving videos instead of
GIFs](https://www.dannyguo.com/blog/serve-videos-instead-of-gifs). But I hadn't
thought of the
[differences](https://lobste.rs/s/x44a92/serve_videos_instead_gifs#c_bhd8oc) in
[behavior](https://news.ycombinator.com/item?id=23208031) when saving/sharing a
[video instead of a GIF](https://news.ycombinator.com/item?id=23208432).

For the same post on GIFs, I also got a [comment that called me
out](https://www.reddit.com/r/programming/comments/gl7ttl/comment/fqw7lap/) for
posting about a performance-related topic on a website that served a gigantic
favicon.

> And yet that webpage has a 170kb favicon - a 256x256 image with essentially 3
> colors but stored in an uncompressed 24 bit format.

I appreciated the criticism! The favicon was a yin-yang that I added on a whim,
and it definitely didn't need to be that big.  I eventually [fixed
it](https://www.dannyguo.com/blog/updating-my-favicon-courtesy-of-randall-munroe/).

## Being Able to Provide a Link

When a topic or question comes up that I have written about, I love being able
to just provide a link to my post instead of trying to recreate my past thoughts
in a way that will inevitably be less coherent than my post. For example, a
co-worker mentioned running low on hard drive space, and I just linked to my
post on [clearing Mac storage
space](https://www.dannyguo.com/blog/clearing-mac-storage-space/). Another
co-worker asked about apps for
[TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) codes, and I
linked to my post on [migrating from Authy to
Bitwarden](https://www.dannyguo.com/blog/migrating-from-authy-to-bitwarden-for-2fa-codes).

This has happened more often than I would have expected, considering I don't
have *that* many posts. And now if someone asks me again why I blog, I have this
post to link to!

## Vanity

I admit it feels good when one of my posts gets many hits (the analytics for my
personal website are [public](https://plausible.io/dannyguo.com)), reaches the
front page of [Hacker News](https://news.ycombinator.com/) or
[Lobsters](https://lobste.rs/), gets tweeted about, or ends up on random
newsletters.

I've learned that those posts tend to drive large but unsustainable spikes in
traffic. For example, my post on [What I Learned by Relearning
HTML](https://www.dannyguo.com/blog/what-i-learned-by-relearning-html) was on
the front pages of
[HackerNoon](https://hackernoon.com/how-relearning-html-gave-me-new-insights-as-a-web-developer-6j3634ik)
and [DZone](https://dzone.com/articles/what-i-learned-by-relearning-html). And
my post on [My Seatbelt Rule for
Judgment](https://www.dannyguo.com/blog/my-seatbelt-rule-for-judgment) was on
[Kottke](https://kottke.org/quick-links/2022-02) and the front page of Hacker
News. Each post got tens of thousands of hits over a few days.

But my "how to" posts are the ones that get sustained traffic through search
engines, providing most of the hits in a typical month. Both categories of posts
give me dopamine.

I've also had plenty of posts that aren't in either category and have not been
read much at all. And that's fine! The vanity factor is real, but I try not to
let it affect me too much. For now, I want to write simply about what I am
interested in writing about, rather than trying to work backwards and write
posts that I think will be popular.

## Unexpected Opportunities

My writing provided an unexpected opportunity. Someone from
[LogRocket](https://logrocket.com) read one of my posts and invited me to write
paid posts for [their technical blog](https://blog.logrocket.com/). I've written
[some posts](https://blog.logrocket.com/author/dannyguo) for them. I basically
used these as chances to get paid to write and learn new things.

## Monetization

If traffic builds up to a higher level, it may be worth adding some lightweight,
developer-focused ads to some of my posts using
[EthicalAds](https://www.ethicalads.io) or [Carbon](https://www.carbonads.net).
Though [Dan Luu](https://danluu.com/) has a good [post on this
topic](https://danluu.com/blog-ads/), and I agree that it may not be worth the
influence it could have on my writing behavior. I'm also not sure if I want to
clutter my own blog with ads. On the other hand, they are only single images and
should be relevant to most visitors. I've never minded ads from these networks
on other sites.

I do add Amazon affiliate links when I would have linked to a product anyway.
For example, I linked to *The Design of Everyday Things* in [this
post](https://www.dannyguo.com/blog/my-seatbelt-rule-for-judgment/), and I would
have done so even without an affiliate option. I've made over $200 from that
link. That was a nice, unexpected benefit. And according to Amazon, people have
bought dozens of copies of the book through my link, which felt good,
considering that I think it's a fantastic book.

## Conclusion

More than anything else, I hope this post encourages someone else to blog or
share what they know in whatever medium they prefer. When someone tells me about
something interesting, I tend to say "you should blog about this!" Nobody has
ever taken me up on it, and the world misses out on it.

Blogging has been a low friction way to share with the world for so long.

WordPress and Blogger are still perfectly good options! There's also Medium,
Dev, Svbtle, [Bear](https://bearblog.dev/), [Mataroa](https://mataroa.blog/),
and Hashnode.

Also, there's a bit of a trend that I've noticed where developers will set up a
blog and treat it like a side project in itself. They'll figure out what
framework to use and how to host it. Then you'll see an initial blog post
talking about they'd like to get into blogging and/or the technical details of
setting up the blog.

These are natural first post topics since the person is clearly thinking about
blogging or has just set up the blog, and there's nothing wrong with them. But
I'll sometimes see a blog where that's the only post. And I'd speculate that it
wasn't gratifying enough for the person to keep going.

Blogging is hard! At least it is for me. It can take me a long time to research,
write, and edit a post. And even then, I've published posts that I knew could be
better with some more effort.

My advice is to start writing about whatever you are most interested in thinking
about. Blogging itself may be the most *recent* thing you have thought about,
but is it really your biggest interest?

Earlier, I talked about the freedom to write about whatever you want to write
about. I think this aspect is deeply underrated. Blogging is not like writing an
essay for school. You don't have to feign interest in some book or historical
event that you just don't care about. You can write about literally anything you
want!

This post is basically my version "here's why I'm interested in blogging," but
consider how different it would be if it was my very first post. I would still
probably make some remarks about *hoping* that it would clarify my thinking,
allow me to share knowledge, and let me practice writing. But now I can make the
same points with details from personal experience.

The 2017 version of this post would not have been far shorter, not as fun to
read, and not as fun to write.

I do understand the fun of treating a personal blog as another side project. I
don't use a blogging platform. I build my site with Astro, push it up to GitHub,
and serve it with Netlify. Setting all that up was pretty fun! But when it comes
to writing, just like any other content medium, it's the content that matters
most.

Focus on the content and then you can always improve the details later on.  The
content itself is far more important than how you're hosting it.

One of my favorite blog posts is Rob Pike's [post on his biggest surprise when
rolling out
Go](https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html).
Sure, it's hosted on Blogger and served with a font size that is a little small
for. But the content is so interesting. I love this little slice into Pike's
experience. It doesn't really matter that the font size causes an unoptimal
measure, so I just used Firefox's reader mode to reread it.

Focus on the content. There's where the value is. I'd rather watch Breaking Bad
on a tiny, 480p screen than watch an average show in 4K.

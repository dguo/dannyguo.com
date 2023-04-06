---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - writing
date: "2023-04-06"
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

Writing lets me do that while also helping me avoid going around in circles.
When thoughts are in my head, it's easy for them to get jumbled up. I miss
things, and I keep coming back to the same thoughts, leading to the unproductive
ruminating. But writing my thoughts down stops that process. I am forced to
organize my thoughts in a coherent manner and to acknowledge when they don't
make sense. Thoughts in my head are like a mixture of dirty water, while writing
is like a filter. It removes the nonsense from my thinking.

If you had asked me when I was in school what the purpose of writing is, I would
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
understanding me only because I'm not using the right words. So I strive to hit
upon precise wording that accurately captures what I am thinking or feeling.
That's a lot easier for me to do when I am writing because I have the space to
play around with different words and to think about how someone else would
interpret them.

## Share Knowledge and Ideas

Every medium for sharing information has its advantages and disadvantages, but I
generally prefer blog posts. They allow for more details than tweets do, they
take much less time to read than books, they are easy to consume at my own pace
(unlike videos), and they are easy to link to and reference.

I love the feeling that I get from reading a great blog post, whether the post
perfectly solves a problem that I have, teaches me something new, or encourages
me to change my mind about something. One reason is that I want to avoid
learning by making mistakes. While I value that process when it happens, it's
still painful and inefficient. Instead, I want to learn from other people so
that I avoid making the same mistakes that they do.

Blogging helps me try to return the favor for everything that I've learned from
other people's blog posts. I don't want others to make my mistakes either, which
is why I have no problem telling the world that I once [published an AWS secret
key to a public GitHub
repo](https://www.dannyguo.com/blog/i-published-my-aws-secret-key-to-github/).

In general, blogging lets me share what I know and believe. I don't claim to
actually know all that much, but everyone has something worth sharing.  The idea
that a post I write could be useful for even just one other person motivates me.
And I know from comments that at least a few people have found some of my posts
helpful, which is so gratifying.

## Learn Things

I usually blog about things that I am already familiar with, but I've sometimes
used blogging as a way to learn something new. For example, I wrote a [post on
AssemblyScript](https://www.dannyguo.com/blog/the-introductory-guide-to-assemblyscript/),
which allowed me to learn about it without doing something more involved and
time-consuming, like a side project.

Even when I write about things I feel like I know well, I tend to learn new
details in the process. Sometimes, it's knowledge that could be useful in the
future, such as the [optional
parameters](https://www.dannyguo.com/blog/how-to-check-if-a-javascript-string-begins-or-ends-with-a-string/#advanced-usage)
for `startsWith` and `endsWith` in JavaScript. I didn't know those existed until
I wrote my post.

Other times, I learn things that are interesting to me but maybe don't have much
practical value, like what the [jQuery](https://jquery.com/) homepage
[originally looked
like](https://www.dannyguo.com/blog/the-history-and-legacy-of-jquery/#a-brief-history-of-jquery).

Either way, almost every blog post I write teaches me something new, even if the
detail doesn't end up making it into the published post.

## Practice Writing

It's pretty hard to get better at something without actually doing it, and
blogging allows me to practice writing. Most importantly, it's a form of writing
that is totally up to me. While I also write during my day job (e.g. Slack
messages, emails, ticket specifications, code reviews, documentation,
prosposals, etc.), those cases are usually driven by some external factor.

My personal blog, on the other hand, gives me the freedom to write about
whatever I truly feel like writing about. That means I write more, and I have
hopefully gotten at least a little better at writing as a result.

Blogging also means that I can get feedback from a global audience. Unlike an
email that I know only one person is going to read, I know that anyone with
access to the internet could read my blog post. That motivates me to try harder
to write it well.

## Learn How I'm Wrong

Publishing things to the internet has been a fantastic way to quickly learn what
I am mistaken about or haven't considered. Here are a few examples.

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

I appreciated the criticism! I added the favicon on a whim when I first set up
my website, and the favicon definitely didn't need to be that big.  I eventually
[fixed
it](https://www.dannyguo.com/blog/updating-my-favicon-courtesy-of-randall-munroe/).

## Be Able to Provide a Link

When a topic or question comes up that I have written about, I love being able
to just provide a link to my post instead of trying to recreate my past thoughts
in a way that will inevitably be less coherent than my post. For example, a
co-worker mentioned running low on hard drive space, and I shared my post on
[clearing Mac storage
space](https://www.dannyguo.com/blog/clearing-mac-storage-space/). Another
co-worker asked about apps for
[TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) codes, and I
linked to my post on [migrating from Authy to
Bitwarden](https://www.dannyguo.com/blog/migrating-from-authy-to-bitwarden-for-2fa-codes).

This has happened more often than I would have expected, considering I don't
have that many posts. And now if another person asks me why I blog, I have this
post to link to!

## Vanity

I admit it feels good when one of my posts gets many hits (the analytics for my
personal website are [public](https://plausible.io/dannyguo.com)), reaches the
front page of [Hacker News](https://news.ycombinator.com/) or
[Lobsters](https://lobste.rs/), gets tweeted about, or ends up on random
newsletters.

Those posts tend to drive large but unsustainable spikes in traffic. For
example, my post on [What I Learned by Relearning
HTML](https://www.dannyguo.com/blog/what-i-learned-by-relearning-html) was on
the front pages of
[HackerNoon](https://hackernoon.com/how-relearning-html-gave-me-new-insights-as-a-web-developer-6j3634ik)
and [DZone](https://dzone.com/articles/what-i-learned-by-relearning-html). And
my post on [My Seatbelt Rule for
Judgment](https://www.dannyguo.com/blog/my-seatbelt-rule-for-judgment) was on
[Kottke](https://kottke.org/quick-links/2022-02) and the front page of Hacker
News. Each post got tens of thousands of hits over a few days.

But some of my "how to" posts are the ones that get sustained traffic through
search engines, providing most of the hits in a typical month. Both categories
of posts give me dopamine.

I've also had plenty of posts that aren't in either category and have not been
read much at all. And that's fine! The vanity factor is real, but I try not to
let it affect me too much. For now, I want to write simply about what I am
interested in writing about, rather than trying to work backwards and write
posts that I think will be popular.

## Unexpected Opportunities

My writing provided an unexpected opportunity. Someone from
[LogRocket](https://logrocket.com) read one of my posts and invited me to write
paid posts for [their technical blog](https://blog.logrocket.com/). I've written
[some posts](https://blog.logrocket.com/author/dannyguo) for them, and I used
them as chances to get paid to write and learn new things.

## Monetization

I could monetize my website by adding lightweight,
developer-focused ads to some of my posts using
[EthicalAds](https://www.ethicalads.io) (which I do use for [Make a
README](https://www.makeareadme.com/)) or [Carbon](https://www.carbonads.net).
Though [Dan Luu](https://danluu.com/) has a good [post on this
topic](https://danluu.com/blog-ads/), and I agree that it may not be worth the
influence it could have on my writing behavior or on how readers perceive my
posts. I'm also hesitant to clutter my own blog with ads. On the other hand,
they are only single images and should be relevant to most visitors. I've never
minded ads from these networks on other websites.

I do add Amazon [affiliate](https://en.wikipedia.org/wiki/Affiliate_marketing)
links when I would have linked to a product anyway.  For example, I linked to
*The Design of Everyday Things* in [this
post](https://www.dannyguo.com/blog/my-seatbelt-rule-for-judgment/), and I would
have done so even without an affiliate option. I've made over $200 from that
link, which was a nice, unexpected benefit. And according to Amazon, people have
bought dozens of copies of the book through my link. That makes me happy,
considering I think it's a fantastic book.

But I may remove affiliate links eventually. [Gergely
Orosz](https://www.pragmaticengineer.com/) explained why he [removed affiliate
links](https://blog.pragmaticengineer.com/affiliates/) (in addition to [removing
ads](https://blog.pragmaticengineer.com/ads/)), and I find his reasons
compelling.

## How to Start a Blog

I hope this post encourages someone to blog or share what they know in whatever
medium they prefer. When someone tells me about something interesting, I tend to
say "you should blog about this!" Few people have taken me up on that (my friend
[Azeem](https://azeemba.com/) is a great exception), and the world misses out.

My advice is to focus on thinking about what you'd be interested in writing
about. Setting up a blog can be fun in itself, and I understand the appeal of
treating it as a side project. Instead of using a blogging platform, I [build my
site](https://github.com/dguo/dannyguo.com) with [Astro](https://astro.build/)
and serve it with [Netlify](https://www.netlify.com/). But it's the content that
really matters.  I'd rather watch [Breaking
Bad](https://en.wikipedia.org/wiki/Breaking_Bad) on a tiny, 480p screen than
watch an average show on a big, 4K TV.

One of my favorite blog posts is [Rob
Pike](https://en.wikipedia.org/wiki/Rob_Pike)'s [post on his biggest surprise
when rolling out
Go](https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html).
Sure, the page has what I regard as a dated design, and the font size is a
little too small. But the content is *so fascinating*.

You don't want to get hung up on hosting details, which you can always change
later. [WordPress](https://wordpress.com/), [Blogger](https://www.blogger.com/),
[Medium](https://medium.com/), [Dev](https://dev.to/),
[Svbtle](https://svbtle.com/), [Bear](https://bearblog.dev/),
[Mataroa](https://mataroa.blog/), [Hashnode](https://hashnode.com/), and
[Substack](https://substack.com/) all do the job. I do think it's worth
considering upfront if you want to have a custom domain so that you truly own
your content. But otherwise, I recommend just picking a platform and writing
about whatever you find interesting. Follow your genuine curiosity to avoid the
trend of a blog that has a first post about setting up the blog but then little
after that.

## Conclusion

Blogging is hard! At least it is for me. For all the reasons I've detailed,
blogging has been worthwhile for me, but it can take me a long time and
considerable mental energy to research, write, and edit a post. Even then, I've
published posts that I knew could be better with more effort.

I
[started](https://github.com/dguo/dannyguo.com/commit/668d67066f0e9b8d96ea19c2526e9101914aeacd)
the post you're reading now almost a full year ago, and I have a backlog of
other drafts and ideas to finish up and actually publish. Or to just abandon
them. Having that choice is a luxury that comes with doing this purely on my own
terms.

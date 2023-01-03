---
layout: ../../layouts/BlogPostLayout.astro
date: "2017-11-03"
title: Digital Security Coach
---

I confess. As of my senior year of college, I had a `p.txt` file buried deep
within my Dropbox folders. It contained a list of all my passwords. I tried
switching to the trick of using a mental password generator based on the
website's name, but I quickly ran into cases where websites had password
requirements that didn't fit the algorithm. I finally took the small effort of
moving to a password manager after graduation, and I've used it ever since.

Why did it take me so long to get rid of `p.txt`? It wasn't a case of not being
aware of a better alternative. I had known about password managers for a while
and always felt a twinge of guilt whenever I copied a password out of `p.txt`.
I think I just didn't care enough about the risks. Even now, identity theft is
a relatively abstract problem for me. It happens to plenty of people everyday,
but to my knowledge, none of my friends or family have had their identities
stolen.

Yet I know on a rational level how devastating the consequences can be, I know
that companies are breached all the time, and as a software developer, I may
not be a security expert, but I at least know to [use bcrypt and not MD5 to
hash
passwords](https://security.stackexchange.com/questions/211/how-to-securely-hash-passwords).
I'm [probably](https://en.wikipedia.org/wiki/Illusory_superiority) better
informed on digital security issues than the average person, yet I still didn't
make switching to a password manager a priority for a long time. So how do we
get that average person to do it?

Last week I read a [blog
post](https://www.troyhunt.com/do-something-awesome-with-have-i-been-pwned-and-win-a-lenovo-thinkpad/)
by [Troy Hunt](https://www.troyhunt.com/). He created [Have I Been
Pwned](https://haveibeenpwned.com/) in 2013. It's "a free service that
aggregates data breaches and helps people establish if they've been impacted by
malicious activity on the web." Lenovo gave him a [ThinkPad 25 year anniversary
edition
laptop](https://www.theverge.com/2017/10/5/16428720/lenovo-retro-thinkpad-25th-anniversary)
to give away. He is running a contest to give it to whomever makes the best use
of the [HIBP API](https://haveibeenpwned.com/API/v2).

For my entry, I created [Digital Security
Coach](https://www.digitalsecuritycoach.com/), a crash course on digital
security. The source code is on
[GitHub](https://github.com/dguo/digital-security-coach), and I welcome any
feedback or suggestions. It is intended to be as accessible as possible. The
underlying philosophy is that it is more important to convince grandparents to
use a password manager than to convince software developers to set up their own
VPN servers. The site uses the HIBP API to give people a better sense of their
potential exposure and to show that many passwords are compromised and
shouldn't be used again.

The goal is to quickly teach the prevalence of digital attacks, the potential
personal consequences, and some actions that can improve security. By combining
this information into one, easy to digest guide, perhaps readers will be both
emotionally and rationally convinced to follow the suggestions. I like to think
that my past self would have said "ok, ok, I'll switch to a password manager"
after reading it. It can be easy to leave something that you know you should do
in the back of your mind, and sometimes a short but solid argument is all it
takes to transform that intention into action. I hope Digital Security Coach
persuades even one person to become a little more secure, whether it is by
learning to only log in over HTTPS or by getting rid of his or her own `p.txt`.

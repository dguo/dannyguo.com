---
categories:
  -
date: "2018-11-01"
draft: true
tags:
  -
title: Options for a Custom Domain Email Address
---

I've been using Gmail for my primary email address for over 13 years. I should
thank my sister for making me use my name and not my [AIM
username](https://en.wikipedia.org/wiki/AIM_(software)).

I've owned my own domain for a few years and finally decided to set up an email
with it, so I investigated options. Several years ago, the default choice was to
use Google Apps (now G Suite) because it was free for up to five users. Since
that's not available anymore, I did some research.

G Suite is still available, but paying $5 per month didn't seem worth it.

I've read about [Zoho Mail](https://www.zoho.com/mail/) as a free alternative.
Unfortunately, it stopped offering POP and IMAP access for its free plan
[earlier this
year](https://help.zoho.com/portal/community/topic/zoho-free-tier-pop-imap-activesync-no-longer-free).
So the only way to access it would be through Zoho's website or apps. I don't
fault Zoho for making this change, but I would prefer to access my email through
my primary Gmail account.

Next I looked at [FastMail](https://www.fastmail.com/) and
[ProtonMail](https://protonmail.com/), which are frequently cited by people who
have chosen to avoid Google services. FastMail
[costs](https://www.fastmail.com/pricing/) $5 per month for a plan that includes
custom domain support. ProtonMail [requires a paid
plan](https://protonmail.com/support/knowledge-base/custom-domain-support/) for
custom domain support, and the cheapest [paid
plan](https://protonmail.com/pricing) is $5 a month or $48 a year.

Another option is to use Google Domains. It includes a free [email forwarding
feature](https://support.google.com/domains/answer/3251241) that allows for
sending an email from the alias as well. Unfortunately, this only works when you
use Google's name servers. My site runs on Netlify, and I use their DNS service.

Next I looked at mailboxes from other domain registrars.
[Gandi](https://www.gandi.net) includes [two
mailboxes](https://www.gandi.net/en/domain/email) with every domain.
[Namecheap](https://www.namecheap.com) has a very affordable solution that only
[costs](https://www.namecheap.com/hosting/email.aspx) $9.88 a year.

I stumbled upon one last solution, deep in Google search results. Apparently,
some people use Mailgun and Sendgrid as a solution.

With Mailgun, there's a restriction that you can't send to email addresses
unless you add them to an allowed list. However, they lift this restriction if
you provide a payment method, which I was happy to do.

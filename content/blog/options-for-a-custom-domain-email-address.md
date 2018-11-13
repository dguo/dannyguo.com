---
categories:
  -
date: "2018-11-13"
draft: true
tags:
  -
title: Options for a Custom Domain Email Address
---

I've been using [Gmail](https://www.google.com/gmail/) for my primary email
address for over 13 years. I should thank my sister for making me use my name
and not my now embarrassing [AIM](https://en.wikipedia.org/wiki/AIM_(software))
username. Here's a look at the welcome email back in 2005.

![Gmail welcome email in 2005](https://i.imgur.com/VRHg6jX.png)

I've owned my [own domain](https://dannyguo.com) for a few years and recently
decided to set up an email address with it. Several years ago, the default
choice seemed to be Google Apps (now [G Suite](https://gsuite.google.com/))
because it was free for up to five users. G Suite
[costs](https://gsuite.google.com/pricing.html) $5 per month per user, but that
was more than I wanted to pay, so I investigated alternatives.

## Options

I've read about [Zoho Mail](https://www.zoho.com/mail/) as a free alternative.
Unfortunately, it stopped offering
[POP](https://en.wikipedia.org/wiki/Post_Office_Protocol) and
[IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) access
for its free plan [earlier this
year](https://help.zoho.com/portal/community/topic/zoho-free-tier-pop-imap-activesync-no-longer-free),
so the only way to access it would be through Zoho's website or apps. It would
[cost](https://www.zoho.com/workplace/pricing.html) $3 per month to add POP and
IMAP support. I don't fault Zoho for making this change, but I would prefer to
access my personal domain email through my Gmail account. I have also read some
anecdotes that Zoho Mail can be slow in sending and receiving emails.

Next, I looked at [FastMail](https://www.fastmail.com/) and
[ProtonMail](https://protonmail.com/), which are frequently cited by people who
have chosen to [avoid Google services](https://nomoregoogle.com/). FastMail
[costs](https://www.fastmail.com/pricing/) $5 per month for a plan that includes
custom domain support. ProtonMail [requires a paid
plan](https://protonmail.com/support/knowledge-base/custom-domain-support/) for
the feature, and the cheapest [paid plan](https://protonmail.com/pricing) is $5
a month or $48 a year.

Another option was to use [Google Domains](https://domains.google/). It includes
a free [email forwarding
feature](https://support.google.com/domains/answer/3251241) that allows for
sending an email from the alias as well. However, the feature is only available
when you [use Google's name
servers](https://support.google.com/domains/answer/3251241). My site runs on
[Netlify](https://www.netlify.com/), and I use their [DNS
service](https://www.netlify.com/docs/dns/).

I also looked at mailboxes from other domain registrars.
[Gandi](https://www.gandi.net) includes [two
mailboxes](https://www.gandi.net/en/domain/email) with every domain, but Gandi's
domain prices also seem more expensive than elsewhere, especially when
considering that [Cloudflare](https://www.cloudflare.com/)'s [at-cost domain
registrar service](https://blog.cloudflare.com/cloudflare-registrar/) is
scheduled to be available soon.

[Namecheap](https://www.namecheap.com) has very affordable [email
hosting](https://www.namecheap.com/hosting/email.aspx) that only
[costs](https://www.namecheap.com/hosting/email.aspx) $9.88 a year. I was ready
to set it up when I stumbled upon one last solution, deep in search results for
"custom domain email." Some people use [Mailgun](https://www.mailgun.com/).

## Setting up Mailgun

Essentially, incoming emails go to Mailgun. By setting up a routing rule,
I can send those emails to my Gmail. With some additional configuration, I can
also send emails from my Gmail but have them appear as if they are sent from my
custom domain.

Mailgun's [free tier](https://www.mailgun.com/pricing) is also way more than
enough. It allows for 10,000 emails per month. That includes both incoming and
outgoing emails, but for a personal email account, I'll never hit that limit.
Even if I go over, it only costs $0.50 for every additional thousand emails.

With Mailgun, there's a restriction that you can't send to email addresses
unless you add them to an allowed list. However, they lift this restriction if
you provide a payment method, which puts you on the "concept"
[plan](https://help.mailgun.com/hc/en-us/articles/203068914-What-are-the-differences-between-the-free-and-concept-plans-).
I was happy to do so.

Create a Mailgun account.

Add your domain.

Go to wherever you manage your website's DNS settings, and add the DNS records
provided by Mailgun. The MX records are for actually configuring the mail
servers. The TXT records are for setting up SPF and DKIM, which are ways of
verifying an email's authenticity. YOu don't need to add the CNAME record unless
you want to track your recipients (opens, clicks, and unsubscribes).

It might take a while for the DNS changes to propogate, though mine only took
about a minute. Tell Mailgun to verify the DNS records. Once they are verified,
you can set up a routing rule.

I have a single rule to match the recipient with my desired email address. The
action is to forward it to my Gmail. It would be possible to add additional
addresses to the rule and have them all end up in the same Gmail inbox, but I
don't need that yet. At this point, receiving emails should work.

To make sending work, go to Gmail settings, and open the "Accounts and Import"
tab. Add the email address as a sender, and fill in the Mailgun SMTP
information.

I chose to uncheck "Treat as an alias" in Gmail because I wanted to
automatically reply with whichever email was the intended recipient. I didn't
want to have to manually change the sender. Normally, [unchecking this
option](https://support.google.com/a/answer/1710338) means that messages sent to
the other address won't show up in Gmail, but in this case, Mailgun is handling
that part already.

I went to Mailgun account settings and set a monthly sending limit. Just in case
someone manages to get access to my Gmail and uses it to send spam, Mailgun will
stop processing emails beyond the limit. I set it to 1,000.

Do note that Mailgun [does not
recommend](https://help.mailgun.com/hc/en-us/articles/203306710-Can-I-use-Mailgun-for-my-personal-email-address-)
using the service for personal email.

If Mailgun does change in a way that makes it an unreasonable solution, I will
probably switch to a Namecheap mailbox. Until then, I'm happy to have found a
free solution for my own email address.

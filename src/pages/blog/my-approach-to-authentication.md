---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2025-06-21"
unlisted: true
title: My Approach to Authentication
---

I have been working on making sure my family is taken care of in case I
unexpectedly die or am incapacitated. I take authentication fairly seriously,
which turned out to make it challenging to actually prepare for giving my family
access to my accounts and data. I especially realized this as I tried to explain
to my wife how
[TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) codes work.

Me:

> So the codes change every 30 seconds, but there's an underlying secret key
> that doesn't change. If you somehow can't access the generated codes, here's
> where the secret keys are. Ask one of our programmer friends to help you use
> them to generate the codes.

Her:

> 🤔

So this post is mainly documentation for my family (and whichever friend my wife
might end up calling upon), though I am making it public in case anyone finds it
useful or is also inspired to think about creating some form of a digital will.

I do already have Google's [Inactive Account
Manager](https://support.google.com/accounts/answer/3036546?hl=en) turned on,
and there are other forms of a digital [dead man's
switch](https://en.wikipedia.org/wiki/Dead_man%27s_switch) like [Legacy
Contacts](https://support.apple.com/en-us/102631) for Apple. But this is a more
general solution for myself.

## Background

My career has been in software engineering, and I like to think I have a fairly
secure setup. But it wasn't always like that. I used to use the same password
for everything. Though as far back as high school, at least it was a string of
ten random letters.

In college, I switched to using variations of the same password. I did something
like add the first two letters of the service/website to a common base password.
Of course, I ran into the obvious problem of differing password requirements,
which made it impossible to keep all the passwords in my head.

For some time, I recorded them in a `p.txt` file. I eventually switched to using
[LastPass](https://www.lastpass.com/) as my password manager. But after they had
[enough security
incidents](https://en.wikipedia.org/wiki/LastPass#Security_incidents), I
migrated to [1Password](https://1password.com/). I still use 1Password today,
with a [family account](https://support.1password.com/explore/families/).

## Passwords

So 1Password stores almost all of my passwords, and I generate highly random,
unique passwords with it. But there are a few passwords that I still rely on my
memory for, mainly because I consider them to be too important:

1. My 1Password password
2. My Google password for my personal Google account
3. My Google password for my [Google Workspace](https://workspace.google.com/)
   account for my custom domain email
4. My [Bitwarden](https://bitwarden.com/) password (I'll explain in a bit why I
   use Bitwarden in addition to 1Password)
5. My "local" password for my laptop and phone

In retrospect, I should probably add the domain registrar for my custom domain,
since getting access to that would allow someone to take control of my custom
domain email.

Besides my memory, I have these passwords written down in a plain text file on
my various encrypted external hard drives that I use for backing up my data.
I'll have a separate post on how I deal with data backups, but this is what will
allow people to get access to my "root" passwords. All they need is the hard
drive and the password to decrypt it.

Crucially, 1Password also requires a [34 digit secret
key](https://support.1password.com/secret-key-security/) to log in. So that is
also stored in that plain text file.

## Two-factor Authentication

I always enable two-factor authentication when it is available. I prefer to use
TOTP and [security
keys](https://www.nytimes.com/wirecutter/reviews/best-security-keys/) when
possible.

### SMS

I only use SMS-based two=facotr authentication when I am forced to. I've never
liked being reliant on cell service (which is vulnerable to things like SIM
swapping) and access to my cell phone (which can be stolen or broken) to be able
to log in to things. This wasn't so bad when I was on [Google
Voice](https://en.wikipedia.org/wiki/Google_Voice) and could access my texts
from any device, but Google Voice [recently banned
me](https://www.dannyguo.com/blog/google-banned-me-from-google-voice), so now I
am stuck with needing my phone to get verification codes. If I die, someone will
need to work with Verizon to get access to my phone number.

### TOTP

But a decent number of services do support TOTP, so I use that whenever I can.
While 1Password [does handle TOTP
codes](https://support.1password.com/one-time-passwords), I didn't want to store
my passwords and my TOTP secrets in the same place. That was a degree of putting
everything into the same place that I wasn't comfortable with. So that's why I
also use Bitwarden. I don't have any passwords in there. Only TOTP secrets.

When I set up TOTP for a new service, I'll add the secret key to Bitwarden, but
for redundancy, I'll also add it to a plain text `otp.txt` file that I keep in
Google Drive. And that file is included in my data backups.

Many services also generate recovery codes when setting up two-factor
authentication. I put those codes in `otp.txt` as well.

### Security Keys

I also have a set of [YubiKeys](https://www.yubico.com/products/) though there
still aren't that many services which support
[WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). I set them up when I can,
though I won't do it if TOTP and security keys are mutually exclusive. I want
them to be alternatives. I don't want to be fully dependent on having one of my
security keys to log in.

I have one key that's always plugged in my personal laptop, one key on my
keychain, one key in my [fireproof bag](https://amzn.to/44bqMM1) at home, and
one key that I store at a family member's home. This is overkill, especially
considering that I refuse to let them be the only two-factor authentication
method for a service. But being overly prepared makes me feel warm and fuzzy
inside.

## Bootstraping Authentication

Speaking of being overly prepared, one thing that has motivated some of my
decisions has been to consider how hard it would be to get access to my digital
accounts and data if I unexpectedly lose access to my device(s). So what does it
take to bootstrap authentication? What happens if I'm in a foreign country and
lose my phone and laptop?

Today, the answer is that I can bootstrap with very little. I mainly need to get
into my 1Password, Bitwarden, and Google accounts. Those passwords are in my
head. For two-factor authentication for those accounts, I can use any of my
security keys.

But one thing that I think is easy to forget is 1Password's separate secret key.
My solution for that is to store the secret key in my YubiKeys. So for every
YubiKey except for the one that is in my laptop, I use the [static password
feature](https://support.yubico.com/hc/en-us/articles/360016614980-Programming-a-static-password-into-your-YubiKey)
to store the secret key. I can long touch the YubiKey to output the value.
Though continuing in the spirit of overkill, I've also made a slight
modification to the value so that someone won't immediately have my secret key
just be getting access to my YubiKey.

But what happens if I also lose my YubiKey(s)? This goes back to my decision to
only set up my YubiKeys if I can also set up TOTP. So as an alternative, I just
need the TOTP secret keys for 1Password and Bitwarden. I have those secret keys
written on a piece of paper that I then put in a [waterproof, laminated
pouch](https://amzn.to/40du14g). Again, with some minor modification to the
values. And they are unlabeled, so to an outsider, it'd be unclear what they are
for. The piece of paper also has the modified 1Password secret key.

I carry this with me. When I travel, I can also leave a copy in my hotel room.
I've also considered sticking a copy under the sole of my shoe. So someone could
rob me, but as long as they leave me with my shoes, I can still bootstrap into
my online life.

The big remaining caveat I can think of is the fact that I am now reliant on
cell service for some two-factor codes. Verizon used to have a way to access
texts on the web, but that's not available anymore.

I've never come close to actually needing any of this, so my future robber will
probably be bewildered by how much I am smiling after they take my phone and
wallet. Part of me really wants a reason to pull that laminated card out of my
shoe.

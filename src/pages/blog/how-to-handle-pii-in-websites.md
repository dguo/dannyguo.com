---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/how-to-handle-pii-websites-web-apps/
categories:
  - programming
date: "2020-03-28"
tags:
  - security
title: How to Handle PII in Websites
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/how-to-handle-pii-websites-web-apps/).*

Many websites collect and store [personally identifiable
information](https://en.wikipedia.org/wiki/Personal_data) (PII) in their normal
course of business, and unfortunately, there are numerous ways that collected
PII can be compromised. When this happens, the website’s users are exposed to
personal risks, the website’s reputation is damaged, and the site owners can
face serious legal and financial consequences.

## The Importance of PII

PII is information tied to a particular individual or that can be used to
identify them. Some common examples are:

- Name
- Address
- Telephone number
- Gender
- Date of birth
- Social Security number
- Driver’s license number
- Passport number

This sort of information can be stolen to facilitate identity theft, an
increasingly common crime. In 2018, the FTC
[estimated](https://www.thebalance.com/identity-theft-crimes-by-the-numbers-4157714)
that over 444,000 people filed identity theft reports, and the most common type
of identity theft was credit card fraud.

You can think of a set of PII as a key to people’s personal lives. By giving you
their PII, your users are entrusting you to take care of it.

In many cases, there is a legal requirement to do so. For example, the [General
Data Protection
Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation),
the [California Consumer Protection
Act](https://en.wikipedia.org/wiki/California_Consumer_Privacy_Act), and the
[Health Insurance Portability and Accountability
Act](https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act)
all provide rules for how companies need to treat personal data.

## Data Breaches

Companies generally place great value on the data they’ve collected; some have
even referred to data as “[the new
oil](https://www.quora.com/Who-should-get-credit-for-the-quote-data-is-the-new-oil).”
Yet it’s increasingly being viewed more as a
[liability](https://disruptionhub.com/david-carboni-data-was-asset-now-liability/).
One lapse in security can lead to a bulk loss of PII, which is frequently
accompanied by a negative news headline. Consider Equifax’s data breach, which
led to weeks of [press
coverage](https://www.nytimes.com/interactive/2017/your-money/equifax-data-breach-credit.html)
and ultimately a $650 million
[fine](https://www.nytimes.com/2019/07/22/business/equifax-settlement.html).

Data breaches have become so common that security expert [Troy
Hunt](https://www.troyhunt.com/) set up a service called [Have I Been
Pwned](https://haveibeenpwned.com/), which keeps track of breaches and lets
people check whether their email address and personal information is included.

## Protecting PII

To avoid being one of those websites that have lost data, let’s consider
possible attack vectors and how we can guard against them. Keep in mind that
like other aspects of security, it only takes one failure point for PII to be
lost. The best way to avoid leaking PII is to avoid collecting it in the first
place. Nevertheless, collecting some PII is crucial to many websites.

Some of the following advice will overlap with the usual best practices for
security, but in general, we want to think about how PII is collected,
transported, stored, and accessed.

Also keep in mind that the importance of information is relative. Take inventory
of all the data that you collect and classify it according to its sensitivity. A
Social Security number warrants more protection than a phone number.

## Use HTTPS

Essentially [all
websites](https://www.troyhunt.com/heres-why-your-static-website-needs-https/)
should be using [HTTPS](https://en.wikipedia.org/wiki/HTTPS) by now. By
encrypting the connection between the website and the server, we can prevent
third parties from intercepting the communications and reading what is being
sent, including submitted data like PII in form fields.

[Let’s Encrypt](https://letsencrypt.org/) provides free TLS certificates, making
it affordable to set this up and provide a line of defense against [man-in-the
middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks.

## Hide Info on the Screen

You may want to prevent some information from being displayed all the time. The
point of this is to prevent other people from seeing your users’ info just by
looking at their screen. For example, you can set an input’s type to “password”:

```html
<input type="password">
```

This will result in an input field that replaces what the user types with
asterisks. You can do similar things for other data, such as masking a Social
Security number so that it is displayed as `XXX-XX-XXX` after the user enters
it.

## Third-Party Services

When you integrate third-party services, it’s important to be aware of the data
that you are sending them. If you send it indiscriminately, you are bound to
send PII at some point.

Google Analytics has a [list of
suggestions](https://support.google.com/analytics/answer/6366371?hl=en) for
avoiding sending PII.

If you use a UI recording tool like [LogRocket](https://logrocket.com/), you’ll
want to carefully think about what information should be hidden. For example,
LogRocket provides privacy [mechanisms](https://docs.logrocket.com/docs/privacy)
to easily filter the data that is transferred, including a way to [identify PII
fields](https://docs.logrocket.com/docs/security#section-tools-to-block-pii) so
that their values aren’t sent.

## Logging

Think about how your logging is set up and how the logs are stored. For example,
if you log every request to your server, it’d be easy for something like a
user’s Social Security number to end up in your logs in plaintext. Set up
filters to keep this from happening.

## Storage

Be particularly careful when storing PII in an object storage system like [AWS
S3](https://aws.amazon.com/s3/). S3 buckets are frequently [accidentally
exposed](https://github.com/nagwww/s3-leaks) to the public. It’s good practice
to default to [explicitly blocking public
access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)
for buckets.

## Encryption

Depending on the sensitivity of particular information, you may want to encrypt
it at rest. This means that even if a hacker was able to obtain a copy of your
database, the encrypted information will be protected if they weren’t able to
steal the encryption key as well.

## Employee Access

Consider what employees can access what information. Ideally, you’ll have a
permissioning system so that employees are blocked from accessing information
without a legitimate business reason. You may also want to implement an auditing
system so that you know who accessed what information and when.

Doing this well means coming up with a data access policy and making sure
employees are trained to understand it. You also need to make sure they are
complying with it after the fact.

Facebook, for example, [has had to fire
employees](https://www.vice.com/en_us/article/bjp9zv/facebook-employees-look-at-user-data)
who abused their privilege to access user data. Uber also [got in
trouble](https://www.theverge.com/2016/1/6/10726004/uber-god-mode-settlement-fine)
over a “God View” that allowed employees to track customers without permission
and had to change their treatment of personal data as a result.

## Don’t Retain Data

Along the same line of thinking as not collecting PII in the first place, you
should also avoid retaining PII beyond how long you actually need it. If it no
longer provides value, then it can actually be a net negative to keep it because
you maintain the risk of it being stolen. You can reduce your exposure by
regularly pruning data.

A recent trend is to offload storing sensitive information to other companies.
For example, [Stripe](https://stripe.com/) provides a way to collect credit and
debit card numbers without the numbers ever touching your system. This makes it
much easier to [achieve PCI
compliance](https://stripe.com/guides/pci-compliance#how-stripe-helps-organizations-achieve-and-maintain-pci-compliance).

Another more general example is [Very Good
Security](https://www.verygoodsecurity.com/). They promote a
[zero-data](https://blog.verygoodsecurity.com/posts/announcing-very-good-security's-zero-data-mission/)
approach in which they collect and store any sensitive information you want, you
get harmless tokens to store in your system, and then you use the tokens later
when you actually need the data. This effectively allows you to offload the job
of securing that data to someone else.

This is the “you can’t lose what you don’t have” philosophy.

## Conclusion

Protecting PII is a never-ending challenge. Remember that it only takes a single
vulnerability for your service to leak all the PII it has ever collected. Even
if your security posture is strong at the moment, it takes constant vigilance to
keep your users safe.

It’s important to be aware of the methods that can cause websites to lose PII,
but it’s just as important to regularly review whether or not you are actually
protected from these methods. By doing so, you make your website worthy of the
trust your users have given you.

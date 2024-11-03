---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - miscellaneous
date: "2024-11-03"
unlisted: true
title: Google Banned Me From Google Voice
---

After 15 years, Google banned me from [Google Voice](https://voice.google.com/).
This post is a summary of what happened, with the hope that it might help
someone in the future who runs into the same situation. [At the
end](#retrospective), I have some
thoughts about the latent danger of being banned from Google at any time with no
notice.

## Background

I got my first cell phone in high school and immediately signed up for Google
Voice simply because I wanted to be able to send and receive texts from my
computer. So my Google Voice number is the only one I've ever given out to
friends, and I use it as my phone number whenever I can. The only time I use my
"real" Verizon phone number is when I can't receive verification codes because
some services block [VoIP](https://en.wikipedia.org/wiki/Voice_over_IP) numbers.

That was a minor annoyance, and I've loved being able to text and even call from
any device, even if my phone was off or not in service (e.g. traveling
internationally). So I stuck with it for 15 years. My only worry has been that
it seems like another product that Google could easily decide to kill off and
send to the [Google graveyard](https://killedbygoogle.com/) at any moment. But
that turned out to be the wrong worry for me.

## Getting Banned

My problems started on October 4, 2024. I got a notification on my phone saying
I had been logged out of my Google account. This had never happened to me
before, and I thought someone might be trying to hack into my account. I was
concerned but not terribly worried because I had two-factor authentication
turned on. On my personal laptop, I saw a notification that I had been logged
out of Google Drive.

I logged back in on my phone and laptop, going through two-factor authentication
both times. Then I checked the [security
log](https://myaccount.google.com/notifications) for my Google account. I saw
that my account had been disabled at 12:55 pm, but the log didn't have any
details about why. Logging back in had restored my account at 2:38 pm.

The log didn't have any other security activity, like login attempts. I even
reviewed my [full Google activity](https://myactivity.google.com) but didn't see
anything that I didn't recognize.  Everything seemed back to normal, so I went
back to work.

A few hours later, I tried sending some pictures in a group text in Google
Voice. The first picture went through fine. But when I tried to send a second
one, I received an error message that said something like "Sorry, there was an
error. Please try again later." I retried a few times. Then I tried sending a
plain text message to my wife and got the same error.

I was worried that it was related to my account being deactivated, but the
optimist in me thought that maybe Google Voice was having an outage. Until I got
home and went on my laptop to check Google Voice in my browser. It redirected me
to [this Google support
page](https://support.google.com/accounts/answer/40039?p=grandcentral) with this
message:

> Unable to access a Google product
>
> If you've been redirected to this page from a particular product, it means
> that your access to this product has been suspended. Read on for more
> information.
>
> Your access to this Google product has been suspended because of a perceived
> violation of either the [Google Terms of
> Service](https://www.google.com/policies/terms/) or product-specific Terms of
> Service. For specific product guidelines, please visit the homepage of each
> Google product you're interested in for a link to its Terms of Service.
>
> Google reserves the right to:
>
> * Disable an account for investigation.
> * Suspend a Google Account user from accessing a particular product or the
>   entire Google Accounts system, if the Terms of Service or [product-specific
>   policies](https://support.google.com/accounts/answer/147806) are violated.
> * Terminate an account at any time, for any reason, with or without notice.
>
> Next steps for suspended accounts: If you believe your access to this product
>was suspended in error, [contact
>us](https://support.google.com/accounts/contact/suspended).
>
> Tip: If you are not redirected to this page from a product, review your
> [service restrictions to file an
> appeal](https://myaccount.google.com/restrictions).

My heart sank. Getting banned by Google's automated systems is a situation that
I have read [plenty of
stories](https://www.google.com/search?q=hacker+news+google+account+disabled+site:news.ycombinator.com)
about, and I had an idea of what was next: a Kafkaesque situation in which I
would probably never talk to an actual human being, I'd never get any useful
details, and I would likely be forced to accept losing my phone number.

I tried making an outbound call. It didn't work. I asked my wife to call me.
That didn't work either. I asked my wife to text me. From her perspective, it
looked like it worked, but I obviously couldn't see the text. That was even
worse because it meant that anyone who texted me wouldn't get any indication
that anything was wrong.

## First Appeal

The Google support page advised me to [submit a
form](https://support.google.com/accounts/contact/suspended) appealing the
suspension. I did so immediately, explaining that I was suspended right after
sending a picture and noting that I had been logged out of my Google account
earlier in the day. I received an automated email:

> Thank you for contacting us about restoring access to your Google Account.
>
> Google will review your appeal as soon as possible. Most requests take 2
> business days to review, but some might take longer.
>
> You may be able to download your data from some Google services. To get
> started, sign in to your account. If your account is eligible, you’ll see a
> link to download your data.
>
> Thanks for your patience.

I did try to use [Google Takeout](https://takeout.google.com/) to export my
data, but Google Voice no longer shows up in the list of products, even though
I'm sure it did in the past because I have [exported my Google Voice
data](https://support.google.com/voice/answer/10130510?hl=en) before. So the
suspension presumably affected that as well.

I subscribe to a [Google One](https://one.google.com/about) plan. I knew that
one of the more understated benefits is the ability to get live support from an
actual person, something that is generally impossible with Google. I had nothing
to lose, so I started a chat. It ended up being a waste of time because the
person I talked to was fixated on me mentioning getting logged out of my
account. So they started recommending ways to protect my account. When I brought
the conversation back to the Google Voice suspension, they were unable to access
the ticket that was created when I submitted my appeal. So I ended the
conversation.

On October 6 (two days later), I heard back about my appeal:

> Hello,
>
> We have reviewed your request and cannot reinstate your Google Voice service.
> Your Google Voice service has been suspended for violations of our [Google
> Voice Policies](https://support.google.com/voice/answer/9230450?hl=en).
>
> If you have any further questions, please consult the [Google Voice Help
> Center](https://support.google.com/voice/#topic=13968863).
>
> Thanks,
>
> Google Voice Support Team

## Second Appeal

On October 7, I submitted a second appeal. I explained that I reviewed the
Google Voice policies and did not believe I violated any of them. I never sent
large quantities of texts, I never sent commercial texts, I only used it to text
friends and family, and there was nothing remotely inappropriate about the
picture I sent right before I was suspended. The picture was of four adults
around a baby in a stroller on a sidewalk. The baby is dressed and even has a
blanket on him. I added that that was the only text I sent on the day I was
suspended, and I didn't make any calls that day.

On October 8, I received the same reply that I got for the first appeal.

I considered writing this blog post immediately, posting it to Hacker News, and
hopefully getting enough traction that someone at Google would see it and do
something about it. But I didn't bother because even on the off chance that it
worked, I wouldn't be able to trust Google Voice again and would still want to
port my phone number out.

## Reclaiming My Number

At this point, porting my number out was my only priority. I didn't want to tell
all my friends and family to use a new number. And I didn't want to deal with
trying to update my number for a countless number of services, especially since
I'm sure it'd be a hassle for many of them without access to the old number.

I did some searching and learned that the Google Voice subreddit has [an entire
document on suspensions](https://www.reddit.com/r/Googlevoice/comments/17n4zl2/google_voice_service_suspensions/). Suspensions apparently happen often enough that the subreddit disallows threads on suspensions since there's nothing they can do about it.

I found [one wonderfully detailed
post](https://www.reddit.com/r/Googlevoice/comments/1dr47m4/account_suspended_reclaiming_your_number_and_your/)
("Account Suspended - Reclaiming your Number and your Dignity; a How-To Guide")
that has been removed because of the subreddit's rule. But that post, as well as
[another
one](https://www.reddit.com/r/google/comments/1filpr1/got_my_suspended_google_voice_number_back_fcc/)
that is still up, said the posters were able to get their numbers out by [filing
complaints](https://consumercomplaints.fcc.gov/hc/en-us) with the
[FCC](https://en.wikipedia.org/wiki/Federal_Communications_Commission). So I
planned to do that, expecting the whole process to take a couple of months.

On October 9, I added a new line to my Verizon plan as a target for the phone
number. A silver lining is that with the new line, I was able to get a new
iPhone 15 for almost free after bill credits. I initiated a port in request with
my Google Voice number. I expected this transfer to fail, since I was unable to
access my Google Voice account to [unlock the
number](https://support.google.com/voice/answer/1065667?hl=en). Then I would
submit the FCC complaint.

But to my pleasant surprise, the port went through in a couple of days! I
activated service on the new iPhone with my old Google Voice number. I did have
an issue where I could make calls and send and receive texts, but I couldn't
receive calls. I called the Verizon port center (1-888-844-7095), and the person
who helped me did something on their end to truly finish off the port. After
that, I could receive calls as well. So I never needed to use the FCC's muscle.

On October 23, I received an email from Google Voice saying that my number was
ported away:

> Hello Danny Guo,
>
> This email is to confirm that your Google Voice number (xxx-xxx-xxxx) has been
> ported away from Google Voice. Calls made to that number will no longer ring
> your forwarding phones and new voicemails won't appear in your Google Voice
> inbox.
>
>Your Google Voice account has been downgraded accordingly, but your existing
>voicemails and text messages remain available in your inbox. You can also
>continue placing calls from Gmail.
>
>You can upgrade your account at any time by getting a new Google Voice number.
>
>Thanks
>
>The Google Voice team

Now when I open Google Voice on my phone, it asks me to pick a new number as if
I'm starting from scratch. But on web, it still redirects me to the suspension
page.

## Retrospective

I have conflicted thoughts about what happened. I've used Google services for
the majority of my life. In college, I remember playing [would you
rather](https://en.wikipedia.org/wiki/Would_you_rather) at lunch, and a friend
asked if I'd rather lose access to everything Google or lose a physical sense. I
really had to think about it.

I've only ever used Android smartphones and smartwatches, despite being
virtually the only one among my friends and family to not have switched to
iPhone. Which makes me the person who tends to get grief for ruining group chats
by turning them into [green
bubbles](https://www.wsj.com/articles/why-apples-imessage-is-winning-teens-dread-the-green-text-bubble-11641618009).

And I directly pay Google by subscribing to Google One, YouTube Premium, and
Google Workspace (just for my custom domain email).

One major reason I've stuck with Google for so long is that I value using
services that are multiplatform. I may have an Android phone and watch, but I
also have a MacBook and an iPad.

And I still think Google Search can be pretty magical. Despite [its
decline](https://www.theatlantic.com/technology/archive/2023/09/google-search-size-usefulness-decline/675409/)
and the fact that [LLM](https://en.wikipedia.org/wiki/Large_language_model)s are
just better for certain searches.

But relying on Google worries me because of all those stories I've read about
people being banned. Sure, some of those cases might be lacking some details
that would justify the bans, but I was convinced enough to put a lot of effort
into migrating away from Gmail several years ago. Consider how important your
email account is to your digital life and how awful it would be to suddenly lose
access to your email with no warning.

By now, everything important uses my custom domain email address. I do use
Google Workspace for it, so i'm technically still using Gmail. But the point is
that I control the address. If Google bans me one day, all I have to do is
update my DNS records to switch to something like
[Fastmail](https://www.fastmail.com/).

The possibility of a Google ban is also one small reason I haven't gotten into
Android development. I could [accidentally violate their
terms](https://medium.com/@antaresone/google-just-terminated-my-google-play-developer-account-forever-f62d6362b6ac)
and get banned from publishing apps in an instant.

And I deliberately do not take any pictures of my infant son nude on the off
chance it [gets flagged as child sexual abuse
material](https://www.nytimes.com/2022/08/21/technology/google-surveillance-toddler-photo.html)
after being uploaded into Google Photos, and my entire Google account is banned.
With my recent situation, I consider myself lucky that I was at least only
banned from Google Voice.

It says something that my biggest issue with Google isn't that their services
aren't good anymore or that they kill things off all the time. It's that I'm
afraid they will just ban me with no recourse. It finally happened, and it
wasn't even for a service that I was worried about.

I work in software and in fintech. I can understand that Google operates at such
a massive scale that many things have to be automated, and even if there are
some false positives, that could be a worthy tradeoff to Google to not have to
put humans into the loop.

I also understand the logic of not telling people what rules they broke because
you don't want bad actors to get a better understanding of the system because
that would allow them to fine tune their attacks accordingly.

But I am still frustrated about temporarily losing my phone number. Sure I never
paid for Google Voice, but Google never gave me an option to pay for it. In this
case, I would have happily paid $100 just to find out why exactly I was banned.
What rule or model decided I needed to be banned?

Part of it is curiosity. Was the last picture I sent the issue? Getting logged
out of my phone earlier in the day suggests it wasn't. But I didn't do anything
else on Google Voice that day, and I barely sent any texts or made any calls in
the days before. I'm confident that if a real person looked at my account,
they'd agree something in the automation went wrong. You may have some
skepticism. Unfortunately, I can't provide my activity, since I can't see it
anymore after the app recognized that my number was ported out. But I'm [not the
only
one](https://www.reddit.com/r/Googlevoice/comments/1fcw44j/google_voice_exit_strategy_update/)
dealing with this kind of a situation.

I wonder if I should be more upset. Maybe I should actually try to vote with my
wallet and switch to that iPhone, move my files from Google Drive to iCloud or
Dropbox, and migrate to Fastmail. But I know Google can afford to simply not
care.

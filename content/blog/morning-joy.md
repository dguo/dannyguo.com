---
categories:
  - programming
date: 2020-08-08
draft: true
tags:
  - twilio
title: Morning Joy
---

This past April,
[DEV](https://dev.to/devteam/announcing-the-twilio-hackathon-on-dev-2lh8) hosted
a
[hackathon](https://dev.to/devteam/announcing-the-twilio-hackathon-on-dev-2lh8)
in conjunction with [Twilio](https://www.twilio.com/). This seemed like a good
chance to play around with the Twilio API, so I created a small project called
[Morning Joy](https://github.com/dguo/morning-joy). It lets you start each day
on a good note by texting you an uplifting news story and a picture of something
cute.

Following the news can be stressful or even depressing. This is one small way to
remember that good things are happening too.

![Morning Joy texts](https://i.imgur.com/OPNJIGn.jpg)

## How I Built It

I signed up for Twilio and followed their [quickstart guide for
Node.js](https://www.twilio.com/docs/sms/quickstart/node#install-nodejs-and-the-twilio-module).
I bought a phone number and tested sending a text to myself. This was painless.
I probably spent more time picking the phone number than I did writing the code.

Next, I needed to find a source for the content that I can count on to be
renewed on a daily basis and to be of high quality. I decided to use Reddit's
[r/aww](https://www.reddit.com/r/aww/) and
[r/UpliftingNews](https://www.reddit.com/r/UpliftingNews/) subreddits. They are
two of the largest subreddits, so I should never get duplicate content. I also
decided to grab the first post when sorting by top for today, which means the
community has heavily upvoted the post.

I looked into the best way to fetch posts from Reddit. I initially expected to
use their [API](https://www.reddit.com/dev/api/), but it [turns
out](https://www.reddit.com/r/javascript/comments/8yg6ig/adding_json_onto_the_end_of_most_reddit_urls/)
that Reddit has a convenient feature where you can simply append `.json` to the
end of a subreddit URL to receive the data as JSON:
`https://www.reddit.com/r/aww.json`.

This worked well, but I didn't know how to sort it by the top posts for today
rather than hot (trending posts right now). I
[discovered](https://www.reddit.com/r/redditdev/comments/1470nj/what_is_the_json_link_for_getting_differently/)
that a query parameter does the trick:
`https://www.reddit.com/r/aww/top.json?t=day`.

I wrote a script to grab the top posts for both subreddits and then text them
using Twilio.

Lastly, I needed a way to schedule the script to run every morning. To keep it
simple, I converted my script into an [AWS
Lambda](https://aws.amazon.com/lambda/) function and set up a [CloudWatch
Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)
rule that [triggers on a
schedule](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-Scheduled-Rule.html)
to fire the function every day at 10 a.m. UTC. The schedule expression is:
`cron(0 10 * * ? *)`.

This was a relatively simple project, and it has been fun getting the text every
morning.

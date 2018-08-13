---
categories:
  - programming
date: "2018-08-13"
draft: true
tags:
  - security
title: I Published My AWS Secret Key to Github
---

One of my earliest programming projects was a basic news headlines aggregator
that would display the top three headlines for each news source. I called it
[The Daily Lore](https://dailylore.com/). The [original
site](https://www.dailylore.com/legacy/) was [hosted on AWS S3 as a static
website](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).
At the time, I didn't know how to make a dynamic website, so my hacky solution
for updating the headlines was to run a Python script that would generate a JS
file with the headlines hardcoded inside. The script then updated the JS file
in the S3 bucket. To automate the updates, I ran the script on a micro EC2
instance in a cron job. Crucially, that means the script needed a AWS secret
key.

Eventually, AWS terminated my instance for some reason, and I abandoned the
website for a while. I revived it a few years later with a [new
repo](https://github.com/dguo/dailylore). Last month, I was cleaning up my Google Drive when I came across the old source code. I had copied the `.git` folder
as well, so I decided to push it up to GitHub just for fun.

A few minutes later, I got an email:

> Amazon Web Services has opened case ******** on your behalf.
>
> The details of the case are as follows:
>
> Case ID: ********
>
> Subject: Your AWS account ******** is compromised
>
> Severity: Urgent
>
> Correspondence: Dear AWS Customer,
>
> Your AWS Account is compromised! Please review the following notice and take
> immediate action to secure your account.
>
> Your security is important to us. We have become aware that the AWS Access
> Key ******** along with the corresponding Secret Key is publicly available
> online at ********.
>
> This poses a security risk to your account and other users, could lead to
> excessive charges from unauthorized activity or abuse, and violates the AWS
> Customer Agreement.
>
> Please delete the exposed credentials from your AWS account by using the
> instructions below and take steps to prevent any new credentials from being
> published in this manner again. Unfortunately, deleting the keys from the
> public website and/or disabling them is NOT sufficient to secure your
> account.
>
> To additionally protect your account from excessive charges, we have
> temporarily limited your ability to create some AWS resources. Please note
> that this does not make your account secure, it just partially limits the
> unauthorized usage for which you could be charged.
>
> Detailed instructions are included below for your convenience.

## Immediate actions

First, I let out a loud d'oh! I immediately knew the consequences of what I had
done. I've read [plenty of
stories](https://medium.com/@nagguru/exposing-your-aws-access-keys-on-github-can-be-extremely-costly-a-personal-experience-960be7aad039)
of nefarious people [scraping the
keys](https://www.theregister.co.uk/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/)
and spinning up tons of EC2 instances for purposes like Bitcoin mining.

I deleted the GitHub repo, but like the email cautions, I knew that wasn't
enough. Once a secret is compromised once, it's compromised forever. I went
into the AWS console and invalidated the key. Luckily, this was on my personal
AWS account, and nothing else depended on that key.

Then I created an IAM user.

## Cleaning up and republishing

I still wanted to publish the repo, but I needed to scrub the secrets. It
wouldn't be enough to just remove them in a new commit because they would still
be in the Git history. This part was the silver lining because I knew about
[The BFG](https://rtyley.github.io/bfg-repo-cleaner/) (I assume the name is a
reference to the [weapon](https://en.wikipedia.org/wiki/BFG_%28weapon%29) in
[Doom](https://en.wikipedia.org/wiki/Doom_(1993_video_game)), but I'm not sure)
but had (luckily) never gotten a chance to use it before.

I used it to remove the secrets.

I did a more thorough inspection and found other things in the repo that
shouldn't have ever been in there. There was a PDF explaining how SVGs work.
There was an Excel spreadsheet containing account passwords.

I used The BFG to remove those as well. I did a manual inspection to make sure
it worked as expected, and then I re-pushed to GitHub.

## Retrospective

I should have done a manual inspection of the files before pushing. I also
should have used a tool that is designed to find secrets in Git repos. There
are several of them:

* [git-secrets](https://github.com/awslabs/git-secrets)
* [gitleaks](https://github.com/zricethezav/gitleaks)
* [Truffle Hog](https://github.com/dxa4481/truffleHog)

I should have distrusted my past self. While it's secondhand
nature to me now to use environment variables for secrets and to think about
how they can be leaked, I forgot that at one point, I didn't know any of that.

---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - education
draft: true
tags:
  - anki
title: One Year of Spaced Repetition Learning With Anki
---

I started using [Anki](https://apps.ankiweb.net/) over a year ago, after a long
time of being frustrated with my poor memory. I had been interested in [spaced
repetition](https://en.wikipedia.org/wiki/Spaced_repetition) for a while, but I
finally dived in after reading [Michael Nielsen](http://michaelnielsen.org/)'s
[Augmenting Long-term Memory](http://augmentingcognition.com/ltm.html). This was
the most compelling statement:

> Anki makes memory a *choice*, rather than a haphazard event, to be left to
> chance.

The last year has shown me how empowering it is to make memory a choice. I
consistently review my cards once a day, and my only regret is that I didn't
start using Anki earlier, especially during college.

## Spaced Repetition

Spaced repetition is a learning technique.

## Year in Review

I started off slowly to get a sense of how Anki works in practice. Every day, I
checked [Merriam-Webster's Word of the
Day](https://www.merriam-webster.com/word-of-the-day). If I didn't know the word
already, I added it to Anki. My first card was for the word
["trousseau,"](https://www.merriam-webster.com/dictionary/trousseau) which I
added on September 28, 2018. Since then, I've added a total of 788 cards.

![Added card stats](https://i.imgur.com/YRUOoj2.png)

For the first few months, I only added vocabulary cards. It became a daily
habit, and being able to recall words felt incredible. I could tell that if I
had only looked up the definitions once, I would have quickly forgotten the vast
majority of them.

I eventually began to add programming cards as well. Sometimes I will search for
an answer to a programming question, end up on [Stack
Overflow](https://stackoverflow.com/), and realize that I've visited the page
before because I've had the same question in the past. I just forgot the answer.

Now, I will frequently add cards to Anki whenever I visit a Stack Overflow page,
making it unlikely that I'll ever need to re-learn an answer. This may seem
unnecessary because I can always look up the answer again, but my motivation is
to avoid context switching when I feel like I'm [in the
zone](https://en.wikipedia.org/wiki/Flow_(psychology)).

I generally use the Anki desktop program to add cards, but to review cards, I
usually use
[AnkiDroid](https://play.google.com/store/apps/details?id=com.ichi2.anki) on my
phone as a part of my morning routine or when I'm commuting. The
[AnkiWeb](https://ankiweb.net) website is also perfectly serviceable for both
adding and reviewing cards.

## Effective Anki

Nielsen's post, along with other tips I read about using Anki, helped me to
avoid mistakes early on, resulting in my current strategy.

### Pre-made Decks

In school, some teachers would allow cheatsheets, knowing that to make a good
cheatsheet requires learning the material.

In a similar way, making good Anki cards is part of the learning process. This
is one reason I've never used pre-made decks. Anki lets you [share
decks](https://ankiweb.net/shared/decks/), but I've never used one.

The other factor is that other decks aren't going to always match my idea of
what makes a good card.

### Atomic Cards

Make cards as atomic as possible. Breaking a complex topic down is the mental
equivalent of chewing food. It makes digestion easier. This is also a part of
the learning process. In particular, it helps me to identify to separate the
parts that I understand from the parts that are causing me difficulty.

### Make Multiple Cards

It's important to account for the different ways that we can retrieve the same
information. "What does term X mean?" is a different question from "What term
means Y?" I frequently make pairs of cards when I care about retrieving the
information in both directions.

This isn't always the case though. For my vocabulary cards, I only make cards
that ask for definitions. One reason is that many definitions have multiple
words that fit, so going backwards to a specific word would be ambiguous and
difficult. The other reason is that my main motivation for building my
vocabulary is so that I don't have to interrupt my reading so often to look up
words I don't know. I'm not interested in using fancy words in my writing, where
I try to stick to plain language as much as possible. So recalling words is not
important to me.

### Use One Deck

Instead of separating cards into topical decks, I put all my cards into a single
deck. This means that by default, my review sessions include every card, and the
cards are interleaved with each other. Instead of reviewing vocabulary cards
together and then programming cards together, they are mixed up. I'm not sure if
this actually helps learning and retention, but it certainly feels like my brain
is working harder. [Interleaving](https://effectiviology.com/interleaving/) does
seem to be an accepted best practice for learning.

### Context

I want each of my cards to work in a standalone manner. That means context needs
to be embedded in each card. I do this in two ways. The first is that I tag each
card. I'll add multiple tags to simulate a hierarchy. For example, I tag every
card regarding JavaScript with both "programming" and "javascript". I don't have
a use case for tags yet, but the organization is there if I need it in the
future.

I don't look at the tags while reviewing though. Instead, I add context to the
beginning of cards. An example is:

> In Postgres, how do you update a constraint?

## Future Plans

Going forward, I plan to significantly increase the rate at which I add new
cards.

I also need to be better about deleting cards that I no longer find useful.

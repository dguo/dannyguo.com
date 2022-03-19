---
categories:
  - programming
date: 2022-03-19
draft: true
tags:
  - forex
title: Forex Trading for Fun and Profit
---

My first experience with programming was an [introductory computer science
class](https://www.cs.princeton.edu/courses/archive/spring10/cos126/info.html)
during my freshman year of college. A few months later, armed with a B grade
knowledge of variables, loops, functions, and classes, I dove into my first
programming side project. I wrote [foreign
exchange](https://en.wikipedia.org/wiki/Foreign_exchange_market) (forex) trading
programs.

I've published as much of my old code as reasonable to
[GitHub](https://github.com/dguo/forex-trading), and I've tried to leave it as
intact as possible. This is the story behind that code.

## Forex Trading

When most people think of financial trading, they probably think of buying and
selling stocks or maybe even bonds. But the financial world goes much deeper
than that. Particularly through the
[power](https://www.investopedia.com/terms/d/derivativestimebomb.asp) of
[derivatives](https://www.investopedia.com/terms/d/derivative.asp), there are
ways for you to bet on all sorts of things, like the [future price of
wheat](https://www.vice.com/en/article/k7wyew/wheat-futures-are-the-hottest-stock-on-wall-street),
the [volatility of the stock
market](https://www.investopedia.com/stock-analysis/2012/4-ways-to-trade-the-vix-vxx-vxz-tvix-xxv0504.aspx),
or even the [difference](https://www.investopedia.com/terms/s/spreadoption.asp)
between the price of a natural resource (such as crude oil) and the price of
something that is refined from that resource (such as gasoline).

In terms of trading volume, those markets are all dwarfed by the one that I
became interested in: the foreign exchange market, which is the market for
currencies. It's the largest, most liquid market in the world. It has its own
[interesting
history](https://www.investopedia.com/articles/forex/10/forex-market-history.asp),
which includes [George Soros](https://en.wikipedia.org/wiki/George_Soros) making
$1 billion in a day by [betting against the Bank of
England](https://fortunly.com/articles/george-soros-and-the-bank-of-england/).

Consider the experience of going abroad (perhaps back in non-COVID times) to a
country that uses a different currency. You might go to a bank to change your
U.S. dollars into euros. You make the exchange at a certain rate (and maybe the
bank takes a fee in the process). You go to Europe for a few weeks. When you
get back, you change your remaining euros back into dollars. Depending on how
the exchange rate has fluctuated in the meantime, you could have more or less
money than you started with.

This is a small-scale example of [foreign exchange
risk](https://en.wikipedia.org/wiki/Foreign_exchange_risk).

## Picking a Broker

I used [Oanda](https://www.oanda.com) to trade. They let me leverage up to 50:1.

## Automation

I automated my trading with [MetaTrader
4](https://en.wikipedia.org/wiki/MetaTrader_4).

I bought a book named [Expert Advisor Programming: Creating Automated Trading
Systems in MQL for MetaTrader
4](https://www.amazon.com/Expert-Advisor-Programming-Automated-MetaTrader/dp/0982645902?crid=3QDACH7CXL46R&keywords=Expert+Advisor+Programming%3A+Creating+Automated+Trading+Systems+in+MQL+for+MetaTrader+4&qid=1644888838&sprefix=expert+advisor+programming+creating+automated+trading+systems+in+mql+for+metatrader+4%2Caps%2C97&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=2c0c6edb764af5bde0421e042ee819e1&language=en_US&ref_=as_li_ss_tl)
and learned how to write "expert advisors" (EAs).

I didn't know how to persist data, so I used CSV files as a storage mechanism.

I used a [Martingale
strategy](https://en.wikipedia.org/wiki/Martingale_(betting_system)).

## Results

I remember watching the USD/JPY price change dramatically. It later turned out
to be because of the [Tōhoku earthquake and
tsunami](https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami).

I saw huge swings. To some extent, I became desensitized to it.

I don't have great records for my performance, but it looks like I deposited
$31,050. And I ended up withdrawing $38,701.99.

I was lucky that I ended up making a profit. I certainly could have lost it all
on any given day.

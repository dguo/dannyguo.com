---
categories:
  - programming
date: 2022-03-27
draft: true
tags:
  - forex
title: Forex Trading for Fun and Profit
---

My first experience with programming was an [introductory computer science
class](https://www.cs.princeton.edu/courses/archive/spring10/cos126/info.html)
during my freshman year of college. A few months later, armed with a B grade
knowledge of variables, loops, functions, and classes, I dove into my first
programming side project by writing [foreign
exchange](https://en.wikipedia.org/wiki/Foreign_exchange_market) (forex) trading
programs.

I've published as much of my old code as reasonable to
[GitHub](https://github.com/dguo/forex-trading), and I've tried to leave it as
intact as possible and resist the urge to clean anything up. This is the story
behind that code.

## Forex Trading

When most people think of financial trading, they probably think of buying and
selling stocks or bonds or maybe crypto. But the financial world goes much
deeper than that. Particularly through the
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
currencies. It's the
[largest](https://www.investopedia.com/articles/forex/11/who-trades-forex-and-why.asp),
most liquid market in the world, with an estimated daily volume of $6.6
trillion. That means an annual volume that is measured in the *quadrillions*.
The market also has its own [interesting
history](https://www.investopedia.com/articles/forex/10/forex-market-history.asp),
which includes [George Soros](https://en.wikipedia.org/wiki/George_Soros) making
$1 billion in a day by [betting against the Bank of
England](https://fortunly.com/articles/george-soros-and-the-bank-of-england/).

Consider the experience of going from the United States to Europe (perhaps back
in non-COVID times). You might go to a bank ahead of time to change your U.S.
[dollars](https://en.wikipedia.org/wiki/United_States_dollar) into
[euros](https://en.wikipedia.org/wiki/Euro). You make the exchange at a certain
rate. You go to Europe for a while. When you get back, you change your remaining
euros back into dollars. Depending on how the exchange rate has fluctuated while
you were gone, you could have a profit or loss on the dollars that you didn't
spend. This is a small-scale example of [foreign exchange
risk](https://en.wikipedia.org/wiki/Foreign_exchange_risk).

Now imagine the case of a large corporation that operates internationally. The
corporation might make deals that involve receiving payments at a later date. If
the corporation doesn't take any steps to mitigate its foreign exchange risk, it
is effectively gambling on exchange rates. Instead, companies can
[hedge](https://en.wikipedia.org/wiki/Foreign_exchange_hedge) their risk using
derivatives. This also means that the company gives up any chance of making a
profit.

What I wanted to do was the opposite. I wanted to take on risk in the hopes of
making a profit. The first step was to pick a broker.

## Picking a Broker

I researched many brokers. One interesting thing was that many of them were
located in Cyprus. I believe this is due to lower taxes.

A key characteristic that I was concerned about was the maximum leverage amount.
Leverage means borrowing money so that you only have to put in a small amount of
money to control a larger position. When I was looking at brokers, the highest
amount that I saw was 500:1. That means that for a $500 position, you only need
to put in $1.

High amounts of leverage are common in the foreign exchange market because
exchange rates tend to be fairly stable. So you need large positions in order to
magnify the effects of small changes.

The power that comes with leverage isn't free. The more leveraged you are, the
easier it is to lose everything.

I used [Oanda](https://www.oanda.com) to trade. They let me leverage up to 50:1.

## Manual Trading

I made some small trades manually at first just to get a feel for things. Oanda
had a desktop application called fxTrade that I used. Here's a screenshot:

![Oanda fxTrade interface](https://i.imgur.com/dWFc9SV.png)

### Spread

If you look at a particular [currency
pair](https://en.wikipedia.org/wiki/Currency_pair), you'll see that has a sell
price (also known as the [ask
price](https://www.investopedia.com/terms/a/ask.asp)) as well as a buy price
(also known as the [bid
price](https://www.investopedia.com/terms/b/bidprice.asp)), and the buy price is
always higher than the sell price. The difference is known as the [bid-ask
spread](https://www.investopedia.com/terms/b/bid-askspread.asp). It means that
if you could simltaneously buy a pair and then sell it, you would lose money.
This is the primary way that brokers make money.

### PIPs

The spread is usually shown as a number of pips ([percentage in
point](https://www.investopedia.com/terms/p/pip.asp)).

### Currencies

You can see from the screenshot what currencies I could trade through Oanda:

* United States dollar
* Canadian dollar
* Australian dollar
* Japanese yen
* European Union euro
* New Zealand dollar
* Swiss franc
* Pound sterling

I learned some interesting nicknames. The GBP/USD pair is also known as the
cable because the exchange rate was transmitted by underwater cables across the
Atlantic Ocean.

## Automated Trading

I automated my trading with [MetaTrader
4](https://en.wikipedia.org/wiki/MetaTrader_4).

I bought a book named [Expert Advisor Programming: Creating Automated Trading
Systems in MQL for MetaTrader
4](https://www.amazon.com/Expert-Advisor-Programming-Automated-MetaTrader/dp/0982645902?crid=3QDACH7CXL46R&keywords=Expert+Advisor+Programming%3A+Creating+Automated+Trading+Systems+in+MQL+for+MetaTrader+4&qid=1644888838&sprefix=expert+advisor+programming+creating+automated+trading+systems+in+mql+for+metatrader+4%2Caps%2C97&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=2c0c6edb764af5bde0421e042ee819e1&language=en_US&ref_=as_li_ss_tl)
and learned how to write "expert advisors" (EAs) in MetaQuotes Language 4
(MQL4), which has syntax similar to C++.

I didn't know how to persist data, so I used CSV files as a storage mechanism.

I ran my EAs on a laptop that I left on 24/7. For alerting, I used the
[SendMail](https://docs.mql4.com/common/sendmail) function to email me whenever
the system placed a trade.

I used a [Martingale
strategy](https://en.wikipedia.org/wiki/Martingale_(betting_system)).

I noticed a few interesting things as I looked at my old code again.

I did some attempts at
[backtesting](https://www.investopedia.com/terms/b/backtesting.asp).

I found this `DoublesEqual` function in `PairUpdater/PairUpdater.mq4`.

```cpp
//+------------------------------------------------------------------+
//| function to check if two doubles are equal                       |
//+------------------------------------------------------------------+
bool DoublesEqual(double number1, double number2)
{
//----
  if (NormalizeDouble(number1 - number2, 4) == 0) return (true);
  else return (false);
//----
}
//+------------------------------------------------------------------+
```

## Results

I remember watching the USD/JPY price change dramatically. It later turned out
to be because of the [Tōhoku earthquake and
tsunami](https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami).

I saw huge swings. To some extent, I became desensitized to it.

I don't have great records for my performance, but it looks like I deposited
$31,050. And I ended up withdrawing $38,701.99.

I was lucky that I ended up making a profit. I certainly could have lost it all
on any given day.

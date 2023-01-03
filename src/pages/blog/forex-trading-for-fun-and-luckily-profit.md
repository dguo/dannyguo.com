---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-05-29"
draft: true
tags:
  - forex
title: Forex Trading for Fun and Luckily Profit
---

My first experience with programming was an [introductory computer science
class](https://www.cs.princeton.edu/courses/archive/spring10/cos126/info.html)
during my freshman year of college. A few months later, armed with a B grade
knowledge of variables, loops, functions, and classes, I dove into my first
programming side project by writing [foreign
exchange](https://en.wikipedia.org/wiki/Foreign_exchange_market) (forex) trading
programs.

I've published as much of my old code as I could find to
[GitHub](https://github.com/dguo/forex-trading), and I've left it as intact as
possible and resisted the urge to clean anything up. This is the story behind
that code.

## Forex Trading

When most people think of financial trading, they probably think of buying and
selling stocks, bonds, or (nowadays) crypto. But the financial world goes much
deeper than that. Particularly through the
[power](https://www.investopedia.com/terms/d/derivativestimebomb.asp) of
[derivatives](https://www.investopedia.com/terms/d/derivative.asp), there are
ways to bet on all sorts of things, like the [future price of
wheat](https://www.vice.com/en/article/k7wyew/wheat-futures-are-the-hottest-stock-on-wall-street),
the [volatility of the stock
market](https://www.investopedia.com/stock-analysis/2012/4-ways-to-trade-the-vix-vxx-vxz-tvix-xxv0504.aspx),
or even the [difference](https://www.investopedia.com/terms/s/spreadoption.asp)
between the price of a natural resource (such as crude oil) and the price of
something that is refined from that resource (such as gasoline).

In terms of trading volume, the markets for those instruments are all dwarfed by
the one that I became interested in back in 2010: the foreign exchange market,
which is the market for currencies. It's the
[largest](https://www.investopedia.com/articles/forex/11/who-trades-forex-and-why.asp),
most liquid market in the world, with an estimated daily volume of $6.6
trillion. That means an annual volume that is measured in the *quadrillions*
($1,000,000,000,000,000).  The market has its own [interesting
history](https://www.investopedia.com/articles/forex/10/forex-market-history.asp),
which includes [George Soros](https://en.wikipedia.org/wiki/George_Soros) making
$1 billion in a day by [betting against the Bank of
England](https://fortunly.com/articles/george-soros-and-the-bank-of-england/).

Consider the experience of going from the United States to Europe (perhaps back
in non-COVID times). Let's say you go to a bank ahead of time to change your
U.S.  [dollars](https://en.wikipedia.org/wiki/United_States_dollar) into
[euros](https://en.wikipedia.org/wiki/Euro). You make the exchange at a certain
rate, and then you go to Europe. When you get back, you change your remaining
euros back into dollars. Depending on how the exchange rate has fluctuated while
you were gone, you could have a profit or loss on the dollars that you didn't
spend. This is a small-scale example of [foreign exchange
risk](https://en.wikipedia.org/wiki/Foreign_exchange_risk).

You probably don't care about that risk, but think about the case of a large
company that operates internationally. The company might make deals that involve
receiving payments at a later date. If the company doesn't take any steps to
mitigate its foreign exchange risk, it is effectively gambling on exchange
rates. Instead, the company can
[hedge](https://en.wikipedia.org/wiki/Foreign_exchange_hedge) its risk using
derivatives, removing the chance of making a loss or a profit because of
exchange rate changes.

I wanted to do the opposite. I *wanted* to take on risk in the hopes of making a
profit. The first step was to pick a broker.

## Picking a Broker

I researched many brokers. A majority of them were located in Cyprus.
[Supposedly](https://bestctraderbrokers.com/why-are-there-so-many-forex-brokers-in-cyprus/),
that's because it's easier to get licensed there and because of lower fees and
taxes.

One factor for me was the maximum leverage amount. Leverage means borrowing
money so that you only have to put in a small amount of your own money to
control a larger position. When I was looking at brokers, the highest amount
that I saw was a stratospheric 500:1, which means that for a $500 position, you
only need to put in $1.

High amounts of leverage are common in the foreign exchange market because
exchange rates tend to be fairly stable, so you need large positions in order to
magnify the effects of small changes. But the power that comes with leverage
isn't free. The more leverage you use, the easier it is to lose everything
through a [margin call](https://www.investopedia.com/terms/m/margincall.asp),
when you are forced to put in more money or close your position.  Leverage makes
it easier to both make and lose money.

500:1 scared me, so I didn't anticipate wanting to use that much leverage. Some
of the brokers also seemed sketchy to me. I ended up picking
[Oanda](https://www.oanda.com/us-en/trading/), which let me leverage up to 50:1.

## Manual Trading

I made some small trades manually at first just to get a feel for things. I used
Oanda's desktop application. Here's an old screenshot:

![Oanda fxTrade interface](https://i.imgur.com/dWFc9SV.png)

### Currencies

You can see from the screenshot what currencies I could trade through Oanda:

* Australian dollar (AUD)
* Canadian dollar (CAD)
* European Union euro (EUR)
* Japanese yen (JPY)
* New Zealand dollar (NZD)
* Pound sterling (GBP)
* Swiss franc (CHF)
* United States dollar (USD)

I learned some nicknames for currencies, such as
"[loonie](https://www.investopedia.com/terms/l/loonie.asp)" for the Canadian
dollar because the $1 Canadian coin has a
[loon](https://en.wikipedia.org/wiki/Loon) on one side. Similarly, the New
Zealand dollar is informally known as the "kiwi" because the $1 New Zealand coin
has a [kiwi bird](https://en.wikipedia.org/wiki/Kiwi_(bird)) on one side.

### Currency Pair

You can also see that the currencies come in
[pairs](https://en.wikipedia.org/wiki/Currency_pair), such as EUR/USD. When I
look up EUR/USD [right now](https://finance.yahoo.com/quote/EURUSD=X/), it has a
rate of 1.07. That means that 1 euro is currently equivalent to 1.07 U.S.
dollars.

For each pair, the first currency is the "base" currency, and the second
currency is the "quote" currency. When you buy a currency pair, you are
simultaneously buying the base currency and selling the quote currency. You can
also sell a currency pair, which means selling the base currency and buying the
quote currency. So when you buy a currency pair, you hope the rate goes up, and
when you sell a pair, you hope that the rate goes down.

Some currency pairs also have nicknames. GBP/USD is known as the
"[cable](https://www.investopedia.com/terms/c/cable.asp)" as a reference to
[underwater
cables](https://en.wikipedia.org/wiki/Transatlantic_communications_cable) that
spanned the Atlantic Ocean to enable faster communication between the United
States and England. Later, EUR/USD became known as the "fiber" as a nod to the
[fiber-optic cables](https://en.wikipedia.org/wiki/Fiber-optic_cable) that are
used now for the same purpose.

### Spread

You might have noticed that each currency pair actually has two prices: a sell
price (also known as the [ask
price](https://www.investopedia.com/terms/a/ask.asp)) as well as a buy price
(also known as the [bid
price](https://www.investopedia.com/terms/b/bidprice.asp)), and the buy price is
always higher than the sell price.

The difference is known as the [bid-ask
spread](https://www.investopedia.com/terms/b/bid-askspread.asp). It means that
if you simultaneously buy a pair and sell it, you would lose money. The broker
would effectively keep the difference, and that is the primary way that the
broker makes money. So to make a profit yourself, it's not enough for the
currency pair to change in your favor. It has to change enough for you to beat
the spread.

The spread is usually shown as a number of pips ([percentage in
point](https://www.investopedia.com/terms/p/pip.asp)). A pip is the smallest
price change possible for a given currency pair. Typically, that means 1 pip is
0.0001. So if you buy EUR/USD at 1.0721 and then sell it at 1.0763, you've made
a profit of 42 pips. Oanda supports the concept of [fractional
pips](https://www1.oanda.com/forex-trading/learn/getting-started/pips), so their
rates have an additional decimal place.

In the screenshot, the number at the bottom center of each currency pair is the
spread. The spread is usually tighter for pairs that have greater trading
volume. You can see that EUR/USD, which is the most traded pair, had a spread of
1.2 pips at the time. Whereas AUD/NZD had a spread of 6.1 pips.

Spreads also change throughout the day. As a whole, the forex market is [open 24
hours a
day](https://www.investopedia.com/ask/answers/how-forex-market-trade-24-hours-day/).
Trading volume is correlated with when markets are open. So the busiest time is
when the European and U.S. markets are both open, and that's when spreads are
the tightest. But because of time zones, there is always at least one market
open.

## Strategy

After I got a handle on the basics of forex trading, I tried to come up with a
trading strategy. Spoiler alert: I didn't know what I was doing.

I ended up with a strategy of taking a small position to start. If the rate
moved several pips in my favor, I'd cash out and then reverse my position. If
the rate moved against me, I'd take another, larger position in the same
direction as the original position. My hope was that the new position would make
enough profit to outweigh any loss from the original position. If the rate
continued to move against me, I'd make a third, even larger trade. And so on.

In most cases, it only took me a few trades to make a profit in one direction.
The risk was that if a rate kept moving against me, I would eventually run out
of money. At that point, all my money would be in one position that could be
wiped out with a margin call.

So I was able to consistently make small profits, but there was always the risk
of a catastrophic loss that would wipe out all those small gains. I later
learned that this is called a [Martingale
strategy](https://en.wikipedia.org/wiki/Martingale_(betting_system)). In
retrospect, I had no reason to believe that my strategy was any good. I had no
special insight into forex rate changes or technological advantage. My strategy
was just gambling.

At one point, I did look into using [economic
indicator](https://www.investopedia.com/terms/e/economic_indicator.asp) releases
as a basis for trades. I even did some crude
[backtesting](https://www.investopedia.com/terms/b/backtesting.asp) with historical
indicators and forex rates. But I never put such a strategy into action. The
Martingale was my primary method during my brief stint as a forex trader.

## Automated Trading

I executed my strategy manually for a while. The next step was to automate my
trading. One reason I picked Oanda as my broker was their integration with a
platform called [MetaTrader 4](https://en.wikipedia.org/wiki/MetaTrader_4),
which I knew would make automation easy.

I bought a book named [Expert Advisor Programming: Creating Automated Trading
Systems in MQL for MetaTrader
4](https://www.amazon.com/Expert-Advisor-Programming-Automated-MetaTrader/dp/0982645902?crid=3QDACH7CXL46R&keywords=Expert+Advisor+Programming%3A+Creating+Automated+Trading+Systems+in+MQL+for+MetaTrader+4&qid=1644888838&sprefix=expert+advisor+programming+creating+automated+trading+systems+in+mql+for+metatrader+4%2Caps%2C97&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=2c0c6edb764af5bde0421e042ee819e1&language=en_US&ref_=as_li_ss_tl)
to learn how to write "expert advisors" (EAs) in [MetaQuotes Language
4](https://docs.mql4.com/) (MQL4), which has syntax similar to C++, as well as
built-in functions for trading, such as
[OrderSend](https://docs.mql4.com/trading/ordersend) and
[OrderClose](https://docs.mql4.com/trading/orderclose).

I wrote a helper function to place an order.

```cpp
void PlaceOrder(string pairToTrade, double sizeOfTrade)
{
  string pair = pairToTrade;
  double lots = NormalizeDouble(MathAbs(sizeOfTrade), 2);
  bool goLong = true;
  if (FirstGreater(0.00, sizeOfTrade)) goLong = false;
  double bidPrice = MarketInfo(pair, MODE_BID);
  double askPrice = MarketInfo(pair, MODE_ASK);

  // place the order if the lot size is below the maximum
  if (FirstGreater(100.00, lots)) {
    if (goLong) {
      OrderSend(pair, 0, lots, askPrice, 20000, 0, 0, NULL, 8, 0, Green);
    }
    else {
      OrderSend(pair, 1, lots, bidPrice, 20000, 0, 0, NULL, 8, 0, Green);
    }
  }

  // otherwise, split it up into as many orders as needed
  else {
    while (FirstGreater(lots, 100.00)) {
      if (goLong) {
        OrderSend(pair, 0, 100.00, askPrice, 20000, 0, 0, NULL, 8, 0, Green);
      }
      else {
        OrderSend(pair, 1, 100.00, bidPrice, 20000, 0, 0, NULL, 8, 0, Green);
      }
      lots = NormalizeDouble(lots - 100.00, 2);
    }
    if (goLong) {
      OrderSend(pair, 0, lots, askPrice, 20000, 0, 0, NULL, 8, 0, Green);
    }
    else {
      OrderSend(pair, 1, lots, bidPrice, 20000, 0, 0, NULL, 8, 0, Green);
    }
  }
}
```

I defined a [special start function](https://book.mql4.com/programm/special)
that would be called whenever there was a new tick (a rate update).

The only way that I learned in school to persist data was to use text files, so
that's what I did. I wrote and read CSV files.

```cpp
int handle = FileOpen(Symbol() + ".csv", FILE_CSV|FILE_READ, ",");
FileReadString(handle);
FileReadString(handle);
FileReadString(handle);
roundZeroMargin = StrToDouble(FileReadString(handle));
FileReadString(handle);
roundOneMargin = StrToDouble(FileReadString(handle));
FileReadString(handle);
roundTwoMargin = StrToDouble(FileReadString(handle));
FileReadString(handle);
roundThreeMargin = StrToDouble(FileReadString(handle));
FileReadString(handle);
roundFourMargin = StrToDouble(FileReadString(handle));
FileReadString(handle);
currentStreak = StrToInteger(FileReadString(handle));
FileReadString(handle);
lockDirection = StrToInteger(FileReadString(handle));
FileReadString(handle);
lockPrice = StrToDouble(FileReadString(handle));
FileReadString(handle);
inMotion = StrToInteger(FileReadString(handle));
FileClose(handle);
```

I ran my EAs on a laptop that I left on 24/7. For alerting, I used the
[SendMail](https://docs.mql4.com/common/sendmail) function to email me.

```cpp
// Stop Loss
if ((OrdersTotal() > 0) && (MathMax(100.0, AccountFreeMargin()) == 100.0)) {

  // close all orders and reset variables
  CloseAllOrders();
  ResetVariables();

  // send emergency email
  SendMail("Margin Call!", "No more margin left.");

  // stop the EA
  Sleep(100000000);
}
```

### Code Review

I noticed a few interesting things as I looked at my old code again.

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

Note the useless comment that doesn't tell anything more than the function
signature.

There's also the unnecessary conditions instead of just returning the boolean
directly.

`Averager/Averager.java` has [this
monstrosity](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/Averager/Averager.java#L123).

```cpp
if (DoublesEqual(total, 1000.0) && Hour() == 7) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 2000.0) && (Hour() == 3 || Hour() == 11)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 3000.0) && (Hour() == 1 || Hour() == 7 || Hour() == 13)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 4000.0) && (Hour() == 0 || Hour() == 5 || Hour() == 10 || Hour() == 15)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 5000.0) && (Hour() == 23 || Hour() == 3 || Hour() == 7 || Hour() == 11 || Hour() == 15)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 6000.0) && (Hour() == 22 || Hour() == 1 || Hour() == 4 || Hour() == 7 || Hour() == 10 || Hour() == 13)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 7000.0) && (Hour() == 22 || Hour() == 1 || Hour() == 4 || Hour() == 7 || Hour() == 10 || Hour() == 13 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 8000.0) && (Hour() == 22 || Hour() == 1 || Hour() == 3 || Hour() == 6 || Hour() == 9 || Hour() == 12 || Hour() == 15 || Hour() == 18)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 9000.0) && (Hour() == 22 || Hour() == 1 || Hour() == 2 || Hour() == 5 || Hour() == 7 || Hour() == 10 || Hour() == 13 || Hour() == 16 || Hour() == 18)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 10000.0) && (Hour() == 21 || Hour() == 0 || Hour() == 1 || Hour() == 3 || Hour() == 5 || Hour() == 7 || Hour() == 10 || Hour() == 12 || Hour() == 14 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 11000.0) && (Hour() == 21 || Hour() == 23 || Hour() == 1 || Hour() == 3 || Hour() == 5 || Hour() == 7 || Hour() == 9 || Hour() == 11 || Hour() == 13 || Hour() == 15 || Hour() == 17)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 12000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 2 || Hour() == 3 || Hour() == 5 || Hour() == 7 || Hour() == 9 || Hour() == 11 || Hour() == 13 || Hour() == 15 || Hour() == 17)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 13000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 6 || Hour() == 8 || Hour() == 10 || Hour() == 12 || Hour() == 14 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 14000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 9 || Hour() == 10 || Hour() == 12 || Hour() == 14 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 15000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 9 || Hour() == 12 || Hour() == 13 || Hour() == 15 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 16000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 11 || Hour() == 12 || Hour() == 14 || Hour() == 15 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 17000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 10 || Hour() == 11 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 18000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 15 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 19000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 20000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16 || Hour() == 17)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 21000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16 || Hour() == 17 || Hour() == 18)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 22000.0) && (Hour() == 21 || Hour() == 22 || Hour() == 23 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16 || Hour() == 17 || Hour() == 18)) firstHalf[d] = firstHalf[d] + 1000.0;
if (DoublesEqual(total, 23000.0) && (Hour() == 20 || Hour() == 21 || Hour() == 22 || Hour() == 23 || Hour() == 0 || Hour() == 1 || Hour() == 2 || Hour() == 3 || Hour() == 4 || Hour() == 5 || Hour() == 6 || Hour() == 7 || Hour() == 8 || Hour() == 9 || Hour() == 10 || Hour() == 11 || Hour() == 12 || Hour() == 13 || Hour() == 14 || Hour() == 15 || Hour() == 16 || Hour() == 17 || Hour() == 18)) firstHalf[d] = firstHalf[d] + 1000.0;
```

I was apparently very tolerant of repetition. See this code from
`MeanReversion/tests/Optimizer.java`, complete with a variable name of `wtf`.

```java
for (int aa = 0; aa < width; aa++) {
    //  for (int bb = aa + 1; bb < width; bb++) {
     //   for (int cc = bb + 1; cc < width; cc++) {
        //  for (int dd = cc + 1; dd < width; dd++) {
         //   for (int ee = dd + 1; ee < width; ee++) {
              //for (int ff = ee + 1; ff < width; ff++) {
               // for (int gg = ff + 1; gg < width; gg++) {
                  //for (int hh = gg + 1; hh < width; hh++) {
                 //   for (int ii = hh + 1; ii < width; ii++) {
                      //    for (int jj = ii + 1; jj < width; jj++) {
                      //  for (int kk = jj + 1; kk < width; kk++) {
                      //  for (int ll = kk + 1; ll < width; ll++) {
                      //   for (int mm = ll + 1; mm < width; mm++) {
                      // for (int nn = mm + 1; nn < width; nn++) {
                      //   for (int oo = nn + 1; oo < width; oo++) {
                      //    for (int pp = oo + 1; pp < width; pp++) {
                      //      for (int qq = pp + 1; qq < width; qq++) {
                      //         for (int rr = qq + 1; rr < width; rr++) {
                      //     for (int ss = rr + 1; ss < width; ss++) {
                      //     for (int tt = ss + 1; tt < width; tt++) {
                      //  for (int uu = tt + 1; uu < width; uu++) {
                      // for (int vv = uu + 1; vv < width; vv++) {
                      // for (int ww = vv + 1; ww < width; ww++) {

                      boolean[] invalid = new boolean[23];
                      for (int wtf = 0; wtf < width; wtf++) {
                        invalid[wtf] = true;
                       if (wtf == aa || wtf == aa || wtf == aa) invalid[wtf] = false;
                  //      if (wtf == dd || wtf == ee || wtf == ff) invalid[wtf] = false;
                        //if (wtf == gg || wtf == hh || wtf == ii) invalid[wtf] = false;
                        //   if (wtf == jj || wtf == kk || wtf == ll) invalid[wtf] = false;
                        //   if (wtf == mm || wtf == nn || wtf == oo) invalid[wtf] = false;
                        // if (wtf == pp || wtf == qq || wtf == rr) invalid[wtf] = false;
                        // if (wtf == ss || wtf == tt || wtf == uu) invalid[wtf] = false;
                        //   if (wtf == vv || wtf == ww) invalid[wtf] = false;
                      }
```

In `Forex/Other/Test2/Forex.java`, I
[apparently](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/Forex/Other/Test2/Forex.java#L28)
didn't like to have useful error messages.

```java
if(rawData.isEmpty()) System.out.println("wtf");
```

This should give you some idea of the sophistication of my programming abilities
at the time. I hooked up all that mental horsepower to my Oanda account and let
it rip.

## Results

I remember watching the USD/JPY price change dramatically. It later turned out
to be because of the [Tōhoku earthquake and
tsunami](https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami).

I saw huge swings. To some extent, I became desensitized to it.

I don't have great records for my performance, but it looks like I deposited
$31,050. And I ended up withdrawing $38,701.99.

I was lucky that I ended up making a profit. I certainly could have lost it all
on any given day.

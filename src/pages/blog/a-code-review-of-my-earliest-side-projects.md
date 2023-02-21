---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-02-21"
draft: true
tags:
title: A Code Review of My Earliest Side Projects
---

I was cleaning some of my files, and I found some of my earliest side projects.
I thought it'd be fun to review them.

Remember that feeling of reading code, being mildly horrified, and then
realizing that you were the one who wrote it? Yeah, I got that a lot while
looking at this code.

## Forex Trading

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

### Automated Trading

I executed my trading strategy manually for a while. The next step was to
automate my trading. One reason I picked Oanda as my broker was their
integration with a platform called [MetaTrader
4](https://en.wikipedia.org/wiki/MetaTrader_4), which I knew would make
automation easy.

I bought a book named [Expert Advisor Programming: Creating Automated Trading
Systems in MQL for MetaTrader
4](https://www.amazon.com/Expert-Advisor-Programming-Automated-MetaTrader/dp/0982645902?crid=3QDACH7CXL46R&keywords=Expert+Advisor+Programming%3A+Creating+Automated+Trading+Systems+in+MQL+for+MetaTrader+4&qid=1644888838&sprefix=expert+advisor+programming+creating+automated+trading+systems+in+mql+for+metatrader+4%2Caps%2C97&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=2c0c6edb764af5bde0421e042ee819e1&language=en_US&ref_=as_li_ss_tl)
to learn how to write "expert advisors" (EAs, which are basically trading bots)
in [MetaQuotes Language 4](https://docs.mql4.com/) (MQL4), which has syntax
similar to C++, as well as built-in functions for trading, such as
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

The only way that I had learned in school to persist data was to use text files,
so that's what I did. I wrote and read CSV files, which served as a simple
database.

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

Note the useless comment that doesn't tell you anything more than the function
signature.

There are also the unnecessary `if` and `else` conditionals instead of just
returning the boolean directly.

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

In `Forex/Other/Test2/Forex.java`, I [also
noticed](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/Forex/Other/Test2/Forex.java#L28)
that I was okay with undescriptive error messages.

```java
if(rawData.isEmpty()) System.out.println("wtf");
```

## The Daily Lore

My next side project was a news aggregation website that would show the
headlines from various websites.

## MovieSeer

For a college hackathon, I built a movie recommendation system called MovieSeer.

When it came time for presentations, I volunteered to go first. It went well enough, until I hit the button to generate recommendations..and everything hung. After an eternity (probably ten seconds in wall clock time), the recommendations came out.

I later learned that I accidentally left a `console.log` in, which logged every
result.

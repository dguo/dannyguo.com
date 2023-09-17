---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-09-17"
unlisted: true
tags: code-review
title: A Code Review of My Earliest Side Projects
---

While I was cleaning my files, I found my earliest programming side projects. I
thought it'd be fun to do a sort of code review of them. Do you know that
feeling of reading code, being mildly horrified, and then realizing that you
were in fact the one who wrote it? Yeah, I got that a lot while looking at this
code.

## Forex Trading

Exhibit A is from my freshman year of college. My first experience with
programming was an [introductory computer science
class](https://www.cs.princeton.edu/courses/archive/spring10/cos126/info.html).
A few months later, armed with a B grade knowledge of variables, loops,
functions, and classes, I dove into my first side project by writing [foreign
exchange](https://en.wikipedia.org/wiki/Foreign_exchange_market) (forex) trading
programs. The full story of my brief stint as an amateur currency trader is
[here](https://www.dannyguo.com/blog/forex-trading-for-fun-and-luckily-profit).

But for the code, I've published as much of it as I could find to
[GitHub](https://github.com/dguo/forex-trading). I left it as intact as possible
and resisted the urge to clean anything up. It's written in [MetaQuotes Language
4](https://docs.mql4.com/) (MQL4), which has syntax similar to C++, as well as
built-in functions for trading, such as
[OrderSend](https://docs.mql4.com/trading/ordersend) and
[OrderClose](https://docs.mql4.com/trading/orderclose).

For example, here is the function that I wrote to place an order.

```c
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

### Persisting Data

In school, the only way that I had learned to persist data was to use text
files, so that's what I did. I wrote and read CSV files, which served as my
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

It worked well enough, but if I were to do it over, I'd consider using
[SQLite](https://www.sqlite.org), which would make it easier to maintain a
history of data as well as to efficiently query the data.

### DoublesEqual

I found [this
function](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/PairUpdater/PairUpdater.mq4#L193)
in `PairUpdater/PairUpdater.mq4`.

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

I had unnecessary `if` and `else` conditionals. I could have just directly
returned the result of `NormalizeDouble(number1 - number2, 4) == 0`.

Also note the useless comment that doesn't tell you anything more than the function
signature. I found many more cases of bad comments, like this one.

```cpp
// print out success line
System.out.println("Success");
```

Nowadays, I try to make
sure my comments add meaningful details and context, instead of just repeating
what the code plainly says.

### Repetition

I was apparently *very* tolerant of repetition. `Averager/Averager.java` has
[this
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

And check out this code from `MeanReversion/tests/Optimizer.java`, complete with
a variable name of `wtf`.

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

### Undescriptive Error Messages

Speaking of (and you're probably also thinking) `wtf`, I
[noticed](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/Forex/Other/Test2/Forex.java#L28)
in `Forex/Other/Test2/Forex.java` that I was okay with undescriptive error
messages.

```java
if(rawData.isEmpty()) System.out.println("wtf");
```

Even if I just threw that in for debugging, it only would have taken a couple of
seconds to make the message actually mean something.

## The Daily Lore

My next side project was a news aggregation website called [The Daily
Lore](https://www.dailylore.com/) that would show the headlines from various
websites. I eventually remade it, but I preserved the original code in [this
repo](https://github.com/dguo/headlines). I did clean this one up a bit before
pushing to GitHub.

### Bad Commit Author

My commits had bad email addresses because I evidently didn't configure Git back
then. They looked like some sort of school network id. I rewrote the author info
using `git filter-branch` by following [these
instructions](https://stackoverflow.com/a/750182/1481479).

### Missing .gitignore

I also didn't know about the concept of
[gitignore](https://git-scm.com/docs/gitignore) back then, so I had `.pyc`
files, Excel spreadsheets, and even a PDF explaining how SVGs work in the repo.
I removed them from the Git history using [The
BFG](https://rtyley.github.io/bfg-repo-cleaner/).

The worst thing is that I committed secrets, like my AWS secret access key. I
used The BFG to remove them from the Git history as well. That has [its own
story](https://www.dannyguo.com/blog/I-published-my-aws-secret-key-to-github).

### Dynamic Website

I didn't know how to make a dynamic website at the time, so to update the
headlines, I [hardcoded
them](https://github.com/dguo/headlines/blob/d6aa64ac88895b786acc7694045e6232bfc3229c/generate_units.js#L4)
into `generate_units.js`, which the website would fetch and run.

```javascript
var sources = []
sources[0] = ["Rolling Stone", "entertainment", "http://www.rollingstone.com/", "Jack White Abruptly Ends Radio City Show After 50 Minutes", "http://www.rollingstone.com/music/news/jack-white-abruptly-ends-show-after-50-minutes-20120930", "Box Office Report: 'Hotel Transylvania' Sets September Record", "http://www.rollingstone.com/movies/news/box-office-report-hotel-transylvania-sets-september-record-20120930", "Justin Bieber Throws Up Onstage During Believe Tour Kickoff", "http://www.rollingstone.com/music/videos/justin-bieber-vomits-onstage-during-believe-tour-kickoff-20120930"];
sources[1] = ["NBC News", "a.general", "http://www.nbcnews.com/", "Christie: Romney debate performance will reshape race", "http://pheedo.msnbc.msn.com/click.phdo?i=56070b88d2e03612f00004d936f23c4a", "Paul Ryan: 'We've had some missteps' in campaign", "http://pheedo.msnbc.msn.com/click.phdo?i=33bbf6e400b84c1b2d035a57650d560b"];
sources[2] = ["NPR", "a.general", "http://www.npr.org/", "Being 'Better Off' May Not Be Enough To Win Colo.", "http://www.npr.org/2012/09/30/162029579/being-better-off-may-not-be-enough-to-win-colo?ft=1&f=1001", "On The Road: Reporting On Lead Poisoning In Nigeria", "http://www.npr.org/blogs/health/2012/09/27/161900047/on-the-road-reporting-on-lead-poisoning-in-nigeria?ft=1&f=1001", "Candidates Push For Colo. To Swing In Their Favor", "http://www.npr.org/2012/09/30/162039205/candidates-push-for-colo-to-swing-in-their-favor?ft=1&f=1001"];
```

Then I created a cron job that would update this file and update the info. I
should have had the cron job just update the HTML directly. That would make the
JavaScript unnecessary, avoiding a network call and allowing the website to
function even if JavaScript is disabled.

## MovieSeer

Last of all, for a college hackathon, I built a movie recommendation website
called [MovieSeer](https://github.com/dguo/movieseer). I used data from the
[Rotten Tomatoes](https://www.rottentomatoes.com/) API (which now [requires an
application](https://developer.fandango.com/rotten_tomatoes) to access). The
user could like and dislike movies, and MovieSeer would use those preferences,
along with the Rotten Tomatoes data, to try to find movies that the user would
like. So it was a very simplistic [content-based
filtering](https://en.wikipedia.org/wiki/Recommender_system#Content-based_filtering)
approach.

### Leftover Debugging

I didn't need to look at the code again to remember my biggest mistake with this
project. At the end of the hackathon, I volunteered to present first. It went
well enough, until I hit the button to generate recommendations..and everything
hung. After an eternity (probably ten seconds in wall clock time), the
recommendations appeared.

I realized later that I accidentally left a [debugging print
statement](https://github.com/dguo/movieseer/blob/c15c0aa5c1bba331436773defb863fdb9c17471a/recs.py#L81C17-L81C37)
in, and it ran in nested loops. This is the abridged version.

```python
def get_recs(info):
    for movie in movies.find():
        for person in movie['abridged_cast']:
            print person['name']
```

So the server printed each cast member for every movie in the database! And the
worst thing is that I was aware of it. The [last commit before my
presentation](https://github.com/dguo/movieseer/commit/506cb05fdfe8cc7faac8ae8c9d170022818905b8)
had a message of: "demo version (need to remove print statements)". Live demos
are always treacherous, but I should have run through it one last time before
the real thing.

### Database Connection on Every Request

For the same function, I noticed that I created a new database connection with
every recommendation request.

```python
def get_recs(info):
    # connect to Mongo, and open the "movies" table
    connection = Connection()
    db = connection.movies_database
    movies = db.movies
```

Besides removing the fairly useless comment, I also could have [set up a
connection
pool](https://www.mongodb.com/docs/manual/administration/connection-pool-overview/)
when [the server
starts](https://github.com/dguo/movieseer/blob/c15c0aa5c1bba331436773defb863fdb9c17471a/server.py#L19)
instead of creating connections on demand.

### Debug Mode

I always ran the server in [debug
mode](https://flask.palletsprojects.com/en/2.3.x/debugging/).

```python
if __name__ == '__main__':
    app.debug = True
    app.run()
```

Which is a big security concern in production and exposes raw error messages to
the user. I should have made sure to only run it in debug mode during
development.

### Authentication

There's no authentication for
[requests](https://github.com/dguo/movieseer/blob/c15c0aa5c1bba331436773defb863fdb9c17471a/static/js/loadmovies.js#L165) from the client to the server.

```javascript
var restart = function() { $.post('../../process_data', info, function(data) {
```

I did made this for a hackathon, so I didn't bother with creating a system for
users, but I like to think that I would have been worried about authentication
if I did.

Also, `process_data` was a terribly generic name for an endpoint.

## Conclusion

While looking at my old code made me repeatedly cringe, it was a good reminder
that I have in fact learned things and have grown as a programmer. My mistakes
were glaringly obvious. I hope that in another 10 years, my future self will
look back on what I'm building now with the same feelings.

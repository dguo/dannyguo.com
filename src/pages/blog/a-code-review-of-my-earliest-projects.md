---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2024-03-14"
tags:
  - code-review
title: A Code Review of My Earliest Projects
---

While I was cleaning my personal files, I found my earliest programming
projects, which are over a decade old. I decided to do a code review for fun. Do
you know that feeling of reading code that's only vaguely familiar, being mildly
horrified, and then realizing that you were in fact the one who wrote it? Yeah,
I got that a lot while looking at this code. Here are the highlights from three
projects: forex trading, The Daily Lore, and MovieSeer.

## Forex Trading

Exhibit A is from my freshman year of college. My first experience with
programming was an [introductory computer science
class](https://www.cs.princeton.edu/courses/archive/spring10/cos126/info.html).
A few months later, armed with a B grade knowledge of variables, loops,
functions, and classes, I dove into my first side project by writing [foreign
exchange](https://en.wikipedia.org/wiki/Foreign_exchange_market) (forex) trading
programs. The full story of my brief stint as an amateur currency trader is
[here](https://www.dannyguo.com/blog/forex-trading-for-fun-and-luckily-profit).

I've published most of the code to
[GitHub](https://github.com/dguo/forex-trading). I left it as intact as possible
and resisted the urge to clean anything up. It's written in [MetaQuotes Language
4](https://docs.mql4.com/) (MQL4), which has syntax similar to C++, as well as
built-in functions for trading, such as
[OrderSend](https://docs.mql4.com/trading/ordersend) and
[OrderClose](https://docs.mql4.com/trading/orderclose). Here is the function
that I wrote to place an order.

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

It worked well enough, but if I were to do it over, I'd probably use
[SQLite](https://www.sqlite.org), which is [designed to compete with
fopen()](https://www.sqlite.org/whentouse.html) and would make it easier to
maintain a history of data as well as to easily query that data.

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

I had unnecessary `if` and `else` conditionals. I could have directly returned
the result of `NormalizeDouble(number1 - number2, 4) == 0` instead.

Also note the useless comment that doesn't tell you anything more than the
function signature. I found many more cases of bad comments, like [this
one](https://github.com/dguo/forex-trading/blob/b90bb61b25b8ce4496d382609ddd6a428a1ffcfc/Reversion/RecordUpdater.java#L98).

```cpp
// print out success line
System.out.println("Success");
```

Nowadays, I try to write comments that add meaningful details and context,
instead of just repeating what the code plainly says.

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
seconds to [make the message more
meaningful](https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f).

## The Daily Lore

My next side project was a news aggregation website called [The Daily
Lore](https://www.dailylore.com/legacy/) that showed the headlines from various
websites. I eventually [remade it](https://www.dailylore.com/), but I preserved
the original code in [this repo](https://github.com/dguo/headlines). I did clean
this repo up a bit before pushing to GitHub because there were some issues that
weren't just bad code.

### Bad Commit Author

My commits had bad email addresses because I evidently didn't configure Git back
then. They looked like some sort of school network id. I rewrote the author info
using `git filter-branch` by following [these
instructions](https://stackoverflow.com/a/750182/1481479).

### Missing .gitignore

I also didn't know about the concept of
[gitignore](https://git-scm.com/docs/gitignore) back then, so my repo had `.pyc`
files, Excel spreadsheets, and even a PDF explaining how SVGs work. I removed
them from the Git history using [The
BFG](https://rtyley.github.io/bfg-repo-cleaner/).

The worst thing is that I committed secrets, like my AWS secret access key. I
used The BFG to remove them from the Git history as well. That has [its own
story](https://www.dannyguo.com/blog/I-published-my-aws-secret-key-to-github).

### Inconsistent Cases

I was inconsistent with [snake case](https://en.wikipedia.org/wiki/Snake_case)
vs. [camel case](https://en.wikipedia.org/wiki/Camel_case) for naming. Not just
within the same file but even between [back to back
lines](https://github.com/dguo/headlines/blob/d6aa64ac88895b786acc7694045e6232bfc3229c/generate_units.js#L57)!

```javascript
var number_of_rows = Math.ceil(sources.length / 4);

var currentCategory = "null";
```

Inconsistency hurts readability and is also a sign that
[linting](https://en.wikipedia.org/wiki/Lint_(software)) and [continuous
integration](https://en.wikipedia.org/wiki/Continuous_integration) aren't set up
for a repo.

And yes, it is strange that I used the string `"null"` instead of an actual
`null` value.

### Inline Styles

I used inline styles [in a few
cases](https://github.com/dguo/headlines/blob/d6aa64ac88895b786acc7694045e6232bfc3229c/index.html#L106).

```html
<div class="container" style="margin-top: -20px;">
```

While I think that's fine for such a simple, one-page website, I had other
styles in a `styles.css` file. I might as well have put all the styles in there
so that the styling wasn't done in two different ways.

## MovieSeer

Last of all, for a college hackathon, I built a movie recommendation website
called [MovieSeer](https://github.com/dguo/movieseer). I used data from the
[Rotten Tomatoes](https://www.rottentomatoes.com/) API (which now [requires an
application](https://developer.fandango.com/rotten_tomatoes) to access). The
user could like and dislike movies, and MovieSeer would use those ratings, along
with the Rotten Tomatoes data, to recommend movies. It was a simplistic
[content-based
filtering](https://en.wikipedia.org/wiki/Recommender_system#Content-based_filtering)
approach.

### Leftover Debugging

I didn't need to look at the code to remember my biggest mistake with this
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
are always treacherous, but I should have done one more practice run before the
real thing.

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

In addition to removing the useless comment, I could have [set up a connection
pool](https://www.mongodb.com/docs/manual/administration/connection-pool-overview/)
when the server starts instead of repeatedly creating connections.

### Debug Mode

I always ran the [Flask](https://flask.palletsprojects.com/) server in [debug
mode](https://flask.palletsprojects.com/en/3.0.x/debugging/).

```python
if __name__ == '__main__':
    app.debug = True
    app.run()
```

Which is a big security concern in production and exposes raw error messages to
the user. I should have made sure to only run the server in debug mode during
development.

### Authentication

There was no authentication for
[requests](https://github.com/dguo/movieseer/blob/c15c0aa5c1bba331436773defb863fdb9c17471a/static/js/loadmovies.js#L165)
from the client to the server.

```javascript
var restart = function() { $.post('../../process_data', info, function(data) {
```

This *was* for a hackathon, so I didn't bother with creating a system for users,
but I like to think that I would have considered authentication if I did.

Also, `process_data` was a terribly generic name for an endpoint.

## Conclusion

Looking at my old code made me repeatedly cringe, but it was a good reminder
that I have in fact learned things and grown as a programmer. My mistakes were
glaringly obvious. I hope that in another 10 years, my future self will look
back on what I'm building now with the same feelings.

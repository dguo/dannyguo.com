---
categories:
  -
date:
draft: true
tags:
  -
title: Automating TurboTax Data Entry With Puppeteer
---

I use [Betterment](https://www.betterment.com/) for some of my investments. For
my 2018 tax return, I wanted to use the [free
edition](https://turbotax.intuit.com/personal-taxes/online/free-edition.jsp) of
[Intuit](https://www.intuit.com/)'s [TurboTax
Online](https://turbotax.intuit.com/). For non-retirement account investments,
each transaction must be documented in the tax return. I had hundreds of
transactions in my account in 2018, and I didn't want to enter them manually.

Betterment does have a [TurboTax
integration](https://www.betterment.com/resources/tax-software-importing/) to do
this work automatically, but TurboTax [doesn't
allow](https://turbotax.intuit.com/personal-taxes/compare/online/) importing
forms unless you have the Premier plan or above. I didn't want to pay for the
Premier plan, in part because of Intuit's [lobbying
efforts](https://www.propublica.org/article/filing-taxes-could-be-free-simple-hr-block-intuit-lobbying-against-it)
against a simpler tax filing system.

This seemed like a great opportunity to try out
[Puppeteer](https://github.com/GoogleChrome/puppeteer). It's a library for
controlling Chrome and is developed by the Chrome team.

In the end, I probably [spent more time automating the
process](https://xkcd.com/1319/) than it would have taken to just enter the
transactions by hand, but I did learn a lot, and I hope to reuse the script in
the future. It's available on [GitHub](https://github.com/dguo/broker-scribe). I
call it BrokerScribe.

Here's a demo of the end result (running at half speed):

{{< video rSXtbz2 >}}

## Parsing the CSV file

First, I downloaded the 1099-B CSV file from Betterment's [tax forms
page](https://wwws.betterment.com/app/tax_forms).

![Betterment tax forms](https://i.imgur.com/iZnRus1.png)

After removing an extraneous comma at the end of the header row, I used
[xsv](https://github.com/BurntSushi/xsv) to look at the available columns.

```txt
$ xsv headers betterment-1099-b.csv
1   Account
2   Description
3   Symbol
4   CUSIP
5   Date Acquired
6   Date Sold
7   Gross Proceeds
8   Cost or Other Basis
9   Gain/(Loss)
10  Wash Sale Loss Disallowed
11  Federal Income Tax Withheld
12  Type of Gain(Loss)
13  Noncovered Securities
14  Reporting Category
```

Then I inspected the values to get an idea of what the data looks like.

```txt
$ xsv table betterment-1099-b.csv | xsv sample 3
Account                  Description                                                   Symbol  CUSIP      Date Acquired  Date Sold   Gross Proceeds  Cost or Other Basis  Gain/(Loss)  Wash Sale Loss Disallowed  Federal Income Tax Withheld  Type of Gain(Loss)  Noncovered Securities  Reporting Category
Danny's Taxable Account  0.004034 sh. Vanguard Total International Bond ETF Class O    BNDX    92203J407  07/09/2018     09/28/2018  $0.22           $0.22                $0.00        $0.00                      $0.00                        Short-term          No                     A
Danny's Taxable Account  0.697454 sh. Vanguard FTSE Developed Markets Class O          VEA     921943858  10/05/2015     08/20/2018  $29.66          $25.75               $3.91        $0.00                      $0.00                        Long-term           No                     D
Danny's Taxable Account  11.978683 sh. Vanguard FTSE Developed Markets Class O         VEA     921943858  11/16/2015     07/30/2018  $526.10         $443.93              $82.17       $0.00                      $0.00                        Long-term           No                     D
```

I used [neat-csv](https://github.com/sindresorhus/neat-csv) to read in the data.

```js
const fs = require('fs');
const csv = require('neat-csv');

(async () => {
    let transactions = fs.readFileSync('betterment-1099-b.csv');
    transactions = await csv(transactions);
})();
```

## Using Puppeteer

I launched Puppeteer in non-headless mode, which means that the browser UI
actually appears and can be controlled outside of the script. It launches a
bundled version of Chromium. It's possible to [use an existing
installation](https://stackoverflow.com/q/47122579/1481479) of Chrome, but each
version of the library is only guaranteed to work with its bundled browser.

I also turned off the default viewport so that [resizing the window would also
resize the viewport](https://github.com/GoogleChrome/puppeteer/issues/3688).

```js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: false
    });
})();
```

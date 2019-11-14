---
title: "Making Something People Want"
date: 2019-11-14T12:11:40-05:00
draft: false
tags:
- ycombinator
- startups
---

{{< imgproc "make-something-people-want" Fit "600x600" "fr pl5 pr5 pb4" >}}
{{< />}}

Y&nbsp;Combinator has a famous motto: _make something people want_. The first reference I could find to that motto was [this blog post from Paul Graham](http://www.paulgraham.com/good.html).

I think it's a great motto: people will pay for things they want, thus you can make a business out of it. But I can't help notice, most companies these days aren't being built for _people_, they're being built for companies. B2B business are easier because companies have lots of money to spend on things.

Additionally, some of the companies making things people want (e.g., Reddit) have turned to ads because you can get a lot more money out of companies running ads than you can out of ordinary people paying to use your product.

I looked quickly at the [top YC company list](https://www.ycombinator.com/topcompanies/) and did some analysis (using [HTTPie](https://httpie.org/), [pup](https://github.com/ericchiang/pup), [jq](https://github.com/stedolan/jq), and standard UNIX tools):

```shell
$ http https://www.ycombinator.com/topcompanies/index.html | pup 'div[data-sectors] json{}' | jq '.[]."data-sectors"' | sort | uniq -c | sort -nr
  53 B2B Software and Services
  16 Financial Technology and Services
  11 Consumer Goods and Services
   4 Education
   3 Consumer Media
   3 Biotech
   3 Automotive
   2 Real Estate
   2 Healthcare
   2 Construction
   2 Aerospace
   1 Energy and Environment
```

Let's break it down (approximately):

* 13% of the companies appear to offer consumer products
* 87% of the companies are B2B and offer non-consumer products

<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="font-family:'lucida grande', 'lucida sans unicode', arial, helvetica, sans-serif;font-size:16px; width:100%;" xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient x1="0" y1="0" x2="0" y2="1" id="highcharts-38"><stop offset="0" stop-color="rgb(96,96,96)" stop-opacity="0.8"></stop><stop offset="1" stop-color="rgb(16,16,16)" stop-opacity="0.8"></stop></linearGradient><clipPath id="highcharts-39"><rect x="1" y="1" width="578" height="335"></rect></clipPath></defs><g class="highcharts-series-group"><g class="highcharts-series highcharts-series-0" transform="translate(10,10) scale(1 1)"><path fill="#cdb5b5" d="M 289.9709765684734 26.50000295564766 A 142.5 142.5 0 0 1 393.77869490353294 71.34636471631266 L 290 169 A 0 0 0 0 0 290 169 Z" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round" transform="translate(0,0)"></path><path fill="#18d225" d="M 393.8762966331979 71.45019222073333 A 142.5 142.5 0 1 1 289.8020703588248 26.500137460216678 L 290 169 A 0 0 0 1 0 290 169 Z" stroke="#FFFFFF" stroke-width="1" stroke-linejoin="round" transform="translate(0,0)"></path></g><g class="highcharts-markers highcharts-series-0" transform="translate(10,10) scale(1 1)"></g></g><g class="highcharts-data-labels highcharts-series-0" transform="translate(10,10) scale(1 1)" opacity="1"><path fill="none" d="M 363.50801113449967 10.187327069513266 C 358.50801113449967 10.187327069513266 355.33082800942145 17.52936407498511 350.96220121243886 27.624664957508905 L 346.59357441545626 37.7199658400327" stroke="#cdb5b5" stroke-width="1"></path><path fill="none" d="M 216.4919888655004 326.81267293048677 C 221.4919888655004 326.81267293048677 224.6691719905786 319.47063592501496 229.0377987875612 309.37533504249114 L 233.4064255845438 299.28003415996733" stroke="#18d225" stroke-width="1"></path><g style="cursor:pointer;" transform="translate(369,0)"><text x="5" style="font-size: 14px; font-weight: bold; font-family: 'arial', sans-serif; color: rgb(0, 0, 0); fill: rgb(0, 0, 0); text-rendering: geometricprecision; text-shadow: none;" y="15"><tspan>Something people want: 13%</tspan></text></g><g style="cursor:pointer;" transform="translate(-10,317)"><text x="0" style="font-size: 14px; font-weight: bold; font-family: 'arial', sans-serif; color: rgb(0, 0, 0); fill: rgb(0, 0, 0); text-rendering: geometricprecision; text-shadow: none;" y="15"><tspan>Something companies want: 87%</tspan></text></g></g></svg>

-----------

## Making What People Want

I was having a conversation with a friend recently about the type of companies that attract VC funding nowadays, and both of us felt that the majority of new companies aren't building interesting products. Most new companies are merely optimizing business tools or problems. Very, very few of these companies are actually creating new technology that affect people.

Additionally, it's really hard to attract VC interest for business that fall outside the typical B2B mold. Building a technology business that's wildly different, with a mission to improve people's lives, is _very_ hard, and nearly impossible if you can't attract funding.

I can't help but ask the question: when was the last time anyone got excited about B2B products? I, for one, don't get excited about most B2B product offerings.

## Snarky Final Thought

YC might want to update their motto to _make something companies want_. It's easier to build a boring B2B business than it is to make something cool and interesting.

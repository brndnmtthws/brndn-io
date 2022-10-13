---
title: "My Worst Predictions"
date: 2022-10-07T14:03:54-05:00
draft: false
tags:
- predictions
- health
- markets
---

I've made my share of bad predictions. I've had lots of good predictions too.
And being right often doesn't matter, because in the end almost nobody will care
if you were right or wrong, and if you're going to go about placing bets based
on your predictions, it's incredibly
difficult to get the timing right.

Some of my best predictions include my general bullishness on software and the
internet since the 90s, betting on Airbnb, and also Bitcoin. In the case of the
last one, I was right about my bet, but got the timing wrong.

In terms of my _worst_ predictions, I have a few memorable ones. Most recently,
I bet the Federal Reserve wouldn't follow through with rate hikes (which, as you
likely already know, it has). In fact, I predicted they wouldn't get above 0.50%
for the federal funds rate by the end of 2022. Woops.

Another one of my bad predictions (so far, I guess it could change) was that the
internet advertising bubble would burst. We already know advertising is
remarkably ineffective, and Freakonomics did a two-part series
([one](https://freakonomics.com/podcast/does-advertising-actually-work-part-1-tv-ep-440/),
[two](https://freakonomics.com/podcast/does-advertising-actually-work-part-2-digital-ep-441/))
on this. I _still_ think advertising is a giant bullshit bubble, but it may
never burst in the sense that big ad companies would go belly up or have huge
revenue declines (Google, Facebook, etc). The thing about ads is that
advertising are always competing for eyeballs, so if one company stops running
ads, there are a bunch right behind them to take their place, so they can't stop
the ad spend because then their competitors would get in front of the eyeballs
(or bots).

Another one of my bad predictions is that when Obama won the election there
would be big changes, and he'd live up to his promises. In spite of the
Democratic party having a short-lived supermajority, they largely fell short on
much of what was promised. To give credit where it's due, they did _eventually_
delivery on a pared down healthcare bill with a few key provisions (notably
banning insurance companies from denying coverage due to "preexisting
conditions", which is a dystopian political term for people who aren't in
perfect health).

Another prediction I made was that the COVID-19 thing was going to be another
short lived news cycle, which turned out to be terribly wrong. As of today the
NYT still shows their "Coronavirus Pandemic" widget on the front page, although
they've moved it from the top to 2/3rd of the way down the page.

![NYT COVID widget](nyt-covid.png "The NYT COVID widget, from their front page circa Oct 7, 2022")

They've slowly nudged it down as interest in the subject has waned, but I guess
it still gets enough clicks that they make room for it on the front page.

And certainly COVID is more than just a news cycle, but the NYT doesn't bother
to make room for the other health crises in the US: obesity, opioids, cars,
pollution, etc.

## Being right is only 10%

I guess that brings me to my point: whether you have the right prediction or not
is kind of irrelevant. What matters is how you act on it, and in the case of
making bets (such as with stocks) it's _very_ hard to get the timing right. In
fact, I'd argue that getting the size and timing right is 90% of the problem
when it comes to markets.

Constructing a portfolio to bet on any one particular thing can be quite tricky,
and it's often not as simple as taking a short or long position. For example, if
I wanted to bet on the demise of Facebook (which, I think a lot of people are
also betting on) it seems like the easy thing would be to short META, or buy
some puts, right? Wrong.

Herein lies the problem with betting on such things:

- Most of the time, such bets are too obvious.
- Markets are efficient and clever enough to know that lots of people think
Facebook is a failure, even though it's still quite big, generates a lot of
revenue, and probably won't disappear anytime soon.
- Most of the tools available to ordinary folks like you and me have already
priced in the likelihood of Facebook's demise, meaning it's "priced in", and
even if you're right you probably won't be more right than the market makers.
- It can take much longer for things to play out than you can remain solvent
for. Or, as they saying goes, "markets can stay irrational much longer than you
can stay solvent".

Some of the most clever fund managers or investors have managed to be successful
with big bets like this in part by using specialized derivatives, or by
constructing clever portfolios that protect them from the risk of decay or (in
the case of shorting) interest payments. For example, if I want to short a stock
like GME, I have to pay 9.6% (at the time of writing) to borrow the stock to
short. You can do some fairly simple calculus to see how much the stock would
need to fall and at what rate over some period of time to see what your return
would be. When the volatility spikes, the cost to borrow (in the case of
shorting) goes up, and so does the implied volatility on options (which makes
the cost of shorting with options higher, too).

There are a lot of technical issues that go into this, but to get back to my
point: the best fund managers figure out alternative ways to make such bets,
which often involve some kind of spread (i.e., buying one thing and selling
another) which can balance out some of the cost of shorting, depending on what
you're doing. Of course you can still be wrong and lose money, but the point is
to limit the max loss.

## Minimax

<figure class="sm:max-w-[16rem] sm:float-right sm:mr-0 sm:ml-4 my-1">
  <a href="Minimax.svg">
    <img class="my-0 rounded-md bg-white p-2" src="Minimax.svg" alt="Minimax tree" />
  </a>
  <figcaption>Minimax tree, from Wikipedia, which is one way to implement minimax</figcaption>
</figure>

And now we arrive at my last thought which is the idea of applying
[minimax](https://en.wikipedia.org/wiki/Minimax) to such bets. Minimax is short
for minimizing the maximum loss (or the reverse, depending on which way you're
betting), and it's basically the algorithmic equivalent of the [Nash
equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium), popularized by
[that film](https://en.wikipedia.org/wiki/A_Beautiful_Mind_(book)) with the
angry Australian Russell Crowe.

The Nash equilibrium basically says that if all players in a game act in
everyone's best interest, then you're most likely to have a good outcome for
everyone. It's kind of related to [prisoner's
dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma), in that if both
prisoners cooperate, they will have a decent outcome.

Anyway, getting back to the subject of making predictions and betting on them:
if you _do_ decide you want to construct a bet, it's important to try and
construct a bet in such a way that you always minimize the max loss. I think
people might have a tendency to try and take bets with the highest possible
returns, which I supposed would be maximax, but from a strictly statistical or
game theory perspective, that is a losing strategy. Or rather, you might
occasional be right, but most of the time you'll be wrong, and in the end you'll
probably lose.

There's also another way to think about this, which is that instead of placing
bets to profit from your predictions, you adjust your bets to decrease risk.
Probably the simplest (or most common) example of this is the application of
[Modern Portfolio Theory](https://en.wikipedia.org/wiki/Modern_portfolio_theory)
to investing: you can minimize your downside risk by diversifying across
non-correlated assets. Of course, this doesn't work so well when everything
becomes correlated, as we've seen recently in a rising rates environment.

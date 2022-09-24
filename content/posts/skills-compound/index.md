---
title: "Skills Compound"
date: 2022-09-24T08:26:19-05:00
draft: false
tags:
- skills
- exponential growth
- compounding interest
covercaption: Compounding compounds
math: true
---

Humans are pretty bad at intuiting about exponential growth. Whether it's
[pollution](https://gml.noaa.gov/ccgg/trends/mlo.html), [population
growth](https://www.youtube.com/watch?v=8x98KFcMJeo), or the way a virus
spreads, our brains are bad at understanding the impact of such growth.

Exponential growth tends to feel slow at first, and then at some point you
realize it's all happening quite quickly.

Another popular example of this is the growth of wealth versus labour. Why is
there so much wealth inequality and concentration today? It's quite simple, the
returns on wealth compound at a higher rate than the returns on labour (which,
depending on how you look at it, have been diminishing or stagnant in most
places).

How do we use this information to our advantage? It starts with figure out how
to recognize exponential growth. Anything that compounds will grow
exponentially. Anything that is 1) growing and 2) has its future value dependent
on its past values is probably growing exponentially.

If you're unsure, sometimes it can be as simple as creating a plot and seeing if
the growth is accelerating all the time, which can sometimes be ascertained
visually.

But anyway, this post isn't so much about exponential growth, but rather it's about _skills_. Skills compound, and therefore they grow exponentially (provided you [continue to learn]({{< ref "always-be-learning" >}})).

To understand how skills compound, we can think about learning skills as a loop
with steps that are something like this:

* You need to solve problem Z, which requires skill X and Y
* You know how to do X, but you don't know Y yet
* You invest time to learn Y, and this gets added to your set of skills
* You apply X and Y to solve Z
* Not only have you mastered X and Y, but combined they also create a new skill, Z (which is a superset, but could also be considered distinct on its own)

Additionally, skills can often compound in weird ways. If X and Y are worth 5 skill points on their own, but Z is worth 12 skill points, we can see there's some magic happening where the combination of these skills is worth more than the sum of their parts.

Why does this happen? It's due to what I'll call this the _learned premium_. In
other words, there's value in the fact that you have _experience_ with this
combination of skills, and that experience is worth a premium because there's
value in knowing how X and Y combine to make Z, the difference of which is the
learned premium.

The _total_ value $v$ of your skills can be modeled as:

$v = \displaystyle\sum_{i=1}^ns = sᵢp$

Where $sᵢ$ is a skill, and $p$ is the learned premium.

Which is equivalent to:

$v = \displaystyle\sum_{}s = s_{1}p + s_{2}p + s_{3}p + s_{4}p + s_{5}p + \cdots + s_{n}p$

You can assume that $n$ is just a function of time, where the longer you spend working to develop your skills the greater the value of $n$ becomes. On the day you're born a fresh new baby, $n = 0$. Every time you learn a new skill, you get $n = n + 1$.

The individual value for each instance of $s_{n}$ is kind of irrelevant, as over
time the compounding of $p$ and $n$ makes $s_{n}$ less significant. In fact, so
long as $s_{n} >= 1$ and $p > 1$, your total skill value $v$ will always grow
exponentially as $n$ grows (in other words, if you continuously learn new skills).

In dayjob parlance we talk about these things as skills ($s_{n}$) and experience
($n$). If you are more skilled at learning (which is–on its own–a valuable
skill) then your learned premium $p$ _increases_. That's right, $p$ is actually
a function of $n$ too. We can model it this way:

$p = n^\lambda$

Where $\lambda$ is a made-up constant that represents the risk-free learning
premium (i.e., the minimum amount of premium you can attain from simply learning
any skill at any level).

Okay neat, but what do _I_ as an individual do with this information? In short,
optimize for $p$ and $n$. Going deep (depth) into a subject or domain will
increase your $p$ quite a bit, by increasing $\lambda$ through acquisition of
specialized knowledge, however it's probably easier to increment $n$ by going
wide (breadth) and learning lots of different (and easier to acquire) skills
from various domains.

Or, at least I think so.

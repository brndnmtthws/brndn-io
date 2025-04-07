---
title: Skills Compound
date: 2022-09-24T05:26:19.000Z
draft: false
tags:
  - skills
  - exponential growth
  - compounding interest
  - learning
  - creativity
---

Humans are pretty bad at intuiting about exponential growth. Whether it's
[pollution](https://gml.noaa.gov/ccgg/trends/mlo.html), [population
growth](https://www.youtube.com/watch?v=8x98KFcMJeo), or the way a virus
spreads, our brains struggle to grasp the impact of such growth.

![Skills](cover.jpg)

Exponential growth tends to feel slow at first, and then suddenly you realize it's all happening quite quickly. Think of the classic rice and chessboard problem: if you place one grain on the first square and double it on each subsequent square, by the 64th square you'd need more rice than has been produced in human history.

Another example is the growth of wealth versus labor. Why is there so much wealth inequality today? It's quite simple: the returns on wealth compound at a higher rate than the returns on labor (which, depending on how you look at it, have been [diminishing or stagnant](https://www.epi.org/publication/charting-wage-stagnation/) in most places).

How do we use this information to our advantage? It starts with recognizing exponential growth. Anything that compounds will grow exponentially. Anything that is 1) growing and 2) has its future value dependent on its past values is probably growing exponentially.

If you're unsure, sometimes it can be as simple as creating a plot and seeing if the growth is accelerating over time, which can often be determined visually.

But this post isn't so much about exponential growth generally—it's about _skills_. Skills compound, and therefore they grow exponentially (provided you [continue to learn]({{< ref "always-be-learning" >}})).

## How Skills Compound

To understand how skills compound, we can think about learning skills as a loop with steps that look something like this:

* You need to solve problem Z, which requires skill X and Y
* You know how to do X, but you don't know Y yet
* You invest time to learn Y, and this gets added to your set of skills
* You apply X and Y to solve Z
* Not only have you mastered X and Y, but combined they also create a new skill, Z (which is a superset, but could also be considered distinct on its own)

For example, imagine you know how to code (X) but don't know statistics (Y). You learn statistics to build a machine learning model (Z). Now you have three skills—coding, statistics, and machine learning—each valuable on its own, but especially powerful in combination.

Skills often compound in unexpected ways. If X and Y are worth 5 skill points on their own, but Z is worth 12 skill points, there's clearly some magic happening where the combination of these skills is worth more than the sum of their parts.

Why does this happen? It's due to what I'll call the _learned premium_. There's inherent value in your _experience_ with this combination of skills. That experience is worth a premium because knowing how X and Y combine to make Z creates unique value. The difference between the combined value and the sum of individual values is the learned premium.

## The Mathematics of Skill Compounding

The _total_ value \\(v\\) of your skills can be modeled as:

{{< katex >}}
$$
v = \displaystyle\sum_{i=1}^ns = sᵢp
$$

Where \\(sᵢ\\) is a skill, and \\(p\\) is the learned premium.

Which is equivalent to:

$$
v = \displaystyle\sum_{}s = s_{1}p + s_{2}p + s_{3}p + s_{4}p + s_{5}p + \cdots + s_{n}p
$$

You can think of \\(n\\) as a function of time. The longer you spend developing your skills, the greater the value of \\(n\\) becomes. On the day you're born, \\(n = 0\\). Every time you learn a new skill, \\(n = n + 1\\).

The individual value of each \\(s_{n}\\) becomes less significant over time as the compounding of \\(p\\) and \\(n\\) takes effect. In fact, as long as \\(s_{n} >= 1\\) and \\(p > 1\\), your total skill value \\(v\\) will always grow exponentially as \\(n\\) grows—in other words, if you continuously learn new skills.

In professional terms, we talk about these things as skills (\\(s_{n}\\)) and experience (\\(n\\)). If you become more skilled at learning itself (which is a valuable meta-skill), then your learned premium \\(p\\) _increases_. That's right, \\(p\\) is actually a function of \\(n\\) too. We can model it this way:

$$
p = n^\lambda
$$

Where \\(\lambda\\) is a constant that represents the risk-free learning premium (i.e., the minimum premium you can attain from simply learning any skill at any level).

## What This Means for You

So what do _you_ as an individual do with this information? In short, optimize for both \\(p\\) and \\(n\\).

Going deep (depth) into a subject will increase your \\(p\\) quite a bit by increasing \\(\lambda\\) through acquisition of specialized knowledge. Think of someone who becomes an expert in a programming language versus someone with only basic knowledge.

However, it's often easier to increment \\(n\\) by going wide (breadth) and learning lots of different (and easier to acquire) skills from various domains. A programmer who also understands design, communication, and business strategy can create more complete solutions than one who only codes.

The most successful people often combine depth in one or two areas with breadth across many complementary domains. Look at someone like Elon Musk, who combines engineering knowledge with business acumen, or creative professionals who understand both design and technology.

The key insight? Don't just accumulate random skills—seek out skills that compound with what you already know. And never stop learning.

Or, at least that's how I see it.

---
title: "Combating Recruiter Spam"
date: 2024-03-18T09:49:06-04:00
draft: false
tags:
- jobs
- hiring
- recruiters
- spam
- AI
---

Anyone who's worked in computers for any amount of time has likely experienced a
deluge of recruiter spam over the years. Most recruiters use the same strategy
men use on dating apps: spray and pray, ask questions later. The primary
beneficiaries of this strategy are companies like Microsoft (the parent of
LinkedIn), for which LinkedIn generates about $4bn in revenue per quarter (‼️) for
their spam facilitation, according to their latest earnings report[^1].

## A Case Study

As we enter the wonderful era of rebranding all software as "AI", some companies
have decided to enhance and augment their recruiting strategies by utilizing new
SaaS (Spam as a Service) tools. One such company is [Gem](https://www.gem.com/),
which offers a spamming tool that harvests email addresses from GitHub and other
sources.

Amusingly, GitHub is also a Microsoft subsidiary, though I doubt Gem asked for
permission to scrape their data. I suppose LinkedIn will either have to up its
spam game or acquire Gem to stay competitive.

![Gem website copy](gem-1.png "Spam your subjects with Gem! Extra points for using the word 'AI' in your email, or using DEI stock photography.")

Gem's marketing material boasts that their tool can "Build pipelines 5x faster
by automating personalized outreach across multiple channels", "Maximize
recruiter effectiveness and impact", and "Run talent acquisition like a
data-driven business".

![Gem website copy](gem-2.png "Recruiting will never be the same!")

Quite a few people have noticed their spam, with the common denominator being
the use of the `znsrc.com` domain for the unsubscribe links and click
tracking[^2][^3][^4].

![Gem website copy](gem-3.png "Recruiting will never be the same!")

Here's [one example I received](./raw-mail-1.txt) from one of their customers,
along with a [drip campaign follow-up](./raw-mail-2.txt). If you look closely,
you can see they use the email address I include in my résumé, which is
[available on GitHub](https://github.com/brndnmtthws/resume/). They also did not
include salary information in either the email or the job description (I checked
their Greenhouse posting), which is a red flag–_and_ illegal in New York City.

I deleted my LinkedIn account a few years back as I got no value out of it, and
most of the content on LinkedIn seems to be posted by insane people, so they
couldn't have found me via scraping LinkedIn. I still get plenty of spam without
LinkedIn, so I don't miss it.

I'm not sure how sophisticated Gem's tooling _actually_ is. Still, I wouldn't be
surprised if they've built a dataset of email addresses with keyword-based
enrichment that allows recruiters to spam people based on the latest buzzwords.
Perhaps they're clever enough to filter people based on how many GitHub stars
their projects have acquired, how many followers they've collected, or some
other vanity metrics.

## Taking Action

I've been using a few strategies to combat recruiter spam over the years, and
none of them have been very effective. Recently, I've been trying a new
approach, which essentially involves responding with a request that will waste
just enough of their time that, hopefully, they will realize it's not worth the
effort. Here's what I've started replying to recruiter spams with:

> Hey {{ derpnuts }},
>
> I know that recruiting is a very difficult job, so I prefer to avoid wasting your time (and require the same courtesy in return). I’d be happy to chat further, however, these days I charge a $10,000 interviewing fee, which–upon the acceptance of an offer–can be applied as a credit to my wages.
>
> I require this interviewing fee up-front in order to filter out companies that are not serious about hiring and to reduce the amount of ghosting I experience. The fee is non-refundable.
>
> Additionally, I need to know the total compensation for this position (base salary, equity, bonus, etc) before proceeding, as I do not consider positions without having this information ahead of time. Salary information is required by law in New York City under the Pay Transparency Law (<https://dol.ny.gov/pay-transparency>).
>
> If you’d like to proceed, please let me know, and we can arrange payment. If I don’t hear back from you within one week, I will assume you have chosen not to proceed.
>
> All the best & thanks for the email,

Brenden

I use the Apple Mail [template
trick](https://www.ericleeclark.com/create-email-templates-in-apple-mail-mojave/)
to send these responses quickly, and I have (so far) had a 100% success rate in
driving recruiters away. In fact, I haven't received a single response from any
recruiter yet!

## Labour Solidarity in the 21st Century ✊

If everyone followed a similar approach, it would force recruiters to be more
transparent about compensation and reduce the quantity of spam we all receive.
It's a bit like a distributed union for anyone with an email address who
receives recruiter spam.

[^1]: <https://www.microsoft.com/en-us/Investor/earnings/FY-2024-Q2/productivity-and-business-processes-performance>
[^2]: <https://old.reddit.com/r/cscareerquestions/comments/rxohkp/getting_emails_from_allegedly_real_people_they/>
[^3]: <https://news.ycombinator.com/item?id=39728564>
[^4]: <https://news.ycombinator.com/item?id=30461438>

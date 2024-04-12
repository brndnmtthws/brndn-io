---
title: "The Internet's Identity Crisis"
date: 2019-11-30T12:18:40-05:00
draft: false
tags:
- internet
- technology
---

The [ISOC](https://en.wikipedia.org/wiki/Internet_Society) recently [sold the `.org` TLD registry to a private equity firm for $1.1b](https://www.keypointsabout.org/blog/advancing-the-internet-societys-mission-into-the-future). What this means, in the grand scheme of things, remains to be seen, but [many](https://savedotorg.org/) [people](https://blogs.harvard.edu/sj/2019/11/23/a-tale-of-icann-and-regulatory-capture-the-dot-org-heist/) [around](https://domainnamewire.com/wp-content/ICA-Letter-to-ICANN-Board-of-Directors-November-15-2019.pdf) [the](https://www.theregister.co.uk/2019/11/20/org_registry_sale_shambles/) [web](https://www.vice.com/en_us/article/59nvjd/private-equity-is-going-to-ruin-the-org-domain-system-and-screw-nonprofits) have expressed disapproval.

![Doge](cover.jpg "Doge contemplating the Internet, and squirrels")

## DNS

DNS (which stands for _domain name system_) is the name service for the web. It's a critical, but dated, piece of Internet infrastructure that allows people to type words into an address bar in their browser (or some other Internet service) and like magic you connect to the desired service.

## The Internet's Identity

DNS is the de facto Internet identity service. Whoever controls the `google.com` domain _is_ Google. If you want to start a company and come up with a name for it, you need to find a name with domains available. URLs on the web include a domain name, and thus the web as it is now only works _because_ of DNS.

There are some decentralized alternatives to DNS, but none of them have gained enough traction to bother mentioning.

The closest thing to a real DNS alternative is probably Google itself (or some other search engine). Search engines are _much_ worse than DNS because it's fairly easy to skew search results and the companies running these search engines tend to prioritize ads over information. Also, you still need to reach `google.com` from your browser to search anyway. And of course all the search results themselves use DNS.

## Am I mad?

My initial reaction to the news was "HELL YEAH I'm mad". But after thinking about it for a while, I'm less mad than I was.

### Some reasons why this change isn't so bad

- DNS is a dated system, and most 'users' don't even know WTF DNS is, especially on mobile, so I can't help but ask "_does it even matter which TLD you use?_"
- DNS security is already weak and has a lot of problems: low deployment of DNSSEC, query tracking, domain hijacking, squatting, misstyped domains, phishing domains, etc, so maybe we shouldn't place so much trust in DNS
- Less trust in DNS means more trust in not using DNS, which hopefully leads to working on DNS alternatives

### Some reasons why this change _is_ bad

- Lots of nonprofits use `.org` domains and now they're at risk for getting extorted ("_pay us more if you want to keep your identity!_")
- DNS has, for the most part, been one of the few services on the web that hasn't been ruined by people seeking to make a quick profit
- The sale of `.org` sets a bad precedent for DNS ("_hey guys we got a new cash cow over here!!_")
- It reinforces the centralized walled garden model of app stores where DNS is hidden from end users

## What's next for the web

I'm hardly the first person in the world to bring up the idea that we should think about an alternative to DNS. While DNS is ubiquitous and thus it's the easiest way to build a presence on the web, there should be another way.

We need a technology-only solution to finding web services. Something without middlemen, 3rd parties, or a profit motive is an _absolute must_ for the Internet to stay great. Ideally a public, open registry, with a governing body that can resolve disputes.

Anyone should be able to make a website for free (or extremely cheap) and host it from their home computer. I did that when I was 12, and it was one of the things that made me fall in love with the web.

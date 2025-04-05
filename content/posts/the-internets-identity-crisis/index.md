---
title: The Internet's Identity Crisis
date: 2019-11-30T07:18:40.000Z
draft: false
tags:
  - internet
  - technology
  - dns
  - web infrastructure
  - domain names
  - org tld
  - internet governance
  - digital identity
  - online presence
  - private equity
  - decentralization
  - open web
  - search engines
  - internet society
  - web services
  - internet freedom
  - digital rights
  - dns security
  - nonprofit technology
  - centralization
  - handshake protocol
  - ENS
  - web3
---

The [ISOC](https://en.wikipedia.org/wiki/Internet_Society) recently [sold the `.org` TLD registry to a private equity firm for $1.1b](https://www.keypointsabout.org/blog/advancing-the-internet-societys-mission-into-the-future). What this means, in the grand scheme of things, remains to be seen, but [many](https://savedotorg.org/) [people](https://blogs.harvard.edu/sj/2019/11/23/a-tale-of-icann-and-regulatory-capture-the-dot-org-heist/) [around](https://domainnamewire.com/wp-content/ICA-Letter-to-ICANN-Board-of-Directors-November-15-2019.pdf) [the](https://www.theregister.co.uk/2019/11/20/org_registry_sale_shambles/) [web](https://www.vice.com/en_us/article/59nvjd/private-equity-is-going-to-ruin-the-org-domain-system-and-screw-nonprofits) have expressed disapproval.

![Doge](cover.jpg "Doge contemplating the Internet, and squirrels")

**Update 2020**: In a surprise turn of events, ICANN [rejected the sale](https://www.icann.org/resources/board-material/resolutions-2020-04-30-en) of the .org registry to private equity firm Ethos Capital in April 2020, citing "unacceptable uncertainty" for the 10.5 million .org domain holders. While this particular crisis was averted, the underlying issues about Internet identity and governance remain highly relevant.

## DNS

DNS (which stands for _domain name system_) is the name service for the web. It's a critical, but dated, piece of Internet infrastructure that allows people to type words into an address bar in their browser (or some other Internet service) and like magic you connect to the desired service.

At its core, DNS is just a massive distributed database that converts human-readable domain names (like `example.org`) into IP addresses (like `93.184.216.34`) that computers use to find each other. Think of it as the phone book of the Internet—but one where the listings can be bought, sold, and transferred by various corporate entities.

## The Internet's Identity

DNS is the de facto Internet identity service. Whoever controls the `google.com` domain _is_ Google. If you want to start a company and come up with a name for it, you need to find a name with domains available. URLs on the web include a domain name, and thus the web as it is now only works _because_ of DNS.

This centralized identity model creates single points of failure. When Facebook experienced a [massive outage in October 2021](https://engineering.fb.com/2021/10/04/networking-traffic/outage/), it wasn't just their website that went down—it was their entire digital identity. Employees couldn't even access buildings because their badge systems relied on the same DNS infrastructure.

There are some decentralized alternatives to DNS, but none of them have gained enough traction to bother mentioning.

Actually, that's not entirely true anymore. Several promising alternatives have emerged since 2019:

1. **Handshake Protocol** is a decentralized naming protocol that uses blockchain to create an alternative DNS root zone not controlled by ICANN. Unlike traditional domains, Handshake names are true digital assets that users own rather than rent[^1].

2. **Ethereum Name Service (ENS)** has grown significantly, with over 2.2 million domain registrations. ENS domains like "yourname.eth" can point to websites, cryptocurrency addresses, and other digital resources[^2].

3. **Unstoppable Domains** offers blockchain-based domains with zero renewal fees that can be used for websites and cryptocurrency payments.

The closest thing to a real DNS alternative is probably Google itself (or some other search engine). Search engines are _much_ worse than DNS because it's fairly easy to skew search results and the companies running these search engines tend to prioritize ads over information. Also, you still need to reach `google.com` from your browser to search anyway. And of course all the search results themselves use DNS.

## Am I Mad?

My initial reaction to the news was "HELL YEAH I'm mad". But after thinking about it for a while, I'm less mad than I was.

### Some Reasons Why This Change Isn't so Bad

- DNS is a dated system, and most 'users' don't even know WTF DNS is, especially on mobile, so I can't help but ask "_does it even matter which TLD you use?_"
- DNS security is already weak and has a lot of problems: low deployment of DNSSEC, query tracking, domain hijacking, squatting, misstyped domains, phishing domains, etc, so maybe we shouldn't place so much trust in DNS
- Less trust in DNS means more trust in not using DNS, which hopefully leads to working on DNS alternatives

### Some Reasons Why This Change _IS_ Bad

- Lots of nonprofits use `.org` domains and now they're at risk for getting extorted ("_pay us more if you want to keep your identity!_")
- DNS has, for the most part, been one of the few services on the web that hasn't been ruined by people seeking to make a quick profit
- The sale of `.org` sets a bad precedent for DNS ("_hey guys we got a new cash cow over here!!_")
- It reinforces the centralized walled garden model of app stores where DNS is hidden from end users

The threatened .org sale highlighted a fundamental problem: something as critical as domain names—the primary way we establish identity online—shouldn't be subject to corporate takeovers or profit-maximizing behavior. When ICANN blocked the sale, they acknowledged this reality, stating that the .org domain required "serving the public interest and ensuring the stable and secure operation of the Internet's unique identifier systems."

## What's Next for the Web

I'm hardly the first person in the world to bring up the idea that we should think about an alternative to DNS. While DNS is ubiquitous and thus it's the easiest way to build a presence on the web, there should be another way.

We need a technology-only solution to finding web services. Something without middlemen, 3rd parties, or a profit motive is an _absolute must_ for the Internet to stay great. Ideally a public, open registry, with a governing body that can resolve disputes.

Anyone should be able to make a website for free (or extremely cheap) and host it from their home computer. I did that when I was 12, and it was one of the things that made me fall in love with the web.

Some promising developments since this article was first written:

1. **IPFS** (InterPlanetary File System) continues to gain adoption, allowing content to be addressed by what it contains rather than where it's located. When combined with ENS or Handshake domains, it creates truly decentralized websites.

2. **Browser support** for alternative naming systems is improving. Brave, Opera, and some Chrome extensions now support .eth domains natively, lowering the barrier to adoption.

3. **Distributed hosting** options like Skynet and Arweave make it possible to deploy websites that can't be taken down by any single entity.

The Internet's identity crisis isn't fully resolved, but the outcry around the .org sale demonstrated that people do care about preserving the open nature of the web. The future might not look exactly like DNS as we know it today, but the principles of accessible, user-controlled online identity seem worth preserving as we build what comes next.

[^1]: Handshake whitepaper: <https://handshake.org/files/handshake.txt>
[^2]: ENS Stats: <https://dune.com/makoto/ens>

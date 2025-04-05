---
title: If You Care About Privacy
date: 2019-11-25T07:19:24.000Z
draft: false
tags:
  - privacy
  - advice
  - digital privacy
  - data protection
  - surveillance
  - technology
  - advertising
  - tech companies
  - cloud services
  - consumer rights
  - browsers
  - firefox
  - tracking protection
  - ad blocking
  - social media
  - data collection
  - personal information
  - encryption
  - messaging apps
  - internet security
  - pi hole
  - data breaches
  - GDPR
  - browser fingerprinting
  - VPN
  - privacy tools
---

It's hard to maintain privacy these days, ever since we started carrying around the ultimate Internet connected surveillance device in our pockets. So what can you do about it? Here's a brief guide.

![Doge](cover.jpg "My pup cares about privacy. This photo has nothing to do with this post.")

## Vote with Your Wallet

Thanks to capitalism, the best thing you can do in most cases is express your frustration about loss of privacy by boycotting companies that don't respect your right to privacy.

Additionally, reward companies that _do_ care about your privacy by buying their products.

The market has responded somewhat since this article was first written. Privacy-focused alternatives have gained ground in multiple categories: DuckDuckGo for search, Brave for browsing, ProtonMail for email, and Bitwarden for password management. Supporting these alternatives helps build a more privacy-respecting tech ecosystem.

## If You Aren't Paying for a Product, You _Are_ the Product

I'm very suspicious of the term "free" these days. It's often misused, and it tends to be used in cases where there's a cost but that cost is hidden. A good example of these are "free" social networks like Facebook, Instagram, Twitter, etc. None of these services are free, it's just that you (as a user) are not the customer. You are the product.

The customers for these products, in most cases, are advertisers or anyone interested in collecting vast amounts of data. For example, Foursquare, Yelp, and credit card companies all sell your daily activity data in bulk to financial firms (such as hedge funds) who use your data to estimate revenues. If you have everyone's purchase history, it's pretty easy to guess how much Apple's revenue will change over time.

The extent of this surveillance capitalism has only grown since 2019. A 2022 study found that the average mobile app shares data with six third parties, and some popular apps share with more than 50 different entities[^1]. Your fitness tracking app might be sharing your location with data brokers, while your weather app sells your movement patterns.

In some cases your data is anonymized, but unfortunately anonymized data can always be de-anonymized once you have enough of it, or have a way to correlate anonymized data with personally identifiable information. For example, if you know someone's home address and you notice some purchase patterns (from, say, credit card data) where all items are shipped to that address, it's relatively easy to guess out _who_ the credit card data belongs to.

This isn't theoretical—researchers have repeatedly demonstrated that supposedly "anonymized" datasets can be de-anonymized with shocking accuracy. A landmark 2019 study showed that 99.98% of Americans could be correctly identified in any dataset using just 15 demographic attributes[^2].

A simple suggestion: prefer products you pay for. Companies you're paying are less likely to be violating your privacy in obscure ways (although sometimes they do it anyway, for example ISPs who like to sell your browsing behavior).

## Use Privacy-Focused Products

- Apple has a relatively good record for privacy, so prefer Apple products over [Google](https://en.wikipedia.org/wiki/Privacy_concerns_regarding_Google), [Facebook](https://en.wikipedia.org/wiki/Criticism_of_Facebook#Privacy_issues), or [Microsoft](https://en.wikipedia.org/wiki/Criticism_of_Microsoft#Privacy_issues) products
- Use private messaging apps: Signal (now the gold standard for secure messaging), iMessage, Session, Element (formerly Riot.im), or Threema
- Store your data on your computer, instead of using tools like Dropbox, Google Drive, iCloud, etc. If you need cloud storage, consider Tresorit, Sync.com or Cryptomator (which lets you encrypt files before uploading to any cloud service)
- Use a browser like Firefox which has built-in tracking protection, or Brave which blocks trackers and ads by default
- Use an ad blocker like uBlock Origin to protect yourself from ads, tracking, and other privacy violations
- Try Firefox's [Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) or [temporary containers extension](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/) to prevent websites from tracking you around the web
- Use [Pi-hole](https://pi-hole.net/) with a DNS provider like [Cloudflare](https://www.cloudflare.com/) or NextDNS with a good privacy record, this will make it more difficult for your ISP to spy on you
- Consider a privacy-focused email provider like ProtonMail or Tutanota instead of Gmail or Outlook
- Use a password manager like Bitwarden or KeePassXC rather than reusing passwords or storing them in your browser
- Use a VPN service with a strong no-logs policy if you frequently use public Wi-Fi (though be aware most VPNs don't deliver the privacy they promise, research carefully)
- For mobile devices, explore privacy-enhancing tools like Lockdown (iOS) or TrackerControl (Android)

## Avoid

- Avoid "cloud" products: prefer storing data on your own devices, disable backup and syncing to cloud services—"cloud" is a euphemism for storing your data on someone else's computer where you don't hold the keys
- Avoid ad-based products, such as free games (of which there is a myriad); they are almost always selling your data out the back door
- Avoid companies that have a long history of privacy violations like Facebook/Meta and Google
- Be wary of smart home devices with microphones or cameras—they're essentially surveillance devices you're paying to install in your own home
- Avoid mass media
- Be skeptical of any app requesting excessive permissions—does your flashlight app really need access to your contacts, location, and microphone?
- Think twice before using facial recognition features, especially on services that store your biometric data remotely

## Regulatory Progress

Privacy regulations have evolved significantly in recent years. The EU's General Data Protection Regulation (GDPR) and California's Consumer Privacy Act (CCPA) give consumers more rights over their data. While enforcement remains imperfect, these regulations have forced companies to be more transparent about data collection and provide mechanisms for users to request data deletion.

You can exercise these rights by periodically requesting your data from major services and asking them to delete information they don't need to provide their service.

## Privacy Matters

There's a growing trend toward slowly eroding individual privacy. [Creeping normalities](https://en.wikipedia.org/wiki/Creeping_normality) like the eradication of privacy hurt everyone, except for those in positions of power (who, amusingly, demand strong privacy for themselves).

The stakes have only gotten higher with advances in artificial intelligence and facial recognition. Today's data collection goes beyond targeted ads—it enables predictive models of behavior, influence operations, and even systems of social control. As Edward Snowden put it: "Arguing that you don't care about privacy because you have nothing to hide is like arguing that you don't care about free speech because you have nothing to say."

Stay strong, and don't let FOMO get the best of you.

[^1]: AppCensus. (2022). "Mobile App Privacy Analysis," <https://www.appcensus.io/>
[^2]: Rocher, L., Hendrickx, J., & de Montjoye, Y. (2019). "Estimating the success of re-identifications in incomplete datasets using generative models." Nature Communications, 10, 3069.

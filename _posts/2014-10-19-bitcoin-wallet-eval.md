---
layout: post
title: Bitcoin Wallets Visualized
categories: [blog]
---

I'm getting more acquainted with the Bitcoin ecosystem, and found the [Bitcoin.org wallet info page](https://bitcoin.org/en/choose-your-wallet) to be utterly inpenetrable (hover to read? click on tooltips within hovers for more info? so weird). If you feel the same, no fear! I comprised much of the information into a handy table that deciphers a bit of this information at-a-glance (current as of 10/1/2014):

<img src="{{ site.baseurl }}/img/blog/bitcoin-wallet.png" style="width:1000px">

## Platform support

The first few columns of the table are the platforms supported by each of the wallets. Xapo's FAQ says that [in early 2014](http://help.xapo.com/questions/81994-How-come-there-is-not-a-Xapo-app-for-iOS-iPhone), Apple pulled all Bitcoin wallets down from the App Store, which explains the gap in iOS support.

I'm surprised Blackberry support is even an option.

## Features

For each feature, I copied an example from one of the wallets on Bitcoin.org of how a wallet got the rating it did. This gives a good idea of how Bitcoin.org is evaluating wallets and how much you may want to take their ratings into account.

**Control**: Do you control your own bitcoins?

+ "Good" wallets - "This wallet gives you full control over your bitcoins. This means no third party can freeze or lose your funds. You are however still responsible for securing and backing up your wallet." 
+ "Pass" wallets - "This wallet requires every transaction to be authorized both by you and this third party. Under normal circumstances, you can regain full control over your bitcoins using your initial backup or pre-signed transactions sent by email."
+ "Fail" wallets - "This service has full control over your bitcoins. This means you need to trust this service will not lose your funds in an incident on their side. As of today, most web wallets don't insure their deposits like a bank, and many such services have suffered from security breaches in the past." 

**Decentralization**: Does your wallet represent a full node when making transactions, or does it go through a third party?

+ "Good" wallets - "This wallet is a full node that validates and relays transactions on the Bitcoin network. This means no trust in a third party is required when verifying payments. Full nodes provide the highest level of security and are essential to protecting the network. However, they require more space (over 20GB), bandwidth, and a longer initial synchronization time."
+ "Pass" wallets - "This wallet connects to the Bitcoin network. This means very little trust in third parties is required when verifying payments. However, it is not as secure as a full node like Bitcoin Core."
+ "Fail" wallets - "This wallet relies on a centralized service by default. This means a third party must be trusted to not hide or simulate payments"
+ "Neutral" wallets - "Decentralization features are provided by the software wallet you use with this device. Please see the Decentralization score for the software wallet you plan to use."

Only Bitcoin Core and Armory are fully decentralized. Trezor was listed as Neutral for this and other categories because it depends on user-chosen software wallet for this functionality.

**Transparency**: How open source is the code? Was it written deterministically?

+ Bitcoin Core, the only "good" wallet- "This wallet is open-source and built deterministically. This means any developer in the world can audit the code and make sure the final software isn't hiding any secrets."
+ "Pass" wallets - "The developers of this wallet publish the source code for the client. This means any developer in the world can audit the code. However, you still need to trust developers of this wallet when installing or updating the final software because it was not built deterministically like Bitcoin Core."
+ "Fail" wallets - "This wallet is loaded from a remote location. This means that whenever you use your wallet, you need to trust the developers not to steal or lose your bitcoins in an incident on their site. Using a browser extension or mobile app, if available, can reduce that risk."

Only Bitcoin Core was ranked 'good', because it was the only app built deterministically.

**Environment**: Can the wallet be loaded on computers susceptible to malware? How easy is it to be hacked into?

+ "Good" wallets - "This wallet is loaded from a secure specialized environment provided by the device. This provides very strong protection against computer vulnerabilities and malware since no software can be installed on this environment."
+ "Pass" wallets - "This wallet is loaded on mobiles where apps are usually isolated. This provides a good protection against malware, although mobiles are usually easier to steal or lose. Encrypting your mobile and backing up your wallet can reduce that risk."
+ "Fail" wallets - "This wallet can be loaded on computers which are vulnerable to malware. Securing your computer, using a strong passphrase, moving most of your funds to cold storage or enabling two-factor authentication can make it harder to steal on your bitcoins."

Only Trezor, a hardware app, was ranked 'good' in this category.

**Privacy**: I think the requirements for privacy have recently been changed, because even the passing wallets are listed in green if they have "improved privacy". There are three heuristics upon which Bitcoin.org judges privacy:

1. Prevents spying on your payments (address reuse)

	This wallet makes it harder to spy on your balance and payments by rotating addresses. You should still take care to use a new Bitcoin address each time you request payment.

2. Avoids disclosing information (disclosure)

	This wallet does not disclose information to peers on the network when receiving or sending a payment.

3. Tor can be used (network)

	This wallet lets you setup and use Tor as a proxy to prevent attackers or Internet service providers from associating your payments with your IP address.

## So all wallets suck. Now what?
Obviously there's a lot of work to be done in the Bitcoin wallet space - improved privacy, better decentralization, etc. A lot of this has to do with the interface - Bitcoin.org seems to interpret many implementations of network protection as insufficient, but I'm not sure how possible using Tor is on iOS. I do appreciate the effort on the part of the Bitcoin.org team for detailing this information, because informed users are happy/safe users, and money is important! 


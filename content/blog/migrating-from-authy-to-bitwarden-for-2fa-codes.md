---
categories:
  - security
date:
draft: true
tags:
  - authy
  - bitwarden
  - authentication
title: Migrating From Authy to Bitwarden for 2FA Codes
---

I've used [Authy](https://authy.com/) for several years to handle my time-based
one-time passwords
([TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm))
for two-factor authentication
([2FA](https://en.wikipedia.org/wiki/Multi-factor_authentication)). For various
reasons, I recently migrated to using [Bitwarden](https://bitwarden.com/)
instead.

## Google Authenticator Issues

Many services recommend [Google
Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator) when setting
up 2FA. I originally used it before switching to Authy. But I switched for a
reason that is still valid today: it doesn't have any sort of backup or syncing
functionality.

See the
[reviews](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&showAllReviews=true)
to get a sense of how often people get burned by switching to a new phone for
whatever reason and realizing they've lost all their codes.

It also seems to be a neglected app. The [Android
app](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
was last updated on September 27, 2017, and the [iOS
app](https://apps.apple.com/us/app/google-authenticator/id388497605) was last
updated on September 12, 2018. You could argue that these are relatively simple
apps that don't need frequent updates, but take a look at what
[andOTP](https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp)
offers.

## Authy Issues

However, I have some problems with Authy. It doesn't have a browser extension
for Firefox, my primary browser. The [Chrome
extension](https://chrome.google.com/webstore/detail/authy-chrome-extension/fhgenkpocbhhddlgkjnfghpjanffonno)
also hasn't been updated in two and a half years. This is a problem because an
extension can offer protection against phishing, one of the main security
weaknesses of using TOTP for 2FA.

Authy doesn't have a web client.

I use the Mac desktop app, but when it has a code open, the app uses a
significant amount of CPU.

It's tied to a phone number.

I want to be able to recover my 2FA codes, even if I've lost all my devices,
which implies that I lost access to my phone number.

Authy supports a password for your encrypted backup but not just on the account
itself. It has a concept of a master password, but it seems to be a local
password for unlocking.

Authy doesn't support TOTP codes or U2F security keys for itself.

## Migrating to Bitwarden

I considered storing using my [YubiKeys](https://www.yubico.com/) to generate
TOTP codes using [Yubico
Authenticator](https://www.yubico.com/products/services-software/download/yubico-authenticator/),
but a YubiKey can only store 32 TOTP secrets, and I already have 49.

I decided to use [1Password](https://1password.com/) to store passwords and
Bitwarden for TOTP codes.  1Password can also handle TOTP codes, but I am
willing to deal with the hassle of having two password managers to avoid using
the same service for both passwords and TOTP codes.

To migrate, I went through my Authy list one by one.

Authy doesn't expose the TOTP secret.

Some services, such as Algolia and npm, only show the QR code. There's no option
to display the TOTP secret. There was one case where the QR code was a link, so
the TOTP URL showed on hover. I tried using my phone camera's built-in QR
scanner, but I couldn't see the full URL and opening the link would open Authy,
with no other option. I used Google Lens instead to grab the secret.

Some services don't use the now standard TOTP parameters.
[Twitch](https://www.twitch.tv/) has a specific
integration with Authy.

However, I discovered that it's possible to use the [Authy Chrome
app](https://chrome.google.com/webstore/detail/authy/gaedmjdfmmahhbjefcbgaolhhanlaolb/related)

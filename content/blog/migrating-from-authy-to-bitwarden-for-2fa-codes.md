---
categories:
  - security
date: 2020-03-22
draft: true
tags:
  - authy
  - bitwarden
  - authentication
title: Migrating From Authy to Bitwarden for 2FA Codes
---

I've used [Authy](https://authy.com/) for several years to generate my
time-based one-time passwords
([TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm))
for two-factor authentication
([2FA](https://en.wikipedia.org/wiki/Multi-factor_authentication)). For various
reasons, I recently migrated to using [Bitwarden](https://bitwarden.com/)
instead.

## Google Authenticator Issues

Many services recommend using [Google
Authenticator](https://en.wikipedia.org/wiki/Google_Authenticator) for 2FA. I
originally used it before switching to Authy, but I switched for a reason that
is still valid today: it doesn't have any sort of backup or syncing
functionality.

Check out the
[reviews](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&showAllReviews=true)
to get a sense of how often people get burned by switching to a new phone for
whatever reason and realizing they've lost all their codes or need to go through
each service one by one and set up 2FA again.

Google Authenticator is also a neglected app. The [Android
app](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
was last updated on September 27, 2017, and the [iOS
app](https://apps.apple.com/us/app/google-authenticator/id388497605) was last
updated on September 12, 2018. You could argue that these are relatively simple
apps that don't need frequent updates, but take a look at what other apps like
[andOTP](https://play.google.com/store/apps/details?id=org.shadowice.flocke.andotp)
and [Aegis](https://getaegis.app/) offer in terms of functionality that Google
Authenticator doesn't have, like being able to search for a service instead of
having to scroll though the entire list to find it.

## Authy Issues

While I have happily used Authy for several years, I also have some issues with
it that have caused me to look for a replacement.

### No Extension

Authy doesn't have a browser extension for
[Firefox](https://www.mozilla.org/firefox/), my primary browser. This is a
problem because an extension can offer some protection against phishing, one of
the main [security
weaknesses](https://www.scottbrady91.com/Authentication/Software-Tokens-Wont-Save-You)
of using TOTP for 2FA. If the extension fails to find find an entry that matches
the current domain, that can alert the user to a possible phishing attempt. The
[Chrome
extension](https://chrome.google.com/webstore/detail/authy-chrome-extension/fhgenkpocbhhddlgkjnfghpjanffonno)
also hasn't been updated in two and a half years.

### No Web Client

Authy doesn't have a web client. While this could be considered a security
feature, I'd rather have the option to access my codes through any browser in an
emergency. It's a security vs. usability tradeoff that I'm willing to make.

### Mac CPU Usage

I use the Mac desktop program, but when it has a code open, the program uses
significantly more CPU. Here's the CPU usage when it's just displaying the list
of services.

![Authy desktop CPU usage during list view](https://i.imgur.com/0a7vZMW.png)

And here's the CPU usage when it's showing the TOTP code.

![Authy desktop CPU usage during code view](https://i.imgur.com/5kVBCbB.png)

This means that I have to remember to press the back button explicitly after
copying the code. There's no option to have it do so automatically on copy or to
just copy the code from the list view without even seeing the code.

### Authentication and Recovery

When you create an Authy account, you have to provide a phone number rather than
an email address or username. Authy
[encourages](https://support.authy.com/hc/en-us/articles/360016317013-Enable-or-Disable-Authy-Multi-Device)
you to add the app to your other devices and then disable the multi-device
feature. This means that your codes will keep working on your existing devices,
but to add Authy to a new device, you need access to one of your old ones to
confirm access and also temporarily re-enable multi-device. If you don't have
access, you have to go through a 24 hour [account recovery
process](https://support.authy.com/hc/en-us/articles/115012672088-Restoring-Authy-Access-on-a-New-Lost-or-Inaccessible-Phone#new_app).

Even if you decide to leave multi-device on, you still need access to an old
device just to log in on a new device. However, I want to be able to recover
access to my 2FA codes, even if I've lost access to all my devices.

Note that Authy doesn't support an account level password. It does support a
password for your encrypted backups, but you don't enter that until after you
log in.

Authy also doesn't support TOTP codes or
[U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security keys for
itself. Its sole authentication mechanism (beyond account recovery processes) is
access to an old device.

## Yubico Authenticator

I considered using my [YubiKeys](https://www.yubico.com/) to generate TOTP codes
using [Yubico
Authenticator](https://www.yubico.com/products/services-software/download/yubico-authenticator/),
but a YubiKey [can only store
32](https://www.reddit.com/r/yubikey/comments/ataxt3/only_32_oathtotp_entries/)
TOTP secrets, and I already have 49 of them since I enabled TOTP-based 2FA
whenever possible.

## Bitwarden

I currently use [Lastpass](https://www.lastpass.com/) to manage my passwords,
but I am going to switch to [1Password](https://1password.com/) soon. I decided
to use Bitwarden as well but solely for TOTP codes. 1Password can also handle
TOTP codes, but I am willing to deal with the hassle of having two password
managers to avoid using the same service for both passwords and 2FA.

By using a password manager for TOTP, I get well supported cross-platform
support with a web client, browser extensions, desktop programs, and mobile
apps. I also get standard authentication mechanisms, including 2FA support.

Bitwarden does require a premium account that costs $10 a year in order to
generate TOTP codes.

## Migration

To migrate, I went through my Authy list one by one. In theory, I'd be able to
just copy the TOTP secret to Bitwarden, but Authy doesn't expose the secret and
configuration.

For each account, I logged in and reset 2FA to add it to Bitwarden. Then I
deleted it from Authy. Authy actually marks it for deletion and then waits 48
hours before actually deleting it in case you made a mistake.

![Accounts marked for deletion in Authy](https://i.imgur.com/58A2QCW.png)

I did have trouble with adding some services, such as
[Algolia](https://www.algolia.com/) and [npm](https://www.npmjs.com/), that only
show the QR code and don't have an option to display the TOTP secret. The QR
codes encode URIs that look like this, as
[documented](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)
in the Google Authenticator wiki:

```txt
otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example
```

I tried using my phone camera's built-in QR scanner, but I couldn't see the full
URI and opening it would open Authy, with no other option. I used Google Lens
instead to grab the secret. In retrospect, I was only having trouble because I
was adding the services to Bitwarden through the browser extension. I should
have installed the mobile app from the beginning and used that because it has an
option to scan QR codes.

I also had trouble with adding [Twitch](https://www.twitch.tv/), which has a
specific integration with Authy instead of providing a generic QR code. To get
around this issue, I followed [this
guide](https://medium.com/@dubistkomisch/set-up-2fa-two-factor-authentication-for-twitch-with-google-authenticator-or-other-totp-client-f19af32df68a).
You can use the deprecated [Authy Chrome
app](https://chrome.google.com/webstore/detail/authy/gaedmjdfmmahhbjefcbgaolhhanlaolb/related)
to retrieve the TOTP secrets and configurations. This method entails using
Chrome's developer tools to load [custom
code](https://gist.github.com/gboudreau/94bb0c11a6209c82418d01a59d958c93) to
print the information.

This revealed that Twitch uses 7 digit codes instead of the standard 6 and 10
second intervals instead of the standard 30.

```txt
otpauth://totp/Twitch?secret=XXXXXXXX&digits=7&period=10
```

At this point, I thought I hit a Bitwarden limitation because I mistakenly
assumed that the extension would only take the TOTP secret in the authenticator
key field.

![Bitwarden add login form](https://i.imgur.com/WU3MYY5.png)

However, it turned out that Bitwarden
[supports](https://community.bitwarden.com/t/support-totp-auth-parameters/37)
putting the full URI with configuration into that field. I tested it and was
able to log in to Twitch using the code generated by Bitwarden.

## Recovery Plan

I added my YubiKeys to my Bitwarden account. I will also add them to 1Password.
I plan to store my [1Password secret
key](https://support.1password.com/secret-key/) as a [static
password](https://support.yubico.com/support/solutions/articles/15000006480-understanding-core-static-password-features)
on my YubiKeys. This means that all I need is one of my YubiKeys and the
1Password and Bitwarden master passwords in my head to regain full access to all
of my accounts.

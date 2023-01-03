---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - security
date: "2020-03-25"
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
it that caused me to look for a replacement.

### No Browser Extension

Authy doesn't have a browser extension for
[Firefox](https://www.mozilla.org/firefox/), my primary browser. This is a
problem because an extension can offer some protection against
[phishing](https://en.wikipedia.org/wiki/Phishing), one of the main [security
weaknesses](https://www.scottbrady91.com/Authentication/Software-Tokens-Wont-Save-You)
of using TOTP for 2FA. If the extension fails to find an entry that matches the
current domain, that can alert me to a possible phishing attempt.

The [Chrome
extension](https://chrome.google.com/webstore/detail/authy-chrome-extension/fhgenkpocbhhddlgkjnfghpjanffonno)
also hasn't been updated in two and a half years and will [no longer be
supported](https://authy.com/blog/authy-chrome-app-extension-end-life/) going
forward.

### No Web Client

Authy doesn't have a web client. While this could be considered a security
feature, I'd rather have the option to access my codes through any browser in an
emergency. It's a security vs. usability tradeoff that I'm willing to make.

### No CLI Client

Authy doesn't have a [CLI](https://en.wikipedia.org/wiki/Command-line_interface)
client. I have some ideas for personal browser automation projects that could be
easier to implement with programmatic access to my TOTP codes.

### Mac CPU Usage

I use the Mac desktop program, but when it has a code open, the program uses
significantly more CPU. Here's the CPU usage when it's just displaying the list
of services.

![Authy desktop CPU usage during list view](https://i.imgur.com/0a7vZMW.png)

And here's the CPU usage when it's showing the TOTP code.

![Authy desktop CPU usage during code view](https://i.imgur.com/5kVBCbB.png)

Since I don't want the program to unnecessarily drain my laptop battery, I try
to remember to press the back button after copying the code.  There's no option
to automatically go back on copy or to just copy the code from the list view
without even seeing the code.

### Authentication and Recovery

When you create an Authy account, you have to provide a phone number rather than
an email address or username. I didn't like this to begin with since I want as
few things tied to my phone number as possible, given how often phone numbers
[get hijacked](https://www.wired.com/story/sim-swap-attack-defend-phone/).

Authy then
[encourages](https://support.authy.com/hc/en-us/articles/360016317013-Enable-or-Disable-Authy-Multi-Device)
you to add the app to your other devices and then disable the multi-device
feature. This means that your codes will keep working on your existing devices,
but to add Authy to a new device, you need access to one of your old ones to
temporarily re-enable multi-device and to grant access to the new device. If you
don't have access to an old device, you have to go through a 24 hour [account
recovery
process](https://support.authy.com/hc/en-us/articles/115012672088-Restoring-Authy-Access-on-a-New-Lost-or-Inaccessible-Phone#new_app).

However, I want to be able to regain access to my 2FA codes, even if I've lost
access to all my devices. For example, I could be in a foreign country without
my laptop and then lose my phone. I want to have a good contingency plan for
this kind of situation.

Note that Authy doesn't support an account level password. It does support a
password for your encrypted backups, but you don't enter that until after you
log in.

Authy also doesn't support TOTP codes or
[U2F](https://en.wikipedia.org/wiki/Universal_2nd_Factor) security keys for
protecting itself. Its sole authentication mechanism (beyond account recovery
processes) is access to an old device.

## Yubico Authenticator

I considered using my [YubiKeys](https://www.yubico.com/) to generate TOTP codes
using [Yubico
Authenticator](https://www.yubico.com/products/services-software/download/yubico-authenticator/),
but a YubiKey [can only store
32](https://www.reddit.com/r/yubikey/comments/ataxt3/only_32_oathtotp_entries/)
TOTP secrets, and I already have 49 of them since I enable TOTP-based 2FA
whenever possible.

## Bitwarden

I currently use [LastPass](https://www.lastpass.com/) to manage my passwords,
but I am going to switch to [1Password](https://1password.com/) soon. I decided
to use Bitwarden as well but solely for TOTP codes. 1Password can also [handle
TOTP codes](https://support.1password.com/one-time-passwords/), but I am willing
to deal with the hassle of having two password managers to avoid using the same
service for both passwords and 2FA.

By using a password manager for TOTP, I get broad cross-platform support with a
web client, browser extensions, desktop programs, mobile apps, and even a CLI
client. I also get standard authentication mechanisms, including 2FA support.

This does mean that I am treating my TOTP codes more like secondary passwords
([something I
know](https://en.wikipedia.org/wiki/Multi-factor_authentication#Knowledge_factors))
rather than as [something I
have](https://en.wikipedia.org/wiki/Multi-factor_authentication#Possession_factors).
Authy's requirement to have access to an old device better fits the latter
principle. This is a deliberate choice on my part.

Note that Bitwarden requires a premium account that costs $10 a year in order to
generate TOTP codes. A premium account also adds U2F support, which I wanted as
well.

## Authentication Strategy

U2F support is the last component of my authentication strategy. Going forward,
it will be like this: I'll store passwords in 1Password and TOTP secrets in
Bitwarden. I'll use separate, [high entropy](https://xkcd.com/936/) master
passwords that will only exist in my head.

1Password requires a [secret key](https://support.1password.com/secret-key/) in
conjunction with the master password in order to log in on a new device. Since I
can't memorize it, I plan to store my secret key as a [static
password](https://support.yubico.com/support/solutions/articles/15000006480-understanding-core-static-password-features)
on my YubiKeys. This means that if I touch the metal contact for a few seconds,
it will type out the secret key for me.

For both services, I'll add all my YubiKeys for 2FA. This means that all I need
is one of my YubiKeys (one of which is on my keychain) and the master passwords
in my head to regain full access to all of my accounts.

However, I can't guarantee that I'll be able to use my YubiKey on every device.
For example, Bitwarden [doesn't
support](https://help.bitwarden.com/article/setup-two-step-login-u2f/) U2F in
its mobile apps. I would also be paranoid about feeling like I need two YubiKeys
when I travel in case I lose one.

My plan to deal with these issues is to also set up TOTP-based 2FA for both
1Password and Bitwarden. I'll print those TOTP secrets, along with the 1Password
secret key, on a small card and laminate it. I can make multiple copies to put
in my wallet and my bag. Sometimes being overly prepared is fun in itself, even
though it might be overkill.

## Migration

To migrate to Bitwarden, I went through my Authy list one by one. In theory, I'd
be able to just copy the TOTP secret to Bitwarden, but Authy doesn't expose the
secret.

For each account, I logged in and reset 2FA to add the secret to Bitwarden. Then
I deleted the account from Authy. Authy marks it for deletion and then waits 48
hours before actually deleting it in case you made a mistake.

![Accounts marked for deletion in Authy](https://i.imgur.com/58A2QCW.png)

I did have trouble with adding some services, such as
[Algolia](https://www.algolia.com/) and [npm](https://www.npmjs.com/), that only
show the QR code and don't have an option to display the TOTP secret. The QR
codes encode URIs that look like this, as
[documented](https://github.com/google/google-authenticator/wiki/Key-Uri-Format)
in the Google Authenticator wiki:

```
otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example
```

I tried using my phone camera's built-in QR scanner, but I couldn't see the full
URI and opening it would open Authy, with no other option. I used [Google
Lens](https://lens.google.com/) instead to grab the secret. In retrospect, I was
only having trouble because I was adding the services to Bitwarden through the
browser extension. I should have installed the mobile app from the beginning and
used that because it has an option to scan QR codes.

I also had trouble with adding [Twitch](https://www.twitch.tv/), which has a
specific integration with Authy instead of providing a generic QR code. To get
around the issue, I followed [this
guide](https://medium.com/@dubistkomisch/set-up-2fa-two-factor-authentication-for-twitch-with-google-authenticator-or-other-totp-client-f19af32df68a).
You can use the deprecated [Authy Chrome
app](https://chrome.google.com/webstore/detail/authy/gaedmjdfmmahhbjefcbgaolhhanlaolb/related)
to retrieve the TOTP secrets and configurations. This method entails using
Chrome's developer tools to execute [custom
code](https://gist.github.com/gboudreau/94bb0c11a6209c82418d01a59d958c93) to
print the information.

This revealed that Twitch uses 7 digit codes instead of the standard 6 and 10
second intervals instead of the standard 30.

```
otpauth://totp/Twitch?secret=XXXXXXXX&digits=7&period=10
```

At this point, I thought I hit a Bitwarden limitation because I mistakenly
assumed that the extension would only take the TOTP secret in the authenticator
key field.

![Bitwarden add login form](https://i.imgur.com/WU3MYY5.png)

However, I discovered that Bitwarden
[supports](https://community.bitwarden.com/t/support-totp-auth-parameters/37)
putting the full URI with configuration into that field. I tested it and was
able to log in to Twitch using the code generated by Bitwarden.

## Conclusion

Migrating to Bitwarden took me about a full day, but I'm happy with the result.
I've been using the Bitwarden browser extension to log in to accounts for the
past week, and it is much nicer than using the Authy desktop program. Next up is
migrating from LastPass to 1Password.

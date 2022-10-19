---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - security
date: "2022-01-20"
tags:
  - actalis
title: How to Get a Free S/MIME Certificate
---

I recently needed a [S/MIME](https://en.wikipedia.org/wiki/S/MIME) certificate
to fulfill someone's security requirement. If you're willing to pay,
[Sectigo](https://sectigo.com/ssl-certificates-tls/email-smime-certificate)
seems like a good, affordable option. I didn't actually need to use mine for
email, so I looked for a free option.

I first checked out [Let's Encrypt](https://letsencrypt.org/), but they [don't
issue S/MIME
certificates](https://community.letsencrypt.org/t/s-mime-certificates/153). I
also found [instructions for generating self-signed
certificates](https://www.dalesandro.net/create-self-signed-smime-certificates/),
but I needed mine to come from an external [certificate
authority](https://en.wikipedia.org/wiki/Certificate_authority).

[Actalis](https://www.actalis.com/s-mime-certificates.aspx) was the only free
provider that I could find. You can request a certificate from them using [this
form](https://extrassl.actalis.it/portal/uapub/freemail?lang=en), and the
certificate lasts for one year. Actalis does generate the private key, so that
may be unacceptable depending on your situation.

I had never heard of Actalis before, so I did some due diligence and found them
on the [Adobe Approved Trust
List](https://helpx.adobe.com/acrobat/kb/approved-trust-list1.html) and on
Google's [list of CA certificates](https://support.google.com/a/answer/7448393)
that are trusted by Gmail for S/MIME.

## How It Works

First you submit your email address to get a verification code. You'll get an
email like:

> Dear customer, in order to proceed with the issuance of the certificate you
> have to confirm the validity of the specified e-mail address.
>
> Please enter the following verification code in the "**Verification Code**"
> field:
>
> \<code\>
>
> and than continue with the other steps in the request page.
>
> The certificate will not be issued in the absence of this operation.
>
> Thank you for choosing our services.
>
> Best regards.
>
> Actalis S.p.A.

After you submit the code, Actalis will display a password that you should save.
They'll also send you a second email like:

> Dear Customer,
>
> attached to this email you will find the S/MIME certificate you have
> requested.
>
> Please note that to install and use the certificate, you must provide the
> password that was shown at the end of the procedure.
>
> To manage the certificate status (suspend / reactivate or revoke) you can
> login to the following website:
>
> https://extrassl.actalis.it/portal/
>
> Using the following credentials:
>
> User Code:     \<email address\> (to be included in the Tax Code field)
>
> Private Personal Code (CRP):     \<code\>
>
> Thank you for choosing our services.
>
> Best regards.
>
> Actalis S.p.A.

The email will have an attached ZIP file containing a [PKCS
\#12](https://en.wikipedia.org/wiki/PKCS_12) file with a name like
`PKCS12_Credential_<email address>.pfx`.

You can
[extract](https://tecadmin.net/extract-private-key-and-certificate-files-from-pfx-file/)
the public certificate using [OpenSSL](https://www.openssl.org/). This command
should prompt you for the password that the Actalis website provided.

```sh
openssl pkcs12 -in PKCS12_Credential_<email address>.pfx -nokeys -out certificate.pem
```

`certificate.pem` will contain the [certificate
chain](https://en.wikipedia.org/wiki/Chain_of_trust): your public certificate,
an intermediate certificate, and the Actalis root certificate.

Run this command to extract the private key as `private-key.pem`.

```sh
openssl pkcs12 -in PKCS12_Credential_<email address>.pfx -nocerts -nodes -out private-key.pem
```

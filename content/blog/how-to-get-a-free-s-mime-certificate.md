---
categories:
  - security
date: 2021-12-23
draft: true
tags:
  - actalis
title: How to Get a Free S/MIME Certificate
---

I recently needed to get a [S/MIME](https://en.wikipedia.org/wiki/S/MIME)
certificate. From what I could find,
[Actalis](https://www.actalis.com/s-mime-certificates.aspx) is the only option
for a free one. You can request one using [this
form](https://extrassl.actalis.it/portal/uapub/freemail?lang=en). The
certificate lasts for one year. Actalis does generate the private key, so that
may be unacceptable depending on your situation.

I had never heard of Actalis before, so I did some due diligence and found them
on the [Adobe Approved Trust
List](https://helpx.adobe.com/acrobat/kb/approved-trust-list1.html) and on
Google's [list of CA certificates](https://support.google.com/a/answer/7448393)
that are trusted by Gmail for S/MIME.

## How it Works

You first submit your email address to get a verification code.

After you submit the code, Actalis will email you a ZIP file containing a [PKCS
\#12](Phttps://en.wikipedia.org/wiki/PKCS_12) file with a name like
`PKCS12_Credential_<email address>.pfx`.

You can
[extract](https://tecadmin.net/extract-private-key-and-certificate-files-from-pfx-file/)
the public certificate using [OpenSSL](https://www.openssl.org/):

```sh
openssl pkcs12 -in PKCS12_Credential_<email address>.pfx -nokeys -out certificate.pem
```

`certificate.pem` contains the [certificate
chain](https://en.wikipedia.org/wiki/Root_certificate): your certificate, an
intermediate certificate, and the Actalis root certificate.

```sh
openssl pkcs12 -in PKCS12_Credential_<email address>.pfx -nocerts -nodes -out private-key.pem
```

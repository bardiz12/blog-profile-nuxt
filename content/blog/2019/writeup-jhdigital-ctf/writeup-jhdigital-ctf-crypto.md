---
slug: writeup-jhdigital-ctf-crypto
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [Crypto]
date: 2019-11-10
year: 2019
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Crypto]
description: WRITE-UP JHDigitalCTF 2019 Crypto
excerpt: Cryptography Category Writeup for  Writeup JHDigitalCTF (John Hammond Digital CTF) 2019
tags : ["ctf","jhdctf","cryptography"]
---

## Executive Order
```
70
I found this weird file a bit ago... I've tried to operate with it but I can't seem to get it to work. I've tried the whole range of possibilities!

Download the file below.
file : prompt.txt
```
the file contain hex-decoded string, i think its a flag, but after we try to decode it to ascii, it doenst show a readble string. so in this case we try to check the first hex character and XOR it with *i* while i in range (0,300)
and than we found the first char is decoded to "J" if xored with 239.

```python
a = [0xa5,0xa7,0xab,0xac,0xbb,0xa9,0x94,0x98,0x87,0x8a,0x81,0xb0,0x86,0x81,0xb0,0x8b,0x80,0x9a,0x8d,0x9b,0xb0,0x97,0x80,0x9d,0xb0,0x86,0x9b,0xb0,0x80,0x9a,0x9b,0x92]

for i in a:
    print(chr(i ^ 239),end="")
```

    Flag = JHDCTF{when_in_doubt_xor_it_out}
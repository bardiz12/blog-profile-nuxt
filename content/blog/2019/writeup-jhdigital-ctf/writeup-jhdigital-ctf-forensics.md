---
slug: writeup-jhdigital-ctf-forensics
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [Forensics]
date: 2019-11-10
year: 2019
image: pics/index.png
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Forensics]
description: WRITE-UP JHDigitalCTF 2019 Forensics
excerpt: Forensics Category Writeup for  Writeup JHDigitalCTF (John Hammond Digital CTF) 2019
tags : ["ctf","jhdctf","Forensics"]
---

## A Brisk Stroll
```
80
Have you seen this image before?

Download the file below.
file : a_brisk_strool.jpg
```

command : 
```bash
strings a_brisk_stroll.jpg| grep -i jhd

flag = JHDCTF{amongst_the_noise}
```

<br/>
<br/>
## QUACK
```
90
We found this binary on a USB drive someone left lying around. There was a note attached, that read: “you’re the one.”

Download the file below.
file : inject.bin
```

after i googled, i found DuckToolkit. so first, we need to decode the inject.bin file using <a href="https://github.com/kevthehermit/DuckToolkit" target="_blank">kevthehermit/DuckToolkit</a>

```bash
python3 ducktools.py -d -l us ../inject.bin ../result.txt
```

and then i decode it using merricx/Enigmator :

![foren-b64](./writeup-jhdigital-ctf/pics/forenb64.png)

and the file signature indicates that it's a JPEG image. so we use decode as file in Enigmator tools.
and the result is : 
![duck.jpg](./writeup-jhdigital-ctf/pics/duck.jpg)

    Flag = JHDCTF{ducky_not_just_for_bath_tubs}
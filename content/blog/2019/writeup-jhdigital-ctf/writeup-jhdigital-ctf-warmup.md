---
slug: writeup-jhdigital-ctf-warmup
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [Warmup]
date: 2019-11-10
year: 2019
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Warmup]
description: WRITE-UP JHDigitalCTF 2019 Warmup
excerpt: Warmup Category Writeup for Writeup JHDigitalCTF (John Hammond Digital CTF) 2019
tags : ["ctf","jhdctf"]
---

## Read The Rules
```
5
Please follow the rules for this CTF!

Connect here: https://jhdigital.io/rules.
```
open the url, and view source, you found the flag!

    Flag = JHDCTF{now_go_hack_the_planet}


<br/>

## The Assumption Song
```
10
Check out my cool new song!

Download the file below.
file: the_assumption_song.zip
```

check the file :
```bash
file the_assumption_song.zip
/Users/bard/Downloads/the_assumption_song (1).zip: PNG image data, 940 x 360, 8-bit/color RGBA, non-interlaced
```
rename it to .png and found the flag.
![the_assumption_song.png](./writeup-jhdigital-ctf/pics/the_assumption_song.png)
    
    Flag = JHDCTF{not_everything_is_what_i_seem}

<br/>

## Orchestra
```
25
It is music to my ears!

Download the file below.
file: orchestra
```
simply use strings and grep

```bash
strings orchestra| grep -i jhd           
b\`JHDCTF{there_is_no_orchestra_without_the_strings}


Flag = JHDCTF{there_is_no_orchestra_without_the_strings}
```

<br/>

## Bae
```
25
This Shiba Inu is bae! <3

Download the file below.
file : woof64.jpg
```

use **exiftools** and in comment section you will find a base64 encoded string

```bash
exiftool woof64.jpg                                                                                                                            ✔
ExifTool Version Number         : 11.73
File Name                       : woof64.jpg
Directory                       : .
File Size                       : 32 kB
File Modification Date/Time     : 2019:10:29 01:13:04+07:00
File Access Date/Time           : 2019:11:10 11:30:39+07:00
File Inode Change Date/Time     : 2019:11:09 20:57:43+07:00
File Permissions                : rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Resolution Unit                 : None
X Resolution                    : 1
Y Resolution                    : 1
Profile CMM Type                : Little CMS
Profile Version                 : 4.3.0
Profile Class                   : Display Device Profile
Color Space Data                : RGB
Profile Connection Space        : XYZ
Profile Date Time               : 2013:12:03 03:08:12
Profile File Signature          : acsp
Primary Platform                : Apple Computer Inc.
CMM Flags                       : Not Embedded, Independent
Device Manufacturer             :
Device Model                    :
Device Attributes               : Reflective, Glossy, Positive, Color
Rendering Intent                : Perceptual
Connection Space Illuminant     : 0.9642 1 0.82491
Profile Creator                 : Little CMS
Profile ID                      : 0
Profile Description             : sRGB built-in
Profile Copyright               : No copyright, use freely
Media White Point               : 0.9642 1 0.82491
Chromatic Adaptation            : 1.048 0.02299 -0.05014 0.02971 0.99034 -0.01706 -0.00923 0.01501 0.75226
Red Matrix Column               : 0.43585 0.22238 0.01392
Blue Matrix Column              : 0.14302 0.06059 0.71384
Green Matrix Column             : 0.38533 0.71704 0.09714
Red Tone Reproduction Curve     : (Binary data 32 bytes, use -b option to extract)
Green Tone Reproduction Curve   : (Binary data 32 bytes, use -b option to extract)
Blue Tone Reproduction Curve    : (Binary data 32 bytes, use -b option to extract)
Chromaticity Channels           : 3
Chromaticity Colorant           : Unknown (0)
Chromaticity Channel 1          : 0.64 0.33
Chromaticity Channel 2          : 0.3 0.60001
Chromaticity Channel 3          : 0.14999 0.06
Comment                         : SkhEQ1RGe2Jhc2U2NF9pc19teV9iYWV9
Image Width                     : 537
Image Height                    : 529
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 537x529
Megapixels                      : 0.284

$ echo "SkhEQ1RGe2Jhc2U2NF9pc19teV9iYWV9" | base64 --d
JHDCTF{base64_is_my_bae}
```

    Flag = JHDCTF{base64_is_my_bae}

<br/>

## Web Hunt
```
25
It’s a website scavenger hunt!

Download the file below.
file : nothinginthebox.com.zip
```

first,unzip the file. and go to the extracted directory and using find,cat and grep to find the flag 
```bash
find . -name '*' -exec cat {} \; | grep -i jhdctf
```

    Flag = JHDCTF{grep_can_find_anything_if_you_know_what_to_look_for}


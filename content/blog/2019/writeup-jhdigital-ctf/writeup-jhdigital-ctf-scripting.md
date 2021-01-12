---
slug: writeup-jhdigital-ctf-scripting
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [Scripting]
date: 2019-11-10
year: 2019
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Scripting]
description: WRITE-UP JHDigitalCTF 2019 Scripting
excerpt: Scripting Category Writeup for Writeup JHDigitalCTF (John Hammond Digital CTF) 2019
tags : ["ctf","jhdctf"]
---

## Quick Run
```
75
You gotta go fast!

Download the file below.
File : quick_run.zip
```
inside quick_run.zip there's some QRCode image.
we need to decode it 1 by 1, using this script :

```python
from PIL import Image
from pyzbar.pyzbar import decode

res = []
for i in range(0,34):
    img = Image.open("quick_run/"+str(i)+".png")
    data = decode(img)
    res.append(data[0].data)
    img.close()
    print(chr(int(data[0].data)),end="")
``` 

    Flag = JHDCTF{zbarimg_makes_qrcodes_easy}

<br/>

## Pincode
```75
This service needs a 4 digit pincode to authenticate... can you help me figure it out!??

Connect with:

nc jh2i.com 50031
```

since it's only scripting category, i decided to write a bruteforce script :
```python
from __future__ import print_function
from pwn import *

pin = 0
while pin < 9999:
    print(pin,end="")
    r = remote('jh2i.com', 50031)
    r.recvuntil(":")
    r.send(str("%04d" % (pin)))
    hasil = r.recvline()
    print(hasil)
    
    r.close()
    if("INCORRECT!" not in hasil):
        break
    pin+=1
```

and in iteration 37, we found the flag
```bash
[*] Closed connection to jh2i.com port 50031
35[+] Opening connection to jh2i.com on port 50031: Done
INCORRECT!

[*] Closed connection to jh2i.com port 50031
36[+] Opening connection to jh2i.com on port 50031: Done
INCORRECT!

[*] Closed connection to jh2i.com port 50031
37[+] Opening connection to jh2i.com on port 50031: Done
CORRECT! Here is your flag: JHDCTF{for_i_in_{0000..9999}}

[*] Closed connection to jh2i.com port 50031
```

    Flag = JHDCTF{for_i_in_{0000..9999}}

<br/>

## Loopback

first,we dump the packet data :

    tshark -r loopback.pcap -T fields -e data > raw.txt

and parse with python :
```python
#python solve.py > result.txt
from __future__ import print_function
import binascii
import sys
import string
data = open("raw.txt",'r').read().splitlines()

chars = string.ascii_letters + string.digits + string.punctuation

res = ''
i=0
for a in data:
    dea = a.decode("hex")[8:].strip()
    try:
        if(dea[0] in chars):
            res+=dea[0]
        i+=1
    except IndexError as identifier:
        pass

print(res)
```

after we open result.txt there is string :

```
JJHHDDCCTTFF{{iiccmmpp__iiss__tthhee__pprroottooccooll__ffoorr__mmee}}

FLAG = JHDCTF{icmp_is_the_protocol_for_me}
```

<br/>

## Gammer
```
125
It’s only one letter away!

Connect with:

nc jh2i.com 50012
```

it's a remote server that check if the input is match with the flag chars by chars. so we write this script :
```python
from __future__ import print_function
from pwn import *
import string
flag = "JHDCTF{"
r = remote('jh2i.com', 50012)

chars = string.ascii_letters + string.digits + string.punctuation
print(chars)
is_first = True
while("}" not in flag):
    print("FLAG = ",flag)
    #print("TRY.. ",end="")
    if is_first :
        r.recvuntil(">")
    for char in chars:
        is_first = False
        print(char,end="")
        r.send(flag + char)
        lines = r.recvuntil('>').split("\n")
        #print(lines)
        if("CORRECT" in lines[-3]):
            #print(" OK ",end="")
            flag+=char
            break
        else:
            #print(" FALSE ",end="")
            pass
    print("")

print("FINAL FLAG = ",flag)
```

    Flag = JHDCTF{bruteforce_with_a_hammer}

<br/>

## CALC-UL8R
```
150
Texas Instruments latest new product: you!

Connect with:

nc jh2i.com 50003
```
this is a remote server that ask about simple algebra equation. to solve this we can use *SymPy* but in my laptop there's a problem when it comes to that library, so i googled and found a website called *<a href="https://www.mathpapa.com/">MATHPAPA</a>*

and using python and selenium i write this script :
```python
from __future__ import print_function
from pwn import *
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options  
import urllib

url = "https://www.mathpapa.com/algebra-calculator.html?q="
chrome_options = Options()  
chrome_options.add_argument("--headless")  
driver = webdriver.Chrome(options=chrome_options)
#nc jh2i.com 50003
r = remote('jh2i.com', 50003)
r.recvline()
r.recvline()
r.recvline()
r.recvline()
r.recvline()
r.recvline()
r.recvline()
while True:
    soal = r.recvline()
    print(soal)
    resp = r.recvuntil("= ")
    driver.get(url + urllib.quote(soal.replace("e","x")));
    driver.implicitly_wait(30)
    elements = driver.find_elements_by_css_selector("div#solout3 div.vspacediv fmath mn")
    text = 0
    i=0
    for element in elements:
        if(text==0):
            text = float(element.text)
        else:
            text /= float(element.text)
    if(text.is_integer()):
        text = str(int(text))
    else:
        text = str(float(text))
    r.send(text)
    print("ANSWER",text)
    print(r.recvline())
    

driver.close()   
```
guess what, the flag literaly said that we need to use sympy hahahaha!.
FLAG = JHDCTF{sympy_to_solve_equations}


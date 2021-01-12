---
slug: writeup-jhdigital-ctf-stego
title: Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 Kategori [Steganography]
date: 2019-11-10
year: 2019
author: Bardizba
keywords: [WRITE-UP JHDigitalCTF 2019 Steganography]
description: WRITE-UP JHDigitalCTF 2019 Steganography
excerpt: Steganography Category Writeup for Writeup JHDigitalCTF (John Hammond Digital CTF) 
tags : ["ctf","jhdctf","steganography"]
---

## Stegosaurus
```
70
Scientists are struggling with a new mystery: we thought the dinosaurs were gone, but this one has returned! Hmmm... can you solve this mystery?

Download the file below:
File : mystery.png
```
given Image : 
![mystery.png](./writeup-jhdigital-ctf/pics/mystery.png)

and then we use Stegsolve :
![stegsolved](./writeup-jhdigital-ctf/pics/stegsolve.png)

    Flag = JHDCTF{mystery_stegsolved}


<br/>

## Winter Wonderland
```
80
It’s the holiday season! But hmm… they must be hiding something under all that cheer!

Download the file below.
File let_it_snow.txt
```

File let_it_snow.txt :
```
Oh the weather outside is frightful	  	  	 	 	 
But the fire is so delightful    		 	  		   
And since we've no place to go     	  	    		   	      
Let It Snow! Let It Snow! Let It Snow!   	   	       	    	     
     	   	      	      	   	       	      	     	      	       
It doesn't show signs of stopping      		   	   		     
And I've bought some corn for popping     	   	  	       	   
The lights are turned way down low   	    	    	     	       	      
Let It Snow! Let It Snow! Let It Snow!     		   	 	    
      	       	      	  		   	 	     	 	 
When we finally kiss goodnight      	    	  	     	       	     
How I'll hate going out in the storm! 	    	      	      	 	   
But if you'll really hold me tight  	    	      	       	      	 
All the way home I'll be warm   	   	 	    	     	       
      	     	   	       	   	 
The fire is slowly dying
And, my dear, we're still goodbying
But as long as you love me so
Let It Snow! Let It Snow! Let It Snow!

Oh! It doesn't show signs of stopping
And I've bought some corn for popping
and The lights are turned way down low
Let It Snow! Let It Snow! Let It Snow!

All the way home I'll be warm!
All the way home I'll be warm!

The fire is slowly dying
And, my dear, we're still goodbying
But as long as you love me so
Let It Snow! Let It Snow! Let It Snow!

Let It Snow! Let It Snow! Let It Snow!

```

there's word **snow**, so i decided to use stegsnow tools. and Voila!!
```
# stegsnow let_it_snow.txt 
JHDCTF{snow_can_both_hide_and_show}
```
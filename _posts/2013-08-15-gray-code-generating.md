---
layout: post
title: gray code generating
date: '2013-08-15T20:00:15-04:00'
categories: [blog]
---
i had to write a text file with a 7-bit gray code for work. rather than spending 10 minutes figuring out the gray code by hand, I decided to do spend a half hour hacking something up to do it for me.

## 1. what’s a gray code?

gray codes, aka reflected binary codes, are a sequence of binary numbers that, rather progressing in order, progress by with each value differing by one bit. gray codes are useful for error detection/correction in switching, and can be found in the wild when using karnaugh maps, genetic algorithms, and real-time error detection/correction in hardware.

## 2. the trick to gray codes:

intuitively, gray codes seem easy: duh, just change one bit at a time. constructing a full cycle of gray codes that starts at 0^n and progresses until it loops back to 0^n is more challenging. extending that construction for n>5 is an absurd human task, without knowing the trick:

+ construct the n = 1 list `(0, 1)`
+ flip and append the list `(0, 1, 1, 0)`
+ construct the n = 2 list `(0, 0, 1, 1)`
+ combine the n = 2 list and n = 1 list `(00, 01, 11, 10)`
+ flip and append the list `(00, 01, 11, 10, 10, 11, 01, 00)`
+ construct the n = 3 list `(0, 0, 0, 0, 1, 1, 1, 1)`
+ combine the n = 3 list and n = 2 + 1 list `(000, 001, 011, 010...)`
+ continue until n


this is super easy to do in paper. this is less easy to figure out in code. python makes it stupid easy.

## 3. the code

by no means the most efficient, but quick and dirty and got the job done.

	import sys 

	greylen = int(sys.argv[1])
	var_array = []

	for num in range(greylen):
	  temp_zer = []
	  temp_one = []
	  for ind in range(pow(2,num)):
	    temp_zer.append(0)
	    temp_one.append(1)
	  var_array.append(temp_zer + temp_one)

	for num in range(int(greylen)):
	  cur_arr = var_array[len(var_array)-num-1]
	  while len(cur_arr) 


 

---
layout: post
title: Save One Instruction Per Loop Iteration With this One Crazy Trick!
categories: [blog]
---

spoiler: the trick is to write all loops that count down rather than up whenever possible.

I've been doing a lot of low-power embedded programming this quarter, and have even broken out of vim to use TI's Code Composer Studio[^1]. Every time I compile my code, which inevitably has a `for` loop of some sort, I get an interesting complaint: 

![loop-advice]({{ site.baseurl }}/img/blog/loop.png)

[^1]: don't hate the player hate the firmware - firmware comes with a README for CCS and none for GCC sooo CCS it is.

I usually ignore it, because who can be bothered with compiler advice? Turns out, I can, today. 

## Why count loops down, not up?

Usually, when one is a novice programmer, they are taught `for` loops as a way to iterate over strings or arrays with this type of syntax:

	for (i = 0; i < 100; i++){
	 	/* something cool here */ 
	}   
	

Teaching students to count loops up, not done, is easier because we tend to count up, not down. I think. I personally count down a lot, too, like on New Years, or when using mouthwash, but for whatever reason we teach students to count loops up!

So why is my compiler telling me to count my loops down?

### (scary assembly code alert, feel free to skip)

The reason has to do with the instruction set my embedded microcontroller is using. In MSP430 assembly, and many other MIPS-based instruction sets, executing the kind of conditional branch used in a for loop looks like:

	0000489e <.L2>: 
	    489e:       3c 40 63 00     mov     #99,    r12     ;#0x0063
	    48a2:       1c 91 04 00     cmp     4(r1),  r12     ;
	    48a6:       f1 2f           jc      $-28            ;abs 0x488a
	    48a8:       31 50 06 00     add     #6,     r1      ;      
	    48ac:       30 41           ret       

As the ‘extremely clear’ assembly shows, to check if we need to stay in the for loop or bounce outside of it, we need to execute a `cmp` instruction and a `jc` instruction. If you rewrite your loops to count down, instead of up, the `cmp`-`jc` pair turns into a single `jnz` (jump not zero) or `jane` (jump not equal) instruction. 

Deep knowledge of your instruction set can save a nontrivial number of executed instructions in your embedded program. It’s an obvious conclusion, but most programmers, even in the embedded space, (a) don’t listen to compiler warnings (b) don’t care what instructions their program compiles into (c) don’t know to care. I’m working in an application space where every saved instruction counts, and, sure, a compiler suggestion is nice, but I wonder if there are better ways to enforce domain-specific programming practices.
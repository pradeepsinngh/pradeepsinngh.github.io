---
layout: post
title: processing + mac + chrome
date: '2013-01-11T08:51:00-05:00'
categories: [blog]
---
It doesn’t work. To make a long story short, I spent 7 hours looking for alternatives and determined a perfect storm to keep me from using Chrome full-time had taken place:

+ Processing is built on Java
+ Apple disables the Java 6 plugin for all browsers in Mountain Lion
+ To use Java in the browser in Mountain Lion, one must download the Java 7 plugin
+ Chrome is 32-bit, and thus incompatible with the 64-bit Java 7 plugin
+ Safari and Firefox both have 64-bit versions compatible with Java 7
+ Processing requires a Java plugin to run in a browser

**Conclusion:** If I want to go on certain websites that embed processing applets, I cannot use Chrome full-time as my browser anymore.

Edit: [Apple Blocks Java 7 Plug-in on OS X to Address Widespread Security Threat](http://www.macrumors.com/2013/01/11/apple-blocks-java-7-on-os-x-to-address-widespread-security-threat/), so, I guess just processing.js for me.

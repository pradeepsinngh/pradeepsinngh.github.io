---
layout: post
title: Window Resizer for Alfred - Update for Multiple Displays
categories: [blog]
---

A few years ago, I wrote a window resizer script to work with Alfred. This week, I updated it for dual use with multiple displays and my native Retina display. It now works with Preview and has been tested for backwards compatibility with Snow Leopard, Lion, and Mavericks. I also now include instructions for execution with 

## Multiple Display Support

In my previous post on the subject, I wrote: "If you have multiple monitors, it seems to only resize with regard to whichever display the window is sitting on." This is now resolved! The script now resizes within whichever display the window is sitting on.

It does not dynamically detect your display size, though, so you need to do some investigation to determine the size of your displays. To find out your display resolution, pop open your AppleScript Editor and execute

	tell application "Finder"
		get bounds of window of desktop
	end tell

and the result should display your resolution in `{top corner, left corner, width, height}`. To determine each of your multiple displays, drag the AppleScript Editor into each window to get reports back for each display. 

## Installation

### For Alfred

Again, it only works if you are using Alfred with the Powerpack. Support your developers!



## Usage

### In Alfred
1. Click on the window you would like resize.
2. Invoke Alfred.
3. Type “wr” to call the Window Resizer extension, followed by the option for the window size you wish to render:

	"t" - top half
	"b" - bottom half
	"r" - right half
	"l" - left half
	"f" - full screen

### Command Line
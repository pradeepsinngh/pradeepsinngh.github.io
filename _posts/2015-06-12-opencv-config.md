---
layout: post
title: Useful Cmake Flags to Turn On and Off in Your OpenCV install 
categories: [blog]
---

After spending a lot of quality time with many different versions and specially-configured installations of OpenCV, I have a lot of opinions and words of wisdom to share. If you have some priorities for what you want out of OpenCV, I have some commonly used config lines I swap in and out of my Makefile for you.

(note: these all assume a reasonably-supported Linux or Mac system)

## 1. I don't care about anything and just want the examples to work.


You're going to want the *BUILD_EXAMPLES* flag on.

	cmake -D CMAKE_BUILD_TYPE=RELEASE -D BUILD_EXAMPLES=ON -D CMAKE_INSTALL_PREFIX=/usr/local ..


## 2. I wish my build went a little faster, and just want the examples and apps to work.


You're going to turn off docs, tests, etc, but keep examples on.

	cmake -D CMAKE_BUILD_TYPE=RELEASE -D BUILD_EXAMPLES=ON  -D BUILD_DOCS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_TESTS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local ..


## 3. I want my compile to be fast and my code to be speedy


You're going to turn on ALL the optimization flags, in case your system supports multiple of them, and turn off all the performance/test checks.

	cmake -D WITH_TBB=ON -D WITH_OPENMP=ON -D WITH_IPP=ON -D CMAKE_BUILD_TYPE=RELEASE -D BUILD_EXAMPLES=OFF -D WITH_NVCUVID=ON -D WITH_CUDA=ON -D BUILD_DOCS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_TESTS=OFF -D WITH_CSTRIPES=ON -D WITH_OPENCL=ON CMAKE_INSTALL_PREFIX=/usr/local/ ..

(note: I have some opinions about this - this is a naive 'turn on all the multi-threading!!' solution, because different parts of OpenCV allow for different kinds of performance speedups - some apps can be OpenMP'd with really simple changes, others use TBB or IPP natively, so it is kind of a jumble #opensource. Hence, the turn on everything approach.)


## 4. I want to debug my (MULTITHREADED) code, including library calls.


You're going to compile statically and enable `-g -pg` compile flags.

	cmake [YOUR FAVORITE OPTIMIZATIONS FROM ITEM 3 HERE] -D ENABLE_PROFILING=ON -D CMAKE_BUILD_TYPE=Debug -D BUILD_SHARED_LIBS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local/ ..


## 5. I want to debug my (SINGLETHREADED) code, including library calls.


This is like 3+4, but with all the multithreading flags turned off. 

	cmake -D WITH_TBB=OFF -D WITH_OPENMP=OFF -D WITH_IPP=OFF -D ENABLE_PROFILING=ON -D CMAKE_BUILD_TYPE=Debug -D BUILD_EXAMPLES=OFF -D WITH_NVCUVID=OFF -D WITH_CUDA=OFF -D BUILD_DOCS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_TESTS=OFF -D WITH_CSTRIPES=OFF -D WITH_OPENCL=OFF CMAKE_INSTALL_PREFIX=/usr/local/ ..


## 6. I don't care about anything and don't want to compile the apps or examples.

Turns off all the apps and stuff, compiles normally.

	cmake -D BUILD_EXAMPLES=OFF -D BUILD_opencv_apps=OFF -D BUILD_DOCS=OFF -D BUILD_PERF_TESTS=OFF -D BUILD_TESTS=OFF -D CMAKE_INSTALL_PREFIX=/usr/local/ ..


Enjoy!
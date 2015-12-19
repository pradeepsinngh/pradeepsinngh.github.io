---
layout: post
title: Modern Clueless Hacker's Guide to Compiling MSP430-GCC from Source
categories: [blog]
---

If you search for the GCC toolchain for MSP430, the Sourceforge repository is the first result, and had over 500 downloads this week. The repo also hasn't been updated since March 2013 (~1.5 years since this post's writing), and is thus an extremely outdated way to program for your MSP430 device. The solution is to download its successor, the [RedHat-led toolchain with active support](http://www.ti.com/tool/msp430-gcc-opensource) . I tried downloading the prepackaged installer to install the compiler, but that decision failed miserably (if anyone could tell me why executing the .run file seemed to do absolutely nothing, I'd be thrilled). Instead, I embarked on a tediously undocumented adventure of compiling the msp430-gcc toolchain from RedHat's source code, teaching me a lot about compiling gcc, compiling gcc with targets, and working with brand new Ubuntu VMs. 

Essentially, this is a specially-configured download/build/install of gcc. So [gcc's official instructions](https://gcc.gnu.org/install/) may become your best friend. Should you be seeking some more conversational instructions, read on:

1. Check/install for the required libraries. You're going to run into struggles if you do not already have some packages installed (ask me how I know):
	- libusb-dev
	- g++ 
	- bison
	- flex
	- libx11-dev
	- expect
	- texinfo
	- libncurses5-dev 
	- gcc-4.9 (see step 1.5)
	- (See also: [gcc install prereqs](https://gcc.gnu.org/install/prerequisites.html), which I dutifully ignored, but will save you time)

2. You'll need gcc-4.9 to compile the source because the production msp430-gcc is built on gcc-4.9, while my Ubuntu machine came only with gcc-4.8. Installing and switching my version of gcc took another set of steps:
	- Get Ubuntu to include test toolchains in apt-get so we can install 4.9:

			sudo add-apt-repository ppa:ubuntu-toolchain-r/test

	- Install the new version (gcc-4.9 in our case). I am ommitting g++, but, should you need it, just follow all mentions of gcc-x with g++-x.

			$ sudo apt-get update
			$ sudo apt-get install gcc-4.9

	- Use `update-alternatives` to switch between the different versions. Here I'm installing 4.9 as an alternative with a priority of 60, and re-listing 4.8 with a priority of 40. The link with higher priority becomes the default.

			$ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.9 60
			$ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 40

	- To confirm our steps worked, and switch between versions if needed, we can check update-alternatives.
			sudo update-alternatives --config gcc
			There are 2 choices for the alternative gcc (providing /usr/bin/gcc).

			  Selection    Path              Priority   Status
			------------------------------------------------------------
			* 0            /usr/bin/gcc-4.9   60        auto mode
			  1            /usr/bin/gcc-4.8   40        manual mode
			  2            /usr/bin/gcc-4.9   60        manual mode

			Press enter to keep the current choice[*], or type selection number: 

	- Now check `gcc --version` to confirm you're running the right version of gcc

3. Download and un-tar msp430-gcc-source from [TI](http://software-dl.ti.com/msp430/msp430_public_sw/mcu/msp430/MSPGCC/latest/index_FDS.html) . The tar command you'll need for .tar.bz2 is `tar xvjf`. This should extract into a `source` folder, with a `tools` folder nested inside. For clarity, I re-named this source folder to `msp430-gcc-source`. 

4. Make a new folder inside `msp430-gcc-source`, called something sufficiently confusing like `msp430-gcc-obj` because this is where the object files will be configured/built. This is the folder you are going to compile your msp430-gcc toolchain in. Because of gcc reasons, you cannot configure/compile gcc within the source folder; they say it can work but is not well tested ("we **highly** recommend that GCC be built into a separate directory from the sources which does not reside within the source tree"), and I had no success with it. 

	To recap, your folder structure is

		+ msp430-gcc-source
		|-- msp430-gcc-obj
		|-- tools


	`tools` is where the source files are, and is your source directory. `msp430-gcc-obj` is your object directory, and is where you will configure the compiler to run. `cd` into your object directory and configure the compile with the script in the tools folder and parameters for compiling the msp430-gcc toolchain.

		$ cd msp430-gcc-source
		$ mkdir msp430-gcc-obj
		$ cd msp430-gcc-obj
		$ ../tools/configure --prefix=/usr/local/msp430-elf-gcc --target=msp430-elf --enable-languages=c,c++ --disable-itcl --disable-tk --disable-tcl --disable-libgui --disable-gdbtk

	(I got the configure instructions from [gcc's instructions](https://gcc.gnu.org/install/configure.html) and the configure parameters from [this forum post](http://e2e.ti.com/support/development_tools/compiler/f/343/p/365014/1284624.aspx))


5. Now you can make and install from the msp430-gcc-obj directory

		$ sudo make
		$ sudo make install

	Go make yourself a cup of tea. If all goes well, you should have a working msp430-elf-gcc install in /usr/local/ when you are done. 

6. Add the install path (`export PATH=/usr/local/msp430-elf-gcc/bin:$PATH` if you followed these instructions precisely) to your `.bashrc` file. 


It's over!! 
---
layout: post
title: IEEE Xplore iFrame, Begone! 
categories: [blog]
---

I have been (unfortunately) opening up a lot of IEEE PDFs in new tabs. IEEE Xplore, for some fun reason, likes to give you PDF access to their academic library by serving up your PDF in an *iFrame* of all things. Then, when one tries to do basic PDF activities like search or zoom in, all these actions get relegated to the IEEE banner iFrame and not your actual PDF. This is stupid, so I fixed it by writing a little bookmarket in Javascript, which was kinda new for me. Here it is, feel free to use:

<script src="https://gist.github.com/amritamaz/0714b280999288a8d5f6.js"></script>

The script is a more human-readable version of the bookmarklet, which essentially parses the source for the pdf line and extracts the PDF. This works for how UW's academic library serves up IEEE Xplore PDFs, your mileage may vary as always.

To install the bookmarklet, make a new bookmarklet and copy the script line as the URL. 
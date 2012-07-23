--- 
tags: 
title: First Party Apps
layout: post
---

# First Party Apps

In the spirit of data portability, I spent a couple weeks developing and exploring the idea of a "first party app" -- an app that makes it easier for users to directly manipulating data from an API without going through third-party servers. 

For example, if you are a Facebook user, you are Facebook's first party. You may want the ability to manipulate, understand, and use your Facebook data in ways that satisfy your needs, and you deserve to do so without others snooping on you. A first party app would allow you to utilize the API of the platform without data going to a third party.

So far I've made one app that evaluates the feasibility and usefulness of first party apps as a tool to help users access and use their data. As shown below, I've written a first party Facebook app that runs entirely in the browser and helps you see how active your friends are on Facebook. In this app, data is directly downloaded into your browser from Facebook, so none of your data will go through my server.

Here is [Unfriendio](http://scratch.mbwong.com/unfriendio.html) - your Facebook unfriend finder. 

## Thoughts and progress so far

Coding purely in Javascript is a new experience for me. There were quite a few surprises along the way. Nonetheless, I was able to code up basic versions of the apps that I envisioned.

As I expected, the Facebook API has caused some trouble due to their limits on how much data can be looked up. For example, an external party is allowed to read only 600 friends' Facebook walls every 10 minutes. Furthermore, it appears that the Facebook API is frequently in flux, making it difficult to keep up with latest changes.

One problem with client-side computing that arose is the browser limit on concurrent cross-domain connections, which caused the data to be downloaded much slower than a native app. Switching to Facebook's batch API, which handles up to 50 queries per request, helped alleviate this problem.

An even more troublesome barrier to having first-party applications work in the browser is the same origin policy. The same origin policy prevents a document or script loaded from one origin from getting or setting properties of a document from another origin. In particular, this policy makes it impossible for me to provide a first party script that downloads files, e.g. images, from another domain, unless the site gives permission for you to do so. This policy has caused endless headaches when trying to manipulate Facebook photos within the browser. It may have been meant to offer better security, but it appears to also be helping data giants keep data within their walls. (I still have not yet found a satisfactory solution to this problem.)

Despite the above bottlenecks, I believe that first party apps have potential to increase data accessibility without sacrificing privacy in the future. The reasons are twofold. First, the infrastructure for client-side computation is improving. Browsers increasingly support expressive interaction with local systems, which allow for better handling of large datasets. Visualization libraries in Javascript are improving rapidly. Second, the same origin policy seems to be leakier for some datatypes. While we may not easily manipulate cross-domain image data in the foreseeable future, the manipuation of other types of data -- in particular text-based data -- seem to be working well.



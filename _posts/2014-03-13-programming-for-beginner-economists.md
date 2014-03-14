--- 
tags: school
title: Programming for beginner economists
layout: post
---

# Programming for beginner economists

I studied some computer science as an undergraduate and coding experience gave me quite a bit of leg up when I started to do social science research. As my teachers Jesse and Matt write:  

> What does it mean to do empirical social science? ... For many of us, most of the time, what it means is writing and debugging code. We write code to clean data, to transform data, to scrape data, and to merge data. We write code to execute statistical analyses, to simulate models, to format results, to produce plots. We stare at, puzzle over, ﬁght with, and curse at code that isn’t working the way we expect it to. We dig through old code trying to ﬁgure out what we were thinking when we wrote it, or why we’re getting a different result from the one we got the week before."

For many undergraduate or first year graduate economics students, however, a pressing question is: Well, how do I get started as a programmer? This blog post will hopefully help you out. 

## Where to start? 

Well, it depends the kind of research you'd like to do. 

As an empirical researcher, most likely the first thing you want to do is explore data, like print summary statistics and run regressions. For this, you probably want to use Stata or R. 

Stata is quite easy to use out of the box. You fire it up and type in the right commands for what you want to do interactively. It also has handy tools for browsing the dataset. It's designed very much with the social scientist in mind, which means that most of the things you learn econometrics map directly to some command in Stata. 

R has similar functionality. What's different is that R is more flexible language. It also has a ton of open source packages for almost any kind of statistics you might want to do. It is more often the go-to choice for statisticians who want fancier tools to do forecasting. 

If you want to estimate a structural model or simulate data, you might want to learn Matlab as well. Matlab stands for matrix laboratory and as its name implies, it is extremely good at matrix operations and offers a level of customization that is generally difficult to achieve in R or Stata. For example, if you derived some formula in an econometric class and want to implement it, you can easily do that in Matlab. 

Finally, if you want to do something more general, like scrape the web or parse text or build a website, then at some point you should learn a general purpose language like Python. In fact, I think everyone benefits from learning a general purpose language. 

## How to start? 

Learning a new language basically consists of learning syntax and then practicing it. First, you need to download the software. Second, you need a good reference for syntax -- one that shows you the building blocks. Both these steps are super easy. 

Peppered around the web are tutorials for any of the above languages. You might check those out and trying the language interactively as you go. I'd also search for cheat sheets online to get a sense of what commands people find useful. For example, [here][cheatsheet] is one for Stata. Here's a tutorial for [Python][python]. The Matlab website has some great resources. 

[python]: http://code.tutsplus.com/articles/the-best-way-to-learn-python--net-26288
[stata]: http://lgdata.s3-website-us-east-1.amazonaws.com/docs/2128/370795/Stata_Cheat_Sheet.pdf 

After you've become familiar with the syntax, I recommend working on a small project you think you can get done quite quickly. For example, load a dataset and make a graph, or output some regression results into a pdf via latex. Use Google a lot. 

## Leveling up

###Level 0: (Layperson.) Not coding. 

Many people are stuck at this stage. They don't know what you're missing out on! 

###Level 1: (Beginner.) Frustration. 

OK great. You've started writing code. Maybe it's exciting. Or more likely it's a totally frustrating experience because you can't quite get the computer to do what you want it to. Hang in there! Like most things, it gets easy with practice. 

###Level 2: (Typical researcher.) It works, but... 

Now you've spent over a month writing code that works. You are starting to be comfortable with writing code. Your projects begin to scale from a few lines to a few hundred lines. Fantastic. 

But what if you came back to the code you wrote three days later. Would you be able to read and use it? Would someone else be able to read it too? Not really. 

Unfortunately it seems to me that many researchers are actually stuck in this level of the coding skill. Their code works but is hard to work with and hard to understand. This leaves the doors more open to errors. It also makes research much harder to replicate. 

How to get past this point? Matt and Jesse have some great tips here. But knowing best practices isn't enough. More than anything, it requires vigilance. Here's what a level 3 coder is like. 

###Level 3: (Programmer.) Writing readable and well organized code. 

You've read a lot of different people's code. And just by reading code, you begin to develop a taste for what good code looks like. You're spending some time rewriting code to make it better. You're never satisfied with code that "just works". You think of code as a piece of writing that you or someone else might come along to read. You make it pretty. Coding is not a chore. It is an art. 

###Level 4: (Hacker.) Knowing what actually happens when you run code. Writing beautiful code. 

Attitude alone won't make you a hacker. To be a hacker, you have to know a lot about what actually happens when you type things into the computer. You know about different programming languages. You know a low-level language well, like C or Fortran that you can optimize for speed. You also know a functional language like Haskell, you've contributed to the new data language Julia, and you love Prolog. You also know something about algorithms, compilers, and operating systems. 

Now most economists never achieve this level of programming. I'm still at level 3 and probably will never go to level 4. But I find the kind of stuff that my friends in level 4 can do to be really cool. There are probably levels beyond this, but I can only see so far from where I am. 

Hope this helps. Happy coding! 

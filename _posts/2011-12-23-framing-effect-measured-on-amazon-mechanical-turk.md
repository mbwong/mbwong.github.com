--- 
tags: 
title: Framing effect measured on Amazon Mechanical Turk
layout: post
---
# Framing effect measured on Amazon Mechanical Turk

After I wrote my [term paper](http://mbwong.com/post/14551602641/using-amazon-
mechanical-turk-for-behavior-experiments) on conducting behavior experiments
on Amazon Mechnical Turk (posted here), I attempted to replicate [the classic
framing study by Tversky and Kahneman
(1981)](http://en.wikipedia.org/wiki/Framing_effect_(psychology)).

I created two one-question survey using the MTurk template, each containing a
versions of the same question:

The question framed as “save”:

> Outbreak of an unusual Asian disease, expected to kill 600 people.

>

>   * Program A: 200 people will be saved.

>   * Program B: There is a 1/3 probability that 600 people will be saved, and
a 2/3 probability that nobody will be saved.

>

> Which do you choose?

The question framed as “die”:

> Outbreak of an unusual Asian disease, expected to kill 600 people.

>

>   * Program A: 400 people will die.

>   * Program B: There is a 1/3 probability that nobody will die, and a 2/3
probability that 600 people will be die.

>

> Which do you choose?

I purposefully did not enforce separation of the test and control subjects, in
order to gauge the potential for overlap.

Below is a snap shot of the entire survey.

![](http://media.tumblr.com/tumblr_lwjd39nBVB1r3oiuq.png)

The results were consistent with the findings of previous studies. When the
response is framed as “saving lives,” subjects were much more likely to choose
deterministic Program A. When the response is framed as “people dying,”
subjects were much more likely to choose the probabilistic Program B.

I filtered response that were below a threshold 15 second response time in
attempt to remove possible biases arising from responses from bots or
inattentive subjects. I found our results consistent with those from previous
studies, even without filtering identifiably bad response.

The responses are tabulated as follows [TK denotes results by Tversky/Kahneman
and Horton denotes [their 2010 results on
mTurk](http://www.nber.org/papers/w15961)]:

![](http://media.tumblr.com/tumblr_lwjcwoWqnW1r3oiuq.png)

Of the 77 workers surveyed, I found two workers that participated in both
surveys, and their responses were exempted. Furthermore, filtering quick
responses do not appear to change the results significantly.

The whole process took less than a day. By paying workers 4 cents, I got
meaningful survey responses within hours.

Got some behavioral question you want answered and you want to recruit
subjects? Try mTurk!


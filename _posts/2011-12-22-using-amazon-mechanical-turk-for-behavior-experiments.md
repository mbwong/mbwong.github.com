--- 
tags: 
title: Using Amazon Mechanical Turk for behavior experiments
layout: post
---
This past semester, I took a [fantastic
course](http://www.seas.harvard.edu/courses/cs186/) with [David Parkes
](http://www.eecs.harvard.edu/~parkes/)at Harvard that covered a wide range of
topics including electronic commerce, social networks, collective intelligence
and networked systems. As the final project, I read a bunch of papers about
behavior experiments on [Amazon Mechanical Turk](http://mturk.com) to
understand the issues that arise with online behavioral experimentation. Here
is the final term paper that I submitted.

Amazon Mechanical Turk (MTurk) is a market place where requesters post tasks
and workers choose tasks to complete for pay. Currently, requesters consist
mostly of companies automating portions of business either directly or through
an intermediary [3]. For example, search companies use MTurk to verify search
results and online stores use it to identify similar products from different
sellers. Amazon boasts 100,000 workers that are registered.

MTurk has been interesting to researchers for a number of reasons: First, it
provides a suitable compliment to computer algorithms for tasks such as
natural language processing and image recognition that are often better
performed by humans. Since its inception in 2005, MTurk has been a source of
human computation as well as a data source to train machine-learning
algorithms. Second, MTurk provides a readily pool of subjects for researchers
studying human behavior. Through MTurk, researchers have elicited human
responses for research ranging from fundamental behavior economics to
optimization of data visualization. Many studies so far have been replications
of previous results to validate the legitimacy of online labor markets as a
suitable laboratory for human behavior.

It is to this latter trend that I turn my attention. In this paper, I will
survey how researchers are using MTurk to study human behavior, discuss the
pros and cons of MTurk as a laboratory, and aggregate some experiment design
wisdom for future studies. I also describe my own replication of a well-known
behavioral result. I intend the following discussion as a brief exposition of
issues that researchers considering using MTurk.

**A survey of behavioral experiments performed on MTurk**

Of the experiments on MTurk I surveyed, there have been three broad classes of
experiments. It is useful to draw this distinction because the design
considerations are slightly different for each. The types of experiments are
as follows: 1) straightforward response elicitation, 2) random assignment with
test and control, and 3) simultaneous games between workers.

Various studies used MTurk to aggregate evaluative information by simply
eliciting ratings or answers in a survey format. For example, Kittur et al.
uses MTurk for collecting quality ratings for various Wikipedia articles, by
displaying the text and asking workers to provide ratings. Heer et al.
instructs workers to make quick visual judgments about the data represented by
various charts to measure which visualizations are more informative. With
appropriate experimental design, both groups were able to produce meaningful
results.

Other studies replicate behavior effects, such as other-regarding preferences
or the framing effect through using randomly assigning subjects to test and
control groups and eliciting responses. For example, Paolacci et al., 10 and
Horton et al. 10 were both able to replicate notable results by Tversky and
Kahneman such as the Asian disease problem, which demonstrates the subject
judgment differed when the choices given to the subjects were framed with
different emphasis.

Finally, MTurk also allows for a class of experiments that require
participants to collaborate and interact. Mao et al. (2011) used distributed
human computation to solve the graph-coloring problem. In particular, they
note that providing algorithmic instructions allowed the Turkers to
collaboratively solve the problem much quicker. Similarly, Rand et al. (2011)
devise an incentivized simultaneous economic game on mTurk to observe the
characteristics that lead to large-scale cooperation, where subjects’
cooperative actions are equally beneﬁcial to all those with whom they
interact. Their results have been offered as preliminary validation of
evolutionary game theoretic models.

**Why experiment on MTurk?**

These studies have validated MTurk as a suitable environment for human
behavior study. But: why the interest? It turns out that the benefits of
leveraging an online labor market are many. Researchers almost uniformly
extolled the virtues of conducting experiments on MTurk as a much nicer and
easier form of research. The following are the main advantage:

_1. Low cost and supportive infrastructure_

The emergence of online labor markets such as MTurk means that experimenters
no longer need to recruit subjects themselves. There's also no need to provide
physical accommodation for subjects, since the experiment can occur entirely
online. The payment system is electronically set up by Amazon and is easy to
use. Furthermore, the rates paid to participants are still generally lower.
Therefore, conducting experiments becomes significantly cheaper.

_2. Faster experiment cycle_

Many papers report an extraordinarily short amount of time (usually within 48
hours) to amass sufficient responses for statistical significance. This allows
experimenters to devote more time to understand the results and conducting
further experiments.

_3. Subject pool diversity_

Online market places, and in particular MTurk, have amassed a diverse
population of workers. Workers vary in age, ethnicity, socioeconomic status,
education, language, and country of origin. This diversity of subject pool can
facilitate cross-cultural studies and broadens the validity of studies beyond
the undergraduate population. Further information about demographics can be
found in Horton et al. 10.

_4. Potential for better control of information flow_

Both Horton et al. 10 and Paolacci et al., 10 postulate that because online
subjects need not interact with experimenters and may not even know that they
are subjected to an experiment, they are less prone to exhibiting experimenter
effects. This means that subjects are less likely to attempt to produce the
effect that experimenters expect. They are also less likely to exhibit the
"John Henry" effect, in which subjects exert a great effort because they treat
the experiment game like a competitive game. Instead the subjects are likely
to normally be participating in a labor market, and hence decisions observed
on MTurk are more likely to be purely economic decisions.

Further advantages noted by Paolacci et al. include: 1) Subjects on MTurk are
anonymous, which reduces the possibility of invading the subject’s privacy. 2)
Subjects are identified by their worker ID, allowing for better screening and
longitudinal studies.

**Problems arising on MTurk and their remedies**

However, despite MTurk's many advantages, MTurk also introduces a number of
problematic issues that are not commonly associated with traditional
behavioral studies. These issues must be addressed in order to minimize bias
in the data sample collected on MTurk.

_1. Lack of attentiveness / Need for quality control_

One major drawback of MTurk experiments is that unsupervised subjects tend to
be less attentive than subjects in a laboratory setting [7]. Furthermore, it
has been noted that when elicit unverifiable responses, MTurk workers may
“game” the system and provide junk answers in order to decrease their time
spent and thereby increase their rate of pay [4]. The result of this behavior
is that the quality of data collected may be significantly worse than in a
laboratory setting, where workers are more willing to provide meaningful
responses.

Mason et al. list a number of remedies. For example, experimenters can include
an “initial phase” that requires the same effort as the other questions in the
survey but has a verifiable answer that can be used to vet the submitted work.
Kittur et al. were able to solicit much better responses after testing the
understanding of subjects about the task at hand. By including additional test
question, the reported portion of valid responses increased from 51.4% to
97.5%. Experimenters can also filter bad responses by looking at the patterns
of response. Kittur et al. found that response time increased as the results
improved. Zhu et al. measured the entropy of responses and found that low-
quality tasks also tended to exhibit low entropy. These characteristics can be
used to check the validity of the results.

Hence, even though Turkers are more prone to low-quality work, this problem
can be successfully countered by appropriate experimental design that makes
sure workers put in the necessary amount of effort to produce actually
meaningful results.

_2. Attrition bias / Self-selection of participation_

Unlike traditional behavioral studies, it is also much easier for Turkers to
quit an experiment. Subjects may drop out of the experiment at varying rates
that may lead to a selection bias. This is particularly problematic on MTurk
because Turkers are allowed to view the experiment before beginning, possibly
leading to self-selection of participation. It is therefore necessary for
researchers using MTurk to demonstrate either that 1) attrition is consistent
with a random process or 2) attrition is minimal [2].

Minimizing attrition can be achieved by providing strong incentives for
workers to continue participating. Experimenters may employ an “initial phase”
that hooks participants into the experiment, as I described in the previous
section. For example, subjects may be required to answer some verifiable
questions about the content of the experiment, thereby increasing the
confidence that the subject will complete the treatment.

_3. Uncertain identity and uniqueness of subjects_

Another concern about MTurk is that the identities of subjects may not be
unique. In particular, the same worker may have multiple user accounts, which
makes multiple plays of the experiment may be possible, yielding a systematic
bias. Yet, while this behavior is certainly possible in online labor market
settings, its probability is lessened by the two facts: 1) Online labor
markets require unique identity through email verification and terms of
service and 2) they typically employ a reputation system that makes dishonest
play costly. This incentivizes workers to keep a unique account.

The uncertainty about the identity of the subjects also raises questions about
representativeness of study results. While we understand the demographics of
the market as a whole, the lack of demographic information specific to the
study raises the question of whether the data collected from the subjects is
representative at all [4].

Indeed, by tracking IP addresses, researchers can empirically show that there
are very low numbers of people with multiple accounts in their particular
study [2]. Ideally, future research would do the same as a safeguard.

_4. Communication between subjects_

Experiment results can also be rendered useless if subjects communicated with
each other. In MTurk, workers do not have profiles, but on MTurk discussion
boards, workers can and do highlight tasks that they found particularly
interesting. On occasion, they may discuss the details of the tasks [2].
Therefore, it is necessary for experimentalists to monitor these boards to
look for any mentions of the experiment, in order to ensure the controlled
nature of the experiment. It is best that experiments occur quickly and be
kept unremarkable.

**Conclusion**

Increasingly, MTurk has become as a platform for human behavioral research.
Given its many advantages discussed above, particularly the possibility for
quick and inexpensive user treatments, MTurk and other online labor markets
are likely to become ever more attractive options for a wide range of research
about human behavior. In this paper, I discussed a number of issues specific
to online behavioral research and how they have been addressed. When designing
MTurk experiments, researchers must guard against low-quality responses,
attrition, and communication between subjects. This can be accomplished either
through an “initial phase” verification that incentivizes the subject to input
meaningful responses, or through various sanity checks described above that
help eliminate biases that can arise. Combined with clever experiment designs,
online labor markets can enable breakthrough discoveries about human behavior
and allow social science to become even closer to a bench science.

** **

**References**

  1. Heer, J and Bostock, M. “Crowdsourcing Graphical Perception: Using Mechanical Turk to Access Visualization Design.” 2010, CHI '10, ACM Press (2010).
  2. Horton, J.J., Rand, D. G., and Zeckhauser, R.J. “The Online Laboratory,” 2010, Experimental Economics.
  3. Ipeirotis, P. G, , Paolacci , and G., Chandler J“Running experiments on Amazon Mechanical Turk.” Judgement and Decision Making, 5, 411-419. 
  4. Kittur, A., Chi, E. H., and Suh, B, “Crowdsourcing user studies with Mechanical Turk,” 2008, Proceeding of the Twenty-sixth annual SIGCHI Confernece on Human Factors in Computing Systems.
  5. Mao, A., Parkes, D. C., Procaccia, A. D., and Zhang, H. “Human computation and multiagent systems: An algorithmic perspective.” 2011. Proceedings of the Twenty-fifth AAAI Conference on Artificial Intelligence.
  6. Mason, W. and S. Suri, “Conducting behavioral research on Amazon’s Mechanical Turk,” 2010, Behavior Research Methods, Springer
  7. Oppenheimer, D. M., Meyvis, T., & Davidenko, N. (2009). Instructional manipulation checks: Detecting satisﬁcing to increase statistical power. Journal of Experimental Social Psychology, 45, 867–872.
  8. Rand DG*, Arbesman S*, Christakis NA. (2011) Dynamic networks promote cooperation in experiments with humans. PNAS. DOI:10.1073/pnas.1108243108
  9. Tversky, A and D. Kahneman, “The Framing of Decisions and the Psychology of Chocie,” Science, 1981, 211(4481), 453
  10. Zhu, D. and Carterette, B, “An analysis of assessor behavior in crowdsourced preference judgments”, 2010, Proceedings of the ACM SIGIR 2010 Workshop on Crowdsourcing for Search Evaluation (CSE 2010). 


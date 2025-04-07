---
title: Leetcoding Interviews
date: 2022-08-16T05:45:50.000Z
draft: false
tags:
  - tech jobs
  - interviewing
  - programming
  - hiring practices
  - algorithm questions
  - software engineering
  - career development
  - tech industry
  - job hunting
  - technical assessment
  - whiteboard interviews
  - interview bias
  - recruiting
  - software development
  - workplace culture
---

I still remember a time when leetcoding interviews were less common, and then
all of a sudden, they became the norm. Even for jobs that have nothing to do
with leetcoding, it seems that most "tech" companies have galvanized around the
idea that before you can hire anyone they must first prove that they can
adequately impress someone with their skills at coding during an interview.

The problem with the whole leetcoding interview phenomenon is that its goal is
orthogonal to its outcome. The _goal_ of these interviews is to assess whether a
candidate can, in fact, write useful software in a useful setting. It's a way of
filtering out people who either have no idea how to code, or just suck at it.

The _outcome_ of these interviews is that they've turned into an arbitrary,
non-standard, pseudoscientific exercise that likely has more to do with how the
interviewee makes the interviewer _feel_ rather than any objective assessment of
one's abilities.

Don't get me wrong, I have been guilty of enjoying being on the side of the
table where you get to feel powerful because you're asking "hard questions"
about how to optimize contrived problems that you'll rarely encounter in real
life. It's a power trip, that's for sure.

I guess the question is: what is the alternative? Some companies do "take home"
tests instead of 1 hour interviews, some companies use code presentations or
walk-throughs. I'm not sure these are any better, and I'm not really sure they
properly assess anything either.

Part of the problem, I think, is that interviews are generally about ego and
power asymmetry. The person interviewing is usually in the low power position,
and the interviewer is in the high power position. The interviewer expects the
interviewee to acknowledge their imagined authority in some way, either with
flattery or feigned admiration. If the interviewer breaks this contract (i.e.,
doesn't express their admiration) the interviewer will of course feel like the
candidate "doesn't have what it takes".

There are a lot of people on HN who talk about this, and I generally agree with
the comments that leetcoding is a pointless exercise that tells you nothing
about how good of an employee someone will be. But, simultaneously, I can't
think of a better alternative to make sure the person you're hiring is in fact
capable of making software.

A few companies have tried to make leetcoding a bit more objective, by doing
standardized tests with calibrated results, and perhaps these are better, but in
spite of all that the final decision almost always comes down to how you can
make the interviewer feel at the end of the day.

## The Disconnect Between Leetcode and Real Work

Let's consider a typical leetcode question: "Given an array of integers, find the maximum sum of a non-empty subarray." Now compare that to what most developers actually do day-to-day:

- Integrate with poorly documented APIs
- Debug race conditions in production systems
- Refactor legacy code while maintaining backward compatibility
- Communicate technical concepts to non-technical stakeholders
- Make architectural decisions that balance competing priorities

The mismatch is striking. I've worked with brilliant engineers who struggle with algorithm puzzles but excel at building robust, maintainable systems. I've also worked with developers who can solve any leetcode problem but create unmaintainable messes that their colleagues inherit.

## How We Got Here

The leetcode interview didn't emerge from nowhere. It began at companies like Google and Microsoft that were flooded with applicants and needed a scalable filtering mechanism. These companies dealt with genuinely complex algorithmic challenges, making algorithmic thinking a reasonable proxy for job performance.

The problem arose when every company—regardless of whether they were building search engines or CRUD apps—adopted this model without questioning whether it served their specific needs.

## The Hidden Costs

This interview style comes with significant hidden costs:

1. **False negatives**: We reject qualified candidates who simply don't excel at puzzle-solving under pressure.

2. **Homogenization**: We end up with teams full of people who think alike and have similar backgrounds, reducing diversity of thought.

3. **Preparation overhead**: Candidates spend hundreds of hours memorizing algorithms they'll rarely use, rather than developing skills relevant to the job.

4. **Perpetuation of privilege**: Those with the time and resources to practice leetcode problems (often young candidates without family responsibilities or those from privileged backgrounds) gain an advantage.

5. **Signaling over substance**: Companies adopt these practices not because they work, but because they signal that the company has high standards—regardless of whether those standards are relevant.

## Alternative Approaches

While I don't have a perfect solution, several promising alternatives exist:

### 1. Work Sample Tests

Ask candidates to complete a task similar to their actual job duties. For a frontend role, this might involve building a small component with specific requirements. For a backend role, perhaps designing an API endpoint with appropriate error handling.

The key is making these tests representative of the actual work while being respectful of candidates' time (under 4 hours).

### 2. Code Review Exercises

Instead of asking candidates to write perfect code under pressure, give them existing code with issues and ask them to review it. This tests their ability to read code (which developers do far more than writing it) and their understanding of best practices.

### 3. Pair Programming

Work with candidates on a realistic problem, allowing collaboration and discussion. This reveals how they think, how they handle feedback, and how they collaborate—often more important than raw coding ability.

### 4. System Design with Constraints

Rather than focusing exclusively on algorithms, present candidates with real-world constraints and tradeoffs. "Design a system that handles X requests per second with Y latency requirement and Z budget." This evaluates their ability to balance competing priorities.

### 5. Past Work Discussions

For experienced candidates, deep discussions about past projects can reveal more than any contrived exercise. What challenges did they face? How did they overcome them? What would they do differently now?

## Making Current Processes Better

If your company isn't ready to abandon leetcode entirely, you can still improve the process:

1. Choose problems relevant to your actual work
2. Allow candidates to use their preferred language and environment
3. Focus on problem-solving approach rather than perfect solutions
4. Provide clear evaluation criteria to reduce bias
5. Train interviewers to create a supportive environment

## The Broader Question

The deeper issue here isn't just about interview techniques, but about what we actually value in software development. Do we value puzzle-solving abilities, or do we value the ability to build maintainable systems that solve real problems for users?

Perhaps what we need isn't just a better interview process, but a more honest conversation about what makes someone an effective engineer. Until we align our hiring practices with the actual work, we'll continue to optimize for the wrong things.

In the meantime, I'll keep practicing my leetcode problems before interviews—not because I think it makes me a better engineer, but because that's the game we've all implicitly agreed to play. And maybe that's the most telling criticism of all.

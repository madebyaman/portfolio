---
title: Cover Letter
date: 2022-06-31
tags: ["React" ]
---

Hi Upstash,

I’m Aman Thakur, a developer living in a quiet Himalayan town in HP, India.

I had a rare path into software.

I started my career in the Indian Army. An eye injury forced me to leave, which was tough, but it pushed me toward something I always wanted to do: build software.

So after leaving the Army, I taught myself programming from scratch. I was doing a full-time job during the day, and at night I was learning JavaScript, React, and later PHP and WordPress. I built small projects, broke many things, fixed them, and kept going.

React and Firebase were my main playgrounds back then. I even wrote a full tutorial for Smashing Magazine on [building a comment system with Firebase](https://www.smashingmagazine.com/2020/08/comment-system-firebase/).

I got my first job at a startup. Within two months, I found myself in charge of frontend. It was scary, exciting, and honestly one of the best moments of my career.

Here are a few of my impressive work:

## TLDR:

I’m a frontend engineer who likes to build things from first principles.

I’ve built:
- A stable 3-step AI generation state system (SSE → slidemap → PPT) with no race conditions
- One of the fastest DOM virtualization libraries (steady 60fps even on heavy tables)
- Performance fixes in Langfuse (bundle 3.4MB → 1.1MB, LCP 2.4s → 1.8s, INP 1.5–2s → 20–30ms)

I love to solve tough problems in UI, state, and performance.

## Complex state management

In my job, we built an AI presentation builder based on a copyrighted presentation method. The app asked the user a series of questions to generate a PPT.

In a final step, the frontend had to call 3 endpoints for getting the presentation

1. The SSE stream
2. POST request for getting slidemap
3. POST request for getting download link

The initial solution was sloppy. The loading states wouldn’t work correctly. There was no retry handling logic. The user navigation during the generation would cause unexpected results. Race conditions, cache resets made it worse.

I built a standalone state machine that controlled the whole generation flow.

Here’s how the API looked like while consuming it:

```tsx
export function useStream(initialData) {
  const [, render] = useState({});
  const [instance] = useState(
    () => new StreamableStoryMap(initialData),
  );

  useEffect(() => {
    const unsub = instance.subscribe(render)
    return unsub
  }, [])

  const status = instance.status; // 'loading' | 'error' | 'success' | 'idle'
  const data = instance.data; // could be a stream or static data
  const refetch = instance.refetch; // Fn to refetch. Cleared cache

  return { isLoading, data, refetch };
}
```

It worked like this:

- It read the initial state from the server and continued from wherever the user left.
- If nothing had started, it ran all steps in order.
- If the stream was ongoing, it switched to polling so the final result still showed correctly.
- If the user left during step 2 or 3, it waited for the server to finish and picked up smoothly.
- Recoverable errors restarted cleanly; unrecoverable ones showed a clear message and let the user create a fresh presentation.

This fixed the flow, removed race conditions, and made the whole experience predictable.

Besides this, I also worked on:

- Reworked the frontend structure. We moved from a messy colocated setup to a clean [module-based system](https://alexkondov.com/tao-of-react/#application-structure), which made logic sharing simple and clear separation of concern.
- Adding Vitest and Playwright tests and running them via Github Action
- Migrating from Pages Router to App Router, which reduced bundle size, improved type safety, and enabled better prerendering support.

## Fast Virtualization Library

I also worked on a [custom virtualization library](https://github.com/madebyaman/virtualizer), which is one of the fastest DOM based virtualization libraries out there.

Most libraries, like TanStack Virtual library can give you 60 fps on simple tables, but as soon as your table component starts to grow, it will start to drop frames.

My library stayed at a steady 60fps even on a 6× throttled CPU. And this was on my five years old 2020 M1 MacBook.

There are certain techniques that make it the fastest out there.

- I skipped scrollTop and used a custom scrollbar, which avoided the forced reflows that slow most virtualizers.
- The scroll handler followed a strict zero-allocation rule, so very few browser GC processes.
- It has minimal memory footprint through DOM node recycling. Only about 15–20 DOM nodes are on the page at any time, even with 500,000+ rows.

Here is a video showing how powerful it is.

<video controls width="750" height="420">
  <source src="https://dl.dropboxusercontent.com/scl/fi/6jc7b4aiux3a29vnlnb1q/original.mp4?rlkey=7365faa7tujzhee5zc4og2ov4&st=zqe5mnwb&dl=0" type="video/mp4" />
  Your browser does not support the video tag.
</video>

## Chord KeyPress and Keysequence Manager React Library

I also worked on a [hotkey sequence management library](https://github.com/madebyaman/chord) in React. It goes beyond simple hooks like useKeyPress.

It supports:

- Two hooks `useKeyPress` for registering a single shortcut. `useKeySequence` for registering a sequence like gh for going to home
- A global help screen (like pressing `?` on YouTube) to show all active shortcuts
- Besides, what makes this library really powerful is that it uses trie data structure to store the key sequences, this makes lookup really fast. `0(n)` lookup where `n` is the number of keys.
- It handles platform differences nicely—`cmd` on macOS becomes `ctrl` on Windows and Linux.

## Open Source

I recently contributied to Langfuse. One of my biggest PRs focused on [improving frontend performance](https://github.com/langfuse/langfuse/pull/10544).

I was able to get the initial bundle down from approximately 3.4 MB to 1.1 MB. This led to a 25% improvement in LCP down from 2.4s to roughly 1.8s.

Besides, I also worked on a couple of key improvements

- improving interaction time (INP) of opening/closing filter sidebar in table component. This was earlier taking a huge time of nearly 1.5 to 2s. I was able to cut it down to 20-30ms.
- Fixed a [bug in the playground](https://github.com/langfuse/langfuse/pull/10234) where the state reset on viewport change. It turned out the viewport switch rendered a different DOM tree, which caused the reset.

## Why I am a good fit for Upstash

I am a huge fan of Upstash as a product. When I saw this job post I knew that I had to apply.

Here's why

- "Maintain Upstash console… improve quality of the codebase" - I have led major frontend rewrites and cleaned old codebases. For example, I moved our entire app from a messy colocated structure to a clean module-based one.
- "Come up with new open-source ideas…". This is already my hobby. If I worked at Upstash, I would naturally build small tools and examples.
- NextJS, Typescript, Tailwind are my daily drivers from past 3 years. I have good experiene with React Router (formerly Remix) as well.
- I have good eye at design. I have read Refactoring UI cover to cover many times and in fact planning to read it one more time. I would love to work a company which values design just like I do.
- I am workhorse. I get things done. I would love to do my best work for Upstash.

## Fun / Interests

Outside work, I’m trying to level up my basics again.

- I’ve been revisiting Discrete Math and slowly building the confidence to learn machine learning someday. Stanford CS229 Machine Learning course is on my wish list.
- I also like staying up to date with AI. It moves fast, and it’s fun to follow. I mean have you seen how good grok-code-fast-1 is? I recently started playing with it and it made me ditch Claude Code.
- I recently picked up Rust and started working through The Rust Book.
- I like reading too. Red Rising and Empyrean are my current favorites.
- I enjoy movies as well. Frankenstein was just wow.

There’s more I could share, but I’ll stop here.

I hope this gives you a small sense of who I am, and I’d love to chat more.

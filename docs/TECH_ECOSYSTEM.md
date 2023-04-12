# Tech ecosystem

The [GETTING_STARTED.md](./GETTING_STARTED.md) gives you adequate information on
how to install dependencies and launch the app. Once you've done that, this
document is intended to give you a taste of how an app works, and more
importantly, why we choose the technology. It still assumes basic knowledge of
React and [Next.js](https://nextjs.org/docs/getting-started). **If you're
completely new to React, please refer to https://github.com/petehunt/react-howto
instead!**

## Tech stack

### Core

- [x] [React](https://reactjs.org/)
- [x] [Next.js](https://nextjs.org/)
- [x] [Vite.js](https://vitejs.dev/)
- [x] [SWR](https://swr.vercel.app/)

### UI & styling

- [x] [Tailwindcss](https://github.com/tailwindcss/tailwindcss)

### Static type checking & linting

- [x] [TypeScript](https://www.typescriptlang.org)
- [x] [ESLint](http://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### Testing

- [x] [Jest](http://facebook.github.io/jest/)
- [x] [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## Basic Building Blocks

### React

When we choose a technology, the first question always is "**did that technology
achieve a certain level of stability and maturity?**". Quick wins are great, but
products, teams, and infrastructure evolving into new things can only be created
with years of effort. React has been proven to be the answer when the question
comes to selecting our frontend backbone. Not many frameworks evolving over a
decade can still maintain the right balance of stability, performance, and
usability like React.

### Next.js

Production grade React applications that scale, we list
[Next.js](https://nextjs.org/) to be the first candidate when we decide to setup
a React app. The opinionated framework gives you the best developer experience
with all the features you need for production: hybrid static & server rendering,
TypeScript support, smart bundling, route pre-fetching.

### Vite.js

[Vite.js](https://vitejs.dev/) is a modern build tool and web development
framework that is gaining popularity among developers due to its fast build
times and development server, which significantly reduces the time required to
build and test web applications. Vitejs leverages modern browser features like
native ES modules and dynamic imports, enabling a highly efficient development
process that provides a smooth developer experience

### React Context

We don't advocate for any state management library at the moment. One of the
reasons libraries like Redux were so successful is because they solved the
problem of [prop drilling](https://kentcdodds.com/blog/prop-drilling). However,
the born of [Context API](https://reactjs.org/docs/context.html) made it easy to
pass data through the component tree without having to pass props down manually
at every level. More importantly, we think most applications don't need a
complicated global state, and Context API is more than enough to solve that
uncomplex problem. Our philosophy in React state management is simple: try to
keep state as local as possible and use React context when prop drilling becomes
a worry.

### TypeScript

We are adopting TypeScript to our codebase. Forcing to write strongly-typed
syntax while you are familiar with dynamic/multi-paradigm scripting language
like JavaScript is sometimes annoying, even for experienced developers. However,
the drawback can be outweighed by the following benefits when coming to write a
medium to large sized applications:

- [x] Catching your bugs at compile-time as you type them.
- [x] Coding confidently with autocompletion, definition jumping and source
      documentation.
- [x] Syncing API Interfaces between backend and frontend via Swagger json doc.
- [x] Relieve the pain of refactoring/renaming .

### SWR

We use [SWR](https://swr.vercel.app/) as the caching layer for the backend data
to ensure the UI will be always fast and reactive. The strategy is to first
return the data from cache (stale), then send the fetch request (revalidate),
and finally, come with the up-to-date data. The data can be dynamic and
self-updated overtime. It features:

- [x] Transport and protocol agnostic data fetching
- [x] Fast page navigation
- [x] Revalidation on focus
- [x] Interval polling
- [x] Request deduplication
- [x] Local mutation

### TailwindCSS

We are using `tailwind` to do styling and it scales pretty well when combining
headless components and hooks to build the presentation layer. The choice was
made because it helps avoid common CSS frustrations to keep a neat codebase and
moving quickly, regardless of experience levels:

- [x] **Consistency**: utility classes help you work within the constraints of a
      system instead of littering your stylesheets with arbitrary values.
- [x] **Naming is hard**: you don't even need to use complicated namespacing
      techniques like BEM.
- [x] **Tiny production build**: automatically removes all unused CSS when
      building for production, which means your final CSS bundle is the smallest
      it could possibly be.
- [x] **Mobile-first**: throw a screen size in front of literally any utility
      class and watch it magically apply at a specific breakpoint.
- [x] **Customization**: although Tailwind includes an expertly crafted set of
      defaults out-of-the-box, but literally everything can be customized via
      JIT or `tailwind.config.js`.

## Linting

This repo includes a complete static code analysis setup. It's composed of
[ESLint](http://eslint.org/) and [Prettier](https://prettier.io/).

We recommend that you install the relevant IDE extensions for each one of these
tools. Once you do, every time you'll press save, all your code will be
formatted and reviewed for quality automatically. (Read more at
[EDITOR.md](./EDITOR.md).)

We've also set up a git hook to automatically analyze and fix linting errors
before your code is committed. If you'd like to disable it or modify its
behavior, take a look at the `lint-staged` section in `package.json`.

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Code style](./CODE_STYLE.md)
- [Editor](./EDITOR.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)

# Deployment

We use [https://netlify.com](Netlify) for Continuous Deployment at the moment
but you can choose another service for deployment. Just make sure you set up the
right build command and the correct path to app bundles.

## Main Apps

Build command:

```bash
# Build next app
# Publish dir: apps/next/.next
yarn build:next

# Build vite app
# Publish dir: apps/vite/dist
yarn build:vite
```

## Document UI

Build command:

```bash
# Build UI Storybook
# Publish dir: packages/ui/storybook-static
yarn build-storybook

```

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Writting test](./WRITING_TEST.md)
- [Editor](./EDITOR.md)

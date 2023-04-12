# Getting started

This is a monorepo project using [`turborepo`](https://turborepo.org/).

## Code organization

```
.
├── ...
├── apps
│   ├── next                              # NextJS App
│   └── vite                              # ViteJS App
├── packages
│   ├── api                               # Shared API config & models
│   ├── config                            # Shared config (tsconfig, tailwind, etc.)
│   ├── ui                                # Shared UI components
│   └── utils                             # Shared utilities
└── ...
```

## Development

Install dependencies with `yarn` or `npm`:

```bash
yarn install
```

Then you can run all apps at once:

```bash
yarn dev
```

... or run one app only:

```bash
yarn dev:next
# or
yarn dev:vite
```

## App Overview

| App  | Dev Deployment                       | Local Dev Port |
| ---- | ------------------------------------ | -------------- |
| next | https://df-monorepo-next.netlify.app | 3000           |
| vite | https://df-monorepo-vite.netlify.app | 3001           |

## Resources

| Name    | Description | Link                                      |
| ------- | ----------- | ----------------------------------------- |
| UI Docs | Storybook   | https://df-monorepo-storybook.netlify.app |

### Develop UI components

The project integrates [Storybook](https://storybook.js.org/) to streamline UI
development.

```bash
yarn storybook
```

The UI document then should be live at
[http://localhost:6006](http://localhost:6006).

## Read on:

- [Home](../README.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Version control](./VERSION_CONTROL.md)
- [Editor](./EDITOR.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)

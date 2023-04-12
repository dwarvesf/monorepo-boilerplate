# Monorepo Boilerplate

An opinionated production-ready monorepo frontend boilerplate built on top of
NextJS, ViteJS, shipped with TypeScript, SWR, TailwindCSS, Jest,
testing-library, and Storybook. This project uses
[`turborepo`](https://turborepo.org/).

## Structure

```
.
├── ...
├── apps
│   ├── next                  # NextJS App
│   └── vite                  # ViteJS App
├── packages
│   ├── api                   # Shared API config & models
│   ├── config                # Shared config (tsconfig, tailwind, etc.)
│   ├── ui                    # Shared UI components
│   └── utils                 # Shared utilities
└── ...
```

## Quick Start

Clone the project & install the dependencies:

```bash
git clone --depth=1 git@github.com:dwarvesf/monorepo-boilerplate.git my-project-name
cd my-project-name
yarn install
```

## Development

You can run all apps at once:

```bash
yarn dev
```

... or run one app only:

```bash
yarn dev:next
# or
yarn dev:vite
```

Make sure to refer to the available scripts in `package.json`.

## App Overview

| App  | Dev Deployment                       | Local Dev Port |
| ---- | ------------------------------------ | -------------- |
| next | https://df-monorepo-next.netlify.app | 3000           |
| vite | https://df-monorepo-vite.netlify.app | 3001           |

## Resources

| Name    | Description | Link                                      |
| ------- | ----------- | ----------------------------------------- |
| UI Docs | Storybook   | https://df-monorepo-storybook.netlify.app |

## Documentation

**Disclaimer:** These are sample files, not definite guidelines. Feel free to
make adjustments as you see fitting for your team & use-cases!

- [Getting started](./docs/GETTING_STARTED.md)
- [Tech ecosystem](./docs/TECH_ECOSYSTEM.md)
- [Code style](./docs/CODE_STYLE.md)
- [Writing tests](./docs/WRITING_TEST.md)
- [Editor](./docs/EDITOR.md)
- [Deployment](./docs/DEPLOYMENT.md)

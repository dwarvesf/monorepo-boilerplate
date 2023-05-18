<h1 align="center">
    Monorepo Boilerplate
</h1>
<p align="center">
    <a href="https://github.com/dwarvesf">
        <img src="https://img.shields.io/badge/-make%20by%20dwarves-%23e13f5e?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAD1BMVEUAAAD///////////////+PQt5oAAAABXRSTlMAQL//gOnhmfMAAAAJcEhZcwAAHsIAAB7CAW7QdT4AAACYSURBVHicndLRDYJAEIThMbGAI1qAYAO6bAGXYP81uSGBk+O/h3Mev4dhWJCkYZqreOi1xoh0eSIvoCaBRjc1B9+I31g9Z2aJ5jkOsYScBW8zDerO/fObnY/FiTl3caOEH2nMzpyZhezIlgqXr2OlOX617Up/nHnPUg0+LHl18YO50d3ghOy1ioeIq1ceTypsjpvYeJohfQEE5WtH+OEYkwAAAABJRU5ErkJggg==&&logoColor=white" alt="Dwarves Foundation" />
    </a>
    <a href="https://discord.gg/dwarvesv">
        <img src="https://img.shields.io/badge/-join%20the%20community-%235865F2?style=for-the-badge&logo=discord&&logoColor=white" alt="Dwarves Foundation Discord" />
    </a>
</p>

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

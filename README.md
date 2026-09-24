<h2 align="center">
  <p>Personal website built with Astro</p>
  
</h2>


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
Directory structure:
└── hasindulakshan-hasindu-nagolla.me/
    ├── .astro/
    │   ├── data-store.json
    │   ├── content-modules.mjs
    │   ├── content.d.ts
    │   ├── types.d.ts
    │   ├── settings.json
    │   └── content-assets.mjs
    ├── CNAME
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    ├── public/
    │   ├── CNAME
    │   └── logos/
    ├── package.json
    ├── tailwind.config.mjs
    ├── astro.config.mjs
    ├── tsconfig.json
    ├── README.md
    ├── pnpm-lock.yaml
    └── src/
        ├── scripts/
        │   └── main.ts
        ├── components/
        │   ├── SparklesCore.tsx
        │   ├── experience/
        │   │   ├── props.ts
        │   │   └── index.astro
        │   ├── Component.astro
        │   └── icons/
        │       ├── twitter.astro
        │       ├── dribbble.astro
        │       ├── linkedin.astro
        │       ├── github.astro
        │       └── arrow.astro
        ├── layouts/
        │   └── Layout.astro
        ├── env.d.ts
        ├── data/
        │   ├── socials.ts
        │   └── experience.ts
        ├── libs/
        │   └── context-cursor/
        │       ├── propNames/
        │       │   └── index.ts
        │       ├── modes/
        │       │   └── contextMode.ts
        │       ├── chunks/
        │       │   ├── getStyleProp.ts
        │       │   ├── addCursor.ts
        │       │   ├── setStyles.ts
        │       │   ├── isElHasProperty.ts
        │       │   ├── index.ts
        │       │   └── getMoveIndex.ts
        │       ├── index.ts
        │       └── types/
        │           └── index.d.ts
        ├── pages/
        │   └── index.astro
        └── utils/
            └── cn.ts


```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |



# 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── i18n/
│   │   └── ui.ts
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   |   └── index.astro
│   └── stores/
│   │   └── store.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Configuration
atro.config.mjs defines the configuration for an Astro project. It includes various integrations such as Vue, React, Storyblok, Tailwind, and Node. It also loads environment variables from a .env file using the `loadEnv` function.

### Inputs
- `defineConfig`: A function that defines the Astro configuration.
- `vue`, `react`, `storyblok`, `tailwind`, `node`: Astro integrations for Vue, React, Storyblok, Tailwind, and Node respectively.
- `loadEnv`: A function that loads environment variables from a .env file.
- `env.STORYBLOK_TOKEN`: The Storyblok access token loaded from the environment variables.
___
### Flow
1. The code imports the necessary modules and functions.
2. The `loadEnv` function is used to load the environment variables from the .env file.
3. The `defineConfig` function is called to define the Astro configuration.
4. Various integrations are added to the `integrations` array, including Vue, React, Storyblok, and Tailwind.
5. The Storyblok integration is configured with the access token and component mappings.
6. The Astro output is set to "server".
7. The Node adapter is configured with the mode set to "standalone".
8. The Astro configuration is exported.
___

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).

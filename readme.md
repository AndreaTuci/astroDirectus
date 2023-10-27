# Dockerized Project with Astro.js and Directus Backend

This project is a dockerized website that uses Astro.js as the frontend framework and Directus as the backend CMS.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone this repository.
2. Navigate to the root directory of the cloned repository.
3. Run `docker-compose up` to start the containers.
4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- To start the containers, run `docker-compose up`.
- To stop the containers, run `docker-compose down`.


### Directus

#### Dashboard
- You can access to directus dashboard from `http://directus.localhost` url.
- You can find/set `ADMIN_EMAIL` and `ADMIN_PASSWORD` variables `/docker/develop/envs/directus.env` file for your admin login.

#### Database
- Database tables are named as collection in directus.
- You can create new collection from `Settings > Data Model` menu.

#### User Permissions
You need to create a user from `Users` menu. Then you need to create new role from `Settings > Access Control` menu and get your `access token`.<br><br>
This access token will be used for requesting directus API. (`http://directus.localhost/items/:collection`)

** You can manage collection CRUD permissions inside roles settings.

#### Directus API
Request Examples:

- Get all items:
```
http://directus.localhost/items/:collection?access_token={access_token} [GET]
```

- Get single item:
```
http://directus.localhost/items/:collection/:id?access_token={access_token} [GET]
```

- Create new item:
```
http://directus.localhost/items/:collection?access_token={access_token} [POST]

Request:
{
	"id": 1,
	"status": "published",
	"title": "Hello, world!",
	"body": "This is my first article",
	"featured_image": "768eabec-3c54-4110-a6bb-64b548116661",
	"author": "0bc7b36a-9ba9-4ce0-83f0-0a526f354e07"
}
```

- Update item:
```
http://directus.localhost/items/:collection/:id?access_token={access_token} [PATCH]

Request:
{
    "title": "Hello, world 2!"
}
```

- Delete item:
```
http://directus.localhost/items/:collection/:id?access_token={access_token} [DELETE]
```

You can find more information about directus API from [here](https://docs.directus.io/reference/introduction.html).


### Astro


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


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
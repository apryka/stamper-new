# stamper-new-website

## Installation

You will need to have `node` and `npm` installed on your computer.


```sh
npm install
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script            | Description                                                                         |
| ----------------- | :---------------------------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.                             |
| `dev`             | Alias for `develop`.                                                                |
| `format`          | Format your code with Prettier.                                                     |
| `clean`           | Delete the `.cache` and `public` directories.                                       |
| `lint`            | Lint your code with ESLint.                                                         |
| `lint:watch`      | Lint your code with ESLint in watch mode.                                           |
| `lint:fix`        | Lint your code with ESLint and attempt to fix linting issues.                       |
| `serve`           | Serve the production build of your site for testing.                                |
| `build`           | Compile your application and make it ready for deployment                           |
| `update`          | Updates the package.json to the latest dependency versions using npm-check-updates. |

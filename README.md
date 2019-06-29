# NextJS-WhereHaveBeenTo-Demo
Application for development with React JS and Next JS

# Next.js Plugins

## Official Next.js plugins

- [@zeit/next-mdx](./packages/next-mdx)
- [@zeit/next-css](./packages/next-css)
- [@zeit/next-sass](./packages/next-sass)
- [@zeit/next-less](./packages/next-less)
- [@zeit/next-stylus](./packages/next-stylus)
- [@zeit/next-preact](./packages/next-preact)
- [@zeit/next-typescript](./packages/next-typescript)
- [@zeit/next-bundle-analyzer](./packages/next-bundle-analyzer)
- [@zeit/next-source-maps](./packages/next-source-maps)
- [@zeit/next-workers](./packages/next-workers)

## Community made plugins

- [next-awesome-typescript](https://github.com/saitonakamura/next-awesome-typescript)
- [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
- [next-env](https://github.com/formatlos/next-env)
- [next-images](https://github.com/arefaslani/next-images)
- [next-inferno](https://github.com/queses/next-inferno)
- [next-offline](https://github.com/hanford/next-offline)
- [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)
- [next-pino](https://github.com/khaeransori/next-pino)
- [next-plugin-graphql](https://github.com/lfades/next-plugin-graphql)
- [next-testcafe-build](https://github.com/formatlos/next-testcafe-build)
- [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv)
- [next-progressbar](https://github.com/lucleray/next-progressbar)
- [next-purgecss](https://github.com/lucleray/next-purgecss)
- [next-plugin-transpile-modules](https://github.com/KeitIG/next-plugin-transpile-modules)
- [next-seo](https://github.com/garmeeh/next-seo)
- [next-mdx-blog](https://github.com/hipstersmoothie/next-mdx-blog)
- [next-fonts](https://github.com/rohanray/next-fonts)
- [next-size](https://github.com/lucleray/next-size)
- [next-react-svg](https://github.com/jeremybarbet/next-react-svg)

## Adding a plugin

> :warning: Before adding a plugin in this repository please create an issue to establish if it should be an official plugin or not.

1. Create a directory under the `packages` folder
2. Add `package.json` to the directory with these contents:
```
{
    "name": "@phongsakornm/wherehavebeento",
    "version": "0.1.0",
    "private": true,
    "main": "index.js",
    "license": "MIT"
}
```

3. Add a `index.js` file with the plugin code
4. Add a `readme.md` explaining what the plugin does, how to install, and how to configure it
5. Submit a pull request


## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run deploy`

Builds the app for production to the `out` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deploy Code to NETLIFY
URL DEMO : http://www.wherehavebeento.ml/

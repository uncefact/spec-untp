# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Versioning

The UNTP specification website uses [Docusaurus versioning](https://docusaurus.io/docs/versioning) to manage different versions of the specification. This functionality allows the website to maintain multiple versions of the documentation, ensuring users can access both historical releases and the latest updates.

#### Managing Assets
When adding assets to the website, determine whether they should be **global** (e.g., meeting notes, which remain consistent across all versions) or **versioned** (e.g., images, PDFs, or other UNTP specification content likely to change over time). 

- **Global assets** should be placed in the `static` directory to ensure they are accessible across all versions.
- **Versioned assets** should be placed in the `/docs` directory, in a location that aligns with the relevant documentation content.

##### Referencing Assets
- For **global assets**, use **absolute paths** (e.g., `/documents/doc.txt`) instead of relative paths (e.g., `../../path/to/doc.txt`). Absolute paths ensure URLs remain valid after a new version is released.
- For **versioned assets**, use **relative paths** (e.g., `./image.png` or `../assets/example.pdf`) to reference them within the `/docs` directory. Relative paths ensure version-specific assets are correctly linked in each release.

For more details on constructing static asset URLs, see the [Docusaurus versioning documentation](https://docusaurus.io/docs/versioning#global-or-versioned-collocated-assets).

#### Accessing Versions
All released versions are available through the **version dropdown** in the website’s navigation bar. The **Work in Progress** version, reflecting the current state of the `/docs` directory, is also accessible.

#### Releasing a New Version
To release a new version, execute the following commands in the terminal:

```bash
cd website
yarn docusaurus docs:version {VERSION}
```

For example, to release version 0.6.0:

```bash
yarn docusaurus docs:version 0.6.0
```
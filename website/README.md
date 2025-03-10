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

#### With Default Configuration

The site can be built with the default environment variables:

```bash
$ yarn build
```

This will use placeholder values suitable for development and testing.

#### With Custom Configuration

1. Copy `.env-example` to `.env`:

```bash
$ cp .env-example .env
```

2. Modify the values in `.env` to match your requirements

3. Build the site:

```bash
$ yarn build
```

The built site will use your custom configuration values and will be generated in the `build` directory, ready to be served by any static content hosting service.

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

### Environment Variables

The site can be configured using environment variables. Create a `.env` file in the `website` directory or set them directly in your environment.

#### Core Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `SITE_TITLE` | Main title of the website | `Example Site` |
| `FAVICON` | Path to favicon file | `img/default-favicon.png` |
| `SITE_URL` | Production URL of the site | `https://example.com` |
| `BASE_URL` | Base pathname for serving the site | `/project-name/` |
| `ORGANIZATION_NAME` | GitHub organization name | `Example Organization` |
| `PROJECT_NAME` | GitHub repository name | `example-project` |

#### Content & Branding

| Variable | Description | Default |
|----------|-------------|---------|
| `NAVBAR_TITLE` | Short title shown in navigation | `Title` |
| `SITE_LOGO` | Path to site logo image | `img/grey-placeholder-image.jpg` |
| `LOGO_ALT` | Alt text for site logo | `Logo alt` |
| `HERO_IMAGE` | Path to hero image | `img/grey-placeholder-image.jpg` |
| `HERO_IMAGE_ALT` | Alt text for hero image | `Hero image alt` |
| `SOCIAL_IMAGE` | Social media card image | `img/placeholder-social-card.png` |

#### External Links

| Variable | Description | Default |
|----------|-------------|---------|
| `EDIT_URL_BASE` | Base URL for "Edit this page" links | `https://example.com/{link-purpose}` |
| `SLACK_LINK` | Slack workspace invite link | `https://example.com/{link-purpose}` |
| `SLACK_CLIENT_APP_LINK` | Direct link to Slack channel | `https://example.com/{link-purpose}` |
| `REPO_LINK` | GitHub repository URL | `https://example.com/{link-purpose}` |
| `FOOTER_PDF_LINK` | Link to PDF version of spec | `https://example.com/{link-purpose}` |
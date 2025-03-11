// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import 'dotenv/config';
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: process.env.SITE_TITLE || 'Example Site',
  tagline:
    'Supporting governments and industry on practical measures to counter greenwashing by implementing supply chain traceability and transparency at the scale needed to achieve meaningful impacts on global sustainability outcomes.',
  favicon: process.env.FAVICON || 'img/default-favicon.png',

  // Set the production url of your site here
  url: process.env.SITE_URL || 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.BASE_URL || '/project-name/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORGANIZATION_NAME || 'Example Organization', // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME || 'example-project', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          editUrl: process.env.EDIT_URL_BASE || 'https://example.com/{link-purpose}',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/index.css'),
          ],
        },
        gtag: {
          trackingID: 'G-9NBG7HW734',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      slackLink:
        process.env.SLACK_LINK || 'https://example.com/{link-purpose}',
      mailingListLink: process.env.MAILING_LIST_LINK || 'https://example.com/{link-purpose}',
      colorMode: {
        disableSwitch: true,
      },
      image: process.env.SOCIAL_IMAGE || 'img/placeholder-social-card.png',
      heroImage: process.env.HERO_IMAGE || 'img/grey-placeholder-image.jpg',
      heroImageAlt: process.env.HERO_IMAGE_ALT || 'Hero image alt',
      navbar: {
        title: process.env.NAVBAR_TITLE || 'Title',
        logo: {
          alt: process.env.LOGO_ALT || 'Logo alt',
          src: process.env.SITE_LOGO || 'img/grey-placeholder-image.jpg',
        },
        items: [
          {to: '/docs/about', label: 'About', position: 'right'},
          {
            to: '/docs/specification',
            label: 'The specification',
            position: 'right',
          },
          {
            to: '/docs/tools-and-support',
            label: 'Tools and support',
            position: 'right',
          },
          {to: '/docs/extensions', label: 'Extensions', position: 'right'},
          {
            href: process.env.SLACK_LINK || 'https://example.com/{link-purpose}',
            position: 'right',
            html: '<svg class="icon icon-slack"><use xlink:href="#slack"></use></svg><span class="menu-item-name">Slack</span>',
            className: 'navbar-slack-link',
          },
          {
            href: 'https://groups.google.com/g/transparency-uncefact',
            position: 'right',
            html: '<svg class="icon"><use xlink:href="#mail"></use></svg><span class="menu-item-name">Mailing List</span>',
            className: 'navbar-mailing-list-link',
          },
          {
            href: process.env.REPO_LINK || 'https://example.com/{link-purpose}',
            html: '<svg class="icon"><use xlink:href="#github"></use></svg><span class="menu-item-name">Github</span>',
            className: 'navbar-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Print this specification as PDF',
            to: process.env.FOOTER_PDF_LINK || 'https://example.com/{link-purpose}',
            target: '_blank',
          },
          {
            label: 'Terms and Conditions of Use',
            to: '/terms',
          },
          {
            label: 'Privacy Notice',
            to: '/privacy',
          },
        ],
        copyright: `© ${process.env.FOOTER_TEXT || 'Example Footer'}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;

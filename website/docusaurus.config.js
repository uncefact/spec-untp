// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import 'dotenv/config';
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const title = process.env.SITE_TITLE || 'Example Site';
const tagline = process.env.SITE_TAGLINE || 'Example Site Tagline';
const favicon = process.env.FAVICON || 'img/grey-placeholder-image.png';
const url = process.env.SITE_URL || 'https://example.com';
const baseUrl = process.env.BASE_URL || '/project-name/';
const organizationName = process.env.ORGANIZATION_NAME || 'Example Organization';
const projectName = process.env.PROJECT_NAME || 'example-project';
const editUrl = process.env.EDIT_URL_BASE || 'https://example.com/link-purpose';
const slackLink = process.env.SLACK_LINK || 'https://example.com/link-purpose';
const mailingListLink = process.env.MAILING_LIST_LINK || 'https://example.com/link-purpose';
const socialImage = process.env.SOCIAL_IMAGE || 'img/placeholder-social-card.png';
const heroImage = process.env.HERO_IMAGE || 'img/grey-placeholder-image.png';
const heroImageAlt = process.env.HERO_IMAGE_ALT || 'Hero image alt';
const navbarTitle = process.env.NAVBAR_TITLE || 'Title';
const logoAlt = process.env.LOGO_ALT || 'Logo alt';
const siteLogo = process.env.SITE_LOGO || 'img/grey-placeholder-image.png';
const repoLink = process.env.REPO_LINK || 'https://example.com/link-purpose';
const footerPdfLink = process.env.FOOTER_PDF_LINK || 'https://example.com/link-purpose';
const footerText = process.env.FOOTER_TEXT || 'Example Footer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline,
  favicon,

  // Set the production url of your site here
  url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

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
          editUrl,
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
      slackLink,
      mailingListLink,
      colorMode: {
        disableSwitch: true,
      },
      image: socialImage,
      heroImage,
      heroImageAlt,
      navbar: {
        title: navbarTitle,
        logo: {
          alt: logoAlt,
          src: siteLogo,
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
            href: slackLink,
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
            href: repoLink,
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
            to: footerPdfLink,
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
        copyright: `© ${footerText}`,
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

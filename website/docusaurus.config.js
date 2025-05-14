// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const slackLink =
  'https://join.slack.com/t/uncefact/shared_invite/zt-35d2dcrn7-2KEYgff22ob7BtQcprolkg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UN Transparency Protocol',
  tagline:
    'Supporting governments and industry on practical measures to counter greenwashing by implementing supply chain traceability and transparency at the scale needed to achieve meaningful impacts on global sustainability outcomes.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://uncefact.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/spec-untp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uncefact', // Usually your GitHub org/user name.
  projectName: 'spec-untp', // Usually your repo name.

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
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/uncefact/spec-untp/edit/main/website/${versionDocsDirPath}/${docPath}`,
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
      mailingListLink: 'https://groups.google.com/g/transparency-uncefact',
      colorMode: {
        disableSwitch: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'TP',
        logo: {
          alt: 'United Nations Transparency Protocol',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/about', label: 'About the UNTP', position: 'right'},
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
            to: '/docs/implementations',
            label: 'Implementations',
            position: 'right',
          },
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
            href: 'https://github.com/uncefact/spec-untp',
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
            to: '/un-transparency-protocol.pdf',
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
        copyright: `© United Nations Economic Commission for Europe`,
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

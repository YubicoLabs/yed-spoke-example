// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YubiEnterprise Delivery + ServiceNow Example',
  tagline: 'Integrate ServiceNow with the YubiEnterprise Deliver API to allow your workforce to request their YubiKey in the same way they make other IT requests',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yubicolabs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/yed-spoke-example',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yubicolabs', // Usually your GitHub org/user name.
  projectName: 'yed-spoke-example', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YubicoLabs/yed-spoke-example/tree/main/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/yubico-logo.png',
      navbar: {
        title: 'YubiEnterprise Delivery ServiceNow Example',
        logo: {
          alt: 'My Site Logo',
          src: 'img/yubico-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/YubicoLabs/yed-spoke-example',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Other resources and guides',
            items: [
              {
                label: 'developers.yubico.com',
                to: 'https://developers.yubico.com',
              },
              {
                label: 'Passkey workshop',
                to: 'https://yubicolabs.github.io/passkey-workshop/',
              },
              {
                label: 'Secure software supply chain guide',
                to: 'https://yubicolabs.github.io/secure-software-supply-chain-guide/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/yubico',
              }
            ],
          },
        ],
        copyright: `Copyright Yubico © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java']
      },
    }),
};

module.exports = config;

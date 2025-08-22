import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HDU Documentation',
  tagline: 'Health Data Universal API',

  future: {
    v4: true,
  },

  url: 'https://udsm-dhis2-lab.github.io/',
  baseUrl: '/hdu-documentation/',

  organizationName: 'udsm-dhis2-lab',
  projectName: 'hdu-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/udsm-dhis2-lab/hdu-documentation/edit/main/',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/udsm-dhis2-lab/hdu-documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'HDU Docs',
      logo: {
        alt: 'HDU Logo',
        src: 'img/hdu.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/udsm-dhis2-lab/hdu-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Getting Started',
            to: '/docs/intro',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} HDU Project. Built with Docusaurus.`,
  },
prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

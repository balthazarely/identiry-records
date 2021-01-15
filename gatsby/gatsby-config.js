import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Identity Records`,
    siteURL: 'https://Identity.records',
    description: 'This is a page for a lable',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    'react-intersection-observer',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'odybhovh',
        dataset: 'production',
        watch: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Rubik:300,500,800'],
        },
      },
    },
  ],
};

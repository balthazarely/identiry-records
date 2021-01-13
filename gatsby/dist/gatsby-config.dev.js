"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: '.env'
});

var _default = {
  siteMetadata: {
    title: "Identity Records",
    siteURL: 'https://Identity.records',
    description: 'This is a page for a lable'
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-transition-link', 'react-intersection-observer', {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: 'odybhovh',
      dataset: 'production',
      watch: true,
      token: process.env.SANITY_TOKEN
    }
  }, {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Rubik:300,800']
      }
    }
  }]
};
exports["default"] = _default;
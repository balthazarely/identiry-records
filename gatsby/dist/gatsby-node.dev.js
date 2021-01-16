"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPages = createPages;

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function turnArtistsIntoPages(_ref) {
  var graphql, actions, artistTemplate, _ref2, data;

  return regeneratorRuntime.async(function turnArtistsIntoPages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphql = _ref.graphql, actions = _ref.actions;
          artistTemplate = _path["default"].resolve('./src/templates/Artist.js');
          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      artist: allSanityArtist {\n        nodes {\n          name\n          slug {\n            current\n          }\n        }\n      }\n    }\n  "));

        case 4:
          _ref2 = _context.sent;
          data = _ref2.data;
          data.artist.nodes.forEach(function (artist) {
            actions.createPage({
              path: "artists/".concat(artist.slug.current),
              component: artistTemplate,
              context: {
                slug: artist.slug.current
              }
            });
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function turnAlbumsIntoPages(_ref3) {
  var graphql, actions, albumTemplate, _ref4, data;

  return regeneratorRuntime.async(function turnAlbumsIntoPages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          graphql = _ref3.graphql, actions = _ref3.actions;
          albumTemplate = _path["default"].resolve('./src/templates/Album.js');
          _context2.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      album: allSanityAlbums {\n        nodes {\n          name\n          slug {\n            current\n          }\n        }\n      }\n    }\n  "));

        case 4:
          _ref4 = _context2.sent;
          data = _ref4.data;
          data.album.nodes.forEach(function (album) {
            actions.createPage({
              path: "releases/".concat(album.slug.current),
              component: albumTemplate,
              context: {
                slug: album.slug.current
              }
            });
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function turnGenresIntoPages(_ref5) {
  var graphql, actions, _ref6, data;

  return regeneratorRuntime.async(function turnGenresIntoPages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          graphql = _ref5.graphql, actions = _ref5.actions;
          _context3.next = 3;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      genres: allSanityGenre {\n        nodes {\n          name\n          slug {\n            current\n          }\n        }\n      }\n    }\n  "));

        case 3:
          _ref6 = _context3.sent;
          data = _ref6.data;
          data.genres.nodes.forEach(function (genre) {
            actions.createPage({
              path: "releases/".concat(genre.slug.current),
              component: _path["default"].resolve('./src/pages/releases.jsx'),
              context: {
                genre: genre.slug.current
              }
            });
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function turnBlogsIntoPages(_ref7) {
  var graphql, actions, blogTemplate, _ref8, data;

  return regeneratorRuntime.async(function turnBlogsIntoPages$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          graphql = _ref7.graphql, actions = _ref7.actions;
          blogTemplate = _path["default"].resolve('./src/templates/Blog.js');
          _context4.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      blog: allSanityBlog {\n        nodes {\n          title\n          slug {\n            current\n          }\n        }\n      }\n    }\n  "));

        case 4:
          _ref8 = _context4.sent;
          data = _ref8.data;
          data.blog.nodes.forEach(function (blog) {
            actions.createPage({
              path: "blog/".concat(blog.slug.current),
              component: blogTemplate,
              context: {
                slug: blog.slug.current
              }
            });
          });

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function createPages(params) {
  return regeneratorRuntime.async(function createPages$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Promise.all([turnArtistsIntoPages(params), turnAlbumsIntoPages(params), turnGenresIntoPages(params), turnBlogsIntoPages(params)]));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
}
import path from 'path';

async function turnArtistsIntoPages({ graphql, actions }) {
  const artistTemplate = path.resolve('./src/templates/Artist.js');
  const { data } = await graphql(`
    query {
      artist: allSanityArtist {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.artist.nodes.forEach((artist) => {
    actions.createPage({
      path: `artists/${artist.slug.current}`,
      component: artistTemplate,
      context: {
        slug: artist.slug.current,
      },
    });
  });
}

async function turnAlbumsIntoPages({ graphql, actions }) {
  const albumTemplate = path.resolve('./src/templates/Album.js');
  const { data } = await graphql(`
    query {
      album: allSanityAlbums {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.album.nodes.forEach((album) => {
    actions.createPage({
      path: `releases/${album.slug.current}`,
      component: albumTemplate,
      context: {
        slug: album.slug.current,
      },
    });
  });
}

async function turnGenresIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      genres: allSanityGenre {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.genres.nodes.forEach((genre) => {
    actions.createPage({
      path: `releases/${genre.slug.current}`,
      component: path.resolve('./src/pages/releases.jsx'),
      context: {
        genre: genre.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnArtistsIntoPages(params),
    turnAlbumsIntoPages(params),
    turnGenresIntoPages(params),
  ]);
}

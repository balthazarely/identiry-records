import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion } from 'framer-motion';
import GenreFilter from '../components/GenreFilter';
import { pageTransition, TitleHover } from '../animations/animation';
import { titleCase } from '../utils/UtilFunctions';
import SEO from '../components/SEO';

const ArtistList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  gap: 2rem;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ArtistTile = styled(motion.div)`
  position: relative;
  /* min-width: 100%; */
  a {
    text-decoration: none;
  }
  .artist-image {
    height: 200px;
    border-radius: 10px;
    top: 0;
    position: absolute;
    /* width: 100%; */
    width: 100%;
    overflow: hidden;
    transform: scale(1);
  }
`;

const ArtistName = styled.div`
  font-family: Rubik;
  font-weight: 300;
  font-size: 14px;
  margin-top: 5px;
  z-index: 50;
  color: ${({ overlay }) => (overlay ? '#8d8d8d' : 'white')};
  text-decoration: none;
  text-align: center;
  width: 100%;
  z-index: 102;
  opacity: 1;
`;

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(0, 0, 0);
  transition: 300ms;
  opacity: ${({ overlay }) => (overlay ? '0.3' : '0')};
  z-index: 100;
  cursor: pointer;
`;

const PageTitle = styled(motion.div)`
  font-family: Rubik;
  font-weight: 800;
  font-size: 28px;
  color: white;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const GenreContainer = styled(motion.div)`
  position: relative;
`;
const GenreSpan = styled(motion.span)`
  font-family: Rubik;
  font-weight: 300;
`;

function SingleArtistList({ album }) {
  const [overlay, setOverlay] = useState(true);
  function toggleOverlay() {
    setOverlay(!overlay);
  }
  return (
    <>
      <SEO title="Releases" />
      <ArtistTile variants={TitleHover} whileHover="hover">
        <AniLink
          to={`/releases/${album.slug.current}`}
          cover
          bg="#EC4D37"
          duration={0.5}
        >
          <Overlay
            overlay={overlay}
            onMouseEnter={toggleOverlay}
            onMouseLeave={toggleOverlay}
          />
          <Img
            fluid={{ ...album.image.asset.fluid, aspectRatio: 1 }}
            className="artist-image"
          />
        </AniLink>
      </ArtistTile>
      <ArtistName overlay={overlay}>{album.name}</ArtistName>
    </>
  );
}

export default function artists({ data, location }) {
  const allAlbums = data.allAlbums.nodes;

  let pageLocation = location.pathname.split('/')[2];
  if (!pageLocation) {
    pageLocation = 'All';
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <GenreContainer>
        <GenreFilter location={location} />
      </GenreContainer>

      <motion.div
        className="w-full"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransition}
        style={{
          overflow: 'hidden',
          margin: '0px 10px',
          minHeight: '80vh',
        }}
      >
        <PageTitle>
          RELEASES <GenreSpan>{pageLocation}</GenreSpan>
        </PageTitle>

        <ArtistList variants={pageTransition}>
          {allAlbums.map((album) => (
            <motion.div variants={pageTransition}>
              <SingleArtistList key={album.id} album={album} />
            </motion.div>
          ))}
        </ArtistList>
      </motion.div>
    </div>
  );
}

export const query = graphql`
  query AlbumQuery($genre: [String]) {
    allAlbums: allSanityAlbums(
      filter: { genre: { elemMatch: { slug: { current: { in: $genre } } } } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

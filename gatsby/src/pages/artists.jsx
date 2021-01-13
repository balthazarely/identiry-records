import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion } from 'framer-motion';
import { pageTransition, TitleHover } from '../animations/animation';

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
  a {
    text-decoration: none;
  }
  .artist-image {
    height: 200px;
    border-radius: 10px;
    top: 0;
    position: absolute;
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

function SingleArtistList({ artist }) {
  const [overlay, setOverlay] = useState(true);
  function toggleOverlay() {
    setOverlay(!overlay);
  }
  return (
    <>
      <ArtistTile variants={TitleHover} whileHover="hover">
        <AniLink
          to={`/artists/${artist.slug.current}`}
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
            fluid={{ ...artist.image.asset.fluid, aspectRatio: 1 }}
            className="artist-image"
          />
        </AniLink>
      </ArtistTile>
      <ArtistName overlay={overlay}>{artist.name}</ArtistName>
    </>
  );
}

export default function artistList({ data }) {
  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
      style={{ overflow: 'hidden', margin: '0px 10px' }}
    >
      <PageTitle>ARTISTS</PageTitle>
      <ArtistList variants={pageTransition}>
        {data.allArtists.nodes.map((artist) => (
          <motion.div variants={pageTransition}>
            <SingleArtistList key={artist.id} artist={artist} />
          </motion.div>
        ))}
      </ArtistList>
    </motion.div>
  );
}

export const query = graphql`
  query ArtistQuery {
    allArtists: allSanityArtist(sort: { fields: name, order: ASC }) {
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

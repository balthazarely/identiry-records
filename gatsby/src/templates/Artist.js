import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { motion } from 'framer-motion';
import { artistPageTransition } from '../animations/animation';
import AnimateOnScroll from '../components/AnimateOnScroll';
import AlbumSlider from '../components/AlbumSlider';

const ArtistGrid = styled.div`
  margin: 0 auto;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 90;
  background: linear-gradient(
    0deg,
    rgba(26, 26, 26, 1) 21%,
    rgba(26, 26, 26, 0) 75%
  );
`;

const ArtistHeader = styled(motion.h1)`
  z-index: 100;

  text-transform: uppercase;
  position: absolute;
  bottom: 10%;
  margin-left: 10px;
`;

const ArtistInfomationWrapper = styled(motion.div)`
  margin: 0 auto;
  display: grid;
  max-width: 800px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  p {
    color: white;
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    padding: 10px;
  }
  div {
    margin: 0 auto;
    padding: 10px;
  }
`;

export default function SingleArtistPage({ data }) {
  console.log(data);
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <ArtistGrid>
        <div>
          <motion.div variants={artistPageTransition}>
            <BackgroundImage
              fluid={data.artist.image.asset.fluid}
              backgroundColor="#040e18"
              style={{ backgroundPosition: 'center top;' }}
              className="artist-cover-image"
            >
              <ArtistHeader variants={artistPageTransition}>
                {data.artist.name}
              </ArtistHeader>

              <Overlay />
            </BackgroundImage>
          </motion.div>
          <ArtistInfomationWrapper
            variants={artistPageTransition}
            style={{ color: 'white' }}
          >
            <p>{data.artist.bio}</p>
            <div>
              <iframe
                title="artist-playlist"
                src="https://open.spotify.com/embed/artist/2bqGPuC8kDCTLWieGOyWxu"
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </ArtistInfomationWrapper>

          <AnimateOnScroll>
            <AlbumSlider
              allAlbums={data.album.nodes}
              sectionTitle={`More by ${data.artist.name}`}
              routeTo="releases"
            />
          </AnimateOnScroll>
        </div>
      </ArtistGrid>
    </motion.div>
  );
}

export const query = graphql`
  query($slug: String!) {
    artist: sanityArtist(slug: { current: { eq: $slug } }) {
      name
      bio
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    album: allSanityAlbums(
      filter: { artist: { elemMatch: { slug: { current: { eq: $slug } } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

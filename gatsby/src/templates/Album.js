import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import MusicPlayer from '../components/MusicPlayer';
import { artistPageTransition } from '../animations/animation';
import { LowerPageContainer } from '../styles/pageElements';

const AlbumGrid = styled(motion.div)`
  margin: 100px 10px;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const AlbumDetails = styled(motion.div)`
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 5px;
    margin-top: 0px;
  }
  h2 {
    font-size: 26px;
    margin-bottom: 5px;
  }
  p {
    color: white;
    font-size: 12px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`;

const ArtistWrapper = styled(motion.div)`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  h6 {
    margin-left: 10px;
    font-weight: 300;
    font-size: 16px;
  }
`;

const MiniArtistImage = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const GenreName = styled(motion.div)`
  background: #ec4d37;
  color: white;
  font-family: Rubik;
  font-weight: 300;
  font-size: 12px;
  padding: 2px 5px;
  margin-right: 5px;
  display: inline-block;
  margin-bottom: 9px;
`;

const ImageWrapper = styled.div``;

export default function SingleAlbumPage({ data }) {
  console.log(data);
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <LowerPageContainer>
        <AlbumGrid variants={artistPageTransition}>
          <ImageWrapper>
            <Img
              fluid={data.album.image.asset.fluid}
              className="artist-image"
            />
          </ImageWrapper>
          <AlbumDetails variants={artistPageTransition}>
            <motion.h1>{data.album.name}</motion.h1>
            {data.album.genre.map((genre) => (
              <GenreName>{genre.name}</GenreName>
            ))}
            {data.album.artist.map((artist) => (
              <AniLink
                to={`/artists/${artist.slug.current}`}
                cover
                bg="#EA261A"
                duration={0.5}
                style={{ textDecoration: 'none' }}
              >
                <ArtistWrapper>
                  <MiniArtistImage>
                    <Img
                      style={{ height: '100%' }}
                      fluid={artist.image.asset.fluid}
                    />
                  </MiniArtistImage>
                  <h6>{artist.name}</h6>
                </ArtistWrapper>
              </AniLink>
            ))}

            <p>Released {data.album.releaseDate}</p>
            <MusicPlayer spotifyURL={data.album.spotifyURI} height="320" />
          </AlbumDetails>
        </AlbumGrid>
      </LowerPageContainer>
    </motion.div>
  );
}

export const query = graphql`
  query($slug: String!) {
    album: sanityAlbums(slug: { current: { eq: $slug } }) {
      name
      id
      spotifyURI
      genre {
        name
      }
      artist {
        id
        name
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
      releaseDate(formatString: "MMMM Do, YYYY")
      image {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

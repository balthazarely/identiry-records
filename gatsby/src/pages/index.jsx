import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/animation';
import AlbumSlider from '../components/AlbumSlider';
import { LowerPageContainer } from '../styles/PageElements';
import AnotherSlider from '../components/AnotherSlider';
import Welcome from '../components/Welcome';
import MailingList from '../components/MailingList';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  const allCovers = data.allCovers.nodes;
  const newReleases = data.newReleases.nodes;
  const melodicTechno = data.newMelodicTechno.nodes;
  const deepHouse = data.newDeepHouse.nodes;
  const trance = data.newTrance.nodes;
  const featuredArtists = data.featuredArtists.nodes;

  const myRef = useRef(null);

  return (
    <>
      <SEO title="Home" />

      <motion.div
        className="w-full"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageTransition}
      >
        <AnotherSlider allCovers={allCovers} />
        <LowerPageContainer ref={myRef}>
          <Welcome />
          <AlbumSlider
            allAlbums={featuredArtists}
            sectionTitle="Featured Artists"
            routeTo="artists"
            showSeeBtn
          />
          <AlbumSlider
            allAlbums={newReleases}
            sectionTitle="New Releases"
            routeTo="releases"
            showSeeBtn
          />
          <AlbumSlider
            allAlbums={melodicTechno}
            sectionTitle="New Melodic House and Techno"
            routeTo="releases"
            showSeeBtn
          />
          <AlbumSlider
            allAlbums={trance}
            sectionTitle="New Progressive Trance"
            routeTo="releases"
            showSeeBtn
          />
          <AlbumSlider
            allAlbums={deepHouse}
            sectionTitle="New Deep House"
            routeTo="releases"
            showSeeBtn
          />
        </LowerPageContainer>
        <MailingList />
      </motion.div>
    </>
  );
}

export const query = graphql`
  query TestQuery {
    allCovers: allSanityCovers {
      nodes {
        name
        id
        description
        release
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    newReleases: allSanityAlbums(
      sort: { order: DESC, fields: releaseDate }
      limit: 6
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        artist {
          name
        }
        genre {
          name
        }
        releaseDate(formatString: "YYYYMMDD")
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    newMelodicTechno: allSanityAlbums(
      filter: {
        genre: {
          elemMatch: { slug: { current: { eq: "melodic-house-and-techno" } } }
        }
      }
      sort: { fields: releaseDate, order: DESC }
      limit: 6
    ) {
      nodes {
        name
        id
        artist {
          name
        }
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
    newDeepHouse: allSanityAlbums(
      filter: {
        genre: { elemMatch: { slug: { current: { eq: "deep-house" } } } }
      }
      sort: { fields: releaseDate, order: DESC }
      limit: 6
    ) {
      nodes {
        name
        id
        artist {
          name
        }
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
    newTrance: allSanityAlbums(
      filter: {
        genre: {
          elemMatch: { slug: { current: { eq: "progressive-trance" } } }
        }
      }
      sort: { fields: releaseDate, order: DESC }
      limit: 6
    ) {
      nodes {
        name
        id
        artist {
          name
        }
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
    featuredArtists: allSanityArtist(filter: { featured: { eq: true } }) {
      nodes {
        name
        id
        featured
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

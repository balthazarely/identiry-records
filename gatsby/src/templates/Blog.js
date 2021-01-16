import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import MusicPlayer from '../components/MusicPlayer';
import { pageTransition } from '../animations/animation';
import { LowerPageContainerThin } from '../styles/PageElements';
import SEO from '../components/SEO';
import MailingList from '../components/MailingList';

const AlbumGrid = styled(motion.div)`
  margin: 100px 10px;
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0px 10px;
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

const BlogTitle = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DataContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Rubik;
  color: #c7c7c7;
  width: 100%;
  align-items: center;
  margin: 5px 0 10px 0;
  .date {
    font-weight: 300;
    font-size: 16px;
  }
  .category {
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    background: #ec4d37;
    color: white;
    padding: 2px 5px;
    letter-spacing: 1px;
    margin-top: 7px;
    font-weight: 500;
    /* margin-right: 10px; */
  }
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

const BlogPost = styled(motion.div)`
  .content {
    color: white;
  }
  .left-side {
    float: left;
    width: 50%;
    padding: 1%;
    margin: 0 20px 20px 0;
    @media (max-width: 768px) {
      float: none;
      width: 100%;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
  }
`;

export default function SingleAlbumPage({ data }) {
  return (
    <>
      <SEO title={`${data.album.title}`} />
      <motion.div initial="initial" animate="enter" exit="exit">
        <motion.div variants={pageTransition}>
          <LowerPageContainerThin>
            <BlogTitle variants={pageTransition}>
              <h1>{data.album.title}</h1>
            </BlogTitle>
            <DataContainer variants={pageTransition}>
              <motion.div className="date">{data.album.blogDate}</motion.div>
              <motion.div className="category">
                {data.album.category}
              </motion.div>
            </DataContainer>

            <BlogPost variants={pageTransition}>
              <Img
                fluid={data.album.image.asset.fluid}
                className="left-side artist-image"
              />
              <motion.p className="content">{data.album.post}</motion.p>
            </BlogPost>
          </LowerPageContainerThin>
          <MailingList />
        </motion.div>
      </motion.div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    album: sanityBlog(slug: { current: { eq: $slug } }) {
      title
      id
      category
      blogDate(formatString: "dddd MMMM Do, YYYY")
      post
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

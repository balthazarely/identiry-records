import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion } from 'framer-motion';
import { pageTransition, TitleHover } from '../animations/animation';
import { ViewButton } from '../styles/PageElements';
import MailingList from '../components/MailingList';
import SEO from '../components/SEO';

const ArtistList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
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
const BlogText = styled(motion.div)`
  font-family: Rubik;
  font-weight: 300;
  font-size: 14px;
  color: #cecece;
  margin-top: 10px;
`;

const DataContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Rubik;
  color: #c7c7c7;
  margin: 5px 0 10px 0;
  .date {
    font-weight: 300;
    font-size: 12px;
  }
  .category {
    font-weight: 300;
    font-size: 10px;
    text-transform: uppercase;
    background: #ec4d37;
    color: white;
    padding: 2px 5px;
    letter-spacing: 1px;
    font-weight: 500;
    margin-right: 10px;
  }
`;
const Rule = styled(motion.div)`
  background: #c7c7c7;
  width: 100%;
  height: 1px;
  margin: 20px 0;
`;

const ArtistName = styled.div`
  z-index: 50;
  text-decoration: none;
  opacity: 1;
  color: white;
  h3 {
    font-family: Rubik;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
  }
  a {
    text-decoration: none;
  }
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
  margin-top: 20px;
`;

const LowerPageContainerBlog = styled(motion.div)`
  max-width: 1100px;
  min-height: 80vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

function SingleArtistList({ artist }) {
  const [overlay, setOverlay] = useState(true);
  function toggleOverlay() {
    setOverlay(!overlay);
  }

  const formatPost = (text) => {
    const post = text.slice(0, 150);
    return `${post}...`;
  };

  return (
    <div>
      <SEO title="Blog" />
      <ArtistTile variants={TitleHover}>
        <AniLink
          to={`/blog/${artist.slug.current}`}
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
      <AniLink
        to={`/blog/${artist.slug.current}`}
        cover
        bg="#EC4D37"
        duration={0.5}
        style={{ textDecoration: 'none' }}
      >
        <ArtistName overlay={overlay}>
          <h3>{artist.title}</h3>
        </ArtistName>
      </AniLink>
      <DataContainer>
        <motion.div className="category" overlay={overlay}>
          {artist.category}
        </motion.div>
        <motion.div className="date" overlay={overlay}>
          {artist.blogDate}
        </motion.div>
      </DataContainer>
      <BlogText overlay={overlay}>{formatPost(artist.post)}</BlogText>
      <AniLink
        to={`/blog/${artist.slug.current}`}
        cover
        bg="#EC4D37"
        duration={0.5}
      >
        <ViewButton addMargin small>
          Read More
        </ViewButton>
      </AniLink>
      <Rule />
    </div>
  );
}

export default function artistList({ data }) {
  // Count Category
  const categoryTags = data.allBlogs.nodes.map((item) => item.category).flat();
  const categoryCounts = {};
  for (let i = 0; i < categoryTags.length; i++) {
    const num = categoryTags[i];
    categoryCounts[num] = categoryCounts[num] ? categoryCounts[num] + 1 : 1;
  }
  console.log(categoryCounts);

  return (
    <>
      <LowerPageContainerBlog>
        <motion.div
          className="w-full"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageTransition}
          style={{ overflow: 'hidden', margin: '0px 10px' }}
        >
          <PageTitle>Blog</PageTitle>
          <ArtistList variants={pageTransition}>
            {data.allBlogs.nodes.map((artist) => (
              <motion.div variants={pageTransition}>
                <SingleArtistList key={artist.id} artist={artist} />
              </motion.div>
            ))}
          </ArtistList>
        </motion.div>
      </LowerPageContainerBlog>

      <MailingList />
    </>
  );
}

export const query = graphql`
  query BlogQuery {
    allBlogs: allSanityBlog(sort: { fields: blogDate, order: DESC }) {
      nodes {
        title
        post
        blogDate(formatString: "dddd MMMM Do, YYYY")
        category
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

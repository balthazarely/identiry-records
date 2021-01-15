import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GenreContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 0;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const GenreItem = styled(motion.div)`
  color: white;
  background: transparent;
  font-size: 12px;
  font-family: Rubik;
  text-transform: uppercase;
  /* border: 1px solid white; */
  padding: 5px 8px;
  border-radius: 5px;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  &:hover {
    background: #d8d8d8;
    color: black;
  }
`;

const GenreLink = styled(Link)`
  text-decoration: none;
  margin: 2px;
`;

export default function GenreFilter({ location }) {
  const { allGenres } = useStaticQuery(graphql`
    query {
      allGenres: allSanityGenre {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  const pageLocation = location.pathname.split('/')[2];

  return (
    <GenreContainer>
      <GenreLink
        to="/releases"
        className={pageLocation === undefined ? 'active' : ''}
      >
        <GenreItem>All</GenreItem>
      </GenreLink>
      {allGenres.nodes.map((genre) => (
        <GenreLink
          key={genre.id}
          to={`/releases/${genre.slug.current}`}
          className={pageLocation === genre.slug.current ? 'active' : ''}
        >
          <GenreItem>{genre.name}</GenreItem>
        </GenreLink>
      ))}
    </GenreContainer>
  );
}

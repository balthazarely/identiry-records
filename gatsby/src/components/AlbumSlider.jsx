import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SliderContainer = styled(motion.div)`
  margin: 30px 10px;
  overflow-y: hidden;
`;

const TitleWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;
const Title = styled(motion.div)`
  color: white;
  margin-left: 0px;
`;

const ViewButton = styled(motion.button)`
  border: 1px solid white;
  border-radius: 20px;
  background: transparent;
  color: white;
  padding: 7px 15px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const AlbumList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* min-width: 500px; */
  gap: 1.5rem;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

const SectionTitle = styled(motion.h3)`
  background: #ec4d37;
  color: white;
  padding: 2px 5px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  @media (max-width: 768px) {
    padding: 2px 5px;
    font-size: 1.3rem;
    letter-spacing: 1px;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const SingleRelease = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  h4 {
    margin-top: 0.75rem;
    color: white;
    text-align: center;
    font-size: 1.4rem;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    padding: 5px;
    /* min-width: 200px; */
  }
`;

const ReleaseInfomation = styled(motion.div)`
  text-align: center;
  margin-top: 0.5rem;
  .artist {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
  .release {
    color: white;
    font-size: 14px;
    font-weight: 300;
  }
`;

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 300ms;
  /* opacity: ${({ overlay }) => (overlay ? '0.3' : '0')}; */
  z-index: 100;
  cursor: pointer;
`;
const containerAnimation = {
  initial: { y: 40, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.75,
      transition: { staggerChildren: 0.07, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  },
};

const titleAnimation = {
  initial: { x: -70, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: -70, opacity: 0 },
};

const textMotion = {
  rest: {
    color: 'grey',
    backgroundColor: 'rgba(0,0,0,0.2)',
    scale: 1,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    scale: 1.03,
    transition: {
      duration: 0.1,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export default function AlbumSlider({
  allAlbums,
  sectionTitle,
  routeTo,
  showSeeBtn,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else if (!inView) {
      controls.start('exit');
    }
  }, [controls, inView]);

  return (
    <SliderContainer>
      <motion.div
        ref={ref}
        animate={controls}
        initial="initial"
        variants={containerAnimation}
      >
        <TitleWrapper>
          <Title
            variants={titleAnimation}
            transition={{ type: 'spring', stiffness: 400, damping: 60 }}
          >
            <SectionTitle>{sectionTitle}</SectionTitle>
          </Title>
          {showSeeBtn && (
            <AniLink
              to={`/${routeTo}`}
              cover
              bg="#EC4D37"
              duration={0.5}
              style={{ textDecoration: 'none' }}
            >
              <ViewButton>See More</ViewButton>
            </AniLink>
          )}
        </TitleWrapper>

        <AlbumList variants={containerAnimation} key="ani">
          {allAlbums.map((release) => (
            <AniLink
              to={`/${routeTo}/${release.slug.current}`}
              cover
              top="exit"
              bg="#EC4D37"
              duration={0.4}
              style={{ textDecoration: 'none' }}
            >
              <AnimatePresence exitBeforeEnter>
                <SingleRelease variants={containerAnimation} key="ani">
                  <motion.div
                    variants={textMotion}
                    transition={{ type: 'spring', stiffness: 400, damping: 60 }}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <Overlay variants={textMotion} />
                    <Img
                      className="image"
                      fluid={{ ...release.image.asset.fluid, aspectRatio: 1 }}
                    />
                  </motion.div>
                </SingleRelease>
              </AnimatePresence>
              <ReleaseInfomation>
                <motion.h4 className="artist" variants={textMotion}>
                  {release.name}
                </motion.h4>
                {release.artist &&
                  release.artist.map((artist) => (
                    <motion.h4 className="release" key={artist}>
                      {artist.name}
                    </motion.h4>
                  ))}
              </ReleaseInfomation>
            </AniLink>
          ))}
        </AlbumList>
      </motion.div>
    </SliderContainer>
  );
}

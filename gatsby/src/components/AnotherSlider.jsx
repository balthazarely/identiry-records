import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const HeaderContainer = styled(motion.div)`
  height: 100%;
  position: relative;
`;

const HeadlineText = styled(motion.div)`
  padding: 10px 20px;
  /* overflow: hidden; */
  z-index: 1000;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(26, 26, 26, 0.5);
  text-align: left;
  text-transform: uppercase;
`;

const NewReleaseTag = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  /* transform: rotate(90deg) translate(50%, -50%); */
  z-index: 1000;
  background: #ec4d37;
  color: white;
  padding: 2px 5px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
`;

const albumAnimation = {
  initial: { y: 70, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, staggerChildren: 0.1 },
  },
  exit: { y: 70, opacity: 0 },
};
const lineAnimation = {
  initial: { width: 0, opacity: 1 },
  enter: {
    width: '100%',
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: { width: 0, opacity: 1 },
};

class AnotherSlider extends Component {
  render() {
    console.log(this.props);
    const { allCovers } = this.props;

    return (
      <HeaderContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          swipeable
          showArrows
          infiniteLoop
          className="carousel-wrapper"
          stopOnHover
          autoPlay
          transitionTime={750}
          interval={8000}
        >
          {allCovers
            .slice(0)
            .reverse()
            .map((certainCover) => (
              <div className="image-container">
                <NewReleaseTag>New Release</NewReleaseTag>

                <AniLink
                  // to={`/releases/${this.props.slug.current}`}
                  cover
                  top="exit"
                  bg="#EC4D37"
                  duration={0.4}
                  style={{ textDecoration: 'none' }}
                >
                  <BackgroundImage
                    Tag="section"
                    style={{
                      height: '100%',
                    }}
                    fluid={certainCover.image.asset.fluid}
                    backgroundColor="red"
                  />
                  <HeadlineText variants={albumAnimation}>
                    <motion.h1
                      variants={albumAnimation}
                      style={{ color: 'white' }}
                    >
                      {certainCover.name}
                    </motion.h1>
                    <motion.h3
                      variants={albumAnimation}
                      style={{ color: 'white' }}
                    >
                      {certainCover.release}
                    </motion.h3>
                  </HeadlineText>
                </AniLink>
              </div>
            ))}
        </Carousel>
      </HeaderContainer>
    );
  }
}

export default AnotherSlider;

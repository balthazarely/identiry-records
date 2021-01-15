import React, { useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import background from '../assets/images/techno-bg.jpg';

const MailingListContainer = styled(motion.div)`
  /* margin: 10px 10px; */
  width: 100%;

  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  color: white;
  font-family: Rubik;
  font-weight: 300;
  text-align: center;
  font-size: 1.6rem;
  background-image: linear-gradient(
      to bottom,
      rgba(26, 26, 26, 1) 10%,
      rgba(38, 38, 38, 0.75) 100%
    ),
    url(${background});
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    /* margin: 0px 10px; */
  }
`;

const ViewButton = styled(motion.button)`
  border: 1px solid white;
  border-radius: 20px;
  background: transparent;
  color: white;
  padding: 7px 15px;
  margin-top: 15px;
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

export default function MailingList() {
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
    <MailingListContainer>
      <motion.div
        className="text-container"
        ref={ref}
        animate={controls}
        initial="initial"
        variants={containerAnimation}
      >
        <motion.div className="question" variants={containerAnimation}>
          {' '}
          Join our mailing list
        </motion.div>
        <ViewButton variants={containerAnimation}> See More</ViewButton>
      </motion.div>
    </MailingListContainer>
  );
}

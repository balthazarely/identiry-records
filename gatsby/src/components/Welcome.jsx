import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MailingListContainer = styled(motion.div)`
  margin: 10px 10px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 40fr 60fr;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0px 10px;
  }
  .subcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    padding: 2rem;
    font-weight: 300;
    text-align: right;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  span {
    display: inline-block;
    font-weight: 800;
    font-size: 4rem;
    text-transform: uppercase;
    line-height: 3.5rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 2rem;
    @media (max-width: 768px) {
      font-size: 1.3rem;
      text-align: center;
    }
    /* margin: 10px; */
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  margin: 60px 0;
  overflow: hidden;
  height: 100%;
`;

const Rule = styled(motion.div)`
  width: 100%;
  height: 2px;
  background: #888888;
  overflow: hidden;
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

const lineAnimation = {
  initial: { scaleX: 0, opacity: 0 },
  enter: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      staggerChildren: 0.05,
      ease: 'easeInOut',
    },
  },
  exit: { scaleX: 0, opacity: 0 },
};

export default function Welcome() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else if (!inView) {
      // controls.start('exit');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      variants={containerAnimation}
    >
      <Container>
        <Rule variants={lineAnimation} />
        <MailingListContainer>
          <motion.div
            className="left subcontainer"
            ref={ref}
            animate={controls}
            initial="initial"
            variants={containerAnimation}
            style={{ overflow: 'hidden' }}
          >
            <motion.h1 variants={containerAnimation}>
              The sound of <span>Identity Records</span>
            </motion.h1>
          </motion.div>
          <motion.div
            className="right subcontainer"
            ref={ref}
            animate={controls}
            initial="initial"
            variants={containerAnimation}
          >
            <motion.h2 variants={containerAnimation}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </motion.h2>
          </motion.div>
        </MailingListContainer>
        <Rule variants={lineAnimation} />
      </Container>
    </motion.div>
  );
}

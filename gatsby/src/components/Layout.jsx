import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import NavMenu from './NavMenu';
import NavContext from './NavContext';

const SiteBorderStyles = styled(motion.div)`
  background-size: 1500px;
  overflow: hidden;
`;

const PageWrapper = styled.div`
  margin-top: 0px;
  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const ContentStyles = styled(motion.div)`
  margin: 0 auto;
`;

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useContext(NavContext);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  function toggleNavMenu() {
    setNavOpen(!navOpen);
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const variants = {
    hidden: {
      paddingLeft: windowSize.width < 768 ? 0 : 60,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      paddingLeft: 190,
      // paddingLeft: 60,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles
        animate={navOpen ? 'show' : 'hidden'}
        variants={variants}
        initial={false}
      >
        <ContentStyles>
          <NavMenu
            toggleNavMenu={toggleNavMenu}
            navOpen={navOpen}
            windowSize={windowSize}
          />

          <PageWrapper>{children}</PageWrapper>
        </ContentStyles>
        <Footer />
      </SiteBorderStyles>
    </>
  );
}

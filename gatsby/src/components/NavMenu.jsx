import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import {
  FaUserCircle,
  FaHeadphonesAlt,
  FaCompactDisc,
  FaHome,
  FaGithub,
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

const AppBar = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  background: black;
  z-index: 100;
  visibility: hidden;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    visibility: visible;
  }
`;
const MobileLogoWrapper = styled.div`
  font-family: Rubik;
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  .mobile-logo {
    height: 1rem;
    font-size: 1.75em;
  }
  .logo-title {
    margin-left: 10px;
    font-weight: 800;
    font-size: 20px;
  }
  .logo-subtitle {
    margin-left: 10px;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 6px;
  }
  a {
    text-decoration: none;
  }
`;

const MenuIcon = styled(motion.div)`
  position: absolute;
  right: 3rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 61;
  visibility: hidden;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    visibility: visible;
  }

  div {
    width: 3rem;
    height: 0.3rem;
    background: white;
    border-radius: 7px;
    position: relative;
    transform-origin: 1px;
    transition: opacity 150ms, transform 200ms;

    :first-child {
      transform: ${({ showNav }) =>
        showNav ? 'rotate(45deg)' : 'rotate(0deg)'};
    }
    :nth-child(2) {
      opacity: ${({ showNav }) => (showNav ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ showNav }) =>
        showNav ? 'rotate(-45deg)' : 'rotate(0deg)'};
    }
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  z-index: 60;
  overflow: hidden;
  cursor: pointer;
`;

const LinkWrapper = styled(motion.div)`
  position: absolute;
  top: 172px;
  width: 130px;
  left: 42px;
  height: 140px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  div {
    margin-left: 8px;
    height: 20px;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    a {
      color: #8d8d8d;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 14px;
      font-family: Rubik;
      font-weight: 800;
      &:hover {
        color: white;
      }
    }
  }
`;

const IconLinkWrapper = styled(motion.div)`
  position: absolute;
  top: 169px;
  left: 20px;
  height: 140px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;
`;

const LogoWrapper = styled(motion.div)`
  position: absolute;
  top: 25px;
  height: 40px;
  width: 57px;
  cursor: pointer;
`;

const LogoNameWrapper = styled(motion.div)`
  position: absolute;
  top: 25px;
  left: 59px;
  margin-left: 3px;
  height: 40px;
  width: 130px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  overflow: hidden;
  font-family: Rubik;
  .logo-title {
    font-weight: 800;
    font-size: 20px;
  }
  .logo-subtitle {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 6px;
  }
`;

const MainLogo = styled(motion.div)`
  color: white;
  cursor: pointer;
  width: 100%;
  height: 1rem;
  font-size: 2em;
  display: flex;
  justify-content: center;
`;

const LinkIcon = styled(motion.i)`
  color: #8d8d8d;
  height: 20px;
  cursor: pointer;
`;

const MyLinks = styled(motion.i)`
  position: absolute;
  bottom: 50px;
  height: 20px;
  cursor: pointer;
  left: 20px;
  a {
    color: #8d8d8d;
  }
`;

const MyLinkWrapper = styled(motion.div)`
  position: absolute;
  bottom: 48px;
  width: 130px;
  left: 42px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;
  div {
    margin-left: 8px;
    height: 20px;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    a {
      color: #8d8d8d;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 14px;
      font-family: Rubik;
      font-weight: 800;
      &:hover {
        color: white;
      }
    }
  }
`;

export default function NavMenu({ toggleNavMenu, navOpen, windowSize }) {
  const variants = {
    hidden: {
      width: windowSize.width < 768 ? 0 : 60,
      transition: {
        duration: 0.2,
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
    show: {
      width: windowSize.width > 768 ? 190 : '100vw',
      transition: {
        duration: 0.2,
        delayChildren: 0.12,
        staggerChildren: 0.03,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    show: { opacity: 1, x: '0px' },
  };

  return (
    <div>
      <AppBar>
        <Link
          onClick={
            windowSize.width < 768 && navOpen ? () => toggleNavMenu() : ''
          }
          to="/"
        >
          <MobileLogoWrapper style={{ color: 'white' }}>
            <div className="mobile-logo">
              <MdFingerprint
                style={{
                  color: '#EC4D37',
                }}
              />
            </div>
            <div>
              <motion.div className="logo-title">IDENTITY</motion.div>
              <motion.div className="logo-subtitle">RECORDS</motion.div>
            </div>
          </MobileLogoWrapper>
        </Link>

        <MenuIcon
          onClick={() => {
            toggleNavMenu();
            // setShowNav(!showNav);
          }}
          showNav={navOpen}
        >
          <div />
          <div />
          <div />
        </MenuIcon>
      </AppBar>
      <Nav
        initial={false}
        // showNav={navOpen}
        windowSize={windowSize.width}
        animate={navOpen ? 'show' : 'hidden'}
        variants={variants}
        onMouseEnter={windowSize.width > 768 ? () => toggleNavMenu() : null}
        onMouseLeave={windowSize.width > 768 ? () => toggleNavMenu() : null}
      >
        <Link
          onClick={windowSize.width < 768 ? () => toggleNavMenu() : ''}
          to="/"
        >
          <LogoWrapper>
            <MainLogo>
              <MdFingerprint
                style={
                  navOpen
                    ? { color: '#EC4D37', transition: '200ms' }
                    : { color: 'white', transition: '200ms' }
                }
              />
            </MainLogo>
          </LogoWrapper>
          <LogoNameWrapper>
            <motion.div variants={item} className="logo-title">
              IDENTITY
            </motion.div>
            <motion.div variants={item} className="logo-subtitle">
              RECORDS
            </motion.div>
          </LogoNameWrapper>
        </Link>
        <IconLinkWrapper>
          <LinkIcon>
            <FaHome className="icon" />
          </LinkIcon>
          <LinkIcon>
            <FaCompactDisc className="icon" />
          </LinkIcon>
          <LinkIcon>
            <FaUserCircle className="icon" />
          </LinkIcon>
          <LinkIcon>
            <FaHeadphonesAlt className="icon" />
          </LinkIcon>
        </IconLinkWrapper>

        <LinkWrapper>
          <motion.div variants={item}>
            <Link
              activeStyle={{
                color: 'white',
                fontWeight: 700,
              }}
              to="/"
              onClick={windowSize.width < 768 ? () => toggleNavMenu() : ''}
            >
              Home
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link
              activeStyle={{
                color: 'white',
                fontWeight: 700,
              }}
              onClick={windowSize.width < 768 ? () => toggleNavMenu() : ''}
              to="/releases"
            >
              Releases
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link
              onClick={windowSize.width < 768 ? () => toggleNavMenu() : ''}
              to="/artists"
              activeStyle={{
                color: 'white',
              }}
            >
              Artists
            </Link>
          </motion.div>
          <motion.div variants={item}>
            <Link
              onClick={windowSize.width < 768 ? () => toggleNavMenu() : ''}
              to="/blog"
            >
              Blog
            </Link>
          </motion.div>
        </LinkWrapper>
        <MyLinks>
          <a
            target="BLANK"
            href="https://github.com/balthazarely/identity-records"
          >
            <FaGithub className="icon" />
          </a>
        </MyLinks>
        <MyLinkWrapper>
          <motion.div variants={item}>
            <a
              target="BLANK"
              href="https://github.com/balthazarely/identity-records"
            >
              Github
            </a>
          </motion.div>
        </MyLinkWrapper>
      </Nav>
    </div>
  );
}

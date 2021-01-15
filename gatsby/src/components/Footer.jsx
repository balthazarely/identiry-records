import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { MdFingerprint } from 'react-icons/md';
import {
  SiInstagram,
  SiTwitter,
  SiTwitch,
  SiYoutube,
  SiSpotify,
} from 'react-icons/si';
import { pageTransition } from '../animations/animation';

const MyFooter = styled(motion.footer)`
  background: #262626;
  position: sticky;
  color: white;
  width: 100%;
  height: 130px;
  /* margin-top: 50px;   */
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    height: 300px;
  }
`;

const GridWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  .left-col {
    @media (max-width: 540px) {
      grid-row: 2;
    }
  }
  .right-col {
    @media (max-width: 540px) {
      grid-row: 1;
    }
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
`;

const Links = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px 15px;
  font-size: 10px;
  font-family: Rubik;
  font-weight: 300;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const Copyright = styled(motion.div)`
  font-size: 8px;
  font-family: Rubik;
  font-weight: 300;
  margin-top: 20px;
  text-align: center;
`;

const MobileLogoWrapper = styled.div`
  font-family: Rubik;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  /* margin-left: 10px; */
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
export default function Footer({}) {
  return (
    <MyFooter
      className="footer"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
    >
      <GridWrapper>
        <div className="right-col">
          <MobileLogoWrapper style={{ color: 'white' }}>
            <div className="mobile-logo">
              <MdFingerprint />
            </div>
            <div>
              <motion.div className="logo-title">IDENTITY</motion.div>
              <motion.div className="logo-subtitle">RECORDS</motion.div>
            </div>
          </MobileLogoWrapper>
          <Copyright>Copyright Identity Records 2021</Copyright>
        </div>
      </GridWrapper>
      <GridWrapper>
        <div className="left-col">
          <Links>
            <div>About</div>
            <div>Contact</div>
            <div>Jobs</div>
            <div>Privacy Policy</div>
            <div>Account</div>
            <div>FAQ</div>
          </Links>
          <IconWrapper>
            <SiInstagram />
            <SiTwitter />
            <SiTwitch />
            <SiYoutube />
            <SiSpotify />
          </IconWrapper>
        </div>
      </GridWrapper>
    </MyFooter>
  );
}

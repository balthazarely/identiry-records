import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageTitle = styled(motion.div)`
  font-family: Rubik;
  font-weight: 800;
  font-size: 28px;
  color: white;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const LowerPageContainer = styled(motion.div)`
  max-width: 1100px;
  min-height: 80vh;
  margin: 0 auto;
`;

export const LowerPageContainerThin = styled(motion.div)`
  max-width: 900px;
  min-height: 80vh;
  margin: 0 auto;
`;

export const ViewButton = styled(motion.button)`
  border: 1px solid white;
  border-radius: 20px;
  background: transparent;
  color: white;
  padding: 7px 15px;
  font-size: 12px;
  font-size: ${({ small }) => (small ? '10px' : '13px')};
  margin-top: ${({ addMargin }) => (addMargin ? '10px' : '0')};
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

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

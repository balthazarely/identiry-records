import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`

  html {
    color: var(--black);

  }
  p, li {
    letter-spacing: 0.5px;
    font-family: Rubik;
    font-weight: 300;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
    color: white;
    font-family: Rubik;
    font-weight: 300;
  }

  h1 {
    font-size: 56px;
    font-family: Rubik;
    font-weight: 800;
    @media (max-width: 1400px) {
      font-size: 48px;
    }
    @media (max-width: 1024px) {
      font-size: 40px;
    }
  }
  h2 {
    font-size: 36px;
    font-family: Rubik;
    font-weight: 300;
    @media (max-width: 1400px) {
      font-size: 30px;
    }
    @media (max-width: 1024px) {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;

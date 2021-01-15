import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --racingRed: #EA261A
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 10px;
  }
 
  body {
    font-size: 2rem;
    background: #1a1a1a;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  .mask1 {
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 25%);
    mask-image: linear-gradient(to top, transparent 0%, black 25%);
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .active-nav {
    color: white;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
  .active {
    background: #EC4D37;
    overflow: hidden;
    color: white;
    border-radius: 5px;
  }

  .carousel-blur {
}

.carousel-blur:after {
  content  : "";
  position : absolute;
  z-index  : 1;
  bottom   : 0;
  left     : 0;
  pointer-events: none;
  background-image : linear-gradient(to bottom,  rgba(26,26,26, 0),  rgba(26,26,26, 1) 80%);
  width    : 100%;
  height   : 13em;
}

.artist-cover-image {
  height: 600px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 400px;
  }
  
}
.album-cover-image {
  height: 600px;
  width: 100%;
  position: relative;
  background-position: center top;
  @media (max-width: 768px) {
    height: 400px;
  }
}

.carousel-wrapper,
.carousel,
.carousel > .slider-wrapper,
.carousel > .slider-wrapper > .slider {
  height: 100%;
}

.image-container {
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}



`;

export default GlobalStyles;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --red: #FF4949;\n    --black: #2E2E2E;\n    --yellow: #ffc600;\n    --white: #fff;\n    --grey: #efefef;\n    --racingRed: #EA261A\n  }\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 10px;\n  }\n \n  body {\n    font-size: 2rem;\n    background: #1a1a1a;\n  }\n\n  fieldset {\n    border-color: rgba(0,0,0,0.1);\n    border-width: 1px;\n  }\n\n  .gatsby-image-wrapper img[src*=base64\\,] {\n    image-rendering: -moz-crisp-edges;\n    image-rendering: pixelated;\n  }\n\n  .mask1 {\n    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 25%);\n    mask-image: linear-gradient(to top, transparent 0%, black 25%);\n  }\n\n  /* Scrollbar Styles */\n  body::-webkit-scrollbar {\n    width: 12px;\n  }\n  html {\n    scrollbar-width: thin;\n    scrollbar-color: var(--red) var(--white);\n  }\n  body::-webkit-scrollbar-track {\n    background: var(--white);\n  }\n  body::-webkit-scrollbar-thumb {\n    background-color: var(--red) ;\n    border-radius: 6px;\n    border: 3px solid var(--white);\n  }\n\n  hr {\n    border: 0;\n    height: 8px;\n    background-size: 1500px;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .active-nav {\n    color: white;\n  }\n\n  .tilt {\n    transform: rotate(-2deg);\n    position: relative;\n    display: inline-block;\n  }\n  .active {\n    background: #EC4D37;\n    overflow: hidden;\n    color: white;\n  }\n\n  .carousel-blur {\n}\n\n.carousel-blur:after {\n  content  : \"\";\n  position : absolute;\n  z-index  : 1;\n  bottom   : 0;\n  left     : 0;\n  pointer-events: none;\n  background-image : linear-gradient(to bottom,  rgba(26,26,26, 0),  rgba(26,26,26, 1) 80%);\n  width    : 100%;\n  height   : 13em;\n}\n\n.artist-cover-image {\n  height: 600px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 768px) {\n    height: 400px;\n  }\n  \n}\n.album-cover-image {\n  height: 600px;\n  width: 100%;\n  position: relative;\n  background-position: center top;\n  @media (max-width: 768px) {\n    height: 400px;\n  }\n}\n\n.carousel-wrapper,\n.carousel,\n.carousel > .slider-wrapper,\n.carousel > .slider-wrapper > .slider {\n  height: 100%;\n}\n\n.image-container {\n  height: 60vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n\n\n"], ["\n  :root {\n    --red: #FF4949;\n    --black: #2E2E2E;\n    --yellow: #ffc600;\n    --white: #fff;\n    --grey: #efefef;\n    --racingRed: #EA261A\n  }\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 10px;\n  }\n \n  body {\n    font-size: 2rem;\n    background: #1a1a1a;\n  }\n\n  fieldset {\n    border-color: rgba(0,0,0,0.1);\n    border-width: 1px;\n  }\n\n  .gatsby-image-wrapper img[src*=base64\\\\,] {\n    image-rendering: -moz-crisp-edges;\n    image-rendering: pixelated;\n  }\n\n  .mask1 {\n    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 25%);\n    mask-image: linear-gradient(to top, transparent 0%, black 25%);\n  }\n\n  /* Scrollbar Styles */\n  body::-webkit-scrollbar {\n    width: 12px;\n  }\n  html {\n    scrollbar-width: thin;\n    scrollbar-color: var(--red) var(--white);\n  }\n  body::-webkit-scrollbar-track {\n    background: var(--white);\n  }\n  body::-webkit-scrollbar-thumb {\n    background-color: var(--red) ;\n    border-radius: 6px;\n    border: 3px solid var(--white);\n  }\n\n  hr {\n    border: 0;\n    height: 8px;\n    background-size: 1500px;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  .active-nav {\n    color: white;\n  }\n\n  .tilt {\n    transform: rotate(-2deg);\n    position: relative;\n    display: inline-block;\n  }\n  .active {\n    background: #EC4D37;\n    overflow: hidden;\n    color: white;\n  }\n\n  .carousel-blur {\n}\n\n.carousel-blur:after {\n  content  : \"\";\n  position : absolute;\n  z-index  : 1;\n  bottom   : 0;\n  left     : 0;\n  pointer-events: none;\n  background-image : linear-gradient(to bottom,  rgba(26,26,26, 0),  rgba(26,26,26, 1) 80%);\n  width    : 100%;\n  height   : 13em;\n}\n\n.artist-cover-image {\n  height: 600px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 768px) {\n    height: 400px;\n  }\n  \n}\n.album-cover-image {\n  height: 600px;\n  width: 100%;\n  position: relative;\n  background-position: center top;\n  @media (max-width: 768px) {\n    height: 400px;\n  }\n}\n\n.carousel-wrapper,\n.carousel,\n.carousel > .slider-wrapper,\n.carousel > .slider-wrapper > .slider {\n  height: 100%;\n}\n\n.image-container {\n  height: 60vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyles;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  html {\n    color: var(--black);\n\n  }\n  p, li {\n    letter-spacing: 0.5px;\n    font-family: Rubik;\n    font-weight: 300;\n  }\n  h1,h2,h3,h4,h5,h6 {\n    font-weight: normal;\n    margin: 0;\n    color: white;\n    font-family: Rubik;\n    font-weight: 300;\n  }\n\n  h1 {\n    font-size: 56px;\n    font-family: Rubik;\n    font-weight: 800;\n    @media (max-width: 1400px) {\n      font-size: 48px;\n    }\n    @media (max-width: 1024px) {\n      font-size: 40px;\n    }\n  }\n  h2 {\n    font-size: 36px;\n    font-family: Rubik;\n    font-weight: 300;\n    @media (max-width: 1400px) {\n      font-size: 30px;\n    }\n    @media (max-width: 1024px) {\n      font-size: 24px;\n    }\n  }\n\n  h3 {\n    font-size: 20px;\n    @media (max-width: 768px) {\n      font-size: 16px;\n    }\n  }\n  \n  a {\n    color: var(--black);\n    text-decoration-color: var(--red);\n    text-decoration-skip-ink: none;\n  }\n  mark, .mark {\n    background: var(--yellow);\n    padding: 0 2px 2px 2px;\n    margin: 0;\n    display: inline;\n    line-height: 1;\n  }\n\n  .center {\n    text-align: center;\n  }\n\n  .tilt {\n    transform: rotate(-2deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Typography = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = Typography;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewButton = exports.LowerPageContainerThin = exports.LowerPageContainer = exports.PageTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _framerMotion = require("framer-motion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid white;\n  border-radius: 20px;\n  background: transparent;\n  color: white;\n  padding: 7px 15px;\n  font-size: 12px;\n  font-size: ", ";\n  margin-top: ", ";\n  cursor: pointer;\n  &:hover {\n    background: white;\n    color: black;\n    cursor: pointer;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 900px;\n  min-height: 80vh;\n  margin: 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1100px;\n  min-height: 80vh;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Rubik;\n  font-weight: 800;\n  font-size: 28px;\n  color: white;\n  margin-bottom: 10px;\n  margin-left: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageTitle = (0, _styledComponents["default"])(_framerMotion.motion.div)(_templateObject());
exports.PageTitle = PageTitle;
var LowerPageContainer = (0, _styledComponents["default"])(_framerMotion.motion.div)(_templateObject2());
exports.LowerPageContainer = LowerPageContainer;
var LowerPageContainerThin = (0, _styledComponents["default"])(_framerMotion.motion.div)(_templateObject3());
exports.LowerPageContainerThin = LowerPageContainerThin;
var ViewButton = (0, _styledComponents["default"])(_framerMotion.motion.button)(_templateObject4(), function (_ref) {
  var small = _ref.small;
  return small ? '10px' : '13px';
}, function (_ref2) {
  var addMargin = _ref2.addMargin;
  return addMargin ? '10px' : '0';
});
exports.ViewButton = ViewButton;
"use strict";

exports.handler = function _callee(event, context) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(event);
          return _context.abrupt("return", {
            statusCode: 200,
            body: 'Hello!!'
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};
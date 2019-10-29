'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _sortBy2 = require('lodash/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _sortedUniqBy2 = require('lodash/sortedUniqBy');

var _sortedUniqBy3 = _interopRequireDefault(_sortedUniqBy2);

var _flatten2 = require('lodash/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

var fetchDestinationForWriteKey = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(writeKey) {
    var res, destinations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, destination;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicFetch2.default)('https://cdn.segment.com/v1/projects/' + writeKey + '/integrations');

          case 2:
            res = _context.sent;

            if (res.ok) {
              _context.next = 5;
              break;
            }

            throw new Error('Failed to fetch integrations for write key ' + writeKey + ': HTTP ' + res.status + ' ' + res.statusText);

          case 5:
            _context.next = 7;
            return res.json();

          case 7:
            destinations = _context.sent;


            // Rename creationName to id to abstract the weird data model
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 11;
            for (_iterator = (0, _getIterator3.default)(destinations); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              destination = _step.value;

              destination.id = destination.creationName;
              delete destination.creationName;
            }

            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 19:
            _context.prev = 19;
            _context.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 22:
            _context.prev = 22;

            if (!_didIteratorError) {
              _context.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context.finish(22);

          case 26:
            return _context.finish(19);

          case 27:
            return _context.abrupt('return', destinations);

          case 28:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[11, 15, 19, 27], [20,, 22, 26]]);
  }));

  return function fetchDestinationForWriteKey(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(writeKeys) {
    var destinationsRequests, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, writeKey, destinations;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            destinationsRequests = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 4;

            for (_iterator2 = (0, _getIterator3.default)(writeKeys); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              writeKey = _step2.value;

              destinationsRequests.push(fetchDestinationForWriteKey(writeKey));
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](4);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 12:
            _context2.prev = 12;
            _context2.prev = 13;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 15:
            _context2.prev = 15;

            if (!_didIteratorError2) {
              _context2.next = 18;
              break;
            }

            throw _iteratorError2;

          case 18:
            return _context2.finish(15);

          case 19:
            return _context2.finish(12);

          case 20:
            _context2.t1 = _flatten3.default;
            _context2.next = 23;
            return _promise2.default.all(destinationsRequests);

          case 23:
            _context2.t2 = _context2.sent;
            destinations = (0, _context2.t1)(_context2.t2);

            // Remove the dummy Repeater destination
            destinations = destinations.filter(function (d) {
              return d.id !== 'Repeater';
            });
            destinations = (0, _sortBy3.default)(destinations, ['id']);
            destinations = (0, _sortedUniqBy3.default)(destinations, 'id');

            return _context2.abrupt('return', destinations);

          case 29:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 8, 12, 20], [13,, 15, 19]]);
  }));

  function fetchDestinations(_x2) {
    return _ref2.apply(this, arguments);
  }

  return fetchDestinations;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9mZXRjaC1kZXN0aW5hdGlvbnMuanMiXSwibmFtZXMiOlsid3JpdGVLZXkiLCJyZXMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImpzb24iLCJkZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbiIsImlkIiwiY3JlYXRpb25OYW1lIiwiZmV0Y2hEZXN0aW5hdGlvbkZvcldyaXRlS2V5Iiwid3JpdGVLZXlzIiwiZGVzdGluYXRpb25zUmVxdWVzdHMiLCJwdXNoIiwiYWxsIiwiZmlsdGVyIiwiZCIsImZldGNoRGVzdGluYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzRkFHQSxpQkFBMkNBLFFBQTNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNvQix3RUFDdUJBLFFBRHZCLG1CQURwQjs7QUFBQTtBQUNRQyxlQURSOztBQUFBLGdCQUtPQSxJQUFJQyxFQUxYO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQU1VLElBQUlDLEtBQUosaURBQzBDSCxRQUQxQyxlQUVGQyxJQUFJRyxNQUZGLFNBR0FILElBQUlJLFVBSEosQ0FOVjs7QUFBQTtBQUFBO0FBQUEsbUJBYTZCSixJQUFJSyxJQUFKLEVBYjdCOztBQUFBO0FBYVFDLHdCQWJSOzs7QUFlRTtBQWZGO0FBQUE7QUFBQTtBQUFBO0FBZ0JFLHdEQUEwQkEsWUFBMUIscUdBQXdDO0FBQTdCQyx5QkFBNkI7O0FBQ3RDQSwwQkFBWUMsRUFBWixHQUFpQkQsWUFBWUUsWUFBN0I7QUFDQSxxQkFBT0YsWUFBWUUsWUFBbkI7QUFDRDs7QUFuQkg7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSw2Q0FxQlNILFlBckJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlSSwyQjs7Ozs7QUFIZjs7Ozs7Ozt1RkEyQmUsa0JBQWlDQyxTQUFqQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLGdDQURPLEdBQ2dCLEVBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWIseURBQXVCRCxTQUF2Qix5R0FBa0M7QUFBdkJaLHNCQUF1Qjs7QUFDaENhLG1DQUFxQkMsSUFBckIsQ0FBMEJILDRCQUE0QlgsUUFBNUIsQ0FBMUI7QUFDRDs7QUFKWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFNb0Isa0JBQVFlLEdBQVIsQ0FBWUYsb0JBQVosQ0FOcEI7O0FBQUE7QUFBQTtBQU1UTix3QkFOUzs7QUFPYjtBQUNBQSwyQkFBZUEsYUFBYVMsTUFBYixDQUFvQjtBQUFBLHFCQUFLQyxFQUFFUixFQUFGLEtBQVMsVUFBZDtBQUFBLGFBQXBCLENBQWY7QUFDQUYsMkJBQWUsc0JBQU9BLFlBQVAsRUFBcUIsQ0FBQyxJQUFELENBQXJCLENBQWY7QUFDQUEsMkJBQWUsNEJBQWFBLFlBQWIsRUFBMkIsSUFBM0IsQ0FBZjs7QUFWYSw4Q0FZTkEsWUFaTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlVyxpQjs7OztTQUFBQSxpQiIsImZpbGUiOiJmZXRjaC1kZXN0aW5hdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCB7ZmxhdHRlbiwgc29ydGVkVW5pcUJ5LCBzb3J0Qnl9IGZyb20gJ2xvZGFzaCdcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEZXN0aW5hdGlvbkZvcldyaXRlS2V5KHdyaXRlS2V5KSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2Nkbi5zZWdtZW50LmNvbS92MS9wcm9qZWN0cy8ke3dyaXRlS2V5fS9pbnRlZ3JhdGlvbnNgXG4gIClcblxuICBpZiAoIXJlcy5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBGYWlsZWQgdG8gZmV0Y2ggaW50ZWdyYXRpb25zIGZvciB3cml0ZSBrZXkgJHt3cml0ZUtleX06IEhUVFAgJHtcbiAgICAgICAgcmVzLnN0YXR1c1xuICAgICAgfSAke3Jlcy5zdGF0dXNUZXh0fWBcbiAgICApXG4gIH1cblxuICBjb25zdCBkZXN0aW5hdGlvbnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gUmVuYW1lIGNyZWF0aW9uTmFtZSB0byBpZCB0byBhYnN0cmFjdCB0aGUgd2VpcmQgZGF0YSBtb2RlbFxuICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgIGRlc3RpbmF0aW9uLmlkID0gZGVzdGluYXRpb24uY3JlYXRpb25OYW1lXG4gICAgZGVsZXRlIGRlc3RpbmF0aW9uLmNyZWF0aW9uTmFtZVxuICB9XG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaERlc3RpbmF0aW9ucyh3cml0ZUtleXMpIHtcbiAgY29uc3QgZGVzdGluYXRpb25zUmVxdWVzdHMgPSBbXVxuICBmb3IgKGNvbnN0IHdyaXRlS2V5IG9mIHdyaXRlS2V5cykge1xuICAgIGRlc3RpbmF0aW9uc1JlcXVlc3RzLnB1c2goZmV0Y2hEZXN0aW5hdGlvbkZvcldyaXRlS2V5KHdyaXRlS2V5KSlcbiAgfVxuXG4gIGxldCBkZXN0aW5hdGlvbnMgPSBmbGF0dGVuKGF3YWl0IFByb21pc2UuYWxsKGRlc3RpbmF0aW9uc1JlcXVlc3RzKSlcbiAgLy8gUmVtb3ZlIHRoZSBkdW1teSBSZXBlYXRlciBkZXN0aW5hdGlvblxuICBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnMuZmlsdGVyKGQgPT4gZC5pZCAhPT0gJ1JlcGVhdGVyJylcbiAgZGVzdGluYXRpb25zID0gc29ydEJ5KGRlc3RpbmF0aW9ucywgWydpZCddKVxuICBkZXN0aW5hdGlvbnMgPSBzb3J0ZWRVbmlxQnkoZGVzdGluYXRpb25zLCAnaWQnKVxuXG4gIHJldHVybiBkZXN0aW5hdGlvbnNcbn1cbiJdfQ==
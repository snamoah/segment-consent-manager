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
    var res, destinations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, destination, name;

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

              /**
               * Impact Radius is now Impact on Segment.. maybe this is why
               * the requests are failing. So we'll change the name here and test
               * to see if this works
               */
              name = destination.creationName;

              destination.id = name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9mZXRjaC1kZXN0aW5hdGlvbnMuanMiXSwibmFtZXMiOlsid3JpdGVLZXkiLCJyZXMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImpzb24iLCJkZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbiIsIm5hbWUiLCJjcmVhdGlvbk5hbWUiLCJpZCIsImZldGNoRGVzdGluYXRpb25Gb3JXcml0ZUtleSIsIndyaXRlS2V5cyIsImRlc3RpbmF0aW9uc1JlcXVlc3RzIiwicHVzaCIsImFsbCIsImZpbHRlciIsImQiLCJmZXRjaERlc3RpbmF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0ZBR0EsaUJBQTJDQSxRQUEzQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDb0Isd0VBQ3VCQSxRQUR2QixtQkFEcEI7O0FBQUE7QUFDUUMsZUFEUjs7QUFBQSxnQkFLT0EsSUFBSUMsRUFMWDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFNVSxJQUFJQyxLQUFKLGlEQUMwQ0gsUUFEMUMsZUFFRkMsSUFBSUcsTUFGRixTQUdBSCxJQUFJSSxVQUhKLENBTlY7O0FBQUE7QUFBQTtBQUFBLG1CQWE2QkosSUFBSUssSUFBSixFQWI3Qjs7QUFBQTtBQWFRQyx3QkFiUjs7O0FBZUU7QUFmRjtBQUFBO0FBQUE7QUFBQTtBQWdCRSx3REFBMEJBLFlBQTFCLHFHQUF3QztBQUE3QkMseUJBQTZCOztBQUN0Qzs7Ozs7QUFLTUMsa0JBTmdDLEdBTXpCRCxZQUFZRSxZQU5hOztBQU90Q0YsMEJBQVlHLEVBQVosR0FBaUJGLElBQWpCO0FBQ0EscUJBQU9ELFlBQVlFLFlBQW5CO0FBQ0Q7O0FBekJIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkNBMkJTSCxZQTNCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZUssMkI7Ozs7O0FBSGY7Ozs7Ozs7dUZBaUNlLGtCQUFpQ0MsU0FBakM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNQQyxnQ0FETyxHQUNnQixFQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUViLHlEQUF1QkQsU0FBdkIseUdBQWtDO0FBQXZCYixzQkFBdUI7O0FBQ2hDYyxtQ0FBcUJDLElBQXJCLENBQTBCSCw0QkFBNEJaLFFBQTVCLENBQTFCO0FBQ0Q7O0FBSlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTW9CLGtCQUFRZ0IsR0FBUixDQUFZRixvQkFBWixDQU5wQjs7QUFBQTtBQUFBO0FBTVRQLHdCQU5TOztBQU9iO0FBQ0FBLDJCQUFlQSxhQUFhVSxNQUFiLENBQW9CO0FBQUEscUJBQUtDLEVBQUVQLEVBQUYsS0FBUyxVQUFkO0FBQUEsYUFBcEIsQ0FBZjtBQUNBSiwyQkFBZSxzQkFBT0EsWUFBUCxFQUFxQixDQUFDLElBQUQsQ0FBckIsQ0FBZjtBQUNBQSwyQkFBZSw0QkFBYUEsWUFBYixFQUEyQixJQUEzQixDQUFmOztBQVZhLDhDQVlOQSxZQVpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O1dBQWVZLGlCOzs7O1NBQUFBLGlCIiwiZmlsZSI6ImZldGNoLWRlc3RpbmF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IHtmbGF0dGVuLCBzb3J0ZWRVbmlxQnksIHNvcnRCeX0gZnJvbSAnbG9kYXNoJ1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERlc3RpbmF0aW9uRm9yV3JpdGVLZXkod3JpdGVLZXkpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vY2RuLnNlZ21lbnQuY29tL3YxL3Byb2plY3RzLyR7d3JpdGVLZXl9L2ludGVncmF0aW9uc2BcbiAgKVxuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEZhaWxlZCB0byBmZXRjaCBpbnRlZ3JhdGlvbnMgZm9yIHdyaXRlIGtleSAke3dyaXRlS2V5fTogSFRUUCAke1xuICAgICAgICByZXMuc3RhdHVzXG4gICAgICB9ICR7cmVzLnN0YXR1c1RleHR9YFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRlc3RpbmF0aW9ucyA9IGF3YWl0IHJlcy5qc29uKClcblxuICAvLyBSZW5hbWUgY3JlYXRpb25OYW1lIHRvIGlkIHRvIGFic3RyYWN0IHRoZSB3ZWlyZCBkYXRhIG1vZGVsXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgLyoqXG4gICAgICogSW1wYWN0IFJhZGl1cyBpcyBub3cgSW1wYWN0IG9uIFNlZ21lbnQuLiBtYXliZSB0aGlzIGlzIHdoeVxuICAgICAqIHRoZSByZXF1ZXN0cyBhcmUgZmFpbGluZy4gU28gd2UnbGwgY2hhbmdlIHRoZSBuYW1lIGhlcmUgYW5kIHRlc3RcbiAgICAgKiB0byBzZWUgaWYgdGhpcyB3b3Jrc1xuICAgICAqL1xuICAgIGNvbnN0IG5hbWUgPSBkZXN0aW5hdGlvbi5jcmVhdGlvbk5hbWVcbiAgICBkZXN0aW5hdGlvbi5pZCA9IG5hbWVcbiAgICBkZWxldGUgZGVzdGluYXRpb24uY3JlYXRpb25OYW1lXG4gIH1cblxuICByZXR1cm4gZGVzdGluYXRpb25zXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGVzdGluYXRpb25zKHdyaXRlS2V5cykge1xuICBjb25zdCBkZXN0aW5hdGlvbnNSZXF1ZXN0cyA9IFtdXG4gIGZvciAoY29uc3Qgd3JpdGVLZXkgb2Ygd3JpdGVLZXlzKSB7XG4gICAgZGVzdGluYXRpb25zUmVxdWVzdHMucHVzaChmZXRjaERlc3RpbmF0aW9uRm9yV3JpdGVLZXkod3JpdGVLZXkpKVxuICB9XG5cbiAgbGV0IGRlc3RpbmF0aW9ucyA9IGZsYXR0ZW4oYXdhaXQgUHJvbWlzZS5hbGwoZGVzdGluYXRpb25zUmVxdWVzdHMpKVxuICAvLyBSZW1vdmUgdGhlIGR1bW15IFJlcGVhdGVyIGRlc3RpbmF0aW9uXG4gIGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucy5maWx0ZXIoZCA9PiBkLmlkICE9PSAnUmVwZWF0ZXInKVxuICBkZXN0aW5hdGlvbnMgPSBzb3J0QnkoZGVzdGluYXRpb25zLCBbJ2lkJ10pXG4gIGRlc3RpbmF0aW9ucyA9IHNvcnRlZFVuaXFCeShkZXN0aW5hdGlvbnMsICdpZCcpXG5cbiAgcmV0dXJuIGRlc3RpbmF0aW9uc1xufVxuIl19
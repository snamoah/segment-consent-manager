'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = conditionallyLoadAnalytics;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function conditionallyLoadAnalytics(_ref) {
  var writeKey = _ref.writeKey,
      destinations = _ref.destinations,
      destinationPreferences = _ref.destinationPreferences,
      isConsentRequired = _ref.isConsentRequired,
      _ref$shouldReload = _ref.shouldReload,
      shouldReload = _ref$shouldReload === undefined ? true : _ref$shouldReload;

  var integrations = { All: false, 'Segment.io': true };
  var isAnythingEnabled = false;

  if (!destinationPreferences) {
    if (isConsentRequired) {
      return;
    }

    // Load a.js normally when consent isn't required and there's no preferences
    if (!window.analytics.initialized) {
      window.analytics.load(writeKey);
    }
    return;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(destinations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var destination = _step.value;

      var isEnabled = Boolean(destinationPreferences[destination.id]);
      if (isEnabled) {
        isAnythingEnabled = true;
      }
      integrations[destination.id] = isEnabled;
    }

    // Reload the page if the trackers have already been initialised so that
    // the user's new preferences can take affect
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (window.analytics.initialized) {
    if (shouldReload) {
      window.location.reload();
    }
    return;
  }

  // Don't load a.js at all if nothing has been enabled
  if (isAnythingEnabled) {
    window.analytics.load(writeKey, { integrations: integrations });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9hbmFseXRpY3MuanMiXSwibmFtZXMiOlsiY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3MiLCJ3cml0ZUtleSIsImRlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uUHJlZmVyZW5jZXMiLCJpc0NvbnNlbnRSZXF1aXJlZCIsInNob3VsZFJlbG9hZCIsImludGVncmF0aW9ucyIsIkFsbCIsImlzQW55dGhpbmdFbmFibGVkIiwid2luZG93IiwiYW5hbHl0aWNzIiwiaW5pdGlhbGl6ZWQiLCJsb2FkIiwiZGVzdGluYXRpb24iLCJpc0VuYWJsZWQiLCJCb29sZWFuIiwiaWQiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFBd0JBLDBCOzs7O0FBQVQsU0FBU0EsMEJBQVQsT0FNWjtBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLFlBSUMsUUFKREEsWUFJQztBQUFBLE1BSERDLHNCQUdDLFFBSERBLHNCQUdDO0FBQUEsTUFGREMsaUJBRUMsUUFGREEsaUJBRUM7QUFBQSwrQkFEREMsWUFDQztBQUFBLE1BRERBLFlBQ0MscUNBRGMsSUFDZDs7QUFDRCxNQUFNQyxlQUFlLEVBQUNDLEtBQUssS0FBTixFQUFhLGNBQWMsSUFBM0IsRUFBckI7QUFDQSxNQUFJQyxvQkFBb0IsS0FBeEI7O0FBRUEsTUFBSSxDQUFDTCxzQkFBTCxFQUE2QjtBQUMzQixRQUFJQyxpQkFBSixFQUF1QjtBQUNyQjtBQUNEOztBQUVEO0FBQ0EsUUFBSSxDQUFDSyxPQUFPQyxTQUFQLENBQWlCQyxXQUF0QixFQUFtQztBQUNqQ0YsYUFBT0MsU0FBUCxDQUFpQkUsSUFBakIsQ0FBc0JYLFFBQXRCO0FBQ0Q7QUFDRDtBQUNEOztBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQWdCRCxvREFBMEJDLFlBQTFCLDRHQUF3QztBQUFBLFVBQTdCVyxXQUE2Qjs7QUFDdEMsVUFBTUMsWUFBWUMsUUFBUVosdUJBQXVCVSxZQUFZRyxFQUFuQyxDQUFSLENBQWxCO0FBQ0EsVUFBSUYsU0FBSixFQUFlO0FBQ2JOLDRCQUFvQixJQUFwQjtBQUNEO0FBQ0RGLG1CQUFhTyxZQUFZRyxFQUF6QixJQUErQkYsU0FBL0I7QUFDRDs7QUFFRDtBQUNBO0FBekJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMEJELE1BQUlMLE9BQU9DLFNBQVAsQ0FBaUJDLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQUlOLFlBQUosRUFBa0I7QUFDaEJJLGFBQU9RLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0Q7QUFDRDtBQUNEOztBQUVEO0FBQ0EsTUFBSVYsaUJBQUosRUFBdUI7QUFDckJDLFdBQU9DLFNBQVAsQ0FBaUJFLElBQWpCLENBQXNCWCxRQUF0QixFQUFnQyxFQUFDSywwQkFBRCxFQUFoQztBQUNEO0FBQ0YiLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICB3cml0ZUtleSxcbiAgZGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgc2hvdWxkUmVsb2FkID0gdHJ1ZVxufSkge1xuICBjb25zdCBpbnRlZ3JhdGlvbnMgPSB7QWxsOiBmYWxzZSwgJ1NlZ21lbnQuaW8nOiB0cnVlfVxuICBsZXQgaXNBbnl0aGluZ0VuYWJsZWQgPSBmYWxzZVxuXG4gIGlmICghZGVzdGluYXRpb25QcmVmZXJlbmNlcykge1xuICAgIGlmIChpc0NvbnNlbnRSZXF1aXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTG9hZCBhLmpzIG5vcm1hbGx5IHdoZW4gY29uc2VudCBpc24ndCByZXF1aXJlZCBhbmQgdGhlcmUncyBubyBwcmVmZXJlbmNlc1xuICAgIGlmICghd2luZG93LmFuYWx5dGljcy5pbml0aWFsaXplZCkge1xuICAgICAgd2luZG93LmFuYWx5dGljcy5sb2FkKHdyaXRlS2V5KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgaXNFbmFibGVkID0gQm9vbGVhbihkZXN0aW5hdGlvblByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSlcbiAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICBpc0FueXRoaW5nRW5hYmxlZCA9IHRydWVcbiAgICB9XG4gICAgaW50ZWdyYXRpb25zW2Rlc3RpbmF0aW9uLmlkXSA9IGlzRW5hYmxlZFxuICB9XG5cbiAgLy8gUmVsb2FkIHRoZSBwYWdlIGlmIHRoZSB0cmFja2VycyBoYXZlIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCBzbyB0aGF0XG4gIC8vIHRoZSB1c2VyJ3MgbmV3IHByZWZlcmVuY2VzIGNhbiB0YWtlIGFmZmVjdFxuICBpZiAod2luZG93LmFuYWx5dGljcy5pbml0aWFsaXplZCkge1xuICAgIGlmIChzaG91bGRSZWxvYWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIERvbid0IGxvYWQgYS5qcyBhdCBhbGwgaWYgbm90aGluZyBoYXMgYmVlbiBlbmFibGVkXG4gIGlmIChpc0FueXRoaW5nRW5hYmxlZCkge1xuICAgIHdpbmRvdy5hbmFseXRpY3MubG9hZCh3cml0ZUtleSwge2ludGVncmF0aW9uc30pXG4gIH1cbn1cbiJdfQ==
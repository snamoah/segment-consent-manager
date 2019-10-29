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
      shouldReload = _ref$shouldReload === undefined ? true : _ref$shouldReload,
      onConsent = _ref.onConsent;

  var integrations = { All: false, 'Segment.io': true };
  var isAnythingEnabled = false;

  console.log('===> inside analytics');

  if (!destinationPreferences) {
    console.log('===> destination preferences', destinationPreferences);
    if (isConsentRequired) {
      console.log('====> consent is required');
      return;
    }

    console.log('===> load a.js');
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

  console.log('===> gone pass destination setups');
  // Don't load a.js at all if nothing has been enabled
  if (isAnythingEnabled) {
    console.log('===> if something is enabled', onConsent);
    window.analytics.load(writeKey, { integrations: integrations });
    onConsent();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9hbmFseXRpY3MuanMiXSwibmFtZXMiOlsiY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3MiLCJ3cml0ZUtleSIsImRlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uUHJlZmVyZW5jZXMiLCJpc0NvbnNlbnRSZXF1aXJlZCIsInNob3VsZFJlbG9hZCIsIm9uQ29uc2VudCIsImludGVncmF0aW9ucyIsIkFsbCIsImlzQW55dGhpbmdFbmFibGVkIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFuYWx5dGljcyIsImluaXRpYWxpemVkIiwibG9hZCIsImRlc3RpbmF0aW9uIiwiaXNFbmFibGVkIiwiQm9vbGVhbiIsImlkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBQXdCQSwwQjs7OztBQUFULFNBQVNBLDBCQUFULE9BT1o7QUFBQSxNQU5EQyxRQU1DLFFBTkRBLFFBTUM7QUFBQSxNQUxEQyxZQUtDLFFBTERBLFlBS0M7QUFBQSxNQUpEQyxzQkFJQyxRQUpEQSxzQkFJQztBQUFBLE1BSERDLGlCQUdDLFFBSERBLGlCQUdDO0FBQUEsK0JBRkRDLFlBRUM7QUFBQSxNQUZEQSxZQUVDLHFDQUZjLElBRWQ7QUFBQSxNQUREQyxTQUNDLFFBRERBLFNBQ0M7O0FBQ0QsTUFBTUMsZUFBZSxFQUFDQyxLQUFLLEtBQU4sRUFBYSxjQUFjLElBQTNCLEVBQXJCO0FBQ0EsTUFBSUMsb0JBQW9CLEtBQXhCOztBQUVBQyxVQUFRQyxHQUFSLENBQVksdUJBQVo7O0FBRUEsTUFBSSxDQUFDUixzQkFBTCxFQUE2QjtBQUMzQk8sWUFBUUMsR0FBUixDQUFZLDhCQUFaLEVBQTRDUixzQkFBNUM7QUFDQSxRQUFJQyxpQkFBSixFQUF1QjtBQUNyQk0sY0FBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0E7QUFDRDs7QUFFREQsWUFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0E7QUFDQSxRQUFJLENBQUNDLE9BQU9DLFNBQVAsQ0FBaUJDLFdBQXRCLEVBQW1DO0FBQ2pDRixhQUFPQyxTQUFQLENBQWlCRSxJQUFqQixDQUFzQmQsUUFBdEI7QUFDRDtBQUNEO0FBQ0Q7O0FBbkJBO0FBQUE7QUFBQTs7QUFBQTtBQXFCRCxvREFBMEJDLFlBQTFCLDRHQUF3QztBQUFBLFVBQTdCYyxXQUE2Qjs7QUFDdEMsVUFBTUMsWUFBWUMsUUFBUWYsdUJBQXVCYSxZQUFZRyxFQUFuQyxDQUFSLENBQWxCO0FBQ0EsVUFBSUYsU0FBSixFQUFlO0FBQ2JSLDRCQUFvQixJQUFwQjtBQUNEO0FBQ0RGLG1CQUFhUyxZQUFZRyxFQUF6QixJQUErQkYsU0FBL0I7QUFDRDs7QUFFRDtBQUNBO0FBOUJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBK0JELE1BQUlMLE9BQU9DLFNBQVAsQ0FBaUJDLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQUlULFlBQUosRUFBa0I7QUFDaEJPLGFBQU9RLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0Q7QUFDRDtBQUNEOztBQUVEWCxVQUFRQyxHQUFSLENBQVksbUNBQVo7QUFDQTtBQUNBLE1BQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQyxZQUFRQyxHQUFSLENBQVksOEJBQVosRUFBNENMLFNBQTVDO0FBQ0FNLFdBQU9DLFNBQVAsQ0FBaUJFLElBQWpCLENBQXNCZCxRQUF0QixFQUFnQyxFQUFDTSwwQkFBRCxFQUFoQztBQUNBRDtBQUNEO0FBQ0YiLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICB3cml0ZUtleSxcbiAgZGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgc2hvdWxkUmVsb2FkID0gdHJ1ZSxcbiAgb25Db25zZW50LFxufSkge1xuICBjb25zdCBpbnRlZ3JhdGlvbnMgPSB7QWxsOiBmYWxzZSwgJ1NlZ21lbnQuaW8nOiB0cnVlfVxuICBsZXQgaXNBbnl0aGluZ0VuYWJsZWQgPSBmYWxzZVxuXG4gIGNvbnNvbGUubG9nKCc9PT0+IGluc2lkZSBhbmFseXRpY3MnKTtcblxuICBpZiAoIWRlc3RpbmF0aW9uUHJlZmVyZW5jZXMpIHtcbiAgICBjb25zb2xlLmxvZygnPT09PiBkZXN0aW5hdGlvbiBwcmVmZXJlbmNlcycsIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMpO1xuICAgIGlmIChpc0NvbnNlbnRSZXF1aXJlZCkge1xuICAgICAgY29uc29sZS5sb2coJz09PT0+IGNvbnNlbnQgaXMgcmVxdWlyZWQnKTtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCc9PT0+IGxvYWQgYS5qcycpO1xuICAgIC8vIExvYWQgYS5qcyBub3JtYWxseSB3aGVuIGNvbnNlbnQgaXNuJ3QgcmVxdWlyZWQgYW5kIHRoZXJlJ3Mgbm8gcHJlZmVyZW5jZXNcbiAgICBpZiAoIXdpbmRvdy5hbmFseXRpY3MuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHdpbmRvdy5hbmFseXRpY3MubG9hZCh3cml0ZUtleSlcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgIGNvbnN0IGlzRW5hYmxlZCA9IEJvb2xlYW4oZGVzdGluYXRpb25QcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0pXG4gICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgaXNBbnl0aGluZ0VuYWJsZWQgPSB0cnVlXG4gICAgfVxuICAgIGludGVncmF0aW9uc1tkZXN0aW5hdGlvbi5pZF0gPSBpc0VuYWJsZWRcbiAgfVxuXG4gIC8vIFJlbG9hZCB0aGUgcGFnZSBpZiB0aGUgdHJhY2tlcnMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5pdGlhbGlzZWQgc28gdGhhdFxuICAvLyB0aGUgdXNlcidzIG5ldyBwcmVmZXJlbmNlcyBjYW4gdGFrZSBhZmZlY3RcbiAgaWYgKHdpbmRvdy5hbmFseXRpY3MuaW5pdGlhbGl6ZWQpIHtcbiAgICBpZiAoc2hvdWxkUmVsb2FkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zb2xlLmxvZygnPT09PiBnb25lIHBhc3MgZGVzdGluYXRpb24gc2V0dXBzJyk7XG4gIC8vIERvbid0IGxvYWQgYS5qcyBhdCBhbGwgaWYgbm90aGluZyBoYXMgYmVlbiBlbmFibGVkXG4gIGlmIChpc0FueXRoaW5nRW5hYmxlZCkge1xuICAgIGNvbnNvbGUubG9nKCc9PT0+IGlmIHNvbWV0aGluZyBpcyBlbmFibGVkJywgb25Db25zZW50KTtcbiAgICB3aW5kb3cuYW5hbHl0aWNzLmxvYWQod3JpdGVLZXksIHtpbnRlZ3JhdGlvbnN9KVxuICAgIG9uQ29uc2VudCgpXG4gIH1cbn1cbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = conditionallyLoadAnalytics;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var consentCalled = false;

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

    if (onConsent && !consentCalled) {
      onConsent();
      consentCalled = true;
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9hbmFseXRpY3MuanMiXSwibmFtZXMiOlsiY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3MiLCJjb25zZW50Q2FsbGVkIiwid3JpdGVLZXkiLCJkZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvblByZWZlcmVuY2VzIiwiaXNDb25zZW50UmVxdWlyZWQiLCJzaG91bGRSZWxvYWQiLCJvbkNvbnNlbnQiLCJpbnRlZ3JhdGlvbnMiLCJBbGwiLCJpc0FueXRoaW5nRW5hYmxlZCIsIndpbmRvdyIsImFuYWx5dGljcyIsImluaXRpYWxpemVkIiwibG9hZCIsImRlc3RpbmF0aW9uIiwiaXNFbmFibGVkIiwiQm9vbGVhbiIsImlkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRXdCQSwwQjs7OztBQUZ4QixJQUFJQyxnQkFBZ0IsS0FBcEI7O0FBRWUsU0FBU0QsMEJBQVQsT0FPWjtBQUFBLE1BTkRFLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLFlBS0MsUUFMREEsWUFLQztBQUFBLE1BSkRDLHNCQUlDLFFBSkRBLHNCQUlDO0FBQUEsTUFIREMsaUJBR0MsUUFIREEsaUJBR0M7QUFBQSwrQkFGREMsWUFFQztBQUFBLE1BRkRBLFlBRUMscUNBRmMsSUFFZDtBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQzs7QUFDRCxNQUFNQyxlQUFlLEVBQUNDLEtBQUssS0FBTixFQUFhLGNBQWMsSUFBM0IsRUFBckI7QUFDQSxNQUFJQyxvQkFBb0IsS0FBeEI7O0FBRUEsTUFBSSxDQUFDTixzQkFBTCxFQUE2QjtBQUMzQixRQUFJQyxpQkFBSixFQUF1QjtBQUNyQjtBQUNEOztBQUVEO0FBQ0EsUUFBSSxDQUFDTSxPQUFPQyxTQUFQLENBQWlCQyxXQUF0QixFQUFtQztBQUNqQ0YsYUFBT0MsU0FBUCxDQUFpQkUsSUFBakIsQ0FBc0JaLFFBQXRCO0FBQ0Q7QUFDRDtBQUNEOztBQWRBO0FBQUE7QUFBQTs7QUFBQTtBQWdCRCxvREFBMEJDLFlBQTFCLDRHQUF3QztBQUFBLFVBQTdCWSxXQUE2Qjs7QUFDdEMsVUFBTUMsWUFBWUMsUUFBUWIsdUJBQXVCVyxZQUFZRyxFQUFuQyxDQUFSLENBQWxCO0FBQ0EsVUFBSUYsU0FBSixFQUFlO0FBQ2JOLDRCQUFvQixJQUFwQjtBQUNEO0FBQ0RGLG1CQUFhTyxZQUFZRyxFQUF6QixJQUErQkYsU0FBL0I7QUFDRDs7QUFFRDtBQUNBO0FBekJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMEJELE1BQUlMLE9BQU9DLFNBQVAsQ0FBaUJDLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQUlQLFlBQUosRUFBa0I7QUFDaEJLLGFBQU9RLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0Q7QUFDRDtBQUNEOztBQUVEO0FBQ0EsTUFBSVYsaUJBQUosRUFBdUI7QUFDckJDLFdBQU9DLFNBQVAsQ0FBaUJFLElBQWpCLENBQXNCWixRQUF0QixFQUFnQyxFQUFDTSwwQkFBRCxFQUFoQzs7QUFFQSxRQUFJRCxhQUFhLENBQUNOLGFBQWxCLEVBQWlDO0FBQy9CTTtBQUNBTixzQkFBZ0IsSUFBaEI7QUFDRDtBQUNGO0FBQ0YiLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnNlbnRDYWxsZWQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICB3cml0ZUtleSxcbiAgZGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgc2hvdWxkUmVsb2FkID0gdHJ1ZSxcbiAgb25Db25zZW50LFxufSkge1xuICBjb25zdCBpbnRlZ3JhdGlvbnMgPSB7QWxsOiBmYWxzZSwgJ1NlZ21lbnQuaW8nOiB0cnVlfVxuICBsZXQgaXNBbnl0aGluZ0VuYWJsZWQgPSBmYWxzZVxuXG4gIGlmICghZGVzdGluYXRpb25QcmVmZXJlbmNlcykge1xuICAgIGlmIChpc0NvbnNlbnRSZXF1aXJlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTG9hZCBhLmpzIG5vcm1hbGx5IHdoZW4gY29uc2VudCBpc24ndCByZXF1aXJlZCBhbmQgdGhlcmUncyBubyBwcmVmZXJlbmNlc1xuICAgIGlmICghd2luZG93LmFuYWx5dGljcy5pbml0aWFsaXplZCkge1xuICAgICAgd2luZG93LmFuYWx5dGljcy5sb2FkKHdyaXRlS2V5KVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgaXNFbmFibGVkID0gQm9vbGVhbihkZXN0aW5hdGlvblByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSlcbiAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICBpc0FueXRoaW5nRW5hYmxlZCA9IHRydWVcbiAgICB9XG4gICAgaW50ZWdyYXRpb25zW2Rlc3RpbmF0aW9uLmlkXSA9IGlzRW5hYmxlZFxuICB9XG5cbiAgLy8gUmVsb2FkIHRoZSBwYWdlIGlmIHRoZSB0cmFja2VycyBoYXZlIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCBzbyB0aGF0XG4gIC8vIHRoZSB1c2VyJ3MgbmV3IHByZWZlcmVuY2VzIGNhbiB0YWtlIGFmZmVjdFxuICBpZiAod2luZG93LmFuYWx5dGljcy5pbml0aWFsaXplZCkge1xuICAgIGlmIChzaG91bGRSZWxvYWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIERvbid0IGxvYWQgYS5qcyBhdCBhbGwgaWYgbm90aGluZyBoYXMgYmVlbiBlbmFibGVkXG4gIGlmIChpc0FueXRoaW5nRW5hYmxlZCkge1xuICAgIHdpbmRvdy5hbmFseXRpY3MubG9hZCh3cml0ZUtleSwge2ludGVncmF0aW9uc30pXG5cbiAgICBpZiAob25Db25zZW50ICYmICFjb25zZW50Q2FsbGVkKSB7XG4gICAgICBvbkNvbnNlbnQoKVxuICAgICAgY29uc2VudENhbGxlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbiJdfQ==
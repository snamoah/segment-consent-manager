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

      if (onConsent && !consentCalled) {
        onConsent();
        consentCalled = true;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9hbmFseXRpY3MuanMiXSwibmFtZXMiOlsiY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3MiLCJjb25zZW50Q2FsbGVkIiwid3JpdGVLZXkiLCJkZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvblByZWZlcmVuY2VzIiwiaXNDb25zZW50UmVxdWlyZWQiLCJzaG91bGRSZWxvYWQiLCJvbkNvbnNlbnQiLCJpbnRlZ3JhdGlvbnMiLCJBbGwiLCJpc0FueXRoaW5nRW5hYmxlZCIsIndpbmRvdyIsImFuYWx5dGljcyIsImluaXRpYWxpemVkIiwibG9hZCIsImRlc3RpbmF0aW9uIiwiaXNFbmFibGVkIiwiQm9vbGVhbiIsImlkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRXdCQSwwQjs7OztBQUZ4QixJQUFJQyxnQkFBZ0IsS0FBcEI7O0FBRWUsU0FBU0QsMEJBQVQsT0FPWjtBQUFBLE1BTkRFLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLFlBS0MsUUFMREEsWUFLQztBQUFBLE1BSkRDLHNCQUlDLFFBSkRBLHNCQUlDO0FBQUEsTUFIREMsaUJBR0MsUUFIREEsaUJBR0M7QUFBQSwrQkFGREMsWUFFQztBQUFBLE1BRkRBLFlBRUMscUNBRmMsSUFFZDtBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQzs7QUFDRCxNQUFNQyxlQUFlLEVBQUNDLEtBQUssS0FBTixFQUFhLGNBQWMsSUFBM0IsRUFBckI7QUFDQSxNQUFJQyxvQkFBb0IsS0FBeEI7O0FBRUEsTUFBSSxDQUFDTixzQkFBTCxFQUE2QjtBQUMzQixRQUFJQyxpQkFBSixFQUF1QjtBQUNyQjtBQUNEOztBQUVEO0FBQ0EsUUFBSSxDQUFDTSxPQUFPQyxTQUFQLENBQWlCQyxXQUF0QixFQUFtQztBQUNqQ0YsYUFBT0MsU0FBUCxDQUFpQkUsSUFBakIsQ0FBc0JaLFFBQXRCOztBQUVBLFVBQUlLLGFBQWEsQ0FBQ04sYUFBbEIsRUFBaUM7QUFDL0JNO0FBQ0FOLHdCQUFnQixJQUFoQjtBQUNEO0FBQ0Y7QUFDRDtBQUNEOztBQW5CQTtBQUFBO0FBQUE7O0FBQUE7QUFxQkQsb0RBQTBCRSxZQUExQiw0R0FBd0M7QUFBQSxVQUE3QlksV0FBNkI7O0FBQ3RDLFVBQU1DLFlBQVlDLFFBQVFiLHVCQUF1QlcsWUFBWUcsRUFBbkMsQ0FBUixDQUFsQjtBQUNBLFVBQUlGLFNBQUosRUFBZTtBQUNiTiw0QkFBb0IsSUFBcEI7QUFDRDtBQUNERixtQkFBYU8sWUFBWUcsRUFBekIsSUFBK0JGLFNBQS9CO0FBQ0Q7O0FBRUQ7QUFDQTtBQTlCQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQStCRCxNQUFJTCxPQUFPQyxTQUFQLENBQWlCQyxXQUFyQixFQUFrQztBQUNoQyxRQUFJUCxZQUFKLEVBQWtCO0FBQ2hCSyxhQUFPUSxRQUFQLENBQWdCQyxNQUFoQjtBQUNEO0FBQ0Q7QUFDRDs7QUFFRDtBQUNBLE1BQUlWLGlCQUFKLEVBQXVCO0FBQ3JCQyxXQUFPQyxTQUFQLENBQWlCRSxJQUFqQixDQUFzQlosUUFBdEIsRUFBZ0MsRUFBQ00sMEJBQUQsRUFBaEM7O0FBRUEsUUFBSUQsYUFBYSxDQUFDTixhQUFsQixFQUFpQztBQUMvQk07QUFDQU4sc0JBQWdCLElBQWhCO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6ImFuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjb25zZW50Q2FsbGVkID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzKHtcbiAgd3JpdGVLZXksXG4gIGRlc3RpbmF0aW9ucyxcbiAgZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgaXNDb25zZW50UmVxdWlyZWQsXG4gIHNob3VsZFJlbG9hZCA9IHRydWUsXG4gIG9uQ29uc2VudCxcbn0pIHtcbiAgY29uc3QgaW50ZWdyYXRpb25zID0ge0FsbDogZmFsc2UsICdTZWdtZW50LmlvJzogdHJ1ZX1cbiAgbGV0IGlzQW55dGhpbmdFbmFibGVkID0gZmFsc2VcblxuICBpZiAoIWRlc3RpbmF0aW9uUHJlZmVyZW5jZXMpIHtcbiAgICBpZiAoaXNDb25zZW50UmVxdWlyZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIExvYWQgYS5qcyBub3JtYWxseSB3aGVuIGNvbnNlbnQgaXNuJ3QgcmVxdWlyZWQgYW5kIHRoZXJlJ3Mgbm8gcHJlZmVyZW5jZXNcbiAgICBpZiAoIXdpbmRvdy5hbmFseXRpY3MuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHdpbmRvdy5hbmFseXRpY3MubG9hZCh3cml0ZUtleSlcblxuICAgICAgaWYgKG9uQ29uc2VudCAmJiAhY29uc2VudENhbGxlZCkge1xuICAgICAgICBvbkNvbnNlbnQoKVxuICAgICAgICBjb25zZW50Q2FsbGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgY29uc3QgaXNFbmFibGVkID0gQm9vbGVhbihkZXN0aW5hdGlvblByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSlcbiAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICBpc0FueXRoaW5nRW5hYmxlZCA9IHRydWVcbiAgICB9XG4gICAgaW50ZWdyYXRpb25zW2Rlc3RpbmF0aW9uLmlkXSA9IGlzRW5hYmxlZFxuICB9XG5cbiAgLy8gUmVsb2FkIHRoZSBwYWdlIGlmIHRoZSB0cmFja2VycyBoYXZlIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCBzbyB0aGF0XG4gIC8vIHRoZSB1c2VyJ3MgbmV3IHByZWZlcmVuY2VzIGNhbiB0YWtlIGFmZmVjdFxuICBpZiAod2luZG93LmFuYWx5dGljcy5pbml0aWFsaXplZCkge1xuICAgIGlmIChzaG91bGRSZWxvYWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIERvbid0IGxvYWQgYS5qcyBhdCBhbGwgaWYgbm90aGluZyBoYXMgYmVlbiBlbmFibGVkXG4gIGlmIChpc0FueXRoaW5nRW5hYmxlZCkge1xuICAgIHdpbmRvdy5hbmFseXRpY3MubG9hZCh3cml0ZUtleSwge2ludGVncmF0aW9uc30pXG5cbiAgICBpZiAob25Db25zZW50ICYmICFjb25zZW50Q2FsbGVkKSB7XG4gICAgICBvbkNvbnNlbnQoKVxuICAgICAgY29uc2VudENhbGxlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbiJdfQ==
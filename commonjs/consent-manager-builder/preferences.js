'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPreferences = loadPreferences;
exports.savePreferences = savePreferences;

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _topDomain = require('@segment/top-domain');

var _topDomain2 = _interopRequireDefault(_topDomain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove duplicate cookie library from bundle
var COOKIE_KEY = 'tracking-preferences';
var COOKIE_EXPIRES = 365;

// TODO: harden against invalid cookies
function loadPreferences() {
  var preferences = _jsCookie2.default.getJSON(COOKIE_KEY);

  if (!preferences) {
    return {};
  }

  return {
    destinationPreferences: preferences.destinations,
    customPreferences: preferences.custom
  };
}

function savePreferences(_ref) {
  var destinationPreferences = _ref.destinationPreferences,
      customPreferences = _ref.customPreferences,
      cookieDomain = _ref.cookieDomain;

  window.analytics.identify({
    destinationTrackingPreferences: destinationPreferences,
    customTrackingPreferences: customPreferences
  });

  var domain = cookieDomain || (0, _topDomain2.default)(window.location.href);
  var value = {
    version: 1,
    destinations: destinationPreferences,
    custom: customPreferences
  };
  _jsCookie2.default.set(COOKIE_KEY, value, {
    expires: COOKIE_EXPIRES,
    domain: domain
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9wcmVmZXJlbmNlcy5qcyJdLCJuYW1lcyI6WyJsb2FkUHJlZmVyZW5jZXMiLCJzYXZlUHJlZmVyZW5jZXMiLCJDT09LSUVfS0VZIiwiQ09PS0lFX0VYUElSRVMiLCJwcmVmZXJlbmNlcyIsImNvb2tpZXMiLCJnZXRKU09OIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImRlc3RpbmF0aW9ucyIsImN1c3RvbVByZWZlcmVuY2VzIiwiY3VzdG9tIiwiY29va2llRG9tYWluIiwid2luZG93IiwiYW5hbHl0aWNzIiwiaWRlbnRpZnkiLCJkZXN0aW5hdGlvblRyYWNraW5nUHJlZmVyZW5jZXMiLCJjdXN0b21UcmFja2luZ1ByZWZlcmVuY2VzIiwiZG9tYWluIiwibG9jYXRpb24iLCJocmVmIiwidmFsdWUiLCJ2ZXJzaW9uIiwic2V0IiwiZXhwaXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLGUsR0FBQUEsZTtRQWFBQyxlLEdBQUFBLGU7O0FBcEJoQjs7OztBQUNBOzs7Ozs7QUFGQTtBQUlBLElBQU1DLGFBQWEsc0JBQW5CO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQXZCOztBQUVBO0FBQ08sU0FBU0gsZUFBVCxHQUEyQjtBQUNoQyxNQUFNSSxjQUFjQyxtQkFBUUMsT0FBUixDQUFnQkosVUFBaEIsQ0FBcEI7O0FBRUEsTUFBSSxDQUFDRSxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU87QUFDTEcsNEJBQXdCSCxZQUFZSSxZQUQvQjtBQUVMQyx1QkFBbUJMLFlBQVlNO0FBRjFCLEdBQVA7QUFJRDs7QUFFTSxTQUFTVCxlQUFULE9BSUo7QUFBQSxNQUhETSxzQkFHQyxRQUhEQSxzQkFHQztBQUFBLE1BRkRFLGlCQUVDLFFBRkRBLGlCQUVDO0FBQUEsTUFEREUsWUFDQyxRQUREQSxZQUNDOztBQUNEQyxTQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQjtBQUN4QkMsb0NBQWdDUixzQkFEUjtBQUV4QlMsK0JBQTJCUDtBQUZILEdBQTFCOztBQUtBLE1BQU1RLFNBQVNOLGdCQUFnQix5QkFBVUMsT0FBT00sUUFBUCxDQUFnQkMsSUFBMUIsQ0FBL0I7QUFDQSxNQUFNQyxRQUFRO0FBQ1pDLGFBQVMsQ0FERztBQUVaYixrQkFBY0Qsc0JBRkY7QUFHWkcsWUFBUUQ7QUFISSxHQUFkO0FBS0FKLHFCQUFRaUIsR0FBUixDQUFZcEIsVUFBWixFQUF3QmtCLEtBQXhCLEVBQStCO0FBQzdCRyxhQUFTcEIsY0FEb0I7QUFFN0JjO0FBRjZCLEdBQS9CO0FBSUQiLCJmaWxlIjoicHJlZmVyZW5jZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiByZW1vdmUgZHVwbGljYXRlIGNvb2tpZSBsaWJyYXJ5IGZyb20gYnVuZGxlXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgdG9wRG9tYWluIGZyb20gJ0BzZWdtZW50L3RvcC1kb21haW4nXG5cbmNvbnN0IENPT0tJRV9LRVkgPSAndHJhY2tpbmctcHJlZmVyZW5jZXMnXG5jb25zdCBDT09LSUVfRVhQSVJFUyA9IDM2NVxuXG4vLyBUT0RPOiBoYXJkZW4gYWdhaW5zdCBpbnZhbGlkIGNvb2tpZXNcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUHJlZmVyZW5jZXMoKSB7XG4gIGNvbnN0IHByZWZlcmVuY2VzID0gY29va2llcy5nZXRKU09OKENPT0tJRV9LRVkpXG5cbiAgaWYgKCFwcmVmZXJlbmNlcykge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzOiBwcmVmZXJlbmNlcy5kZXN0aW5hdGlvbnMsXG4gICAgY3VzdG9tUHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzLmN1c3RvbVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJlZmVyZW5jZXMoe1xuICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICBjdXN0b21QcmVmZXJlbmNlcyxcbiAgY29va2llRG9tYWluXG59KSB7XG4gIHdpbmRvdy5hbmFseXRpY3MuaWRlbnRpZnkoe1xuICAgIGRlc3RpbmF0aW9uVHJhY2tpbmdQcmVmZXJlbmNlczogZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgICBjdXN0b21UcmFja2luZ1ByZWZlcmVuY2VzOiBjdXN0b21QcmVmZXJlbmNlc1xuICB9KVxuXG4gIGNvbnN0IGRvbWFpbiA9IGNvb2tpZURvbWFpbiB8fCB0b3BEb21haW4od2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIHZlcnNpb246IDEsXG4gICAgZGVzdGluYXRpb25zOiBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICAgIGN1c3RvbTogY3VzdG9tUHJlZmVyZW5jZXNcbiAgfVxuICBjb29raWVzLnNldChDT09LSUVfS0VZLCB2YWx1ZSwge1xuICAgIGV4cGlyZXM6IENPT0tJRV9FWFBJUkVTLFxuICAgIGRvbWFpblxuICB9KVxufVxuIl19
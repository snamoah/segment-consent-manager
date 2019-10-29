'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openConsentManager = exports.ConsentManager = exports.ConsentManagerBuilder = undefined;

var _container = require('./consent-manager/container');

Object.defineProperty(exports, 'openConsentManager', {
  enumerable: true,
  get: function get() {
    return _container.openDialog;
  }
});
exports.doNotTrack = doNotTrack;

var _consentManagerBuilder = require('./consent-manager-builder');

var _consentManagerBuilder2 = _interopRequireDefault(_consentManagerBuilder);

var _consentManager = require('./consent-manager');

var _consentManager2 = _interopRequireDefault(_consentManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ConsentManagerBuilder = _consentManagerBuilder2.default;
exports.ConsentManager = _consentManager2.default;
function doNotTrack() {
  var doNotTrackValue = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;

  // Normalise Firefox < 32
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack
  if (doNotTrackValue === 'yes') {
    doNotTrackValue = '1';
  } else if (doNotTrackValue === 'no') {
    doNotTrackValue = '0';
  }

  if (doNotTrackValue === '1') {
    return true;
  }
  if (doNotTrackValue === '0') {
    return false;
  }
  return null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJvcGVuRGlhbG9nIiwiZG9Ob3RUcmFjayIsIkNvbnNlbnRNYW5hZ2VyQnVpbGRlciIsIkNvbnNlbnRNYW5hZ2VyIiwiZG9Ob3RUcmFja1ZhbHVlIiwibmF2aWdhdG9yIiwid2luZG93IiwibXNEb05vdFRyYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7c0JBRVFBLFU7OztRQUVRQyxVLEdBQUFBLFU7Ozs7Ozs7Ozs7OztRQUpUQyxxQjtRQUNBQyxjO0FBR0EsU0FBU0YsVUFBVCxHQUFzQjtBQUMzQixNQUFJRyxrQkFDRkMsVUFBVUosVUFBVixJQUF3QkssT0FBT0wsVUFBL0IsSUFBNkNJLFVBQVVFLFlBRHpEOztBQUdBO0FBQ0E7QUFDQSxNQUFJSCxvQkFBb0IsS0FBeEIsRUFBK0I7QUFDN0JBLHNCQUFrQixHQUFsQjtBQUNELEdBRkQsTUFFTyxJQUFJQSxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDbkNBLHNCQUFrQixHQUFsQjtBQUNEOztBQUVELE1BQUlBLG9CQUFvQixHQUF4QixFQUE2QjtBQUMzQixXQUFPLElBQVA7QUFDRDtBQUNELE1BQUlBLG9CQUFvQixHQUF4QixFQUE2QjtBQUMzQixXQUFPLEtBQVA7QUFDRDtBQUNELFNBQU8sSUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IENvbnNlbnRNYW5hZ2VyQnVpbGRlciBmcm9tICcuL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyJ1xuZXhwb3J0IENvbnNlbnRNYW5hZ2VyIGZyb20gJy4vY29uc2VudC1tYW5hZ2VyJ1xuZXhwb3J0IHtvcGVuRGlhbG9nIGFzIG9wZW5Db25zZW50TWFuYWdlcn0gZnJvbSAnLi9jb25zZW50LW1hbmFnZXIvY29udGFpbmVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gZG9Ob3RUcmFjaygpIHtcbiAgbGV0IGRvTm90VHJhY2tWYWx1ZSA9XG4gICAgbmF2aWdhdG9yLmRvTm90VHJhY2sgfHwgd2luZG93LmRvTm90VHJhY2sgfHwgbmF2aWdhdG9yLm1zRG9Ob3RUcmFja1xuXG4gIC8vIE5vcm1hbGlzZSBGaXJlZm94IDwgMzJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL05hdmlnYXRvci9kb05vdFRyYWNrXG4gIGlmIChkb05vdFRyYWNrVmFsdWUgPT09ICd5ZXMnKSB7XG4gICAgZG9Ob3RUcmFja1ZhbHVlID0gJzEnXG4gIH0gZWxzZSBpZiAoZG9Ob3RUcmFja1ZhbHVlID09PSAnbm8nKSB7XG4gICAgZG9Ob3RUcmFja1ZhbHVlID0gJzAnXG4gIH1cblxuICBpZiAoZG9Ob3RUcmFja1ZhbHVlID09PSAnMScpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGlmIChkb05vdFRyYWNrVmFsdWUgPT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBudWxsXG59XG4iXX0=
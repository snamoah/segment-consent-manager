'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consentManagerBuilder = require('../consent-manager-builder');

var _consentManagerBuilder2 = _interopRequireDefault(_consentManagerBuilder);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _categories = require('./categories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialPreferences = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null
};

var ConsentManager = function (_PureComponent) {
  (0, _inherits3.default)(ConsentManager, _PureComponent);

  function ConsentManager() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConsentManager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConsentManager.__proto__ || (0, _getPrototypeOf2.default)(ConsentManager)).call.apply(_ref, [this].concat(args))), _this), _this.handleMapCustomPreferences = function (_ref2) {
      var destinations = _ref2.destinations,
          preferences = _ref2.preferences;

      var destinationPreferences = {};
      var customPreferences = {};

      // Default unset preferences to true (for implicit consent)
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(preferences)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var preferenceName = _step.value;

          var value = preferences[preferenceName];
          if (typeof value === 'boolean') {
            customPreferences[preferenceName] = value;
          } else {
            customPreferences[preferenceName] = true;
          }
        }
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

      var _loop = function _loop(destination) {
        if (_categories.ADVERTISING_CATEGORIES.find(function (c) {
          return c === destination.category;
        })) {
          destinationPreferences[destination.id] = customPreferences.advertising;
        } else if (_categories.FUNCTIONAL_CATEGORIES.find(function (c) {
          return c === destination.category;
        })) {
          destinationPreferences[destination.id] = customPreferences.functional;
        } else {
          // Fallback to marketing
          destinationPreferences[destination.id] = customPreferences.marketingAndAnalytics;
        }
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(destinations), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var destination = _step2.value;

          _loop(destination);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return { destinationPreferences: destinationPreferences, customPreferences: customPreferences };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConsentManager, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          writeKey = _props.writeKey,
          otherWriteKeys = _props.otherWriteKeys,
          shouldRequireConsent = _props.shouldRequireConsent,
          implyConsentOnInteraction = _props.implyConsentOnInteraction,
          cookieDomain = _props.cookieDomain,
          bannerContent = _props.bannerContent,
          bannerSubContent = _props.bannerSubContent,
          bannerTextColor = _props.bannerTextColor,
          bannerBackgroundColor = _props.bannerBackgroundColor,
          preferencesDialogTitle = _props.preferencesDialogTitle,
          preferencesDialogContent = _props.preferencesDialogContent,
          cancelDialogTitle = _props.cancelDialogTitle,
          cancelDialogContent = _props.cancelDialogContent,
          onError = _props.onError,
          onConsent = _props.onConsent;


      return _react2.default.createElement(
        _consentManagerBuilder2.default,
        {
          onError: onError,
          writeKey: writeKey,
          otherWriteKeys: otherWriteKeys,
          shouldRequireConsent: shouldRequireConsent,
          cookieDomain: cookieDomain,
          initialPreferences: initialPreferences,
          onConsent: onConsent,
          mapCustomPreferences: this.handleMapCustomPreferences
        },
        function (_ref3) {
          var destinations = _ref3.destinations,
              newDestinations = _ref3.newDestinations,
              preferences = _ref3.preferences,
              isConsentRequired = _ref3.isConsentRequired,
              setPreferences = _ref3.setPreferences,
              resetPreferences = _ref3.resetPreferences,
              saveConsent = _ref3.saveConsent;
          return _react2.default.createElement(_container2.default, {
            destinations: destinations,
            newDestinations: newDestinations,
            preferences: preferences,
            isConsentRequired: isConsentRequired,
            setPreferences: setPreferences,
            resetPreferences: resetPreferences,
            saveConsent: saveConsent,
            implyConsentOnInteraction: implyConsentOnInteraction,
            bannerContent: bannerContent,
            bannerSubContent: bannerSubContent,
            bannerTextColor: bannerTextColor,
            bannerBackgroundColor: bannerBackgroundColor,
            preferencesDialogTitle: preferencesDialogTitle,
            preferencesDialogContent: preferencesDialogContent,
            cancelDialogTitle: cancelDialogTitle,
            cancelDialogContent: cancelDialogContent
          });
        }
      );
    }
  }]);
  return ConsentManager;
}(_react.PureComponent);

ConsentManager.displayName = 'ConsentManager';
ConsentManager.propTypes = {
  writeKey: _propTypes2.default.string.isRequired,
  otherWriteKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  shouldRequireConsent: _propTypes2.default.func,
  implyConsentOnInteraction: _propTypes2.default.bool,
  cookieDomain: _propTypes2.default.string,
  bannerContent: _propTypes2.default.node.isRequired,
  bannerSubContent: _propTypes2.default.string,
  bannerTextColor: _propTypes2.default.string,
  bannerBackgroundColor: _propTypes2.default.string,
  preferencesDialogTitle: _propTypes2.default.node,
  preferencesDialogContent: _propTypes2.default.node.isRequired,
  onError: _propTypes2.default.func,
  cancelDialogTitle: _propTypes2.default.node,
  cancelDialogContent: _propTypes2.default.node.isRequired,
  onConsent: _propTypes2.default.func
};
ConsentManager.defaultProps = {
  otherWriteKeys: [],
  onConsent: function onConsent() {},
  shouldRequireConsent: function shouldRequireConsent() {
    return true;
  },
  implyConsentOnInteraction: true,
  onError: undefined,
  cookieDomain: undefined,
  bannerTextColor: '#fff',
  bannerSubContent: 'You can change your preferences at any time.',
  bannerBackgroundColor: '#1f4160',
  preferencesDialogTitle: 'Website Data Collection Preferences',
  cancelDialogTitle: 'Are you sure you want to cancel?'
};
exports.default = ConsentManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFByZWZlcmVuY2VzIiwibWFya2V0aW5nQW5kQW5hbHl0aWNzIiwiYWR2ZXJ0aXNpbmciLCJmdW5jdGlvbmFsIiwiQ29uc2VudE1hbmFnZXIiLCJoYW5kbGVNYXBDdXN0b21QcmVmZXJlbmNlcyIsImRlc3RpbmF0aW9ucyIsInByZWZlcmVuY2VzIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImN1c3RvbVByZWZlcmVuY2VzIiwicHJlZmVyZW5jZU5hbWUiLCJ2YWx1ZSIsImRlc3RpbmF0aW9uIiwiQURWRVJUSVNJTkdfQ0FURUdPUklFUyIsImZpbmQiLCJjIiwiY2F0ZWdvcnkiLCJpZCIsIkZVTkNUSU9OQUxfQ0FURUdPUklFUyIsInByb3BzIiwid3JpdGVLZXkiLCJvdGhlcldyaXRlS2V5cyIsInNob3VsZFJlcXVpcmVDb25zZW50IiwiaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbiIsImNvb2tpZURvbWFpbiIsImJhbm5lckNvbnRlbnQiLCJiYW5uZXJTdWJDb250ZW50IiwiYmFubmVyVGV4dENvbG9yIiwiYmFubmVyQmFja2dyb3VuZENvbG9yIiwicHJlZmVyZW5jZXNEaWFsb2dUaXRsZSIsInByZWZlcmVuY2VzRGlhbG9nQ29udGVudCIsImNhbmNlbERpYWxvZ1RpdGxlIiwiY2FuY2VsRGlhbG9nQ29udGVudCIsIm9uRXJyb3IiLCJvbkNvbnNlbnQiLCJuZXdEZXN0aW5hdGlvbnMiLCJpc0NvbnNlbnRSZXF1aXJlZCIsInNldFByZWZlcmVuY2VzIiwicmVzZXRQcmVmZXJlbmNlcyIsInNhdmVDb25zZW50IiwiUHVyZUNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFw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TSxJQUFWLENBQWVKLFVBTmI7QUFPakJuQixvQkFBa0JpQixvQkFBVUMsTUFQWDtBQVFqQmpCLG1CQUFpQmdCLG9CQUFVQyxNQVJWO0FBU2pCaEIseUJBQXVCZSxvQkFBVUMsTUFUaEI7QUFVakJmLDBCQUF3QmMsb0JBQVVNLElBVmpCO0FBV2pCbkIsNEJBQTBCYSxvQkFBVU0sSUFBVixDQUFlSixVQVh4QjtBQVlqQlosV0FBU1Usb0JBQVVJLElBWkY7QUFhakJoQixxQkFBbUJZLG9CQUFVTSxJQWJaO0FBY2pCakIsdUJBQXFCVyxvQkFBVU0sSUFBVixDQUFlSixVQWRuQjtBQWVqQlgsYUFBV1Msb0JBQVVJO0FBZkosQztBQUhBM0MsYyxDQXFCWjhDLFksR0FBZTtBQUNwQjdCLGtCQUFnQixFQURJO0FBRXBCYSxhQUFXLHFCQUFNLENBQUUsQ0FGQztBQUdwQlosd0JBQXNCO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FIRjtBQUlwQkMsNkJBQTJCLElBSlA7QUFLcEJVLFdBQVNrQixTQUxXO0FBTXBCM0IsZ0JBQWMyQixTQU5NO0FBT3BCeEIsbUJBQWlCLE1BUEc7QUFRcEJELG9CQUFrQiw4Q0FSRTtBQVNwQkUseUJBQXVCLFNBVEg7QUFVcEJDLDBCQUF3QixxQ0FWSjtBQVdwQkUscUJBQW1CO0FBWEMsQztrQkFyQkgzQixjIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQ29uc2VudE1hbmFnZXJCdWlsZGVyIGZyb20gJy4uL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCB7QURWRVJUSVNJTkdfQ0FURUdPUklFUywgRlVOQ1RJT05BTF9DQVRFR09SSUVTfSBmcm9tICcuL2NhdGVnb3JpZXMnXG5cbmNvbnN0IGluaXRpYWxQcmVmZXJlbmNlcyA9IHtcbiAgbWFya2V0aW5nQW5kQW5hbHl0aWNzOiBudWxsLFxuICBhZHZlcnRpc2luZzogbnVsbCxcbiAgZnVuY3Rpb25hbDogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZW50TWFuYWdlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ29uc2VudE1hbmFnZXInXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB3cml0ZUtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG90aGVyV3JpdGVLZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBzaG91bGRSZXF1aXJlQ29uc2VudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29va2llRG9tYWluOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhbm5lckNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgYmFubmVyU3ViQ29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYW5uZXJUZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFubmVyQmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByZWZlcmVuY2VzRGlhbG9nVGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIHByZWZlcmVuY2VzRGlhbG9nQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYW5jZWxEaWFsb2dUaXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2FuY2VsRGlhbG9nQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBvbkNvbnNlbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG90aGVyV3JpdGVLZXlzOiBbXSxcbiAgICBvbkNvbnNlbnQ6ICgpID0+IHt9LFxuICAgIHNob3VsZFJlcXVpcmVDb25zZW50OiAoKSA9PiB0cnVlLFxuICAgIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgb25FcnJvcjogdW5kZWZpbmVkLFxuICAgIGNvb2tpZURvbWFpbjogdW5kZWZpbmVkLFxuICAgIGJhbm5lclRleHRDb2xvcjogJyNmZmYnLFxuICAgIGJhbm5lclN1YkNvbnRlbnQ6ICdZb3UgY2FuIGNoYW5nZSB5b3VyIHByZWZlcmVuY2VzIGF0IGFueSB0aW1lLicsXG4gICAgYmFubmVyQmFja2dyb3VuZENvbG9yOiAnIzFmNDE2MCcsXG4gICAgcHJlZmVyZW5jZXNEaWFsb2dUaXRsZTogJ1dlYnNpdGUgRGF0YSBDb2xsZWN0aW9uIFByZWZlcmVuY2VzJyxcbiAgICBjYW5jZWxEaWFsb2dUaXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdyaXRlS2V5LFxuICAgICAgb3RoZXJXcml0ZUtleXMsXG4gICAgICBzaG91bGRSZXF1aXJlQ29uc2VudCxcbiAgICAgIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb24sXG4gICAgICBjb29raWVEb21haW4sXG4gICAgICBiYW5uZXJDb250ZW50LFxuICAgICAgYmFubmVyU3ViQ29udGVudCxcbiAgICAgIGJhbm5lclRleHRDb2xvcixcbiAgICAgIGJhbm5lckJhY2tncm91bmRDb2xvcixcbiAgICAgIHByZWZlcmVuY2VzRGlhbG9nVGl0bGUsXG4gICAgICBwcmVmZXJlbmNlc0RpYWxvZ0NvbnRlbnQsXG4gICAgICBjYW5jZWxEaWFsb2dUaXRsZSxcbiAgICAgIGNhbmNlbERpYWxvZ0NvbnRlbnQsXG4gICAgICBvbkVycm9yLFxuICAgICAgb25Db25zZW50XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uc2VudE1hbmFnZXJCdWlsZGVyXG4gICAgICAgIG9uRXJyb3I9e29uRXJyb3J9XG4gICAgICAgIHdyaXRlS2V5PXt3cml0ZUtleX1cbiAgICAgICAgb3RoZXJXcml0ZUtleXM9e290aGVyV3JpdGVLZXlzfVxuICAgICAgICBzaG91bGRSZXF1aXJlQ29uc2VudD17c2hvdWxkUmVxdWlyZUNvbnNlbnR9XG4gICAgICAgIGNvb2tpZURvbWFpbj17Y29va2llRG9tYWlufVxuICAgICAgICBpbml0aWFsUHJlZmVyZW5jZXM9e2luaXRpYWxQcmVmZXJlbmNlc31cbiAgICAgICAgb25Db25zZW50PXtvbkNvbnNlbnR9XG4gICAgICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzPXt0aGlzLmhhbmRsZU1hcEN1c3RvbVByZWZlcmVuY2VzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgICAgbmV3RGVzdGluYXRpb25zLFxuICAgICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICAgIGlzQ29uc2VudFJlcXVpcmVkLFxuICAgICAgICAgIHNldFByZWZlcmVuY2VzLFxuICAgICAgICAgIHJlc2V0UHJlZmVyZW5jZXMsXG4gICAgICAgICAgc2F2ZUNvbnNlbnRcbiAgICAgICAgfSkgPT4gKFxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucz17ZGVzdGluYXRpb25zfVxuICAgICAgICAgICAgbmV3RGVzdGluYXRpb25zPXtuZXdEZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICBwcmVmZXJlbmNlcz17cHJlZmVyZW5jZXN9XG4gICAgICAgICAgICBpc0NvbnNlbnRSZXF1aXJlZD17aXNDb25zZW50UmVxdWlyZWR9XG4gICAgICAgICAgICBzZXRQcmVmZXJlbmNlcz17c2V0UHJlZmVyZW5jZXN9XG4gICAgICAgICAgICByZXNldFByZWZlcmVuY2VzPXtyZXNldFByZWZlcmVuY2VzfVxuICAgICAgICAgICAgc2F2ZUNvbnNlbnQ9e3NhdmVDb25zZW50fVxuICAgICAgICAgICAgaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbj17aW1wbHlDb25zZW50T25JbnRlcmFjdGlvbn1cbiAgICAgICAgICAgIGJhbm5lckNvbnRlbnQ9e2Jhbm5lckNvbnRlbnR9XG4gICAgICAgICAgICBiYW5uZXJTdWJDb250ZW50PXtiYW5uZXJTdWJDb250ZW50fVxuICAgICAgICAgICAgYmFubmVyVGV4dENvbG9yPXtiYW5uZXJUZXh0Q29sb3J9XG4gICAgICAgICAgICBiYW5uZXJCYWNrZ3JvdW5kQ29sb3I9e2Jhbm5lckJhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICAgIHByZWZlcmVuY2VzRGlhbG9nVGl0bGU9e3ByZWZlcmVuY2VzRGlhbG9nVGl0bGV9XG4gICAgICAgICAgICBwcmVmZXJlbmNlc0RpYWxvZ0NvbnRlbnQ9e3ByZWZlcmVuY2VzRGlhbG9nQ29udGVudH1cbiAgICAgICAgICAgIGNhbmNlbERpYWxvZ1RpdGxlPXtjYW5jZWxEaWFsb2dUaXRsZX1cbiAgICAgICAgICAgIGNhbmNlbERpYWxvZ0NvbnRlbnQ9e2NhbmNlbERpYWxvZ0NvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29uc2VudE1hbmFnZXJCdWlsZGVyPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZU1hcEN1c3RvbVByZWZlcmVuY2VzID0gKHtkZXN0aW5hdGlvbnMsIHByZWZlcmVuY2VzfSkgPT4ge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgPSB7fVxuICAgIGNvbnN0IGN1c3RvbVByZWZlcmVuY2VzID0ge31cblxuICAgIC8vIERlZmF1bHQgdW5zZXQgcHJlZmVyZW5jZXMgdG8gdHJ1ZSAoZm9yIGltcGxpY2l0IGNvbnNlbnQpXG4gICAgZm9yIChjb25zdCBwcmVmZXJlbmNlTmFtZSBvZiBPYmplY3Qua2V5cyhwcmVmZXJlbmNlcykpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJlZmVyZW5jZXNbcHJlZmVyZW5jZU5hbWVdXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgY3VzdG9tUHJlZmVyZW5jZXNbcHJlZmVyZW5jZU5hbWVdID0gdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1c3RvbVByZWZlcmVuY2VzW3ByZWZlcmVuY2VOYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgICAgaWYgKEFEVkVSVElTSU5HX0NBVEVHT1JJRVMuZmluZChjID0+IGMgPT09IGRlc3RpbmF0aW9uLmNhdGVnb3J5KSkge1xuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSA9IGN1c3RvbVByZWZlcmVuY2VzLmFkdmVydGlzaW5nXG4gICAgICB9IGVsc2UgaWYgKEZVTkNUSU9OQUxfQ0FURUdPUklFUy5maW5kKGMgPT4gYyA9PT0gZGVzdGluYXRpb24uY2F0ZWdvcnkpKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNbZGVzdGluYXRpb24uaWRdID0gY3VzdG9tUHJlZmVyZW5jZXMuZnVuY3Rpb25hbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gbWFya2V0aW5nXG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNbZGVzdGluYXRpb24uaWRdID1cbiAgICAgICAgICBjdXN0b21QcmVmZXJlbmNlcy5tYXJrZXRpbmdBbmRBbmFseXRpY3NcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzfVxuICB9XG59XG4iXX0=
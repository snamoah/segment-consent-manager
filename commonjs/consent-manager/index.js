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
          onError = _props.onError;


      return _react2.default.createElement(
        _consentManagerBuilder2.default,
        {
          onError: onError,
          writeKey: writeKey,
          otherWriteKeys: otherWriteKeys,
          shouldRequireConsent: shouldRequireConsent,
          cookieDomain: cookieDomain,
          initialPreferences: initialPreferences,
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
  cancelDialogContent: _propTypes2.default.node.isRequired
};
ConsentManager.defaultProps = {
  otherWriteKeys: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFByZWZlcmVuY2VzIiwibWFya2V0aW5nQW5kQW5hbHl0aWNzIiwiYWR2ZXJ0aXNpbmciLCJmdW5jdGlvbmFsIiwiQ29uc2VudE1hbmFnZXIiLCJoYW5kbGVNYXBDdXN0b21QcmVmZXJlbmNlcyIsImRlc3RpbmF0aW9ucyIsInByZWZlcmVuY2VzIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImN1c3RvbVByZWZlcmVuY2VzIiwicHJlZmVyZW5jZU5hbWUiLCJ2YWx1ZSIsImRlc3RpbmF0aW9uIiwiQURWRVJUSVNJTkdfQ0FURUdPUklFUyIsImZpbmQiLCJjIiwiY2F0ZWdvcnkiLCJpZCIsIkZVTkNUSU9OQUxfQ0FURUdPUklFUyIsInByb3BzIiwid3JpdGVLZXkiLCJvdGhlcldyaXRlS2V5cyIsInNob3VsZFJlcXVpcmVDb25zZW50IiwiaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbiIsImNvb2tpZURvbWFpbiIsImJhbm5lckNvbnRlbnQiLCJiYW5uZXJTdWJDb250ZW50IiwiYmFubmVyVGV4dENvbG9yIiwiYmFubmVyQmFja2dyb3VuZENvbG9yIiwicHJlZmVyZW5jZXNEaWFsb2dUaXRsZSIsInByZWZlcmVuY2VzRGlhbG9nQ29udGVudCIsImNhbmNlbERpYWxvZ1RpdGxlIiwiY2FuY2VsRGlhbG9nQ29udGVudCIsIm9uRXJyb3IiLCJuZXdEZXN0aW5hdGlvbnMiLCJpc0NvbnNlbnRSZXF1aXJlZCIsInNldFByZWZlcmVuY2VzIiwicmVzZXRQcmVmZXJlbmNlcyIsInNhdmVDb25zZW50IiwiUHVyZUNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7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b0JBQVVDLE1BUlY7QUFTakJmLHlCQUF1QmMsb0JBQVVDLE1BVGhCO0FBVWpCZCwwQkFBd0JhLG9CQUFVTSxJQVZqQjtBQVdqQmxCLDRCQUEwQlksb0JBQVVNLElBQVYsQ0FBZUosVUFYeEI7QUFZakJYLFdBQVNTLG9CQUFVSSxJQVpGO0FBYWpCZixxQkFBbUJXLG9CQUFVTSxJQWJaO0FBY2pCaEIsdUJBQXFCVSxvQkFBVU0sSUFBVixDQUFlSjtBQWRuQixDO0FBSEF4QyxjLENBb0JaNkMsWSxHQUFlO0FBQ3BCNUIsa0JBQWdCLEVBREk7QUFFcEJDLHdCQUFzQjtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBRkY7QUFHcEJDLDZCQUEyQixJQUhQO0FBSXBCVSxXQUFTaUIsU0FKVztBQUtwQjFCLGdCQUFjMEIsU0FMTTtBQU1wQnZCLG1CQUFpQixNQU5HO0FBT3BCRCxvQkFBa0IsOENBUEU7QUFRcEJFLHlCQUF1QixTQVJIO0FBU3BCQywwQkFBd0IscUNBVEo7QUFVcEJFLHFCQUFtQjtBQVZDLEM7a0JBcEJIM0IsYyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbnNlbnRNYW5hZ2VyQnVpbGRlciBmcm9tICcuLi9jb25zZW50LW1hbmFnZXItYnVpbGRlcidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQge0FEVkVSVElTSU5HX0NBVEVHT1JJRVMsIEZVTkNUSU9OQUxfQ0FURUdPUklFU30gZnJvbSAnLi9jYXRlZ29yaWVzJ1xuXG5jb25zdCBpbml0aWFsUHJlZmVyZW5jZXMgPSB7XG4gIG1hcmtldGluZ0FuZEFuYWx5dGljczogbnVsbCxcbiAgYWR2ZXJ0aXNpbmc6IG51bGwsXG4gIGZ1bmN0aW9uYWw6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VudE1hbmFnZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NvbnNlbnRNYW5hZ2VyJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd3JpdGVLZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvdGhlcldyaXRlS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb246IFByb3BUeXBlcy5ib29sLFxuICAgIGNvb2tpZURvbWFpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYW5uZXJDb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGJhbm5lclN1YkNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFubmVyVGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhbm5lckJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmZXJlbmNlc0RpYWxvZ1RpdGxlOiBQcm9wVHlwZXMubm9kZSxcbiAgICBwcmVmZXJlbmNlc0RpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2FuY2VsRGlhbG9nVGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNhbmNlbERpYWxvZ0NvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3RoZXJXcml0ZUtleXM6IFtdLFxuICAgIHNob3VsZFJlcXVpcmVDb25zZW50OiAoKSA9PiB0cnVlLFxuICAgIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgb25FcnJvcjogdW5kZWZpbmVkLFxuICAgIGNvb2tpZURvbWFpbjogdW5kZWZpbmVkLFxuICAgIGJhbm5lclRleHRDb2xvcjogJyNmZmYnLFxuICAgIGJhbm5lclN1YkNvbnRlbnQ6ICdZb3UgY2FuIGNoYW5nZSB5b3VyIHByZWZlcmVuY2VzIGF0IGFueSB0aW1lLicsXG4gICAgYmFubmVyQmFja2dyb3VuZENvbG9yOiAnIzFmNDE2MCcsXG4gICAgcHJlZmVyZW5jZXNEaWFsb2dUaXRsZTogJ1dlYnNpdGUgRGF0YSBDb2xsZWN0aW9uIFByZWZlcmVuY2VzJyxcbiAgICBjYW5jZWxEaWFsb2dUaXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdyaXRlS2V5LFxuICAgICAgb3RoZXJXcml0ZUtleXMsXG4gICAgICBzaG91bGRSZXF1aXJlQ29uc2VudCxcbiAgICAgIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb24sXG4gICAgICBjb29raWVEb21haW4sXG4gICAgICBiYW5uZXJDb250ZW50LFxuICAgICAgYmFubmVyU3ViQ29udGVudCxcbiAgICAgIGJhbm5lclRleHRDb2xvcixcbiAgICAgIGJhbm5lckJhY2tncm91bmRDb2xvcixcbiAgICAgIHByZWZlcmVuY2VzRGlhbG9nVGl0bGUsXG4gICAgICBwcmVmZXJlbmNlc0RpYWxvZ0NvbnRlbnQsXG4gICAgICBjYW5jZWxEaWFsb2dUaXRsZSxcbiAgICAgIGNhbmNlbERpYWxvZ0NvbnRlbnQsXG4gICAgICBvbkVycm9yXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29uc2VudE1hbmFnZXJCdWlsZGVyXG4gICAgICAgIG9uRXJyb3I9e29uRXJyb3J9XG4gICAgICAgIHdyaXRlS2V5PXt3cml0ZUtleX1cbiAgICAgICAgb3RoZXJXcml0ZUtleXM9e290aGVyV3JpdGVLZXlzfVxuICAgICAgICBzaG91bGRSZXF1aXJlQ29uc2VudD17c2hvdWxkUmVxdWlyZUNvbnNlbnR9XG4gICAgICAgIGNvb2tpZURvbWFpbj17Y29va2llRG9tYWlufVxuICAgICAgICBpbml0aWFsUHJlZmVyZW5jZXM9e2luaXRpYWxQcmVmZXJlbmNlc31cbiAgICAgICAgbWFwQ3VzdG9tUHJlZmVyZW5jZXM9e3RoaXMuaGFuZGxlTWFwQ3VzdG9tUHJlZmVyZW5jZXN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgICBuZXdEZXN0aW5hdGlvbnMsXG4gICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICAgICAgc2V0UHJlZmVyZW5jZXMsXG4gICAgICAgICAgcmVzZXRQcmVmZXJlbmNlcyxcbiAgICAgICAgICBzYXZlQ29uc2VudFxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgZGVzdGluYXRpb25zPXtkZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICBuZXdEZXN0aW5hdGlvbnM9e25ld0Rlc3RpbmF0aW9uc31cbiAgICAgICAgICAgIHByZWZlcmVuY2VzPXtwcmVmZXJlbmNlc31cbiAgICAgICAgICAgIGlzQ29uc2VudFJlcXVpcmVkPXtpc0NvbnNlbnRSZXF1aXJlZH1cbiAgICAgICAgICAgIHNldFByZWZlcmVuY2VzPXtzZXRQcmVmZXJlbmNlc31cbiAgICAgICAgICAgIHJlc2V0UHJlZmVyZW5jZXM9e3Jlc2V0UHJlZmVyZW5jZXN9XG4gICAgICAgICAgICBzYXZlQ29uc2VudD17c2F2ZUNvbnNlbnR9XG4gICAgICAgICAgICBpbXBseUNvbnNlbnRPbkludGVyYWN0aW9uPXtpbXBseUNvbnNlbnRPbkludGVyYWN0aW9ufVxuICAgICAgICAgICAgYmFubmVyQ29udGVudD17YmFubmVyQ29udGVudH1cbiAgICAgICAgICAgIGJhbm5lclN1YkNvbnRlbnQ9e2Jhbm5lclN1YkNvbnRlbnR9XG4gICAgICAgICAgICBiYW5uZXJUZXh0Q29sb3I9e2Jhbm5lclRleHRDb2xvcn1cbiAgICAgICAgICAgIGJhbm5lckJhY2tncm91bmRDb2xvcj17YmFubmVyQmFja2dyb3VuZENvbG9yfVxuICAgICAgICAgICAgcHJlZmVyZW5jZXNEaWFsb2dUaXRsZT17cHJlZmVyZW5jZXNEaWFsb2dUaXRsZX1cbiAgICAgICAgICAgIHByZWZlcmVuY2VzRGlhbG9nQ29udGVudD17cHJlZmVyZW5jZXNEaWFsb2dDb250ZW50fVxuICAgICAgICAgICAgY2FuY2VsRGlhbG9nVGl0bGU9e2NhbmNlbERpYWxvZ1RpdGxlfVxuICAgICAgICAgICAgY2FuY2VsRGlhbG9nQ29udGVudD17Y2FuY2VsRGlhbG9nQ29udGVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Db25zZW50TWFuYWdlckJ1aWxkZXI+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlTWFwQ3VzdG9tUHJlZmVyZW5jZXMgPSAoe2Rlc3RpbmF0aW9ucywgcHJlZmVyZW5jZXN9KSA9PiB7XG4gICAgY29uc3QgZGVzdGluYXRpb25QcmVmZXJlbmNlcyA9IHt9XG4gICAgY29uc3QgY3VzdG9tUHJlZmVyZW5jZXMgPSB7fVxuXG4gICAgLy8gRGVmYXVsdCB1bnNldCBwcmVmZXJlbmNlcyB0byB0cnVlIChmb3IgaW1wbGljaXQgY29uc2VudClcbiAgICBmb3IgKGNvbnN0IHByZWZlcmVuY2VOYW1lIG9mIE9iamVjdC5rZXlzKHByZWZlcmVuY2VzKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcmVmZXJlbmNlc1twcmVmZXJlbmNlTmFtZV1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICBjdXN0b21QcmVmZXJlbmNlc1twcmVmZXJlbmNlTmFtZV0gPSB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VzdG9tUHJlZmVyZW5jZXNbcHJlZmVyZW5jZU5hbWVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgICBpZiAoQURWRVJUSVNJTkdfQ0FURUdPUklFUy5maW5kKGMgPT4gYyA9PT0gZGVzdGluYXRpb24uY2F0ZWdvcnkpKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNbZGVzdGluYXRpb24uaWRdID0gY3VzdG9tUHJlZmVyZW5jZXMuYWR2ZXJ0aXNpbmdcbiAgICAgIH0gZWxzZSBpZiAoRlVOQ1RJT05BTF9DQVRFR09SSUVTLmZpbmQoYyA9PiBjID09PSBkZXN0aW5hdGlvbi5jYXRlZ29yeSkpIHtcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0gPSBjdXN0b21QcmVmZXJlbmNlcy5mdW5jdGlvbmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWxsYmFjayB0byBtYXJrZXRpbmdcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0gPVxuICAgICAgICAgIGN1c3RvbVByZWZlcmVuY2VzLm1hcmtldGluZ0FuZEFuYWx5dGljc1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7ZGVzdGluYXRpb25QcmVmZXJlbmNlcywgY3VzdG9tUHJlZmVyZW5jZXN9XG4gIH1cbn1cbiJdfQ==
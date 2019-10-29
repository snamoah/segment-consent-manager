'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preferences = require('./preferences');

var _fetchDestinations = require('./fetch-destinations');

var _fetchDestinations2 = _interopRequireDefault(_fetchDestinations);

var _analytics = require('./analytics');

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNewDestinations(destinations, preferences) {
  var newDestinations = [];

  // If there are no preferences then all destinations are new
  if (!preferences) {
    return destinations;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(destinations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var destination = _step.value;

      if (preferences[destination.id] === undefined) {
        newDestinations.push(destination);
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

  return newDestinations;
}

var ConsentManagerBuilder = function (_Component) {
  (0, _inherits3.default)(ConsentManagerBuilder, _Component);

  function ConsentManagerBuilder() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConsentManagerBuilder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConsentManagerBuilder.__proto__ || (0, _getPrototypeOf2.default)(ConsentManagerBuilder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: true,
      destinations: [],
      newDestinations: [],
      preferences: {},
      isConsentRequired: true
    }, _this.initialise = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$props, writeKey, otherWriteKeys, onConsent, shouldRequireConsent, initialPreferences, mapCustomPreferences, _loadPreferences, destinationPreferences, customPreferences, _ref3, _ref4, isConsentRequired, destinations, newDestinations, preferences;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, writeKey = _this$props.writeKey, otherWriteKeys = _this$props.otherWriteKeys, onConsent = _this$props.onConsent, shouldRequireConsent = _this$props.shouldRequireConsent, initialPreferences = _this$props.initialPreferences, mapCustomPreferences = _this$props.mapCustomPreferences;


              console.log('===> initializing manager');
              // TODO: add option to run mapCustomPreferences on load so that the destination preferences automatically get updated
              _loadPreferences = (0, _preferences.loadPreferences)(), destinationPreferences = _loadPreferences.destinationPreferences, customPreferences = _loadPreferences.customPreferences;
              _context.next = 5;
              return _promise2.default.all([shouldRequireConsent(), (0, _fetchDestinations2.default)([writeKey].concat((0, _toConsumableArray3.default)(otherWriteKeys)))]);

            case 5:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              isConsentRequired = _ref4[0];
              destinations = _ref4[1];
              newDestinations = getNewDestinations(destinations, destinationPreferences);


              console.log('===> before conditional load analytics', onConsent);

              (0, _analytics2.default)({
                writeKey: writeKey,
                destinations: destinations,
                destinationPreferences: destinationPreferences,
                isConsentRequired: isConsentRequired,
                onConsent: onConsent
              });

              preferences = void 0;

              if (mapCustomPreferences) {
                preferences = customPreferences || initialPreferences;
              } else {
                preferences = destinationPreferences || initialPreferences;
              }

              _this.setState({
                isLoading: false,
                destinations: destinations,
                newDestinations: newDestinations,
                preferences: preferences,
                isConsentRequired: isConsentRequired
              });

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.handleSetPreferences = function (newPreferences) {
      _this.setState(function (prevState) {
        var destinations = prevState.destinations,
            existingPreferences = prevState.preferences;

        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        });
        return { preferences: preferences };
      });
    }, _this.handleResetPreferences = function () {
      var _this$props2 = _this.props,
          initialPreferences = _this$props2.initialPreferences,
          mapCustomPreferences = _this$props2.mapCustomPreferences;

      var _loadPreferences2 = (0, _preferences.loadPreferences)(),
          destinationPreferences = _loadPreferences2.destinationPreferences,
          customPreferences = _loadPreferences2.customPreferences;

      var preferences = void 0;
      if (mapCustomPreferences) {
        preferences = customPreferences || initialPreferences;
      } else {
        preferences = destinationPreferences || initialPreferences;
      }

      _this.setState({ preferences: preferences });
    }, _this.handleSaveConsent = function (newPreferences, shouldReload) {
      var _this$props3 = _this.props,
          writeKey = _this$props3.writeKey,
          cookieDomain = _this$props3.cookieDomain,
          mapCustomPreferences = _this$props3.mapCustomPreferences;


      _this.setState(function (prevState) {
        var destinations = prevState.destinations,
            existingPreferences = prevState.preferences,
            isConsentRequired = prevState.isConsentRequired;


        var preferences = _this.mergePreferences({
          destinations: destinations,
          newPreferences: newPreferences,
          existingPreferences: existingPreferences
        });

        var destinationPreferences = void 0;
        var customPreferences = void 0;
        if (mapCustomPreferences) {
          ;
          var _mapCustomPreferences = mapCustomPreferences({
            destinations: destinations,
            preferences: preferences
          });

          destinationPreferences = _mapCustomPreferences.destinationPreferences;
          customPreferences = _mapCustomPreferences.customPreferences;

          if (customPreferences) {
            // Allow the customPreferences to be updated from mapCustomPreferences
            preferences = customPreferences;
          } else {
            // Make returning the customPreferences from mapCustomPreferences optional
            customPreferences = preferences;
          }
        } else {
          destinationPreferences = preferences;
        }

        var newDestinations = getNewDestinations(destinations, destinationPreferences);

        (0, _preferences.savePreferences)({ destinationPreferences: destinationPreferences, customPreferences: customPreferences, cookieDomain: cookieDomain });
        console.log('===> saving consent');
        console.log('===> before loading analytics');
        (0, _analytics2.default)({
          writeKey: writeKey,
          destinations: destinations,
          destinationPreferences: destinationPreferences,
          isConsentRequired: isConsentRequired,
          shouldReload: shouldReload
        });

        return { destinationPreferences: destinationPreferences, preferences: preferences, newDestinations: newDestinations };
      });
    }, _this.mergePreferences = function (_ref5) {
      var destinations = _ref5.destinations,
          existingPreferences = _ref5.existingPreferences,
          newPreferences = _ref5.newPreferences;

      var preferences = void 0;

      if (typeof newPreferences === 'boolean') {
        var destinationPreferences = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(destinations), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var destination = _step2.value;

            destinationPreferences[destination.id] = newPreferences;
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

        preferences = destinationPreferences;
      } else if (newPreferences) {
        preferences = (0, _extends3.default)({}, existingPreferences, newPreferences);
      } else {
        preferences = existingPreferences;
      }

      return preferences;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConsentManagerBuilder, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          isLoading = _state.isLoading,
          destinations = _state.destinations,
          preferences = _state.preferences,
          newDestinations = _state.newDestinations,
          isConsentRequired = _state.isConsentRequired;


      if (isLoading) {
        return null;
      }

      return children({
        destinations: destinations,
        newDestinations: newDestinations,
        preferences: preferences,
        isConsentRequired: isConsentRequired,
        setPreferences: this.handleSetPreferences,
        resetPreferences: this.handleResetPreferences,
        saveConsent: this.handleSaveConsent
      });
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var onError;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onError = this.props.onError;

                if (!(onError && typeof onError === 'function')) {
                  _context2.next = 13;
                  break;
                }

                _context2.prev = 2;
                _context2.next = 5;
                return this.initialise();

              case 5:
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](2);
                _context2.next = 11;
                return onError(_context2.t0);

              case 11:
                _context2.next = 14;
                break;

              case 13:
                this.initialise();

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 7]]);
      }));

      function componentDidMount() {
        return _ref6.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }]);
  return ConsentManagerBuilder;
}(_react.Component);

ConsentManagerBuilder.displayName = 'ConsentManagerBuilder';
ConsentManagerBuilder.propTypes = {
  children: _propTypes2.default.func.isRequired,
  onError: _propTypes2.default.func,
  writeKey: _propTypes2.default.string.isRequired,
  otherWriteKeys: _propTypes2.default.arrayOf(_propTypes2.default.string),
  shouldRequireConsent: _propTypes2.default.func,
  initialPreferences: _propTypes2.default.object,
  mapCustomPreferences: _propTypes2.default.func,
  cookieDomain: _propTypes2.default.string,
  onConsent: _propTypes2.default.func
};
ConsentManagerBuilder.defaultProps = {
  otherWriteKeys: [],
  onError: undefined,
  onConsent: function onConsent() {},
  shouldRequireConsent: function shouldRequireConsent() {
    return true;
  },
  initialPreferences: {},
  mapCustomPreferences: undefined,
  cookieDomain: undefined
};
exports.default = ConsentManagerBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXROZXdEZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbnMiLCJwcmVmZXJlbmNlcyIsIm5ld0Rlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQ29uc2VudE1hbmFnZXJCdWlsZGVyIiwic3RhdGUiLCJpc0xvYWRpbmciLCJpc0NvbnNlbnRSZXF1aXJlZCIsImluaXRpYWxpc2UiLCJwcm9wcyIsIndyaXRlS2V5Iiwib3RoZXJXcml0ZUtleXMiLCJvbkNvbnNlbnQiLCJzaG91bGRSZXF1aXJlQ29uc2VudCIsImluaXRpYWxQcmVmZXJlbmNlcyIsIm1hcEN1c3RvbVByZWZlcmVuY2VzIiwiY29uc29sZSIsImxvZyIsImRlc3RpbmF0aW9uUHJlZmVyZW5jZXMiLCJjdXN0b21QcmVmZXJlbmNlcyIsImFsbCIsInNldFN0YXRlIiwiaGFuZGxlU2V0UHJlZmVyZW5jZXMiLCJwcmV2U3RhdGUiLCJleGlzdGluZ1ByZWZlcmVuY2VzIiwibWVyZ2VQcmVmZXJlbmNlcyIsIm5ld1ByZWZlcmVuY2VzIiwiaGFuZGxlUmVzZXRQcmVmZXJlbmNlcyIsImhhbmRsZVNhdmVDb25zZW50Iiwic2hvdWxkUmVsb2FkIiwiY29va2llRG9tYWluIiwiY2hpbGRyZW4iLCJzZXRQcmVmZXJlbmNlcyIsInJlc2V0UHJlZmVyZW5jZXMiLCJzYXZlQ29uc2VudCIsIm9uRXJyb3IiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXlPZiIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7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QUtqQjdCLHdCQUFzQjBCLG9CQUFVQyxJQUxmO0FBTWpCMUIsc0JBQW9CeUIsb0JBQVVLLE1BTmI7QUFPakI3Qix3QkFBc0J3QixvQkFBVUMsSUFQZjtBQVFqQlYsZ0JBQWNTLG9CQUFVRyxNQVJQO0FBU2pCOUIsYUFBVzJCLG9CQUFVQztBQVRKLEM7QUFIQXBDLHFCLENBZVp5QyxZLEdBQWU7QUFDcEJsQyxrQkFBZ0IsRUFESTtBQUVwQndCLFdBQVNqQyxTQUZXO0FBR3BCVSxhQUFXLHFCQUFNLENBQUUsQ0FIQztBQUlwQkMsd0JBQXNCO0FBQUEsV0FBTSxJQUFOO0FBQUEsR0FKRjtBQUtwQkMsc0JBQW9CLEVBTEE7QUFNcEJDLHdCQUFzQmIsU0FORjtBQU9wQjRCLGdCQUFjNUI7QUFQTSxDO2tCQWZIRSxxQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7bG9hZFByZWZlcmVuY2VzLCBzYXZlUHJlZmVyZW5jZXN9IGZyb20gJy4vcHJlZmVyZW5jZXMnXG5pbXBvcnQgZmV0Y2hEZXN0aW5hdGlvbnMgZnJvbSAnLi9mZXRjaC1kZXN0aW5hdGlvbnMnXG5pbXBvcnQgY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3MgZnJvbSAnLi9hbmFseXRpY3MnXG5cbmZ1bmN0aW9uIGdldE5ld0Rlc3RpbmF0aW9ucyhkZXN0aW5hdGlvbnMsIHByZWZlcmVuY2VzKSB7XG4gIGNvbnN0IG5ld0Rlc3RpbmF0aW9ucyA9IFtdXG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHByZWZlcmVuY2VzIHRoZW4gYWxsIGRlc3RpbmF0aW9ucyBhcmUgbmV3XG4gIGlmICghcHJlZmVyZW5jZXMpIHtcbiAgICByZXR1cm4gZGVzdGluYXRpb25zXG4gIH1cblxuICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgIGlmIChwcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3RGVzdGluYXRpb25zLnB1c2goZGVzdGluYXRpb24pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0Rlc3RpbmF0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZW50TWFuYWdlckJ1aWxkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ29uc2VudE1hbmFnZXJCdWlsZGVyJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25FcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgd3JpdGVLZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBvdGhlcldyaXRlS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGluaXRpYWxQcmVmZXJlbmNlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXBDdXN0b21QcmVmZXJlbmNlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29va2llRG9tYWluOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ29uc2VudDogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG90aGVyV3JpdGVLZXlzOiBbXSxcbiAgICBvbkVycm9yOiB1bmRlZmluZWQsXG4gICAgb25Db25zZW50OiAoKSA9PiB7fSxcbiAgICBzaG91bGRSZXF1aXJlQ29uc2VudDogKCkgPT4gdHJ1ZSxcbiAgICBpbml0aWFsUHJlZmVyZW5jZXM6IHt9LFxuICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzOiB1bmRlZmluZWQsXG4gICAgY29va2llRG9tYWluOiB1bmRlZmluZWRcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBkZXN0aW5hdGlvbnM6IFtdLFxuICAgIG5ld0Rlc3RpbmF0aW9uczogW10sXG4gICAgcHJlZmVyZW5jZXM6IHt9LFxuICAgIGlzQ29uc2VudFJlcXVpcmVkOiB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBpc0xvYWRpbmcsXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICBzZXRQcmVmZXJlbmNlczogdGhpcy5oYW5kbGVTZXRQcmVmZXJlbmNlcyxcbiAgICAgIHJlc2V0UHJlZmVyZW5jZXM6IHRoaXMuaGFuZGxlUmVzZXRQcmVmZXJlbmNlcyxcbiAgICAgIHNhdmVDb25zZW50OiB0aGlzLmhhbmRsZVNhdmVDb25zZW50XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtvbkVycm9yfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXNlKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYXdhaXQgb25FcnJvcihlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxpc2UoKVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd3JpdGVLZXksXG4gICAgICBvdGhlcldyaXRlS2V5cyxcbiAgICAgIG9uQ29uc2VudCxcbiAgICAgIHNob3VsZFJlcXVpcmVDb25zZW50LFxuICAgICAgaW5pdGlhbFByZWZlcmVuY2VzLFxuICAgICAgbWFwQ3VzdG9tUHJlZmVyZW5jZXNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc29sZS5sb2coJz09PT4gaW5pdGlhbGl6aW5nIG1hbmFnZXInKVxuICAgIC8vIFRPRE86IGFkZCBvcHRpb24gdG8gcnVuIG1hcEN1c3RvbVByZWZlcmVuY2VzIG9uIGxvYWQgc28gdGhhdCB0aGUgZGVzdGluYXRpb24gcHJlZmVyZW5jZXMgYXV0b21hdGljYWxseSBnZXQgdXBkYXRlZFxuICAgIGNvbnN0IHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBsb2FkUHJlZmVyZW5jZXMoKVxuXG4gICAgY29uc3QgW2lzQ29uc2VudFJlcXVpcmVkLCBkZXN0aW5hdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQoKSxcbiAgICAgIGZldGNoRGVzdGluYXRpb25zKFt3cml0ZUtleSwgLi4ub3RoZXJXcml0ZUtleXNdKVxuICAgIF0pXG5cbiAgICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBnZXROZXdEZXN0aW5hdGlvbnMoXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgKVxuXG4gICAgY29uc29sZS5sb2coJz09PT4gYmVmb3JlIGNvbmRpdGlvbmFsIGxvYWQgYW5hbHl0aWNzJywgb25Db25zZW50KTtcblxuICAgIGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzKHtcbiAgICAgIHdyaXRlS2V5LFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkLFxuICAgICAgb25Db25zZW50LFxuICAgIH0pXG5cbiAgICBsZXQgcHJlZmVyZW5jZXNcbiAgICBpZiAobWFwQ3VzdG9tUHJlZmVyZW5jZXMpIHtcbiAgICAgIHByZWZlcmVuY2VzID0gY3VzdG9tUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZlcmVuY2VzID0gZGVzdGluYXRpb25QcmVmZXJlbmNlcyB8fCBpbml0aWFsUHJlZmVyZW5jZXNcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBuZXdEZXN0aW5hdGlvbnMsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVNldFByZWZlcmVuY2VzID0gbmV3UHJlZmVyZW5jZXMgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHtkZXN0aW5hdGlvbnMsIHByZWZlcmVuY2VzOiBleGlzdGluZ1ByZWZlcmVuY2VzfSA9IHByZXZTdGF0ZVxuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSB0aGlzLm1lcmdlUHJlZmVyZW5jZXMoe1xuICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgIG5ld1ByZWZlcmVuY2VzLFxuICAgICAgICBleGlzdGluZ1ByZWZlcmVuY2VzXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHtwcmVmZXJlbmNlc31cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlUmVzZXRQcmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7aW5pdGlhbFByZWZlcmVuY2VzLCBtYXBDdXN0b21QcmVmZXJlbmNlc30gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzfSA9IGxvYWRQcmVmZXJlbmNlcygpXG5cbiAgICBsZXQgcHJlZmVyZW5jZXNcbiAgICBpZiAobWFwQ3VzdG9tUHJlZmVyZW5jZXMpIHtcbiAgICAgIHByZWZlcmVuY2VzID0gY3VzdG9tUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZlcmVuY2VzID0gZGVzdGluYXRpb25QcmVmZXJlbmNlcyB8fCBpbml0aWFsUHJlZmVyZW5jZXNcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtwcmVmZXJlbmNlc30pXG4gIH1cblxuICBoYW5kbGVTYXZlQ29uc2VudCA9IChuZXdQcmVmZXJlbmNlcywgc2hvdWxkUmVsb2FkKSA9PiB7XG4gICAgY29uc3Qge3dyaXRlS2V5LCBjb29raWVEb21haW4sIG1hcEN1c3RvbVByZWZlcmVuY2VzfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBwcmVmZXJlbmNlczogZXhpc3RpbmdQcmVmZXJlbmNlcyxcbiAgICAgICAgaXNDb25zZW50UmVxdWlyZWRcbiAgICAgIH0gPSBwcmV2U3RhdGVcblxuICAgICAgbGV0IHByZWZlcmVuY2VzID0gdGhpcy5tZXJnZVByZWZlcmVuY2VzKHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBuZXdQcmVmZXJlbmNlcyxcbiAgICAgICAgZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNcbiAgICAgIGxldCBjdXN0b21QcmVmZXJlbmNlc1xuICAgICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICAgIDsoe2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzfSA9IG1hcEN1c3RvbVByZWZlcmVuY2VzKHtcbiAgICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgICAgcHJlZmVyZW5jZXNcbiAgICAgICAgfSkpXG4gICAgICAgIGlmIChjdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgICAgIC8vIEFsbG93IHRoZSBjdXN0b21QcmVmZXJlbmNlcyB0byBiZSB1cGRhdGVkIGZyb20gbWFwQ3VzdG9tUHJlZmVyZW5jZXNcbiAgICAgICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSByZXR1cm5pbmcgdGhlIGN1c3RvbVByZWZlcmVuY2VzIGZyb20gbWFwQ3VzdG9tUHJlZmVyZW5jZXMgb3B0aW9uYWxcbiAgICAgICAgICBjdXN0b21QcmVmZXJlbmNlcyA9IHByZWZlcmVuY2VzXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBnZXROZXdEZXN0aW5hdGlvbnMoXG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1xuICAgICAgKVxuXG4gICAgICBzYXZlUHJlZmVyZW5jZXMoe2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzLCBjb29raWVEb21haW59KVxuICAgICAgY29uc29sZS5sb2coJz09PT4gc2F2aW5nIGNvbnNlbnQnKTtcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0+IGJlZm9yZSBsb2FkaW5nIGFuYWx5dGljcycpO1xuICAgICAgY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICAgICAgICB3cml0ZUtleSxcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICAgICAgICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgICAgICAgc2hvdWxkUmVsb2FkXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4ge2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIHByZWZlcmVuY2VzLCBuZXdEZXN0aW5hdGlvbnN9XG4gICAgfSlcbiAgfVxuXG4gIG1lcmdlUHJlZmVyZW5jZXMgPSAoe2Rlc3RpbmF0aW9ucywgZXhpc3RpbmdQcmVmZXJlbmNlcywgbmV3UHJlZmVyZW5jZXN9KSA9PiB7XG4gICAgbGV0IHByZWZlcmVuY2VzXG5cbiAgICBpZiAodHlwZW9mIG5ld1ByZWZlcmVuY2VzID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgPSB7fVxuICAgICAgZm9yIChjb25zdCBkZXN0aW5hdGlvbiBvZiBkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0gPSBuZXdQcmVmZXJlbmNlc1xuICAgICAgfVxuICAgICAgcHJlZmVyZW5jZXMgPSBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgfSBlbHNlIGlmIChuZXdQcmVmZXJlbmNlcykge1xuICAgICAgcHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXMsXG4gICAgICAgIC4uLm5ld1ByZWZlcmVuY2VzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZlcmVuY2VzID0gZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmZXJlbmNlc1xuICB9XG59XG4iXX0=
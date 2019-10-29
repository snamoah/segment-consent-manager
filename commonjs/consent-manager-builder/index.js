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
      var _this$props, writeKey, otherWriteKeys, shouldRequireConsent, initialPreferences, mapCustomPreferences, _loadPreferences, destinationPreferences, customPreferences, _ref3, _ref4, isConsentRequired, destinations, newDestinations, preferences;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, writeKey = _this$props.writeKey, otherWriteKeys = _this$props.otherWriteKeys, shouldRequireConsent = _this$props.shouldRequireConsent, initialPreferences = _this$props.initialPreferences, mapCustomPreferences = _this$props.mapCustomPreferences;
              // TODO: add option to run mapCustomPreferences on load so that the destination preferences automatically get updated

              _loadPreferences = (0, _preferences.loadPreferences)(), destinationPreferences = _loadPreferences.destinationPreferences, customPreferences = _loadPreferences.customPreferences;
              _context.next = 4;
              return _promise2.default.all([shouldRequireConsent(), (0, _fetchDestinations2.default)([writeKey].concat((0, _toConsumableArray3.default)(otherWriteKeys)))]);

            case 4:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              isConsentRequired = _ref4[0];
              destinations = _ref4[1];
              newDestinations = getNewDestinations(destinations, destinationPreferences);


              (0, _analytics2.default)({
                writeKey: writeKey,
                destinations: destinations,
                destinationPreferences: destinationPreferences,
                isConsentRequired: isConsentRequired
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

            case 13:
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
  cookieDomain: _propTypes2.default.string
};
ConsentManagerBuilder.defaultProps = {
  otherWriteKeys: [],
  onError: undefined,
  shouldRequireConsent: function shouldRequireConsent() {
    return true;
  },
  initialPreferences: {},
  mapCustomPreferences: undefined,
  cookieDomain: undefined
};
exports.default = ConsentManagerBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXROZXdEZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbnMiLCJwcmVmZXJlbmNlcyIsIm5ld0Rlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQ29uc2VudE1hbmFnZXJCdWlsZGVyIiwic3RhdGUiLCJpc0xvYWRpbmciLCJpc0NvbnNlbnRSZXF1aXJlZCIsImluaXRpYWxpc2UiLCJwcm9wcyIsIndyaXRlS2V5Iiwib3RoZXJXcml0ZUtleXMiLCJzaG91bGRSZXF1aXJlQ29uc2VudCIsImluaXRpYWxQcmVmZXJlbmNlcyIsIm1hcEN1c3RvbVByZWZlcmVuY2VzIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImN1c3RvbVByZWZlcmVuY2VzIiwiYWxsIiwic2V0U3RhdGUiLCJoYW5kbGVTZXRQcmVmZXJlbmNlcyIsInByZXZTdGF0ZSIsImV4aXN0aW5nUHJlZmVyZW5jZXMiLCJtZXJnZVByZWZlcmVuY2VzIiwibmV3UHJlZmVyZW5jZXMiLCJoYW5kbGVSZXNldFByZWZlcmVuY2VzIiwiaGFuZGxlU2F2ZUNvbnNlbnQiLCJzaG91bGRSZWxvYWQiLCJjb29raWVEb21haW4iLCJjaGlsZHJlbiIsInNldFByZWZlcmVuY2VzIiwicmVzZXRQcmVmZXJlbmNlcyIsInNhdmVDb25zZW50Iiwib25FcnJvciIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGtCQUFU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LElBQU47QUFBQSxHQUhGO0FBSXBCQyxzQkFBb0IsRUFKQTtBQUtwQkMsd0JBQXNCWixTQUxGO0FBTXBCeUIsZ0JBQWN6QjtBQU5NLEM7a0JBZEhFLHFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtsb2FkUHJlZmVyZW5jZXMsIHNhdmVQcmVmZXJlbmNlc30gZnJvbSAnLi9wcmVmZXJlbmNlcydcbmltcG9ydCBmZXRjaERlc3RpbmF0aW9ucyBmcm9tICcuL2ZldGNoLWRlc3RpbmF0aW9ucydcbmltcG9ydCBjb25kaXRpb25hbGx5TG9hZEFuYWx5dGljcyBmcm9tICcuL2FuYWx5dGljcydcblxuZnVuY3Rpb24gZ2V0TmV3RGVzdGluYXRpb25zKGRlc3RpbmF0aW9ucywgcHJlZmVyZW5jZXMpIHtcbiAgY29uc3QgbmV3RGVzdGluYXRpb25zID0gW11cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcHJlZmVyZW5jZXMgdGhlbiBhbGwgZGVzdGluYXRpb25zIGFyZSBuZXdcbiAgaWYgKCFwcmVmZXJlbmNlcykge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbnNcbiAgfVxuXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgaWYgKHByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdEZXN0aW5hdGlvbnMucHVzaChkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3RGVzdGluYXRpb25zXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNYW5hZ2VyQnVpbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdDb25zZW50TWFuYWdlckJ1aWxkZXInXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB3cml0ZUtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG90aGVyV3JpdGVLZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBzaG91bGRSZXF1aXJlQ29uc2VudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5pdGlhbFByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb29raWVEb21haW46IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3RoZXJXcml0ZUtleXM6IFtdLFxuICAgIG9uRXJyb3I6IHVuZGVmaW5lZCxcbiAgICBzaG91bGRSZXF1aXJlQ29uc2VudDogKCkgPT4gdHJ1ZSxcbiAgICBpbml0aWFsUHJlZmVyZW5jZXM6IHt9LFxuICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzOiB1bmRlZmluZWQsXG4gICAgY29va2llRG9tYWluOiB1bmRlZmluZWRcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBkZXN0aW5hdGlvbnM6IFtdLFxuICAgIG5ld0Rlc3RpbmF0aW9uczogW10sXG4gICAgcHJlZmVyZW5jZXM6IHt9LFxuICAgIGlzQ29uc2VudFJlcXVpcmVkOiB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7XG4gICAgICBpc0xvYWRpbmcsXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuKHtcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICBzZXRQcmVmZXJlbmNlczogdGhpcy5oYW5kbGVTZXRQcmVmZXJlbmNlcyxcbiAgICAgIHJlc2V0UHJlZmVyZW5jZXM6IHRoaXMuaGFuZGxlUmVzZXRQcmVmZXJlbmNlcyxcbiAgICAgIHNhdmVDb25zZW50OiB0aGlzLmhhbmRsZVNhdmVDb25zZW50XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtvbkVycm9yfSA9IHRoaXMucHJvcHNcbiAgICBpZiAob25FcnJvciAmJiB0eXBlb2Ygb25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXNlKClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYXdhaXQgb25FcnJvcihlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxpc2UoKVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd3JpdGVLZXksXG4gICAgICBvdGhlcldyaXRlS2V5cyxcbiAgICAgIHNob3VsZFJlcXVpcmVDb25zZW50LFxuICAgICAgaW5pdGlhbFByZWZlcmVuY2VzLFxuICAgICAgbWFwQ3VzdG9tUHJlZmVyZW5jZXNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIC8vIFRPRE86IGFkZCBvcHRpb24gdG8gcnVuIG1hcEN1c3RvbVByZWZlcmVuY2VzIG9uIGxvYWQgc28gdGhhdCB0aGUgZGVzdGluYXRpb24gcHJlZmVyZW5jZXMgYXV0b21hdGljYWxseSBnZXQgdXBkYXRlZFxuICAgIGNvbnN0IHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBsb2FkUHJlZmVyZW5jZXMoKVxuXG4gICAgY29uc3QgW2lzQ29uc2VudFJlcXVpcmVkLCBkZXN0aW5hdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQoKSxcbiAgICAgIGZldGNoRGVzdGluYXRpb25zKFt3cml0ZUtleSwgLi4ub3RoZXJXcml0ZUtleXNdKVxuICAgIF0pXG5cbiAgICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBnZXROZXdEZXN0aW5hdGlvbnMoXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgKVxuXG4gICAgY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICAgICAgd3JpdGVLZXksXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWRcbiAgICB9KVxuXG4gICAgbGV0IHByZWZlcmVuY2VzXG4gICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgbmV3RGVzdGluYXRpb25zLFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICBpc0NvbnNlbnRSZXF1aXJlZFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTZXRQcmVmZXJlbmNlcyA9IG5ld1ByZWZlcmVuY2VzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICBjb25zdCB7ZGVzdGluYXRpb25zLCBwcmVmZXJlbmNlczogZXhpc3RpbmdQcmVmZXJlbmNlc30gPSBwcmV2U3RhdGVcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gdGhpcy5tZXJnZVByZWZlcmVuY2VzKHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBuZXdQcmVmZXJlbmNlcyxcbiAgICAgICAgZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgICAgfSlcbiAgICAgIHJldHVybiB7cHJlZmVyZW5jZXN9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlc2V0UHJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qge2luaXRpYWxQcmVmZXJlbmNlcywgbWFwQ3VzdG9tUHJlZmVyZW5jZXN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBsb2FkUHJlZmVyZW5jZXMoKVxuXG4gICAgbGV0IHByZWZlcmVuY2VzXG4gICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7cHJlZmVyZW5jZXN9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZUNvbnNlbnQgPSAobmV3UHJlZmVyZW5jZXMsIHNob3VsZFJlbG9hZCkgPT4ge1xuICAgIGNvbnN0IHt3cml0ZUtleSwgY29va2llRG9tYWluLCBtYXBDdXN0b21QcmVmZXJlbmNlc30gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgcHJlZmVyZW5jZXM6IGV4aXN0aW5nUHJlZmVyZW5jZXMsXG4gICAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgICB9ID0gcHJldlN0YXRlXG5cbiAgICAgIGxldCBwcmVmZXJlbmNlcyA9IHRoaXMubWVyZ2VQcmVmZXJlbmNlcyh7XG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgbmV3UHJlZmVyZW5jZXMsXG4gICAgICAgIGV4aXN0aW5nUHJlZmVyZW5jZXNcbiAgICAgIH0pXG5cbiAgICAgIGxldCBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgICBsZXQgY3VzdG9tUHJlZmVyZW5jZXNcbiAgICAgIGlmIChtYXBDdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgICA7KHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBtYXBDdXN0b21QcmVmZXJlbmNlcyh7XG4gICAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICAgIHByZWZlcmVuY2VzXG4gICAgICAgIH0pKVxuICAgICAgICBpZiAoY3VzdG9tUHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAvLyBBbGxvdyB0aGUgY3VzdG9tUHJlZmVyZW5jZXMgdG8gYmUgdXBkYXRlZCBmcm9tIG1hcEN1c3RvbVByZWZlcmVuY2VzXG4gICAgICAgICAgcHJlZmVyZW5jZXMgPSBjdXN0b21QcmVmZXJlbmNlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2UgcmV0dXJuaW5nIHRoZSBjdXN0b21QcmVmZXJlbmNlcyBmcm9tIG1hcEN1c3RvbVByZWZlcmVuY2VzIG9wdGlvbmFsXG4gICAgICAgICAgY3VzdG9tUHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlc1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RGVzdGluYXRpb25zID0gZ2V0TmV3RGVzdGluYXRpb25zKFxuICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNcbiAgICAgIClcblxuICAgICAgc2F2ZVByZWZlcmVuY2VzKHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlcywgY29va2llRG9tYWlufSlcbiAgICAgIGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzKHtcbiAgICAgICAgd3JpdGVLZXksXG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICAgIHNob3VsZFJlbG9hZFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBwcmVmZXJlbmNlcywgbmV3RGVzdGluYXRpb25zfVxuICAgIH0pXG4gIH1cblxuICBtZXJnZVByZWZlcmVuY2VzID0gKHtkZXN0aW5hdGlvbnMsIGV4aXN0aW5nUHJlZmVyZW5jZXMsIG5ld1ByZWZlcmVuY2VzfSkgPT4ge1xuICAgIGxldCBwcmVmZXJlbmNlc1xuXG4gICAgaWYgKHR5cGVvZiBuZXdQcmVmZXJlbmNlcyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBjb25zdCBkZXN0aW5hdGlvblByZWZlcmVuY2VzID0ge31cbiAgICAgIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNbZGVzdGluYXRpb24uaWRdID0gbmV3UHJlZmVyZW5jZXNcbiAgICAgIH1cbiAgICAgIHByZWZlcmVuY2VzID0gZGVzdGluYXRpb25QcmVmZXJlbmNlc1xuICAgIH0gZWxzZSBpZiAobmV3UHJlZmVyZW5jZXMpIHtcbiAgICAgIHByZWZlcmVuY2VzID0ge1xuICAgICAgICAuLi5leGlzdGluZ1ByZWZlcmVuY2VzLFxuICAgICAgICAuLi5uZXdQcmVmZXJlbmNlc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGV4aXN0aW5nUHJlZmVyZW5jZXNcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZmVyZW5jZXNcbiAgfVxufVxuIl19
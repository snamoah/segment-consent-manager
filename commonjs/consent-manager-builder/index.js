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
          mapCustomPreferences = _this$props3.mapCustomPreferences,
          onConsent = _this$props3.onConsent;


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
          shouldReload: shouldReload,
          onConsent: onConsent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXROZXdEZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbnMiLCJwcmVmZXJlbmNlcyIsIm5ld0Rlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQ29uc2VudE1hbmFnZXJCdWlsZGVyIiwic3RhdGUiLCJpc0xvYWRpbmciLCJpc0NvbnNlbnRSZXF1aXJlZCIsImluaXRpYWxpc2UiLCJwcm9wcyIsIndyaXRlS2V5Iiwib3RoZXJXcml0ZUtleXMiLCJvbkNvbnNlbnQiLCJzaG91bGRSZXF1aXJlQ29uc2VudCIsImluaXRpYWxQcmVmZXJlbmNlcyIsIm1hcEN1c3RvbVByZWZlcmVuY2VzIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImN1c3RvbVByZWZlcmVuY2VzIiwiYWxsIiwic2V0U3RhdGUiLCJoYW5kbGVTZXRQcmVmZXJlbmNlcyIsInByZXZTdGF0ZSIsImV4aXN0aW5nUHJlZmVyZW5jZXMiLCJtZXJnZVByZWZlcmVuY2VzIiwibmV3UHJlZmVyZW5jZXMiLCJoYW5kbGVSZXNldFByZWZlcmVuY2VzIiwiaGFuZGxlU2F2ZUNvbnNlbnQiLCJzaG91bGRSZWxvYWQiLCJjb29raWVEb21haW4iLCJjaGlsZHJlbiIsInNldFByZWZlcmVuY2VzIiwicmVzZXRQcmVmZXJlbmNlcyIsInNhdmVDb25zZW50Iiwib25FcnJvciIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVB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QixhQUFXeUIsb0JBQVVDO0FBVEosQztBQUhBbEMscUIsQ0FlWnVDLFksR0FBZTtBQUNwQmhDLGtCQUFnQixFQURJO0FBRXBCc0IsV0FBUy9CLFNBRlc7QUFHcEJVLGFBQVcscUJBQU0sQ0FBRSxDQUhDO0FBSXBCQyx3QkFBc0I7QUFBQSxXQUFNLElBQU47QUFBQSxHQUpGO0FBS3BCQyxzQkFBb0IsRUFMQTtBQU1wQkMsd0JBQXNCYixTQU5GO0FBT3BCMEIsZ0JBQWMxQjtBQVBNLEM7a0JBZkhFLHFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHtsb2FkUHJlZmVyZW5jZXMsIHNhdmVQcmVmZXJlbmNlc30gZnJvbSAnLi9wcmVmZXJlbmNlcydcbmltcG9ydCBmZXRjaERlc3RpbmF0aW9ucyBmcm9tICcuL2ZldGNoLWRlc3RpbmF0aW9ucydcbmltcG9ydCBjb25kaXRpb25hbGx5TG9hZEFuYWx5dGljcyBmcm9tICcuL2FuYWx5dGljcydcblxuZnVuY3Rpb24gZ2V0TmV3RGVzdGluYXRpb25zKGRlc3RpbmF0aW9ucywgcHJlZmVyZW5jZXMpIHtcbiAgY29uc3QgbmV3RGVzdGluYXRpb25zID0gW11cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gcHJlZmVyZW5jZXMgdGhlbiBhbGwgZGVzdGluYXRpb25zIGFyZSBuZXdcbiAgaWYgKCFwcmVmZXJlbmNlcykge1xuICAgIHJldHVybiBkZXN0aW5hdGlvbnNcbiAgfVxuXG4gIGZvciAoY29uc3QgZGVzdGluYXRpb24gb2YgZGVzdGluYXRpb25zKSB7XG4gICAgaWYgKHByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdEZXN0aW5hdGlvbnMucHVzaChkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3RGVzdGluYXRpb25zXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNYW5hZ2VyQnVpbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdDb25zZW50TWFuYWdlckJ1aWxkZXInXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB3cml0ZUtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG90aGVyV3JpdGVLZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBzaG91bGRSZXF1aXJlQ29uc2VudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5pdGlhbFByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb29raWVEb21haW46IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25Db25zZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3RoZXJXcml0ZUtleXM6IFtdLFxuICAgIG9uRXJyb3I6IHVuZGVmaW5lZCxcbiAgICBvbkNvbnNlbnQ6ICgpID0+IHt9LFxuICAgIHNob3VsZFJlcXVpcmVDb25zZW50OiAoKSA9PiB0cnVlLFxuICAgIGluaXRpYWxQcmVmZXJlbmNlczoge30sXG4gICAgbWFwQ3VzdG9tUHJlZmVyZW5jZXM6IHVuZGVmaW5lZCxcbiAgICBjb29raWVEb21haW46IHVuZGVmaW5lZFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgIGRlc3RpbmF0aW9uczogW10sXG4gICAgbmV3RGVzdGluYXRpb25zOiBbXSxcbiAgICBwcmVmZXJlbmNlczoge30sXG4gICAgaXNDb25zZW50UmVxdWlyZWQ6IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgbmV3RGVzdGluYXRpb25zLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWRcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgbmV3RGVzdGluYXRpb25zLFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgICAgIHNldFByZWZlcmVuY2VzOiB0aGlzLmhhbmRsZVNldFByZWZlcmVuY2VzLFxuICAgICAgcmVzZXRQcmVmZXJlbmNlczogdGhpcy5oYW5kbGVSZXNldFByZWZlcmVuY2VzLFxuICAgICAgc2F2ZUNvbnNlbnQ6IHRoaXMuaGFuZGxlU2F2ZUNvbnNlbnRcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge29uRXJyb3J9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChvbkVycm9yICYmIHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmluaXRpYWxpc2UoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhd2FpdCBvbkVycm9yKGUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGlzZSgpXG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB3cml0ZUtleSxcbiAgICAgIG90aGVyV3JpdGVLZXlzLFxuICAgICAgb25Db25zZW50LFxuICAgICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQsXG4gICAgICBpbml0aWFsUHJlZmVyZW5jZXMsXG4gICAgICBtYXBDdXN0b21QcmVmZXJlbmNlc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAvLyBUT0RPOiBhZGQgb3B0aW9uIHRvIHJ1biBtYXBDdXN0b21QcmVmZXJlbmNlcyBvbiBsb2FkIHNvIHRoYXQgdGhlIGRlc3RpbmF0aW9uIHByZWZlcmVuY2VzIGF1dG9tYXRpY2FsbHkgZ2V0IHVwZGF0ZWRcbiAgICBjb25zdCB7ZGVzdGluYXRpb25QcmVmZXJlbmNlcywgY3VzdG9tUHJlZmVyZW5jZXN9ID0gbG9hZFByZWZlcmVuY2VzKClcblxuICAgIGNvbnN0IFtpc0NvbnNlbnRSZXF1aXJlZCwgZGVzdGluYXRpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHNob3VsZFJlcXVpcmVDb25zZW50KCksXG4gICAgICBmZXRjaERlc3RpbmF0aW9ucyhbd3JpdGVLZXksIC4uLm90aGVyV3JpdGVLZXlzXSlcbiAgICBdKVxuXG4gICAgY29uc3QgbmV3RGVzdGluYXRpb25zID0gZ2V0TmV3RGVzdGluYXRpb25zKFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1xuICAgIClcblxuICAgIGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzKHtcbiAgICAgIHdyaXRlS2V5LFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgfSlcblxuICAgIGxldCBwcmVmZXJlbmNlc1xuICAgIGlmIChtYXBDdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgcHJlZmVyZW5jZXMgPSBjdXN0b21QcmVmZXJlbmNlcyB8fCBpbml0aWFsUHJlZmVyZW5jZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZmVyZW5jZXMgPSBkZXN0aW5hdGlvblByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWRcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlU2V0UHJlZmVyZW5jZXMgPSBuZXdQcmVmZXJlbmNlcyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgY29uc3Qge2Rlc3RpbmF0aW9ucywgcHJlZmVyZW5jZXM6IGV4aXN0aW5nUHJlZmVyZW5jZXN9ID0gcHJldlN0YXRlXG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IHRoaXMubWVyZ2VQcmVmZXJlbmNlcyh7XG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgbmV3UHJlZmVyZW5jZXMsXG4gICAgICAgIGV4aXN0aW5nUHJlZmVyZW5jZXNcbiAgICAgIH0pXG4gICAgICByZXR1cm4ge3ByZWZlcmVuY2VzfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVSZXNldFByZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtpbml0aWFsUHJlZmVyZW5jZXMsIG1hcEN1c3RvbVByZWZlcmVuY2VzfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7ZGVzdGluYXRpb25QcmVmZXJlbmNlcywgY3VzdG9tUHJlZmVyZW5jZXN9ID0gbG9hZFByZWZlcmVuY2VzKClcblxuICAgIGxldCBwcmVmZXJlbmNlc1xuICAgIGlmIChtYXBDdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgcHJlZmVyZW5jZXMgPSBjdXN0b21QcmVmZXJlbmNlcyB8fCBpbml0aWFsUHJlZmVyZW5jZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZmVyZW5jZXMgPSBkZXN0aW5hdGlvblByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe3ByZWZlcmVuY2VzfSlcbiAgfVxuXG4gIGhhbmRsZVNhdmVDb25zZW50ID0gKG5ld1ByZWZlcmVuY2VzLCBzaG91bGRSZWxvYWQpID0+IHtcbiAgICBjb25zdCB7d3JpdGVLZXksIGNvb2tpZURvbWFpbiwgbWFwQ3VzdG9tUHJlZmVyZW5jZXMsIG9uQ29uc2VudH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgcHJlZmVyZW5jZXM6IGV4aXN0aW5nUHJlZmVyZW5jZXMsXG4gICAgICAgIGlzQ29uc2VudFJlcXVpcmVkXG4gICAgICB9ID0gcHJldlN0YXRlXG5cbiAgICAgIGxldCBwcmVmZXJlbmNlcyA9IHRoaXMubWVyZ2VQcmVmZXJlbmNlcyh7XG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgbmV3UHJlZmVyZW5jZXMsXG4gICAgICAgIGV4aXN0aW5nUHJlZmVyZW5jZXNcbiAgICAgIH0pXG5cbiAgICAgIGxldCBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgICBsZXQgY3VzdG9tUHJlZmVyZW5jZXNcbiAgICAgIGlmIChtYXBDdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgICA7KHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBtYXBDdXN0b21QcmVmZXJlbmNlcyh7XG4gICAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICAgIHByZWZlcmVuY2VzXG4gICAgICAgIH0pKVxuICAgICAgICBpZiAoY3VzdG9tUHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAvLyBBbGxvdyB0aGUgY3VzdG9tUHJlZmVyZW5jZXMgdG8gYmUgdXBkYXRlZCBmcm9tIG1hcEN1c3RvbVByZWZlcmVuY2VzXG4gICAgICAgICAgcHJlZmVyZW5jZXMgPSBjdXN0b21QcmVmZXJlbmNlc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1ha2UgcmV0dXJuaW5nIHRoZSBjdXN0b21QcmVmZXJlbmNlcyBmcm9tIG1hcEN1c3RvbVByZWZlcmVuY2VzIG9wdGlvbmFsXG4gICAgICAgICAgY3VzdG9tUHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlc1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXNcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3RGVzdGluYXRpb25zID0gZ2V0TmV3RGVzdGluYXRpb25zKFxuICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNcbiAgICAgIClcblxuICAgICAgc2F2ZVByZWZlcmVuY2VzKHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlcywgY29va2llRG9tYWlufSlcbiAgICAgIGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzKHtcbiAgICAgICAgd3JpdGVLZXksXG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlcyxcbiAgICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICAgIHNob3VsZFJlbG9hZCxcbiAgICAgICAgb25Db25zZW50XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4ge2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIHByZWZlcmVuY2VzLCBuZXdEZXN0aW5hdGlvbnN9XG4gICAgfSlcbiAgfVxuXG4gIG1lcmdlUHJlZmVyZW5jZXMgPSAoe2Rlc3RpbmF0aW9ucywgZXhpc3RpbmdQcmVmZXJlbmNlcywgbmV3UHJlZmVyZW5jZXN9KSA9PiB7XG4gICAgbGV0IHByZWZlcmVuY2VzXG5cbiAgICBpZiAodHlwZW9mIG5ld1ByZWZlcmVuY2VzID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgPSB7fVxuICAgICAgZm9yIChjb25zdCBkZXN0aW5hdGlvbiBvZiBkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1tkZXN0aW5hdGlvbi5pZF0gPSBuZXdQcmVmZXJlbmNlc1xuICAgICAgfVxuICAgICAgcHJlZmVyZW5jZXMgPSBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgfSBlbHNlIGlmIChuZXdQcmVmZXJlbmNlcykge1xuICAgICAgcHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXMsXG4gICAgICAgIC4uLm5ld1ByZWZlcmVuY2VzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZlcmVuY2VzID0gZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmZXJlbmNlc1xuICB9XG59XG4iXX0=
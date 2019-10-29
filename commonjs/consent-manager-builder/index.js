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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXItYnVpbGRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXROZXdEZXN0aW5hdGlvbnMiLCJkZXN0aW5hdGlvbnMiLCJwcmVmZXJlbmNlcyIsIm5ld0Rlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiaWQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQ29uc2VudE1hbmFnZXJCdWlsZGVyIiwic3RhdGUiLCJpc0xvYWRpbmciLCJpc0NvbnNlbnRSZXF1aXJlZCIsImluaXRpYWxpc2UiLCJwcm9wcyIsIndyaXRlS2V5Iiwib3RoZXJXcml0ZUtleXMiLCJvbkNvbnNlbnQiLCJzaG91bGRSZXF1aXJlQ29uc2VudCIsImluaXRpYWxQcmVmZXJlbmNlcyIsIm1hcEN1c3RvbVByZWZlcmVuY2VzIiwiZGVzdGluYXRpb25QcmVmZXJlbmNlcyIsImN1c3RvbVByZWZlcmVuY2VzIiwiYWxsIiwic2V0U3RhdGUiLCJoYW5kbGVTZXRQcmVmZXJlbmNlcyIsInByZXZTdGF0ZSIsImV4aXN0aW5nUHJlZmVyZW5jZXMiLCJtZXJnZVByZWZlcmVuY2VzIiwibmV3UHJlZmVyZW5jZXMiLCJoYW5kbGVSZXNldFByZWZlcmVuY2VzIiwiaGFuZGxlU2F2ZUNvbnNlbnQiLCJzaG91bGRSZWxvYWQiLCJjb29raWVEb21haW4iLCJjaGlsZHJlbiIsInNldFByZWZlcmVuY2VzIiwicmVzZXRQcmVmZXJlbmNlcyIsInNhdmVDb25zZW50Iiwib25FcnJvciIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVB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VUcsTUFSUDtBQVNqQjVCLGFBQVd5QixvQkFBVUM7QUFUSixDO0FBSEFsQyxxQixDQWVadUMsWSxHQUFlO0FBQ3BCaEMsa0JBQWdCLEVBREk7QUFFcEJzQixXQUFTL0IsU0FGVztBQUdwQlUsYUFBVyxxQkFBTSxDQUFFLENBSEM7QUFJcEJDLHdCQUFzQjtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSkY7QUFLcEJDLHNCQUFvQixFQUxBO0FBTXBCQyx3QkFBc0JiLFNBTkY7QUFPcEIwQixnQkFBYzFCO0FBUE0sQztrQkFmSEUscUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQge2xvYWRQcmVmZXJlbmNlcywgc2F2ZVByZWZlcmVuY2VzfSBmcm9tICcuL3ByZWZlcmVuY2VzJ1xuaW1wb3J0IGZldGNoRGVzdGluYXRpb25zIGZyb20gJy4vZmV0Y2gtZGVzdGluYXRpb25zJ1xuaW1wb3J0IGNvbmRpdGlvbmFsbHlMb2FkQW5hbHl0aWNzIGZyb20gJy4vYW5hbHl0aWNzJ1xuXG5mdW5jdGlvbiBnZXROZXdEZXN0aW5hdGlvbnMoZGVzdGluYXRpb25zLCBwcmVmZXJlbmNlcykge1xuICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBbXVxuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBwcmVmZXJlbmNlcyB0aGVuIGFsbCBkZXN0aW5hdGlvbnMgYXJlIG5ld1xuICBpZiAoIXByZWZlcmVuY2VzKSB7XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uc1xuICB9XG5cbiAgZm9yIChjb25zdCBkZXN0aW5hdGlvbiBvZiBkZXN0aW5hdGlvbnMpIHtcbiAgICBpZiAocHJlZmVyZW5jZXNbZGVzdGluYXRpb24uaWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdEZXN0aW5hdGlvbnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VudE1hbmFnZXJCdWlsZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NvbnNlbnRNYW5hZ2VyQnVpbGRlcidcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICAgIHdyaXRlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb3RoZXJXcml0ZUtleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIHNob3VsZFJlcXVpcmVDb25zZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpbml0aWFsUHJlZmVyZW5jZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWFwQ3VzdG9tUHJlZmVyZW5jZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvb2tpZURvbWFpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNvbnNlbnQ6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvdGhlcldyaXRlS2V5czogW10sXG4gICAgb25FcnJvcjogdW5kZWZpbmVkLFxuICAgIG9uQ29uc2VudDogKCkgPT4ge30sXG4gICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQ6ICgpID0+IHRydWUsXG4gICAgaW5pdGlhbFByZWZlcmVuY2VzOiB7fSxcbiAgICBtYXBDdXN0b21QcmVmZXJlbmNlczogdW5kZWZpbmVkLFxuICAgIGNvb2tpZURvbWFpbjogdW5kZWZpbmVkXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgZGVzdGluYXRpb25zOiBbXSxcbiAgICBuZXdEZXN0aW5hdGlvbnM6IFtdLFxuICAgIHByZWZlcmVuY2VzOiB7fSxcbiAgICBpc0NvbnNlbnRSZXF1aXJlZDogdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge1xuICAgICAgaXNMb2FkaW5nLFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICBuZXdEZXN0aW5hdGlvbnMsXG4gICAgICBpc0NvbnNlbnRSZXF1aXJlZFxuICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBuZXdEZXN0aW5hdGlvbnMsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkLFxuICAgICAgc2V0UHJlZmVyZW5jZXM6IHRoaXMuaGFuZGxlU2V0UHJlZmVyZW5jZXMsXG4gICAgICByZXNldFByZWZlcmVuY2VzOiB0aGlzLmhhbmRsZVJlc2V0UHJlZmVyZW5jZXMsXG4gICAgICBzYXZlQ29uc2VudDogdGhpcy5oYW5kbGVTYXZlQ29uc2VudFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7b25FcnJvcn0gPSB0aGlzLnByb3BzXG4gICAgaWYgKG9uRXJyb3IgJiYgdHlwZW9mIG9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGlzZSgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGF3YWl0IG9uRXJyb3IoZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsaXNlKClcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHdyaXRlS2V5LFxuICAgICAgb3RoZXJXcml0ZUtleXMsXG4gICAgICBvbkNvbnNlbnQsXG4gICAgICBzaG91bGRSZXF1aXJlQ29uc2VudCxcbiAgICAgIGluaXRpYWxQcmVmZXJlbmNlcyxcbiAgICAgIG1hcEN1c3RvbVByZWZlcmVuY2VzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIFRPRE86IGFkZCBvcHRpb24gdG8gcnVuIG1hcEN1c3RvbVByZWZlcmVuY2VzIG9uIGxvYWQgc28gdGhhdCB0aGUgZGVzdGluYXRpb24gcHJlZmVyZW5jZXMgYXV0b21hdGljYWxseSBnZXQgdXBkYXRlZFxuICAgIGNvbnN0IHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBsb2FkUHJlZmVyZW5jZXMoKVxuXG4gICAgY29uc3QgW2lzQ29uc2VudFJlcXVpcmVkLCBkZXN0aW5hdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc2hvdWxkUmVxdWlyZUNvbnNlbnQoKSxcbiAgICAgIGZldGNoRGVzdGluYXRpb25zKFt3cml0ZUtleSwgLi4ub3RoZXJXcml0ZUtleXNdKVxuICAgIF0pXG5cbiAgICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBnZXROZXdEZXN0aW5hdGlvbnMoXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzXG4gICAgKVxuXG4gICAgY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICAgICAgd3JpdGVLZXksXG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICBvbkNvbnNlbnRcbiAgICB9KVxuXG4gICAgbGV0IHByZWZlcmVuY2VzXG4gICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgbmV3RGVzdGluYXRpb25zLFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICBpc0NvbnNlbnRSZXF1aXJlZFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTZXRQcmVmZXJlbmNlcyA9IG5ld1ByZWZlcmVuY2VzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICBjb25zdCB7ZGVzdGluYXRpb25zLCBwcmVmZXJlbmNlczogZXhpc3RpbmdQcmVmZXJlbmNlc30gPSBwcmV2U3RhdGVcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gdGhpcy5tZXJnZVByZWZlcmVuY2VzKHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBuZXdQcmVmZXJlbmNlcyxcbiAgICAgICAgZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgICAgfSlcbiAgICAgIHJldHVybiB7cHJlZmVyZW5jZXN9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlc2V0UHJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qge2luaXRpYWxQcmVmZXJlbmNlcywgbWFwQ3VzdG9tUHJlZmVyZW5jZXN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtkZXN0aW5hdGlvblByZWZlcmVuY2VzLCBjdXN0b21QcmVmZXJlbmNlc30gPSBsb2FkUHJlZmVyZW5jZXMoKVxuXG4gICAgbGV0IHByZWZlcmVuY2VzXG4gICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzIHx8IGluaXRpYWxQcmVmZXJlbmNlc1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgfHwgaW5pdGlhbFByZWZlcmVuY2VzXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7cHJlZmVyZW5jZXN9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZUNvbnNlbnQgPSAobmV3UHJlZmVyZW5jZXMsIHNob3VsZFJlbG9hZCkgPT4ge1xuICAgIGNvbnN0IHt3cml0ZUtleSwgY29va2llRG9tYWluLCBtYXBDdXN0b21QcmVmZXJlbmNlcywgb25Db25zZW50fSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBwcmVmZXJlbmNlczogZXhpc3RpbmdQcmVmZXJlbmNlcyxcbiAgICAgICAgaXNDb25zZW50UmVxdWlyZWRcbiAgICAgIH0gPSBwcmV2U3RhdGVcblxuICAgICAgbGV0IHByZWZlcmVuY2VzID0gdGhpcy5tZXJnZVByZWZlcmVuY2VzKHtcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBuZXdQcmVmZXJlbmNlcyxcbiAgICAgICAgZXhpc3RpbmdQcmVmZXJlbmNlc1xuICAgICAgfSlcblxuICAgICAgbGV0IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNcbiAgICAgIGxldCBjdXN0b21QcmVmZXJlbmNlc1xuICAgICAgaWYgKG1hcEN1c3RvbVByZWZlcmVuY2VzKSB7XG4gICAgICAgIDsoe2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzfSA9IG1hcEN1c3RvbVByZWZlcmVuY2VzKHtcbiAgICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgICAgcHJlZmVyZW5jZXNcbiAgICAgICAgfSkpXG4gICAgICAgIGlmIChjdXN0b21QcmVmZXJlbmNlcykge1xuICAgICAgICAgIC8vIEFsbG93IHRoZSBjdXN0b21QcmVmZXJlbmNlcyB0byBiZSB1cGRhdGVkIGZyb20gbWFwQ3VzdG9tUHJlZmVyZW5jZXNcbiAgICAgICAgICBwcmVmZXJlbmNlcyA9IGN1c3RvbVByZWZlcmVuY2VzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWFrZSByZXR1cm5pbmcgdGhlIGN1c3RvbVByZWZlcmVuY2VzIGZyb20gbWFwQ3VzdG9tUHJlZmVyZW5jZXMgb3B0aW9uYWxcbiAgICAgICAgICBjdXN0b21QcmVmZXJlbmNlcyA9IHByZWZlcmVuY2VzXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3RpbmF0aW9uUHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdEZXN0aW5hdGlvbnMgPSBnZXROZXdEZXN0aW5hdGlvbnMoXG4gICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgZGVzdGluYXRpb25QcmVmZXJlbmNlc1xuICAgICAgKVxuXG4gICAgICBzYXZlUHJlZmVyZW5jZXMoe2Rlc3RpbmF0aW9uUHJlZmVyZW5jZXMsIGN1c3RvbVByZWZlcmVuY2VzLCBjb29raWVEb21haW59KVxuICAgICAgY29uZGl0aW9uYWxseUxvYWRBbmFseXRpY3Moe1xuICAgICAgICB3cml0ZUtleSxcbiAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzLFxuICAgICAgICBpc0NvbnNlbnRSZXF1aXJlZCxcbiAgICAgICAgc2hvdWxkUmVsb2FkLFxuICAgICAgICBvbkNvbnNlbnRcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiB7ZGVzdGluYXRpb25QcmVmZXJlbmNlcywgcHJlZmVyZW5jZXMsIG5ld0Rlc3RpbmF0aW9uc31cbiAgICB9KVxuICB9XG5cbiAgbWVyZ2VQcmVmZXJlbmNlcyA9ICh7ZGVzdGluYXRpb25zLCBleGlzdGluZ1ByZWZlcmVuY2VzLCBuZXdQcmVmZXJlbmNlc30pID0+IHtcbiAgICBsZXQgcHJlZmVyZW5jZXNcblxuICAgIGlmICh0eXBlb2YgbmV3UHJlZmVyZW5jZXMgPT09ICdib29sZWFuJykge1xuICAgICAgY29uc3QgZGVzdGluYXRpb25QcmVmZXJlbmNlcyA9IHt9XG4gICAgICBmb3IgKGNvbnN0IGRlc3RpbmF0aW9uIG9mIGRlc3RpbmF0aW9ucykge1xuICAgICAgICBkZXN0aW5hdGlvblByZWZlcmVuY2VzW2Rlc3RpbmF0aW9uLmlkXSA9IG5ld1ByZWZlcmVuY2VzXG4gICAgICB9XG4gICAgICBwcmVmZXJlbmNlcyA9IGRlc3RpbmF0aW9uUHJlZmVyZW5jZXNcbiAgICB9IGVsc2UgaWYgKG5ld1ByZWZlcmVuY2VzKSB7XG4gICAgICBwcmVmZXJlbmNlcyA9IHtcbiAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcyxcbiAgICAgICAgLi4ubmV3UHJlZmVyZW5jZXNcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZmVyZW5jZXMgPSBleGlzdGluZ1ByZWZlcmVuY2VzXG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZlcmVuY2VzXG4gIH1cbn1cbiJdfQ==
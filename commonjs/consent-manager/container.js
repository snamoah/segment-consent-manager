'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

exports.openDialog = openDialog;

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _banner = require('./banner');

var _banner2 = _interopRequireDefault(_banner);

var _preferenceDialog = require('./preference-dialog');

var _preferenceDialog2 = _interopRequireDefault(_preferenceDialog);

var _cancelDialog = require('./cancel-dialog');

var _cancelDialog2 = _interopRequireDefault(_cancelDialog);

var _categories = require('./categories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _events2.default();

function openDialog() {
  emitter.emit('openDialog');
}

var Container = function (_PureComponent) {
  (0, _inherits3.default)(Container, _PureComponent);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDialogOpen: false,
      isCancelling: false
    }, _this.openDialog = function () {
      _this.setState({
        isDialogOpen: true
      });
    }, _this.closeDialog = function () {
      _this.setState({
        isDialogOpen: false
      });
    }, _this.handleBannerRef = function (node) {
      _this.banner = node;
    }, _this.handlePreferenceDialogRef = function (node) {
      _this.preferenceDialog = node;
    }, _this.handleCancelDialogRef = function (node) {
      _this.cancelDialog = node;
    }, _this.handleBannerAccept = function () {
      var saveConsent = _this.props.saveConsent;


      saveConsent();
    }, _this.handleBodyClick = function (e) {
      var _this$props = _this.props,
          newDestinations = _this$props.newDestinations,
          saveConsent = _this$props.saveConsent,
          isConsentRequired = _this$props.isConsentRequired,
          implyConsentOnInteraction = _this$props.implyConsentOnInteraction;

      // Do nothing if no new implicit consent needs to be saved

      if (!isConsentRequired || !implyConsentOnInteraction || newDestinations.length === 0) {
        return;
      }

      // Ignore propogated clicks from inside the consent manager
      if (_this.banner && _this.banner.contains(e.target) || _this.preferenceDialog && _this.preferenceDialog.contains(e.target) || _this.cancelDialog && _this.cancelDialog.contains(e.target)) {
        return;
      }

      saveConsent(undefined, false);
    }, _this.handleCategoryChange = function (category, value) {
      var setPreferences = _this.props.setPreferences;


      setPreferences((0, _defineProperty3.default)({}, category, value));
    }, _this.handleSave = function () {
      var saveConsent = _this.props.saveConsent;


      _this.setState({
        isDialogOpen: false
      });
      saveConsent();
    }, _this.handleCancel = function () {
      var _this$props2 = _this.props,
          resetPreferences = _this$props2.resetPreferences,
          newDestinations = _this$props2.newDestinations;


      _this.setState({
        isDialogOpen: false
      });

      // Only show the cancel confirmation if there's unconsented destinations
      if (newDestinations.length > 0) {
        _this.setState({
          isCancelling: true
        });
      } else {
        resetPreferences();
      }
    }, _this.handleCancelBack = function () {
      _this.setState({
        isDialogOpen: true,
        isCancelling: false
      });
    }, _this.handleCancelConfirm = function () {
      var resetPreferences = _this.props.resetPreferences;


      _this.setState({
        isCancelling: false
      });
      resetPreferences();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          destinations = _props.destinations,
          newDestinations = _props.newDestinations,
          preferences = _props.preferences,
          isConsentRequired = _props.isConsentRequired,
          bannerContent = _props.bannerContent,
          bannerSubContent = _props.bannerSubContent,
          bannerTextColor = _props.bannerTextColor,
          bannerBackgroundColor = _props.bannerBackgroundColor,
          preferencesDialogTitle = _props.preferencesDialogTitle,
          preferencesDialogContent = _props.preferencesDialogContent,
          cancelDialogTitle = _props.cancelDialogTitle,
          cancelDialogContent = _props.cancelDialogContent;
      var _state = this.state,
          isDialogOpen = _state.isDialogOpen,
          isCancelling = _state.isCancelling;

      var marketingDestinations = [];
      var advertisingDestinations = [];
      var functionalDestinations = [];

      var _loop = function _loop(destination) {
        if (_categories.ADVERTISING_CATEGORIES.find(function (c) {
          return c === destination.category;
        })) {
          advertisingDestinations.push(destination);
        } else if (_categories.FUNCTIONAL_CATEGORIES.find(function (c) {
          return c === destination.category;
        })) {
          functionalDestinations.push(destination);
        } else {
          // Fallback to marketing
          marketingDestinations.push(destination);
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(destinations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var destination = _step.value;

          _loop(destination);
        }

        // TODO: add state for banner so it doesn't disappear on implicit consent (which is annoying UX)
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

      return _react2.default.createElement(
        'div',
        null,
        isConsentRequired && newDestinations.length > 0 && _react2.default.createElement(_banner2.default, {
          innerRef: this.handleBannerRef,
          onAccept: this.handleBannerAccept,
          onChangePreferences: this.openDialog,
          content: bannerContent,
          subContent: bannerSubContent,
          textColor: bannerTextColor,
          backgroundColor: bannerBackgroundColor
        }),
        isDialogOpen && _react2.default.createElement(_preferenceDialog2.default, {
          innerRef: this.handlePreferenceDialogRef,
          onCancel: this.handleCancel,
          onSave: this.handleSave,
          onChange: this.handleCategoryChange,
          marketingDestinations: marketingDestinations,
          advertisingDestinations: advertisingDestinations,
          functionalDestinations: functionalDestinations,
          marketingAndAnalytics: preferences.marketingAndAnalytics,
          advertising: preferences.advertising,
          functional: preferences.functional,
          title: preferencesDialogTitle,
          content: preferencesDialogContent
        }),
        isCancelling && _react2.default.createElement(_cancelDialog2.default, {
          innerRef: this.handleCancelDialogRef,
          onBack: this.handleCancelBack,
          onConfirm: this.handleCancelConfirm,
          title: cancelDialogTitle,
          content: cancelDialogContent
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          isConsentRequired = _props2.isConsentRequired,
          implyConsentOnInteraction = _props2.implyConsentOnInteraction;


      emitter.on('openDialog', this.openDialog);

      if (isConsentRequired && implyConsentOnInteraction) {
        document.body.addEventListener('click', this.handleBodyClick, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      emitter.removeListener('openDialog', this.openDialog);
      document.body.removeEventListener('click', this.handleBodyClick, false);
    }
  }]);
  return Container;
}(_react.PureComponent);

Container.displayName = 'Container';
Container.propTypes = {
  setPreferences: _propTypes2.default.func.isRequired,
  resetPreferences: _propTypes2.default.func.isRequired,
  saveConsent: _propTypes2.default.func.isRequired,
  destinations: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  newDestinations: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  preferences: _propTypes2.default.object.isRequired,
  isConsentRequired: _propTypes2.default.bool.isRequired,
  implyConsentOnInteraction: _propTypes2.default.bool.isRequired,
  bannerContent: _propTypes2.default.node.isRequired,
  bannerSubContent: _propTypes2.default.string.isRequired,
  bannerTextColor: _propTypes2.default.string.isRequired,
  bannerBackgroundColor: _propTypes2.default.string.isRequired,
  preferencesDialogTitle: _propTypes2.default.node.isRequired,
  preferencesDialogContent: _propTypes2.default.node.isRequired,
  cancelDialogTitle: _propTypes2.default.node.isRequired,
  cancelDialogContent: _propTypes2.default.node.isRequired
};
exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIm9wZW5EaWFsb2ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiZW1pdCIsIkNvbnRhaW5lciIsInN0YXRlIiwiaXNEaWFsb2dPcGVuIiwiaXNDYW5jZWxsaW5nIiwic2V0U3RhdGUiLCJjbG9zZURpYWxvZyIsImhhbmRsZUJhbm5lclJlZiIsImJhbm5lciIsIm5vZGUiLCJoYW5kbGVQcmVmZXJlbmNlRGlhbG9nUmVmIiwicHJlZmVyZW5jZURpYWxvZyIsImhhbmRsZUNhbmNlbERpYWxvZ1JlZiIsImNhbmNlbERpYWxvZyIsImhhbmRsZUJhbm5lckFjY2VwdCIsInNhdmVDb25zZW50IiwicHJvcHMiLCJoYW5kbGVCb2R5Q2xpY2siLCJuZXdEZXN0aW5hdGlvbnMiLCJpc0NvbnNlbnRSZXF1aXJlZCIsImltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb24iLCJsZW5ndGgiLCJjb250YWlucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsImNhdGVnb3J5IiwidmFsdWUiLCJzZXRQcmVmZXJlbmNlcyIsImhhbmRsZVNhdmUiLCJoYW5kbGVDYW5jZWwiLCJyZXNldFByZWZlcmVuY2VzIiwiaGFuZGxlQ2FuY2VsQmFjayIsImhhbmRsZUNhbmNlbENvbmZpcm0iLCJkZXN0aW5hdGlvbnMiLCJwcmVmZXJlbmNlcyIsImJhbm5lckNvbnRlbnQiLCJiYW5uZXJTdWJDb250ZW50IiwiYmFubmVyVGV4dENvbG9yIiwiYmFubmVyQmFja2dyb3VuZENvbG9yIiwicHJlZmVyZW5jZXNEaWFsb2dUaXRsZSIsInByZWZlcmVuY2VzRGlhbG9nQ29udGVudCIsImNhbmNlbERpYWxvZ1RpdGxlIiwiY2FuY2VsRGlhbG9nQ29udGVudCIsIm1hcmtldGluZ0Rlc3RpbmF0aW9ucyIsImFkdmVydGlzaW5nRGVzdGluYXRpb25zIiwiZnVuY3Rpb25hbERlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiQURWRVJUSVNJTkdfQ0FURUdPUklFUyIsImZpbmQiLCJjIiwicHVzaCIsIkZVTkNUSU9OQUxfQ0FURUdPUklFUyIsIm1hcmtldGluZ0FuZEFuYWx5dGljcyIsImFkdmVydGlzaW5nIiwiZnVuY3Rpb25hbCIsIm9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlB1cmVDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFVZ0JBLFUsR0FBQUEsVTs7QUFWaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxVQUFVLElBQUlDLGdCQUFKLEVBQWhCOztBQUVPLFNBQVNGLFVBQVQsR0FBc0I7QUFDM0JDLFVBQVFFLElBQVIsQ0FBYSxZQUFiO0FBQ0Q7O0lBRW9CQyxTOzs7Ozs7Ozs7Ozs7OztrTkFzQm5CQyxLLEdBQVE7QUFDTkMsb0JBQWMsS0FEUjtBQUVOQyxvQkFBYztBQUZSLEssUUErRlJQLFUsR0FBYSxZQUFNO0FBQ2pCLFlBQUtRLFFBQUwsQ0FBYztBQUNaRixzQkFBYztBQURGLE9BQWQ7QUFHRCxLLFFBRURHLFcsR0FBYyxZQUFNO0FBQ2xCLFlBQUtELFFBQUwsQ0FBYztBQUNaRixzQkFBYztBQURGLE9BQWQ7QUFHRCxLLFFBRURJLGUsR0FBa0IsZ0JBQVE7QUFDeEIsWUFBS0MsTUFBTCxHQUFjQyxJQUFkO0FBQ0QsSyxRQUVEQyx5QixHQUE0QixnQkFBUTtBQUNsQyxZQUFLQyxnQkFBTCxHQUF3QkYsSUFBeEI7QUFDRCxLLFFBRURHLHFCLEdBQXdCLGdCQUFRO0FBQzlCLFlB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SUFBVixDQUFlQyxVQURkO0FBRWpCcEMsb0JBQWtCa0Msb0JBQVVDLElBQVYsQ0FBZUMsVUFGaEI7QUFHakJyRCxlQUFhbUQsb0JBQVVDLElBQVYsQ0FBZUMsVUFIWDtBQUlqQmpDLGdCQUFjK0Isb0JBQVVHLE9BQVYsQ0FBa0JILG9CQUFVSSxNQUE1QixFQUFvQ0YsVUFKakM7QUFLakJsRCxtQkFBaUJnRCxvQkFBVUcsT0FBVixDQUFrQkgsb0JBQVVJLE1BQTVCLEVBQW9DRixVQUxwQztBQU1qQmhDLGVBQWE4QixvQkFBVUksTUFBVixDQUFpQkYsVUFOYjtBQU9qQmpELHFCQUFtQitDLG9CQUFVSyxJQUFWLENBQWVILFVBUGpCO0FBUWpCaEQsNkJBQTJCOEMsb0JBQVVLLElBQVYsQ0FBZUgsVUFSekI7QUFTakIvQixpQkFBZTZCLG9CQUFVekQsSUFBVixDQUFlMkQsVUFUYjtBQVVqQjlCLG9CQUFrQjRCLG9CQUFVTSxNQUFWLENBQWlCSixVQVZsQjtBQVdqQjdCLG1CQUFpQjJCLG9CQUFVTSxNQUFWLENBQWlCSixVQVhqQjtBQVlqQjVCLHlCQUF1QjBCLG9CQUFVTSxNQUFWLENBQWlCSixVQVp2QjtBQWFqQjNCLDBCQUF3QnlCLG9CQUFVekQsSUFBVixDQUFlMkQsVUFidEI7QUFjakIxQiw0QkFBMEJ3QixvQkFBVXpELElBQVYsQ0FBZTJELFVBZHhCO0FBZWpCekIscUJBQW1CdUIsb0JBQVV6RCxJQUFWLENBQWUyRCxVQWZqQjtBQWdCakJ4Qix1QkFBcUJzQixvQkFBVXpELElBQVYsQ0FBZTJEO0FBaEJuQixDO2tCQUhBbkUsUyIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuL2Jhbm5lcidcbmltcG9ydCBQcmVmZXJlbmNlRGlhbG9nIGZyb20gJy4vcHJlZmVyZW5jZS1kaWFsb2cnXG5pbXBvcnQgQ2FuY2VsRGlhbG9nIGZyb20gJy4vY2FuY2VsLWRpYWxvZydcbmltcG9ydCB7QURWRVJUSVNJTkdfQ0FURUdPUklFUywgRlVOQ1RJT05BTF9DQVRFR09SSUVTfSBmcm9tICcuL2NhdGVnb3JpZXMnXG5cbmNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EaWFsb2coKSB7XG4gIGVtaXR0ZXIuZW1pdCgnb3BlbkRpYWxvZycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQ29udGFpbmVyJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0UHJlZmVyZW5jZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVzZXRQcmVmZXJlbmNlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzYXZlQ29uc2VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gICAgbmV3RGVzdGluYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxuICAgIHByZWZlcmVuY2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaXNDb25zZW50UmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBiYW5uZXJDb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGJhbm5lclN1YkNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiYW5uZXJUZXh0Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBiYW5uZXJCYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwcmVmZXJlbmNlc0RpYWxvZ1RpdGxlOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIHByZWZlcmVuY2VzRGlhbG9nQ29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjYW5jZWxEaWFsb2dUaXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjYW5jZWxEaWFsb2dDb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpc0RpYWxvZ09wZW46IGZhbHNlLFxuICAgIGlzQ2FuY2VsbGluZzogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICBuZXdEZXN0aW5hdGlvbnMsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICAgIGlzQ29uc2VudFJlcXVpcmVkLFxuICAgICAgYmFubmVyQ29udGVudCxcbiAgICAgIGJhbm5lclN1YkNvbnRlbnQsXG4gICAgICBiYW5uZXJUZXh0Q29sb3IsXG4gICAgICBiYW5uZXJCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBwcmVmZXJlbmNlc0RpYWxvZ1RpdGxlLFxuICAgICAgcHJlZmVyZW5jZXNEaWFsb2dDb250ZW50LFxuICAgICAgY2FuY2VsRGlhbG9nVGl0bGUsXG4gICAgICBjYW5jZWxEaWFsb2dDb250ZW50XG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7aXNEaWFsb2dPcGVuLCBpc0NhbmNlbGxpbmd9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IG1hcmtldGluZ0Rlc3RpbmF0aW9ucyA9IFtdXG4gICAgY29uc3QgYWR2ZXJ0aXNpbmdEZXN0aW5hdGlvbnMgPSBbXVxuICAgIGNvbnN0IGZ1bmN0aW9uYWxEZXN0aW5hdGlvbnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBkZXN0aW5hdGlvbiBvZiBkZXN0aW5hdGlvbnMpIHtcbiAgICAgIGlmIChBRFZFUlRJU0lOR19DQVRFR09SSUVTLmZpbmQoYyA9PiBjID09PSBkZXN0aW5hdGlvbi5jYXRlZ29yeSkpIHtcbiAgICAgICAgYWR2ZXJ0aXNpbmdEZXN0aW5hdGlvbnMucHVzaChkZXN0aW5hdGlvbilcbiAgICAgIH0gZWxzZSBpZiAoRlVOQ1RJT05BTF9DQVRFR09SSUVTLmZpbmQoYyA9PiBjID09PSBkZXN0aW5hdGlvbi5jYXRlZ29yeSkpIHtcbiAgICAgICAgZnVuY3Rpb25hbERlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gbWFya2V0aW5nXG4gICAgICAgIG1hcmtldGluZ0Rlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzdGF0ZSBmb3IgYmFubmVyIHNvIGl0IGRvZXNuJ3QgZGlzYXBwZWFyIG9uIGltcGxpY2l0IGNvbnNlbnQgKHdoaWNoIGlzIGFubm95aW5nIFVYKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNDb25zZW50UmVxdWlyZWQgJiZcbiAgICAgICAgICBuZXdEZXN0aW5hdGlvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8QmFubmVyXG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmhhbmRsZUJhbm5lclJlZn1cbiAgICAgICAgICAgICAgb25BY2NlcHQ9e3RoaXMuaGFuZGxlQmFubmVyQWNjZXB0fVxuICAgICAgICAgICAgICBvbkNoYW5nZVByZWZlcmVuY2VzPXt0aGlzLm9wZW5EaWFsb2d9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2Jhbm5lckNvbnRlbnR9XG4gICAgICAgICAgICAgIHN1YkNvbnRlbnQ9e2Jhbm5lclN1YkNvbnRlbnR9XG4gICAgICAgICAgICAgIHRleHRDb2xvcj17YmFubmVyVGV4dENvbG9yfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2Jhbm5lckJhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAge2lzRGlhbG9nT3BlbiAmJiAoXG4gICAgICAgICAgPFByZWZlcmVuY2VEaWFsb2dcbiAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLmhhbmRsZVByZWZlcmVuY2VEaWFsb2dSZWZ9XG4gICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVDYW5jZWx9XG4gICAgICAgICAgICBvblNhdmU9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNhdGVnb3J5Q2hhbmdlfVxuICAgICAgICAgICAgbWFya2V0aW5nRGVzdGluYXRpb25zPXttYXJrZXRpbmdEZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICBhZHZlcnRpc2luZ0Rlc3RpbmF0aW9ucz17YWR2ZXJ0aXNpbmdEZXN0aW5hdGlvbnN9XG4gICAgICAgICAgICBmdW5jdGlvbmFsRGVzdGluYXRpb25zPXtmdW5jdGlvbmFsRGVzdGluYXRpb25zfVxuICAgICAgICAgICAgbWFya2V0aW5nQW5kQW5hbHl0aWNzPXtwcmVmZXJlbmNlcy5tYXJrZXRpbmdBbmRBbmFseXRpY3N9XG4gICAgICAgICAgICBhZHZlcnRpc2luZz17cHJlZmVyZW5jZXMuYWR2ZXJ0aXNpbmd9XG4gICAgICAgICAgICBmdW5jdGlvbmFsPXtwcmVmZXJlbmNlcy5mdW5jdGlvbmFsfVxuICAgICAgICAgICAgdGl0bGU9e3ByZWZlcmVuY2VzRGlhbG9nVGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtwcmVmZXJlbmNlc0RpYWxvZ0NvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2lzQ2FuY2VsbGluZyAmJiAoXG4gICAgICAgICAgPENhbmNlbERpYWxvZ1xuICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMuaGFuZGxlQ2FuY2VsRGlhbG9nUmVmfVxuICAgICAgICAgICAgb25CYWNrPXt0aGlzLmhhbmRsZUNhbmNlbEJhY2t9XG4gICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuaGFuZGxlQ2FuY2VsQ29uZmlybX1cbiAgICAgICAgICAgIHRpdGxlPXtjYW5jZWxEaWFsb2dUaXRsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e2NhbmNlbERpYWxvZ0NvbnRlbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtpc0NvbnNlbnRSZXF1aXJlZCwgaW1wbHlDb25zZW50T25JbnRlcmFjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBlbWl0dGVyLm9uKCdvcGVuRGlhbG9nJywgdGhpcy5vcGVuRGlhbG9nKVxuXG4gICAgaWYgKGlzQ29uc2VudFJlcXVpcmVkICYmIGltcGx5Q29uc2VudE9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUJvZHlDbGljaywgZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignb3BlbkRpYWxvZycsIHRoaXMub3BlbkRpYWxvZylcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVCb2R5Q2xpY2ssIGZhbHNlKVxuICB9XG5cbiAgb3BlbkRpYWxvZyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlhbG9nT3BlbjogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjbG9zZURpYWxvZyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQmFubmVyUmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5iYW5uZXIgPSBub2RlXG4gIH1cblxuICBoYW5kbGVQcmVmZXJlbmNlRGlhbG9nUmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5wcmVmZXJlbmNlRGlhbG9nID0gbm9kZVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsRGlhbG9nUmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5jYW5jZWxEaWFsb2cgPSBub2RlXG4gIH1cblxuICBoYW5kbGVCYW5uZXJBY2NlcHQgPSAoKSA9PiB7XG4gICAgY29uc3Qge3NhdmVDb25zZW50fSA9IHRoaXMucHJvcHNcblxuICAgIHNhdmVDb25zZW50KClcbiAgfVxuXG4gIGhhbmRsZUJvZHlDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG5ld0Rlc3RpbmF0aW9ucyxcbiAgICAgIHNhdmVDb25zZW50LFxuICAgICAgaXNDb25zZW50UmVxdWlyZWQsXG4gICAgICBpbXBseUNvbnNlbnRPbkludGVyYWN0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIERvIG5vdGhpbmcgaWYgbm8gbmV3IGltcGxpY2l0IGNvbnNlbnQgbmVlZHMgdG8gYmUgc2F2ZWRcbiAgICBpZiAoXG4gICAgICAhaXNDb25zZW50UmVxdWlyZWQgfHxcbiAgICAgICFpbXBseUNvbnNlbnRPbkludGVyYWN0aW9uIHx8XG4gICAgICBuZXdEZXN0aW5hdGlvbnMubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgcHJvcG9nYXRlZCBjbGlja3MgZnJvbSBpbnNpZGUgdGhlIGNvbnNlbnQgbWFuYWdlclxuICAgIGlmIChcbiAgICAgICh0aGlzLmJhbm5lciAmJiB0aGlzLmJhbm5lci5jb250YWlucyhlLnRhcmdldCkpIHx8XG4gICAgICAodGhpcy5wcmVmZXJlbmNlRGlhbG9nICYmIHRoaXMucHJlZmVyZW5jZURpYWxvZy5jb250YWlucyhlLnRhcmdldCkpIHx8XG4gICAgICAodGhpcy5jYW5jZWxEaWFsb2cgJiYgdGhpcy5jYW5jZWxEaWFsb2cuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc2F2ZUNvbnNlbnQodW5kZWZpbmVkLCBmYWxzZSlcbiAgfVxuXG4gIGhhbmRsZUNhdGVnb3J5Q2hhbmdlID0gKGNhdGVnb3J5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHtzZXRQcmVmZXJlbmNlc30gPSB0aGlzLnByb3BzXG5cbiAgICBzZXRQcmVmZXJlbmNlcyh7XG4gICAgICBbY2F0ZWdvcnldOiB2YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtzYXZlQ29uc2VudH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlhbG9nT3BlbjogZmFsc2VcbiAgICB9KVxuICAgIHNhdmVDb25zZW50KClcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBjb25zdCB7cmVzZXRQcmVmZXJlbmNlcywgbmV3RGVzdGluYXRpb25zfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaWFsb2dPcGVuOiBmYWxzZVxuICAgIH0pXG5cbiAgICAvLyBPbmx5IHNob3cgdGhlIGNhbmNlbCBjb25maXJtYXRpb24gaWYgdGhlcmUncyB1bmNvbnNlbnRlZCBkZXN0aW5hdGlvbnNcbiAgICBpZiAobmV3RGVzdGluYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0NhbmNlbGxpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0UHJlZmVyZW5jZXMoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNhbmNlbEJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpYWxvZ09wZW46IHRydWUsXG4gICAgICBpc0NhbmNlbGxpbmc6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbENvbmZpcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qge3Jlc2V0UHJlZmVyZW5jZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NhbmNlbGxpbmc6IGZhbHNlXG4gICAgfSlcbiAgICByZXNldFByZWZlcmVuY2VzKClcbiAgfVxufVxuIl19
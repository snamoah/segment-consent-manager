'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _buttons = require('./buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CancelDialog = function (_PureComponent) {
  (0, _inherits3.default)(CancelDialog, _PureComponent);

  function CancelDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CancelDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CancelDialog.__proto__ || (0, _getPrototypeOf2.default)(CancelDialog)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      var onConfirm = _this.props.onConfirm;


      e.preventDefault();
      onConfirm();
    }, _this.handleEsc = function (e) {
      var onConfirm = _this.props.onConfirm;

      // Esc key

      if (e.keyCode === 27) {
        onConfirm();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CancelDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          innerRef = _props.innerRef,
          onBack = _props.onBack,
          title = _props.title,
          content = _props.content;


      var buttons = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _buttons.DefaultButton,
          { type: 'button', onClick: onBack },
          'Go Back'
        ),
        _react2.default.createElement(
          _buttons.RedButton,
          { type: 'submit' },
          'Yes, Cancel'
        )
      );

      return _react2.default.createElement(
        _dialog2.default,
        {
          innerRef: innerRef,
          title: title,
          buttons: buttons,
          onSubmit: this.handleSubmit,
          width: '500px'
        },
        content
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this.handleEsc, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleEsc, false);
    }
  }]);
  return CancelDialog;
}(_react.PureComponent);

CancelDialog.displayName = 'CancelDialog';
CancelDialog.propTypes = {
  innerRef: _propTypes2.default.func.isRequired,
  onBack: _propTypes2.default.func.isRequired,
  onConfirm: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.node.isRequired,
  content: _propTypes2.default.node.isRequired
};
exports.default = CancelDialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvY2FuY2VsLWRpYWxvZy5qcyJdLCJuYW1lcyI6WyJDYW5jZWxEaWFsb2ciLCJoYW5kbGVTdWJtaXQiLCJvbkNvbmZpcm0iLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUVzYyIsImtleUNvZGUiLCJpbm5lclJlZiIsIm9uQmFjayIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbnMiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlB1cmVDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7d05BNENuQkMsWSxHQUFlLGFBQUs7QUFBQSxVQUNYQyxTQURXLEdBQ0UsTUFBS0MsS0FEUCxDQUNYRCxTQURXOzs7QUFHbEJFLFFBQUVDLGNBQUY7QUFDQUg7QUFDRCxLLFFBRURJLFMsR0FBWSxhQUFLO0FBQUEsVUFDUkosU0FEUSxHQUNLLE1BQUtDLEtBRFYsQ0FDUkQsU0FEUTs7QUFHZjs7QUFDQSxVQUFJRSxFQUFFRyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEJMO0FBQ0Q7QUFDRixLOzs7Ozs2QkEvQ1E7QUFBQSxtQkFDb0MsS0FBS0MsS0FEekM7QUFBQSxVQUNBSyxRQURBLFVBQ0FBLFFBREE7QUFBQSxVQUNVQyxNQURWLFVBQ1VBLE1BRFY7QUFBQSxVQUNrQkMsS0FEbEIsVUFDa0JBLEtBRGxCO0FBQUEsVUFDeUJDLE9BRHpCLFVBQ3lCQSxPQUR6Qjs7O0FBR1AsVUFBTUMsVUFDSjtBQUFBO0FBQUE7QUFDRTtBQUFDLGdDQUFEO0FBQUEsWUFBZSxNQUFLLFFBQXBCLEVBQTZCLFNBQVNILE1BQXRDO0FBQUE7QUFBQSxTQURGO0FBSUU7QUFBQyw0QkFBRDtBQUFBLFlBQVcsTUFBSyxRQUFoQjtBQUFBO0FBQUE7QUFKRixPQURGOztBQVNBLGFBQ0U7QUFBQyx3QkFBRDtBQUFBO0FBQ0Usb0JBQVVELFFBRFo7QUFFRSxpQkFBT0UsS0FGVDtBQUdFLG1CQUFTRSxPQUhYO0FBSUUsb0JBQVUsS0FBS1gsWUFKakI7QUFLRSxpQkFBTTtBQUxSO0FBT0dVO0FBUEgsT0FERjtBQVdEOzs7d0NBRW1CO0FBQ2xCRSxlQUFTQyxJQUFULENBQWNDLGdCQUFkLENBQStCLFNBQS9CLEVBQTBDLEtBQUtULFNBQS9DLEVBQTBELEtBQTFEO0FBQ0Q7OzsyQ0FFc0I7QUFDckJPLGVBQVNDLElBQVQsQ0FBY0UsbUJBQWQsQ0FBa0MsU0FBbEMsRUFBNkMsS0FBS1YsU0FBbEQsRUFBNkQsS0FBN0Q7QUFDRDs7O0VBMUN1Q1csb0I7O0FBQXJCakIsWSxDQUNaa0IsVyxHQUFjLGM7QUFERmxCLFksQ0FHWm1CLFMsR0FBWTtBQUNqQlgsWUFBVVksb0JBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQmIsVUFBUVcsb0JBQVVDLElBQVYsQ0FBZUMsVUFGTjtBQUdqQnBCLGFBQVdrQixvQkFBVUMsSUFBVixDQUFlQyxVQUhUO0FBSWpCWixTQUFPVSxvQkFBVUcsSUFBVixDQUFlRCxVQUpMO0FBS2pCWCxXQUFTUyxvQkFBVUcsSUFBVixDQUFlRDtBQUxQLEM7a0JBSEF0QixZIiwiZmlsZSI6ImNhbmNlbC1kaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9kaWFsb2cnXG5pbXBvcnQge0RlZmF1bHRCdXR0b24sIFJlZEJ1dHRvbn0gZnJvbSAnLi9idXR0b25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxEaWFsb2cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0NhbmNlbERpYWxvZydcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQmFjazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpbm5lclJlZiwgb25CYWNrLCB0aXRsZSwgY29udGVudH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBidXR0b25zID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERlZmF1bHRCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQmFja30+XG4gICAgICAgICAgR28gQmFja1xuICAgICAgICA8L0RlZmF1bHRCdXR0b24+XG4gICAgICAgIDxSZWRCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlllcywgQ2FuY2VsPC9SZWRCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERpYWxvZ1xuICAgICAgICBpbm5lclJlZj17aW5uZXJSZWZ9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYnV0dG9ucz17YnV0dG9uc31cbiAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICB3aWR0aD1cIjUwMHB4XCJcbiAgICAgID5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVzYywgZmFsc2UpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUVzYywgZmFsc2UpXG4gIH1cblxuICBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHNcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG9uQ29uZmlybSgpXG4gIH1cblxuICBoYW5kbGVFc2MgPSBlID0+IHtcbiAgICBjb25zdCB7b25Db25maXJtfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEVzYyBrZXlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgb25Db25maXJtKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==
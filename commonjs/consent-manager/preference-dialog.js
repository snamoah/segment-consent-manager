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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  @media (max-width: 600px) {\n    display: none;\n  }\n'], ['\n  @media (max-width: 600px) {\n    display: none;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  overflow-x: auto;\n  margin-top: 16px;\n'], ['\n  overflow-x: auto;\n  margin-top: 16px;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  border-collapse: collapse;\n  font-size: 12px;\n'], ['\n  border-collapse: collapse;\n  font-size: 12px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n'], ['\n  background: #f7f8fa;\n  color: #1f4160;\n  font-weight: 600;\n  text-align: left;\n  border-width: 2px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-weight: normal;\n  text-align: left;\n'], ['\n  font-weight: normal;\n  text-align: left;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n'], ['\n  th,\n  td {\n    vertical-align: top;\n    padding: 8px 12px;\n    border: 1px solid rgba(67, 90, 111, 0.114);\n  }\n  td {\n    border-top: none;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n'], ['\n  input {\n    vertical-align: middle;\n  }\n  label {\n    display: block;\n    margin-bottom: 4px;\n    white-space: nowrap;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _buttons = require('./buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hideOnMobile = /*#__PURE__*/(0, _reactEmotion.css)(_templateObject, 'label:hideOnMobile;');

var TableScroll = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1v3fxkj0',
  label: 'TableScroll'
})(_templateObject2);

var Table = /*#__PURE__*/(0, _reactEmotion2.default)('table', {
  target: 'e1v3fxkj1',
  label: 'Table'
})(_templateObject3);

var ColumnHeading = /*#__PURE__*/(0, _reactEmotion2.default)('th', {
  target: 'e1v3fxkj2',
  label: 'ColumnHeading'
})(_templateObject4);

var RowHeading = /*#__PURE__*/(0, _reactEmotion2.default)('th', {
  target: 'e1v3fxkj3',
  label: 'RowHeading'
})(_templateObject5);

var Row = /*#__PURE__*/(0, _reactEmotion2.default)('tr', {
  target: 'e1v3fxkj4',
  label: 'Row'
})(_templateObject6);

var InputCell = /*#__PURE__*/(0, _reactEmotion2.default)('td', {
  target: 'e1v3fxkj5',
  label: 'InputCell'
})(_templateObject7);

var PreferenceDialog = function (_PureComponent) {
  (0, _inherits3.default)(PreferenceDialog, _PureComponent);

  function PreferenceDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PreferenceDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PreferenceDialog.__proto__ || (0, _getPrototypeOf2.default)(PreferenceDialog)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var onChange = _this.props.onChange;


      onChange(e.target.name, e.target.value === 'true');
    }, _this.handleSubmit = function (e) {
      var _this$props = _this.props,
          onSave = _this$props.onSave,
          marketingAndAnalytics = _this$props.marketingAndAnalytics,
          advertising = _this$props.advertising,
          functional = _this$props.functional;


      e.preventDefault();

      // Safe guard against browsers that don't prevent the
      // submission of invalid forms (Safari < 10.1)
      if (marketingAndAnalytics === null || advertising === null || functional === null) {
        return;
      }

      onSave();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PreferenceDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          innerRef = _props.innerRef,
          onCancel = _props.onCancel,
          marketingDestinations = _props.marketingDestinations,
          advertisingDestinations = _props.advertisingDestinations,
          functionalDestinations = _props.functionalDestinations,
          marketingAndAnalytics = _props.marketingAndAnalytics,
          advertising = _props.advertising,
          functional = _props.functional,
          title = _props.title,
          content = _props.content;


      var buttons = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _buttons.DefaultButton,
          { type: 'button', onClick: onCancel },
          'Cancel'
        ),
        _react2.default.createElement(
          _buttons.GreenButton,
          { type: 'submit' },
          'Save'
        )
      );

      return _react2.default.createElement(
        _dialog2.default,
        {
          innerRef: innerRef,
          title: title,
          buttons: buttons,
          onCancel: onCancel,
          onSubmit: this.handleSubmit
        },
        content,
        _react2.default.createElement(
          TableScroll,
          null,
          _react2.default.createElement(
            Table,
            null,
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                  ColumnHeading,
                  { scope: 'col' },
                  'Allow'
                ),
                _react2.default.createElement(
                  ColumnHeading,
                  { scope: 'col' },
                  'Category'
                ),
                _react2.default.createElement(
                  ColumnHeading,
                  { scope: 'col' },
                  'Purpose'
                ),
                _react2.default.createElement(
                  ColumnHeading,
                  { scope: 'col', className: hideOnMobile },
                  'Tools'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                  InputCell,
                  null,
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'functional',
                      value: 'true',
                      checked: functional === true,
                      onChange: this.handleChange,
                      'aria-label': 'Allow functional tracking',
                      required: true
                    }),
                    ' ',
                    'Yes'
                  ),
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'functional',
                      value: 'false',
                      checked: functional === false,
                      onChange: this.handleChange,
                      'aria-label': 'Disallow functional tracking',
                      required: true
                    }),
                    ' ',
                    'No'
                  )
                ),
                _react2.default.createElement(
                  RowHeading,
                  { scope: 'row' },
                  'Functional'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'To monitor the performance of our site and to enhance your browsing experience.'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: hideOnMobile },
                    'For example, these tools enable you to communicate with us via live chat.'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  { className: hideOnMobile },
                  functionalDestinations.map(function (d) {
                    return d.name;
                  }).join(', ')
                )
              ),
              _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                  InputCell,
                  null,
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'marketingAndAnalytics',
                      value: 'true',
                      checked: marketingAndAnalytics === true,
                      onChange: this.handleChange,
                      'aria-label': 'Allow marketing and analytics tracking',
                      required: true
                    }),
                    ' ',
                    'Yes'
                  ),
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'marketingAndAnalytics',
                      value: 'false',
                      checked: marketingAndAnalytics === false,
                      onChange: this.handleChange,
                      'aria-label': 'Disallow marketing and analytics tracking',
                      required: true
                    }),
                    ' ',
                    'No'
                  )
                ),
                _react2.default.createElement(
                  RowHeading,
                  { scope: 'row' },
                  'Marketing and Analytics'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'To understand user behavior in order to provide you with a more relevant browsing experience or personalize the content on our site.'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: hideOnMobile },
                    'For example, we collect information about which pages you visit to help us present more relevant information.'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  { className: hideOnMobile },
                  marketingDestinations.map(function (d) {
                    return d.name;
                  }).join(', ')
                )
              ),
              _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                  InputCell,
                  null,
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'advertising',
                      value: 'true',
                      checked: advertising === true,
                      onChange: this.handleChange,
                      'aria-label': 'Allow advertising tracking',
                      required: true
                    }),
                    ' ',
                    'Yes'
                  ),
                  _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', {
                      type: 'radio',
                      name: 'advertising',
                      value: 'false',
                      checked: advertising === false,
                      onChange: this.handleChange,
                      'aria-label': 'Disallow advertising tracking',
                      required: true
                    }),
                    ' ',
                    'No'
                  )
                ),
                _react2.default.createElement(
                  RowHeading,
                  { scope: 'row' },
                  'Advertising'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'To personalize and measure the effectiveness of advertising on our site and other websites.'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: hideOnMobile },
                    'For example, we may serve you a personalized ad based on the pages you visit on our site.'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  { className: hideOnMobile },
                  advertisingDestinations.map(function (d) {
                    return d.name;
                  }).join(', ')
                )
              ),
              _react2.default.createElement(
                Row,
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'N/A'
                ),
                _react2.default.createElement(
                  RowHeading,
                  { scope: 'row' },
                  'Essential'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    'We use browser cookies that are necessary for the site to work as intended.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'For example, we store your website data collection preferences so we can honor them if you return to our site. You can disable these cookies in your browser settings but if you do the site may not work as intended.'
                  )
                ),
                _react2.default.createElement('td', { className: hideOnMobile })
              )
            )
          )
        )
      );
    }
  }]);
  return PreferenceDialog;
}(_react.PureComponent);

PreferenceDialog.displayName = 'PreferenceDialog';
PreferenceDialog.propTypes = {
  innerRef: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  marketingDestinations: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  advertisingDestinations: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  functionalDestinations: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  marketingAndAnalytics: _propTypes2.default.bool,
  advertising: _propTypes2.default.bool,
  functional: _propTypes2.default.bool,
  title: _propTypes2.default.node.isRequired,
  content: _propTypes2.default.node.isRequired
};
PreferenceDialog.defaultProps = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null
};
exports.default = PreferenceDialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvcHJlZmVyZW5jZS1kaWFsb2cuanMiXSwibmFtZXMiOlsiaGlkZU9uTW9iaWxlIiwiY3NzIiwiVGFibGVTY3JvbGwiLCJzdHlsZWQiLCJUYWJsZSIsIkNvbHVtbkhlYWRpbmciLCJSb3dIZWFkaW5nIiwiUm93IiwiSW5wdXRDZWxsIiwiUHJlZmVyZW5jZURpYWxvZyIsImhhbmRsZUNoYW5nZSIsIm9uQ2hhbmdlIiwicHJvcHMiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwib25TYXZlIiwibWFya2V0aW5nQW5kQW5hbHl0aWNzIiwiYWR2ZXJ0aXNpbmciLCJmdW5jdGlvbmFsIiwicHJldmVudERlZmF1bHQiLCJpbm5lclJlZiIsIm9uQ2FuY2VsIiwibWFya2V0aW5nRGVzdGluYXRpb25zIiwiYWR2ZXJ0aXNpbmdEZXN0aW5hdGlvbnMiLCJmdW5jdGlvbmFsRGVzdGluYXRpb25zIiwidGl0bGUiLCJjb250ZW50IiwiYnV0dG9ucyIsIm1hcCIsImQiLCJqb2luIiwiUHVyZUNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZ0NBQWVDLGlCQUFmLHlDQUFOOztBQU1BLElBQU1DLCtCQUFjQyxzQkFBZCxFQUFxQixLQUFyQjtBQUFBO0FBQUE7QUFBQSxvQkFBTjs7QUFLQSxJQUFNQyx5QkFBUUQsc0JBQVIsRUFBZSxPQUFmO0FBQUE7QUFBQTtBQUFBLG9CQUFOOztBQUtBLElBQU1FLGlDQUFnQkYsc0JBQWhCLEVBQXVCLElBQXZC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QmhCO0FBcUJqQnZCLGVBQWFpQixvQkFBVU0sSUFyQk47QUFzQmpCdEIsY0FBWWdCLG9CQUFVTSxJQXRCTDtBQXVCakJmLFNBQU9TLG9CQUFVTyxJQUFWLENBQWVMLFVBdkJMO0FBd0JqQlYsV0FBU1Esb0JBQVVPLElBQVYsQ0FBZUw7QUF4QlAsQztBQUhBOUIsZ0IsQ0E4QlpvQyxZLEdBQWU7QUFDcEIxQix5QkFBdUIsSUFESDtBQUVwQkMsZUFBYSxJQUZPO0FBR3BCQyxjQUFZO0FBSFEsQztrQkE5QkhaLGdCIiwiZmlsZSI6InByZWZlcmVuY2UtZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdyZWFjdC1lbW90aW9uJ1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL2RpYWxvZydcbmltcG9ydCB7RGVmYXVsdEJ1dHRvbiwgR3JlZW5CdXR0b259IGZyb20gJy4vYnV0dG9ucydcblxuY29uc3QgaGlkZU9uTW9iaWxlID0gY3NzYFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gXG5cbmNvbnN0IFRhYmxlU2Nyb2xsID0gc3R5bGVkKCdkaXYnKWBcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTZweDtcbmBcblxuY29uc3QgVGFibGUgPSBzdHlsZWQoJ3RhYmxlJylgXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcblxuY29uc3QgQ29sdW1uSGVhZGluZyA9IHN0eWxlZCgndGgnKWBcbiAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgY29sb3I6ICMxZjQxNjA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuYFxuXG5jb25zdCBSb3dIZWFkaW5nID0gc3R5bGVkKCd0aCcpYFxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYFxuXG5jb25zdCBSb3cgPSBzdHlsZWQoJ3RyJylgXG4gIHRoLFxuICB0ZCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY3LCA5MCwgMTExLCAwLjExNCk7XG4gIH1cbiAgdGQge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgSW5wdXRDZWxsID0gc3R5bGVkKCd0ZCcpYFxuICBpbnB1dCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZmVyZW5jZURpYWxvZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnUHJlZmVyZW5jZURpYWxvZydcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uU2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBtYXJrZXRpbmdEZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBhZHZlcnRpc2luZ0Rlc3RpbmF0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICAgIH0pXG4gICAgKS5pc1JlcXVpcmVkLFxuICAgIGZ1bmN0aW9uYWxEZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBtYXJrZXRpbmdBbmRBbmFseXRpY3M6IFByb3BUeXBlcy5ib29sLFxuICAgIGFkdmVydGlzaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmdW5jdGlvbmFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1hcmtldGluZ0FuZEFuYWx5dGljczogbnVsbCxcbiAgICBhZHZlcnRpc2luZzogbnVsbCxcbiAgICBmdW5jdGlvbmFsOiBudWxsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJSZWYsXG4gICAgICBvbkNhbmNlbCxcbiAgICAgIG1hcmtldGluZ0Rlc3RpbmF0aW9ucyxcbiAgICAgIGFkdmVydGlzaW5nRGVzdGluYXRpb25zLFxuICAgICAgZnVuY3Rpb25hbERlc3RpbmF0aW9ucyxcbiAgICAgIG1hcmtldGluZ0FuZEFuYWx5dGljcyxcbiAgICAgIGFkdmVydGlzaW5nLFxuICAgICAgZnVuY3Rpb25hbCxcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBidXR0b25zID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPERlZmF1bHRCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2FuY2VsfT5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9EZWZhdWx0QnV0dG9uPlxuICAgICAgICA8R3JlZW5CdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L0dyZWVuQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgaW5uZXJSZWY9e2lubmVyUmVmfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGJ1dHRvbnM9e2J1dHRvbnN9XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgPlxuICAgICAgICB7Y29udGVudH1cblxuICAgICAgICA8VGFibGVTY3JvbGw+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW5IZWFkaW5nIHNjb3BlPVwiY29sXCI+QWxsb3c8L0NvbHVtbkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENvbHVtbkhlYWRpbmcgc2NvcGU9XCJjb2xcIj5DYXRlZ29yeTwvQ29sdW1uSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uSGVhZGluZyBzY29wZT1cImNvbFwiPlB1cnBvc2U8L0NvbHVtbkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPENvbHVtbkhlYWRpbmcgc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9e2hpZGVPbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICBUb29sc1xuICAgICAgICAgICAgICAgIDwvQ29sdW1uSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPElucHV0Q2VsbD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZnVuY3Rpb25hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmdW5jdGlvbmFsID09PSB0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWxsb3cgZnVuY3Rpb25hbCB0cmFja2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bmN0aW9uYWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Z1bmN0aW9uYWwgPT09IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzYWxsb3cgZnVuY3Rpb25hbCB0cmFja2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICBOb1xuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L0lucHV0Q2VsbD5cbiAgICAgICAgICAgICAgICA8Um93SGVhZGluZyBzY29wZT1cInJvd1wiPkZ1bmN0aW9uYWw8L1Jvd0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRvIG1vbml0b3IgdGhlIHBlcmZvcm1hbmNlIG9mIG91ciBzaXRlIGFuZCB0byBlbmhhbmNlIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgYnJvd3NpbmcgZXhwZXJpZW5jZS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGlkZU9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoZXNlIHRvb2xzIGVuYWJsZSB5b3UgdG8gY29tbXVuaWNhdGUgd2l0aCB1c1xuICAgICAgICAgICAgICAgICAgICB2aWEgbGl2ZSBjaGF0LlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aGlkZU9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgIHtmdW5jdGlvbmFsRGVzdGluYXRpb25zLm1hcChkID0+IGQubmFtZSkuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxJbnB1dENlbGw+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmtldGluZ0FuZEFuYWx5dGljc1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXttYXJrZXRpbmdBbmRBbmFseXRpY3MgPT09IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBbGxvdyBtYXJrZXRpbmcgYW5kIGFuYWx5dGljcyB0cmFja2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1hcmtldGluZ0FuZEFuYWx5dGljc1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bWFya2V0aW5nQW5kQW5hbHl0aWNzID09PSBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc2FsbG93IG1hcmtldGluZyBhbmQgYW5hbHl0aWNzIHRyYWNraW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRDZWxsPlxuICAgICAgICAgICAgICAgIDxSb3dIZWFkaW5nIHNjb3BlPVwicm93XCI+TWFya2V0aW5nIGFuZCBBbmFseXRpY3M8L1Jvd0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRvIHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBpbiBvcmRlciB0byBwcm92aWRlIHlvdSB3aXRoIGFcbiAgICAgICAgICAgICAgICAgICAgbW9yZSByZWxldmFudCBicm93c2luZyBleHBlcmllbmNlIG9yIHBlcnNvbmFsaXplIHRoZSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIG9uIG91ciBzaXRlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtoaWRlT25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICBGb3IgZXhhbXBsZSwgd2UgY29sbGVjdCBpbmZvcm1hdGlvbiBhYm91dCB3aGljaCBwYWdlcyB5b3VcbiAgICAgICAgICAgICAgICAgICAgdmlzaXQgdG8gaGVscCB1cyBwcmVzZW50IG1vcmUgcmVsZXZhbnQgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtoaWRlT25Nb2JpbGV9PlxuICAgICAgICAgICAgICAgICAge21hcmtldGluZ0Rlc3RpbmF0aW9ucy5tYXAoZCA9PiBkLm5hbWUpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8SW5wdXRDZWxsPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZHZlcnRpc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthZHZlcnRpc2luZyA9PT0gdHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFsbG93IGFkdmVydGlzaW5nIHRyYWNraW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIFllc1xuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWR2ZXJ0aXNpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2FkdmVydGlzaW5nID09PSBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc2FsbG93IGFkdmVydGlzaW5nIHRyYWNraW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRDZWxsPlxuICAgICAgICAgICAgICAgIDxSb3dIZWFkaW5nIHNjb3BlPVwicm93XCI+QWR2ZXJ0aXNpbmc8L1Jvd0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRvIHBlcnNvbmFsaXplIGFuZCBtZWFzdXJlIHRoZSBlZmZlY3RpdmVuZXNzIG9mIGFkdmVydGlzaW5nXG4gICAgICAgICAgICAgICAgICAgIG9uIG91ciBzaXRlIGFuZCBvdGhlciB3ZWJzaXRlcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGlkZU9uTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHdlIG1heSBzZXJ2ZSB5b3UgYSBwZXJzb25hbGl6ZWQgYWQgYmFzZWQgb24gdGhlXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzIHlvdSB2aXNpdCBvbiBvdXIgc2l0ZS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2hpZGVPbk1vYmlsZX0+XG4gICAgICAgICAgICAgICAgICB7YWR2ZXJ0aXNpbmdEZXN0aW5hdGlvbnMubWFwKGQgPT4gZC5uYW1lKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPHRkPk4vQTwvdGQ+XG4gICAgICAgICAgICAgICAgPFJvd0hlYWRpbmcgc2NvcGU9XCJyb3dcIj5Fc3NlbnRpYWw8L1Jvd0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFdlIHVzZSBicm93c2VyIGNvb2tpZXMgdGhhdCBhcmUgbmVjZXNzYXJ5IGZvciB0aGUgc2l0ZSB0b1xuICAgICAgICAgICAgICAgICAgICB3b3JrIGFzIGludGVuZGVkLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCB3ZSBzdG9yZSB5b3VyIHdlYnNpdGUgZGF0YSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHByZWZlcmVuY2VzIHNvIHdlIGNhbiBob25vciB0aGVtIGlmIHlvdSByZXR1cm4gdG8gb3VyIHNpdGUuXG4gICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZGlzYWJsZSB0aGVzZSBjb29raWVzIGluIHlvdXIgYnJvd3NlciBzZXR0aW5ncyBidXRcbiAgICAgICAgICAgICAgICAgICAgaWYgeW91IGRvIHRoZSBzaXRlIG1heSBub3Qgd29yayBhcyBpbnRlbmRlZC5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2hpZGVPbk1vYmlsZX0gLz5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvVGFibGVTY3JvbGw+XG4gICAgICA8L0RpYWxvZz5cbiAgICApXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgb25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUgPT09ICd0cnVlJylcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGNvbnN0IHtvblNhdmUsIG1hcmtldGluZ0FuZEFuYWx5dGljcywgYWR2ZXJ0aXNpbmcsIGZ1bmN0aW9uYWx9ID0gdGhpcy5wcm9wc1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBTYWZlIGd1YXJkIGFnYWluc3QgYnJvd3NlcnMgdGhhdCBkb24ndCBwcmV2ZW50IHRoZVxuICAgIC8vIHN1Ym1pc3Npb24gb2YgaW52YWxpZCBmb3JtcyAoU2FmYXJpIDwgMTAuMSlcbiAgICBpZiAoXG4gICAgICBtYXJrZXRpbmdBbmRBbmFseXRpY3MgPT09IG51bGwgfHxcbiAgICAgIGFkdmVydGlzaW5nID09PSBudWxsIHx8XG4gICAgICBmdW5jdGlvbmFsID09PSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBvblNhdmUoKVxuICB9XG59XG4iXX0=
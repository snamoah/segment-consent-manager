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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  position: relative;\n  padding: 8px;\n  padding-right: 40px;\n  background: ', ';\n  color: ', ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n'], ['\n  ', ';\n  position: relative;\n  padding: 8px;\n  padding-right: 40px;\n  background: ', ';\n  color: ', ';\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n'], ['\n  a,\n  button {\n    display: inline;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n'], ['\n  margin: 0;\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'], ['\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _fontStyles = require('./font-styles');

var _fontStyles2 = _interopRequireDefault(_fontStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'exqsvii0',
  label: 'Root'
})(_templateObject, _fontStyles2.default, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.textColor;
});

var Content = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'exqsvii1',
  label: 'Content'
})(_templateObject2);

var P = /*#__PURE__*/(0, _reactEmotion2.default)('p', {
  target: 'exqsvii2',
  label: 'P'
})(_templateObject3);

var CloseButton = /*#__PURE__*/(0, _reactEmotion2.default)('button', {
  target: 'exqsvii3',
  label: 'CloseButton'
})(_templateObject4);

var Banner = function (_PureComponent) {
  (0, _inherits3.default)(Banner, _PureComponent);

  function Banner() {
    (0, _classCallCheck3.default)(this, Banner);
    return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).apply(this, arguments));
  }

  (0, _createClass3.default)(Banner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          innerRef = _props.innerRef,
          onAccept = _props.onAccept,
          onChangePreferences = _props.onChangePreferences,
          content = _props.content,
          subContent = _props.subContent,
          backgroundColor = _props.backgroundColor,
          textColor = _props.textColor;


      return _react2.default.createElement(
        Root,
        {
          innerRef: innerRef,
          backgroundColor: backgroundColor,
          textColor: textColor
        },
        _react2.default.createElement(
          Content,
          null,
          _react2.default.createElement(
            P,
            null,
            content
          ),
          _react2.default.createElement(
            P,
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: onChangePreferences },
              subContent
            )
          )
        ),
        _react2.default.createElement(
          CloseButton,
          {
            type: 'button',
            title: 'Accept policy',
            'aria-label': 'Accept policy',
            onClick: onAccept
          },
          '\u2715'
        )
      );
    }
  }]);
  return Banner;
}(_react.PureComponent);

Banner.displayName = 'Banner';
Banner.propTypes = {
  innerRef: _propTypes2.default.func.isRequired,
  onAccept: _propTypes2.default.func.isRequired,
  onChangePreferences: _propTypes2.default.func.isRequired,
  content: _propTypes2.default.node.isRequired,
  subContent: _propTypes2.default.node.isRequired,
  backgroundColor: _propTypes2.default.string.isRequired,
  textColor: _propTypes2.default.string.isRequired
};
exports.default = Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvYmFubmVyLmpzIl0sIm5hbWVzIjpbIlJvb3QiLCJzdHlsZWQiLCJmb250U3R5bGVzIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJDb250ZW50IiwiUCIsIkNsb3NlQnV0dG9uIiwiQmFubmVyIiwiaW5uZXJSZWYiLCJvbkFjY2VwdCIsIm9uQ2hhbmdlUHJlZmVyZW5jZXMiLCJjb250ZW50Iiwic3ViQ29udGVudCIsIlB1cmVDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibm9kZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsd0JBQU9DLHNCQUFQLEVBQWMsS0FBZDtBQUFBO0FBQUE7QUFBQSxvQkFDRkMsb0JBREUsRUFLVTtBQUFBLFNBQVNDLE1BQU1DLGVBQWY7QUFBQSxDQUxWLEVBTUs7QUFBQSxTQUFTRCxNQUFNRSxTQUFmO0FBQUEsQ0FOTCxDQUFOOztBQVlBLElBQU1DLDJCQUFVTCxzQkFBVixFQUFpQixLQUFqQjtBQUFBO0FBQUE7QUFBQSxvQkFBTjs7QUFjQSxJQUFNTSxxQkFBSU4sc0JBQUosRUFBVyxHQUFYO0FBQUE7QUFBQTtBQUFBLG9CQUFOOztBQU9BLElBQU1PLCtCQUFjUCxzQkFBZCxFQUFxQixRQUFyQjtBQUFBO0FBQUE7QUFBQSxvQkFBTjs7SUFlcUJRLE07Ozs7Ozs7Ozs7NkJBYVY7QUFBQSxtQkFTSCxLQUFLTixLQVRGO0FBQUEsVUFFTE8sUUFGSyxVQUVMQSxRQUZLO0FBQUEsVUFHTEMsUUFISyxVQUdMQSxRQUhLO0FBQUEsVUFJTEMsbUJBSkssVUFJTEEsbUJBSks7QUFBQSxVQUtMQyxPQUxLLFVBS0xBLE9BTEs7QUFBQSxVQU1MQyxVQU5LLFVBTUxBLFVBTks7QUFBQSxVQU9MVixlQVBLLFVBT0xBLGVBUEs7QUFBQSxVQVFMQyxTQVJLLFVBUUxBLFNBUks7OztBQVdQLGFBQ0U7QUFBQyxZQUFEO0FBQUE7QUFDRSxvQkFBVUssUUFEWjtBQUVFLDJCQUFpQk4sZUFGbkI7QUFHRSxxQkFBV0M7QUFIYjtBQUtFO0FBQUMsaUJBQUQ7QUFBQTtBQUNFO0FBQUMsYUFBRDtBQUFBO0FBQUlRO0FBQUosV0FERjtBQUVFO0FBQUMsYUFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixTQUFTRCxtQkFBL0I7QUFDR0U7QUFESDtBQURGO0FBRkYsU0FMRjtBQWNFO0FBQUMscUJBQUQ7QUFBQTtBQUNFLGtCQUFLLFFBRFA7QUFFRSxtQkFBTSxlQUZSO0FBR0UsMEJBQVcsZUFIYjtBQUlFLHFCQUFTSDtBQUpYO0FBQUE7QUFBQTtBQWRGLE9BREY7QUF5QkQ7OztFQWpEaUNJLG9COztBQUFmTixNLENBQ1pPLFcsR0FBYyxRO0FBREZQLE0sQ0FHWlEsUyxHQUFZO0FBQ2pCUCxZQUFVUSxvQkFBVUMsSUFBVixDQUFlQyxVQURSO0FBRWpCVCxZQUFVTyxvQkFBVUMsSUFBVixDQUFlQyxVQUZSO0FBR2pCUix1QkFBcUJNLG9CQUFVQyxJQUFWLENBQWVDLFVBSG5CO0FBSWpCUCxXQUFTSyxvQkFBVUcsSUFBVixDQUFlRCxVQUpQO0FBS2pCTixjQUFZSSxvQkFBVUcsSUFBVixDQUFlRCxVQUxWO0FBTWpCaEIsbUJBQWlCYyxvQkFBVUksTUFBVixDQUFpQkYsVUFOakI7QUFPakJmLGFBQVdhLG9CQUFVSSxNQUFWLENBQWlCRjtBQVBYLEM7a0JBSEFYLE0iLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3JlYWN0LWVtb3Rpb24nXG5pbXBvcnQgZm9udFN0eWxlcyBmcm9tICcuL2ZvbnQtc3R5bGVzJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKCdkaXYnKWBcbiAgJHtmb250U3R5bGVzfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGV4dENvbG9yfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBhLFxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gXG5cbmNvbnN0IFAgPSBzdHlsZWQoJ3AnKWBcbiAgbWFyZ2luOiAwO1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuYFxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJylgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbm5lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQmFubmVyJ1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25BY2NlcHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2VQcmVmZXJlbmNlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIHN1YkNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbm5lclJlZixcbiAgICAgIG9uQWNjZXB0LFxuICAgICAgb25DaGFuZ2VQcmVmZXJlbmNlcyxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBzdWJDb250ZW50LFxuICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgdGV4dENvbG9yXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8Um9vdFxuICAgICAgICBpbm5lclJlZj17aW5uZXJSZWZ9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICB0ZXh0Q29sb3I9e3RleHRDb2xvcn1cbiAgICAgID5cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPFA+e2NvbnRlbnR9PC9QPlxuICAgICAgICAgIDxQPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DaGFuZ2VQcmVmZXJlbmNlc30+XG4gICAgICAgICAgICAgIHtzdWJDb250ZW50fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9QPlxuICAgICAgICA8L0NvbnRlbnQ+XG5cbiAgICAgICAgPENsb3NlQnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9XCJBY2NlcHQgcG9saWN5XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWNjZXB0IHBvbGljeVwiXG4gICAgICAgICAgb25DbGljaz17b25BY2NlcHR9XG4gICAgICAgID5cbiAgICAgICAgICDinJVcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgIDwvUm9vdD5cbiAgICApXG4gIH1cbn1cbiJdfQ==
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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n'], ['\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(67, 90, 111, 0.699);\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n'], ['\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100vh - 16px);\n  width: ', ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ', ' ', ' ', ' both;\n'], ['\n  ', ';\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100vw - 16px);\n  max-height: calc(100vh - 16px);\n  width: ', ';\n  margin: 8px;\n  background: #fff;\n  border-radius: 8px;\n  animation: ', ' ', ' ', ' both;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n'], ['\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n'], ['\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(67, 90, 111, 0.079);\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n'], ['\n  margin: 0;\n  color: #1f4160;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.3;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n'], ['\n  padding: 8px;\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  font-size: 14px;\n  line-height: 1;\n  cursor: pointer;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n'], ['\n  overflow-y: auto;\n  padding: 16px;\n  padding-bottom: 0;\n  min-height: 0;\n  font-size: 14px;\n  line-height: 1.2;\n\n  p {\n    margin: 0;\n    &:not(:last-child) {\n      margin-bottom: 0.7em;\n    }\n  }\n\n  a {\n    color: #47b881;\n    &:hover {\n      color: #64c395;\n    }\n    &:active {\n      color: #248953;\n    }\n  }\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n  padding: 16px;\n  text-align: right;\n'], ['\n  padding: 16px;\n  text-align: right;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _nanoid = require('nanoid');

var _nanoid2 = _interopRequireDefault(_nanoid);

var _fontStyles = require('./font-styles');

var _fontStyles2 = _interopRequireDefault(_fontStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ANIMATION_DURATION = '200ms';
var ANIMATION_EASING = 'cubic-bezier(0.0, 0.0, 0.2, 1)';

var Overlay = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e160cov60',
  label: 'Overlay'
})(_templateObject);

var openAnimation = /*#__PURE__*/(0, _reactEmotion.keyframes)(_templateObject2, 'label:openAnimation;');

var Root = /*#__PURE__*/(0, _reactEmotion2.default)('section', {
  target: 'e160cov61',
  label: 'Root'
})(_templateObject3, _fontStyles2.default, function (props) {
  return props.width;
}, openAnimation, ANIMATION_DURATION, ANIMATION_EASING);

var Form = /*#__PURE__*/(0, _reactEmotion2.default)('form', {
  target: 'e160cov62',
  label: 'Form'
})(_templateObject4);

var Header = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e160cov63',
  label: 'Header'
})(_templateObject5);

var Title = /*#__PURE__*/(0, _reactEmotion2.default)('h2', {
  target: 'e160cov64',
  label: 'Title'
})(_templateObject6);

var HeaderCancelButton = /*#__PURE__*/(0, _reactEmotion2.default)('button', {
  target: 'e160cov65',
  label: 'HeaderCancelButton'
})(_templateObject7);

var Content = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e160cov66',
  label: 'Content'
})(_templateObject8);

var Buttons = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e160cov67',
  label: 'Buttons'
})(_templateObject9);

var Dialog = function (_PureComponent) {
  (0, _inherits3.default)(Dialog, _PureComponent);

  function Dialog() {
    (0, _classCallCheck3.default)(this, Dialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this));

    _this.handleRootRef = function (node) {
      _this.root = node;
    };

    _this.handleFormRef = function (node) {
      _this.form = node;
    };

    _this.handleOverlayClick = function (e) {
      var onCancel = _this.props.onCancel;

      // Ignore propogated clicks from inside the dialog

      if (onCancel && !_this.root.contains(e.target)) {
        onCancel();
      }
    };

    _this.handleEsc = function (e) {
      var onCancel = _this.props.onCancel;

      // Esc key

      if (onCancel && e.keyCode === 27) {
        onCancel();
      }
    };

    _this.titleId = (0, _nanoid2.default)();

    _this.container = document.createElement('div');
    _this.container.setAttribute('data-consent-manager-dialog', '');
    document.body.appendChild(_this.container);
    return _this;
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onCancel = _props.onCancel,
          onSubmit = _props.onSubmit,
          title = _props.title,
          children = _props.children,
          buttons = _props.buttons,
          width = _props.width;


      var dialog = _react2.default.createElement(
        Overlay,
        { onClick: this.handleOverlayClick },
        _react2.default.createElement(
          Root,
          {
            innerRef: this.handleRootRef,
            role: 'dialog',
            'aria-modal': true,
            'aria-labelledby': this.titleId,
            width: width
          },
          _react2.default.createElement(
            Header,
            null,
            _react2.default.createElement(
              Title,
              { id: this.titleId },
              title
            ),
            onCancel && _react2.default.createElement(
              HeaderCancelButton,
              {
                onClick: onCancel,
                title: 'Cancel',
                'aria-label': 'Cancel'
              },
              '\u2715'
            )
          ),
          _react2.default.createElement(
            Form,
            { innerRef: this.handleFormRef, onSubmit: onSubmit },
            _react2.default.createElement(
              Content,
              null,
              children
            ),
            _react2.default.createElement(
              Buttons,
              null,
              buttons
            )
          )
        )
      );

      return _reactDom2.default.createPortal(dialog, this.container);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var innerRef = this.props.innerRef;


      this.form.querySelector('input,button').focus();
      document.body.addEventListener('keydown', this.handleEsc, false);
      document.body.style.overflow = 'hidden';

      innerRef(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var innerRef = this.props.innerRef;


      document.body.removeEventListener('keydown', this.handleEsc, false);
      document.body.style.overflow = '';

      document.body.removeChild(this.container);
      innerRef(null);
    }
  }]);
  return Dialog;
}(_react.PureComponent);

Dialog.displayName = 'Dialog';
Dialog.propTypes = {
  innerRef: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node.isRequired,
  buttons: _propTypes2.default.node.isRequired,
  width: _propTypes2.default.string
};
Dialog.defaultProps = {
  onCancel: undefined,
  width: '750px'
};
exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvZGlhbG9nLmpzIl0sIm5hbWVzIjpbIkFOSU1BVElPTl9EVVJBVElPTiIsIkFOSU1BVElPTl9FQVNJTkciLCJPdmVybGF5Iiwic3R5bGVkIiwib3BlbkFuaW1hdGlvbiIsImtleWZyYW1lcyIsIlJvb3QiLCJmb250U3R5bGVzIiwicHJvcHMiLCJ3aWR0aCIsIkZvcm0iLCJIZWFkZXIiLCJUaXRsZSIsIkhlYWRlckNhbmNlbEJ1dHRvbiIsIkNvbnRlbnQiLCJCdXR0b25zIiwiRGlhbG9nIiwiaGFuZGxlUm9vdFJlZiIsInJvb3QiLCJub2RlIiwiaGFuZGxlRm9ybVJlZiIsImZvcm0iLCJoYW5kbGVPdmVybGF5Q2xpY2siLCJvbkNhbmNlbCIsImNvbnRhaW5zIiwiZSIsInRhcmdldCIsImhhbmRsZUVzYyIsImtleUNvZGUiLCJ0aXRsZUlkIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25TdWJtaXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiYnV0dG9ucyIsImRpYWxvZyIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiaW5uZXJSZWYiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsIlB1cmVDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIs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QyxVQURSO0FBRWpCakMsWUFBVStCLG9CQUFVQyxJQUZIO0FBR2pCbkIsWUFBVWtCLG9CQUFVQyxJQUFWLENBQWVDLFVBSFI7QUFJakJuQixTQUFPaUIsb0JBQVVuQyxJQUFWLENBQWVxQyxVQUpMO0FBS2pCbEIsWUFBVWdCLG9CQUFVbkMsSUFBVixDQUFlcUMsVUFMUjtBQU1qQmpCLFdBQVNlLG9CQUFVbkMsSUFBVixDQUFlcUMsVUFOUDtBQU9qQi9DLFNBQU82QyxvQkFBVUc7QUFQQSxDO0FBSEF6QyxNLENBYVowQyxZLEdBQWU7QUFDcEJuQyxZQUFVb0MsU0FEVTtBQUVwQmxELFNBQU87QUFGYSxDO2tCQWJITyxNIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3JlYWN0LWVtb3Rpb24nXG5pbXBvcnQgbmFub2lkIGZyb20gJ25hbm9pZCdcbmltcG9ydCBmb250U3R5bGVzIGZyb20gJy4vZm9udC1zdHlsZXMnXG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9ICcyMDBtcydcbmNvbnN0IEFOSU1BVElPTl9FQVNJTkcgPSAnY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpJ1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkKCdkaXYnKWBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCA5MCwgMTExLCAwLjY5OSk7XG5gXG5cbmNvbnN0IG9wZW5BbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmBcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICAke2ZvbnRTdHlsZXN9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2cHgpO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGFuaW1hdGlvbjogJHtvcGVuQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn0gJHtBTklNQVRJT05fRUFTSU5HfSBib3RoO1xuYFxuXG5jb25zdCBGb3JtID0gc3R5bGVkKCdmb3JtJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDA7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZCgnZGl2JylgXG4gIGZsZXg6IDEgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNjcsIDkwLCAxMTEsIDAuMDc5KTtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQoJ2gyJylgXG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMxZjQxNjA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbmBcblxuY29uc3QgSGVhZGVyQ2FuY2VsQnV0dG9uID0gc3R5bGVkKCdidXR0b24nKWBcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICM0N2I4ODE7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzY0YzM5NTtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6ICMyNDg5NTM7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQoJ2RpdicpYFxuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEaWFsb2cnXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpbm5lclJlZjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgYnV0dG9uczogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNhbmNlbDogdW5kZWZpbmVkLFxuICAgIHdpZHRoOiAnNzUwcHgnXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnRpdGxlSWQgPSBuYW5vaWQoKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1jb25zZW50LW1hbmFnZXItZGlhbG9nJywgJycpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7b25DYW5jZWwsIG9uU3VibWl0LCB0aXRsZSwgY2hpbGRyZW4sIGJ1dHRvbnMsIHdpZHRofSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGRpYWxvZyA9IChcbiAgICAgIDxPdmVybGF5IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3ZlcmxheUNsaWNrfT5cbiAgICAgICAgPFJvb3RcbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5oYW5kbGVSb290UmVmfVxuICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgIGFyaWEtbW9kYWxcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e3RoaXMudGl0bGVJZH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgID5cbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgPFRpdGxlIGlkPXt0aGlzLnRpdGxlSWR9Pnt0aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAge29uQ2FuY2VsICYmIChcbiAgICAgICAgICAgICAgPEhlYWRlckNhbmNlbEJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOKclVxuICAgICAgICAgICAgICA8L0hlYWRlckNhbmNlbEJ1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgICA8Rm9ybSBpbm5lclJlZj17dGhpcy5oYW5kbGVGb3JtUmVmfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cblxuICAgICAgICAgICAgPEJ1dHRvbnM+e2J1dHRvbnN9PC9CdXR0b25zPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Sb290PlxuICAgICAgPC9PdmVybGF5PlxuICAgIClcblxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoZGlhbG9nLCB0aGlzLmNvbnRhaW5lcilcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtpbm5lclJlZn0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQsYnV0dG9uJykuZm9jdXMoKVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRXNjLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcblxuICAgIGlubmVyUmVmKHRoaXMuY29udGFpbmVyKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qge2lubmVyUmVmfSA9IHRoaXMucHJvcHNcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRXNjLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJydcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpXG4gICAgaW5uZXJSZWYobnVsbClcbiAgfVxuXG4gIGhhbmRsZVJvb3RSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLnJvb3QgPSBub2RlXG4gIH1cblxuICBoYW5kbGVGb3JtUmVmID0gbm9kZSA9PiB7XG4gICAgdGhpcy5mb3JtID0gbm9kZVxuICB9XG5cbiAgaGFuZGxlT3ZlcmxheUNsaWNrID0gZSA9PiB7XG4gICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIElnbm9yZSBwcm9wb2dhdGVkIGNsaWNrcyBmcm9tIGluc2lkZSB0aGUgZGlhbG9nXG4gICAgaWYgKG9uQ2FuY2VsICYmICF0aGlzLnJvb3QuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBvbkNhbmNlbCgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXNjID0gZSA9PiB7XG4gICAgY29uc3Qge29uQ2FuY2VsfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIEVzYyBrZXlcbiAgICBpZiAob25DYW5jZWwgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgb25DYW5jZWwoKVxuICAgIH1cbiAgfVxufVxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0px 15px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-top: 1px solid ', ';\n  border-top-width: ', ';\n  color: ', ';\n  transition: height 600ms cubic-bezier(0.23, 1, 0.32, 1), border-top-width 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: ', ';\n  color: ', ';\n  /*height: ', ';*/\n  height: auto;\n  overflow: hidden;\n  /*display: ', '*/\n'], ['\n  padding: 0px 15px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-top: 1px solid ', ';\n  border-top-width: ', ';\n  color: ', ';\n  transition: height 600ms cubic-bezier(0.23, 1, 0.32, 1), border-top-width 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: ', ';\n  color: ', ';\n  /*height: ', ';*/\n  height: auto;\n  overflow: hidden;\n  /*display: ', '*/\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 15px;\n'], ['\n  height: 15px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BodyDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.open ? '1px' : '0px';
}, function (props) {
    return props.theme.bodyTextColor;
}, function (props) {
    return props.theme.bodyBackgroundColor;
}, function (props) {
    return props.theme.bodyTextColor;
}, function (props) {
    return props.open ? '200px' : '0px';
}, function (props) {
    return props.open ? 'block' : 'none';
});
var Padding = _styledComponents2.default.div(_templateObject2);

var PanelBody = function (_Component) {
    _inherits(PanelBody, _Component);

    function PanelBody() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PanelBody);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelBody.__proto__ || Object.getPrototypeOf(PanelBody)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Panel Body', _this.close = function () {
            _this.body.style.height = getComputedStyle(_this.body).height;
            _this.body.offsetHeight;
            _this.body.style.height = '0px';
        }, _this.open = function () {
            var prevHeight = _this.body.style.height;
            _this.body.style.height = 'auto';
            var endHeight = getComputedStyle(_this.body).height;
            _this.body.style.height = prevHeight;
            _this.body.offsetHeight;
            _this.body.style.height = endHeight;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // Hacky functions to animate panel open/close


    _createClass(PanelBody, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!nextProps.open) {
                this.close();
            } else if (nextProps.open) {
                this.open();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                open = _props.open,
                style = _props.style,
                children = _props.children;

            return _react2.default.createElement(
                BodyDiv,
                { className: 'panel-body', innerRef: function innerRef(el) {
                        return _this2.body = el;
                    }, open: open, style: _extends({}, style) },
                _react2.default.createElement(Padding, null),
                children,
                _react2.default.createElement(Padding, null)
            );
        }
    }]);

    return PanelBody;
}(_react.Component);

PanelBody.displayName = 'PanelBody';
exports.default = PanelBody;
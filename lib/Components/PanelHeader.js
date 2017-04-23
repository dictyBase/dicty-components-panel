'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  background-color: ', ';\n  border-color: #ddd;\n  padding: 10px 15px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  ', ';\n'], ['\n  color: ', ';\n  background-color: ', ';\n  border-color: #ddd;\n  padding: 10px 15px;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.headerTextColor;
}, function (props) {
    return props.theme.headerBackgroundColor;
}, function (props) {
    return props.collapse && 'cursor: pointer;';
});

var PanelHeader = function (_Component) {
    _inherits(PanelHeader, _Component);

    function PanelHeader() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PanelHeader);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelHeader.__proto__ || Object.getPrototypeOf(PanelHeader)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Panel Header', _this.renderChildren = function () {
            var _this$props = _this.props,
                collapse = _this$props.collapse,
                children = _this$props.children,
                clickFunc = _this$props.clickFunc;

            if (collapse) {
                var newChildren = _react2.default.Children.map(children, function (child) {
                    return _react2.default.cloneElement(child, {
                        collapse: collapse,
                        clickFunc: clickFunc
                    });
                });
                return newChildren;
            }
            return children;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PanelHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                collapse = _props.collapse,
                clickFunc = _props.clickFunc;

            return _react2.default.createElement(
                HeaderDiv,
                { collapse: collapse, onClick: clickFunc, style: _extends({ borderBottom: collapse && '0px none #ddd' }, style) },
                this.renderChildren()
            );
        }
    }]);

    return PanelHeader;
}(_react.Component);

PanelHeader.displayName = 'PanelHeader';
exports.default = PanelHeader;
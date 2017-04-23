'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 5px;\n  background-color: ;\n  border: 1px solid ', ';\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n  font-size: 14px;\n  line-height: 1.4285714;\n  color: #333;\n  border-radius: 4px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n'], ['\n  margin-top: 5px;\n  background-color: ;\n  border: 1px solid ', ';\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n  font-size: 14px;\n  line-height: 1.4285714;\n  color: #333;\n  border-radius: 4px;\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PanelDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.borderColor;
});

var Panel = function (_Component) {
    _inherits(Panel, _Component);

    function Panel() {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this));

        _this.displayName = 'Panel';

        _this.onChildClick = function () {
            var open = _this.state.open;

            _this.setState({
                click: true,
                open: open ? false : true
            });
        };

        _this.renderChildren = function () {
            var _this$props = _this.props,
                collapse = _this$props.collapse,
                children = _this$props.children;
            var _this$state = _this.state,
                open = _this$state.open,
                click = _this$state.click;

            if (collapse) {
                var newChildren = _react2.default.Children.map(children, function (child) {
                    return _react2.default.cloneElement(child, {
                        open: open,
                        collapse: collapse,
                        clickFunc: _this.onChildClick,
                        clicked: click
                    });
                });
                return newChildren;
            }
            return children;
        };

        _this.state = {
            click: false,
            open: true
        };
        return _this;
    }

    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                collapse = _props.collapse;

            return _react2.default.createElement(
                PanelDiv,
                { style: _extends({ marginBottom: collapse && 0 }, style) },
                this.renderChildren()
            );
        }
    }]);

    return Panel;
}(_react.Component);

Panel.displayName = 'Panel';
exports.default = Panel;
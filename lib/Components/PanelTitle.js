'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TitleCollapse = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: ', ';\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  cursor: ', ';\n'], ['\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: ', ';\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  cursor: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  background-color: transparent;\n  color: ', ';\n  cursor: pointer;\n  ', '\n\n  ', '\n'], ['\n  ', '\n  background-color: transparent;\n  color: ', ';\n  cursor: pointer;\n  ', '\n\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h3(_templateObject, function (props) {
    return props.theme.headerTextColor ? props.theme.headerTextColor : 'white';
}, function (props) {
    return props.collapse && 'pointer';
});
var TitleCollapse = exports.TitleCollapse = _styledComponents2.default.div(_templateObject2, '' /* text-decoration: none; */, function (props) {
    return props.theme.headerTextColor ? props.theme.headerTextColor : 'white';
}, '' /* &:visited {
      color: ${ props => props.theme.headerTextColor ? props.theme.headerTextColor : 'white' };
      } */, '' /* &:hover {
               text-decoration: none;
               } */);

var PanelTitle = function (_Component) {
    _inherits(PanelTitle, _Component);

    function PanelTitle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PanelTitle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelTitle.__proto__ || Object.getPrototypeOf(PanelTitle)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Panel Title', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PanelTitle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                collapse = _props.collapse,
                style = _props.style,
                children = _props.children,
                clickFunc = _props.clickFunc;

            var elem = void 0;
            if (collapse) {
                elem = _react2.default.createElement(
                    TitleCollapse,
                    { onClick: clickFunc },
                    children
                );
            } else {
                elem = children;
            }
            return _react2.default.createElement(
                Title,
                { style: _extends({}, style) },
                elem
            );
        }
    }]);

    return PanelTitle;
}(_react.Component);

PanelTitle.displayName = 'PanelTitle';
exports.default = PanelTitle;
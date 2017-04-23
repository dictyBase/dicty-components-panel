'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    margin-bottom: 20;\n'], ['\n    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #333;\n    margin-bottom: 20;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GroupDiv = _styledComponents2.default.div(_templateObject);

var PanelGroup = function (_Component) {
    _inherits(PanelGroup, _Component);

    function PanelGroup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PanelGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelGroup.__proto__ || Object.getPrototypeOf(PanelGroup)).call.apply(_ref, [this].concat(args))), _this), _this.displayName = 'Panel Group', _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PanelGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                children = _props.children,
                theme = _props.theme;

            return _react2.default.createElement(
                _styledComponents.ThemeProvider,
                { theme: theme },
                _react2.default.createElement(
                    GroupDiv,
                    { style: _extends({}, style) },
                    children
                )
            );
        }
    }]);

    return PanelGroup;
}(_react.Component);

PanelGroup.displayName = 'PanelGroup';
exports.default = PanelGroup;


PanelGroup.DefaultProps = {
    theme: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        bodyBackgroundColor: '#fff',
        headerBackgroundColor: '#F5F5F',
        headerTextColor: '#333'
    }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_wepy$component) {
  _inherits(Toast, _wepy$component);

  function Toast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      toast: {
        show: false,
        content: '提示信息'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toast, [{
    key: 'show',
    value: function show(data) {
      this.toast = {
        show: true,
        content: data.content
      };

      this.$apply();

      setTimeout(function () {
        this.toast = {
          show: false,
          content: ''
        };

        this.$apply();
      }.bind(this), 4000);
    }
  }]);

  return Toast;
}(_wepy2.default.component);

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LjEuanMiXSwibmFtZXMiOlsiVG9hc3QiLCJkYXRhIiwidG9hc3QiLCJzaG93IiwiY29udGVudCIsIiRhcHBseSIsInNldFRpbWVvdXQiLCJiaW5kIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxhQUFPO0FBQ0xDLGNBQUssS0FEQTtBQUVMQyxpQkFBUTtBQUZIO0FBREYsSzs7Ozs7eUJBT0RILEksRUFBSztBQUNULFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFNLElBREs7QUFFWEMsaUJBQVNILEtBQUtHO0FBRkgsT0FBYjs7QUFLQSxXQUFLQyxNQUFMOztBQUVBQyxpQkFBVyxZQUFVO0FBQ25CLGFBQUtKLEtBQUwsR0FBYTtBQUNYQyxnQkFBTSxLQURLO0FBRVhDLG1CQUFTO0FBRkUsU0FBYjs7QUFLQSxhQUFLQyxNQUFMO0FBQ0QsT0FQVSxDQU9URSxJQVBTLENBT0osSUFQSSxDQUFYLEVBT2MsSUFQZDtBQVFEOzs7O0VBeEJnQyxlQUFLQyxTOztrQkFBbkJSLEsiLCJmaWxlIjoidG9hc3QuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIGRhdGEgPSB7XG4gICAgdG9hc3Q6IHtcbiAgICAgIHNob3c6ZmFsc2UsXG4gICAgICBjb250ZW50Oifmj5DnpLrkv6Hmga8nXG4gICAgfVxuICB9XG5cbiAgc2hvdyAoZGF0YSl7XG4gICAgdGhpcy50b2FzdCA9IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnRcbiAgICB9XG4gICAgXG4gICAgdGhpcy4kYXBwbHkoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMudG9hc3QgPSB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0uYmluZCh0aGlzKSwgNDAwMClcbiAgfVxufVxuIl19
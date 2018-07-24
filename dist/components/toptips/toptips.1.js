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

var Toptips = function (_wepy$component) {
  _inherits(Toptips, _wepy$component);

  function Toptips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toptips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toptips.__proto__ || Object.getPrototypeOf(Toptips)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      topTips: {
        show: false,
        content: '错误信息'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toptips, [{
    key: 'show',
    value: function show(data) {
      this.topTips = {
        show: true,
        content: data.content
      };

      this.$apply();

      setTimeout(function () {
        this.topTips = {
          show: false,
          content: ''
        };

        this.$apply();
      }.bind(this), 4000);
    }
  }]);

  return Toptips;
}(_wepy2.default.component);

exports.default = Toptips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHRpcHMuMS5qcyJdLCJuYW1lcyI6WyJUb3B0aXBzIiwiZGF0YSIsInRvcFRpcHMiLCJzaG93IiwiY29udGVudCIsIiRhcHBseSIsInNldFRpbWVvdXQiLCJiaW5kIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEksR0FBTztBQUNMQyxlQUFTO0FBQ1BDLGNBQUssS0FERTtBQUVQQyxpQkFBUTtBQUZEO0FBREosSzs7Ozs7eUJBT0RILEksRUFBSztBQUNULFdBQUtDLE9BQUwsR0FBZTtBQUNiQyxjQUFNLElBRE87QUFFYkMsaUJBQVNILEtBQUtHO0FBRkQsT0FBZjs7QUFLQSxXQUFLQyxNQUFMOztBQUVBQyxpQkFBVyxZQUFVO0FBQ25CLGFBQUtKLE9BQUwsR0FBZTtBQUNiQyxnQkFBTSxLQURPO0FBRWJDLG1CQUFTO0FBRkksU0FBZjs7QUFLQSxhQUFLQyxNQUFMO0FBQ0QsT0FQVSxDQU9URSxJQVBTLENBT0osSUFQSSxDQUFYLEVBT2MsSUFQZDtBQVFEOzs7O0VBeEJrQyxlQUFLQyxTOztrQkFBckJSLE8iLCJmaWxlIjoidG9wdGlwcy4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3B0aXBzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBkYXRhID0ge1xuICAgIHRvcFRpcHM6IHtcbiAgICAgIHNob3c6ZmFsc2UsXG4gICAgICBjb250ZW50OifplJnor6/kv6Hmga8nXG4gICAgfVxuICB9XG5cbiAgc2hvdyAoZGF0YSl7XG4gICAgdGhpcy50b3BUaXBzID0ge1xuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudFxuICAgIH1cbiAgICBcbiAgICB0aGlzLiRhcHBseSgpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgdGhpcy50b3BUaXBzID0ge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgY29udGVudDogJydcbiAgICAgIH1cblxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LmJpbmQodGhpcyksIDQwMDApXG4gIH1cbn1cbiJdfQ==
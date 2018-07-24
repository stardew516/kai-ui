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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRvcHRpcHMiLCJkYXRhIiwidG9wVGlwcyIsInNob3ciLCJjb250ZW50IiwiJGFwcGx5Iiwic2V0VGltZW91dCIsImJpbmQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVM7QUFDUEMsY0FBSyxLQURFO0FBRVBDLGlCQUFRO0FBRkQ7QUFESixLOzs7Ozt5QkFPREgsSSxFQUFLO0FBQ1QsV0FBS0MsT0FBTCxHQUFlO0FBQ2JDLGNBQU0sSUFETztBQUViQyxpQkFBU0gsS0FBS0c7QUFGRCxPQUFmOztBQUtBLFdBQUtDLE1BQUw7O0FBRUFDLGlCQUFXLFlBQVU7QUFDbkIsYUFBS0osT0FBTCxHQUFlO0FBQ2JDLGdCQUFNLEtBRE87QUFFYkMsbUJBQVM7QUFGSSxTQUFmOztBQUtBLGFBQUtDLE1BQUw7QUFDRCxPQVBVLENBT1RFLElBUFMsQ0FPSixJQVBJLENBQVgsRUFPYyxJQVBkO0FBUUQ7Ozs7RUF4QmtDLGVBQUtDLFM7O2tCQUFyQlIsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wdGlwcyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICB0b3BUaXBzOiB7XG4gICAgICBzaG93OmZhbHNlLFxuICAgICAgY29udGVudDon6ZSZ6K+v5L+h5oGvJ1xuICAgIH1cbiAgfVxuXG4gIHNob3cgKGRhdGEpe1xuICAgIHRoaXMudG9wVGlwcyA9IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBjb250ZW50OiBkYXRhLmNvbnRlbnRcbiAgICB9XG4gICAgXG4gICAgdGhpcy4kYXBwbHkoKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMudG9wVGlwcyA9IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfS5iaW5kKHRoaXMpLCA0MDAwKVxuICB9XG59XG4iXX0=
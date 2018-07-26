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

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Popup'
    }, _this.props = {
      id: { // 弹窗id
        type: [Number, String],
        twoWay: true,
        default: 0
      },
      show: { // 是否展示弹窗
        type: [Boolean, String],
        twoWay: true,
        default: false
      },
      position: { // 弹窗弹出位置
        type: String,
        twoWay: true,
        default: 'bottom'
      }
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {
      // op 为true时，关闭 
      // i: 索引 close: 关闭
      togglePopup: function togglePopup(i, close) {
        this.$emit('pop', i, close);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Popup;
}(_wepy2.default.page);

exports.default = Popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInByb3BzIiwiaWQiLCJ0eXBlIiwiTnVtYmVyIiwiU3RyaW5nIiwidHdvV2F5IiwiZGVmYXVsdCIsInNob3ciLCJCb29sZWFuIiwicG9zaXRpb24iLCJjb21wb25lbnRzIiwiZGF0YSIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRvZ2dsZVBvcHVwIiwiaSIsImNsb3NlIiwiJGVtaXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxLLEdBQVE7QUFDTkMsVUFBSSxFQUFFO0FBQ0pDLGNBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREo7QUFFRkMsZ0JBQVEsSUFGTjtBQUdGQyxpQkFBUztBQUhQLE9BREU7QUFNTkMsWUFBTSxFQUFHO0FBQ1BMLGNBQU0sQ0FBQ00sT0FBRCxFQUFVSixNQUFWLENBREY7QUFFSkMsZ0JBQVEsSUFGSjtBQUdKQyxpQkFBUztBQUhMLE9BTkE7QUFXTkcsZ0JBQVUsRUFBRTtBQUNWUCxjQUFNRSxNQURFO0FBRVJDLGdCQUFRLElBRkE7QUFHUkMsaUJBQVM7QUFIRDtBQVhKLEssUUFpQlJJLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBSVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQUMsaUJBSFEsdUJBR0lDLENBSEosRUFHT0MsS0FIUCxFQUdjO0FBQ3BCLGFBQUtDLEtBQUwsQ0FBVyxLQUFYLEVBQWtCRixDQUFsQixFQUFxQkMsS0FBckI7QUFDRDtBQUxPLEs7Ozs7OzZCQVFELENBQ1I7Ozs7RUF2Q2lDLGVBQUtFLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBQb3B1cCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1BvcHVwJ1xyXG4gIH1cclxuXHJcbiAgcHJvcHMgPSB7XHJcbiAgICBpZDogeyAvLyDlvLnnqpdpZFxyXG4gICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICB0d29XYXk6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBzaG93OiB7ICAvLyDmmK/lkKblsZXnpLrlvLnnqpdcclxuICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcbiAgICAgIHR3b1dheTogdHJ1ZSxcclxuICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbjogeyAvLyDlvLnnqpflvLnlh7rkvY3nva5cclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB0d29XYXk6IHRydWUsXHJcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20nXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7fVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyBvcCDkuLp0cnVl5pe277yM5YWz6ZetIFxyXG4gICAgLy8gaTog57Si5byVIGNsb3NlOiDlhbPpl61cclxuICAgIHRvZ2dsZVBvcHVwKGksIGNsb3NlKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3BvcCcsIGksIGNsb3NlKVxyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICB9XHJcbn1cclxuIl19
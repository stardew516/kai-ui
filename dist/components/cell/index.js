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

/**
 * title: {  // cell 主体内容
      type: String,
      twoway: true,
      default: ''
    },
    subtitle: {  // cell 附加内容
      type: String,
      twoway: true,
      default: ''
    },
    detail: {  // cell 右侧描述
      type: String,
      twoway: true,
      default: ''
    },
    linktype: {  // 是否需要跳转 0: 无跳转 1：跳转
      type: [Number, String],
      twoway: true,
      default: 0
    },
    icontype: { // 图标类型 0：无图片 1：icon 2：图片
      type: [Number, String],
      twoway: true,
      default: 0
    },
    icontext: {  // 图标 图片地址
      type: String,
      twoway: true,
      default: ''
    },
    link: { // 页面跳转
      type: String,
      twoway: true,
      default: '#'
    }
 */
var Cell = function (_wepy$component) {
  _inherits(Cell, _wepy$component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      celldata: { // cell json
        type: [Array, Object],
        twoWay: true,
        default: function _default() {
          return [];
        }
      },
      index: {
        type: [Number, String],
        twoWay: true,
        defaut: ''
      }
    }, _this.data = {}, _this.methods = {
      translateToPage: function translateToPage(type, url) {
        if (type > 0) {
          this.$emit('item-tap', type, url);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('celldata', this.celldata, this.index);
    }
  }]);

  return Cell;
}(_wepy2.default.component);

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJwcm9wcyIsImNlbGxkYXRhIiwidHlwZSIsIkFycmF5IiwiT2JqZWN0IiwidHdvV2F5IiwiZGVmYXVsdCIsImluZGV4IiwiTnVtYmVyIiwiU3RyaW5nIiwiZGVmYXV0IiwiZGF0YSIsIm1ldGhvZHMiLCJ0cmFuc2xhdGVUb1BhZ2UiLCJ1cmwiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBQUU7QUFDVkMsY0FBTSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FERTtBQUVSQyxnQkFBUSxJQUZBO0FBR1JDLGlCQUFTLG9CQUFZO0FBQ25CLGlCQUFPLEVBQVA7QUFDRDtBQUxPLE9BREo7QUFRTkMsYUFBTztBQUNMTCxjQUFNLENBQUNNLE1BQUQsRUFBU0MsTUFBVCxDQUREO0FBRUxKLGdCQUFRLElBRkg7QUFHTEssZ0JBQVE7QUFISDtBQVJELEssUUFlUkMsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ1JDLHFCQURRLDJCQUNRWCxJQURSLEVBQ2NZLEdBRGQsRUFDbUI7QUFDekIsWUFBSVosT0FBTyxDQUFYLEVBQWM7QUFDWixlQUFLYSxLQUFMLENBQVcsVUFBWCxFQUF1QmIsSUFBdkIsRUFBNkJZLEdBQTdCO0FBQ0Q7QUFDRjtBQUxPLEs7Ozs7OzZCQVFBO0FBQ1JFLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLEtBQUtoQixRQUE3QixFQUF1QyxLQUFLTSxLQUE1QztBQUNEOzs7O0VBOUIrQixlQUFLVyxTOztrQkFBbEJuQixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgLyoqXHJcbiAgICogdGl0bGU6IHsgIC8vIGNlbGwg5Li75L2T5YaF5a65XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBzdWJ0aXRsZTogeyAgLy8gY2VsbCDpmYTliqDlhoXlrrlcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdHdvd2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGFpbDogeyAgLy8gY2VsbCDlj7Pkvqfmj4/ov7BcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdHdvd2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxpbmt0eXBlOiB7ICAvLyDmmK/lkKbpnIDopoHot7PovawgMDog5peg6Lez6L2sIDHvvJrot7PovaxcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb250eXBlOiB7IC8vIOWbvuagh+exu+WeiyAw77ya5peg5Zu+54mHIDHvvJppY29uIDLvvJrlm77niYdcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGljb250ZXh0OiB7ICAvLyDlm77moIcg5Zu+54mH5Zyw5Z2AXHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBsaW5rOiB7IC8vIOmhtemdoui3s+i9rFxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB0d293YXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogJyMnXHJcbiAgICAgIH1cclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIGNlbGxkYXRhOiB7IC8vIGNlbGwganNvblxyXG4gICAgICAgIHR5cGU6IFtBcnJheSwgT2JqZWN0XSxcclxuICAgICAgICB0d29XYXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBpbmRleDoge1xyXG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1dDogJydcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRyYW5zbGF0ZVRvUGFnZSh0eXBlLCB1cmwpIHtcclxuICAgICAgICBpZiAodHlwZSA+IDApIHtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2l0ZW0tdGFwJywgdHlwZSwgdXJsKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjZWxsZGF0YScsIHRoaXMuY2VsbGRhdGEsIHRoaXMuaW5kZXgpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=
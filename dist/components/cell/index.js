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
      console.log('celldata', this.celldata);
    }
  }]);

  return Cell;
}(_wepy2.default.component);

exports.default = Cell;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkNlbGwiLCJwcm9wcyIsImNlbGxkYXRhIiwidHlwZSIsIkFycmF5IiwiT2JqZWN0IiwidHdvV2F5IiwiZGVmYXVsdCIsImluZGV4IiwiTnVtYmVyIiwiU3RyaW5nIiwiZGVmYXV0IiwiZGF0YSIsIm1ldGhvZHMiLCJ0cmFuc2xhdGVUb1BhZ2UiLCJ1cmwiLCIkZW1pdCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRO0FBQ05DLGdCQUFVLEVBQUU7QUFDVkMsY0FBTSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FERTtBQUVSQyxnQkFBUSxJQUZBO0FBR1JDLGlCQUFTLG9CQUFZO0FBQ25CLGlCQUFPLEVBQVA7QUFDRDtBQUxPLE9BREo7QUFRTkMsYUFBTztBQUNMTCxjQUFNLENBQUNNLE1BQUQsRUFBU0MsTUFBVCxDQUREO0FBRUxKLGdCQUFRLElBRkg7QUFHTEssZ0JBQVE7QUFISDtBQVJELEssUUFlUkMsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ1JDLHFCQURRLDJCQUNRWCxJQURSLEVBQ2NZLEdBRGQsRUFDbUI7QUFDekIsWUFBSVosT0FBTyxDQUFYLEVBQWM7QUFDWixlQUFLYSxLQUFMLENBQVcsVUFBWCxFQUF1QmIsSUFBdkIsRUFBNkJZLEdBQTdCO0FBQ0Q7QUFDRjtBQUxPLEs7Ozs7OzZCQVFBO0FBQ1JFLGNBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLEtBQUtoQixRQUE3QjtBQUNEOzs7O0VBOUIrQixlQUFLaUIsUzs7a0JBQWxCbkIsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gIC8qKlxyXG4gICAqIHRpdGxlOiB7ICAvLyBjZWxsIOS4u+S9k+WGheWuuVxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB0d293YXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfSxcclxuICAgICAgc3VidGl0bGU6IHsgIC8vIGNlbGwg6ZmE5Yqg5YaF5a65XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBkZXRhaWw6IHsgIC8vIGNlbGwg5Y+z5L6n5o+P6L+wXHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHR3b3dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBsaW5rdHlwZTogeyAgLy8g5piv5ZCm6ZyA6KaB6Lez6L2sIDA6IOaXoOi3s+i9rCAx77ya6Lez6L2sXHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICB0d293YXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICB9LFxyXG4gICAgICBpY29udHlwZTogeyAvLyDlm77moIfnsbvlnosgMO+8muaXoOWbvueJhyAx77yaaWNvbiAy77ya5Zu+54mHXHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICB0d293YXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICB9LFxyXG4gICAgICBpY29udGV4dDogeyAgLy8g5Zu+5qCHIOWbvueJh+WcsOWdgFxyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICB0d293YXk6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfSxcclxuICAgICAgbGluazogeyAvLyDpobXpnaLot7PovaxcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgdHdvd2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcjJ1xyXG4gICAgICB9XHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBjZWxsZGF0YTogeyAvLyBjZWxsIGpzb25cclxuICAgICAgICB0eXBlOiBbQXJyYXksIE9iamVjdF0sXHJcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgaW5kZXg6IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIHR3b1dheTogdHJ1ZSxcclxuICAgICAgICBkZWZhdXQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0cmFuc2xhdGVUb1BhZ2UodHlwZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtLXRhcCcsIHR5cGUsIHVybClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2VsbGRhdGEnLCB0aGlzLmNlbGxkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wxParse = require('./../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActionSheet = function (_wepy$component) {
  _inherits(ActionSheet, _wepy$component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      asData: {
        type: Object,
        twoWay: true,
        defaut: {}
      }
    }, _this.data = {
      tapIndex: 0
    }, _this.methods = {
      selectIndex: function selectIndex(i, index, close) {
        console.log(i, index, close);
        this.tapIndex = index;
        var evt = this.asData.itemList[index].event ? this.asData.itemList[index].event : 'action-sheet';
        this.$emit(evt, i, index, close);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.asData);
      var asData = this.asData;
      var that = this;
      this.asData.itemList.map(function (r, i) {
        if (r.slot) {
          // wxParse.wxParse('article', 'html', r.slot || '', that, 5)
          // console.log(wxParse.wxParse('article', 'html', r.slot || '', that, 5))
        }
      });
      _wxParse2.default.wxParse('article', 'html', '<div>slot1html</div>', that, 5);
      console.log(_wxParse2.default.wxParse('article', 'html', '<div class="iconfont icon-success">slot1html</div>', that, 5));
      this.tapIndex = asData.tapIndex ? asData.tapIndex : 0;
      this.$apply();
    }
  }]);

  return ActionSheet;
}(_wepy2.default.component);

exports.default = ActionSheet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvblNoZWV0IiwicHJvcHMiLCJhc0RhdGEiLCJ0eXBlIiwiT2JqZWN0IiwidHdvV2F5IiwiZGVmYXV0IiwiZGF0YSIsInRhcEluZGV4IiwibWV0aG9kcyIsInNlbGVjdEluZGV4IiwiaSIsImluZGV4IiwiY2xvc2UiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwiaXRlbUxpc3QiLCJldmVudCIsIiRlbWl0IiwidGhhdCIsIm1hcCIsInIiLCJzbG90Iiwid3hQYXJzZSIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGNBQU1DLE1BREE7QUFFTkMsZ0JBQVEsSUFGRjtBQUdOQyxnQkFBUTtBQUhGO0FBREYsSyxRQVFSQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsQ0FETCxFQUNRQyxLQURSLEVBQ2VDLEtBRGYsRUFDc0I7QUFDNUJDLGdCQUFRQyxHQUFSLENBQVlKLENBQVosRUFBZUMsS0FBZixFQUFzQkMsS0FBdEI7QUFDQSxhQUFLTCxRQUFMLEdBQWdCSSxLQUFoQjtBQUNBLFlBQU1JLE1BQU0sS0FBS2QsTUFBTCxDQUFZZSxRQUFaLENBQXFCTCxLQUFyQixFQUE0Qk0sS0FBNUIsR0FBb0MsS0FBS2hCLE1BQUwsQ0FBWWUsUUFBWixDQUFxQkwsS0FBckIsRUFBNEJNLEtBQWhFLEdBQXdFLGNBQXBGO0FBQ0EsYUFBS0MsS0FBTCxDQUFXSCxHQUFYLEVBQWdCTCxDQUFoQixFQUFtQkMsS0FBbkIsRUFBMEJDLEtBQTFCO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFTQTtBQUNSQyxjQUFRQyxHQUFSLENBQVksS0FBS2IsTUFBakI7QUFDQSxVQUFNQSxTQUFTLEtBQUtBLE1BQXBCO0FBQ0EsVUFBTWtCLE9BQU8sSUFBYjtBQUNBLFdBQUtsQixNQUFMLENBQVllLFFBQVosQ0FBcUJJLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSVgsQ0FBSixFQUFVO0FBQ2pDLFlBQUlXLEVBQUVDLElBQU4sRUFBWTtBQUNWO0FBQ0E7QUFDRDtBQUNGLE9BTEQ7QUFNQSx3QkFBUUMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQyxzQkFBbkMsRUFBMkRKLElBQTNELEVBQWlFLENBQWpFO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWSxrQkFBUVMsT0FBUixDQUFnQixTQUFoQixFQUEyQixNQUEzQixFQUFtQyxvREFBbkMsRUFBeUZKLElBQXpGLEVBQStGLENBQS9GLENBQVo7QUFDQSxXQUFLWixRQUFMLEdBQWdCTixPQUFPTSxRQUFQLEdBQWtCTixPQUFPTSxRQUF6QixHQUFvQyxDQUFwRDtBQUNBLFdBQUtpQixNQUFMO0FBQ0Q7Ozs7RUFwQ3NDLGVBQUtDLFM7O2tCQUF6QjFCLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB3eFBhcnNlIGZyb20gJy4uL3d4UGFyc2Uvd3hQYXJzZSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICBhc0RhdGE6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxyXG4gICAgICAgIGRlZmF1dDoge31cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHRhcEluZGV4OiAwXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgc2VsZWN0SW5kZXggKGksIGluZGV4LCBjbG9zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGksIGluZGV4LCBjbG9zZSlcclxuICAgICAgICB0aGlzLnRhcEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgY29uc3QgZXZ0ID0gdGhpcy5hc0RhdGEuaXRlbUxpc3RbaW5kZXhdLmV2ZW50ID8gdGhpcy5hc0RhdGEuaXRlbUxpc3RbaW5kZXhdLmV2ZW50IDogJ2FjdGlvbi1zaGVldCc7XHJcbiAgICAgICAgdGhpcy4kZW1pdChldnQsIGksIGluZGV4LCBjbG9zZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFzRGF0YSlcclxuICAgICAgY29uc3QgYXNEYXRhID0gdGhpcy5hc0RhdGE7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHRoaXMuYXNEYXRhLml0ZW1MaXN0Lm1hcCgociwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChyLnNsb3QpIHtcclxuICAgICAgICAgIC8vIHd4UGFyc2Uud3hQYXJzZSgnYXJ0aWNsZScsICdodG1sJywgci5zbG90IHx8ICcnLCB0aGF0LCA1KVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cod3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCByLnNsb3QgfHwgJycsIHRoYXQsIDUpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgd3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCAnPGRpdj5zbG90MWh0bWw8L2Rpdj4nLCB0aGF0LCA1KVxyXG4gICAgICBjb25zb2xlLmxvZyh3eFBhcnNlLnd4UGFyc2UoJ2FydGljbGUnLCAnaHRtbCcsICc8ZGl2IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zdWNjZXNzXCI+c2xvdDFodG1sPC9kaXY+JywgdGhhdCwgNSkpXHJcbiAgICAgIHRoaXMudGFwSW5kZXggPSBhc0RhdGEudGFwSW5kZXggPyBhc0RhdGEudGFwSW5kZXggOiAwO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19
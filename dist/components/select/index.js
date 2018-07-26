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

var Select = function (_wepy$component) {
  _inherits(Select, _wepy$component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      selectData: {}
    }, _this.data = {
      selectIndex: ''
    }, _this.events = {}, _this.methods = {
      tapItem: function tapItem(i, index) {
        console.log(i, index);
        this.selectIndex = index;
        var evt = this.selectData.event ? this.selectData.event : 'select-item';
        this.$emit(evt, i, index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.selectData, this.selectData.id);
      var selectData = this.selectData;
      this.selectIndex = selectData.selectIndex ? selectData.selectIndex : 0;
      this.$apply();
    }
  }]);

  return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdCIsInByb3BzIiwic2VsZWN0RGF0YSIsImRhdGEiLCJzZWxlY3RJbmRleCIsImV2ZW50cyIsIm1ldGhvZHMiLCJ0YXBJdGVtIiwiaSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImV2dCIsImV2ZW50IiwiJGVtaXQiLCJpZCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVk7QUFETixLLFFBSVJDLEksR0FBTztBQUNMQyxtQkFBWTtBQURQLEssUUFJUEMsTSxHQUFTLEUsUUFFVEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0NDLENBREQsRUFDSUMsS0FESixFQUNXO0FBQ2pCQyxnQkFBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVDLEtBQWY7QUFDQSxhQUFLTCxXQUFMLEdBQW1CSyxLQUFuQjtBQUNBLFlBQU1HLE1BQU0sS0FBS1YsVUFBTCxDQUFnQlcsS0FBaEIsR0FBd0IsS0FBS1gsVUFBTCxDQUFnQlcsS0FBeEMsR0FBZ0QsYUFBNUQ7QUFDQSxhQUFLQyxLQUFMLENBQVdGLEdBQVgsRUFBZ0JKLENBQWhCLEVBQW1CQyxLQUFuQjtBQUNEO0FBTk8sSzs7Ozs7NkJBU0E7QUFDUkMsY0FBUUMsR0FBUixDQUFZLEtBQUtULFVBQWpCLEVBQTZCLEtBQUtBLFVBQUwsQ0FBZ0JhLEVBQTdDO0FBQ0EsVUFBTWIsYUFBYSxLQUFLQSxVQUF4QjtBQUNBLFdBQUtFLFdBQUwsR0FBbUJGLFdBQVdFLFdBQVgsR0FBeUJGLFdBQVdFLFdBQXBDLEdBQWtELENBQXJFO0FBQ0EsV0FBS1ksTUFBTDtBQUNEOzs7O0VBekJpQyxlQUFLQyxTOztrQkFBcEJqQixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIHNlbGVjdERhdGE6IHt9XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHNlbGVjdEluZGV4OicnXG4gIH1cblxuICBldmVudHMgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwSXRlbSAoaSwgaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGksIGluZGV4KVxuICAgICAgdGhpcy5zZWxlY3RJbmRleCA9IGluZGV4O1xuICAgICAgY29uc3QgZXZ0ID0gdGhpcy5zZWxlY3REYXRhLmV2ZW50ID8gdGhpcy5zZWxlY3REYXRhLmV2ZW50IDogJ3NlbGVjdC1pdGVtJztcbiAgICAgIHRoaXMuJGVtaXQoZXZ0LCBpLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdERhdGEsIHRoaXMuc2VsZWN0RGF0YS5pZClcbiAgICBjb25zdCBzZWxlY3REYXRhID0gdGhpcy5zZWxlY3REYXRhO1xuICAgIHRoaXMuc2VsZWN0SW5kZXggPSBzZWxlY3REYXRhLnNlbGVjdEluZGV4ID8gc2VsZWN0RGF0YS5zZWxlY3RJbmRleCA6IDA7XG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxufVxuIl19
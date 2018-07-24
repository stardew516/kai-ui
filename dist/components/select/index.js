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
      tapItem: function tapItem(index) {
        this.selectIndex = index;
        var evt = this.selectData.event ? this.selectData.event : 'select-item';
        this.$emit(evt, index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'onLoad',
    value: function onLoad() {
      var selectData = this.selectData;
      this.selectIndex = selectData.selectIndex ? selectData.selectIndex : 0;
      this.$apply();
    }
  }]);

  return Select;
}(_wepy2.default.component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNlbGVjdCIsInByb3BzIiwic2VsZWN0RGF0YSIsImRhdGEiLCJzZWxlY3RJbmRleCIsImV2ZW50cyIsIm1ldGhvZHMiLCJ0YXBJdGVtIiwiaW5kZXgiLCJldnQiLCJldmVudCIsIiRlbWl0IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOQyxrQkFBWTtBQUROLEssUUFJUkMsSSxHQUFPO0FBQ0xDLG1CQUFZO0FBRFAsSyxRQUlQQyxNLEdBQVMsRSxRQUVUQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQ0MsS0FERCxFQUNRO0FBQ2QsYUFBS0osV0FBTCxHQUFtQkksS0FBbkI7QUFDQSxZQUFNQyxNQUFNLEtBQUtQLFVBQUwsQ0FBZ0JRLEtBQWhCLEdBQXdCLEtBQUtSLFVBQUwsQ0FBZ0JRLEtBQXhDLEdBQWdELGFBQTVEO0FBQ0EsYUFBS0MsS0FBTCxDQUFXRixHQUFYLEVBQWdCRCxLQUFoQjtBQUNEO0FBTE8sSzs7Ozs7NkJBUUE7QUFDUixVQUFNTixhQUFhLEtBQUtBLFVBQXhCO0FBQ0EsV0FBS0UsV0FBTCxHQUFtQkYsV0FBV0UsV0FBWCxHQUF5QkYsV0FBV0UsV0FBcEMsR0FBa0QsQ0FBckU7QUFDQSxXQUFLUSxNQUFMO0FBQ0Q7Ozs7RUF2QmlDLGVBQUtDLFM7O2tCQUFwQmIsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBzZWxlY3REYXRhOiB7fVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzZWxlY3RJbmRleDonJ1xuICB9XG5cbiAgZXZlbnRzID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIHRhcEl0ZW0gKGluZGV4KSB7XG4gICAgICB0aGlzLnNlbGVjdEluZGV4ID0gaW5kZXg7XG4gICAgICBjb25zdCBldnQgPSB0aGlzLnNlbGVjdERhdGEuZXZlbnQgPyB0aGlzLnNlbGVjdERhdGEuZXZlbnQgOiAnc2VsZWN0LWl0ZW0nO1xuICAgICAgdGhpcy4kZW1pdChldnQsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWQgKCkge1xuICAgIGNvbnN0IHNlbGVjdERhdGEgPSB0aGlzLnNlbGVjdERhdGE7XG4gICAgdGhpcy5zZWxlY3RJbmRleCA9IHNlbGVjdERhdGEuc2VsZWN0SW5kZXggPyBzZWxlY3REYXRhLnNlbGVjdEluZGV4IDogMDtcbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG59XG4iXX0=
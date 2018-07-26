'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../components/select/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPage = function (_wepy$page) {
  _inherits(SelectPage, _wepy$page);

  function SelectPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPage.__proto__ || Object.getPrototypeOf(SelectPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Select 选择'
    }, _this.$repeat = {}, _this.$props = { "select": { "xmlns:v-bind": "", "v-bind:selectData.once": "selectData" }, "select1": { "v-bind:selectData.once": "selectData1" } }, _this.$events = {}, _this.components = {
      select: _index2.default,
      select1: _index2.default
    }, _this.data = {
      selectData: {
        id: 0,
        list: [{ name: '选择1' }, { name: '选择2' }, { name: '选择3' }],
        selectIndex: 0,
        class: 'select-success'
      },
      selectData1: {
        id: 1,
        list: [{ name: '选择1' }, { name: '选择2' }],
        selectIndex: 1,
        class: 'select-danger',
        event: 'select-test'
      }
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'select-item': function selectItem(data) {
        console.log('item' + data);
      },
      'select-test': function selectTest(data) {
        console.log("test" + data);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectPage, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SelectPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(SelectPage , 'pages/select'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RQYWdlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNlbGVjdCIsInNlbGVjdDEiLCJkYXRhIiwic2VsZWN0RGF0YSIsImlkIiwibGlzdCIsIm5hbWUiLCJzZWxlY3RJbmRleCIsImNsYXNzIiwic2VsZWN0RGF0YTEiLCJldmVudCIsImNvbXB1dGVkIiwibWV0aG9kcyIsImV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsWUFBNUMsRUFBVixFQUFvRSxXQUFVLEVBQUMsMEJBQXlCLGFBQTFCLEVBQTlFLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDZCQURVO0FBRVZDO0FBRlUsSyxRQUtaQyxJLEdBQU87QUFDTEMsa0JBQVk7QUFDVkMsWUFBSSxDQURNO0FBRVZDLGNBQU0sQ0FBQyxFQUFDQyxNQUFLLEtBQU4sRUFBRCxFQUFjLEVBQUNBLE1BQUssS0FBTixFQUFkLEVBQTJCLEVBQUNBLE1BQUssS0FBTixFQUEzQixDQUZJO0FBR1ZDLHFCQUFhLENBSEg7QUFJVkMsZUFBTztBQUpHLE9BRFA7QUFPTEMsbUJBQWE7QUFDWEwsWUFBSSxDQURPO0FBRVhDLGNBQU0sQ0FBQyxFQUFDQyxNQUFLLEtBQU4sRUFBRCxFQUFjLEVBQUNBLE1BQUssS0FBTixFQUFkLENBRks7QUFHWEMscUJBQWEsQ0FIRjtBQUlYQyxlQUFPLGVBSkk7QUFLWEUsZUFBTztBQUxJO0FBUFIsSyxRQWdCUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTO0FBQ1AscUJBQWUsb0JBQUNYLElBQUQsRUFBVTtBQUN2QlksZ0JBQVFDLEdBQVIsQ0FBWSxTQUFPYixJQUFuQjtBQUNELE9BSE07QUFJUCxxQkFBZSxvQkFBQ0EsSUFBRCxFQUFVO0FBQ3ZCWSxnQkFBUUMsR0FBUixDQUFZLFNBQU9iLElBQW5CO0FBQ0Q7QUFOTSxLOzs7Ozs2QkFTQSxDQUFFOzs7O0VBMUMyQixlQUFLYyxJOztrQkFBeEJ2QixVIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBzZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50cy9zZWxlY3QvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdFBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1NlbGVjdCDpgInmi6knXG4gIH1cbiAgXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzZWxlY3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnNlbGVjdERhdGEub25jZVwiOlwic2VsZWN0RGF0YVwifSxcInNlbGVjdDFcIjp7XCJ2LWJpbmQ6c2VsZWN0RGF0YS5vbmNlXCI6XCJzZWxlY3REYXRhMVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2VsZWN0OiBzZWxlY3QsXG4gICAgc2VsZWN0MTogc2VsZWN0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHNlbGVjdERhdGE6IHtcbiAgICAgIGlkOiAwLFxuICAgICAgbGlzdDogW3tuYW1lOifpgInmi6kxJ30se25hbWU6J+mAieaLqTInfSx7bmFtZTon6YCJ5oupMyd9XSxcbiAgICAgIHNlbGVjdEluZGV4OiAwLFxuICAgICAgY2xhc3M6ICdzZWxlY3Qtc3VjY2VzcydcbiAgICB9LFxuICAgIHNlbGVjdERhdGExOiB7XG4gICAgICBpZDogMSxcbiAgICAgIGxpc3Q6IFt7bmFtZTon6YCJ5oupMSd9LHtuYW1lOifpgInmi6kyJ31dLFxuICAgICAgc2VsZWN0SW5kZXg6IDEsXG4gICAgICBjbGFzczogJ3NlbGVjdC1kYW5nZXInLFxuICAgICAgZXZlbnQ6ICdzZWxlY3QtdGVzdCdcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge1xuICAgICdzZWxlY3QtaXRlbSc6IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaXRlbScrZGF0YSk7XG4gICAgfSxcbiAgICAnc2VsZWN0LXRlc3QnOiAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIrZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../components/cell/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '主页'
    }, _this.$repeat = { "cellList": { "com": "cell", "props": "celldata" } }, _this.$props = { "cell": { "xmlns:v-bind": { "value": "", "for": "cellList", "item": "item", "index": "index", "key": "row-{{index}}" }, "v-bind:celldata.once": { "value": "item", "type": "item", "for": "cellList", "item": "item", "index": "index", "key": "row-{{index}}" } } }, _this.$events = {}, _this.components = {
      cell: _index2.default
    }, _this.data = {
      cellList: [[{
        title: 'cell 列表',
        linktype: 1,
        link: 'cell'
      }, {
        title: 'Button 按钮',
        linktype: 1,
        link: 'button'
      }, {
        title: 'Icon 图标',
        linktype: 1,
        link: 'icon'
      }, {
        title: 'Layout 布局',
        linktype: 1,
        link: 'layout'
      }, {
        title: 'Helper 基础样式',
        linktype: 1,
        link: 'helper'
      }, {
        title: 'Popup 弹出层',
        linktype: 1,
        link: 'popup'
      }, {
        title: 'Tag 标记',
        linktype: 1,
        link: 'tag'
      }, {
        title: 'Tab 标签',
        linktype: 1,
        link: 'tab'
      }, {
        title: 'Select 选择',
        linktype: 1,
        link: 'select'
      }, {
        title: 'Toptips 底部错误提示',
        linktype: 1,
        link: 'toptips'
      }, {
        title: 'dialog',
        linktype: 1,
        link: 'Dialog 弹出框'
      }, {
        title: 'Toast 提示框',
        linktype: 1,
        link: 'toast'
      }]]
    }, _this.computed = {}, _this.methods = {
      translateToPage: function translateToPage(name) {
        wx.navigateTo({ url: name });
      }
    }, _this.events = {
      'item-tap': function itemTap(type, url) {
        wx.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNlbGwiLCJkYXRhIiwiY2VsbExpc3QiLCJ0aXRsZSIsImxpbmt0eXBlIiwibGluayIsImNvbXB1dGVkIiwibWV0aG9kcyIsInRyYW5zbGF0ZVRvUGFnZSIsIm5hbWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJ0eXBlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxNQUFQLEVBQWMsU0FBUSxVQUF0QixFQUFaLEUsUUFDWEMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxlQUFqRSxFQUFoQixFQUFrRyx3QkFBdUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLGVBQW5GLEVBQXpILEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxnQkFBVSxDQUNSLENBQ0U7QUFDRUMsZUFBTyxTQURUO0FBRUVDLGtCQUFVLENBRlo7QUFHRUMsY0FBTTtBQUhSLE9BREYsRUFNRTtBQUNFRixlQUFPLFdBRFQ7QUFFRUMsa0JBQVUsQ0FGWjtBQUdFQyxjQUFNO0FBSFIsT0FORixFQVdFO0FBQ0VGLGVBQU8sU0FEVDtBQUVFQyxrQkFBVSxDQUZaO0FBR0VDLGNBQU07QUFIUixPQVhGLEVBZ0JFO0FBQ0VGLGVBQU8sV0FEVDtBQUVFQyxrQkFBVSxDQUZaO0FBR0VDLGNBQU07QUFIUixPQWhCRixFQXFCRTtBQUNFRixlQUFPLGFBRFQ7QUFFRUMsa0JBQVUsQ0FGWjtBQUdFQyxjQUFNO0FBSFIsT0FyQkYsRUEwQkU7QUFDRUYsZUFBTyxXQURUO0FBRUVDLGtCQUFVLENBRlo7QUFHRUMsY0FBTTtBQUhSLE9BMUJGLEVBK0JFO0FBQ0VGLGVBQU8sUUFEVDtBQUVFQyxrQkFBVSxDQUZaO0FBR0VDLGNBQU07QUFIUixPQS9CRixFQW9DRTtBQUNFRixlQUFPLFFBRFQ7QUFFRUMsa0JBQVUsQ0FGWjtBQUdFQyxjQUFNO0FBSFIsT0FwQ0YsRUF5Q0U7QUFDRUYsZUFBTyxXQURUO0FBRUVDLGtCQUFVLENBRlo7QUFHRUMsY0FBTTtBQUhSLE9BekNGLEVBOENFO0FBQ0VGLGVBQU8sZ0JBRFQ7QUFFRUMsa0JBQVUsQ0FGWjtBQUdFQyxjQUFNO0FBSFIsT0E5Q0YsRUFtREU7QUFDRUYsZUFBTyxRQURUO0FBRUVDLGtCQUFVLENBRlo7QUFHRUMsY0FBTTtBQUhSLE9BbkRGLEVBd0RFO0FBQ0VGLGVBQU8sV0FEVDtBQUVFQyxrQkFBVSxDQUZaO0FBR0VDLGNBQU07QUFIUixPQXhERixDQURRO0FBREwsSyxRQW1FUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHFCQURRLDJCQUNTQyxJQURULEVBQ2U7QUFDckJDLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFLSCxJQUFOLEVBQWQ7QUFDRDtBQUhPLEssUUFNVkksTSxHQUFTO0FBQ1Asa0JBQVksaUJBQUNDLElBQUQsRUFBT0YsR0FBUCxFQUFlO0FBQ3pCRixXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBS0E7QUFETyxTQUFkO0FBR0Q7QUFMTSxLOzs7Ozs2QkFRQSxDQUFFOzs7O0VBL0ZzQixlQUFLRyxJOztrQkFBbkJ0QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGNlbGwgZnJvbSAnLi4vY29tcG9uZW50cy9jZWxsL2luZGV4J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4u+mhtSdcbiAgfVxuXG4gJHJlcGVhdCA9IHtcImNlbGxMaXN0XCI6e1wiY29tXCI6XCJjZWxsXCIsXCJwcm9wc1wiOlwiY2VsbGRhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJjZWxsXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJjZWxsTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcInJvdy17e2luZGV4fX1cIn0sXCJ2LWJpbmQ6Y2VsbGRhdGEub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImNlbGxMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwicm93LXt7aW5kZXh9fVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNlbGw6IGNlbGxcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgY2VsbExpc3Q6IFtcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnY2VsbCDliJfooagnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdjZWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdCdXR0b24g5oyJ6ZKuJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdJY29uIOWbvuaghycsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ2ljb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0xheW91dCDluIPlsYAnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdsYXlvdXQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ0hlbHBlciDln7rnoYDmoLflvI8nLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdoZWxwZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1BvcHVwIOW8ueWHuuWxgicsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ3BvcHVwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdUYWcg5qCH6K6wJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAndGFnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdUYWIg5qCH562+JyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAndGFiJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdTZWxlY3Qg6YCJ5oupJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnc2VsZWN0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdUb3B0aXBzIOW6lemDqOmUmeivr+aPkOekuicsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ3RvcHRpcHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ2RpYWxvZycsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ0RpYWxvZyDlvLnlh7rmoYYnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1RvYXN0IOaPkOekuuahhicsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ3RvYXN0J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgXVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgdHJhbnNsYXRlVG9QYWdlIChuYW1lKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IG5hbWV9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcbiAgICAnaXRlbS10YXAnOiAodHlwZSwgdXJsKSA9PiB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==
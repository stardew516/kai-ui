'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../components/actionsheet/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import wxParse from '../wxParse/wxParse'

var ActionSheet = function (_wepy$page) {
  _inherits(ActionSheet, _wepy$page);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'actionsheet'
    }, _this.$repeat = { "asData": { "com": "actionsheet", "props": "asData.sync" } }, _this.$props = { "actionsheet": { "xmlns:v-bind": { "value": "", "for": "asData", "item": "item", "index": "i", "key": "row-{{index}}" }, "v-bind:asData.sync": { "value": "item", "type": "item", "for": "asData", "item": "item", "index": "i", "key": "row-{{index}}" } } }, _this.$events = {}, _this.components = {
      actionsheet: _index2.default
    }, _this.data = {
      asData: [{
        itemList: [{
          class: '',
          value: '好多文字啊哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈好多文字啊哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈',
          event: '',
          slot: '<view>slot1html</view>'
          // ,
          // {
          //   class: '',
          //   value: '<view class="iconfont icon-success">111</view>',
          //   event: '',
          //   slot: '<view class="iconfont icon-success">slot</view>'
          // },
          // {
          //   class: '',
          //   value: '<view class="iconfont icon-success">222</view>',
          //   event: ''
          // },
          // {
          //   class: '',
          //   value: '333',
          //   event: ''
          // }
        }],
        top: true,
        index: 0,
        show: true // ,
        // {
        //   itemList: [{
        //     class: '',
        //     value: '一一一',
        //     event: ''
        //   },
        //   {
        //     class: '',
        //     value: '二二二',
        //     event: ''
        //   },
        //   {
        //     class: '',
        //     value: '三三三',
        //     event: ''
        //   }],
        //   index: 1,
        //   show: false
        // }
      }]
    }, _this.computed = {}, _this.methods = {
      showActionSheet: function showActionSheet(i) {
        this.asData.map(function (r, i) {
          r.show = false;
        });
        this.asData[i].show = true;
      }
    }, _this.events = {
      'action-sheet': function actionSheet(i, index, close) {
        console.log(i, index, close);
        if (close === 'true') {
          this.asData[i].show = false;
          console.log('您选择了取消');
        } else {
          console.log(i, index);
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'onLoad',
    value: function onLoad() {
      // wxParse.wxParse('article', 'html', '<view class="a113123">slot1html</view>', that, 5)
    }
  }]);

  return ActionSheet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ActionSheet , 'pages/actionsheet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNoZWV0LmpzIl0sIm5hbWVzIjpbIkFjdGlvblNoZWV0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImFjdGlvbnNoZWV0IiwiZGF0YSIsImFzRGF0YSIsIml0ZW1MaXN0IiwiY2xhc3MiLCJ2YWx1ZSIsImV2ZW50Iiwic2xvdCIsInRvcCIsImluZGV4Iiwic2hvdyIsImNvbXB1dGVkIiwibWV0aG9kcyIsInNob3dBY3Rpb25TaGVldCIsImkiLCJtYXAiLCJyIiwiZXZlbnRzIiwiY2xvc2UiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRXNCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxVQUFTLEVBQUMsT0FBTSxhQUFQLEVBQXFCLFNBQVEsYUFBN0IsRUFBVixFLFFBQ1hDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sUUFBbEIsRUFBMkIsUUFBTyxNQUFsQyxFQUF5QyxTQUFRLEdBQWpELEVBQXFELE9BQU0sZUFBM0QsRUFBaEIsRUFBNEYsc0JBQXFCLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxRQUFwQyxFQUE2QyxRQUFPLE1BQXBELEVBQTJELFNBQVEsR0FBbkUsRUFBdUUsT0FBTSxlQUE3RSxFQUFqSCxFQUFmLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsY0FBUSxDQUNOO0FBQ0VDLGtCQUFVLENBQUM7QUFDVEMsaUJBQU8sRUFERTtBQUVUQyxpQkFBTywwQ0FGRTtBQUdUQyxpQkFBTyxFQUhFO0FBSVRDLGdCQUFNO0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRCVyxTQUFELENBRFo7QUF5QkVDLGFBQUssSUF6QlA7QUEwQkVDLGVBQU8sQ0ExQlQ7QUEyQkVDLGNBQU0sSUEzQlIsQ0E0QkU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9DQSxPQURNO0FBREgsSyxRQXFEUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHFCQURRLDJCQUNTQyxDQURULEVBQ1k7QUFDbEIsYUFBS1osTUFBTCxDQUFZYSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBSUYsQ0FBSixFQUFVO0FBQ3hCRSxZQUFFTixJQUFGLEdBQVMsS0FBVDtBQUNELFNBRkQ7QUFHQSxhQUFLUixNQUFMLENBQVlZLENBQVosRUFBZUosSUFBZixHQUFzQixJQUF0QjtBQUNEO0FBTk8sSyxRQVNWTyxNLEdBQVM7QUFDUCxzQkFBZ0IscUJBQVVILENBQVYsRUFBYUwsS0FBYixFQUFvQlMsS0FBcEIsRUFBMkI7QUFDekNDLGdCQUFRQyxHQUFSLENBQVlOLENBQVosRUFBZUwsS0FBZixFQUFzQlMsS0FBdEI7QUFDQSxZQUFJQSxVQUFVLE1BQWQsRUFBc0I7QUFDcEIsZUFBS2hCLE1BQUwsQ0FBWVksQ0FBWixFQUFlSixJQUFmLEdBQXNCLEtBQXRCO0FBQ0FTLGtCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNELFNBSEQsTUFHTztBQUNMRCxrQkFBUUMsR0FBUixDQUFZTixDQUFaLEVBQWVMLEtBQWY7QUFDRDtBQUNGO0FBVE0sSzs7Ozs7NkJBWUE7QUFDUDtBQUNEOzs7O0VBMUZ1QyxlQUFLWSxJOztrQkFBekI1QixXIiwiZmlsZSI6ImFjdGlvbnNoZWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IGFjdGlvbnNoZWV0IGZyb20gJy4uL2NvbXBvbmVudHMvYWN0aW9uc2hlZXQvaW5kZXgnXG4vLyBpbXBvcnQgd3hQYXJzZSBmcm9tICcuLi93eFBhcnNlL3d4UGFyc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBBY3Rpb25TaGVldCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnYWN0aW9uc2hlZXQnXG4gIH1cblxuICRyZXBlYXQgPSB7XCJhc0RhdGFcIjp7XCJjb21cIjpcImFjdGlvbnNoZWV0XCIsXCJwcm9wc1wiOlwiYXNEYXRhLnN5bmNcIn19O1xyXG4kcHJvcHMgPSB7XCJhY3Rpb25zaGVldFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiYXNEYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaVwiLFwia2V5XCI6XCJyb3cte3tpbmRleH19XCJ9LFwidi1iaW5kOmFzRGF0YS5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiYXNEYXRhXCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaVwiLFwia2V5XCI6XCJyb3cte3tpbmRleH19XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgYWN0aW9uc2hlZXQ6IGFjdGlvbnNoZWV0XG4gIH1cblxuICBkYXRhID0ge1xuICAgIGFzRGF0YTogW1xuICAgICAge1xuICAgICAgICBpdGVtTGlzdDogW3tcbiAgICAgICAgICBjbGFzczogJycsXG4gICAgICAgICAgdmFsdWU6ICflpb3lpJrmloflrZfllYrlk4jlk4jlk4jlk4jllYrlk4jlk4jlk4jlk4jlk4jlk4jlk4jllYrlk4jlk4jlpb3lpJrmloflrZfllYrlk4jlk4jlk4jlk4jllYrlk4jlk4jlk4jlk4jlk4jlk4jlk4jllYrlk4jlk4gnLFxuICAgICAgICAgIGV2ZW50OiAnJyxcbiAgICAgICAgICBzbG90OiAnPHZpZXc+c2xvdDFodG1sPC92aWV3PidcbiAgICAgICAgfVxuICAgICAgICAvLyAsXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBjbGFzczogJycsXG4gICAgICAgIC8vICAgdmFsdWU6ICc8dmlldyBjbGFzcz1cImljb25mb250IGljb24tc3VjY2Vzc1wiPjExMTwvdmlldz4nLFxuICAgICAgICAvLyAgIGV2ZW50OiAnJyxcbiAgICAgICAgLy8gICBzbG90OiAnPHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLXN1Y2Nlc3NcIj5zbG90PC92aWV3PidcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIGNsYXNzOiAnJyxcbiAgICAgICAgLy8gICB2YWx1ZTogJzx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1zdWNjZXNzXCI+MjIyPC92aWV3PicsXG4gICAgICAgIC8vICAgZXZlbnQ6ICcnXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBjbGFzczogJycsXG4gICAgICAgIC8vICAgdmFsdWU6ICczMzMnLFxuICAgICAgICAvLyAgIGV2ZW50OiAnJ1xuICAgICAgICAvLyB9XG4gICAgICAgIF0sXG4gICAgICAgIHRvcDogdHJ1ZSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIHNob3c6IHRydWVcbiAgICAgIH0gLy8gLFxuICAgICAgLy8ge1xuICAgICAgLy8gICBpdGVtTGlzdDogW3tcbiAgICAgIC8vICAgICBjbGFzczogJycsXG4gICAgICAvLyAgICAgdmFsdWU6ICfkuIDkuIDkuIAnLFxuICAgICAgLy8gICAgIGV2ZW50OiAnJ1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgY2xhc3M6ICcnLFxuICAgICAgLy8gICAgIHZhbHVlOiAn5LqM5LqM5LqMJyxcbiAgICAgIC8vICAgICBldmVudDogJydcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGNsYXNzOiAnJyxcbiAgICAgIC8vICAgICB2YWx1ZTogJ+S4ieS4ieS4iScsXG4gICAgICAvLyAgICAgZXZlbnQ6ICcnXG4gICAgICAvLyAgIH1dLFxuICAgICAgLy8gICBpbmRleDogMSxcbiAgICAgIC8vICAgc2hvdzogZmFsc2VcbiAgICAgIC8vIH1cbiAgICBdXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBzaG93QWN0aW9uU2hlZXQgKGkpIHtcbiAgICAgIHRoaXMuYXNEYXRhLm1hcCgociwgaSkgPT4ge1xuICAgICAgICByLnNob3cgPSBmYWxzZVxuICAgICAgfSlcbiAgICAgIHRoaXMuYXNEYXRhW2ldLnNob3cgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgICdhY3Rpb24tc2hlZXQnOiBmdW5jdGlvbiAoaSwgaW5kZXgsIGNsb3NlKSB7XG4gICAgICBjb25zb2xlLmxvZyhpLCBpbmRleCwgY2xvc2UpXG4gICAgICBpZiAoY2xvc2UgPT09ICd0cnVlJykge1xuICAgICAgICB0aGlzLmFzRGF0YVtpXS5zaG93ID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coJ+aCqOmAieaLqeS6huWPlua2iCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhpLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgLy8gd3hQYXJzZS53eFBhcnNlKCdhcnRpY2xlJywgJ2h0bWwnLCAnPHZpZXcgY2xhc3M9XCJhMTEzMTIzXCI+c2xvdDFodG1sPC92aWV3PicsIHRoYXQsIDUpXG4gIH1cbn1cbiJdfQ==
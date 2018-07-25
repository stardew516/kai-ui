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

var Cell = function (_wepy$page) {
  _inherits(Cell, _wepy$page);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '列表'
    }, _this.$repeat = { "cellList": { "com": "cell", "props": "celldata" } }, _this.$props = { "cell": { "xmlns:v-bind": { "value": "", "for": "cellList", "item": "item", "index": "index", "key": "row-{{index}}" }, "v-bind:celldata.once": { "value": "item", "type": "item", "for": "cellList", "item": "item", "index": "index", "key": "row-{{index}}" } } }, _this.$events = {}, _this.components = {
      cell: _index2.default
    }, _this.data = {
      cellList: [[{
        title: '默认'
      }], [{
        title: '列表',
        linktype: 1,
        link: 'cell'
      }, {
        title: '列表',
        linktype: 1,
        link: 'cell'
      }, {
        title: '列表',
        linktype: 1,
        link: 'cell'
      }], [{
        title: '列表带icon',
        icontype: '1',
        icontext: 'icon-components',
        linktype: 1,
        link: 'cell'
      }, {
        title: '列表带icon',
        icontype: '1',
        icontext: 'icon-components',
        linktype: 1,
        link: 'cell'
      }, {
        title: '列表带icon',
        icontype: '1',
        icontext: 'icon-components',
        linktype: 1,
        link: 'cell'
      }], [{
        title: '单行有附加信息',
        subtitle: '图片icon',
        detail: '有箭头',
        linktype: 1,
        link: 'index',
        icontype: '2',
        icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
      }], [{
        title: '多行列表',
        subtitle: '无icon',
        detail: '无箭头',
        linktype: 0,
        link: 'index',
        icontype: 1,
        icontext: ''
      }, {
        title: '多行列表',
        subtitle: 'icon',
        detail: '无箭头',
        linktype: 0,
        link: 'index',
        icontype: '1',
        icontext: 'icon-components'
      }, {
        title: '多行列表',
        subtitle: '图片icon',
        detail: '有箭头',
        linktype: 1,
        link: 'index',
        icontype: '2',
        icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
      }], [{
        title: '单行',
        subtitle: '',
        detail: '无附加信息',
        linktype: 1,
        link: 'index',
        icontype: '2',
        icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
      }], [{
        title: '单行好多字真的好多字不信你数数怎么样',
        subtitle: '',
        detail: '无附加信息',
        linktype: 1,
        link: 'index',
        icontype: '2',
        icontext: 'https://gss1.bdstatic.com/5bVXsj_p_tVS5dKfpU_Y_D3/urlicon/12.6155.png'
      }]]
    }, _this.computed = {}, _this.methods = {}, _this.events = {
      'item-tap': function itemTap(type, url) {
        wx.navigateTo({
          url: url
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Cell;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Cell , 'pages/cell'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGwuanMiXSwibmFtZXMiOlsiQ2VsbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjZWxsIiwiZGF0YSIsImNlbGxMaXN0IiwidGl0bGUiLCJsaW5rdHlwZSIsImxpbmsiLCJpY29udHlwZSIsImljb250ZXh0Iiwic3VidGl0bGUiLCJkZXRhaWwiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ0eXBlIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxNQUFQLEVBQWMsU0FBUSxVQUF0QixFQUFaLEUsUUFDWEMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxlQUFqRSxFQUFoQixFQUFrRyx3QkFBdUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLGVBQW5GLEVBQXpILEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxnQkFBVSxDQUNSLENBQ0U7QUFDRUMsZUFBTztBQURULE9BREYsQ0FEUSxFQU1SLENBQ0U7QUFDRUEsZUFBTyxJQURUO0FBRUVDLGtCQUFVLENBRlo7QUFHRUMsY0FBTTtBQUhSLE9BREYsRUFNRTtBQUNFRixlQUFPLElBRFQ7QUFFRUMsa0JBQVUsQ0FGWjtBQUdFQyxjQUFNO0FBSFIsT0FORixFQVdFO0FBQ0VGLGVBQU8sSUFEVDtBQUVFQyxrQkFBVSxDQUZaO0FBR0VDLGNBQU07QUFIUixPQVhGLENBTlEsRUF1QlIsQ0FDRTtBQUNFRixlQUFPLFNBRFQ7QUFFRUcsa0JBQVUsR0FGWjtBQUdFQyxrQkFBVSxpQkFIWjtBQUlFSCxrQkFBVSxDQUpaO0FBS0VDLGNBQU07QUFMUixPQURGLEVBUUU7QUFDRUYsZUFBTyxTQURUO0FBRUVHLGtCQUFVLEdBRlo7QUFHRUMsa0JBQVUsaUJBSFo7QUFJRUgsa0JBQVUsQ0FKWjtBQUtFQyxjQUFNO0FBTFIsT0FSRixFQWVFO0FBQ0VGLGVBQU8sU0FEVDtBQUVFRyxrQkFBVSxHQUZaO0FBR0VDLGtCQUFVLGlCQUhaO0FBSUVILGtCQUFVLENBSlo7QUFLRUMsY0FBTTtBQUxSLE9BZkYsQ0F2QlEsRUE4Q1IsQ0FDRTtBQUNFRixlQUFPLFNBRFQ7QUFFRUssa0JBQVUsUUFGWjtBQUdFQyxnQkFBUSxLQUhWO0FBSUVMLGtCQUFVLENBSlo7QUFLRUMsY0FBTSxPQUxSO0FBTUVDLGtCQUFVLEdBTlo7QUFPRUMsa0JBQVU7QUFQWixPQURGLENBOUNRLEVBeURSLENBQ0U7QUFDRUosZUFBTyxNQURUO0FBRUVLLGtCQUFVLE9BRlo7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFTCxrQkFBVSxDQUpaO0FBS0VDLGNBQU0sT0FMUjtBQU1FQyxrQkFBVSxDQU5aO0FBT0VDLGtCQUFVO0FBUFosT0FERixFQVVFO0FBQ0VKLGVBQU8sTUFEVDtBQUVFSyxrQkFBVSxNQUZaO0FBR0VDLGdCQUFRLEtBSFY7QUFJRUwsa0JBQVUsQ0FKWjtBQUtFQyxjQUFNLE9BTFI7QUFNRUMsa0JBQVUsR0FOWjtBQU9FQyxrQkFBVTtBQVBaLE9BVkYsRUFtQkU7QUFDRUosZUFBTyxNQURUO0FBRUVLLGtCQUFVLFFBRlo7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFTCxrQkFBVSxDQUpaO0FBS0VDLGNBQU0sT0FMUjtBQU1FQyxrQkFBVSxHQU5aO0FBT0VDLGtCQUFVO0FBUFosT0FuQkYsQ0F6RFEsRUFzRlIsQ0FDRTtBQUNFSixlQUFPLElBRFQ7QUFFRUssa0JBQVUsRUFGWjtBQUdFQyxnQkFBUSxPQUhWO0FBSUVMLGtCQUFVLENBSlo7QUFLRUMsY0FBTSxPQUxSO0FBTUVDLGtCQUFVLEdBTlo7QUFPRUMsa0JBQVU7QUFQWixPQURGLENBdEZRLEVBaUdSLENBQ0U7QUFDRUosZUFBTyxvQkFEVDtBQUVFSyxrQkFBVSxFQUZaO0FBR0VDLGdCQUFRLE9BSFY7QUFJRUwsa0JBQVUsQ0FKWjtBQUtFQyxjQUFNLE9BTFI7QUFNRUMsa0JBQVUsR0FOWjtBQU9FQyxrQkFBVTtBQVBaLE9BREYsQ0FqR1E7QUFETCxLLFFBZ0hQRyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVM7QUFDUCxrQkFBWSxpQkFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDekJDLFdBQUdDLFVBQUgsQ0FBYztBQUNaRixlQUFLQTtBQURPLFNBQWQ7QUFHRDtBQUxNLEs7Ozs7OzZCQVFBLENBQ1I7Ozs7RUF6SWdDLGVBQUtHLEk7O2tCQUFsQnhCLEkiLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjZWxsIGZyb20gJy4uL2NvbXBvbmVudHMvY2VsbC9pbmRleCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgIENlbGwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WIl+ihqCdcbiAgfVxuXG4gJHJlcGVhdCA9IHtcImNlbGxMaXN0XCI6e1wiY29tXCI6XCJjZWxsXCIsXCJwcm9wc1wiOlwiY2VsbGRhdGFcIn19O1xyXG4kcHJvcHMgPSB7XCJjZWxsXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJjZWxsTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcInJvdy17e2luZGV4fX1cIn0sXCJ2LWJpbmQ6Y2VsbGRhdGEub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImNlbGxMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwicm93LXt7aW5kZXh9fVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGNlbGw6IGNlbGxcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgY2VsbExpc3Q6IFtcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6buY6K6kJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfliJfooagnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdjZWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfliJfooagnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdjZWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfliJfooagnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdjZWxsJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfliJfooajluKZpY29uJyxcbiAgICAgICAgICBpY29udHlwZTogJzEnLFxuICAgICAgICAgIGljb250ZXh0OiAnaWNvbi1jb21wb25lbnRzJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnY2VsbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5YiX6KGo5bimaWNvbicsXG4gICAgICAgICAgaWNvbnR5cGU6ICcxJyxcbiAgICAgICAgICBpY29udGV4dDogJ2ljb24tY29tcG9uZW50cycsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ2NlbGwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+WIl+ihqOW4pmljb24nLFxuICAgICAgICAgIGljb250eXBlOiAnMScsXG4gICAgICAgICAgaWNvbnRleHQ6ICdpY29uLWNvbXBvbmVudHMnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdjZWxsJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfljZXooYzmnInpmYTliqDkv6Hmga8nLFxuICAgICAgICAgIHN1YnRpdGxlOiAn5Zu+54mHaWNvbicsXG4gICAgICAgICAgZGV0YWlsOiAn5pyJ566t5aS0JyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnaW5kZXgnLFxuICAgICAgICAgIGljb250eXBlOiAnMicsXG4gICAgICAgICAgaWNvbnRleHQ6ICdodHRwczovL2dzczEuYmRzdGF0aWMuY29tLzViVlhzal9wX3RWUzVkS2ZwVV9ZX0QzL3VybGljb24vMTIuNjE1NS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+WkmuihjOWIl+ihqCcsXG4gICAgICAgICAgc3VidGl0bGU6ICfml6BpY29uJyxcbiAgICAgICAgICBkZXRhaWw6ICfml6Dnrq3lpLQnLFxuICAgICAgICAgIGxpbmt0eXBlOiAwLFxuICAgICAgICAgIGxpbms6ICdpbmRleCcsXG4gICAgICAgICAgaWNvbnR5cGU6IDEsXG4gICAgICAgICAgaWNvbnRleHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+WkmuihjOWIl+ihqCcsXG4gICAgICAgICAgc3VidGl0bGU6ICdpY29uJyxcbiAgICAgICAgICBkZXRhaWw6ICfml6Dnrq3lpLQnLFxuICAgICAgICAgIGxpbmt0eXBlOiAwLFxuICAgICAgICAgIGxpbms6ICdpbmRleCcsXG4gICAgICAgICAgaWNvbnR5cGU6ICcxJyxcbiAgICAgICAgICBpY29udGV4dDogJ2ljb24tY29tcG9uZW50cydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5aSa6KGM5YiX6KGoJyxcbiAgICAgICAgICBzdWJ0aXRsZTogJ+WbvueJh2ljb24nLFxuICAgICAgICAgIGRldGFpbDogJ+acieeureWktCcsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ2luZGV4JyxcbiAgICAgICAgICBpY29udHlwZTogJzInLFxuICAgICAgICAgIGljb250ZXh0OiAnaHR0cHM6Ly9nc3MxLmJkc3RhdGljLmNvbS81YlZYc2pfcF90VlM1ZEtmcFVfWV9EMy91cmxpY29uLzEyLjYxNTUucG5nJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICfljZXooYwnLFxuICAgICAgICAgIHN1YnRpdGxlOiAnJyxcbiAgICAgICAgICBkZXRhaWw6ICfml6DpmYTliqDkv6Hmga8nLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdpbmRleCcsXG4gICAgICAgICAgaWNvbnR5cGU6ICcyJyxcbiAgICAgICAgICBpY29udGV4dDogJ2h0dHBzOi8vZ3NzMS5iZHN0YXRpYy5jb20vNWJWWHNqX3BfdFZTNWRLZnBVX1lfRDMvdXJsaWNvbi8xMi42MTU1LnBuZydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5Y2V6KGM5aW95aSa5a2X55yf55qE5aW95aSa5a2X5LiN5L+h5L2g5pWw5pWw5oCO5LmI5qC3JyxcbiAgICAgICAgICBzdWJ0aXRsZTogJycsXG4gICAgICAgICAgZGV0YWlsOiAn5peg6ZmE5Yqg5L+h5oGvJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnaW5kZXgnLFxuICAgICAgICAgIGljb250eXBlOiAnMicsXG4gICAgICAgICAgaWNvbnRleHQ6ICdodHRwczovL2dzczEuYmRzdGF0aWMuY29tLzViVlhzal9wX3RWUzVkS2ZwVV9ZX0QzL3VybGljb24vMTIuNjE1NS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge1xuICAgICdpdGVtLXRhcCc6ICh0eXBlLCB1cmwpID0+IHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHVybFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==
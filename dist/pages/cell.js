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
        title: '单行列表',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbGwuanMiXSwibmFtZXMiOlsiQ2VsbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJjZWxsIiwiZGF0YSIsImNlbGxMaXN0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImRldGFpbCIsImxpbmt0eXBlIiwibGluayIsImljb250eXBlIiwiaWNvbnRleHQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJ0eXBlIiwidXJsIiwid3giLCJuYXZpZ2F0ZVRvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlWQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsT0FBTSxNQUFQLEVBQWMsU0FBUSxVQUF0QixFQUFaLEUsUUFDWEMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxlQUFqRSxFQUFoQixFQUFrRyx3QkFBdUIsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLGVBQW5GLEVBQXpILEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBSVpDLEksR0FBTztBQUNMQyxnQkFBVSxDQUNSLENBQ0U7QUFDRUMsZUFBTztBQURULE9BREYsQ0FEUSxFQU1SLENBQ0U7QUFDRUEsZUFBTyxNQURUO0FBRUVDLGtCQUFVLFFBRlo7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFQyxrQkFBVSxDQUpaO0FBS0VDLGNBQU0sT0FMUjtBQU1FQyxrQkFBVSxHQU5aO0FBT0VDLGtCQUFVO0FBUFosT0FERixDQU5RLEVBaUJSLENBQ0U7QUFDRU4sZUFBTyxNQURUO0FBRUVDLGtCQUFVLE9BRlo7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFQyxrQkFBVSxDQUpaO0FBS0VDLGNBQU0sT0FMUjtBQU1FQyxrQkFBVSxDQU5aO0FBT0VDLGtCQUFVO0FBUFosT0FERixFQVVFO0FBQ0VOLGVBQU8sTUFEVDtBQUVFQyxrQkFBVSxNQUZaO0FBR0VDLGdCQUFRLEtBSFY7QUFJRUMsa0JBQVUsQ0FKWjtBQUtFQyxjQUFNLE9BTFI7QUFNRUMsa0JBQVUsR0FOWjtBQU9FQyxrQkFBVTtBQVBaLE9BVkYsRUFtQkU7QUFDRU4sZUFBTyxNQURUO0FBRUVDLGtCQUFVLFFBRlo7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFQyxrQkFBVSxDQUpaO0FBS0VDLGNBQU0sT0FMUjtBQU1FQyxrQkFBVSxHQU5aO0FBT0VDLGtCQUFVO0FBUFosT0FuQkYsQ0FqQlEsRUE4Q1IsQ0FDRTtBQUNFTixlQUFPLElBRFQ7QUFFRUMsa0JBQVUsRUFGWjtBQUdFQyxnQkFBUSxPQUhWO0FBSUVDLGtCQUFVLENBSlo7QUFLRUMsY0FBTSxPQUxSO0FBTUVDLGtCQUFVLEdBTlo7QUFPRUMsa0JBQVU7QUFQWixPQURGLENBOUNRO0FBREwsSyxRQTZEUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTO0FBQ1Asa0JBQVksaUJBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3pCQyxXQUFHQyxVQUFILENBQWM7QUFDWkYsZUFBS0E7QUFETyxTQUFkO0FBR0Q7QUFMTSxLOzs7Ozs2QkFRQSxDQUNSOzs7O0VBdEZnQyxlQUFLRyxJOztrQkFBbEJ4QixJIiwiZmlsZSI6ImNlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY2VsbCBmcm9tICcuLi9jb21wb25lbnRzL2NlbGwvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBDZWxsIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliJfooagnXG4gIH1cblxuICRyZXBlYXQgPSB7XCJjZWxsTGlzdFwiOntcImNvbVwiOlwiY2VsbFwiLFwicHJvcHNcIjpcImNlbGxkYXRhXCJ9fTtcclxuJHByb3BzID0ge1wiY2VsbFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiY2VsbExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJyb3cte3tpbmRleH19XCJ9LFwidi1iaW5kOmNlbGxkYXRhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJjZWxsTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcInJvdy17e2luZGV4fX1cIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBjZWxsOiBjZWxsXG4gIH1cblxuICBkYXRhID0ge1xuICAgIGNlbGxMaXN0OiBbXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+m7mOiupCdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5Y2V6KGM5YiX6KGoJyxcbiAgICAgICAgICBzdWJ0aXRsZTogJ+WbvueJh2ljb24nLFxuICAgICAgICAgIGRldGFpbDogJ+acieeureWktCcsXG4gICAgICAgICAgbGlua3R5cGU6IDEsXG4gICAgICAgICAgbGluazogJ2luZGV4JyxcbiAgICAgICAgICBpY29udHlwZTogJzInLFxuICAgICAgICAgIGljb250ZXh0OiAnaHR0cHM6Ly9nc3MxLmJkc3RhdGljLmNvbS81YlZYc2pfcF90VlM1ZEtmcFVfWV9EMy91cmxpY29uLzEyLjYxNTUucG5nJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICflpJrooYzliJfooagnLFxuICAgICAgICAgIHN1YnRpdGxlOiAn5pegaWNvbicsXG4gICAgICAgICAgZGV0YWlsOiAn5peg566t5aS0JyxcbiAgICAgICAgICBsaW5rdHlwZTogMCxcbiAgICAgICAgICBsaW5rOiAnaW5kZXgnLFxuICAgICAgICAgIGljb250eXBlOiAxLFxuICAgICAgICAgIGljb250ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICflpJrooYzliJfooagnLFxuICAgICAgICAgIHN1YnRpdGxlOiAnaWNvbicsXG4gICAgICAgICAgZGV0YWlsOiAn5peg566t5aS0JyxcbiAgICAgICAgICBsaW5rdHlwZTogMCxcbiAgICAgICAgICBsaW5rOiAnaW5kZXgnLFxuICAgICAgICAgIGljb250eXBlOiAnMScsXG4gICAgICAgICAgaWNvbnRleHQ6ICdpY29uLWNvbXBvbmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+WkmuihjOWIl+ihqCcsXG4gICAgICAgICAgc3VidGl0bGU6ICflm77niYdpY29uJyxcbiAgICAgICAgICBkZXRhaWw6ICfmnInnrq3lpLQnLFxuICAgICAgICAgIGxpbmt0eXBlOiAxLFxuICAgICAgICAgIGxpbms6ICdpbmRleCcsXG4gICAgICAgICAgaWNvbnR5cGU6ICcyJyxcbiAgICAgICAgICBpY29udGV4dDogJ2h0dHBzOi8vZ3NzMS5iZHN0YXRpYy5jb20vNWJWWHNqX3BfdFZTNWRLZnBVX1lfRDMvdXJsaWNvbi8xMi42MTU1LnBuZydcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn5Y2V6KGMJyxcbiAgICAgICAgICBzdWJ0aXRsZTogJycsXG4gICAgICAgICAgZGV0YWlsOiAn5peg6ZmE5Yqg5L+h5oGvJyxcbiAgICAgICAgICBsaW5rdHlwZTogMSxcbiAgICAgICAgICBsaW5rOiAnaW5kZXgnLFxuICAgICAgICAgIGljb250eXBlOiAnMicsXG4gICAgICAgICAgaWNvbnRleHQ6ICdodHRwczovL2dzczEuYmRzdGF0aWMuY29tLzViVlhzal9wX3RWUzVkS2ZwVV9ZX0QzL3VybGljb24vMTIuNjE1NS5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge1xuICAgICdpdGVtLXRhcCc6ICh0eXBlLCB1cmwpID0+IHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IHVybFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gIH1cbn1cbiJdfQ==
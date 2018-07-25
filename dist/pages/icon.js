'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = function (_wepy$page) {
  _inherits(Icon, _wepy$page);

  function Icon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '字体库'
    }, _this.components = {}, _this.data = {
      list: ['icon-delete', 'icon-upload', 'icon-upload2', 'icon-download2', 'icon-rank', 'icon-refresh', 'icon-edit-outline', 'icon-edit', 'icon-setting-outline', 'icon-setting', 'icon-share', 'icon-loading', 'icon-picture-outline', 'icon-picture', 'icon-callinging', 'icon-call', 'icon-location-outline', 'icon-location', 'icon-more-outline', 'icon-more', 'icon-phone', 'icon-service', 'icon-menu', 'icon-star-outline', 'icon-star', 'icon-view', 'icon-time', 'icon-message', 'icon-printer', 'icon-bell', 'icon-date', 'icon-news', 'icon-goods-soldout', 'icon-goods', 'icon-sort', 'icon-sort-down', 'icon-sort-up', 'icon-ticket', 'icon-document', 'icon-zoom-out', 'icon-zoom-in', 'icon-search', 'icon-double-left', 'icon-double-right', 'icon-plus-outline', 'icon-plus-circle', 'icon-plus', 'icon-minus-outline', 'icon-minus-circle', 'icon-minus', 'icon-success-outline', 'icon-success-circle', 'icon-success', 'icon-close-outline', 'icon-close-circle', 'icon-close', 'icon-caret', 'icon-caret-up', 'icon-caret-right', 'icon-caret-down', 'icon-caret-left', 'icon-info', 'icon-warning', 'icon-right', 'icon-left', 'icon-up', 'icon-down', 'icon-question', 'icon-back', 'icon-components']
    }, _this.computed = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Icon, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Icon;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Icon , 'pages/icon'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXNCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEMsWUFBSyxDQUNILGFBREcsRUFDWSxhQURaLEVBQzJCLGNBRDNCLEVBQzJDLGdCQUQzQyxFQUM2RCxXQUQ3RCxFQUVILGNBRkcsRUFFYSxtQkFGYixFQUVrQyxXQUZsQyxFQUUrQyxzQkFGL0MsRUFFdUUsY0FGdkUsRUFHSCxZQUhHLEVBR1csY0FIWCxFQUcyQixzQkFIM0IsRUFHbUQsY0FIbkQsRUFHbUUsaUJBSG5FLEVBSUgsV0FKRyxFQUlVLHVCQUpWLEVBSW1DLGVBSm5DLEVBSW9ELG1CQUpwRCxFQUl5RSxXQUp6RSxFQUtILFlBTEcsRUFLVyxjQUxYLEVBSzJCLFdBTDNCLEVBS3dDLG1CQUx4QyxFQUs2RCxXQUw3RCxFQU1ILFdBTkcsRUFNVSxXQU5WLEVBTXVCLGNBTnZCLEVBTXVDLGNBTnZDLEVBTXVELFdBTnZELEVBT0gsV0FQRyxFQU9VLFdBUFYsRUFPdUIsb0JBUHZCLEVBTzZDLFlBUDdDLEVBTzJELFdBUDNELEVBUUgsZ0JBUkcsRUFRZSxjQVJmLEVBUStCLGFBUi9CLEVBUThDLGVBUjlDLEVBUStELGVBUi9ELEVBU0gsY0FURyxFQVNhLGFBVGIsRUFTNEIsa0JBVDVCLEVBU2dELG1CQVRoRCxFQVNxRSxtQkFUckUsRUFVSCxrQkFWRyxFQVVpQixXQVZqQixFQVU4QixvQkFWOUIsRUFVb0QsbUJBVnBELEVBVXlFLFlBVnpFLEVBV0gsc0JBWEcsRUFXcUIscUJBWHJCLEVBVzRDLGNBWDVDLEVBVzRELG9CQVg1RCxFQVdrRixtQkFYbEYsRUFZSCxZQVpHLEVBWVcsWUFaWCxFQVl5QixlQVp6QixFQVkwQyxrQkFaMUMsRUFZOEQsaUJBWjlELEVBYUgsaUJBYkcsRUFhZ0IsV0FiaEIsRUFhNkIsY0FiN0IsRUFhNkMsWUFiN0MsRUFhMkQsV0FiM0QsRUFjSCxTQWRHLEVBY1EsV0FkUixFQWNxQixlQWRyQixFQWNzQyxXQWR0QyxFQWNtRCxpQkFkbkQ7QUFEQSxLLFFBbUJQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7NkJBRUEsQ0FBRTs7OztFQS9Cc0IsZUFBS0MsSTs7a0JBQWxCVCxJIiwiZmlsZSI6Imljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBJY29uIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflrZfkvZPlupMnXG4gIH1cbiAgY29tcG9uZW50cyA9IHt9XG5cbiAgZGF0YSA9IHtcbiAgICBsaXN0OltcbiAgICAgICdpY29uLWRlbGV0ZScsICdpY29uLXVwbG9hZCcsICdpY29uLXVwbG9hZDInLCAnaWNvbi1kb3dubG9hZDInLCAnaWNvbi1yYW5rJyxcbiAgICAgICdpY29uLXJlZnJlc2gnLCAnaWNvbi1lZGl0LW91dGxpbmUnLCAnaWNvbi1lZGl0JywgJ2ljb24tc2V0dGluZy1vdXRsaW5lJywgJ2ljb24tc2V0dGluZycsXG4gICAgICAnaWNvbi1zaGFyZScsICdpY29uLWxvYWRpbmcnLCAnaWNvbi1waWN0dXJlLW91dGxpbmUnLCAnaWNvbi1waWN0dXJlJywgJ2ljb24tY2FsbGluZ2luZycsXG4gICAgICAnaWNvbi1jYWxsJywgJ2ljb24tbG9jYXRpb24tb3V0bGluZScsICdpY29uLWxvY2F0aW9uJywgJ2ljb24tbW9yZS1vdXRsaW5lJywgJ2ljb24tbW9yZScsXG4gICAgICAnaWNvbi1waG9uZScsICdpY29uLXNlcnZpY2UnLCAnaWNvbi1tZW51JywgJ2ljb24tc3Rhci1vdXRsaW5lJywgJ2ljb24tc3RhcicsXG4gICAgICAnaWNvbi12aWV3JywgJ2ljb24tdGltZScsICdpY29uLW1lc3NhZ2UnLCAnaWNvbi1wcmludGVyJywgJ2ljb24tYmVsbCcsXG4gICAgICAnaWNvbi1kYXRlJywgJ2ljb24tbmV3cycsICdpY29uLWdvb2RzLXNvbGRvdXQnLCAnaWNvbi1nb29kcycsICdpY29uLXNvcnQnLFxuICAgICAgJ2ljb24tc29ydC1kb3duJywgJ2ljb24tc29ydC11cCcsICdpY29uLXRpY2tldCcsICdpY29uLWRvY3VtZW50JywgJ2ljb24tem9vbS1vdXQnLFxuICAgICAgJ2ljb24tem9vbS1pbicsICdpY29uLXNlYXJjaCcsICdpY29uLWRvdWJsZS1sZWZ0JywgJ2ljb24tZG91YmxlLXJpZ2h0JywgJ2ljb24tcGx1cy1vdXRsaW5lJyxcbiAgICAgICdpY29uLXBsdXMtY2lyY2xlJywgJ2ljb24tcGx1cycsICdpY29uLW1pbnVzLW91dGxpbmUnLCAnaWNvbi1taW51cy1jaXJjbGUnLCAnaWNvbi1taW51cycsXG4gICAgICAnaWNvbi1zdWNjZXNzLW91dGxpbmUnLCAnaWNvbi1zdWNjZXNzLWNpcmNsZScsICdpY29uLXN1Y2Nlc3MnLCAnaWNvbi1jbG9zZS1vdXRsaW5lJywgJ2ljb24tY2xvc2UtY2lyY2xlJyxcbiAgICAgICdpY29uLWNsb3NlJywgJ2ljb24tY2FyZXQnLCAnaWNvbi1jYXJldC11cCcsICdpY29uLWNhcmV0LXJpZ2h0JywgJ2ljb24tY2FyZXQtZG93bicsXG4gICAgICAnaWNvbi1jYXJldC1sZWZ0JywgJ2ljb24taW5mbycsICdpY29uLXdhcm5pbmcnLCAnaWNvbi1yaWdodCcsICdpY29uLWxlZnQnLFxuICAgICAgJ2ljb24tdXAnLCAnaWNvbi1kb3duJywgJ2ljb24tcXVlc3Rpb24nLCAnaWNvbi1iYWNrJywgJ2ljb24tY29tcG9uZW50cydcbiAgICBdXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHt9XG5cbiAgZXZlbnRzID0ge31cblxuICBvbkxvYWQoKSB7fVxufVxuIl19
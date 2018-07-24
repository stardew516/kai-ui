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

var Dialog = function (_wepy$component) {
  _inherits(Dialog, _wepy$component);

  function Dialog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      dialog: {
        show: false,
        title: '',
        content: '',
        showVertical: false,
        type: '',
        buttons: []
      },
      resolve: '',
      reject: ''
    }, _this.methods = {
      btnTap: function btnTap(index) {
        this.resolve(index);
        this.dialog = {
          title: '标题',
          content: '内容',
          showVertical: false,
          type: 'base',
          buttons: [{ text: '取消' }, { text: '确定', color: '#3CC51F' }],
          show: false
        };
        this.$apply();
      },
      _handleDialogButtonClick: function _handleDialogButtonClick(index) {
        console.log(index);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'show',
    value: function show(options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.dialog = {
          title: options.title ? options.title : '提示',
          content: options.content ? options.content : '内容',
          showVertical: options.showVertical ? options.showVertical : false,
          type: options.type ? options.type : 'base',
          buttons: options.type === 'alert' ? [{ text: '确定', color: '#3CC51F' }] : options.type === 'muti' ? options.buttons : [{ text: '取消' }, { text: '确定', color: '#3CC51F' }],
          show: true
        };
        _this2.resolve = resolve;
        _this2.reject = reject;
        _this2.$apply();
      });
    }
  }]);

  return Dialog;
}(_wepy2.default.component);

exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy4xLmpzIl0sIm5hbWVzIjpbIkRpYWxvZyIsImRhdGEiLCJkaWFsb2ciLCJzaG93IiwidGl0bGUiLCJjb250ZW50Iiwic2hvd1ZlcnRpY2FsIiwidHlwZSIsImJ1dHRvbnMiLCJyZXNvbHZlIiwicmVqZWN0IiwibWV0aG9kcyIsImJ0blRhcCIsImluZGV4IiwidGV4dCIsImNvbG9yIiwiJGFwcGx5IiwiX2hhbmRsZURpYWxvZ0J1dHRvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJQcm9taXNlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEksR0FBTztBQUNMQyxjQUFRO0FBQ05DLGNBQU0sS0FEQTtBQUVOQyxlQUFPLEVBRkQ7QUFHTkMsaUJBQVMsRUFISDtBQUlOQyxzQkFBYyxLQUpSO0FBS05DLGNBQUssRUFMQztBQU1OQyxpQkFBUztBQU5ILE9BREg7QUFTTEMsZUFBUSxFQVRIO0FBVUxDLGNBQU87QUFWRixLLFFBYVBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxLQURDLEVBQ0s7QUFDWCxhQUFLSixPQUFMLENBQWFJLEtBQWI7QUFDQSxhQUFLWCxNQUFMLEdBQWM7QUFDWkUsaUJBQU8sSUFESztBQUVaQyxtQkFBUyxJQUZHO0FBR1pDLHdCQUFlLEtBSEg7QUFJWkMsZ0JBQU0sTUFKTTtBQUtaQyxtQkFBUyxDQUFDLEVBQUNNLE1BQUssSUFBTixFQUFELEVBQWMsRUFBQ0EsTUFBSyxJQUFOLEVBQVlDLE9BQU8sU0FBbkIsRUFBZCxDQUxHO0FBTVpaLGdCQUFNO0FBTk0sU0FBZDtBQVFBLGFBQUthLE1BQUw7QUFDRCxPQVpPO0FBYVJDLDhCQWJRLG9DQWFpQkosS0FiakIsRUFhdUI7QUFDN0JLLGdCQUFRQyxHQUFSLENBQVlOLEtBQVo7QUFDRDtBQWZPLEs7Ozs7O3lCQWtCTE8sTyxFQUFRO0FBQUE7O0FBQ1gsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ1osT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLGVBQUtSLE1BQUwsR0FBYztBQUNaRSxpQkFBT2dCLFFBQVFoQixLQUFSLEdBQWdCZ0IsUUFBUWhCLEtBQXhCLEdBQWdDLElBRDNCO0FBRVpDLG1CQUFTZSxRQUFRZixPQUFSLEdBQWtCZSxRQUFRZixPQUExQixHQUFvQyxJQUZqQztBQUdaQyx3QkFBY2MsUUFBUWQsWUFBUixHQUF1QmMsUUFBUWQsWUFBL0IsR0FBOEMsS0FIaEQ7QUFJWkMsZ0JBQU1hLFFBQVFiLElBQVIsR0FBZWEsUUFBUWIsSUFBdkIsR0FBOEIsTUFKeEI7QUFLWkMsbUJBQVNZLFFBQVFiLElBQVIsS0FBaUIsT0FBakIsR0FBMkIsQ0FBQyxFQUFDTyxNQUFLLElBQU4sRUFBWUMsT0FBTyxTQUFuQixFQUFELENBQTNCLEdBQThESyxRQUFRYixJQUFSLEtBQWlCLE1BQWpCLEdBQTBCYSxRQUFRWixPQUFsQyxHQUE0QyxDQUFDLEVBQUNNLE1BQUssSUFBTixFQUFELEVBQWMsRUFBQ0EsTUFBSyxJQUFOLEVBQVlDLE9BQU8sU0FBbkIsRUFBZCxDQUx2RztBQU1aWixnQkFBTTtBQU5NLFNBQWQ7QUFRQSxlQUFLTSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxlQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxlQUFLTSxNQUFMO0FBQ0QsT0FaTSxDQUFQO0FBYUQ7Ozs7RUE5Q2lDLGVBQUtNLFM7O2tCQUFwQnRCLE0iLCJmaWxlIjoiZGlhbG9nLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgZGF0YSA9IHtcbiAgICBkaWFsb2c6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgY29udGVudDogJycsXG4gICAgICBzaG93VmVydGljYWw6IGZhbHNlLFxuICAgICAgdHlwZTonJyxcbiAgICAgIGJ1dHRvbnM6IFtdXG4gICAgfSxcbiAgICByZXNvbHZlOicnLFxuICAgIHJlamVjdDonJ1xuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBidG5UYXAoaW5kZXgpe1xuICAgICAgdGhpcy5yZXNvbHZlKGluZGV4KTtcbiAgICAgIHRoaXMuZGlhbG9nID0ge1xuICAgICAgICB0aXRsZTogJ+agh+mimCcsXG4gICAgICAgIGNvbnRlbnQ6ICflhoXlrrknLFxuICAgICAgICBzaG93VmVydGljYWw6ICBmYWxzZSxcbiAgICAgICAgdHlwZTogJ2Jhc2UnLFxuICAgICAgICBidXR0b25zOiBbe3RleHQ6J+WPlua2iCd9LCB7dGV4dDon56Gu5a6aJywgY29sb3I6ICcjM0NDNTFGJ31dLFxuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICAgIF9oYW5kbGVEaWFsb2dCdXR0b25DbGljayhpbmRleCl7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdyhvcHRpb25zKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5kaWFsb2cgPSB7XG4gICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlID8gb3B0aW9ucy50aXRsZSA6ICfmj5DnpLonLFxuICAgICAgICBjb250ZW50OiBvcHRpb25zLmNvbnRlbnQgPyBvcHRpb25zLmNvbnRlbnQgOiAn5YaF5a65JyxcbiAgICAgICAgc2hvd1ZlcnRpY2FsOiBvcHRpb25zLnNob3dWZXJ0aWNhbCA/IG9wdGlvbnMuc2hvd1ZlcnRpY2FsIDogZmFsc2UsXG4gICAgICAgIHR5cGU6IG9wdGlvbnMudHlwZSA/IG9wdGlvbnMudHlwZSA6ICdiYXNlJyxcbiAgICAgICAgYnV0dG9uczogb3B0aW9ucy50eXBlID09PSAnYWxlcnQnID8gW3t0ZXh0Oifnoa7lrponLCBjb2xvcjogJyMzQ0M1MUYnfV0gOiAob3B0aW9ucy50eXBlID09PSAnbXV0aScgPyBvcHRpb25zLmJ1dHRvbnMgOiBbe3RleHQ6J+WPlua2iCd9LCB7dGV4dDon56Gu5a6aJywgY29sb3I6ICcjM0NDNTFGJ31dKSxcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfVxuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9KSBcbiAgfVxufVxuIl19
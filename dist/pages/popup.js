'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../components/popup/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_wepy$page) {
  _inherits(Popup, _wepy$page);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'popup'
    }, _this.$repeat = { "popData": { "com": "popup", "props": "" } }, _this.$props = { "popup": { "xmlns:v-bind": { "value": "", "for": "popData", "item": "item", "index": "i", "key": "row-{{index}}" }, "v-bind:show.sync": { "value": "item.showPopup", "for": "popData", "item": "item", "index": "i", "key": "row-{{index}}" }, "v-bind:position.sync": { "value": "item.position", "for": "popData", "item": "item", "index": "i", "key": "row-{{index}}" }, "v-bind:id.sync": { "value": "i", "type": "index", "for": "popData", "item": "item", "index": "i", "key": "row-{{index}}" } } }, _this.$events = {}, _this.components = {
      popup: _index2.default
    }, _this.data = {
      popData: [{
        showPopup: true,
        position: 'center'
      }, {
        showPopup: false,
        position: 'top'
      }, {
        showPopup: false,
        position: 'right'
      }, {
        showPopup: false,
        position: 'bottom'
      }, {
        showPopup: false,
        position: 'left'
      }]
    }, _this.computed = {}, _this.methods = {
      popPosition: function popPosition(i) {
        this.popData.map(function (r, i) {
          r.showPopup = false;
        });
        this.popData[i].showPopup = true;
      }
    }, _this.events = {
      pop: function pop(i, op) {
        this.popData[i].showPopup = op ? false : !this.popData[i].showPopup;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Popup;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Popup , 'pages/popup'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmpzIl0sIm5hbWVzIjpbIlBvcHVwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvcHVwIiwiZGF0YSIsInBvcERhdGEiLCJzaG93UG9wdXAiLCJwb3NpdGlvbiIsImNvbXB1dGVkIiwibWV0aG9kcyIsInBvcFBvc2l0aW9uIiwiaSIsIm1hcCIsInIiLCJldmVudHMiLCJwb3AiLCJvcCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVzQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEVBQUMsV0FBVSxFQUFDLE9BQU0sT0FBUCxFQUFlLFNBQVEsRUFBdkIsRUFBWCxFLFFBQ1hDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sU0FBbEIsRUFBNEIsUUFBTyxNQUFuQyxFQUEwQyxTQUFRLEdBQWxELEVBQXNELE9BQU0sZUFBNUQsRUFBaEIsRUFBNkYsb0JBQW1CLEVBQUMsU0FBUSxnQkFBVCxFQUEwQixPQUFNLFNBQWhDLEVBQTBDLFFBQU8sTUFBakQsRUFBd0QsU0FBUSxHQUFoRSxFQUFvRSxPQUFNLGVBQTFFLEVBQWhILEVBQTJNLHdCQUF1QixFQUFDLFNBQVEsZUFBVCxFQUF5QixPQUFNLFNBQS9CLEVBQXlDLFFBQU8sTUFBaEQsRUFBdUQsU0FBUSxHQUEvRCxFQUFtRSxPQUFNLGVBQXpFLEVBQWxPLEVBQTRULGtCQUFpQixFQUFDLFNBQVEsR0FBVCxFQUFhLFFBQU8sT0FBcEIsRUFBNEIsT0FBTSxTQUFsQyxFQUE0QyxRQUFPLE1BQW5ELEVBQTBELFNBQVEsR0FBbEUsRUFBc0UsT0FBTSxlQUE1RSxFQUE3VSxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsZUFBUyxDQUNQO0FBQ0VDLG1CQUFXLElBRGI7QUFFRUMsa0JBQVU7QUFGWixPQURPLEVBS1A7QUFDRUQsbUJBQVcsS0FEYjtBQUVFQyxrQkFBVTtBQUZaLE9BTE8sRUFTUDtBQUNFRCxtQkFBVyxLQURiO0FBRUVDLGtCQUFVO0FBRlosT0FUTyxFQWFQO0FBQ0VELG1CQUFXLEtBRGI7QUFFRUMsa0JBQVU7QUFGWixPQWJPLEVBaUJQO0FBQ0VELG1CQUFXLEtBRGI7QUFFRUMsa0JBQVU7QUFGWixPQWpCTztBQURKLEssUUF5QlBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDS0MsQ0FETCxFQUNRO0FBQ2QsYUFBS04sT0FBTCxDQUFhTyxHQUFiLENBQWlCLFVBQVVDLENBQVYsRUFBYUYsQ0FBYixFQUFnQjtBQUMvQkUsWUFBRVAsU0FBRixHQUFjLEtBQWQ7QUFDRCxTQUZEO0FBR0EsYUFBS0QsT0FBTCxDQUFhTSxDQUFiLEVBQWdCTCxTQUFoQixHQUE0QixJQUE1QjtBQUNEO0FBTk8sSyxRQVNWUSxNLEdBQVM7QUFDUEMsV0FBSyxhQUFVSixDQUFWLEVBQWFLLEVBQWIsRUFBaUI7QUFDcEIsYUFBS1gsT0FBTCxDQUFhTSxDQUFiLEVBQWdCTCxTQUFoQixHQUE0QlUsS0FBSyxLQUFMLEdBQWEsQ0FBQyxLQUFLWCxPQUFMLENBQWFNLENBQWIsRUFBZ0JMLFNBQTFEO0FBQ0Q7QUFITSxLOzs7Ozs2QkFNQSxDQUFFOzs7O0VBckR1QixlQUFLVyxJOztrQkFBbkJyQixLIiwiZmlsZSI6InBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvcG9wdXAvaW5kZXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzICBQb3B1cCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAncG9wdXAnXG4gIH1cbiAkcmVwZWF0ID0ge1wicG9wRGF0YVwiOntcImNvbVwiOlwicG9wdXBcIixcInByb3BzXCI6XCJcIn19O1xyXG4kcHJvcHMgPSB7XCJwb3B1cFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwicG9wRGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImlcIixcImtleVwiOlwicm93LXt7aW5kZXh9fVwifSxcInYtYmluZDpzaG93LnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbS5zaG93UG9wdXBcIixcImZvclwiOlwicG9wRGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImlcIixcImtleVwiOlwicm93LXt7aW5kZXh9fVwifSxcInYtYmluZDpwb3NpdGlvbi5zeW5jXCI6e1widmFsdWVcIjpcIml0ZW0ucG9zaXRpb25cIixcImZvclwiOlwicG9wRGF0YVwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImlcIixcImtleVwiOlwicm93LXt7aW5kZXh9fVwifSxcInYtYmluZDppZC5zeW5jXCI6e1widmFsdWVcIjpcImlcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcInBvcERhdGFcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpXCIsXCJrZXlcIjpcInJvdy17e2luZGV4fX1cIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBwb3B1cDogcG9wdXBcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcG9wRGF0YTogW1xuICAgICAge1xuICAgICAgICBzaG93UG9wdXA6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgcG9wUG9zaXRpb24gKGkpIHtcbiAgICAgIHRoaXMucG9wRGF0YS5tYXAoZnVuY3Rpb24gKHIsIGkpIHtcbiAgICAgICAgci5zaG93UG9wdXAgPSBmYWxzZVxuICAgICAgfSlcbiAgICAgIHRoaXMucG9wRGF0YVtpXS5zaG93UG9wdXAgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgIHBvcDogZnVuY3Rpb24gKGksIG9wKSB7XG4gICAgICB0aGlzLnBvcERhdGFbaV0uc2hvd1BvcHVwID0gb3AgPyBmYWxzZSA6ICF0aGlzLnBvcERhdGFbaV0uc2hvd1BvcHVwXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cbn1cbiJdfQ==
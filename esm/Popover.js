var _excluded = ["placement", "placementPrefix", "trigger", "offset"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';
function Popover(_ref) {
  var _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'right' : _ref$placement,
    _ref$placementPrefix = _ref.placementPrefix,
    placementPrefix = _ref$placementPrefix === void 0 ? 'bs-popover' : _ref$placementPrefix,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'click' : _ref$trigger,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? [0, 8] : _ref$offset,
    rest = _objectWithoutProperties(_ref, _excluded);
  var arrowClasses = classNames('popover-arrow', rest.arrowClassName);
  var popperClasses = classNames('popover', 'show', rest.popperClassName);
  var classes = classNames('popover-inner', rest.innerClassName);
  return /*#__PURE__*/React.createElement(TooltipPopoverWrapper, _extends({}, rest, {
    placement: placement,
    placementPrefix: placementPrefix,
    trigger: trigger,
    offset: offset,
    arrowClassName: arrowClasses,
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Popover.propTypes = propTypes;
export default Popover;
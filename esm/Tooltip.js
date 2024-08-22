var _excluded = ["placement", "autohide", "placementPrefix", "trigger"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import classNames from 'classnames';
import TooltipPopoverWrapper, { propTypes } from './TooltipPopoverWrapper';
function Tooltip(_ref) {
  var _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'top' : _ref$placement,
    _ref$autohide = _ref.autohide,
    autohide = _ref$autohide === void 0 ? true : _ref$autohide,
    _ref$placementPrefix = _ref.placementPrefix,
    placementPrefix = _ref$placementPrefix === void 0 ? 'bs-tooltip' : _ref$placementPrefix,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? 'hover focus' : _ref$trigger,
    rest = _objectWithoutProperties(_ref, _excluded);
  var arrowClasses = classNames('tooltip-arrow', rest.arrowClassName);
  var popperClasses = classNames('tooltip', 'show', rest.popperClassName);
  var classes = classNames('tooltip-inner', rest.innerClassName);
  return /*#__PURE__*/React.createElement(TooltipPopoverWrapper, _extends({}, rest, {
    placement: placement,
    autohide: autohide,
    placementPrefix: placementPrefix,
    trigger: trigger,
    arrowClassName: arrowClasses,
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Tooltip.propTypes = propTypes;
export default Tooltip;
"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([[906],{

/***/ 87923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(23029);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(92901);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15361);
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(52962);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(82284);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(89379);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64467);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68210);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48588);
/* harmony import */ var _PickerTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13454);
/* harmony import */ var _PickerPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90328);
/* harmony import */ var _hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14060);
/* harmony import */ var _utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55772);
/* harmony import */ var _utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3234);
/* harmony import */ var _PanelContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16663);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63340);
/* harmony import */ var _hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92059);
/* harmony import */ var _hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19150);
/* harmony import */ var _RangeContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56482);
/* harmony import */ var _hooks_useRangeDisabled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6303);
/* harmony import */ var _utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75541);
/* harmony import */ var _utils_getRanges__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50692);
/* harmony import */ var _hooks_useRangeViewDates__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46013);
/* harmony import */ var _hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94743);
/* harmony import */ var _utils_warnUtil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74120);






























function reorderValues(values, generateConfig) {
  if (values && values[0] && values[1] && generateConfig.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index]) {
    return true;
  }
  if (disabled[(index + 1) % 2]) {
    return true;
  }
  return false;
}
function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
    id = props.id,
    style = props.style,
    className = props.className,
    popupStyle = props.popupStyle,
    dropdownClassName = props.dropdownClassName,
    transitionName = props.transitionName,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    generateConfig = props.generateConfig,
    locale = props.locale,
    placeholder = props.placeholder,
    autoFocus = props.autoFocus,
    disabled = props.disabled,
    format = props.format,
    _props$picker = props.picker,
    picker = _props$picker === void 0 ? 'date' : _props$picker,
    showTime = props.showTime,
    use12Hours = props.use12Hours,
    _props$separator = props.separator,
    separator = _props$separator === void 0 ? '~' : _props$separator,
    value = props.value,
    defaultValue = props.defaultValue,
    defaultPickerValue = props.defaultPickerValue,
    open = props.open,
    defaultOpen = props.defaultOpen,
    disabledDate = props.disabledDate,
    _disabledTime = props.disabledTime,
    dateRender = props.dateRender,
    panelRender = props.panelRender,
    ranges = props.ranges,
    allowEmpty = props.allowEmpty,
    allowClear = props.allowClear,
    suffixIcon = props.suffixIcon,
    clearIcon = props.clearIcon,
    pickerRef = props.pickerRef,
    inputReadOnly = props.inputReadOnly,
    mode = props.mode,
    renderExtraFooter = props.renderExtraFooter,
    onChange = props.onChange,
    onOpenChange = props.onOpenChange,
    onPanelChange = props.onPanelChange,
    onCalendarChange = props.onCalendarChange,
    _onFocus = props.onFocus,
    onBlur = props.onBlur,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    _onOk = props.onOk,
    _onKeyDown = props.onKeyDown,
    components = props.components,
    order = props.order,
    direction = props.direction,
    activePickerIndex = props.activePickerIndex,
    _props$autoComplete = props.autoComplete,
    autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var needConfirmButton = picker === 'date' && !!showTime || picker === 'time';
  // We record opened status here in case repeat open with picker
  var openRecordsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var panelDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var startInputDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var endInputDivRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var separatorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var startInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var endInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // ============================ Warning ============================
  if (false) {}
  // ============================= Misc ==============================
  var formatList = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .toArray */ .$r)((0,_utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__/* .getDefaultFormat */ .n6)(format, picker, showTime, use12Hours));
  // Active picker
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(0, {
      value: activePickerIndex
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useMergedState, 2),
    mergedActivePickerIndex = _useMergedState2[0],
    setMergedActivePickerIndex = _useMergedState2[1];
  // Operation ref
  var operationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var mergedDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (Array.isArray(disabled)) {
      return disabled;
    }
    return [disabled || false, disabled || false];
  }, [disabled]);
  // ============================= Value =============================
  var _useMergedState3 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(null, {
      value: value,
      defaultValue: defaultValue,
      postState: function postState(values) {
        return picker === 'time' && !order ? values : reorderValues(values, generateConfig);
      }
    }),
    _useMergedState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useMergedState3, 2),
    mergedValue = _useMergedState4[0],
    setInnerValue = _useMergedState4[1];
  // =========================== View Date ===========================
  // Config view panel
  var _useRangeViewDates = (0,_hooks_useRangeViewDates__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)({
      values: mergedValue,
      picker: picker,
      defaultDates: defaultPickerValue,
      generateConfig: generateConfig
    }),
    _useRangeViewDates2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useRangeViewDates, 2),
    getViewDate = _useRangeViewDates2[0],
    setViewDate = _useRangeViewDates2[1];
  // ========================= Select Values =========================
  var _useMergedState5 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(mergedValue, {
      postState: function postState(values) {
        var postValues = values;
        if (mergedDisabled[0] && mergedDisabled[1]) {
          return postValues;
        }
        // Fill disabled unit
        for (var i = 0; i < 2; i += 1) {
          if (mergedDisabled[i] && !postValues && !(0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(postValues, i) && !(0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(allowEmpty, i)) {
            postValues = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(postValues, generateConfig.getNow(), i);
          }
        }
        return postValues;
      }
    }),
    _useMergedState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useMergedState5, 2),
    selectedValue = _useMergedState6[0],
    setSelectedValue = _useMergedState6[1];
  // ============================= Modes =============================
  var _useMergedState7 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)([picker, picker], {
      value: mode
    }),
    _useMergedState8 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useMergedState7, 2),
    mergedModes = _useMergedState8[0],
    setInnerModes = _useMergedState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setInnerModes([picker, picker]);
  }, [picker]);
  var triggerModesChange = function triggerModesChange(modes, values) {
    setInnerModes(modes);
    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  };
  // ========================= Disable Date ==========================
  var _useRangeDisabled = (0,_hooks_useRangeDisabled__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)({
      picker: picker,
      selectedValue: selectedValue,
      locale: locale,
      disabled: mergedDisabled,
      disabledDate: disabledDate,
      generateConfig: generateConfig
    }, openRecordsRef.current[1], openRecordsRef.current[0]),
    _useRangeDisabled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useRangeDisabled, 2),
    disabledStartDate = _useRangeDisabled2[0],
    disabledEndDate = _useRangeDisabled2[1];
  // ============================= Open ==============================
  var _useMergedState9 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(false, {
      value: open,
      defaultValue: defaultOpen,
      postState: function postState(postOpen) {
        return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
      },
      onChange: function onChange(newOpen) {
        if (onOpenChange) {
          onOpenChange(newOpen);
        }
        if (!newOpen && operationRef.current && operationRef.current.onClose) {
          operationRef.current.onClose();
        }
      }
    }),
    _useMergedState10 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useMergedState9, 2),
    mergedOpen = _useMergedState10[0],
    triggerInnerOpen = _useMergedState10[1];
  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1;
  // ============================= Popup =============================
  // Popup min width
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState, 2),
    popupMinWidth = _useState2[0],
    setPopupMinWidth = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!mergedOpen && containerRef.current) {
      setPopupMinWidth(containerRef.current.offsetWidth);
    }
  }, [mergedOpen]);
  // ============================ Trigger ============================
  var triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  function _triggerOpen(newOpen, index) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index] = true;
      setMergedActivePickerIndex(index);
      triggerInnerOpen(newOpen);
      // Open to reset view date
      if (!mergedOpen) {
        setViewDate(null, index);
      }
    } else if (mergedActivePickerIndex === index) {
      triggerInnerOpen(newOpen);
      // Clean up async
      // This makes ref not quick refresh in case user open another input with blur trigger
      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function () {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }
  function triggerOpenAndFocus(index) {
    _triggerOpen(true, index);
    // Use setTimeout to make sure panel DOM exists
    setTimeout(function () {
      var inputRef = [startInputRef, endInputRef][index];
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }
  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(values, 0);
    var endValue = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(values, 1);
    // >>>>> Format start & end values
    if (startValue && endValue && generateConfig.isAfter(startValue, endValue)) {
      if (
      // WeekPicker only compare week
      picker === 'week' && !(0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .isSameWeek */ .Rz)(generateConfig, locale.locale, startValue, endValue) ||
      // QuotaPicker only compare week
      picker === 'quarter' && !(0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .isSameQuarter */ .d4)(generateConfig, startValue, endValue) ||
      // Other non-TimePicker compare date
      picker !== 'week' && picker !== 'quarter' && picker !== 'time' && !(0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .isSameDate */ .ny)(generateConfig, startValue, endValue)) {
        // Clean up end date when start date is after end date
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        }
        // Clean up cache since invalidate
        openRecordsRef.current = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)({}, sourceIndex, true);
      } else if (picker !== 'time' || order !== false) {
        // Reorder when in same date
        values = reorderValues(values, generateConfig);
      }
    }
    setSelectedValue(values);
    var startStr = values && values[0] ? (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .formatValue */ .Fl)(values[0], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';
    var endStr = values && values[1] ? (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .formatValue */ .Fl)(values[1], {
      generateConfig: generateConfig,
      locale: locale,
      format: formatList[0]
    }) : '';
    if (onCalendarChange) {
      var info = {
        range: sourceIndex === 0 ? 'start' : 'end'
      };
      onCalendarChange(values, [startStr, endStr], info);
    }
    // >>>>> Trigger `onChange` event
    var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled, allowEmpty);
    var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled, allowEmpty);
    var canTrigger = values === null || canStartValueTrigger && canEndValueTrigger;
    if (canTrigger) {
      // Trigger onChange only when value is validate
      setInnerValue(values);
      if (onChange && (!(0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .isEqual */ .n4)(generateConfig, (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(mergedValue, 0), startValue) || !(0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .isEqual */ .n4)(generateConfig, (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(mergedValue, 1), endValue))) {
        onChange(values, [startStr, endStr]);
      }
    }
    // >>>>> Open picker when
    // Always open another picker if possible
    var nextOpenIndex = null;
    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }
    if (nextOpenIndex !== null && nextOpenIndex !== mergedActivePickerIndex && (!openRecordsRef.current[nextOpenIndex] || !(0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(values, nextOpenIndex)) && (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(values, sourceIndex)) {
      // Delay to focus to avoid input blur trigger expired selectedValues
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }
  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */
    /* eslint-disable no-lone-blocks */
    {
      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  };
  // ============================= Text ==============================
  var sharedTextHooksProps = {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale
  };
  var _useValueTexts = (0,_hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, 0), sharedTextHooksProps),
    _useValueTexts2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useValueTexts, 2),
    startValueTexts = _useValueTexts2[0],
    firstStartValueText = _useValueTexts2[1];
  var _useValueTexts3 = (0,_hooks_useValueTexts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, 1), sharedTextHooksProps),
    _useValueTexts4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useValueTexts3, 2),
    endValueTexts = _useValueTexts4[0],
    firstEndValueText = _useValueTexts4[1];
  var _onTextChange = function onTextChange(newText, index) {
    var inputDate = (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .parseValue */ .$x)(newText, {
      locale: locale,
      formatList: formatList,
      generateConfig: generateConfig
    });
    var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;
    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(selectedValue, inputDate, index));
      setViewDate(inputDate, index);
    }
  };
  var _useTextValueMapping = (0,_hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)({
      valueTexts: startValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 0);
      }
    }),
    _useTextValueMapping2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useTextValueMapping, 3),
    startText = _useTextValueMapping2[0],
    triggerStartTextChange = _useTextValueMapping2[1],
    resetStartText = _useTextValueMapping2[2];
  var _useTextValueMapping3 = (0,_hooks_useTextValueMapping__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)({
      valueTexts: endValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 1);
      }
    }),
    _useTextValueMapping4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useTextValueMapping3, 3),
    endText = _useTextValueMapping4[0],
    triggerEndTextChange = _useTextValueMapping4[1],
    resetEndText = _useTextValueMapping4[2];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState3, 2),
    rangeHoverValue = _useState4[0],
    setRangeHoverValue = _useState4[1];
  // ========================== Hover Range ==========================
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useState5, 2),
    hoverRangedValue = _useState6[0],
    setHoverRangedValue = _useState6[1];
  var _useHoverValue = (0,_hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(startText, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale
    }),
    _useHoverValue2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useHoverValue, 3),
    startHoverValue = _useHoverValue2[0],
    onStartEnter = _useHoverValue2[1],
    onStartLeave = _useHoverValue2[2];
  var _useHoverValue3 = (0,_hooks_useHoverValue__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(endText, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale
    }),
    _useHoverValue4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_useHoverValue3, 3),
    endHoverValue = _useHoverValue4[0],
    onEndEnter = _useHoverValue4[1],
    onEndLeave = _useHoverValue4[2];
  var onDateMouseEnter = function onDateMouseEnter(date) {
    setHoverRangedValue((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(selectedValue, date, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };
  var onDateMouseLeave = function onDateMouseLeave() {
    setHoverRangedValue((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(selectedValue, null, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  };
  // ============================= Input =============================
  var getSharedInputHookProps = function getSharedInputHookProps(index, resetText) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown: forwardKeyDown,
      onBlur: onBlur,
      isClickOutside: function isClickOutside(target) {
        return !(0,_utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__/* .elementsContains */ .P5)([panelDivRef.current, startInputDivRef.current, endInputDivRef.current, containerRef.current], target);
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index);
        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index);
      },
      onSubmit: function onSubmit() {
        if (
        // When user typing disabledDate with keyboard and enter, this value will be empty
        !selectedValue ||
        // Normal disabled check
        disabledDate && disabledDate(selectedValue[index])) {
          return false;
        }
        triggerChange(selectedValue, index);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index);
        setSelectedValue(mergedValue);
        resetText();
      }
    };
  };
  var currentFocusedKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var _usePickerInput = (0,_hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)({}, getSharedInputHookProps(0, resetStartText)), {}, {
      open: startOpen,
      value: startText,
      currentFocusedKey: currentFocusedKey,
      key: 'start',
      onKeyDown: function onKeyDown(e, preventDefault) {
        _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
      }
    })),
    _usePickerInput2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_usePickerInput, 2),
    startInputProps = _usePickerInput2[0],
    _usePickerInput2$ = _usePickerInput2[1],
    startFocused = _usePickerInput2$.focused,
    startTyping = _usePickerInput2$.typing;
  var _usePickerInput3 = (0,_hooks_usePickerInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)({}, getSharedInputHookProps(1, resetEndText)), {}, {
      open: endOpen,
      value: endText,
      currentFocusedKey: currentFocusedKey,
      key: 'end',
      onKeyDown: function onKeyDown(e, preventDefault) {
        _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
      }
    })),
    _usePickerInput4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_usePickerInput3, 2),
    endInputProps = _usePickerInput4[0],
    _usePickerInput4$ = _usePickerInput4[1],
    endFocused = _usePickerInput4$.focused,
    endTyping = _usePickerInput4$.typing;
  // ========================== Click Picker ==========================
  var onPickerClick = function onPickerClick(e) {
    // When click inside the picker & outside the picker's input elements
    // the panel should still be opened
    if (onClick) {
      onClick(e);
    }
    if (!mergedOpen && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };
  var onPickerMouseDown = function onPickerMouseDown(e) {
    // shouldn't affect input elements if picker is active
    if (onMouseDown) {
      onMouseDown(e);
    }
    if (mergedOpen && (startFocused || endFocused) && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };
  // ============================= Sync ==============================
  // Close should sync back with text value
  var startStr = mergedValue && mergedValue[0] ? (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .formatValue */ .Fl)(mergedValue[0], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  var endStr = mergedValue && mergedValue[1] ? (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .formatValue */ .Fl)(mergedValue[1], {
    locale: locale,
    format: 'YYYYMMDDHHmmss',
    generateConfig: generateConfig
  }) : '';
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!mergedOpen) {
      setSelectedValue(mergedValue);
      if (!startValueTexts.length || startValueTexts[0] === '') {
        triggerStartTextChange('');
      } else if (firstStartValueText !== startText) {
        resetStartText();
      }
      if (!endValueTexts.length || endValueTexts[0] === '') {
        triggerEndTextChange('');
      } else if (firstEndValueText !== endText) {
        resetEndText();
      }
    }
  }, [mergedOpen, startValueTexts, endValueTexts]);
  // Sync innerValue with control mode
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSelectedValue(mergedValue);
  }, [startStr, endStr]);
  // ============================ Warning ============================
  if (false) {}
  // ============================ Private ============================
  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }
        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      }
    };
  }
  // ============================ Ranges =============================
  var rangeLabels = Object.keys(ranges || {});
  var rangeList = rangeLabels.map(function (label) {
    var range = ranges[label];
    var newValues = typeof range === 'function' ? range() : range;
    return {
      label: label,
      onClick: function onClick() {
        triggerChange(newValues, null);
        _triggerOpen(false, mergedActivePickerIndex);
      },
      onMouseEnter: function onMouseEnter() {
        setRangeHoverValue(newValues);
      },
      onMouseLeave: function onMouseLeave() {
        setRangeHoverValue(null);
      }
    };
  });
  // ============================= Panel =============================
  function renderPanel() {
    var panelPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var panelProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var panelHoverRangedValue = null;
    if (mergedOpen && hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1] && generateConfig.isAfter(hoverRangedValue[1], hoverRangedValue[0])) {
      panelHoverRangedValue = hoverRangedValue;
    }
    var panelShowTime = showTime;
    if (showTime && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A)(showTime) === 'object' && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)({}, showTime), {}, {
        defaultValue: (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(timeDefaultValues, mergedActivePickerIndex) || undefined
      });
    }
    var panelDateRender = null;
    if (dateRender) {
      panelDateRender = function panelDateRender(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? 'end' : 'start'
        });
      };
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RangeContext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.Provider, {
      value: {
        inRange: true,
        panelPosition: panelPosition,
        rangedValue: rangeHoverValue || selectedValue,
        hoverRangedValue: panelHoverRangedValue
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PickerPanel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)({}, props, panelProps, {
      dateRender: panelDateRender,
      showTime: panelShowTime,
      mode: mergedModes[mergedActivePickerIndex],
      generateConfig: generateConfig,
      style: undefined,
      direction: direction,
      disabledDate: mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
      disabledTime: function disabledTime(date) {
        if (_disabledTime) {
          return _disabledTime(date, mergedActivePickerIndex === 0 ? 'start' : 'end');
        }
        return false;
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)({}, "".concat(prefixCls, "-panel-focused"), mergedActivePickerIndex === 0 ? !startTyping : !endTyping)),
      value: (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, mergedActivePickerIndex),
      locale: locale,
      tabIndex: -1,
      onPanelChange: function onPanelChange(date, newMode) {
        // clear hover value when panel change
        if (mergedActivePickerIndex === 0) {
          onStartLeave(true);
        }
        if (mergedActivePickerIndex === 1) {
          onEndLeave(true);
        }
        triggerModesChange((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(mergedModes, newMode, mergedActivePickerIndex), (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(selectedValue, date, mergedActivePickerIndex));
        var viewDate = date;
        if (panelPosition === 'right' && mergedModes[mergedActivePickerIndex] === newMode) {
          viewDate = (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .getClosingViewDate */ .XC)(viewDate, newMode, generateConfig, -1);
        }
        setViewDate(viewDate, mergedActivePickerIndex);
      },
      onOk: null,
      onSelect: undefined,
      onChange: undefined,
      defaultValue: mergedActivePickerIndex === 0 ? (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, 1) : (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, 0)
    })));
  }
  var arrowLeft = 0;
  var panelLeft = 0;
  if (mergedActivePickerIndex && startInputDivRef.current && separatorRef.current && panelDivRef.current) {
    // Arrow offset
    arrowLeft = startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;
    // If panelWidth - arrowWidth - arrowMarginLeft < arrowLeft, panel should move to right side.
    // If arrowOffsetLeft > arrowLeft, arrowMarginLeft = arrowOffsetLeft - arrowLeft
    var arrowMarginLeft = arrowRef.current.offsetLeft > arrowLeft ? arrowRef.current.offsetLeft - arrowLeft : arrowRef.current.offsetLeft;
    if (panelDivRef.current.offsetWidth && arrowRef.current.offsetWidth && arrowLeft > panelDivRef.current.offsetWidth - arrowRef.current.offsetWidth - (direction === 'rtl' ? 0 : arrowMarginLeft)) {
      panelLeft = arrowLeft;
    }
  }
  var arrowPositionStyle = direction === 'rtl' ? {
    right: arrowLeft
  } : {
    left: arrowLeft
  };
  function renderPanels() {
    var panels;
    var extraNode = (0,_utils_getExtraFooter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(prefixCls, mergedModes[mergedActivePickerIndex], renderExtraFooter);
    var rangesNode = (0,_utils_getRanges__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !(0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, mergedActivePickerIndex) || disabledDate && disabledDate(selectedValue[mergedActivePickerIndex]),
      locale: locale,
      rangeList: rangeList,
      onOk: function onOk() {
        if ((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(selectedValue, mergedActivePickerIndex)) {
          // triggerChangeOld(selectedValue);
          triggerChange(selectedValue, mergedActivePickerIndex);
          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      }
    });
    if (picker !== 'time' && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = (0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .getClosingViewDate */ .XC)(viewDate, picker, generateConfig);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        }
      });
      var rightPanel = renderPanel('right', {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate((0,_utils_dateUtil__WEBPACK_IMPORTED_MODULE_9__/* .getClosingViewDate */ .XC)(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex);
        }
      });
      if (direction === 'rtl') {
        panels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, rightPanel, showDoublePanel && leftPanel);
      } else {
        panels = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, leftPanel, showDoublePanel && rightPanel);
      }
    } else {
      panels = renderPanel();
    }
    var mergedNodes = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(prefixCls, "-panels")
    }, panels), (extraNode || rangesNode) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, extraNode, rangesNode));
    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "".concat(prefixCls, "-panel-container"),
      style: {
        marginLeft: panelLeft
      },
      ref: panelDivRef,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
      }
    }, mergedNodes);
  }
  var rangePanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-range-wrapper"), "".concat(prefixCls, "-").concat(picker, "-range-wrapper")),
    style: {
      minWidth: popupMinWidth
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: arrowRef,
    className: "".concat(prefixCls, "-range-arrow"),
    style: arrowPositionStyle
  }), renderPanels());
  // ============================= Icons =============================
  var suffixNode;
  if (suffixIcon) {
    suffixNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, suffixIcon);
  }
  var clearNode;
  if (allowClear && ((0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(mergedValue, 0) && !mergedDisabled[0] || (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(mergedValue, 1) && !mergedDisabled[1])) {
    clearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        e.stopPropagation();
      },
      onMouseUp: function onMouseUp(e) {
        e.preventDefault();
        e.stopPropagation();
        var values = mergedValue;
        if (!mergedDisabled[0]) {
          values = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(values, null, 0);
        }
        if (!mergedDisabled[1]) {
          values = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(values, null, 1);
        }
        triggerChange(values, null);
        _triggerOpen(false, mergedActivePickerIndex);
      },
      className: "".concat(prefixCls, "-clear")
    }, clearIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "".concat(prefixCls, "-clear-btn")
    }));
  }
  var inputSharedProps = {
    size: (0,_utils_uiUtil__WEBPACK_IMPORTED_MODULE_7__/* .getInputSize */ .Ax)(picker, formatList[0], generateConfig)
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;
  if (startInputDivRef.current && endInputDivRef.current && separatorRef.current) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }
  var activeBarPositionStyle = direction === 'rtl' ? {
    right: activeBarLeft
  } : {
    left: activeBarLeft
  };
  // ============================ Return =============================
  var onContextSelect = function onContextSelect(date, type) {
    var values = (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .updateValues */ .I6)(selectedValue, date, mergedActivePickerIndex);
    if (type === 'submit' || type !== 'key' && !needConfirmButton) {
      // triggerChange will also update selected values
      triggerChange(values, mergedActivePickerIndex);
      // clear hover value style
      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Provider, {
    value: {
      operationRef: operationRef,
      hideHeader: picker === 'time',
      onDateMouseEnter: onDateMouseEnter,
      onDateMouseLeave: onDateMouseLeave,
      hideRanges: true,
      onSelect: onContextSelect,
      open: mergedOpen
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PickerTrigger__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    visible: mergedOpen,
    popupElement: rangePanel,
    popupStyle: popupStyle,
    prefixCls: prefixCls,
    dropdownClassName: dropdownClassName,
    dropdownAlign: dropdownAlign,
    getPopupContainer: getPopupContainer,
    transitionName: transitionName,
    range: true,
    direction: direction
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)({
    ref: containerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, "".concat(prefixCls, "-range"), className, (_classNames2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-disabled"), mergedDisabled[0] && mergedDisabled[1]), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-focused"), mergedActivePickerIndex === 0 ? startFocused : endFocused), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2)),
    style: style,
    onClick: onPickerClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseDown: onPickerMouseDown,
    onMouseUp: onMouseUp
  }, (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay)(props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-input"), (_classNames3 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames3, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 0), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames3, "".concat(prefixCls, "-input-placeholder"), !!startHoverValue), _classNames3)),
    ref: startInputDivRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)({
    id: id,
    disabled: mergedDisabled[0],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !startTyping,
    value: startHoverValue || startText,
    onChange: function onChange(e) {
      triggerStartTextChange(e.target.value);
    },
    autoFocus: autoFocus,
    placeholder: (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(placeholder, 0) || '',
    ref: startInputRef
  }, startInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(prefixCls, "-range-separator"),
    ref: separatorRef
  }, separator), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-input"), (_classNames4 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames4, "".concat(prefixCls, "-input-active"), mergedActivePickerIndex === 1), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(_classNames4, "".concat(prefixCls, "-input-placeholder"), !!endHoverValue), _classNames4)),
    ref: endInputDivRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)({
    disabled: mergedDisabled[1],
    readOnly: inputReadOnly || typeof formatList[0] === 'function' || !endTyping,
    value: endHoverValue || endText,
    onChange: function onChange(e) {
      triggerEndTextChange(e.target.value);
    },
    placeholder: (0,_utils_miscUtil__WEBPACK_IMPORTED_MODULE_19__/* .getValue */ ._W)(placeholder, 1) || '',
    ref: endInputRef
  }, endInputProps, inputSharedProps, {
    autoComplete: autoComplete
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat(prefixCls, "-active-bar"),
    style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)({}, activeBarPositionStyle), {}, {
      width: activeBarWidth,
      position: 'absolute'
    })
  }), suffixNode, clearNode)));
}
// Wrap with class component to enable pass generic with instance method
var RangePicker = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A)(RangePicker, _React$Component);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(RangePicker);
  function RangePicker() {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A)(this, RangePicker);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.pickerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };
    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A)(RangePicker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InnerRangePicker, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)({}, this.props, {
        pickerRef: this.pickerRef
      }));
    }
  }]);
  return RangePicker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangePicker);

/***/ })

}]);
//# sourceMappingURL=lib.0f237248.04c73.js.map
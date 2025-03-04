"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([[583],{

/***/ 87937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   F: () => (/* binding */ isMultiple)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(82284);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64467);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60436);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5544);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89379);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53986);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32485);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30981);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48588);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68430);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16928);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8719);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);
/* harmony import */ var _hooks_useBaseProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14645);
/* harmony import */ var _hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17600);
/* harmony import */ var _hooks_useLock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41697);
/* harmony import */ var _hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36863);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94474);
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75630);
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35854);
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87501);







var _excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];















var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];
function isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.forwardRef(function (props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    showArrow = props.showArrow,
    inputIcon = props.inputIcon,
    clearIcon = props.clearIcon,
    OptionList = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(props, _excluded);

  // ============================== MISC ==============================
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
  var domProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function (propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
    delete domProps[propName];
  });

  // ============================= Mobile =============================
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__.useState(false),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    // Only update on the client side
    setMobile((0,rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)());
  }, []);

  // ============================== Refs ==============================
  var containerRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);
  var selectorDomRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);
  var triggerRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);
  var selectorRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);
  var listRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(null);

  /** Used for component focused management */
  var _useDelayReset = (0,_hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(),
    _useDelayReset2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];

  // =========================== Imperative ===========================
  react__WEBPACK_IMPORTED_MODULE_5__.useImperativeHandle(ref, function () {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });

  // ========================== Search Value ==========================
  var mergedSearchValue = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(function () {
    var _displayValues$;
    if (mode !== 'combobox') {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
  }, [searchValue, mode, displayValues]);

  // ========================== Custom Input ==========================
  // Only works in `combobox`
  var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null;

  // Used for customize replacement for `rc-cascader`
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_4__/* .useComposeRef */ .xK)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);

  // ============================== Open ==============================
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(undefined, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = innerOpen;

  // Not trigger `open` in `combobox` when `notFoundContent` is empty
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = react__WEBPACK_IMPORTED_MODULE_5__.useCallback(function (newOpen) {
    var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);

  // ============================= Search =============================
  var tokenWithEnter = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(function () {
    return (tokenSeparators || []).some(function (tokenSeparator) {
      return ['\n', '\r\n'].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);

    // Check if match the `tokenSeparators`
    var patchLabels = isCompositing ? null : (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_13__/* .getSeparatedContent */ .V7)(searchText, tokenSeparators);

    // Ignore combobox since it's not split-able
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);

      // Should close when paste finish
      onToggleOpen(false);

      // Tell Selector that break next actions
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };

  // Only triggered when menu is closed & mode is tags
  // If menu is open, OptionList will take charge
  // If mode isn't tags, press enter is not meaningful when you can't see any option
  var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
    // prevent empty tags from appearing when you click the Enter button
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };

  // Close will clean up single mode search text
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (!mergedOpen && !multiple && mode !== 'combobox') {
      onInternalSearch('', false, false);
    }
  }, [mergedOpen]);

  // ============================ Disabled ============================
  // Close dropdown & remove focus state when disabled change
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled) {
      setMockFocused(false);
    }
  }, [disabled]);

  // ============================ Keyboard ============================
  /**
   * We record input value here to check if can press to clean up by backspace
   * - null: Key is not down, this is reset by key up
   * - true: Search text is empty when first time backspace down
   * - false: Search text is not empty when first time backspace down
   */
  var _useLock = (0,_hooks_useLock__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(),
    _useLock2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];

  // KeyDown
  var onInternalKeyDown = function onInternalKeyDown(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.ENTER) {
      // Do not submit form when type in the input
      if (mode !== 'combobox') {
        event.preventDefault();
      }

      // We only manage open state here, close logic should handle by list component
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);

    // Remove value by `backspace`
    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };

  // KeyUp
  var onInternalKeyUp = function onInternalKeyUp(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };

  // ============================ Selector ============================
  var onSelectorRemove = function onSelectorRemove(val) {
    var newValues = displayValues.filter(function (i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };

  // ========================== Focus / Blur ==========================
  /** Record real focus status */
  var focusRef = react__WEBPACK_IMPORTED_MODULE_5__.useRef(false);
  var onContainerFocus = function onContainerFocus() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }

      // `showAction` should handle `focus` if set
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur() {
    setMockFocused(false, function () {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      // `tags` mode should move `searchValue` into values
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        // `multiple` mode only clean the search value but not trigger event
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };

  // Give focus back of Select
  var activeTimeoutIds = [];
  react__WEBPACK_IMPORTED_MODULE_5__.useEffect(function () {
    return function () {
      activeTimeoutIds.forEach(function (timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();

    // We should give focus back to selector if clicked item is not focusable
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function () {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };

  // ============================ Dropdown ============================
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__.useState(null),
    _React$useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_React$useState3, 2),
    containerWidth = _React$useState4[0],
    setContainerWidth = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5__.useState({}),
    _React$useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_React$useState5, 2),
    forceUpdate = _React$useState6[1];
  // We need force update here since popup dom is render async
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function () {
    if (triggerOpen) {
      var _containerRef$current;
      var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);
      if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
        setContainerWidth(newWidth);
      }
    }
  }, [triggerOpen]);

  // Used for raw custom input trigger
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
      onToggleOpen(newOpen);
    };
  }

  // Close when click on non-select element
  (0,_hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function () {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);

  // ============================ Context =============================
  var baseSelectContext = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(function () {
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)({}, props), {}, {
      notFoundContent: notFoundContent,
      open: mergedOpen,
      triggerOpen: triggerOpen,
      id: id,
      showSearch: mergedShowSearch,
      multiple: multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);

  // ==================================================================
  // ==                            Render                            ==
  // ==================================================================

  // ============================= Arrow ==============================
  var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
  var arrowNode;
  if (mergedShowArrow) {
    arrowNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_TransBtn__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls, "-arrow"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading: loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }

  // ============================= Clear ==============================
  var clearNode;
  var onClearMouseDown = function onClearMouseDown() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 ? void 0 : onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
    clearNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_TransBtn__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: clearIcon
    }, "\xD7");
  }

  // =========================== OptionList ===========================
  var optionList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(OptionList, {
    ref: listRef
  });

  // ============================= Select =============================
  var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, (_classNames2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));

  // >>> Selector
  var selectorNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_SelectTrigger__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    ref: triggerRef,
    disabled: disabled,
    prefixCls: prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    containerWidth: containerWidth,
    animation: animation,
    transitionName: transitionName,
    dropdownStyle: dropdownStyle,
    dropdownClassName: dropdownClassName,
    direction: direction,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    dropdownRender: dropdownRender,
    dropdownAlign: dropdownAlign,
    placement: placement,
    getPopupContainer: getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter: onPopupMouseEnter
  }, customizeRawInputElement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_Selector__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)({}, props, {
    domRef: selectorDomRef,
    prefixCls: prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id: id,
    showSearch: mergedShowSearch,
    autoClearSearchValue: autoClearSearchValue,
    mode: mode,
    activeDescendantId: activeDescendantId,
    tagRender: tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen: onToggleOpen,
    activeValue: activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter: tokenWithEnter
  })));

  // >>> Render
  var renderNode;

  // Render raw
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function (_ref) {
      var label = _ref.label,
        value = _ref.value;
      return ['number', 'string'].includes((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(label)) ? label : value;
    }).join(', '))), selectorNode, arrowNode, clearNode);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_hooks_useBaseProps__WEBPACK_IMPORTED_MODULE_6__/* .BaseSelectContext */ .t.Provider, {
    value: baseSelectContext
  }, renderNode);
});

// Set display name for dev
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseSelect);

/***/ })

}]);
//# sourceMappingURL=lib.16f430b9.88cf4.js.map
"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([[272],{

/***/ 20432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60436);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64467);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(89379);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5544);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(53986);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82284);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48588);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96540);
/* harmony import */ var _BaseSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87937);
/* harmony import */ var _hooks_useCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26082);
/* harmony import */ var _hooks_useFilterOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _hooks_useId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3979);
/* harmony import */ var _hooks_useOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75362);
/* harmony import */ var _hooks_useRefFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95207);
/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26624);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29185);
/* harmony import */ var _OptionList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26707);
/* harmony import */ var _SelectContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9477);
/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22987);
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87501);
/* harmony import */ var _utils_warningPropsUtil__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36120);







var _excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */

















var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(value) !== 'object';
}
var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(props, _excluded);
  var mergedId = (0,_hooks_useId__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay)(id);
  var multiple = (0,_BaseSelect__WEBPACK_IMPORTED_MODULE_3__/* .isMultiple */ .F)(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    if (filterOption === undefined && mode === 'combobox') {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);

  // ========================= FieldNames =========================
  var mergedFieldNames = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_14__/* .fillFieldNames */ .AZ)(fieldNames, childrenAsData);
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [
  // We stringify fieldNames to avoid unnecessary re-renders.
  JSON.stringify(fieldNames), childrenAsData]
  /* eslint-enable react-hooks/exhaustive-deps */);

  // =========================== Search ===========================
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('', {
      value: searchValue !== undefined ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];

  // =========================== Option ===========================
  var parsedOptions = (0,_hooks_useOptions__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;

  // ========================= Wrap Value =========================
  var convert2LabelValues = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (draftValues) {
    // Convert to array
    var valueList = (0,_utils_commonUtil__WEBPACK_IMPORTED_MODULE_13__/* .toArray */ .$r)(draftValues);

    // Convert to labelInValue type
    return valueList.map(function (val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;

      // Fill label & value
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option = valueOptions.get(rawValue);
      if (option) {
        var _option$key;
        // Fill missing props
        if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
        if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        rawTitle = option === null || option === void 0 ? void 0 : option.title;

        // Warning if label not same as provided
        if (false) { var optionLabel; }
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);

  // =========================== Values ===========================
  var _useMergedState3 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(defaultValue, {
      value: value
    }),
    _useMergedState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];

  // Merged value with LabelValueType
  var rawLabeledValues = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var _values$;
    var values = convert2LabelValues(internalValue);

    // combobox no need save value when it's no value
    if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);

  // Fill label with cache to avoid option remove
  var _useCache = (0,_hooks_useCache__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(rawLabeledValues, valueOptions),
    _useCache2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    // `null` need show as placeholder instead
    // https://github.com/ant-design/ant-design/issues/25057
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
        return [];
      }
    }
    return mergedValues.map(function (item) {
      var _item$label;
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);

  /** Convert `displayValues` to raw value type set */
  var rawValues = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return new Set(mergedValues.map(function (val) {
      return val.value;
    }));
  }, [mergedValues]);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    if (mode === 'combobox') {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue((0,_utils_commonUtil__WEBPACK_IMPORTED_MODULE_13__/* .hasValue */ .a4)(strValue) ? String(strValue) : '');
    }
  }, [mergedValues]);

  // ======================= Display Option =======================
  // Create a placeholder item if not exist in `options`
  var createTagOption = (0,_hooks_useRefFunc__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function (val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_ref, mergedFieldNames.value, val), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });

  // Fill tag as option if mode is `tags`
  var filledTagOptions = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    if (mode !== 'tags') {
      return mergedOptions;
    }

    // >>> Tag mode
    var cloneOptions = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(mergedOptions);

    // Check if value exist in options (include new patch item)
    var existOptions = function existOptions(val) {
      return valueOptions.has(val);
    };

    // Fill current value as option
    (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(mergedValues).sort(function (a, b) {
      return a.value < b.value ? -1 : 1;
    }).forEach(function (item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = (0,_hooks_useFilterOptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);

  // Fill options with search value if needed
  var filledSearchOptions = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
      return item[optionFilterProp || 'value'] === mergedSearchValue;
    })) {
      return filteredOptions;
    }

    // Fill search value as option
    return [createTagOption(mergedSearchValue)].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
  var orderedFilteredOptions = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(filledSearchOptions).sort(function (a, b) {
      return filterSort(a, b);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_14__/* .flattenOptions */ .XJ)(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData: childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);

  // =========================== Change ===========================
  var triggerChange = function triggerChange(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && (
    // Trigger event only when value changed
    labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
        return v.value;
      });
      var returnOptions = labeledValues.map(function (v) {
        return (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_14__/* .injectPropsWithOption */ .Bz)(getMixedOption(v.value));
      });
      onChange(
      // Value
      multiple ? returnValues : returnValues[0],
      // Option
      multiple ? returnOptions : returnOptions[0]);
    }
  };

  // ======================= Accessibility ========================
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(null),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(0),
    _React$useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (active, index) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$source = _ref2.source,
      source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
    setAccessibilityIndex(index);
    if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);

  // ========================= OptionList =========================
  var triggerSelect = function triggerSelect(val, selected, type) {
    var getSelectEnt = function getSelectEnt() {
      var _option$key2;
      var option = getMixedOption(val);
      return [labelInValue ? {
        label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, (0,_utils_valueUtil__WEBPACK_IMPORTED_MODULE_14__/* .injectPropsWithOption */ .Bz)(option)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };

  // Used for OptionList selection
  var onInternalSelect = (0,_hooks_useRefFunc__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function (val, info) {
    var cloneValues;

    // Single mode always trigger select only with option list
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function (v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);

    // Clean search value if single or configured
    if (mode === 'combobox') {
      // setSearchValue(String(val));
      setActiveValue('');
    } else if (!_BaseSelect__WEBPACK_IMPORTED_MODULE_3__/* .isMultiple */ .F || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });

  // ======================= Display Change =======================
  // BaseSelect display values change
  var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function (item) {
        triggerSelect(item.value, false, type);
      });
    }
  };

  // =========================== Search ===========================
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);

    // [Submit] Tag mode should flush input
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      // prevent empty tags from appearing when you click the Enter button
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words.map(function (word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function (val) {
        return val !== undefined;
      });
    }
    var newRawValues = Array.from(new Set([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(rawValues), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A)(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function (newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };

  // ========================== Context ===========================
  var selectContext = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(function () {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: menuItemSelectedIcon,
      rawValues: rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: listHeight,
      listItemHeight: listItemHeight,
      childrenAsData: childrenAsData
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]);

  // ========================== Warning ===========================
  if (false) {}

  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_SelectContext__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.Provider, {
    value: selectContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_BaseSelect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls: prefixCls,
    ref: ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode: mode
    // >>> Values
    ,
    displayValues: displayValues,
    onDisplayValuesChange: onDisplayValuesChange
    // >>> Search
    ,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue: autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
    // >>> OptionList
    ,
    OptionList: _OptionList__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,
    emptyOptions: !displayOptions.length
    // >>> Accessibility
    ,
    activeValue: activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
if (false) {}
var TypedSelect = Select;
TypedSelect.Option = _Option__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A;
TypedSelect.OptGroup = _OptGroup__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypedSelect);

/***/ })

}]);
//# sourceMappingURL=lib.f83fe7dc.0700c.js.map
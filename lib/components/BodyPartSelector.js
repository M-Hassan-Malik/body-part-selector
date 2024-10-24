"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _types = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // Import necessary dependencies and components
// Define props interface for BodyPartSelector component
var BodyPartSelector = function BodyPartSelector(_ref) {
  var _options$find;
  var onInjuriyChange = _ref.onInjuriyChange;
  // State variables
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    hoverPart = _useState2[0],
    setHoverPart = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isModalOpen = _useState4[0],
    setIsModalOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selection = _useState6[0],
    setSelection = _useState6[1];
  var _useState7 = (0, _react.useState)({
      humanPart: "",
      bodyPart: {
        ref: "",
        label: ""
      },
      injury: {
        ref: "",
        label: ""
      },
      description: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    tempInjury = _useState8[0],
    setTempInjury = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    injuries = _useState10[0],
    setInjuries = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editIndex = _useState12[0],
    setEditIndex = _useState12[1];
  var _useState13 = (0, _react.useState)({
      bodyPart: "",
      injury: ""
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    errors = _useState14[0],
    setErrors = _useState14[1];

  // Memoized array of selected body parts
  var selectedParts = (0, _react.useMemo)(function () {
    return injuries.map(function (injury) {
      return injury.humanPart;
    });
  }, [injuries]);

  // Function to close the modal and reset temporary state
  var closeModal = function closeModal() {
    setIsModalOpen(false);
    setSelection(null);
    setTempInjury({
      humanPart: "",
      bodyPart: {
        ref: "",
        label: ""
      },
      injury: {
        ref: "",
        label: ""
      },
      description: ""
    });
    setEditIndex(null);
    setErrors({
      bodyPart: "",
      injury: ""
    });
  };

  // Function to get body part options based on selected human part
  var getBodyPartOptions = function getBodyPartOptions(humanPart) {
    switch (humanPart) {
      case "HEAD":
        return _types.HeadOptions;
      case "LEFT_HAND":
      case "RIGHT_HAND":
        return _types.ArmOptions;
      case "LEFT_LEG":
      case "RIGHT_LEG":
        return _types.LegOptions;
      case "BODY":
        return _types.BodyOptions;
      default:
        return [];
    }
  };

  // Event handlers
  var handleBodyPartChange = function handleBodyPartChange(event) {
    var selectedOption = getBodyPartOptions(tempInjury.humanPart).find(function (option) {
      return option.ref === event.target.value;
    });
    setTempInjury(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        bodyPart: {
          ref: event.target.value,
          label: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || ""
        }
      });
    });
    setErrors(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        bodyPart: ""
      });
    });
  };
  var handleInjuryChange = function handleInjuryChange(event) {
    var selectedOption = _types.injuryOptions.find(function (option) {
      return option.ref === event.target.value;
    });
    setTempInjury(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        injury: {
          ref: event.target.value,
          label: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || ""
        }
      });
    });
    setErrors(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        injury: ""
      });
    });
  };
  var handleDescriptionChange = function handleDescriptionChange(event) {
    setTempInjury(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        description: event.target.value
      });
    });
  };
  var validateForm = function validateForm() {
    var isValid = true;
    var newErrors = {
      bodyPart: "",
      injury: ""
    };
    if (!tempInjury.bodyPart.ref) {
      newErrors.bodyPart = "Body part is required";
      isValid = false;
    }
    if (!tempInjury.injury.ref) {
      newErrors.injury = "Injury type is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  var handleDone = function handleDone() {
    if (validateForm()) {
      if (editIndex !== null) {
        setInjuries(function (prev) {
          var updatedInjuries = _toConsumableArray(prev);
          updatedInjuries[editIndex] = tempInjury;
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      } else {
        setInjuries(function (prev) {
          var updatedInjuries = [].concat(_toConsumableArray(prev), [tempInjury]);
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      }
      closeModal();
    }
  };
  var handleRemove = function handleRemove(index) {
    setInjuries(function (prev) {
      var updatedInjuries = prev.filter(function (_, i) {
        return i !== index;
      });
      onInjuriyChange(updatedInjuries);
      return updatedInjuries;
    });
  };
  var handleEdit = function handleEdit(index) {
    setTempInjury(injuries[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };
  var handlePartClick = function handlePartClick(part, i) {
    var existingInjuryIndex = injuries.findIndex(function (injury) {
      return injury.humanPart === part.id;
    });
    if (existingInjuryIndex !== -1) {
      setTempInjury(injuries[existingInjuryIndex]);
      setEditIndex(existingInjuryIndex);
    } else {
      setTempInjury(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          humanPart: part.id,
          bodyPart: {
            ref: "",
            label: ""
          }
        });
      });
      setEditIndex(null);
    }
    setSelection({
      humanPart: part.id,
      index: i
    });
    setIsModalOpen(true);
  };

  // Render component
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px"
    }
  }, (selection || editIndex !== null) && isModalOpen && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", null, editIndex !== null ? "Edit Injury" : "Add Injury"), /*#__PURE__*/_react["default"].createElement("select", {
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      borderColor: errors.bodyPart ? "red" : "#ccc",
      width: "100%",
      marginBottom: "8px"
    },
    value: tempInjury.bodyPart.ref,
    onChange: handleBodyPartChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Select Body Part"), getBodyPartOptions(tempInjury.humanPart).map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.ref,
      value: option.ref
    }, option.label);
  })), errors.bodyPart && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "red",
      fontSize: "14px"
    }
  }, errors.bodyPart), /*#__PURE__*/_react["default"].createElement("select", {
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      borderColor: errors.injury ? "red" : "#ccc",
      width: "100%",
      marginBottom: "8px"
    },
    value: tempInjury.injury.ref,
    onChange: handleInjuryChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Select Injury"), _types.injuryOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.ref,
      value: option.ref
    }, option.label);
  })), errors.injury && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "red",
      fontSize: "14px"
    }
  }, errors.injury), /*#__PURE__*/_react["default"].createElement("textarea", {
    placeholder: "Description",
    value: tempInjury.description,
    onChange: handleDescriptionChange,
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      width: "100%",
      marginBottom: "8px"
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      marginTop: "16px",
      width: "100%",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    onClick: handleDone,
    disabled: !tempInjury.bodyPart.ref || !tempInjury.injury.ref
  }, editIndex !== null ? "Update" : "Done"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      marginTop: "8px",
      padding: "12px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    onClick: closeModal
  }, "Cancel"))), /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "16px"
    }
  }, "Select Area of Injury"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://www.svgrepo.com/show/76394/standing-human-body-silhouette.svg",
    alt: "Human Body",
    style: {
      width: "300px",
      height: "auto"
    }
  }), _types.options === null || _types.options === void 0 ? void 0 : _types.options.map(function (part, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: part.id,
      title: part.label,
      style: _objectSpread(_objectSpread({
        position: "absolute",
        backgroundColor: "transparent",
        cursor: "pointer",
        transition: "all 0.2s"
      }, hoverPart === part.id || selectedParts.includes(part.id) ? {
        border: "2px solid red"
      } : {
        border: "1px solid transparent"
      }), part.style),
      onMouseEnter: function onMouseEnter() {
        return setHoverPart(part.id);
      },
      onMouseLeave: function onMouseLeave() {
        return setHoverPart(null);
      },
      onClick: function onClick() {
        return handlePartClick(part, i);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "16px"
    }
  }, hoverPart ? /*#__PURE__*/_react["default"].createElement("span", null, (_options$find = _types.options.find(function (part) {
    return part.id === hoverPart;
  })) === null || _options$find === void 0 ? void 0 : _options$find.label) : /*#__PURE__*/_react["default"].createElement("span", null, "-")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "32px",
      width: "100%"
    }
  }, injuries.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "200px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Body Part"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Injury Type"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Description"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Action"))), /*#__PURE__*/_react["default"].createElement("tbody", null, injuries.map(function (field, fieldIndex) {
    var _field$bodyPart, _field$injury;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: fieldIndex
    }, /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid #ccc",
        padding: "8px"
      }
    }, ((_field$bodyPart = field.bodyPart) === null || _field$bodyPart === void 0 ? void 0 : _field$bodyPart.label) || ""), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid #ccc",
        padding: "8px"
      }
    }, ((_field$injury = field.injury) === null || _field$injury === void 0 ? void 0 : _field$injury.label) || ""), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid #ccc",
        padding: "8px"
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        display: "inline-block",
        maxWidth: "200px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      title: field.description || ""
    }, field.description || "")), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid #ccc",
        padding: "8px"
      }
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: "blue",
        fontSize: "24px",
        marginRight: "8px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return handleEdit(fieldIndex);
      }
    }, "Edit"), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: "red",
        fontSize: "24px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return handleRemove(fieldIndex);
      }
    }, "Delete")));
  })))) : /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "gray"
    }
  }, "No injuries added yet.")));
};
var _default = exports["default"] = BodyPartSelector;
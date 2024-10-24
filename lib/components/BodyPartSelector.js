"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _types = require("./types");
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Import necessary dependencies and components

// Define props interface for BodyPartSelector component
const BodyPartSelector = _ref => {
  let {
    onInjuriyChange
  } = _ref;
  // State variables
  const [hoverPart, setHoverPart] = (0, _react.useState)(null);
  const [isModalOpen, setIsModalOpen] = (0, _react.useState)(false);
  const [selection, setSelection] = (0, _react.useState)(null);
  const [tempInjury, setTempInjury] = (0, _react.useState)({
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
  const [injuries, setInjuries] = (0, _react.useState)([]);
  const [editIndex, setEditIndex] = (0, _react.useState)(null);
  const [errors, setErrors] = (0, _react.useState)({
    bodyPart: "",
    injury: ""
  });

  // Memoized array of selected body parts
  const selectedParts = (0, _react.useMemo)(() => {
    return injuries.map(injury => injury.humanPart);
  }, [injuries]);

  // Function to close the modal and reset temporary state
  const closeModal = () => {
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
  const getBodyPartOptions = humanPart => {
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
  const handleBodyPartChange = event => {
    const selectedOption = getBodyPartOptions(tempInjury.humanPart).find(option => option.ref === event.target.value);
    setTempInjury(prev => ({
      ...prev,
      bodyPart: {
        ref: event.target.value,
        label: selectedOption?.label || ""
      }
    }));
    setErrors(prev => ({
      ...prev,
      bodyPart: ""
    }));
  };
  const handleInjuryChange = event => {
    const selectedOption = _types.injuryOptions.find(option => option.ref === event.target.value);
    setTempInjury(prev => ({
      ...prev,
      injury: {
        ref: event.target.value,
        label: selectedOption?.label || ""
      }
    }));
    setErrors(prev => ({
      ...prev,
      injury: ""
    }));
  };
  const handleDescriptionChange = event => {
    setTempInjury(prev => ({
      ...prev,
      description: event.target.value
    }));
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
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
  const handleDone = () => {
    if (validateForm()) {
      if (editIndex !== null) {
        setInjuries(prev => {
          const updatedInjuries = [...prev];
          updatedInjuries[editIndex] = tempInjury;
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      } else {
        setInjuries(prev => {
          const updatedInjuries = [...prev, tempInjury];
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      }
      closeModal();
    }
  };
  const handleRemove = index => {
    setInjuries(prev => {
      const updatedInjuries = prev.filter((_, i) => i !== index);
      onInjuriyChange(updatedInjuries);
      return updatedInjuries;
    });
  };
  const handleEdit = index => {
    setTempInjury(injuries[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };
  const handlePartClick = (part, i) => {
    const existingInjuryIndex = injuries.findIndex(injury => injury.humanPart === part.id);
    if (existingInjuryIndex !== -1) {
      setTempInjury(injuries[existingInjuryIndex]);
      setEditIndex(existingInjuryIndex);
    } else {
      setTempInjury(prev => ({
        ...prev,
        humanPart: part.id,
        bodyPart: {
          ref: "",
          label: ""
        }
      }));
      setEditIndex(null);
    }
    setSelection({
      humanPart: part.id,
      index: i
    });
    setIsModalOpen(true);
  };

  // Render component
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    onClose: closeModal,
    isOpen: isModalOpen
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      textAlign: "center"
    }
  }, editIndex !== null ? "Edit Injury" : "Add Injury"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("select", {
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      borderColor: errors.bodyPart ? "red" : "#ccc",
      width: "50%",
      marginBottom: "8px"
    },
    value: tempInjury.bodyPart.ref,
    onChange: handleBodyPartChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select Body Part"), getBodyPartOptions(tempInjury.humanPart).map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.ref,
    value: option.ref
  }, option.label))), errors.bodyPart && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "red",
      fontSize: "14px"
    }
  }, errors.bodyPart), /*#__PURE__*/_react.default.createElement("select", {
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      borderColor: errors.injury ? "red" : "#ccc",
      width: "50%",
      marginBottom: "8px"
    },
    value: tempInjury.injury.ref,
    onChange: handleInjuryChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Select Injury"), _types.injuryOptions.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.ref,
    value: option.ref
  }, option.label))), errors.injury && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "red",
      fontSize: "14px"
    }
  }, errors.injury)), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: "Description",
    value: tempInjury.description,
    onChange: handleDescriptionChange,
    style: {
      padding: "8px",
      border: "1px solid",
      borderRadius: "4px",
      width: "97%",
      marginBottom: "8px",
      resize: "none"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      marginTop: "16px",
      width: "100px",
      padding: "12px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    onClick: handleDone,
    disabled: !tempInjury.bodyPart.ref || !tempInjury.injury.ref
  }, editIndex !== null ? "Update" : "Done"), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      marginTop: "16px",
      padding: "12px",
      width: "100px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    },
    onClick: closeModal
  }, "Cancel")))), /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "16px"
    }
  }, "Select Area of Injury"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://www.svgrepo.com/show/76394/standing-human-body-silhouette.svg",
    alt: "Human Body",
    style: {
      width: "300px",
      height: "auto"
    }
  }), _types.options?.map((part, i) => /*#__PURE__*/_react.default.createElement("div", {
    key: part.id,
    title: part.label,
    style: {
      position: "absolute",
      backgroundColor: "transparent",
      cursor: "pointer",
      transition: "all 0.2s",
      ...(hoverPart === part.id || selectedParts.includes(part.id) ? {
        border: "2px solid red"
      } : {
        border: "1px solid transparent"
      }),
      ...part.style
    },
    onMouseEnter: () => setHoverPart(part.id),
    onMouseLeave: () => setHoverPart(null),
    onClick: () => handlePartClick(part, i)
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: "16px"
    }
  }, hoverPart ? /*#__PURE__*/_react.default.createElement("span", null, _types.options.find(part => part.id === hoverPart)?.label) : /*#__PURE__*/_react.default.createElement("span", null, "-")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: "32px",
      width: "50%"
    }
  }, injuries.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: "200px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/_react.default.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Body Part"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Injury Type"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Description"), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, injuries.map((field, fieldIndex) => /*#__PURE__*/_react.default.createElement("tr", {
    key: fieldIndex
  }, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      border: "1px solid #ccc",
      padding: "8px",
      width: "25%"
    }
  }, field.bodyPart?.label || ""), /*#__PURE__*/_react.default.createElement("td", {
    style: {
      border: "1px solid #ccc",
      padding: "8px",
      width: "25%"
    }
  }, field.injury?.label || ""), /*#__PURE__*/_react.default.createElement("td", {
    style: {
      border: "1px solid #ccc",
      padding: "8px",
      width: "25%"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: "inline-block",
      maxWidth: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    title: field.description || ""
  }, field.description || "")), /*#__PURE__*/_react.default.createElement("td", {
    style: {
      display: "flex",
      justifyContent: "space-evenly",
      border: "1px solid #ccc",
      padding: "8px"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: "blue",
      color: "white",
      fontSize: "24px",
      marginRight: "8px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer"
    },
    onClick: () => handleEdit(fieldIndex)
  }, "Edit"), /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: "red",
      color: "white",
      fontSize: "24px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer"
    },
    onClick: () => handleRemove(fieldIndex)
  }, "Delete"))))))) : /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "gray",
      textAlign: "center"
    }
  }, "No injuries added yet.")));
};
var _default = exports.default = BodyPartSelector;
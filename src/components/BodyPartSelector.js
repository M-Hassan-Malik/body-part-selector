// Import necessary dependencies and components
import React, { useState, useMemo } from "react";
import {
  HeadOptions,
  ArmOptions,
  LegOptions,
  BodyOptions,
  injuryOptions,
  options,
} from "./types";
import Modal from "./Modal";

// Define props interface for BodyPartSelector component
const BodyPartSelector = ({ onInjuriyChange }) => {
  // State variables
  const [hoverPart, setHoverPart] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selection, setSelection] = useState(null);
  const [tempInjury, setTempInjury] = useState({
    humanPart: "",
    bodyPart: {
      ref: "",
      label: "",
    },
    injury: { ref: "", label: "" },
    description: "",
  });
  const [injuries, setInjuries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({ bodyPart: "", injury: "" });

  // Memoized array of selected body parts
  const selectedParts = useMemo(() => {
    return injuries.map((injury) => injury.humanPart);
  }, [injuries]);

  // Function to close the modal and reset temporary state
  const closeModal = () => {
    setIsModalOpen(false);
    setSelection(null);
    setTempInjury({
      humanPart: "",
      bodyPart: {
        ref: "",
        label: "",
      },
      injury: { ref: "", label: "" },
      description: "",
    });
    setEditIndex(null);
    setErrors({ bodyPart: "", injury: "" });
  };

  // Function to get body part options based on selected human part
  const getBodyPartOptions = (humanPart) => {
    switch (humanPart) {
      case "HEAD":
        return HeadOptions;
      case "LEFT_HAND":
      case "RIGHT_HAND":
        return ArmOptions;
      case "LEFT_LEG":
      case "RIGHT_LEG":
        return LegOptions;
      case "BODY":
        return BodyOptions;
      default:
        return [];
    }
  };

  // Event handlers
  const handleBodyPartChange = (event) => {
    const selectedOption = getBodyPartOptions(tempInjury.humanPart).find(
      (option) => option.ref === event.target.value
    );
    setTempInjury((prev) => ({
      ...prev,
      bodyPart: {
        ref: event.target.value,
        label: selectedOption?.label || "",
      },
    }));
    setErrors((prev) => ({ ...prev, bodyPart: "" }));
  };

  const handleInjuryChange = (event) => {
    const selectedOption = injuryOptions.find(
      (option) => option.ref === event.target.value
    );
    setTempInjury((prev) => ({
      ...prev,
      injury: {
        ref: event.target.value,
        label: selectedOption?.label || "",
      },
    }));
    setErrors((prev) => ({ ...prev, injury: "" }));
  };

  const handleDescriptionChange = (event) => {
    setTempInjury((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { bodyPart: "", injury: "" };

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
        setInjuries((prev) => {
          const updatedInjuries = [...prev];
          updatedInjuries[editIndex] = tempInjury;
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      } else {
        setInjuries((prev) => {
          const updatedInjuries = [...prev, tempInjury];
          onInjuriyChange(updatedInjuries);
          return updatedInjuries;
        });
      }
      closeModal();
    }
  };

  const handleRemove = (index) => {
    setInjuries((prev) => {
      const updatedInjuries = prev.filter((_, i) => i !== index);
      onInjuriyChange(updatedInjuries);
      return updatedInjuries;
    });
  };

  const handleEdit = (index) => {
    setTempInjury(injuries[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handlePartClick = (part, i) => {
    const existingInjuryIndex = injuries.findIndex(
      (injury) => injury.humanPart === part.id
    );
    if (existingInjuryIndex !== -1) {
      setTempInjury(injuries[existingInjuryIndex]);
      setEditIndex(existingInjuryIndex);
    } else {
      setTempInjury((prev) => ({
        ...prev,
        humanPart: part.id,
        bodyPart: {
          ref: "",
          label: "",
        },
      }));
      setEditIndex(null);
    }
    setSelection({
      humanPart: part.id,
      index: i,
    });
    setIsModalOpen(true);
  };

  // Render component
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
    >
      {/* Modal for adding/editing injuries */}
      <Modal onClose={closeModal} isOpen={isModalOpen}>
        <div>
          <h2 style={{ textAlign: "center" }}>
            {editIndex !== null ? "Edit Injury" : "Add Injury"}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <select
              style={{
                padding: "8px",
                border: "1px solid",
                borderRadius: "4px",
                borderColor: errors.bodyPart ? "red" : "#ccc",
                width: "50%",
                marginBottom: "8px",
              }}
              value={tempInjury.bodyPart.ref}
              onChange={handleBodyPartChange}
            >
              <option value="">Select Body Part</option>
              {getBodyPartOptions(tempInjury.humanPart).map((option) => (
                <option key={option.ref} value={option.ref}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.bodyPart && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.bodyPart}
              </p>
            )}
            <select
              style={{
                padding: "8px",
                border: "1px solid",
                borderRadius: "4px",
                borderColor: errors.injury ? "red" : "#ccc",
                width: "50%",
                marginBottom: "8px",
              }}
              value={tempInjury.injury.ref}
              onChange={handleInjuryChange}
            >
              <option value="">Select Injury</option>
              {injuryOptions.map((option) => (
                <option key={option.ref} value={option.ref}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.injury && (
              <p style={{ color: "red", fontSize: "14px" }}>{errors.injury}</p>
            )}
          </div>
          <textarea
            placeholder="Description"
            value={tempInjury.description}
            onChange={handleDescriptionChange}
            style={{
              padding: "8px",
              border: "1px solid",
              borderRadius: "4px",
              width: "97%",
              marginBottom: "8px",
              resize: "none",
            }}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                marginTop: "16px",
                width: "100px",
                padding: "12px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleDone}
              disabled={!tempInjury.bodyPart.ref || !tempInjury.injury.ref}
            >
              {editIndex !== null ? "Update" : "Done"}
            </button>
            <button
              style={{
                marginTop: "16px",
                padding: "12px",
                width: "100px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Select Area of Injury
      </h1>
      {/* Human body image with clickable areas */}
      <div style={{ position: "relative" }}>
        <img
          src="https://www.svgrepo.com/show/76394/standing-human-body-silhouette.svg"
          alt="Human Body"
          style={{ width: "300px", height: "auto" }}
        />
        {options?.map((part, i) => (
          <div
            key={part.id}
            title={part.label}
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "all 0.2s",
              ...(hoverPart === part.id || selectedParts.includes(part.id)
                ? { border: "2px solid red" }
                : { border: "1px solid transparent" }),
              ...part.style,
            }}
            onMouseEnter={() => setHoverPart(part.id)}
            onMouseLeave={() => setHoverPart(null)}
            onClick={() => handlePartClick(part, i)}
          />
        ))}
      </div>
      {/* Display hovered part label */}
      <div style={{ marginTop: "16px" }}>
        {hoverPart ? (
          <span>{options.find((part) => part.id === hoverPart)?.label}</span>
        ) : (
          <span>-</span>
        )}
      </div>
      {/* Table of added injuries */}
      <div style={{ marginTop: "32px", width: "50%" }}>
        {injuries.length > 0 ? (
          <div style={{ height: "200px", overflowY: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Body Part
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Injury Type
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Description
                  </th>
                  <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {injuries.map((field, fieldIndex) => (
                  <tr key={fieldIndex}>
                    <td
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        width: "25%",
                      }}
                    >
                      {field.bodyPart?.label || ""}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        width: "25%",
                      }}
                    >
                      {field.injury?.label || ""}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ccc",
                        padding: "8px",
                        width: "25%",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                        title={field.description || ""}
                      >
                        {field.description || ""}
                      </span>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        border: "1px solid #ccc",
                        padding: "8px",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          fontSize: "24px",
                          marginRight: "8px",
                          padding: "8px 16px",
                          border: "none",
                          borderRadius: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleEdit(fieldIndex)}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          fontSize: "24px",
                          padding: "8px 16px",
                          border: "none",
                          borderRadius: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemove(fieldIndex)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: "gray", textAlign: "center" }}>
            No injuries added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default BodyPartSelector;

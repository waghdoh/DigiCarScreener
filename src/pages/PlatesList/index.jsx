import React, { useState, useEffect } from "react";

const PlatesList = () => {
  const [plates, setPlates] = useState([]);
  const [plateInput, setPlateInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Load stored plates from localStorage when the component mounts
  useEffect(() => {
    const storedPlates = localStorage.getItem("licensePlates");
    console.log(storedPlates);
    if (storedPlates != "[]") {
      setPlates(JSON.parse(storedPlates));
    } else {
      const defaultPlates = ["DEF1234", "BCD4567"];
      saveToLocalStorage(defaultPlates);
    }
  }, []);

  // USA License Plate Validation (basic)
  const isValidUSALicensePlate = (plate) => {
    const regex = /^[A-Z0-9]{1,7}$/i; // Allows alphanumeric up to 7 characters
    return regex.test(plate);
  };

  // Save plates to localStorage
  const saveToLocalStorage = (updatedPlates) => {
    localStorage.setItem("licensePlates", JSON.stringify(updatedPlates));
  };

  // Add or Update License Plate
  const handleAddOrUpdate = () => {
    if (!isValidUSALicensePlate(plateInput)) {
      setErrorMessage(
        "Invalid License Plate. Only alphanumeric, up to 7 characters."
      );
      return;
    }
    setErrorMessage("");

    // Check for duplicate license plate
    if (plates?.includes(plateInput) && editingIndex === null) {
      setErrorMessage("License Plate already exists in the list.");
      return;
    }

    let updatedPlates;
    if (editingIndex !== null) {
      // Edit existing plate
      updatedPlates = [...plates];
      updatedPlates[editingIndex] = plateInput;
      setEditingIndex(null);
    } else {
      // Add new plate
      updatedPlates = [...plates, plateInput];
    }

    setPlates(updatedPlates);
    saveToLocalStorage(updatedPlates); // Save to localStorage
    setPlateInput("");
  };

  // Edit License Plate
  const handleEdit = (index) => {
    setPlateInput(plates[index]);
    setEditingIndex(index);
  };

  // Delete License Plate
  const handleDelete = (index) => {
    const updatedPlates = plates.filter((_, i) => i !== index);
    setPlates(updatedPlates);
    saveToLocalStorage(updatedPlates); // Save to localStorage
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Portal</h1>
      <br></br>
      <h2 style={styles.heading2}>Predefined List Management</h2>
      <br></br>
      <br></br>
      <div style={styles.form}>
        <input
          type="text"
          value={plateInput}
          onChange={(e) => setPlateInput(e.target.value.toUpperCase())}
          placeholder="Enter License Plate"
          style={styles.input}
        />
        <button onClick={handleAddOrUpdate} style={styles.buttonAdd}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>License Plate</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plates?.map((plate, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{plate}</td>
              <td style={styles.tableCell}>
                <button
                  onClick={() => handleEdit(index)}
                  style={styles.buttonEdit}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={styles.buttonDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "36px",
  },
  heading2: {
    textAlign: "center",
    color: "#333",
    fontSize: "26px",
  },
  form: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "10px",
    width: "300px",
  },
  buttonAdd: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonEdit: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    marginRight: "10px",
    cursor: "pointer",
  },
  buttonDelete: {
    padding: "8px 12px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableHeader: {
    backgroundColor: "#f8f9fa",
    fontWeight: "bold",
    padding: "10px",
    border: "1px solid #dee2e6",
  },
  tableCell: {
    padding: "10px",
    border: "1px solid #dee2e6",
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
};

export default PlatesList;

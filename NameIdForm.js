import React, { useState } from "react";
import validateForm from "../validation";

function NameIdForm() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      {submitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            name="id"
            placeholder="Enter your ID"
            value={formData.id}
            onChange={handleChange}
          />
          {errors.id && <p className="error">{errors.id}</p>}

          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            value={formData.honeypot}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default NameIdForm;

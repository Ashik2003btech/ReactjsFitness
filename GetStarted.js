import React, { useState } from 'react';

function GetStarted() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for getting started!');
    // Here you can add logic to send data to backend or reset form
    setFormData({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#28a745' }}>Get Started with FitLife</h2>
      <p>Track your workouts, monitor your progress, and stay motivated.</p>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        marginTop: '20px'
      }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit" style={{
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          padding: '10px',
          marginTop: '10px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetStarted;

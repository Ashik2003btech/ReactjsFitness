import React, { useState } from 'react';

function Home() {
  const defaultUser = {
    name: 'Abcd',
    age: 21,
    weight: '100 kg',
    goal: 'Lose fat and build muscle',
  };

  const [searchName, setSearchName] = useState('');
  const [showUser, setShowUser] = useState(false);

  const handleSearch = () => {
    if (searchName.toLowerCase() === defaultUser.name.toLowerCase()) {
      setShowUser(true);
    } else {
      setShowUser(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to FitLife</h1>
      <p>Your journey to a healthier life starts here.</p>

      <div style={{ marginTop: '20px', maxWidth: '600px' }}>
        <h2>Why Choose FitLife?</h2>
        <ul>
          <li>🏋️ Track your workouts and progress easily</li>
          <li>🥗 Set and follow personalized fitness goals</li>
          <li>📊 Visualize data with graphs and progress bars</li>
          <li>💪 Stay consistent with daily motivation</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <input
          type="text"
          placeholder="Search user by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch} style={{ marginLeft: '10px' }}>
          Find User
        </button>
      </div>

      {showUser ? (
        <div
          style={{
            marginTop: '20px',
            backgroundColor: '#f0f0f0',
            padding: '20px',
            borderRadius: '8px',
            display: 'inline-block',
            textAlign: 'left',
          }}
        >
          <h3>User Details</h3>
          <p><strong>Name:</strong> {defaultUser.name}</p>
          <p><strong>Age:</strong> {defaultUser.age}</p>
          <p><strong>Weight:</strong> {defaultUser.weight}</p>
          <p><strong>Goal:</strong> {defaultUser.goal}</p>
        </div>
      ) : searchName ? (
        <p style={{ marginTop: '20px', color: 'red' }}>User not found.</p>
      ) : null}
    </div>
  );
}

export default Home;

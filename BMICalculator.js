import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightInMeters = height / 100;
    const result = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(result);

    let cat = '';
    if (result < 18.5) cat = 'Underweight';
    else if (result < 25) cat = 'Normal';
    else if (result < 30) cat = 'Overweight';
    else cat = 'Obese';
    setCategory(cat);
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>

      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;

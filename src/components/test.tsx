import React, { useState } from "react";

const ReviewGenerator = () => {
  const [advantages, setAdvantages] = useState([]);
  const [disadvantages, setDisadvantages] = useState([]);
  const [type, setType] = useState("Laptop"); // Default type

  // Specifications state with dynamic keys based on type
  const [specifications, setSpecifications] = useState({
    Laptop: {
      CPU: "",
      GPU: "",
      RAM: "",
    },
    Dupa: {
      RAZ: "",
    },
    // Add other types and their default keys as needed
  });

  const handleAddAdvantage = () => {
    setAdvantages([...advantages, ""]);
  };

  const handleAdvantageChange = (index, value) => {
    const updatedAdvantages = [...advantages];
    updatedAdvantages[index] = value;
    setAdvantages(updatedAdvantages);
  };

  const handleRemoveAdvantage = (index) => {
    const updatedAdvantages = [...advantages];
    updatedAdvantages.splice(index, 1);
    setAdvantages(updatedAdvantages);
  };

  const handleAddDisadvantage = () => {
    setDisadvantages([...disadvantages, ""]);
  };

  const handleDisadvantageChange = (index, value) => {
    const updatedDisadvantages = [...disadvantages];
    updatedDisadvantages[index] = value;
    setDisadvantages(updatedDisadvantages);
  };

  const handleRemoveDisadvantage = (index) => {
    const updatedDisadvantages = [...disadvantages];
    updatedDisadvantages.splice(index, 1);
    setDisadvantages(updatedDisadvantages);
  };

  const handleSpecificationChange = (key, value) => {
    setSpecifications({
      ...specifications,
      [type]: {
        ...specifications[type],
        [key]: value,
      },
    });
  };

  const generateReview = () => {
    const reviewData = {
      type,
      specifications: specifications[type],
      advantages,
      disadvantages,
    };
    // console.log(JSON.stringify(reviewData));
  };

  return (
    <div>
      <h2>Review Generator</h2>

      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Laptop">Laptop</option>
          {/* Add other types as needed */}
        </select>
      </div>

      <div>
        <h3>Advantages</h3>
        {advantages.map((advantage, index) => (
          <div key={index}>
            <input
              type="text"
              value={advantage}
              onChange={(e) => handleAdvantageChange(index, e.target.value)}
            />
            <button onClick={() => handleRemoveAdvantage(index)}>-</button>
          </div>
        ))}
        <button onClick={handleAddAdvantage}>+ Add Advantage</button>
      </div>

      <div>
        <h3>Disadvantages</h3>
        {disadvantages.map((disadvantage, index) => (
          <div key={index}>
            <input
              type="text"
              value={disadvantage}
              onChange={(e) => handleDisadvantageChange(index, e.target.value)}
            />
            <button onClick={() => handleRemoveDisadvantage(index)}>-</button>
          </div>
        ))}
        <button onClick={handleAddDisadvantage}>+ Add Disadvantage</button>
      </div>

      <div>
        <h3>Specifications</h3>
        {Object.keys(specifications[type]).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              type="text"
              value={specifications[type][key]}
              onChange={(e) => handleSpecificationChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button onClick={generateReview}>Generate Review</button>
    </div>
  );
};

export default ReviewGenerator;

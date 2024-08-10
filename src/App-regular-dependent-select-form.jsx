import React, { useState } from "react";

const locations = [
  { city: "Belmont", state: "California" },
  { city: "Bellview", state: "Florida" },
  { city: "Bellwood", state: "Illinois" },
  { city: "Abington", state: "Massachusetts" },
  { city: "Belmont", state: "Massachusetts" },
  { city: "Belmont", state: "Massachusetts" },
  { city: "Aberdeen", state: "Maryland" },
  { city: "Belmont", state: "New Hampshire" },
  { city: "Bellmawr", state: "New Jersey" },
  { city: "Belmar", state: "New Jersey" },
  { city: "Bellmore", state: "New York" },
  { city: "Aberdeen", state: "Mississippi" },
  { city: "Abbeville", state: "Louisiana" },
  { city: "Belmont", state: "North Carolina" },
  { city: "Aberdeen", state: "South Dakota" },
  { city: "Abilene", state: "Kansas" },
  { city: "Abilene", state: "Texas" },
  { city: "Bellmead", state: "Texas" },
  { city: "Abingdon", state: "Virginia" },
  { city: "Aberdeen", state: "Washington" },
];

const App = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const states = [...new Set(locations.map((location) => location.state))];
  const cities = locations
    .filter((location) => location.state === selectedState)
    .map((location) => location.city);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          State:
          <select value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          City:
          <select
            value={selectedCity}
            onChange={handleCityChange}
            disabled={!selectedState}
          >
            <option value="">Select a city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default App;

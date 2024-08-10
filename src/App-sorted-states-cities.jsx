import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const data = [
  { city: "Abbeville", state: "Louisiana" },
  { city: "Aberdeen", state: "Maryland" },
  { city: "Aberdeen", state: "Mississippi" },
  { city: "Aberdeen", state: "South Dakota" },
  { city: "Aberdeen", state: "Washington" },
  { city: "Abilene", state: "Texas" },
  { city: "Abilene", state: "Kansas" },
  { city: "Abingdon", state: "Virginia" },
  { city: "Abington", state: "Massachusetts" },
  { city: "Bellmawr", state: "New Jersey" },
  { city: "Bellmead", state: "Texas" },
  { city: "Bellmore", state: "New York" },
  { city: "Bellview", state: "Florida" },
  { city: "Bellwood", state: "Illinois" },
  { city: "Belmar", state: "New Jersey" },
  { city: "Belmont", state: "Massachusetts" },
  { city: "Belmont", state: "New Hampshire" },
  { city: "Belmont", state: "North Carolina" },
  { city: "Belmont", state: "California" },
];

const sortedData = data.sort((a, b) => {
  if (a.state < b.state) return -1;
  if (a.state > b.state) return 1;
  if (a.city < b.city) return -1;
  if (a.city > b.city) return 1;
  return 0;
});

console.log(sortedData);
//Texas has 2 cities.

// Your sorted data
// const sortedData = [
//   { city: "Abbeville", state: "Louisiana" },
//   { city: "Aberdeen", state: "Maryland" },
//   { city: "Aberdeen", state: "Mississippi" },
//   { city: "Aberdeen", state: "South Dakota" },
//   { city: "Aberdeen", state: "Washington" },
//   { city: "Abilene", state: "Texas" },
//   { city: "Abilene", state: "Kansas" },
//   { city: "Abingdon", state: "Virginia" },
//   { city: "Abington", state: "Massachusetts" },
//   { city: "Bellmawr", state: "New Jersey" },
//   { city: "Bellmead", state: "Texas" },
//   { city: "Bellmore", state: "New York" },
//   { city: "Bellview", state: "Florida" },
//   { city: "Bellwood", state: "Illinois" },
//   { city: "Belmar", state: "New Jersey" },
//   { city: "Belmont", state: "Massachusetts" },
//   { city: "Belmont", state: "New Hampshire" },
//   { city: "Belmont", state: "North Carolina" },
//   { city: "Belmont", state: "California" },
// ];

const App = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const selectedState = watch("state");

  useEffect(() => {
    // Extract unique states from sorted data
    const uniqueStates = [
      ...new Set(sortedData.map((item) => item.state)),
    ].sort();
    setStates(uniqueStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Filter cities based on the selected state
      const filteredCities = sortedData
        .filter((item) => item.state === selectedState)
        .map((item) => item.city);
      setCities(filteredCities);
      // Reset city if the selected state changes
      setValue("city", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="state">State</label>
      <select {...register("state")} id="state">
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label htmlFor="city">City</label>
      <select {...register("city")} id="city" disabled={!selectedState}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;

import React, { useState } from "react";
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
];

const App = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const formValues = watch();

  React.useEffect(() => {
    // Extract unique states from data
    const uniqueStates = [...new Set(data.map((item) => item.state))].sort();
    setStates(uniqueStates);
  }, []);

  React.useEffect(() => {
    if (formValues.state) {
      // Filter cities based on the selected state
      const filteredCities = data
        .filter((item) => item.state === formValues.state)
        .map((item) => item.city);
      setCities(filteredCities);
      // Reset city if the selected state changes
      setValue("city", "");
    }
  }, [formValues.state, setValue]);

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
      <select {...register("city")} id="city" disabled={!formValues.state}>
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

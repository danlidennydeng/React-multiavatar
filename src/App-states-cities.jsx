import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const App = () => {
  const { control, watch } = useForm();
  const [cityOptions, setCityOptions] = useState([]);

  const stateOptions = [
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "arizona", label: "Arizona" },
  ];

  const cityMapping = {
    pennsylvania: [
      "Philadelphia",
      "Pittsburgh",
      "Allentown",
      "Erie",
      "Reading",
      "Scranton",
      "Bethlehem",
      "Lancaster",
      "Harrisburg",
      "Altoona",
      "York",
      "State College",
      "Wilkes-Barre",
    ],
    arizona: [
      "Phoenix",
      "Tucson",
      "Mesa",
      "Chandler",
      "Glendale",
      "Scottsdale",
      "Gilbert",
      "Tempe",
      "Peoria",
      "Surprise",
      "Yuma",
      "Avondale",
      "Goodyear",
      "Flagstaff",
      "Buckeye",
      "Lake Havasu City",
      "Casa Grande",
      "Sierra Vista",
      "Maricopa",
      "Oro Valley",
      "Prescott",
      "Bullhead City",
      "Prescott Valley",
      "Marana",
      "Apache Junction",
    ],
  };

  const selectedState = watch("state");

  useEffect(() => {
    if (selectedState) {
      setCityOptions(cityMapping[selectedState.toLowerCase()]);
    } else {
      setCityOptions([]);
    }
  }, [selectedState]);

  return (
    <form>
      <div>
        <label>State:</label>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select State...</option>
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div>
        <label>City:</label>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="">Select City...</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          )}
        />
      </div>
    </form>
  );
};

export default App;

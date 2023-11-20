"use client";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={changeHandler}>
      <option value="" disabled>
        Select a country
      </option>
      {options.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </select>
  );
}

export default CountrySelector;

//   return <Select options={options} value={value} onChange={changeHandler} />;

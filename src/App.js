import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AutoComplete, Input } from "antd";
import dataSource from "./dataSource";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState(0.0);
  const [options, setOptions] = useState([]);

  const onSearch = (val) => {
    let filtered = dataSource.filter(
      (obj) => obj.key !== 0 && obj.value.toString().toLowerCase().includes(val)
    );
    setOptions(filtered);
  };
  const onSelect = (val, option) => {
    setCity(option.value);
    setCountry(option.country);
  };

  return (
    <div className="App">
      <h1>React, Redux, Ant design Test</h1>
      <h4>Simple autompletion task</h4>
      <AutoComplete
        options={options}
        onSelect={(val, option) => onSelect(val, option)}
        onSearch={onSearch}
      >
        <Input.Search size="large" placeholder="search fruit" />
      </AutoComplete>
      <p>
        <strong>City:</strong> {city}
        <br />
        <strong>Country:</strong> {country}
      </p>
    </div>
  );
}

export default App;

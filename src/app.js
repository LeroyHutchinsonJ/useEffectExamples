import React, { useState, useEffect } from "react";
import "./styles.css";
import LogEffect from "./logEffect";
import Reddit from "./reddit";

export default function App() {
  const [inputValue, setInputValue] = useState("reactjs");

  const [subReddit, setSubReddit] = useState(inputValue);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return <Reddit className="App" />;
}

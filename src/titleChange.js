import React, { useState, useEffect } from "react";
import "./styles.css";

var TitleChange = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = input;
  }, [input]);

  var clickHandler = () => {
    console.log("You Clicked Me!");
  };

  return (
    <form className="App" onClick={() => clickHandler()}>
      <input value={input} onChange={e => setInput(e.target.value)} />
    </form>
  );
};

export default TitleChange;

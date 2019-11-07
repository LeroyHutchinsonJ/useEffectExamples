import React, { useState, useEffect } from "react";
import "./styles.css";

var TitleChange = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = input;
  }, [input]);

  return (
    <form className="App">
      <input value={input} onChange={e => setInput(e.target.value)} />
    </form>
  );
};

export default TitleChange;

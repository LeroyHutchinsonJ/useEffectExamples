import React, { useState, useEffect, useRef } from "react";

var LogEffect = () => {
  var [value, setValue] = useState("");
  var inputRef = useRef();

  useEffect(() => {
    console.log("Component Mount");

    return ()=> console.log("Component Unmount");

  }, []);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default LogEffect;

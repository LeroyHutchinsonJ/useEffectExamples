import React, { useState, useEffect, useRef } from "react";

var LogEffect = () => {
  var [value, setValue] = useState("");
  var inputRef = useRef();

  useEffect(() => {
    console.log("render");
    inputRef.current.focus();
  }, [inputRef]);
  //Stopped at page 176, need to research the purpose of that onChange, pretty sure I could I could do it simpler
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default LogEffect;
